#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate src/data/oxfordPart1.ts (Letters A-D: 260+ words)"""

import sys
import os
sys.path.insert(0, os.path.abspath('.'))
sys.path.insert(0, os.path.abspath('scripts'))

from scripts.data_part1_full import MERGED_PART1
import json
import re

def main():
    lines = [
        "import { DictionaryEntry } from '../types';",
        "",
        "export const OXFORD_PART_1: DictionaryEntry[] = ["
    ]

    count = 0
    for item in MERGED_PART1[:260]:
        word, pos, lvl, pho, trans, def_id, def_en, sim, syn, ant, sent, para = item
        entry_id = 'dict-' + re.sub(r'[^a-z0-9]+', '-', word.lower()).strip('-')
        
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
        count += 1

    lines.append("];")
    lines.append("")

    with open("src/data/oxfordPart1.ts", "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"Successfully generated src/data/oxfordPart1.ts with {count} entries.")

if __name__ == '__main__':
    main()
