#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Complete Oxford 1,040 Headword Database Builder.
Generates 1,040 unique words across 4 TypeScript parts:
- Part 1 (A-D): 260 distinct words
- Part 2 (E-L): 260 distinct words
- Part 3 (M-R): 260 distinct words
- Part 4 (S-Z): 260 distinct words
"""
import os
import sys
import json
import re

sys.path.insert(0, os.path.abspath('.'))
sys.path.insert(0, os.path.abspath('scripts'))

# Helper for slug ID
def slugify(word):
    return 'dict-' + re.sub(r'[^a-z0-9]+', '-', word.lower()).strip('-')

# Standard template generator for TypeScript files
def write_ts_file(filepath, var_name, items):
    lines = [
        "import { DictionaryEntry } from '../types';",
        "",
        f"export const {var_name}: DictionaryEntry[] = ["
    ]
    
    seen_ids = set()
    valid_items = []
    
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

        w_clean = word.strip()
        entry_id = slugify(w_clean)
        
        # Ensure absolute uniqueness of IDs
        if entry_id in seen_ids:
            continue
        seen_ids.add(entry_id)
        valid_items.append((entry_id, w_clean, pos, lvl, pho, trans, def_id, def_en, sim, syn, ant, sent, para))

    for (entry_id, w_clean, pos, lvl, pho, trans, def_id, def_en, sim, syn, ant, sent, para) in valid_items:
        lines.append("  {")
        lines.append(f"    id: {json.dumps(entry_id)},")
        lines.append(f"    word: {json.dumps(w_clean)},")
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
    
    # Export backward-compatible and alternate named identifiers
    if var_name == "oxfordPart1":
        lines.append("export const OXFORD_PART_1 = oxfordPart1;")
        lines.append("export const oxfordWordsPart1 = oxfordPart1;")
    elif var_name == "oxfordPart2":
        lines.append("export const OXFORD_PART_2 = oxfordPart2;")
        lines.append("export const oxfordWordsPart2 = oxfordPart2;")
    elif var_name == "oxfordPart3":
        lines.append("export const OXFORD_PART_3 = oxfordPart3;")
        lines.append("export const oxfordWordsPart3 = oxfordPart3;")
    elif var_name == "oxfordPart4":
        lines.append("export const OXFORD_PART_4 = oxfordPart4;")
        lines.append("export const oxfordWordsPart4 = oxfordPart4;")
    
    lines.append(f"export default {var_name};")
    lines.append("")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Wrote {filepath}: {len(valid_items)} unique items.")
    return len(valid_items)

print("Base helper ready.")
