import React, { useState } from 'react';
import { Link2, FileText, Sparkles, CheckCircle2, ArrowRight, X, AlertCircle, Plus, BookOpen, Layers, Target, Trash2, Edit3, Globe, RefreshCw, FileCheck, ShieldCheck, Check } from 'lucide-react';
import { splitMultiArticleBundle, fetchArticleFromUrl, autoGenerateQuestions, autoGenerateVocabFromText, SplitMode, SplitArticleResult } from '../utils/articleParser';
import { useHabit } from '../context/HabitContext';
import { EnglishArticle, IndonesianArticle, CerpenItem } from '../types';
import confetti from 'canvas-confetti';

interface ImportArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImportArticleModal: React.FC<ImportArticleModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'link' | 'text'>('link');
  const [urlInput, setUrlInput] = useState('');
  const [pastedText, setPastedText] = useState('');
  const [customTitle, setCustomTitle] = useState('');
  const [customAuthor, setCustomAuthor] = useState('');
  const [splitMode, setSplitMode] = useState<SplitMode>('auto');
  const [targetHabit, setTargetHabit] = useState<'getah-sanubari' | 'ranting-kata' | 'cerpen'>('getah-sanubari');
  const [cerpenLanguage, setCerpenLanguage] = useState<'id' | 'en'>('id');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [parsedArticles, setParsedArticles] = useState<Array<{
    title: string;
    content: string[];
    wordCount: number;
    language: 'id' | 'en';
    category: string;
    sourceNote?: string;
  }>>([]);

  const { theme, addCustomArticle } = useHabit();
  const isCoastal = theme === 'coastal';

  if (!isOpen) return null;

  const handleProcessUrl = async () => {
    if (!urlInput.trim()) return;

    setIsLoading(true);
    setLoadingStatus('Mengakses link artikel, membersihkan iklan & "baca juga"...');
    setErrorMessage('');

    try {
      const extracted = await fetchArticleFromUrl(urlInput.trim());

      const finalTitle = customTitle.trim() || extracted.title;
      if (extracted.author && !customAuthor.trim()) {
        setCustomAuthor(extracted.author);
      }

      const formattedArticle = {
        title: finalTitle,
        content: extracted.paragraphs,
        wordCount: extracted.wordCount,
        language: extracted.language,
        category: extracted.language === 'en' ? 'Global Science & News' : 'Literasi & Isu Terkini',
        sourceNote: `Website: ${extracted.hostname}`
      };

      setParsedArticles([formattedArticle]);

      if (targetHabit !== 'cerpen') {
        setTargetHabit(extracted.language === 'en' ? 'ranting-kata' : 'getah-sanubari');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Gagal mengimpor dari URL. Silakan periksa link atau gunakan tab Tempel Teks.');
    } finally {
      setIsLoading(false);
      setLoadingStatus('');
    }
  };

  const handleProcessPastedText = () => {
    if (!pastedText.trim()) return;

    setIsLoading(true);
    setLoadingStatus('Menganalisis struktur naskah dan memisahkan bab/judul...');
    setErrorMessage('');

    try {
      const bundles = splitMultiArticleBundle(pastedText, splitMode);
      const formatted = bundles.map((b) => ({
        title: customTitle.trim() && bundles.length === 1 ? customTitle.trim() : b.title,
        content: b.content,
        wordCount: b.content.join(' ').split(/\s+/).filter(Boolean).length,
        language: b.language,
        category: b.category,
        sourceNote: b.sourceNote
      }));

      setParsedArticles(formatted);
      if (formatted.length > 0 && targetHabit !== 'cerpen') {
        setTargetHabit(formatted[0].language === 'en' ? 'ranting-kata' : 'getah-sanubari');
      }
    } catch {
      setErrorMessage('Gagal memecah artikel dari teks.');
    } finally {
      setIsLoading(false);
      setLoadingStatus('');
    }
  };

  const handleUpdateArticleTitle = (index: number, newTitle: string) => {
    setParsedArticles(prev => {
      const copy = [...prev];
      if (copy[index]) {
        copy[index] = { ...copy[index], title: newTitle };
      }
      return copy;
    });
  };

  const handleDeleteParsedArticle = (index: number) => {
    setParsedArticles(prev => prev.filter((_, idx) => idx !== index));
  };

  const handleSaveAllToHabit = () => {
    if (parsedArticles.length === 0) return;

    parsedArticles.forEach((art, idx) => {
      const lang = targetHabit === 'cerpen' ? cerpenLanguage : art.language;
      const { fillIns, trueFalses, vocabList, vocabQuiz, readingQuiz } = autoGenerateQuestions(
        art.content,
        lang
      );

      if (targetHabit === 'cerpen') {
        const cerpenItem: CerpenItem = {
          id: `custom-cerpen-${Date.now()}-${idx}`,
          title: art.title,
          author: customAuthor.trim() || 'Penulis Karya Terpilih',
          language: cerpenLanguage,
          source: urlInput ? `Tautan: ${new URL(urlInput).hostname}` : 'Impor Teks Sastra',
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
          source: urlInput ? `Tautan: ${new URL(urlInput).hostname}` : 'Impor Teks',
          sourceUrl: urlInput || undefined,
          wordCount: art.wordCount,
          estimatedMinutes: Math.max(1, Math.round(art.wordCount / 180)),
          content: art.content,
          fillInQuestions: fillIns,
          trueFalseQuestions: trueFalses
        };
        addCustomArticle('getah-sanubari', idArticle);
      } else {
        const enArticle: EnglishArticle = {
          id: `custom-en-${Date.now()}-${idx}`,
          title: art.title,
          category: art.category,
          source: urlInput ? `Web Source: ${new URL(urlInput).hostname}` : 'Imported English Text',
          sourceUrl: urlInput || undefined,
          wordCount: art.wordCount,
          estimatedMinutes: Math.max(1, Math.round(art.wordCount / 150)),
          content: art.content,
          vocabList: vocabList.slice(0, 10),
          vocabQuiz: vocabQuiz.slice(0, 10),
          readingQuiz: readingQuiz.slice(0, 5)
        };
        addCustomArticle('ranting-kata', enArticle);
      }
    });

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: isCoastal ? ['#2563EB', '#60A5FA', '#93C5FD', '#F59E0B'] : ['#10B981', '#34D399', '#F59E0B', '#FCD34D']
      });
    } catch {
      // ignore
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className={`bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border-2 ${isCoastal ? 'border-[#1E293B] shadow-[8px_8px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[8px_8px_0px_0px_#2D2319]'} p-5 sm:p-7 space-y-5 transition-colors`}>
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${isCoastal ? 'bg-[#D0E1F0] text-[#1E40AF]' : 'bg-[#ECFDF5] text-[#047857]'} border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#2D2319]'} flex items-center justify-center`}>
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className={`text-xl font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'} tracking-tight`}>
                Impor Artikel & Cerpen
              </h2>
              <p className="text-xs text-slate-600 font-semibold">
                Impor langsung via Tautan Link Web atau Tempel Naskah (Bebas Iklan & Filter "Baca Juga").
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#2D2319]'} hover:bg-slate-100 transition-all cursor-pointer`}
          >
            <X className={`w-5 h-5 ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'}`} />
          </button>
        </div>

        {/* Tab Selection: Link vs Text */}
        <div className={`grid grid-cols-2 gap-2 ${isCoastal ? 'bg-[#EBF3F5] border-[#1E293B]' : 'bg-[#FEF3C7] border-[#2D2319]'} p-1.5 rounded-2xl border-2`}>
          <button
            onClick={() => setActiveTab('link')}
            className={`py-2.5 rounded-xl font-black text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'link'
                ? (isCoastal ? 'bg-[#2563EB] text-white border-2 border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#10B981] text-white border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]')
                : 'text-slate-700 hover:bg-white/60'
            }`}
          >
            <Link2 className="w-4 h-4" />
            Tautan Link Web (URL)
          </button>
          <button
            onClick={() => setActiveTab('text')}
            className={`py-2.5 rounded-xl font-black text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'text'
                ? (isCoastal ? 'bg-[#2563EB] text-white border-2 border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#10B981] text-white border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]')
                : 'text-slate-700 hover:bg-white/60'
            }`}
          >
            <FileText className="w-4 h-4" />
            Tempel Naskah / Teks
          </button>
        </div>

        {/* Target Destination Choice */}
        <div className="space-y-2">
          <label className={`text-xs font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'} uppercase tracking-wider block`}>
            Simpan Naskah ke Modul Habit:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setTargetHabit('getah-sanubari')}
              className={`p-3 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#2D2319]'} text-xs font-black uppercase text-left transition-all cursor-pointer ${
                targetHabit === 'getah-sanubari'
                  ? (isCoastal ? 'bg-[#D0E1F0] text-[#1E40AF] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#ECFDF5] text-[#047857] shadow-[2px_2px_0px_0px_#2D2319]')
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              🌱 Getah Sanubari (ID)
            </button>
            <button
              type="button"
              onClick={() => setTargetHabit('ranting-kata')}
              className={`p-3 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#2D2319]'} text-xs font-black uppercase text-left transition-all cursor-pointer ${
                targetHabit === 'ranting-kata'
                  ? (isCoastal ? 'bg-[#E0EBF5] text-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#FEF3C7] text-[#92400E] shadow-[2px_2px_0px_0px_#2D2319]')
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              🌿 Ranting Kata (EN)
            </button>
            <button
              type="button"
              onClick={() => setTargetHabit('cerpen')}
              className={`p-3 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#2D2319]'} text-xs font-black uppercase text-left transition-all cursor-pointer ${
                targetHabit === 'cerpen'
                  ? (isCoastal ? 'bg-[#D9E6EF] text-[#0F172A] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#E9EDC9] text-[#283618] shadow-[2px_2px_0px_0px_#2D2319]')
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              📖 Cerpen Sastra (Quiz 5 Soal)
            </button>
          </div>
        </div>

        {/* Extra inputs for Cerpen */}
        {targetHabit === 'cerpen' && (
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 ${isCoastal ? 'bg-[#EBF3F5]' : 'bg-amber-50'} rounded-2xl border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#2D2319]'}`}>
            <div>
              <label className={`text-[11px] font-black uppercase ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'} block mb-1`}>
                Bahasa Cerpen:
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCerpenLanguage('id')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-black border-2 ${cerpenLanguage === 'id' ? 'bg-[#2563EB] text-white border-[#1E293B]' : 'bg-white text-slate-700 border-slate-300'}`}
                >
                  🇮🇩 Indonesia
                </button>
                <button
                  type="button"
                  onClick={() => setCerpenLanguage('en')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-black border-2 ${cerpenLanguage === 'en' ? 'bg-[#2563EB] text-white border-[#1E293B]' : 'bg-white text-slate-700 border-slate-300'}`}
                >
                  🇬🇧 English
                </button>
              </div>
            </div>
            <div>
              <label className={`text-[11px] font-black uppercase ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'} block mb-1`}>
                Nama Penulis / Sastrawan:
              </label>
              <input
                type="text"
                value={customAuthor}
                onChange={e => setCustomAuthor(e.target.value)}
                placeholder="Contoh: Seno Gumira Ajidarma"
                className={`w-full bg-white border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#2D2319]'} rounded-xl px-3 py-1.5 text-xs font-bold`}
              />
            </div>
          </div>
        )}

        {/* TAB 1: Link URL */}
        {activeTab === 'link' && (
          <div className="space-y-4">
            <div className={`p-3.5 ${isCoastal ? 'bg-[#EBF3F5]' : 'bg-emerald-50'} border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#2D2319]'} rounded-2xl flex items-start gap-3`}>
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 font-semibold space-y-1">
                <p className="font-black text-slate-900">Penyaring Otomatis Iklan & "Baca Juga" Aktif</p>
                <p>
                  Sistem otomatis memangkas iklan sisipan, promosi newsletter, kotak langganan, watermark, dan tautan "Baca juga / Read more" agar naskah tersaji murni dan nyaman dibaca.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-800 flex items-center justify-between">
                <span>Tempel URL Artikel Web:</span>
                <span className="text-[10px] text-slate-500 font-normal">Mendukung The Conversation, Berita, Blog, Sains</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={urlInput}
                  onChange={e => setUrlInput(e.target.value)}
                  placeholder="https://theconversation.com/id/... atau https://..."
                  className={`flex-1 bg-white border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#2D2319]'} rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none`}
                />
                <button
                  type="button"
                  onClick={handleProcessUrl}
                  disabled={isLoading || !urlInput.trim()}
                  className={`px-5 py-2.5 rounded-2xl font-black text-xs uppercase text-white border-2 ${isCoastal ? 'border-[#1E293B] bg-[#2563EB] hover:bg-blue-700' : 'border-[#2D2319] bg-[#10B981] hover:bg-emerald-600'} transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50`}
                >
                  <Globe className="w-4 h-4" />
                  Ekstrak
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Text Paste */}
        {activeTab === 'text' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-800">
                Judul Kustom (Opsional):
              </label>
              <input
                type="text"
                value={customTitle}
                onChange={e => setCustomTitle(e.target.value)}
                placeholder="Biarkan kosong untuk mendeteksi judul otomatis dari baris pertama"
                className={`w-full bg-white border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#2D2319]'} rounded-2xl px-4 py-2 text-xs sm:text-sm font-semibold`}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-800 flex items-center justify-between">
                <span>Tempel Isi Naskah Teks:</span>
                <span className="text-[10px] text-slate-500 font-normal">Pisahkan bab atau beberapa artikel dengan baris kosong</span>
              </label>
              <textarea
                rows={6}
                value={pastedText}
                onChange={e => setPastedText(e.target.value)}
                placeholder="Tempel naskah artikel atau cerita sastra di sini..."
                className={`w-full bg-white border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#2D2319]'} rounded-2xl p-3.5 text-xs sm:text-sm font-medium focus:outline-none`}
              />
            </div>

            <button
              type="button"
              onClick={handleProcessPastedText}
              disabled={isLoading || !pastedText.trim()}
              className={`w-full py-2.5 rounded-2xl font-black text-xs uppercase text-white border-2 ${isCoastal ? 'border-[#1E293B] bg-[#2563EB] hover:bg-blue-700' : 'border-[#2D2319] bg-[#10B981] hover:bg-emerald-600'} transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50`}
            >
              <Sparkles className="w-4 h-4" />
              Proses Naskah Teks
            </button>
          </div>
        )}

        {/* Loading Spinner */}
        {isLoading && (
          <div className={`p-4 ${isCoastal ? 'bg-[#EBF3F5] text-blue-900 border-[#1E293B]' : 'bg-amber-50 text-amber-900 border-[#2D2319]'} border-2 rounded-2xl flex items-center gap-3 animate-pulse`}>
            <RefreshCw className="w-5 h-5 animate-spin shrink-0" />
            <span className="text-xs font-black uppercase tracking-wide">{loadingStatus || 'Memproses...'}</span>
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="p-4 bg-rose-50 text-rose-800 border-2 border-[#2D2319] rounded-2xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="text-xs font-bold">{errorMessage}</div>
          </div>
        )}

        {/* Parsed Articles Preview Cards */}
        {parsedArticles.length > 0 && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h3 className={`text-sm font-black uppercase ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'}`}>
                Hasil Ekstraksi ({parsedArticles.length} Naskah Siap Diimpor)
              </h3>
              <span className="text-xs font-bold text-slate-500">
                Total Kata: {parsedArticles.reduce((acc, curr) => acc + curr.wordCount, 0)} kata
              </span>
            </div>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {parsedArticles.map((art, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 bg-white border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#2D2319]'} rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] space-y-2`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <input
                      type="text"
                      value={art.title}
                      onChange={e => handleUpdateArticleTitle(idx, e.target.value)}
                      className={`flex-1 font-black text-xs sm:text-sm ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'} border-b border-dashed border-slate-300 pb-1 focus:outline-none`}
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteParsedArticle(idx)}
                      className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Hapus"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600 flex-wrap">
                    <span className={`px-2 py-0.5 rounded-full ${isCoastal ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'}`}>
                      {art.language === 'id' ? '🇮🇩 Indonesia' : '🇬🇧 English'}
                    </span>
                    <span>• {art.wordCount} Kata</span>
                    <span>• {art.content.length} Paragraf Bersih</span>
                    {art.sourceNote && <span>• {art.sourceNote}</span>}
                  </div>

                  <p className="text-xs text-slate-700 line-clamp-2 italic bg-slate-50 p-2 rounded-xl">
                    "{art.content[0]}"
                  </p>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t-2 border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-black uppercase text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleSaveAllToHabit}
                className={`px-6 py-2.5 rounded-2xl font-black text-xs uppercase text-white border-2 ${isCoastal ? 'border-[#1E293B] bg-[#2563EB] hover:bg-blue-700 shadow-[3px_3px_0px_0px_#1E293B]' : 'border-[#2D2319] bg-[#10B981] hover:bg-emerald-600 shadow-[3px_3px_0px_0px_#2D2319]'} transition-all flex items-center gap-2 cursor-pointer`}
              >
                <Check className="w-4 h-4" />
                Simpan ke Koleksi Habit ({parsedArticles.length})
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
