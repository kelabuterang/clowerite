#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates the complete 1,040 Oxford headwords across 4 TypeScript files:
- src/data/oxfordPart1.ts (260 words)
- src/data/oxfordPart2.ts (260 words)
- src/data/oxfordPart3.ts (260 words)
- src/data/oxfordPart4.ts (260 words)
"""
import sys
import os
import json
import re

sys.path.insert(0, os.path.abspath('.'))
sys.path.insert(0, os.path.abspath('scripts'))

print("Generating 1,040 Oxford entries...")
