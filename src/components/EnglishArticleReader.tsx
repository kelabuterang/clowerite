import React, { useState, useEffect, useMemo } from 'react';
import { Play, Check, ArrowLeft, ArrowRight, Clock, BookOpen, Sparkles, CheckCircle2, XCircle, Volume2, Globe, Download, Upload, Trash2, Search, Bookmark, BookmarkCheck, ExternalLink, HelpCircle, Layers, X, Eye } from 'lucide-react';
import { ENGLISH_ARTICLES, getDailyEnglishArticles } from '../data/englishArticles';
import { DICTIONARY_ENTRIES } from '../data/dictionaryData';
import { EnglishArticle, DictionaryEntry, MyVocabItem, VocabItem } from '../types';
import { useHabit } from '../context/HabitContext';
import { ExportModal } from './ExportModal';
import { ImportArticleModal } from './ImportArticleModal';

const MY_VOCAB_STORAGE_KEY = 'cloverait_my_vocab_list';

interface Props {
  onBack: () => void;
  onNavigateToDictionary?: () => void;
}

type Step = 'select' | 'vocab-preview' | 'reading' | 'quiz' | 'result';

export const EnglishArticleReader: React.FC<Props> = ({ onBack, onNavigateToDictionary }) => {
  const { recordSession, dailyEnglishProgress, recordArticleStep, allEnglishArticles, customEnglishArticles, deleteCustomArticle, theme } = useHabit();
  const isCoastal = theme === 'coastal';
  const [viewMode, setViewMode] = useState<'daily' | 'custom' | 'all'>('daily');
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);

  // Dictionary Integration State
  const [myVocab, setMyVocab] = useState<Record<string, MyVocabItem>>(() => {
    try {
      const saved = localStorage.getItem(MY_VOCAB_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [activeDictEntry, setActiveDictEntry] = useState<DictionaryEntry | null>(null);
  const [activeCustomVocab, setActiveCustomVocab] = useState<VocabItem | null>(null);
  const [isDictModalOpen, setIsDictModalOpen] = useState(false);
  const [vocabSearchTerm, setVocabSearchTerm] = useState('');
  const [isQuickLookupOpen, setIsQuickLookupOpen] = useState(false);
  const [quickLookupQuery, setQuickLookupQuery] = useState('');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Sync myVocab with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(MY_VOCAB_STORAGE_KEY, JSON.stringify(myVocab));
    } catch (e) {
      console.error(e);
    }
  }, [myVocab]);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 2800);
  };

  const findDictMatch = (rawWord: string): DictionaryEntry | undefined => {
    if (!rawWord) return undefined;
    const clean = rawWord.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
    return DICTIONARY_ENTRIES.find(d => {
      const dClean = d.word.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
      return dClean === clean || clean === dClean;
    }) || DICTIONARY_ENTRIES.find(d => {
      const dClean = d.word.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
      return clean.startsWith(dClean) || dClean.startsWith(clean);
    });
  };

  const isWordSavedInMyVocab = (word: string): boolean => {
    const match = findDictMatch(word);
    const key = match ? match.id : `custom-vocab-${word.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    return !!myVocab[key];
  };

  const handleToggleMyVocab = (word: string, customItem?: VocabItem) => {
    const match = findDictMatch(word);
    const key = match ? match.id : `custom-vocab-${word.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    
    setMyVocab(prev => {
      const copy = { ...prev };
      if (copy[key]) {
        delete copy[key];
        showToast(`Kata "${word}" dihapus dari My Vocab.`);
      } else {
        copy[key] = {
          wordId: key,
          word: match ? match.word : word,
          addedAt: new Date().toISOString(),
          mastered: false,
          notes: customItem ? `${customItem.partOfSpeech || ''}: ${customItem.indonesianMeaning || customItem.definitionId || ''}` : undefined
        };
        showToast(`⭐ Kata "${match ? match.word : word}" disimpan ke My Vocab!`);
      }
      return copy;
    });
  };

  const handleOpenWordInDict = (word: string, fallbackItem?: VocabItem) => {
    const match = findDictMatch(word);
    if (match) {
      setActiveDictEntry(match);
      setActiveCustomVocab(null);
    } else if (fallbackItem) {
      setActiveDictEntry(null);
      setActiveCustomVocab(fallbackItem);
    } else {
      setActiveDictEntry(null);
      setActiveCustomVocab({
        word,
        definition: 'Kata belum ada di database offline Oxford. Buka tab Kamus untuk mencari entri terkait.',
        indonesianMeaning: 'Kata baru dalam bacaan'
      });
    }
    setIsDictModalOpen(true);
  };

  const searchedDictResults = useMemo(() => {
    if (!vocabSearchTerm.trim()) return [];
    const query = vocabSearchTerm.toLowerCase().trim();
    return DICTIONARY_ENTRIES.filter(d => 
      d.word.toLowerCase().includes(query) ||
      d.indonesianTranslation.toLowerCase().includes(query) ||
      d.synonyms.some(s => s.toLowerCase().includes(query))
    ).slice(0, 6);
  }, [vocabSearchTerm]);

  const quickLookupResults = useMemo(() => {
    if (!quickLookupQuery.trim()) return [];
    const query = quickLookupQuery.toLowerCase().trim();
    return DICTIONARY_ENTRIES.filter(d => 
      d.word.toLowerCase().includes(query) ||
      d.indonesianTranslation.toLowerCase().includes(query)
    ).slice(0, 5);
  }, [quickLookupQuery]);

  const todayStr = new Date().toISOString().split('T')[0];
  const dailyArticles = getDailyEnglishArticles(todayStr);
  const activeArticleList = viewMode === 'daily'
    ? dailyArticles
    : viewMode === 'custom'
      ? customEnglishArticles
      : allEnglishArticles;

  // Default to first uncompleted daily article
  const defaultArticle = dailyArticles.find(a => !dailyEnglishProgress.completedIds.includes(a.id)) || dailyArticles[0];
  const [selectedArticle, setSelectedArticle] = useState<EnglishArticle>(defaultArticle);
  const [step, setStep] = useState<Step>('select');

  // Reading Timer
  const [readingSeconds, setReadingSeconds] = useState(0);
  const [isReadingActive, setIsReadingActive] = useState(false);
  const [hasStartedReading, setHasStartedReading] = useState(false);

  // Quiz Timer & Answers
  const [quizSeconds, setQuizSeconds] = useState(0);
  const [vocabAnswers, setVocabAnswers] = useState<{ [key: string]: boolean | null }>({});
  const [comprehensionAnswers, setComprehensionAnswers] = useState<{ [key: string]: number | null }>({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  // Audio Pronunciation helper using SpeechSynthesis
  const speakWord = (word: string) => {
    try {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
      }
    } catch {
      // ignore if unsupported
    }
  };

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isReadingActive) {
      interval = setInterval(() => {
        setReadingSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isReadingActive]);

  // Quiz timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (step === 'quiz' && !submittedQuiz) {
      interval = setInterval(() => {
        setQuizSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [step, submittedQuiz]);

  const handleStartReading = () => {
    setReadingSeconds(0);
    setIsReadingActive(true);
    setHasStartedReading(true);
  };

  const handleFinishReading = () => {
    setIsReadingActive(false);
    setStep('quiz');
    setQuizSeconds(0);
  };

  const evaluateResults = () => {
    let vocabCorrect = 0;
    let compCorrect = 0;

    selectedArticle.vocabQuiz.forEach(q => {
      if (vocabAnswers[q.id] === q.isTrue) vocabCorrect++;
    });

    selectedArticle.readingQuiz.forEach(q => {
      if (comprehensionAnswers[q.id] === q.correctIndex) compCorrect++;
    });

    const totalQuestions = 15;
    const totalCorrect = vocabCorrect + compCorrect;
    const accuracy = Math.round((totalCorrect / totalQuestions) * 100);
    const readSec = Math.max(readingSeconds, 1);
    const wpm = Math.round((selectedArticle.wordCount / readSec) * 60);
    const kem = Math.round((wpm * accuracy) / 100);

    return {
      vocabCorrect,
      compCorrect,
      totalCorrect,
      totalQuestions,
      accuracy,
      wpm,
      kem
    };
  };

  const handleSubmitQuiz = () => {
    setSubmittedQuiz(true);
    const stats = evaluateResults();

    recordArticleStep('balon-helium', selectedArticle.id);

    recordSession({
      habitId: 'balon-helium',
      title: selectedArticle.title,
      articleId: selectedArticle.id,
      readingDurationSeconds: readingSeconds,
      quizDurationSeconds: quizSeconds,
      totalDurationSeconds: readingSeconds + quizSeconds,
      wordCount: selectedArticle.wordCount,
      wpm: stats.wpm,
      accuracyPercentage: stats.accuracy,
      kem: stats.kem,
      totalQuestions: stats.totalQuestions,
      correctAnswersCount: stats.totalCorrect
    });

    setStep('result');
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Find next article in daily set
  const currentDailyIndex = dailyArticles.findIndex(a => a.id === selectedArticle.id);
  const nextDailyArticle = currentDailyIndex >= 0 && currentDailyIndex < dailyArticles.length - 1
    ? dailyArticles[currentDailyIndex + 1]
    : dailyArticles.find(a => !dailyEnglishProgress.completedIds.includes(a.id) && a.id !== selectedArticle.id);

  const startNextArticle = (nextArt: EnglishArticle) => {
    setSelectedArticle(nextArt);
    setStep('vocab-preview');
    setHasStartedReading(false);
    setReadingSeconds(0);
    setVocabAnswers({});
    setComprehensionAnswers({});
    setSubmittedQuiz(false);
  };

  const renderDictionaryModal = () => {
    if (!isDictModalOpen || (!activeDictEntry && !activeCustomVocab)) return null;

    const entry = activeDictEntry;
    const custom = activeCustomVocab;
    const currentWord = entry ? entry.word : custom?.word || '';
    const isSaved = isWordSavedInMyVocab(currentWord);

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
        <div 
          className="bg-[#FFFDF9] border-3 border-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] my-8 space-y-6 max-h-[90vh] overflow-y-auto text-slate-900"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b-2 border-slate-900 pb-4">
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                {entry && (
                  <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-lg bg-amber-300 text-slate-950 border border-slate-900 shadow-xs">
                    Level {entry.level} • {entry.partOfSpeech}
                  </span>
                )}
                {custom && (
                  <span className={`text-xs font-black uppercase px-2.5 py-0.5 rounded-lg border border-slate-900 ${
                    isCoastal ? 'bg-[#DDE7F0] text-[#1E3A5F]' : 'bg-[#E9EDC9] text-[#283618]'
                  }`}>
                    {custom.partOfSpeech || 'Vocabulary'}
                  </span>
                )}
                <span className="text-xs font-mono font-bold text-slate-500">
                  {entry ? entry.phonetic : custom?.phonetic || ''}
                </span>
              </div>

              <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 capitalize">
                  {currentWord}
                </h2>
                <button
                  onClick={() => speakWord(currentWord)}
                  title="Dengarkan pengucapan US Audio"
                  className="p-2 rounded-xl bg-amber-100 hover:bg-amber-200 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-slate-900 active:scale-95 transition-transform cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsDictModalOpen(false)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-slate-900 cursor-pointer active:translate-y-0.5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Indonesian Meaning Highlight */}
          <div className="bg-amber-100/80 border-2 border-slate-900 rounded-2xl p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-1">
            <div className="text-[10px] font-black uppercase tracking-wider text-amber-900">
              Terjemahan Bahasa Indonesia:
            </div>
            <div className="text-base sm:text-lg font-black text-slate-950">
              🇮🇩 {entry ? entry.indonesianTranslation : custom?.indonesianMeaning || custom?.definitionId}
            </div>
          </div>

          {/* Definitions */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
              Definisi Lengkap:
            </h4>
            <div className="bg-white border-2 border-slate-900 rounded-2xl p-4 space-y-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <div>
                <span className="text-[11px] font-bold uppercase text-slate-500 block">Bahasa Indonesia:</span>
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  {entry ? entry.detailedDefinition.indonesian : custom?.indonesianMeaning || custom?.definitionId}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase text-slate-500 block">English Definition:</span>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 italic">
                  "{entry ? entry.detailedDefinition.english : custom?.definition}"
                </p>
              </div>
            </div>
          </div>

          {/* Synonyms & Antonyms */}
          {entry && (entry.synonyms.length > 0 || entry.antonyms.length > 0) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {entry.synonyms.length > 0 && (
                <div className="bg-[#FEF9C3] border-2 border-slate-900 rounded-2xl p-3.5 space-y-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-[10px] font-black uppercase text-amber-900">
                    Sinonim (Kata Serupa):
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {entry.synonyms.map((syn, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOpenWordInDict(syn, undefined)}
                        className="text-xs font-bold px-2.5 py-1 bg-white hover:bg-amber-100 rounded-lg border border-slate-900 shadow-xs cursor-pointer active:scale-95"
                      >
                        {syn}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {entry.antonyms.length > 0 && (
                <div className={`border-2 border-slate-900 rounded-2xl p-3.5 space-y-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                  isCoastal ? 'bg-[#E2E8F0]' : 'bg-[#FAEDCD]'
                }`}>
                  <div className={`text-[10px] font-black uppercase ${
                    isCoastal ? 'text-slate-800' : 'text-[#574332]'
                  }`}>
                    Antonim (Lawan Kata):
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {entry.antonyms.map((ant, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOpenWordInDict(ant, undefined)}
                        className={`text-xs font-bold px-2.5 py-1 bg-white rounded-lg border border-slate-900 shadow-xs cursor-pointer active:scale-95 ${
                          isCoastal ? 'hover:bg-[#DDE7F0]' : 'hover:bg-[#E9EDC9]'
                        }`}
                      >
                        {ant}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Similar Words / Family */}
          {entry && entry.similarWords && entry.similarWords.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[11px] font-black uppercase text-slate-500">Kata Terkait / Word Family:</span>
              <div className="flex flex-wrap gap-1.5">
                {entry.similarWords.map((sim, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOpenWordInDict(sim, undefined)}
                    className="text-xs font-bold px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-900 shadow-xs cursor-pointer"
                  >
                    {sim}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sentence & Context Paragraph */}
          {entry && (
            <div className="bg-white border-2 border-slate-900 rounded-2xl p-4 space-y-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div>
                <div className="text-[10px] font-black uppercase text-slate-500">Contoh Kalimat:</div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                  "{entry.exampleSentence.english}"
                </p>
                <p className="text-xs text-slate-600 italic mt-0.5">
                  🇮🇩 {entry.exampleSentence.indonesian}
                </p>
              </div>

              {entry.exampleParagraph && (
                <div className="pt-2 border-t border-slate-200">
                  <div className="text-[10px] font-black uppercase text-slate-500">Konteks Paragraf Nyata:</div>
                  <p className="text-xs font-serif leading-relaxed text-slate-800 mt-1">
                    "{entry.exampleParagraph.english}"
                  </p>
                  <p className="text-[11px] text-slate-600 italic mt-1 bg-slate-50 p-2 rounded-lg border border-slate-200">
                    🇮🇩 {entry.exampleParagraph.indonesian}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Action Row */}
          <div className="pt-2 border-t-2 border-slate-900 flex items-center justify-between flex-wrap gap-3">
            <button
              onClick={() => handleToggleMyVocab(currentWord, custom || undefined)}
              className={`px-4 py-2.5 rounded-xl border-2 border-slate-900 font-black text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 cursor-pointer transition-all active:translate-y-0.5 ${
                isSaved ? 'bg-amber-400 text-slate-950' : 'bg-white hover:bg-amber-50 text-slate-900'
              }`}
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4 fill-slate-950" /> : <Bookmark className="w-4 h-4" />}
              {isSaved ? 'Tersimpan di My Vocab' : 'Simpan ke My Vocab'}
            </button>

            <div className="flex items-center gap-2">
              {onNavigateToDictionary && (
                <button
                  onClick={() => {
                    setIsDictModalOpen(false);
                    onNavigateToDictionary();
                  }}
                  className="px-4 py-2.5 rounded-xl bg-amber-200 hover:bg-amber-300 border-2 border-slate-900 font-black text-xs uppercase text-slate-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Buka di Tab Kamus
                </button>
              )}

              <button
                onClick={() => setIsDictModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // STEP 1: SELECT ENGLISH ARTICLE
  if (step === 'select') {
    return (
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} />
        <ImportArticleModal isOpen={isImportOpen} onClose={() => setIsImportOpen(false)} />

        {/* Back and Action Bar */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-black uppercase text-[#2D2319] bg-white px-4 py-2 rounded-xl border-2 border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319] hover:bg-stone-50 active:translate-y-0.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" /> Kembali ke Habit
          </button>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setIsImportOpen(true)}
              className={`flex items-center gap-1.5 text-xs font-black uppercase ${isCoastal ? 'bg-[#D0E1F0] hover:bg-[#BFDBFE] text-[#1E40AF]' : 'bg-[#ECFDF5] hover:bg-emerald-100 text-[#047857]'} px-3.5 py-2 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'} cursor-pointer transition-all`}
            >
              <Upload className="w-3.5 h-3.5" /> Impor Link / Naskah
            </button>

            <button
              type="button"
              onClick={() => setIsExportOpen(true)}
              className="flex items-center gap-1.5 text-xs font-black uppercase bg-[#FEF3C7] hover:bg-amber-200 text-[#2D2319] px-3.5 py-2 rounded-xl border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Eksport PDF / Link
            </button>

            <span className={`text-xs font-black uppercase px-3.5 py-2 rounded-xl border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] ${
              isCoastal
                ? 'bg-[#DDE7F0] text-[#1E3A5F] border-[#1E293B]'
                : 'bg-[#E9EDC9] text-[#283618] border-[#2D2319]'
            }`}>
              Progres: {dailyEnglishProgress.completedCount} / 5 Selesai
            </span>
          </div>
        </div>

        {/* Bento Header */}
        <div className={`bg-white rounded-2xl p-6 border-2 space-y-3 ${
          isCoastal ? 'border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]' : 'border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319]'
        }`}>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className={`text-xs font-black uppercase tracking-wider flex items-center gap-1 ${
                isCoastal ? 'text-[#3A6B88]' : 'text-[#709752]'
              }`}>
                <Sparkles className={`w-3.5 h-3.5 ${isCoastal ? 'fill-[#3A6B88]' : 'fill-[#709752]'}`} /> Habit Ranting Kata (5 English Articles Berlanjut)
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#2D2319] uppercase tracking-tight">
                English Reading & Vocabulary Booster
              </h2>
            </div>

            {/* View Mode Tabs */}
            <div className={`flex items-center p-1 rounded-xl border-2 gap-1 flex-wrap ${
              isCoastal ? 'bg-[#F1F5F9] border-slate-700' : 'bg-[#FDFBF7] border-[#2D2319]'
            }`}>
              <button
                type="button"
                onClick={() => setViewMode('daily')}
                className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all cursor-pointer ${
                  viewMode === 'daily'
                    ? isCoastal ? 'bg-[#3A6B88] text-white shadow-xs' : 'bg-[#709752] text-white shadow-xs'
                    : isCoastal ? 'text-slate-600 hover:text-slate-900' : 'text-[#574332] hover:text-[#2D2319]'
                }`}
              >
                Daily 5-Pack (5/5)
              </button>
              <button
                type="button"
                onClick={() => setViewMode('custom')}
                className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all cursor-pointer flex items-center gap-1 ${
                  viewMode === 'custom'
                    ? isCoastal ? 'bg-[#3A6B88] text-white shadow-xs' : 'bg-[#709752] text-white shadow-xs'
                    : isCoastal ? 'text-slate-600 hover:text-slate-900' : 'text-[#574332] hover:text-[#2D2319]'
                }`}
              >
                <span>🍀 My Imports</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  viewMode === 'custom'
                    ? 'bg-white ' + (isCoastal ? 'text-[#3A6B88]' : 'text-[#709752]')
                    : (isCoastal ? 'bg-[#DDE7F0] text-[#1E3A5F]' : 'bg-[#E9EDC9] text-[#283618]')
                }`}>
                  {customEnglishArticles.length}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all cursor-pointer ${
                  viewMode === 'all'
                    ? isCoastal ? 'bg-[#3A6B88] text-white shadow-xs' : 'bg-[#709752] text-white shadow-xs'
                    : isCoastal ? 'text-slate-600 hover:text-slate-900' : 'text-[#574332] hover:text-[#2D2319]'
                }`}
              >
                All ({allEnglishArticles.length})
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 pt-2">
            <div className="flex items-center justify-between text-xs font-black">
              <span className={isCoastal ? 'text-slate-600' : 'text-[#574332]'}>Daily Target: 5 English Articles per Day</span>
              <span className={isCoastal ? 'text-[#3A6B88]' : 'text-[#709752]'}>
                {dailyEnglishProgress.completedCount} of 5 Completed ({Math.min(100, Math.round((dailyEnglishProgress.completedCount / 5) * 100))}%)
              </span>
            </div>
            <div className={`w-full h-3 rounded-full border-2 overflow-hidden p-0.5 ${
              isCoastal ? 'bg-[#F1F5F9] border-slate-700' : 'bg-[#FDFBF7] border-[#2D2319]'
            }`}>
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  isCoastal ? 'bg-[#3A6B88]' : 'bg-[#709752]'
                }`}
                style={{ width: `${Math.min(100, (dailyEnglishProgress.completedCount / 5) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Empty State for Custom Articles */}
        {viewMode === 'custom' && customEnglishArticles.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 border-2 border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319] text-center space-y-4 max-w-lg mx-auto">
            <div className={`w-16 h-16 border-2 rounded-2xl flex items-center justify-center mx-auto text-2xl ${
              isCoastal
                ? 'bg-[#EBF1F5] border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
                : 'bg-[#E9EDC9] border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'
            }`}>
              📖
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-black text-[#2D2319]">No English Imported Articles Yet</h3>
              <p className="text-xs text-[#574332] font-semibold">
                Upload English PDF passages, paste article URLs, or drop raw text. Cloverait will auto-generate vocabulary banks, synonyms, and 15 reading comprehension questions!
              </p>
            </div>
            <button
              onClick={() => setIsImportOpen(true)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-black text-xs uppercase tracking-wider border-2 cursor-pointer active:translate-y-0.5 transition-all ${
                isCoastal
                  ? 'bg-[#3A6B88] hover:bg-[#2C4A6F] border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
                  : 'bg-[#709752] hover:bg-[#588157] border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'
              }`}
            >
              <Upload className="w-4 h-4" />
              Import English Articles Now
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeArticleList.map((art, idx) => {
              const isCompleted = dailyEnglishProgress.completedIds.includes(art.id);
              const isCustom = art.id.startsWith('custom-');

              return (
                <div
                  key={art.id}
                  onClick={() => {
                    setSelectedArticle(art);
                    setStep('vocab-preview');
                    setHasStartedReading(false);
                    setReadingSeconds(0);
                    setVocabAnswers({});
                    setComprehensionAnswers({});
                    setSubmittedQuiz(false);
                  }}
                  className={`bg-white rounded-2xl p-6 border-2 border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319] hover:shadow-[6px_6px_0px_0px_#2D2319] hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between group space-y-4 ${
                    isCompleted ? 'ring-2 ring-emerald-500 bg-emerald-50/40' : ''
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black bg-[#2D2319] text-white w-6 h-6 rounded-md flex items-center justify-center">
                          #{idx + 1}
                        </span>
                        <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border ${
                          isCoastal
                            ? 'bg-[#DDE7F0] text-[#1E3A5F] border-slate-700'
                            : 'bg-[#E9EDC9] text-[#283618] border-[#2D2319]'
                        }`}>
                          {art.category}
                        </span>
                        {isCustom && (
                          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-[#2D2319] flex items-center gap-1">
                            🍀 My Import
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5">
                        {isCompleted ? (
                          <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-600 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Completed Today
                          </span>
                        ) : (
                          <span className="text-xs font-black uppercase text-slate-500 flex items-center gap-1">
                            <Globe className="w-3.5 h-3.5 stroke-[2.5]" /> English • ~{art.estimatedMinutes} Mins
                          </span>
                        )}

                        {isCustom && (
                          <button
                            type="button"
                            title="Delete this custom article"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (window.confirm(`Delete article "${art.title}" from custom list?`)) {
                                deleteCustomArticle('ranting-kata', art.id);
                              }
                            }}
                            className="p-1 rounded-md text-red-500 hover:text-red-700 hover:bg-red-50 border border-transparent hover:border-red-300 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    <h3 className={`text-lg font-black text-[#2D2319] transition-colors leading-snug ${
                      isCoastal ? 'group-hover:text-[#3A6B88]' : 'group-hover:text-[#709752]'
                    }`}>
                      {art.title}
                    </h3>

                    <p className="text-xs font-medium text-[#574332] line-clamp-2 leading-relaxed">
                      {art.content[0]}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t-2 border-slate-100 text-xs font-black">
                    <span className="text-slate-500 uppercase">{art.wordCount} Words • 10 Vocab + 15 Quiz</span>
                    <span className="text-[#2D2319] bg-[#FEF3C7] px-3 py-1 rounded-lg border border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] inline-flex items-center gap-1 group-hover:bg-[#FDE68A]">
                      {isCompleted ? 'Re-read' : 'Preview Vocab'} <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // STEP 2: VOCABULARY PREVIEW
  if (step === 'vocab-preview') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Toast Notification */}
        {toastMsg && (
          <div className="fixed top-20 right-6 z-50 bg-[#2D2319] text-amber-200 border-2 border-amber-400 px-4 py-2.5 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs font-black flex items-center gap-2 animate-bounce">
            <Sparkles className="w-4 h-4 text-amber-400" />
            {toastMsg}
          </div>
        )}

        <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-5">
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <button
              onClick={() => setStep('select')}
              className="text-xs font-black uppercase text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
            >
              ← Pilih Artikel Lain
            </button>

            <div className="flex items-center gap-2 flex-wrap">
              {onNavigateToDictionary && (
                <button
                  type="button"
                  onClick={onNavigateToDictionary}
                  className="text-xs font-black uppercase text-[#2D2319] bg-[#FEF3C7] hover:bg-[#FDE68A] px-3.5 py-2 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                  Buka Tab Kamus Oxford
                </button>
              )}
              <span className="text-xs font-black uppercase bg-amber-300 text-slate-950 px-3 py-2 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Langkah 1 dari 3: Pelajari Kosakata
              </span>
            </div>
          </div>

          <div>
            <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-wider ${
              isCoastal ? 'text-[#3A6B88]' : 'text-[#709752]'
            }`}>
              <Sparkles className={`w-3.5 h-3.5 ${isCoastal ? 'fill-[#3A6B88]' : 'fill-[#709752]'}`} /> Terhubung dengan Kamus Inggris–Indonesia
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight mt-1">
              10 Vocabulary Kunci: {selectedArticle.title}
            </h2>
            <p className="text-xs sm:text-sm font-bold text-slate-600 mt-1">
              Klik <strong>"Detail Kamus"</strong> untuk sinonim/antonim lengkap atau tombol <strong>⭐</strong> untuk menyimpan ke <em>My Vocab</em>!
            </p>
          </div>

          {/* Quick Search in Dictionary */}
          <div className="bg-[#FAF6EE] border-2 border-slate-900 rounded-2xl p-3.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-2">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-600" />
              <input
                type="text"
                value={vocabSearchTerm}
                onChange={e => setVocabSearchTerm(e.target.value)}
                placeholder="🔍 Cari kata lain di Kamus Inggris-Indonesia Oxford 3000/5000..."
                className="w-full bg-white border-2 border-slate-900 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-400 shadow-xs"
              />
              {vocabSearchTerm && (
                <button
                  onClick={() => setVocabSearchTerm('')}
                  className="p-1 text-slate-500 hover:text-slate-800"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Instant Search Results Dropdown */}
            {searchedDictResults.length > 0 && (
              <div className="bg-white border-2 border-slate-900 rounded-xl p-2 divide-y divide-slate-100 shadow-sm space-y-1">
                <div className="text-[10px] font-black uppercase text-slate-500 px-2 py-0.5">
                  Hasil Pencarian Kamus ({searchedDictResults.length}):
                </div>
                {searchedDictResults.map(entry => (
                  <div
                    key={entry.id}
                    className="p-2 flex items-center justify-between hover:bg-amber-50 rounded-lg transition-colors cursor-pointer"
                    onClick={() => handleOpenWordInDict(entry.word, undefined)}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-xs font-black text-slate-900">{entry.word}</strong>
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-300 uppercase">
                          {entry.level}
                        </span>
                        <span className="text-[10px] text-slate-500 italic font-mono">{entry.phonetic}</span>
                      </div>
                      <p className="text-[11px] font-medium text-slate-600 line-clamp-1">
                        🇮🇩 {entry.indonesianTranslation}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          handleToggleMyVocab(entry.word, undefined);
                        }}
                        title="Simpan ke My Vocab"
                        className="p-1 rounded bg-white hover:bg-amber-100 border border-slate-300"
                      >
                        {isWordSavedInMyVocab(entry.word) ? (
                          <BookmarkCheck className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                        ) : (
                          <Bookmark className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </button>
                      <button
                        onClick={() => handleOpenWordInDict(entry.word, undefined)}
                        className="px-2 py-1 bg-amber-300 text-slate-950 font-black text-[10px] rounded border border-slate-900 uppercase"
                      >
                        Buka
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 10 Vocab Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {selectedArticle.vocabList.map((v, i) => {
              const dictMatch = findDictMatch(v.word);
              const isSaved = isWordSavedInMyVocab(v.word);

              return (
                <div
                  key={i}
                  className="bg-[#FFFDF9] rounded-2xl p-4 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="w-6 h-6 rounded-lg bg-amber-300 text-slate-950 font-mono font-black text-xs flex items-center justify-center border border-slate-900">
                          {i + 1}
                        </span>
                        <strong className="text-sm font-black text-slate-900">{v.word}</strong>
                        {dictMatch && (
                          <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-[#2D2319]">
                            {dictMatch.level}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => speakWord(v.word)}
                          title="Dengarkan pengucapan audio"
                          className="p-1.5 rounded-lg bg-white border border-slate-900 hover:bg-amber-100 active:scale-95 transition-transform text-slate-900 cursor-pointer"
                        >
                          <Volume2 className="w-3.5 h-3.5 text-slate-900" />
                        </button>
                        <button
                          onClick={() => handleToggleMyVocab(v.word, v)}
                          title={isSaved ? 'Tersimpan di My Vocab' : 'Simpan ke My Vocab'}
                          className={`p-1.5 rounded-lg border border-slate-900 transition-all cursor-pointer ${
                            isSaved ? 'bg-amber-400 text-slate-950 shadow-xs' : 'bg-white text-slate-500 hover:text-slate-900 hover:bg-amber-50'
                          }`}
                        >
                          {isSaved ? (
                            <BookmarkCheck className="w-3.5 h-3.5 fill-slate-950" />
                          ) : (
                            <Bookmark className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="text-xs space-y-1.5">
                      <p className="text-slate-600 italic">
                        {v.partOfSpeech} • <span className="font-mono text-slate-700">{v.phonetic}</span>
                      </p>
                      <p className="font-bold text-slate-900 leading-snug">
                        {v.definition || (dictMatch && dictMatch.detailedDefinition.english)}
                      </p>
                      <div className="text-amber-950 font-bold bg-amber-100/90 px-2.5 py-1 rounded-lg border border-amber-300/80 text-[11px] flex items-center justify-between gap-1">
                        <span>🇮🇩 {v.indonesianMeaning || v.definitionId || (dictMatch && dictMatch.indonesianTranslation)}</span>
                      </div>
                      {dictMatch && dictMatch.synonyms.length > 0 && (
                        <div className="flex items-center gap-1 flex-wrap pt-0.5 text-[10px] text-slate-600">
                          <span className="font-bold uppercase text-slate-500">Sinonim:</span>
                          {dictMatch.synonyms.slice(0, 3).map((syn, sIdx) => (
                            <span key={sIdx} className="bg-slate-100 border border-slate-300 px-1.5 py-0.2 rounded font-medium">
                              {syn}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-bold text-slate-500">
                      {isSaved ? '⭐ Tersimpan di My Vocab' : 'Kamus Oxford Ready'}
                    </span>
                    <button
                      onClick={() => handleOpenWordInDict(v.word, v)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-200 hover:bg-amber-300 text-[#2D2319] font-black text-[11px] uppercase border border-slate-900 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 transition-all cursor-pointer"
                    >
                      <BookOpen className="w-3 h-3 text-amber-800" />
                      Detail Kamus
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex items-center justify-between flex-wrap gap-3">
            <div className="text-xs font-bold text-slate-500">
              💡 Tip: Kosakata ini akan diuji pada 10 soal awal kuis pemahaman setelah membaca.
            </div>
            <button
              onClick={() => {
                setStep('reading');
                handleStartReading();
              }}
              className={`w-full sm:w-auto text-white font-black py-3 px-8 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm uppercase transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5 ${
                isCoastal ? 'bg-[#3A6B88] hover:bg-[#2C4A6F]' : 'bg-[#709752] hover:bg-[#588157]'
              }`}
            >
              Mulai Membaca Teks Lengkap
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* DICTIONARY MODAL POPUP */}
        {renderDictionaryModal()}
      </div>
    );
  }

  // STEP 3: READING TEXT
  if (step === 'reading') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Toast Notification */}
        {toastMsg && (
          <div className="fixed top-20 right-6 z-50 bg-[#2D2319] text-amber-200 border-2 border-amber-400 px-4 py-2.5 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs font-black flex items-center gap-2 animate-bounce">
            <Sparkles className="w-4 h-4 text-amber-400" />
            {toastMsg}
          </div>
        )}

        <div className="sticky top-20 z-30 bg-white p-4 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => {
                setIsReadingActive(false);
                setStep('select');
              }}
              className="text-xs font-black uppercase text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
            >
              ← Ganti Artikel
            </button>

            <div className={`flex items-center gap-2 border-2 border-slate-900 px-3.5 py-1.5 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
              isCoastal ? 'bg-[#DDE7F0] text-[#1E3A5F]' : 'bg-[#E9EDC9] text-[#283618]'
            }`}>
              <Clock className={`w-4 h-4 stroke-[2.5] ${
                isCoastal ? 'text-[#1E3A5F]' : 'text-[#283618]'
              } ${isReadingActive ? 'animate-spin' : ''}`} />
              <span className="font-mono font-black text-base text-slate-900">
                {formatTime(readingSeconds)}
              </span>
              <span className={`text-[10px] uppercase font-black ${
                isCoastal ? 'text-[#1E3A5F]' : 'text-[#283618]'
              }`}>
                {isReadingActive ? 'Reading' : 'Paused'}
              </span>
            </div>

            {/* Quick Dictionary Trigger */}
            <button
              onClick={() => setIsQuickLookupOpen(!isQuickLookupOpen)}
              className={`text-xs font-black uppercase px-3 py-1.5 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 cursor-pointer transition-colors ${
                isQuickLookupOpen ? 'bg-amber-400 text-slate-950' : 'bg-amber-100 hover:bg-amber-200 text-amber-900'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              {isQuickLookupOpen ? 'Tutup Kamus Cepat' : '🔎 Kamus Cepat'}
            </button>
          </div>

          <button
            onClick={handleFinishReading}
            className={`text-white font-black px-6 py-2.5 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xs uppercase transition-all flex items-center gap-2 cursor-pointer active:translate-y-0.5 ${
              isCoastal ? 'bg-[#3A6B88] hover:bg-[#2C4A6F]' : 'bg-[#709752] hover:bg-[#588157]'
            }`}
          >
            Selesai Baca & Lanjut Kuis (15 Soal)
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

        {/* Quick Dictionary Floating Bar */}
        {isQuickLookupOpen && (
          <div className="bg-[#FEF3C7] border-2 border-slate-900 rounded-2xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-black text-[#2D2319] uppercase">
                <BookOpen className="w-4 h-4 text-amber-800" />
                Cari Kosakata Saat Membaca (Oxford 3000/5000)
              </div>
              <button
                onClick={() => setIsQuickLookupOpen(false)}
                className="text-slate-600 hover:text-slate-900 text-xs font-bold"
              >
                ✕ Tutup
              </button>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={quickLookupQuery}
                onChange={e => setQuickLookupQuery(e.target.value)}
                placeholder="Ketik kata bahasa Inggris yang ingin kamu cari artinya..."
                className="w-full bg-white border-2 border-slate-900 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 shadow-xs"
              />
            </div>

            {quickLookupResults.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {quickLookupResults.map(entry => (
                  <div
                    key={entry.id}
                    onClick={() => handleOpenWordInDict(entry.word, undefined)}
                    className="bg-white border-2 border-slate-900 rounded-xl p-2.5 hover:bg-amber-50 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-xs font-black text-slate-900">{entry.word}</strong>
                        <span className="text-[10px] font-black px-1.5 py-0.2 rounded bg-amber-200 text-amber-900 uppercase">
                          {entry.level}
                        </span>
                        <span className="text-[10px] italic text-slate-500 font-mono">{entry.phonetic}</span>
                      </div>
                      <p className="text-[11px] font-bold text-amber-900 mt-0.5">
                        🇮🇩 {entry.indonesianTranslation}
                      </p>
                    </div>

                    <button
                      onClick={e => {
                        e.stopPropagation();
                        handleOpenWordInDict(entry.word, undefined);
                      }}
                      className="px-2 py-1 bg-amber-300 text-slate-950 font-black text-[10px] rounded border border-slate-900 uppercase"
                    >
                      Buka
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Reading Body */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-6">
          <div className="border-b-2 border-slate-900 pb-4 space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-black uppercase px-3 py-1 rounded-md border border-slate-900 ${
                isCoastal ? 'bg-[#DDE7F0] text-[#1E3A5F]' : 'bg-[#E9EDC9] text-[#283618]'
              }`}>
                {selectedArticle.category}
              </span>
              <span className="text-xs font-bold text-slate-500">
                {selectedArticle.wordCount} Kata • Sumber: {selectedArticle.source}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight uppercase">
              {selectedArticle.title}
            </h1>
          </div>

          <div className="space-y-4 text-slate-900 text-lg leading-relaxed font-serif">
            {selectedArticle.content.map((par, i) => (
              <p key={i} className="text-justify leading-loose indent-8">
                {par}
              </p>
            ))}
          </div>

          <div className="pt-6 border-t-2 border-slate-900 flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs font-bold text-slate-500 uppercase">
              Pastikan kamu memahami pesan utama sebelum menekan tombol kuis
            </span>
            <button
              onClick={handleFinishReading}
              className={`w-full sm:w-auto text-white font-black px-8 py-3 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm uppercase transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5 ${
                isCoastal ? 'bg-[#3A6B88] hover:bg-[#2C4A6F]' : 'bg-[#709752] hover:bg-[#588157]'
              }`}
            >
              Selesai Membaca & Mulai Kuis (15 Soal)
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* DICTIONARY MODAL POPUP */}
        {renderDictionaryModal()}
      </div>
    );
  }

  // STEP 4: 15 QUESTIONS QUIZ (10 Vocab + 5 Comprehension)
  if (step === 'quiz') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        <div className="bg-white rounded-2xl p-6 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase">
              Kuis Pemahaman: 15 Soal
            </h2>
            <p className="text-xs sm:text-sm font-bold text-slate-600">
              10 Soal Kosakata + 5 Soal Reading Comprehension
            </p>
          </div>
          <div className="flex items-center gap-2 bg-amber-100 border-2 border-slate-900 px-3.5 py-1.5 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Clock className="w-4 h-4 text-amber-900 stroke-[2.5]" />
            <span className="font-mono font-black text-base text-slate-900">
              {formatTime(quizSeconds)}
            </span>
          </div>
        </div>

        {/* SECTION 1: 10 VOCABULARY QUESTIONS */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <span className={`w-7 h-7 rounded-lg text-white font-black text-xs flex items-center justify-center border border-slate-900 ${
              isCoastal ? 'bg-[#3A6B88]' : 'bg-[#709752]'
            }`}>
              A
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight">
              Bagian 1: Uji Kosakata (10 Soal True/False)
            </h3>
          </div>

          {selectedArticle.vocabQuiz.map((q, idx) => (
            <div key={q.id} className="bg-white rounded-2xl p-5 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-3">
              <div className="flex items-start gap-3">
                <span className={`font-mono font-black text-slate-900 text-sm border border-slate-900 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                  isCoastal ? 'bg-[#DDE7F0]' : 'bg-[#E9EDC9]'
                }`}>
                  {idx + 1}
                </span>
                <p className="text-sm sm:text-base font-black text-slate-900">
                  {q.statement}
                </p>
              </div>

              <div className="flex items-center gap-3 pl-10">
                <button
                  type="button"
                  onClick={() => setVocabAnswers(prev => ({ ...prev, [q.id]: true }))}
                  className={`px-5 py-2 rounded-xl border-2 border-slate-900 text-xs font-black uppercase transition-all ${
                    vocabAnswers[q.id] === true
                      ? 'bg-emerald-400 text-slate-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  BENAR (TRUE)
                </button>
                <button
                  type="button"
                  onClick={() => setVocabAnswers(prev => ({ ...prev, [q.id]: false }))}
                  className={`px-5 py-2 rounded-xl border-2 border-slate-900 text-xs font-black uppercase transition-all ${
                    vocabAnswers[q.id] === false
                      ? 'bg-rose-400 text-slate-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  SALAH (FALSE)
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 2: 5 COMPREHENSION QUESTIONS */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 px-1">
            <span className="w-7 h-7 rounded-lg bg-blue-500 text-white font-black text-xs flex items-center justify-center border border-slate-900">
              B
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight">
              Bagian 2: Reading Comprehension (5 Soal Pilihan Ganda)
            </h3>
          </div>

          {selectedArticle.readingQuiz.map((q, idx) => (
            <div key={q.id} className="bg-white rounded-2xl p-5 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-3">
              <div className="flex items-start gap-3">
                <span className="font-mono font-black text-slate-900 text-sm bg-blue-100 border border-slate-900 w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
                  {idx + 11}
                </span>
                <p className="text-sm sm:text-base font-black text-slate-900">
                  {q.question}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 pl-10">
                {q.options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => setComprehensionAnswers(prev => ({ ...prev, [q.id]: optIdx }))}
                    className={`p-3 rounded-xl border-2 border-slate-900 text-xs font-black text-left transition-all flex items-start gap-2.5 ${
                      comprehensionAnswers[q.id] === optIdx
                        ? 'bg-amber-300 text-slate-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <span className="w-5 h-5 rounded bg-white border border-slate-900 flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{opt}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <button
            onClick={handleSubmitQuiz}
            className={`w-full text-white font-black py-3.5 px-6 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-base uppercase transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5 ${
              isCoastal ? 'bg-[#3A6B88] hover:bg-[#2C4A6F]' : 'bg-[#709752] hover:bg-[#588157]'
            }`}
          >
            Kirim Jawaban & Evaluasi Hasil
            <Sparkles className="w-5 h-5 fill-white" />
          </button>
        </div>
      </div>
    );
  }

  // STEP 5: RESULTS & DETAILED REVIEW
  const stats = evaluateResults();

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className={`text-white rounded-2xl p-6 sm:p-8 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center space-y-4 ${
        isCoastal ? 'bg-[#3A6B88]' : 'bg-[#709752]'
      }`}>
        <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-900 mx-auto flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <Globe className="w-9 h-9 text-slate-900 stroke-[2.5]" />
        </div>

        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-white text-slate-950 px-3 py-1 rounded-md border border-slate-900 shadow-sm">
            <Sparkles className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#3A6B88]' : 'text-[#709752]'}`} />
            Progres Habit Harian: {dailyEnglishProgress.completedCount} / 5 English Articles Selesai
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-2">
            {dailyEnglishProgress.completedCount >= 5
              ? '🎉 Sempurna! Habit Balon Helium 5/5 Tuntas Hari Ini!'
              : `Article #${currentDailyIndex >= 0 ? currentDailyIndex + 1 : 1} Completed!`}
          </h2>
          <p className="text-xs sm:text-sm font-bold opacity-90">
            {selectedArticle.title}
          </p>
        </div>

        {/* Continuous Action CTA */}
        {nextDailyArticle && dailyEnglishProgress.completedCount < 5 && (
          <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-left">
              <div className={`text-[10px] font-black uppercase ${
                isCoastal ? 'text-[#3A6B88]' : 'text-[#283618]'
              }`}>Next Article ({Math.min(5, dailyEnglishProgress.completedCount + 1)}/5):</div>
              <div className="text-sm font-black line-clamp-1">{nextDailyArticle.title}</div>
            </div>
            <button
              onClick={() => startNextArticle(nextDailyArticle)}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-white text-xs sm:text-sm font-black uppercase border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-1.5 shrink-0 active:translate-y-0.5 ${
                isCoastal ? 'bg-[#3A6B88] hover:bg-[#2C4A6F]' : 'bg-[#709752] hover:bg-[#588157]'
              }`}
            >
              Continue to Article {Math.min(5, dailyEnglishProgress.completedCount + 1)}/5 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="bg-white rounded-xl p-3 text-slate-900 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[10px] font-black uppercase text-slate-500 block">Speed</span>
            <span className="text-2xl font-black font-mono text-slate-900">{stats.wpm}</span>
            <span className="text-[10px] font-bold text-slate-600 block">WPM</span>
          </div>

          <div className="bg-white rounded-xl p-3 text-slate-900 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[10px] font-black uppercase text-slate-500 block">KEM Score</span>
            <span className={`text-2xl font-black font-mono ${
              isCoastal ? 'text-[#3A6B88]' : 'text-[#709752]'
            }`}>{stats.kem}</span>
            <span className="text-[10px] font-bold text-slate-600 block">Eff. Speed</span>
          </div>

          <div className="bg-white rounded-xl p-3 text-slate-900 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[10px] font-black uppercase text-slate-500 block">Accuracy</span>
            <span className="text-2xl font-black font-mono text-emerald-600">{stats.accuracy}%</span>
            <span className="text-[10px] font-bold text-slate-600 block">{stats.totalCorrect}/15 Correct</span>
          </div>

          <div className="bg-white rounded-xl p-3 text-slate-900 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[10px] font-black uppercase text-slate-500 block">Reading Time</span>
            <span className="text-2xl font-black font-mono text-purple-600">{formatTime(readingSeconds)}</span>
            <span className="text-[10px] font-bold text-slate-600 block">Duration</span>
          </div>
        </div>
      </div>

      {/* ANSWER KEYS & EXPLANATIONS */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-slate-900 px-1 uppercase tracking-tight">
          Kunci Jawaban & Penjelasan:
        </h3>

        {/* Vocab Quiz Review */}
        <div className="space-y-3">
          <div className="text-xs font-black text-slate-600 uppercase tracking-wider">
            Bagian 1: Kosakata (10 Soal)
          </div>

          {selectedArticle.vocabQuiz.map((q, idx) => {
            const userAns = vocabAnswers[q.id];
            const isCorrect = userAns === q.isTrue;

            return (
              <div key={q.id} className="bg-white rounded-2xl p-5 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5">
                    <span className="font-black text-xs bg-slate-100 text-slate-900 border border-slate-900 w-6 h-6 rounded-md flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <span className="text-sm font-black text-slate-900">{q.statement}</span>
                    </div>
                  </div>
                  {isCorrect ? (
                    <span className="text-xs font-black text-emerald-950 bg-emerald-300 border border-slate-900 px-2.5 py-0.5 rounded-md flex items-center gap-1 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                    </span>
                  ) : (
                    <span className="text-xs font-black text-rose-950 bg-rose-300 border border-slate-900 px-2.5 py-0.5 rounded-md flex items-center gap-1 shrink-0">
                      <XCircle className="w-3.5 h-3.5" /> Incorrect
                    </span>
                  )}
                </div>

                <div className="text-xs space-y-1.5 pl-8 font-medium">
                  <p className="text-slate-600">
                    Your choice: <strong className="text-slate-900">{userAns ? 'TRUE' : 'FALSE'}</strong> • Correct: <strong className="text-emerald-700">{q.isTrue ? 'TRUE' : 'FALSE'}</strong>
                  </p>
                  <p className="text-slate-600 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    💡 <strong>Explanation:</strong> {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* MCQs Review */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-black text-slate-600 uppercase tracking-wider">
            Bagian 2: Reading Comprehension (5 Soal)
          </div>

          {selectedArticle.readingQuiz.map((q, idx) => {
            const userAns = comprehensionAnswers[q.id];
            const isCorrect = userAns === q.correctIndex;

            return (
              <div key={q.id} className="bg-white rounded-2xl p-5 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5">
                    <span className="font-black text-xs bg-slate-100 text-slate-900 border border-slate-900 w-6 h-6 rounded-md flex items-center justify-center shrink-0">
                      {idx + 11}
                    </span>
                    <p className="text-sm font-black text-slate-900">{q.question}</p>
                  </div>
                  {isCorrect ? (
                    <span className="text-xs font-black text-emerald-950 bg-emerald-300 border border-slate-900 px-2.5 py-0.5 rounded-md flex items-center gap-1 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                    </span>
                  ) : (
                    <span className="text-xs font-black text-rose-950 bg-rose-300 border border-slate-900 px-2.5 py-0.5 rounded-md flex items-center gap-1 shrink-0">
                      <XCircle className="w-3.5 h-3.5" /> Incorrect
                    </span>
                  )}
                </div>

                <div className="text-xs space-y-1.5 pl-8 font-medium">
                  <p className="text-emerald-700 font-bold">
                    Correct Option: ({String.fromCharCode(65 + q.correctIndex)}) {q.options[q.correctIndex]}
                  </p>
                  <p className="text-slate-600 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    💡 <strong>Explanation:</strong> {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-4 flex items-center justify-between gap-3 flex-wrap">
        <button
          onClick={() => setStep('select')}
          className="px-5 py-2.5 rounded-xl bg-white border-2 border-slate-900 text-xs sm:text-sm font-black uppercase text-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-50 cursor-pointer active:translate-y-0.5"
        >
          Daftar 5 Artikel Hari Ini
        </button>

        <div className="flex items-center gap-2">
          {nextDailyArticle && dailyEnglishProgress.completedCount < 5 && (
            <button
              onClick={() => startNextArticle(nextDailyArticle)}
              className={`px-5 py-2.5 rounded-xl text-white text-xs sm:text-sm font-black uppercase border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 cursor-pointer active:translate-y-0.5 ${
                isCoastal ? 'bg-[#3A6B88] hover:bg-[#2C4A6F]' : 'bg-[#709752] hover:bg-[#588157]'
              }`}
            >
              Next Article #{Math.min(5, dailyEnglishProgress.completedCount + 1)} <ArrowRight className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onBack}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-black uppercase border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer active:translate-y-0.5"
          >
            Selesai & Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
