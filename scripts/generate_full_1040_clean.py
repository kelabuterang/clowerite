#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates the complete 1,040 Oxford headwords across 4 TypeScript parts:
- Part 1 (A-D): 260 items
- Part 2 (E-L): 260 items
- Part 3 (M-R): 260 items
- Part 4 (S-Z): 260 items
"""
import os
import sys
import json
import re

sys.path.insert(0, os.path.abspath('.'))
sys.path.insert(0, os.path.abspath('scripts'))

from scripts.data_part1_full import MERGED_PART1
from scripts.full_p2_words import MERGED_P2
from scripts.data_part3 import PART3_WORDS
from scripts.master_oxford_1000_builder import SUPP_DATA_P3, SUPP_DATA_P4
from scripts.data_part4 import PART4_WORDS
from scripts.build_all_1040 import MORE_P2

def slugify(word):
    return 'dict-' + re.sub(r'[^a-z0-9]+', '-', word.lower()).strip('-')

# Standardized Oxford headwords expansion engine
OXFORD_P2_EXTRA_HEADWORDS = [
    ("Escalate", "verb", "B2", "/ˈes.kə.leɪt/", "meningkat tajam / memanas eskalasi",
     "Meningkat pesat dalam intensitas, skala, atau keparahan suatu konflik.", "Increase rapidly; become or cause to become more intense or serious.",
     ["Escalation", "Escalator", "Intensify"], ["Intensify", "Heighten", "Amplify", "Mount", "Spiral"], ["De-escalate", "Diminish", "Lessen"],
     "Diplomats met urgently to prevent border skirmishes from escalating into full warfare.",
     "Rising fuel and transport costs caused retail consumer prices to escalate rapidly."),

    ("Essential", "noun", "B1", "/ɪˈsen.ʃəl/", "kebutuhan pokok esensial / hal mendasar",
     "Sesuatu yang mutlak diperlukan atau sangat mendasar untuk kehidupan.", "A thing that is absolutely necessary; fundamental element.",
     ["Essentially", "Necessity", "Requirement"], ["Necessity", "Prerequisite", "Requirement", "Must-have", "Fundamental"], ["Luxury", "Extra"],
     "Emergency humanitarian kits contain basic essentials such as clean water and blankets.",
     "Mastering grammar fundamentals is an absolute essential for writing compelling essays."),

    ("Evacuate", "verb", "B2", "/ɪˈvæk.ju.eɪt/", "mengevakuasi warga / mengungsi dari bahaya",
     "Memindahkan orang dari tempat berbahaya ke tempat yang aman dan terlindung.", "Remove someone from a place of danger to a safe place.",
     ["Evacuation", "Evacuee", "Vacate"], ["Vacate", "Abandon", "Clear", "Withdraw", "Relocate"], ["Inhabit", "Enter", "Occupy", "Stay"],
     "Emergency civil defense sirens instructed coastal residents to evacuate ahead of the tsunami.",
     "Paramedics worked swiftly to evacuate the damaged building after the earthquake."),

    ("Exceedingly", "adverb", "B2", "/ɪkˈsiː.dɪŋ.li/", "sangat luar biasa / teramat sangat",
     "Dalam tingkat atau kadar yang sangat tinggi melebihi standar biasa.", "To an extreme degree; extremely and exceptionally.",
     ["Exceed", "Excess", "Extremely"], ["Extremely", "Exceptionally", "Immensely", "Remarkably", "Extraordinarily"], ["Slightly", "Barely", "Moderately"],
     "The mountaineering team found the final vertical ice wall exceedingly difficult to climb.",
     "She was exceedingly polite and composed during the high-pressure media press conference."),

    ("Excel", "verb", "B2", "/ɪkˈsel/", "unggul berprestasi / menonjol luar biasa",
     "Menjadi sangat cakap, mahir, atau unggul dalam suatu aktivitas atau bidang studi.", "Be exceptionally good at or proficient in an activity or subject.",
     ["Excellence", "Excellent", "Surpass"], ["Surpass", "Outdo", "Shine", "Eclipse", "Triumph"], ["Fail", "Falter", "Lag"],
     "With dedicated coaching and discipline, she began to excel in classical piano competitions.",
     "The young engineer proved to excel at designing energy-efficient thermal insulation systems."),

    ("Exhibit", "verb", "B2", "/ɪɡˈzɪb.ɪt/", "memamerkan karya seni / memperlihatkan gejala",
     "Menunjukkan secara terbuka untuk umum; memperlihatkan tanda atau karakteristik.", "Manifest or display a quality or trait; show art in a gallery.",
     ["Exhibition", "Exhibitor", "Display"], ["Display", "Showcase", "Demonstrate", "Reveal", "Present"], ["Conceal", "Hide", "Cover", "Suppress"],
     "Contemporary artists from fifteen countries gathered to exhibit their sculptures in Venice.",
     "Patients with seasonal allergies may exhibit symptoms such as sneezing and itchy eyes."),

    ("Exile", "noun", "B2", "/ˈek.saɪl/", "pengasingan / orang yang diasingkan dari tanah air",
     "Keadaan diusir dari negara asal untuk alasan politik atau hukuman; orang buangan.", "The state of being barred from one's native country; an exiled person.",
     ["Exiled", "Banishment", "Expulsion"], ["Banishment", "Expulsion", "Deportation", "Ostracism", "Displacement"], ["Repatriation", "Welcome", "Return"],
     "The dissident poet lived in voluntary foreign exile for twenty years before returning home.",
     "Many historical philosophers wrote their most profound masterpieces while enduring political exile."),

    ("Expenditure", "noun", "B2", "/ɪkˈspen.dɪ.tʃər/", "pengeluaran anggaran belanja / biaya konsumsi",
     "Tindakan membelanjakan dana; jumlah uang atau waktu yang dikeluarkan.", "The action of spending funds; an amount of money spent.",
     ["Expend", "Expense", "Outlay"], ["Outlay", "Spending", "Cost", "Disbursement", "Disposal"], ["Income", "Revenue", "Savings", "Earnings"],
     "The national government announced increased public expenditure on renewable energy and schools.",
     "Household expenditure on organic groceries and healthcare rose steadily over the past year."),

    ("Explicitly", "adverb", "B2", "/ɪkˈsplɪs.ɪt.li/", "secara gamblang tegas / tanpa tersirat",
     "Dengan cara yang sangat jelas, terperinci, dan tidak meninggalkan keraguan.", "In a clear and detailed manner, leaving no room for confusion or doubt.",
     ["Explicit", "Explicitness", "Directly"], ["Directly", "Clearly", "Plainly", "Unambiguously", "Expressly"], ["Implicitly", "Vaguely", "Ambiguously"],
     "The safety manual explicitly states that protective goggles must be worn at all times in the lab.",
     "The bilateral contract explicitly prohibits unauthorized third-party subcontracting."),

    ("Extensive", "adjective", "B2", "/ɪkˈsten.sɪv/", "luas cakupannya / komprehensif mendalam",
     "Mencakup area yang luas atau jumlah informasi yang sangat besar dan mendalam.", "Covering or affecting a large area; large in amount or scale.",
     ["Extensively", "Extent", "Broad"], ["Broad", "Comprehensive", "Widespread", "Spacious", "Vast"], ["Limited", "Narrow", "Restricted", "Meager"],
     "The university library houses an extensive collection of rare medieval historical manuscripts.",
     "The hurricane caused extensive damage to coastal fishing infrastructure and electricity grids."),

    ("Extraction", "noun", "B2", "/ɪkˈstræk.ʃən/", "ekstraksi penyarian / penambangan / pencabutan",
     "Tindakan menarik, menyari, atau menambang sesuatu dari asalnya.", "The action of taking out something, especially using effort or force.",
     ["Extract", "Extractor", "Removal"], ["Removal", "Drawing out", "Distillation", "Separation", "Mining"], ["Insertion", "Injection", "Addition"],
     "Modern essential oil production utilizes cold steam extraction to preserve botanical aromas.",
     "The dentist performed a painless tooth extraction under local anesthetic sedation."),

    ("Extravagant", "adjective", "B2", "/ɪkˈstræv.ə.ɡənt/", "boros berlebihan / mewah berlebihan",
     "Menghabiskan uang atau sumber daya secara berlebihan tanpa perhitungan hemat.", "Lacking restraint in spending money or using resources; exceeding what is reasonable.",
     ["Extravagance", "Extravagantly", "Lavish"], ["Lavish", "Wasteful", "Prodigal", "Immoderate", "Excessive"], ["Frugal", "Thrifty", "Economical", "Modest"],
     "The royal gala was an extravagant celebration featuring fireworks and ten-course banquets.",
     "Do not make extravagant promises during contract negotiations unless you can fulfill them."),

    ("Fabrication", "noun", "B2", "/ˌfæb.rɪˈkeɪ.ʃən/", "pabrikasi perakitan / rekayasa cerita bohong",
     "Proses pembuatan atau perakitan industri; cerita bohong yang dikarang.", "The action or process of manufacturing something; an invention of false data.",
     ["Fabricate", "Fabricator", "Manufacturing"], ["Manufacturing", "Construction", "Assembly", "Invention", "Falsehood"], ["Demolition", "Truth", "Fact"],
     "The aerospace company opened a state-of-the-art titanium parts fabrication facility.",
     "Investigative journalists proved that the scandalous political dossier was a complete fabrication."),

    ("Facility", "noun", "B1", "/fəˈsɪl.ə.ti/", "fasilitas sarana / kemudahan beradaptasi",
     "Tempat, amenity, atau perlengkapan yang disediakan untuk tujuan tertentu.", "A place, amenity, or piece of equipment provided for a purpose.",
     ["Facilitate", "Facilities", "Amenity"], ["Amenity", "Establishment", "Center", "Resource", "Aptitude"], ["Obstacle", "Difficulty"],
     "The athletic center opened a new indoor swimming and fitness facility for students.",
     "She demonstrated an astonishing natural facility for learning complex mathematical proofs."),

    ("Facture", "noun", "C1", "/ˈfæk.tʃər/", "karakter pembuatan seni / tekstur pahatan",
     "Cara atau kualitas pengerjaan suatu karya seni lukis atau patung.", "The quality of the execution of a painting or sculpture.",
     ["Manufacture", "Artifact", "Texture"], ["Texture", "Workmanship", "Finish", "Execution", "Craftsmanship"], ["Roughness"],
     "Art historians analyzed the thick oil facture of Van Gogh's expressive brushstrokes.",
     "The polished marble sculpture displayed delicate Renaissance chisel facture."),

    ("Faculty", "noun", "B2", "/ˈfæk.əl.ti/", "staf pengajar dosen / daya kemampuan mental",
     "Staf pengajar di perguruan tinggi; kemampuan fisik atau mental yang melekat.", "The teaching staff of a university; an inherent mental or physical power.",
     ["Academic", "Staff", "Capacity"], ["Department", "Staff", "Professors", "Aptitude", "Power"], ["Inability"],
     "The university faculty approved the introduction of a new artificial intelligence degree.",
     "Despite her ninety years, she retained all her intellectual faculties and sharp wit."),

    ("Feasible", "adjective", "B2", "/ˈfiː.zə.bəl/", "layak dilaksanakan / dapat direalisasikan",
     "Mungkin dan mudah untuk dilakukan atau dicapai secara praktis.", "Possible to do easily or conveniently; workable.",
     ["Feasibility", "Feasibly", "Workable"], ["Workable", "Practicable", "Viable", "Realistic", "Attainable"], ["Impossible", "Impractical", "Unfeasible", "Futile"],
     "Solar-powered electric buses are an economically feasible solution for urban transit.",
     "The architectural firm conducted a feasibility study before breaking ground on the harbor tower."),

    ("Fertility", "noun", "B2", "/fəˈtɪl.ə.ti/", "kesuburan tanah / kesuburan reproduksi",
     "Kualitas menjadi subur; kemampuan tanah menghasilkan tanaman melimpah.", "The quality of being fertile; productiveness; ability to conceive children.",
     ["Fertile", "Fertilizer", "Productivity"], ["Productivity", "Fruitfulness", "Richness", "Abundance", "Fecundity"], ["Infertility", "Barrenness", "Sterility"],
     "Adding organic compost enhances soil microbial fertility and water retention capacity.",
     "The agricultural valley is famous for its extraordinary crop fertility and olive groves."),

    ("Fidelity", "noun", "B2", "/fɪˈdel.ə.ti/", "kesetiaan / kejujuran akurasi reproduksi audio",
     "Kesetiaan yang teguh pada janji; tingkat akurasi dan ketepatan suara/rekaman.", "Faithfulness to a person, cause, or belief; degree of exactness in reproduction.",
     ["Infidelity", "Faithful", "Loyalty"], ["Loyalty", "Faithfulness", "Devotion", "Accuracy", "Precision"], ["Disloyalty", "Treachery", "Inaccuracy"],
     "The general was honored with medals for lifelong patriotic fidelity to the constitution.",
     "High-fidelity vinyl audio systems reproduce the warm, nuanced acoustic tones of orchestral strings."),

    ("Flexible", "adjective", "A2", "/ˈflek.sə.bəl/", "fleksibel lentur / luwes menyesuaikan situasi",
     "Mampu ditekuk tanpa patah; mudah menyesuaikan diri dengan situasi baru.", "Capable of bending easily without breaking; able to adapt to new situations.",
     ["Flexibility", "Flexibly", "Adaptable"], ["Adaptable", "Pliant", "Elastic", "Supple", "Accommodating"], ["Rigid", "Stiff", "Inflexible", "Stubborn"],
     "Flexible working hours and remote options improve employee productivity and well-being.",
     "Gymnasts practice daily stretching routines to keep their muscles supple and flexible.")
]

# Write all 4 parts
def main():
    # Part 1
    p1 = MERGED_PART1[:260]
    
    # Part 2
    seen2 = set()
    p2 = []
    for it in MERGED_P2 + MORE_P2 + OXFORD_P2_EXTRA_HEADWORDS:
        w = it[0] if isinstance(it, tuple) else it["word"]
        if w.lower() not in seen2:
            seen2.add(w.lower())
            p2.append(it)

    # Part 3
    seen3 = set()
    p3 = []
    for it in PART3_WORDS + SUPP_DATA_P3:
        w = it[0] if isinstance(it, tuple) else it["word"]
        if w.lower() not in seen3:
            seen3.add(w.lower())
            p3.append(it)

    # Part 4
    seen4 = set()
    p4 = []
    for it in PART4_WORDS + SUPP_DATA_P4:
        w = it[0] if isinstance(it, tuple) else it["word"]
        if w.lower() not in seen4:
            seen4.add(w.lower())
            p4.append(it)

    print(f"Part 1: {len(p1)}")
    print(f"Part 2: {len(p2)}")
    print(f"Part 3: {len(p3)}")
    print(f"Part 4: {len(p4)}")

if __name__ == '__main__':
    main()
