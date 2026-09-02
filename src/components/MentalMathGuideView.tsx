import React, { useState } from 'react';
import { Brain, Sparkles, ArrowRight, ChevronRight, Lightbulb, Play, Target } from 'lucide-react';
import { MENTAL_MATH_GUIDES } from '../data/mentalMathData';
import { useHabit } from '../context/HabitContext';

interface Props {
  onStartQuiz: (drillPack?: string) => void;
}

export const MentalMathGuideView: React.FC<Props> = ({ onStartQuiz }) => {
  const { theme } = useHabit();
  const isCoastal = theme === 'coastal';
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
      <div className={`${isCoastal ? 'bg-[#D0E1F0] text-[#1E293B] border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[4px_4px_0px_0px_#283618]'} rounded-2xl p-6 sm:p-8 border-2 flex flex-col md:flex-row items-center justify-between gap-6`}>
        <div className="space-y-2 max-w-xl">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border ${isCoastal ? 'border-[#1E293B] text-[#1E40AF]' : 'border-[#283618] text-[#3A5A40]'} text-xs font-black tracking-widest uppercase`}>
            <Brain className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#2563EB]' : 'text-[#588157]'} stroke-[2.5]`} />
            MATERI & TRIK WIKIHOW
          </div>
          <h1 className={`text-2xl sm:text-3xl font-black leading-snug uppercase tracking-tight ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'}`}>
            Panduan Lengkap Mental Math
          </h1>
          <p className={`text-xs sm:text-sm ${isCoastal ? 'text-[#334155]' : 'text-[#3A5A40]'} font-bold leading-relaxed`}>
            Rangkuman metode dan trik cepat berhitung di luar kepala (bersumber dari WikiHow: Cara Melakukan Mental Math).
          </p>
        </div>

        <button
          onClick={() => onStartQuiz('daily')}
          className={`${isCoastal ? 'bg-[#2563EB] hover:bg-blue-700 border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#709752] hover:bg-[#588157] border-[#283618] shadow-[3px_3px_0px_0px_#283618]'} text-white font-black px-6 py-3.5 rounded-xl border-2 text-xs sm:text-sm uppercase flex items-center gap-2 shrink-0 cursor-pointer active:translate-y-0.5 transition-all`}
        >
          <Play className="w-4 h-4 fill-white" />
          Mulai Latihan Harian
        </button>
      </div>

      {/* 2-Column Layout: Guide Navigation on Left, Detailed Content on Right */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Nav List */}
        <div className="space-y-2">
          <h3 className={`text-xs font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} uppercase tracking-wider px-1`}>
            Pilih Modul Trik:
          </h3>

          <div className="space-y-2">
            {MENTAL_MATH_GUIDES.map((g, idx) => (
              <button
                key={g.id}
                onClick={() => setSelectedGuideId(g.id)}
                className={`w-full text-left p-3.5 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#283618]'} transition-all flex items-center justify-between cursor-pointer active:translate-y-0.5 ${
                  selectedGuideId === g.id
                    ? (isCoastal ? 'bg-[#E0EBF5] text-[#1E293B] font-black shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#E9EDC9] text-[#283618] font-black shadow-[3px_3px_0px_0px_#283618]')
                    : 'bg-white text-slate-800 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className={`font-mono text-xs w-6 h-6 rounded-md bg-white border ${isCoastal ? 'border-[#1E293B] text-[#1E293B]' : 'border-[#283618] text-[#283618]'} font-black flex items-center justify-center shrink-0`}>
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold truncate">
                    {g.title}
                  </span>
                </div>
                <ChevronRight className={`w-4 h-4 ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} shrink-0 stroke-[2.5]`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Detailed Guide Content */}
        <div className="md:col-span-2 space-y-6">
          <div className={`bg-white rounded-2xl p-6 sm:p-8 border-2 ${isCoastal ? 'border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'border-[#283618] shadow-[4px_4px_0px_0px_#283618]'} space-y-6`}>
            {/* Guide Title & Category */}
            <div className="space-y-2 pb-4 border-b-2 border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className={`text-xs font-black uppercase ${isCoastal ? 'text-[#1E40AF] bg-[#E0EBF5] border-[#93C5FD]' : 'text-[#3A5A40] bg-[#E9EDC9] border-[#A3B18A]'} px-3 py-1 rounded-md border inline-block mb-1.5`}>
                  {activeGuide.badge}
                </span>
                <h2 className={`text-xl sm:text-2xl font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} uppercase tracking-tight`}>
                  {activeGuide.title}
                </h2>
                <p className={`text-xs sm:text-sm ${isCoastal ? 'text-[#475569]' : 'text-[#574332]'} font-medium mt-1`}>
                  {activeGuide.description}
                </p>
              </div>

              {/* Dedicated 15-Question Module Drill Button */}
              <button
                onClick={() => onStartQuiz(`drill-${activeGuide.id}`)}
                className={`${isCoastal ? 'bg-[#2563EB] hover:bg-blue-700 border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'bg-[#709752] hover:bg-[#588157] border-[#283618] shadow-[3px_3px_0px_0px_#283618]'} text-white font-black px-4 py-3 rounded-xl border-2 text-xs uppercase flex items-center justify-center gap-1.5 shrink-0 cursor-pointer active:translate-y-0.5 transition-all`}
              >
                <Target className="w-4 h-4" />
                <span>Drilling 15 Soal Modul Ini</span>
              </button>
            </div>

            {/* Step by step */}
            <div className="space-y-4">
              <h4 className={`text-sm font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} uppercase tracking-tight`}>
                Langkah-Langkah Perhitungan di Kepala:
              </h4>

              <div className="space-y-3">
                {activeGuide.steps.map((step, sIdx) => (
                  <div key={sIdx} className={`bg-slate-50 rounded-xl p-4 border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#283618]'} space-y-2`}>
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-md ${isCoastal ? 'bg-[#1E293B]' : 'bg-[#283618]'} text-white font-black text-xs flex items-center justify-center shrink-0`}>
                        {sIdx + 1}
                      </span>
                      <h5 className={`font-black text-xs sm:text-sm ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'}`}>
                        {step.title}
                      </h5>
                    </div>
                    <p className={`text-xs ${isCoastal ? 'text-[#475569]' : 'text-[#574332]'} font-medium pl-7`}>{step.explanation}</p>

                    {step.example && (
                      <div className="mt-2 pl-7 text-xs bg-white p-3 rounded-lg border border-slate-300 space-y-1">
                        <strong className={`${isCoastal ? 'text-[#1E40AF]' : 'text-[#8C6B4F]'} font-black block uppercase`}>{step.example}</strong>
                        <ul className={`list-disc list-inside ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} space-y-0.5 font-mono text-[11px] font-medium`}>
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
              <h4 className={`text-sm font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} uppercase tracking-tight`}>
                Contoh Latihan Cepat:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeGuide.practiceQuestions.map((pq, pqIdx) => (
                  <div key={pqIdx} className={`${isCoastal ? 'bg-[#D0E1F0] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#FAEDCD] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'} rounded-xl p-3 border-2 space-y-1`}>
                    <div className={`font-mono font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} text-xs sm:text-sm`}>
                      {pq.question} <span className={`${isCoastal ? 'text-[#2563EB]' : 'text-[#588157]'} font-black`}>= {pq.answer}</span>
                    </div>
                    <div className={`text-[11px] ${isCoastal ? 'text-[#1E40AF]' : 'text-[#8C6B4F]'} font-bold`}>
                      💡 {pq.tip}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Sandbox for Specific Modules */}
            {selectedGuideId === 'magic-multiplication' && (
              <div className={`${isCoastal ? 'bg-[#E0EBF5] border-[#1E293B]' : 'bg-[#E9EDC9] border-[#283618]'} rounded-xl p-4 border-2 space-y-3`}>
                <div className="flex items-center gap-2">
                  <Lightbulb className={`w-4 h-4 ${isCoastal ? 'text-[#2563EB]' : 'text-[#588157]'}`} />
                  <h4 className={`text-xs font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} uppercase`}>
                    Interactive Sandbox Perkalian 11:
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="10"
                    max="99"
                    value={sandboxNum1}
                    onChange={e => setSandboxNum1(parseInt(e.target.value) || 10)}
                    className={`w-20 p-2 bg-white rounded-lg border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#283618]'} font-mono font-black text-center text-sm`}
                  />
                  <span className={`font-mono font-black text-sm ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'}`}>× 11 =</span>
                  <span className={`font-mono font-black text-base ${isCoastal ? 'text-[#2563EB] border-[#1E293B]' : 'text-[#709752] border-[#283618]'} bg-white px-3 py-2 rounded-lg border-2`}>
                    {sandboxNum1 * 11}
                  </span>
                </div>
              </div>
            )}

            {selectedGuideId === 'square-ending-5' && (
              <div className={`${isCoastal ? 'bg-[#E0EBF5] border-[#1E293B]' : 'bg-[#E9EDC9] border-[#283618]'} rounded-xl p-4 border-2 space-y-3`}>
                <div className="flex items-center gap-2">
                  <Lightbulb className={`w-4 h-4 ${isCoastal ? 'text-[#2563EB]' : 'text-[#588157]'}`} />
                  <h4 className={`text-xs font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} uppercase`}>
                    Interactive Sandbox Kuadrat 5:
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={sandboxSquare}
                    onChange={e => setSandboxSquare(parseInt(e.target.value))}
                    className={`p-2 bg-white rounded-lg border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#283618]'} font-mono font-black text-sm`}
                  >
                    {[15, 25, 35, 45, 55, 65, 75, 85, 95, 105].map(n => (
                      <option key={n} value={n}>{n}²</option>
                    ))}
                  </select>
                  <span className={`font-mono font-black text-sm ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'}`}>=</span>
                  <span className={`font-mono font-black text-base ${isCoastal ? 'text-[#2563EB] border-[#1E293B]' : 'text-[#709752] border-[#283618]'} bg-white px-3 py-2 rounded-lg border-2`}>
                    {sandboxSquare * sandboxSquare}
                  </span>
                </div>
              </div>
            )}

            {selectedGuideId === 'quick-percentages' && (
              <div className={`${isCoastal ? 'bg-[#E0EBF5] border-[#1E293B]' : 'bg-[#E9EDC9] border-[#283618]'} rounded-xl p-4 border-2 space-y-3`}>
                <div className="flex items-center gap-2">
                  <Lightbulb className={`w-4 h-4 ${isCoastal ? 'text-[#2563EB]' : 'text-[#588157]'}`} />
                  <h4 className={`text-xs font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#283618]'} uppercase`}>
                    Interactive Sandbox Sifat Komutatif:
                  </h4>
                </div>
                <div className="flex items-center gap-2 flex-wrap text-xs font-mono font-black">
                  <input
                    type="number"
                    value={sandboxPercent}
                    onChange={e => setSandboxPercent(parseInt(e.target.value) || 0)}
                    className={`w-16 p-2 bg-white rounded-lg border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#283618]'} text-center`}
                  />
                  <span>% dari</span>
                  <select
                    value={sandboxOf}
                    onChange={e => setSandboxOf(parseInt(e.target.value))}
                    className={`p-2 bg-white rounded-lg border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#283618]'}`}
                  >
                    <option value={50}>50</option>
                    <option value={25}>25</option>
                    <option value={10}>10</option>
                  </select>
                  <span>=</span>
                  <span className={`text-sm ${isCoastal ? 'text-[#2563EB] border-[#1E293B]' : 'text-[#709752] border-[#283618]'} bg-white px-3 py-2 rounded-lg border-2`}>
                    {(sandboxPercent * sandboxOf) / 100}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
