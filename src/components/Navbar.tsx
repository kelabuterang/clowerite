import React, { useState, useEffect } from 'react';
import { Flame, Sparkles, BookOpen, Gamepad2, Brain, CheckSquare, SpellCheck, PenTool, Search, Download } from 'lucide-react';
import { useHabit } from '../context/HabitContext';
import { CloverMascot } from './CloverMascot';

export type MainTab = 'habit' | 'kata-baku' | 'sinonim-antonim' | 'dictionary' | 'sentence-drill' | 'minigames' | 'mental-math' | 'cleaner';

interface NavbarProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { progress } = useHabit();
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
    <header className="bg-[#FEFAE0] border-b-2 border-[#283618] sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left Brand & Nav Links */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Bento Brand Logo */}
            <button
              onClick={() => setActiveTab('habit')}
              className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            >
              <div className="bg-[#709752] text-white px-3 py-1.5 rounded-xl font-mono font-black tracking-tight text-lg border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618] flex items-center gap-1.5 group-hover:translate-y-[-1px] transition-transform">
                <span className="text-[#FAEDCD] text-base">🍀</span>
                <span className="font-black uppercase tracking-tight text-sm sm:text-base text-white">Cloverait</span>
              </div>
            </button>

            {/* Navigation Menus in Bento pill style */}
            <nav className="hidden md:flex items-center gap-1.5 text-xs font-black uppercase tracking-tight">
              <button
                onClick={() => setActiveTab('habit')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'habit'
                    ? 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                    : 'bg-white/80 text-[#574332] border-transparent hover:border-[#A3B18A]'
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5" />
                Habit
              </button>

              <button
                onClick={() => setActiveTab('kata-baku')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'kata-baku'
                    ? 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                    : 'bg-white/80 text-[#574332] border-transparent hover:border-[#A3B18A]'
                }`}
              >
                <SpellCheck className="w-3.5 h-3.5" />
                Kata Baku
              </button>

              <button
                onClick={() => setActiveTab('sinonim-antonim')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'sinonim-antonim'
                    ? 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                    : 'bg-white/80 text-[#574332] border-transparent hover:border-[#A3B18A]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Sinonim / Antonim
              </button>

              <button
                onClick={() => setActiveTab('dictionary')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'dictionary'
                    ? 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                    : 'bg-white/80 text-[#574332] border-transparent hover:border-[#A3B18A]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Kamus & Vocab
              </button>

              <button
                onClick={() => setActiveTab('sentence-drill')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'sentence-drill'
                    ? 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                    : 'bg-white/80 text-[#574332] border-transparent hover:border-[#A3B18A]'
                }`}
              >
                <PenTool className="w-3.5 h-3.5" />
                Latihan Kalimat
              </button>

              <button
                onClick={() => setActiveTab('minigames')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'minigames'
                    ? 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                    : 'bg-white/80 text-[#574332] border-transparent hover:border-[#A3B18A]'
                }`}
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                Cerpen
              </button>

              <button
                onClick={() => setActiveTab('mental-math')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'mental-math'
                    ? 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                    : 'bg-white/80 text-[#574332] border-transparent hover:border-[#A3B18A]'
                }`}
              >
                <Brain className="w-3.5 h-3.5" />
                Materi Math
              </button>

              <button
                onClick={() => setActiveTab('cleaner')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'cleaner'
                    ? 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                    : 'bg-white/80 text-[#574332] border-transparent hover:border-[#A3B18A]'
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                Kamus & Generator
              </button>
            </nav>
          </div>

          {/* Right Status & PWA Install Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Install PWA Button */}
            {!isInstalled && (
              <button
                onClick={handleInstallClick}
                className="hidden sm:flex items-center gap-1.5 bg-[#E9EDC9] hover:bg-[#CCD5AE] text-[#283618] px-3 py-1.5 rounded-xl border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618] text-xs font-black uppercase cursor-pointer active:translate-y-0.5 transition-all"
                title="Pasang aplikasi di HP / Desktop"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Pasang App</span>
              </button>
            )}

            {/* Daily Streak Counter */}
            <div className="flex items-center gap-1.5 bg-[#FAEDCD] px-3 py-1.5 rounded-xl border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618]">
              <Flame className="w-4 h-4 text-[#DDA15E] fill-[#DDA15E]" />
              <span className="font-mono font-black text-xs sm:text-sm text-[#283618]">
                {progress.streak} <span className="text-[10px] uppercase font-sans font-bold">Hari</span>
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Sub-nav Bar */}
        <div className="md:hidden flex items-center justify-between gap-1 py-2 border-t border-[#283618]/20 overflow-x-auto text-[11px] font-black uppercase scrollbar-none">
          <button
            onClick={() => setActiveTab('habit')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'habit' ? 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]' : 'text-[#574332]'}`}
          >
            Habit
          </button>
          <button
            onClick={() => setActiveTab('kata-baku')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'kata-baku' ? 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]' : 'text-[#574332]'}`}
          >
            Baku
          </button>
          <button
            onClick={() => setActiveTab('sinonim-antonim')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'sinonim-antonim' ? 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]' : 'text-[#574332]'}`}
          >
            Sinonim
          </button>
          <button
            onClick={() => setActiveTab('dictionary')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'dictionary' ? 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]' : 'text-[#574332]'}`}
          >
            Kamus
          </button>
          <button
            onClick={() => setActiveTab('sentence-drill')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'sentence-drill' ? 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]' : 'text-[#574332]'}`}
          >
            Kalimat
          </button>
          <button
            onClick={() => setActiveTab('minigames')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'minigames' ? 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]' : 'text-[#574332]'}`}
          >
            Cerpen
          </button>
          <button
            onClick={() => setActiveTab('mental-math')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'mental-math' ? 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]' : 'text-[#574332]'}`}
          >
            Math
          </button>
          <button
            onClick={() => setActiveTab('cleaner')}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'cleaner' ? 'bg-[#CCD5AE] text-[#283618] font-black border border-[#283618]' : 'text-[#574332]'}`}
          >
            Impor
          </button>
        </div>
      </div>
    </header>
  );
};
