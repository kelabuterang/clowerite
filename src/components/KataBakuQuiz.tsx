import React, { useState, useMemo } from 'react';
import { Sparkles, CheckCircle2, XCircle, ArrowRight, RotateCcw, BookOpen, Flame, HelpCircle, Shuffle, Award } from 'lucide-react';
import { KATA_BAKU_LIST } from '../data/kataBakuData';
import { CloverMascot } from './CloverMascot';
import { KataBakuItem } from '../types';
import confetti from 'canvas-confetti';

export const KataBakuQuiz: React.FC = () => {
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
      <div className="bg-[#FEF3C7] border-2 border-[#2D2319] rounded-2xl p-6 shadow-[4px_4px_0px_0px_#2D2319] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-left flex-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] text-xs font-black tracking-wider uppercase text-[#047857]">
            <Sparkles className="w-3.5 h-3.5 fill-[#10B981]" />
            DRILLING TANPA BATAS • KBBI RESMI
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#2D2319] tracking-tight">
            Quiz Kata Baku vs Tidak Baku
          </h1>
          <p className="text-xs sm:text-sm text-[#574332] font-semibold max-w-xl">
            Asah ketelitian ejaan bahasa Indonesia sesuai kaidah baku KBBI & PUEBI. Sumber kurasi terpercaya dari 600+ daftar kata baku Indonesia.
          </p>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 pt-2 flex-wrap">
            <div className="bg-white px-3 py-1 border-2 border-[#2D2319] rounded-xl shadow-[2px_2px_0px_0px_#2D2319] flex items-center gap-1.5 text-xs font-black text-[#2D2319]">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span>Streak: {streak}</span>
              <span className="text-[10px] text-slate-500 font-bold">(Rekor: {highestStreak})</span>
            </div>

            <div className="bg-white px-3 py-1 border-2 border-[#2D2319] rounded-xl shadow-[2px_2px_0px_0px_#2D2319] flex items-center gap-1.5 text-xs font-black text-[#047857]">
              <Award className="w-4 h-4" />
              <span>Skor: {score} / {totalAnswered}</span>
              <span className="font-mono text-amber-700 font-bold">({accuracy}%)</span>
            </div>

            <button
              onClick={handleShuffle}
              className="p-1.5 bg-white hover:bg-amber-100 rounded-xl border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] text-xs font-black text-[#2D2319] cursor-pointer flex items-center gap-1"
              title="Acak Soal"
            >
              <Shuffle className="w-3.5 h-3.5" /> Acak
            </button>

            <button
              onClick={handleResetStats}
              className="p-1.5 bg-white hover:bg-rose-100 rounded-xl border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] text-xs font-black text-[#2D2319] cursor-pointer flex items-center gap-1"
              title="Reset Statistik"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        <div className="shrink-0">
          <div className="relative p-2 bg-white rounded-2xl border-2 border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]">
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
                ? 'bg-[#10B981] text-white border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                : 'bg-white text-[#574332] border-[#2D2319]/30 hover:border-[#2D2319]'
            }`}
          >
            {cat === 'all' ? 'Semua Kategori' : cat}
          </button>
        ))}
      </div>

      {/* Main Question Bento Card */}
      <div className="bg-white border-2 border-[#2D2319] rounded-2xl p-6 sm:p-8 shadow-[4px_4px_0px_0px_#2D2319] space-y-6">
        <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3">
          <span className="text-xs font-black uppercase tracking-wider text-[#047857] bg-[#ECFDF5] px-3 py-1 rounded-lg border border-[#10B981]/40">
            Soal #{currentIndex + 1} • {currentItem.category}
          </span>
          <span className="text-xs font-bold text-slate-500">
            Pilih salah satu bentuk yang tepat
          </span>
        </div>

        <div className="text-center py-4 space-y-2">
          <p className="text-sm font-bold text-[#8C6B4F] uppercase tracking-wide">
            Pertanyaan:
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#2D2319] tracking-tight">
            Mana yang merupakan bentuk bakunya?
          </h2>
        </div>

        {/* 2 Options Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          {options.map((option, idx) => {
            const isCorrect = option === currentItem.baku;
            const isChosen = selectedOption === option;

            let btnStyle = 'bg-[#FAF6EE] text-[#2D2319] border-[#2D2319] hover:bg-[#FDE68A] shadow-[3px_3px_0px_0px_#2D2319]';

            if (isAnswered) {
              if (isCorrect) {
                btnStyle = 'bg-[#10B981] text-white border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]';
              } else if (isChosen && !isCorrect) {
                btnStyle = 'bg-[#F43F5E] text-white border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]';
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
              className={`p-5 rounded-2xl border-2 border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319] ${
                selectedOption === currentItem.baku ? 'bg-[#ECFDF5]' : 'bg-[#FFF1F2]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {selectedOption === currentItem.baku ? (
                  <span className="text-sm font-black text-[#047857] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> JAWABAN TEPAT! 🎉
                  </span>
                ) : (
                  <span className="text-sm font-black text-[#BE123C] flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" /> KURANG TEPAT
                  </span>
                )}
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#2D2319]">
                <div className="flex items-baseline gap-2 flex-wrap font-bold">
                  <span>Baku: <strong className="text-[#047857] text-base underline decoration-2">{currentItem.baku}</strong></span>
                  <span className="text-slate-400">|</span>
                  <span>Tidak Baku: <s className="text-[#BE123C]">{currentItem.tidakBaku}</s></span>
                </div>

                <p className="font-medium text-[#4A3B2C] leading-relaxed bg-white/70 p-3 rounded-xl border border-[#2D2319]/20">
                  {currentItem.explanation}
                </p>

                {currentItem.exampleSentence && (
                  <p className="text-xs italic text-[#6B533E]">
                    Contoh: "{currentItem.exampleSentence}"
                  </p>
                )}
              </div>
            </div>

            {/* Next Question CTA Button */}
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNextQuestion}
                className="py-3 px-6 bg-[#F59E0B] hover:bg-[#D97706] text-[#2D2319] font-black uppercase text-sm rounded-xl border-2 border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319] active:translate-y-0.5 active:shadow-none flex items-center gap-2 cursor-pointer transition-all"
              >
                <span>Soal Selanjutnya</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer Reference Card */}
      <div className="bg-[#FAF6EE] border-2 border-[#2D2319] rounded-2xl p-4 shadow-[3px_3px_0px_0px_#2D2319] text-xs text-[#574332] flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 font-bold">
          <BookOpen className="w-4 h-4 text-[#B45309]" />
          <span>Sumber Rujukan: 600 Daftar Lengkap Kata Baku & Tidak Baku (KBBI & PUEBI)</span>
        </div>
        <a
          href="https://muhyidin.id/600-daftar-lengkap-kata-baku-dan-tidak-baku/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#047857] hover:underline font-black"
        >
          Buka Tautan Sumber ↗
        </a>
      </div>
    </div>
  );
};
