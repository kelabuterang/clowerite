import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { HabitId, SessionResult, UserHabitProgress, IndonesianArticle, EnglishArticle, CerpenItem } from '../types';
import { INDONESIAN_ARTICLES, getDailyIndonesianArticles } from '../data/indonesianArticles';
import { ENGLISH_ARTICLES, getDailyEnglishArticles } from '../data/englishArticles';
import { CERPEN_COLLECTION } from '../data/cerpenData';

export type AppTheme = 'forest' | 'coastal';

interface HabitContextType {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  toggleTheme: () => void;
  progress: UserHabitProgress;
  recordSession: (session: Omit<SessionResult, 'id' | 'timestamp' | 'date'>) => SessionResult;
  isHabitCompletedToday: (habitId: HabitId) => boolean;
  completionRate: number; // 0, 33, 66, 100
  completedCountToday: number; // 0, 1, 2, 3
  overallAccuracy: number; // percentage 0-100
  totalArticlesRead: number;
  dailyIndonesianProgress: { completedCount: number; target: number; completedIds: string[] };
  dailyEnglishProgress: { completedCount: number; target: number; completedIds: string[] };
  dailyMentalMathProgress: { completedCount: number; target: number };
  recordArticleStep: (habitId: 'getah-sanubari' | 'ranting-kata' | 'obat-fokus' | 'balon-helium', articleId: string) => void;
  recordMentalMathStep: (stepCount?: number) => void;
  habitStats: {
    'getah-sanubari': { avgReadTimeSec: number; avgQuizTimeSec: number; accuracy: number; count: number; avgWpm: number; avgKem: number };
    'ranting-kata': { avgReadTimeSec: number; avgQuizTimeSec: number; accuracy: number; count: number; vocabAccuracy: number };
    'lingkar-tahun': { avgSolvingTimeSec: number; accuracy: number; count: number };
    // Backward compatibility aliases
    'obat-fokus': { avgReadTimeSec: number; avgQuizTimeSec: number; accuracy: number; count: number };
    'balon-helium': { avgReadTimeSec: number; avgQuizTimeSec: number; accuracy: number; count: number; vocabAccuracy: number };
    'anak-tangga': { avgSolvingTimeSec: number; accuracy: number; count: number };
  };
  customIndonesianArticles: IndonesianArticle[];
  customEnglishArticles: EnglishArticle[];
  customCerpenArticles: CerpenItem[];
  allIndonesianArticles: IndonesianArticle[];
  allEnglishArticles: EnglishArticle[];
  allCerpenArticles: CerpenItem[];
  addCustomArticle: (type: 'getah-sanubari' | 'ranting-kata' | 'cerpen', article: IndonesianArticle | EnglishArticle | CerpenItem) => void;
  deleteCustomArticle: (type: 'getah-sanubari' | 'ranting-kata' | 'cerpen', articleId: string) => void;
  resetDailyHabitsForTesting: () => void;
  playSuccessSound: () => void;
  triggerCelebration: () => void;
}

const STORAGE_KEY = 'cloverait_habit_progress_v4';
const CUSTOM_ID_KEY = 'cloverait_custom_id_articles_v4';
const CUSTOM_EN_KEY = 'cloverait_custom_en_articles_v4';
const CUSTOM_CERPEN_KEY = 'cloverait_custom_cerpen_articles_v4';

function getTodayString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Initial state with 0 values for all statistics as requested
const initialProgress: UserHabitProgress = {
  streak: 0,
  lastActiveDate: getTodayString(),
  completedHabitsToday: [],
  dailyIndonesianCompletedIds: [],
  dailyEnglishCompletedIds: [],
  dailyMentalMathCompletedCount: 0,
  history: [],
  completedDates: []
};

const HabitContext = createContext<HabitContextType | null>(null);

const THEME_STORAGE_KEY = 'cloverait_app_theme_v1';

export const HabitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<AppTheme>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      return (saved === 'coastal' || saved === 'forest') ? saved : 'forest';
    } catch {
      return 'forest';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
      document.documentElement.setAttribute('data-theme', theme);
      if (theme === 'coastal') {
        document.documentElement.classList.add('theme-coastal');
        document.documentElement.classList.remove('theme-forest');
      } else {
        document.documentElement.classList.add('theme-forest');
        document.documentElement.classList.remove('theme-coastal');
      }
    } catch {
      // ignore
    }
  }, [theme]);

  const setTheme = (newTheme: AppTheme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'forest' ? 'coastal' : 'forest'));
  };

  const [progress, setProgress] = useState<UserHabitProgress>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const today = getTodayString();
        if (parsed.lastActiveDate !== today) {
          return {
            ...parsed,
            lastActiveDate: today,
            completedHabitsToday: [],
            dailyIndonesianCompletedIds: [],
            dailyEnglishCompletedIds: [],
            dailyMentalMathCompletedCount: 0
          };
        }
        return {
          ...parsed,
          dailyIndonesianCompletedIds: parsed.dailyIndonesianCompletedIds || [],
          dailyEnglishCompletedIds: parsed.dailyEnglishCompletedIds || [],
          dailyMentalMathCompletedCount: parsed.dailyMentalMathCompletedCount || 0
        };
      } catch {
        // fallback
      }
    }
    return initialProgress;
  });

  const [customIndonesianArticles, setCustomIndonesianArticles] = useState<IndonesianArticle[]>(() => {
    try {
      const saved = localStorage.getItem(CUSTOM_ID_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [customEnglishArticles, setCustomEnglishArticles] = useState<EnglishArticle[]>(() => {
    try {
      const saved = localStorage.getItem(CUSTOM_EN_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [customCerpenArticles, setCustomCerpenArticles] = useState<CerpenItem[]>(() => {
    try {
      const saved = localStorage.getItem(CUSTOM_CERPEN_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem(CUSTOM_ID_KEY, JSON.stringify(customIndonesianArticles));
  }, [customIndonesianArticles]);

  useEffect(() => {
    localStorage.setItem(CUSTOM_EN_KEY, JSON.stringify(customEnglishArticles));
  }, [customEnglishArticles]);

  useEffect(() => {
    localStorage.setItem(CUSTOM_CERPEN_KEY, JSON.stringify(customCerpenArticles));
  }, [customCerpenArticles]);

  const allIndonesianArticles = useMemo(() => {
    return [...customIndonesianArticles, ...INDONESIAN_ARTICLES];
  }, [customIndonesianArticles]);

  const allEnglishArticles = useMemo(() => {
    return [...customEnglishArticles, ...ENGLISH_ARTICLES];
  }, [customEnglishArticles]);

  const allCerpenArticles = useMemo(() => {
    return [...customCerpenArticles, ...CERPEN_COLLECTION];
  }, [customCerpenArticles]);

  const addCustomArticle = (type: 'getah-sanubari' | 'ranting-kata' | 'cerpen', article: IndonesianArticle | EnglishArticle | CerpenItem) => {
    if (type === 'getah-sanubari') {
      setCustomIndonesianArticles(prev => [article as IndonesianArticle, ...prev]);
    } else if (type === 'ranting-kata') {
      setCustomEnglishArticles(prev => [article as EnglishArticle, ...prev]);
    } else {
      setCustomCerpenArticles(prev => [article as CerpenItem, ...prev]);
    }
  };

  const deleteCustomArticle = (type: 'getah-sanubari' | 'ranting-kata' | 'cerpen', articleId: string) => {
    if (type === 'getah-sanubari') {
      setCustomIndonesianArticles(prev => prev.filter(a => a.id !== articleId));
    } else if (type === 'ranting-kata') {
      setCustomEnglishArticles(prev => prev.filter(a => a.id !== articleId));
    } else {
      setCustomCerpenArticles(prev => prev.filter(a => a.id !== articleId));
    }
  };

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#709752', '#8FA882', '#A3B18A', '#3A5A40', '#DDA15E']
      });
    } catch {
      // ignore
    }
  };

  const playSuccessSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.35);
    } catch {
      // ignore
    }
  };

  const recordArticleStep = (habitId: 'getah-sanubari' | 'ranting-kata' | 'obat-fokus' | 'balon-helium', articleId: string) => {
    setProgress(prev => {
      const isIndonesian = habitId === 'getah-sanubari' || habitId === 'obat-fokus';
      if (isIndonesian) {
        const existing = prev.dailyIndonesianCompletedIds || [];
        if (!existing.includes(articleId)) {
          const updated = [...existing, articleId];
          const habitComplete = updated.length >= 8;
          const completedHabits = habitComplete && !prev.completedHabitsToday.includes('getah-sanubari') && !prev.completedHabitsToday.includes('obat-fokus')
            ? [...prev.completedHabitsToday, 'getah-sanubari']
            : prev.completedHabitsToday;
          return {
            ...prev,
            dailyIndonesianCompletedIds: updated,
            completedHabitsToday: completedHabits
          };
        }
      } else {
        const existing = prev.dailyEnglishCompletedIds || [];
        if (!existing.includes(articleId)) {
          const updated = [...existing, articleId];
          const habitComplete = updated.length >= 5;
          const completedHabits = habitComplete && !prev.completedHabitsToday.includes('ranting-kata') && !prev.completedHabitsToday.includes('balon-helium')
            ? [...prev.completedHabitsToday, 'ranting-kata']
            : prev.completedHabitsToday;
          return {
            ...prev,
            dailyEnglishCompletedIds: updated,
            completedHabitsToday: completedHabits
          };
        }
      }
      return prev;
    });
  };

  const recordMentalMathStep = (stepCount: number = 1) => {
    setProgress(prev => {
      const newCount = Math.min(10, (prev.dailyMentalMathCompletedCount || 0) + stepCount);
      const habitComplete = newCount >= 10;
      const completedHabits = habitComplete && !prev.completedHabitsToday.includes('lingkar-tahun') && !prev.completedHabitsToday.includes('anak-tangga')
        ? [...prev.completedHabitsToday, 'lingkar-tahun']
        : prev.completedHabitsToday;
      return {
        ...prev,
        dailyMentalMathCompletedCount: newCount,
        completedHabitsToday: completedHabits
      };
    });
  };

  const recordSession = (sessionData: Omit<SessionResult, 'id' | 'timestamp' | 'date'>): SessionResult => {
    const today = getTodayString();
    const newSession: SessionResult = {
      ...sessionData,
      id: `sess-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      timestamp: Date.now(),
      date: today
    };

    playSuccessSound();
    triggerCelebration();

    setProgress(prev => {
      const rawHabitId = newSession.habitId;
      const normalizedHabitId: HabitId =
        rawHabitId === 'obat-fokus' ? 'getah-sanubari' :
        rawHabitId === 'balon-helium' ? 'ranting-kata' :
        rawHabitId === 'anak-tangga' ? 'lingkar-tahun' :
        (rawHabitId as HabitId);

      let newDailyIdCompleted = prev.dailyIndonesianCompletedIds || [];
      let newDailyEnCompleted = prev.dailyEnglishCompletedIds || [];
      let newDailyMmCount = prev.dailyMentalMathCompletedCount || 0;

      if (normalizedHabitId === 'getah-sanubari') {
        if (sessionData.articleId && !newDailyIdCompleted.includes(sessionData.articleId)) {
          newDailyIdCompleted = [...newDailyIdCompleted, sessionData.articleId];
        }
      } else if (normalizedHabitId === 'ranting-kata') {
        if (sessionData.articleId && !newDailyEnCompleted.includes(sessionData.articleId)) {
          newDailyEnCompleted = [...newDailyEnCompleted, sessionData.articleId];
        }
      } else if (normalizedHabitId === 'lingkar-tahun') {
        newDailyMmCount = 10;
      }

      const isGetahComplete = newDailyIdCompleted.length >= 8;
      const isRantingComplete = newDailyEnCompleted.length >= 5;
      const isLingkarComplete = newDailyMmCount >= 10;

      const completedSet = new Set(prev.completedHabitsToday);
      if (isGetahComplete) completedSet.add('getah-sanubari');
      if (isRantingComplete) completedSet.add('ranting-kata');
      if (isLingkarComplete) completedSet.add('lingkar-tahun');
      if (normalizedHabitId === 'lingkar-tahun') completedSet.add('lingkar-tahun');

      const newCompletedHabits = Array.from(completedSet);

      const newCompletedDates = prev.completedDates.includes(today)
        ? prev.completedDates
        : [...prev.completedDates, today];

      let updatedStreak = prev.streak;
      if (newCompletedHabits.length >= 3 && prev.completedHabitsToday.length < 3) {
        updatedStreak = Math.max(1, prev.streak + 1);
      } else if (newCompletedHabits.length > 0 && prev.streak === 0) {
        updatedStreak = 1;
      }

      return {
        ...prev,
        lastActiveDate: today,
        streak: updatedStreak,
        dailyIndonesianCompletedIds: newDailyIdCompleted,
        dailyEnglishCompletedIds: newDailyEnCompleted,
        dailyMentalMathCompletedCount: newDailyMmCount,
        completedHabitsToday: newCompletedHabits,
        completedDates: newCompletedDates,
        history: [newSession, ...prev.history]
      };
    });

    return newSession;
  };

  const isHabitCompletedToday = (habitId: HabitId): boolean => {
    if (habitId === 'getah-sanubari' || habitId === 'obat-fokus') {
      return (progress.dailyIndonesianCompletedIds?.length || 0) >= 8 || progress.completedHabitsToday.includes('getah-sanubari') || progress.completedHabitsToday.includes('obat-fokus');
    }
    if (habitId === 'ranting-kata' || habitId === 'balon-helium') {
      return (progress.dailyEnglishCompletedIds?.length || 0) >= 5 || progress.completedHabitsToday.includes('ranting-kata') || progress.completedHabitsToday.includes('balon-helium');
    }
    if (habitId === 'lingkar-tahun' || habitId === 'anak-tangga') {
      return (progress.dailyMentalMathCompletedCount || 0) >= 10 || progress.completedHabitsToday.includes('lingkar-tahun') || progress.completedHabitsToday.includes('anak-tangga');
    }
    return progress.completedHabitsToday.includes(habitId);
  };

  const completedCountToday = ['getah-sanubari', 'ranting-kata', 'lingkar-tahun'].filter(h => isHabitCompletedToday(h as HabitId)).length;
  const completionRate = Math.round((completedCountToday / 3) * 100);

  const dailyIndonesianProgress = {
    completedCount: progress.dailyIndonesianCompletedIds?.length || 0,
    target: 8,
    completedIds: progress.dailyIndonesianCompletedIds || []
  };

  const dailyEnglishProgress = {
    completedCount: progress.dailyEnglishCompletedIds?.length || 0,
    target: 5,
    completedIds: progress.dailyEnglishCompletedIds || []
  };

  const dailyMentalMathProgress = {
    completedCount: progress.dailyMentalMathCompletedCount || 0,
    target: 10
  };

  const { overallAccuracy, totalArticlesRead, habitStats } = useMemo(() => {
    const history = progress.history;
    if (!history || history.length === 0) {
      return {
        overallAccuracy: 0,
        totalArticlesRead: 0,
        habitStats: {
          'getah-sanubari': { avgReadTimeSec: 0, avgQuizTimeSec: 0, accuracy: 0, count: 0, avgWpm: 0, avgKem: 0 },
          'ranting-kata': { avgReadTimeSec: 0, avgQuizTimeSec: 0, accuracy: 0, count: 0, vocabAccuracy: 0 },
          'lingkar-tahun': { avgSolvingTimeSec: 0, accuracy: 0, count: 0 },
          'obat-fokus': { avgReadTimeSec: 0, avgQuizTimeSec: 0, accuracy: 0, count: 0 },
          'balon-helium': { avgReadTimeSec: 0, avgQuizTimeSec: 0, accuracy: 0, count: 0, vocabAccuracy: 0 },
          'anak-tangga': { avgSolvingTimeSec: 0, accuracy: 0, count: 0 }
        }
      };
    }

    let totalQ = 0;
    let totalCorrect = 0;

    const getahList = history.filter(h => h.habitId === 'getah-sanubari' || h.habitId === 'obat-fokus');
    const rantingList = history.filter(h => h.habitId === 'ranting-kata' || h.habitId === 'balon-helium');
    const lingkarList = history.filter(h => h.habitId === 'lingkar-tahun' || h.habitId === 'anak-tangga');
    const cerpenList = history.filter(h => h.habitId === 'cerpen' || h.habitId === 'custom-reader');

    const articlesCount = getahList.length + rantingList.length + cerpenList.length;

    history.forEach(h => {
      totalQ += h.totalQuestions || 0;
      totalCorrect += h.correctAnswersCount || 0;
    });

    const overallAcc = totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0;

    // Getah Sanubari
    const getahReadSec = getahList.length > 0 ? Math.round(getahList.reduce((acc, c) => acc + (c.readingDurationSeconds || 0), 0) / getahList.length) : 0;
    const getahQuizSec = getahList.length > 0 ? Math.round(getahList.reduce((acc, c) => acc + (c.quizDurationSeconds || 0), 0) / getahList.length) : 0;
    const getahAcc = getahList.length > 0 ? Math.round(getahList.reduce((acc, c) => acc + (c.accuracyPercentage || 0), 0) / getahList.length) : 0;
    const getahWpm = getahList.length > 0 ? Math.round(getahList.reduce((acc, c) => acc + (c.wpm || 0), 0) / getahList.length) : 0;
    const getahKem = getahList.length > 0 ? Math.round(getahList.reduce((acc, c) => acc + (c.kem || 0), 0) / getahList.length) : 0;

    // Ranting Kata
    const rantingReadSec = rantingList.length > 0 ? Math.round(rantingList.reduce((acc, c) => acc + (c.readingDurationSeconds || 0), 0) / rantingList.length) : 0;
    const rantingQuizSec = rantingList.length > 0 ? Math.round(rantingList.reduce((acc, c) => acc + (c.quizDurationSeconds || 0), 0) / rantingList.length) : 0;
    const rantingAcc = rantingList.length > 0 ? Math.round(rantingList.reduce((acc, c) => acc + (c.accuracyPercentage || 0), 0) / rantingList.length) : 0;
    const rantingVocabAcc = rantingList.length > 0 ? Math.round(rantingList.reduce((acc, c) => acc + (c.accuracyPercentage || 0), 0) / rantingList.length) : 0;

    // Lingkar Tahun
    const lingkarSolveSec = lingkarList.length > 0 ? Math.round(lingkarList.reduce((acc, c) => acc + (c.totalDurationSeconds || 0), 0) / lingkarList.length) : 0;
    const lingkarAcc = lingkarList.length > 0 ? Math.round(lingkarList.reduce((acc, c) => acc + (c.accuracyPercentage || 0), 0) / lingkarList.length) : 0;

    return {
      overallAccuracy: overallAcc,
      totalArticlesRead: articlesCount,
      habitStats: {
        'getah-sanubari': { avgReadTimeSec: getahReadSec, avgQuizTimeSec: getahQuizSec, accuracy: getahAcc, count: getahList.length, avgWpm: getahWpm, avgKem: getahKem },
        'ranting-kata': { avgReadTimeSec: rantingReadSec, avgQuizTimeSec: rantingQuizSec, accuracy: rantingAcc, count: rantingList.length, vocabAccuracy: rantingVocabAcc },
        'lingkar-tahun': { avgSolvingTimeSec: lingkarSolveSec, accuracy: lingkarAcc, count: lingkarList.length },
        'obat-fokus': { avgReadTimeSec: getahReadSec, avgQuizTimeSec: getahQuizSec, accuracy: getahAcc, count: getahList.length },
        'balon-helium': { avgReadTimeSec: rantingReadSec, avgQuizTimeSec: rantingQuizSec, accuracy: rantingAcc, count: rantingList.length, vocabAccuracy: rantingVocabAcc },
        'anak-tangga': { avgSolvingTimeSec: lingkarSolveSec, accuracy: lingkarAcc, count: lingkarList.length }
      }
    };
  }, [progress.history]);

  const resetDailyHabitsForTesting = () => {
    setProgress(prev => ({
      ...prev,
      completedHabitsToday: [],
      dailyIndonesianCompletedIds: [],
      dailyEnglishCompletedIds: [],
      dailyMentalMathCompletedCount: 0
    }));
  };

  return (
    <HabitContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        progress,
        recordSession,
        isHabitCompletedToday,
        completionRate,
        completedCountToday,
        overallAccuracy,
        totalArticlesRead,
        dailyIndonesianProgress,
        dailyEnglishProgress,
        dailyMentalMathProgress,
        recordArticleStep,
        recordMentalMathStep,
        habitStats,
        customIndonesianArticles,
        customEnglishArticles,
        customCerpenArticles,
        allIndonesianArticles,
        allEnglishArticles,
        allCerpenArticles,
        addCustomArticle,
        deleteCustomArticle,
        resetDailyHabitsForTesting,
        playSuccessSound,
        triggerCelebration
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabit = () => {
  const ctx = useContext(HabitContext);
  if (!ctx) throw new Error('useHabit must be used within HabitProvider');
  return ctx;
};
