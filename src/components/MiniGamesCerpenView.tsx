import React, { useState, useEffect } from 'react';
import { Gamepad2, BookOpen, Clock, Check, ArrowRight, ArrowLeft, Sparkles, CheckCircle2, XCircle, Award, Volume2, Globe, Plus, Trash2 } from 'lucide-react';
import { CerpenItem } from '../types';
import { useHabit } from '../context/HabitContext';
import { ImportArticleModal } from './ImportArticleModal';

export const MiniGamesCerpenView: React.FC = () => {
  const { recordSession, allCerpenArticles, deleteCustomArticle, theme } = useHabit();
  const isCoastal = theme === 'coastal';
  const [activeLang, setActiveLang] = useState<'id' | 'en'>('id');
  const [selectedCerpen, setSelectedCerpen] = useState<CerpenItem | null>(null);
  const [isImportOpen, setIsImportOpen] = useState(false);

  // States
  const [mode, setMode] = useState<'browse' | 'reading' | 'quiz' | 'result'>('browse');
  const [readingSeconds, setReadingSeconds] = useState(0);
  const [isReadingActive, setIsReadingActive] = useState(false);
  const [quizSeconds, setQuizSeconds] = useState(0);

  // Quiz Answers
  const [answers, setAnswers] = useState<{ [qId: string]: number | null }>({});

  const filteredCerpen = allCerpenArticles.filter(c => c.language === activeLang);

  // Reading Timer
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

  // Quiz Timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (mode === 'quiz') {
      interval = setInterval(() => {
        setQuizSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [mode]);

  const handleSelectCerpen = (cerpen: CerpenItem) => {
    setSelectedCerpen(cerpen);
    setMode('reading');
    setReadingSeconds(0);
    setIsReadingActive(true);
    setAnswers({});
  };

  const handleFinishReading = () => {
    setIsReadingActive(false);
    setMode('quiz');
    setQuizSeconds(0);
  };

  const evaluateQuiz = () => {
    if (!selectedCerpen) return { correctCount: 0, accuracy: 0, wpm: 0, kem: 0 };
    let correctCount = 0;
    selectedCerpen.quiz.forEach(q => {
      if (answers[q.id] === q.correctIndex) correctCount++;
    });

    const totalQuestions = selectedCerpen.quiz.length;
    const accuracy = Math.round((correctCount / (totalQuestions || 1)) * 100);
    const readSec = Math.max(readingSeconds, 1);
    const wpm = Math.round((selectedCerpen.wordCount / readSec) * 60);
    const kem = Math.round((wpm * accuracy) / 100);

    return {
      correctCount,
      totalQuestions,
      accuracy,
      wpm,
      kem
    };
  };

  const handleSubmitQuiz = () => {
    if (!selectedCerpen) return;
    const stats = evaluateQuiz();

    recordSession({
      habitId: 'cerpen' as any,
      title: `Cerpen: ${selectedCerpen.title}`,
      readingDurationSeconds: readingSeconds,
      quizDurationSeconds: quizSeconds,
      totalDurationSeconds: readingSeconds + quizSeconds,
      wordCount: selectedCerpen.wordCount,
      wpm: stats.wpm,
      accuracyPercentage: stats.accuracy,
      kem: stats.kem,
      totalQuestions: stats.totalQuestions,
      correctAnswersCount: stats.correctCount
    });

    setMode('result');
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // STEP 1: BROWSE CERPEN LIST
  if (mode === 'browse') {
    return (
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* Banner */}
        <div className={`${isCoastal ? 'bg-[#D0E1F0] text-[#1E293B] border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[4px_4px_0px_0px_#283618]'} rounded-2xl p-6 sm:p-8 border-2 flex flex-col md:flex-row items-center justify-between gap-6`}>
          <div className="space-y-2 max-w-xl">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border ${isCoastal ? 'border-[#1E293B] text-[#1E40AF]' : 'border-[#283618] text-[#3A5A40]'} text-xs font-black tracking-widest uppercase`}>
              <Gamepad2 className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#2563EB]' : 'text-[#588157]'} stroke-[2.5]`} />
              MINI GAMES LITERASI SASTRA
            </div>
            <h1 className={`text-2xl sm:text-3xl font-black leading-snug uppercase tracking-tight ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'}`}>
              Cerpen Pilihan & Quiz 5 Soal
            </h1>
            <p className={`text-xs sm:text-sm ${isCoastal ? 'text-[#334155]' : 'text-[#3A5A40]'} font-bold leading-relaxed`}>
              Nikmati teks sastra pendek dan uji kemampuan menganalisis Ide Pokok, Sinonim Kata, Makna Kosakata, Inferensi, dan Tema Cerita.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => setIsImportOpen(true)}
              className={`${isCoastal ? 'bg-[#2563EB] hover:bg-blue-700 border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#709752] hover:bg-[#588157] border-[#283618] shadow-[3px_3px_0px_0px_#283618]'} text-white font-black text-xs sm:text-sm px-4 py-3 rounded-xl border-2 uppercase flex items-center gap-2 cursor-pointer active:translate-y-0.5 transition-all`}
            >
              <Plus className="w-4 h-4" />
              Impor Cerpen (PDF/Link)
            </button>
          </div>
        </div>

        {/* Language Tabs */}
        <div className={`flex items-center justify-center p-1.5 ${isCoastal ? 'bg-[#EBF3F5] border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#FAEDCD] border-[#283618] shadow-[3px_3px_0px_0px_#283618]'} rounded-xl max-w-xs mx-auto border-2`}>
          <button
            onClick={() => setActiveLang('id')}
            className={`flex-1 py-2 rounded-lg text-xs font-black uppercase transition-all cursor-pointer ${
              activeLang === 'id'
                ? (isCoastal ? 'bg-[#2563EB] text-white border-2 border-[#1E293B] shadow-[1px_1px_0px_0px_#1E293B]' : 'bg-[#709752] text-white border-2 border-[#283618] shadow-[1px_1px_0px_0px_#283618]')
                : (isCoastal ? 'text-[#1E293B] hover:bg-white/60' : 'text-[#283618] hover:bg-white/60')
            }`}
          >
            🇮🇩 Cerpen Indonesia ({allCerpenArticles.filter(c => c.language === 'id').length})
          </button>
          <button
            onClick={() => setActiveLang('en')}
            className={`flex-1 py-2 rounded-lg text-xs font-black uppercase transition-all cursor-pointer ${
              activeLang === 'en'
                ? (isCoastal ? 'bg-[#2563EB] text-white border-2 border-[#1E293B] shadow-[1px_1px_0px_0px_#1E293B]' : 'bg-[#709752] text-white border-2 border-[#283618] shadow-[1px_1px_0px_0px_#283618]')
                : (isCoastal ? 'text-[#1E293B] hover:bg-white/60' : 'text-[#283618] hover:bg-white/60')
            }`}
          >
            🇬🇧 English Stories ({allCerpenArticles.filter(c => c.language === 'en').length})
          </button>
        </div>

        {/* Cerpen Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCerpen.map((cerpen) => {
            const isCustom = cerpen.id.startsWith('custom-cerpen-');
            return (
              <div
                key={cerpen.id}
                className={`bg-white rounded-2xl p-5 border-2 ${isCoastal ? 'border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'border-[#283618] shadow-[4px_4px_0px_0px_#283618]'} flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-black uppercase ${isCoastal ? 'text-[#1E40AF] bg-[#E0EBF5] border-[#93C5FD]' : 'text-[#3A5A40] bg-[#E9EDC9] border-[#A3B18A]'} px-2.5 py-0.5 rounded-md border`}>
                      {cerpen.author}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {isCustom && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteCustomArticle('cerpen', cerpen.id);
                          }}
                          className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50"
                          title="Hapus cerpen impor"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <span className={`text-[10px] font-bold ${isCoastal ? 'text-[#475569]' : 'text-[#8C6B4F]'}`}>
                        {cerpen.wordCount} Kata
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-base font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} line-clamp-2`}>
                    {cerpen.title}
                  </h3>

                  <p className={`text-xs ${isCoastal ? 'text-[#475569]' : 'text-[#574332]'} line-clamp-3 font-medium leading-relaxed`}>
                    {cerpen.synopsis}
                  </p>
                </div>

                <button
                  onClick={() => handleSelectCerpen(cerpen)}
                  className={`w-full ${isCoastal ? 'bg-[#D0E1F0] hover:bg-[#BFDBFE] text-[#1E293B] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#FAEDCD] hover:bg-[#E9EDC9] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'} font-black text-xs uppercase py-3 rounded-xl border-2 flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5 transition-all`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Mulai Membaca & Kuis
                </button>
              </div>
            );
          })}
        </div>

        <ImportArticleModal isOpen={isImportOpen} onClose={() => setIsImportOpen(false)} />
      </div>
    );
  }

  // STEP 2: READING MODE
  if (mode === 'reading' && selectedCerpen) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* Floating Top Bar */}
        <div className={`bg-white rounded-2xl p-4 border-2 ${isCoastal ? 'border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'border-[#283618] shadow-[4px_4px_0px_0px_#283618]'} flex items-center justify-between gap-4 sticky top-4 z-20`}>
          <button
            onClick={() => setMode('browse')}
            className={`flex items-center gap-1.5 text-xs font-black uppercase ${isCoastal ? 'text-[#1E293B] hover:text-[#2563EB]' : 'text-[#283618] hover:text-[#588157]'} cursor-pointer`}
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>

          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 ${isCoastal ? 'bg-[#E0EBF5] text-[#1E40AF] border-[#93C5FD]' : 'bg-[#E9EDC9] text-[#3A5A40] border-[#A3B18A]'} px-3 py-1 rounded-lg border font-mono text-xs font-black`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTime(readingSeconds)}</span>
            </div>

            <button
              onClick={handleFinishReading}
              className={`${isCoastal ? 'bg-[#2563EB] hover:bg-blue-700 border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#709752] hover:bg-[#588157] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'} text-white font-black text-xs uppercase px-4 py-2 rounded-xl border-2 cursor-pointer active:translate-y-0.5 flex items-center gap-1.5 transition-all`}
            >
              <span>Selesai Baca & Lanjut Kuis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Reading Content */}
        <div className={`${isCoastal ? 'bg-[#F8FAFC] border-[#1E293B] shadow-[6px_6px_0px_0px_#1E293B]' : 'bg-[#FAF6EE] border-[#283618] shadow-[6px_6px_0px_0px_#283618]'} rounded-3xl p-6 sm:p-10 border-2 space-y-6`}>
          <div className="border-b-2 border-slate-200 pb-4 space-y-1">
            <span className={`text-[10px] font-black uppercase ${isCoastal ? 'text-[#1E40AF] bg-[#E0EBF5] border-[#93C5FD]' : 'text-[#3A5A40] bg-[#E9EDC9] border-[#A3B18A]'} px-2.5 py-0.5 rounded-md border`}>
              Karya: {selectedCerpen.author}
            </span>
            <h1 className={`text-2xl sm:text-3xl font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} pt-1`}>
              {selectedCerpen.title}
            </h1>
            <p className={`text-xs ${isCoastal ? 'text-[#475569]' : 'text-[#8C6B4F]'} font-bold`}>
              Sumber: {selectedCerpen.source} • {selectedCerpen.wordCount} Kata
            </p>
          </div>

          <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} font-serif`}>
            {selectedCerpen.content.map((p, idx) => (
              <p key={idx} className="indent-6 text-justify">
                {p}
              </p>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="pt-6 border-t-2 border-slate-200 text-center">
            <button
              onClick={handleFinishReading}
              className={`${isCoastal ? 'bg-[#2563EB] hover:bg-blue-700 border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#709752] hover:bg-[#588157] border-[#283618] shadow-[3px_3px_0px_0px_#283618]'} text-white font-black text-sm uppercase px-8 py-3.5 rounded-xl border-2 cursor-pointer active:translate-y-0.5 inline-flex items-center gap-2 transition-all`}
            >
              <span>Saya Sudah Selesai Membaca, Mulai Kuis (5 Soal)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // STEP 3: QUIZ MODE
  if (mode === 'quiz' && selectedCerpen) {
    const isAllAnswered = selectedCerpen.quiz.every(q => answers[q.id] !== undefined && answers[q.id] !== null);

    return (
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className={`bg-white rounded-2xl p-4 sm:p-5 border-2 ${isCoastal ? 'border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'border-[#283618] shadow-[4px_4px_0px_0px_#283618]'} flex items-center justify-between`}>
          <div>
            <h2 className={`text-sm sm:text-base font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} uppercase tracking-tight`}>
              Quiz Pemahaman Cerpen: {selectedCerpen.title}
            </h2>
            <p className={`text-xs ${isCoastal ? 'text-[#475569]' : 'text-[#574332]'} font-semibold`}>
              5 Soal: Ide Pokok, Sinonim, Kosakata, Inferensi, & Tema
            </p>
          </div>

          <div className={`flex items-center gap-1.5 ${isCoastal ? 'bg-[#E0EBF5] text-[#1E40AF] border-[#93C5FD]' : 'bg-[#FAEDCD] text-[#8C6B4F] border-[#DDA15E]'} px-3 py-1 rounded-lg border font-mono text-xs font-black`}>
            <Clock className="w-3.5 h-3.5" />
            <span>{formatTime(quizSeconds)}</span>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {selectedCerpen.quiz.map((q, qIdx) => (
            <div
              key={q.id}
              className={`bg-white rounded-2xl p-5 sm:p-6 border-2 ${isCoastal ? 'border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'border-[#283618] shadow-[4px_4px_0px_0px_#283618]'} space-y-4`}
            >
              <div className="flex items-start gap-2.5">
                <span className={`w-6 h-6 rounded-lg ${isCoastal ? 'bg-[#1E293B]' : 'bg-[#283618]'} text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5`}>
                  {qIdx + 1}
                </span>
                <h4 className={`text-xs sm:text-sm font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} leading-snug`}>
                  {q.question}
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 pl-8">
                {q.options.map((opt, optIdx) => {
                  const isSelected = answers[q.id] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => setAnswers(prev => ({ ...prev, [q.id]: optIdx }))}
                      className={`p-3 rounded-xl border-2 text-left text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? (isCoastal ? 'bg-[#D0E1F0] text-[#1E293B] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#E9EDC9] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]')
                          : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      <span className="font-black mr-1.5">{String.fromCharCode(65 + optIdx)}.</span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            onClick={handleSubmitQuiz}
            disabled={!isAllAnswered}
            className={`w-full ${isCoastal ? 'bg-[#2563EB] hover:bg-blue-700 border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'bg-[#709752] hover:bg-[#588157] border-[#283618] shadow-[4px_4px_0px_0px_#283618]'} text-white font-black py-4 rounded-xl border-2 uppercase text-sm flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5 transition-all disabled:opacity-50`}
          >
            <Check className="w-4 h-4 stroke-[3]" />
            Submit Jawaban & Lihat Analisis Skor
          </button>
        </div>
      </div>
    );
  }

  // STEP 4: RESULT SUMMARY
  const stats = evaluateQuiz();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      <div className={`bg-white rounded-3xl p-6 sm:p-8 border-2 ${isCoastal ? 'border-[#1E293B] shadow-[6px_6px_0px_0px_#1E293B]' : 'border-[#283618] shadow-[6px_6px_0px_0px_#283618]'} text-center space-y-6`}>
        <div className={`w-16 h-16 ${isCoastal ? 'bg-[#D0E1F0] border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#CCD5AE] border-[#283618] shadow-[3px_3px_0px_0px_#283618]'} rounded-2xl border-2 flex items-center justify-center mx-auto`}>
          <Award className={`w-8 h-8 ${isCoastal ? 'text-[#2563EB]' : 'text-[#588157]'}`} />
        </div>

        <div className="space-y-1">
          <h2 className={`text-2xl sm:text-3xl font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} uppercase tracking-tight`}>
            Hasil Analisis Sastra Selesai!
          </h2>
          <p className={`text-xs sm:text-sm ${isCoastal ? 'text-[#475569]' : 'text-[#574332]'} font-bold`}>
            {selectedCerpen?.title} ({selectedCerpen?.author})
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className={`${isCoastal ? 'bg-[#E0EBF5] border-[#1E293B]' : 'bg-[#E9EDC9] border-[#283618]'} p-3 rounded-xl border-2`}>
            <div className={`text-[10px] font-black uppercase ${isCoastal ? 'text-[#1E40AF]' : 'text-[#3A5A40]'}`}>Akurasi</div>
            <div className={`text-2xl font-mono font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} mt-1`}>{stats.accuracy}%</div>
          </div>
          <div className={`${isCoastal ? 'bg-[#D0E1F0] border-[#1E293B]' : 'bg-[#FAEDCD] border-[#283618]'} p-3 rounded-xl border-2`}>
            <div className={`text-[10px] font-black uppercase ${isCoastal ? 'text-[#1E40AF]' : 'text-[#8C6B4F]'}`}>Benar</div>
            <div className={`text-2xl font-mono font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} mt-1`}>{stats.correctCount}/5</div>
          </div>
          <div className={`${isCoastal ? 'bg-[#E2E8F0] border-[#1E293B]' : 'bg-[#CCD5AE] border-[#283618]'} p-3 rounded-xl border-2`}>
            <div className={`text-[10px] font-black uppercase ${isCoastal ? 'text-[#334155]' : 'text-[#3A5A40]'}`}>Waktu Baca</div>
            <div className={`text-2xl font-mono font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} mt-1`}>{formatTime(readingSeconds)}</div>
          </div>
          <div className={`${isCoastal ? 'bg-[#F1F5F9] border-[#1E293B]' : 'bg-[#F4F1DE] border-[#283618]'} p-3 rounded-xl border-2`}>
            <div className={`text-[10px] font-black uppercase ${isCoastal ? 'text-[#475569]' : 'text-[#574332]'}`}>Waktu Kuis</div>
            <div className={`text-2xl font-mono font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} mt-1`}>{formatTime(quizSeconds)}</div>
          </div>
        </div>

        {/* Quiz Explanations Breakdown */}
        {selectedCerpen && (
          <div className="text-left space-y-3 pt-2">
            <h4 className={`text-xs font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} uppercase tracking-wider`}>
              Pembahasan Kunci Jawaban:
            </h4>
            <div className="space-y-2">
              {selectedCerpen.quiz.map((q, idx) => {
                const userAns = answers[q.id];
                const isCorrect = userAns === q.correctIndex;
                return (
                  <div key={q.id} className={`p-3 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#283618]'} text-xs space-y-1 ${
                    isCorrect ? (isCoastal ? 'bg-[#E0EBF5]' : 'bg-[#E9EDC9]') : 'bg-red-50'
                  }`}>
                    <div className="flex items-center justify-between font-black">
                      <span>{idx + 1}. {q.question}</span>
                      <span className={isCorrect ? (isCoastal ? 'text-[#2563EB]' : 'text-[#709752]') : 'text-red-600'}>
                        {isCorrect ? '✓ Benar' : '✗ Salah'}
                      </span>
                    </div>
                    <div className={isCoastal ? 'text-[#334155]' : 'text-[#574332]'}>
                      <strong>Kunci:</strong> {q.options[q.correctIndex]}
                    </div>
                    <p className={`text-[11px] ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'}`}>
                      {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={() => setMode('browse')}
            className={`w-full ${isCoastal ? 'bg-[#2563EB] hover:bg-blue-700 border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#709752] hover:bg-[#588157] border-[#283618] shadow-[3px_3px_0px_0px_#283618]'} text-white font-black text-xs sm:text-sm py-3.5 rounded-xl border-2 uppercase flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5 transition-all`}
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Daftar Cerpen
          </button>
        </div>
      </div>
    </div>
  );
};
