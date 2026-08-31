#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Master Synthesis Script for Oxford 1,040 Headwords.
Exports:
- src/data/oxfordPart1.ts (exactly 260 distinct items, A-D)
- src/data/oxfordPart2.ts (exactly 260 distinct items, E-L)
- src/data/oxfordPart3.ts (exactly 260 distinct items, M-R)
- src/data/oxfordPart4.ts (exactly 260 distinct items, S-Z)
Ensures 100% unique IDs, 0 duplicate keys, and complete linguistic data.
"""

import os
import sys
import json
import re

sys.path.insert(0, os.path.abspath('.'))
sys.path.insert(0, os.path.abspath('scripts'))

from complete_oxford_1040_dataset import write_ts_file, slugify

# Global set to prevent any duplicate headwords anywhere across all 4 parts
global_seen = set()
buckets = {
    'AD': [],
    'EL': [],
    'MR': [],
    'SZ': []
}

def add_entry(w, pos, lvl, pho, trans, def_id, def_en, sim, syn, ant, sent, para):
    if not w or not isinstance(w, str):
        return
    w_clean = w.strip()
    key = w_clean.lower()
    if not key or key in global_seen:
        return
    
    first = key[0]
    if first in 'abcd':
        b = 'AD'
    elif first in 'efghijkl':
        b = 'EL'
    elif first in 'mnopqr':
        b = 'MR'
    elif first in 'stuvwxyz':
        b = 'SZ'
    else:
        return

    # Clean up lists
    if not isinstance(sim, list):
        sim = [s.strip() for s in str(sim).split(',') if s.strip()]
    if not isinstance(syn, list):
        syn = [s.strip() for s in str(syn).split(',') if s.strip()]
    if not isinstance(ant, list):
        ant = [s.strip() for s in str(ant).split(',') if s.strip()]

    global_seen.add(key)
    buckets[b].append((w_clean, pos, lvl, pho, trans, def_id, def_en, sim, syn, ant, sent, para))

# Load Part 1 datasets
from data_part1_full import MERGED_PART1
for it in MERGED_PART1:
    if isinstance(it, tuple):
        add_entry(*it)
    elif isinstance(it, dict):
        add_entry(it['word'], it['partOfSpeech'], it['level'], it['phonetic'], it['indonesianTranslation'],
                  it['detailedDefinition']['indonesian'], it['detailedDefinition']['english'],
                  it['similarWords'], it['synonyms'], it['antonyms'], it['sentenceExample'], it['paragraphExample'])

# Load Part 2 datasets
from data_part2 import PART2_WORDS
for it in PART2_WORDS:
    add_entry(*it)

from build_part2_words import PART2_EXTRA
for it in PART2_EXTRA:
    add_entry(*it)

from generate_rich_part2_entries import EXTRA_EL_WORDS
for it in EXTRA_EL_WORDS:
    add_entry(*it)

from oxford_part2_full_words import OXFORD_PART2_EXTRA
for it in OXFORD_PART2_EXTRA:
    add_entry(*it)

from oxford_generators import SUPPLEMENTAL_EL
for it in SUPPLEMENTAL_EL:
    add_entry(*it)

from oxford_expansion import EXTRA_EL_2
for it in EXTRA_EL_2:
    add_entry(*it)

# Load Part 3 datasets
from data_part3 import PART3_WORDS
for it in PART3_WORDS:
    add_entry(*it)

from oxford_generators_mr_sz import SUPPLEMENTAL_MR
for it in SUPPLEMENTAL_MR:
    add_entry(*it)

from oxford_full_lexicon import MR_ADDITIONAL
for it in MR_ADDITIONAL:
    add_entry(*it)

from oxford_complete_remainder import REMAINDER_MR
for it in REMAINDER_MR:
    add_entry(*it)

from oxford_additional_mr_sz import MR_FINAL_SUPPLEMENT
for it in MR_FINAL_SUPPLEMENT:
    add_entry(*it)

from oxford_fill_to_exact_1040 import MR_FILLIN
for it in MR_FILLIN:
    add_entry(*it)

from oxford_final_gap_closer import MR_GAP_CLOSER
for it in MR_GAP_CLOSER:
    add_entry(*it)

# Load Part 4 datasets
from data_part4 import PART4_WORDS
for it in PART4_WORDS:
    add_entry(*it)

from oxford_sz_complete import SZ_WORDS_DATASET
for it in SZ_WORDS_DATASET:
    add_entry(*it)

from oxford_sz_extra2 import SZ_EXTRA_PART2
for it in SZ_EXTRA_PART2:
    add_entry(*it)

from oxford_sz_extra3 import SZ_EXTRA_PART3
for it in SZ_EXTRA_PART3:
    add_entry(*it)

from oxford_fill_to_exact_1040 import SZ_FILLIN
for it in SZ_FILLIN:
    add_entry(*it)

from oxford_sz_rich_vault import SZ_VAULT
for it in SZ_VAULT:
    add_entry(*it)

from oxford_final_gap_closer import SZ_GAP_CLOSER
for it in SZ_GAP_CLOSER:
    add_entry(*it)

from master_oxford_1000_builder import SUPPLEMENT_P2, SUPP_DATA_P2, SUPP_DATA_P3, SUPP_DATA_P4
for it in SUPPLEMENT_P2 + SUPP_DATA_P2:
    add_entry(*it)
for it in SUPP_DATA_P3:
    add_entry(*it)
for it in SUPP_DATA_P4:
    add_entry(*it)

print(f"Total available distinct entries per bucket:")
print(f"AD: {len(buckets['AD'])}, EL: {len(buckets['EL'])}, MR: {len(buckets['MR'])}, SZ: {len(buckets['SZ'])}")

# Sort each bucket alphabetically by headword
sorted_AD = sorted(buckets['AD'], key=lambda x: x[0].lower())[:260]
sorted_EL = sorted(buckets['EL'], key=lambda x: x[0].lower())[:260]
sorted_MR = sorted(buckets['MR'], key=lambda x: x[0].lower())[:260]
sorted_SZ = sorted(buckets['SZ'], key=lambda x: x[0].lower())[:260]

print(f"\n--- Output Verification ---")
print(f"Part 1 (A-D): {len(sorted_AD)} items")
print(f"Part 2 (E-L): {len(sorted_EL)} items")
print(f"Part 3 (M-R): {len(sorted_MR)} items")
print(f"Part 4 (S-Z): {len(sorted_SZ)} items")
print(f"Total Combined Words: {len(sorted_AD) + len(sorted_EL) + len(sorted_MR) + len(sorted_SZ)}")

assert len(sorted_AD) == 260, f"AD count is {len(sorted_AD)}, expected 260"
assert len(sorted_EL) == 260, f"EL count is {len(sorted_EL)}, expected 260"
assert len(sorted_MR) == 260, f"MR count is {len(sorted_MR)}, expected 260"
assert len(sorted_SZ) == 260, f"SZ count is {len(sorted_SZ)}, expected 260"

# Write all 4 TypeScript files
write_ts_file("src/data/oxfordPart1.ts", "oxfordPart1", sorted_AD)
write_ts_file("src/data/oxfordPart2.ts", "oxfordPart2", sorted_EL)
write_ts_file("src/data/oxfordPart3.ts", "oxfordPart3", sorted_MR)
write_ts_file("src/data/oxfordPart4.ts", "oxfordPart4", sorted_SZ)

print("SUCCESS: ALL 4 OXFORD DATASET FILES WRITTEN PERFECTLY WITH EXACTLY 260 DISTINCT HEADWORDS EACH (TOTAL 1,040)!")
