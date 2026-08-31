#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Full Oxford Dictionary 1,000+ Vocabulary Generator.
Compiles 1,040 authentic Oxford 3000 & 5000 headwords across 4 modular TypeScript files:
- src/data/oxfordPart1.ts (Letters A - D) -> 260 words
- src/data/oxfordPart2.ts (Letters E - L) -> 260 words
- src/data/oxfordPart3.ts (Letters M - R) -> 260 words
- src/data/oxfordPart4.ts (Letters S - Z) -> 260 words
"""
import os
import json
import re

def slugify(word):
    return 'dict-' + re.sub(r'[^a-z0-9]+', '-', word.lower()).strip('-')

print("Starting master Oxford pipeline...")
