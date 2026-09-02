import React from 'react';
import { Clock, BookOpen, Flame, Award, CheckCircle2, Timer, Zap } from 'lucide-react';
import { useHabit } from '../context/HabitContext';

export const ProgressHabitView: React.FC = () => {
  const {
    progress,
    completionRate,
    completedCountToday,
    overallAccuracy,
    totalArticlesRead,
    habitStats,
    dailyIndonesianProgress,
    dailyEnglishProgress,
    dailyMentalMathProgress,
    theme
  } = useHabit();

  const isCoastal = theme === 'coastal';

  const daysOfWeek = [
    { label: 'Rab', active: false },
    { label: 'Kam', active: false },
    { label: 'Jum', active: false },
    { label: 'Sab', active: false },
    { label: 'Min', active: false },
    { label: 'Sen', active: false },
    { label: 'Sel', active: progress.streak > 0 }
  ];

  // Helper for Donut Circle SVG
  const renderDonut = (
    percentage: number,
    colorPrimary = isCoastal ? '#4A7C9B' : '#709752',
    colorSecondary = isCoastal ? '#94A3B8' : '#DDA15E',
    label = '%'
  ) => {
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
            stroke={isCoastal ? '#E2E8F0' : '#E9EDC9'}
            strokeWidth="16"
            fill="transparent"
          />
          {/* Secondary contrast slice */}
          {percentage > 0 && (
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
          )}
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
          <span className={`text-3xl font-black font-mono tracking-tight ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>
            {percentage}{label}
          </span>
        </div>
      </div>
    );
  };

  const formatSeconds = (sec: number) => {
    if (!sec || sec === 0) return '0m 0s';
    const mins = Math.floor(sec / 60);
    const remaining = sec % 60;
    return `${mins}m ${remaining}s`;
  };

  return (
    <div className="space-y-6">
      {/* Title & Timestamp */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>
            Progress & Analitik Kebiasaan Cloverait
          </h2>
          <div className={`inline-flex items-center gap-1.5 mt-1 text-xs font-bold px-3 py-1 rounded-full border ${
            isCoastal
              ? 'bg-[#EBF1F5] text-[#2C4A6F] border-[#CBD5E1]'
              : 'bg-[#E9EDC9] text-[#3A5A40] border-[#A3B18A]'
          }`}>
            <Clock className="w-3.5 h-3.5" />
            Diperbarui secara real-time
          </div>
        </div>
      </div>

      {/* 4 Big Overview Metric Cards in Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Streak */}
        <div className={`rounded-2xl p-5 border-2 space-y-3 flex flex-col justify-between ${
          isCoastal
            ? 'bg-[#FDFBF7] border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]'
            : 'bg-[#FAEDCD] border-[#283618] shadow-[4px_4px_0px_0px_#283618]'
        }`}>
          <div>
            <div className={`text-[10px] font-black uppercase ${isCoastal ? 'text-slate-500' : 'text-[#8C6B4F]'}`}>Streak Harian</div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className={`text-3xl font-black font-mono ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>{progress.streak}</span>
              <span className={`text-xs font-black uppercase ${isCoastal ? 'text-amber-600' : 'text-[#8C6B4F]'}`}>Hari 🔥</span>
            </div>
          </div>

          <div className={`pt-2 border-t-2 ${isCoastal ? 'border-slate-200' : 'border-[#DDA15E]/40'}`}>
            <div className="grid grid-cols-7 gap-1 text-center">
              {daysOfWeek.map((d, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black transition-all border ${
                      d.active
                        ? isCoastal
                          ? 'bg-[#3A6B88] text-white border-slate-700 shadow-[1px_1px_0px_0px_rgba(51,65,85,1)]'
                          : 'bg-[#709752] text-white border-[#283618] shadow-[1px_1px_0px_0px_#283618]'
                        : 'bg-white/90 text-slate-400 border-slate-300'
                    }`}
                  >
                    {d.active ? '✓' : ''}
                  </div>
                  <span className={`text-[9px] font-black uppercase ${isCoastal ? 'text-slate-600' : 'text-[#574332]'}`}>{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metric 2: Tingkat Penyelesaian */}
        <div className={`rounded-2xl p-5 border-2 space-y-2 flex flex-col justify-between ${
          isCoastal
            ? 'bg-[#EBF1F5] border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]'
            : 'bg-[#E9EDC9] border-[#283618] shadow-[4px_4px_0px_0px_#283618]'
        }`}>
          <div>
            <div className={`text-[10px] font-black uppercase ${isCoastal ? 'text-[#2C4A6F]' : 'text-[#3A5A40]'}`}>Tingkat Penyelesaian</div>
            <div className={`text-3xl font-black font-mono mt-1 ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>
              {completionRate}%
            </div>
            <div className={`text-xs font-bold pt-0.5 ${isCoastal ? 'text-slate-600' : 'text-[#4A5759]'}`}>
              {completedCountToday} dari 3 Habit Utama Hari Ini
            </div>
          </div>
          <div className={`w-full bg-white h-3 rounded-full border-2 overflow-hidden p-0.5 mt-2 ${isCoastal ? 'border-slate-700' : 'border-[#283618]'}`}>
            <div
              className={`h-full rounded-full transition-all duration-500 ${isCoastal ? 'bg-[#3A6B88]' : 'bg-[#709752]'}`}
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>

        {/* Metric 3: Akurasi Keseluruhan */}
        <div className={`rounded-2xl p-5 border-2 space-y-2 flex flex-col justify-between ${
          isCoastal
            ? 'bg-[#F4F1DE] border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]'
            : 'bg-[#F4F1DE] border-[#283618] shadow-[4px_4px_0px_0px_#283618]'
        }`}>
          <div>
            <div className={`text-[10px] font-black uppercase ${isCoastal ? 'text-slate-600' : 'text-[#574332]'}`}>Akurasi Keseluruhan</div>
            <div className={`text-3xl font-black font-mono mt-1 ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>
              {overallAccuracy}%
            </div>
          </div>
          <div className={`text-xs font-bold border-t-2 pt-2 ${
            isCoastal
              ? 'text-slate-600 border-slate-300'
              : 'text-[#574332] border-[#283618]/15'
          }`}>
            Rata-rata ketepatan seluruh kuis & latihan
          </div>
        </div>

        {/* Metric 4: Artikel Dibaca */}
        <div className={`rounded-2xl p-5 border-2 space-y-2 flex flex-col justify-between ${
          isCoastal
            ? 'bg-[#E2E8F0] border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]'
            : 'bg-[#CCD5AE] border-[#283618] shadow-[4px_4px_0px_0px_#283618]'
        }`}>
          <div>
            <div className={`text-[10px] font-black uppercase ${isCoastal ? 'text-[#2C4A6F]' : 'text-[#3A5A40]'}`}>Artikel Dibaca</div>
            <div className={`text-3xl font-black font-mono mt-1 ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>
              {totalArticlesRead} <span className={`text-sm font-bold ${isCoastal ? 'text-[#2C4A6F]' : 'text-[#3A5A40]'}`}>Selesai</span>
            </div>
          </div>
          <div className={`text-xs font-bold border-t-2 pt-2 ${
            isCoastal
              ? 'text-slate-700 border-slate-300'
              : 'text-[#283618] border-[#283618]/15'
          }`}>
            Koleksi bebas diakses & diekspor PDF
          </div>
        </div>
      </div>

      {/* 3 Donut/Pie Charts Bento Grid for ALL 3 Habits: Getah Sanubari, Ranting Kata, Lingkar Tahun */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Donut Card 1: Getah Sanubari */}
        <div className={`bg-white rounded-2xl p-6 border-2 text-center space-y-4 ${
          isCoastal
            ? 'border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]'
            : 'border-[#283618] shadow-[4px_4px_0px_0px_#283618]'
        }`}>
          <div className="flex items-center justify-between">
            <h3 className={`text-base font-black uppercase tracking-tight ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>
              Getah Sanubari
            </h3>
            <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border ${
              isCoastal
                ? 'bg-[#EBF1F5] text-[#2C4A6F] border-[#CBD5E1]'
                : 'bg-[#E9EDC9] text-[#3A5A40] border-[#A3B18A]'
            }`}>
              Literasi ID ({dailyIndonesianProgress.completedCount}/5)
            </span>
          </div>

          {renderDonut(
            habitStats['getah-sanubari'].accuracy,
            isCoastal ? '#3A6B88' : '#709752',
            isCoastal ? '#CBD5E1' : '#DDA15E'
          )}

          <div className="space-y-2.5 text-xs font-bold text-left max-w-xs mx-auto pt-3 border-t-2 border-slate-100">
            <div className="flex items-center justify-between">
              <span className={isCoastal ? 'text-slate-600' : 'text-[#283618]'}>⏰ Rata-rata Waktu Baca:</span>
              <strong className={`font-mono ${isCoastal ? 'text-[#2C4A6F]' : 'text-[#3A5A40]'}`}>{formatSeconds(habitStats['getah-sanubari'].avgReadTimeSec)}</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className={isCoastal ? 'text-slate-600' : 'text-[#283618]'}>⏱️ Rata-rata Waktu Pengerjaan Quiz:</span>
              <strong className={`font-mono ${isCoastal ? 'text-[#3A6B88]' : 'text-[#709752]'}`}>{formatSeconds(habitStats['getah-sanubari'].avgQuizTimeSec)}</strong>
            </div>
          </div>
        </div>

        {/* Donut Card 2: Ranting Kata */}
        <div className={`bg-white rounded-2xl p-6 border-2 text-center space-y-4 ${
          isCoastal
            ? 'border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]'
            : 'border-[#283618] shadow-[4px_4px_0px_0px_#283618]'
        }`}>
          <div className="flex items-center justify-between">
            <h3 className={`text-base font-black uppercase tracking-tight ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>
              Ranting Kata
            </h3>
            <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border ${
              isCoastal
                ? 'bg-[#FDFBF7] text-slate-700 border-slate-300'
                : 'bg-[#FAEDCD] text-[#8C6B4F] border-[#DDA15E]'
            }`}>
              English Vocab ({dailyEnglishProgress.completedCount}/5)
            </span>
          </div>

          {renderDonut(
            habitStats['ranting-kata'].accuracy,
            isCoastal ? '#52796F' : '#A3B18A',
            isCoastal ? '#3A6B88' : '#709752'
          )}

          <div className="space-y-2.5 text-xs font-bold text-left max-w-xs mx-auto pt-3 border-t-2 border-slate-100">
            <div className="flex items-center justify-between">
              <span className={isCoastal ? 'text-slate-600' : 'text-[#283618]'}>⏰ Rata-rata Waktu Baca:</span>
              <strong className={`font-mono ${isCoastal ? 'text-[#2C4A6F]' : 'text-[#3A5A40]'}`}>{formatSeconds(habitStats['ranting-kata'].avgReadTimeSec)}</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className={isCoastal ? 'text-slate-600' : 'text-[#283618]'}>📚 Ketepatan Kosakata:</span>
              <strong className={`font-mono ${isCoastal ? 'text-[#3A6B88]' : 'text-[#709752]'}`}>{habitStats['ranting-kata'].vocabAccuracy}%</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className={isCoastal ? 'text-slate-600' : 'text-[#283618]'}>⏱️ Rata-rata Waktu Pengerjaan Quiz:</span>
              <strong className={`font-mono ${isCoastal ? 'text-slate-600' : 'text-[#8C6B4F]'}`}>{formatSeconds(habitStats['ranting-kata'].avgQuizTimeSec)}</strong>
            </div>
          </div>
        </div>

        {/* Donut Card 3: Lingkar Tahun */}
        <div className={`bg-white rounded-2xl p-6 border-2 text-center space-y-4 ${
          isCoastal
            ? 'border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]'
            : 'border-[#283618] shadow-[4px_4px_0px_0px_#283618]'
        }`}>
          <div className="flex items-center justify-between">
            <h3 className={`text-base font-black uppercase tracking-tight ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>
              Lingkar Tahun
            </h3>
            <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border ${
              isCoastal
                ? 'bg-[#E2E8F0] text-slate-800 border-slate-300'
                : 'bg-[#CCD5AE] text-[#283618] border-[#A3B18A]'
            }`}>
              Mental Math ({dailyMentalMathProgress.completedCount}/10)
            </span>
          </div>

          {renderDonut(
            habitStats['lingkar-tahun'].accuracy,
            isCoastal ? '#2C4A6F' : '#588157',
            isCoastal ? '#94A3B8' : '#DDA15E'
          )}

          <div className="space-y-2.5 text-xs font-bold text-left max-w-xs mx-auto pt-3 border-t-2 border-slate-100">
            <div className="flex items-center justify-between">
              <span className={isCoastal ? 'text-slate-600' : 'text-[#283618]'}>🎯 Rata-rata Akurasi:</span>
              <strong className={`font-mono ${isCoastal ? 'text-[#2C4A6F]' : 'text-[#588157]'}`}>{habitStats['lingkar-tahun'].accuracy}%</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className={isCoastal ? 'text-slate-600' : 'text-[#283618]'}>⏰ Rata-rata Waktu Selesai:</span>
              <strong className={`font-mono ${isCoastal ? 'text-[#3A6B88]' : 'text-[#3A5A40]'}`}>{formatSeconds(habitStats['lingkar-tahun'].avgSolvingTimeSec)}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
