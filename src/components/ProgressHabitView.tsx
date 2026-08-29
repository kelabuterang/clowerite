import React from 'react';
import { Clock, BookOpen, Flame, Award, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useHabit } from '../context/HabitContext';
import { CloverMascot } from './CloverMascot';

export const ProgressHabitView: React.FC = () => {
  const { progress, completionRate, completedCountToday, overallAccuracy, totalArticlesRead, habitStats, dailyIndonesianProgress, dailyEnglishProgress, dailyMentalMathProgress } = useHabit();

  const daysOfWeek = [
    { label: 'Rab', active: false },
    { label: 'Kam', active: false },
    { label: 'Jum', active: false },
    { label: 'Sab', active: false },
    { label: 'Min', active: false },
    { label: 'Sen', active: false },
    { label: 'Sel', active: true }
  ];

  // Calendar days
  const calendarDays = [
    { num: 26, isCurrentMonth: false },
    { num: 27, isCurrentMonth: false },
    { num: 28, isCurrentMonth: false },
    { num: 29, isCurrentMonth: false, active: true },
    { num: 30, isCurrentMonth: false },
    { num: 31, isCurrentMonth: false },
    { num: 1, isCurrentMonth: true },
    { num: 2, isCurrentMonth: true },
    { num: 3, isCurrentMonth: true },
    { num: 4, isCurrentMonth: true },
    { num: 5, isCurrentMonth: true },
    { num: 6, isCurrentMonth: true },
    { num: 7, isCurrentMonth: true },
    { num: 8, isCurrentMonth: true },
    { num: 9, isCurrentMonth: true },
    { num: 10, isCurrentMonth: true },
    { num: 11, isCurrentMonth: true },
    { num: 12, isCurrentMonth: true },
    { num: 13, isCurrentMonth: true },
    { num: 14, isCurrentMonth: true },
    { num: 15, isCurrentMonth: true },
    { num: 16, isCurrentMonth: true },
    { num: 17, isCurrentMonth: true },
    { num: 18, isCurrentMonth: true },
    { num: 19, isCurrentMonth: true },
    { num: 20, isCurrentMonth: true },
    { num: 21, isCurrentMonth: true },
    { num: 22, isCurrentMonth: true },
    { num: 23, isCurrentMonth: true },
    { num: 24, isCurrentMonth: true },
    { num: 25, isCurrentMonth: true },
    { num: 26, isCurrentMonth: true },
    { num: 27, isCurrentMonth: true },
    { num: 28, isCurrentMonth: true },
    { num: 29, isCurrentMonth: true, active: true }
  ];

  // Helper for Donut Circle SVG
  const renderDonut = (percentage: number, colorPrimary = '#10B981', colorSecondary = '#F59E0B', label = '%') => {
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (Math.min(100, Math.max(0, percentage)) / 100) * circumference;

    return (
      <div className="relative w-40 h-40 flex items-center justify-center mx-auto my-2">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
          {/* Base Track */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke="#F1EAD9"
            strokeWidth="16"
            fill="transparent"
          />
          {/* Secondary contrast slice */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke={colorSecondary}
            strokeWidth="16"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * 0.88}
            strokeLinecap="round"
          />
          {/* Main Progress slice */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke={colorPrimary}
            strokeWidth="16"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center text-center">
          <span className="text-3xl font-black text-[#2D2319] font-mono tracking-tight">
            {percentage}{label}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Title & Timestamp */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-[#2D2319] tracking-tight">
            Progress & Analitik Kebiasaan Cloverait
          </h2>
          <div className="inline-flex items-center gap-1.5 mt-1 bg-[#10B981]/15 text-[#047857] text-xs font-bold px-3 py-1 rounded-full border border-[#10B981]/30">
            <Clock className="w-3.5 h-3.5" />
            Diperbarui secara real-time
          </div>
        </div>
      </div>

      {/* 4 Big Overview Metric Cards in Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Streak */}
        <div className="bg-[#FEF3C7] rounded-2xl p-5 border-2 border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319] space-y-3 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-black uppercase text-[#92400E]">Streak Harian</div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-black text-[#2D2319] font-mono">{progress.streak}</span>
              <span className="text-xs font-black uppercase text-[#78350F]">Hari 🔥</span>
            </div>
          </div>

          <div className="pt-2 border-t-2 border-[#D97706]/30">
            <div className="grid grid-cols-7 gap-1 text-center">
              {daysOfWeek.map((d, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black transition-all border ${
                      d.active
                        ? 'bg-[#10B981] text-white border-[#2D2319] shadow-[1px_1px_0px_0px_#2D2319]'
                        : 'bg-white/90 text-slate-400 border-slate-300'
                    }`}
                  >
                    {d.active ? '✓' : ''}
                  </div>
                  <span className="text-[9px] font-black uppercase text-[#574332]">{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metric 2: Tingkat Penyelesaian */}
        <div className="bg-[#ECFDF5] rounded-2xl p-5 border-2 border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319] space-y-2 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-black uppercase text-[#047857]">Tingkat Penyelesaian</div>
            <div className="text-3xl font-black text-[#2D2319] font-mono mt-1">
              {completionRate}%
            </div>
            <div className="text-xs font-bold text-[#4B5563] pt-0.5">
              {completedCountToday} dari 3 Habit Utama Hari Ini
            </div>
          </div>
          <div className="w-full bg-white h-3 rounded-full border-2 border-[#2D2319] overflow-hidden p-0.5 mt-2">
            <div
              className="bg-[#10B981] h-full rounded-full transition-all duration-500"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>

        {/* Metric 3: Akurasi Soal */}
        <div className="bg-[#FAF6EE] rounded-2xl p-5 border-2 border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319] space-y-2 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-black uppercase text-[#8C6B4F]">Akurasi Keseluruhan</div>
            <div className="text-3xl font-black text-[#2D2319] font-mono mt-1">
              {overallAccuracy}%
            </div>
          </div>
          <div className="text-xs font-bold text-[#574332] border-t-2 border-[#2D2319]/15 pt-2">
            Rata-rata ketepatan seluruh kuis & latihan
          </div>
        </div>

        {/* Metric 4: Artikel Dibaca */}
        <div className="bg-[#FFFBEB] rounded-2xl p-5 border-2 border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319] space-y-2 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-black uppercase text-[#B45309]">Artikel Dibaca</div>
            <div className="text-3xl font-black text-[#2D2319] font-mono mt-1">
              {totalArticlesRead} <span className="text-sm font-bold text-slate-500">Selesai</span>
            </div>
          </div>
          <div className="text-xs font-bold text-[#574332] border-t-2 border-[#2D2319]/15 pt-2">
            Koleksi bebas diakses & diekspor PDF
          </div>
        </div>
      </div>

      {/* 3 Donut/Pie Charts Bento Grid for ALL 3 Habits: Getah Sanubari, Ranting Kata, Lingkar Tahun */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Donut Card 1: Getah Sanubari (NEWLY ADDED PIE CHART) */}
        <div className="bg-white rounded-2xl p-6 border-2 border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319] text-center space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-[#2D2319] uppercase tracking-tight">
              Getah Sanubari
            </h3>
            <span className="bg-[#ECFDF5] text-[#047857] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border border-[#10B981]/40">
              Literasi ID ({dailyIndonesianProgress.completedCount}/8)
            </span>
          </div>

          {renderDonut(habitStats['getah-sanubari'].accuracy, '#047857', '#F59E0B')}

          <div className="space-y-1.5 text-xs text-[#4A3B2C] font-bold text-left max-w-xs mx-auto pt-3 border-t-2 border-slate-100">
            <div className="flex items-center justify-between">
              <span>🎯 Rata-rata Akurasi Kuis:</span>
              <strong className="text-[#047857]">{habitStats['getah-sanubari'].accuracy}%</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>⚡ Kecepatan Membaca (WPM):</span>
              <strong className="text-[#B45309]">{habitStats['getah-sanubari'].avgWpm} WPM</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>🧠 Kecepatan Efektif (KEM):</span>
              <strong className="text-[#047857]">{habitStats['getah-sanubari'].avgKem} KEM</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>⏰ Rata-rata Waktu Baca:</span>
              <span>{Math.round(habitStats['getah-sanubari'].avgReadTimeSec / 60)}m {habitStats['getah-sanubari'].avgReadTimeSec % 60}s</span>
            </div>
          </div>
        </div>

        {/* Donut Card 2: Ranting Kata */}
        <div className="bg-white rounded-2xl p-6 border-2 border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319] text-center space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-[#2D2319] uppercase tracking-tight">
              Ranting Kata
            </h3>
            <span className="bg-[#FEF3C7] text-[#92400E] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border border-[#D97706]/40">
              English Vocab ({dailyEnglishProgress.completedCount}/5)
            </span>
          </div>

          {renderDonut(habitStats['ranting-kata'].accuracy, '#D97706', '#10B981')}

          <div className="space-y-1.5 text-xs text-[#4A3B2C] font-bold text-left max-w-xs mx-auto pt-3 border-t-2 border-slate-100">
            <div className="flex items-center justify-between">
              <span>🎯 Rata-rata Akurasi Bacaan:</span>
              <strong className="text-[#D97706]">{habitStats['ranting-kata'].accuracy}%</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>📚 Ketepatan Kosakata:</span>
              <strong className="text-[#047857]">{habitStats['ranting-kata'].vocabAccuracy}%</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>⏰ Rata-rata Pengerjaan:</span>
              <span>{Math.round(habitStats['ranting-kata'].avgQuizTimeSec / 60)}m {habitStats['ranting-kata'].avgQuizTimeSec % 60}s</span>
            </div>
          </div>
        </div>

        {/* Donut Card 3: Lingkar Tahun */}
        <div className="bg-white rounded-2xl p-6 border-2 border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319] text-center space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-[#2D2319] uppercase tracking-tight">
              Lingkar Tahun
            </h3>
            <span className="bg-[#F1EAD9] text-[#78350F] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border border-[#8C6B4F]/40">
              Mental Math ({dailyMentalMathProgress.completedCount}/10)
            </span>
          </div>

          {renderDonut(habitStats['lingkar-tahun'].accuracy, '#B45309', '#F59E0B')}

          <div className="space-y-1.5 text-xs text-[#4A3B2C] font-bold text-left max-w-xs mx-auto pt-3 border-t-2 border-slate-100">
            <div className="flex items-center justify-between">
              <span>🎯 Rata-rata Akurasi Logika:</span>
              <strong className="text-[#B45309]">{habitStats['lingkar-tahun'].accuracy}%</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>⏰ Rata-rata Waktu Selesai:</span>
              <span>{Math.round(habitStats['lingkar-tahun'].avgSolvingTimeSec / 60)}m {habitStats['lingkar-tahun'].avgSolvingTimeSec % 60}s</span>
            </div>
            <div className="flex items-center justify-between">
              <span>🪜 Target Tangga Harian:</span>
              <strong className="text-[#047857]">10 / 10 Soal</strong>
            </div>
          </div>
        </div>
      </div>

      {/* 30-Day Activity Consistency Calendar */}
      <div className="bg-white rounded-2xl p-6 border-2 border-[#2D2319] shadow-[4px_4px_0px_0px_#2D2319] space-y-4 max-w-lg mx-auto">
        <h3 className="text-base font-black text-[#2D2319] text-center uppercase tracking-tight">
          Konsistensi Belajar 30 Hari Terakhir
        </h3>

        {/* Month Navigation */}
        <div className="flex items-center justify-between px-4 py-1 text-sm font-black text-[#2D2319]">
          <button className="p-1 text-slate-500 hover:text-slate-900 cursor-pointer">
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <span>Agustus 2026</span>
          <button className="p-1 text-slate-500 hover:text-slate-900 cursor-pointer">
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 text-center text-xs">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="font-black text-slate-400 py-1">
              {day}
            </div>
          ))}

          {calendarDays.map((cd, i) => (
            <div
              key={i}
              className={`h-9 flex items-center justify-center rounded-xl font-bold text-xs transition-all ${
                cd.active
                  ? 'bg-[#10B981] text-white font-black border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                  : cd.isCurrentMonth
                  ? 'text-[#2D2319] hover:bg-[#FAF6EE]'
                  : 'text-slate-300'
              }`}
            >
              {cd.num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
