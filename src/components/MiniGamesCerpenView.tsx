import React, { useState, useEffect } from 'react';
import { Gamepad2, BookOpen, Clock, Check, ArrowRight, ArrowLeft, Sparkles, CheckCircle2, XCircle, Award, Volume2, Globe } from 'lucide-react';
import { CERPEN_COLLECTION } from '../data/cerpenData';
import { CerpenItem } from '../types';
import { useHabit } from '../context/HabitContext';

export const MiniGamesCerpenView: React.FC = () => {
  const { recordSession } = useHabit();
  const [activeLang, setActiveLang] = useState<'id' | 'en'>('id');
  const [selectedCerpen, setSelectedCerpen] = useState<CerpenItem | null>(null);

  // States
  const [mode, setMode] = useState<'browse' | 'reading' | 'quiz' | 'result'>('browse');
  const [readingSeconds, setReadingSeconds] = useState(0);
  const [isReadingActive, setIsReadingActive] = useState(false);
  const [quizSeconds, setQuizSeconds] = useState(0);

  // Quiz Answers
  const [answers, setAnswers] = useState<{ [qId: string]: number | null }>({});

  const filteredCerpen = CERPEN_COLLECTION.filter(c => c.language === activeLang);

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
    const accuracy = Math.round((correctCount / totalQuestions) * 100);
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
      habitId: 'cerpen',
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
        <div className="bg-teal-300 text-slate-950 rounded-2xl p-6 sm:p-8 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-900 text-xs font-black tracking-widest uppercase">
              <Gamepad2 className="w-3.5 h-3.5 text-teal-800 stroke-[2.5]" />
              MINI GAMES LITERASI
            </div>
            <h1 className="text-2xl sm:text-3xl font-black leading-snug uppercase tracking-tight text-slate-900">
              Cerpen Pilihan & Quiz 5 Soal
            </h1>
            <p className="text-xs sm:text-sm text-slate-800 font-bold leading-relaxed">
              Nikmati teks sastra pendek dan uji kemampuan menganalisis Ide Pokok, Sinonim Kata, Makna Kosakata, Inferensi, dan Tema Cerita.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-center shrink-0">
            <span className="text-[10px] font-black uppercase text-slate-500 block">Sumber Koleksi</span>
            <span className="font-black text-sm text-slate-900 uppercase">Baca Petra & Reedsy Stories</span>
          </div>
        </div>

        {/* Language Tabs */}
        <div className="flex items-center justify-center p-1.5 bg-amber-200 rounded-xl max-w-xs mx-auto border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <button
            onClick={() => setActiveLang('id')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-black uppercase transition-all cursor-pointer ${
              activeLang === 'id'
                ? 'bg-white text-slate-900 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                : 'text-slate-800 hover:text-slate-950'
            }`}
          >
            🇮🇩 Cerpen ID
          </button>

          <button
            onClick={() => setActiveLang('en')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-black uppercase transition-all cursor-pointer ${
              activeLang === 'en'
                ? 'bg-amber-400 text-slate-950 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                : 'text-slate-800 hover:text-slate-950'
            }`}
          >
            🇬🇧 English Stories
          </button>
        </div>

        {/* Cerpen Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCerpen.map(c => (
            <div
              key={c.id}
              onClick={() => handleSelectCerpen(c)}
              className="bg-white rounded-2xl p-6 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between group space-y-4 active:translate-y-0.5"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md bg-teal-100 text-teal-950 border border-slate-900">
                    {c.source}
                  </span>
                  <span className="text-[10px] font-black uppercase text-slate-600 font-mono">
                    {c.wordCount} Kata
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                  {c.title}
                </h3>

                <p className="text-xs text-slate-600 font-medium line-clamp-2">
                  {c.synopsis}
                </p>
              </div>

              <div className="pt-3 border-t-2 border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-600 uppercase text-[11px]">5 Soal Mini Game</span>
                <span className="text-slate-900 font-black uppercase group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Mulai Membaca <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // STEP 2: READING VIEW (CLEAN TEXT ONLY)
  if (mode === 'reading' && selectedCerpen) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-5">
        {/* Sticky Header with Timer */}
        <div className="sticky top-20 z-30 bg-white p-4 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setIsReadingActive(false);
                setMode('browse');
              }}
              className="text-xs font-black uppercase text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer active:translate-y-0.5"
            >
              ← Pilih Cerpen Lain
            </button>

            <div className="flex items-center gap-2 bg-amber-100 border-2 border-slate-900 px-3.5 py-1.5 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Clock className="w-4 h-4 text-amber-900 stroke-[2.5] animate-spin" />
              <span className="font-mono font-black text-base text-slate-900">
                {formatTime(readingSeconds)}
              </span>
              <span className="text-[10px] uppercase font-black text-amber-900">
                Membaca
              </span>
            </div>
          </div>

          <button
            onClick={handleFinishReading}
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 px-6 py-2 rounded-xl text-xs sm:text-sm font-black uppercase border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 cursor-pointer active:translate-y-0.5"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            Selesai Membaca & Mulai Quiz (5 Soal)
          </button>
        </div>

        {/* Clean Story Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-6">
          <div className="space-y-2 pb-4 border-b-2 border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase text-teal-950 bg-teal-200 px-3 py-1 rounded-md border border-slate-900">
                Teks Bersih Sastra ({selectedCerpen.source})
              </span>
              <span className="text-xs text-slate-600 font-bold">
                {selectedCerpen.author} • {selectedCerpen.wordCount} Kata
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {selectedCerpen.title}
            </h1>
          </div>

          {/* Literary Narrative Content */}
          <div className="space-y-5 text-slate-800 text-lg sm:text-xl font-normal leading-relaxed font-sans">
            {selectedCerpen.content.map((paragraph, idx) => (
              <p key={idx} className="indent-6 sm:indent-8">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="pt-6 border-t-2 border-slate-100 flex items-center justify-between gap-4 flex-wrap">
            <button
              onClick={() => {
                setIsReadingActive(false);
                setMode('browse');
              }}
              className="bg-white hover:bg-slate-100 text-slate-900 border-2 border-slate-900 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer active:translate-y-0.5"
            >
              Kembali
            </button>

            <button
              onClick={handleFinishReading}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 cursor-pointer active:translate-y-0.5"
            >
              Mulai Quiz Mini Games (5 Soal)
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // STEP 3: 5-QUESTION MULTIPLE CHOICE QUIZ (Ide Pokok, Sinonim, Arti Vocab, Inferensi, Tema)
  if (mode === 'quiz' && selectedCerpen) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        <div className="bg-white rounded-2xl p-6 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="bg-teal-200 text-teal-950 font-black uppercase text-xs px-3 py-1 rounded-md border border-slate-900">
              Mini Game Quiz: 5 Soal Pemahaman Cerpen
            </span>
            <span className="font-mono text-xs font-black text-slate-700 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" /> Waktu Quiz: {formatTime(quizSeconds)}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            {selectedCerpen.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Soal mencakup: Ide Pokok (Main Idea), Sinonim Kata, Arti Kosakata, Inferensi Tokoh/Plot, dan Amanat/Tema.
          </p>
        </div>

        {/* 5 Questions */}
        <div className="space-y-4">
          {selectedCerpen.quiz.map((q, idx) => {
            const badgeLabel =
              q.type === 'main_idea'
                ? 'Ide Pokok / Main Idea'
                : q.type === 'synonym'
                ? 'Sinonim / Synonym'
                : q.type === 'vocab'
                ? 'Arti Kosakata / Vocab Meaning'
                : q.type === 'inference'
                ? 'Inferensi / Karakter'
                : 'Tema / Amanat Cerita';

            return (
              <div key={q.id} className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-mono font-black text-teal-950 text-sm bg-teal-200 border border-slate-900 w-7 h-7 rounded-md flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded border border-slate-900 inline-block mb-1.5">
                      {badgeLabel}
                    </span>
                    <p className="text-sm sm:text-base font-black text-slate-900">
                      {q.question}
                    </p>
                  </div>
                </div>

                {/* Options */}
                <div className="pl-10 space-y-2 pt-1">
                  {q.options.map((opt, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => setAnswers(prev => ({ ...prev, [q.id]: optIdx }))}
                      className={`w-full text-left p-3 rounded-xl border-2 border-slate-900 text-xs sm:text-sm font-bold transition-all flex items-center gap-3 cursor-pointer active:translate-y-0.5 ${
                        answers[q.id] === optIdx
                          ? 'bg-amber-300 text-slate-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-black'
                          : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                      }`}
                    >
                      <span className="w-6 h-6 rounded-md bg-white border border-slate-900 flex items-center justify-center font-black text-xs shrink-0 text-slate-900">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            onClick={handleSubmitQuiz}
            className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-4 px-6 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-base uppercase transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5"
          >
            Kirim Jawaban & Lihat Hasil
            <Sparkles className="w-5 h-5 fill-slate-950" />
          </button>
        </div>
      </div>
    );
  }

  // STEP 4: RESULTS & DETAILED ANSWER KEYS (Jawaban yang Benar)
  const result = evaluateQuiz();

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="bg-teal-300 text-slate-950 rounded-2xl p-6 sm:p-8 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-900 mx-auto flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <Award className="w-9 h-9 text-slate-900" />
        </div>

        <div>
          <span className="text-xs font-black uppercase tracking-wider bg-white px-3 py-1 rounded-md border border-slate-900">
            Hasil Mini Game Cerpen
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-2 uppercase tracking-tight">
            Selesai Menganalisis Cerita!
          </h2>
          <p className="text-xs sm:text-sm font-bold text-slate-800">
            {selectedCerpen?.title}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-slate-900">
          <div className="bg-white rounded-xl p-3 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[10px] font-black uppercase text-slate-500 block">Akurasi Soal</span>
            <span className="text-2xl font-black font-mono text-teal-900">{result.accuracy}%</span>
            <span className="text-[10px] font-bold text-slate-600 block">{result.correctCount}/5 Benar</span>
          </div>

          <div className="bg-white rounded-xl p-3 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[10px] font-black uppercase text-slate-500 block">Kecepatan (WPM)</span>
            <span className="text-2xl font-black font-mono text-amber-900">{result.wpm}</span>
            <span className="text-[10px] font-bold text-slate-600 block">Kata / Menit</span>
          </div>

          <div className="bg-white rounded-xl p-3 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[10px] font-black uppercase text-slate-500 block">Skor KEM</span>
            <span className="text-2xl font-black font-mono text-blue-900">{result.kem}</span>
            <span className="text-[10px] font-bold text-slate-600 block">Kec. Efektif</span>
          </div>

          <div className="bg-white rounded-xl p-3 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[10px] font-black uppercase text-slate-500 block">Waktu Baca</span>
            <span className="text-2xl font-black font-mono text-purple-900">{formatTime(readingSeconds)}</span>
            <span className="text-[10px] font-bold text-slate-600 block">Durasi</span>
          </div>
        </div>
      </div>

      {/* ANSWER KEYS & EXPLANATIONS */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-slate-900 px-1 uppercase tracking-tight">
          Kunci Jawaban & Penjelasan Lengkap:
        </h3>

        <div className="space-y-3">
          {selectedCerpen?.quiz.map((q, idx) => {
            const userChoice = answers[q.id];
            const isCorrect = userChoice === q.correctIndex;

            return (
              <div key={q.id} className="bg-white rounded-2xl p-5 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5">
                    <span className="font-black text-xs bg-teal-200 text-teal-950 border border-slate-900 w-6 h-6 rounded-md flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-900 inline-block mb-1">
                        {q.type.toUpperCase()}
                      </span>
                      <p className="text-sm font-black text-slate-900">{q.question}</p>
                    </div>
                  </div>
                  {isCorrect ? (
                    <span className="text-xs font-black text-emerald-950 bg-emerald-300 border border-slate-900 px-2.5 py-0.5 rounded-md flex items-center gap-1 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Benar
                    </span>
                  ) : (
                    <span className="text-xs font-black text-rose-950 bg-rose-300 border border-slate-900 px-2.5 py-0.5 rounded-md flex items-center gap-1 shrink-0">
                      <XCircle className="w-3.5 h-3.5" /> Salah
                    </span>
                  )}
                </div>

                <div className="text-xs space-y-1.5 pl-8 font-medium">
                  <p className="text-slate-700">
                    Pilihanmu: <strong className="text-slate-900">{userChoice !== null && userChoice !== undefined ? `(${String.fromCharCode(65 + userChoice)}) ${q.options[userChoice]}` : '(Tidak dijawab)'}</strong>
                  </p>
                  <p className="text-emerald-900 font-bold">
                    Kunci Jawaban: ({String.fromCharCode(65 + q.correctIndex)}) {q.options[q.correctIndex]}
                  </p>
                  <p className="text-slate-600 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    💡 <strong>Pembahasan:</strong> {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-4 flex items-center justify-between gap-3">
        <button
          onClick={() => setMode('browse')}
          className="px-5 py-2.5 rounded-xl bg-white border-2 border-slate-900 text-xs sm:text-sm font-black uppercase text-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-50 cursor-pointer active:translate-y-0.5"
        >
          Pilih Cerpen Lainnya
        </button>

        <button
          onClick={() => setMode('browse')}
          className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs sm:text-sm font-black uppercase border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer active:translate-y-0.5"
        >
          Kembali ke Menu Game
        </button>
      </div>
    </div>
  );
};
