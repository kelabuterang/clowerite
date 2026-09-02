import React, { useState, useEffect, useRef } from 'react';
import { Play, Check, ArrowLeft, ArrowRight, Clock, BookOpen, Award, Sparkles, CheckCircle2, XCircle, RotateCcw, HelpCircle, Eye, Download, Upload, Trash2, FileText } from 'lucide-react';
import { INDONESIAN_ARTICLES, getDailyIndonesianArticles } from '../data/indonesianArticles';
import { IndonesianArticle } from '../types';
import { useHabit } from '../context/HabitContext';
import { ExportModal } from './ExportModal';
import { ImportArticleModal } from './ImportArticleModal';

interface Props {
  onBack: () => void;
}

type Step = 'select' | 'reading' | 'quiz' | 'result';

export const IndonesianArticleReader: React.FC<Props> = ({ onBack }) => {
  const { recordSession, dailyIndonesianProgress, recordArticleStep, allIndonesianArticles, customIndonesianArticles, deleteCustomArticle, theme } = useHabit();
  const isCoastal = theme === 'coastal';
  const [viewMode, setViewMode] = useState<'daily' | 'custom' | 'all'>('daily');
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);

  const todayStr = new Date().toISOString().split('T')[0];
  const dailyArticles = getDailyIndonesianArticles(todayStr);
  const activeArticleList = viewMode === 'daily'
    ? dailyArticles
    : viewMode === 'custom'
      ? customIndonesianArticles
      : allIndonesianArticles;

  // Pick first uncompleted daily article by default
  const defaultArticle = dailyArticles.find(a => !dailyIndonesianProgress.completedIds.includes(a.id)) || dailyArticles[0];
  const [selectedArticle, setSelectedArticle] = useState<IndonesianArticle>(defaultArticle);
  const [step, setStep] = useState<Step>('select');

  // Reading Timer
  const [readingSeconds, setReadingSeconds] = useState(0);
  const [isReadingActive, setIsReadingActive] = useState(false);
  const [hasStartedReading, setHasStartedReading] = useState(false);

  // Quiz Timer & Answers
  const [quizSeconds, setQuizSeconds] = useState(0);
  const [fillInAnswers, setFillInAnswers] = useState<{ [key: string]: string }>({});
  const [trueFalseAnswers, setTrueFalseAnswers] = useState<{ [key: string]: boolean | null }>({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  // Reader Settings
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('large');
  const [themeMode, setThemeMode] = useState<'warm' | 'white' | 'sepia'>('white');
  const [bionicReading, setBionicReading] = useState(false);

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

  const handleFillInChange = (qId: string, val: string) => {
    setFillInAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleTrueFalseSelect = (qId: string, val: boolean) => {
    setTrueFalseAnswers(prev => ({ ...prev, [qId]: val }));
  };

  // Evaluate answers
  const evaluateResults = () => {
    let correctCount = 0;

    // 5 Isian questions
    selectedArticle.fillInQuestions.forEach(q => {
      const userAns = (fillInAnswers[q.id] || '').trim().toLowerCase();
      const isMatch = q.correctAnswers.some(ans => {
        const normalized = ans.trim().toLowerCase();
        return userAns === normalized || (userAns.length > 2 && normalized.includes(userAns)) || (normalized.length > 2 && userAns.includes(normalized));
      });
      if (isMatch) correctCount++;
    });

    // 5 True/False questions
    selectedArticle.trueFalseQuestions.forEach(q => {
      if (trueFalseAnswers[q.id] === q.isTrue) {
        correctCount++;
      }
    });

    const totalQuestions = 10;
    const accuracy = Math.round((correctCount / totalQuestions) * 100);
    const readSec = Math.max(readingSeconds, 1);
    const calculatedWpm = Math.round((selectedArticle.wordCount / readSec) * 60);
    const calculatedKem = Math.round((calculatedWpm * accuracy) / 100);

    return {
      correctCount,
      totalQuestions,
      accuracy,
      wpm: calculatedWpm,
      kem: calculatedKem
    };
  };

  const handleSubmitQuiz = () => {
    setSubmittedQuiz(true);
    const stats = evaluateResults();

    recordArticleStep('obat-fokus', selectedArticle.id);

    recordSession({
      habitId: 'obat-fokus',
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
      correctAnswersCount: stats.correctCount
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
    : dailyArticles.find(a => !dailyIndonesianProgress.completedIds.includes(a.id) && a.id !== selectedArticle.id);

  const startNextArticle = (nextArt: IndonesianArticle) => {
    setSelectedArticle(nextArt);
    setStep('reading');
    setHasStartedReading(false);
    setReadingSeconds(0);
    setFillInAnswers({});
    setTrueFalseAnswers({});
    setSubmittedQuiz(false);
  };

  // Helper for Bionic Reading (bolding first few letters of words)
  const renderBionicText = (text: string) => {
    if (!bionicReading) return text;
    return text.split(' ').map((word, i) => {
      const mid = Math.ceil(word.length / 2);
      const start = word.slice(0, mid);
      const end = word.slice(mid);
      return (
        <span key={i} className="inline-block mr-1">
          <strong className="font-extrabold text-slate-950">{start}</strong>
          <span>{end}</span>
        </span>
      );
    });
  };

  // STEP 1: ARTICLE SELECTOR
  if (step === 'select') {
    return (
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} />
        <ImportArticleModal isOpen={isImportOpen} onClose={() => setIsImportOpen(false)} />

        {/* Back and Action Bar */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <button
            onClick={onBack}
            className={`flex items-center gap-1.5 text-xs font-black uppercase ${
              isCoastal
                ? 'text-[#1E293B] bg-white border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B] hover:bg-slate-50'
                : 'text-[#2D2319] bg-white border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319] hover:bg-stone-50'
            } px-4 py-2 rounded-xl border-2 active:translate-y-0.5 cursor-pointer`}
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" /> Kembali ke Habit
          </button>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setIsImportOpen(true)}
              className={`flex items-center gap-1.5 text-xs font-black uppercase ${
                isCoastal
                  ? 'bg-[#D0E1F0] hover:bg-[#BFDBFE] text-[#1E40AF] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]'
                  : 'bg-[#ECFDF5] hover:bg-emerald-100 text-[#047857] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
              } px-3.5 py-2 rounded-xl border-2 cursor-pointer transition-all`}
            >
              <Upload className="w-3.5 h-3.5" /> Impor Link / Naskah
            </button>

            <button
              type="button"
              onClick={() => setIsExportOpen(true)}
              className={`flex items-center gap-1.5 text-xs font-black uppercase ${
                isCoastal
                  ? 'bg-[#E0E7FF] hover:bg-[#C7D2FE] text-[#3730A3] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]'
                  : 'bg-[#FEF3C7] hover:bg-amber-200 text-[#2D2319] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
              } px-3.5 py-2 rounded-xl border-2 cursor-pointer`}
            >
              <Download className="w-3.5 h-3.5" /> Eksport PDF / Link
            </button>

            <span className={`text-xs font-black uppercase ${
              isCoastal
                ? 'bg-sky-100 text-[#0369A1] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]'
                : 'bg-emerald-100 text-[#065F46] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
            } px-3.5 py-2 rounded-xl border-2`}>
              Progres: {dailyIndonesianProgress.completedCount} / 5 Selesai
            </span>
          </div>
        </div>

        {/* Bento header */}
        <div className={`bg-white rounded-2xl p-6 border-2 ${isCoastal ? 'border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319]'} space-y-3`}>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className={`text-xs font-black ${isCoastal ? 'text-[#0284C7]' : 'text-emerald-700'} uppercase tracking-wider flex items-center gap-1`}>
                <Sparkles className={`w-3.5 h-3.5 ${isCoastal ? 'fill-[#0284C7]' : 'fill-emerald-500'}`} /> Habit Getah Sanubari (5 Artikel Berlanjut)
              </div>
              <h2 className={`text-2xl sm:text-3xl font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'} uppercase tracking-tight`}>
                Koleksi Artikel Bahasa Indonesia
              </h2>
            </div>

            {/* View Mode Tabs */}
            <div className={`flex items-center ${isCoastal ? 'bg-[#F8FAFC] border-[#1E293B]' : 'bg-[#FDFBF7] border-[#2D2319]'} p-1 rounded-xl border-2 gap-1 flex-wrap`}>
              <button
                type="button"
                onClick={() => setViewMode('daily')}
                className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all cursor-pointer ${
                  viewMode === 'daily'
                    ? isCoastal ? 'bg-[#0284C7] text-white shadow-xs' : 'bg-[#10B981] text-white shadow-xs'
                    : isCoastal ? 'text-slate-600 hover:text-[#1E293B]' : 'text-[#574332] hover:text-[#2D2319]'
                }`}
              >
                Paket Harian (5/5)
              </button>
              <button
                type="button"
                onClick={() => setViewMode('custom')}
                className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all cursor-pointer flex items-center gap-1 ${
                  viewMode === 'custom'
                    ? isCoastal ? 'bg-[#0284C7] text-white shadow-xs' : 'bg-[#10B981] text-white shadow-xs'
                    : isCoastal ? 'text-slate-600 hover:text-[#1E293B]' : 'text-[#574332] hover:text-[#2D2319]'
                }`}
              >
                <span>🍀 Impor Saya</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  viewMode === 'custom'
                    ? isCoastal ? 'bg-white text-[#0284C7]' : 'bg-white text-emerald-800'
                    : isCoastal ? 'bg-sky-100 text-[#0284C7]' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {customIndonesianArticles.length}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all cursor-pointer ${
                  viewMode === 'all'
                    ? isCoastal ? 'bg-[#0284C7] text-white shadow-xs' : 'bg-[#10B981] text-white shadow-xs'
                    : isCoastal ? 'text-slate-600 hover:text-[#1E293B]' : 'text-[#574332] hover:text-[#2D2319]'
                }`}
              >
                Semua ({allIndonesianArticles.length})
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 pt-2">
            <div className="flex items-center justify-between text-xs font-black">
              <span className={isCoastal ? 'text-slate-600' : 'text-[#574332]'}>Target Harian: 5 Artikel per Hari</span>
              <span className={isCoastal ? 'text-[#0284C7]' : 'text-emerald-700'}>
                {dailyIndonesianProgress.completedCount} dari 5 Selesai ({Math.min(100, Math.round((dailyIndonesianProgress.completedCount / 5) * 100))}%)
              </span>
            </div>
            <div className={`w-full ${isCoastal ? 'bg-slate-100 border-[#1E293B]' : 'bg-[#FDFBF7] border-[#2D2319]'} h-3 rounded-full border-2 overflow-hidden p-0.5`}>
              <div
                className={`${isCoastal ? 'bg-[#0284C7]' : 'bg-[#10B981]'} h-full rounded-full transition-all duration-500`}
                style={{ width: `${Math.min(100, (dailyIndonesianProgress.completedCount / 5) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Empty State for Custom Articles */}
        {viewMode === 'custom' && customIndonesianArticles.length === 0 ? (
          <div className={`bg-white rounded-2xl p-10 border-2 ${isCoastal ? 'border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319]'} text-center space-y-4 max-w-lg mx-auto`}>
            <div className={`w-16 h-16 ${isCoastal ? 'bg-sky-50 border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#ECFDF5] border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'} border-2 rounded-2xl flex items-center justify-center mx-auto text-2xl`}>
              📂
            </div>
            <div className="space-y-1.5">
              <h3 className={`text-lg font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'}`}>Belum Ada Artikel Impor Bahasa Indonesia</h3>
              <p className={`text-xs ${isCoastal ? 'text-slate-600' : 'text-[#574332]'} font-semibold`}>
                Kamu dapat mengunggah file PDF modul, menempelkan link artikel web, atau menyalin naskah teks. AI Cloverait akan mengekstrak materi & membuatkan 10 kuis otomatis!
              </p>
            </div>
            <button
              onClick={() => setIsImportOpen(true)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${
                isCoastal ? 'bg-[#0284C7] hover:bg-[#0369A1] border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#10B981] hover:bg-[#059669] border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'
              } text-white font-black text-xs uppercase tracking-wider border-2 cursor-pointer active:translate-y-0.5 transition-all`}
            >
              <Upload className="w-4 h-4" />
              Impor Link / Naskah Sekarang
            </button>
          </div>
        ) : (
          /* 8 Articles Grid in Bento Style */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeArticleList.map((art, idx) => {
              const isCompleted = dailyIndonesianProgress.completedIds.includes(art.id);
              const isCustom = art.id.startsWith('custom-');

              return (
                <div
                  key={art.id}
                  onClick={() => {
                    setSelectedArticle(art);
                    setStep('reading');
                    setHasStartedReading(false);
                    setReadingSeconds(0);
                    setFillInAnswers({});
                    setTrueFalseAnswers({});
                    setSubmittedQuiz(false);
                  }}
                  className={`bg-white rounded-2xl p-6 border-2 ${
                    isCoastal ? 'border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B] hover:shadow-[6px_6px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319] hover:shadow-[6px_6px_0px_0px_#2D2319]'
                  } hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between group space-y-4 ${
                    isCompleted ? (isCoastal ? 'ring-2 ring-[#0284C7] bg-sky-50/40' : 'ring-2 ring-emerald-500 bg-emerald-50/40') : ''
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-black ${isCoastal ? 'bg-[#1E293B]' : 'bg-[#2D2319]'} text-white w-6 h-6 rounded-md flex items-center justify-center`}>
                          #{idx + 1}
                        </span>
                        <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md ${
                          isCoastal ? 'bg-sky-100 text-sky-900 border-[#1E293B]' : 'bg-emerald-100 text-emerald-900 border-[#2D2319]'
                        } border`}>
                          {art.category}
                        </span>
                        {isCustom && (
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                            isCoastal ? 'bg-blue-100 text-blue-900 border-[#1E293B]' : 'bg-amber-100 text-amber-900 border-[#2D2319]'
                          } border flex items-center gap-1`}>
                            🍀 Impor Saya
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5">
                        {isCompleted ? (
                          <span className={`text-xs font-black ${
                            isCoastal ? 'text-[#0284C7] bg-sky-100 border-[#0284C7]' : 'text-emerald-700 bg-emerald-100 border-emerald-600'
                          } px-2 py-0.5 rounded-md border flex items-center gap-1`}>
                            <CheckCircle2 className="w-3.5 h-3.5" /> Selesai Hari Ini
                          </span>
                        ) : (
                          <span className="text-xs font-black uppercase text-slate-500 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 stroke-[2.5]" /> ~{art.estimatedMinutes} Menit
                          </span>
                        )}

                        {isCustom && (
                          <button
                            type="button"
                            title="Hapus artikel impor ini"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (window.confirm(`Hapus artikel "${art.title}" dari daftar habit?`)) {
                                deleteCustomArticle('getah-sanubari', art.id);
                              }
                            }}
                            className="p-1 rounded-md text-red-500 hover:text-red-700 hover:bg-red-50 border border-transparent hover:border-red-300 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    <h3 className={`text-lg font-black ${isCoastal ? 'text-[#1E293B] group-hover:text-[#0284C7]' : 'text-[#2D2319] group-hover:text-emerald-700'} transition-colors leading-snug`}>
                      {art.title}
                    </h3>

                    <p className={`text-xs font-medium ${isCoastal ? 'text-slate-600' : 'text-[#574332]'} line-clamp-2 leading-relaxed`}>
                      {art.content[0]}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t-2 border-slate-100 text-xs font-black">
                    <span className="text-slate-500 uppercase">{art.wordCount} Kata • 10 Soal</span>
                    <span className={`${
                      isCoastal
                        ? 'text-[#1E293B] bg-[#E0F2FE] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B] group-hover:bg-[#BAE6FD]'
                        : 'text-[#2D2319] bg-[#FEF3C7] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] group-hover:bg-[#FDE68A]'
                    } px-3 py-1 rounded-lg border inline-flex items-center gap-1`}>
                      {isCompleted ? 'Baca Ulang' : 'Mulai Baca'} <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
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

  // STEP 2: READING VIEW
  if (step === 'reading') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Sticky Header with Timer & Action Buttons */}
        <div className={`sticky top-20 z-30 bg-white p-4 rounded-2xl border-2 ${
          isCoastal ? 'border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
        } flex items-center justify-between gap-3 flex-wrap`}>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setIsReadingActive(false);
                setStep('select');
              }}
              className={`text-xs font-black uppercase ${
                isCoastal
                  ? 'text-[#1E293B] bg-slate-100 hover:bg-slate-200 border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]'
                  : 'text-slate-900 bg-slate-100 hover:bg-slate-200 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
              } px-3.5 py-2 rounded-xl border-2 cursor-pointer`}
            >
              ← Ganti Artikel
            </button>

            {/* Live Timer Display */}
            <div className={`flex items-center gap-2 ${
              isCoastal ? 'bg-[#D0E1F0] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-amber-100 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
            } border-2 px-3.5 py-1.5 rounded-xl`}>
              <Clock className={`w-4 h-4 ${isCoastal ? 'text-[#1E40AF]' : 'text-amber-900'} stroke-[2.5] ${isReadingActive ? 'animate-spin' : ''}`} />
              <span className={`font-mono font-black text-base ${isCoastal ? 'text-[#1E293B]' : 'text-slate-900'}`}>
                {formatTime(readingSeconds)}
              </span>
              <span className={`text-[10px] uppercase font-black ${isCoastal ? 'text-[#1E40AF]' : 'text-amber-900'}`}>
                {isReadingActive ? 'Membaca' : 'Timer Diam'}
              </span>
            </div>
          </div>

          {/* Reader Preferences (Font Size, Bionic Reading) */}
          <div className="flex items-center gap-2 text-xs font-black uppercase">
            <button
              onClick={() => setBionicReading(!bionicReading)}
              title="Bionic Reading (Bantu fokus baca cepat)"
              className={`px-3 py-1.5 rounded-xl border-2 ${
                isCoastal ? 'border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
              } flex items-center gap-1.5 transition-colors cursor-pointer ${
                bionicReading
                  ? (isCoastal ? 'bg-[#2563EB] text-white font-black' : 'bg-amber-400 text-slate-950 font-black')
                  : 'bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Eye className="w-3.5 h-3.5 stroke-[2.5]" /> Bionic
            </button>

            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : fontSize === 'large' ? 'xlarge' : 'normal')}
              className={`px-3 py-1.5 rounded-xl bg-white border-2 ${
                isCoastal ? 'border-[#1E293B] text-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'border-slate-900 text-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
              } hover:bg-slate-50 cursor-pointer`}
            >
              Aa {fontSize === 'normal' ? '1x' : fontSize === 'large' ? '1.2x' : '1.4x'}
            </button>
          </div>

          {/* Start / Finish Reading Button */}
          <div className="flex items-center gap-2">
            {!hasStartedReading ? (
              <button
                onClick={handleStartReading}
                className={`${
                  isCoastal
                    ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]'
                    : 'bg-amber-400 hover:bg-amber-500 text-slate-950 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                } px-5 py-2 rounded-xl text-xs sm:text-sm font-black border-2 flex items-center gap-1.5 cursor-pointer uppercase active:translate-y-0.5`}
              >
                <Play className={`w-4 h-4 ${isCoastal ? 'fill-white' : 'fill-slate-950'}`} />
                Mulai Membaca
              </button>
            ) : (
              <button
                onClick={handleFinishReading}
                className={`${
                  isCoastal
                    ? 'bg-[#0284C7] hover:bg-[#0369A1] text-white border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]'
                    : 'bg-emerald-400 hover:bg-emerald-500 text-slate-950 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                } px-5 py-2 rounded-xl text-xs sm:text-sm font-black border-2 flex items-center gap-1.5 cursor-pointer uppercase active:translate-y-0.5`}
              >
                <Check className="w-4 h-4 stroke-[3]" />
                Selesai Membaca & Lanjut
              </button>
            )}
          </div>
        </div>

        {/* Clean Article Container */}
        <div className={`bg-white rounded-2xl p-6 sm:p-10 border-2 ${
          isCoastal ? 'border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
        } space-y-6`}>
          {/* Article Header */}
          <div className="space-y-3 pb-4 border-b-2 border-slate-100">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`${
                isCoastal ? 'bg-sky-100 text-[#0369A1] border-[#1E293B]' : 'bg-blue-100 text-blue-950 border-slate-900'
              } font-black text-xs px-3 py-1 rounded-md border`}>
                {selectedArticle.category}
              </span>
              <span className={`text-xs ${isCoastal ? 'text-slate-600' : 'text-slate-600'} font-bold`}>
                {selectedArticle.subTopic} • Sumber: {selectedArticle.source}
              </span>
            </div>

            <h1 className={`text-2xl sm:text-3xl font-black ${isCoastal ? 'text-[#1E293B]' : 'text-slate-900'} leading-tight`}>
              {selectedArticle.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-slate-600 font-bold uppercase">
              <span>{selectedArticle.wordCount} Kata</span>
              <span>•</span>
              <span>Estimasi: {selectedArticle.estimatedMinutes} Menit</span>
            </div>
          </div>

          {/* Reading Prompt Overlay if not started */}
          {!hasStartedReading && (
            <div className={`${
              isCoastal ? 'bg-sky-50 border-[#1E293B]' : 'bg-amber-50 border-slate-900'
            } border-2 border-dashed rounded-2xl p-5 text-center space-y-2`}>
              <p className={`text-xs sm:text-sm font-black ${isCoastal ? 'text-[#1E293B]' : 'text-slate-900'} uppercase`}>
                👉 Klik tombol <span className={`${
                  isCoastal ? 'bg-[#2563EB] text-white border-[#1E293B]' : 'bg-amber-400 text-slate-950 border-slate-900'
                } px-2 py-0.5 rounded border`}>Mulai Membaca</span> di atas untuk memulai timer WPM dan membuka fokus baca.
              </p>
            </div>
          )}

          {/* Clean Article Body Text */}
          <div
            className={`space-y-6 text-slate-800 font-normal leading-relaxed ${
              fontSize === 'normal'
                ? 'text-base sm:text-lg leading-7 sm:leading-8'
                : fontSize === 'large'
                ? 'text-lg sm:text-xl leading-8 sm:leading-9'
                : 'text-xl sm:text-2xl leading-9 sm:leading-10'
            }`}
          >
            {selectedArticle.content.map((paragraph, idx) => (
              <p key={idx} className="tracking-normal font-sans">
                {renderBionicText(paragraph)}
              </p>
            ))}
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t-2 border-slate-100 flex items-center justify-between gap-4 flex-wrap">
            <button
              onClick={() => {
                setIsReadingActive(false);
                setStep('select');
              }}
              className={`bg-white hover:bg-slate-100 ${
                isCoastal ? 'text-[#1E293B] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'text-slate-900 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
              } border-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase cursor-pointer active:translate-y-0.5`}
            >
              Akhiri Sesi
            </button>

            {!hasStartedReading ? (
              <button
                onClick={handleStartReading}
                className={`${
                  isCoastal
                    ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]'
                    : 'bg-amber-400 hover:bg-amber-500 text-slate-950 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                } px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase border-2 flex items-center gap-2 cursor-pointer active:translate-y-0.5`}
              >
                <Play className={`w-4 h-4 ${isCoastal ? 'fill-white' : 'fill-slate-950'}`} />
                Mulai Membaca
              </button>
            ) : (
              <button
                onClick={handleFinishReading}
                className={`${
                  isCoastal
                    ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]'
                    : 'bg-amber-400 hover:bg-amber-500 text-slate-950 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                } px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase border-2 flex items-center gap-2 cursor-pointer active:translate-y-0.5`}
              >
                Lanjut ke Quiz (10 Soal)
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // STEP 3: QUIZ (5 Isian Singkat + 5 Benar/Salah)
  if (step === 'quiz') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* Quiz Header */}
        <div className={`bg-white rounded-2xl p-6 border-2 ${
          isCoastal ? 'border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
        } space-y-2`}>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className={`${
              isCoastal ? 'bg-[#D0E1F0] text-[#1E40AF] border-[#1E293B]' : 'bg-amber-300 text-slate-950 border-slate-900'
            } font-black text-xs px-3 py-1 rounded-md border uppercase`}>
              Quiz Evaluasi Pemahaman & KEM
            </span>
            <span className="font-mono text-xs font-black text-slate-700 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" /> Waktu: {formatTime(quizSeconds)}
            </span>
          </div>

          <h2 className={`text-xl sm:text-2xl font-black ${isCoastal ? 'text-[#1E293B]' : 'text-slate-900'}`}>
            {selectedArticle.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-bold">
            Jawab 5 soal isian singkat dan 5 soal fakta benar/salah untuk mengukur Kecepatan Efektif Membaca (KEM).
          </p>
        </div>

        {/* SECTION A: 5 ISIAN SINGKAT */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <span className={`w-7 h-7 rounded-lg ${
              isCoastal ? 'bg-[#2563EB] text-white border-[#1E293B]' : 'bg-blue-500 text-white border-slate-900'
            } font-black text-xs flex items-center justify-center border`}>
              A
            </span>
            <h3 className={`text-base sm:text-lg font-black ${isCoastal ? 'text-[#1E293B]' : 'text-slate-900'} uppercase tracking-tight`}>
              Bagian 1: Soal Isian Singkat (5 Soal)
            </h3>
          </div>

          {selectedArticle.fillInQuestions.map((q, idx) => (
            <div key={q.id} className={`bg-white rounded-2xl p-5 border-2 ${
              isCoastal ? 'border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
            } space-y-3`}>
              <div className="flex items-start gap-3">
                <span className={`font-mono font-black ${
                  isCoastal ? 'text-[#1E293B] bg-sky-100 border-[#1E293B]' : 'text-slate-900 bg-blue-100 border-slate-900'
                } text-sm border w-7 h-7 rounded-lg flex items-center justify-center shrink-0`}>
                  {idx + 1}
                </span>
                <p className={`text-sm sm:text-base font-black ${isCoastal ? 'text-[#1E293B]' : 'text-slate-900'}`}>
                  {q.question}
                </p>
              </div>

              {q.hint && (
                <p className="text-xs font-bold text-slate-500 pl-10 flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-500" /> Petunjuk: {q.hint}
                </p>
              )}

              <div className="pl-10">
                <input
                  type="text"
                  placeholder="Ketik jawabanmu di sini..."
                  value={fillInAnswers[q.id] || ''}
                  onChange={e => handleFillInChange(q.id, e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border-2 ${
                    isCoastal ? 'border-[#1E293B] focus:ring-[#2563EB] text-[#1E293B]' : 'border-slate-900 focus:ring-amber-400 text-slate-900'
                  } focus:outline-none focus:ring-2 text-sm font-bold`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* SECTION B: 5 FAKTA BENAR / SALAH */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 px-1">
            <span className={`w-7 h-7 rounded-lg ${
              isCoastal ? 'bg-[#0284C7] text-white border-[#1E293B]' : 'bg-emerald-500 text-white border-slate-900'
            } font-black text-xs flex items-center justify-center border`}>
              B
            </span>
            <h3 className={`text-base sm:text-lg font-black ${isCoastal ? 'text-[#1E293B]' : 'text-slate-900'} uppercase tracking-tight`}>
              Bagian 2: Fakta Benar atau Salah (5 Soal)
            </h3>
          </div>

          {selectedArticle.trueFalseQuestions.map((q, idx) => (
            <div key={q.id} className={`bg-white rounded-2xl p-5 border-2 ${
              isCoastal ? 'border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
            } space-y-3`}>
              <div className="flex items-start gap-3">
                <span className={`font-mono font-black ${
                  isCoastal ? 'text-[#1E293B] bg-sky-100 border-[#1E293B]' : 'text-slate-900 bg-emerald-100 border-slate-900'
                } text-sm border w-7 h-7 rounded-lg flex items-center justify-center shrink-0`}>
                  {idx + 6}
                </span>
                <p className={`text-sm sm:text-base font-black ${isCoastal ? 'text-[#1E293B]' : 'text-slate-900'}`}>
                  {q.statement}
                </p>
              </div>

              <div className="pl-10 flex items-center gap-3 pt-1">
                <button
                  onClick={() => handleTrueFalseSelect(q.id, true)}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-black uppercase border-2 ${
                    isCoastal ? 'border-[#1E293B]' : 'border-slate-900'
                  } transition-all cursor-pointer flex items-center justify-center gap-2 active:translate-y-0.5 ${
                    trueFalseAnswers[q.id] === true
                      ? isCoastal
                        ? 'bg-[#0284C7] text-white shadow-[3px_3px_0px_0px_#1E293B]'
                        : 'bg-emerald-400 text-slate-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Check className="w-4 h-4 stroke-[3]" /> BENAR
                </button>

                <button
                  onClick={() => handleTrueFalseSelect(q.id, false)}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-black uppercase border-2 ${
                    isCoastal ? 'border-[#1E293B]' : 'border-slate-900'
                  } transition-all cursor-pointer flex items-center justify-center gap-2 active:translate-y-0.5 ${
                    trueFalseAnswers[q.id] === false
                      ? isCoastal
                        ? 'bg-[#B91C1C] text-white shadow-[3px_3px_0px_0px_#1E293B]'
                        : 'bg-[#B91C1C] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <XCircle className="w-4 h-4 stroke-[3]" /> SALAH
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Quiz Button */}
        <div className="pt-4">
          <button
            onClick={handleSubmitQuiz}
            className={`w-full ${
              isCoastal
                ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]'
                : 'bg-amber-400 hover:bg-amber-500 text-slate-950 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
            } font-black py-3.5 px-6 rounded-2xl border-2 text-base uppercase transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5`}
          >
            Kirim Jawaban & Lihat Skor KEM
            <Sparkles className={`w-5 h-5 ${isCoastal ? 'fill-white' : 'fill-slate-950'}`} />
          </button>
        </div>
      </div>
    );
  }

  // STEP 4: RESULTS & DETAILED ANSWER KEYS
  const result = evaluateResults();

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Celebration Header in Bento Box */}
      <div className={`${
        isCoastal
          ? 'bg-[#D0E1F0] text-[#1E293B] border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]'
          : 'bg-amber-400 text-slate-950 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
      } rounded-2xl p-6 sm:p-8 border-2 text-center space-y-4`}>
        <div className={`w-16 h-16 rounded-2xl bg-white border-2 ${
          isCoastal ? 'border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
        } mx-auto flex items-center justify-center`}>
          <Award className={`w-9 h-9 ${isCoastal ? 'text-[#1E40AF]' : 'text-slate-900'} stroke-[2.5]`} />
        </div>

        <div>
          <div className={`inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-white px-3 py-1 rounded-md border ${
            isCoastal ? 'border-[#1E293B] text-[#1E40AF]' : 'border-slate-900'
          } shadow-sm`}>
            <Sparkles className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#2563EB]' : 'text-amber-600'}`} />
            Progres Habit Harian: {dailyIndonesianProgress.completedCount} / 5 Artikel Selesai
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-2">
            {dailyIndonesianProgress.completedCount >= 5
              ? '🎉 Sempurna! Habit Getah Sanubari 5/5 Tuntas Hari Ini!'
              : `Artikel #${currentDailyIndex >= 0 ? currentDailyIndex + 1 : 1} Selesai!`}
          </h2>
          <p className="text-xs sm:text-sm font-bold opacity-90">
            {selectedArticle.title}
          </p>
        </div>

        {/* Continuous Action CTA */}
        {nextDailyArticle && dailyIndonesianProgress.completedCount < 5 && (
          <div className={`bg-white/95 backdrop-blur-sm p-4 rounded-xl border-2 ${
            isCoastal ? 'border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
          } text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3`}>
            <div className="text-left">
              <div className={`text-[10px] font-black uppercase ${isCoastal ? 'text-[#1E40AF]' : 'text-amber-700'}`}>Artikel Selanjutnya ({Math.min(5, dailyIndonesianProgress.completedCount + 1)}/5):</div>
              <div className="text-sm font-black line-clamp-1">{nextDailyArticle.title}</div>
            </div>
            <button
              onClick={() => startNextArticle(nextDailyArticle)}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl ${
                isCoastal ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-amber-400 hover:bg-amber-300 text-slate-950 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
              } text-xs sm:text-sm font-black uppercase border-2 flex items-center justify-center gap-1.5 shrink-0 active:translate-y-0.5`}
            >
              Lanjut Baca Artikel {Math.min(5, dailyIndonesianProgress.completedCount + 1)}/5 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* 4 Score Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className={`bg-white rounded-xl p-3 text-slate-900 border-2 ${
            isCoastal ? 'border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
          }`}>
            <span className="text-[10px] font-black uppercase text-slate-500 block">Kecepatan</span>
            <span className={`text-2xl font-black font-mono ${isCoastal ? 'text-[#1E293B]' : 'text-slate-900'}`}>{result.wpm}</span>
            <span className="text-[10px] font-bold text-slate-600 block">WPM</span>
          </div>

          <div className={`bg-white rounded-xl p-3 text-slate-900 border-2 ${
            isCoastal ? 'border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
          }`}>
            <span className="text-[10px] font-black uppercase text-slate-500 block">Skor KEM</span>
            <span className={`text-2xl font-black font-mono ${isCoastal ? 'text-[#2563EB]' : 'text-blue-600'}`}>{result.kem}</span>
            <span className="text-[10px] font-bold text-slate-600 block">Kec. Efektif</span>
          </div>

          <div className={`bg-white rounded-xl p-3 text-slate-900 border-2 ${
            isCoastal ? 'border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
          }`}>
            <span className="text-[10px] font-black uppercase text-slate-500 block">Akurasi</span>
            <span className={`text-2xl font-black font-mono ${isCoastal ? 'text-[#0D9488]' : 'text-emerald-600'}`}>{result.accuracy}%</span>
            <span className="text-[10px] font-bold text-slate-600 block">{result.correctCount}/10 Benar</span>
          </div>

          <div className={`bg-white rounded-xl p-3 text-slate-900 border-2 ${
            isCoastal ? 'border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
          }`}>
            <span className="text-[10px] font-black uppercase text-slate-500 block">Waktu Baca</span>
            <span className={`text-2xl font-black font-mono ${isCoastal ? 'text-[#4F46E5]' : 'text-purple-600'}`}>{formatTime(readingSeconds)}</span>
            <span className="text-[10px] font-bold text-slate-600 block">Durasi</span>
          </div>
        </div>
      </div>

      {/* DETAILED ANSWER KEY */}
      <div className="space-y-4">
        <h3 className={`text-lg font-black ${isCoastal ? 'text-[#1E293B]' : 'text-slate-900'} px-1 uppercase tracking-tight`}>
          Kunci Jawaban & Pembahasan Lengkap:
        </h3>

        {/* Isian Review */}
        <div className="space-y-3">
          <div className="text-xs font-black text-slate-600 uppercase tracking-wider">
            Bagian 1: Isian Singkat
          </div>

          {selectedArticle.fillInQuestions.map((q, idx) => {
            const userAns = (fillInAnswers[q.id] || '').trim();
            const isMatch = q.correctAnswers.some(ans => {
              const normalized = ans.trim().toLowerCase();
              const uNorm = userAns.toLowerCase();
              return uNorm === normalized || (uNorm.length > 2 && normalized.includes(uNorm)) || (normalized.length > 2 && uNorm.includes(normalized));
            });

            return (
              <div key={q.id} className={`bg-white rounded-2xl p-5 border-2 ${
                isCoastal ? 'border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
              } space-y-2`}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5">
                    <span className={`font-black text-xs ${
                      isCoastal ? 'bg-slate-100 text-[#1E293B] border-[#1E293B]' : 'bg-slate-100 text-slate-900 border-slate-900'
                    } border w-6 h-6 rounded-md flex items-center justify-center shrink-0`}>
                      {idx + 1}
                    </span>
                    <p className={`text-sm font-black ${isCoastal ? 'text-[#1E293B]' : 'text-slate-900'}`}>{q.question}</p>
                  </div>
                  {isMatch ? (
                    <span className={`text-xs font-black ${
                      isCoastal ? 'text-[#1E40AF] bg-[#DBEAFE] border-[#1E293B]' : 'text-emerald-950 bg-emerald-300 border-slate-900'
                    } border px-2.5 py-0.5 rounded-md flex items-center gap-1 shrink-0`}>
                      <CheckCircle2 className="w-3.5 h-3.5" /> Benar
                    </span>
                  ) : (
                    <span className={`text-xs font-black ${
                      isCoastal ? 'text-[#991B1B] bg-[#FEE2E2] border-[#1E293B]' : 'text-[#7F1D1D] bg-[#FEE2E2] border-slate-900'
                    } border px-2.5 py-0.5 rounded-md flex items-center gap-1 shrink-0`}>
                      <XCircle className="w-3.5 h-3.5" /> Kurang Tepat
                    </span>
                  )}
                </div>

                <div className="text-xs space-y-1.5 pl-8 font-medium">
                  <p className="text-slate-600">
                    Jawabanmu: <span className={`font-bold ${isCoastal ? 'text-[#1E293B]' : 'text-slate-900'}`}>{userAns || '(Tidak diisi)'}</span>
                  </p>
                  <p className={`${isCoastal ? 'text-[#1E40AF]' : 'text-emerald-700'} font-bold`}>
                    Kunci Jawaban: {q.correctAnswers[0]}
                  </p>
                  <p className="text-slate-600 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    💡 <strong>Pembahasan:</strong> {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* True/False Review */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-black text-slate-600 uppercase tracking-wider">
            Bagian 2: Fakta Benar / Salah
          </div>

          {selectedArticle.trueFalseQuestions.map((q, idx) => {
            const userAns = trueFalseAnswers[q.id];
            const isCorrect = userAns === q.isTrue;

            return (
              <div key={q.id} className={`bg-white rounded-2xl p-5 border-2 ${
                isCoastal ? 'border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
              } space-y-2`}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5">
                    <span className={`font-black text-xs ${
                      isCoastal ? 'bg-slate-100 text-[#1E293B] border-[#1E293B]' : 'bg-slate-100 text-slate-900 border-slate-900'
                    } border w-6 h-6 rounded-md flex items-center justify-center shrink-0`}>
                      {idx + 6}
                    </span>
                    <p className={`text-sm font-black ${isCoastal ? 'text-[#1E293B]' : 'text-slate-900'}`}>{q.statement}</p>
                  </div>
                  {isCorrect ? (
                    <span className={`text-xs font-black ${
                      isCoastal ? 'text-[#1E40AF] bg-[#DBEAFE] border-[#1E293B]' : 'text-emerald-950 bg-emerald-300 border-slate-900'
                    } border px-2.5 py-0.5 rounded-md flex items-center gap-1 shrink-0`}>
                      <CheckCircle2 className="w-3.5 h-3.5" /> Benar
                    </span>
                  ) : (
                    <span className={`text-xs font-black ${
                      isCoastal ? 'text-[#991B1B] bg-[#FEE2E2] border-[#1E293B]' : 'text-[#7F1D1D] bg-[#FEE2E2] border-slate-900'
                    } border px-2.5 py-0.5 rounded-md flex items-center gap-1 shrink-0`}>
                      <XCircle className="w-3.5 h-3.5" /> Salah
                    </span>
                  )}
                </div>

                <div className="text-xs space-y-1.5 pl-8 font-medium">
                  <p className="text-slate-600">
                    Pilihanmu: <span className={`font-bold ${isCoastal ? 'text-[#1E293B]' : 'text-slate-900'}`}>{userAns === null || userAns === undefined ? '(Belum dijawab)' : userAns ? 'BENAR' : 'SALAH'}</span>
                    {' • '}
                    Kunci Jawaban: <span className={`font-bold ${isCoastal ? 'text-[#1E40AF]' : 'text-emerald-700'}`}>{q.isTrue ? 'BENAR' : 'SALAH'}</span>
                  </p>
                  <p className="text-slate-600 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    💡 <strong>Penjelasan:</strong> {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="pt-4 flex items-center justify-between gap-3 flex-wrap">
        <button
          onClick={() => setStep('select')}
          className={`px-5 py-2.5 rounded-xl bg-white border-2 ${
            isCoastal ? 'border-[#1E293B] text-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'border-slate-900 text-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
          } text-xs sm:text-sm font-black uppercase hover:bg-slate-50 cursor-pointer active:translate-y-0.5`}
        >
          Daftar 5 Artikel Hari Ini
        </button>

        <div className="flex items-center gap-2">
          {nextDailyArticle && dailyIndonesianProgress.completedCount < 5 && (
            <button
              onClick={() => startNextArticle(nextDailyArticle)}
              className={`px-5 py-2.5 rounded-xl ${
                isCoastal ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-amber-400 hover:bg-amber-300 text-slate-950 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
              } text-xs sm:text-sm font-black uppercase border-2 flex items-center gap-1.5 cursor-pointer active:translate-y-0.5`}
            >
              Lanjut Artikel #{Math.min(5, dailyIndonesianProgress.completedCount + 1)} <ArrowRight className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onBack}
            className={`px-5 py-2.5 rounded-xl ${
              isCoastal ? 'bg-[#1E293B] hover:bg-slate-800 border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-slate-900 hover:bg-slate-800 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
            } text-white text-xs sm:text-sm font-black uppercase border-2 cursor-pointer active:translate-y-0.5`}
          >
            Selesai & Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
