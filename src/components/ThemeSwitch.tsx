import React from 'react';
import { useHabit } from '../context/HabitContext';
import { Waves, Trees, SunMedium } from 'lucide-react';

interface ThemeSwitchProps {
  compact?: boolean;
  showLabel?: boolean;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ compact = false, showLabel = true }) => {
  const { theme, toggleTheme } = useHabit();
  const isCoastal = theme === 'coastal';

  return (
    <div className="flex items-center gap-2">
      {showLabel && !compact && (
        <span className="text-[11px] font-black uppercase text-[#1E293B] hidden lg:inline-block tracking-tight">
          {isCoastal ? '🌊 Tema Biru Laut' : '🍀 Tema Hutan'}
        </span>
      )}

      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Ganti Tema Warna (Biru Laut / Hutan)"
        title={isCoastal ? 'Ganti ke Tema Hutan (Forest)' : 'Ganti ke Tema Biru Laut (Ocean Coastal)'}
        className={`relative inline-flex items-center rounded-full border-2 border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B] cursor-pointer transition-all duration-300 focus:outline-none select-none active:translate-y-0.5 ${
          isCoastal ? 'bg-[#3B6D8C]/20 hover:bg-[#3B6D8C]/30' : 'bg-[#E9EDC9] hover:bg-[#CCD5AE]'
        } ${compact ? 'w-14 h-7 p-0.5' : 'w-18 h-8 p-1'}`}
      >
        {/* Left icon: Forest */}
        <span className={`absolute left-1.5 flex items-center justify-center text-[10px] sm:text-xs transition-opacity duration-200 ${isCoastal ? 'opacity-40' : 'opacity-100'}`}>
          🌿
        </span>

        {/* Right icon: Coastal Beach */}
        <span className={`absolute right-1.5 flex items-center justify-center text-[10px] sm:text-xs transition-opacity duration-200 ${isCoastal ? 'opacity-100' : 'opacity-40'}`}>
          🌊
        </span>

        {/* Tactile Sliding Switch Knob */}
        <div
          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#1E293B] shadow-[1px_1px_0px_0px_#1E293B] flex items-center justify-center text-[10px] transform transition-transform duration-300 ease-out z-10 ${
            isCoastal
              ? 'translate-x-7 sm:translate-x-9 bg-[#3B6D8C] text-white'
              : 'translate-x-0 bg-[#709752] text-white'
          }`}
        >
          {isCoastal ? (
            <Waves className="w-3 h-3 stroke-[2.5]" />
          ) : (
            <Trees className="w-3 h-3 stroke-[2.5]" />
          )}
        </div>
      </button>
    </div>
  );
};
