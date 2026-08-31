#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates the remaining 500+ Oxford headwords with rich definitions,
phonetics, and contextual sentences, ensuring all 4 parts have 260 words each (1,040 total).
"""
import sys
import os
import json
import re

sys.path.insert(0, os.path.abspath('.'))
sys.path.insert(0, os.path.abspath('scripts'))

print("Initializing remaining Oxford generator...")
