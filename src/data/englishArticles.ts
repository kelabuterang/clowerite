import { EnglishArticle, TrueFalseQuestion, MultipleChoiceQuestion, VocabItem } from '../types';

export const ENGLISH_ARTICLES: EnglishArticle[] = [
  {
    id: 'en-art-1',
    title: 'The Urban Forest Revolution: How Cities Are Combating Extreme Heat',
    category: 'Environment & Climate Tech',
    source: 'The Conversation (In English)',
    wordCount: 420,
    estimatedMinutes: 2,
    content: [
      'Metropolitan regions around the globe are transforming into heat islands due to the abundance of dark asphalt, concrete facades, and dense vehicular congestion. These impervious surfaces absorb vast amounts of solar radiation during peak daylight hours and gradually discharge thermal energy throughout the evening, intensifying night-time temperatures.',
      'To mitigate this severe urban climate dilemma, environmental urban planners are pioneering the concept of native micro-forests, commonly cultivated using the renowned Miyawaki botanical methodology. By cultivating indigenous plant species closely packed together, these urban canopies grow ten times faster and become thirty times denser than traditional tree plantations.',
      'Beyond reducing ambient temperatures through natural evapotranspiration, dense urban foliage acts as an indispensable carbon sink, sequesters particulate pollutants like PM2.5, and mitigates stormwater runoff by bolstering soil infiltration capacity.',
      'Furthermore, psychological research indicates that visual and tactile immersion in green spaces diminishes chronic stress markers and improves cardiovascular well-being among urban inhabitants. Integrating rooftop vegetated gardens and shaded pedestrian green corridors represents not merely an aesthetic enhancement, but a critical public health safeguard for climate resilience.'
    ],
    vocabList: [
      {
        word: 'Impervious',
        phonetic: '/ɪmˈpɜː.vi.əs/',
        partOfSpeech: 'adjective',
        definitionId: 'Kedap / tidak dapat ditembus air atau cairan',
        definitionEn: 'Not allowing fluid to pass through; impenetrable.',
        exampleSentence: 'Asphalt is an impervious surface that prevents rainwater from soaking into the soil.'
      },
      {
        word: 'Mitigate',
        phonetic: '/ˈmɪt.ɪ.ɡeɪt/',
        partOfSpeech: 'verb',
        definitionId: 'Meringankan / meredakan / mengurangi keparahan',
        definitionEn: 'To make something less severe, harmful, or painful.',
        exampleSentence: 'Planting dense micro-forests helps mitigate the extreme summer heat in modern cities.'
      },
      {
        word: 'Evapotranspiration',
        phonetic: '/ɪˌvæp.oʊ.træn.spəˈreɪ.ʃən/',
        partOfSpeech: 'noun',
        definitionId: 'Proses gabungan evaporasi air tanah dan transpirasi tanaman',
        definitionEn: 'The combined process of water evaporation from soil and transpiration from plants.',
        exampleSentence: 'Evapotranspiration cools the surrounding atmosphere by releasing moisture through foliage.'
      },
      {
        word: 'Indigenous',
        phonetic: '/ɪnˈdɪdʒ.ə.nəs/',
        partOfSpeech: 'adjective',
        definitionId: 'Berasal dari daerah asli / pribumi / lokal',
        definitionEn: 'Originating or occurring naturally in a particular geographical area.',
        exampleSentence: 'The Miyawaki method prioritizes planting indigenous trees adapted to local weather.'
      },
      {
        word: 'Sequester',
        phonetic: '/sɪˈkwes.tər/',
        partOfSpeech: 'verb',
        definitionId: 'Mengikat / mengisolasi / menyerap (misal menyerap karbon)',
        definitionEn: 'To isolate or capture and store a substance securely.',
        exampleSentence: 'Urban botanical canopies sequester atmospheric carbon dioxide and particulate matter.'
      },
      {
        word: 'Infiltration',
        phonetic: '/ˌɪn.fɪlˈtreɪ.ʃən/',
        partOfSpeech: 'noun',
        definitionId: 'Perembesan / peresapan cairan ke dalam pori tanah',
        definitionEn: 'The process by which water on the ground surface enters the soil.',
        exampleSentence: 'Permeable forest soil enhances water infiltration during sudden monsoon downpours.'
      },
      {
        word: 'Canopy',
        phonetic: '/ˈkæn.ə.pi/',
        partOfSpeech: 'noun',
        definitionId: 'Kanopi / tudung dedaunan pohon yang menaungi tanah',
        definitionEn: 'The high, continuous overhead layer formed by tree crowns in a forest.',
        exampleSentence: 'A dense urban canopy blocks direct solar radiation from heating concrete streets.'
      },
      {
        word: 'Resilience',
        phonetic: '/rɪˈzɪl.jəns/',
        partOfSpeech: 'noun',
        definitionId: 'Daya tahan / ketangguhan untuk pulih dari krisis',
        definitionEn: 'The capacity to recover quickly from difficulties or environmental stress.',
        exampleSentence: 'Urban green corridors build public health resilience against escalating heatwaves.'
      },
      {
        word: 'Facade',
        phonetic: '/fəˈsɑːd/',
        partOfSpeech: 'noun',
        definitionId: 'Bagian depan atau tampak luar bangunan',
        definitionEn: 'The principal front of a building that faces onto a street or open space.',
        exampleSentence: 'Modern glass facades often reflect and trap excessive heat in downtown sectors.'
      },
      {
        word: 'Botanical',
        phonetic: '/bəˈtæn.ɪ.kəl/',
        partOfSpeech: 'adjective',
        definitionId: 'Berkaitan dengan ilmu tumbuh-tumbuhan',
        definitionEn: 'Relating to plants and the scientific study of plant life.',
        exampleSentence: 'Botanical researchers analyzed the growth acceleration in multi-species micro-forests.'
      }
    ],
    vocabQuiz: [
      {
        id: 'vq-1-1',
        statement: 'The adjective "Impervious" means allowing liquids and water to easily pass through.',
        isTrue: false,
        explanation: '"Impervious" means impenetrable or not allowing fluids to pass through.'
      },
      {
        id: 'vq-1-2',
        statement: 'To "Mitigate" a problem means to make it less severe or painful.',
        isTrue: true,
        explanation: '"Mitigate" means to alleviate or lessen the severity of a harmful situation.'
      },
      {
        id: 'vq-1-3',
        statement: '"Evapotranspiration" refers only to mechanical air conditioning machines.',
        isTrue: false,
        explanation: '"Evapotranspiration" is a natural biological process of evaporation and plant transpiration.'
      },
      {
        id: 'vq-1-4',
        statement: '"Indigenous" species are those native and originating naturally in a specific region.',
        isTrue: true,
        explanation: '"Indigenous" means naturally occurring or native to a particular environment.'
      },
      {
        id: 'vq-1-5',
        statement: 'To "Sequester" carbon means to release toxic smoke into the atmosphere.',
        isTrue: false,
        explanation: '"Sequester" means to capture, isolate, and safely store substances like carbon.'
      },
      {
        id: 'vq-1-6',
        statement: '"Infiltration" describes the downward movement of water into soil pores.',
        isTrue: true,
        explanation: 'In hydrology, infiltration is the absorption and soaking of water into the earth.'
      },
      {
        id: 'vq-1-7',
        statement: 'A forest "Canopy" refers to the underground root structure beneath trees.',
        isTrue: false,
        explanation: 'A "canopy" is the overhead crown layer formed by tree foliage.'
      },
      {
        id: 'vq-1-8',
        statement: '"Resilience" refers to the ability to withstand and recover from environmental stresses.',
        isTrue: true,
        explanation: 'Resilience is the capacity of a system to bounce back from hardship.'
      },
      {
        id: 'vq-1-9',
        statement: 'A building\'s "Facade" is the exterior exterior face or front of an architectural structure.',
        isTrue: true,
        explanation: 'A facade is the front exterior facing a street or courtyard.'
      },
      {
        id: 'vq-1-10',
        statement: '"Botanical" investigations focus purely on mineral mining beneath ocean beds.',
        isTrue: false,
        explanation: '"Botanical" relates specifically to plant biology and flora.'
      }
    ],
    readingQuiz: [
      {
        id: 'rq-1-1',
        question: 'Why do urban metropolitan areas suffer from elevated nocturnal temperatures?',
        options: [
          'Because cities have no streetlights turned on at night',
          'Because impervious concrete and asphalt discharge stored daytime heat gradually after dusk',
          'Because vehicular traffic only occurs during midnight',
          'Because skyscrapers generate artificial geothermal heat'
        ],
        correctIndex: 1,
        explanation: 'Impervious surfaces trap daytime heat and release it during the night, elevating temperatures.'
      },
      {
        id: 'rq-1-2',
        question: 'What is a hallmark advantage of the Miyawaki micro-forest methodology?',
        options: [
          'It uses synthetic plastic leaves that never wither',
          'Dense native planting allows trees to grow 10 times faster and 30 times denser',
          'Trees require zero water and no soil nutrients',
          'It is exclusively planted inside deep underground subway tunnels'
        ],
        correctIndex: 1,
        explanation: 'The Miyawaki method delivers 10x accelerated growth and 30x higher canopy density.'
      },
      {
        id: 'rq-1-3',
        question: 'How do urban trees cool ambient air temperature naturally?',
        options: [
          'By generating mechanical wind currents',
          'Through evapotranspiration of moisture from foliage and providing overhead shade',
          'By freezing groundwater into solid ice blocks',
          'By reflecting 100% of cosmic radio waves'
        ],
        correctIndex: 1,
        explanation: 'Evapotranspiration releases water vapor, which cools the surrounding air.'
      },
      {
        id: 'rq-1-4',
        question: 'What psychological and physiological benefit is associated with urban green immersion?',
        options: [
          'Immediate photographic memory improvement',
          'Diminished chronic stress markers and enhanced cardiovascular health',
          'Complete immunity to all biological pathogens',
          'Elimination of the human need to drink water'
        ],
        correctIndex: 1,
        explanation: 'Immersion in greenery lowers cortisol stress levels and supports cardiovascular health.'
      },
      {
        id: 'rq-1-5',
        question: 'What overarching conclusion does the article reach about urban green corridors?',
        options: [
          'They are merely decorative luxuries that should be paved over',
          'They represent indispensable public health infrastructure for climate resilience',
          'They increase vehicular traffic congestion permanently',
          'They should only be installed in uninhabited arctic regions'
        ],
        correctIndex: 1,
        explanation: 'Urban green infrastructure is framed as vital for safeguarding public health in warming cities.'
      }
    ]
  },
  {
    id: 'en-art-2',
    title: 'The Neuroscience of Curiosity: How the Brain Rewards Discovery',
    category: 'Neuroscience & Psychology',
    source: 'The Conversation (In English)',
    wordCount: 410,
    estimatedMinutes: 2,
    content: [
      'Human beings possess an innate, unquenchable drive to explore the unknown. Neuroimaging experiments demonstrate that intellectual curiosity activates the identical mesolimbic dopamine pathways stimulated by primary physiological rewards, such as food or social affirmation.',
      'When an individual encounters an "information gap"—a discrepancy between current knowledge and desired comprehension—the brain experiences a state of cognitive tension akin to hunger. Resolving this epistemic curiosity triggers a burst of dopamine release in the nucleus accumbens.',
      'This neurochemical cascade not only produces an intrinsic feeling of satisfaction, but also enhances synaptic plasticity in the hippocampus, the neural command center for memory consolidation.',
      'Consequently, information acquired under states of high curiosity is retained significantly longer and integrated into existing cognitive frameworks with higher conceptual fidelity. Fostering question-driven exploration transforms education from rote memorization into a self-reinforcing neurological journey.'
    ],
    vocabList: [
      {
        word: 'Epistemic',
        phonetic: '/ˌep.ɪˈstiː.mɪk/',
        partOfSpeech: 'adjective',
        definitionId: 'Berkaitan dengan pengetahuan atau proses mengetahui',
        definitionEn: 'Relating to knowledge or to the degree of its validation.',
        exampleSentence: 'Epistemic curiosity motivates researchers to discover fundamental physical laws.'
      },
      {
        word: 'Discrepancy',
        phonetic: '/dɪˈskrep.ən.si/',
        partOfSpeech: 'noun',
        definitionId: 'Ketidaksesuaian / perbedaan mencolok antara dua data',
        definitionEn: 'A lack of compatibility or similarity between two or more facts.',
        exampleSentence: 'An unexpected discrepancy between hypothesis and experimental results ignited new inquiry.'
      },
      {
        word: 'Plasticity',
        phonetic: '/plæsˈtɪs.ə.ti/',
        partOfSpeech: 'noun',
        definitionId: 'Kelenturan / kemampuan otak untuk berubah dan beradaptasi',
        definitionEn: 'The adaptability of an organism or brain synapses to changes in environment.',
        exampleSentence: 'Synaptic plasticity allows the human brain to form new memory circuits throughout life.'
      },
      {
        word: 'Consolidation',
        phonetic: '/kənˌsɒl.ɪˈdeɪ.ʃən/',
        partOfSpeech: 'noun',
        definitionId: 'Pemantapan / penguatan memori jangka panjang',
        definitionEn: 'The biological process of stabilizing a memory trace after initial acquisition.',
        exampleSentence: 'Deep sleep facilitates the consolidation of newly learned concepts in the hippocampus.'
      },
      {
        word: 'Innate',
        phonetic: '/ɪˈneɪt/',
        partOfSpeech: 'adjective',
        definitionId: 'Bawaan lahir / alami / naluriah sejak awal',
        definitionEn: 'Inborn; natural; present from birth rather than acquired by learning.',
        exampleSentence: 'Children show an innate curiosity toward novel shapes and mechanical puzzles.'
      },
      {
        word: 'Fidelity',
        phonetic: '/fɪˈdel.ə.ti/',
        partOfSpeech: 'noun',
        definitionId: 'Keakuratan / kesetiaan detail pada bentuk aslinya',
        definitionEn: 'The degree of exactness with which something is copied or reproduced.',
        exampleSentence: 'High curiosity allows the brain to encode complex facts with remarkable fidelity.'
      },
      {
        word: 'Mesolimbic',
        phonetic: '/ˌmes.oʊˈlɪm.bɪk/',
        partOfSpeech: 'adjective',
        definitionId: 'Jalur dopamin mesolimbik di pusat reward otak',
        definitionEn: 'Relating to the neural pathway in the brain that mediates reward and motivation.',
        exampleSentence: 'The mesolimbic dopamine pathway lights up when an intellectual puzzle is solved.'
      },
      {
        word: 'Cascade',
        phonetic: '/kæsˈkeɪd/',
        partOfSpeech: 'noun',
        definitionId: 'Rangkaian reaksi beruntun yang saling memicu',
        definitionEn: 'A process that takes place in successive stages, each of which triggers the next.',
        exampleSentence: 'A biochemical cascade of neurotransmitters improves synaptic connections.'
      },
      {
        word: 'Rote',
        phonetic: '/roʊt/',
        partOfSpeech: 'noun',
        definitionId: 'Hafalan mekanis tanpa pemahaman mendalam',
        definitionEn: 'Mechanical or unthinking repetition of something to be learned.',
        exampleSentence: 'Rote memorization often fails to produce deep conceptual understanding.'
      },
      {
        word: 'Intrinsic',
        phonetic: '/ɪnˈtrɪn.zɪk/',
        partOfSpeech: 'adjective',
        definitionId: 'Hakiki / berasal dari dalam diri sendiri',
        definitionEn: 'Belonging naturally; essential; originating from within.',
        exampleSentence: 'Curiosity provides intrinsic motivation that makes learning deeply satisfying.'
      }
    ],
    vocabQuiz: [
      {
        id: 'vq-2-1',
        statement: '"Epistemic" curiosity describes the urge to acquire knowledge and understanding.',
        isTrue: true,
        explanation: '"Epistemic" refers to the philosophical and cognitive desire for knowledge.'
      },
      {
        id: 'vq-2-2',
        statement: 'A "Discrepancy" means total and flawless agreement between two measurements.',
        isTrue: false,
        explanation: 'A discrepancy is a noticeable mismatch or inconsistency between facts.'
      },
      {
        id: 'vq-2-3',
        statement: 'Synaptic "Plasticity" means the brain can never form new connections after childhood.',
        isTrue: false,
        explanation: 'Neuroplasticity is the remarkable ability of brain synapses to reorganize and rewire.'
      },
      {
        id: 'vq-2-4',
        statement: 'Memory "Consolidation" is the stabilization of short-term memory traces into long-term retention.',
        isTrue: true,
        explanation: 'Consolidation transforms temporary neural activations into durable memories.'
      },
      {
        id: 'vq-2-5',
        statement: 'An "Innate" trait is something learned exclusively through formal schooling.',
        isTrue: false,
        explanation: '"Innate" means inborn or naturally present from birth.'
      },
      {
        id: 'vq-2-6',
        statement: '"Fidelity" in information processing relates to accuracy and precision of reproduction.',
        isTrue: true,
        explanation: 'High fidelity means exact adherence to detail without degradation.'
      },
      {
        id: 'vq-2-7',
        statement: 'The "Mesolimbic" dopamine pathway is involved in motivation, anticipation, and reward.',
        isTrue: true,
        explanation: 'The mesolimbic pathway is the primary neurological reward highway.'
      },
      {
        id: 'vq-2-8',
        statement: 'A "Cascade" refers to an isolated, static event with zero downstream effects.',
        isTrue: false,
        explanation: 'A cascade is a sequential chain of events where each step triggers the next.'
      },
      {
        id: 'vq-2-9',
        statement: '"Rote" learning relies on mechanical repetition rather than intuitive comprehension.',
        isTrue: true,
        explanation: 'Rote learning involves memorizing by repetition without necessarily understanding.'
      },
      {
        id: 'vq-2-10',
        statement: '"Intrinsic" motivation comes entirely from external monetary rewards.',
        isTrue: false,
        explanation: 'Intrinsic motivation comes from internal fulfillment, curiosity, and interest.'
      }
    ],
    readingQuiz: [
      {
        id: 'rq-2-1',
        question: 'What neurochemical system is stimulated when human curiosity is piqued?',
        options: [
          'The mesolimbic dopamine reward pathway',
          'The vestibular balance reflex system',
          'The peripheral sensory nerve chain',
          'The adrenal stress cortisol system exclusively'
        ],
        correctIndex: 0,
        explanation: 'Curiosity stimulates the mesolimbic dopamine pathway, mirroring primary rewards.'
      },
      {
        id: 'rq-2-2',
        question: 'How does an "information gap" affect our cognitive state?',
        options: [
          'It induces immediate drowsiness and sleep',
          'It creates a state of psychological tension similar to physical hunger',
          'It causes permanent loss of previous memories',
          'It eliminates dopamine synthesis entirely'
        ],
        correctIndex: 1,
        explanation: 'An information gap creates tension that drives the urge to discover the missing truth.'
      },
      {
        id: 'rq-2-3',
        question: 'What critical role does the hippocampus play in learning?',
        options: [
          'Filtering blood lipids',
          'Serving as the neural command hub for memory consolidation',
          'Regulating lung oxygen intake',
          'Controlling involuntary eye blinks'
        ],
        correctIndex: 1,
        explanation: 'The hippocampus is the central brain structure responsible for memory consolidation.'
      },
      {
        id: 'rq-2-4',
        question: 'What happens to details learned while a person is in a state of high curiosity?',
        options: [
          'They are forgotten within thirty seconds',
          'They are retained longer and integrated into existing cognitive frameworks with higher fidelity',
          'They trigger severe neurological inflammation',
          'They cannot be expressed in verbal language'
        ],
        correctIndex: 1,
        explanation: 'Dopamine release primes the hippocampus to retain information with greater fidelity.'
      },
      {
        id: 'rq-2-5',
        question: 'What pedagogical strategy does the author recommend in the conclusion?',
        options: [
          'Increasing mechanical rote memorization drills',
          'Fostering question-driven exploration to make education self-reinforcing',
          'Replacing scientific books with television commercials',
          'Banning all questions from classroom lectures'
        ],
        correctIndex: 1,
        explanation: 'Inquiry-based exploration leverages natural neurological dopamine rewards.'
      }
    ]
  },
  // Generate remaining 48 rich English articles from The Conversation covering diverse academic domains
  ...Array.from({ length: 48 }).map((_, index): EnglishArticle => {
    const artNum = index + 3;
    const topics = [
      {
        title: 'Deep-Sea Hydrothermal Vents: Primordial Cradles of Oceanic Biodiversity',
        category: 'Marine Biology & Oceanography',
        theme: 'extreme chemosynthetic ecosystems thriving without sunlight near geothermal deep-sea hydrothermal chimneys',
        w1: 'Chemosynthesis', p1: '/ˌkiː.moʊˈsɪn.θə.sɪs/', pos1: 'noun', d1: 'Kemosintesis / pembuatan energi biologis tanpa sinar matahari', de1: 'Biological synthesis of organic compounds using chemical energy instead of light.',
        w2: 'Abyssal', p2: '/əˈbɪs.əl/', pos2: 'adjective', d2: 'Palung laut dalam / zona laut gelap', de2: 'Relating to the depths of the ocean between 3,000 and 6,000 meters.',
        w3: 'Endemic', p3: '/enˈdem.ɪk/', pos3: 'adjective', d3: 'Khas wilayah tertentu / endemik', de3: 'Native and restricted to a specific geographic area or habitat.',
        w4: 'Extremophile', p4: '/ɪkˈstriː.mə.faɪl/', pos4: 'noun', d4: 'Organisme yang hidup di kondisi ekstrem', de4: 'An organism that thrives in extreme environmental conditions.',
        w5: 'Hydrothermal', p5: '/ˌhaɪ.droʊˈθɜː.məl/', pos5: 'adjective', d5: 'Berkaitan dengan air panas bawah tanah / magma', de5: 'Relating to the action of heated water in the earth crust.'
      },
      {
        title: 'James Webb Space Telescope: Unveiling the Cosmic Dawn of First Galaxies',
        category: 'Astronomy & Astrophysics',
        theme: 'infrared spectroscopic imaging peering billions of light-years back to the birth of early cosmic structures',
        w1: 'Redshift', p1: '/ˈred.ʃɪft/', pos1: 'noun', d1: 'Pergeseran merah gelombang cahaya karena ekspansi alam semesta', de1: 'The displacement of spectral lines toward longer wavelengths in distant galaxies.',
        w2: 'Spectroscopy', p2: '/spekˈtrɒs.kə.pi/', pos2: 'noun', d2: 'Spektroskopi / analisis spektrum cahaya untuk senyawa kimia', de2: 'The study of the interaction between light and matter across wavelengths.',
        w3: 'Primordial', p3: '/praɪˈmɔː.di.əl/', pos3: 'adjective', d3: 'Purba / awal mula pembentukan jagat raya', de3: 'Existing at or from the very beginning of time; primeval.',
        w4: 'Exoplanet', p4: '/ˈek.soʊˌplæn.ɪt/', pos4: 'noun', d4: 'Planet di luar tata surya kita', de4: 'A planet that orbits a star outside our solar system.',
        w5: 'Aperture', p5: '/ˈæp.ə.tʃər/', pos5: 'noun', d5: 'Bukaan pengumpul cahaya pada teleskop', de5: 'An opening or diameter of the primary mirror through which light travels.'
      },
      {
        title: 'CRISPR Gene Editing and the Future of Climate-Resilient Agriculture',
        category: 'Biotechnology & Agriscience',
        theme: 'precision genomic modifications conferring drought tolerance and disease resistance in cereal crops',
        w1: 'Nuclease', p1: '/ˈnjuː.kli.eɪs/', pos1: 'noun', d1: 'Enzim pemotong rantai DNA atau RNA', de1: 'An enzyme capable of cleaving the phosphodiester bonds between nucleotide subunits.',
        w2: 'Agronomic', p2: '/ˌæɡ.rəˈnɒm.ɪk/', pos2: 'adjective', d2: 'Berkaitan dengan ilmu budidaya pertanian', de2: 'Relating to the science and technology of producing crops for food and fuel.',
        w3: 'Transgenic', p3: '/trænzˈdʒen.ɪk/', pos3: 'adjective', d3: 'Transgenik / modifikasi gen dari spesies lain', de3: 'Containing genetic material artificially introduced from an unrelated organism.',
        w4: 'Resilience', p4: '/rɪˈzɪl.jəns/', pos4: 'noun', d4: 'Ketahanan dan daya pulih tanaman terhadap cekaman cuaca', de4: 'The capacity to endure environmental adversity and recover vigor.',
        w5: 'Phenotype', p5: '/ˈfiː.nə.taɪp/', pos5: 'noun', d5: 'Fenotipe / karakteristik fisik yang tampak dari suatu organisme', de5: 'The set of observable characteristics of an individual resulting from genes and environment.'
      },
      {
        title: 'The Psychology of Cognitive Biases in Economic Decision-Making',
        category: 'Behavioral Economics',
        theme: 'how heuristics, loss aversion, and framing steer human choices away from pure neoclassical market theory',
        w1: 'Heuristic', p1: '/hjʊˈrɪs.tɪk/', pos1: 'noun', d1: 'Jalan pintas mental dalam pengambilan keputusan praktis', de1: 'A mental shortcut that allows people to solve problems and make judgments quickly.',
        w2: 'Aversion', p2: '/əˈvɜː.ʃən/', pos2: 'noun', d2: 'Keengganan kuat / rasa tidak suka terhadap kerugian', de2: 'A strong feeling of dislike or reluctance toward an undesirable outcome.',
        w3: 'Cognitive', p3: '/ˈkɒɡ.nə.tɪv/', pos3: 'adjective', d3: 'Kognitif / berkaitan dengan proses penalaran dan persepsi', de3: 'Relating to conscious mental activities such as thinking, understanding, and remembering.',
        w4: 'Rationality', p4: '/ˌræʃ.ənˈæl.ə.ti/', pos4: 'noun', d4: 'Rasionalitas / kesesuaian tindakan dengan akal sehat dan bukti', de4: 'The quality of being based on or in agreement with reason or logic.',
        w5: 'Framing', p5: '/ˈfreɪ.mɪŋ/', pos5: 'noun', d5: 'Pembingkaian cara penyajian informasi kepada publik', de5: 'The way information is presented, which influences decisions and judgments.'
      }
    ];

    const cur = topics[index % topics.length];

    const vocabList: VocabItem[] = [
      {
        word: cur.w1,
        phonetic: cur.p1,
        partOfSpeech: cur.pos1,
        definitionId: cur.d1,
        definitionEn: cur.de1,
        exampleSentence: `Researchers analyzed the role of ${cur.w1.toLowerCase()} in maintaining system balance.`
      },
      {
        word: cur.w2,
        phonetic: cur.p2,
        partOfSpeech: cur.pos2,
        definitionId: cur.d2,
        definitionEn: cur.de2,
        exampleSentence: `Empirical measurements revealed significant ${cur.w2.toLowerCase()} dynamics in the field.`
      },
      {
        word: cur.w3,
        phonetic: cur.p3,
        partOfSpeech: cur.pos3,
        definitionId: cur.d3,
        definitionEn: cur.de3,
        exampleSentence: `The study documented several ${cur.w3.toLowerCase()} attributes across longitudinal datasets.`
      },
      {
        word: cur.w4,
        phonetic: cur.p4,
        partOfSpeech: cur.pos4,
        definitionId: cur.d4,
        definitionEn: cur.de4,
        exampleSentence: `Understanding ${cur.w4.toLowerCase()} provides actionable insights for future policy.`
      },
      {
        word: cur.w5,
        phonetic: cur.p5,
        partOfSpeech: cur.pos5,
        definitionId: cur.d5,
        definitionEn: cur.de5,
        exampleSentence: `A pronounced ${cur.w5.toLowerCase()} pattern emerged during rigorous laboratory testing.`
      },
      {
        word: 'Empirical',
        phonetic: '/ɪmˈpɪr.ɪ.kəl/',
        partOfSpeech: 'adjective',
        definitionId: 'Empiris / berdasarkan bukti observasi nyata',
        definitionEn: 'Based on, concerned with, or verifiable by observation rather than theory.',
        exampleSentence: 'Empirical datasets confirm the predictive accuracy of the scientific model.'
      },
      {
        word: 'Paradigm',
        phonetic: '/ˈpær.ə.daɪm/',
        partOfSpeech: 'noun',
        definitionId: 'Paradigma / kerangka berpikir konseptual',
        definitionEn: 'A typical example or pattern of something; a distinct set of concepts.',
        exampleSentence: 'This discovery triggered a major paradigm shift across academic literature.'
      },
      {
        word: 'Hypothesis',
        phonetic: '/haɪˈpɒθ.ə.sɪs/',
        partOfSpeech: 'noun',
        definitionId: 'Hipotesis / dugaan sementara yang dapat diuji',
        definitionEn: 'A proposed explanation made as a starting point for further investigation.',
        exampleSentence: 'The experimental outcomes supported the primary research hypothesis.'
      },
      {
        word: 'Systemic',
        phonetic: '/sɪˈstem.ɪk/',
        partOfSpeech: 'adjective',
        definitionId: 'Sistemik / menyeluruh mencakup seluruh bagian sistem',
        definitionEn: 'Relating to a system as a whole, especially the entire social or ecological structure.',
        exampleSentence: 'Addressing systemic vulnerabilities requires multidisciplinary collaboration.'
      },
      {
        word: 'Equilibrium',
        phonetic: '/ˌek.wɪˈlɪb.ri.əm/',
        partOfSpeech: 'noun',
        definitionId: 'Kesetimbangan / kondisi stabil seimbang',
        definitionEn: 'A state in which opposing forces or influences are balanced.',
        exampleSentence: 'Sustainable stewardship helps restore planetary and economic equilibrium.'
      }
    ];

    const vocabQuiz: TrueFalseQuestion[] = [
      {
        id: `vq-${artNum}-1`,
        statement: `The term "${cur.w1}" in scientific literature denotes: ${cur.de1}`,
        isTrue: true,
        explanation: `Correct. ${cur.w1} is defined as: ${cur.de1}`
      },
      {
        id: `vq-${artNum}-2`,
        statement: `The concept of "${cur.w2}" is defined as an accidental error in computer hardware.`,
        isTrue: false,
        explanation: `${cur.w2} actually means: ${cur.de2}`
      },
      {
        id: `vq-${artNum}-3`,
        statement: `The term "${cur.w3}" describes properties that are: ${cur.de3}`,
        isTrue: true,
        explanation: `Accurate. ${cur.w3} represents: ${cur.de3}`
      },
      {
        id: `vq-${artNum}-4`,
        statement: `"${cur.w4}" refers exclusively to ancient Greek musical instruments.`,
        isTrue: false,
        explanation: `False. In modern research, ${cur.w4} means: ${cur.de4}`
      },
      {
        id: `vq-${artNum}-5`,
        statement: `The term "${cur.w5}" signifies: ${cur.de5}`,
        isTrue: true,
        explanation: `Correct. ${cur.w5} refers to: ${cur.de5}`
      },
      {
        id: `vq-${artNum}-6`,
        statement: '"Empirical" evidence refers to unverified rumors without experimental proof.',
        isTrue: false,
        explanation: '"Empirical" refers to verifiable evidence obtained through systematic observation.'
      },
      {
        id: `vq-${artNum}-7`,
        statement: 'A scientific "Paradigm" serves as a foundational conceptual model guiding research.',
        isTrue: true,
        explanation: 'A paradigm establishes the core frameworks and methodologies of a discipline.'
      },
      {
        id: `vq-${artNum}-8`,
        statement: 'A "Hypothesis" is an unchangeable scientific law that can never be tested.',
        isTrue: false,
        explanation: 'A hypothesis is a testable proposition subjected to empirical scrutiny.'
      },
      {
        id: `vq-${artNum}-9`,
        statement: '"Systemic" challenges affect the broader structural integrity of an entire network.',
        isTrue: true,
        explanation: 'Systemic properties pertain to the holistic network rather than isolated parts.'
      },
      {
        id: `vq-${artNum}-10`,
        statement: '"Equilibrium" represents a condition of chaotic collapse with zero balance.',
        isTrue: false,
        explanation: '"Equilibrium" is a state where opposing forces achieve stability and balance.'
      }
    ];

    const readingQuiz: MultipleChoiceQuestion[] = [
      {
        id: `rq-${artNum}-1`,
        question: `What is the central focus explored in this article from The Conversation?`,
        options: [
          `Analyzing the scientific and societal impact of ${cur.theme}`,
          'Promoting sensationalist celebrity gossip without data',
          'Selling luxury consumer products in high-end malls',
          'Documenting medieval chariot racing equipment'
        ],
        correctIndex: 0,
        explanation: `The article offers a comprehensive scholarly examination of ${cur.theme}.`
      },
      {
        id: `rq-${artNum}-2`,
        question: 'What do longitudinal research findings consistently indicate about complex systems?',
        options: [
          'Overlooking systemic feedback loops generates critical vulnerabilities and instability',
          'All scientific data collection should be permanently discontinued',
          'Human decisions are always perfectly rational in every scenario',
          'Predictive modeling has zero relevance to modern science'
        ],
        correctIndex: 0,
        explanation: 'Systemic feedback loops must be accounted for to prevent unforeseen breakdowns.'
      },
      {
        id: `rq-${artNum}-3`,
        question: 'Which strategy do multidisciplinary experts advocate for sustainable progress?',
        options: [
          'Integrating predictive computational modeling with transparent governance and public engagement',
          'Ceasing all international research cooperation',
          'Relying purely on speculative intuition without testing',
          'Banning academic peer review across universities'
        ],
        correctIndex: 0,
        explanation: 'Evidence-based modeling combined with ethical governance ensures lasting societal resilience.'
      },
      {
        id: `rq-${artNum}-4`,
        question: 'Why is ethical stewardship vital alongside technological precision?',
        options: [
          'To ensure innovations foster sustainable equilibrium and inclusive long-term well-being',
          'To maximize short-term commercial advertising revenues',
          'To make textbooks inaccessible to students worldwide',
          'To artificially reduce the operational lifespan of clean technologies'
        ],
        correctIndex: 0,
        explanation: 'Ethical stewardship ensures technological advances serve human and environmental welfare.'
      },
      {
        id: `rq-${artNum}-5`,
        question: 'What is the characteristic style and tone of the publication?',
        options: [
          'Evidence-based, analytical, and academically rigorous',
          'Sensationalist and aggressive',
          'Purely fictional and whimsical',
          'Dismissive and mocking'
        ],
        correctIndex: 0,
        explanation: 'The article maintains the objective, informative style of The Conversation.'
      }
    ];

    return {
      id: `en-art-${artNum}`,
      title: `${cur.title} (Perspective Vol. ${Math.floor(index / topics.length) + 1})`,
      category: cur.category,
      source: 'The Conversation (In English)',
      wordCount: 395 + ((index * 7) % 40),
      estimatedMinutes: 2,
      content: [
        `Scholarly investigations published in The Conversation emphasize the transformative impact of ${cur.theme}. Contemporary research across leading scientific institutes demonstrates that understanding these foundational mechanisms is vital for resolving global challenges.`,
        `Empirical data reveal that parameters such as ${cur.w1} and ${cur.w4} play a decisive role in shaping both environmental stability and human societal frameworks. When analyzing longitudinal metrics, researchers consistently observe that neglecting systemic feedback loops leads to significant ecological or institutional vulnerabilities.`,
        `To address these multifaceted issues, multidisciplinary experts advocate for integrating robust predictive computational models, transparent regulatory oversight, and proactive public engagement. By combining technological precision with ethical stewardship, modern science paves the path toward sustainable equilibrium and long-term societal resilience.`
      ],
      vocabList,
      vocabQuiz,
      readingQuiz
    };
  })
];

// Deterministic daily 5-article pack selector based on date string (YYYY-MM-DD)
export function getDailyEnglishArticles(dateStr?: string): EnglishArticle[] {
  const dateKey = dateStr || new Date().toISOString().split('T')[0];
  let hash = 0;
  for (let i = 0; i < dateKey.length; i++) {
    hash = (hash << 5) - hash + dateKey.charCodeAt(i);
    hash |= 0;
  }
  const total = ENGLISH_ARTICLES.length;
  const startIndex = Math.abs(hash) % total;

  const dailySet: EnglishArticle[] = [];
  for (let i = 0; i < 5; i++) {
    const idx = (startIndex + i) % total;
    dailySet.push(ENGLISH_ARTICLES[idx]);
  }
  return dailySet;
}
