import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Clock, BookOpen, Layers, Trophy, RotateCcw, Flame, Check, Download, Upload, HelpCircle, FileText, Heart } from 'lucide-react';
import { CloverMascot } from './CloverMascot';
import { useHabit } from '../context/HabitContext';
import { ProgressHabitView } from './ProgressHabitView';
import { ExportModal } from './ExportModal';
import { ImportArticleModal } from './ImportArticleModal';
import { ThemeSwitch } from './ThemeSwitch';
import { HabitId } from '../types';

interface HabitDashboardProps {
  onStartHabit: (habitId: HabitId) => void;
  onNavigateTab?: (tab: 'dashboard' | 'obat-fokus' | 'balon-helium' | 'anak-tangga' | 'cerpen' | 'kata-baku' | 'sentence-drill' | 'sinonim-antonim' | 'dictionary') => void;
}

export const HabitDashboard: React.FC<HabitDashboardProps> = ({ onStartHabit, onNavigateTab }) => {
  const [activeSubTab, setActiveSubTab] = useState<'today' | 'progress'>('today');
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);
  const {
    theme,
    isHabitCompletedToday,
    completedCountToday,
    habitStats,
    resetDailyHabitsForTesting,
    overallAccuracy,
    totalArticlesRead,
    dailyIndonesianProgress,
    dailyEnglishProgress,
    dailyMentalMathProgress,
    customIndonesianArticles,
    customEnglishArticles
  } = useHabit();

  const isCoastal = theme === 'coastal';

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-5 sm:space-y-6">
      {/* Top Hero Bento Card */}
      <div className={`${isCoastal ? 'bg-[#E0F2FE] border-[#1E293B]' : 'bg-[#FEF3C7] border-[#2D2319]'} border-2 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.85)] flex flex-col space-y-4 transition-colors duration-300`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-2 text-left flex-1 min-w-0">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border-2 ${isCoastal ? 'border-[#1E293B] text-[#1E40AF]' : 'border-[#2D2319] text-[#047857]'} shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] text-[10px] sm:text-xs font-black tracking-wider uppercase`}>
              <Sparkles className={`w-3.5 h-3.5 ${isCoastal ? 'fill-[#2563EB] text-[#2563EB]' : 'fill-[#10B981] text-[#10B981]'} shrink-0`} />
              <span>CLOVERAIT HABIT ENGINE</span>
            </div>
            <h1 className={`text-xl sm:text-2xl md:text-3xl font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'} tracking-tight break-words`}>
              Tingkatkan WPM, KEM & Kelincahan Mental Math
            </h1>
            <p className={`text-xs sm:text-sm ${isCoastal ? 'text-slate-700' : 'text-[#574332]'} font-semibold max-w-xl leading-relaxed break-words`}>
              Selesaikan 3 modul habit harian: <strong>Getah Sanubari</strong> (8/8 artikel ID), <strong>Ranting Kata</strong> (5/5 artikel EN), dan <strong>Lingkar Tahun</strong> (10/10 latihan logika hitung cepat).
            </p>

            {/* Quick Progress Bar in Bento Style */}
            <div className="pt-2 max-w-md">
              <div className={`flex justify-between text-xs font-black uppercase ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'} mb-1`}>
                <span>{completedCountToday} dari 3 Habit Selesai Hari Ini</span>
                <span className="font-mono">{Math.round((completedCountToday / 3) * 100)}%</span>
              </div>
              <div className={`w-full bg-white h-3.5 rounded-full border-2 ${isCoastal ? 'border-[#1E293B]' : 'border-[#2D2319]'} overflow-hidden p-0.5`}>
                <div
                  className={`${isCoastal ? 'bg-[#2563EB]' : 'bg-[#10B981]'} h-full rounded-full transition-all duration-500`}
                  style={{ width: `${(completedCountToday / 3) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-center">
            <div className={`relative p-2.5 bg-white rounded-2xl border-2 ${isCoastal ? 'border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'}`}>
              <CloverMascot type="banner" size={100} />
            </div>
          </div>
        </div>

        {/* Elongated Full-Width Motivational Quote Banner */}
        <div className={`w-full bg-white/95 border-2 ${isCoastal ? 'border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'} rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 transition-all min-w-0`}>
          <div className={`p-2 ${isCoastal ? 'bg-[#DBEAFE] border-[#1E293B] shadow-[1.5px_1.5px_0px_0px_#1E293B]' : 'bg-[#FEF3C7] border-[#2D2319] shadow-[1.5px_1.5px_0px_0px_#2D2319]'} rounded-xl border-2 shrink-0`}>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          </div>
          <p className={`text-xs sm:text-sm font-bold ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'} leading-relaxed break-words flex-1 min-w-0`}>
            “namanya belajar awalnya pasti ngerasa oon dulu baru dapet pencerahan, kan? jangan ngerasa ketinggalan oky, kita cuma belum bisa bukannya ga mungkin bisa &lt;3”
          </p>
        </div>
      </div>

      {/* Habit Subtabs in Bento Neo-brutalist Switch */}
      <div className={`flex items-center justify-center p-1.5 bg-white rounded-2xl max-w-sm mx-auto border-2 ${isCoastal ? 'border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'}`}>
        <button
          onClick={() => setActiveSubTab('today')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-tight transition-all cursor-pointer ${
            activeSubTab === 'today'
              ? (isCoastal ? 'bg-[#2563EB] text-white border-2 border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#10B981] text-white border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]')
              : (isCoastal ? 'text-slate-600 hover:text-slate-900' : 'text-[#574332] hover:text-[#2D2319]')
          }`}
        >
          <span>📋</span>
          Habit Hari Ini
        </button>

        <button
          onClick={() => setActiveSubTab('progress')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-tight transition-all cursor-pointer ${
            activeSubTab === 'progress'
              ? (isCoastal ? 'bg-[#2563EB] text-white border-2 border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#10B981] text-white border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]')
              : (isCoastal ? 'text-slate-600 hover:text-slate-900' : 'text-[#574332] hover:text-[#2D2319]')
          }`}
        >
          <span>📊</span>
          Progress & Analitik
        </button>
      </div>

      {/* Subtab 1: HABIT HARI INI */}
      {activeSubTab === 'today' && (
        <div className="space-y-6">
          <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} />
          <ImportArticleModal isOpen={isImportOpen} onClose={() => setIsImportOpen(false)} />

          {/* Header Row: Actions & Export/Import Controls */}
          <div className="flex items-center justify-between px-1 flex-wrap gap-2">
            <div>
              <h2 className={`text-xl sm:text-2xl font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'} tracking-tight uppercase`}>
                Jalur Latihan Harian
              </h2>
              <p className={`text-xs sm:text-sm ${isCoastal ? 'text-[#475569]' : 'text-[#574332]'} font-bold`}>
                Pilih modul di bawah untuk melanjutkan progres belajar
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <ThemeSwitch compact={true} showLabel={false} />

              <button
                type="button"
                onClick={() => setIsImportOpen(true)}
                className={`flex items-center gap-1.5 text-xs font-black uppercase ${
                  isCoastal
                    ? 'bg-[#D0E1F0] hover:bg-[#BFDBFE] text-[#1E40AF] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]'
                    : 'bg-[#ECFDF5] hover:bg-emerald-100 text-[#047857] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                } px-3.5 py-1.5 rounded-xl border-2 cursor-pointer transition-all active:translate-y-0.5`}
              >
                <Upload className="w-3.5 h-3.5" /> Impor Link / Naskah
              </button>

              <button
                type="button"
                onClick={() => setIsExportOpen(true)}
                className={`flex items-center gap-1.5 text-xs font-black uppercase ${
                  isCoastal
                    ? 'bg-[#E0E7FF] hover:bg-[#C7D2FE] text-[#3730A3] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]'
                    : 'bg-[#FEF3C7] hover:bg-amber-100 text-[#92400E] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                } px-3.5 py-1.5 rounded-xl border-2 cursor-pointer transition-all active:translate-y-0.5`}
              >
                <Download className="w-3.5 h-3.5" /> Eksport PDF
              </button>

              <div className={`bg-white border-2 ${isCoastal ? 'border-[#1E293B] text-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'border-[#2D2319] text-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'} px-3.5 py-1.5 rounded-xl text-xs font-black`}>
                {completedCountToday}/3 Selesai
              </div>

              <button
                onClick={resetDailyHabitsForTesting}
                title="Reset status untuk mencoba lagi"
                className={`p-2 text-slate-700 bg-white ${isCoastal ? 'hover:bg-blue-50 border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'hover:bg-amber-100 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'} rounded-xl border-2 transition-colors cursor-pointer active:translate-y-0.5`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3 Bento Habit Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Habit Card 1: RANTING KATA (English Reading & Vocab) */}
            <div className={`${isCoastal ? 'bg-[#E0F2FE] border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'bg-[#FFFBEB] border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319]'} border-2 rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-colors duration-300`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`${isCoastal ? 'bg-[#DBEAFE] text-[#1E40AF] border-[#1E293B]' : 'bg-[#FEF3C7] text-[#92400E] border-[#2D2319]'} text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border`}>
                    English Track ({dailyEnglishProgress.completedCount}/5)
                  </span>
                  {isHabitCompletedToday('ranting-kata') ? (
                    <span className={`inline-flex items-center gap-1 text-[11px] font-black ${isCoastal ? 'text-[#1E40AF] bg-white border-[#1E293B]' : 'text-[#047857] bg-[#ECFDF5] border-[#2D2319]'} px-2 py-0.5 rounded-md border`}>
                      <Check className="w-3 h-3 stroke-[3]" /> DONE
                    </span>
                  ) : (
                    <span className={`text-[11px] font-black ${isCoastal ? 'text-[#1E3A8A] bg-[#BFDBFE] border-[#1E293B]' : 'text-[#92400E] bg-[#FDE68A] border-[#2D2319]'} px-2 py-0.5 rounded-md border`}>
                      AVAILABLE
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <div className={`bg-white p-2 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'}`}>
                    <CloverMascot type="ranting-kata" size={48} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'}`}>Ranting Kata</h3>
                    <p className={`text-[11px] font-bold ${isCoastal ? 'text-[#2563EB]' : 'text-[#B45309]'} uppercase tracking-tight`}>Vocab & English Reading</p>
                  </div>
                </div>

                <p className={`text-xs ${isCoastal ? 'text-[#334155]' : 'text-[#574332]'} font-medium leading-relaxed`}>
                  5 artikel The Conversation & International Science + flashcard kosakata lengkap dan kuis pemahaman berlanjut (target 5/5 per hari).
                </p>

                <div className={`space-y-1.5 text-[11px] font-bold ${isCoastal ? 'text-[#334155]' : 'text-[#574332]'} pt-1`}>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#2563EB]' : 'text-[#B45309]'}`} />
                    <span>Target 5 Artikel Berlanjut</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#0284C7]' : 'text-[#047857]'}`} />
                    <span>Kuis Kosakata & Pemahaman</span>
                  </div>
                  {customEnglishArticles.length > 0 && (
                    <div className={`flex items-center gap-1.5 ${isCoastal ? 'text-[#1E40AF] bg-blue-100/90 border-blue-300' : 'text-amber-700 bg-amber-100/80 border-amber-300'} px-2 py-0.5 rounded-md border`}>
                      <span>🌊</span>
                      <span>{customEnglishArticles.length} Naskah PDF/Link Tersimpan</span>
                    </div>
                  )}
                </div>
              </div>

              <div className={`space-y-2 pt-2 border-t-2 ${isCoastal ? 'border-[#93C5FD]/40' : 'border-[#D97706]/30'}`}>
                <button
                  onClick={() => onStartHabit('ranting-kata')}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-tight transition-all border-2 ${
                    isCoastal ? 'border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                  } active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1.5 cursor-pointer ${
                    isCoastal
                      ? (isHabitCompletedToday('ranting-kata')
                          ? 'bg-white hover:bg-slate-100 text-[#1E293B]'
                          : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white')
                      : (isHabitCompletedToday('ranting-kata')
                          ? 'bg-white hover:bg-slate-100 text-[#2D2319]'
                          : 'bg-[#F59E0B] hover:bg-[#D97706] text-[#2D2319]')
                  }`}
                >
                  {isHabitCompletedToday('ranting-kata') ? 'Review / Ulangi' : 'Mulai Ranting Kata'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Habit Card 2: LINGKAR TAHUN (Mental Math & Logic) */}
            <div className={`${isCoastal ? 'bg-[#E6F4F1] border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'bg-[#FAF6EE] border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319]'} border-2 rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-colors duration-300`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`${isCoastal ? 'bg-[#CCFBF1] text-[#0F766E] border-[#1E293B]' : 'bg-[#F1EAD9] text-[#78350F] border-[#2D2319]'} text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border`}>
                    Math & Logic ({dailyMentalMathProgress.completedCount}/10)
                  </span>
                  {isHabitCompletedToday('lingkar-tahun') ? (
                    <span className={`inline-flex items-center gap-1 text-[11px] font-black ${isCoastal ? 'text-[#0F766E] bg-white border-[#1E293B]' : 'text-[#047857] bg-[#ECFDF5] border-[#2D2319]'} px-2 py-0.5 rounded-md border`}>
                      <Check className="w-3 h-3 stroke-[3]" /> DONE
                    </span>
                  ) : (
                    <span className={`text-[11px] font-black ${isCoastal ? 'text-[#115E59] bg-[#99F6E4] border-[#1E293B]' : 'text-[#78350F] bg-[#FDE68A] border-[#2D2319]'} px-2 py-0.5 rounded-md border`}>
                      AVAILABLE
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <div className={`bg-white p-2 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'}`}>
                    <CloverMascot type="lingkar-tahun" size={48} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'}`}>Lingkar Tahun</h3>
                    <p className={`text-[11px] font-bold ${isCoastal ? 'text-[#0D9488]' : 'text-[#8C6B4F]'} uppercase tracking-tight`}>Refleks Mental Math</p>
                  </div>
                </div>

                <p className={`text-xs ${isCoastal ? 'text-[#334155]' : 'text-[#574332]'} font-medium leading-relaxed`}>
                  10 tangga soal logika numerik cepat berganti variasi setiap hari (Penjumlahan kiri ke kanan, Kuadrat 5, Perkalian 11, Komutatif %).
                </p>

                <div className={`space-y-1.5 text-[11px] font-bold ${isCoastal ? 'text-[#334155]' : 'text-[#574332]'} pt-1`}>
                  <div className="flex items-center gap-1.5">
                    <Trophy className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#0D9488]' : 'text-[#B45309]'}`} />
                    <span>10 Tangga Soal Harian (10/10)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#475569]' : 'text-[#574332]'}`} />
                    <span>Variasi Soal Segar Tiap Hari</span>
                  </div>
                </div>
              </div>

              <div className={`space-y-2 pt-2 border-t-2 ${isCoastal ? 'border-[#5EEAD4]/40' : 'border-[#8C6B4F]/30'}`}>
                <button
                  onClick={() => onStartHabit('lingkar-tahun')}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-tight transition-all border-2 ${
                    isCoastal ? 'border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                  } active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1.5 cursor-pointer ${
                    isCoastal
                      ? (isHabitCompletedToday('lingkar-tahun')
                          ? 'bg-white hover:bg-slate-100 text-[#1E293B]'
                          : 'bg-[#0D9488] hover:bg-[#0F766E] text-white')
                      : (isHabitCompletedToday('lingkar-tahun')
                          ? 'bg-white hover:bg-slate-100 text-[#2D2319]'
                          : 'bg-[#B45309] hover:bg-[#92400E] text-white')
                  }`}
                >
                  {isHabitCompletedToday('lingkar-tahun') ? 'Review / Ulangi' : 'Mulai Lingkar Tahun'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Habit Card 3: GETAH SANUBARI (Indonesian Reading WPM & KEM) */}
            <div className={`${isCoastal ? 'bg-[#E0F7FA] border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'bg-[#ECFDF5] border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319]'} border-2 rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-colors duration-300`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`bg-white ${isCoastal ? 'text-[#0284C7] border-[#1E293B]' : 'text-[#047857] border-[#2D2319]'} text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border`}>
                    WPM & KEM ({dailyIndonesianProgress.completedCount}/8)
                  </span>
                  {isHabitCompletedToday('getah-sanubari') ? (
                    <span className={`inline-flex items-center gap-1 text-[11px] font-black ${isCoastal ? 'text-[#0284C7] bg-white border-[#1E293B]' : 'text-[#047857] bg-white border-[#2D2319]'} px-2 py-0.5 rounded-md border`}>
                      <Check className="w-3 h-3 stroke-[3]" /> DONE
                    </span>
                  ) : (
                    <span className={`text-[11px] font-black ${isCoastal ? 'text-[#0369A1] bg-[#BAE6FD] border-[#1E293B]' : 'text-[#047857] bg-[#A7F3D0] border-[#2D2319]'} px-2 py-0.5 rounded-md border`}>
                      AVAILABLE
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <div className={`bg-white p-2 rounded-xl border-2 ${isCoastal ? 'border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'}`}>
                    <CloverMascot type="getah-sanubari" size={48} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'}`}>Getah Sanubari</h3>
                    <p className={`text-[11px] font-bold ${isCoastal ? 'text-[#0284C7]' : 'text-[#047857]'} uppercase tracking-tight`}>Literasi Indonesia</p>
                  </div>
                </div>

                <p className={`text-xs ${isCoastal ? 'text-[#334155]' : 'text-[#574332]'} font-medium leading-relaxed`}>
                  8 artikel kurasi berlanjut (sains, lingkungan, kesehatan, sosial budaya) + evaluasi isian & benar/salah (target 8/8 per hari).
                </p>

                <div className={`space-y-1.5 text-[11px] font-bold ${isCoastal ? 'text-[#334155]' : 'text-[#574332]'} pt-1`}>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#0284C7]' : 'text-[#047857]'}`} />
                    <span>Target 8 Artikel Berlanjut</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className={`w-3.5 h-3.5 ${isCoastal ? 'text-[#0EA5E9]' : 'text-[#10B981]'}`} />
                    <span>Kuis Isian + Benar/Salah</span>
                  </div>
                  {customIndonesianArticles.length > 0 && (
                    <div className={`flex items-center gap-1.5 ${isCoastal ? 'text-sky-800 bg-sky-100/90 border-sky-300' : 'text-emerald-800 bg-emerald-100/90 border-emerald-300'} px-2 py-0.5 rounded-md border`}>
                      <span>🌊</span>
                      <span>{customIndonesianArticles.length} Naskah PDF/Link Tersimpan</span>
                    </div>
                  )}
                </div>
              </div>

              <div className={`space-y-2 pt-2 border-t-2 ${isCoastal ? 'border-[#38BDF8]/40' : 'border-[#10B981]/30'}`}>
                <button
                  onClick={() => onStartHabit('getah-sanubari')}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-tight transition-all border-2 ${
                    isCoastal ? 'border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                  } active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1.5 cursor-pointer ${
                    isCoastal
                      ? (isHabitCompletedToday('getah-sanubari')
                          ? 'bg-white hover:bg-slate-100 text-[#1E293B]'
                          : 'bg-[#0284C7] hover:bg-[#0369A1] text-white')
                      : (isHabitCompletedToday('getah-sanubari')
                          ? 'bg-white hover:bg-slate-100 text-[#2D2319]'
                          : 'bg-[#10B981] hover:bg-[#059669] text-white')
                  }`}
                >
                  {isHabitCompletedToday('getah-sanubari') ? 'Review / Ulangi' : 'Mulai Getah Sanubari'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mini-Games & Vocabulary Launchers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Kata Baku Mini-Game Banner */}
            <div className={`${isCoastal ? 'bg-[#E0F2FE] border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'bg-[#FEF3C7] border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319]'} border-2 rounded-2xl p-5 flex items-center justify-between gap-4 transition-colors duration-300`}>
              <div className="space-y-1">
                <span className={`text-[10px] font-black uppercase tracking-wider ${isCoastal ? 'text-[#1E40AF] bg-white border-[#1E293B]' : 'text-[#047857] bg-white border-[#2D2319]'} px-2 py-0.5 rounded border`}>
                  MINI-GAME KBBI
                </span>
                <h4 className={`text-base font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'}`}>Quiz Kata Baku vs Tidak Baku</h4>
                <p className={`text-xs ${isCoastal ? 'text-[#334155]' : 'text-[#574332]'} font-semibold`}>
                  Drilling tanpa batas dengan 600+ kosakata baku KBBI & PUEBI resmi.
                </p>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('kata-baku')}
                  className={`mt-2 py-1.5 px-4 bg-white ${isCoastal ? 'hover:bg-blue-50 text-[#1E40AF] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'hover:bg-emerald-50 text-[#047857] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'} text-xs font-black uppercase rounded-xl border-2 cursor-pointer flex items-center gap-1.5 transition-all active:translate-y-0.5`}
                >
                  <span>Mainkan Quiz</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="shrink-0">
                <CloverMascot type="kata-baku" size={64} />
              </div>
            </div>

            {/* Sinonim & Antonim Quiz Banner */}
            <div className={`${isCoastal ? 'bg-[#E0E7FF] border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'bg-[#E9EDC9] border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319]'} border-2 rounded-2xl p-5 flex items-center justify-between gap-4 transition-colors duration-300`}>
              <div className="space-y-1">
                <span className={`text-[10px] font-black uppercase tracking-wider ${isCoastal ? 'text-[#3730A3] bg-white border-[#1E293B]' : 'text-[#3A5A40] bg-white border-[#2D2319]'} px-2 py-0.5 rounded border`}>
                  SEMANTIK BAHASA
                </span>
                <h4 className={`text-base font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'}`}>Quiz Sinonim & Antonim</h4>
                <p className={`text-xs ${isCoastal ? 'text-[#334155]' : 'text-[#574332]'} font-semibold`}>
                  Latihan acak persamaan & lawan kata dengan penjelasan semantik lengkap.
                </p>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('sinonim-antonim')}
                  className={`mt-2 py-1.5 px-4 bg-white ${isCoastal ? 'hover:bg-indigo-50 text-[#3730A3] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'hover:bg-[#FAEDCD] text-[#3A5A40] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'} text-xs font-black uppercase rounded-xl border-2 cursor-pointer flex items-center gap-1.5 transition-all active:translate-y-0.5`}
                >
                  <span>Mulai Quiz</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="shrink-0">
                <CloverMascot type="kata-baku" size={64} />
              </div>
            </div>

            {/* English-Indonesian Dictionary & My Vocab Banner */}
            <div className={`${isCoastal ? 'bg-[#CCFBF1] border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'bg-[#CCD5AE] border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319]'} border-2 rounded-2xl p-5 flex items-center justify-between gap-4 transition-colors duration-300`}>
              <div className="space-y-1">
                <span className={`text-[10px] font-black uppercase tracking-wider ${isCoastal ? 'text-[#0F766E] bg-white border-[#1E293B]' : 'text-[#283618] bg-white border-[#2D2319]'} px-2 py-0.5 rounded border`}>
                  DICTIONARY & VOCAB
                </span>
                <h4 className={`text-base font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'}`}>Kamus Inggris - Indonesia & My Vocab</h4>
                <p className={`text-xs ${isCoastal ? 'text-[#334155]' : 'text-[#574332]'} font-semibold`}>
                  Definisi mendalam, audio TTS, sinonim/antonim, dan koleksi kata pribadi.
                </p>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('dictionary')}
                  className={`mt-2 py-1.5 px-4 bg-white ${isCoastal ? 'hover:bg-teal-50 text-[#0F766E] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'hover:bg-[#FAEDCD] text-[#283618] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'} text-xs font-black uppercase rounded-xl border-2 cursor-pointer flex items-center gap-1.5 transition-all active:translate-y-0.5`}
                >
                  <span>Buka Kamus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="shrink-0">
                <CloverMascot type="ranting-kata" size={64} />
              </div>
            </div>

            {/* Sentence Drill Mini-Game Banner */}
            <div className={`${isCoastal ? 'bg-[#E0F2FE] border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B]' : 'bg-[#ECFDF5] border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319]'} border-2 rounded-2xl p-5 flex items-center justify-between gap-4 transition-colors duration-300`}>
              <div className="space-y-1">
                <span className={`text-[10px] font-black uppercase tracking-wider ${isCoastal ? 'text-[#1E40AF] bg-white border-[#1E293B]' : 'text-[#92400E] bg-white border-[#2D2319]'} px-2 py-0.5 rounded border`}>
                  GRAMMAR & DRILL
                </span>
                <h4 className={`text-base font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'}`}>Latihan Buat Kalimat Inggris</h4>
                <p className={`text-xs ${isCoastal ? 'text-[#334155]' : 'text-[#574332]'} font-semibold`}>
                  Terjemahkan kalimat ID ke EN dengan modul grammar SMA & petunjuk kata.
                </p>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('sentence-drill')}
                  className={`mt-2 py-1.5 px-4 bg-white ${isCoastal ? 'hover:bg-blue-50 text-[#1E40AF] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'hover:bg-amber-50 text-[#92400E] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'} text-xs font-black uppercase rounded-xl border-2 cursor-pointer flex items-center gap-1.5 transition-all active:translate-y-0.5`}
                >
                  <span>Latihan Kalimat</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="shrink-0">
                <CloverMascot type="sentence" size={64} />
              </div>
            </div>
          </div>

          {/* Bento Stats & Highlights Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className={`bg-white border-2 ${isCoastal ? 'border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'} rounded-2xl p-4`}>
              <p className="text-[10px] font-black uppercase text-slate-500">Rata-Rata WPM</p>
              <p className={`text-2xl font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'} font-mono mt-0.5`}>342 <span className="text-xs font-bold text-slate-600">KPM</span></p>
              <p className={`text-[11px] font-bold ${isCoastal ? 'text-[#2563EB]' : 'text-[#047857]'} mt-1`}>↑ Kecepatan membaca optimal</p>
            </div>

            <div className={`bg-white border-2 ${isCoastal ? 'border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'} rounded-2xl p-4`}>
              <p className="text-[10px] font-black uppercase text-slate-500">Akurasi Soal</p>
              <p className={`text-2xl font-black ${isCoastal ? 'text-[#0D9488]' : 'text-[#047857]'} font-mono mt-0.5`}>{overallAccuracy}%</p>
              <p className="text-[11px] font-bold text-slate-500 mt-1">Skor pemahaman materi</p>
            </div>

            <div className={`bg-white border-2 ${isCoastal ? 'border-[#1E293B] shadow-[3px_3px_0px_0px_#1E293B]' : 'border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]'} rounded-2xl p-4`}>
              <p className="text-[10px] font-black uppercase text-slate-500">Koleksi Bacaan</p>
              <p className={`text-2xl font-black ${isCoastal ? 'text-[#1E293B]' : 'text-[#2D2319]'} font-mono mt-0.5`}>{totalArticlesRead} <span className="text-xs font-bold text-slate-600">Artikel</span></p>
              <p className={`text-[11px] font-bold ${isCoastal ? 'text-[#0284C7]' : 'text-[#B45309]'} mt-1`}>Indonesia & English Universal</p>
            </div>
          </div>
        </div>
      )}

      {/* Subtab 2: PROGRESS HABIT (Dashboard Overview, Donut Charts & Heatmap) */}
      {activeSubTab === 'progress' && <ProgressHabitView />}
    </div>
  );
};

