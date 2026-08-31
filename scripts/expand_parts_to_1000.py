#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Expands Oxford Parts 2, 3, 4 to guarantee 260 headwords in each part,
totaling 1,040 authentic Oxford vocabulary entries.
"""
import os
import sys
import json
import re

sys.path.insert(0, os.path.abspath('.'))
sys.path.insert(0, os.path.abspath('scripts'))

# Load existing parts
from scripts.data_part1_full import MERGED_PART1
from scripts.data_part2 import PART2_WORDS
from scripts.build_part2_words import PART2_EXTRA
from scripts.generate_oxford_part2_ts import WORDS_PART2
from scripts.data_part3 import PART3_WORDS
from scripts.data_part4 import PART4_WORDS

print("Loading word expansion datasets...")
