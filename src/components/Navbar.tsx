import React, { useState, useEffect } from 'react';
import { Flame, Sparkles, BookOpen, Gamepad2, Brain, CheckSquare, SpellCheck, PenTool, Search, Download } from 'lucide-react';
import { useHabit } from '../context/HabitContext';
import { CloverMascot } from './CloverMascot';
import { ThemeSwitch } from './ThemeSwitch';

export type MainTab = 'habit' | 'kata-baku' | 'sinonim-antonim' | 'dictionary' | 'sentence-drill' | 'minigames' | 'mental-math' | 'cleaner';

interface NavbarProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { progress, theme } = useHabit();
  const isCoastal = theme === 'coastal';
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsInstalled(true);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      alert('Untuk memasang Cloverait di HP:\n• Android Chrome: Klik menu titik 3 → "Tambahkan ke Layar Utama" / "Install App".\n• iPhone Safari: Klik tombol Share (ikon kotak panah ke atas) → "Add to Home Screen".');
      return;
    }
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  return (
    <header className={`${isCoastal ? 'bg-[#E8EEF3] border-[#1E293B]' : 'bg-[#FEFAE0] border-[#283618]'} border-b-2 sticky top-0 z-40 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Left Brand & Nav Links */}
          <div className="flex items-center gap-3 md:gap-5 min-w-0">
            {/* Bento Brand Logo */}
            <button
              onClick={() => setActiveTab('habit')}
              className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none shrink-0"
            >
              <div className={`${isCoastal ? 'bg-[#3B6D8C] border-[#1E293B]' : 'bg-[#709752] border-[#283618]'} text-white px-2.5 sm:px-3 py-1.5 rounded-xl font-mono font-black tracking-tight text-base sm:text-lg border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] flex items-center gap-1.5 group-hover:translate-y-[-1px] transition-all`}>
                <span className="text-base">{isCoastal ? '🌊' : '🍀'}</span>
                <span className="font-black uppercase tracking-tight text-xs sm:text-base text-white">Cloverait</span>
              </div>
            </button>

            {/* Navigation Menus in Bento pill style */}
            <nav className="hidden md:flex items-center gap-1 text-xs font-black uppercase tracking-tight">
              <button
                onClick={() => setActiveTab('habit')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'habit'
                    ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]')
                    : 'bg-white/80 text-slate-700 border-transparent hover:border-slate-300'
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5" />
                Habit
              </button>

              <button
                onClick={() => setActiveTab('kata-baku')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'kata-baku'
                    ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]')
                    : 'bg-white/80 text-slate-700 border-transparent hover:border-slate-300'
                }`}
              >
                <SpellCheck className="w-3.5 h-3.5" />
                Kata Baku
              </button>

              <button
                onClick={() => setActiveTab('sinonim-antonim')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'sinonim-antonim'
                    ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]')
                    : 'bg-white/80 text-slate-700 border-transparent hover:border-slate-300'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Sinonim / Antonim
              </button>

              <button
                onClick={() => setActiveTab('dictionary')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'dictionary'
                    ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#2D2319]')
                    : 'bg-white/80 text-slate-700 border-transparent hover:border-slate-300'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Kamus & Vocab
              </button>

              <button
                onClick={() => setActiveTab('sentence-drill')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'sentence-drill'
                    ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]')
                    : 'bg-white/80 text-slate-700 border-transparent hover:border-slate-300'
                }`}
              >
                <PenTool className="w-3.5 h-3.5" />
                Latihan Kalimat
              </button>

              <button
                onClick={() => setActiveTab('minigames')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'minigames'
                    ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]')
                    : 'bg-white/80 text-slate-700 border-transparent hover:border-slate-300'
                }`}
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                Cerpen
              </button>

              <button
                onClick={() => setActiveTab('mental-math')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'mental-math'
                    ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]')
                    : 'bg-white/80 text-slate-700 border-transparent hover:border-slate-300'
                }`}
              >
                <Brain className="w-3.5 h-3.5" />
                Math
              </button>

              <button
                onClick={() => setActiveTab('cleaner')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'cleaner'
                    ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B]' : 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]')
                    : 'bg-white/80 text-slate-700 border-transparent hover:border-slate-300'
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                Impor
              </button>
            </nav>
          </div>

          {/* Right Status, Theme Switch & PWA Install Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Theme Toggle Button Switch */}
            <ThemeSwitch compact={false} showLabel={false} />

            {/* Install PWA Button */}
            {!isInstalled && (
              <button
                onClick={handleInstallClick}
                className="hidden sm:flex items-center gap-1.5 bg-white hover:bg-slate-50 text-[#1E293B] px-3 py-1.5 rounded-xl border-2 border-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B] text-xs font-black uppercase cursor-pointer active:translate-y-0.5 transition-all"
                title="Pasang aplikasi di HP / Desktop"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Pasang</span>
              </button>
            )}

            {/* Daily Streak Counter */}
            <div className={`flex items-center gap-1.5 ${isCoastal ? 'bg-[#DDE7EF] border-[#1E293B]' : 'bg-[#FAEDCD] border-[#283618]'} px-2.5 sm:px-3 py-1.5 rounded-xl border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]`}>
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="font-mono font-black text-xs sm:text-sm text-slate-900">
                {progress.streak} <span className="text-[10px] uppercase font-sans font-bold">Hari</span>
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Sub-nav Bar */}
        <div className="md:hidden flex items-center justify-between gap-1 py-2 border-t border-slate-300/40 overflow-x-auto text-[11px] font-black uppercase scrollbar-none">
          <button
            onClick={() => setActiveTab('habit')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'habit' ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] font-black border border-[#1E293B]' : 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]') : 'text-slate-600'}`}
          >
            Habit
          </button>
          <button
            onClick={() => setActiveTab('kata-baku')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'kata-baku' ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] font-black border border-[#1E293B]' : 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]') : 'text-slate-600'}`}
          >
            Baku
          </button>
          <button
            onClick={() => setActiveTab('sinonim-antonim')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'sinonim-antonim' ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] font-black border border-[#1E293B]' : 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]') : 'text-slate-600'}`}
          >
            Sinonim
          </button>
          <button
            onClick={() => setActiveTab('dictionary')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'dictionary' ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] font-black border border-[#1E293B]' : 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]') : 'text-slate-600'}`}
          >
            Kamus
          </button>
          <button
            onClick={() => setActiveTab('sentence-drill')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'sentence-drill' ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] font-black border border-[#1E293B]' : 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]') : 'text-slate-600'}`}
          >
            Kalimat
          </button>
          <button
            onClick={() => setActiveTab('minigames')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'minigames' ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] font-black border border-[#1E293B]' : 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]') : 'text-slate-600'}`}
          >
            Cerpen
          </button>
          <button
            onClick={() => setActiveTab('mental-math')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'mental-math' ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] font-black border border-[#1E293B]' : 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]') : 'text-slate-600'}`}
          >
            Math
          </button>
          <button
            onClick={() => setActiveTab('cleaner')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'cleaner' ? (isCoastal ? 'bg-[#D6E2EC] text-[#1E3A5F] font-black border border-[#1E293B]' : 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]') : 'text-slate-600'}`}
          >
            Impor
          </button>
        </div>
      </div>
    </header>
  );
};

