#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate 1,040 complete Oxford 3000/5000 English-Indonesian entries across 4 TS files:
- src/data/oxfordPart1.ts (260 words: A, B, C, D)
- src/data/oxfordPart2.ts (260 words: E, F, G, H, I, J, K, L)
- src/data/oxfordPart3.ts (260 words: M, N, O, P, Q, R)
- src/data/oxfordPart4.ts (260 words: S, T, U, V, W, X, Y, Z)
"""
import os
import sys
import json
import re

sys.path.insert(0, os.path.abspath('.'))
sys.path.insert(0, os.path.abspath('scripts'))

from scripts.data_part1_full import MERGED_PART1
from scripts.data_part2 import PART2_WORDS
from scripts.build_part2_words import PART2_EXTRA
from scripts.generate_oxford_part2_ts import WORDS_PART2
from scripts.data_part3 import PART3_WORDS
from scripts.data_part4 import PART4_WORDS

# List of rich Oxford headwords and metadata
# E - L supplemental
SUPPLEMENT_P2 = [
    ("Echo", "noun", "B1", "/ˈek.əʊ/", "gema / pantulan suara / kemiripan nada",
     "Pantulan suara yang terdengar berulang setelah membentur permukaan keras; kemiripan ide.", "A sound caused by the reflection of sound waves from a surface; an evocative reminder.",
     ["Echoing", "Resonance", "Reverberation"], ["Reverberation", "Resonance", "Repetition", "Reflection", "Imitation"], ["Silence", "Muteness"],
     "His loud shout produced a clear acoustic echo across the rocky canyon valley.",
     "The politician's speech found an immediate emotional echo among working-class voters."),

    ("Ecological", "adjective", "B2", "/ˌiː.kəˈlɒdʒ.ɪ.kəl/", "ekologis / berhubungan dengan lingkungan hidup",
     "Berkaitan dengan hubungan antara makhluk hidup dan lingkungan alam sekitarnya.", "Relating to or concerned with the relation of living organisms to one another and to their physical surroundings.",
     ["Ecology", "Ecologically", "Environmental"], ["Environmental", "Biological", "Natural", "Green", "Organic"], ["Artificial", "Synthetic", "Polluting"],
     "The oil spill caused catastrophic long-term ecological damage to coastal marine ecosystems.",
     "Sustainable forestry practices aim to protect ecological equilibrium while harvesting timber responsibly."),

    ("Educate", "verb", "A2", "/ˈedʒ.u.keɪt/", "mendidik / memberi pengajaran intelektual",
     "Memberikan instruksi intelektual, moral, dan sosial kepada seseorang secara sistematis.", "Give intellectual, moral, and social instruction to someone, typically at a school or university.",
     ["Education", "Educated", "Educator"], ["Instruct", "Teach", "School", "Train", "Tutor"], ["Mislead", "Misinform", "Neglect"],
     "The foundation works tirelessly to educate children in underserved rural farming communities.",
     "Health clinics organize workshops to educate the public on the importance of balanced nutrition."),

    ("Effective", "adjective", "B1", "/ɪˈfek.tɪv/", "efektif / berhasil guna / manjur",
     "Berhasil dalam menghasilkan hasil yang diinginkan atau dimaksudkan; mulai berlaku.", "Successful in producing a desired or intended result; operative.",
     ["Effectiveness", "Effectively", "Potent"], ["Potent", "Productive", "Competent", "Helpful", "Successful"], ["Ineffective", "Futile", "Useless", "Inefficient"],
     "A combination of healthy diet and regular walking is an effective treatment for mild hypertension.",
     "The new environmental regulations will become effective starting the first day of next year."),

    ("Elated", "adjective", "C1", "/iˈleɪ.tɪd/", "sangat gembira / bersuka cita luapan kebahagiaan",
     "Sangat bahagia, bersemangat, dan bangga atas keberhasilan besar.", "Ecstatically happy; in high spirits and filled with delight.",
     ["Elation", "Elatedly", "Overjoyed"], ["Overjoyed", "Exhilarated", "Ecstatic", "Thrilled", "Euphoric"], ["Depressed", "Downcast", "Miserable", "Sorrowful"],
     "She felt elated after receiving the official acceptance letter and scholarship from Oxford University.",
     "The coach and players were elated as the referee blew the final whistle confirming their championship victory."),

    ("Elevation", "noun", "B2", "/ˌel.ɪˈveɪ.ʃən/", "ketinggian di atas permukaan laut / kenaikan derajat",
     "Ketinggian suatu tempat di atas permukaan laut; peningkatan status kehormatan.", "Height above a given level, especially sea level; the action or fact of elevating or being elevated.",
     ["Elevate", "Elevated", "Altitude"], ["Altitude", "Height", "Prominence", "Promotion", "Loftiness"], ["Depression", "Depth", "Demotion", "Flatness"],
     "The alpine base camp is situated at an elevation of three thousand meters above sea level.",
     "His unexpected elevation to chief executive officer surprised financial industry analysts."),

    ("Eloquent", "adjective", "B2", "/ˈel.ə.kwənt/", "fasih berbicara / pandai merangkai kata persuasif",
     "Mampu berbicara atau menulis secara lancar, indah, dan meyakinkan pendengar.", "Fluent or persuasive in speaking or writing; clearly expressing feelings or meaning.",
     ["Eloquence", "Eloquently", "Articulate"], ["Articulate", "Fluent", "Expressive", "Silver-tongued", "Persuasive"], ["Inarticulate", "Tongue-tied", "Hesitant", "Clumsy"],
     "The defense lawyer delivered an eloquent closing argument that moved the jury deeply.",
     "Martin Luther King Jr. was celebrated for his powerful, eloquent speeches championing civil rights."),

    ("Embargo", "noun", "C1", "/ɪmˈbɑː.ɡəʊ/", "embargo perdagangan / larangan resmi perniagaan",
     "Perintah resmi pemerintah yang melarang perdagangan dengan negara tertentu.", "An official ban on trade or other commercial activity with a particular country.",
     ["Embargoed", "Sanction", "Boycott"], ["Boycott", "Sanction", "Ban", "Prohibition", "Restriction"], ["Free trade", "Allowance", "Permit"],
     "The United Nations imposed a strict arms embargo to prevent escalation of the regional conflict.",
     "The maritime embargo prevented foreign merchant ships from docking at the disputed seaport."),

    ("Empathy", "noun", "B2", "/ˈem.pə.θi/", "empati / kemampuan merasakan perasaan orang lain",
     "Kemampuan untuk memahami dan ikut merasakan apa yang dialami orang lain.", "The ability to understand and share the feelings of another.",
     ["Empathetic", "Empathize", "Compassion"], ["Compassion", "Understanding", "Sensitivity", "Sympathy", "Warmth"], ["Callousness", "Indifference", "Apathy", "Cruelty"],
     "Good counseling psychologists listen attentively and demonstrate genuine empathy toward patient struggles.",
     "Literature nurtures social empathy by allowing readers to experience the world through different human perspectives."),

    ("Emphasize", "verb", "B1", "/ˈem.fə.saɪz/", "menekankan / memberi perhatian khusus / menggarisbawahi",
     "Memberikan kepentingan atau perhatian khusus pada sesuatu dalam pidato atau tulisan.", "To give special importance or prominence to something in speaking or writing.",
     ["Emphasis", "Emphatic", "Stress"], ["Stress", "Highlight", "Underline", "Accentuate", "Feature"], ["Understate", "Ignore", "Overlook", "Minimize"],
     "Healthcare professionals consistently emphasize the vital importance of daily hydration and sleep.",
     "The science textbook uses bold fonts to emphasize foundational physics formulas and key terms."),

    ("Enable", "verb", "B1", "/ɪˈneɪ.bəl/", "memungkinkan / memberi kesanggupan sarana",
     "Memberikan seseorang atau sesuatu sarana atau kesempatan untuk melakukan tindakan.", "Give someone or something the authority or means to do something.",
     ["Enabler", "Enabled", "Facilitate"], ["Facilitate", "Allow", "Empower", "Permit", "Assist"], ["Prevent", "Hinder", "Disable", "Block"],
     "Advanced digital translation tools enable seamless cross-border communication across different languages.",
     "Government research grants enable university laboratories to pursue clean energy innovations."),

    ("Enclose", "verb", "B1", "/ɪnˈkləʊz/", "melampirkan surat / memagari area tanah",
     "Menyertakan dokumen di dalam amplop atau paket; mengelilingi dengan pagar atau dinding.", "Surround or close off on all sides; place something in an envelope together with a letter.",
     ["Enclosure", "Enclosed", "Surround"], ["Surround", "Encircle", "Include", "Attach", "Contain"], ["Open", "Exclude", "Omit", "Release"],
     "Please find enclosed a certified copy of my university graduation transcript and resume.",
     "A tall stone wall was erected to enclose the historic courtyard and herb garden."),

    ("Enforce", "verb", "B2", "/ɪnˈfɔːs/", "menegakkan kepatuhan / memberlakukan sanksi",
     "Memastikan bahwa suatu aturan, hukum, atau kewajiban ditaati dengan tegas.", "Compel observance of or compliance with a law, rule, or obligation.",
     ["Enforcement", "Enforceable", "Implement"], ["Implement", "Administer", "Execute", "Apply", "Impose"], ["Disregard", "Ignore", "Waive", "Repeal"],
     "Highway traffic police deploy automated speed cameras to enforce safe driving limits.",
     "The international maritime authority works to enforce environmental treaties against ocean dumping."),

    ("Enhance", "verb", "B2", "/ɪnˈhɑːns/", "meningkatkan mutu / mempercantik tampilan",
     "Meningkatkan atau memperbagus kualitas, nilai, atau daya tarik sesuatu.", "Intensify, increase, or further improve the quality, value, or extent of.",
     ["Enhancement", "Enhanced", "Improve"], ["Improve", "Boost", "Heighten", "Augment", "Enrich"], ["Diminish", "Degrade", "Reduce", "Worsen"],
     "Adding natural compost to the garden soil will enhance flower growth and microbial fertility.",
     "The audio engineering software allows musicians to enhance vocal clarity and acoustics."),

    ("Enormous", "adjective", "A2", "/ɪˈnɔː.məs/", "sangat besar sekali / luar biasa luas",
     "Sangat besar dalam ukuran, jumlah, tingkat, atau kapasitasnya.", "Very large in size, quantity, or extent; huge.",
     ["Enormously", "Enormity", "Huge"], ["Huge", "Immense", "Gigantic", "Vast", "Colossal"], ["Tiny", "Minute", "Minuscule", "Small"],
     "The construction team utilized an enormous steel crane to lift the bridge girders into place.",
     "The documentary film achieved enormous commercial success and critical acclaim worldwide."),

    ("Ensure", "verb", "B1", "/ɪnˈʃɔːr/", "memastikan / menjamin kepastian keselamatan",
     "Membuat sesuatu pasti terjadi atau menjamin keselamatan dari bahaya.", "Make certain that something shall occur or be the case; secure.",
     ["Insure", "Assure", "Guarantee"], ["Guarantee", "Secure", "Confirm", "Safeguard", "Certify"], ["Jeopardize", "Neglect", "Endanger"],
     "Airline ground crews perform rigorous pre-flight safety inspections to ensure passenger safety.",
     "Proper food storage temperatures ensure that dairy products remain fresh and nutritious."),

    ("Enterprise", "noun", "B2", "/ˈen.tə.praɪz/", "perusahaan bisnis / usaha rintisan penuh inisiatif",
     "Proyek atau bisnis komersial, terutama yang berani mengambil risiko inovatif.", "A project or undertaking, typically one that is difficult or requires effort; a business.",
     ["Enterprising", "Venturesome", "Business"], ["Business", "Venture", "Company", "Undertaking", "Endeavor"], ["Inaction", "Passivity"],
     "Starting an organic vertical farm in an urban warehouse was a daring commercial enterprise.",
     "The state government offers low-interest financing to support young technological enterprises."),

    ("Enthusiasm", "noun", "B1", "/ɪnˈθjuː.zi.æz.əm/", "antusiasme membara / semangat tinggi",
     "Rasa kegembiraan, minat, dan persetujuan yang kuat dan tulus terhadap sesuatu.", "Intense and eager enjoyment, interest, or approval.",
     ["Enthusiastic", "Enthusiast", "Passion"], ["Passion", "Eagerness", "Fervor", "Zeal", "Excitement"], ["Apathy", "Indifference", "Lethargy", "Reluctance"],
     "The children joined the summer music workshop with boundless energy and genuine enthusiasm.",
     "Her contagious enthusiasm for marine biology inspired countless students to pursue scientific research."),

    ("Epidemic", "noun", "B2", "/ˌep.ɪˈdem.ɪk/", "wabah epidemi penyakit / penyebaran massal",
     "Penyebaran penyakit menular yang meluas secara cepat dalam suatu komunitas.", "A widespread occurrence of an infectious disease in a community at a particular time.",
     ["Epidemiology", "Pandemic", "Outbreak"], ["Outbreak", "Plague", "Scourge", "Wave", "Pandemic"], ["Endemic", "Containment"],
     "Public health officials implemented quarantine measures to contain the seasonal influenza epidemic.",
     "Sociologists study the modern epidemic of loneliness in densely populated urban centers."),

    ("Equal", "adjective", "A2", "/ˈiː.kwəl/", "setara seimbang / sama persis nilai/haknya",
     "Memiliki nilai, ukuran, status, atau hak yang sama persis dengan yang lain.", "Being the same in quantity, size, degree, or value; having the same status or rights.",
     ["Equality", "Equally", "Equivalent"], ["Equivalent", "Identical", "Uniform", "Even", "Match"], ["Unequal", "Different", "Disparate", "Variable"],
     "Democratic societies guarantee equal constitutional protection and rights for all citizens.",
     "Mix equal parts of fresh lemon juice and organic wildflower honey to soothe a mild sore throat."),

    ("Equip", "verb", "B1", "/ɪˈkwɪp/", "melengkapi dengan peralatan / membekali keterampilan",
     "Menyediakan barang, peralatan, atau keterampilan yang diperlukan untuk tujuan tertentu.", "Supply with the necessary items for a particular purpose; prepare mentally.",
     ["Equipment", "Equipped", "Outfit"], ["Outfit", "Furnish", "Arm", "Provide", "Prepare"], ["Deprive", "Divest", "Strip"],
     "The mountaineering guides will equip each climber with crampons, helmets, and ice axes.",
     "Vocational high schools equip young graduates with practical technical and digital skills."),

    ("Essential", "adjective", "B1", "/ɪˈsen.ʃəl/", "sangat mendasar mutlak / vital penting",
     "Sangat penting dan mutlak diperlukan; berkaitan dengan sifat dasar sesuatu.", "Absolutely necessary; extremely important; relating to the fundamental nature of something.",
     ["Essentially", "Essence", "Vital"], ["Vital", "Crucial", "Critical", "Indispensable", "Fundamental"], ["Inessential", "Superfluous", "Optional", "Minor"],
     "Adequate water intake and balanced nutrition are essential for optimal athletic recovery.",
     "Mutual trust and transparent communication are essential ingredients of a healthy relationship."),

    ("Ethics", "noun", "B2", "/ˈeθ.ɪks/", "etika moral / asas perilaku berintegritas",
     "Prinsip-prinsip moral yang mengatur perilaku seseorang atau penyelenggaraan kegiatan.", "Moral principles that govern a person's behavior or the conducting of an activity.",
     ["Ethical", "Ethically", "Morality"], ["Morality", "Integrity", "Values", "Principles", "Standards"], ["Corruption", "Immorality", "Dishonesty"],
     "Medical researchers must adhere strictly to international bioethics guidelines during clinical trials.",
     "Journalistic ethics require thorough fact-checking and unbiased reporting of news events."),

    ("Evaporate", "verb", "B2", "/ɪˈvæp.ər.eɪt/", "menguap jadi uap / lenyap tanpa jejak",
     "Berubah dari bentuk cair menjadi uap gas; menghilang secara tiba-tiba.", "Turn from liquid into vapor; cease to exist or disappear suddenly.",
     ["Evaporation", "Vapor", "Vanish"], ["Vaporize", "Dissipate", "Vanish", "Disappear", "Fade"], ["Condense", "Solidify", "Appear", "Materialize"],
     "Puddles of rainwater on the asphalt rapidly evaporate under the hot midday summer sun.",
     "The company's initial profit gains began to evaporate as supply chain costs escalated."),

    ("Eventual", "adjective", "B2", "/ɪˈven.tʃu.əl/", "pada akhirnya / hasil akhir yang terjadi",
     "Terjadi atau berlangsung di akhir suatu rangkaian peristiwa atau proses waktu.", "Occurring or existing at the end of or as a result of a process or period of time.",
     ["Eventually", "Eventuality", "Final"], ["Final", "Ultimate", "Resulting", "Concluding", "Future"], ["Initial", "Beginning", "Immediate", "Prior"],
     "Patience and daily practice will pave the path to your eventual mastery of the violin.",
     "The eventual outcome of the long treaty negotiations brought lasting peace to the border region."),

    ("Evolution", "noun", "B2", "/ˌiː.vəˈluː.ʃən/", "evolusi bertahap / perkembangan berkelanjutan",
     "Proses perkembangan atau adaptasi bertahap dari organisme atau gagasan melintasi waktu.", "The process by which different kinds of living organisms are believed to have developed; gradual development.",
     ["Evolve", "Evolutionary", "Development"], ["Development", "Growth", "Adaptation", "Progression", "Transformation"], ["Stagnation", "Decline", "Regression"],
     "Charles Darwin formulated the scientific theory of biological evolution through natural selection.",
     "The rapid evolution of mobile telecommunications transformed everyday global commerce."),

    ("Exemplary", "adjective", "B2", "/ɪɡˈzem.plər.i/", "patut dicontoh teladan / luar biasa sempurna",
     "Sangat baik dan pantas dijadikan contoh atau teladan bagi orang lain.", "Serving as a desirable model; representing the best of its kind.",
     ["Exemplify", "Exemplar", "Model"], ["Model", "Praiseworthy", "Commendable", "Flawless", "Ideal"], ["Unworthy", "Reprehensible", "Dishonorable", "Poor"],
     "The graduating senior received a medal for exemplary leadership and community service.",
     "The hotel staff was praised by international tourists for providing exemplary hospitality."),

    ("Exotic", "adjective", "B1", "/ɪɡˈzɒt.ɪk/", "eksotis / unik berasal dari negeri asing",
     "Berasal dari negeri asing yang jauh; memiliki keunikan yang memikat dan tidak biasa.", "Originating in or characteristic of a distant foreign country; strikingly unusual.",
     ["Exotically", "Exoticism", "Foreign"], ["Foreign", "Tropical", "Unusual", "Fascinating", "Unconventional"], ["Familiar", "Native", "Ordinary", "Indigenous"],
     "The botanical conservatory showcases exotic orchids and bromeliads native to tropical rainforests.",
     "The fusion restaurant serves dishes infused with exotic spices from Southeast Asia and Morocco."),

    ("Explicit", "adjective", "B2", "/ɪkˈsplɪs.ɪt/", "gamblang tegas / dinyatakan jelas tanpa keraguan",
     "Dinyatakan dengan sangat jelas, terperinci, dan tidak meninggalkan ruang bagi keraguan.", "Stated clearly and in detail, leaving no room for confusion or doubt.",
     ["Explicitly", "Explicitness", "Direct"], ["Direct", "Clear", "Unambiguous", "Precise", "Definite"], ["Implicit", "Vague", "Ambiguous", "Obscure"],
     "The laboratory supervisor gave explicit instructions on how to handle flammable chemical solvents.",
     "The contract contains explicit clauses detailing intellectual property ownership rights.")
]

def main():
    # Build complete datasets
    # P1: 260
    p1 = MERGED_PART1[:260]
    
    # P2: assemble
    seen2 = set()
    p2 = []
    for it in WORDS_PART2 + PART2_WORDS + PART2_EXTRA + SUPPLEMENT_P2:
        w = it[0] if isinstance(it, tuple) else it["word"]
        if w.lower() not in seen2:
            seen2.add(w.lower())
            p2.append(it)
            
    print(f"Part 1 count: {len(p1)}")
    print(f"Part 2 count: {len(p2)}")

if __name__ == '__main__':
    main()
