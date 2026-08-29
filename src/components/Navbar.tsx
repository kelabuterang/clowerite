import React, { useState, useEffect } from 'react';
import { Flame, Sparkles, BookOpen, Gamepad2, Brain, CheckSquare, SpellCheck, PenTool, Search, Download } from 'lucide-react';
import { useHabit } from '../context/HabitContext';
import { CloverMascot } from './CloverMascot';

export type MainTab = 'habit' | 'kata-baku' | 'sentence-drill' | 'minigames' | 'mental-math' | 'cleaner';

interface NavbarProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { progress } = useHabit();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode (already installed)
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
      // Guide user on iOS or unsupported browser
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
    <header className="bg-white border-b-2 border-[#2D2319] sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left Brand & Nav Links */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Bento Brand Logo */}
            <button
              onClick={() => setActiveTab('habit')}
              className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            >
              <div className="bg-[#10B981] text-white px-3 py-1.5 rounded-xl font-mono font-black tracking-tight text-lg border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] flex items-center gap-1.5 group-hover:translate-y-[-1px] transition-transform">
                <span className="text-[#FEF3C7] text-base">🍀</span>
                <span className="font-black uppercase tracking-tight text-sm sm:text-base text-[#2D2319]">Cloverait</span>
              </div>
            </button>

            {/* Navigation Menus in Bento pill style */}
            <nav className="hidden md:flex items-center gap-1.5 text-xs font-black uppercase tracking-tight">
              <button
                onClick={() => setActiveTab('habit')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'habit'
                    ? 'bg-[#F59E0B] text-[#2D2319] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                    : 'bg-stone-50 text-[#574332] border-transparent hover:border-stone-300'
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5" />
                Habit
              </button>

              <button
                onClick={() => setActiveTab('kata-baku')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'kata-baku'
                    ? 'bg-[#F59E0B] text-[#2D2319] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                    : 'bg-stone-50 text-[#574332] border-transparent hover:border-stone-300'
                }`}
              >
                <SpellCheck className="w-3.5 h-3.5" />
                Kata Baku KBBI
              </button>

              <button
                onClick={() => setActiveTab('sentence-drill')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'sentence-drill'
                    ? 'bg-[#F59E0B] text-[#2D2319] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                    : 'bg-stone-50 text-[#574332] border-transparent hover:border-stone-300'
                }`}
              >
                <PenTool className="w-3.5 h-3.5" />
                Latihan Kalimat
              </button>

              <button
                onClick={() => setActiveTab('minigames')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'minigames'
                    ? 'bg-[#F59E0B] text-[#2D2319] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                    : 'bg-stone-50 text-[#574332] border-transparent hover:border-stone-300'
                }`}
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                Cerpen
              </button>

              <button
                onClick={() => setActiveTab('mental-math')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'mental-math'
                    ? 'bg-[#F59E0B] text-[#2D2319] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                    : 'bg-stone-50 text-[#574332] border-transparent hover:border-stone-300'
                }`}
              >
                <Brain className="w-3.5 h-3.5" />
                Materi Math
              </button>

              <button
                onClick={() => setActiveTab('cleaner')}
                className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'cleaner'
                    ? 'bg-[#F59E0B] text-[#2D2319] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                    : 'bg-stone-50 text-[#574332] border-transparent hover:border-stone-300'
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                Bersihkan & KEM
              </button>
            </nav>
          </div>

          {/* Right Indicators: Streak & Install Button & Clover Avatar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Install PWA Button (Icon Only) */}
            {!isInstalled && (
              <button
                onClick={handleInstallClick}
                title="Pasang Cloverait di Layar Utama HP / Desktop"
                aria-label="Pasang Aplikasi Cloverait"
                className="bg-[#ECFDF5] hover:bg-[#D1FAE5] text-[#065F46] border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] w-9 h-9 rounded-full sm:rounded-xl flex items-center justify-center cursor-pointer active:translate-y-[1px] transition-all"
              >
                <Download className="w-4 h-4 text-[#047857]" />
              </button>
            )}

            {/* Streak Badge */}
            <div className="bg-[#FEF3C7] px-3 py-1.5 border-2 border-[#2D2319] rounded-full shadow-[2px_2px_0px_0px_#2D2319] flex items-center gap-1.5 text-xs font-black text-[#2D2319]">
              <span className="text-orange-500">🔥</span>
              <span>{progress.streak} Hari</span>
            </div>

            {/* Clover Mascot Avatar */}
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#ECFDF5] border-2 border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319] text-base">
              🍀
            </div>
          </div>
        </div>

        {/* Mobile Submenu bar */}
        <div className="flex md:hidden overflow-x-auto gap-2 pb-2.5 pt-1 scrollbar-none text-xs font-black uppercase tracking-tight">
          <button
            onClick={() => setActiveTab('habit')}
            className={`px-3 py-1 rounded-lg border-2 shrink-0 ${
              activeTab === 'habit'
                ? 'bg-[#F59E0B] text-[#2D2319] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                : 'bg-stone-100 text-[#574332] border-transparent'
            }`}
          >
            Habit
          </button>
          <button
            onClick={() => setActiveTab('kata-baku')}
            className={`px-3 py-1 rounded-lg border-2 shrink-0 ${
              activeTab === 'kata-baku'
                ? 'bg-[#F59E0B] text-[#2D2319] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                : 'bg-stone-100 text-[#574332] border-transparent'
            }`}
          >
            Kata Baku
          </button>
          <button
            onClick={() => setActiveTab('sentence-drill')}
            className={`px-3 py-1 rounded-lg border-2 shrink-0 ${
              activeTab === 'sentence-drill'
                ? 'bg-[#F59E0B] text-[#2D2319] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                : 'bg-stone-100 text-[#574332] border-transparent'
            }`}
          >
            Latihan Kalimat
          </button>
          <button
            onClick={() => setActiveTab('minigames')}
            className={`px-3 py-1 rounded-lg border-2 shrink-0 ${
              activeTab === 'minigames'
                ? 'bg-[#F59E0B] text-[#2D2319] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                : 'bg-stone-100 text-[#574332] border-transparent'
            }`}
          >
            Cerpen
          </button>
          <button
            onClick={() => setActiveTab('mental-math')}
            className={`px-3 py-1 rounded-lg border-2 shrink-0 ${
              activeTab === 'mental-math'
                ? 'bg-[#F59E0B] text-[#2D2319] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                : 'bg-stone-100 text-[#574332] border-transparent'
            }`}
          >
            Mental Math
          </button>
          <button
            onClick={() => setActiveTab('cleaner')}
            className={`px-3 py-1 rounded-lg border-2 shrink-0 ${
              activeTab === 'cleaner'
                ? 'bg-[#F59E0B] text-[#2D2319] border-[#2D2319] shadow-[2px_2px_0px_0px_#2D2319]'
                : 'bg-stone-100 text-[#574332] border-transparent'
            }`}
          >
            Bersihkan & KEM
          </button>
        </div>
      </div>
    </header>
  );
};
