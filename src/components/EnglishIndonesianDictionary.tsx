import React, { useState, useEffect, useMemo } from 'react';
import { Search, Volume2, Bookmark, BookmarkCheck, Sparkles, BookOpen, ExternalLink, Filter, HelpCircle, Check, ArrowRight, RotateCw, Trash2, CheckCircle2, ChevronRight, Layers, Eye, EyeOff, Brain } from 'lucide-react';
import { DICTIONARY_ENTRIES } from '../data/dictionaryData';
import { DictionaryEntry, MyVocabItem } from '../types';
import { useHabit } from '../context/HabitContext';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'cloverait_my_vocab_list';

export const EnglishIndonesianDictionary: React.FC = () => {
  const { theme } = useHabit();
  const isCoastal = theme === 'coastal';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedPos, setSelectedPos] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'all' | 'my-vocab' | 'flashcards' | 'my-vocab-quiz'>('all');
  const [selectedWord, setSelectedWord] = useState<DictionaryEntry>(DICTIONARY_ENTRIES[0]);

  // My Vocab Storage
  const [myVocab, setMyVocab] = useState<Record<string, MyVocabItem>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(myVocab));
    } catch (e) {
      console.error(e);
    }
  }, [myVocab]);

  const toggleMyVocab = (entry: DictionaryEntry) => {
    setMyVocab(prev => {
      const copy = { ...prev };
      if (copy[entry.id]) {
        delete copy[entry.id];
      } else {
        copy[entry.id] = {
          wordId: entry.id,
          word: entry.word,
          addedAt: new Date().toISOString(),
          mastered: false
        };
      }
      return copy;
    });
  };

  const toggleMastered = (wordId: string) => {
    setMyVocab(prev => {
      if (!prev[wordId]) return prev;
      return {
        ...prev,
        [wordId]: {
          ...prev[wordId],
          mastered: !prev[wordId].mastered
        }
      };
    });
  };

  // Text to speech
  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Filtered entries
  const filteredEntries = useMemo(() => {
    return DICTIONARY_ENTRIES.filter(item => {
      // Tab filter
      if (activeTab === 'my-vocab' && !myVocab[item.id]) {
        return false;
      }

      // Level filter
      if (selectedLevel !== 'all' && item.level !== selectedLevel) {
        return false;
      }

      // POS filter
      if (selectedPos !== 'all' && item.partOfSpeech.toLowerCase() !== selectedPos.toLowerCase()) {
        return false;
      }

      // Search term
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const matchesWord = item.word.toLowerCase().includes(query);
        const matchesTranslation = item.indonesianTranslation.toLowerCase().includes(query);
        const matchesDef = item.detailedDefinition.indonesian.toLowerCase().includes(query);
        const matchesSyn = item.synonyms.some(s => s.toLowerCase().includes(query));
        return matchesWord || matchesTranslation || matchesDef || matchesSyn;
      }

      return true;
    });
  }, [searchTerm, selectedLevel, selectedPos, activeTab, myVocab]);

  // Flashcards state
  const myVocabEntries = useMemo(() => {
    return DICTIONARY_ENTRIES.filter(item => Boolean(myVocab[item.id]));
  }, [myVocab]);

  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // My Vocab Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuizItem = myVocabEntries[quizIndex % (myVocabEntries.length || 1)];

  const quizOptions = useMemo(() => {
    if (!currentQuizItem) return [];
    const correct = currentQuizItem.indonesianTranslation.split('/')[0].trim();
    const otherOptions = DICTIONARY_ENTRIES
      .filter(e => e.id !== currentQuizItem.id)
      .map(e => e.indonesianTranslation.split('/')[0].trim())
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    return [correct, ...otherOptions].sort(() => Math.random() - 0.5);
  }, [currentQuizItem]);

  const handleQuizAnswer = (option: string) => {
    if (quizSelectedOption !== null) return;
    setQuizSelectedOption(option);
    const correct = currentQuizItem.indonesianTranslation.split('/')[0].trim();
    if (option === correct) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    if (quizIndex + 1 >= Math.min(myVocabEntries.length, 10)) {
      setQuizFinished(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#709752', '#CCD5AE', '#DDA15E']
      });
    } else {
      setQuizIndex(prev => prev + 1);
      setQuizSelectedOption(null);
    }
  };

  const myVocabCount = Object.keys(myVocab).length;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className={`rounded-2xl p-6 sm:p-8 border-2 space-y-3 ${
        isCoastal
          ? 'bg-[#EBF1F5] text-slate-800 border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]'
          : 'bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[4px_4px_0px_0px_#283618]'
      }`}>
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border text-xs font-black tracking-widest uppercase ${
          isCoastal ? 'border-slate-700 text-[#2C4A6F]' : 'border-[#283618] text-[#3A5A40]'
        }`}>
          <BookOpen className={`w-3.5 h-3.5 stroke-[2.5] ${isCoastal ? 'text-[#3A6B88]' : 'text-[#588157]'}`} />
          KAMUS LENGKAP & KOLEKSI MY VOCAB
        </div>
        <h1 className={`text-2xl sm:text-3xl font-black leading-snug uppercase tracking-tight ${
          isCoastal ? 'text-slate-800' : 'text-[#283618]'
        }`}>
          Kamus Inggris - Indonesia & Personal Vocabulary
        </h1>
        <p className={`text-xs sm:text-sm font-bold leading-relaxed max-w-2xl ${
          isCoastal ? 'text-slate-600' : 'text-[#3A5A40]'
        }`}>
          Eksplorasi ribuan kosakata lengkap dengan definisi mendalam, pelafalan audio TTS, padanan kata (similar words), sinonim, antonim, serta contoh kalimat kontekstual. Simpan kata-kata sulit ke dalam koleksi 'My Vocab' untuk latihan intensif.
        </p>

        {/* Quick Links to External Dictionaries */}
        <div className="flex items-center gap-2 pt-2 flex-wrap text-xs">
          <span className={`font-bold ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>Tautan Kamus Resmi:</span>
          <a
            href="https://www.babla.co.id/bahasa-inggris-bahasa-indonesia/"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border font-black transition-colors ${
              isCoastal
                ? 'border-slate-700 text-slate-800 hover:bg-slate-100'
                : 'border-[#283618] text-[#283618] hover:bg-[#FAEDCD]'
            }`}
          >
            <span>Bab.la (EN-ID)</span>
            <ExternalLink className={`w-3 h-3 ${isCoastal ? 'text-[#3A6B88]' : 'text-[#709752]'}`} />
          </a>
          <a
            href="https://dictionary.cambridge.org/dictionary/english-indonesian/"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border font-black transition-colors ${
              isCoastal
                ? 'border-slate-700 text-slate-800 hover:bg-slate-100'
                : 'border-[#283618] text-[#283618] hover:bg-[#FAEDCD]'
            }`}
          >
            <span>Cambridge Dictionary</span>
            <ExternalLink className={`w-3 h-3 ${isCoastal ? 'text-[#3A6B88]' : 'text-[#709752]'}`} />
          </a>
          <a
            href="https://kbbi.kemdikbud.go.id/"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border font-black transition-colors ${
              isCoastal
                ? 'border-slate-700 text-slate-800 hover:bg-slate-100'
                : 'border-[#283618] text-[#283618] hover:bg-[#FAEDCD]'
            }`}
          >
            <span>KBBI Daring</span>
            <ExternalLink className={`w-3 h-3 ${isCoastal ? 'text-[#3A6B88]' : 'text-[#709752]'}`} />
          </a>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <div className={`bg-white p-2 rounded-2xl border-2 flex flex-wrap items-center justify-between gap-3 ${
        isCoastal ? 'border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]' : 'border-[#283618] shadow-[3px_3px_0px_0px_#283618]'
      }`}>
        <div className={`flex p-1 rounded-xl border gap-1 flex-wrap ${
          isCoastal ? 'bg-[#F1F5F9] border-slate-300' : 'bg-[#FAEDCD] border-[#283618]'
        }`}>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-2 rounded-lg text-xs font-black uppercase transition-all cursor-pointer ${
              activeTab === 'all'
                ? isCoastal
                  ? 'bg-[#3A6B88] text-white border border-slate-700 shadow-[1px_1px_0px_0px_rgba(51,65,85,1)]'
                  : 'bg-[#709752] text-white border border-[#283618] shadow-[1px_1px_0px_0px_#283618]'
                : isCoastal
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-[#574332] hover:text-[#283618]'
            }`}
          >
            📖 Semua Kosakata ({DICTIONARY_ENTRIES.length})
          </button>

          <button
            onClick={() => setActiveTab('my-vocab')}
            className={`px-3.5 py-2 rounded-lg text-xs font-black uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'my-vocab'
                ? isCoastal
                  ? 'bg-[#3A6B88] text-white border border-slate-700 shadow-[1px_1px_0px_0px_rgba(51,65,85,1)]'
                  : 'bg-[#709752] text-white border border-[#283618] shadow-[1px_1px_0px_0px_#283618]'
                : isCoastal
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-[#574332] hover:text-[#283618]'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
            <span>Koleksi My Vocab ({myVocabCount})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('flashcards');
              setFlashcardIndex(0);
              setIsFlipped(false);
            }}
            disabled={myVocabCount === 0}
            className={`px-3.5 py-2 rounded-lg text-xs font-black uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'flashcards'
                ? isCoastal
                  ? 'bg-[#3A6B88] text-white border border-slate-700 shadow-[1px_1px_0px_0px_rgba(51,65,85,1)]'
                  : 'bg-[#709752] text-white border border-[#283618] shadow-[1px_1px_0px_0px_#283618]'
                : isCoastal
                  ? 'text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed'
                  : 'text-[#574332] hover:text-[#283618] disabled:opacity-40 disabled:cursor-not-allowed'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Flashcards Drill</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('my-vocab-quiz');
              setQuizIndex(0);
              setQuizSelectedOption(null);
              setQuizScore(0);
              setQuizFinished(false);
            }}
            disabled={myVocabCount < 4}
            className={`px-3.5 py-2 rounded-lg text-xs font-black uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'my-vocab-quiz'
                ? isCoastal
                  ? 'bg-[#3A6B88] text-white border border-slate-700 shadow-[1px_1px_0px_0px_rgba(51,65,85,1)]'
                  : 'bg-[#709752] text-white border border-[#283618] shadow-[1px_1px_0px_0px_#283618]'
                : isCoastal
                  ? 'text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed'
                  : 'text-[#574332] hover:text-[#283618] disabled:opacity-40 disabled:cursor-not-allowed'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>Kuis My Vocab</span>
          </button>
        </div>

        {myVocabCount > 0 && (
          <div className={`text-xs font-bold px-2 ${isCoastal ? 'text-slate-600' : 'text-[#3A5A40]'}`}>
            ⭐ {myVocabCount} kata tersimpan untuk dipelajari
          </div>
        )}
      </div>

      {/* VIEW 1: FLASHCARDS MODE */}
      {activeTab === 'flashcards' && myVocabEntries.length > 0 && (
        <div className={`bg-white rounded-3xl p-6 sm:p-10 border-2 max-w-2xl mx-auto space-y-6 ${
          isCoastal ? 'border-slate-700 shadow-[5px_5px_0px_0px_rgba(51,65,85,1)]' : 'border-[#283618] shadow-[5px_5px_0px_0px_#283618]'
        }`}>
          <div className={`flex items-center justify-between border-b pb-3 text-xs font-black uppercase ${
            isCoastal ? 'text-slate-800' : 'text-[#283618]'
          }`}>
            <span>Flashcard #{flashcardIndex + 1} dari {myVocabEntries.length}</span>
            <span>Klik kartu untuk membalik (Flip)</span>
          </div>

          {/* Flashcard Box */}
          {(() => {
            const card = myVocabEntries[flashcardIndex % myVocabEntries.length];
            return (
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={`min-h-[280px] p-8 rounded-3xl border-2 cursor-pointer transition-all flex flex-col justify-between select-none ${
                  isCoastal
                    ? isFlipped
                      ? 'bg-[#F8FAFC] border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]'
                      : 'bg-[#EBF1F5] border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]'
                    : isFlipped
                      ? 'bg-[#FEFAE0] border-[#283618] shadow-[4px_4px_0px_0px_#283618]'
                      : 'bg-[#E9EDC9] border-[#283618] shadow-[4px_4px_0px_0px_#283618]'
                }`}
              >
                {!isFlipped ? (
                  // Front Side
                  <div className="space-y-4 my-auto text-center">
                    <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded bg-white border ${
                      isCoastal ? 'border-slate-700 text-[#2C4A6F]' : 'border-[#283618] text-[#3A5A40]'
                    }`}>
                      {card.level} • {card.partOfSpeech}
                    </span>
                    <h2 className={`text-3xl sm:text-4xl font-black tracking-tight ${
                      isCoastal ? 'text-slate-800' : 'text-[#283618]'
                    }`}>
                      {card.word}
                    </h2>
                    {card.phonetic && (
                      <p className={`font-mono text-sm ${isCoastal ? 'text-[#3A6B88]' : 'text-[#588157]'}`}>{card.phonetic}</p>
                    )}
                    <div className="pt-2">
                      <span className={`text-xs font-bold bg-white/70 px-3 py-1 rounded-full ${
                        isCoastal ? 'text-slate-600' : 'text-[#574332]'
                      }`}>
                        Tap / Klik untuk melihat arti 🔄
                      </span>
                    </div>
                  </div>
                ) : (
                  // Back Side
                  <div className="space-y-3 my-auto text-left">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-black uppercase ${
                        isCoastal ? 'text-[#2C4A6F]' : 'text-[#709752]'
                      }`}>
                        Terjemahan & Definisi:
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakWord(card.word);
                        }}
                        className={`p-1.5 bg-white rounded-lg border ${
                          isCoastal ? 'border-slate-700 hover:bg-slate-100' : 'border-[#283618] hover:bg-[#FAEDCD]'
                        }`}
                      >
                        <Volume2 className={`w-4 h-4 ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`} />
                      </button>
                    </div>

                    <h3 className={`text-xl font-black ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>
                      {card.indonesianTranslation}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed font-medium bg-white/80 p-3 rounded-xl border ${
                      isCoastal ? 'text-slate-700 border-slate-300' : 'text-[#3A5A40] border-[#283618]/20'
                    }`}>
                      {card.detailedDefinition.indonesian}
                    </p>

                    <div className={`text-xs font-bold ${isCoastal ? 'text-slate-600' : 'text-[#574332]'}`}>
                      <span>Sinonim: </span>
                      <span className={`font-normal ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>{card.synonyms.join(', ')}</span>
                    </div>

                    <div className={`text-xs italic bg-white/60 p-2 rounded-lg ${
                      isCoastal ? 'text-slate-700' : 'text-[#574332]'
                    }`}>
                      "{card.sentenceExample}"
                    </div>
                  </div>
                )}

                <div className={`flex items-center justify-between text-[11px] font-bold pt-4 border-t ${
                  isCoastal ? 'text-slate-500 border-slate-300' : 'text-[#574332] border-[#283618]/20'
                }`}>
                  <span>{isFlipped ? 'Sisi Belakang (Makna)' : 'Sisi Depan (Kata)'}</span>
                  <span>{card.word}</span>
                </div>
              </div>
            );
          })()}

          {/* Flashcard Controls */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setFlashcardIndex(prev => (prev > 0 ? prev - 1 : myVocabEntries.length - 1));
                setIsFlipped(false);
              }}
              className={`px-4 py-2.5 bg-white font-black text-xs uppercase rounded-xl border-2 cursor-pointer ${
                isCoastal
                  ? 'hover:bg-slate-100 text-slate-800 border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)]'
                  : 'hover:bg-[#FAEDCD] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
              }`}
            >
              ← Sebelumnya
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className={`px-5 py-2.5 font-black text-xs uppercase rounded-xl border-2 cursor-pointer flex items-center gap-1.5 ${
                isCoastal
                  ? 'bg-[#EBF1F5] hover:bg-slate-200 text-slate-800 border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)]'
                  : 'bg-[#FAEDCD] hover:bg-[#CCD5AE] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
              Balik Kartu
            </button>

            <button
              onClick={() => {
                setFlashcardIndex(prev => (prev + 1) % myVocabEntries.length);
                setIsFlipped(false);
              }}
              className={`px-4 py-2.5 font-black text-xs uppercase rounded-xl border-2 cursor-pointer text-white ${
                isCoastal
                  ? 'bg-[#3A6B88] hover:bg-[#2C4A6F] border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)]'
                  : 'bg-[#709752] hover:bg-[#588157] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
              }`}
            >
              Selanjutnya →
            </button>
          </div>
        </div>
      )}

      {/* VIEW 2: MY VOCAB QUIZ */}
      {activeTab === 'my-vocab-quiz' && (
        <div className={`bg-white rounded-3xl p-6 sm:p-10 border-2 max-w-2xl mx-auto space-y-6 ${
          isCoastal ? 'border-slate-700 shadow-[5px_5px_0px_0px_rgba(51,65,85,1)]' : 'border-[#283618] shadow-[5px_5px_0px_0px_#283618]'
        }`}>
          {!quizFinished ? (
            <>
              <div className={`flex items-center justify-between border-b pb-3 text-xs font-black uppercase ${
                isCoastal ? 'text-slate-800' : 'text-[#283618]'
              }`}>
                <span>Kuis Kosakata My Vocab #{quizIndex + 1}</span>
                <span>Skor: {quizScore} / {quizIndex}</span>
              </div>

              <div className="text-center py-4 space-y-2">
                <span className={`text-xs font-bold uppercase ${
                  isCoastal ? 'text-slate-500' : 'text-[#8C6B4F]'
                }`}>Apa arti kata ini?</span>
                <div className={`inline-flex items-center gap-3 border-2 px-6 py-3 rounded-2xl ${
                  isCoastal
                    ? 'bg-[#F8FAFC] border-slate-700 shadow-[3px_3px_0px_0px_rgba(51,65,85,1)]'
                    : 'bg-[#FEFAE0] border-[#283618] shadow-[3px_3px_0px_0px_#283618]'
                }`}>
                  <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${
                    isCoastal ? 'text-slate-800' : 'text-[#283618]'
                  }`}>
                    {currentQuizItem?.word}
                  </h2>
                  <button
                    onClick={() => speakWord(currentQuizItem?.word)}
                    className={`p-1.5 bg-white rounded-lg border ${
                      isCoastal ? 'border-slate-700 hover:bg-slate-100' : 'border-[#283618] hover:bg-[#FAEDCD]'
                    }`}
                    title="Dengarkan Pelafalan"
                  >
                    <Volume2 className={`w-4 h-4 ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`} />
                  </button>
                </div>
                {currentQuizItem?.phonetic && (
                  <p className={`font-mono text-xs ${isCoastal ? 'text-[#3A6B88]' : 'text-[#588157]'}`}>{currentQuizItem.phonetic}</p>
                )}
              </div>

              {/* 4 Quiz Options */}
              <div className="grid grid-cols-1 gap-2.5">
                {quizOptions.map((opt, idx) => {
                  const correct = currentQuizItem.indonesianTranslation.split('/')[0].trim();
                  const isCorrect = opt === correct;
                  const isChosen = quizSelectedOption === opt;

                  let style = isCoastal
                    ? 'bg-[#F8FAFC] text-slate-800 border-slate-700 hover:bg-[#EBF1F5] shadow-[2px_2px_0px_0px_rgba(51,65,85,1)]'
                    : 'bg-[#FAF6EE] text-[#283618] border-[#283618] hover:bg-[#E9EDC9] shadow-[2px_2px_0px_0px_#283618]';
                  if (quizSelectedOption !== null) {
                    if (isCorrect) {
                      style = isCoastal
                        ? 'bg-[#3A6B88] text-white border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)]'
                        : 'bg-[#709752] text-white border-[#283618] shadow-[2px_2px_0px_0px_#283618]';
                    } else if (isChosen && !isCorrect) {
                      style = isCoastal
                        ? 'bg-[#E11D48] text-white border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)]'
                        : 'bg-[#E63946] text-white border-[#283618] shadow-[2px_2px_0px_0px_#283618]';
                    } else {
                      style = 'bg-slate-100 text-slate-400 border-slate-300 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={quizSelectedOption !== null}
                      onClick={() => handleQuizAnswer(opt)}
                      className={`p-4 rounded-xl text-sm sm:text-base font-black border-2 text-left flex items-center justify-between transition-all cursor-pointer ${style}`}
                    >
                      <span>{opt}</span>
                      {quizSelectedOption !== null && isCorrect && <CheckCircle2 className="w-5 h-5 text-white" />}
                    </button>
                  );
                })}
              </div>

              {quizSelectedOption !== null && (
                <div className="pt-3 flex justify-end">
                  <button
                    onClick={handleNextQuiz}
                    className={`px-6 py-3 text-white font-black text-xs sm:text-sm uppercase rounded-xl border-2 cursor-pointer flex items-center gap-1.5 ${
                      isCoastal
                        ? 'bg-[#3A6B88] hover:bg-[#2C4A6F] border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)]'
                        : 'bg-[#709752] hover:bg-[#588157] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                    }`}
                  >
                    <span>Lanjut</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="text-4xl">🎉</div>
              <h2 className={`text-2xl font-black uppercase ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>
                Latihan Selesai!
              </h2>
              <p className={`text-sm font-bold ${isCoastal ? 'text-slate-600' : 'text-[#574332]'}`}>
                Skor Anda: <span className={`text-xl font-mono ${isCoastal ? 'text-[#2C4A6F]' : 'text-[#709752]'}`}>{quizScore}</span> dari {Math.min(myVocabEntries.length, 10)} soal.
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setQuizIndex(0);
                    setQuizSelectedOption(null);
                    setQuizScore(0);
                    setQuizFinished(false);
                  }}
                  className={`px-5 py-2.5 text-white font-black text-xs uppercase rounded-xl border-2 cursor-pointer ${
                    isCoastal
                      ? 'bg-[#3A6B88] hover:bg-[#2C4A6F] border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)]'
                      : 'bg-[#709752] hover:bg-[#588157] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                  }`}
                >
                  Ulangi Kuis
                </button>
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-5 py-2.5 bg-white font-black text-xs uppercase rounded-xl border-2 cursor-pointer ${
                    isCoastal
                      ? 'hover:bg-slate-100 text-slate-800 border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)]'
                      : 'hover:bg-[#FAEDCD] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                  }`}
                >
                  Kembali ke Kamus
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* VIEW 3: DICTIONARY BROWSING & SEARCH */}
      {(activeTab === 'all' || activeTab === 'my-vocab') && (
        <div className="space-y-6">
          {/* Search & Filter Bar */}
          <div className={`bg-white rounded-2xl p-4 sm:p-6 border-2 space-y-4 ${
            isCoastal ? 'border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]' : 'border-[#283618] shadow-[4px_4px_0px_0px_#283618]'
          }`}>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Cari kata Inggris atau terjemahan Indonesia (contoh: abandon, canggih, crucial, teliti)..."
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-medium focus:outline-none ${
                    isCoastal
                      ? 'border-slate-700 focus:ring-2 focus:ring-[#3A6B88]'
                      : 'border-[#283618] focus:ring-2 focus:ring-[#709752]'
                  }`}
                />
              </div>

              {/* CEFR Level Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-black">
                <span className={`text-[11px] font-bold pl-1 ${isCoastal ? 'text-slate-600' : 'text-[#574332]'}`}>Level:</span>
                {['all', 'A1', 'A2', 'B1', 'B2', 'C1'].map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-2.5 py-1.5 rounded-lg border uppercase cursor-pointer ${
                      selectedLevel === lvl
                        ? isCoastal
                          ? 'bg-[#3A6B88] text-white border-slate-700'
                          : 'bg-[#709752] text-white border-[#283618]'
                        : isCoastal
                          ? 'bg-[#F8FAFC] text-slate-700 border-slate-300 hover:border-slate-700'
                          : 'bg-[#FAF6EE] text-[#574332] border-[#283618]/20 hover:border-[#283618]'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === 'my-vocab' && myVocabEntries.length === 0 && (
              <div className={`p-4 rounded-xl border text-xs font-bold text-center ${
                isCoastal
                  ? 'bg-[#F1F5F9] border-slate-300 text-slate-600'
                  : 'bg-[#FAEDCD] border-[#283618] text-[#574332]'
              }`}>
                Belum ada kata yang disimpan di 'My Vocab'. Klik ikon bookmark / bintang pada kartu kata di bawah untuk menyimpannya ke koleksi Anda.
              </div>
            )}
          </div>

          {/* Dictionary Content: Split Master-Detail Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Word List */}
            <div className={`lg:col-span-5 bg-white rounded-2xl p-4 border-2 max-h-[640px] overflow-y-auto space-y-2 ${
              isCoastal ? 'border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]' : 'border-[#283618] shadow-[4px_4px_0px_0px_#283618]'
            }`}>
              <div className={`flex items-center justify-between px-2 pb-2 border-b text-xs font-black uppercase ${
                isCoastal ? 'text-slate-600' : 'text-[#574332]'
              }`}>
                <span>Daftar Kosakata ({filteredEntries.length})</span>
                <span>Pilih untuk Detail</span>
              </div>

              {filteredEntries.map(entry => {
                const isSelected = selectedWord?.id === entry.id;
                const isSaved = Boolean(myVocab[entry.id]);

                return (
                  <div
                    key={entry.id}
                    onClick={() => setSelectedWord(entry)}
                    className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between gap-2 ${
                      isSelected
                        ? isCoastal
                          ? 'bg-[#EBF1F5] border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)]'
                          : 'bg-[#E9EDC9] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                        : isCoastal
                          ? 'bg-[#F8FAFC] border-transparent hover:border-slate-300'
                          : 'bg-[#FAF6EE] border-transparent hover:border-[#A3B18A]'
                    }`}
                  >
                    <div className="space-y-0.5 text-left min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`font-black text-sm tracking-tight truncate ${
                          isCoastal ? 'text-slate-800' : 'text-[#283618]'
                        }`}>
                          {entry.word}
                        </span>
                        <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-white border ${
                          isCoastal ? 'border-slate-300 text-[#2C4A6F]' : 'border-[#283618]/30 text-[#3A5A40]'
                        }`}>
                          {entry.level}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium italic">
                          ({entry.partOfSpeech})
                        </span>
                      </div>
                      <p className={`text-xs font-medium truncate ${
                        isCoastal ? 'text-slate-600' : 'text-[#574332]'
                      }`}>
                        {entry.indonesianTranslation}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMyVocab(entry);
                        }}
                        className={`p-1.5 rounded-lg border transition-all ${
                          isSaved
                            ? isCoastal
                              ? 'bg-[#3A6B88] text-white border-slate-700'
                              : 'bg-[#DDA15E] text-white border-[#283618]'
                            : 'bg-white text-slate-400 border-slate-200 hover:text-slate-800'
                        }`}
                        title={isSaved ? 'Hapus dari My Vocab' : 'Simpan ke My Vocab'}
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                );
              })}

              {filteredEntries.length === 0 && (
                <div className="text-center py-8 text-xs text-slate-400 font-medium">
                  Tidak ada kata yang sesuai pencarian.
                </div>
              )}
            </div>

            {/* Right Column: Detailed Word Card */}
            <div className="lg:col-span-7">
              {selectedWord ? (
                <div className={`bg-white rounded-2xl p-6 sm:p-8 border-2 space-y-6 sticky top-20 ${
                  isCoastal ? 'border-slate-700 shadow-[4px_4px_0px_0px_rgba(51,65,85,1)]' : 'border-[#283618] shadow-[4px_4px_0px_0px_#283618]'
                }`}>
                  {/* Top Word Bar */}
                  <div className="flex items-start justify-between border-b-2 border-slate-100 pb-4 gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className={`text-3xl font-black tracking-tight ${
                          isCoastal ? 'text-slate-800' : 'text-[#283618]'
                        }`}>
                          {selectedWord.word}
                        </h2>
                        <button
                          onClick={() => speakWord(selectedWord.word)}
                          className={`p-2 rounded-xl border cursor-pointer ${
                            isCoastal
                              ? 'bg-[#EBF1F5] hover:bg-slate-200 text-slate-800 border-slate-700'
                              : 'bg-[#E9EDC9] hover:bg-[#CCD5AE] text-[#283618] border-[#283618]'
                          }`}
                          title="Dengarkan Pengucapan (Audio TTS)"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <span className={`px-2.5 py-0.5 rounded-md text-xs font-black uppercase border ${
                          isCoastal
                            ? 'bg-[#F1F5F9] text-[#2C4A6F] border-slate-300'
                            : 'bg-[#FAEDCD] text-[#BC6C25] border-[#DDA15E]'
                        }`}>
                          {selectedWord.level}
                        </span>
                        <span className="text-xs font-bold text-slate-500 uppercase">
                          {selectedWord.partOfSpeech}
                        </span>
                      </div>
                      {selectedWord.phonetic && (
                        <p className={`font-mono text-xs ${isCoastal ? 'text-[#3A6B88]' : 'text-[#588157]'}`}>{selectedWord.phonetic}</p>
                      )}
                    </div>

                    <button
                      onClick={() => toggleMyVocab(selectedWord)}
                      className={`px-3 py-2 rounded-xl border-2 text-xs font-black uppercase cursor-pointer flex items-center gap-1.5 transition-all ${
                        myVocab[selectedWord.id]
                          ? isCoastal
                            ? 'bg-[#3A6B88] text-white border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)]'
                            : 'bg-[#DDA15E] text-white border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                          : isCoastal
                            ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-700 shadow-[2px_2px_0px_0px_rgba(51,65,85,1)]'
                            : 'bg-white hover:bg-[#FAEDCD] text-[#283618] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5 fill-current" />
                      <span>{myVocab[selectedWord.id] ? 'Tersimpan di My Vocab' : '+ Simpan ke My Vocab'}</span>
                    </button>
                  </div>

                  {/* Indonesian Translation & Detailed Definitions */}
                  <div className="space-y-3">
                    <div>
                      <span className={`text-[11px] font-black uppercase ${
                        isCoastal ? 'text-slate-500' : 'text-[#8C6B4F]'
                      }`}>
                        Arti Bahasa Indonesia:
                      </span>
                      <p className={`text-base font-black ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>
                        {selectedWord.indonesianTranslation}
                      </p>
                    </div>

                    <div className={`p-4 rounded-xl border space-y-2 ${
                      isCoastal ? 'bg-[#F8FAFC] border-slate-200' : 'bg-[#FAF6EE] border-[#283618]/20'
                    }`}>
                      <div>
                        <span className={`text-[11px] font-black uppercase block ${
                          isCoastal ? 'text-[#2C4A6F]' : 'text-[#3A5A40]'
                        }`}>
                          Definisi Mendalam (Bahasa Indonesia):
                        </span>
                        <p className={`text-xs sm:text-sm leading-relaxed font-medium ${
                          isCoastal ? 'text-slate-800' : 'text-[#283618]'
                        }`}>
                          {selectedWord.detailedDefinition.indonesian}
                        </p>
                      </div>

                      <div className={`pt-2 border-t ${isCoastal ? 'border-slate-200' : 'border-[#283618]/10'}`}>
                        <span className={`text-[11px] font-black uppercase block ${
                          isCoastal ? 'text-slate-500' : 'text-[#8C6B4F]'
                        }`}>
                          English Definition:
                        </span>
                        <p className={`text-xs sm:text-sm leading-relaxed italic ${
                          isCoastal ? 'text-slate-600' : 'text-[#574332]'
                        }`}>
                          {selectedWord.detailedDefinition.english}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Synonyms & Antonyms Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className={`p-3.5 rounded-xl border ${
                      isCoastal
                        ? 'bg-[#EBF1F5] border-slate-300'
                        : 'bg-[#E9EDC9]/60 border-[#A3B18A]'
                    }`}>
                      <span className={`text-xs font-black uppercase block mb-1 ${
                        isCoastal ? 'text-[#2C4A6F]' : 'text-[#3A5A40]'
                      }`}>
                        ✓ Sinonim (Synonyms):
                      </span>
                      <p className={`text-xs font-semibold ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>
                        {selectedWord.synonyms.join(', ') || '-'}
                      </p>
                    </div>

                    <div className={`p-3.5 rounded-xl border ${
                      isCoastal
                        ? 'bg-[#F1F5F9] border-slate-300'
                        : 'bg-[#FAEDCD]/60 border-[#DDA15E]'
                    }`}>
                      <span className={`text-xs font-black uppercase block mb-1 ${
                        isCoastal ? 'text-[#3A6B88]' : 'text-[#BC6C25]'
                      }`}>
                        ≠ Antonim (Antonyms):
                      </span>
                      <p className={`text-xs font-semibold ${isCoastal ? 'text-slate-800' : 'text-[#283618]'}`}>
                        {selectedWord.antonyms.join(', ') || '-'}
                      </p>
                    </div>
                  </div>

                  {/* Similar / Related Words */}
                  {selectedWord.similarWords && selectedWord.similarWords.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      <span className={`font-bold ${isCoastal ? 'text-slate-600' : 'text-[#574332]'}`}>Kata Mirip / Berkaitan:</span>
                      {selectedWord.similarWords.map((sim, i) => (
                        <span
                          key={i}
                          className={`px-2.5 py-0.5 rounded-md border font-medium bg-white ${
                            isCoastal ? 'border-slate-300 text-slate-800' : 'border-[#283618]/30 text-[#283618]'
                          }`}
                        >
                          {sim}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Example Sentence & Contextual Paragraph */}
                  <div className="space-y-2 border-t pt-3">
                    <div>
                      <span className={`text-[11px] font-black uppercase block ${
                        isCoastal ? 'text-slate-600' : 'text-[#574332]'
                      }`}>
                        Contoh Kalimat:
                      </span>
                      <p className={`text-xs sm:text-sm italic font-serif bg-white p-3 rounded-xl border ${
                        isCoastal ? 'text-slate-800 border-slate-200' : 'text-[#283618] border-[#283618]/20'
                      }`}>
                        "{selectedWord.sentenceExample}"
                      </p>
                    </div>

                    {selectedWord.paragraphExample && (
                      <div>
                        <span className={`text-[11px] font-black uppercase block ${
                          isCoastal ? 'text-slate-600' : 'text-[#574332]'
                        }`}>
                          Contoh Penggunaan dalam Paragraf / Wacana:
                        </span>
                        <p className={`text-xs sm:text-sm leading-relaxed font-serif p-3.5 rounded-xl border ${
                          isCoastal
                            ? 'bg-[#F8FAFC] text-slate-800 border-slate-200'
                            : 'bg-[#FEFAE0] text-[#3A5A40] border-[#283618]/20'
                        }`}>
                          {selectedWord.paragraphExample}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className={`bg-white rounded-2xl p-12 border-2 text-center text-slate-400 font-medium ${
                  isCoastal ? 'border-slate-700' : 'border-[#283618]'
                }`}>
                  Pilih kata dari daftar di samping untuk melihat rincian lengkapnya.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
