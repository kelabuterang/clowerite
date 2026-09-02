import React, { useState, useEffect } from 'react';
import { Brain, Play, Check, ArrowLeft, ArrowRight, Clock, Sparkles, CheckCircle2, XCircle, Lightbulb, Zap, HelpCircle, BookOpen, AlertCircle, RefreshCw, Target } from 'lucide-react';
import { MENTAL_MATH_QUESTION_SETS, getDailyMentalMathSet, MENTAL_MATH_GUIDES, getModuleDrillSet } from '../data/mentalMathData';
import { MentalMathQuestion } from '../types';
import { useHabit } from '../context/HabitContext';

interface Props {
  onBack: () => void;
  onOpenGuide: () => void;
  initialPackType?: string;
}

type Mode = 'setup' | 'quiz' | 'result';

export const MentalMathTrainer: React.FC<Props> = ({ onBack, onOpenGuide, initialPackType }) => {
  const { recordSession, dailyMentalMathProgress, recordMentalMathStep, theme } = useHabit();
  const isCoastal = theme === 'coastal';

  const todayStr = new Date().toISOString().split('T')[0];
  const dailySet = getDailyMentalMathSet(todayStr);

  // Settings
  const [selectedPackType, setSelectedPackType] = useState<string>(initialPackType || 'daily');
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

  const getActiveQuestions = (): MentalMathQuestion[] => {
    if (selectedPackType === 'daily') {
      return dailySet;
    }
    if (selectedPackType === 'marathon-50') {
      return MENTAL_MATH_QUESTION_SETS.slice(2, 7).flat();
    }
    if (selectedPackType.startsWith('set-')) {
      const idx = parseInt(selectedPackType.replace('set-', ''), 10);
      if (!isNaN(idx) && MENTAL_MATH_QUESTION_SETS[idx]) {
        return MENTAL_MATH_QUESTION_SETS[idx];
      }
    }
    if (selectedPackType.startsWith('drill-')) {
      const moduleId = selectedPackType.replace('drill-', '');
      return getModuleDrillSet(moduleId);
    }
    const idx = parseInt(selectedPackType, 10);
    if (!isNaN(idx) && MENTAL_MATH_QUESTION_SETS[idx]) {
      return MENTAL_MATH_QUESTION_SETS[idx];
    }
    return dailySet;
  };

  const currentQuestions = getActiveQuestions();
  const activeQ = currentQuestions[currentIndex] || currentQuestions[0];

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

    const packLabel = selectedPackType === 'daily'
      ? `Paket Harian Lingkar Tahun (${todayStr})`
      : selectedPackType.startsWith('drill-')
      ? `Drilling 15 Soal: ${MENTAL_MATH_GUIDES.find(g => g.id === selectedPackType.replace('drill-', ''))?.title || 'Modul Khusus'}`
      : `Set Latihan #${selectedPackType}`;

    recordSession({
      habitId: 'lingkar-tahun',
      title: `Mental Math: ${packLabel} (${useTimer ? 'Timer 15s' : 'No Timer'})`,
      readingDurationSeconds: 0,
      quizDurationSeconds: totalQuizSeconds,
      totalDurationSeconds: totalQuizSeconds,
      wordCount: 0,
      wpm: 0,
      accuracyPercentage: stats.accuracy,
      kem: 0,
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

  // STEP 1: SETUP SCREEN
  if (mode === 'setup') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Back Button & Title */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className={`flex items-center gap-2 text-xs sm:text-sm font-black uppercase ${isCoastal ? 'text-[#1E293B] hover:text-[#2563EB]' : 'text-[#283618] hover:text-[#588157]'} transition-all cursor-pointer`}
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            Kembali ke Beranda
          </button>

          <button
            onClick={onOpenGuide}
            className={`flex items-center gap-2 ${isCoastal ? 'bg-[#D0E1F0] hover:bg-[#BFDBFE] text-[#1E293B] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#CCD5AE] hover:bg-[#E9EDC9] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'} font-black text-xs sm:text-sm px-4 py-2 rounded-xl border-2 cursor-pointer active:translate-y-0.5`}
          >
            <BookOpen className="w-4 h-4" />
            Buka Panduan Trik
          </button>
        </div>

        {/* Banner */}
        <div className={`${isCoastal ? 'bg-[#D0E1F0] text-[#1E293B] border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[4px_4px_0px_0px_#283618]'} rounded-2xl p-6 sm:p-8 border-2 space-y-3`}>
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border ${isCoastal ? 'border-[#1E293B] text-[#1E40AF]' : 'border-[#283618] text-[#3A5A40]'} text-xs font-black tracking-widest uppercase`}>
            <Brain className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#2563EB]' : 'text-[#588157]'} stroke-[2.5]`} />
            LINGKAR TAHUN: MENTAL MATH & DRILLING KHUSUS
          </div>
          <h1 className={`text-2xl sm:text-3xl font-black leading-snug uppercase tracking-tight ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'}`}>
            Latihan Berhitung Cepat di Luar Kepala
          </h1>
          <p className={`text-xs sm:text-sm ${isCoastal ? 'text-[#334155]' : 'text-[#3A5A40]'} font-bold leading-relaxed max-w-2xl`}>
            Tersedia Paket Harian 10 Soal dan <strong>Drilling Khusus 15 Soal per Modul</strong> untuk mengasah trik penjumlahan kiri ke kanan, kompensasi, pengurangan maju, perkalian 5/9/11/25, persentase cepat, dan kuadrat angka 5.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <span className={`text-xs font-black bg-white px-3 py-1 rounded-lg border ${isCoastal ? 'border-[#1E293B] text-[#1E293B]' : 'border-[#283618]'}`}>
              Target Harian: {dailyMentalMathProgress.completedCount}/10 Soal Selesai
            </span>
          </div>
        </div>

        {/* Configuration Card */}
        <div className={`bg-white rounded-2xl p-6 sm:p-8 border-2 ${isCoastal ? 'border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'border-[#283618] shadow-[4px_4px_0px_0px_#283618]'} space-y-6`}>
          <h3 className={`text-base sm:text-lg font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} uppercase tracking-tight`}>
            Pilih Paket Latihan & Pengaturan:
          </h3>

          {/* Pack Selection */}
          <div className="space-y-3">
            <label className={`text-xs font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} uppercase tracking-wider block`}>
              1. Pilihan Soal & Modul Drilling:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Daily Pack */}
              <button
                onClick={() => setSelectedPackType('daily')}
                className={`p-4 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#283618]'} text-left transition-all cursor-pointer flex items-center justify-between ${
                  selectedPackType === 'daily'
                    ? (isCoastal ? 'bg-[#E0EBF5] text-[#1E293B] font-black shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#E9EDC9] text-[#283618] font-black shadow-[3px_3px_0px_0px_#283618]')
                    : 'bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="text-xs sm:text-sm font-black uppercase">Paket Harian (10 Soal)</div>
                  <div className={`text-[11px] ${isCoastal ? 'text-[#1E40AF]' : 'text-[#3A5A40]'} font-bold mt-0.5`}>
                    Kombinasi acak trik mental math untuk target hari ini ({todayStr})
                  </div>
                </div>
                {selectedPackType === 'daily' && <CheckCircle2 className={`w-5 h-5 ${isCoastal ? 'text-[#2563EB]' : 'text-[#588157]'} shrink-0`} />}
              </button>

              {/* Marathon 50 Soal Baru */}
              <button
                onClick={() => setSelectedPackType('marathon-50')}
                className={`p-4 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#283618]'} text-left transition-all cursor-pointer flex items-center justify-between ${
                  selectedPackType === 'marathon-50'
                    ? (isCoastal ? 'bg-[#E0EBF5] text-[#1E293B] font-black shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#E9EDC9] text-[#283618] font-black shadow-[3px_3px_0px_0px_#283618]')
                    : 'bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className={`inline-flex items-center gap-1 text-[10px] font-black ${isCoastal ? 'bg-[#0EA5E9]' : 'bg-[#DDA15E]'} text-white px-2 py-0.5 rounded uppercase mb-1`}>
                    <Zap className="w-3 h-3" /> Marathon 50 Soal
                  </div>
                  <div className="text-xs sm:text-sm font-black uppercase">Tantangan Akbar 50 Soal Baru (Set 3 - 7)</div>
                  <div className={`text-[11px] ${isCoastal ? 'text-[#1E40AF]' : 'text-[#3A5A40]'} font-bold mt-0.5`}>
                    Latihan intensif 50 soal: Finansial, Basis 100, Pecahan Istimewa, Kompensasi, & Trik Kilat
                  </div>
                </div>
                {selectedPackType === 'marathon-50' && <CheckCircle2 className={`w-5 h-5 ${isCoastal ? 'text-[#2563EB]' : 'text-[#588157]'} shrink-0`} />}
              </button>

              {/* Curated 10-Question Sets */}
              {[
                { id: 'set-0', title: 'Set 1: Fondasi & Trik Cepat', desc: 'Perkalian 5, 11, pembulatan, & kuadrat akhiran 5' },
                { id: 'set-1', title: 'Set 2: Trik Menengah & Pengurangan', desc: 'Pengurangan kompensasi & hitung maju 1000' },
                { id: 'set-2', title: 'Set 3: Finansial, Diskon & Rasio (Baru)', desc: 'Diskon 25%, bunga tahunan, laba, & rasio proporsi' },
                { id: 'set-3', title: 'Set 4: Basis 100 & Selisih Kuadrat (Baru)', desc: 'Perkalian basis 100 & selisih kuadrat a² - b²' },
                { id: 'set-4', title: 'Set 5: Pecahan & Persentase Istimewa (Baru)', desc: '12.5%, 37.5%, 75%, 16.67%, & sepertiga' },
                { id: 'set-5', title: 'Set 6: Left-to-Right & Kelompok Angka (Baru)', desc: 'Penjumlahan ratusan, kompensasi ganda, & kelompok 1000' },
                { id: 'set-6', title: 'Set 7: Perkalian & Pembagian Kilat (Baru)', desc: 'Trik perkalian 25, 9, serta pembagian cepat 5 & 25' },
              ].map((cSet) => {
                const isSelected = selectedPackType === cSet.id;
                return (
                  <button
                    key={cSet.id}
                    onClick={() => setSelectedPackType(cSet.id)}
                    className={`p-4 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#283618]'} text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? (isCoastal ? 'bg-[#D0E1F0] text-[#1E293B] font-black shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#FAEDCD] text-[#283618] font-black shadow-[3px_3px_0px_0px_#283618]')
                        : 'bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className={`inline-flex items-center gap-1 text-[10px] font-black ${isCoastal ? 'bg-[#3B82F6]' : 'bg-[#606C38]'} text-white px-2 py-0.5 rounded uppercase mb-1`}>
                        <Brain className="w-3 h-3" /> Kurasi 10 Soal
                      </div>
                      <div className="text-xs sm:text-sm font-black uppercase">{cSet.title}</div>
                      <div className={`text-[11px] ${isCoastal ? 'text-[#475569]' : 'text-[#8C6B4F]'} font-bold mt-0.5`}>
                        {cSet.desc}
                      </div>
                    </div>
                    {isSelected && <CheckCircle2 className={`w-5 h-5 ${isCoastal ? 'text-[#2563EB]' : 'text-[#709752]'} shrink-0`} />}
                  </button>
                );
              })}

              {/* 6 Dedicated 15-Question Module Drilling Sets */}
              {MENTAL_MATH_GUIDES.map((guide, gIdx) => {
                const drillKey = `drill-${guide.id}`;
                const isSelected = selectedPackType === drillKey;
                return (
                  <button
                    key={guide.id}
                    onClick={() => setSelectedPackType(drillKey)}
                    className={`p-4 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#283618]'} text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? (isCoastal ? 'bg-[#D0E1F0] text-[#1E293B] font-black shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#FAEDCD] text-[#283618] font-black shadow-[3px_3px_0px_0px_#283618]')
                        : 'bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className={`inline-flex items-center gap-1 text-[10px] font-black ${isCoastal ? 'bg-[#2563EB]' : 'bg-[#709752]'} text-white px-2 py-0.5 rounded uppercase mb-1`}>
                        <Target className="w-3 h-3" /> Drilling 15 Soal
                      </div>
                      <div className="text-xs sm:text-sm font-black uppercase">{guide.title}</div>
                      <div className={`text-[11px] ${isCoastal ? 'text-[#475569]' : 'text-[#8C6B4F]'} font-bold mt-0.5`}>
                        {guide.badge} - Fokus intensif 15 butir soal
                      </div>
                    </div>
                    {isSelected && <CheckCircle2 className={`w-5 h-5 ${isCoastal ? 'text-[#2563EB]' : 'text-[#709752]'} shrink-0`} />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Timer Settings */}
          <div className="space-y-3 pt-4 border-t-2 border-slate-100">
            <label className={`text-xs font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} uppercase tracking-wider block`}>
              2. Pengaturan Batas Waktu:
            </label>

            <div className="flex flex-wrap gap-4 items-center">
              <label className={`flex items-center gap-2 cursor-pointer text-xs sm:text-sm font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'}`}>
                <input
                  type="checkbox"
                  checked={useTimer}
                  onChange={e => setUseTimer(e.target.checked)}
                  className={`w-4 h-4 ${isCoastal ? 'accent-[#2563EB]' : 'accent-[#709752]'} cursor-pointer`}
                />
                Gunakan Timer per Soal (15 Detik)
              </label>

              {useTimer && (
                <div className={`flex items-center gap-2 text-xs font-black ${isCoastal ? 'text-[#1E40AF] bg-[#E0EBF5] border-[#93C5FD]' : 'text-[#3A5A40] bg-[#E9EDC9] border-[#A3B18A]'} px-3 py-1.5 rounded-lg border`}>
                  <Clock className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#2563EB]' : 'text-[#588157]'}`} />
                  15 detik per pertanyaan (otomatis pindah jika habis)
                </div>
              )}
            </div>
          </div>

          {/* Start Button */}
          <div className="pt-4">
            <button
              onClick={handleStartSession}
              className={`w-full ${isCoastal ? 'bg-[#2563EB] hover:bg-blue-700 border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'bg-[#709752] hover:bg-[#588157] border-[#283618] shadow-[4px_4px_0px_0px_#283618]'} text-white font-black text-sm sm:text-base py-4 rounded-xl border-2 uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5 transition-all`}
            >
              <Play className="w-5 h-5 fill-white" />
              Mulai Sesi Latihan ({currentQuestions.length} Soal)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // STEP 2: ACTIVE QUIZ SCREEN
  if (mode === 'quiz') {
    const isAnswered = isQuestionAnswered;
    const chosenVal = userAnswers[activeQ.id];
    const isCorrect = chosenVal === activeQ.correctAnswer;
    const showHint = isShowingHint[activeQ.id];

    return (
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* Top bar: Question progress & Timer */}
        <div className={`bg-white rounded-2xl p-4 sm:p-5 border-2 ${isCoastal ? 'border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'border-[#283618] shadow-[4px_4px_0px_0px_#283618]'} flex items-center justify-between gap-4`}>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-black uppercase ${isCoastal ? 'text-[#1E40AF] bg-[#E0EBF5] border-[#93C5FD]' : 'text-[#3A5A40] bg-[#E9EDC9] border-[#A3B18A]'} px-3 py-1 rounded-md border`}>
              Soal {currentIndex + 1} dari {currentQuestions.length}
            </span>
            <span className={`text-xs font-bold ${isCoastal ? 'text-[#475569]' : 'text-[#574332]'} hidden sm:inline`}>
              {activeQ.category}
            </span>
          </div>

          {/* Timer Display */}
          {useTimer && (
            <div className={`flex items-center gap-2 font-mono font-black text-sm px-3 py-1 rounded-lg border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#283618]'} ${
              remainingTime <= 5
                ? 'bg-red-200 text-red-950 animate-pulse'
                : (isCoastal ? 'bg-[#D0E1F0] text-[#1E40AF]' : 'bg-[#FAEDCD] text-[#8C6B4F]')
            }`}>
              <Clock className="w-4 h-4" />
              <span>{remainingTime}s</span>
            </div>
          )}
        </div>

        {/* Question Card */}
        <div className={`bg-white rounded-2xl p-6 sm:p-10 border-2 ${isCoastal ? 'border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'border-[#283618] shadow-[4px_4px_0px_0px_#283618]'} space-y-6 text-center`}>
          {/* Prompt/Clue */}
          <div className={`inline-block ${isCoastal ? 'bg-[#D0E1F0] text-[#1E40AF] border-[#93C5FD]' : 'bg-[#FAEDCD] text-[#8C6B4F] border-[#DDA15E]'} text-xs font-black px-4 py-1.5 rounded-full border`}>
            💡 {activeQ.prompt}
          </div>

          {/* The Math Expression */}
          <div className="py-4">
            <div className={`text-4xl sm:text-6xl font-mono font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} tracking-tight`}>
              {activeQ.question}
            </div>
          </div>

          {/* 4 Multiple Choice Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
            {activeQ.options.map((opt, oIdx) => {
              const isSelected = chosenVal === opt;
              const isThisCorrect = opt === activeQ.correctAnswer;

              let btnStyle = isCoastal ? 'bg-white text-[#1E293B] hover:bg-[#E0EBF5]/40' : 'bg-white text-[#283618] hover:bg-[#E9EDC9]/30';
              if (isAnswered) {
                if (isThisCorrect) {
                  btnStyle = isCoastal
                    ? 'bg-[#2563EB] text-white border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]'
                    : 'bg-[#709752] text-white border-[#283618] shadow-[3px_3px_0px_0px_#283618]';
                } else if (isSelected && !isThisCorrect) {
                  btnStyle = `bg-red-400 text-white ${isCoastal ? 'border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'border-[#283618] shadow-[3px_3px_0px_0px_#283618]'}`;
                } else {
                  btnStyle = 'bg-slate-100 text-slate-400 border-slate-300 opacity-60';
                }
              }

              return (
                <button
                  key={oIdx}
                  onClick={() => handleSelectAnswer(opt)}
                  disabled={isAnswered}
                  className={`p-4 sm:p-5 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#283618]'} font-mono text-xl sm:text-2xl font-black transition-all cursor-pointer active:translate-y-0.5 ${btnStyle}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Instant Feedback & Explanation */}
          {isAnswered && (
            <div className={`p-4 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#283618]'} text-left space-y-2 max-w-lg mx-auto ${
              isCorrect ? (isCoastal ? 'bg-[#E0EBF5]' : 'bg-[#E9EDC9]') : 'bg-red-100'
            }`}>
              <div className="flex items-center gap-2 font-black text-sm uppercase">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className={`w-5 h-5 ${isCoastal ? 'text-[#2563EB]' : 'text-[#709752]'}`} />
                    <span className={isCoastal ? 'text-[#1E40AF]' : 'text-[#3A5A40]'}>Tepat Sekali!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-950">Jawaban Benar: {activeQ.correctAnswer}</span>
                  </>
                )}
              </div>
              <p className={`text-xs ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} font-bold`}>
                <strong>Cara Cepat:</strong> {activeQ.trickExplanation}
              </p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="pt-4 max-w-lg mx-auto">
              <button
                onClick={handleNextQuestion}
                className={`w-full ${isCoastal ? 'bg-[#2563EB] hover:bg-blue-700 border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#709752] hover:bg-[#588157] border-[#283618] shadow-[3px_3px_0px_0px_#283618]'} text-white font-black text-sm sm:text-base py-3.5 rounded-xl border-2 uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5`}
              >
                <span>{currentIndex < currentQuestions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // STEP 3: RESULT SUMMARY
  const stats = evaluateStats();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      <div className={`bg-white rounded-3xl p-6 sm:p-8 border-2 ${isCoastal ? 'border-[#1E293B] shadow-[6px_6px_0px_0px_#1E293B]' : 'border-[#283618] shadow-[6px_6px_0px_0px_#283618]'} text-center space-y-6`}>
        <div className={`w-16 h-16 ${isCoastal ? 'bg-[#D0E1F0] border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#CCD5AE] border-[#283618] shadow-[3px_3px_0px_0px_#283618]'} rounded-2xl border-2 flex items-center justify-center mx-auto`}>
          <Sparkles className={`w-8 h-8 ${isCoastal ? 'text-[#2563EB]' : 'text-[#588157]'}`} />
        </div>

        <div className="space-y-1">
          <h2 className={`text-2xl sm:text-3xl font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} uppercase tracking-tight`}>
            Sesi Latihan Selesai!
          </h2>
          <p className={`text-xs sm:text-sm ${isCoastal ? 'text-[#475569]' : 'text-[#574332]'} font-bold`}>
            Progres berhitung di luar kepala Anda telah tersimpan secara otomatis.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className={`${isCoastal ? 'bg-[#E0EBF5] border-[#1E293B]' : 'bg-[#E9EDC9] border-[#283618]'} p-4 rounded-xl border-2`}>
            <div className={`text-[10px] font-black uppercase ${isCoastal ? 'text-[#1E40AF]' : 'text-[#3A5A40]'}`}>Akurasi</div>
            <div className={`text-2xl sm:text-3xl font-mono font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} mt-1`}>{stats.accuracy}%</div>
          </div>
          <div className={`${isCoastal ? 'bg-[#D0E1F0] border-[#1E293B]' : 'bg-[#FAEDCD] border-[#283618]'} p-4 rounded-xl border-2`}>
            <div className={`text-[10px] font-black uppercase ${isCoastal ? 'text-[#1E40AF]' : 'text-[#8C6B4F]'}`}>Benar / Total</div>
            <div className={`text-2xl sm:text-3xl font-mono font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} mt-1`}>{stats.correctCount}/{stats.total}</div>
          </div>
          <div className={`${isCoastal ? 'bg-[#E2E8F0] border-[#1E293B]' : 'bg-[#CCD5AE] border-[#283618]'} p-4 rounded-xl border-2`}>
            <div className={`text-[10px] font-black uppercase ${isCoastal ? 'text-[#334155]' : 'text-[#3A5A40]'}`}>Waktu</div>
            <div className={`text-2xl sm:text-3xl font-mono font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} mt-1`}>{formatTime(totalQuizSeconds)}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => setMode('setup')}
            className={`flex-1 ${isCoastal ? 'bg-[#D0E1F0] hover:bg-[#BFDBFE] text-[#1E293B] border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#FAEDCD] hover:bg-[#E9EDC9] text-[#283618] border-[#283618] shadow-[3px_3px_0px_0px_#283618]'} font-black text-xs sm:text-sm py-3.5 rounded-xl border-2 uppercase flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5`}
          >
            <RefreshCw className="w-4 h-4" />
            Latihan Modul Lain
          </button>
          <button
            onClick={onBack}
            className={`flex-1 ${isCoastal ? 'bg-[#2563EB] hover:bg-blue-700 border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#709752] hover:bg-[#588157] border-[#283618] shadow-[3px_3px_0px_0px_#283618]'} text-white font-black text-xs sm:text-sm py-3.5 rounded-xl border-2 uppercase flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5`}
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
