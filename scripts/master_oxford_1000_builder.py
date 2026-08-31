#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Master Oxford Dictionary 1,000+ Generator
Assembles and writes:
- src/data/oxfordPart1.ts (260 entries: A-D)
- src/data/oxfordPart2.ts (260 entries: E-L)
- src/data/oxfordPart3.ts (260 entries: M-R)
- src/data/oxfordPart4.ts (260 entries: S-Z)
Total: 1,040 entries.
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
from scripts.generate_complete_1040 import SUPPLEMENT_P2
from scripts.data_part3 import PART3_WORDS
from scripts.data_part4 import PART4_WORDS

def slugify(word):
    return 'dict-' + re.sub(r'[^a-z0-9]+', '-', word.lower()).strip('-')

# Supplementary word database to ensure every part hits exactly 260 distinct headwords
SUPP_DATA_P2 = [
    ("Fabricate", "verb", "B2", "/ˈfæb.rɪ.keɪt/", "merekayasa cerita / memproduksi komponen",
     "Membuat barang dengan merakit komponen; mengarang cerita atau bukti palsu.", "Construct or manufacture an industrial product; invent or concoct false information.",
     ["Fabrication", "Fabricator", "Construct"], ["Construct", "Manufacture", "Invent", "Concoct", "Assemble"], ["Dismantle", "Demolish", "Destroy"],
     "Specialized workshops fabricate custom aluminum framing for architectural facades.",
     "The dishonest witness attempted to fabricate an alibi during the criminal trial."),

    ("Facilitate", "verb", "B2", "/fəˈsɪl.ɪ.teɪt/", "memfasilitasi / mempermudah proses",
     "Membuat suatu tindakan atau proses menjadi lebih mudah atau lebih mungkin terjadi.", "Make an action or process easy or easier; smooth the progress of.",
     ["Facilitator", "Facilitation", "Assist"], ["Assist", "Ease", "Smooth", "Expedite", "Promote"], ["Impede", "Hinder", "Obstruct", "Block"],
     "Modern digital platforms facilitate international collaboration among academic researchers.",
     "A neutral mediator was invited to facilitate peace talks between the opposing parties."),

    ("Flawed", "adjective", "B2", "/flɔːd/", "memiliki cacat / keliru logikanya / bercacat cela",
     "Memiliki kelemahan, kesalahan logika, atau ketidaksempurnaan fisik.", "Having or characterized by a fundamental defect, blemish, or mistake.",
     ["Flaw", "Flawless", "Defective"], ["Defective", "Faulty", "Imperfect", "Blemished", "Erroneous"], ["Flawless", "Perfect", "Impeccable", "Sound"],
     "The structural inspection revealed a flawed concrete foundation in the newly built garage.",
     "Economists argued that the proposed taxation forecast was based on flawed assumptions."),

    ("Fluctuate", "verb", "B2", "/ˈflʌk.tʃu.eɪt/", "berfluktuasi / naik turun tidak stabil",
     "Berubah secara terus-menerus dan tidak beraturan dalam jumlah, tingkat, atau nilai.", "Rise and fall irregularly in number or amount; waver continuously.",
     ["Fluctuation", "Fluctuating", "Vary"], ["Vary", "Waver", "Oscillate", "Shift", "Alternate"], ["Stabilize", "Remain steady", "Settle"],
     "Cryptocurrency values tend to fluctuate wildly based on market sentiment and rumors.",
     "Body temperature will naturally fluctuate slightly throughout the day and night cycle."),

    ("Formidable", "adjective", "C1", "/fɔːˈmɪd.ə.bəl/", "tangguh menggetarkan / sukar ditaklukkan / dahsyat",
     "Menginspirasi rasa takut atau hormat karena kekuatan, ukuran, atau kemampuannya yang besar.", "Inspiring fear or respect through being impressively large, powerful, intense, or capable.",
     ["Formidably", "Imposing", "Daunting"], ["Daunting", "Fearsome", "Imposing", "Mighty", "Challenging"], ["Feeble", "Weak", "Insignificant", "Easy"],
     "The champion chess grandmaster faced a formidable young challenger in the world finals.",
     "Climbing K2 in winter presents formidable weather conditions and extreme physical challenges."),

    ("Fraction", "noun", "B1", "/ˈfræk.ʃən/", "sebagian kecil / pecahan matematika / fraksi",
     "Bagian kecil atau sebagian dari keseluruhan; bilangan pecahan dalam matematika.", "A small or tiny part, amount, or proportion of something; a numerical ratio.",
     ["Fractional", "Fractionally", "Portion"], ["Portion", "Fragment", "Segment", "Slice", "Part"], ["Whole", "Total", "Entirety"],
     "Only a tiny fraction of plastic containers are recycled into new consumer goods worldwide.",
     "The high-speed train completes the journey in a fraction of the time taken by automobile."),

    ("Generous", "adjective", "A2", "/ˈdʒen.ər.əs/", "dermawan / murah hati / berporsi melimpah",
     "Menunjukkan kesiapan untuk memberi lebih dari yang diharapkan; porsi yang banyak.", "Showing a readiness to give more of something, especially money, than is strictly necessary.",
     ["Generosity", "Generously", "Benevolent"], ["Benevolent", "Charitable", "Bountiful", "Munificent", "Unselfish"], ["Stingy", "Miserly", "Selfish", "Greedy"],
     "The university established a new scholarship fund through a generous donation from an alumnus.",
     "The restaurant serves generous portions of fresh pasta tossed in homemade tomato sauce."),

    ("Genuine", "adjective", "B1", "/ˈdʒen.ju.ɪn/", "asli otentik / tulus dari hati",
     "Benar-benar seperti yang dinyatakan, bukan tiruan; tulus dan jujur tanpa kepalsuan.", "Truly what something is said to be; authentic, sincere, and honest.",
     ["Genuinely", "Genuineness", "Authentic"], ["Authentic", "Real", "Sincere", "Honest", "Legitimate"], ["Fake", "Counterfeit", "Insincere", "Spurious"],
     "The antique collector verified that the oil painting was a genuine seventeenth-century original.",
     "Her warm smile and listening ear reflected a genuine concern for the community's welfare."),

    ("Glimpse", "noun", "B1", "/ɡlɪmps/", "sekilas pandang / kilasan pandangan singkat",
     "Pemandangan sekilas atau pandangan singkat yang tidak lengkap terhadap sesuatu.", "A momentary or partial view; a brief sight or impression.",
     ["Glimpsing", "Peek", "Glance"], ["Glance", "Peek", "Peep", "Sight", "View"], ["Stare", "Scrutiny", "Gaze"],
     "Through the thick morning mist, hikers caught a fleeting glimpse of the snowcapped peak.",
     "The historical diary provides a fascinating glimpse into daily life during the Renaissance."),

    ("Gratitude", "noun", "B1", "/ˈɡræt.ɪ.tʃuːd/", "rasa terima kasih mendalam / rasa syukur",
     "Perasaan bersyukur dan berterima kasih atas kebaikan yang telah diterima.", "The quality of being thankful; readiness to show appreciation and return kindness.",
     ["Grateful", "Gratefully", "Thankfulness"], ["Thankfulness", "Appreciation", "Recognition", "Indebtedness", "Grace"], ["Ingratitude", "Unthankfulness"],
     "The rescued sailors expressed heartfelt gratitude to the helicopter coastguard crew.",
     "Writing in a daily gratitude journal can enhance mental well-being and life satisfaction."),

    ("Guarantee", "verb", "B1", "/ˌɡær.ənˈtiː/", "menjamin kepastian / memberi garansi produk",
     "Memberikan jaminan resmi bahwa suatu kondisi akan dipenuhi atau produk akan diperbaiki.", "Provide a formal assurance or promise, especially that certain conditions will be fulfilled.",
     ["Guarantor", "Guaranteed", "Assure"], ["Assure", "Pledge", "Secure", "Vouch", "Ensure"], ["Risk", "Jeopardize", "Cancel"],
     "The manufacturer offers a five-year warranty to guarantee the mechanical durability of the engine.",
     "A good education does not guarantee instant wealth, but it builds lifelong problem-solving skills."),

    ("Habitat", "noun", "B1", "/ˈhæb.ɪ.tæt/", "habitat alami / tempat tinggal flora fauna",
     "Lingkungan alami tempat suatu tanaman atau hewan biasanya hidup dan berkembang biak.", "The natural home or environment of an animal, plant, or other organism.",
     ["Habitation", "Inhabit", "Environment"], ["Environment", "Ecosystem", "Territory", "Home", "Biome"], ["Unnatural setting"],
     "Tropical rainforests provide a rich biodiversity habitat for thousands of bird and insect species.",
     "Urban expansion poses a serious threat to the natural wetland habitat of migratory waterfowl."),

    ("Harbor", "noun", "A2", "/ˈhɑː.bər/", "pelabuhan kapal / tempat perlindungan perahu",
     "Tempat di pantai tempat kapal dapat berlindung dari badai atau membongkar muatan.", "A place on the coast where vessels may find shelter, especially one protected from rough water.",
     ["Harboring", "Port", "Haven"], ["Port", "Haven", "Dock", "Anchorage", "Marina"], ["Open sea"],
     "Fishing boats returned safely to the sheltered harbor before the coastal gale arrived.",
     "The city grew into a prosperous trade center thanks to its deepwater natural harbor."),

    ("Hierarchy", "noun", "B2", "/ˈhaɪə.rɑː.ki/", "hierarki tingkatan / struktur jenjang kekuasaan",
     "Sistem di mana anggota suatu organisasi diberi peringkat sesuai status atau wewenang.", "A system in which members of an organization or society are ranked according to relative status.",
     ["Hierarchical", "Hierarchically", "Pecking order"], ["Pecking order", "Ranking", "Gradation", "Scale", "Ladder"], ["Equality", "Anarchy"],
     "The military operates on a rigid rank hierarchy that demands immediate obedience to orders.",
     "Some modern software startups prefer flat organizational structures over traditional corporate hierarchies."),

    ("Hostile", "adjective", "B2", "/ˈhɒs.taɪl/", "bermusuhan / penuh kebencian / kondisi lingkungan ganas",
     "Menunjukkan permusuhan atau rasa tidak suka yang kuat; kondisi lingkungan yang keras.", "Unfriendly; antagonistic; of or belonging to a military enemy; harsh and inhospitable.",
     ["Hostility", "Hostilely", "Antagonistic"], ["Antagonistic", "Unfriendly", "Adversarial", "Inhospitable", "Combative"], ["Friendly", "Welcoming", "Hospitable", "Peaceful"],
     "The explorers encountered hostile terrain and freezing winds as they crossed the desert plateau.",
     "Diplomatic negotiations broke down after both delegates exchanged hostile accusations."),

    ("Hypothesis", "noun", "B2", "/haɪˈpɒθ.ə.sɪs/", "hipotesis / dugaan sementara ilmiah",
     "Penjelasan yang diusulkan dan dapat diuji untuk suatu fenomena berdasarkan bukti terbatas.", "A proposed explanation made on the basis of limited evidence as a starting point for further investigation.",
     ["Hypothetical", "Hypothesize", "Theory"], ["Theory", "Proposition", "Premise", "Supposition", "Postulate"], ["Fact", "Certainty", "Truth", "Proof"],
     "The research team designed a laboratory experiment to test their chemical reaction hypothesis.",
     "Further empirical data disproved the initial hypothesis regarding planetary atmosphere formation.")
]

# Supplementary data for Part 3 (M - R)
SUPP_DATA_P3 = [
    ("Manifest", "verb", "C1", "/ˈmæn.ɪ.fest/", "memanifestasikan / mewujudkan secara nyata / jelas terlihat",
     "Menunjukkan sesuatu secara jelas melalui tanda atau tindakan; menjadi nyata terlihat.", "Show something clearly by signs or actions; appear or become apparent.",
     ["Manifestation", "Manifesto", "Demonstrate"], ["Demonstrate", "Exhibit", "Reveal", "Display", "Embody"], ["Hide", "Conceal", "Suppress"],
     "Stress can manifest physically through tension headaches, muscle tightness, and insomnia.",
     "Her dedication to community education began to manifest in rising neighborhood literacy scores."),

    ("Mastery", "noun", "B2", "/ˈmɑː.stər.i/", "penguasaan mahir / keahlian tingkat tinggi",
     "Keahlian atau pengetahuan yang menyeluruh dan mendalam mengenai suatu subjek atau alat.", "Comprehensive knowledge or skill in a subject or accomplishment.",
     ["Master", "Masterful", "Proficiency"], ["Proficiency", "Expertise", "Skill", "Command", "Dexterity"], ["Incompetence", "Clumsiness", "Ignorance"],
     "Achieving full mastery of the classical cello requires thousands of hours of focused practice.",
     "The programmer demonstrated absolute mastery of distributed database optimization."),

    ("Meticulous", "adjective", "C1", "/məˈtɪk.jə.ləs/", "sangat teliti cermat / rapi tanpa cela",
     "Menunjukkan perhatian yang sangat besar dan teliti terhadap setiap detail terkecil.", "Showing great attention to detail; very careful and precise.",
     ["Meticulously", "Meticulousness", "Scrupulous"], ["Scrupulous", "Painstaking", "Thorough", "Precise", "Fastidious"], ["Careless", "Sloppy", "Slapdash", "Negligent"],
     "The watchmaker used tiny tweezers to assemble the mechanical movement with meticulous care.",
     "Archaeologists conducted a meticulous excavation of the Roman villa floor mosaic."),

    ("Migrate", "verb", "B1", "/maɪˈɡreɪt/", "bermigrasi / berpindah musiman / memindahkan data",
     "Berpindah dari satu wilayah ke wilayah lain sesuai musim; memindahkan data digital ke sistem baru.", "Move from one region to another according to the seasons; transfer data or software.",
     ["Migration", "Migratory", "Relocate"], ["Relocate", "Travel", "Trek", "Emigrate", "Transfer"], ["Remain", "Stay", "Settle permanently"],
     "Flocks of arctic swallows migrate thousands of kilometers south every autumn to escape freezing temperatures.",
     "The IT department worked overnight to migrate company records to secure cloud servers."),

    ("Milestone", "noun", "B2", "/ˈmaɪl.stəʊn/", "tonggak pencapaian bersejarah / patok tanda kemajuan",
     "Peristiwa atau pencapaian yang sangat penting dalam perkembangan atau sejarah sesuatu.", "A significant stage or event in the development of something; an important achievement.",
     ["Landmark", "Turning point", "Breakthrough"], ["Landmark", "Turning point", "Breakthrough", "Highlight", "Bench-mark"], ["Insignificance", "Routine"],
     "Graduating from medical school was a momentous milestone in her lifelong professional journey.",
     "The discovery of graphene represented a major scientific milestone in materials engineering."),

    ("Mimic", "verb", "B2", "/ˈmɪm.ɪk/", "meniru gaya/suara / menyerupai secara alami",
     "Menirukan suara, gerak tubuh, atau penampilan seseorang atau sesuatu, sering kali untuk menghibur.", "Imitate someone or something, typically in order to entertain or ridicule; resemble closely.",
     ["Mimicry", "Mime", "Imitate"], ["Imitate", "Copy", "Ape", "Echo", "Simulate"], ["Differ", "Contrast", "Original"],
     "Certain harmless hoverfly species mimic the yellow and black stripes of stinging wasps to deter predators.",
     "The voice actor can effortlessly mimic regional accents from all across the British Isles."),

    ("Modify", "verb", "B1", "/ˈmɒd.ɪ.faɪ/", "memodifikasi / mengubah sedikit untuk menyempurnakan",
     "Membuat perubahan kecil pada sesuatu guna memperbaikinya atau menyesuaikan dengan kondisi baru.", "Make partial or minor changes to something, typically so as to improve it or to make it less extreme.",
     ["Modification", "Modified", "Alter"], ["Alter", "Adjust", "Adapt", "Amend", "Refine"], ["Leave unchanged", "Preserve", "Stagnate"],
     "Engineers had to modify the aircraft wing design to reduce drag and enhance fuel efficiency.",
     "The chef offered to modify the recipe for diners requiring gluten-free and vegan accommodations."),

    ("Momentum", "noun", "B2", "/məˈmen.təm/", "momentum dorongan laju / gaya gerak berkelanjutan",
     "Kekuatan atau dorongan yang diperoleh oleh benda yang bergerak atau proses yang sedang berkembang.", "The quantity of motion of a moving body; the impetus gained by a moving object or development.",
     ["Momentous", "Impetus", "Thrust"], ["Impetus", "Drive", "Thrust", "Speed", "Force"], ["Inertia", "Stagnation", "Standstill"],
     "The clean energy campaign gained tremendous political momentum after the international summit.",
     "A heavy freight train requires a long braking distance due to its enormous physical momentum."),

    ("Monopoly", "noun", "B2", "/məˈnɒp.əl.i/", "monopoli pasar / penguasaan tunggal eksklusif",
     "Penguasaan eksklusif atas pasokan komoditas atau layanan dalam pasar tertentu.", "The exclusive possession or control of the supply of or trade in a commodity or service.",
     ["Monopolize", "Monopolistic", "Dominance"], ["Cartel", "Dominance", "Corner", "Sole ownership", "Exclusive control"], ["Competition", "Free market", "Plurality"],
     "Antitrust regulators investigated whether the technology giant held an illegal monopoly over app distribution.",
     "Historically, the royal trading company held a strict monopoly over the maritime spice trade."),

    ("Motivation", "noun", "B1", "/ˌməʊ.tɪˈveɪ.ʃən/", "motivasi pendorong / alasan bersemangat bertindak",
     "Alasan atau dorongan yang membuat seseorang bertindak atau berperilaku dengan cara tertentu.", "The reason or reasons one has for acting or behaving in a particular way; enthusiasm.",
     ["Motivate", "Motivational", "Incentive"], ["Incentive", "Drive", "Inspiration", "Ambition", "Impulse"], ["Apathy", "Discouragement", "Lethargy", "Disinterest"],
     "Intrinsic personal curiosity provides long-lasting motivation for mastering difficult scientific concepts.",
     "The team found renewed motivation after their coach gave an inspiring locker room speech."),

    ("Mutual", "adjective", "B1", "/ˈmjuː.tʃu.əl/", "saling / timbal balik / dirasakan bersama",
     "Dialami atau dilakukan oleh masing-masing pihak terhadap yang lain; dimiliki bersama.", "Held in common by two or more parties; experienced or done by each of two or more parties toward the other.",
     ["Mutually", "Mutuality", "Reciprocal"], ["Reciprocal", "Shared", "Joint", "Common", "Bilateral"], ["Unilateral", "One-sided", "Individual"],
     "A successful working partnership is built on mutual respect, honesty, and shared objectives.",
     "They discovered they had several mutual friends through their university alumni association.")
]

# Supplementary data for Part 4 (S - Z)
SUPP_DATA_P4 = [
    ("Tactile", "adjective", "C1", "/ˈtæk.taɪl/", "taktil / berkaitan dengan indra perabaan",
     "Berkaitan dengan indra sentuhan atau dapat dirasakan melalui rabaan fisik.", "Of or connected with the sense of touch; perceptible by touch.",
     ["Tactility", "Tactilely", "Palpable"], ["Palpable", "Tangible", "Physical", "Touchable", "Sensory"], ["Intangible", "Visual", "Auditory"],
     "Braille uses raised tactile dots that enable visually impaired individuals to read with their fingertips.",
     "The museum designed an interactive children's room filled with tactile textured learning materials."),

    ("Tenacious", "adjective", "C1", "/təˈneɪ.ʃəs/", "gigih ulet / memegang teguh pantang menyerah",
     "Cenderung mempertahankan pegangan yang kuat; bertekad bulat dan sangat gigih.", "Tending to keep a firm hold of something; clinging or adhering closely; persistent.",
     ["Tenacity", "Tenaciously", "Persistent"], ["Persistent", "Stubborn", "Determined", "Resolute", "Dogged"], ["Yielding", "Weak", "Fickle", "Surrendering"],
     "The investigative journalist was tenacious in uncovering hidden public corruption documents.",
     "Ivy is a tenacious climbing plant with rootlets that grip securely onto brick walls."),

    ("Threshold", "noun", "B2", "/ˈθreʃ.həʊld/", "ambang batas / pintu masuk permulaan",
     "Potongan kayu atau batu di dasar pintu; tingkat atau titik saat sesuatu mulai terjadi.", "A strip of wood or stone forming the bottom of a doorway; the magnitude or intensity that must be exceeded for a certain result.",
     ["Thresholding", "Brink", "Boundary"], ["Brink", "Boundary", "Doorstep", "Starting point", "Margin"], ["Interior", "Center"],
     "The patient had a remarkably high pain threshold and recovered swiftly from orthopedic surgery.",
     "Humanity stands on the historical threshold of widespread commercial artificial intelligence deployment."),

    ("Transformative", "adjective", "C1", "/trænsˈfɔː.mə.tɪv/", "transformatif / membawa perubahan mendasar",
     "Menyebabkan perubahan besar dan mendasar pada bentuk, penampilan, atau karakter sesuatu.", "Causing a marked change in someone or something, especially for the better.",
     ["Transformation", "Transform", "Revolutionary"], ["Revolutionary", "Life-changing", "Radical", "Groundbreaking", "Profound"], ["Superficial", "Static", "Minor"],
     "Access to clean solar electricity had a transformative impact on education in rural villages.",
     "Studying abroad during college proved to be a transformative experience that broadened her worldview."),

    ("Transition", "noun", "B1", "/trænˈzɪʃ.ən/", "masa transisi / peralihan bertahap",
     "Proses atau periode perubahan dari satu kondisi, status, atau tempat ke kondisi lainnya.", "The process or a period of changing from one state or condition to another.",
     ["Transitional", "Transit", "Shift"], ["Shift", "Passage", "Conversion", "Changeover", "Evolution"], ["Stagnation", "Continuity", "Fixity"],
     "The country managed a peaceful democratic transition following constitutional reform elections.",
     "Graduating from high school to university requires a major mental and lifestyle transition."),

    ("Transparency", "noun", "B2", "/trænˈspær.ən.si/", "transparansi / keterbukaan tata kelola / kejernihan",
     "Kondisi tembus pandang; keterbukaan dan kejujuran dalam urusan publik atau bisnis.", "The condition of being transparent; openness, communication, and accountability.",
     ["Transparent", "Transparently", "Openness"], ["Openness", "Accountability", "Clarity", "Honesty", "Lucidity"], ["Opacity", "Secrecy", "Deception", "Ambiguity"],
     "Civic organizations demand greater financial transparency in municipal government contracting.",
     "The pristine clarity and transparency of the tropical lagoon water allowed visitors to view corals from the boat."),

    ("Tremendous", "adjective", "B1", "/trɪˈmen.dəs/", "sangat dahsyat luar biasa / berukuran raksasa",
     "Sangat besar dalam jumlah, ukuran, atau intensitas; sangat hebat dan mengagumkan.", "Very great in amount, scale, or intensity; extremely good; remarkable.",
     ["Tremendously", "Immense", "Gigantic"], ["Immense", "Colossal", "Enormous", "Stupendous", "Extraordinary"], ["Tiny", "Insignificant", "Slight", "Minute"],
     "The medical research team made tremendous progress in identifying the genetic markers for Alzheimer's.",
     "The waterfall plunged into the gorge with tremendous acoustic power and billowing spray."),

    ("Turbulence", "noun", "B2", "/ˈtɜː.bjə.ləns/", "turbulensi / guncangan udara kencang / kekacauan",
     "Pergerakan udara atau air yang bergolak hebat dan tidak stabil; situasi yang penuh konflik.", "Violent or unsteady movement of air or water, or of some other fluid; a state of conflict or confusion.",
     ["Turbulent", "Turbulently", "Upheaval"], ["Upheaval", "Commotion", "Agitation", "Instability", "Storminess"], ["Calm", "Peace", "Serenity", "Tranquility"],
     "Passengers were instructed to fasten their seatbelts as the airplane encountered moderate atmospheric turbulence.",
     "The region suffered a decade of political turbulence before signing a lasting peace treaty."),

    ("Ubiquitous", "adjective", "C1", "/juːˈbɪk.wɪ.təs/", "ada di mana-mana / lazim tersebar luas",
     "Hadir, muncul, atau ditemukan di setiap tempat sekaligus; sangat umum dan tersebar luas.", "Present, appearing, or found everywhere; omnipresent.",
     ["Ubiquity", "Ubiquitously", "Omnipresent"], ["Omnipresent", "Everywhere", "Pervasive", "Universal", "Prevalent"], ["Rare", "Scarce", "Unique", "Isolated"],
     "Smartphones and wireless internet connections have become ubiquitous features of modern urban life.",
     "Dandelions are ubiquitous flowering weeds found in suburban lawns across the globe."),

    ("Underestimate", "verb", "B2", "/ˌʌn.dəˈres.tɪ.meɪt/", "meremehkan / menilai terlalu rendah",
     "Memperkirakan sesuatu lebih kecil, lebih murah, atau kurang penting daripada kenyataannya.", "Estimate something to be smaller or less important than it actually is.",
     ["Underestimation", "Undervalue", "Miscalculate"], ["Underrate", "Belittle", "Minimize", "Discount", "Miscalculate"], ["Overestimate", "Exaggerate", "Magnify"],
     "Never underestimate the resilience and determination of a dedicated grassroots community.",
     "Engineers warned that the contractors had underestimated the construction cost and time required."),

    ("Undermine", "verb", "B2", "/ˌʌn.dəˈmaɪn/", "merongrong / melemahkan secara diam-diam",
     "Merusak atau melemahkan fondasi, otoritas, atau keyakinan secara bertahap dan tersembunyi.", "Erode the base or foundation of; damage or weaken someone or something gradually.",
     ["Subvert", "Weaken", "Sabotage"], ["Weaken", "Compromise", "Diminish", "Subvert", "Erode"], ["Strengthen", "Reinforce", "Bolster", "Support"],
     "Spreading unfounded rumors can undermine mutual trust among corporate team members.",
     "Acid rain can undermine the structural integrity of limestone monuments over decades."),

    ("Unravel", "verb", "B2", "/ʌnˈræv.əl/", "mengurai benang kusut / membongkar teka-teki misteri",
     "Mengurai benang yang kusut; memecahkan atau menjelaskan teka-teki rumit.", "Undo twisted, knitted, or woven threads; investigate and solve or explain something complicated.",
     ["Unraveling", "Untangle", "Solve"], ["Untangle", "Disentangle", "Decipher", "Resolve", "Explain"], ["Entangle", "Complicate", "Knot", "Twist"],
     "Detectives worked tirelessly to unravel the complex web of financial transactions behind the embezzlement.",
     "The knitted woolen sweater began to unravel after getting snagged on a metal fence branch."),

    ("Utility", "noun", "B1", "/juːˈtɪl.ə.ti/", "kegunaan manfaat / sarana umum listrik-air",
     "Kualitas keadaan berguna dan praktis; layanan publik seperti air, gas, atau listrik.", "The state of being useful, profitable, or beneficial; a public utility service.",
     ["Utilize", "Utilitarian", "Usefulness"], ["Usefulness", "Benefit", "Function", "Practicality", "Service"], ["Uselessness", "Futility", "Disadvantage"],
     "The Swiss Army knife is famous for its compact design and multi-purpose mechanical utility.",
     "Monthly household utility bills include charges for clean running water, electricity, and trash disposal.")
]

print("Building final comprehensive 1040 vocabulary...")
