import React, { useState, useEffect, useMemo } from 'react';
import { Search, Volume2, Bookmark, BookmarkCheck, Sparkles, BookOpen, ExternalLink, Filter, HelpCircle, Check, ArrowRight, RotateCw, Trash2, CheckCircle2, ChevronRight, Layers, Eye, EyeOff, Brain } from 'lucide-react';
import { DICTIONARY_ENTRIES } from '../data/dictionaryData';
import { DictionaryEntry, MyVocabItem } from '../types';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'cloverait_my_vocab_list';

export const EnglishIndonesianDictionary: React.FC = () => {
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
      <div className="bg-[#CCD5AE] text-[#283618] rounded-2xl p-6 sm:p-8 border-2 border-[#283618] shadow-[4px_4px_0px_0px_#283618] space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-[#283618] text-xs font-black tracking-widest uppercase text-[#3A5A40]">
          <BookOpen className="w-3.5 h-3.5 text-[#588157] stroke-[2.5]" />
          KAMUS LENGKAP & KOLEKSI MY VOCAB
        </div>
        <h1 className="text-2xl sm:text-3xl font-black leading-snug uppercase tracking-tight text-[#283618]">
          Kamus Inggris - Indonesia & Personal Vocabulary
        </h1>
        <p className="text-xs sm:text-sm text-[#3A5A40] font-bold leading-relaxed max-w-2xl">
          Eksplorasi ribuan kosakata lengkap dengan definisi mendalam, pelafalan audio TTS, padanan kata (similar words), sinonim, antonim, serta contoh kalimat kontekstual. Simpan kata-kata sulit ke dalam koleksi 'My Vocab' untuk latihan intensif.
        </p>

        {/* Quick Links to External Dictionaries */}
        <div className="flex items-center gap-2 pt-2 flex-wrap text-xs">
          <span className="font-bold text-[#283618]">Tautan Kamus Resmi:</span>
          <a
            href="https://www.babla.co.id/bahasa-inggris-bahasa-indonesia/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-[#283618] font-black text-[#283618] hover:bg-[#FAEDCD] transition-colors"
          >
            <span>Bab.la (EN-ID)</span>
            <ExternalLink className="w-3 h-3 text-[#709752]" />
          </a>
          <a
            href="https://dictionary.cambridge.org/dictionary/english-indonesian/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-[#283618] font-black text-[#283618] hover:bg-[#FAEDCD] transition-colors"
          >
            <span>Cambridge Dictionary</span>
            <ExternalLink className="w-3 h-3 text-[#709752]" />
          </a>
          <a
            href="https://kbbi.kemdikbud.go.id/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-[#283618] font-black text-[#283618] hover:bg-[#FAEDCD] transition-colors"
          >
            <span>KBBI Daring</span>
            <ExternalLink className="w-3 h-3 text-[#709752]" />
          </a>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <div className="bg-white p-2 rounded-2xl border-2 border-[#283618] shadow-[3px_3px_0px_0px_#283618] flex flex-wrap items-center justify-between gap-3">
        <div className="flex bg-[#FAEDCD] p-1 rounded-xl border border-[#283618] gap-1 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-2 rounded-lg text-xs font-black uppercase transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#709752] text-white border border-[#283618] shadow-[1px_1px_0px_0px_#283618]'
                : 'text-[#574332] hover:text-[#283618]'
            }`}
          >
            📖 Semua Kosakata ({DICTIONARY_ENTRIES.length})
          </button>

          <button
            onClick={() => setActiveTab('my-vocab')}
            className={`px-3.5 py-2 rounded-lg text-xs font-black uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'my-vocab'
                ? 'bg-[#709752] text-white border border-[#283618] shadow-[1px_1px_0px_0px_#283618]'
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
                ? 'bg-[#709752] text-white border border-[#283618] shadow-[1px_1px_0px_0px_#283618]'
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
                ? 'bg-[#709752] text-white border border-[#283618] shadow-[1px_1px_0px_0px_#283618]'
                : 'text-[#574332] hover:text-[#283618] disabled:opacity-40 disabled:cursor-not-allowed'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>Kuis My Vocab</span>
          </button>
        </div>

        {myVocabCount > 0 && (
          <div className="text-xs font-bold text-[#3A5A40] px-2">
            ⭐ {myVocabCount} kata tersimpan untuk dipelajari
          </div>
        )}
      </div>

      {/* VIEW 1: FLASHCARDS MODE */}
      {activeTab === 'flashcards' && myVocabEntries.length > 0 && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#283618] shadow-[5px_5px_0px_0px_#283618] max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b pb-3 text-xs font-black uppercase text-[#283618]">
            <span>Flashcard #{flashcardIndex + 1} dari {myVocabEntries.length}</span>
            <span>Klik kartu untuk membalik (Flip)</span>
          </div>

          {/* Flashcard Box */}
          {(() => {
            const card = myVocabEntries[flashcardIndex % myVocabEntries.length];
            return (
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={`min-h-[280px] p-8 rounded-3xl border-2 border-[#283618] shadow-[4px_4px_0px_0px_#283618] cursor-pointer transition-all flex flex-col justify-between select-none ${
                  isFlipped ? 'bg-[#FEFAE0]' : 'bg-[#E9EDC9]'
                }`}
              >
                {!isFlipped ? (
                  // Front Side
                  <div className="space-y-4 my-auto text-center">
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-white border border-[#283618] text-[#3A5A40]">
                      {card.level} • {card.partOfSpeech}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#283618] tracking-tight">
                      {card.word}
                    </h2>
                    {card.phonetic && (
                      <p className="font-mono text-sm text-[#588157]">{card.phonetic}</p>
                    )}
                    <div className="pt-2">
                      <span className="text-xs font-bold text-[#574332] bg-white/70 px-3 py-1 rounded-full">
                        Tap / Klik untuk melihat arti 🔄
                      </span>
                    </div>
                  </div>
                ) : (
                  // Back Side
                  <div className="space-y-3 my-auto text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#709752] uppercase">
                        Terjemahan & Definisi:
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakWord(card.word);
                        }}
                        className="p-1.5 bg-white rounded-lg border border-[#283618] hover:bg-[#FAEDCD]"
                      >
                        <Volume2 className="w-4 h-4 text-[#283618]" />
                      </button>
                    </div>

                    <h3 className="text-xl font-black text-[#283618]">
                      {card.indonesianTranslation}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3A5A40] leading-relaxed font-medium bg-white/80 p-3 rounded-xl border border-[#283618]/20">
                      {card.detailedDefinition.indonesian}
                    </p>

                    <div className="text-xs font-bold text-[#574332]">
                      <span>Sinonim: </span>
                      <span className="text-[#283618] font-normal">{card.synonyms.join(', ')}</span>
                    </div>

                    <div className="text-xs italic text-[#574332] bg-white/60 p-2 rounded-lg">
                      "{card.sentenceExample}"
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-[11px] text-[#574332] font-bold pt-4 border-t border-[#283618]/20">
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
              className="px-4 py-2.5 bg-white hover:bg-[#FAEDCD] text-[#283618] font-black text-xs uppercase rounded-xl border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618] cursor-pointer"
            >
              ← Sebelumnya
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-5 py-2.5 bg-[#FAEDCD] hover:bg-[#CCD5AE] text-[#283618] font-black text-xs uppercase rounded-xl border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618] cursor-pointer flex items-center gap-1.5"
            >
              <RotateCw className="w-3.5 h-3.5" />
              Balik Kartu
            </button>

            <button
              onClick={() => {
                setFlashcardIndex(prev => (prev + 1) % myVocabEntries.length);
                setIsFlipped(false);
              }}
              className="px-4 py-2.5 bg-[#709752] hover:bg-[#588157] text-white font-black text-xs uppercase rounded-xl border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618] cursor-pointer"
            >
              Selanjutnya →
            </button>
          </div>
        </div>
      )}

      {/* VIEW 2: MY VOCAB QUIZ */}
      {activeTab === 'my-vocab-quiz' && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#283618] shadow-[5px_5px_0px_0px_#283618] max-w-2xl mx-auto space-y-6">
          {!quizFinished ? (
            <>
              <div className="flex items-center justify-between border-b pb-3 text-xs font-black uppercase text-[#283618]">
                <span>Kuis Kosakata My Vocab #{quizIndex + 1}</span>
                <span>Skor: {quizScore} / {quizIndex}</span>
              </div>

              <div className="text-center py-4 space-y-2">
                <span className="text-xs font-bold text-[#8C6B4F] uppercase">Apa arti kata ini?</span>
                <div className="inline-flex items-center gap-3 bg-[#FEFAE0] border-2 border-[#283618] px-6 py-3 rounded-2xl shadow-[3px_3px_0px_0px_#283618]">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#283618] tracking-tight">
                    {currentQuizItem?.word}
                  </h2>
                  <button
                    onClick={() => speakWord(currentQuizItem?.word)}
                    className="p-1.5 bg-white hover:bg-[#FAEDCD] rounded-lg border border-[#283618]"
                    title="Dengarkan Pelafalan"
                  >
                    <Volume2 className="w-4 h-4 text-[#283618]" />
                  </button>
                </div>
                {currentQuizItem?.phonetic && (
                  <p className="font-mono text-xs text-[#588157]">{currentQuizItem.phonetic}</p>
                )}
              </div>

              {/* 4 Quiz Options */}
              <div className="grid grid-cols-1 gap-2.5">
                {quizOptions.map((opt, idx) => {
                  const correct = currentQuizItem.indonesianTranslation.split('/')[0].trim();
                  const isCorrect = opt === correct;
                  const isChosen = quizSelectedOption === opt;

                  let style = 'bg-[#FAF6EE] text-[#283618] border-[#283618] hover:bg-[#E9EDC9] shadow-[2px_2px_0px_0px_#283618]';
                  if (quizSelectedOption !== null) {
                    if (isCorrect) {
                      style = 'bg-[#709752] text-white border-[#283618] shadow-[2px_2px_0px_0px_#283618]';
                    } else if (isChosen && !isCorrect) {
                      style = 'bg-[#E63946] text-white border-[#283618] shadow-[2px_2px_0px_0px_#283618]';
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
                    className="px-6 py-3 bg-[#709752] hover:bg-[#588157] text-white font-black text-xs sm:text-sm uppercase rounded-xl border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618] cursor-pointer flex items-center gap-1.5"
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
              <h2 className="text-2xl font-black text-[#283618] uppercase">
                Latihan Selesai!
              </h2>
              <p className="text-sm font-bold text-[#574332]">
                Skor Anda: <span className="text-[#709752] text-xl font-mono">{quizScore}</span> dari {Math.min(myVocabEntries.length, 10)} soal.
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setQuizIndex(0);
                    setQuizSelectedOption(null);
                    setQuizScore(0);
                    setQuizFinished(false);
                  }}
                  className="px-5 py-2.5 bg-[#709752] hover:bg-[#588157] text-white font-black text-xs uppercase rounded-xl border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618] cursor-pointer"
                >
                  Ulangi Kuis
                </button>
                <button
                  onClick={() => setActiveTab('all')}
                  className="px-5 py-2.5 bg-white hover:bg-[#FAEDCD] text-[#283618] font-black text-xs uppercase rounded-xl border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618] cursor-pointer"
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
          <div className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-[#283618] shadow-[4px_4px_0px_0px_#283618] space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Cari kata Inggris atau terjemahan Indonesia (contoh: abandon, canggih, crucial, teliti)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-[#283618] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#709752]"
                />
              </div>

              {/* CEFR Level Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-black">
                <span className="text-[11px] text-[#574332] font-bold pl-1">Level:</span>
                {['all', 'A1', 'A2', 'B1', 'B2', 'C1'].map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-2.5 py-1.5 rounded-lg border uppercase cursor-pointer ${
                      selectedLevel === lvl
                        ? 'bg-[#709752] text-white border-[#283618]'
                        : 'bg-[#FAF6EE] text-[#574332] border-[#283618]/20 hover:border-[#283618]'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === 'my-vocab' && myVocabEntries.length === 0 && (
              <div className="p-4 bg-[#FAEDCD] rounded-xl border border-[#283618] text-xs text-[#574332] font-bold text-center">
                Belum ada kata yang disimpan di 'My Vocab'. Klik ikon bookmark / bintang pada kartu kata di bawah untuk menyimpannya ke koleksi Anda.
              </div>
            )}
          </div>

          {/* Dictionary Content: Split Master-Detail Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Word List */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-4 border-2 border-[#283618] shadow-[4px_4px_0px_0px_#283618] max-h-[640px] overflow-y-auto space-y-2">
              <div className="flex items-center justify-between px-2 pb-2 border-b text-xs font-black text-[#574332] uppercase">
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
                        ? 'bg-[#E9EDC9] border-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                        : 'bg-[#FAF6EE] border-transparent hover:border-[#A3B18A]'
                    }`}
                  >
                    <div className="space-y-0.5 text-left min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-sm text-[#283618] tracking-tight truncate">
                          {entry.word}
                        </span>
                        <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-white border border-[#283618]/30 text-[#3A5A40]">
                          {entry.level}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium italic">
                          ({entry.partOfSpeech})
                        </span>
                      </div>
                      <p className="text-xs text-[#574332] font-medium truncate">
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
                            ? 'bg-[#DDA15E] text-white border-[#283618]'
                            : 'bg-white text-slate-400 border-slate-200 hover:text-[#283618]'
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
                <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#283618] shadow-[4px_4px_0px_0px_#283618] space-y-6 sticky top-20">
                  {/* Top Word Bar */}
                  <div className="flex items-start justify-between border-b-2 border-slate-100 pb-4 gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-3xl font-black text-[#283618] tracking-tight">
                          {selectedWord.word}
                        </h2>
                        <button
                          onClick={() => speakWord(selectedWord.word)}
                          className="p-2 bg-[#E9EDC9] hover:bg-[#CCD5AE] text-[#283618] rounded-xl border border-[#283618] cursor-pointer"
                          title="Dengarkan Pengucapan (Audio TTS)"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <span className="px-2.5 py-0.5 rounded-md bg-[#FAEDCD] text-[#BC6C25] border border-[#DDA15E] text-xs font-black uppercase">
                          {selectedWord.level}
                        </span>
                        <span className="text-xs font-bold text-slate-500 uppercase">
                          {selectedWord.partOfSpeech}
                        </span>
                      </div>
                      {selectedWord.phonetic && (
                        <p className="font-mono text-xs text-[#588157]">{selectedWord.phonetic}</p>
                      )}
                    </div>

                    <button
                      onClick={() => toggleMyVocab(selectedWord)}
                      className={`px-3 py-2 rounded-xl border-2 border-[#283618] text-xs font-black uppercase cursor-pointer flex items-center gap-1.5 transition-all ${
                        myVocab[selectedWord.id]
                          ? 'bg-[#DDA15E] text-white shadow-[2px_2px_0px_0px_#283618]'
                          : 'bg-white hover:bg-[#FAEDCD] text-[#283618] shadow-[2px_2px_0px_0px_#283618]'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5 fill-current" />
                      <span>{myVocab[selectedWord.id] ? 'Tersimpan di My Vocab' : '+ Simpan ke My Vocab'}</span>
                    </button>
                  </div>

                  {/* Indonesian Translation & Detailed Definitions */}
                  <div className="space-y-3">
                    <div>
                      <span className="text-[11px] font-black uppercase text-[#8C6B4F]">
                        Arti Bahasa Indonesia:
                      </span>
                      <p className="text-base font-black text-[#283618]">
                        {selectedWord.indonesianTranslation}
                      </p>
                    </div>

                    <div className="bg-[#FAF6EE] p-4 rounded-xl border border-[#283618]/20 space-y-2">
                      <div>
                        <span className="text-[11px] font-black uppercase text-[#3A5A40] block">
                          Definisi Mendalam (Bahasa Indonesia):
                        </span>
                        <p className="text-xs sm:text-sm text-[#283618] leading-relaxed font-medium">
                          {selectedWord.detailedDefinition.indonesian}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#283618]/10">
                        <span className="text-[11px] font-black uppercase text-[#8C6B4F] block">
                          English Definition:
                        </span>
                        <p className="text-xs sm:text-sm text-[#574332] leading-relaxed italic">
                          {selectedWord.detailedDefinition.english}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Synonyms & Antonyms Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-[#E9EDC9]/60 p-3.5 rounded-xl border border-[#A3B18A]">
                      <span className="text-xs font-black uppercase text-[#3A5A40] block mb-1">
                        ✓ Sinonim (Synonyms):
                      </span>
                      <p className="text-xs font-semibold text-[#283618]">
                        {selectedWord.synonyms.join(', ') || '-'}
                      </p>
                    </div>

                    <div className="bg-[#FAEDCD]/60 p-3.5 rounded-xl border border-[#DDA15E]">
                      <span className="text-xs font-black uppercase text-[#BC6C25] block mb-1">
                        ≠ Antonim (Antonyms):
                      </span>
                      <p className="text-xs font-semibold text-[#283618]">
                        {selectedWord.antonyms.join(', ') || '-'}
                      </p>
                    </div>
                  </div>

                  {/* Similar / Related Words */}
                  {selectedWord.similarWords && selectedWord.similarWords.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      <span className="font-bold text-[#574332]">Kata Mirip / Berkaitan:</span>
                      {selectedWord.similarWords.map((sim, i) => (
                        <span
                          key={i}
                          className="bg-white px-2.5 py-0.5 rounded-md border border-[#283618]/30 font-medium text-[#283618]"
                        >
                          {sim}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Example Sentence & Contextual Paragraph */}
                  <div className="space-y-2 border-t pt-3">
                    <div>
                      <span className="text-[11px] font-black uppercase text-[#574332] block">
                        Contoh Kalimat:
                      </span>
                      <p className="text-xs sm:text-sm italic font-serif text-[#283618] bg-white p-3 rounded-xl border border-[#283618]/20">
                        "{selectedWord.sentenceExample}"
                      </p>
                    </div>

                    {selectedWord.paragraphExample && (
                      <div>
                        <span className="text-[11px] font-black uppercase text-[#574332] block">
                          Contoh Penggunaan dalam Paragraf / Wacana:
                        </span>
                        <p className="text-xs sm:text-sm text-[#3A5A40] leading-relaxed font-serif bg-[#FEFAE0] p-3.5 rounded-xl border border-[#283618]/20">
                          {selectedWord.paragraphExample}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-12 border-2 border-[#283618] text-center text-slate-400 font-medium">
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
