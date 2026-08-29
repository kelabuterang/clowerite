import React, { useState, useEffect } from 'react';
import { Brain, Play, Check, ArrowLeft, ArrowRight, Clock, Sparkles, CheckCircle2, XCircle, Lightbulb, Zap, HelpCircle, BookOpen, AlertCircle, RefreshCw } from 'lucide-react';
import { MENTAL_MATH_QUESTION_SETS, getDailyMentalMathSet } from '../data/mentalMathData';
import { MentalMathQuestion } from '../types';
import { useHabit } from '../context/HabitContext';

interface Props {
  onBack: () => void;
  onOpenGuide: () => void;
}

type Mode = 'setup' | 'quiz' | 'result';

export const MentalMathTrainer: React.FC<Props> = ({ onBack, onOpenGuide }) => {
  const { recordSession, dailyMentalMathProgress, recordMentalMathStep } = useHabit();

  const todayStr = new Date().toISOString().split('T')[0];
  const dailySet = getDailyMentalMathSet(todayStr);

  // Settings
  const [selectedPackType, setSelectedPackType] = useState<'daily' | number>('daily');
  const [useTimer, setUseTimer] = useState(true);
  const [secondsPerQuestion, setSecondsPerQuestion] = useState(15);

  // Active Quiz State
  const [mode, setMode] = useState<Mode>('setup');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: number | null }>({});
  const [isShowingHint, setIsShowingHint] = useState<{ [qId: string]: boolean }>({});

  // Question Timer
  const [remainingTime, setRemainingTime] = useState(15);
  const [totalQuizSeconds, setTotalQuizSeconds] = useState(0);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);

  const currentQuestions = selectedPackType === 'daily'
    ? dailySet
    : (MENTAL_MATH_QUESTION_SETS[selectedPackType] || MENTAL_MATH_QUESTION_SETS[0]);

  const activeQ = currentQuestions[currentIndex];

  // Overall session timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (mode === 'quiz') {
      interval = setInterval(() => {
        setTotalQuizSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [mode]);

  // Per-Question Countdown Timer (if useTimer is true)
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (mode === 'quiz' && useTimer && !isQuestionAnswered) {
      setRemainingTime(secondsPerQuestion);

      timer = setInterval(() => {
        setRemainingTime(prev => {
          if (prev <= 1) {
            handleAutoTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [currentIndex, mode, useTimer, isQuestionAnswered]);

  const handleAutoTimeout = () => {
    if (!isQuestionAnswered && activeQ) {
      setUserAnswers(prev => ({
        ...prev,
        [activeQ.id]: -999999
      }));
      setIsQuestionAnswered(true);
      recordMentalMathStep(1);
    }
  };

  const handleStartSession = () => {
    setMode('quiz');
    setCurrentIndex(0);
    setUserAnswers({});
    setIsShowingHint({});
    setTotalQuizSeconds(0);
    setIsQuestionAnswered(false);
  };

  const handleSelectAnswer = (optionVal: number) => {
    if (isQuestionAnswered) return;

    setUserAnswers(prev => ({
      ...prev,
      [activeQ.id]: optionVal
    }));
    setIsQuestionAnswered(true);
    recordMentalMathStep(1);
  };

  const handleNextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsQuestionAnswered(false);
    } else {
      finishQuiz();
    }
  };

  const evaluateStats = () => {
    let correctCount = 0;
    currentQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const total = currentQuestions.length;
    const accuracy = Math.round((correctCount / total) * 100);

    return {
      correctCount,
      total,
      accuracy
    };
  };

  const finishQuiz = () => {
    const stats = evaluateStats();

    recordSession({
      habitId: 'anak-tangga',
      title: `Mental Math: ${selectedPackType === 'daily' ? `Paket Harian Anak Tangga (${todayStr})` : `Set #${(selectedPackType as number) + 1}`} (${useTimer ? 'Timer 15s' : 'No Timer'})`,
      readingDurationSeconds: 0,
      quizDurationSeconds: totalQuizSeconds,
      totalDurationSeconds: totalQuizSeconds,
      wordCount: 0,
      wpm: 0,
      accuracyPercentage: stats.accuracy,
      kem: stats.accuracy,
      totalQuestions: stats.total,
      correctAnswersCount: stats.correctCount
    });

    setMode('result');
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // STEP 1: SETUP & OPTIONS
  if (mode === 'setup') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-black uppercase text-slate-900 bg-white px-4 py-2 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-50 active:translate-y-0.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" /> Kembali ke Habit
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase bg-purple-200 text-purple-950 px-3.5 py-1.5 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Anak Tangga: {dailyMentalMathProgress.completedCount} / 10 Soal Hari Ini
            </span>

            <button
              onClick={onOpenGuide}
              className="flex items-center gap-1.5 text-xs font-black uppercase text-purple-950 bg-amber-300 hover:bg-amber-400 px-4 py-2 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 stroke-[2.5]" /> Panduan Trik Mental Math
            </button>
          </div>
        </div>

        {/* Banner with Bento Style */}
        <div className="bg-purple-300 text-slate-950 rounded-2xl p-6 sm:p-8 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-900 text-xs font-black tracking-widest uppercase shadow-sm">
              <Brain className="w-3.5 h-3.5 text-purple-700 stroke-[2.5]" />
              ANAK TANGGA: 10/10 SOAL HARIAN
            </div>
            <span className="text-xs font-black bg-purple-950 text-purple-100 px-2.5 py-1 rounded-md">
              Tanggal: {todayStr} (Variasi Otomatis Berputar Harian)
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black leading-snug uppercase tracking-tight text-slate-900">
            Latihan Berhitung Cepat di Luar Kepala
          </h1>
          <p className="text-xs sm:text-sm font-bold text-slate-800 max-w-2xl leading-relaxed">
            10 soal matematika interaktif dengan metode trik cerdas: penjumlahan kiri-ke-kanan, kuadrat berakhiran 5, perkalian 11, sifat komutatif persen, dan pembulatan kompensasi. Soal berubah setiap hari secara konsisten!
          </p>

          {/* Daily Progress Meter */}
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-1.5">
            <div className="flex items-center justify-between text-xs font-black text-slate-900">
              <span>Progres Anak Tangga Hari Ini:</span>
              <span className="text-purple-800">{dailyMentalMathProgress.completedCount} / 10 Soal Tuntas ({Math.min(100, Math.round((dailyMentalMathProgress.completedCount / 10) * 100))}%)</span>
            </div>
            <div className="w-full bg-slate-200 h-3 rounded-full border-2 border-slate-900 overflow-hidden">
              <div
                className="bg-purple-600 h-full transition-all duration-500"
                style={{ width: `${Math.min(100, (dailyMentalMathProgress.completedCount / 10) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Config Options */}
        <div className="bg-white rounded-2xl p-6 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-6">
          <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">
            Pilih Paket Soal
          </h3>

          {/* Question Set Selection */}
          <div className="space-y-3">
            {/* Daily Deterministic Set Option */}
            <button
              onClick={() => setSelectedPackType('daily')}
              className={`w-full p-4 rounded-xl border-2 border-slate-900 text-left transition-all cursor-pointer space-y-1 active:translate-y-0.5 ${
                selectedPackType === 'daily'
                  ? 'bg-purple-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ring-2 ring-purple-600'
                  : 'bg-purple-50 hover:bg-purple-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-700" />
                  <span className="font-black text-sm text-slate-900 uppercase">
                    Paket Anak Tangga Harian (10 Soal Variasi Hari Ini)
                  </span>
                </div>
                <span className="text-[10px] font-black uppercase text-purple-950 bg-white px-2.5 py-0.5 rounded-md border border-slate-900">
                  Rekomendasi Habit
                </span>
              </div>
              <p className="text-xs font-medium text-slate-600">
                10 soal yang digenerate khusus untuk tanggal {todayStr} mencakup seluruh 5 kategori trik hitung cepat.
              </p>
            </button>

            <div className="text-xs font-black uppercase tracking-wider text-slate-500 pt-2">
              Atau Pilih Arsip Latihan Tambahan:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MENTAL_MATH_QUESTION_SETS.map((set, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPackType(idx)}
                  className={`p-4 rounded-xl border-2 border-slate-900 text-left transition-all cursor-pointer space-y-1 active:translate-y-0.5 ${
                    selectedPackType === idx
                      ? 'bg-purple-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                      : 'bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-black text-sm text-slate-900">
                      Bank Soal #{idx + 1}
                    </span>
                    <span className="text-[10px] font-black uppercase text-purple-950 bg-white px-2.5 py-0.5 rounded-md border border-slate-900">
                      10 Soal
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-600">
                    Perkalian 11, Kuadrat 5, Persentase & Penjumlahan
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Timer Mode Toggle */}
          <div className="pt-4 border-t-2 border-slate-100 space-y-3">
            <label className="text-xs font-black text-slate-700 uppercase tracking-wider block">
              Mode Timer:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => setUseTimer(true)}
                className={`p-4 rounded-xl border-2 border-slate-900 text-left transition-all cursor-pointer flex items-center justify-between active:translate-y-0.5 ${
                  useTimer
                    ? 'bg-amber-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-slate-950 font-black'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 stroke-[2.5]" />
                  <div>
                    <div className="text-xs font-black uppercase">Mode Timer (15 Detik / Soal)</div>
                    <div className="text-[11px] font-medium opacity-80">Melatih kecepatan refleks otak</div>
                  </div>
                </div>
                {useTimer && <Check className="w-5 h-5 stroke-[3]" />}
              </button>

              <button
                onClick={() => setUseTimer(false)}
                className={`p-4 rounded-xl border-2 border-slate-900 text-left transition-all cursor-pointer flex items-center justify-between active:translate-y-0.5 ${
                  !useTimer
                    ? 'bg-amber-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-slate-950 font-black'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 stroke-[2.5]" />
                  <div>
                    <div className="text-xs font-black uppercase">Mode Santai (Tanpa Batas Waktu)</div>
                    <div className="text-[11px] font-medium opacity-80">Bebas berhitung tanpa panik</div>
                  </div>
                </div>
                {!useTimer && <Check className="w-5 h-5 stroke-[3]" />}
              </button>
            </div>
          </div>

          {/* Start CTA */}
          <div className="pt-2">
            <button
              onClick={handleStartSession}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-black py-4 px-6 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-base uppercase transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5"
            >
              <Play className="w-5 h-5 fill-white" />
              Mulai 10 Soal Anak Tangga
            </button>
          </div>
        </div>
      </div>
    );
  }

  // STEP 2: ACTIVE QUIZ
  if (mode === 'quiz') {
    const isTimeout = userAnswers[activeQ.id] === -999999;
    const selectedAns = userAnswers[activeQ.id];
    const isCorrect = selectedAns === activeQ.correctAnswer;

    return (
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* Top Header with Progress & Timer */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-black uppercase bg-purple-200 text-purple-950 px-3 py-1.5 rounded-xl border border-slate-900">
              Soal {currentIndex + 1} dari {currentQuestions.length}
            </span>
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded-md border border-slate-300">
              {activeQ.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {useTimer && (
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-mono font-black text-sm ${
                remainingTime <= 5 ? 'bg-rose-300 text-rose-950 animate-pulse' : 'bg-amber-200 text-amber-950'
              }`}>
                <Clock className="w-4 h-4 stroke-[2.5]" />
                <span>{remainingTime}s</span>
              </div>
            )}

            <button
              onClick={() => {
                if (confirm('Keluar dari sesi latihan?')) {
                  setMode('setup');
                }
              }}
              className="text-xs font-black uppercase text-slate-500 hover:text-slate-900"
            >
              Keluar
            </button>
          </div>
        </div>

        {/* Question Bento Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border-2 border-slate-900 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-md border border-purple-200 inline-block">
              Hitung Cepat Di Luar Kepala
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-slate-900 py-2">
              {activeQ.question}
            </h2>
          </div>

          {/* 4 Answer Choice Buttons */}
          <div className="grid grid-cols-2 gap-3.5 max-w-md mx-auto pt-2">
            {activeQ.options.map((opt, optIdx) => {
              const isThisChosen = selectedAns === opt;
              let btnClass = 'bg-slate-50 hover:bg-purple-50 text-slate-900 border-slate-900';

              if (isQuestionAnswered) {
                if (opt === activeQ.correctAnswer) {
                  btnClass = 'bg-emerald-300 text-emerald-950 font-black border-slate-900 ring-2 ring-emerald-600';
                } else if (isThisChosen && !isCorrect) {
                  btnClass = 'bg-rose-300 text-rose-950 font-black border-slate-900 line-through';
                } else {
                  btnClass = 'bg-slate-100 text-slate-400 opacity-60 border-slate-300';
                }
              }

              return (
                <button
                  key={optIdx}
                  disabled={isQuestionAnswered}
                  onClick={() => handleSelectAnswer(opt)}
                  className={`p-4 sm:p-5 rounded-2xl border-2 font-mono font-black text-xl sm:text-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer active:translate-y-0.5 ${btnClass}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Feedback & Hint when Answered */}
          {isQuestionAnswered && (
            <div className="pt-4 space-y-4 animate-in fade-in">
              <div className={`p-4 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-left space-y-2 ${
                isCorrect ? 'bg-emerald-100 text-emerald-950' : 'bg-rose-100 text-rose-950'
              }`}>
                <div className="flex items-center gap-2 font-black text-sm">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                      <span>Luar biasa! Jawabanmu Tepat ({activeQ.correctAnswer})</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-700" />
                      <span>{isTimeout ? 'Waktu Habis!' : 'Kurang tepat!'} Jawaban yang benar: {activeQ.correctAnswer}</span>
                    </>
                  )}
                </div>

                <div className="text-xs bg-white/90 p-3 rounded-lg border border-slate-900 text-slate-800 space-y-1">
                  <div className="font-black text-purple-900 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> Trik Cepat ({activeQ.trickName}):
                  </div>
                  <p className="leading-relaxed font-medium">{activeQ.trickExplanation}</p>
                </div>
              </div>

              <button
                onClick={handleNextQuestion}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-black py-3.5 px-6 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm uppercase transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5"
              >
                {currentIndex < currentQuestions.length - 1 ? 'Soal Berikutnya' : 'Selesai & Lihat Hasil'}
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          )}

          {/* Hint Trigger while still thinking */}
          {!isQuestionAnswered && (
            <div className="pt-2">
              {!isShowingHint[activeQ.id] ? (
                <button
                  type="button"
                  onClick={() => setIsShowingHint(prev => ({ ...prev, [activeQ.id]: true }))}
                  className="text-xs font-bold text-slate-500 hover:text-purple-700 underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <Lightbulb className="w-3.5 h-3.5" /> Butuh Petunjuk Trik?
                </button>
              ) : (
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-300 text-xs text-slate-800 text-left max-w-md mx-auto">
                  <strong className="text-amber-900">💡 Petunjuk:</strong> {activeQ.hint}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // STEP 3: RESULT VIEW
  const stats = evaluateStats();

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="bg-purple-300 text-slate-950 rounded-2xl p-6 sm:p-8 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-900 mx-auto flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <Brain className="w-9 h-9 text-slate-900 stroke-[2.5]" />
        </div>

        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-white px-3 py-1 rounded-md border border-slate-900 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            Anak Tangga Hari Ini: {dailyMentalMathProgress.completedCount} / 10 Soal Tuntas
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mt-2 uppercase tracking-tight">
            {dailyMentalMathProgress.completedCount >= 10
              ? '🎉 Sempurna! Habit Anak Tangga 10/10 Tuntas Hari Ini!'
              : 'Selesai 10 Soal Mental Math!'}
          </h2>
          <p className="text-xs sm:text-sm font-bold text-slate-800">
            {selectedPackType === 'daily' ? `Paket Harian Anak Tangga (${todayStr})` : `Bank Soal #${(selectedPackType as number) + 1}`} • {useTimer ? 'Mode Timer 15s' : 'Mode Santai'}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2 text-slate-900 max-w-md mx-auto">
          <div className="bg-white rounded-xl p-3 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[10px] font-black uppercase text-slate-500 block">Akurasi</span>
            <span className="text-2xl font-black font-mono text-purple-900">{stats.accuracy}%</span>
            <span className="text-[10px] font-bold text-slate-600 block">{stats.correctCount}/10 Benar</span>
          </div>

          <div className="bg-white rounded-xl p-3 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[10px] font-black uppercase text-slate-500 block">Total Waktu</span>
            <span className="text-2xl font-black font-mono text-slate-900">{formatTime(totalQuizSeconds)}</span>
            <span className="text-[10px] font-bold text-slate-600 block">Durasi</span>
          </div>

          <div className="bg-white rounded-xl p-3 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[10px] font-black uppercase text-slate-500 block">Koin</span>
            <span className="text-2xl font-black font-mono text-amber-700">+{stats.correctCount * 10}</span>
            <span className="text-[10px] font-bold text-slate-600 block">Coins</span>
          </div>
        </div>
      </div>

      {/* Answer Key List & Breakdown */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-slate-900 px-1 uppercase tracking-tight">
          Review Pembahasan Soal:
        </h3>

        <div className="space-y-3">
          {currentQuestions.map((q, idx) => {
            const userChoice = userAnswers[q.id];
            const isCorrect = userChoice === q.correctAnswer;
            const isTimeout = userChoice === -999999;

            return (
              <div key={q.id} className="bg-white rounded-2xl p-5 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5">
                    <span className="font-black text-xs bg-purple-200 text-purple-950 border border-slate-900 w-6 h-6 rounded-md flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-900 inline-block mb-1">
                        {q.category}
                      </span>
                      <p className="text-base font-black font-mono text-slate-900">{q.question}</p>
                    </div>
                  </div>
                  {isCorrect ? (
                    <span className="text-xs font-black text-emerald-950 bg-emerald-300 border border-slate-900 px-2.5 py-0.5 rounded-md flex items-center gap-1 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Benar
                    </span>
                  ) : (
                    <span className="text-xs font-black text-rose-950 bg-rose-300 border border-slate-900 px-2.5 py-0.5 rounded-md flex items-center gap-1 shrink-0">
                      <XCircle className="w-3.5 h-3.5" /> {isTimeout ? 'Waktu Habis' : 'Salah'}
                    </span>
                  )}
                </div>

                <div className="text-xs space-y-1.5 pl-8 font-medium">
                  <p className="text-slate-600">
                    Jawabanmu: <strong className="font-mono text-slate-900">{userChoice !== null && userChoice !== undefined && !isTimeout ? userChoice : '(Tidak dijawab)'}</strong> • Kunci: <strong className="font-mono text-emerald-700">{q.correctAnswer}</strong>
                  </p>
                  <p className="text-slate-600 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    💡 <strong>Trik:</strong> {q.trickExplanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-4 flex items-center justify-between gap-3 flex-wrap">
        <button
          onClick={() => setMode('setup')}
          className="px-5 py-2.5 rounded-xl bg-white border-2 border-slate-900 text-xs sm:text-sm font-black uppercase text-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-50 cursor-pointer active:translate-y-0.5"
        >
          Coba Paket Lain
        </button>

        <button
          onClick={onBack}
          className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs sm:text-sm font-black uppercase border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer active:translate-y-0.5"
        >
          Kembali ke Habit Dashboard
        </button>
      </div>
    </div>
  );
};
