#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Oxford 3000 & 5000 - Part 1 Full: Letters A - D (260 words)"""

from scripts.data_part1 import PART1_WORDS
from scripts.build_part1_data import WORDS_A_D

# Merge and deduplicate while ensuring 260 distinct headwords
seen = set()
MERGED_PART1 = []

for item in PART1_WORDS + WORDS_A_D:
    word = item[0]
    if word.lower() not in seen:
        seen.add(word.lower())
        MERGED_PART1.append(item)

# Additional A-D words if needed to reach 260
EXTRA_AD = [
    ("Absorb", "verb", "B2", "/əbˈzɔːb/", "menyerap cairan/ilmu / memikat perhatian",
     "Menyerap cairan, panas, atau pengetahuan secara mendalam.", "To take in or soak up energy, liquid, or other substance; engross.",
     ["Absorption", "Absorbent", "Imbibe"], ["Soak up", "Assimilate", "Ingest", "Engross", "Incorporate"], ["Emit", "Repel", "Exude", "Discharge"],
     "Sponges easily absorb water and cleaning liquid from kitchen countertops.",
     "Bright students absorb new language concepts quickly through interactive storytelling."),

    ("Abstract", "adjective", "B2", "/ˈæb.strækt/", "abstrak / bersifat konseptual / bukan fisik",
     "Berkaitan dengan gagasan teoretis bukan benda nyata berwujud.", "Existing in thought or as an idea but not having a physical or concrete existence.",
     ["Abstraction", "Abstractly", "Conceptual"], ["Conceptual", "Theoretical", "Intellectual", "Philosophical", "Intangible"], ["Concrete", "Tangible", "Physical", "Definite"],
     "Pure mathematics often deals with abstract theorems and multidimensional equations.",
     "The modern art gallery showcased abstract oil paintings featuring vibrant geometric colors."),

    ("Abundance", "noun", "B2", "/əˈbʌn.dəns/", "kelimpahan / jumlah sangat banyak / kemakmuran",
     "Jumlah yang sangat besar atau melimpah ruah dari suatu hal.", "A very large quantity of something; plentifulness and prosperity.",
     ["Abundant", "Abundantly", "Profusion"], ["Profusion", "Plenty", "Surplus", "Bounty", "Copiousness"], ["Scarcity", "Dearth", "Shortage", "Lack"],
     "The tropical volcanic island is blessed with an abundance of fertile soil and fresh springs.",
     "During the autumn harvest festival, farmers celebrated an abundance of sweet apples and pumpkins."),

    ("Accelerate", "verb", "B2", "/əkˈsel.ə.reɪt/", "mempercepat laju / meningkatkan kecepatan",
     "Meningkatkan kecepatan gerak, pertumbuhan, atau perkembangan.", "To increase in speed or cause to happen more quickly.",
     ["Acceleration", "Accelerator", "Hasten"], ["Hasten", "Quicken", "Expedite", "Speed up", "Spur"], ["Decelerate", "Slow down", "Brake", "Retard"],
     "Electric vehicles can accelerate from zero to sixty miles per hour in seconds.",
     "Government subsidies accelerated the development of commercial solar energy farms across the country."),

    ("Accessory", "noun", "B2", "/əkˈses.ər.i/", "aksesori / perlengkapan pelengkap / hiasan",
     "Barang tambahan yang melengkapi fungsi atau mempercantik penampilan.", "A thing that can be added to something else in order to make it more useful or attractive.",
     ["Accessorial", "Attachment", "Addition"], ["Attachment", "Add-on", "Supplement", "Ornament", "Adornment"], ["Core", "Essential component"],
     "Leather belts and silver watches are classic accessories for formal business suits.",
     "The camera kit comes with optional accessories such as wide-angle lenses and tripod mounts."),

    ("Acclaimed", "adjective", "C1", "/əˈkleɪmd/", "terkenal dan dipuji luas / diakui kehebatannya",
     "Mendapat sanjungan tinggi dan pujian antusias dari para kritikus publik.", "Publicly praised; celebrated with great enthusiasm by critics.",
     ["Acclaim", "Celebrated", "Renowned"], ["Renowned", "Celebrated", "Eminent", "Distinguished", "Lauded"], ["Criticized", "Obscure", "Unknown", "Condemned"],
     "The internationally acclaimed pianist performed a moving Chopin concerto at Carnegie Hall.",
     "Her debut novel was acclaimed by literary critics as a masterpiece of contemporary fiction."),

    ("Accomplish", "verb", "B1", "/əˈkʌm.plɪʃ/", "menyelesaikan tugas / mencapai prestasi sukses",
     "Menyelesaikan suatu target atau misi dengan sukses melalui kerja keras.", "To achieve or complete successfully through effort, skill, or courage.",
     ["Accomplishment", "Accomplished", "Achieve"], ["Achieve", "Fulfill", "Execute", "Attain", "Realize"], ["Fail", "Abandon", "Neglect", "Forfeit"],
     "Through disciplined daily study, she managed to accomplish her dream of entering medical school.",
     "The engineering team worked tirelessly to accomplish the bridge construction ahead of schedule."),

    ("Accuracy", "noun", "B2", "/ˈæk.jə.rə.si/", "akurasi / ketepatan ukuran / ketelitian",
     "Kualitas tepat, teliti, dan bebas dari kesalahan perhitungan.", "The quality or state of being correct, precise, or exact.",
     ["Accurate", "Accurately", "Inaccurate"], ["Precision", "Exactness", "Correctness", "Fidelity", "Veracity"], ["Inaccuracy", "Error", "Imprecision", "Fallacy"],
     "Modern satellite navigation receivers provide position accuracy within a few centimeters.",
     "Scientific experiments require strict laboratory conditions to ensure maximum measurement accuracy."),

    ("Acquire", "verb", "B2", "/əˈkwaɪər/", "memperoleh aset / mempelajari keterampilan baru",
     "Mendapatkan kepemilikan atas sesuatu; menguasai ilmu baru.", "To buy or obtain an asset for oneself; learn or develop a skill.",
     ["Acquisition", "Acquired", "Obtain"], ["Obtain", "Gain", "Procure", "Secure", "Attain"], ["Lose", "Relinquish", "Forfeit", "Discard"],
     "Children acquire language naturally through immersion and daily conversational interaction.",
     "The university museum managed to acquire a rare collection of ancient Roman coins."),

    ("Activate", "verb", "B1", "/ˈæk.tɪ.veɪt/", "mengaktifkan alat / menyalakan sistem mesin",
     "Membuat sesuatu mulai bekerja atau berfungsi secara aktif.", "To make something active or operational; trigger a mechanism.",
     ["Activation", "Active", "Trigger"], ["Trigger", "Initiate", "Turn on", "Start", "Energize"], ["Deactivate", "Disable", "Turn off", "Halt"],
     "Smoke particles in the room will activate the automatic ceiling fire alarm.",
     "Enter the verification passcode sent to your phone to activate your new online banking account."),

    ("Acute", "adjective", "B2", "/əˈkjuːt/", "akut / parah mendadak / tajam penglihatan",
     "Kondisi sakit parah yang datang tiba-tiba; pikiran yang sangat tajam.", "Present or experienced to a severe or intense degree; sharp perceptive senses.",
     ["Acutely", "Acuteness", "Sharp"], ["Severe", "Critical", "Sharp", "Intense", "Keen"], ["Chronic", "Mild", "Dull", "Blunt"],
     "The patient was admitted to the emergency ward suffering from acute appendicitis.",
     "Dogs possess an acute sense of hearing that can detect high-frequency sound waves."),

    ("Addiction", "noun", "B2", "/əˈdɪk.ʃən/", "kecanduan zat / ketergantungan kompulsif",
     "Kondisi ketergantungan fisik atau psikologis yang sulit dihentikan.", "The condition of being addicted to a particular substance, thing, or activity.",
     ["Addict", "Addictive", "Addicted"], ["Dependence", "Compulsion", "Obsession", "Habit"], ["Abstinence", "Freedom", "Sobriety"],
     "Counseling centers provide supportive therapies to help individuals overcome nicotine addiction.",
     "Studies examine the effects of excessive social media addiction on adolescent mental well-being."),

    ("Adequate", "adjective", "B1", "/ˈæd.ə.kwət/", "memadai / cukup memenuhi standar kebutuhan",
     "Cukup dalam jumlah atau mutu untuk memenuhi kebutuhan tertentu.", "Satisfactory or acceptable in quality or quantity.",
     ["Adequately", "Adequacy", "Inadequate"], ["Sufficient", "Enough", "Satisfactory", "Ample", "Acceptable"], ["Inadequate", "Insufficient", "Lacking", "Deficient"],
     "Ensure children receive adequate hydration and nutrition during summer sports camps.",
     "The old heating system is no longer adequate to warm the entire school during winter."),

    ("Adhere", "verb", "B2", "/ədˈhɪər/", "menempel erat / patuh setia pada aturan",
     "Menempel kuat pada permukaan; tetap setia pada prinsip moral.", "To stick firmly to a surface; to follow rules or practices strictly.",
     ["Adherence", "Adherent", "Stick"], ["Stick", "Cling", "Comply", "Follow", "Abide"], ["Separate", "Detach", "Violate", "Disobey"],
     "Medical bandages must adhere firmly to dry skin to keep surgical wounds clean.",
     "All employees must strictly adhere to the company's cybersecurity protocols."),

    ("Adjacent", "adjective", "B2", "/əˈdʒeɪ.sənt/", "bersebelahan / berdampingan langsung / berdekatan",
     "Terletak berdampingan atau menempel langsung dengan tempat lain.", "Next to or adjoining something else; sharing a common boundary.",
     ["Adjacency", "Adjoin", "Neighboring"], ["Neighboring", "Adjoining", "Contiguous", "Bordering", "Next-door"], ["Distant", "Remote", "Far", "Separate"],
     "The new parking garage was built adjacent to the central railway passenger terminal.",
     "Guests staying in adjacent hotel rooms shared a connecting door for convenience."),

    ("Administer", "verb", "B2", "/ədˈmɪn.ɪ.stər/", "mengelola / menyelenggarakan / memberi obat",
     "Mengatur jalannya tugas atau memberikan perawatan/obat secara profesional.", "To manage or organize; to dispense or apply something like medicine.",
     ["Administration", "Administrator", "Administrative"], ["Manage", "Direct", "Dispense", "Distribute", "Execute"], ["Neglect", "Mismanage"],
     "The nurse was trained to administer intravenous medication safely.",
     "A neutral electoral commission was formed to administer the national presidential voting process."),

    ("Admire", "verb", "A2", "/ədˈmaɪər/", "mengagumi / memuji keindahan atau prestasi",
     "Memandang dengan rasa takjub, hormat, dan senang.", "To regard with respect, warm approval, or wonder.",
     ["Admiration", "Admirable", "Admirer"], ["Respect", "Applaud", "Esteem", "Praise", "Venerate"], ["Scorn", "Despise", "Disdain", "Criticize"],
     "Visitors from across the globe gather to admire the historic stained glass windows of the cathedral.",
     "I deeply admire her unwavering courage and dedication to protecting endangered wildlife habitats."),

    ("Adolescent", "noun", "B2", "/ˌæd.əˈles.ənt/", "remaja muda / pemuda masa pubertas",
     "Seseorang yang berada dalam masa transisi antara anak-anak dan dewasa.", "A young person in the process of developing from a child into an adult.",
     ["Adolescence", "Youth", "Teen"], ["Teenager", "Youth", "Juvenile", "Minor", "Youngster"], ["Adult", "Elder", "Senior"],
     "Adolescents experience rapid hormonal, emotional, and cognitive developmental changes during puberty.",
     "The community sports club organizes weekend coaching clinics tailored specifically for adolescents."),

    ("Adopt", "verb", "B1", "/əˈdɒpt/", "mengadopsi anak / menerapkan metode baru",
     "Mengambil anak orang lain menjadi anak sah; memilih menggunakan rencana baru.", "To legally take another's child and bring it up; choose to take up or follow an approach.",
     ["Adoption", "Adoptive", "Adopted"], ["Embrace", "Implement", "Utilize", "Foster", "Assume"], ["Reject", "Abandon", "Discard", "Spurn"],
     "Many families choose to adopt children from international foster care organizations.",
     "Hospitals across the country have decided to adopt new digital electronic health record systems."),

    ("Adore", "verb", "B1", "/əˈdɔːr/", "sangat memuja / menyukai sekali dengan tulus",
     "Mencintai atau menyukai seseorang/sesuatu dengan sangat mendalam.", "To love and respect someone deeply; to like something very much.",
     ["Adoration", "Adorable", "Cherish"], ["Cherish", "Worship", "Idolize", "Treasure", "Love"], ["Hate", "Detest", "Abhor", "Loathe"],
     "Grandparents often adore their grandchildren and spoil them with sweet treats.",
     "She adores classical piano concerts and attends the symphony orchestra every weekend."),

    ("Adorn", "verb", "C1", "/əˈdɔːn/", "menghias indah / mempercantik dekorasi",
     "Membuat sesuatu tampak lebih indah dengan menambahkan hiasan estetis.", "To make more beautiful or attractive; decorate with ornaments.",
     ["Adornment", "Decorate", "Embellish"], ["Decorate", "Embellish", "Ornament", "Beautify", "Deck"], ["Deface", "Disfigure", "Strip", "Mar"],
     "Intricate gold embroidery and colorful silk tassels adorn the royal ceremonial robe.",
     "Fresh jasmine flower garlands adorn the entrance doorway during traditional wedding celebrations."),

    ("Advance", "noun", "B1", "/ədˈvɑːns/", "kemajuan teknologi / pergerakan maju / uang muka",
     "Perkembangan ke arah yang lebih baik; pergerakan ke depan; pinjaman awal.", "A forward movement; a development or improvement; money paid before due.",
     ["Advanced", "Advancement", "Progress"], ["Progress", "Breakthrough", "Headway", "Growth", "Prepayment"], ["Retreat", "Regression", "Decline"],
     "Recent advances in gene therapy offer new hope for treating rare hereditary disorders.",
     "The publisher paid the author a substantial financial advance upon signing the book contract."),

    ("Adversary", "noun", "B2", "/ˈæd.və.sər.i/", "lawan tanding / musuh bebuyutan / penentang",
     "Orang atau kelompok yang menentang atau bertarung melawan yang lain.", "One's opponent in a contest, conflict, or dispute.",
     ["Adverse", "Adversarial", "Opponent"], ["Opponent", "Rival", "Enemy", "Foe", "Antagonist"], ["Ally", "Partner", "Friend", "Supporter"],
     "The grandmaster analyzed previous games to identify tactical weaknesses in his chess adversary.",
     "Diplomats sought peaceful channels to negotiate with their geopolitical adversaries and de-escalate tensions."),

    ("Advocate", "noun", "B2", "/ˈæd.və.kət/", "advokat / pembela kebenaran / pendukung gagasan",
     "Seseorang yang secara aktif mendukung atau membela isu kebijakan tertentu.", "A person who publicly supports or recommends a particular cause or policy.",
     ["Advocacy", "Advocate", "Champion"], ["Champion", "Supporter", "Proponent", "Spokesperson", "Defender"], ["Opponent", "Critic", "Detractor"],
     "She is a vocal advocate for renewable clean energy and wildlife conservation legislation.",
     "Patient advocates help individuals navigate insurance coverage and hospital billing procedures."),

    ("Aesthetic", "adjective", "B2", "/esˈθet.ɪk/", "estetis / bernilai keindahan seni",
     "Berkaitan dengan apresiasi terhadap keindahan, seni, dan cita rasa tinggi.", "Concerned with beauty or the appreciation of beauty; pleasing in appearance.",
     ["Aesthetics", "Aesthetically", "Artistic"], ["Artistic", "Tasteful", "Beautiful", "Graceful", "Stylistic"], ["Ugly", "Unattractive", "Crude", "Grotesque"],
     "Minimalist interior design balances functional utility with clean aesthetic simplicity.",
     "The historic wooden bridge was preserved not only for transportation but for its aesthetic charm."),

    ("Affluent", "adjective", "B2", "/ˈæf.lu.ənt/", "makmur kaya raya / berlimpah harta",
     "Memiliki banyak uang, kekayaan materi, atau standar hidup mewah.", "Having a great deal of money; wealthy and prosperous.",
     ["Affluence", "Wealthy", "Prosperous"], ["Wealthy", "Prosperous", "Rich", "Opulent", "Well-to-do"], ["Poor", "Impoverished", "Destitute", "Needy"],
     "The tree-lined coastal neighborhood is home to many affluent entrepreneurs and executives.",
     "Affluent nations have a global humanitarian responsibility to support sustainable development in developing regions.")
]

for item in EXTRA_AD:
    word = item[0]
    if word.lower() not in seen:
        seen.add(word.lower())
        MERGED_PART1.append(item)

print(f"Total deduplicated words in Part 1: {len(MERGED_PART1)}")
