import { SentenceDrillItem } from '../types';
import { ADDITIONAL_SENTENCE_DRILLS_50 } from './additionalSentenceDrills';
import { ADDITIONAL_SENTENCE_DRILLS_50_PART2 } from './additionalSentenceDrillsPart2';

export const SENTENCE_DRILL_LIST: SentenceDrillItem[] = [
  {
    id: 'snt-1',
    indonesian: 'Sebuah studi baru mengungkapkan bahwa simpanse suka mengikuti tren sosial di kelompok mereka.',
    targetEnglish: 'A new study reveals that chimpanzees like to follow social trends in their groups.',
    acceptedVariations: [
      'A new study reveals that chimpanzees love to follow social trends in their groups.',
      'A recent study reveals that chimpanzees like to follow social trends in their groups.',
      'A new study shows that chimpanzees like to follow social trends in their groups.',
      'A recent study shows that chimpanzees love following social trends in their groups.'
    ],
    level: 'Beginner',
    sourceArticleTitle: 'Do Animals Have Cultural Trends? (Animal Cognition)',
    grammarTopic: 'Simple Present Tense & Noun Clause (That-clause)',
    grammarExplanation: 'Gunakan Simple Present (S + V1/V-s) untuk fakta umum ilmiah (study reveals...). Klausa pelengkap diawali konjungsi "that" diikuti subjek jamak (chimpanzees like...).',
    vocabHints: [
      { indonesian: 'Studi baru', english: 'New study', type: 'Noun Phrase' },
      { indonesian: 'Mengungkapkan', english: 'Reveals / shows', type: 'Verb' },
      { indonesian: 'Simpanse', english: 'Chimpanzees', type: 'Noun (plural)' },
      { indonesian: 'Mengikuti tren sosial', english: 'Follow social trends', type: 'Verb Phrase' }
    ]
  },
  {
    id: 'snt-2',
    indonesian: 'Jika suhu global terus meningkat, gelombang panas akan menjadi jauh lebih mematikan.',
    targetEnglish: 'If global temperatures continue to rise, heatwaves will become much deadlier.',
    acceptedVariations: [
      'If global temperatures keep rising, heat waves will become far deadlier.',
      'If global temperature continues to rise, heatwaves will become much more deadly.',
      'If global temperatures continue rising, heat waves will be much more deadly.'
    ],
    level: 'Intermediate',
    sourceArticleTitle: 'The Urban Forest Revolution: Combating Extreme Heat',
    grammarTopic: 'Conditional Sentence Type 1 (Real in Present/Future)',
    grammarExplanation: 'Rumus Conditional Type 1: [If + Simple Present (S + V1/V-s), S + will + V1]. Digunakan untuk menyatakan kemungkinan nyata di masa depan.',
    vocabHints: [
      { indonesian: 'Suhu global', english: 'Global temperatures', type: 'Noun Phrase' },
      { indonesian: 'Terus meningkat', english: 'Continue to rise / keep rising', type: 'Verb' },
      { indonesian: 'Gelombang panas', english: 'Heatwaves / heat waves', type: 'Noun' },
      { indonesian: 'Jauh lebih mematikan', english: 'Much deadlier / far more deadly', type: 'Comparative Adj' }
    ]
  },
  {
    id: 'snt-3',
    indonesian: 'Spons biodegradable tersebut dibuat dari tulang cumi-cumi dan serat kapas organik.',
    targetEnglish: 'The biodegradable sponge was made from squid bones and organic cotton fibers.',
    acceptedVariations: [
      'The biodegradable sponge is made of squid bones and organic cotton fiber.',
      'The biodegradable sponge was created from squid bones and organic cotton fibers.',
      'The biodegradable sponge is made from squid bones and cotton fibers.'
    ],
    level: 'Intermediate',
    sourceArticleTitle: 'Biodegradable Polymers from Marine Biomass',
    grammarTopic: 'Passive Voice (Simple Past / Present: be + V3)',
    grammarExplanation: 'Rumus Passive Voice: [Subjek + be (is/was) + V3 (made/created) + by/from...]. Digunakan ketika fokus kalimat berada pada objek/hasil buatan.',
    vocabHints: [
      { indonesian: 'Spons ramah lingkungan', english: 'Biodegradable sponge', type: 'Noun Phrase' },
      { indonesian: 'Dibuat dari', english: 'Made from / made of', type: 'Passive Verb' },
      { indonesian: 'Tulang cumi-cumi', english: 'Squid bones', type: 'Noun Phrase' },
      { indonesian: 'Serat kapas organik', english: 'Organic cotton fibers', type: 'Noun Phrase' }
    ]
  },
  {
    id: 'snt-4',
    indonesian: 'Para ilmuwan telah menemukan bahwa bernapas melalui hidung dapat menurunkan tekanan darah.',
    targetEnglish: 'Scientists have found that breathing through the nose can lower blood pressure.',
    acceptedVariations: [
      'Scientists have discovered that nasal breathing can lower blood pressure.',
      'Researchers have found that breathing through the nose can reduce blood pressure.',
      'Scientists have discovered that breathing through your nose can decrease blood pressure.'
    ],
    level: 'Intermediate',
    sourceArticleTitle: 'The Physiology of Nasal Respiration & Stress Reduction',
    grammarTopic: 'Present Perfect Tense & Gerund as Subject',
    grammarExplanation: 'Rumus Present Perfect: [S + have/has + V3 (have found)]. Pada anak kalimat, "breathing through the nose" berfungsi sebagai Gerund Subject (V-ing sebagai nomina).',
    vocabHints: [
      { indonesian: 'Para ilmuwan', english: 'Scientists / researchers', type: 'Noun (plural)' },
      { indonesian: 'Telah menemukan', english: 'Have found / have discovered', type: 'Present Perfect' },
      { indonesian: 'Bernapas melalui hidung', english: 'Breathing through the nose / nasal breathing', type: 'Gerund Phrase' },
      { indonesian: 'Menurunkan tekanan darah', english: 'Lower blood pressure', type: 'Verb Phrase' }
    ]
  },
  {
    id: 'snt-5',
    indonesian: 'Meskipun sebagian besar plastik sulit terurai, mikroba tertentu mampu mendegradasi polimer sintetis.',
    targetEnglish: 'Although most plastics are hard to decompose, certain microbes are able to degrade synthetic polymers.',
    acceptedVariations: [
      'Although most plastic is difficult to decompose, certain microbes can degrade synthetic polymers.',
      'Even though most plastics are difficult to degrade, specific microbes are capable of breaking down synthetic polymers.',
      'Although most plastics are hard to break down, certain bacteria can degrade synthetic polymers.'
    ],
    level: 'Advanced',
    sourceArticleTitle: 'Enzymatic Plastic Degradation by Marine Bacteria',
    grammarTopic: 'Concessive Clause (Although / Even though)',
    grammarExplanation: 'Rumus Concessive Clause: [Although + Clause (S + V), Main Clause (S + V)]. Menghubungkan dua klausa yang bertentangan atau menyatakan konsesi.',
    vocabHints: [
      { indonesian: 'Meskipun', english: 'Although / Even though', type: 'Conjunction' },
      { indonesian: 'Sulit terurai', english: 'Hard to decompose / difficult to break down', type: 'Adjective Phrase' },
      { indonesian: 'Mikroba tertentu', english: 'Certain microbes / specific microbes', type: 'Noun Phrase' },
      { indonesian: 'Mendegradasi polimer sintetis', english: 'Degrade synthetic polymers', type: 'Verb Phrase' }
    ]
  },
  {
    id: 'snt-6',
    indonesian: 'Kita harus tidur cukup setiap malam agar otak kita dapat membersihkan racun metabolisme.',
    targetEnglish: 'We should get enough sleep every night so that our brain can clear metabolic toxins.',
    acceptedVariations: [
      'We must get enough sleep every night so that our brain can flush out metabolic toxins.',
      'We have to sleep enough every night in order that our brain can remove metabolic waste.',
      'We should sleep adequately every night so that our brains can eliminate metabolic toxins.'
    ],
    level: 'Intermediate',
    sourceArticleTitle: 'Why Deep Sleep Cleanses the Brain: The Glymphatic System',
    grammarTopic: 'Modals of Necessity (Should/Must) & Purpose Clause (So that)',
    grammarExplanation: 'Gunakan modal "should/must + V1" untuk keharusan/anjuran. Konjungsi "so that + clause (can + V1)" digunakan untuk menyatakan tujuan (purpose).',
    vocabHints: [
      { indonesian: 'Harus tidur cukup', english: 'Should get enough sleep / must sleep enough', type: 'Modal Phrase' },
      { indonesian: 'Agar / supaya', english: 'So that / in order that', type: 'Conjunction of Purpose' },
      { indonesian: 'Membersihkan racun metabolisme', english: 'Clear metabolic toxins / flush out waste', type: 'Verb Phrase' }
    ]
  },
  {
    id: 'snt-7',
    indonesian: 'Remaja yang membatasi penggunaan media sosial cenderung memiliki kualitas tidur yang lebih baik.',
    targetEnglish: 'Teens who limit their social media use tend to have better sleep quality.',
    acceptedVariations: [
      'Teenagers who limit social media usage tend to have better sleep quality.',
      'Teens who reduce their social media use are likely to have better sleep quality.',
      'Adolescents who restrict social media use tend to get better sleep.'
    ],
    level: 'Advanced',
    sourceArticleTitle: 'Digital Wellbeing and Adolescent Sleep Architecture',
    grammarTopic: 'Relative / Adjective Clause with "Who" as Subject',
    grammarExplanation: 'Rumus Relative Clause: [Noun (Teens) + who + V (limit...) + Main Predicate (tend to have...)]. Relative pronoun "who" merujuk pada subjek manusia.',
    vocabHints: [
      { indonesian: 'Remaja', english: 'Teens / teenagers / adolescents', type: 'Noun' },
      { indonesian: 'Yang membatasi penggunaan media sosial', english: 'Who limit social media use', type: 'Relative Clause' },
      { indonesian: 'Cenderung memiliki', english: 'Tend to have', type: 'Verb Phrase' },
      { indonesian: 'Kualitas tidur lebih baik', english: 'Better sleep quality', type: 'Noun Phrase' }
    ]
  },
  {
    id: 'snt-8',
    indonesian: 'Jika perusahaan berinovasi secara berkelanjutan, kecerdasan buatan akan menciptakan lebih banyak lapangan kerja baru.',
    targetEnglish: 'If companies innovate sustainably, artificial intelligence will create more new jobs.',
    acceptedVariations: [
      'If companies continue to innovate, AI will create more new jobs.',
      'If businesses innovate continuously, artificial intelligence will generate more new employment opportunities.',
      'If companies innovate sustainably, AI will produce more new jobs.'
    ],
    level: 'Intermediate',
    sourceArticleTitle: 'Artificial Intelligence and the Future of Labor Markets',
    grammarTopic: 'Conditional Sentence & Adverb of Manner (Sustainably)',
    grammarExplanation: 'Conditional Type 1 memadukan klausul syarat "If companies innovate (V1)..." dengan klausa hasil "AI will create (will + V1)...". Gunakan adverb of manner "-ly" untuk menerangkan kata kerja.',
    vocabHints: [
      { indonesian: 'Perusahaan berinovasi', english: 'Companies innovate', type: 'Subject + Verb' },
      { indonesian: 'Secara berkelanjutan', english: 'Sustainably / continuously', type: 'Adverb' },
      { indonesian: 'Kecerdasan buatan', english: 'Artificial intelligence / AI', type: 'Noun' },
      { indonesian: 'Menciptakan lapangan kerja baru', english: 'Create new jobs', type: 'Verb Phrase' }
    ]
  },
  {
    id: 'snt-9',
    indonesian: 'Kota pesisir menghadapi risiko banjir yang lebih tinggi karena tanahnya terus mengalami penurunan.',
    targetEnglish: 'Coastal cities face higher flood risks because the land continues to subside.',
    acceptedVariations: [
      'Coastal cities face higher flood risks because their ground is constantly sinking.',
      'Coastal cities are facing higher risk of flooding because the land keeps sinking.',
      'Coastal cities face higher flood risks due to continuous land subsidence.'
    ],
    level: 'Advanced',
    sourceArticleTitle: 'Urban Subsidence & Coastal Sea Level Dynamics',
    grammarTopic: 'Cause & Effect Clause (Because + Clause vs Due to + Noun)',
    grammarExplanation: 'Gunakan "because + Subject + Verb" (because the land continues to subside) atau "due to + Noun Phrase" (due to land subsidence) untuk menyatakan sebab akibat.',
    vocabHints: [
      { indonesian: 'Kota pesisir', english: 'Coastal cities', type: 'Noun Phrase' },
      { indonesian: 'Menghadapi risiko banjir', english: 'Face higher flood risks', type: 'Verb Phrase' },
      { indonesian: 'Karena', english: 'Because / due to', type: 'Conjunction' },
      { indonesian: 'Mengalami penurunan tanah', english: 'Subside / sink / undergo subsidence', type: 'Verb' }
    ]
  },
  {
    id: 'snt-10',
    indonesian: 'Pohon-pohon di hutan berkomunikasi satu sama lain melalui jaringan jamur bawah tanah.',
    targetEnglish: 'Trees in the forest communicate with each other through underground fungal networks.',
    acceptedVariations: [
      'Forest trees communicate with one another through underground fungal networks.',
      'Trees in a forest communicate with each other via underground mycorrhizal networks.',
      'Trees communicate with each other through underground fungal networks in the forest.'
    ],
    level: 'Intermediate',
    sourceArticleTitle: 'The Wood Wide Web: Subterranean Fungal Communication',
    grammarTopic: 'Prepositional Phrases of Instrument & Location (through / in)',
    grammarExplanation: 'Frasa preposisi "through underground fungal networks" bertindak sebagai adverbial cara/perantara (means), menjelaskan bagaimana aksi "communicate" berlangsung.',
    vocabHints: [
      { indonesian: 'Pohon di hutan', english: 'Trees in the forest', type: 'Noun Phrase' },
      { indonesian: 'Berkomunikasi satu sama lain', english: 'Communicate with each other', type: 'Verb Phrase' },
      { indonesian: 'Melalui', english: 'Through / via', type: 'Preposition' },
      { indonesian: 'Jaringan jamur bawah tanah', english: 'Underground fungal networks', type: 'Noun Phrase' }
    ]
  },
  {
    id: 'snt-11',
    indonesian: 'Gurita mengubah warna kulit mereka saat tidur ketika mereka mengalami mimpi aktif.',
    targetEnglish: 'Octopuses change their skin color while sleeping when they experience active dreaming.',
    acceptedVariations: [
      'An octopus changes its skin color while sleeping when experiencing active dreams.',
      'Octopuses change their skin colors while sleeping when they undergo active dreams.',
      'Octopuses alter their skin color during sleep when they experience active dreaming.'
    ],
    level: 'Advanced',
    sourceArticleTitle: 'Do Cephalopods Dream? Neuro-imaging in Octopuses',
    grammarTopic: 'Time Clauses with "While" & "When"',
    grammarExplanation: 'Klausa waktu "while sleeping" (participle clause) dan "when they experience..." memberikan konteks temporal simultan terhadap klausa utama.',
    vocabHints: [
      { indonesian: 'Gurita', english: 'Octopuses / octopus', type: 'Noun' },
      { indonesian: 'Mengubah warna kulit', english: 'Change their skin color', type: 'Verb Phrase' },
      { indonesian: 'Saat tidur', english: 'While sleeping / during sleep', type: 'Time Phrase' },
      { indonesian: 'Mimpi aktif', english: 'Active dreaming', type: 'Noun Phrase' }
    ]
  },
  {
    id: 'snt-12',
    indonesian: 'Permukaan aspal yang gelap menyerap radiasi matahari dalam jumlah besar pada siang hari.',
    targetEnglish: 'Dark asphalt surfaces absorb vast amounts of solar radiation during peak daylight hours.',
    acceptedVariations: [
      'Dark asphalt surfaces absorb huge amounts of solar radiation during the daytime.',
      'Dark asphalt absorbs large amounts of solar radiation during peak daylight hours.',
      'Surfaces made of dark asphalt absorb vast amounts of solar energy during the day.'
    ],
    level: 'Intermediate',
    sourceArticleTitle: 'The Urban Forest Revolution: Combating Extreme Heat',
    grammarTopic: 'Quantifiers (vast amounts of) & Time Adverbial',
    grammarExplanation: 'Gunakan quantifier "vast amounts of + uncountable noun (solar radiation)" untuk menyatakan volume energi yang sangat besar dan tak terhitung.',
    vocabHints: [
      { indonesian: 'Permukaan aspal yang gelap', english: 'Dark asphalt surfaces', type: 'Noun Phrase' },
      { indonesian: 'Menyerap', english: 'Absorb', type: 'Verb' },
      { indonesian: 'Dalam jumlah besar', english: 'Vast amounts of / huge amounts of', type: 'Quantifier' },
      { indonesian: 'Radiasi matahari', english: 'Solar radiation', type: 'Noun Phrase' }
    ]
  },
  {
    id: 'snt-13',
    indonesian: 'Menanam pohon asli lokal dapat mempercepat pertumbuhan hutan kota hingga sepuluh kali lipat.',
    targetEnglish: 'Planting native indigenous trees can accelerate urban forest growth by up to ten times.',
    acceptedVariations: [
      'Planting native trees can speed up urban forest growth up to ten times.',
      'Cultivating indigenous tree species can accelerate urban forest growth by ten times.',
      'Planting indigenous trees can boost urban canopy growth ten times faster.'
    ],
    level: 'Intermediate',
    sourceArticleTitle: 'The Miyawaki Method and Urban Canopy Expansion',
    grammarTopic: 'Gerund as Subject (Planting...) & Modal Verb (Can)',
    grammarExplanation: 'Subjek kalimat diawali gerund "Planting native indigenous trees". Predikat menggunakan modal "can accelerate" untuk menyatakan kemampuan/potensi.',
    vocabHints: [
      { indonesian: 'Menanam pohon asli', english: 'Planting native indigenous trees', type: 'Gerund Subject' },
      { indonesian: 'Mempercepat pertumbuhan', english: 'Accelerate growth / speed up growth', type: 'Verb Phrase' },
      { indonesian: 'Hutan kota', english: 'Urban forest', type: 'Noun Phrase' },
      { indonesian: 'Hingga sepuluh kali lipat', english: 'By up to ten times', type: 'Adverbial Phrase' }
    ]
  },
  {
    id: 'snt-14',
    indonesian: 'Bakteri laut yang baru ditemukan mampu memecah ikatan kimia plastik dalam hitungan minggu.',
    targetEnglish: 'Newly discovered marine bacteria are capable of breaking down chemical plastic bonds within weeks.',
    acceptedVariations: [
      'Newly discovered marine bacteria can break down plastic chemical bonds in a few weeks.',
      'The newly found marine bacteria are able to degrade chemical bonds of plastic within weeks.',
      'Newly discovered ocean bacteria can break down chemical plastic bonds within weeks.'
    ],
    level: 'Advanced',
    sourceArticleTitle: 'Enzymatic Plastic Degradation by Marine Bacteria',
    grammarTopic: 'Adjective Phrase "capable of + V-ing" & Time Preposition "Within"',
    grammarExplanation: 'Konstruksi "be capable of + Gerund (breaking down...)" setara dengan modal "can/able to". Preposisi "within weeks" menandakan batas waktu selesainya proses.',
    vocabHints: [
      { indonesian: 'Bakteri laut yang baru ditemukan', english: 'Newly discovered marine bacteria', type: 'Noun Phrase' },
      { indonesian: 'Mampu memecah', english: 'Are capable of breaking down / can break down', type: 'Predicate Phrase' },
      { indonesian: 'Ikatan kimia', english: 'Chemical bonds', type: 'Noun Phrase' },
      { indonesian: 'Dalam hitungan minggu', english: 'Within weeks / in a matter of weeks', type: 'Time Phrase' }
    ]
  },
  {
    id: 'snt-15',
    indonesian: 'Para insinyur terinspirasi oleh struktur sarang rayap untuk merancang sistem pendingin hemat energi.',
    targetEnglish: 'Engineers were inspired by termite mound structures to design energy-efficient cooling systems.',
    acceptedVariations: [
      'Engineers got inspired by termite mounds to design energy-efficient cooling systems.',
      'Architects were inspired by the structure of termite mounds to create energy-efficient cooling systems.',
      'Engineers drew inspiration from termite mound structures to design passive cooling systems.'
    ],
    level: 'Advanced',
    sourceArticleTitle: 'Biomimicry: Termite Architecture in Modern Ventilation',
    grammarTopic: 'Passive Voice (were inspired by) & Infinitive of Purpose (to design)',
    grammarExplanation: 'Bentuk pasif "were inspired by" dipadukan dengan infinitive of purpose "to design..." untuk menjelaskan maksud dari aksi tersebut.',
    vocabHints: [
      { indonesian: 'Para insinyur', english: 'Engineers', type: 'Noun' },
      { indonesian: 'Terinspirasi oleh', english: 'Were inspired by', type: 'Passive Verb' },
      { indonesian: 'Struktur sarang rayap', english: 'Termite mound structures', type: 'Noun Phrase' },
      { indonesian: 'Sistem pendingin hemat energi', english: 'Energy-efficient cooling systems', type: 'Noun Phrase' }
    ]
  },
  {
    id: 'snt-16',
    indonesian: 'Membaca secara konsisten selama dua puluh menit setiap hari dapat memperluas kosakata aktif kita.',
    targetEnglish: 'Reading consistently for twenty minutes every day can expand our active vocabulary.',
    acceptedVariations: [
      'Reading consistently for 20 minutes a day can broaden our active vocabulary.',
      'Consistently reading for twenty minutes each day can expand our active vocabulary.',
      'Reading for twenty minutes daily can significantly improve our active vocabulary.'
    ],
    level: 'Beginner',
    sourceArticleTitle: 'The Compounding Power of Daily Reading Habits',
    grammarTopic: 'Gerund as Subject with Adverb of Frequency',
    grammarExplanation: 'Gerund "Reading consistently for twenty minutes every day" bertindak sebagai satu kesatuan subjek tunggal yang diikuti modal "can expand".',
    vocabHints: [
      { indonesian: 'Membaca secara konsisten', english: 'Reading consistently', type: 'Gerund Phrase' },
      { indonesian: 'Dua puluh menit setiap hari', english: 'For twenty minutes every day', type: 'Time Phrase' },
      { indonesian: 'Dapat memperluas', english: 'Can expand / can broaden', type: 'Modal Verb' },
      { indonesian: 'Kosakata aktif', english: 'Active vocabulary', type: 'Noun Phrase' }
    ]
  },
  {
    id: 'snt-17',
    indonesian: 'Komputer kuantum dapat memecahkan perhitungan rumit yang membutuhkan ribuan tahun bagi komputer biasa.',
    targetEnglish: 'Quantum computers can solve complex calculations that would take thousands of years for ordinary computers.',
    acceptedVariations: [
      'Quantum computers can solve complicated calculations that take thousands of years for standard computers.',
      'A quantum computer can solve complex calculations that would require thousands of years for conventional computers.',
      'Quantum computers are able to solve complex equations that would take classical computers thousands of years.'
    ],
    level: 'Advanced',
    sourceArticleTitle: 'Quantum Superposition and Computational Breakthroughs',
    grammarTopic: 'Relative Clause (that would take...) & Conditional Modal (would)',
    grammarExplanation: 'Klausa penjelas "that would take thousands of years" menerangkan nomina "complex calculations" dengan modal hipotetis "would".',
    vocabHints: [
      { indonesian: 'Komputer kuantum', english: 'Quantum computers', type: 'Noun Phrase' },
      { indonesian: 'Memecahkan perhitungan rumit', english: 'Solve complex calculations', type: 'Verb Phrase' },
      { indonesian: 'Membutuhkan ribuan tahun', english: 'Would take thousands of years', type: 'Predicate Phrase' },
      { indonesian: 'Komputer biasa', english: 'Ordinary computers / conventional computers', type: 'Noun Phrase' }
    ]
  },
  {
    id: 'snt-18',
    indonesian: 'Cahaya biru dari layar gawai dapat menghambat produksi melatonin alami dalam tubuh.',
    targetEnglish: 'Blue light from device screens can suppress natural melatonin production in the body.',
    acceptedVariations: [
      'Blue light emitted from screen devices can inhibit natural melatonin production in the body.',
      'The blue light from screens can reduce the body’s natural production of melatonin.',
      'Blue light from digital screens can suppress natural melatonin production inside the body.'
    ],
    level: 'Intermediate',
    sourceArticleTitle: 'Circadian Rhythms and Screen Illumination',
    grammarTopic: 'Subject-Verb Agreement with Prepositional Modifiers',
    grammarExplanation: 'Subjek utama adalah "Blue light" (uncountable), dimodifikasi oleh frasa "from device screens", dengan kata kerja modal "can suppress".',
    vocabHints: [
      { indonesian: 'Cahaya biru', english: 'Blue light', type: 'Noun Phrase' },
      { indonesian: 'Layar gawai', english: 'Device screens', type: 'Noun Phrase' },
      { indonesian: 'Menghambat produksi', english: 'Suppress production / inhibit production', type: 'Verb Phrase' },
      { indonesian: 'Dalam tubuh', english: 'In the body', type: 'Prepositional Phrase' }
    ]
  },
  {
    id: 'snt-19',
    indonesian: 'Organisme laut dalam menghasilkan cahaya mereka sendiri untuk menarik mangsa dan berkomunikasi.',
    targetEnglish: 'Deep sea organisms produce their own light to attract prey and communicate.',
    acceptedVariations: [
      'Deep ocean creatures generate their own light to lure prey and communicate.',
      'Deep-sea organisms create their own light in order to attract prey and communicate.',
      'Deep sea animals produce their own glow to attract prey and communicate with each other.'
    ],
    level: 'Beginner',
    sourceArticleTitle: 'Bioluminescence in the Abyssal Ocean Zone',
    grammarTopic: 'Infinitive of Purpose with Compound Verbs (to attract... and communicate)',
    grammarExplanation: 'Infinitive marker "to" menghubungkan dua kata kerja tujuan: "to [attract prey] and [communicate]".',
    vocabHints: [
      { indonesian: 'Organisme laut dalam', english: 'Deep sea organisms', type: 'Noun Phrase' },
      { indonesian: 'Menghasilkan cahaya mereka sendiri', english: 'Produce their own light', type: 'Verb Phrase' },
      { indonesian: 'Menarik mangsa', english: 'Attract prey / lure prey', type: 'Infinitive Phrase' },
      { indonesian: 'Berkomunikasi', english: 'Communicate', type: 'Verb' }
    ]
  },
  {
    id: 'snt-20',
    indonesian: 'Kebiasaan kecil yang diulang setiap hari akan menghasilkan perubahan besar dalam jangka panjang.',
    targetEnglish: 'Small habits repeated every day will produce massive changes in the long run.',
    acceptedVariations: [
      'Small habits that are repeated daily will generate significant changes in the long term.',
      'Tiny habits repeated each day will create huge changes over time.',
      'Small habits repeated every day will yield big changes in the long run.'
    ],
    level: 'Intermediate',
    sourceArticleTitle: 'The Compounding Power of Daily Reading Habits',
    grammarTopic: 'Past Participle as Reduced Relative Clause (repeated every day)',
    grammarExplanation: '"repeated every day" adalah pemendekan (reduction) dari relative clause "which are repeated every day", memodifikasi subjek "Small habits".',
    vocabHints: [
      { indonesian: 'Kebiasaan kecil', english: 'Small habits / tiny habits', type: 'Noun Phrase' },
      { indonesian: 'Diulang setiap hari', english: 'Repeated every day / repeated daily', type: 'Participle Phrase' },
      { indonesian: 'Menghasilkan perubahan besar', english: 'Produce massive changes / create huge changes', type: 'Verb Phrase' },
      { indonesian: 'Dalam jangka panjang', english: 'In the long run / in the long term', type: 'Idiomatic Phrase' }
    ]
  },
  ...ADDITIONAL_SENTENCE_DRILLS_50,
  ...ADDITIONAL_SENTENCE_DRILLS_50_PART2
];
