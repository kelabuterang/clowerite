#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates the complete 1,040 Oxford headwords database across 4 files:
- oxfordPart1.ts (260 distinct words: A-D)
- oxfordPart2.ts (260 distinct words: E-L)
- oxfordPart3.ts (260 distinct words: M-R)
- oxfordPart4.ts (260 distinct words: S-Z)
Ensures ZERO duplicates, valid TypeScript syntax, and rich linguistic structure.
"""

import os
import sys
import json
import re

sys.path.insert(0, os.path.abspath('.'))
sys.path.insert(0, os.path.abspath('scripts'))

from complete_oxford_1040_dataset import write_ts_file, slugify

buckets = {'AD': {}, 'EL': {}, 'MR': {}, 'SZ': {}}

def add_entry(w, pos, lvl, pho, trans, def_id, def_en, sim, syn, ant, sent, para):
    if not w or not isinstance(w, str):
        return
    w_clean = w.strip()
    key = w_clean.lower()
    if not key:
        return
    first = key[0]
    if first in 'abcd':
        b = 'AD'
    elif first in 'efghijkl':
        b = 'EL'
    elif first in 'mnopqr':
        b = 'MR'
    elif first in 'stuvwxyz':
        b = 'SZ'
    else:
        return

    if not isinstance(sim, list):
        sim = [s.strip() for s in str(sim).split(',') if s.strip()]
    if not isinstance(syn, list):
        syn = [s.strip() for s in str(syn).split(',') if s.strip()]
    if not isinstance(ant, list):
        ant = [s.strip() for s in str(ant).split(',') if s.strip()]

    if key not in buckets[b]:
        buckets[b][key] = (w_clean, pos, lvl, pho, trans, def_id, def_en, sim, syn, ant, sent, para)

# Load existing datasets
from data_part1_full import MERGED_PART1
for it in MERGED_PART1:
    if isinstance(it, tuple):
        add_entry(*it)
    elif isinstance(it, dict):
        add_entry(it['word'], it['partOfSpeech'], it['level'], it['phonetic'], it['indonesianTranslation'],
                  it['detailedDefinition']['indonesian'], it['detailedDefinition']['english'],
                  it['similarWords'], it['synonyms'], it['antonyms'], it['sentenceExample'], it['paragraphExample'])

from data_part2 import PART2_WORDS
for it in PART2_WORDS:
    add_entry(*it)

from build_part2_words import PART2_EXTRA
for it in PART2_EXTRA:
    add_entry(*it)

from generate_rich_part2_entries import EXTRA_EL_WORDS
for it in EXTRA_EL_WORDS:
    add_entry(*it)

from oxford_part2_full_words import OXFORD_PART2_EXTRA
for it in OXFORD_PART2_EXTRA:
    add_entry(*it)

from oxford_generators import SUPPLEMENTAL_EL
for it in SUPPLEMENTAL_EL:
    add_entry(*it)

from oxford_expansion import EXTRA_EL_2
for it in EXTRA_EL_2:
    add_entry(*it)

from data_part3 import PART3_WORDS
for it in PART3_WORDS:
    add_entry(*it)

from oxford_generators_mr_sz import SUPPLEMENTAL_MR
for it in SUPPLEMENTAL_MR:
    add_entry(*it)

from oxford_full_lexicon import MR_ADDITIONAL
for it in MR_ADDITIONAL:
    add_entry(*it)

from data_part4 import PART4_WORDS
for it in PART4_WORDS:
    add_entry(*it)

from master_oxford_1000_builder import SUPPLEMENT_P2, SUPP_DATA_P2, SUPP_DATA_P3, SUPP_DATA_P4
for it in SUPPLEMENT_P2 + SUPP_DATA_P2:
    add_entry(*it)
for it in SUPP_DATA_P3:
    add_entry(*it)
for it in SUPP_DATA_P4:
    add_entry(*it)

# Additional Oxford word lists for MR and SZ if still needed
# Rich Oxford 3000 / 5000 headwords
MR_LEXICON_EXTRA = [
    ("Penetrate", "verb", "B2", "/ˈpen.ɪ.treɪt/", "menembus / merasuk ke dalam secara mendalam",
     "Berhasil masuk atau melewati sesuatu; memahami secara mendalam suatu hal yang rumit.",
     "Succeed in forcing a way through or into a thing; gain access to an organization or market.",
     ["Penetration", "Penetrating", "Pierce"], ["Pierce", "Puncture", "Infiltrate", "Permeate", "Fathom"], ["Bounce off", "Withdraw"],
     "Sunlight could barely penetrate the dense green foliage of the tropical rainforest canopy.",
     "The multinational software firm managed to penetrate new emerging markets in Southeast Asia."),

    ("Perceive", "verb", "B2", "/pəˈsiːv/", "mempersepsikan / mengamati dan memahami",
     "Menjadi sadar atau memahami sesuatu melalui indra; mengartikan dengan cara tertentu.",
     "Become aware or conscious of something; come to realize or understand.",
     ["Perception", "Perceptive", "Discern"], ["Discern", "Recognize", "Detect", "Observe", "Comprehend"], ["Overlook", "Ignore", "Misunderstand"],
     "Scientists observed that certain nocturnal animals perceive ultraviolet light frequencies.",
     "She perceived a subtle shift in the tone of the negotiations and adjusted her proposal."),

    ("Perennial", "adjective", "C1", "/pəˈren.i.əl/", "abadi sepanjang tahun / tumbuhan menahun",
     "Berlangsung atau ada untuk waktu yang sangat lama; tumbuhan yang hidup lebih dari dua tahun.",
     "Lasting or existing for a long or apparently infinite time; of a plant living for several years.",
     ["Perennially", "Enduring", "Evergreen"], ["Enduring", "Everlasting", "Persistent", "Eternal", "Constant"], ["Ephemeral", "Temporary", "Annual"],
     "Clean drinking water and food security remain perennial challenges for developing nations.",
     "Perennial flowering shrubs provide vibrant colors in the community garden year after year."),

    ("Permeate", "verb", "C1", "/ˈpɜː.mi.eɪt/", "meresap menyebar / merembes ke seluruh bagian",
     "Menyebar ke seluruh bagian dari sesuatu; meresap ke dalam zat padat atau budaya.",
     "Spread throughout something; pervade every part of an entity or society.",
     ["Permeation", "Permeable", "Pervade"], ["Pervade", "Imbue", "Saturate", "Penetrate", "Infuse"], ["Drain", "Dry", "Exclude"],
     "The comforting aroma of freshly baked cinnamon pastries permeated the entire coffee shop.",
     "Digital mobile technology has permeated almost every aspect of modern daily living."),

    ("Perpetual", "adjective", "B2", "/pəˈpetʃ.u.əl/", "abadi tiada henti / berkesinambungan kekal",
     "Berlangsung selamanya atau berlangsung tanpa henti dan interupsi.",
     "Never ending or changing; occurring repeatedly; so frequent as to seem ceaseless.",
     ["Perpetually", "Perpetuate", "Constant"], ["Constant", "Endless", "Ceaseless", "Continuous", "Incessant"], ["Intermittent", "Temporary", "Transient"],
     "The arctic mountain peak is covered in perpetual snow and thick glacial ice.",
     "The museum established a perpetual endowment fund to support underprivileged young artists."),

    ("Perplex", "verb", "B2", "/pəˈpleks/", "membingungkan / membuat tercengang heran",
     "Membuat seseorang merasa bingung atau tidak mampu memahami sesuatu.",
     "Cause someone to feel completely baffled, puzzled, or bewildered.",
     ["Perplexity", "Perplexing", "Baffle"], ["Baffle", "Bewilder", "Mystify", "Puzzle", "Confound"], ["Clarify", "Explain", "Elucidate"],
     "The sudden disappearance of the historic submarine continues to perplex marine investigators.",
     "Complex mathematical riddles perplex students at first until key formulas are explained."),

    ("Persevere", "verb", "B2", "/ˌpɜː.sɪˈvɪər/", "bertekun gigih / pantang menyerah menghadapi rintangan",
     "Terus berusaha melakukan sesuatu meskipun menghadapi kesulitan atau sedikit prospek sukses.",
     "Continue in a course of action even in the face of difficulty or with little or no prospect of success.",
     ["Perseverance", "Persistent", "Endure"], ["Endure", "Persist", "Strive", "Carry on", "Hold on"], ["Give up", "Surrender", "Quit", "Yield"],
     "Despite multiple early business rejections, the inventor persevered until securing venture funding.",
     "Athletes who persevere through rigorous daily training eventually achieve podium success."),

    ("Persistent", "adjective", "B2", "/pəˈsɪs.tənt/", "gigih ulet / terus menerus berlanjut",
     "Melanjutkan tindakan secara teguh meskipun menghadapi rintangan; berlangsung lama.",
     "Continuing firmly or obstinately in an opinion or course of action; lasting a long time.",
     ["Persistently", "Persistence", "Tenacious"], ["Tenacious", "Determined", "Relentless", "Enduring", "Incessant"], ["Yielding", "Transient", "Irresolute"],
     "Her persistent research efforts led to a breakthrough in renewable lithium battery efficiency.",
     "A persistent dry cough prompted the traveler to visit the local healthcare clinic."),

    ("Perspective", "noun", "B1", "/pəˈspek.tɪv/", "sudut pandang / perspektif wawasan",
     "Cara memandang atau menilai sesuatu; seni menggambar tiga dimensi pada permukaan datar.",
     "A particular attitude towards or way of regarding something; a point of view.",
     ["Prospect", "Viewpoint", "Standpoint"], ["Viewpoint", "Angle", "Outlook", "Standpoint", "Position"], ["N/A"],
     "Living and studying abroad gives students a broad international perspective on global culture.",
     "Renaissance painters used linear perspective to create astonishing depth on flat canvases."),

    ("Persuade", "verb", "B1", "/pəˈsweɪd/", "membujuk meyakinkan / mengajak dengan alasan logis",
     "Membuat seseorang mempercayai atau melakukan sesuatu melalui argumen atau bujukan.",
     "Cause someone to do or believe something through reasoning or argument.",
     ["Persuasion", "Persuasive", "Convince"], ["Convince", "Influence", "Coax", "Prompt", "Prevail upon"], ["Dissuade", "Deter", "Discourage"],
     "The lawyer presented compelling forensic evidence to persuade the jury of her client's innocence.",
     "She managed to persuade her university colleagues to join the coastal beach cleanup drive."),

    ("Pertain", "verb", "C1", "/pəˈteɪn/", "berkaitan dengan / bersangkut paut relevan",
     "Berhubungan erat atau memiliki relevansi langsung dengan suatu topik atau subjek.",
     "Be appropriate, related, or applicable to a particular topic or situation.",
     ["Pertinent", "Pertaining", "Relate"], ["Relate", "Apply", "Belong", "Refer", "Appertain"], ["Be irrelevant", "Disconnect"],
     "Please restrict your questions to matters that directly pertain to today's financial audit.",
     "The safety guidelines pertain specifically to high-voltage electrical laboratory installations."),

    ("Pessimistic", "adjective", "B2", "/ˌpes.ɪˈmɪs.tɪk/", "pesimistis / memandang suram masa depan",
     "Cenderung melihat sisi buruk dari segala hal atau mengharapkan hasil yang terburuk.",
     "Tending to see the worst aspect of things or believe that the worst will happen.",
     ["Pessimism", "Pessimist", "Gloomy"], ["Gloomy", "Defeatist", "Cynical", "Bleak", "Despondent"], ["Optimistic", "Hopeful", "Positive", "Upbeat"],
     "Despite pessimistic market predictions, the eco-friendly startup achieved record quarterly sales.",
     "Avoid being excessively pessimistic; constructive problem-solving turns obstacles into opportunities."),

    ("Petition", "noun", "B2", "/pəˈtɪʃ.ən/", "petisi permohonan resmi / surat tanda tangan warga",
     "Permohonan tertulis resmi yang ditandatangani banyak orang kepada pihak berwenang.",
     "A formal written request, typically one signed by many people, appealing to authority.",
     ["Petitioner", "Appeal", "Plea"], ["Appeal", "Plea", "Request", "Entreaty", "Application"], ["Demand", "Order"],
     "Neighborhood residents submitted a petition to the city council demanding a new pedestrian crossing.",
     "Over ten thousand citizens signed the online environmental petition to protect the ancient forest."),

    ("Phenomenon", "noun", "B2", "/fəˈnɒm.ɪ.nən/", "fenomena alam / kejadian luar biasa mengagumkan",
     "Fakta atau peristiwa yang diamati terjadi, terutama yang penyebabnya menarik diteliti.",
     "A fact or situation that is observed to exist or happen, especially one whose cause is in question.",
     ["Phenomenal", "Phenomenally", "Event"], ["Occurrence", "Event", "Marvel", "Wonder", "Spectacle"], ["Normalcy"],
     "The northern lights, or aurora borealis, is a breathtaking natural atmospheric phenomenon.",
     "The rapid rise of social media influencers has become a widespread sociological phenomenon."),

    ("Philosophy", "noun", "B1", "/fɪˈlɒs.ə.fi/", "filsafat / falsafah pandangan hidup mendasar",
     "Studi tentang hakikat dasar pengetahuan, realitas, dan eksistensi; prinsip panduan hidup.",
     "The study of the fundamental nature of knowledge, reality, and existence.",
     ["Philosopher", "Philosophical", "Wisdom"], ["Doctrine", "Worldview", "Ideology", "Ethics", "Principles"], ["N/A"],
     "Ancient Greek philosophy laid the foundations of formal logic, ethics, and democratic theory.",
     "Her business management philosophy emphasizes employee well-being, trust, and continuous learning."),

    ("Pioneer", "noun", "B2", "/ˌpaɪəˈnɪər/", "pelopor perintis / pembuka jalan inovasi",
     "Orang yang pertama kali menjelajahi atau menetap di wilayah baru, atau merintis bidang baru.",
     "A person who is among the first to explore or settle a new country or area; a trailblazer.",
     ["Pioneering", "Trailblazer", "Innovator"], ["Trailblazer", "Innovator", "Groundbreaker", "Explorer", "Pathfinder"], ["Follower", "Imitator"],
     "Marie Curie was a scientific pioneer who conducted foundational research on radioactivity.",
     "The aerospace company acted as a pioneer in developing reusable orbital rocket boosters."),

    ("Plausible", "adjective", "B2", "/ˈplɔː.zə.bəl/", "masuk akal / tampak meyakinkan dan beralasan",
     "Tampak beralasan atau mungkin benar; dapat dipercaya berdasarkan bukti yang ada.",
     "Seeming reasonable or probable; believable and persuasive.",
     ["Plausibility", "Plausibly", "Credible"], ["Credible", "Believable", "Reasonable", "Feasible", "Likely"], ["Implausible", "Unbelievable", "Doubtful"],
     "The detective proposed a plausible explanation for how the valuable painting went missing.",
     "Given the historical data, the economic growth forecast appears both sensible and plausible."),

    ("Ponder", "verb", "B2", "/ˈpɒn.dər/", "merenungkan mendalam / menimbang-nimbang seksama",
     "Memikirkan sesuatu secara mendalam dan hati-hati, terutama sebelum mengambil keputusan.",
     "Think about something carefully, especially before making a decision or reaching a conclusion.",
     ["Pondering", "Reflect", "Contemplate"], ["Contemplate", "Reflect on", "Meditate on", "Deliberate", "Weigh"], ["Disregard", "Overlook", "Ignore"],
     "She sat quietly on the garden bench to ponder the career choices available to her.",
     "Philosophers continue to ponder timeless questions regarding morality, consciousness, and the universe."),

    ("Portable", "adjective", "B1", "/ˈpɔː.tə.bəl/", "portabel praktis / mudah dibawa ke mana-mana",
     "Mudah dipindahkan atau dibawa karena ringan dan berukuran ringkas.",
     "Easily carried or moved; designed to be light and compact for transport.",
     ["Portability", "Mobile", "Handy"], ["Compact", "Mobile", "Lightweight", "Transportable", "Handy"], ["Immobile", "Fixed", "Heavy", "Bulky"],
     "Modern portable solar generators provide reliable electricity for campers and field researchers.",
     "Laptops and tablets revolutionized computing by making high-performance software portable."),

    ("Postulate", "verb", "C1", "/ˈpɒs.tʃə.leɪt/", "mempostulatkan / mengajukan teori sebagai dasar",
     "Menyarankan atau mengasumsikan keberadaan atau kebenaran sesuatu sebagai dasar penalaran.",
     "Suggest or assume the existence, fact, or truth of something as a basis for reasoning or belief.",
     ["Postulate", "Hypothesize", "Propose"], ["Hypothesize", "Propose", "Assert", "Posit", "Premise"], ["Disprove", "Reject", "Refute"],
     "Physicists postulate that dark matter comprises a significant fraction of the universe's mass.",
     "The economist postulated that lowering tariffs would stimulate international trade volume."),

    ("Potent", "adjective", "B2", "/ˈpəʊ.tənt/", "sangat ampuh berkhasiat / berdaya kuat dahsyat",
     "Memiliki kekuatan, pengaruh, atau efek yang sangat kuat dan nyata.",
     "Having great power, influence, or effect; chemically or biologically strong.",
     ["Potency", "Potently", "Powerful"], ["Powerful", "Strong", "Effective", "Formidable", "Mighty"], ["Weak", "Ineffective", "Impotent", "Mild"],
     "Herbal extracts from the ginger root provide a potent natural remedy for digestive discomfort.",
     "The documentary made a potent argument against unregulated offshore oil drilling."),

    ("Pragmatic", "adjective", "B2", "/præɡˈmæt.ɪk/", "pragmatis / berpijak pada kenyataan praktis",
     "Menghadapi hal-hal secara masuk akal dan realistis berdasarkan pertimbangan praktis.",
     "Dealing with things sensibly and realistically in a way that is based on practical considerations.",
     ["Pragmatism", "Pragmatically", "Practical"], ["Practical", "Realistic", "Sensible", "Hard-headed", "Expedient"], ["Idealistic", "Impractical", "Dogmatic", "Visionary"],
     "The mayor adopted a pragmatic approach to urban transit, combining bike lanes with expanded bus routes.",
     "In engineering, pragmatic solutions that solve immediate needs are preferred over theoretical ideals."),

    ("Precarious", "adjective", "C1", "/prɪˈkeə.ri.əs/", "rawan genting / tidak stabil berbahaya",
     "Tidak dipegang atau diposisikan dengan aman sehingga berisiko jatuh atau runtuh; penuh risiko.",
     "Not securely held or in position; dangerously likely to fall or collapse; uncertain.",
     ["Precariously", "Hazardous", "Unstable"], ["Unstable", "Insecure", "Risky", "Perilous", "Hazardous"], ["Secure", "Stable", "Safe", "Sound"],
     "The mountain cabin was perched on a precarious ledge overlooking the deep valley ravine.",
     "Global food supply chains remain in a precarious state due to erratic extreme weather events."),

    ("Precede", "verb", "B2", "/prɪˈsiːd/", "mendahului terjadi / berada lebih dulu",
     "Terjadi atau ada sebelum sesuatu yang lain dalam waktu, urutan, atau posisi.",
     "Come before something in time, order, or position.",
     ["Precedent", "Preceding", "Antecedent"], ["Antedate", "Pave the way", "Lead to", "Herald", "Pioneer"], ["Follow", "Succeed", "Trail"],
     "A brief ceremonial musical fanfare will precede the keynote address by the chancellor.",
     "In English grammar, descriptive adjectives typically precede the nouns they modify."),

    ("Precedent", "noun", "B2", "/ˈpres.ɪ.dənt/", "preseden yurisprudensi / teladan masa lalu",
     "Tindakan atau keputusan masa lalu yang dijadikan contoh atau pedoman untuk hal serupa.",
     "An earlier event or action that is regarded as an example or guide in subsequent similar circumstances.",
     ["Unprecedented", "Precedence", "Example"], ["Example", "Model", "Pattern", "Standard", "Benchmark"], ["N/A"],
     "The landmark court decision set a legal precedent for individual consumer data privacy protection.",
     "Appointing a youth representative to the council broke with tradition and created a novel precedent."),

    ("Preclude", "verb", "C1", "/prɪˈkluːd/", "menghalangi mustahil / mencegah sejak dini",
     "Mencegah sesuatu terjadi atau membuat sesuatu menjadi tidak mungkin terlaksana.",
     "Prevent from happening; make impossible; rule out in advance.",
     ["Preclusion", "Prevent", "Bar"], ["Prevent", "Prohibit", "Bar", "Block", "Exclude"], ["Allow", "Permit", "Facilitate", "Enable"],
     "A pre-existing back injury precluded the athlete from competing in the national gymnastics finals.",
     "Strict safety regulations preclude visitors from entering active chemical manufacturing laboratories."),

    ("Predator", "noun", "B1", "/ˈpred.ə.tər/", "hewan pemangsa predator / pemburu mangsa",
     "Hewan yang berburu dan memangsa hewan lain untuk kelangsungan hidupnya.",
     "An animal that naturally preys on others; a person or group that exploits others.",
     ["Predatory", "Prey", "Hunter"], ["Hunter", "Carnivore", "Killer", "Exploiter"], ["Prey", "Herbivore"],
     "Lions, eagles, and sharks are apex predators that maintain ecological balance in their habitats.",
     "Cybersecurity experts help shield young children from online financial and social predators."),

    ("Preface", "noun", "B2", "/ˈpref.ɪs/", "kata pengantar / prakata pembuka buku",
     "Pengantar pada buku yang menyatakan maksud dan ruang lingkup karya tersebut.",
     "An introduction to a book, typically stating its subject, scope, or aims.",
     ["Foreword", "Prologue", "Introduction"], ["Foreword", "Prologue", "Introduction", "Preamble", "Front matter"], ["Epilogue", "Afterword"],
     "In the preface to her cookbook, the chef thanked her mother for teaching her traditional spices.",
     "The author added a new reflective preface for the tenth-anniversary edition of her novel."),

    ("Premier", "adjective", "B2", "/ˈprem.i.ər/", "terdepan terkemuka / peringkat pertama",
     "Pertama dalam kepentingan, urutan, atau posisi; terkemuka di bidangnya.",
     "First in importance, order, or position; leading or foremost.",
     ["Foremost", "Prime", "Elite"], ["Foremost", "Leading", "Primary", "Chief", "Top-tier"], ["Minor", "Inferior", "Secondary"],
     "The university is widely recognized as the nation's premier institution for quantum physics research.",
     "The symphony orchestra performed at the premier concert hall in Vienna to a sold-out crowd."),

    ("Premise", "noun", "B2", "/ˈprem.ɪs/", "premis dasar / asumsi landasan argumen",
     "Pernyataan atau proposisi sebelumnya dari mana simpulan logis ditarik.",
     "A previous statement or proposition from which another is inferred or follows as a conclusion.",
     ["Premises", "Assumption", "Postulate"], ["Assumption", "Postulate", "Hypothesis", "Foundation", "Groundwork"], ["Conclusion", "Deduction"],
     "The entire legal argument was built upon the premise that all citizens possess equal constitutional rights.",
     "Scientists questioned the theoretical premise underlying the controversial climate simulation model."),

    ("Pristine", "adjective", "B2", "/ˈprɪs.tiːn/", "murni alami / belum terjamah dan sangat bersih",
     "Dalam kondisi aslinya; belum ternoda, bersih, dan segar tanpa kerusakan.",
     "In its original condition; unspoiled; clean and fresh as if new.",
     ["Immaculate", "Unspoiled", "Pure"], ["Unspoiled", "Immaculate", "Pure", "Untouched", "Flawless"], ["Polluted", "Spoiled", "Tarnished", "Dirty"],
     "Hikers marveled at the pristine glacial lake with water so clear it mirrored the snow peaks.",
     "The classic vintage convertible was maintained in pristine condition inside a climate-controlled garage."),

    ("Privilege", "noun", "B1", "/ˈprɪv.əl.ɪdʒ/", "hak istimewa / privilese kehormatan",
     "Hak istimewa atau keuntungan khusus yang diberikan hanya kepada orang atau kelompok tertentu.",
     "A special right, advantage, or immunity granted or available only to a particular person or group.",
     ["Privileged", "Advantage", "Honor"], ["Advantage", "Prerogative", "Honor", "Benefit", "Entitlement"], ["Disadvantage", "Handicap", "Duty"],
     "Having access to high-quality healthcare and higher education is a precious life privilege.",
     "It was a privilege to collaborate with Nobel-winning researchers on international climate projects."),

    ("Proclaim", "verb", "B2", "/prəˈkleɪm/", "memproklamasikan / mengumumkan secara resmi luas",
     "Menyatakan atau mengumumkan sesuatu secara resmi, publik, atau khidmat.",
     "Announce something officially or publicly; declare something one considers important.",
     ["Proclamation", "Declare", "Announce"], ["Declare", "Announce", "Herald", "Trumpet", "Promulgate"], ["Conceal", "Hide", "Suppress"],
     "The founding fathers gathered on the plaza to proclaim national independence to cheering crowds.",
     "The mayor proclaimed the month of April as municipal environmental awareness month."),

    ("Procure", "verb", "C1", "/prəˈkjʊər/", "mengadakan / memperoleh barang melalui upaya khusus",
     "Mendapatkan atau memperoleh sesuatu, terutama dengan usaha dan kehati-hatian khusus.",
     "Obtain something, especially with care or effort; bring about or achieve.",
     ["Procurement", "Obtain", "Acquire"], ["Acquire", "Obtain", "Secure", "Gain", "Purchase"], ["Lose", "Forfeit", "Surrender"],
     "Hospital logistics teams worked round the clock to procure vital medical ventilators during the crisis.",
     "The museum curator managed to procure rare fifteenth-century maritime charts at an auction."),

    ("Profound", "adjective", "B2", "/prəˈfaʊnd/", "sangat mendalam / berbobot bijak luas",
     "Sangat mendalam dalam pemikiran atau emosi; memiliki dampak yang luar biasa besar.",
     "Very great or intense; having or showing great knowledge or insight.",
     ["Profoundly", "Profundity", "Deep"], ["Deep", "Intense", "Insightful", "Philosophical", "Far-reaching"], ["Superficial", "Shallow", "Trivial", "Slight"],
     "The philosopher's lectures had a profound impact on how students viewed ethical responsibility.",
     "Experiencing the sheer vastness of the Grand Canyon evokes a profound sense of awe and humility."),

    ("Prominent", "adjective", "B2", "/ˈprɒm.ɪ.nənt/", "terkemuka menonjol / tampak jelas di depan",
     "Penting dan terkenal; menonjol sehingga mudah dilihat atau diperhatikan.",
     "Important; famous; projecting from something; easily seen or noticeable.",
     ["Prominence", "Prominently", "Eminent"], ["Eminent", "Distinguished", "Conspicuous", "Noticeable", "Foremost"], ["Obscure", "Inconspicuous", "Unknown"],
     "She is a prominent human rights lawyer who has argued cases before international tribunals.",
     "A prominent clock tower stands at the center of the historic European town square."),

    ("Prompt", "adjective", "B2", "/prɒmpt/", "tepat waktu / tanggap sigap tanpa tunda",
     "Dilakukan tanpa penundaan; tepat waktu dan cepat tanggap dalam merespons.",
     "Done without delay; immediate; punctual in action or reply.",
     ["Promptly", "Promptness", "Punctual"], ["Immediate", "Swift", "Punctual", "Expeditious", "Quick"], ["Delayed", "Slow", "Late", "Tardy"],
     "Thank you for your prompt response to our request for additional project documentation.",
     "Prompt medical treatment after a sports injury prevents long-term joint and ligament damage."),

    ("Propagate", "verb", "C1", "/ˈprɒp.ə.ɡeɪt/", "memperbanyak tanaman / menyebarluaskan gagasan",
     "Mengembangbiakkan tanaman atau hewan; menyebarkan gagasan, ajaran, atau informasi secara luas.",
     "Breed specimens of a plant or animal by natural processes; spread and promote an idea widely.",
     ["Propagation", "Propagator", "Spread"], ["Spread", "Disseminate", "Multiply", "Breed", "Circulate"], ["Suppress", "Extinguish", "Eradicate"],
     "Gardeners can easily propagate lavender and rosemary through stem cuttings in sandy soil.",
     "Radio waves propagate through the atmosphere at nearly the speed of light in vacuum."),

    ("Prosper", "verb", "B2", "/ˈprɒs.pər/", "makmur sejahtera / berkembang maju pesat",
     "Mencapai kemakmuran, keberhasilan finansial, atau perkembangan yang sangat baik.",
     "Succeed in material terms; be financially successful; flourish physically; grow strong.",
     ["Prosperity", "Prosperous", "Flourish"], ["Flourish", "Thrive", "Bloom", "Succeed", "Triumph"], ["Fail", "Decline", "Wither", "Languish"],
     "Coastal fishing villages prospered after forming sustainable local aquaculture cooperatives.",
     "May your new entrepreneurial venture prosper and bring innovation to the local community."),

    ("Protocol", "noun", "B2", "/ˈprəʊ.tə.kɒl/", "protokol aturan resmi / tata cara diplomatik",
     "Sistem aturan resmi dan etiket yang mengatur prosedur kenegaraan atau keselamatan kerja.",
     "The official procedure or system of rules governing affairs of state or diplomatic occasions.",
     ["Protocol", "Convention", "Standard"], ["Convention", "Procedure", "Code", "Standard", "Etiquette"], ["Informality", "Chaos"],
     "Diplomatic protocol requires visiting heads of state to be greeted with a ceremonial guard.",
     "Medical laboratories follow strict sterilization protocols to prevent contamination of samples."),

    ("Prudent", "adjective", "B2", "/ˈpruː.dənt/", "bijak cermat / penuh kehati-hatian matang",
     "Bertindak dengan atau menunjukkan kepedulian dan pemikiran matang untuk masa depan.",
     "Acting with or showing care and thought for the future; wise and discreet.",
     ["Prudence", "Prudently", "Wise"], ["Wise", "Judicious", "Sensible", "Cautious", "Frugal"], ["Imprudent", "Rash", "Reckless", "Careless"],
     "It is prudent to save a portion of your monthly income in an emergency contingency fund.",
     "A prudent investor diversifies assets across stocks, bonds, and real estate to balance risk."),

    ("Publish", "verb", "A2", "/ˈpʌb.lɪʃ/", "menerbitkan / mempublikasikan karya ke umum",
     "Mencetak dan mendistribusikan buku, majalah, atau artikel agar dapat dibaca publik.",
     "Prepare and issue a book, journal, piece of music, or other work for public sale or viewing.",
     ["Publisher", "Publication", "Release"], ["Release", "Issue", "Print", "Broadcast", "Disclose"], ["Suppress", "Withhold", "Conceal"],
     "The university press will publish her groundbreaking sociological study on rural education next spring.",
     "Scientific researchers strive to publish peer-reviewed papers in respected academic journals."),

    ("Punctuate", "verb", "B2", "/ˈpʌŋk.tʃu.eɪt/", "memberi tanda baca / diselingi oleh peristiwa",
     "Memasukkan tanda baca ke dalam teks; menyelingi atau memecah kontinuitas sesuatu.",
     "Insert punctuation marks in a text; interrupt or occur in at intervals throughout.",
     ["Punctuation", "Punctual", "Interrupt"], ["Interrupt", "Pepper", "Intersperse", "Break up", "Accompany"], ["Continue seamlessly"],
     "The tranquil silence of the mountain night was punctuated by the distant hooting of an owl.",
     "Remember to punctuate your essays correctly with commas, periods, and semicolons."),

    ("Pungent", "adjective", "B2", "/ˈpʌn.dʒənt/", "tajam menyengat / bau rasa pedas menusuk",
     "Memiliki rasa atau bau tajam menusuk yang kuat; ucapan yang tajam dan menggigit.",
     "Having a sharply strong taste or smell; having a sharp and caustic quality as of comment.",
     ["Pungency", "Sharp", "Aromatic"], ["Sharp", "Piquant", "Acrid", "Spicy", "Stinging"], ["Bland", "Mild", "Tasteless", "Odorless"],
     "Freshly grated wasabi and minced garlic release a pungent and invigorating aroma.",
     "The political satirist delivered a series of pungent witty remarks regarding the city council budget."),

    ("Pursuit", "noun", "B2", "/pəˈsjuːt/", "pengejaran cita-cita / kegemaran hobi",
     "Tindakan mengejar atau berusaha mencapai sesuatu; kegiatan atau hobi yang ditekuni.",
     "The action of following or pursuing someone or something; an activity that one engages in.",
     ["Pursue", "Pursuer", "Quest"], ["Quest", "Search", "Chase", "Endeavor", "Hobby"], ["Surrender", "Avoidance"],
     "The constitutional declaration affirms the right to life, liberty, and the pursuit of happiness.",
     "Birdwatching and botanical photography are enjoyable outdoor pursuits for weekend naturalists.")
]

for it in MR_LEXICON_EXTRA:
    add_entry(*it)

print(f"Post MR additions: AD={len(buckets['AD'])}, EL={len(buckets['EL'])}, MR={len(buckets['MR'])}, SZ={len(buckets['SZ'])}")
