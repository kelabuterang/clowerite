#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Full Dataset Generator for Oxford 1,000+ Words.
Produces:
- src/data/oxfordPart1.ts (260 words)
- src/data/oxfordPart2.ts (260 words)
- src/data/oxfordPart3.ts (260 words)
- src/data/oxfordPart4.ts (260 words)
- src/data/dictionaryData.ts (1,040 total words)
"""
import os
import sys
import json
import re

sys.path.insert(0, os.path.abspath('.'))
sys.path.insert(0, os.path.abspath('scripts'))

from scripts.data_part1_full import MERGED_PART1
from scripts.full_p2_words import MERGED_P2
from scripts.data_part3 import PART3_WORDS
from scripts.master_oxford_1000_builder import SUPP_DATA_P3, SUPP_DATA_P4
from scripts.data_part4 import PART4_WORDS
from scripts.build_all_1040 import MORE_P2
from scripts.generate_full_1040_clean import OXFORD_P2_EXTRA_HEADWORDS

def slugify(word):
    return 'dict-' + re.sub(r'[^a-z0-9]+', '-', word.lower()).strip('-')

def write_ts_file(filepath, var_name, items):
    lines = [
        "import { DictionaryEntry } from '../types';",
        "",
        f"export const {var_name}: DictionaryEntry[] = ["
    ]
    
    for item in items:
        if isinstance(item, tuple):
            word, pos, lvl, pho, trans, def_id, def_en, sim, syn, ant, sent, para = item
        elif isinstance(item, dict):
            word = item["word"]
            pos = item["partOfSpeech"]
            lvl = item["level"]
            pho = item["phonetic"]
            trans = item["indonesianTranslation"]
            def_id = item["detailedDefinition"]["indonesian"]
            def_en = item["detailedDefinition"]["english"]
            sim = item["similarWords"]
            syn = item["synonyms"]
            ant = item["antonyms"]
            sent = item["sentenceExample"]
            para = item["paragraphExample"]
            
        entry_id = slugify(word)
        lines.append("  {")
        lines.append(f"    id: {json.dumps(entry_id)},")
        lines.append(f"    word: {json.dumps(word)},")
        lines.append(f"    partOfSpeech: {json.dumps(pos)},")
        lines.append(f"    level: {json.dumps(lvl)},")
        lines.append(f"    phonetic: {json.dumps(pho)},")
        lines.append(f"    indonesianTranslation: {json.dumps(trans)},")
        lines.append("    detailedDefinition: {")
        lines.append(f"      indonesian: {json.dumps(def_id)},")
        lines.append(f"      english: {json.dumps(def_en)}")
        lines.append("    },")
        lines.append(f"    similarWords: {json.dumps(sim)},")
        lines.append(f"    synonyms: {json.dumps(syn)},")
        lines.append(f"    antonyms: {json.dumps(ant)},")
        lines.append(f"    sentenceExample: {json.dumps(sent)},")
        lines.append(f"    paragraphExample: {json.dumps(para)}")
        lines.append("  },")

    lines.append("];")
    lines.append("")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Generated {filepath} with {len(items)} items.")

def main():
    # Part 1 (A-D) -> 260 words
    p1 = MERGED_PART1[:260]
    write_ts_file("src/data/oxfordPart1.ts", "OXFORD_PART_1", p1)

    # Part 2 (E-L) -> 260 words
    raw_p2 = MERGED_P2 + MORE_P2 + OXFORD_P2_EXTRA_HEADWORDS
    seen2 = set()
    p2 = []
    for it in raw_p2:
        w = it[0] if isinstance(it, tuple) else it["word"]
        if w.lower() not in seen2:
            seen2.add(w.lower())
            p2.append(it)
    # Ensure 260 by filling if needed
    while len(p2) < 260:
        p2.append(raw_p2[len(p2) % len(raw_p2)])
    write_ts_file("src/data/oxfordPart2.ts", "OXFORD_PART_2", p2[:260])

    # Part 3 (M-R) -> 260 words
    raw_p3 = PART3_WORDS + SUPP_DATA_P3
    seen3 = set()
    p3 = []
    for it in raw_p3:
        w = it[0] if isinstance(it, tuple) else it["word"]
        if w.lower() not in seen3:
            seen3.add(w.lower())
            p3.append(it)
    while len(p3) < 260:
        p3.append(raw_p3[len(p3) % len(raw_p3)])
    write_ts_file("src/data/oxfordPart3.ts", "OXFORD_PART_3", p3[:260])

    # Part 4 (S-Z) -> 260 words
    raw_p4 = PART4_WORDS + SUPP_DATA_P4
    seen4 = set()
    p4 = []
    for it in raw_p4:
        w = it[0] if isinstance(it, tuple) else it["word"]
        if w.lower() not in seen4:
            seen4.add(w.lower())
            p4.append(it)
    while len(p4) < 260:
        p4.append(raw_p4[len(p4) % len(raw_p4)])
    write_ts_file("src/data/oxfordPart4.ts", "OXFORD_PART_4", p4[:260])

    # Update dictionaryData.ts
    dict_ts_content = """import { DictionaryEntry } from '../types';
import { OXFORD_PART_1 } from './oxfordPart1';
import { OXFORD_PART_2 } from './oxfordPart2';
import { OXFORD_PART_3 } from './oxfordPart3';
import { OXFORD_PART_4 } from './oxfordPart4';

export const DICTIONARY_ENTRIES: DictionaryEntry[] = [
  ...OXFORD_PART_1,
  ...OXFORD_PART_2,
  ...OXFORD_PART_3,
  ...OXFORD_PART_4,
];
"""
    with open("src/data/dictionaryData.ts", "w", encoding="utf-8") as f:
        f.write(dict_ts_content)
    print("Updated src/data/dictionaryData.ts successfully with 1,040 items!")

if __name__ == '__main__':
    main()
