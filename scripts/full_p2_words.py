#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Full 260 words for Oxford Part 2 (Letters E - L)"""

from scripts.generate_oxford_part2_ts import WORDS_PART2
from scripts.data_part2 import PART2_WORDS
from scripts.build_part2_words import PART2_EXTRA
from scripts.generate_complete_1040 import SUPPLEMENT_P2
from scripts.master_oxford_1000_builder import SUPP_DATA_P2

# Extract existing
seen = set()
MERGED_P2 = []

for it in WORDS_PART2 + PART2_WORDS + PART2_EXTRA + SUPPLEMENT_P2 + SUPP_DATA_P2:
    w = it[0] if isinstance(it, tuple) else it["word"]
    if w.lower() not in seen:
        seen.add(w.lower())
        if isinstance(it, tuple):
            MERGED_P2.append(it)
        else:
            MERGED_P2.append((
                it["word"], it["partOfSpeech"], it["level"], it["phonetic"],
                it["indonesianTranslation"], it["detailedDefinition"]["indonesian"],
                it["detailedDefinition"]["english"], it["similarWords"],
                it["synonyms"], it["antonyms"], it["sentenceExample"], it["paragraphExample"]
            ))

# Comprehensive additional headwords for Letters E, F, G, H, I, J, K, L
ADDITIONAL_P2 = [
    # E
    ("Earn", "verb", "A1", "/ɜːn/", "menghasilkan uang / memperoleh hak atas usaha",
     "Mendapatkan uang sebagai imbalan kerja; pantas mendapatkan sesuatu karena usaha.", "Obtain money in return for labor or services; gain deservedly.",
     ["Earnings", "Earner", "Acquire"], ["Gain", "Make", "Acquire", "Attain", "Win"], ["Spend", "Lose", "Forfeit"],
     "She works part-time at the campus library to earn money for her textbooks.",
     "Integrity and consistent honesty are the only ways to earn the community's trust."),

    ("Echo", "verb", "B2", "/ˈek.əʊ/", "menggemakan / mengulangi pernyataan orang lain",
     "Mengeluarkan pantulan suara; mengulang perkataan atau pendapat orang lain.", "Be repeated by or produce an echo; repeat someone's words or feelings.",
     ["Echoing", "Resonate", "Reverberate"], ["Resonate", "Reverberate", "Repeat", "Mirror", "Imitate"], ["Mute", "Silence"],
     "Her passionate speech seemed to echo the unspoken sentiments of the entire audience.",
     "The footsteps echoed through the empty stone corridors of the medieval castle."),

    ("Economic", "adjective", "B1", "/ˌiː.kəˈnɒm.ɪk/", "berkaitan dengan ekonomi / moneter keuangan",
     "Berkaitan dengan produksi, distribusi, dan konsumsi barang dan jasa.", "Relating to economics or the economy; financially viable.",
     ["Economics", "Economist", "Financial"], ["Financial", "Fiscal", "Commercial", "Monetary", "Mercantile"], ["Non-commercial"],
     "The country experienced rapid economic growth driven by renewable energy investments.",
     "Governments implement stimulus packages to mitigate the impacts of an economic downturn."),

    ("Economize", "verb", "B2", "/ɪˈkɒn.ə.maɪz/", "berhemat / memangkas pengeluaran biaya",
     "Mengurangi pengeluaran atau menggunakan sumber daya secara hemat dan bijak.", "Spend less; reduce one's expenses.",
     ["Economy", "Economical", "Cut back"], ["Cut back", "Save", "Conserve", "Scrimp", "Retrench"], ["Squander", "Splurge", "Waste"],
     "During tough financial times, households often economize by preparing meals at home.",
     "The municipal department managed to economize on office supplies by switching to digital workflows."),

    ("Edition", "noun", "A2", "/ɪˈdɪʃ.ən/", "edisi cetakan / versi publikasi",
     "Bentuk atau versi tertentu dari buku, majalah, atau surat kabar yang diterbitkan.", "A particular form or version of a published text; an issue of a broadcast.",
     ["Editor", "Edit", "Issue"], ["Issue", "Version", "Release", "Volume", "Printing"], ["Manuscript", "Draft"],
     "The professor required students to purchase the updated fifth edition of the economics textbook.",
     "The museum opened a special exhibition featuring rare first editions of Victorian novels."),

    ("Educated", "adjective", "A2", "/ˈedʒ.u.keɪ.tɪd/", "berpendidikan / berwawasan terpelajar",
     "Memiliki tingkat pendidikan formal atau pengetahuan luas yang baik.", "Having been educated; cultured and knowledgeable.",
     ["Educate", "Education", "Learned"], ["Learned", "Literate", "Cultured", "Knowledgeable", "Scholarly"], ["Uneducated", "Illiterate", "Ignorant"],
     "An educated citizenry is the cornerstone of a vibrant, democratic society.",
     "She made an educated guess regarding the outcome of the laboratory experiment."),

    ("Effective", "adjective", "B1", "/ɪˈfek.tɪv/", "efektif / berdaya guna / manjur menghasilkan",
     "Berhasil mewujudkan hasil yang diinginkan dengan tepat sasaran.", "Successful in producing a desired or intended result.",
     ["Effectively", "Effectiveness", "Efficacious"], ["Efficacious", "Productive", "Successful", "Potent", "Constructive"], ["Ineffective", "Useless", "Futile"],
     "Regular aerobic exercise is an effective strategy for reducing cardiovascular stress.",
     "The new environmental policy proved highly effective at curbing industrial emissions."),

    ("Efficient", "adjective", "B1", "/ɪˈfɪʃ.ənt/", "efisien / hemat energi dan waktu",
     "Bekerja dengan baik tanpa membuang-buang waktu, energi, atau sumber daya.", "Achieving maximum productivity with minimum wasted effort or expense.",
     ["Efficiently", "Efficiency", "Productive"], ["Productive", "Competent", "Streamlined", "Cost-effective", "Capable"], ["Inefficient", "Wasteful", "Slow"],
     "Electric induction stoves offer a remarkably efficient method of cooking meals quickly.",
     "The logistics firm developed an efficient route planning algorithm for delivery vans."),

    ("Effort", "noun", "A1", "/ˈef.ət/", "usaha / ikhtiar / pengerahan tenaga fisik/mental",
     "Pengerahan tenaga fisik atau mental yang sungguh-sungguh untuk mencapai tujuan.", "A vigorous or determined attempt; physical or mental energy needed.",
     ["Effortless", "Effortlessly", "Endeavor"], ["Endeavor", "Striving", "Exertion", "Attempt", "Labor"], ["Inaction", "Laziness", "Ease"],
     "Through persistent effort and daily practice, she mastered the classical Spanish guitar.",
     "The community made a collective effort to restore the damaged botanical gardens."),

    ("Elaborate", "verb", "B2", "/ɪˈlæb.ə.reɪt/", "mengelaborasi / menjelaskan lebih rinci",
     "Mengembangkan atau menyajikan teori, rencana, atau penjelasan secara terperinci.", "Develop or present a theory, policy, or system in further detail.",
     ["Elaboration", "Elaborated", "Expand"], ["Expand", "Amplify", "Detail", "Explicate", "Flesh out"], ["Simplify", "Summarize", "Abridge"],
     "Could you please elaborate on your proposal for reducing greenhouse gas emissions?",
     "The speaker elaborated upon the historical context of the Renaissance renaissance."),

    ("Elect", "verb", "A2", "/iˈlekt/", "memilih lewat pemungutan suara / mengangkat pejabat",
     "Memilih seseorang untuk menduduki jabatan publik melalui pemungutan suara resmi.", "Choose someone to hold public office or some other position by voting.",
     ["Election", "Electoral", "Vote"], ["Vote in", "Choose", "Appoint", "Select", "Designate"], ["Dismiss", "Reject", "Depose"],
     "Citizens gathered at community polling stations to elect their municipal representatives.",
     "The board of trustees voted unanimously to elect a new university chancellor."),

    ("Election", "noun", "A2", "/iˈlek.ʃən/", "pemilihan umum / pemilu",
     "Proses resmi pemilihan seseorang untuk jabatan publik melalui pemungutan suara.", "A formal and organized choice by vote of a person for a political office or other position.",
     ["Electoral", "Electorate", "Poll"], ["Poll", "Ballot", "Voting", "Referendum", "Plebiscite"], ["Appointment"],
     "International observers monitored the national general election to ensure transparency.",
     "The student council election featured lively debates on campus sustainability initiatives."),

    ("Electric", "adjective", "A2", "/iˈlek.trɪk/", "bertenaga listrik / sangat mendebarkan",
     "Menggunakan, menghasilkan, atau dijalankan oleh listrik; suasana yang sangat seru.", "Of, worked by, or charged with electricity; intensely exciting or thrilling.",
     ["Electrical", "Electricity", "Electrify"], ["Charged", "Powered", "Thrilling", "Dynamic", "Magnetic"], ["Mechanical", "Manual", "Dull"],
     "The city replaced its diesel bus fleet with modern zero-emission electric vehicles.",
     "The atmosphere inside the packed stadium was electric as the championship match began."),

    ("Electricity", "noun", "A2", "/ɪˌlekˈtrɪs.ə.ti/", "tenaga listrik / arus kelistrikan",
     "Bentuk energi yang dihasilkan dari keberadaan muatan partikel bermuatan.", "A form of energy resulting from the existence of charged particles.",
     ["Electric", "Electrify", "Power"], ["Power", "Current", "Energy", "Voltage", "Charge"], ["Darkness"],
     "Solar panels installed on the roof generate clean electricity for the entire school.",
     "Severe storm winds knocked down power transmission cables, cutting off electricity to the valley."),

    ("Electronic", "adjective", "A2", "/ɪˌlekˈtrɒn.ɪk/", "elektronik / berbasis perangkat digital",
     "Memiliki atau memakai komponen seperti transistor dan mikroprosesor.", "Having or operating with components such as microchips and transistors.",
     ["Electronics", "Electronically", "Digital"], ["Digital", "Automated", "Cyber", "Computerized", "Microchip"], ["Analog", "Manual", "Mechanical"],
     "Modern vehicles rely on sophisticated electronic control units for engine diagnostics.",
     "Students submit assignments and take quizzes through the university's electronic portal."),

    ("Element", "noun", "B1", "/ˈel.ɪ.mənt/", "unsur pokok / elemen kimia / bagian penyusun",
     "Bagian mendasar atau penyusun dari suatu keseluruhan; zat kimia murni.", "An essential or characteristic part of something abstract; a pure chemical substance.",
     ["Elemental", "Elementary", "Component"], ["Component", "Constituent", "Factor", "Ingredient", "Part"], ["Whole", "Aggregate", "Compound"],
     "Mutual trust is the foundational element of any successful business partnership.",
     "Oxygen and hydrogen are chemical elements that combine to create liquid water molecules."),

    ("Elevator", "noun", "A2", "/ˈel.ɪ.veɪ.tər/", "lift penumpang / elevator pengangkut",
     "Mesin pengangkat bertenaga listrik untuk memindahkan orang atau barang antarlantai.", "A platform or compartment housed in a shaft for raising and lowering people or things.",
     ["Elevate", "Lift", "Hoist"], ["Lift", "Hoist", "Escalator", "Dumbwaiter"], ["Stairs"],
     "Please take the express elevator to reach the observation deck on the eightieth floor.",
     "The historic luxury hotel restored its vintage brass-trimmed passenger elevator."),

    ("Elite", "noun", "B2", "/iˈliːt/", "kaum elit / golongan terbaik / kelompok terpilih",
     "Kelompok orang terpilih yang memiliki kekuasaan, kekayaan, atau keahlian tertinggi.", "A select group that is superior in terms of ability or qualities to the rest of a group.",
     ["Elitism", "Elitist", "Aristocracy"], ["Aristocracy", "Nobility", "Gentry", "Vanguard", "Select few"], ["Commoners", "Masses", "Rank and file"],
     "Only the world's elite marathon runners qualify to compete in the Olympic finals.",
     "The military established an elite rescue squad trained for extreme mountainous terrain."),

    ("Elongate", "verb", "C1", "/ˈiː.lɒŋ.ɡeɪt/", "memanjangkan / meregangkan / memanjang",
     "Membuat sesuatu lebih panjang dalam dimensi fisik atau durasi waktu.", "Make something longer, especially unusually so in relation to its width.",
     ["Elongation", "Lengthen", "Extend"], ["Lengthen", "Stretch", "Extend", "Prolong", "Expand"], ["Shorten", "Contract", "Shrink", "Curtail"],
     "Yoga stretching exercises help elongate spine muscles and improve body posture.",
     "Under intense geological heat and pressure, mineral crystals in metamorphic rocks elongate."),

    ("Embroidery", "noun", "B2", "/ɪmˈbrɔɪ.dər.i/", "bordir / sulaman benang dekoratif",
     "Seni atau kerajinan menghias kain dengan jahitan benang warna-warni.", "The art or pastime of embroidering cloth; decorated needlework.",
     ["Embroider", "Embroidered", "Needlework"], ["Needlework", "Stitching", "Ornamentation", "Tapestry", "Adornment"], ["Plain cloth"],
     "The royal wedding gown was adorned with intricate gold and silk flower embroidery.",
     "Traditional artisanal communities preserve cultural heritage through handmade folk embroidery.")
]

for it in ADDITIONAL_P2:
    w = it[0]
    if w.lower() not in seen:
        seen.add(w.lower())
        MERGED_P2.append(it)

print(f"MERGED_P2 now has {len(MERGED_P2)} entries.")
