export type HabitId =
  | 'getah-sanubari'
  | 'ranting-kata'
  | 'lingkar-tahun'
  | 'obat-fokus'
  | 'balon-helium'
  | 'anak-tangga';

export interface IsianQuestion {
  id: string;
  question: string;
  correctAnswers: string[]; // Variations of acceptable answers
  explanation: string;
  hint?: string;
}

export interface TrueFalseQuestion {
  id: string;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface MultipleChoiceQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  type?: 'main_idea' | 'synonym' | 'vocab' | 'inference' | 'theme' | string;
}

export interface VocabItem {
  id?: string;
  word: string;
  phonetic?: string;
  pronunciation?: string;
  partOfSpeech?: string;
  definitionId?: string; // Meaning in Indonesian
  definitionEn?: string; // Meaning in English
  definition?: string;
  indonesianMeaning?: string;
  definitionIndonesian?: string;
  exampleSentence?: string;
}

export interface IndonesianArticle {
  id: string;
  title: string;
  category: 'Lingkungan & Isu Global' | 'Kesehatan & Kedokteran' | 'Sains & Teknologi' | 'Sosial Humaniora' | string;
  subTopic?: string;
  topic?: string;
  source: string;
  sourceUrl?: string;
  wordCount: number;
  estimatedMinutes: number;
  content: string[]; // Paragraphs
  fillInQuestions: IsianQuestion[]; // 5 questions
  trueFalseQuestions: TrueFalseQuestion[]; // 5 questions
  vocabulary?: VocabItem[];
  vocabList?: VocabItem[];
  readingQuiz?: MultipleChoiceQuestion[];
  vocabQuiz?: TrueFalseQuestion[];
}

export interface EnglishArticle {
  id: string;
  title: string;
  category?: string;
  level?: string;
  topic?: string;
  source: string;
  sourceUrl?: string;
  wordCount: number;
  estimatedMinutes: number;
  content: string[]; // Paragraphs
  vocabList?: VocabItem[]; // 10 vocabulary items
  vocabulary?: VocabItem[];
  vocabQuiz: TrueFalseQuestion[]; // 10 true/false questions for vocab meanings
  readingQuiz: MultipleChoiceQuestion[]; // 5 multiple choice questions
}

export interface CerpenItem {
  id: string;
  title: string;
  author: string;
  language: 'id' | 'en';
  source: string;
  sourceUrl?: string;
  wordCount: number;
  synopsis: string;
  content: string[];
  quiz: MultipleChoiceQuestion[]; // 5 questions (main idea, synonym, vocab, inference, theme)
}

export interface MentalMathQuestion {
  id: string;
  prompt: string;
  question: string;
  options: number[];
  correctAnswer: number;
  trickExplanation: string;
  category: string;
  trickName?: string;
  hint?: string;
}

export interface MentalMathGuideTopic {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  steps: {
    title: string;
    explanation: string;
    example: string;
    exampleSteps: string[];
  }[];
  practiceQuestions: {
    question: string;
    answer: number;
    tip: string;
  }[];
}

export interface KataBakuItem {
  id: string;
  baku: string;
  tidakBaku: string;
  explanation: string;
  category: string;
  exampleSentence?: string;
}

export interface SinonimAntonimItem {
  id: string;
  word: string;
  partOfSpeech: string;
  definition: string;
  sinonim: string[];
  antonim: string[];
  exampleSentence: string;
  category?: string;
}

export interface DictionaryEntry {
  id: string;
  word: string;
  partOfSpeech: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | string;
  phonetic?: string;
  indonesianTranslation: string;
  detailedDefinition: {
    indonesian: string;
    english: string;
  };
  similarWords: string[];
  synonyms: string[];
  antonyms: string[];
  sentenceExample: string;
  paragraphExample?: string;
}

export interface MyVocabItem {
  wordId: string;
  word: string;
  addedAt: string;
  notes?: string;
  mastered?: boolean;
}

export interface SentenceDrillItem {
  id: string;
  indonesian: string;
  targetEnglish: string;
  acceptedVariations: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  grammarTopic: string;
  grammarExplanation: string;
  sourceArticleTitle?: string;
  vocabHints: {
    indonesian: string;
    english: string;
    type?: string;
  }[];
}

export interface UserHabitProgress {
  streak: number;
  lastActiveDate: string;
  completedHabitsToday: HabitId[];
  dailyIndonesianCompletedIds?: string[];
  dailyEnglishCompletedIds?: string[];
  dailyMentalMathCompletedCount?: number;
  dailyMentalMathCount?: number;
  completedDates?: string[];
  history?: SessionResult[];
  dailyProgressMap?: {
    [dateStr: string]: {
      indonesianCompletedIds: string[];
      englishCompletedIds: string[];
      mentalMathCount: number;
    };
  };
}

export interface SessionResult {
  id: string;
  habitId: HabitId;
  title: string;
  articleId?: string;
  date: string;
  timestamp?: number | string;
  readingDurationSeconds: number;
  quizDurationSeconds: number;
  totalDurationSeconds: number;
  wordCount: number;
  wpm: number;
  accuracyPercentage: number;
  kem: number;
  totalQuestions: number;
  correctAnswersCount: number;
}
