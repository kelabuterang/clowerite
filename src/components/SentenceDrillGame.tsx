import React, { useState, useMemo } from 'react';
import { Sparkles, CheckCircle2, XCircle, ArrowRight, BookOpen, Lightbulb, RotateCcw, Award, Check, Shuffle, HelpCircle, FileText, Bookmark } from 'lucide-react';
import { SENTENCE_DRILL_LIST } from '../data/sentenceDrillData';
import { CloverMascot } from './CloverMascot';
import { SentenceDrillItem } from '../types';
import { useHabit } from '../context/HabitContext';
import confetti from 'canvas-confetti';

export const SentenceDrillGame: React.FC = () => {
  const { theme } = useHabit();
  const isCoastal = theme === 'coastal';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showVocabHints, setShowVocabHints] = useState(false);
  const [showGrammarModal, setShowGrammarModal] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [isShuffleActive, setIsShuffleActive] = useState(false);

  const filteredList = useMemo(() => {
    let list = selectedLevel === 'All' ? SENTENCE_DRILL_LIST : SENTENCE_DRILL_LIST.filter(item => item.level === selectedLevel);
    return list;
  }, [selectedLevel]);

  const currentItem = filteredList[currentIndex % (filteredList.length || 1)] || SENTENCE_DRILL_LIST[0];

  // Smart Evaluation function
  const evaluationResult = useMemo(() => {
    if (!isSubmitted) return null;

    const normalize = (str: string) =>
      str
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .trim()
        .replace(/\s+/g, ' ');

    const cleanUser = normalize(userInput);
    const targetNorms = [currentItem.targetEnglish, ...currentItem.acceptedVariations].map(normalize);

    const isExactMatch = targetNorms.includes(cleanUser);

    // Partial word overlap metric
    const targetWords = normalize(currentItem.targetEnglish).split(' ');
    const userWords = cleanUser.split(' ');
    let matchedWordsCount = 0;

    userWords.forEach(w => {
      if (targetWords.includes(w)) matchedWordsCount++;
    });

    const matchRatio = targetWords.length > 0 ? matchedWordsCount / targetWords.length : 0;
    const isPassing = isExactMatch || matchRatio >= 0.75;

    return {
      isExactMatch,
      isPassing,
      matchRatio: Math.round(matchRatio * 100),
      missingKeyWords: targetWords.filter(w => !userWords.includes(w) && w.length > 3)
    };
  }, [isSubmitted, userInput, currentItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isSubmitted) return;

    setIsSubmitted(true);
    setTotalAnswered(prev => prev + 1);

    const normalize = (str: string) =>
      str.toLowerCase().replace(/[^\w\s]/g, '').trim().replace(/\s+/g, ' ');
    const cleanUser = normalize(userInput);
    const targetNorms = [currentItem.targetEnglish, ...currentItem.acceptedVariations].map(normalize);
    const isExact = targetNorms.includes(cleanUser);

    const targetWords = normalize(currentItem.targetEnglish).split(' ');
    const userWords = cleanUser.split(' ');
    let matchCount = 0;
    userWords.forEach(w => {
      if (targetWords.includes(w)) matchCount++;
    });
    const ratio = targetWords.length > 0 ? matchCount / targetWords.length : 0;

    if (isExact || ratio >= 0.75) {
      setScore(prev => prev + 1);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#10B981', '#F59E0B', '#3B82F6']
      });
    }
  };

  const handleNext = () => {
    setUserInput('');
    setIsSubmitted(false);
    setShowVocabHints(false);
    if (isShuffleActive && filteredList.length > 1) {
      let nextIdx = Math.floor(Math.random() * filteredList.length);
      if (nextIdx === (currentIndex % filteredList.length)) {
        nextIdx = (nextIdx + 1) % filteredList.length;
      }
      setCurrentIndex(nextIdx);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setUserInput('');
    setIsSubmitted(false);
    setShowVocabHints(false);
    setScore(0);
    setTotalAnswered(0);
    setCurrentIndex(0);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-4 sm:py-6 space-y-4 sm:space-y-6">
      {/* Header Bento Card */}
      <div className={`${isCoastal ? 'bg-[#EBF1F5] border-[#334155] shadow-[4px_4px_0px_0px_#334155]' : 'bg-[#ECFDF5] border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319]'} border-2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6`}>
        <div className="space-y-2 text-left w-full flex-1 min-w-0">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border-2 ${isCoastal ? 'border-[#334155] shadow-[2px_2px_0px_0px_#334155] text-[#3A6B88]' : 'border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] text-[#047857]'} text-[10px] sm:text-xs font-black tracking-wider uppercase`}>
            <Sparkles className={`w-3.5 h-3.5 ${isCoastal ? 'fill-[#4A7C9B] text-[#4A7C9B]' : 'fill-[#10B981] text-[#10B981]'} shrink-0`} />
            <span>LATIHAN PENULISAN KALIMAT BAHASA INGGRIS</span>
          </div>
          <h1 className={`text-xl sm:text-2xl md:text-3xl font-black ${isCoastal ? 'text-[#334155]' : 'text-[#2D2319]'} tracking-tight break-words`}>
            Latihan Buat Kalimat Bahasa Inggris
          </h1>
          <p className={`text-xs sm:text-sm ${isCoastal ? 'text-[#475569]' : 'text-[#574332]'} font-semibold max-w-xl leading-relaxed break-words`}>
            Ketik terjemahan kalimat bahasa Indonesia ke bahasa Inggris. Kalimat dikutip langsung dari tema artikel ilmiah & wacana habit, dilengkapi bank kosakata, koreksi instan, dan modul grammar SMA.
          </p>

          {/* Level Filter & Stats */}
          <div className="flex items-center gap-2 pt-2 flex-wrap">
            <div className={`flex items-center bg-white p-1 rounded-xl border-2 ${isCoastal ? 'border-[#334155] shadow-[2px_2px_0px_0px_#334155]' : 'border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'} text-[11px] sm:text-xs font-black uppercase flex-wrap gap-0.5`}>
              {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map(lvl => (
                <button
                  key={lvl}
                  onClick={() => {
                    setSelectedLevel(lvl);
                    setCurrentIndex(0);
                    setUserInput('');
                    setIsSubmitted(false);
                  }}
                  className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    selectedLevel === lvl
                      ? isCoastal ? 'bg-[#3A6B88] text-white font-black shadow-xs' : 'bg-[#10B981] text-white font-black shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsShuffleActive(!isShuffleActive)}
              className={`px-3 py-1.5 rounded-xl border-2 ${isCoastal ? 'border-[#334155] shadow-[2px_2px_0px_0px_#334155]' : 'border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'} text-xs font-black cursor-pointer flex items-center gap-1.5 transition-all ${
                isShuffleActive
                  ? isCoastal ? 'bg-[#3A6B88] text-white' : 'bg-[#10B981] text-white'
                  : isCoastal ? 'bg-white text-[#334155] hover:bg-slate-50' : 'bg-white text-[#2D2319] hover:bg-stone-50'
              }`}
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>{isShuffleActive ? 'Mode Acak: ON' : 'Mode Acak: OFF'}</span>
            </button>

            <div className={`bg-white px-3 py-1.5 border-2 ${isCoastal ? 'border-[#334155] shadow-[2px_2px_0px_0px_#334155] text-[#334155]' : 'border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] text-[#2D2319]'} rounded-xl flex items-center gap-1.5 text-xs font-black`}>
              <Award className={`w-4 h-4 ${isCoastal ? 'text-[#4A7C9B]' : 'text-amber-600'}`} />
              <span>Skor: {score} / {totalAnswered}</span>
            </div>

            <button
              onClick={() => setShowGrammarModal(true)}
              className={`px-3 py-1.5 ${isCoastal ? 'bg-[#FDFBF7] hover:bg-[#F3EFE6] border-[#334155] shadow-[2px_2px_0px_0px_#334155] text-[#334155]' : 'bg-[#FEF3C7] hover:bg-[#FDE68A] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] text-[#2D2319]'} rounded-xl border-2 text-xs font-black cursor-pointer flex items-center gap-1.5`}
            >
              <FileText className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#4A7C9B]' : 'text-amber-700'}`} /> Modul Grammar SMA
            </button>
          </div>
        </div>

        <div className="shrink-0 self-center">
          <div className={`relative p-2 bg-white rounded-2xl border-2 ${isCoastal ? 'border-[#334155] shadow-[3px_3px_0px_0px_#334155]' : 'border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'}`}>
            <CloverMascot type="sentence" size={90} />
          </div>
        </div>
      </div>

      {/* Main Sentence Drill Box - Expanded & Mobile Optimized */}
      <div className={`w-full bg-white border-2 ${isCoastal ? 'border-[#334155] shadow-[4px_4px_0px_0px_#334155]' : 'border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319]'} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6`}>
        {/* Top Info Bar */}
        <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2 flex-wrap min-w-0">
            <span className={`text-[11px] sm:text-xs font-black uppercase ${isCoastal ? 'text-[#3A6B88] bg-[#EBF1F5] border-[#4A7C9B]/40' : 'text-[#047857] bg-[#ECFDF5] border-[#10B981]/40'} px-2.5 py-1 rounded-lg border shrink-0`}>
              Kalimat #{((currentIndex % filteredList.length) || 0) + 1} dari {filteredList.length} • {currentItem.level}
            </span>
            <span className={`text-[11px] sm:text-xs font-bold ${isCoastal ? 'text-[#475569]' : 'text-slate-600'} truncate`}>
              Focus: {currentItem.grammarTopic}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowVocabHints(!showVocabHints)}
              className={`flex items-center gap-1.5 px-3 py-1 ${isCoastal ? 'bg-[#FDFBF7] hover:bg-[#F3EFE6] text-[#334155] border-[#334155]/30' : 'bg-[#FEF3C7] hover:bg-[#FDE68A] text-[#78350F] border-[#B45309]/30'} text-xs font-black rounded-lg border transition-all cursor-pointer shadow-xs`}
            >
              <Lightbulb className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#4A7C9B]' : 'text-amber-600'}`} />
              {showVocabHints ? 'Sembunyikan Vocab' : 'Bantuan Vocab'}
            </button>
          </div>
        </div>

        {/* Source Citation Badge */}
        {currentItem.sourceArticleTitle && (
          <div className={`flex items-center gap-1.5 text-[11px] font-bold ${isCoastal ? 'text-[#3A6B88] bg-[#EBF1F5] border-[#93C5FD]' : 'text-[#047857] bg-emerald-50/80 border-emerald-200'} px-3 py-2 rounded-xl w-full min-w-0 break-words border`}>
            <Bookmark className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#4A7C9B]' : 'text-emerald-600'} shrink-0`} />
            <span className="break-words">Dikutip dari: <strong>{currentItem.sourceArticleTitle}</strong></span>
          </div>
        )}

        {/* Indonesian Prompt Sentence - Spacious Full-Width Background Box */}
        <div className={`w-full ${isCoastal ? 'bg-[#FDFBF7] border-[#334155] shadow-[3px_3px_0px_0px_#334155]' : 'bg-[#FAF6EE] border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'} p-4 sm:p-6 md:p-7 rounded-2xl border-2 space-y-2 min-w-0`}>
          <div className="flex items-center justify-between">
            <span className={`text-[10px] sm:text-xs font-black uppercase ${isCoastal ? 'text-[#475569]' : 'text-[#8C6B4F]'} tracking-wider block`}>
              🇮🇩 Kalimat Bahasa Indonesia:
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 bg-white/80 rounded-md border ${isCoastal ? 'border-[#334155]/20 text-[#334155]' : 'border-[#2D2319]/20 text-[#574332]'}`}>
              Tingkat: {currentItem.level}
            </span>
          </div>
          <p className={`text-base sm:text-lg md:text-xl font-black ${isCoastal ? 'text-[#334155]' : 'text-[#2D2319]'} leading-relaxed break-words [overflow-wrap:anywhere]`}>
            "{currentItem.indonesian}"
          </p>
        </div>

        {/* Vocab Hints Box (Collapsible / Toggleable) */}
        {showVocabHints && (
          <div className={`w-full ${isCoastal ? 'bg-[#F8FAFC] border-[#4A7C9B]/40' : 'bg-[#FFFBEB] border-[#D97706]/40'} p-4 sm:p-5 rounded-2xl border-2 space-y-2.5 animate-fadeIn min-w-0`}>
            <div className={`flex items-center gap-2 text-xs font-black ${isCoastal ? 'text-[#334155]' : 'text-[#92400E]'} uppercase`}>
              <Lightbulb className={`w-4 h-4 ${isCoastal ? 'text-[#4A7C9B]' : 'text-amber-600'} shrink-0`} />
              <span>Daftar Kosakata & Frasa Kunci untuk Membantu:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {currentItem.vocabHints.map((vh, i) => (
                <div key={i} className={`bg-white p-2.5 sm:p-3 rounded-xl border ${isCoastal ? 'border-[#4A7C9B]/30' : 'border-[#D97706]/30'} text-xs flex justify-between items-center gap-2 min-w-0`}>
                  <span className={`font-bold ${isCoastal ? 'text-[#334155]' : 'text-slate-700'} truncate`}>{vh.indonesian}</span>
                  <span className={`font-mono font-black ${isCoastal ? 'text-[#3A6B88] bg-[#EBF1F5]' : 'text-[#047857] bg-emerald-50'} px-2 py-0.5 rounded shrink-0`}>
                    {vh.english}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* User Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4 w-full min-w-0">
          <div>
            <label className={`block text-xs font-black uppercase ${isCoastal ? 'text-[#334155]' : 'text-[#2D2319]'} mb-1.5`}>
              🇬🇧 Ketik Kalimat dalam Bahasa Inggris:
            </label>
            <textarea
              rows={3}
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              disabled={isSubmitted}
              placeholder="Type your English translation here..."
              className={`w-full p-3.5 sm:p-4 rounded-2xl border-2 ${isCoastal ? 'border-[#334155] focus:ring-[#3A6B88] text-[#334155]' : 'border-[#2D2319] focus:ring-[#10B981] text-[#2D2319]'} focus:outline-none focus:ring-2 font-sans text-sm sm:text-base bg-[#FFFDF9] resize-none shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.05)] leading-relaxed break-words`}
            />
          </div>

          {!isSubmitted ? (
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!userInput.trim()}
                className={`w-full sm:w-auto py-3 px-8 ${isCoastal ? 'bg-[#3A6B88] hover:bg-[#2C526A] border-[#334155] shadow-[3px_3px_0px_0px_#334155]' : 'bg-[#10B981] hover:bg-[#059669] border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'} disabled:bg-slate-300 disabled:text-slate-500 text-white font-black uppercase text-xs sm:text-sm rounded-xl border-2 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 cursor-pointer transition-all`}
              >
                <span>Periksa & Koreksi Kalimat</span>
                <Check className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          ) : null}
        </form>

        {/* Feedback & Correction Section */}
        {isSubmitted && evaluationResult && (
          <div className="w-full space-y-4 pt-4 border-t-2 border-slate-100 animate-fadeIn min-w-0">
            <div
              className={`p-4 sm:p-6 rounded-2xl border-2 ${isCoastal ? 'border-[#334155] shadow-[4px_4px_0px_0px_#334155]' : 'border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319]'} space-y-4 w-full min-w-0 ${
                evaluationResult.isPassing
                  ? isCoastal ? 'bg-[#EBF1F5]' : 'bg-[#ECFDF5]'
                  : 'bg-[#FFF1F2]'
              }`}
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className={`text-sm sm:text-base font-black flex items-center gap-2 break-words ${
                  evaluationResult.isPassing
                    ? isCoastal ? 'text-[#3A6B88]' : 'text-[#047857]'
                    : 'text-[#BE123C]'
                }`}>
                  {evaluationResult.isExactMatch ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 shrink-0" /> LUAR BIASA! TERJEMAHAN PERSIS TEPAT 🎉
                    </>
                  ) : evaluationResult.isPassing ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 shrink-0" /> BAGUS! STRUKTUR SUDAH BENAR ({evaluationResult.matchRatio}%)
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 shrink-0" /> PERLU PENYESUAIAN STRUKTUR GRAMMAR
                    </>
                  )}
                </span>
              </div>

              {/* Target Correct Sentence Reference */}
              <div className={`space-y-2.5 bg-white/90 p-4 rounded-xl border ${isCoastal ? 'border-[#334155]/20' : 'border-[#2D2319]/20'} text-xs sm:text-sm w-full min-w-0`}>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-slate-500 block">
                    Target Kalimat Bahasa Inggris:
                  </span>
                  <p className={`text-sm sm:text-base font-black ${isCoastal ? 'text-[#3A6B88]' : 'text-[#047857]'} break-words [overflow-wrap:anywhere] leading-relaxed`}>
                    {currentItem.targetEnglish}
                  </p>
                </div>

                {currentItem.acceptedVariations.length > 0 && (
                  <div className="pt-2 border-t border-slate-200 space-y-1">
                    <span className="text-[10px] font-black uppercase text-slate-500 block">
                      Variasi Lain yang Juga Diterima:
                    </span>
                    <ul className="list-disc list-inside text-xs font-semibold text-slate-700 space-y-1 mt-0.5">
                      {currentItem.acceptedVariations.map((v, idx) => (
                        <li key={idx} className="break-words [overflow-wrap:anywhere]">
                          "{v}"
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Grammar Rule & Pedagogical Feedback */}
              <div className={`${isCoastal ? 'bg-[#FDFBF7] border-[#334155]/20' : 'bg-[#FAF6EE] border-[#2D2319]/20'} p-4 rounded-xl border space-y-1.5 text-xs w-full min-w-0`}>
                <div className={`flex items-center gap-1.5 font-black uppercase ${isCoastal ? 'text-[#334155]' : 'text-[#92400E]'}`}>
                  <BookOpen className={`w-4 h-4 ${isCoastal ? 'text-[#4A7C9B]' : 'text-amber-700'} shrink-0`} />
                  <span>Kaidah Grammar: {currentItem.grammarTopic}</span>
                </div>
                <p className={`font-medium ${isCoastal ? 'text-[#475569]' : 'text-[#4A3B2C]'} leading-relaxed break-words`}>
                  {currentItem.grammarExplanation}
                </p>
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-between items-center pt-2 flex-wrap gap-2">
              <button
                type="button"
                onClick={handleReset}
                className={`py-2.5 px-4 bg-white hover:bg-stone-50 ${isCoastal ? 'text-[#334155] border-[#334155] shadow-[2px_2px_0px_0px_#334155]' : 'text-[#574332] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'} font-black uppercase text-xs rounded-xl border-2 cursor-pointer flex items-center gap-1.5`}
              >
                <RotateCcw className="w-3.5 h-3.5" /> Ulangi dari Awal
              </button>

              <button
                onClick={handleNext}
                className={`py-3 px-7 ${isCoastal ? 'bg-[#4A7C9B] hover:bg-[#3A6B88] text-white border-[#334155] shadow-[3px_3px_0px_0px_#334155]' : 'bg-[#F59E0B] hover:bg-[#D97706] text-[#2D2319] border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'} font-black uppercase text-sm rounded-xl border-2 active:translate-y-0.5 active:shadow-none flex items-center gap-2 cursor-pointer transition-all`}
              >
                <span>Kalimat Selanjutnya</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* SMA Grammar Module Reference Modal */}
      {showGrammarModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className={`bg-white border-2 ${isCoastal ? 'border-[#334155] shadow-[6px_6px_0px_0px_#334155]' : 'border-[#2D2319] shadow-[6px_6px_0px_0px_#2D2319]'} rounded-2xl max-w-2xl w-full p-6 max-h-[85vh] overflow-y-auto space-y-4`}>
            <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3">
              <h3 className={`text-lg font-black ${isCoastal ? 'text-[#334155]' : 'text-[#2D2319]'} flex items-center gap-2`}>
                <BookOpen className={`w-5 h-5 ${isCoastal ? 'text-[#3A6B88]' : 'text-[#047857]'}`} /> Panduan Ringkas Modul Grammar SMA
              </h3>
              <button
                onClick={() => setShowGrammarModal(false)}
                className="p-1 text-slate-400 hover:text-slate-900 font-black cursor-pointer text-lg"
              >
                ✕
              </button>
            </div>

            <div className={`space-y-4 text-xs ${isCoastal ? 'text-[#334155]' : 'text-[#2D2319]'}`}>
              <div className={`${isCoastal ? 'bg-[#FDFBF7] border-[#334155]/20' : 'bg-[#FAF6EE] border-[#2D2319]/20'} p-3.5 rounded-xl border space-y-1`}>
                <h4 className={`font-black ${isCoastal ? 'text-[#3A6B88]' : 'text-[#047857]'}`}>1. Tenses Dasar (Present, Past, Perfect)</h4>
                <p className="font-medium text-slate-700">
                  • <strong>Simple Present:</strong> S + V1/V-s (untuk fakta umum, temuan riset, kebiasaan).<br />
                  • <strong>Present Perfect:</strong> S + have/has + V3 (kejadian masa lalu yang hasilnya masih relevan: "Scientists have discovered...").
                </p>
              </div>

              <div className={`${isCoastal ? 'bg-[#FDFBF7] border-[#334155]/20' : 'bg-[#FAF6EE] border-[#2D2319]/20'} p-3.5 rounded-xl border space-y-1`}>
                <h4 className={`font-black ${isCoastal ? 'text-[#3A6B88]' : 'text-[#047857]'}`}>2. Conditional Sentences (Pengandaian)</h4>
                <p className="font-medium text-slate-700">
                  • <strong>Type 1:</strong> If + S + V1, S + will + V1 (kemungkinan nyata di masa depan: "If temperatures rise, heatwaves will become...").<br />
                  • <strong>Type 2:</strong> If + S + V2, S + would + V1 (pengandaian tidak nyata di masa sekarang).
                </p>
              </div>

              <div className={`${isCoastal ? 'bg-[#FDFBF7] border-[#334155]/20' : 'bg-[#FAF6EE] border-[#2D2319]/20'} p-3.5 rounded-xl border space-y-1`}>
                <h4 className={`font-black ${isCoastal ? 'text-[#3A6B88]' : 'text-[#047857]'}`}>3. Passive Voice & Gerunds</h4>
                <p className="font-medium text-slate-700">
                  • <strong>Passive:</strong> S + be (is/are/was/were) + V3 (fokus pada objek/korban/hasil buatan: "The sponge was made from...").<br />
                  • <strong>Gerund Subject:</strong> V-ing sebagai subjek tunggal ("Breathing through the nose lowers blood pressure").
                </p>
              </div>

              <div className={`${isCoastal ? 'bg-[#FDFBF7] border-[#334155]/20' : 'bg-[#FAF6EE] border-[#2D2319]/20'} p-3.5 rounded-xl border space-y-1`}>
                <h4 className={`font-black ${isCoastal ? 'text-[#3A6B88]' : 'text-[#047857]'}`}>4. Relative Clauses & Conjunctions</h4>
                <p className="font-medium text-slate-700">
                  • <strong>Who / Which / That:</strong> Klausa penjelas subjek ("Teens who limit social media...").<br />
                  • <strong>Although / Even though:</strong> Menyatakan kontras ("Although plastics decompose slowly...").<br />
                  • <strong>So that / In order that:</strong> Menyatakan tujuan ("...so that the brain can clear toxins").
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center pt-3 border-t-2 border-slate-100">
              <a
                href="https://aguswuryanto.wordpress.com/wp-content/uploads/2010/09/english-modul-for-sma.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-black ${isCoastal ? 'text-[#3A6B88]' : 'text-[#047857]'} hover:underline`}
              >
                Unduh PDF Modul Lengkap SMA ↗
              </a>
              <button
                onClick={() => setShowGrammarModal(false)}
                className={`py-2.5 px-6 ${isCoastal ? 'bg-[#3A6B88] hover:bg-[#2C526A] border-[#334155] shadow-[2px_2px_0px_0px_#334155]' : 'bg-[#10B981] hover:bg-[#059669] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'} text-white font-black uppercase text-xs rounded-xl border-2 cursor-pointer`}
              >
                Tutup Panduan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
