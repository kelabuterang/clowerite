/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HabitProvider } from './context/HabitContext';
import { Navbar, MainTab } from './components/Navbar';
import { HabitDashboard } from './components/HabitDashboard';
import { IndonesianArticleReader } from './components/IndonesianArticleReader';
import { EnglishArticleReader } from './components/EnglishArticleReader';
import { MentalMathTrainer } from './components/MentalMathTrainer';
import { MentalMathGuideView } from './components/MentalMathGuideView';
import { MiniGamesCerpenView } from './components/MiniGamesCerpenView';
import { CustomArticleCleaner } from './components/CustomArticleCleaner';
import { KataBakuQuiz } from './components/KataBakuQuiz';
import { SentenceDrillGame } from './components/SentenceDrillGame';
import { HabitId } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainTab>('habit');
  const [activeHabitTrack, setActiveHabitTrack] = useState<HabitId | null>(null);

  const handleStartHabit = (habitId: HabitId) => {
    setActiveHabitTrack(habitId);
  };

  const handleBackToDashboard = () => {
    setActiveHabitTrack(null);
  };

  return (
    <HabitProvider>
      <div className="min-h-screen bg-[#FFFDF9] text-[#2D2319] flex flex-col font-sans selection:bg-[#FEF3C7] selection:text-[#78350F]">
        {/* Top Navbar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={tab => {
            setActiveTab(tab);
            setActiveHabitTrack(null); // return to top-level view of selected tab
          }}
        />

        {/* Main Content Area */}
        <main className="flex-1 pb-16">
          {/* TAB 1: HABIT (HABIT HARI INI & PROGRESS HABIT) */}
          {activeTab === 'habit' && (
            <>
              {activeHabitTrack === null && (
                <HabitDashboard
                  onStartHabit={handleStartHabit}
                  onNavigateTab={tab => {
                    if (tab === 'kata-baku') setActiveTab('kata-baku');
                    else if (tab === 'sentence-drill') setActiveTab('sentence-drill');
                    else if (tab === 'cerpen') setActiveTab('minigames');
                  }}
                />
              )}

              {(activeHabitTrack === 'getah-sanubari' || activeHabitTrack === 'obat-fokus') && (
                <IndonesianArticleReader onBack={handleBackToDashboard} />
              )}

              {(activeHabitTrack === 'ranting-kata' || activeHabitTrack === 'balon-helium') && (
                <EnglishArticleReader onBack={handleBackToDashboard} />
              )}

              {(activeHabitTrack === 'lingkar-tahun' || activeHabitTrack === 'anak-tangga') && (
                <MentalMathTrainer
                  onBack={handleBackToDashboard}
                  onOpenGuide={() => {
                    setActiveTab('mental-math');
                    setActiveHabitTrack(null);
                  }}
                />
              )}
            </>
          )}

          {/* TAB 2: KATA BAKU KBBI MINI-GAME */}
          {activeTab === 'kata-baku' && (
            <div className="max-w-4xl mx-auto px-4 py-6">
              <KataBakuQuiz onBack={() => setActiveTab('habit')} />
            </div>
          )}

          {/* TAB 3: SENTENCE DRILL ENGLISH MINI-GAME */}
          {activeTab === 'sentence-drill' && (
            <div className="max-w-4xl mx-auto px-4 py-6">
              <SentenceDrillGame onBack={() => setActiveTab('habit')} />
            </div>
          )}

          {/* TAB 4: MINI GAMES (CERPEN BACA PETRA & REEDSY) */}
          {activeTab === 'minigames' && <MiniGamesCerpenView />}

          {/* TAB 5: MATERI MENTAL MATH (WIKIHOW) */}
          {activeTab === 'mental-math' && (
            <MentalMathGuideView
              onStartQuiz={() => {
                setActiveTab('habit');
                setActiveHabitTrack('lingkar-tahun');
              }}
            />
          )}

          {/* TAB 6: BERSIHKAN TEKS & KEM */}
          {activeTab === 'cleaner' && <CustomArticleCleaner />}
        </main>

        {/* Bento Grid Styled Footer */}
        <footer className="border-t-2 border-[#2D2319] bg-white py-6 text-center text-xs text-[#574332] space-y-1.5 mt-auto">
          <div className="flex items-center justify-center gap-2 font-mono font-black uppercase text-[#2D2319]">
            <span className="text-[#10B981]">🍀</span> Cloverait Habit & SpeedMind Engine
          </div>
          <p className="font-semibold text-[#8C6B4F]">
            Latihan WPM, KEM (Kecepatan Efektif Membaca), Vocabulary & Mental Math dengan Tema Earth-Tone Sunset & Mochi Daun Clover.
          </p>
        </footer>
      </div>
    </HabitProvider>
  );
}
