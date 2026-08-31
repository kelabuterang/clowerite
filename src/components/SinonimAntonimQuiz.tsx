import React, { useState, useMemo, useEffect } from 'react';
import { Sparkles, CheckCircle2, XCircle, ArrowRight, RotateCcw, BookOpen, Flame, Shuffle, Award, ExternalLink, HelpCircle, Layers, Bookmark } from 'lucide-react';
import { SINONIM_ANTONIM_LIST } from '../data/sinonimAntonimData';
import { CloverMascot } from './CloverMascot';
import { SinonimAntonimItem } from '../types';
import { useHabit } from '../context/HabitContext';
import confetti from 'canvas-confetti';

export type QuizType = 'mix' | 'sinonim' | 'antonim';

interface QuestionState {
  targetItem: SinonimAntonimItem;
  questionType: 'sinonim' | 'antonim';
  prompt: string;
  correctAnswer: string;
  options: string[];
}

export const SinonimAntonimQuiz: React.FC<{ onBack?: () => void }> = () => {
  const { theme } = useHabit();
  const isCoastal = theme === 'coastal';

  const [quizMode, setQuizMode] = useState<QuizType>('mix');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  // Categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(SINONIM_ANTONIM_LIST.map(i => i.category || 'Umum')));
    return ['all', ...cats];
  }, []);

  // Filtered pool
  const filteredPool = useMemo(() => {
    if (selectedCategory === 'all') return SINONIM_ANTONIM_LIST;
    return SINONIM_ANTONIM_LIST.filter(i => (i.category || 'Umum') === selectedCategory);
  }, [selectedCategory]);

  // Shuffled items
  const [shuffledIndices, setShuffledIndices] = useState<number[]>(() => {
    return Array.from({ length: SINONIM_ANTONIM_LIST.length }, (_, i) => i).sort(() => Math.random() - 0.5);
  });

  const handleShuffle = () => {
    setShuffledIndices(Array.from({ length: filteredPool.length }, (_, i) => i).sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  // Generate current question
  const currentQuestion: QuestionState = useMemo(() => {
    const pool = filteredPool.length > 0 ? filteredPool : SINONIM_ANTONIM_LIST;
    const itemIndex = shuffledIndices[currentIndex % shuffledIndices.length] % pool.length;
    const targetItem = pool[itemIndex] || pool[0];

    // Determine whether this question asks for sinonim or antonim
    let type: 'sinonim' | 'antonim' = 'sinonim';
    if (quizMode === 'sinonim') {
      type = 'sinonim';
    } else if (quizMode === 'antonim') {
      type = 'antonim';
    } else {
      type = (currentIndex % 2 === 0) ? 'sinonim' : 'antonim';
    }

    const isSinonim = type === 'sinonim';
    const correctAnswerPool = isSinonim ? targetItem.sinonim : targetItem.antonim;
    const correctAnswer = correctAnswerPool[Math.floor(Math.random() * correctAnswerPool.length)] || (isSinonim ? targetItem.sinonim[0] : targetItem.antonim[0]);

    // Distractors from other words
    const distractorCandidates: string[] = [];
    pool.forEach(other => {
      if (other.id !== targetItem.id) {
        if (isSinonim) {
          distractorCandidates.push(...other.antonim);
          distractorCandidates.push(...other.sinonim);
        } else {
          distractorCandidates.push(...other.sinonim);
          distractorCandidates.push(...other.antonim);
        }
      }
    });

    // Pick 3 unique distractors that are not equal to correct answer or target word
    const uniqueDistractors: string[] = [];
    const shuffledDistractors = distractorCandidates.sort(() => Math.random() - 0.5);
    for (const d of shuffledDistractors) {
      if (
        d !== correctAnswer &&
        d.toLowerCase() !== targetItem.word.toLowerCase() &&
        !correctAnswerPool.includes(d) &&
        !uniqueDistractors.includes(d)
      ) {
        uniqueDistractors.push(d);
        if (uniqueDistractors.length === 3) break;
      }
    }

    // Fallbacks if not enough distractors
    const fallbacks = ['Langgeng', 'Statis', 'Pribadi', 'Tersurat', 'Nyata'];
    while (uniqueDistractors.length < 3) {
      const fb = fallbacks[uniqueDistractors.length % fallbacks.length];
      if (fb !== correctAnswer && !uniqueDistractors.includes(fb)) {
        uniqueDistractors.push(fb);
      }
    }

    const options = [correctAnswer, ...uniqueDistractors].sort(() => Math.random() - 0.5);

    const prompt = isSinonim
      ? `Manakah SINONIM (persamaan kata) dari "${targetItem.word}"?`
      : `Manakah ANTONIM (lawan kata) dari "${targetItem.word}"?`;

    return {
      targetItem,
      questionType: type,
      prompt,
      correctAnswer,
      options
    };
  }, [filteredPool, shuffledIndices, currentIndex, quizMode]);

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);
    setTotalAnswered(prev => prev + 1);

    const isCorrect = option === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > highestStreak) setHighestStreak(newStreak);

      if (newStreak % 5 === 0) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#709752', '#DDA15E', '#BC6C25']
        });
      }
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setCurrentIndex(prev => prev + 1);
  };

  const handleResetStats = () => {
    setScore(0);
    setStreak(0);
    setTotalAnswered(0);
    handleShuffle();
  };

  const accuracy = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 100;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Header Bento Card */}
      <div className={`border-2 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 ${
        isCoastal
          ? 'bg-[#EBF1F5] border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]'
          : 'bg-[#E9EDC9] border-[#283618] shadow-[4px_4px_0px_0px_#283618]'
      }`}>
        <div className="space-y-2 text-left flex-1">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md border text-xs font-black tracking-widest uppercase ${
            isCoastal
              ? 'bg-white border-slate-700 text-[#2C4A6F]'
              : 'bg-white border-[#283618] text-[#3A5A40]'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 stroke-[2.5] ${isCoastal ? 'text-[#3A6B88]' : 'text-[#588157]'}`} />
            DRILLING SINONIM & ANTONIM • KAMUS LENGKAP
          </div>
          <h1 className={`text-2xl sm:text-3xl font-black tracking-tight uppercase ${
            isCoastal ? 'text-slate-800' : 'text-[#283618]'
          }`}>
            Quiz Sinonim & Antonim Indonesia
          </h1>
          <p className={`text-xs sm:text-sm font-bold max-w-xl leading-relaxed ${
            isCoastal ? 'text-slate-600' : 'text-[#3A5A40]'
          }`}>
            Tingkatkan kekayaan diksi dan pemahaman relasi makna kata bahasa Indonesia. Latihan acak tanpa batas dengan penjelasan semantik & contoh kalimat.
          </p>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-2 sm:gap-3 pt-2 flex-wrap">
            <div className={`bg-white px-3 py-1.5 border-2 rounded-xl flex items-center gap-1.5 text-xs font-black ${
              isCoastal ? 'border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)] text-slate-800' : 'border-[#283618] shadow-[2px_2px_0px_0px_#283618] text-[#283618]'
            }`}>
              <Flame className={`w-4 h-4 ${isCoastal ? 'text-amber-500 fill-amber-500' : 'text-[#DDA15E] fill-[#DDA15E]'}`} />
              <span>Streak: {streak}</span>
              <span className="text-[10px] text-slate-500 font-bold">(Rekor: {highestStreak})</span>
            </div>

            <div className={`bg-white px-3 py-1.5 border-2 rounded-xl flex items-center gap-1.5 text-xs font-black ${
              isCoastal ? 'border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)] text-[#2C4A6F]' : 'border-[#283618] shadow-[2px_2px_0px_0px_#283618] text-[#3A5A40]'
            }`}>
              <Award className={`w-4 h-4 ${isCoastal ? 'text-[#3A6B88]' : 'text-[#709752]'}`} />
              <span>Skor: {score} / {totalAnswered}</span>
              <span className={`font-mono font-bold ${isCoastal ? 'text-blue-700' : 'text-[#BC6C25]'}`}>({accuracy}%)</span>
            </div>

            <button
              onClick={handleShuffle}
              className={`px-3 py-1.5 bg-white rounded-xl border-2 text-xs font-black cursor-pointer flex items-center gap-1 active:translate-y-0.5 transition-all ${
                isCoastal
                  ? 'border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)] text-slate-800 hover:bg-slate-100'
                  : 'border-[#283618] shadow-[2px_2px_0px_0px_#283618] text-[#283618] hover:bg-[#FAEDCD]'
              }`}
              title="Acak Soal"
            >
              <Shuffle className="w-3.5 h-3.5" /> Acak
            </button>

            <button
              onClick={handleResetStats}
              className={`px-3 py-1.5 bg-white rounded-xl border-2 text-xs font-black cursor-pointer flex items-center gap-1 active:translate-y-0.5 transition-all ${
                isCoastal
                  ? 'border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)] text-slate-800 hover:bg-rose-50'
                  : 'border-[#283618] shadow-[2px_2px_0px_0px_#283618] text-[#283618] hover:bg-rose-100'
              }`}
              title="Reset Statistik"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        <div className="shrink-0">
          <div className={`p-2 bg-white rounded-2xl border-2 ${
            isCoastal ? 'border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]' : 'border-[#283618] shadow-[3px_3px_0px_0px_#283618]'
          }`}>
            <CloverMascot type="kata-baku" size={100} />
          </div>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className={`bg-white p-2 rounded-2xl border-2 flex flex-wrap items-center justify-between gap-3 ${
        isCoastal ? 'border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]' : 'border-[#283618] shadow-[3px_3px_0px_0px_#283618]'
      }`}>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-black uppercase px-2 ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>Mode Kuis:</span>
          <div className={`flex p-1 rounded-xl border ${isCoastal ? 'bg-[#F1F5F9] border-slate-300' : 'bg-[#FAEDCD] border-[#283618]'}`}>
            <button
              onClick={() => {
                setQuizMode('mix');
                setCurrentIndex(0);
                setSelectedOption(null);
                setIsAnswered(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all cursor-pointer ${
                quizMode === 'mix'
                  ? isCoastal
                    ? 'bg-[#3A6B88] text-white border border-slate-700 shadow-[1px_1px_0px_0px_rgba(51,65,85,1)]'
                    : 'bg-[#709752] text-white border border-[#283618] shadow-[1px_1px_0px_0px_#283618]'
                  : isCoastal
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-[#574332] hover:text-[#283618]'
              }`}
            >
              🔀 Acak / Campuran
            </button>
            <button
              onClick={() => {
                setQuizMode('sinonim');
                setCurrentIndex(0);
                setSelectedOption(null);
                setIsAnswered(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all cursor-pointer ${
                quizMode === 'sinonim'
                  ? isCoastal
                    ? 'bg-[#3A6B88] text-white border border-slate-700 shadow-[1px_1px_0px_0px_rgba(51,65,85,1)]'
                    : 'bg-[#709752] text-white border border-[#283618] shadow-[1px_1px_0px_0px_#283618]'
                  : isCoastal
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-[#574332] hover:text-[#283618]'
              }`}
            >
              = Sinonim (Persamaan)
            </button>
            <button
              onClick={() => {
                setQuizMode('antonim');
                setCurrentIndex(0);
                setSelectedOption(null);
                setIsAnswered(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all cursor-pointer ${
                quizMode === 'antonim'
                  ? isCoastal
                    ? 'bg-[#3A6B88] text-white border border-slate-700 shadow-[1px_1px_0px_0px_rgba(51,65,85,1)]'
                    : 'bg-[#709752] text-white border border-[#283618] shadow-[1px_1px_0px_0px_#283618]'
                  : isCoastal
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-[#574332] hover:text-[#283618]'
              }`}
            >
              ≠ Antonim (Lawan Kata)
            </button>
          </div>
        </div>

        {/* Category selector */}
        <div className="flex items-center gap-2 text-xs">
          <span className={`font-bold ${isCoastal ? 'text-slate-600' : 'text-[#574332]'}`}>Kategori:</span>
          <select
            value={selectedCategory}
            onChange={e => {
              setSelectedCategory(e.target.value);
              setCurrentIndex(0);
              setSelectedOption(null);
              setIsAnswered(false);
            }}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold focus:outline-none ${
              isCoastal
                ? 'border-slate-300 bg-white text-slate-800 focus:ring-1 focus:ring-[#3A6B88]'
                : 'border-[#283618] bg-[#FAF6EE] text-[#283618] focus:ring-1 focus:ring-[#709752]'
            }`}
          >
            {categories.map(c => (
              <option key={c} value={c}>
                {c === 'all' ? 'Semua Kategori' : c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Question Card */}
      <div className={`bg-white border-2 rounded-2xl p-6 sm:p-8 space-y-6 ${
        isCoastal ? 'border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]' : 'border-[#283618] shadow-[4px_4px_0px_0px_#283618]'
      }`}>
        <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg border ${
              isCoastal
                ? currentQuestion.questionType === 'sinonim'
                  ? 'bg-[#EBF1F5] text-[#2C4A6F] border-[#CBD5E1]'
                  : 'bg-[#F1F5F9] text-slate-700 border-slate-300'
                : currentQuestion.questionType === 'sinonim'
                  ? 'bg-[#E9EDC9] text-[#3A5A40] border-[#A3B18A]'
                  : 'bg-[#FAEDCD] text-[#BC6C25] border-[#DDA15E]'
            }`}>
              {currentQuestion.questionType === 'sinonim' ? 'Persamaan Kata (Sinonim)' : 'Lawan Kata (Antonim)'}
            </span>
            <span className="text-xs font-bold text-slate-400">
              #{currentIndex + 1}
            </span>
          </div>
          <span className={`text-xs font-bold ${isCoastal ? 'text-slate-600' : 'text-[#574332]'}`}>
            {currentQuestion.targetItem.category} • {currentQuestion.targetItem.partOfSpeech}
          </span>
        </div>

        {/* Big Word Prompt */}
        <div className="text-center py-4 space-y-3">
          <p className={`text-xs sm:text-sm font-black uppercase tracking-wider ${
            isCoastal ? 'text-slate-500' : 'text-[#8C6B4F]'
          }`}>
            {currentQuestion.questionType === 'sinonim' ? 'Cari Persamaan Kata dari:' : 'Cari Lawan Kata dari:'}
          </p>
          <div className={`inline-block border-2 px-8 py-3 rounded-2xl ${
            isCoastal
              ? 'bg-[#F8FAFC] border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
              : 'bg-[#FEFAE0] border-[#283618] shadow-[3px_3px_0px_0px_#283618]'
          }`}>
            <h2 className={`text-3xl sm:text-4xl font-black tracking-tight ${
              isCoastal ? 'text-slate-800' : 'text-[#283618]'
            }`}>
              {currentQuestion.targetItem.word}
            </h2>
          </div>
          <p className="text-xs text-slate-500 italic max-w-md mx-auto">
            "{currentQuestion.targetItem.definition}"
          </p>
        </div>

        {/* 4 Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto">
          {currentQuestion.options.map((option, idx) => {
            const isCorrect = option === currentQuestion.correctAnswer;
            const isChosen = selectedOption === option;

            let btnStyle = isCoastal
              ? 'bg-[#F8FAFC] text-slate-800 border-slate-700 hover:bg-[#EBF1F5] shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
              : 'bg-[#FAF6EE] text-[#283618] border-[#283618] hover:bg-[#E9EDC9] shadow-[3px_3px_0px_0px_#283618]';

            if (isAnswered) {
              if (isCorrect) {
                btnStyle = isCoastal
                  ? 'bg-[#3A6B88] text-white border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
                  : 'bg-[#709752] text-white border-[#283618] shadow-[3px_3px_0px_0px_#283618]';
              } else if (isChosen && !isCorrect) {
                btnStyle = isCoastal
                  ? 'bg-[#E11D48] text-white border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
                  : 'bg-[#E63946] text-white border-[#283618] shadow-[3px_3px_0px_0px_#283618]';
              } else {
                btnStyle = 'bg-slate-100 text-slate-400 border-slate-300 opacity-60';
              }
            }

            const letter = String.fromCharCode(65 + idx);

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(option)}
                className={`py-4 px-5 rounded-2xl text-base sm:text-lg font-black tracking-tight border-2 transition-all cursor-pointer flex items-center justify-between ${btnStyle} ${
                  !isAnswered ? 'active:translate-y-0.5 active:shadow-none' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-white/30 border border-current flex items-center justify-center text-xs font-black font-mono">
                    {letter}
                  </span>
                  <span>{option}</span>
                </div>

                {isAnswered && (
                  <div>
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-white stroke-[2.5]" />
                    ) : isChosen ? (
                      <XCircle className="w-5 h-5 text-white stroke-[2.5]" />
                    ) : null}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback & Explanation */}
        {isAnswered && (
          <div className="space-y-4 pt-4 border-t-2 border-slate-100 animate-fadeIn">
            <div
              className={`p-5 rounded-2xl border-2 ${
                isCoastal
                  ? selectedOption === currentQuestion.correctAnswer
                    ? 'bg-[#EBF1F5] border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
                    : 'bg-[#FFF1F2] border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
                  : selectedOption === currentQuestion.correctAnswer
                    ? 'bg-[#E9EDC9] border-[#283618] shadow-[3px_3px_0px_0px_#283618]'
                    : 'bg-[#FFE5D9] border-[#283618] shadow-[3px_3px_0px_0px_#283618]'
              }`}
            >
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <span className={`text-sm font-black flex items-center gap-1.5 ${
                  isCoastal ? 'text-slate-800' : 'text-[#283618]'
                }`}>
                  {selectedOption === currentQuestion.correctAnswer ? (
                    <>
                      <CheckCircle2 className={`w-4 h-4 ${isCoastal ? 'text-[#3A6B88]' : 'text-[#709752]'}`} />
                      JAWABAN TEPAT! 🎉
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-[#E63946]" />
                      JAWABAN KURANG TEPAT
                    </>
                  )}
                </span>
                <span className={`text-xs font-bold ${isCoastal ? 'text-slate-600' : 'text-[#574332]'}`}>
                  Kaidah: {currentQuestion.questionType === 'sinonim' ? 'Persamaan Makna' : 'Perlawanan Makna'}
                </span>
              </div>

              <div className={`space-y-2.5 text-xs sm:text-sm ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 bg-white/80 p-3.5 rounded-xl border ${
                  isCoastal ? 'border-slate-300' : 'border-[#283618]/20'
                }`}>
                  <div>
                    <span className={`font-bold block mb-1 ${isCoastal ? 'text-[#2C4A6F]' : 'text-[#3A5A40]'}`}>
                      ✓ Daftar Sinonim ({currentQuestion.targetItem.word}):
                    </span>
                    <p className="font-medium text-slate-800">
                      {currentQuestion.targetItem.sinonim.join(', ')}
                    </p>
                  </div>
                  <div>
                    <span className={`font-bold block mb-1 ${isCoastal ? 'text-[#3A6B88]' : 'text-[#BC6C25]'}`}>
                      ≠ Daftar Antonim ({currentQuestion.targetItem.word}):
                    </span>
                    <p className="font-medium text-slate-800">
                      {currentQuestion.targetItem.antonim.join(', ')}
                    </p>
                  </div>
                </div>

                <div className={`bg-white/80 p-3 rounded-xl border space-y-1 ${
                  isCoastal ? 'border-slate-300' : 'border-[#283618]/20'
                }`}>
                  <span className={`font-bold block ${isCoastal ? 'text-slate-600' : 'text-[#574332]'}`}>Contoh Kalimat:</span>
                  <p className="italic text-slate-800 font-serif">
                    "{currentQuestion.targetItem.exampleSentence}"
                  </p>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-end pt-1">
              <button
                onClick={handleNext}
                className={`py-3 px-6 font-black uppercase text-xs sm:text-sm rounded-xl border-2 active:translate-y-0.5 active:shadow-none flex items-center gap-2 cursor-pointer transition-all ${
                  isCoastal
                    ? 'bg-[#3A6B88] hover:bg-[#2C4A6F] text-white border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
                    : 'bg-[#709752] hover:bg-[#588157] text-white border-[#283618] shadow-[3px_3px_0px_0px_#283618]'
                }`}
              >
                <span>Soal Selanjutnya</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Source Reference Footer */}
      <div className={`border-2 rounded-2xl p-4 text-xs flex items-center justify-between flex-wrap gap-2 ${
        isCoastal
          ? 'bg-[#F8FAFC] border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)] text-slate-600'
          : 'bg-[#FAF6EE] border-[#283618] shadow-[3px_3px_0px_0px_#283618] text-[#574332]'
      }`}>
        <div className="flex items-center gap-2 font-bold">
          <BookOpen className={`w-4 h-4 ${isCoastal ? 'text-[#3A6B88]' : 'text-[#709752]'}`} />
          <span>Sumber Rujukan: Kamus Lengkap Sinonim dan Antonim Bahasa Indonesia</span>
        </div>
        <a
          href="https://www.ledsulbar.id/2022/05/kumpulan-kamus-lengkap-sinonim-dan.html#gsc.tab=0"
          target="_blank"
          rel="noopener noreferrer"
          className={`font-black flex items-center gap-1 hover:underline ${
            isCoastal ? 'text-[#2C4A6F]' : 'text-[#709752]'
          }`}
        >
          <span>Buka Tautan Ledsulbar</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
