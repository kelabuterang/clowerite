import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Proxy / Scraper endpoint for fetching remote articles without browser CORS restrictions
  app.all('/api/fetch-article', async (req, res) => {
    const url = (req.query.url as string) || (req.body?.url as string);

    if (!url || typeof url !== 'string') {
      res.status(400).json({ success: false, error: 'URL parameter is required' });
      return;
    }

    try {
      // Validate URL format
      const targetUrl = new URL(url.trim());
      if (!['http:', 'https:'].includes(targetUrl.protocol)) {
        res.status(400).json({ success: false, error: 'Invalid URL protocol. Must be http or https.' });
        return;
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const response = await fetch(targetUrl.toString(), {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'id,en-US,en;q=0.9',
          'Cache-Control': 'no-cache'
        }
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        res.status(response.status).json({
          success: false,
          error: `Gagal mengakses website (${response.status}: ${response.statusText})`
        });
        return;
      }

      const html = await response.text();

      // Extract title using regex
      let title = '';
      const ogTitleMatch = html.match(/<meta\s+(?:property|name)=["']og:title["']\s+content=["']([^"']+)["']/i)
        || html.match(/<meta\s+content=["']([^"']+)["']\s+(?:property|name)=["']og:title["']/i);
      if (ogTitleMatch && ogTitleMatch[1]) {
        title = ogTitleMatch[1].trim();
      } else {
        const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
        if (titleMatch && titleMatch[1]) {
          title = titleMatch[1].trim();
        }
      }

      // Clean title from site suffixes (e.g. " - Kompas.com" or " | The Conversation")
      if (title) {
        title = title.replace(/\s*[-|–—]\s*[^|–—]+$/, '').trim();
      }

      // Extract Author
      let author = '';
      const authorMatch = html.match(/<meta\s+(?:property|name)=["'](?:author|article:author)["']\s+content=["']([^"']+)["']/i)
        || html.match(/<meta\s+content=["']([^"']+)["']\s+(?:property|name)=["'](?:author|article:author)["']/i);
      if (authorMatch && authorMatch[1]) {
        author = authorMatch[1].trim();
      }

      // Clean HTML to extract paragraphs
      let cleanHtml = html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
        .replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, '')
        .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '')
        .replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, '')
        .replace(/<header\b[^<]*(?:(?!<\/header>)<[^<]*)*<\/header>/gi, '')
        .replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, '')
        .replace(/<aside\b[^<]*(?:(?!<\/aside>)<[^<]*)*<\/aside>/gi, '')
        .replace(/<div\b[^>]*class=["'][^"']*(?:ad-|ads|advert|banner|sponsored|newsletter|related-post|social-share)[^"']*["'][^>]*>[\s\S]*?<\/div>/gi, '');

      // Extract text inside <article> or <main> if present, otherwise body
      const articleBlockMatch = cleanHtml.match(/<article[^>]*>([\s\S]*?)<\/article>/i)
        || cleanHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
      
      const contentSource = articleBlockMatch ? articleBlockMatch[1] : cleanHtml;

      // Extract <p> tags
      const pMatches = contentSource.match(/<p\b[^>]*>([\s\S]*?)<\/p>/gi) || [];
      const rawParagraphs: string[] = [];

      const isNoiseOrAdParagraph = (str: string): boolean => {
        const lower = str.toLowerCase().trim();
        if (lower.length < 25) return true;
        if (/^[\s\d.,©-]*$/.test(lower)) return true;

        // Indonesian Read More / Ads / Social filters
        if (/^(?:baca\s+juga|baca\s+selengkapnya|simak\s+juga|lihat\s+juga|artikel\s+terkait|berita\s+terkait|baca\s+berita|klik\s+di\s+sini|baca\s+kelanjutan|pilihan\s+editor)\s*[:\-–—]/i.test(lower)) return true;
        if (/^(?:foto|photo|credit|image\s+credit|sumber\s+foto|ilustrasi|tangkapan\s+layar)\s*[:\-–—]/i.test(lower)) return true;
        if (/dapatkan\s+update\s+berita|ikuti\s+saluran\s+whatsapp|gabung\s+kompas|download\s+aplikasi|unduh\s+aplikasi|ikuti\s+kami\s+di|bagikan\s+artikel\s+ini/i.test(lower)) return true;
        if (/(?:iklan|advertisement|sponsored\s+content|pariwara|promoted\s+post|halaman\s+selanjutnya|next\s+page)/i.test(lower)) return true;
        if (/artikel\s+ini\s+tayang\s+perdana|republished\s+from\s+the\s+conversation\s+under\s+creative\s+commons/i.test(lower)) return true;
        if (/hak\s+cipta\s+dilindungi|all\s+rights\s+reserved|terms\s+of\s+service|privacy\s+policy|kebijakan\s+privasi|syarat\s+dan\s+ketentuan/i.test(lower)) return true;

        // English Read More / Promo filters
        if (/^(?:read\s+more|also\s+read|related\s+articles?|see\s+also|recommended\s+reading|suggested\s+reading|don['’]t\s+miss|read\s+next|continue\s+reading)\s*[:\-–—]/i.test(lower)) return true;
        if (/sign\s+up\s+for\s+(?:our\s+)?newsletter|subscribe\s+to|follow\s+us\s+on|leave\s+a\s+comment|share\s+this\s+story/i.test(lower)) return true;

        return false;
      };

      for (const p of pMatches) {
        let textOnly = p
          .replace(/<[^>]+>/g, ' ')
          .replace(/&nbsp;/g, ' ')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/\s+/g, ' ')
          .trim();

        // Strip embedded inline "(Baca juga: ...)" or "[Baca juga: ...]"
        textOnly = textOnly
          .replace(/\[\s*(?:Baca\s+juga|Read\s+more|Simak\s+juga)[^\]]+\]/gi, '')
          .replace(/\(\s*(?:Baca\s+juga|Read\s+more|Simak\s+juga)[^)]+\)/gi, '')
          .trim();

        if (!isNoiseOrAdParagraph(textOnly)) {
          rawParagraphs.push(textOnly);
        }
      }

      const paragraphs = rawParagraphs;

      // Fallback: If no paragraphs extracted, extract readable line chunks
      if (paragraphs.length === 0) {
        const bodyText = contentSource
          .replace(/<[^>]+>/g, '\n')
          .replace(/&nbsp;/g, ' ')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/\n\s*\n+/g, '\n\n');

        const chunks = bodyText.split('\n\n')
          .map(s => s.trim().replace(/\s+/g, ' '))
          .filter(s => s.length >= 40 && !s.toLowerCase().includes('cookie') && !s.toLowerCase().includes('terms of'));
        
        paragraphs.push(...chunks);
      }

      const fullText = paragraphs.join('\n\n');
      const totalWords = fullText.split(/\s+/).filter(Boolean).length;

      // Detect language
      const indonesianMarkers = ['yang', 'dengan', 'dalam', 'untuk', 'pada', 'adalah', 'bahwa', 'tersebut', 'dari', 'oleh'];
      const textSample = fullText.toLowerCase().slice(0, 1000);
      let idScore = 0;
      for (const m of indonesianMarkers) {
        const regex = new RegExp(`\\b${m}\\b`, 'g');
        const matches = textSample.match(regex);
        if (matches) idScore += matches.length;
      }

      const language: 'id' | 'en' = idScore >= 3 ? 'id' : 'en';

      res.json({
        success: true,
        title: title || `Artikel dari ${targetUrl.hostname}`,
        author: author || undefined,
        hostname: targetUrl.hostname,
        sourceUrl: targetUrl.toString(),
        paragraphs: paragraphs.length > 0 ? paragraphs : ['Gagal mengekstrak paragraf teks secara otomatis.'],
        wordCount: totalWords,
        language
      });
    } catch (err: any) {
      console.error('Fetch article error:', err);
      res.status(500).json({
        success: false,
        error: err.name === 'AbortError' ? 'Koneksi ke website melebihi batas waktu (timeout).' : (err.message || 'Gagal mengimpor dari URL.')
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
