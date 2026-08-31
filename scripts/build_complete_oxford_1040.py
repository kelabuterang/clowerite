#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Master 1,040 Oxford Vocabulary Builder.
Generates:
- src/data/oxfordPart1.ts (260 items: A-D)
- src/data/oxfordPart2.ts (260 items: E-L)
- src/data/oxfordPart3.ts (260 items: M-R)
- src/data/oxfordPart4.ts (260 items: S-Z)
And binds them into src/data/dictionaryData.ts (1,040 entries).
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

# Standardized generation helper
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

print("Base setup ready.")
