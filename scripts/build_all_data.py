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
from scripts.data_part2 import PART2_WORDS
from scripts.build_part2_words import PART2_EXTRA
from scripts.generate_oxford_part2_ts import WORDS_PART2
from scripts.generate_complete_1040 import SUPPLEMENT_P2
from scripts.master_oxford_1000_builder import SUPP_DATA_P2, SUPP_DATA_P3, SUPP_DATA_P4
from scripts.data_part3 import PART3_WORDS
from scripts.data_part4 import PART4_WORDS

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
    # Part 1: A-D (260 words)
    p1 = MERGED_PART1[:260]
    write_ts_file("src/data/oxfordPart1.ts", "OXFORD_PART_1", p1)

    # Part 2: E-L
    seen2 = set()
    p2 = []
    for it in WORDS_PART2 + PART2_WORDS + PART2_EXTRA + SUPPLEMENT_P2 + SUPP_DATA_P2:
        w = it[0] if isinstance(it, tuple) else it["word"]
        if w.lower() not in seen2:
            seen2.add(w.lower())
            p2.append(it)
    write_ts_file("src/data/oxfordPart2.ts", "OXFORD_PART_2", p2[:260])

    # Part 3: M-R
    seen3 = set()
    p3 = []
    for it in PART3_WORDS + SUPP_DATA_P3:
        w = it[0] if isinstance(it, tuple) else it["word"]
        if w.lower() not in seen3:
            seen3.add(w.lower())
            p3.append(it)
    write_ts_file("src/data/oxfordPart3.ts", "OXFORD_PART_3", p3[:260])

    # Part 4: S-Z
    seen4 = set()
    p4 = []
    for it in PART4_WORDS + SUPP_DATA_P4:
        w = it[0] if isinstance(it, tuple) else it["word"]
        if w.lower() not in seen4:
            seen4.add(w.lower())
            p4.append(it)
    write_ts_file("src/data/oxfordPart4.ts", "OXFORD_PART_4", p4[:260])

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
    print("Updated src/data/dictionaryData.ts successfully.")

if __name__ == '__main__':
    main()
