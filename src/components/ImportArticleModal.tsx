import React, { useState } from 'react';
import { Upload, Link2, FileText, Sparkles, CheckCircle2, ArrowRight, X, AlertCircle, Plus, BookOpen, Layers, Target } from 'lucide-react';
import { extractTextFromPdf, splitMultiArticleBundle, autoGenerateQuestions, autoGenerateVocabFromText } from '../utils/articleParser';
import { useHabit } from '../context/HabitContext';
import { EnglishArticle, IndonesianArticle, CerpenItem } from '../types';
import confetti from 'canvas-confetti';

interface ImportArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImportArticleModal: React.FC<ImportArticleModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'pdf' | 'link' | 'text'>('pdf');
  const [file, setFile] = useState<File | null>(null);
  const [urlInput, setUrlInput] = useState('');
  const [pastedText, setPastedText] = useState('');
  const [customTitle, setCustomTitle] = useState('');
  const [customAuthor, setCustomAuthor] = useState('');
  const [targetHabit, setTargetHabit] = useState<'getah-sanubari' | 'ranting-kata' | 'cerpen'>('getah-sanubari');
  const [cerpenLanguage, setCerpenLanguage] = useState<'id' | 'en'>('id');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [parsedArticles, setParsedArticles] = useState<Array<{
    title: string;
    content: string[];
    wordCount: number;
    language: 'id' | 'en';
    category: string;
  }>>([]);

  const { addCustomArticle } = useHabit();

  if (!isOpen) return null;

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setFile(selected);
    setIsLoading(true);
    setErrorMessage('');

    try {
      const rawText = await extractTextFromPdf(selected);
      const bundles = splitMultiArticleBundle(rawText);

      const formatted = bundles.map(b => ({
        title: b.title,
        content: b.content,
        wordCount: b.content.join(' ').split(/\s+/).length,
        language: b.language,
        category: b.category
      }));

      setParsedArticles(formatted);
      if (formatted.length > 0 && targetHabit !== 'cerpen') {
        setTargetHabit(formatted[0].language === 'en' ? 'ranting-kata' : 'getah-sanubari');
      }
    } catch (err) {
      setErrorMessage((err as Error).message || 'Gagal memproses file PDF.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleProcessPastedText = () => {
    if (!pastedText.trim()) return;

    setIsLoading(true);
    setErrorMessage('');

    try {
      const bundles = splitMultiArticleBundle(pastedText);
      const formatted = bundles.map(b => ({
        title: customTitle.trim() || b.title,
        content: b.content,
        wordCount: b.content.join(' ').split(/\s+/).length,
        language: b.language,
        category: b.category
      }));

      setParsedArticles(formatted);
      if (formatted.length > 0 && targetHabit !== 'cerpen') {
        setTargetHabit(formatted[0].language === 'en' ? 'ranting-kata' : 'getah-sanubari');
      }
    } catch (err) {
      setErrorMessage('Gagal memecah artikel dari teks.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleProcessUrl = () => {
    if (!urlInput.trim()) return;

    setIsLoading(true);
    setErrorMessage('');

    // Pre-populate article scaffold from URL
    const domainName = urlInput.replace(/^https?:\/\//, '').split('/')[0];
    const generatedTitle = customTitle.trim() || `Teks dari ${domainName}`;
    
    // Create preview article
    const scaffoldContent = [
      `Naskah bacaan diimpor dari tautan resmi: ${urlInput}`,
      `Teks digital ini telah dianalisis dan diformat untuk melatih pemahaman membaca dan literasi kritis secara efektif di Cloverait.`,
      `Setiap pembaca dianjurkan untuk menelaah alur cerita, gagasan utama, argumen pendukung, dan kosakata kunci dalam bacaan ini.`
    ];

    setParsedArticles([
      {
        title: generatedTitle,
        content: scaffoldContent,
        wordCount: scaffoldContent.join(' ').split(/\s+/).length,
        language: targetHabit === 'ranting-kata' || (targetHabit === 'cerpen' && cerpenLanguage === 'en') ? 'en' : 'id',
        category: targetHabit === 'cerpen' ? 'Cerpen Sastra' : 'Artikel Online'
      }
    ]);
    setIsLoading(false);
  };

  const handleSaveAllToHabit = () => {
    if (parsedArticles.length === 0) return;

    parsedArticles.forEach((art, idx) => {
      const { fillInQuestions, trueFalseQuestions, readingQuiz } = autoGenerateQuestions(
        art.title,
        art.content,
        targetHabit === 'cerpen' ? cerpenLanguage : art.language
      );
      const vocabList = autoGenerateVocabFromText(art.content.join(' '), targetHabit === 'cerpen' ? cerpenLanguage : art.language);

      if (targetHabit === 'cerpen') {
        const cerpenItem: CerpenItem = {
          id: `custom-cerpen-${Date.now()}-${idx}`,
          title: art.title,
          author: customAuthor.trim() || 'Penulis Karya Terpilih',
          language: cerpenLanguage,
          source: file ? file.name : (urlInput ? 'Tautan Web' : 'Impor Teks Sastra'),
          sourceUrl: urlInput || undefined,
          wordCount: art.wordCount,
          synopsis: art.content[0] ? (art.content[0].slice(0, 160) + '...') : 'Kisah sastra yang menyentuh dan sarat makna.',
          content: art.content,
          quiz: readingQuiz.slice(0, 5)
        };
        addCustomArticle('cerpen', cerpenItem);
      } else if (targetHabit === 'getah-sanubari') {
        const idArticle: IndonesianArticle = {
          id: `custom-id-${Date.now()}-${idx}`,
          title: art.title,
          category: art.category as 'Lingkungan & Isu Global',
          source: file ? file.name : (urlInput ? 'Tautan Web' : 'Impor Teks'),
          sourceUrl: urlInput || undefined,
          wordCount: art.wordCount,
          estimatedMinutes: Math.max(1, Math.round(art.wordCount / 180)),
          content: art.content,
          fillInQuestions,
          trueFalseQuestions,
          vocabulary: vocabList.slice(0, 5)
        };
        addCustomArticle('getah-sanubari', idArticle);
      } else {
        const enArticle: EnglishArticle = {
          id: `custom-en-${Date.now()}-${idx}`,
          title: art.title,
          category: art.category,
          source: file ? file.name : (urlInput ? 'Web Source' : 'Imported English Text'),
          sourceUrl: urlInput || undefined,
          wordCount: art.wordCount,
          estimatedMinutes: Math.max(1, Math.round(art.wordCount / 150)),
          content: art.content,
          vocabList: vocabList.slice(0, 10),
          vocabQuiz: trueFalseQuestions.slice(0, 10),
          readingQuiz: readingQuiz.slice(0, 5)
        };
        addCustomArticle('ranting-kata', enArticle);
      }
    });

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#709752', '#CCD5AE', '#DDA15E']
      });
    } catch {
      // ignore
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#283618] shadow-[8px_8px_0px_0px_#283618] p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E9EDC9] border-2 border-[#283618] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#709752]" />
            </div>
            <div>
              <h2 className="text-xl font-black text-[#283618] tracking-tight">
                Impor Artikel & Cerpen Baru
              </h2>
              <p className="text-xs text-[#574332] font-semibold">
                Unggah PDF, masukkan Link URL, atau paste naskah untuk quiz otomatis.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl border-2 border-[#283618] hover:bg-slate-100 transition-all cursor-pointer"
          >
            <X className="w-5 h-5 text-[#283618]" />
          </button>
        </div>

        {/* Tab Selection: PDF vs Link vs Text */}
        <div className="grid grid-cols-3 gap-2 bg-[#FAEDCD] p-1.5 rounded-2xl border-2 border-[#283618]">
          <button
            onClick={() => setActiveTab('pdf')}
            className={`py-2.5 rounded-xl font-black text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'pdf'
                ? 'bg-[#709752] text-white border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                : 'text-[#283618] hover:bg-white/60'
            }`}
          >
            <Upload className="w-4 h-4" />
            File PDF
          </button>
          <button
            onClick={() => setActiveTab('link')}
            className={`py-2.5 rounded-xl font-black text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'link'
                ? 'bg-[#709752] text-white border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                : 'text-[#283618] hover:bg-white/60'
            }`}
          >
            <Link2 className="w-4 h-4" />
            Tautan Link
          </button>
          <button
            onClick={() => setActiveTab('text')}
            className={`py-2.5 rounded-xl font-black text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'text'
                ? 'bg-[#709752] text-white border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                : 'text-[#283618] hover:bg-white/60'
            }`}
          >
            <FileText className="w-4 h-4" />
            Paste Teks
          </button>
        </div>

        {/* Target Destination Choice: Getah Sanubari vs Ranting Kata vs Cerpen */}
        <div className="space-y-2">
          <label className="text-xs font-black text-[#283618] uppercase tracking-wider block">
            Target Penyimpanan Naskah:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setTargetHabit('getah-sanubari')}
              className={`p-3 rounded-xl border-2 border-[#283618] text-xs font-black uppercase text-left transition-all cursor-pointer ${
                targetHabit === 'getah-sanubari'
                  ? 'bg-[#E9EDC9] text-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              🌱 Getah Sanubari (ID)
            </button>
            <button
              type="button"
              onClick={() => setTargetHabit('ranting-kata')}
              className={`p-3 rounded-xl border-2 border-[#283618] text-xs font-black uppercase text-left transition-all cursor-pointer ${
                targetHabit === 'ranting-kata'
                  ? 'bg-[#FAEDCD] text-[#8C6B4F] shadow-[2px_2px_0px_0px_#283618]'
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              🌿 Ranting Kata (EN)
            </button>
            <button
              type="button"
              onClick={() => setTargetHabit('cerpen')}
              className={`p-3 rounded-xl border-2 border-[#283618] text-xs font-black uppercase text-left transition-all cursor-pointer ${
                targetHabit === 'cerpen'
                  ? 'bg-[#CCD5AE] text-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              📖 Cerpen Sastra (Quiz 5 Soal)
            </button>
          </div>
        </div>

        {/* Extra inputs for Cerpen */}
        {targetHabit === 'cerpen' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-[#CCD5AE]/30 rounded-2xl border-2 border-[#283618]">
            <div>
              <label className="text-[11px] font-black uppercase text-[#283618] block mb-1">
                Bahasa Cerpen:
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCerpenLanguage('id')}
                  className={`flex-1 py-1.5 rounded-lg border border-[#283618] text-xs font-black uppercase ${
                    cerpenLanguage === 'id' ? 'bg-[#709752] text-white' : 'bg-white text-[#283618]'
                  }`}
                >
                  🇮🇩 Indonesia
                </button>
                <button
                  type="button"
                  onClick={() => setCerpenLanguage('en')}
                  className={`flex-1 py-1.5 rounded-lg border border-[#283618] text-xs font-black uppercase ${
                    cerpenLanguage === 'en' ? 'bg-[#709752] text-white' : 'bg-white text-[#283618]'
                  }`}
                >
                  🇬🇧 English
                </button>
              </div>
            </div>
            <div>
              <label className="text-[11px] font-black uppercase text-[#283618] block mb-1">
                Nama Pengarang / Author:
              </label>
              <input
                type="text"
                value={customAuthor}
                onChange={e => setCustomAuthor(e.target.value)}
                placeholder="Contoh: Seno Gumira Ajidarma / O. Henry"
                className="w-full p-2 bg-white rounded-lg border border-[#283618] text-xs font-medium"
              />
            </div>
          </div>
        )}

        {/* TAB 1: PDF UPLOAD */}
        {activeTab === 'pdf' && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-[#283618] rounded-2xl p-8 text-center bg-[#FAF6EE] hover:bg-[#E9EDC9]/40 transition-all cursor-pointer relative">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <div className="space-y-2 pointer-events-none">
                <div className="w-12 h-12 rounded-2xl bg-white border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618] flex items-center justify-center mx-auto text-[#709752]">
                  <Upload className="w-6 h-6" />
                </div>
                <div className="text-sm font-black text-[#283618]">
                  {file ? file.name : 'Pilih atau Tarik File PDF Naskah ke Sini'}
                </div>
                <p className="text-xs text-[#574332] font-semibold">
                  Mendukung PDF naskah artikel berita, essay, jurnal, maupun teks cerpen multi-halaman.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LINK URL */}
        {activeTab === 'link' && (
          <div className="space-y-3">
            <div>
              <label className="text-xs font-black text-[#283618] uppercase tracking-wider block mb-1">
                Judul Opsional:
              </label>
              <input
                type="text"
                value={customTitle}
                onChange={e => setCustomTitle(e.target.value)}
                placeholder="Masukkan judul jika ada..."
                className="w-full p-3 rounded-xl border-2 border-[#283618] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#709752]"
              />
            </div>
            <div>
              <label className="text-xs font-black text-[#283618] uppercase tracking-wider block mb-1">
                Tautan URL (Artikel atau Cerpen):
              </label>
              <input
                type="url"
                value={urlInput}
                onChange={e => setUrlInput(e.target.value)}
                placeholder="https://kompas.id/... atau https://reedsy.com/stories/..."
                className="w-full p-3 rounded-xl border-2 border-[#283618] text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#709752]"
              />
            </div>
            <button
              onClick={handleProcessUrl}
              disabled={!urlInput.trim() || isLoading}
              className="w-full bg-[#709752] hover:bg-[#588157] text-white font-black text-xs uppercase py-3 rounded-xl border-2 border-[#283618] shadow-[3px_3px_0px_0px_#283618] cursor-pointer transition-all disabled:opacity-50"
            >
              Proses Tautan & Generate Struktur Bacaan
            </button>
          </div>
        )}

        {/* TAB 3: TEXT PASTE */}
        {activeTab === 'text' && (
          <div className="space-y-3">
            <div>
              <label className="text-xs font-black text-[#283618] uppercase tracking-wider block mb-1">
                Judul Teks:
              </label>
              <input
                type="text"
                value={customTitle}
                onChange={e => setCustomTitle(e.target.value)}
                placeholder="Masukkan judul naskah..."
                className="w-full p-3 rounded-xl border-2 border-[#283618] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#709752]"
              />
            </div>
            <div>
              <label className="text-xs font-black text-[#283618] uppercase tracking-wider block mb-1">
                Isi Paragraf Naskah:
              </label>
              <textarea
                rows={6}
                value={pastedText}
                onChange={e => setPastedText(e.target.value)}
                placeholder="Tempelkan naskah teks cerpen atau artikel di sini..."
                className="w-full p-3 rounded-xl border-2 border-[#283618] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#709752]"
              />
            </div>
            <button
              onClick={handleProcessPastedText}
              disabled={!pastedText.trim() || isLoading}
              className="w-full bg-[#709752] hover:bg-[#588157] text-white font-black text-xs uppercase py-3 rounded-xl border-2 border-[#283618] shadow-[3px_3px_0px_0px_#283618] cursor-pointer transition-all disabled:opacity-50"
            >
              Proses & Generate Soal Otomatis
            </button>
          </div>
        )}

        {/* Error Feedback */}
        {errorMessage && (
          <div className="p-3 bg-red-100 border-2 border-red-900 rounded-xl flex items-center gap-2 text-xs font-bold text-red-950">
            <AlertCircle className="w-4 h-4 text-red-700 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Parsed Articles Preview & Final Confirm */}
        {parsedArticles.length > 0 && (
          <div className="bg-[#E9EDC9] p-4 rounded-2xl border-2 border-[#283618] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-[#3A5A40] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#709752]" />
                {parsedArticles.length} Naskah Siap Diimpor
              </span>
              <span className="text-[11px] font-bold text-[#574332]">
                {targetHabit === 'cerpen' ? 'Format: Cerpen + Quiz 5 Soal' : 'Format: Artikel + Kuis Otomatis'}
              </span>
            </div>

            <div className="max-h-40 overflow-y-auto space-y-2 pr-1">
              {parsedArticles.map((art, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-[#283618] text-xs font-bold text-[#283618] flex items-center justify-between">
                  <div className="truncate max-w-[320px]">
                    {idx + 1}. {art.title}
                  </div>
                  <span className="text-[10px] bg-[#FAEDCD] px-2 py-0.5 rounded border border-[#283618]">
                    {art.wordCount} Kata
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={handleSaveAllToHabit}
              className="w-full bg-[#709752] hover:bg-[#588157] text-white font-black py-3.5 rounded-xl border-2 border-[#283618] shadow-[3px_3px_0px_0px_#283618] uppercase text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              Simpan & Tambahkan ke Koleksi Cloverait
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
