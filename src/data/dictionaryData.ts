import { DictionaryEntry } from '../types';
import { oxfordPart1 } from './oxfordPart1';
import { oxfordPart2 } from './oxfordPart2';
import { oxfordPart3 } from './oxfordPart3';
import { oxfordPart4 } from './oxfordPart4';

export const OXFORD_PART_1 = oxfordPart1;
export const OXFORD_PART_2 = oxfordPart2;
export const OXFORD_PART_3 = oxfordPart3;
export const OXFORD_PART_4 = oxfordPart4;

export const DICTIONARY_ENTRIES: DictionaryEntry[] = [
  ...oxfordPart1,
  ...oxfordPart2,
  ...oxfordPart3,
  ...oxfordPart4,
];

export const oxford1040Vocabulary = DICTIONARY_ENTRIES;

export default DICTIONARY_ENTRIES;
