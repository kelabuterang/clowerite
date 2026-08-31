#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates the 4 TypeScript dataset files with 1,000+ total Oxford entries.
"""
import os
import json
import re

def create_ts_file(filepath, var_name, entries):
    lines = [
        "import { DictionaryEntry } from '../types';",
        "",
        f"export const {var_name}: DictionaryEntry[] = ["
    ]
    
    for item in entries:
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
        
    lines.append("];")
    lines.append("")
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Wrote {len(entries)} entries to {filepath}")

print("Helper ready")
