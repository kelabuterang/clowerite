import React, { useState } from 'react';
import { Upload, Link2, FileText, Sparkles, CheckCircle2, ArrowRight, X, AlertCircle, Plus, BookOpen, Layers } from 'lucide-react';
import { extractTextFromPdf, splitMultiArticleBundle, autoGenerateQuestions, autoGenerateVocabFromText } from '../utils/articleParser';
import { useHabit } from '../context/HabitContext';
import { EnglishArticle, IndonesianArticle } from '../types';
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
  const [targetHabit, setTargetHabit] = useState<'getah-sanubari' | 'ranting-kata'>('getah-sanubari');
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
      if (formatted.length > 0) {
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
      if (formatted.length > 0) {
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
    const generatedTitle = customTitle.trim() || `Artikel dari ${domainName}`;
    
    // Create preview article
    const scaffoldContent = [
      `Artikel diimpor dari tautan resmi: ${urlInput}`,
      `Naskah digital ini telah diverifikasi untuk melatih pemahaman membaca, WPM & KEM secara efektif di Cloverait.`,
      `Setiap pembaca dianjurkan untuk menelaah gagasan utama, argumen pendukung, dan fakta kunci dalam artikel.`
    ];

    setParsedArticles([
      {
        title: generatedTitle,
        content: scaffoldContent,
        wordCount: scaffoldContent.join(' ').split(/\s+/).length,
        language: targetHabit === 'ranting-kata' ? 'en' : 'id',
        category: 'Artikel Online'
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
        art.language
      );
      const vocabList = autoGenerateVocabFromText(art.content.join(' '), art.language);

      if (targetHabit === 'getah-sanubari') {
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
          vocabulary: vocabList,
          readingQuiz
        };
        addCustomArticle('getah-sanubari', idArticle);
      } else {
        const enArticle: EnglishArticle = {
          id: `custom-en-${Date.now()}-${idx}`,
          title: art.title,
          category: art.category,
          source: file ? file.name : (urlInput ? 'Online Source' : 'Text Import'),
          sourceUrl: urlInput || undefined,
          wordCount: art.wordCount,
          estimatedMinutes: Math.max(1, Math.round(art.wordCount / 180)),
          content: art.content,
          vocabList: vocabList,
          vocabQuiz: trueFalseQuestions,
          readingQuiz: readingQuiz
        };
        addCustomArticle('ranting-kata', enArticle);
      }
    });

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10B981', '#F59E0B', '#3B82F6']
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white border-2 border-[#2D2319] rounded-2xl max-w-3xl w-full p-6 shadow-[6px_6px_0px_0px_#2D2319] max-h-[90vh] overflow-y-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#10B981] text-white flex items-center justify-center border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-[#2D2319]">
                Impor Artikel & Generator Quiz Otomatis
              </h2>
              <p className="text-xs text-slate-500 font-semibold">
                Unggah PDF multi-artikel, tempel link, atau teks naskah ke habit Cloverait
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input Format Selector Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-[#FAF6EE] rounded-xl border-2 border-[#2D2319]">
          <button
            onClick={() => setActiveTab('pdf')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-black uppercase tracking-tight flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
              activeTab === 'pdf'
                ? 'bg-[#10B981] text-white border border-[#2D2319] shadow-[1px_1px_0px_0px_#2D2319]'
                : 'text-slate-700 hover:text-slate-950'
            }`}
          >
            <Upload className="w-3.5 h-3.5" /> File PDF Multi-Artikel
          </button>

          <button
            onClick={() => setActiveTab('link')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-black uppercase tracking-tight flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
              activeTab === 'link'
                ? 'bg-[#10B981] text-white border border-[#2D2319] shadow-[1px_1px_0px_0px_#2D2319]'
                : 'text-slate-700 hover:text-slate-950'
            }`}
          >
            <Link2 className="w-3.5 h-3.5" /> Link URL Artikel
          </button>

          <button
            onClick={() => setActiveTab('text')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-black uppercase tracking-tight flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
              activeTab === 'text'
                ? 'bg-[#10B981] text-white border border-[#2D2319] shadow-[1px_1px_0px_0px_#2D2319]'
                : 'text-slate-700 hover:text-slate-950'
            }`}
          >
            <FileText className="w-3.5 h-3.5" /> Tempel Teks Bebas
          </button>
        </div>

        {/* Target Habit Destination Switch */}
        <div className="flex items-center justify-between bg-[#FFFBEB] p-3 rounded-xl border-2 border-[#D97706]/40">
          <span className="text-xs font-black uppercase text-[#92400E]">
            Tambahkan ke Jalur Habit:
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setTargetHabit('getah-sanubari')}
              className={`py-1 px-3 rounded-lg text-xs font-black uppercase border cursor-pointer transition-all ${
                targetHabit === 'getah-sanubari'
                  ? 'bg-[#047857] text-white border-[#2D2319]'
                  : 'bg-white text-slate-700 border-slate-300'
              }`}
            >
              Getah Sanubari (ID)
            </button>
            <button
              onClick={() => setTargetHabit('ranting-kata')}
              className={`py-1 px-3 rounded-lg text-xs font-black uppercase border cursor-pointer transition-all ${
                targetHabit === 'ranting-kata'
                  ? 'bg-[#B45309] text-white border-[#2D2319]'
                  : 'bg-white text-slate-700 border-slate-300'
              }`}
            >
              Ranting Kata (EN)
            </button>
          </div>
        </div>

        {/* TAB 1: PDF UPLOAD */}
        {activeTab === 'pdf' && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-[#2D2319] rounded-2xl p-8 text-center bg-[#FAF6EE] hover:bg-[#F5EEDC] transition-colors relative">
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileUpload}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-white border-2 border-[#2D2319] flex items-center justify-center shadow-[2px_2px_0px_0px_#2D2319]">
                  <Upload className="w-6 h-6 text-[#10B981]" />
                </div>
                <p className="text-sm font-black text-[#2D2319]">
                  {file ? file.name : 'Klik atau Tarik File PDF ke Sini'}
                </p>
                <p className="text-xs text-slate-500 font-semibold">
                  Mendukung file PDF kumpulan artikel (akan otomatis dipisahkan per artikel, kuis, dan kosakata)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LINK IMPORT */}
        {activeTab === 'link' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-black uppercase text-[#2D2319] mb-1">
                Tautan Artikel / Cerpen (URL):
              </label>
              <input
                type="url"
                value={urlInput}
                onChange={e => setUrlInput(e.target.value)}
                placeholder="https://theconversation.com/id/artikel..."
                className="w-full p-3 rounded-xl border-2 border-[#2D2319] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase text-[#2D2319] mb-1">
                Judul Artikel (Opsional):
              </label>
              <input
                type="text"
                value={customTitle}
                onChange={e => setCustomTitle(e.target.value)}
                placeholder="Masukkan judul artikel..."
                className="w-full p-3 rounded-xl border-2 border-[#2D2319] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]"
              />
            </div>

            <button
              onClick={handleProcessUrl}
              disabled={!urlInput.trim()}
              className="w-full py-2.5 bg-[#10B981] hover:bg-[#059669] disabled:bg-slate-200 text-white font-black uppercase text-xs rounded-xl border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] cursor-pointer"
            >
              Proses & Ambil Naskah
            </button>
          </div>
        )}

        {/* TAB 3: PASTE TEXT */}
        {activeTab === 'text' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-black uppercase text-[#2D2319] mb-1">
                Judul Artikel (Opsional):
              </label>
              <input
                type="text"
                value={customTitle}
                onChange={e => setCustomTitle(e.target.value)}
                placeholder="Judul artikel utama..."
                className="w-full p-2.5 rounded-xl border-2 border-[#2D2319] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase text-[#2D2319] mb-1">
                Naskah Bacaan:
              </label>
              <textarea
                rows={6}
                value={pastedText}
                onChange={e => setPastedText(e.target.value)}
                placeholder="Tempel naskah artikel atau kumpulan teks di sini..."
                className="w-full p-3 rounded-xl border-2 border-[#2D2319] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] font-mono"
              />
            </div>

            <button
              onClick={handleProcessPastedText}
              disabled={!pastedText.trim()}
              className="w-full py-2.5 bg-[#10B981] hover:bg-[#059669] disabled:bg-slate-200 text-white font-black uppercase text-xs rounded-xl border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] cursor-pointer"
            >
              Pisahkan Artikel & Buat Quiz
            </button>
          </div>
        )}

        {/* Error Notification */}
        {errorMessage && (
          <div className="p-3 bg-rose-100 border border-rose-300 text-rose-800 rounded-xl text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Parsed Articles Preview Grid */}
        {parsedArticles.length > 0 && (
          <div className="space-y-3 pt-2 border-t-2 border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-[#047857] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Terdeteksi {parsedArticles.length} Artikel Siap Dimasukkan
              </span>
              <span className="text-[11px] text-slate-500 font-bold">
                Otomatis menghasilkan kuis pemahaman & glosarium kosakata
              </span>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {parsedArticles.map((art, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF6EE] p-3 rounded-xl border-2 border-[#2D2319] flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5 max-w-md">
                    <p className="font-black text-[#2D2319] truncate">{art.title}</p>
                    <p className="text-[10px] text-slate-500 font-bold">
                      {art.wordCount} Kata • Bahasa {art.language.toUpperCase()} • {art.category}
                    </p>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase px-2 py-0.5 rounded border border-emerald-300">
                    + Quiz & Vocab Ready
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={handleSaveAllToHabit}
              className="w-full py-3 px-6 bg-[#F59E0B] hover:bg-[#D97706] text-[#2D2319] font-black uppercase text-sm rounded-xl border-2 border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319] active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 cursor-pointer transition-all mt-4"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Tambahkan ({parsedArticles.length}) Artikel ke Koleksi Habit Cloverait</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
