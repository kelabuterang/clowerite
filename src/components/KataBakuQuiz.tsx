import React, { useState, useMemo } from 'react';
import { Sparkles, CheckCircle2, XCircle, ArrowRight, RotateCcw, BookOpen, Flame, HelpCircle, Shuffle, Award } from 'lucide-react';
import { KATA_BAKU_LIST } from '../data/kataBakuData';
import { CloverMascot } from './CloverMascot';
import { KataBakuItem } from '../types';
import { useHabit } from '../context/HabitContext';
import confetti from 'canvas-confetti';

export const KataBakuQuiz: React.FC = () => {
  const { theme } = useHabit();
  const isCoastal = theme === 'coastal';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [shuffledList, setShuffledList] = useState<KataBakuItem[]>(() => {
    return [...KATA_BAKU_LIST].sort(() => Math.random() - 0.5);
  });

  const categories = useMemo(() => {
    const cats = Array.from(new Set(KATA_BAKU_LIST.map(item => item.category)));
    return ['all', ...cats];
  }, []);

  const filteredList = useMemo(() => {
    if (selectedCategory === 'all') return shuffledList;
    return shuffledList.filter(item => item.category === selectedCategory);
  }, [shuffledList, selectedCategory]);

  const currentItem = filteredList[currentIndex % (filteredList.length || 1)] || KATA_BAKU_LIST[0];

  // Randomize placement of Baku vs Tidak Baku (Option A vs Option B)
  const options = useMemo(() => {
    const isBakuFirst = Math.random() > 0.5;
    return isBakuFirst
      ? [currentItem.baku, currentItem.tidakBaku]
      : [currentItem.tidakBaku, currentItem.baku];
  }, [currentItem]);

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);
    setTotalAnswered(prev => prev + 1);

    const isCorrect = option === currentItem.baku;
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
          colors: ['#10B981', '#F59E0B', '#B45309']
        });
      }
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setCurrentIndex(prev => prev + 1);
  };

  const handleShuffle = () => {
    setShuffledList([...KATA_BAKU_LIST].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
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
      <div className={`border-2 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 ${
        isCoastal
          ? 'bg-[#EBF1F5] border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]'
          : 'bg-[#FEF3C7] border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319]'
      }`}>
        <div className="space-y-2 text-left flex-1">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 text-xs font-black tracking-wider uppercase ${
            isCoastal
              ? 'bg-white border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)] text-[#2C4A6F]'
              : 'bg-white border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] text-[#047857]'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#3A6B88] fill-[#3A6B88]' : 'text-[#10B981] fill-[#10B981]'}`} />
            DRILLING TANPA BATAS • KBBI RESMI
          </div>
          <h1 className={`text-2xl sm:text-3xl font-black tracking-tight ${isCoastal ? 'text-slate-800' : 'text-[#2D2319]'}`}>
            Quiz Kata Baku vs Tidak Baku
          </h1>
          <p className={`text-xs sm:text-sm font-semibold max-w-xl ${isCoastal ? 'text-slate-600' : 'text-[#574332]'}`}>
            Asah ketelitian ejaan bahasa Indonesia sesuai kaidah baku KBBI & PUEBI. Sumber kurasi terpercaya dari 600+ daftar kata baku Indonesia.
          </p>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 pt-2 flex-wrap">
            <div className={`bg-white px-3 py-1 border-2 rounded-xl flex items-center gap-1.5 text-xs font-black ${
              isCoastal ? 'border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)] text-slate-800' : 'border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] text-[#2D2319]'
            }`}>
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span>Streak: {streak}</span>
              <span className="text-[10px] text-slate-500 font-bold">(Rekor: {highestStreak})</span>
            </div>

            <div className={`bg-white px-3 py-1 border-2 rounded-xl flex items-center gap-1.5 text-xs font-black ${
              isCoastal ? 'border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)] text-[#2C4A6F]' : 'border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] text-[#047857]'
            }`}>
              <Award className="w-4 h-4" />
              <span>Skor: {score} / {totalAnswered}</span>
              <span className={`font-mono font-bold ${isCoastal ? 'text-blue-700' : 'text-amber-700'}`}>({accuracy}%)</span>
            </div>

            <button
              onClick={handleShuffle}
              className={`p-1.5 bg-white rounded-xl border-2 text-xs font-black cursor-pointer flex items-center gap-1 transition-all ${
                isCoastal
                  ? 'border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)] text-slate-800 hover:bg-slate-100'
                  : 'border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] text-[#2D2319] hover:bg-amber-100'
              }`}
              title="Acak Soal"
            >
              <Shuffle className="w-3.5 h-3.5" /> Acak
            </button>

            <button
              onClick={handleResetStats}
              className={`p-1.5 bg-white rounded-xl border-2 text-xs font-black cursor-pointer flex items-center gap-1 transition-all ${
                isCoastal
                  ? 'border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)] text-slate-800 hover:bg-rose-50'
                  : 'border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] text-[#2D2319] hover:bg-rose-100'
              }`}
              title="Reset Statistik"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        <div className="shrink-0">
          <div className={`relative p-2 bg-white rounded-2xl border-2 ${
            isCoastal ? 'border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]' : 'border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'
          }`}>
            <CloverMascot type="kata-baku" size={100} />
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-black uppercase">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentIndex(0);
              setSelectedOption(null);
              setIsAnswered(false);
            }}
            className={`px-3.5 py-1.5 rounded-xl border-2 shrink-0 transition-all cursor-pointer ${
              selectedCategory === cat
                ? isCoastal
                  ? 'bg-[#3A6B88] text-white border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)]'
                  : 'bg-[#10B981] text-white border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                : isCoastal
                  ? 'bg-white text-slate-700 border-slate-300 hover:border-slate-700'
                  : 'bg-white text-[#574332] border-[#2D2319]/30 hover:border-[#2D2319]'
            }`}
          >
            {cat === 'all' ? 'Semua Kategori' : cat}
          </button>
        ))}
      </div>

      {/* Main Question Bento Card */}
      <div className={`bg-white border-2 rounded-2xl p-6 sm:p-8 space-y-6 ${
        isCoastal ? 'border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]' : 'border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319]'
      }`}>
        <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3">
          <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg border ${
            isCoastal
              ? 'text-[#2C4A6F] bg-[#EBF1F5] border-[#CBD5E1]'
              : 'text-[#047857] bg-[#ECFDF5] border-[#10B981]/40'
          }`}>
            Soal #{currentIndex + 1} • {currentItem.category}
          </span>
          <span className="text-xs font-bold text-slate-500">
            Pilih salah satu bentuk yang tepat
          </span>
        </div>

        <div className="text-center py-4 space-y-2">
          <p className={`text-sm font-bold uppercase tracking-wide ${isCoastal ? 'text-slate-500' : 'text-[#8C6B4F]'}`}>
            Pertanyaan:
          </p>
          <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${isCoastal ? 'text-slate-800' : 'text-[#2D2319]'}`}>
            Mana yang merupakan bentuk bakunya?
          </h2>
        </div>

        {/* 2 Options Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          {options.map((option, idx) => {
            const isCorrect = option === currentItem.baku;
            const isChosen = selectedOption === option;

            let btnStyle = isCoastal
              ? 'bg-[#F8FAFC] text-slate-800 border-slate-700 hover:bg-[#EBF1F5] shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
              : 'bg-[#FAF6EE] text-[#2D2319] border-[#2D2319] hover:bg-[#FDE68A] shadow-[3px_3px_0px_0px_#2D2319]';

            if (isAnswered) {
              if (isCorrect) {
                btnStyle = isCoastal
                  ? 'bg-[#3A6B88] text-white border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
                  : 'bg-[#10B981] text-white border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]';
              } else if (isChosen && !isCorrect) {
                btnStyle = isCoastal
                  ? 'bg-[#E11D48] text-white border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
                  : 'bg-[#F43F5E] text-white border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]';
              } else {
                btnStyle = 'bg-slate-100 text-slate-400 border-slate-300 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(option)}
                className={`py-5 px-6 rounded-2xl text-xl sm:text-2xl font-black tracking-tight border-2 transition-all cursor-pointer flex items-center justify-between ${btnStyle} ${
                  !isAnswered ? 'active:translate-y-0.5 active:shadow-none' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-white/20 border border-current flex items-center justify-center text-sm font-black font-mono">
                    {idx === 0 ? 'A' : 'B'}
                  </span>
                  <span>{option}</span>
                </div>

                {isAnswered && (
                  <div>
                    {isCorrect ? (
                      <CheckCircle2 className="w-6 h-6 text-white stroke-[2.5]" />
                    ) : isChosen ? (
                      <XCircle className="w-6 h-6 text-white stroke-[2.5]" />
                    ) : null}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback & Linguistic Explanation Card */}
        {isAnswered && (
          <div className="space-y-4 pt-4 border-t-2 border-slate-100 animate-fadeIn">
            <div
              className={`p-5 rounded-2xl border-2 ${
                isCoastal
                  ? selectedOption === currentItem.baku
                    ? 'bg-[#EBF1F5] border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
                    : 'bg-[#FFF1F2] border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
                  : selectedOption === currentItem.baku
                    ? 'bg-[#ECFDF5] border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'
                    : 'bg-[#FFF1F2] border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {selectedOption === currentItem.baku ? (
                  <span className={`text-sm font-black flex items-center gap-1.5 ${isCoastal ? 'text-[#2C4A6F]' : 'text-[#047857]'}`}>
                    <CheckCircle2 className="w-4 h-4" /> JAWABAN TEPAT! 🎉
                  </span>
                ) : (
                  <span className="text-sm font-black text-[#BE123C] flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" /> KURANG TEPAT
                  </span>
                )}
              </div>

              <div className={`space-y-2 text-xs sm:text-sm ${isCoastal ? 'text-slate-800' : 'text-[#2D2319]'}`}>
                <div className="flex items-baseline gap-2 flex-wrap font-bold">
                  <span>Baku: <strong className={`text-base underline decoration-2 ${isCoastal ? 'text-[#2C4A6F]' : 'text-[#047857]'}`}>{currentItem.baku}</strong></span>
                  <span className="text-slate-400">|</span>
                  <span>Tidak Baku: <s className="text-[#BE123C]">{currentItem.tidakBaku}</s></span>
                </div>

                <p className={`font-medium leading-relaxed bg-white/70 p-3 rounded-xl border ${
                  isCoastal ? 'text-slate-700 border-slate-300' : 'text-[#4A3B2C] border-[#2D2319]/20'
                }`}>
                  {currentItem.explanation}
                </p>

                {currentItem.exampleSentence && (
                  <p className={`text-xs italic ${isCoastal ? 'text-slate-600' : 'text-[#6B533E]'}`}>
                    Contoh: "{currentItem.exampleSentence}"
                  </p>
                )}
              </div>
            </div>

            {/* Next Question CTA Button */}
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNextQuestion}
                className={`py-3 px-6 font-black uppercase text-sm rounded-xl border-2 active:translate-y-0.5 active:shadow-none flex items-center gap-2 cursor-pointer transition-all ${
                  isCoastal
                    ? 'bg-[#3A6B88] hover:bg-[#2C4A6F] text-white border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
                    : 'bg-[#F59E0B] hover:bg-[#D97706] text-[#2D2319] border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'
                }`}
              >
                <span>Soal Selanjutnya</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer Reference Card */}
      <div className={`border-2 rounded-2xl p-4 text-xs flex items-center justify-between flex-wrap gap-2 ${
        isCoastal
          ? 'bg-[#F8FAFC] border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)] text-slate-600'
          : 'bg-[#FAF6EE] border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319] text-[#574332]'
      }`}>
        <div className="flex items-center gap-2 font-bold">
          <BookOpen className={`w-4 h-4 ${isCoastal ? 'text-[#3A6B88]' : 'text-[#B45309]'}`} />
          <span>Sumber Rujukan: 600 Daftar Lengkap Kata Baku & Tidak Baku (KBBI & PUEBI)</span>
        </div>
        <a
          href="https://muhyidin.id/600-daftar-lengkap-kata-baku-dan-tidak-baku/"
          target="_blank"
          rel="noopener noreferrer"
          className={`font-black hover:underline ${isCoastal ? 'text-[#2C4A6F]' : 'text-[#047857]'}`}
        >
          Buka Tautan Sumber ↗
        </a>
      </div>
    </div>
  );
};
