import { EnglishArticle, IndonesianArticle, IsianQuestion, MultipleChoiceQuestion, TrueFalseQuestion, VocabItem } from '../types';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

// Configure pdfjs worker using local Vite asset URL
if (typeof window !== 'undefined') {
  try {
    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;
  } catch {
    // fallback
  }
}

/**
 * Fallback regex-based text extraction from raw PDF array buffer
 */
function extractRawPdfTextFallback(buffer: ArrayBuffer): string {
  try {
    const bytes = new Uint8Array(buffer);
    let str = '';
    for (let i = 0; i < bytes.length; i++) {
      const b = bytes[i];
      // Printable ASCII or common whitespace
      if ((b >= 32 && b <= 126) || b === 10 || b === 13 || b === 9) {
        str += String.fromCharCode(b);
      } else {
        str += ' ';
      }
    }

    // Extract text in parenthesis from PDF content stream (e.g. (Some text) Tj or [(Some) -20 (text)] TJ)
    const textMatches = str.match(/\(([^()]{2,500})\)\s*T[jd]/g) || [];
    const extractedWords: string[] = [];

    for (const match of textMatches) {
      const clean = match.replace(/^[(]/, '').replace(/\)\s*T[jd]$/, '').trim();
      if (clean && !clean.startsWith('/') && !clean.includes('Font') && clean.length > 1) {
        extractedWords.push(clean);
      }
    }

    if (extractedWords.length > 10) {
      return extractedWords.join(' ');
    }

    // Secondary fallback: Extract long consecutive alphanumeric strings
    const readableChunks = str
      .split(/[\r\n\x00-\x1f\x7f-\xff]+/)
      .map(s => s.trim())
      .filter(s => s.length > 25 && /[a-zA-Z]{3,}/.test(s) && !s.includes('xref') && !s.includes('trailer') && !s.includes('obj'));

    return readableChunks.join('\n\n');
  } catch {
    return '';
  }
}

/**
 * Extract raw text from an ArrayBuffer / File of PDF
 */
export async function extractTextFromPdf(file: File | ArrayBuffer): Promise<string> {
  let arrayBuffer: ArrayBuffer;
  if (file instanceof File) {
    arrayBuffer = await file.arrayBuffer();
  } else {
    arrayBuffer = file;
  }

  try {
    const data = new Uint8Array(arrayBuffer);
    const loadingTask = pdfjsLib.getDocument({
      data,
      useSystemFonts: true
    });
    const pdfDoc = await loadingTask.promise;
    let fullText = '';

    for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
      const page = await pdfDoc.getPage(pageNum);
      const textContent = await page.getTextContent();
      const pageText = textContent.items
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((item: any) => item.str)
        .join(' ');
      fullText += `\n--- PAGE ${pageNum} ---\n` + pageText;
    }

    if (fullText.trim().length > 30) {
      return fullText;
    }
  } catch (error) {
    console.warn('PDF.js worker extraction encountered an issue, trying raw text fallback:', error);
  }

  // Fallback extraction
  const fallback = extractRawPdfTextFallback(arrayBuffer);
  if (fallback && fallback.trim().length > 30) {
    return fallback;
  }

  throw new Error('Gagal mengekstrak teks dari PDF. Pastikan file PDF berisi teks dan tidak berupa gambar murni yang terkunci.');
}

/**
 * Auto-generate vocabulary items from text using frequency and semantic heuristics
 */
export function autoGenerateVocabFromText(text: string, language: 'en' | 'id' = 'en'): VocabItem[] {
  const words = text
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 5 && !/^\d+$/.test(w));

  // Common English stop words
  const stopWordsEn = new Set([
    'because', 'between', 'through', 'another', 'without', 'against', 'before', 'during', 'several',
    'people', 'should', 'according', 'become', 'however', 'whether', 'including', 'instead', 'rather'
  ]);

  const uniqueWords: string[] = [];
  const seen = new Set<string>();

  for (const raw of words) {
    const clean = raw.toLowerCase();
    if (!stopWordsEn.has(clean) && !seen.has(clean) && clean.length >= 6) {
      seen.add(clean);
      uniqueWords.push(raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase());
      if (uniqueWords.length >= 10) break;
    }
  }

  // Vocab definitions dictionary for common academic/news terms
  const vocabDict: Record<string, { id: string; en: string; pos: string }> = {
    Chimpanzees: { id: 'Simpanse (kera cerdas)', en: 'An intelligent great ape native to Africa', pos: 'noun' },
    Sanctuary: { id: 'Suaka alam / tempat perlindungan satwa', en: 'A place of refuge or safety for animals', pos: 'noun' },
    Exhibiting: { id: 'Menunjukkan / menampilkan perilaku', en: 'Manifesting or showing a behavior', pos: 'verb' },
    Caregivers: { id: 'Pengasuh / perawat', en: 'Persons who care for others or animals', pos: 'noun' },
    Strengthening: { id: 'Memperkuat / memperkokoh', en: 'Making stronger or more robust', pos: 'verb' },
    Interspecies: { id: 'Antarspesies / lintas spesies', en: 'Arising or occurring between different species', pos: 'adjective' },
    Supercharges: { id: 'Meningkatkan secara drastis / melipatgandakan', en: 'Significantly enhances or intensifies', pos: 'verb' },
    Catastrophic: { id: 'Bencana dahsyat / malapetaka besar', en: 'Involving or causing great sudden disaster', pos: 'adjective' },
    Pernicious: { id: 'Merusak secara halus dan berbahaya', en: 'Having a harmful effect, especially in a subtle way', pos: 'adjective' },
    Unprecedented: { id: 'Belum pernah terjadi sebelumnya', en: 'Never done or known before', pos: 'adjective' },
    Biodegradable: { id: 'Dapat terurai secara alami oleh mikroba', en: 'Capable of being decomposed by natural biological agents', pos: 'adjective' },
    Microplastics: { id: 'Partikel plastik mikroskopis (<5mm)', en: 'Extremely small pieces of plastic in the environment', pos: 'noun' },
    Microorganisms: { id: 'Mikroorganisme / jasad renik', en: 'Microscopic organisms such as bacteria or fungi', pos: 'noun' },
    Bioremediation: { id: 'Bioremediasi / pembersihan polusi secara biologi', en: 'The use of living organisms to remove environmental contaminants', pos: 'noun' },
    Degradation: { id: 'Degradasi / proses penguraian zat', en: 'The process of decaying or breaking down into smaller components', pos: 'noun' },
    Endocrine: { id: 'Sistem endokrin / kelenjar hormon', en: 'Relating to glands that secrete hormones directly into the blood', pos: 'noun' },
    Subsidence: { id: 'Penurunan / amblesnya muka tanah', en: 'The gradual caving in or sinking of an area of land', pos: 'noun' },
    Aquifer: { id: 'Akuifer / lapisan batuan bawah tanah penampung air', en: 'A body of permeable rock that can contain groundwater', pos: 'noun' },
    Demographic: { id: 'Demografi / struktur kependudukan', en: 'Relating to the structure of populations', pos: 'adjective' }
  };

  return uniqueWords.map(w => {
    const found = vocabDict[w] || vocabDict[Object.keys(vocabDict).find(k => k.toLowerCase() === w.toLowerCase()) || ''];
    return {
      word: w,
      phonetic: `/${w.toLowerCase()}/`,
      partOfSpeech: found ? found.pos : (language === 'en' ? 'vocabulary' : 'nomina/verba'),
      definitionId: found ? found.id : `Kosakata esensial dalam bacaan (${w})`,
      definitionEn: found ? found.en : `Essential contextual term in the passage (${w})`,
      exampleSentence: `The term "${w}" is highlighted as a focal concept within the passage.`
    };
  });
}

/**
 * Auto-generate comprehension questions (Isian & True/False or MCQ) from text paragraphs
 */
export function autoGenerateQuestions(
  title: string,
  paragraphs: string[],
  language: 'id' | 'en' = 'id'
): {
  fillInQuestions: IsianQuestion[];
  trueFalseQuestions: TrueFalseQuestion[];
  readingQuiz: MultipleChoiceQuestion[];
} {
  const sentences = paragraphs.join(' ').split(/(?<=[.?!])\s+/).filter(s => s.length > 25);

  const fillInQuestions: IsianQuestion[] = [];
  const trueFalseQuestions: TrueFalseQuestion[] = [];
  const readingQuiz: MultipleChoiceQuestion[] = [];

  // Generate 5 Fill-in Questions
  for (let i = 0; i < Math.min(5, sentences.length); i++) {
    const s = sentences[i * 2] || sentences[i];
    fillInQuestions.push({
      id: `q-gen-isian-${i + 1}`,
      question: language === 'id'
        ? `Berdasarkan naskah "${title}", apa informasi kunci yang dibahas pada kalimat berikut: "${s.slice(0, 80)}..."?`
        : `Based on "${title}", what is the core factual premise in: "${s.slice(0, 80)}..."?`,
      correctAnswers: [title, s.slice(0, 30), 'benar', 'sesuai'],
      explanation: s,
      hint: language === 'id' ? 'Tinjau kembali paragraf terkait di atas.' : 'Refer back to the corresponding paragraph above.'
    });
  }

  // Generate 5 True/False Questions
  for (let i = 0; i < 5; i++) {
    const s = sentences[i] || `Naskah "${title}" membahas fenomena penting dalam bidang sains dan masyarakat.`;
    const isTrue = i % 2 === 0;
    trueFalseQuestions.push({
      id: `q-gen-tf-${i + 1}`,
      statement: isTrue
        ? s
        : (language === 'id'
            ? `Naskah "${title}" menyatakan bahwa fenomena ini sama sekali tidak membawa dampak atau pengaruh apa pun.`
            : `The text claims that this event has zero significant influence or consequence.`),
      isTrue: isTrue,
      explanation: isTrue
        ? (language === 'id' ? 'Pernyataan ini sesuai dengan isi bacaan.' : 'This statement accurately reflects the passage.')
        : (language === 'id' ? 'Pernyataan ini bertentangan dengan konteks naskah.' : 'This statement contradicts the context of the article.')
    });
  }

  // Generate 5 Multiple Choice Questions
  for (let i = 0; i < 5; i++) {
    readingQuiz.push({
      id: `q-gen-mcq-${i + 1}`,
      question: language === 'id'
        ? `Apa gagasan utama atau fakta penting yang dapat disimpulkan dari bagian ke-${i + 1} naskah?`
        : `What is the primary takeaway or key finding conveyed in section ${i + 1}?`,
      options: language === 'id'
        ? [
            `Analisis mendalam mengenai ${title}`,
            'Penolakan terhadap seluruh data empiris yang ada',
            'Cerita fiksi yang tidak berkaitan dengan tema',
            'Informasi yang sudah kadaluwarsa'
          ]
        : [
            `The comprehensive analysis regarding ${title}`,
            'A total dismissal of empirical observations',
            'An unrelated fictional narrative',
            'Outdated and irrelevant information'
          ],
      correctIndex: 0,
      explanation: language === 'id'
        ? `Naskah secara eksplisit menguraikan dinamika ${title}.`
        : `The passage systematically details the aspects of ${title}.`
    });
  }

  return { fillInQuestions, trueFalseQuestions, readingQuiz };
}

/**
 * Split a large pasted multi-article text or PDF OCR into discrete articles
 */
export function splitMultiArticleBundle(rawText: string): Array<{
  title: string;
  content: string[];
  vocabRaw?: string[];
  questionsRaw?: string[];
  language: 'id' | 'en';
  category: string;
}> {
  // Normalize linebreaks
  const text = rawText
    .replace(/\r\n/g, '\n')
    .replace(/www\.alternatifa\.com/gi, '')
    .replace(/www\.cloverait\.com/gi, '');

  const articles: Array<{
    title: string;
    content: string[];
    vocabRaw?: string[];
    questionsRaw?: string[];
    language: 'id' | 'en';
    category: string;
  }> = [];

  // Detect explicit known titles or headings
  const titlePatterns = [
    // English PDF 1 Titles
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
    // Indonesian PDF 2 Titles
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

  // Check if text matches multi-article bundle
  const matchedTitles: { title: string; index: number }[] = [];
  for (const t of titlePatterns) {
    const idx = text.indexOf(t);
    if (idx !== -1) {
      matchedTitles.push({ title: t, index: idx });
    }
  }

  if (matchedTitles.length >= 2) {
    matchedTitles.sort((a, b) => a.index - b.index);

    for (let i = 0; i < matchedTitles.length; i++) {
      const cur = matchedTitles[i];
      const nextIdx = i + 1 < matchedTitles.length ? matchedTitles[i + 1].index : text.length;
      const sectionText = text.substring(cur.index + cur.title.length, nextIdx).trim();

      // Clean paragraphs
      const paragraphs = sectionText
        .split(/\n\s*\n/)
        .map(p => p.trim())
        .filter(p => p.length > 20 && !p.startsWith('Fill The Words') && !p.startsWith('Answer Questions') && !p.startsWith('Pertanyaan:'));

      const isEnglish = /[a-zA-Z\s]{10,}/.test(cur.title) && !/[dD]alam|[dD]engan|[dD]an|[yY]ang|[bB]ahwa/.test(sectionText.slice(0, 200));

      articles.push({
        title: cur.title.replace(/^[‘'"]|[’'"]$/g, ''),
        content: paragraphs.length > 0 ? paragraphs : [sectionText],
        language: isEnglish ? 'en' : 'id',
        category: isEnglish ? 'Science & Global Perspectives' : 'Sains, Lingkungan & Sosial'
      });
    }
  } else {
    // Single article parsing
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    const title = lines[0] || 'Artikel Impor Cloverait';
    const paragraphs = lines.slice(1).join('\n').split(/\n\s*\n/).filter(p => p.length > 15);

    const isEnglish = !/[dD]alam|[dD]engan|[dD]an|[yY]ang|[bB]ahwa/.test(text.slice(0, 300));

    articles.push({
      title,
      content: paragraphs.length > 0 ? paragraphs : [text],
      language: isEnglish ? 'en' : 'id',
      category: isEnglish ? 'English Reading' : 'Literasi Indonesia'
    });
  }

  return articles;
}
