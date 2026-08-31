#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Full Vocabulary Expansion for Oxford Parts 2, 3, and 4.
Supplies all necessary unique headwords with complete linguistic fields.
"""

from oxford_generators import SUPPLEMENTAL_EL
from oxford_generators_mr_sz import SUPPLEMENTAL_MR
from oxford_full_lexicon import MR_ADDITIONAL

# Additional words for EL to hit 260
EXTRA_EL_2 = [
    ("Latitude", "noun", "B2", "/ˈlæt.ɪ.tjuːd/", "garis lintang bumi / kebebasan bertindak",
     "Jarak sudut suatu tempat di utara atau selatan khatulistiwa; keleluasaan dalam bertindak.",
     "The angular distance of a place north or south of the equator; scope for freedom of action.",
     ["Longitude", "Equator", "Freedom"], ["Parallels", "Freedom", "Leeway", "Scope", "Room"], ["Restriction", "Limitation"],
     "Countries located at tropical latitudes receive abundant sunlight throughout the entire year.",
     "The regional manager was given broad latitude to adjust local marketing and hiring strategies."),

    ("Laudable", "adjective", "C1", "/ˈlɔː.də.bəl/", "patut dipuji / bernilai mulia terpuji",
     "Layak menerima pujian, penghargaan, atau apresiasi tinggi atas niat atau tindakan mulianya.",
     "Deserving praise and commendation; admirable and worthy.",
     ["Laud", "Laudably", "Praiseworthy"], ["Praiseworthy", "Commendable", "Admirable", "Meritorious", "Noble"], ["Disgraceful", "Blameworthy", "Shameful"],
     "The volunteer group made a laudable effort to deliver emergency food supplies to stranded flood victims.",
     "While his ambitious goals were laudable, the practical execution lacked adequate budget planning."),

    ("Leap", "verb", "B1", "/liːp/", "melompat tinggi / melonjak pesat",
     "Melompat jauh atau tinggi dari permukaan tanah; meningkat secara drastis dalam waktu singkat.",
     "Jump or spring a long way, to a great height, or with great force; increase rapidly.",
     ["Leaping", "Bound", "Spring"], ["Jump", "Bound", "Hop", "Vault", "Surge"], ["Plummet", "Drop", "Fall"],
     "Wild salmon leap upstream against swift river currents to reach their ancestral spawning grounds.",
     "Company share prices took a dramatic leap following the announcement of record annual profits."),

    ("Legendary", "adjective", "B1", "/ˈledʒ.ən.dri/", "legendaris / termasyhur dalam cerita rakyat",
     "Sangat terkenal dan dikagumi banyak orang; berasal dari legenda atau cerita rakyat kuno.",
     "Remarkable enough to be famous; very well known; described in traditional stories.",
     ["Legend", "Mythical", "Famous"], ["Famous", "Renowned", "Fabled", "Mythical", "Iconic"], ["Unknown", "Obscure", "Ordinary", "Forgotten"],
     "The legendary warrior defended the mountain pass against overwhelming opposing forces.",
     "Miles Davis is a legendary figure in the evolution of modern jazz and improvisational music."),

    ("Lengthy", "adjective", "B2", "/ˈleŋ.θi/", "sangat panjang lebar / memakan waktu lama",
     "Berlangsung dalam waktu yang sangat lama; teks atau pidato yang sangat panjang.",
     "Of considerable or unusual length, especially with reference to time; protracted.",
     ["Length", "Lengthen", "Protracted"], ["Protracted", "Prolonged", "Extensive", "Long-drawn-out", "Tiresome"], ["Brief", "Short", "Concise", "Succinct"],
     "After lengthy negotiations lasting through the night, union leaders and management signed an accord.",
     "The court judge delivered a lengthy ruling detailing each constitutional aspect of the verdict."),

    ("Liability", "noun", "B2", "/ˌlaɪ.əˈbɪl.ə.ti/", "liabilitas kewajiban / beban tanggungan hukum",
     "Kewajiban finansial atau hukum yang harus dilunasi; sesuatu yang menjadi beban atau kerugian.",
     "The state of being responsible for something, especially by law; a financial debt or burden.",
     ["Liable", "Accountability", "Debt"], ["Debt", "Obligation", "Burden", "Accountability", "Drawback"], ["Asset", "Advantage", "Credit"],
     "The corporate balance sheet clearly distinguishes between liquid assets and long-term liabilities.",
     "His impulsive temper proved to be a serious liability during high-stakes diplomatic deliberations."),

    ("Likelihood", "noun", "B2", "/ˈlaɪ.kli.hʊd/", "kemungkinan besar / peluang terjadinya suatu hal",
     "Peluang atau probabilitas bahwa suatu peristiwa akan benar-benar terjadi.",
     "The state or fact of something being likely; probability or chance.",
     ["Likely", "Probability", "Odds"], ["Probability", "Chance", "Prospect", "Odds", "Possibility"], ["Improbability", "Impossibility"],
     "With heavy dark clouds rolling over the valley, there is a strong likelihood of afternoon thunderstorms.",
     "Regular exercise and a balanced diet significantly reduce the likelihood of cardiovascular ailments."),

    ("Limitation", "noun", "B1", "/ˌlɪm.ɪˈteɪ.ʃən/", "keterbatasan / pembatasan batas kemampuan",
     "Kekurangan dalam kemampuan atau kapasitas; aturan yang membatasi tindakan seseorang.",
     "A limiting rule or circumstance; a restriction or lack of capacity.",
     ["Limit", "Limited", "Restriction"], ["Restriction", "Constraint", "Boundary", "Shortcoming", "Deficiency"], ["Freedom", "Boundlessness", "Perfection"],
     "Understanding personal physical limitations is essential when training for an ultra-marathon.",
     "The software prototype had several technical limitations that were resolved in the final release."),

    ("Linguistic", "adjective", "B2", "/lɪŋˈɡwɪs.tɪk/", "linguistik / berkaitan dengan ilmu tata bahasa",
     "Berkaitan dengan bahasa, struktur gramatikal, atau studi ilmiah tentang bahasa manusia.",
     "Relating to language or linguistics; concerned with human speech structures.",
     ["Linguistics", "Linguist", "Grammatical"], ["Language-related", "Grammatical", "Verbal", "Philological", "Semantic"], ["Nonverbal"],
     "The university offers fascinating research programs in historical linguistic evolution and phonetics.",
     "Indonesia displays incredible linguistic diversity with hundreds of distinct local languages."),

    ("Locate", "verb", "A2", "/ləʊˈkeɪt/", "menemukan lokasi / menempatkan pada posisi",
     "Menemukan letak pasti seseorang atau benda; menaruh atau membangun di lokasi tertentu.",
     "Discover the exact place or position of; establish oneself or business in a place.",
     ["Location", "Located", "Find"], ["Find", "Discover", "Pinpoint", "Position", "Situate"], ["Lose", "Misplace", "Displace"],
     "Rescue radar systems helped locate the stranded fishing boat during the nighttime coastal gale.",
     "The international tech enterprise chose to locate its regional headquarters in central Jakarta.")
]

print("Extra EL part 2 loaded:", len(EXTRA_EL_2))
