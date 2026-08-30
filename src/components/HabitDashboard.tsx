import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Clock, BookOpen, Layers, Trophy, RotateCcw, Flame, Check, Download, Upload, HelpCircle, FileText } from 'lucide-react';
import { CloverMascot } from './CloverMascot';
import { useHabit } from '../context/HabitContext';
import { ProgressHabitView } from './ProgressHabitView';
import { ExportModal } from './ExportModal';
import { ImportArticleModal } from './ImportArticleModal';
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

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Top Hero Bento Card */}
      <div className="bg-[#FEF3C7] border-2 border-[#2D2319] rounded-2xl p-6 shadow-[4px_4px_0px_0px_#2D2319] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-left flex-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] text-xs font-black tracking-wider uppercase text-[#047857]">
            <Sparkles className="w-3.5 h-3.5 fill-[#10B981]" />
            CLOVERAIT HABIT ENGINE
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#2D2319] tracking-tight">
            Tingkatkan WPM, KEM & Kelincahan Mental Math
          </h1>
          <p className="text-xs sm:text-sm text-[#574332] font-semibold max-w-xl">
            Selesaikan 3 modul habit harian: <strong>Getah Sanubari</strong> (8/8 artikel ID), <strong>Ranting Kata</strong> (5/5 artikel EN), dan <strong>Lingkar Tahun</strong> (10/10 latihan logika hitung cepat).
          </p>

          {/* Quick Progress Bar in Bento Style */}
          <div className="pt-2 max-w-md">
            <div className="flex justify-between text-xs font-black uppercase text-[#2D2319] mb-1">
              <span>{completedCountToday} dari 3 Habit Selesai Hari Ini</span>
              <span className="font-mono">{Math.round((completedCountToday / 3) * 100)}%</span>
            </div>
            <div className="w-full bg-white h-3.5 rounded-full border-2 border-[#2D2319] overflow-hidden p-0.5">
              <div
                className="bg-[#10B981] h-full rounded-full transition-all duration-500"
                style={{ width: `${(completedCountToday / 3) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="shrink-0 flex flex-col items-center">
          <div className="relative p-2 bg-white rounded-2xl border-2 border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319] mt-4 md:mt-2">
            <CloverMascot type="banner" size={105} />
            <div className="absolute -top-7 -right-3 md:-right-6 bg-[#F59E0B] border-2 border-[#2D2319] text-[#2D2319] font-black text-[10.5px] leading-snug px-3 py-1 rounded-xl shadow-[2px_2px_0px_0px_#2D2319] max-w-[210px] text-center z-10">
              mw semangat sekarang atau disemangatin dijam 3 sore nanti?
            </div>
          </div>
        </div>
      </div>

      {/* Habit Subtabs in Bento Neo-brutalist Switch */}
      <div className="flex items-center justify-center p-1.5 bg-white rounded-2xl max-w-sm mx-auto border-2 border-[#2D2319] shadow-[3px_3px_0px_0px_#2D2319]">
        <button
          onClick={() => setActiveSubTab('today')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-tight transition-all cursor-pointer ${
            activeSubTab === 'today'
              ? 'bg-[#10B981] text-white border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
              : 'text-[#574332] hover:text-[#2D2319]'
          }`}
        >
          <span>📋</span>
          Habit Hari Ini
        </button>

        <button
          onClick={() => setActiveSubTab('progress')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-tight transition-all cursor-pointer ${
            activeSubTab === 'progress'
              ? 'bg-[#10B981] text-white border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
              : 'text-[#574332] hover:text-[#2D2319]'
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
              <h2 className="text-xl sm:text-2xl font-black text-[#2D2319] tracking-tight uppercase">
                Jalur Latihan Harian
              </h2>
              <p className="text-xs sm:text-sm text-[#574332] font-bold">
                Pilih modul di bawah untuk melanjutkan progres belajar
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setIsImportOpen(true)}
                className="flex items-center gap-1.5 text-xs font-black uppercase bg-[#ECFDF5] hover:bg-emerald-100 text-[#047857] px-3.5 py-1.5 rounded-xl border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" /> Impor PDF / Link
              </button>

              <button
                type="button"
                onClick={() => setIsExportOpen(true)}
                className="flex items-center gap-1.5 text-xs font-black uppercase bg-[#FEF3C7] hover:bg-amber-100 text-[#92400E] px-3.5 py-1.5 rounded-xl border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Eksport PDF
              </button>

              <div className="bg-white border-2 border-[#2D2319] px-3.5 py-1.5 rounded-xl text-xs font-black text-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]">
                {completedCountToday}/3 Selesai
              </div>

              <button
                onClick={resetDailyHabitsForTesting}
                title="Reset status untuk mencoba lagi"
                className="p-2 text-slate-700 bg-white hover:bg-amber-100 rounded-xl border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3 Bento Habit Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Habit Card 1: RANTING KATA (English Reading & Vocab) */}
            <div className="bg-[#FFFBEB] border-2 border-[#2D2319] rounded-2xl p-5 shadow-[4px_4px_0px_0px_#2D2319] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-[#FEF3C7] text-[#92400E] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border border-[#2D2319]">
                    English Track ({dailyEnglishProgress.completedCount}/5)
                  </span>
                  {isHabitCompletedToday('ranting-kata') ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-black text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded-md border border-[#2D2319]">
                      <Check className="w-3 h-3 stroke-[3]" /> DONE
                    </span>
                  ) : (
                    <span className="text-[11px] font-black text-[#92400E] bg-[#FDE68A] px-2 py-0.5 rounded-md border border-[#2D2319]">
                      AVAILABLE
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-xl border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]">
                    <CloverMascot type="ranting-kata" size={48} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#2D2319]">Ranting Kata</h3>
                    <p className="text-[11px] font-bold text-[#B45309] uppercase tracking-tight">Vocab & English Reading</p>
                  </div>
                </div>

                <p className="text-xs text-[#574332] font-medium leading-relaxed">
                  5 artikel The Conversation & International Science + flashcard kosakata lengkap dan kuis pemahaman berlanjut (target 5/5 per hari).
                </p>

                <div className="space-y-1.5 text-[11px] font-bold text-[#574332] pt-1">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#B45309]" />
                    <span>Target 5 Artikel Berlanjut</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#047857]" />
                    <span>Kuis Kosakata & Pemahaman</span>
                  </div>
                  {customEnglishArticles.length > 0 && (
                    <div className="flex items-center gap-1.5 text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-md border border-amber-300">
                      <span>🍀</span>
                      <span>{customEnglishArticles.length} Naskah PDF/Link Tersimpan</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t-2 border-[#D97706]/30">
                <button
                  onClick={() => onStartHabit('ranting-kata')}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-tight transition-all border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1.5 cursor-pointer ${
                    isHabitCompletedToday('ranting-kata')
                      ? 'bg-white hover:bg-slate-100 text-[#2D2319]'
                      : 'bg-[#F59E0B] hover:bg-[#D97706] text-[#2D2319]'
                  }`}
                >
                  {isHabitCompletedToday('ranting-kata') ? 'Review / Ulangi' : 'Mulai Ranting Kata'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Habit Card 2: LINGKAR TAHUN (Mental Math & Logic) */}
            <div className="bg-[#FAF6EE] border-2 border-[#2D2319] rounded-2xl p-5 shadow-[4px_4px_0px_0px_#2D2319] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-[#F1EAD9] text-[#78350F] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border border-[#2D2319]">
                    Math & Logic ({dailyMentalMathProgress.completedCount}/10)
                  </span>
                  {isHabitCompletedToday('lingkar-tahun') ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-black text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded-md border border-[#2D2319]">
                      <Check className="w-3 h-3 stroke-[3]" /> DONE
                    </span>
                  ) : (
                    <span className="text-[11px] font-black text-[#78350F] bg-[#FDE68A] px-2 py-0.5 rounded-md border border-[#2D2319]">
                      AVAILABLE
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-xl border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]">
                    <CloverMascot type="lingkar-tahun" size={48} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#2D2319]">Lingkar Tahun</h3>
                    <p className="text-[11px] font-bold text-[#8C6B4F] uppercase tracking-tight">Refleks Mental Math</p>
                  </div>
                </div>

                <p className="text-xs text-[#574332] font-medium leading-relaxed">
                  10 tangga soal logika numerik cepat berganti variasi setiap hari (Penjumlahan kiri ke kanan, Kuadrat 5, Perkalian 11, Komutatif %).
                </p>

                <div className="space-y-1.5 text-[11px] font-bold text-[#574332] pt-1">
                  <div className="flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-[#B45309]" />
                    <span>10 Tangga Soal Harian (10/10)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#574332]" />
                    <span>Variasi Soal Segar Tiap Hari</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t-2 border-[#8C6B4F]/30">
                <button
                  onClick={() => onStartHabit('lingkar-tahun')}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-tight transition-all border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1.5 cursor-pointer ${
                    isHabitCompletedToday('lingkar-tahun')
                      ? 'bg-white hover:bg-slate-100 text-[#2D2319]'
                      : 'bg-[#B45309] hover:bg-[#92400E] text-white'
                  }`}
                >
                  {isHabitCompletedToday('lingkar-tahun') ? 'Review / Ulangi' : 'Mulai Lingkar Tahun'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Habit Card 3: GETAH SANUBARI (Indonesian Reading WPM & KEM) */}
            <div className="bg-[#ECFDF5] border-2 border-[#2D2319] rounded-2xl p-5 shadow-[4px_4px_0px_0px_#2D2319] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-white text-[#047857] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border border-[#2D2319]">
                    WPM & KEM ({dailyIndonesianProgress.completedCount}/8)
                  </span>
                  {isHabitCompletedToday('getah-sanubari') ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-black text-[#047857] bg-white px-2 py-0.5 rounded-md border border-[#2D2319]">
                      <Check className="w-3 h-3 stroke-[3]" /> DONE
                    </span>
                  ) : (
                    <span className="text-[11px] font-black text-[#047857] bg-[#A7F3D0] px-2 py-0.5 rounded-md border border-[#2D2319]">
                      AVAILABLE
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-xl border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]">
                    <CloverMascot type="getah-sanubari" size={48} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#2D2319]">Getah Sanubari</h3>
                    <p className="text-[11px] font-bold text-[#047857] uppercase tracking-tight">Literasi Indonesia</p>
                  </div>
                </div>

                <p className="text-xs text-[#574332] font-medium leading-relaxed">
                  8 artikel kurasi berlanjut (sains, lingkungan, kesehatan, sosial budaya) + evaluasi isian & benar/salah (target 8/8 per hari).
                </p>

                <div className="space-y-1.5 text-[11px] font-bold text-[#574332] pt-1">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#047857]" />
                    <span>Target 8 Artikel Berlanjut</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Kuis Isian + Benar/Salah</span>
                  </div>
                  {customIndonesianArticles.length > 0 && (
                    <div className="flex items-center gap-1.5 text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-md border border-emerald-300">
                      <span>🍀</span>
                      <span>{customIndonesianArticles.length} Naskah PDF/Link Tersimpan</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t-2 border-[#10B981]/30">
                <button
                  onClick={() => onStartHabit('getah-sanubari')}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-tight transition-all border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1.5 cursor-pointer ${
                    isHabitCompletedToday('getah-sanubari')
                      ? 'bg-white hover:bg-slate-100 text-[#2D2319]'
                      : 'bg-[#10B981] hover:bg-[#059669] text-white'
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
            <div className="bg-[#FEF3C7] border-2 border-[#2D2319] rounded-2xl p-5 shadow-[4px_4px_0px_0px_#2D2319] flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#047857] bg-white px-2 py-0.5 rounded border border-[#2D2319]">
                  MINI-GAME KBBI
                </span>
                <h4 className="text-base font-black text-[#2D2319]">Quiz Kata Baku vs Tidak Baku</h4>
                <p className="text-xs text-[#574332] font-semibold">
                  Drilling tanpa batas dengan 600+ kosakata baku KBBI & PUEBI resmi.
                </p>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('kata-baku')}
                  className="mt-2 py-1.5 px-4 bg-white hover:bg-emerald-50 text-[#047857] text-xs font-black uppercase rounded-xl border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] cursor-pointer flex items-center gap-1.5"
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
            <div className="bg-[#E9EDC9] border-2 border-[#2D2319] rounded-2xl p-5 shadow-[4px_4px_0px_0px_#2D2319] flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#3A5A40] bg-white px-2 py-0.5 rounded border border-[#2D2319]">
                  SEMANTIK BAHASA
                </span>
                <h4 className="text-base font-black text-[#2D2319]">Quiz Sinonim & Antonim</h4>
                <p className="text-xs text-[#574332] font-semibold">
                  Latihan acak persamaan & lawan kata dengan penjelasan semantik lengkap.
                </p>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('sinonim-antonim')}
                  className="mt-2 py-1.5 px-4 bg-white hover:bg-[#FAEDCD] text-[#3A5A40] text-xs font-black uppercase rounded-xl border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] cursor-pointer flex items-center gap-1.5"
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
            <div className="bg-[#CCD5AE] border-2 border-[#2D2319] rounded-2xl p-5 shadow-[4px_4px_0px_0px_#2D2319] flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#283618] bg-white px-2 py-0.5 rounded border border-[#2D2319]">
                  DICTIONARY & VOCAB
                </span>
                <h4 className="text-base font-black text-[#2D2319]">Kamus Inggris - Indonesia & My Vocab</h4>
                <p className="text-xs text-[#574332] font-semibold">
                  Definisi mendalam, audio TTS, sinonim/antonim, dan koleksi kata pribadi.
                </p>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('dictionary')}
                  className="mt-2 py-1.5 px-4 bg-white hover:bg-[#FAEDCD] text-[#283618] text-xs font-black uppercase rounded-xl border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] cursor-pointer flex items-center gap-1.5"
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
            <div className="bg-[#ECFDF5] border-2 border-[#2D2319] rounded-2xl p-5 shadow-[4px_4px_0px_0px_#2D2319] flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#92400E] bg-white px-2 py-0.5 rounded border border-[#2D2319]">
                  GRAMMAR & DRILL
                </span>
                <h4 className="text-base font-black text-[#2D2319]">Latihan Buat Kalimat Inggris</h4>
                <p className="text-xs text-[#574332] font-semibold">
                  Terjemahkan kalimat ID ke EN dengan modul grammar SMA & petunjuk kata.
                </p>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('sentence-drill')}
                  className="mt-2 py-1.5 px-4 bg-white hover:bg-amber-50 text-[#92400E] text-xs font-black uppercase rounded-xl border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] cursor-pointer flex items-center gap-1.5"
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
            <div className="bg-white border-2 border-[#2D2319] rounded-2xl p-4 shadow-[3px_3px_0px_0px_#2D2319]">
              <p className="text-[10px] font-black uppercase text-slate-500">Rata-Rata WPM</p>
              <p className="text-2xl font-black text-[#2D2319] font-mono mt-0.5">342 <span className="text-xs font-bold text-slate-600">KPM</span></p>
              <p className="text-[11px] font-bold text-[#047857] mt-1">↑ Kecepatan membaca optimal</p>
            </div>

            <div className="bg-white border-2 border-[#2D2319] rounded-2xl p-4 shadow-[3px_3px_0px_0px_#2D2319]">
              <p className="text-[10px] font-black uppercase text-slate-500">Akurasi Soal</p>
              <p className="text-2xl font-black text-[#047857] font-mono mt-0.5">{overallAccuracy}%</p>
              <p className="text-[11px] font-bold text-slate-500 mt-1">Skor pemahaman materi</p>
            </div>

            <div className="bg-white border-2 border-[#2D2319] rounded-2xl p-4 shadow-[3px_3px_0px_0px_#2D2319]">
              <p className="text-[10px] font-black uppercase text-slate-500">Koleksi Bacaan</p>
              <p className="text-2xl font-black text-[#2D2319] font-mono mt-0.5">{totalArticlesRead} <span className="text-xs font-bold text-slate-600">Artikel</span></p>
              <p className="text-[11px] font-bold text-[#B45309] mt-1">Indonesia & English Universal</p>
            </div>
          </div>
        </div>
      )}

      {/* Subtab 2: PROGRESS HABIT (Dashboard Overview, Donut Charts & Heatmap) */}
      {activeSubTab === 'progress' && <ProgressHabitView />}
    </div>
  );
};

