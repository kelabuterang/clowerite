import { EnglishArticle, IndonesianArticle, IsianQuestion, MultipleChoiceQuestion, TrueFalseQuestion, VocabItem } from '../types';

export interface SplitArticleResult {
  title: string;
  content: string[];
  wordCount: number;
  language: 'id' | 'en';
  category: string;
  sourceNote?: string;
}

export type SplitMode = 'auto' | 'headings' | 'words' | 'single';

/**
 * Filter out advertisements, "Read more / Baca juga", social sharing snippets, and cookie notices
 */
export function isNoiseOrAdParagraph(str: string): boolean {
  const lower = str.toLowerCase().trim();
  if (lower.length < 20) return true;
  if (/^[\s\d.,©\-–—•|*#~]*$/.test(lower)) return true;

  // Indonesian Read More / Ads / Social filters
  if (/^(?:baca\s+juga|baca\s+selengkapnya|simak\s+juga|lihat\s+juga|artikel\s+terkait|berita\s+terkait|baca\s+berita|klik\s+di\s+sini|baca\s+kelanjutan|pilihan\s+editor|topik\s+terkait|rekomendasi\s+bacaan|selengkapnya\s+baca|tonton\s+video)\s*[:\-–—]/i.test(lower)) return true;
  if (/^(?:baca\s+juga|simak\s+juga|lihat\s+juga|baca\s+selengkapnya)\s+[A-Z0-9"“']/i.test(str.trim())) return true;
  if (/^(?:foto|photo|credit|image\s+credit|sumber\s+foto|ilustrasi|tangkapan\s+layar|infografis|grafis)\s*[:\-–—]/i.test(lower)) return true;
  if (/dapatkan\s+update\s+berita|ikuti\s+saluran\s+whatsapp|gabung\s+kompas|download\s+aplikasi|unduh\s+aplikasi|ikuti\s+kami\s+di|bagikan\s+artikel\s+ini|tulis\s+komentar|baca\s+juga\s+artikel/i.test(lower)) return true;
  if (/(?:iklan|advertisement|sponsored\s+content|pariwara|promoted\s+post|halaman\s+selanjutnya|next\s+page|baca\s+halaman\s+selanjutnya|geser\s+ke\s+atas)/i.test(lower)) return true;
  if (/artikel\s+ini\s+tayang\s+perdana|republished\s+from\s+the\s+conversation\s+under\s+creative\s+commons|artikel\s+ini\s+sudah\s+tayang\s+di/i.test(lower)) return true;
  if (/hak\s+cipta\s+dilindungi|all\s+rights\s+reserved|terms\s+of\s+service|privacy\s+policy|kebijakan\s+privasi|syarat\s+dan\s+ketentuan|pedoman\s+media\s+siber/i.test(lower)) return true;
  if (/^(?:sumber|penulis|editor|reporter|redaktur)\s*[:\-–—]\s*[a-zA-Z\s.,]+$/i.test(lower)) return true;

  // English Read More / Promo filters
  if (/^(?:read\s+more|also\s+read|related\s+articles?|related\s+stories?|see\s+also|recommended\s+reading|suggested\s+reading|don['’]t\s+miss|read\s+next|continue\s+reading|must\s+read|editors['’]?\s+pick)\s*[:\-–—]/i.test(lower)) return true;
  if (/^(?:read\s+more|also\s+read|see\s+also)\s+[A-Z0-9"“']/i.test(str.trim())) return true;
  if (/sign\s+up\s+for\s+(?:our\s+)?newsletter|subscribe\s+to|follow\s+us\s+on|leave\s+a\s+comment|share\s+this\s+story|listen\s+to\s+the\s+podcast|download\s+the\s+app/i.test(lower)) return true;
  if (/this\s+article\s+was\s+originally\s+published\s+on|republished\s+with\s+permission|disclosure\s+statement|the\s+conversation\s+uk|the\s+conversation\s+africa/i.test(lower)) return true;
  if (/(?:advertisement|sponsored|promoted\s+content|affiliate\s+links?|cookies?\s+policy)/i.test(lower)) return true;

  return false;
}

/**
 * Clean text paragraph by removing inline "(Baca juga: ...)" or "[Read more: ...]" or promotional snippets
 */
export function sanitizeParagraphText(text: string): string {
  return text
    .replace(/\[\s*(?:Baca\s+juga|Read\s+more|Simak\s+juga|Lihat\s+juga|Also\s+read|Related)[^\]]+\]/gi, '')
    .replace(/\(\s*(?:Baca\s+juga|Read\s+more|Simak\s+juga|Lihat\s+juga|Also\s+read|Related)[^)]+\)/gi, '')
    .replace(/\|\s*(?:Baca\s+juga|Simak\s+juga|Read\s+more).*$/gi, '')
    .replace(/[-–—]\s*(?:Baca\s+juga|Simak\s+juga|Read\s+more).*$/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Detect language of given text sample
 */
export function detectLanguage(text: string): 'id' | 'en' {
  const sample = text.toLowerCase().slice(0, 1500);
  const indonesianWords = ['yang', 'dengan', 'dalam', 'untuk', 'pada', 'adalah', 'bahwa', 'tersebut', 'dari', 'oleh', 'tidak', 'akan', 'juga', 'karena', 'bisa', 'kita', 'mereka', 'sebuah'];
  let idCount = 0;

  for (const w of indonesianWords) {
    const matches = sample.match(new RegExp(`\\b${w}\\b`, 'g'));
    if (matches) idCount += matches.length;
  }

  return idCount >= 4 ? 'id' : 'en';
}

/**
 * Clean and format paragraphs from a raw text section
 */
export function cleanParagraphs(rawSection: string): string[] {
  return rawSection
    .split(/\n\s*\n+/)
    .map(p => sanitizeParagraphText(p.replace(/\s+/g, ' ').trim()))
    .filter(p => {
      if (p.length < 25) return false;
      if (isNoiseOrAdParagraph(p)) return false;
      if (/^(fill the words|answer questions|pertanyaan:|latihan soal|daftar pustaka)/i.test(p)) return false;
      return true;
    });
}

/**
 * Split pasted text into discrete articles with configurable modes
 */
export function splitMultiArticleBundle(
  rawText: string,
  mode: SplitMode = 'auto',
  targetWordCountPerChunk: number = 500
): SplitArticleResult[] {
  const text = rawText
    .replace(/\r\n/g, '\n')
    .replace(/www\.alternatifa\.com/gi, '')
    .replace(/www\.cloverait\.com/gi, '')
    .trim();

  if (!text) return [];

  const articles: SplitArticleResult[] = [];

  // Known preset titles (Oxford & Curated articles support)
  const knownTitlePatterns = [
    'Chimpanzees also like to follow trends, study shows',
    'Extreme heat is a killer. A recent heat wave shows how much more deadly it’s becoming',
    'China posts 5.2% GDP growth for Q2',
    'Americans could pay more for these items from Mexico and the EU if Trump makes good on his latest tariff threats',
    'The pros and cons of mouth taping for sleep',
    'Nearly half of teens say social media is bad for youth mental health, report finds',
    '‘Cool’ people tend to have these six things in common, study finds',
    'Chinese swimmers dope-tested the most ahead of World Aquatics Championships',
    'Nvidia’s Jensen Huang says AI could lead to job losses ‘if the world runs out of ideas’',
    'Microplastics are choking our waters. Could a sponge made of squid bones help remove them?',
    'Dopamine Bukan Sekadar Hormon Bahagia',
    'Freon Ada di Dekat Kita',
    'Kenapa Kita Tidak Ingat Waktu Bayi?',
    'Penurunan Muka Tanah: Ancaman Senyap yang Menggerus Masa Depan Kota Pesisir',
    'Pernikahan di Indonesia terus menurun',
    'Tren Celana Jeans: Evolusi Ikon Mode yang Tak Pernah Mati',
    'Perjalanan Panjang Nico Hulkenberg: Setelah Penantian 239 Balapan, Podium Akhirnya Tiba',
    'Harapan Baru dari Dunia Mikro: Mikroba Pemakan Plastik',
    'Sejarah Panjang Gorden'
  ];

  // MODE: SINGLE DOCUMENT
  if (mode === 'single') {
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    const title = lines[0] ? lines[0].replace(/^[#\-*\s]+/, '').slice(0, 80) : 'Dokumen Naskah Impor';
    const paragraphs = cleanParagraphs(lines.slice(1).join('\n\n'));
    const lang = detectLanguage(text);

    return [{
      title,
      content: paragraphs.length > 0 ? paragraphs : [text],
      wordCount: text.split(/\s+/).filter(Boolean).length,
      language: lang,
      category: lang === 'en' ? 'English Reading' : 'Literasi Indonesia'
    }];
  }

  // Check known titles
  const matchedTitles: { title: string; index: number }[] = [];
  knownTitlePatterns.forEach(pattern => {
    const idx = text.indexOf(pattern);
    if (idx !== -1) {
      matchedTitles.push({ title: pattern, index: idx });
    }
  });

  if (matchedTitles.length >= 2) {
    matchedTitles.sort((a, b) => a.index - b.index);

    for (let i = 0; i < matchedTitles.length; i++) {
      const cur = matchedTitles[i];
      const nextIdx = i + 1 < matchedTitles.length ? matchedTitles[i + 1].index : text.length;
      const sectionText = text.substring(cur.index + cur.title.length, nextIdx).trim();
      const paragraphs = cleanParagraphs(sectionText);
      const isEnglish = detectLanguage(cur.title + ' ' + sectionText) === 'en';

      articles.push({
        title: cur.title.replace(/^[‘'"]|[’'"]$/g, ''),
        content: paragraphs.length > 0 ? paragraphs : [sectionText],
        wordCount: sectionText.split(/\s+/).filter(Boolean).length,
        language: isEnglish ? 'en' : 'id',
        category: isEnglish ? 'Science & Global Perspectives' : 'Sains, Lingkungan & Sosial'
      });
    }
    return articles;
  }

  // Dynamic Headings
  const headingRegex = /(?:^|\n)(?:#+\s*([^\n]{3,90})|(?:Bab|Chapter|Bagian|Artikel|Cerpen|Section)\s+\d+[:.]?\s*([^\n]{0,80})|(?:Judul|Title):\s*([^\n]{3,90})|^([A-Z0-9\s,:'"–—]{5,80}))(?=\n\s*\n)/gm;
  const dynamicHeadings: { title: string; index: number }[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(text)) !== null) {
    const rawHeading = match[1] || match[2] || match[3] || match[4] || match[0];
    const cleanHeading = rawHeading.replace(/^[#\-*\s]+/, '').replace(/^(Judul|Title):\s*/i, '').trim();

    if (cleanHeading.length >= 4 && cleanHeading.length <= 100 && !/^(page|halaman|daftar isi|pendahuluan|bab|chapter)\s*$/i.test(cleanHeading)) {
      dynamicHeadings.push({
        title: cleanHeading,
        index: match.index
      });
    }
  }

  if (dynamicHeadings.length >= 2) {
    dynamicHeadings.sort((a, b) => a.index - b.index);

    for (let i = 0; i < dynamicHeadings.length; i++) {
      const cur = dynamicHeadings[i];
      const nextIdx = i + 1 < dynamicHeadings.length ? dynamicHeadings[i + 1].index : text.length;
      const sectionText = text.substring(cur.index, nextIdx).trim();
      const paragraphs = cleanParagraphs(sectionText);

      if (paragraphs.length > 0 || sectionText.length > 50) {
        const lang = detectLanguage(cur.title + ' ' + sectionText);
        articles.push({
          title: cur.title,
          content: paragraphs.length > 0 ? paragraphs : [sectionText],
          wordCount: sectionText.split(/\s+/).filter(Boolean).length,
          language: lang,
          category: lang === 'en' ? 'English Reading' : 'Literasi Indonesia'
        });
      }
    }

    if (articles.length >= 2) {
      return articles;
    }
  }

  // Single article fallback
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const title = lines[0] ? lines[0].replace(/^[#\-*\s]+/, '').slice(0, 80) : 'Naskah Bacaan Impor';
  const paragraphs = cleanParagraphs(lines.slice(1).join('\n\n'));
  const lang = detectLanguage(text);

  return [{
    title,
    content: paragraphs.length > 0 ? paragraphs : [text],
    wordCount: text.split(/\s+/).filter(Boolean).length,
    language: lang,
    category: lang === 'en' ? 'English Reading' : 'Literasi Indonesia'
  }];
}

/**
 * Fetch and extract clean article content from a web URL with anti-ad & anti-readmore stripping
 */
export async function fetchArticleFromUrl(url: string): Promise<{
  title: string;
  author?: string;
  hostname: string;
  sourceUrl: string;
  paragraphs: string[];
  wordCount: number;
  language: 'id' | 'en';
}> {
  const cleanUrl = url.trim();
  const parsedUrl = new URL(cleanUrl);

  // Strategy 1: Local backend endpoint /api/fetch-article
  try {
    const res = await fetch(`/api/fetch-article?url=${encodeURIComponent(cleanUrl)}`, {
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.paragraphs && data.paragraphs.length > 0) {
        const filteredP = data.paragraphs
          .map((p: string) => sanitizeParagraphText(p))
          .filter((p: string) => !isNoiseOrAdParagraph(p));

        if (filteredP.length > 0) {
          return {
            title: data.title || `Artikel dari ${parsedUrl.hostname}`,
            author: data.author,
            hostname: data.hostname || parsedUrl.hostname,
            sourceUrl: data.sourceUrl || cleanUrl,
            paragraphs: filteredP,
            wordCount: filteredP.join(' ').split(/\s+/).filter(Boolean).length,
            language: data.language || detectLanguage(filteredP.join(' '))
          };
        }
      }
    }
  } catch {
    // fallback to proxy
  }

  // Strategy 2: CORS Proxies
  const proxyEndpoints = [
    `https://api.allorigins.win/raw?url=${encodeURIComponent(cleanUrl)}`,
    `https://corsproxy.io/?url=${encodeURIComponent(cleanUrl)}`,
    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(cleanUrl)}`
  ];

  let rawHtml = '';
  for (const proxyUrl of proxyEndpoints) {
    try {
      const res = await fetch(proxyUrl);
      if (res.ok) {
        rawHtml = await res.text();
        if (rawHtml && rawHtml.length > 100) break;
      }
    } catch {
      // try next proxy
    }
  }

  if (!rawHtml) {
    throw new Error(`Tidak dapat menghubungi link web "${parsedUrl.hostname}". Pastikan URL aktif atau tempel teks artikel secara manual.`);
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, 'text/html');

  // Strip unwanted elements
  const tagsToRemove = [
    'script', 'style', 'noscript', 'svg', 'nav', 'header', 'footer', 'aside', 'iframe', 'form', 'button', 'input',
    '.ads', '.ad', '.advertisement', '.adv', '[id*="google_ads"]', '[id*="ad-"]', '[class*="ad-slot"]', '[class*="advert"]',
    '.sidebar', '.menu', '.social-share', '.share-box', '.share-buttons', '.newsletter', '.newsletter-box', '.subscribe', '.subscription',
    '.read-more', '.baca-juga', '.related-posts', '.related-articles', '.related-news', '.recommended', '.trending-widget',
    '.tag-list', '.tags', '.comment-section', '.comments', '.disclaimer', '.copyright',
    '[data-ad]', '[data-ad-unit]', '[data-ad-slot]', '[data-readmore]', '[data-component="advertisement"]'
  ];
  tagsToRemove.forEach(selector => {
    try {
      doc.querySelectorAll(selector).forEach(el => el.remove());
    } catch {
      // ignore invalid selector
    }
  });

  // Extract Title
  let title = '';
  const ogTitle = doc.querySelector('meta[property="og:title"]')?.getAttribute('content');
  if (ogTitle) {
    title = ogTitle.trim();
  } else {
    const docTitle = doc.querySelector('title')?.textContent || doc.querySelector('h1')?.textContent || '';
    title = docTitle.trim();
  }
  title = title.replace(/\s*[-|–—]\s*[^|–—]+$/, '').trim() || `Artikel dari ${parsedUrl.hostname}`;

  // Extract Author
  const author = doc.querySelector('meta[name="author"]')?.getAttribute('content')
    || doc.querySelector('meta[property="article:author"]')?.getAttribute('content')
    || doc.querySelector('.byline, .author-name, .author')?.textContent?.trim()
    || undefined;

  // Extract Content
  const contentRoot = doc.querySelector('article, main, .article-body, .entry-content, .post-content, .story-body') || doc.body;
  const pElements = contentRoot.querySelectorAll('p');
  const paragraphs: string[] = [];

  pElements.forEach(p => {
    const text = sanitizeParagraphText((p.textContent || '').replace(/\s+/g, ' ').trim());
    if (text.length >= 30 && !isNoiseOrAdParagraph(text)) {
      paragraphs.push(text);
    }
  });

  if (paragraphs.length === 0) {
    const bodyText = (contentRoot.textContent || '').replace(/\s+/g, ' ').trim();
    const chunks = bodyText.split(/(?<=[.?!])\s+/).map(s => sanitizeParagraphText(s)).filter(c => c.length >= 35 && !isNoiseOrAdParagraph(c));
    if (chunks.length > 0) {
      paragraphs.push(...chunks.slice(0, 10));
    }
  }

  if (paragraphs.length === 0) {
    throw new Error('Halaman web berhasil diakses namun teks artikel utama tidak dapat diekstrak secara otomatis. Silakan salin & tempel teksnya di tab "Paste Teks".');
  }

  const fullText = paragraphs.join('\n\n');
  const wordCount = fullText.split(/\s+/).filter(Boolean).length;
  const language = detectLanguage(fullText);

  return {
    title,
    author: author ? author.slice(0, 60) : undefined,
    hostname: parsedUrl.hostname,
    sourceUrl: cleanUrl,
    paragraphs,
    wordCount,
    language
  };
}

/**
 * Auto-generate rich vocabulary items from text
 */
export function autoGenerateVocabFromText(text: string, language: 'en' | 'id' = 'en'): VocabItem[] {
  const words = text
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 5 && !/^\d+$/.test(w));

  const stopWordsEn = new Set([
    'because', 'between', 'through', 'another', 'without', 'against', 'before', 'during', 'several',
    'people', 'should', 'according', 'become', 'however', 'whether', 'including', 'instead', 'rather',
    'although', 'therefore', 'something', 'everything', 'different', 'important', 'possible', 'article'
  ]);

  const uniqueWords: string[] = [];
  const seen = new Set<string>();

  for (const w of words) {
    const lower = w.toLowerCase();
    if (!stopWordsEn.has(lower) && !seen.has(lower) && lower.length >= 6) {
      seen.add(lower);
      uniqueWords.push(w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
      if (uniqueWords.length >= 6) break;
    }
  }

  while (uniqueWords.length < 6) {
    const defaults = ['Resilience', 'Empirical', 'Framework', 'Hypothesis', 'Phenomenon', 'Systemic'];
    const pick = defaults[uniqueWords.length % defaults.length];
    uniqueWords.push(pick);
  }

  return uniqueWords.slice(0, 6).map((word, idx) => {
    return {
      word,
      phonetic: `/${word.toLowerCase()}/`,
      partOfSpeech: idx % 2 === 0 ? 'noun' : 'adjective',
      definitionId: `Istilah kosakata kunci terkait topik bacaan: ${word}`,
      definitionEn: `Key conceptual vocabulary extracted from the imported context: ${word}`,
      exampleSentence: `The passage highlighted the essential function of ${word.toLowerCase()} within the broader discussion.`
    };
  });
}

/**
 * Auto-generate Fill-in, True/False, and Multiple Choice questions from text paragraphs
 */
export function autoGenerateQuestions(paragraphs: string[], language: 'id' | 'en' = 'id') {
  const fullText = paragraphs.join(' ');
  const sentences = fullText
    .split(/(?<=[.?!])\s+/)
    .map(s => s.trim())
    .filter(s => s.length >= 35 && s.length <= 250);

  const fillIns: IsianQuestion[] = [];
  const trueFalses: TrueFalseQuestion[] = [];
  const vocabQuizzes: MultipleChoiceQuestion[] = [];
  const readingQuizzes: MultipleChoiceQuestion[] = [];

  // Indonesian Fill-In Questions
  for (let i = 0; i < Math.min(5, sentences.length); i++) {
    const s = sentences[i];
    const words = s.split(/\s+/).filter(w => w.length >= 5 && !/^[.,:;'"()]+$/.test(w));
    const targetWord = words[Math.floor(words.length / 2)]?.replace(/[.,:;'"()]/g, '') || 'utama';

    fillIns.push({
      id: `q-gen-fill-${i + 1}`,
      question: `Berdasarkan bacaan, apa istilah atau kata yang melengkapi pernyataan: "${s.replace(new RegExp(`\\b${targetWord}\\b`, 'i'), '_____')}"?`,
      correctAnswers: [targetWord, targetWord.toLowerCase()],
      explanation: `Dinyatakan dalam paragraf bacaan: "${s}"`,
      hint: `Kata dimulai dengan huruf '${targetWord.charAt(0)}' dengan panjang ${targetWord.length} huruf.`
    });
  }

  // Indonesian True/False Questions
  for (let i = 0; i < 5; i++) {
    const s = sentences[(i + 2) % sentences.length] || 'Topik artikel memberikan wawasan faktual yang mendalam.';
    const isTrue = i % 2 === 0;
    const statement = isTrue ? s : `Berdasarkan teks, ${s.toLowerCase().replace(/adalah|merupakan|telah/i, 'sama sekali tidak')} terjadi.`;

    trueFalses.push({
      id: `q-gen-tf-${i + 1}`,
      statement: statement.slice(0, 180),
      isTrue,
      explanation: isTrue ? 'Pernyataan ini selaras dengan fakta yang dipaparkan dalam artikel.' : 'Pernyataan ini bertentangan dengan informasi yang disajikan dalam teks naskah.'
    });
  }

  // English Vocab True/False Quizzes (10 questions)
  const vocabItems = autoGenerateVocabFromText(fullText, 'en');
  const enVocabTrueFalse: TrueFalseQuestion[] = [];
  
  vocabItems.slice(0, 10).forEach((v, i) => {
    const isTrue = i % 2 === 0;
    enVocabTrueFalse.push({
      id: `vq-gen-${i + 1}`,
      statement: isTrue
        ? `The term "${v.word}" in English academic writing denotes: ${v.definitionEn || v.definitionId}`
        : `The term "${v.word}" is defined as an accidental error in physical hardware calculation.`,
      isTrue,
      explanation: isTrue
        ? `Correct. "${v.word}" means: ${v.definitionEn || v.definitionId}`
        : `False. "${v.word}" actually refers to: ${v.definitionEn || v.definitionId}`
    });
  });

  for (let i = 0; i < 5; i++) {
    const keySentence = sentences[(i * 2) % sentences.length] || 'The article explores systemic factors.';
    readingQuizzes.push({
      id: `rq-gen-${i + 1}`,
      question: `According to the imported text, which statement is most accurate regarding the main findings?`,
      options: [
        keySentence.slice(0, 120),
        'The entire phenomenon has zero impact on human society or environment',
        'All empirical measurements were discontinued without conclusion',
        'The passage strictly discusses ancient 12th-century architecture'
      ],
      correctIndex: 0,
      explanation: `The text directly discusses: "${keySentence.slice(0, 100)}..."`
    });
  }

  return {
    fillIns,
    trueFalses,
    vocabList: vocabItems,
    vocabQuiz: enVocabTrueFalse,
    readingQuiz: readingQuizzes
  };
}
