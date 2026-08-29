import React, { useState } from 'react';
import { Brain, Sparkles, ArrowRight, ChevronRight, Lightbulb, Play } from 'lucide-react';
import { MENTAL_MATH_GUIDES } from '../data/mentalMathData';

interface Props {
  onStartQuiz: () => void;
}

export const MentalMathGuideView: React.FC<Props> = ({ onStartQuiz }) => {
  const [selectedGuideId, setSelectedGuideId] = useState<string>(MENTAL_MATH_GUIDES[0].id);

  // Interactive Live Sandbox State
  const [sandboxNum1, setSandboxNum1] = useState(45);
  const [sandboxSquare, setSandboxSquare] = useState(75);
  const [sandboxPercent, setSandboxPercent] = useState(16);
  const [sandboxOf, setSandboxOf] = useState(50);

  const activeGuide = MENTAL_MATH_GUIDES.find(g => g.id === selectedGuideId) || MENTAL_MATH_GUIDES[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-purple-300 text-slate-950 rounded-2xl p-6 sm:p-8 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-900 text-xs font-black tracking-widest uppercase">
            <Brain className="w-3.5 h-3.5 text-purple-700 stroke-[2.5]" />
            MATERI & TRIK WIKIHOW
          </div>
          <h1 className="text-2xl sm:text-3xl font-black leading-snug uppercase tracking-tight text-slate-900">
            Panduan Lengkap Mental Math
          </h1>
          <p className="text-xs sm:text-sm text-slate-800 font-bold leading-relaxed">
            Rangkuman metode dan trik cepat berhitung di luar kepala (bersumber dari WikiHow: Cara Melakukan Mental Math).
          </p>
        </div>

        <button
          onClick={onStartQuiz}
          className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-6 py-3.5 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xs sm:text-sm uppercase flex items-center gap-2 shrink-0 cursor-pointer active:translate-y-0.5"
        >
          <Play className="w-4 h-4 fill-slate-950" />
          Mulai Latihan Soal
        </button>
      </div>

      {/* 2-Column Layout: Guide Navigation on Left, Detailed Content on Right */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Nav List */}
        <div className="space-y-2">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider px-1">
            Pilih Modul Trik:
          </h3>

          <div className="space-y-2">
            {MENTAL_MATH_GUIDES.map((g, idx) => (
              <button
                key={g.id}
                onClick={() => setSelectedGuideId(g.id)}
                className={`w-full text-left p-3.5 rounded-xl border-2 border-slate-900 transition-all flex items-center justify-between cursor-pointer active:translate-y-0.5 ${
                  selectedGuideId === g.id
                    ? 'bg-amber-300 text-slate-950 font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-white text-slate-800 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="font-mono text-xs w-6 h-6 rounded-md bg-white border border-slate-900 text-slate-900 font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold truncate">
                    {g.title}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-900 shrink-0 stroke-[2.5]" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Detailed Guide Content */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-6">
            {/* Guide Title & Category */}
            <div className="space-y-1.5 pb-4 border-b-2 border-slate-100">
              <span className="text-xs font-black uppercase text-purple-950 bg-purple-200 px-3 py-1 rounded-md border border-slate-900 inline-block">
                {activeGuide.badge}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                {activeGuide.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                {activeGuide.description}
              </p>
            </div>

            {/* Step by step */}
            <div className="space-y-4">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">
                Langkah-Langkah Perhitungan di Kepala:
              </h4>

              <div className="space-y-3">
                {activeGuide.steps.map((step, sIdx) => (
                  <div key={sIdx} className="bg-slate-50 rounded-xl p-4 border-2 border-slate-900 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-slate-900 text-white font-black text-xs flex items-center justify-center shrink-0">
                        {sIdx + 1}
                      </span>
                      <h5 className="font-black text-xs sm:text-sm text-slate-900">
                        {step.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-700 font-medium pl-7">{step.explanation}</p>

                    {step.example && (
                      <div className="mt-2 pl-7 text-xs bg-white p-3 rounded-lg border border-slate-300 space-y-1">
                        <strong className="text-amber-900 font-black block uppercase">{step.example}</strong>
                        <ul className="list-disc list-inside text-slate-700 space-y-0.5 font-mono text-[11px] font-medium">
                          {step.exampleSteps.map((es, esIdx) => (
                            <li key={esIdx}>{es}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Questions */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">
                Contoh Latihan Cepat:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeGuide.practiceQuestions.map((pq, pqIdx) => (
                  <div key={pqIdx} className="bg-amber-100 rounded-xl p-3 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] space-y-1">
                    <div className="font-mono font-black text-slate-900 text-xs sm:text-sm">
                      {pq.question} <span className="text-emerald-800 font-black">= {pq.answer}</span>
                    </div>
                    <p className="text-[11px] text-slate-700 leading-relaxed font-sans font-medium">
                      💡 {pq.tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* LIVE INTERACTIVE SANDBOX CALCULATOR FOR THIS TRICK */}
            <div className="mt-6 pt-5 border-t-2 border-slate-100 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 stroke-[2.5]" />
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">
                  Coba Trik Ini Secara Interaktif!
                </h4>
              </div>

              {/* Interactive Widget 1: Kuadrat Akhiran 5 */}
              {activeGuide.id === 'squaring-ending-in-5' && (
                <div className="bg-purple-100 p-4 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-3">
                  <div className="text-xs font-black uppercase text-purple-950">
                    Hitung Kuadrat Angka Berakhiran 5:
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      step="10"
                      value={sandboxSquare}
                      onChange={e => setSandboxSquare(parseInt(e.target.value) || 5)}
                      className="w-24 px-3 py-2 rounded-xl bg-white border-2 border-slate-900 font-mono font-black text-center"
                    />
                    <span className="font-mono font-black text-lg">²</span>
                    <span className="font-black text-slate-900">=</span>
                    <span className="font-mono font-black text-2xl text-purple-950">
                      {sandboxSquare * sandboxSquare}
                    </span>
                  </div>
                  <p className="text-xs text-purple-900 font-medium">
                    💡 Cara di kepala: Digit depan {Math.floor(sandboxSquare / 10)} × ({Math.floor(sandboxSquare / 10)} + 1) = {Math.floor(sandboxSquare / 10) * (Math.floor(sandboxSquare / 10) + 1)}, lalu tempelkan <strong>25</strong> di belakangnya!
                  </p>
                </div>
              )}

              {/* Interactive Widget 2: Perkalian 11 */}
              {activeGuide.id === 'multiplying-by-11' && (
                <div className="bg-amber-200 p-4 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-3">
                  <div className="text-xs font-black uppercase text-slate-900">
                    Hitung Perkalian 11 Cepat:
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={sandboxNum1}
                      onChange={e => setSandboxNum1(parseInt(e.target.value) || 0)}
                      className="w-24 px-3 py-2 rounded-xl bg-white border-2 border-slate-900 font-mono font-black text-center"
                    />
                    <span className="font-mono font-black">× 11</span>
                    <span className="font-black text-slate-900">=</span>
                    <span className="font-mono font-black text-2xl text-slate-950">
                      {sandboxNum1 * 11}
                    </span>
                  </div>
                  <p className="text-xs text-slate-800 font-medium">
                    💡 Pisahkan digit {String(sandboxNum1)[0]} dan {String(sandboxNum1)[1] || '0'}, sisipkan ({String(sandboxNum1)[0]} + {String(sandboxNum1)[1] || '0'} = {Number(String(sandboxNum1)[0]) + Number(String(sandboxNum1)[1] || 0)}) di tengahnya!
                  </p>
                </div>
              )}

              {/* Interactive Widget 3: Persentase Pembalikan */}
              {activeGuide.id === 'percentage-swap' && (
                <div className="bg-blue-100 p-4 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-3">
                  <div className="text-xs font-black uppercase text-blue-950">
                    Trik Pembalikan Persentase:
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <input
                      type="number"
                      value={sandboxPercent}
                      onChange={e => setSandboxPercent(parseInt(e.target.value) || 0)}
                      className="w-18 px-2 py-1.5 rounded-xl bg-white border-2 border-slate-900 font-mono font-black text-center text-sm"
                    />
                    <span className="text-xs font-black uppercase">% dari</span>
                    <input
                      type="number"
                      value={sandboxOf}
                      onChange={e => setSandboxOf(parseInt(e.target.value) || 0)}
                      className="w-18 px-2 py-1.5 rounded-xl bg-white border-2 border-slate-900 font-mono font-black text-center text-sm"
                    />
                    <span className="font-black text-slate-900">=</span>
                    <span className="text-xs font-black text-blue-950 uppercase">
                      sama dengan {sandboxOf}% dari {sandboxPercent} =
                    </span>
                    <span className="font-mono font-black text-xl text-blue-950">
                      {(sandboxPercent * sandboxOf) / 100}
                    </span>
                  </div>
                </div>
              )}

              {/* General Test Button */}
              <div className="pt-2">
                <button
                  onClick={onStartQuiz}
                  className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-3.5 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xs sm:text-sm uppercase flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5"
                >
                  Uji Pemahaman di Quiz Anak Tangga
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
