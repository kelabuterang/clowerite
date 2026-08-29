import { EnglishArticle } from '../types';

export const ENGLISH_ARTICLES: EnglishArticle[] = [
  {
    id: 'en-art-1',
    title: 'The Urban Forest Revolution: How Cities Are Combating Extreme Heat',
    category: 'Environment & Climate Tech',
    source: 'The Conversation (In English)',
    wordCount: 395,
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
        definitionEn: 'Not allowing fluid to pass through; incapable of being penetrated.',
        exampleSentence: 'Asphalt is an impervious surface that prevents rainwater from soaking into the ground.'
      },
      {
        word: 'Mitigate',
        phonetic: '/ˈmɪt.ɪ.ɡeɪt/',
        partOfSpeech: 'verb',
        definitionId: 'Meringankan / meredakan / mengurangi keparahan',
        definitionEn: 'To make something less severe, harmful, or painful.',
        exampleSentence: 'Planting more trees helps mitigate the extreme summer heat in dense cities.'
      },
      {
        word: 'Evapotranspiration',
        phonetic: '/ɪˌvæp.oʊ.træn.spəˈreɪ.ʃən/',
        partOfSpeech: 'noun',
        definitionId: 'Proses gabungan evaporasi air tanah dan transpirasi tanaman',
        definitionEn: 'The combined process of water evaporation from soil and transpiration from plants.',
        exampleSentence: 'Evapotranspiration cools the surrounding air by releasing moisture through tree leaves.'
      },
      {
        word: 'Indigenous',
        phonetic: '/ɪnˈdɪdʒ.ə.nəs/',
        partOfSpeech: 'adjective',
        definitionId: 'Berasal dari daerah asli / pribumi / lokal',
        definitionEn: 'Originating or occurring naturally in a particular place; native.',
        exampleSentence: 'The Miyawaki method recommends planting indigenous trees adapted to the local climate.'
      },
      {
        word: 'Sequester',
        phonetic: '/sɪˈkwes.tər/',
        partOfSpeech: 'verb',
        definitionId: 'Mengikat / mengisolasi / menyerap (misal menyerap karbon)',
        definitionEn: 'To isolate or capture and store a substance securely.',
        exampleSentence: 'Lush forests sequester significant amounts of atmospheric carbon dioxide.'
      },
      {
        word: 'Infiltration',
        phonetic: '/ˌɪn.fɪlˈtreɪ.ʃən/',
        partOfSpeech: 'noun',
        definitionId: 'Peresapan air ke dalam pori-pori tanah',
        definitionEn: 'The process by which water on the ground surface enters the soil.',
        exampleSentence: 'Permeable soil increases water infiltration and prevents flash flooding.'
      },
      {
        word: 'Foliage',
        phonetic: '/ˈfoʊ.li.ɪdʒ/',
        partOfSpeech: 'noun',
        definitionId: 'Dedaunan tanaman yang lebat',
        definitionEn: 'Plant leaves, collectively; the mass of leaves on a plant or tree.',
        exampleSentence: 'The dense foliage provided cool shade for pedestrians walking along the boulevard.'
      },
      {
        word: 'Canopy',
        phonetic: '/ˈkæn.ə.pi/',
        partOfSpeech: 'noun',
        definitionId: 'Tajuk pohon / tudung kanopi hutan',
        definitionEn: 'The high, continuous overhead layer formed by the branches and crowns of trees.',
        exampleSentence: 'The lush forest canopy blocked the harsh afternoon sunlight.'
      },
      {
        word: 'Tactile',
        phonetic: '/ˈtæk.taɪl/',
        partOfSpeech: 'adjective',
        definitionId: 'Terkait dengan indra peraba / sentuhan fisik',
        definitionEn: 'Connected with or perceived through the sense of touch.',
        exampleSentence: 'Tactile interaction with nature, like gardening, reduces stress levels.'
      },
      {
        word: 'Resilience',
        phonetic: '/rɪˈzɪl.jəns/',
        partOfSpeech: 'noun',
        definitionId: 'Ketahanan / daya pulih / keuletan',
        definitionEn: 'The capacity to recover quickly from difficulties; toughness or adaptability.',
        exampleSentence: 'Urban greening enhances the city’s resilience against extreme heatwaves.'
      }
    ],
    vocabQuiz: [
      {
        id: 'vq-1-1',
        statement: 'Arti kata "Impervious" adalah mudah ditembus dan menyerap cairan dengan cepat.',
        isTrue: false,
        explanation: 'Salah. "Impervious" berarti kedap / tidak dapat ditembus oleh air atau zat cair.'
      },
      {
        id: 'vq-1-2',
        statement: 'Arti kata "Mitigate" adalah memperparah dan memperburuk suatu masalah yang ada.',
        isTrue: false,
        explanation: 'Salah. "Mitigate" berarti meredakan, memperkecil, atau meringankan dampak buruk.'
      },
      {
        id: 'vq-1-3',
        statement: 'Kata "Indigenous" merujuk pada spesies tanaman atau makhluk hidup asli dari wilayah lokal setempat.',
        isTrue: true,
        explanation: 'Benar. "Indigenous" berarti tanaman atau satwa endemik/asli tempatan.'
      },
      {
        id: 'vq-1-4',
        statement: '"Evapotranspiration" adalah penggabungan pelepasan uap air dari tanah dan dedaunan tanaman.',
        isTrue: true,
        explanation: 'Benar. Proses ini mendinginkan temperatur lingkungan sekitar secara alami.'
      },
      {
        id: 'vq-1-5',
        statement: 'Kata kerja "Sequester" berarti memancarkan racun ke udara bebas secara serampangan.',
        isTrue: false,
        explanation: 'Salah. "Sequester" berarti mengikat, menyerap, dan mengunci (seperti penyerapan karbon dioksida).'
      },
      {
        id: 'vq-1-6',
        statement: '"Infiltration" berarti proses peresapan air permukaan meresap masuk ke pori-pori tanah.',
        isTrue: true,
        explanation: 'Benar. Infiltrasi adalah peresapan air ke dalam tanah untuk mencegah genangan banjir.'
      },
      {
        id: 'vq-1-7',
        statement: 'Kata "Foliage" memiliki arti kumpulan dedaunan yang rimbun pada pepohonan.',
        isTrue: true,
        explanation: 'Benar. "Foliage" mengacu pada rimbunnya daun-daun tanaman.'
      },
      {
        id: 'vq-1-8',
        statement: '"Canopy" dalam konteks kehutanan adalah lapisan akar bawah tanah yang menyerap pupuk.',
        isTrue: false,
        explanation: 'Salah. "Canopy" adalah tudung/tajuk dedaunan di bagian atas pepohonan.'
      },
      {
        id: 'vq-1-9',
        statement: '"Tactile" berkaitan dengan pengalaman sentuhan fisik melalui indra peraba kulit.',
        isTrue: true,
        explanation: 'Benar. "Tactile" berhubungan langsung dengan sensasi sentuhan atau rabaan.'
      },
      {
        id: 'vq-1-10',
        statement: '"Resilience" adalah kemampuan untuk bertahan, beradaptasi, dan pulih dari masa sulit atau bencana.',
        isTrue: true,
        explanation: 'Benar. "Resilience" berarti ketahanan atau daya lentur memulihkan diri.'
      }
    ],
    readingQuiz: [
      {
        id: 'rq-1-1',
        question: 'What is the primary cause of urban heat islands according to the article?',
        options: [
          'Abundant asphalt, concrete surfaces, and dense traffic absorbing solar heat',
          'Excessive planting of tall native trees in residential areas',
          'Frequent heavy rainstorms flooding municipal drainage systems',
          'Lack of tall skyscrapers blocking cold ocean breezes'
        ],
        correctIndex: 0,
        explanation: 'The passage highlights that impervious asphalt and concrete absorb solar radiation during the day and release heat at night.'
      },
      {
        id: 'rq-1-2',
        question: 'Why is the Miyawaki botanical methodology praised in modern urban planning?',
        options: [
          'It requires trees to be planted hundreds of meters apart',
          'It cultivates native species closely, growing up to 10 times faster and 30 times denser',
          'It replaces all living greenery with artificial shade structures',
          'It only uses imported exotic plants from deserts'
        ],
        correctIndex: 1,
        explanation: 'The text states that Miyawaki micro-forests grow 10 times faster and 30 times denser than traditional plantations.'
      },
      {
        id: 'rq-1-3',
        question: 'How does dense urban foliage contribute to water management during heavy rains?',
        options: [
          'By preventing water from touching the soil completely',
          'By boiling excess water through geothermal heat',
          'By boosting soil infiltration capacity and reducing stormwater runoff',
          'By collecting all rainwater in artificial plastic cisterns'
        ],
        correctIndex: 2,
        explanation: 'Dense vegetation enhances the soil’s capacity to absorb water, diminishing dangerous stormwater runoff.'
      },
      {
        id: 'rq-1-4',
        question: 'What psychological benefits of green spaces are mentioned in the text?',
        options: [
          'Increased heart rate and heightened alertness during exams',
          'Lowering chronic stress markers and boosting cardiovascular health',
          'Complete elimination of the need for medical checkups',
          'Inducing immediate deep sleep within seconds of touch'
        ],
        correctIndex: 1,
        explanation: 'Immersion in nature diminishes chronic stress markers and promotes cardiovascular well-being.'
      },
      {
        id: 'rq-1-5',
        question: 'What is the overarching tone and recommendation of the author regarding urban greening?',
        options: [
          'Urban greening is merely an aesthetic decoration with negligible value',
          'Cities should cut down urban canopies to build wider roads',
          'Integrating green spaces is a vital public health safeguard and climate resilience strategy',
          'Only rural areas should be allowed to have dense botanical forests'
        ],
        correctIndex: 2,
        explanation: 'The concluding sentence emphasizes that green corridors are essential public health safeguards for climate resilience.'
      }
    ]
  },
  {
    id: 'en-art-2',
    title: 'Neuroplasticity: How the Adult Brain Continuously Rewires Itself',
    category: 'Neuroscience & Cognitive Health',
    source: 'The Conversation (In English)',
    wordCount: 388,
    estimatedMinutes: 2,
    content: [
      'For decades, conventional medical doctrine asserted that the adult human brain was an immutable, hardwired computational organ incapable of generating new neural pathways once adolescence ended. However, groundbreaking neuroscience over recent decades has shattered this outdated dogma through the discovery of neuroplasticity.',
      'Neuroplasticity is the profound biological capability of the nervous system to dynamically remodel its architectural connectivity in response to cognitive stimulation, sensory experiences, or rehabilitation following traumatic injury.',
      'At the cellular level, this transformation relies on synaptic plasticity—encapsulated by the famous neuroscientific maxim: neurons that fire together, wire together. When we deliberately practice a novel musical instrument, learn a foreign language, or train mental arithmetic, synapses strengthen via long-term potentiation, while inactive pathways undergo synaptic pruning.',
      'Moreover, research demonstrates that adult neurogenesis—the birth of brand-new functional neurons—continues throughout life inside the subgranular zone of the hippocampus, the central brain nexus responsible for memory consolidation.',
      'To harness this lifelong regenerative power, scientists recommend embracing continuous cognitive challenges, engaging in regular aerobic exercise that elevates Brain-Derived Neurotrophic Factor (BDNF), and prioritizing restorative deep sleep.'
    ],
    vocabList: [
      {
        word: 'Immutable',
        phonetic: '/ɪˈmjuː.tə.bəl/',
        partOfSpeech: 'adjective',
        definitionId: 'Tidak dapat diubah / kekal / kaku',
        definitionEn: 'Unchanging over time or unable to be changed.',
        exampleSentence: 'Old scientific theories wrongly considered the adult brain to be immutable.'
      },
      {
        word: 'Synapse',
        phonetic: '/ˈsaɪ.næps/',
        partOfSpeech: 'noun',
        definitionId: 'Sinapsis / titik sambungan antar sel saraf (neuron)',
        definitionEn: 'A junction between two nerve cells, consisting of a minute gap across which impulses pass.',
        exampleSentence: 'Electrical signals travel across each synapse to transmit thoughts.'
      },
      {
        word: 'Pruning',
        phonetic: '/ˈpruː.nɪŋ/',
        partOfSpeech: 'noun',
        definitionId: 'Pemangkasan / pembersihan jalur saraf yang tidak aktif',
        definitionEn: 'The process of removing dead or unnecessary parts (neural pathways).',
        exampleSentence: 'Synaptic pruning eliminates unused neural connections to make the brain more efficient.'
      },
      {
        word: 'Potentiation',
        phonetic: '/pəˌten.ʃiˈeɪ.ʃən/',
        partOfSpeech: 'noun',
        definitionId: 'Penguatan sinyal atau respon sinaptik',
        definitionEn: 'The increase in strength of nerve impulses across synapses.',
        exampleSentence: 'Long-term potentiation is the biological mechanism underlying memory formation.'
      },
      {
        word: 'Neurogenesis',
        phonetic: '/ˌnjʊə.rəʊˈdʒen.ə.sɪs/',
        partOfSpeech: 'noun',
        definitionId: 'Proses pembentukan dan kelahiran sel saraf baru',
        definitionEn: 'The growth and development of new nervous tissue and neurons.',
        exampleSentence: 'Physical exercise stimulates neurogenesis in the hippocampus.'
      },
      {
        word: 'Hippocampus',
        phonetic: '/ˌhɪp.əˈkæm.pəs/',
        partOfSpeech: 'noun',
        definitionId: 'Hipokampus / pusat pembentukan memori di otak',
        definitionEn: 'A complex brain structure embedded deep into temporal lobe with a major role in learning and memory.',
        exampleSentence: 'The hippocampus is vital for converting short-term memories into long-term ones.'
      },
      {
        word: 'Regenerative',
        phonetic: '/rɪˈdʒen.ər.ə.tɪv/',
        partOfSpeech: 'adjective',
        definitionId: 'Bersifat memperbaiki diri atau memperbarui jaringan tubuh',
        definitionEn: 'Relating to or having the ability to renew, restore, or regrow.',
        exampleSentence: 'The brain possesses remarkable regenerative capabilities throughout adulthood.'
      },
      {
        word: 'Harness',
        phonetic: '/ˈhɑː.nəs/',
        partOfSpeech: 'verb',
        definitionId: 'Memanfaatkan / mendayagunakan sumber daya secara maksimal',
        definitionEn: 'To control and make use of a natural resource or capability.',
        exampleSentence: 'We can harness mental math practice to sharpen our cognitive faculties.'
      },
      {
        word: 'Restorative',
        phonetic: '/rɪˈstɔː.rə.tɪv/',
        partOfSpeech: 'adjective',
        definitionId: 'Menyegarkan / memulihkan tenaga dan kondisi semula',
        definitionEn: 'Having the ability to restore health, strength, or well-being.',
        exampleSentence: 'Eight hours of restorative sleep allows the brain to consolidate learning.'
      },
      {
        word: 'Groundbreaking',
        phonetic: '/ˈɡraʊndˌbreɪ.kɪŋ/',
        partOfSpeech: 'adjective',
        definitionId: 'Inovatif / memelopori hal baru / mengguncang kebiasaan lama',
        definitionEn: 'Innovative; pioneering; introducing new ideas or methods.',
        exampleSentence: 'Groundbreaking studies proved that adult brain cells can continue to regenerate.'
      }
    ],
    vocabQuiz: [
      {
        id: 'vq-2-1',
        statement: 'Arti kata "Immutable" adalah sesuatu yang sangat lentur dan mudah berubah bentuk setiap detik.',
        isTrue: false,
        explanation: 'Salah. "Immutable" berarti kaku, tetap, atau tidak dapat diubah.'
      },
      {
        id: 'vq-2-2',
        statement: '"Synapse" adalah celah penghubung tempat sinyal listrik dan kimiawi berpindah antar-neuron.',
        isTrue: true,
        explanation: 'Benar. Sinapsis menghubungkan sel-sel saraf di dalam sistem neural.'
      },
      {
        id: 'vq-2-3',
        statement: 'Istilah "Synaptic Pruning" adalah pembelahan sel otak menjadi dua kali lipat dalam hitungan detik.',
        isTrue: false,
        explanation: 'Salah. "Pruning" adalah pemangkasan jalur saraf yang jarang digunakan agar sirkuit otak lebih efisien.'
      },
      {
        id: 'vq-2-4',
        statement: '"Neurogenesis" mengacu pada proses biologis pembentukan neuron atau sel saraf baru.',
        isTrue: true,
        explanation: 'Benar. Neurogenesis adalah kelahiran dan pertumbuhan sel saraf baru di otak.'
      },
      {
        id: 'vq-2-5',
        statement: '"Hippocampus" adalah struktur otak yang memegang peranan sentral dalam konsolidasi memori dan navigasi spasial.',
        isTrue: true,
        explanation: 'Benar. Hipokampus adalah pusat memori dan proses belajar kognitif.'
      },
      {
        id: 'vq-2-6',
        statement: 'Kata kerja "Harness" memiliki makna menyia-nyiakan atau membuang potensi yang ada.',
        isTrue: false,
        explanation: 'Salah. "Harness" berarti mengendalikan dan memanfaatkan potensi secara maksimal.'
      },
      {
        id: 'vq-2-7',
        statement: 'Sifat "Regenerative" berarti mampu meregenerasi atau menumbuhkan kembali jaringan yang rusak.',
        isTrue: true,
        explanation: 'Benar. Regenerasi adalah kemampuan pemulihan dan perbaikan diri secara biologis.'
      },
      {
        id: 'vq-2-8',
        statement: 'Kata "Restorative" menggambarkan sesuatu yang membawa efek pemulihan kesehatan dan kesegaran.',
        isTrue: true,
        explanation: 'Benar. Restoratif berarti memulihkan kondisi fisik atau psikologis.'
      },
      {
        id: 'vq-2-9',
        statement: '"Potentiation" merujuk pada melemahnya daya hantar listrik pada sirkuit saraf hingga mati total.',
        isTrue: false,
        explanation: 'Salah. "Potentiation" justru merujuk pada penguatan respon transmisi sinyal saraf.'
      },
      {
        id: 'vq-2-10',
        statement: '"Groundbreaking" merujuk pada sebuah penemuan atau karya yang bersifat terobosan besar dan memelopori pemikiran baru.',
        isTrue: true,
        explanation: 'Benar. "Groundbreaking" berarti sangat inovatif dan mendobrak pemahaman konvensional.'
      }
    ],
    readingQuiz: [
      {
        id: 'rq-2-1',
        question: 'What outdated scientific belief was overturned by the discovery of neuroplasticity?',
        options: [
          'That the adult brain is immutable and incapable of forming new neural pathways',
          'That neurons communicate using electrical and chemical signals',
          'That sleep is necessary for human survival and wellbeing',
          'That the human brain consists of different functional lobes'
        ],
        correctIndex: 0,
        explanation: 'The opening paragraph explains that dogma previously asserted the adult brain was fixed and unchangeable after adolescence.'
      },
      {
        id: 'rq-2-2',
        question: 'What famous principle summarizes the mechanics of synaptic plasticity in the brain?',
        options: [
          'Neurons that divide faster, sleep longer',
          'Neurons that fire together, wire together',
          'Old pathways remain active regardless of practice',
          'Brain cells only function during intense physical exertion'
        ],
        correctIndex: 1,
        explanation: 'The text highlights the maxim: "neurons that fire together, wire together".'
      },
      {
        id: 'rq-2-3',
        question: 'In which specific brain region does adult neurogenesis primarily take place?',
        options: [
          'The frontal bone of the forehead',
          'The outer ear canal',
          'The subgranular zone of the hippocampus',
          'The spinal vertebrae column'
        ],
        correctIndex: 2,
        explanation: 'Paragraph 4 specifies that neurogenesis continues throughout adulthood in the hippocampus.'
      },
      {
        id: 'rq-2-4',
        question: 'How does regular aerobic exercise support brain health according to research?',
        options: [
          'By elevating levels of Brain-Derived Neurotrophic Factor (BDNF)',
          'By permanently disabling the hippocampus from making memories',
          'By reducing blood circulation to cerebral tissues',
          'By eliminating the need for restful night sleep'
        ],
        correctIndex: 0,
        explanation: 'Aerobic exercise elevates BDNF, a vital neurotrophic factor that supports neuron growth and plasticity.'
      },
      {
        id: 'rq-2-5',
        question: 'Which of the following activities is NOT recommended for stimulating lifelong neuroplasticity?',
        options: [
          'Learning a new musical instrument or second language',
          'Engaging in challenging mental arithmetic exercises',
          'Passive, repetitive consumption of mindless entertainment without mental effort',
          'Prioritizing consistent restorative sleep cycles'
        ],
        correctIndex: 2,
        explanation: 'Neuroplasticity thrives on novelty, cognitive challenge, and focused mental effort rather than passive inactivity.'
      }
    ]
  },
  {
    id: 'en-art-3',
    title: 'The Quest for Clean Nuclear Fusion: Replicating the Sun on Earth',
    category: 'Energy & Physics',
    source: 'The Conversation (In English)',
    wordCount: 402,
    estimatedMinutes: 2,
    content: [
      'In the urgent global race to eliminate greenhouse gas emissions and replace fossil fuels, nuclear fusion represents the ultimate holy grail of clean baseload energy. Unlike conventional nuclear fission, which generates hazardous long-lived radioactive waste by splitting heavy uranium atoms, fusion harnesses the exact physical process powering our sun.',
      'In a fusion reactor, light atomic isotopes—specifically deuterium and tritium—are compressed under astronomical pressures and heated to temperatures exceeding one hundred million degrees Celsius, creating a hyper-energetic fourth state of matter known as plasma.',
      'Under these extreme kinetic conditions, positively charged atomic nuclei overcome their natural electrostatic repulsion and fuse together into helium, releasing enormous quantities of clean energy in accordance with Einstein’s iconic mass-energy equivalence equation.',
      'The engineering challenge has always been achieving net energy gain, known as Q greater than 1, where the reactor generates more thermal power than the tremendous electrical input required to sustain magnetic confinement.',
      'With magnetic confinement tokamaks utilizing high-temperature superconducting magnets and inertial confinement lasers achieving historic ignition thresholds, commercial fusion power is steadily transitioning from theoretical science fiction into a tangible reality.'
    ],
    vocabList: [
      {
        word: 'Baseload',
        phonetic: '/ˈbeɪs.ləʊd/',
        partOfSpeech: 'noun',
        definitionId: 'Beban dasar / pasokan listrik minimum yang stabil dan terus-menerus',
        definitionEn: 'The permanent minimum load that a power supply system must provide continuously.',
        exampleSentence: 'Clean fusion power could provide steady baseload electricity for large cities.'
      },
      {
        word: 'Fission',
        phonetic: '/ˈfɪʃ.ən/',
        partOfSpeech: 'noun',
        definitionId: 'Fisi nuklir / pembelahan inti atom berat menjadi inti lebih kecil',
        definitionEn: 'The action of dividing or splitting something into two or more parts (atomic nuclei).',
        exampleSentence: 'Traditional nuclear reactors generate power through uranium fission.'
      },
      {
        word: 'Repulsion',
        phonetic: '/rɪˈpʌl.ʃən/',
        partOfSpeech: 'noun',
        definitionId: 'Gaya tolak-menolak antar partikel bermuatan sejenis',
        definitionEn: 'A force under the influence of which objects tend to move away from each other.',
        exampleSentence: 'Extreme temperature is required to overcome the electrostatic repulsion of two positive nuclei.'
      },
      {
        word: 'Plasma',
        phonetic: '/ˈplæz.mə/',
        partOfSpeech: 'noun',
        definitionId: 'Plasma / wujud zat keempat yang terdiri dari gas terionisasi bersuhu tinggi',
        definitionEn: 'An ionized gas consisting of positive ions and free electrons.',
        exampleSentence: 'Stars and fusion reactors are made of superheated swirling plasma.'
      },
      {
        word: 'Confinement',
        phonetic: '/kənˈfaɪn.mənt/',
        partOfSpeech: 'noun',
        definitionId: 'Pengurungan / penahanan plasma agar tidak menyentuh dinding reaktor',
        definitionEn: 'The act of keeping something within limits or boundaries.',
        exampleSentence: 'Magnetic confinement uses powerful magnetic fields to trap hot plasma.'
      },
      {
        word: 'Tokamak',
        phonetic: '/ˈtoʊ.kə.mæk/',
        partOfSpeech: 'noun',
        definitionId: 'Tokamak / reaktor fusi berbentuk donat dengan medan magnetik kuat',
        definitionEn: 'A toroidal chamber in which magnetic fields are used to contain plasma.',
        exampleSentence: 'The experimental tokamak succeeded in maintaining stable fusion reactions.'
      },
      {
        word: 'Superconducting',
        phonetic: '/ˌsuː.pə.kənˈdʌk.tɪŋ/',
        partOfSpeech: 'adjective',
        definitionId: 'Superkonduktor / menghantarkan listrik tanpa hambatan resistansi',
        definitionEn: 'Conducting electricity without resistance at low temperatures.',
        exampleSentence: 'Superconducting magnets generate immense magnetic forces with zero electrical resistance.'
      },
      {
        word: 'Ignition',
        phonetic: '/ɪɡˈnɪʃ.ən/',
        partOfSpeech: 'noun',
        definitionId: 'Titik nyala pengapian mandiri pada reaksi fusi berantai',
        definitionEn: 'The point at which a fusion reaction becomes self-sustaining.',
        exampleSentence: 'Achieving fusion ignition was a historic milestone in physics.'
      },
      {
        word: 'Isotope',
        phonetic: '/ˈaɪ.sə.toʊp/',
        partOfSpeech: 'noun',
        definitionId: 'Isotop / variasi atom dengan jumlah proton sama tetapi neutron berbeda',
        definitionEn: 'Each of two or more forms of the same element containing equal numbers of protons but different neutrons.',
        exampleSentence: 'Deuterium is an isotope of hydrogen with one proton and one neutron.'
      },
      {
        word: 'Tangible',
        phonetic: '/ˈtæn.dʒə.bəl/',
        partOfSpeech: 'adjective',
        definitionId: 'Nyata / dapat dirasakan dan diwujudkan secara konkret',
        definitionEn: 'Perceptible by touch; clear and definite; real.',
        exampleSentence: 'Clean fusion is turning into a tangible solution for the climate crisis.'
      }
    ],
    vocabQuiz: [
      {
        id: 'vq-3-1',
        statement: '"Fission" adalah proses penyatuan dua inti atom ringan menjadi satu inti berat.',
        isTrue: false,
        explanation: 'Salah. Penyatuan inti atom adalah "Fusion", sedangkan "Fission" adalah pembelahan inti berat.'
      },
      {
        id: 'vq-3-2',
        statement: 'Kata "Repulsion" berarti gaya tarik-menarik yang saling mendekatkan dua kutub yang berbeda.',
        isTrue: false,
        explanation: 'Salah. "Repulsion" adalah gaya tolak-menolak antar partikel bermuatan sama.'
      },
      {
        id: 'vq-3-3',
        statement: '"Plasma" diakui dalam fisika modern sebagai wujud zat keempat selain padat, cair, dan gas.',
        isTrue: true,
        explanation: 'Benar. Plasma adalah gas terionisasi berenergi tinggi yang membentuk bintang-bintang.'
      },
      {
        id: 'vq-3-4',
        statement: '"Magnetic Confinement" berfungsi untuk mengurung plasma panas agar tidak melelehkan dinding reaktor.',
        isTrue: true,
        explanation: 'Benar. Medan magnetik menahan plasma mengambang di ruang hampa reaktor.'
      },
      {
        id: 'vq-3-5',
        statement: '"Tokamak" adalah jenis reaktor fusi berbentuk cincin toroida (donat).',
        isTrue: true,
        explanation: 'Benar. Tokamak adalah desain ruang reaktor fusi magnetik yang paling populer.'
      },
      {
        id: 'vq-3-6',
        statement: 'Bahan "Superconducting" memiliki resistansi hambatan listrik yang sangat tinggi sehingga cepat panas.',
        isTrue: false,
        explanation: 'Salah. Bahan superkonduktor menghantarkan listrik dengan hambatan nol (tanpa kehilangan energi panas).'
      },
      {
        id: 'vq-3-7',
        statement: 'Dalam fisika fusi, "Ignition" berarti reaksi fusi menghasilkan panas cukup untuk mempertahankan reaksinya sendiri.',
        isTrue: true,
        explanation: 'Benar. Titik pengapian fusi (ignition) adalah saat reaksi menjadi mandiri tanpa pasokan panas luar.'
      },
      {
        id: 'vq-3-8',
        statement: 'Deuterium dan tritium merupakan contoh "Isotop" dari unsur hidrogen.',
        isTrue: true,
        explanation: 'Benar. Keduanya adalah isotop hidrogen dengan jumlah neutron berbeda.'
      },
      {
        id: 'vq-3-9',
        statement: 'Arti kata "Tangible" adalah sesuatu yang murni berupa khayalan gaib dan mustahil dibuktikan.',
        isTrue: false,
        explanation: 'Salah. "Tangible" bermakna nyata, konkret, dan dapat dibuktikan/disentuh.'
      },
      {
        id: 'vq-3-10',
        statement: '"Baseload" merujuk pada kapasitas listrik dasar yang harus terus mengalir stabil 24 jam sehari.',
        isTrue: true,
        explanation: 'Benar. Beban dasar (baseload) diperlukan untuk menjaga keandalan jaringan listrik kota.'
      }
    ],
    readingQuiz: [
      {
        id: 'rq-3-1',
        question: 'What is the fundamental difference between nuclear fusion and nuclear fission?',
        options: [
          'Fusion splits heavy uranium atoms while fission burns coal directly',
          'Fusion fuses light atomic isotopes without producing long-lived radioactive waste, unlike fission',
          'Fission occurs naturally inside the sun while fusion is only made in laboratories',
          'Fusion requires sub-zero temperatures while fission works in boiling water'
        ],
        correctIndex: 1,
        explanation: 'The first paragraph highlights that fusion joins light isotopes without leaving long-lived hazardous waste.'
      },
      {
        id: 'rq-3-2',
        question: 'Which hydrogen isotopes are heated to extreme temperatures inside fusion reactors?',
        options: [
          'Deuterium and Tritium',
          'Uranium-235 and Plutonium',
          'Carbon-14 and Nitrogen',
          'Oxygen and Helium-3'
        ],
        correctIndex: 0,
        explanation: 'Paragraph 2 specifically identifies deuterium and tritium as the fuel isotopes.'
      },
      {
        id: 'rq-3-3',
        question: 'What temperature must plasma reach inside a magnetic confinement tokamak?',
        options: [
          'Around 100 degrees Celsius',
          'Exceeding 100 million degrees Celsius',
          'Exactly 0 degrees Kelvin',
          '37 degrees Celsius'
        ],
        correctIndex: 1,
        explanation: 'Temperatures must exceed 100 million degrees Celsius to overcome electrostatic nuclear repulsion.'
      },
      {
        id: 'rq-3-4',
        question: 'What does achieving a "Q greater than 1" signify in fusion engineering?',
        options: [
          'The reactor has stopped working permanently',
          'The magnetic field has collapsed entirely',
          'Net energy gain: the reactor generates more thermal power than the electricity consumed',
          'The fuel cost has doubled in price'
        ],
        correctIndex: 2,
        explanation: 'Q > 1 means achieving net energy gain, producing more energy than was inputted.'
      },
      {
        id: 'rq-3-5',
        question: 'Which cutting-edge technology helps generate immense magnetic fields without electrical energy loss?',
        options: [
          'High-temperature superconducting magnets',
          'Traditional wooden pulleys and dynamos',
          'Standard copper telegraph wires',
          'Gasoline-powered combustion generators'
        ],
        correctIndex: 0,
        explanation: 'High-temperature superconducting magnets allow powerful magnetic confinement with zero electrical resistance.'
      }
    ]
  },
  {
    id: 'en-art-4',
    title: 'The Gut-Brain Axis: How Microbiome Health Shapes Mood and Cognition',
    category: 'Biomedical Science & Psychology',
    source: 'The Conversation (In English)',
    wordCount: 391,
    estimatedMinutes: 2,
    content: [
      'The human gastrointestinal tract houses a staggering ecosystem of over one hundred trillion microorganisms, collectively designated as the gut microbiome. While traditionally viewed solely as digestive facilitators, biomedical discoveries have revealed that these microscopic symbionts maintain a bidirectional communications highway with the central nervous system.',
      'This intricate network, termed the gut-brain axis, transmits signals through multiple pathways: the vagus nerve, metabolic by-products, and neuroendocrine signaling molecules. Astoundingly, over ninety percent of the human body’s serotonin—a neurotransmitter fundamental for mood equilibrium and emotional regulation—is synthesized directly within the gut lining.',
      'When intestinal flora becomes disrupted due to chronic psychological stress, ultra-processed dietary habits, or antibiotic overconsumption—a state called dysbiosis—harmful bacterial lipopolysaccharides can permeate the epithelial barrier.',
      'This leakage induces low-grade systemic inflammation that crosses the blood-brain barrier, triggering neuroinflammation implicated in heightened anxiety, brain fog, and depressive symptoms.',
      'Nurturing a diverse microbial community through dietary prebiotic fibers, fermented foods containing live probiotics, and mindful stress reduction represents an empowering, holistic pathway toward optimized cognitive vigor.'
    ],
    vocabList: [
      {
        word: 'Symbiont',
        phonetic: '/ˈsɪm.baɪ.ɒnt/',
        partOfSpeech: 'noun',
        definitionId: 'Organisme yang hidup bersimbiosis saling menguntungkan',
        definitionEn: 'An organism living in symbiosis with another.',
        exampleSentence: 'Beneficial gut bacteria act as essential symbionts for human health.'
      },
      {
        word: 'Bidirectional',
        phonetic: '/ˌbaɪ.daɪˈrek.ʃən.əl/',
        partOfSpeech: 'adjective',
        definitionId: 'Dua arah / terjadi timbal balik antara dua pihak',
        definitionEn: 'Functioning or moving in two opposite directions.',
        exampleSentence: 'The gut and the brain communicate through a bidirectional communication channel.'
      },
      {
        word: 'Vagus',
        phonetic: '/ˈveɪ.ɡəs/',
        partOfSpeech: 'noun',
        definitionId: 'Saraf vagus / saraf kranial utama penghubung organ dalam dan otak',
        definitionEn: 'The tenth cranial nerve that interfaces with parasympathetic control of heart, lungs, and digestive tract.',
        exampleSentence: 'Signals travel rapidly from the stomach to the brain along the vagus nerve.'
      },
      {
        word: 'Serotonin',
        phonetic: '/ˌser.əˈtoʊ.nɪn/',
        partOfSpeech: 'noun',
        definitionId: 'Serotonin / senyawa neurotransmiter pengatur suasana hati dan emosi',
        definitionEn: 'A compound present in blood platelets and serum that constricts blood vessels and acts as a neurotransmitter.',
        exampleSentence: 'A large proportion of our body’s serotonin is manufactured inside the gut.'
      },
      {
        word: 'Equilibrium',
        phonetic: '/ˌiː.kwɪˈlɪb.ri.əm/',
        partOfSpeech: 'noun',
        definitionId: 'Keseimbangan / kestabilan kondisi',
        definitionEn: 'A state in which opposing forces or influences are balanced.',
        exampleSentence: 'Maintaining emotional equilibrium requires good sleep and proper nutrition.'
      },
      {
        word: 'Dysbiosis',
        phonetic: '/ˌdɪs.baɪˈoʊ.sɪs/',
        partOfSpeech: 'noun',
        definitionId: 'Disbiosis / ketidakseimbangan komposisi mikrobiota bakteri di usus',
        definitionEn: 'A microbial imbalance or maladaptation on or inside the body.',
        exampleSentence: 'Eating excessive junk food can lead to intestinal dysbiosis.'
      },
      {
        word: 'Permeate',
        phonetic: '/ˈpɜː.mi.eɪt/',
        partOfSpeech: 'verb',
        definitionId: 'Meresap / menembus melewati lapisan pori-pori',
        definitionEn: 'Spread throughout (something); pervade or pass through pores.',
        exampleSentence: 'Bacterial toxins can permeate a damaged intestinal barrier.'
      },
      {
        word: 'Prebiotic',
        phonetic: '/ˌpriː.baɪˈɒt.ɪk/',
        partOfSpeech: 'noun',
        definitionId: 'Prebiotik / serat makanan yang menjadi nutrisi bagi bakteri baik',
        definitionEn: 'A non-digestible food ingredient that promotes the growth of beneficial microorganisms in the intestines.',
        exampleSentence: 'Garlic and oats are rich sources of dietary prebiotic fiber.'
      },
      {
        word: 'Probiotic',
        phonetic: '/ˌproʊ.baɪˈɒt.ɪk/',
        partOfSpeech: 'noun',
        definitionId: 'Probiotik / mikroorganisme hidup yang bermanfaat bagi kesehatan pencernaan',
        definitionEn: 'A substance or food containing live beneficial bacteria.',
        exampleSentence: 'Yogurt and kimchi are fermented foods loaded with active probiotics.'
      },
      {
        word: 'Vigor',
        phonetic: '/ˈvɪɡ.ər/',
        partOfSpeech: 'noun',
        definitionId: 'Kekuatan fisik dan ketajaman mental / vitalitas',
        definitionEn: 'Physical strength and good health; effort, energy, or enthusiasm.',
        exampleSentence: 'A balanced diet restores cognitive vigor and sustained daily focus.'
      }
    ],
    vocabQuiz: [
      {
        id: 'vq-4-1',
        statement: '"Symbiont" adalah parasit berbahaya yang selalu merusak dan membunuh inangnya secara cepat.',
        isTrue: false,
        explanation: 'Salah. "Symbiont" adalah organisme yang hidup berdampingan secara simbiotik (kebanyakan menguntungkan).'
      },
      {
        id: 'vq-4-2',
        statement: '"Bidirectional" bermakna proses komunikasi yang berlangsung dua arah secara timbal balik.',
        isTrue: true,
        explanation: 'Benar. Komunikasi usus-otak bersifat dua arah saling mempengaruhi.'
      },
      {
        id: 'vq-4-3',
        statement: 'Saraf "Vagus" adalah jalur saraf yang menghubungkan organ pencernaan langsung dengan batang otak.',
        isTrue: true,
        explanation: 'Benar. Saraf vagus adalah jembatan saraf utama antara usus dan otak.'
      },
      {
        id: 'vq-4-4',
        statement: 'Lebih dari 90 persen "Serotonin" dalam tubuh manusia justru diproduksi di lapisan dinding usus.',
        isTrue: true,
        explanation: 'Benar. Sebagian besar hormon pengatur suasana hati diproduksi di saluran pencernaan.'
      },
      {
        id: 'vq-4-5',
        statement: '"Equilibrium" mengacu pada kondisi kekacauan total tanpa adanya keseimbangan.',
        isTrue: false,
        explanation: 'Salah. "Equilibrium" berarti kondisi seimbang dan harmonis.'
      },
      {
        id: 'vq-4-6',
        statement: '"Dysbiosis" adalah kondisi ketidakseimbangan bakteri mikroba di dalam saluran pencernaan.',
        isTrue: true,
        explanation: 'Benar. Disbiosis terjadi saat bakteri berbahaya mendominasi bakteri menguntungkan.'
      },
      {
        id: 'vq-4-7',
        statement: 'Kata kerja "Permeate" berarti menyerap atau menembus melewati pembatas.',
        isTrue: true,
        explanation: 'Benar. "Permeate" berarti merembes atau menembus masuk.'
      },
      {
        id: 'vq-4-8',
        statement: '"Prebiotic" adalah bakteri hidup pemakan zat gizi di dalam lambung.',
        isTrue: false,
        explanation: 'Salah. Prebiotik adalah serat makanan tak tercerna yang menjadi makanan bagi bakteri baik (sedangkan probiotik adalah bakterinya).'
      },
      {
        id: 'vq-4-9',
        statement: 'Makanan fermentasi seperti yogurt, tempe, dan kimchi merupakan sumber "Probiotik" alami.',
        isTrue: true,
        explanation: 'Benar. Makanan fermentasi kaya akan mikroba kultur probiotik hidup.'
      },
      {
        id: 'vq-4-10',
        statement: 'Kata "Vigor" bermakna vitalitas, stamina prima, dan kekuatan energi aktif.',
        isTrue: true,
        explanation: 'Benar. "Vigor" mengindikasikan ketajaman dan kekuatan vital.'
      }
    ],
    readingQuiz: [
      {
        id: 'rq-4-1',
        question: 'What percentage of the body’s serotonin is synthesized within the gut lining according to the passage?',
        options: [
          'Less than 5 percent',
          'Approximately 25 percent',
          'Over 90 percent',
          'Zero percent (only produced in the heart)'
        ],
        correctIndex: 2,
        explanation: 'Paragraph 2 reveals that over 90 percent of the body’s serotonin is produced in the gut lining.'
      },
      {
        id: 'rq-4-2',
        question: 'What is the biological name of the major cranial nerve transmitting signals between gut and brain?',
        options: [
          'The Vagus nerve',
          'The Sciatic nerve',
          'The Optic nerve',
          'The Femoral nerve'
        ],
        correctIndex: 0,
        explanation: 'The vagus nerve is the key neural pathway of the gut-brain axis.'
      },
      {
        id: 'rq-4-3',
        question: 'What factors can trigger gut dysbiosis according to the text?',
        options: [
          'High fiber intake and mountain hiking',
          'Chronic stress, ultra-processed diet, and antibiotic overuse',
          'Drinking pure clean spring water daily',
          'Getting 8 hours of uninterrupted night sleep'
        ],
        correctIndex: 1,
        explanation: 'The article mentions chronic stress, processed foods, and excessive antibiotics as causes of dysbiosis.'
      },
      {
        id: 'rq-4-4',
        question: 'How does gut inflammation lead to cognitive symptoms like brain fog and anxiety?',
        options: [
          'By turning stomach acids into solid crystal blocks',
          'By causing bacterial toxins to cross into circulation and trigger neuroinflammation',
          'By destroying the skull bones directly',
          'By permanently freezing the heart muscles'
        ],
        correctIndex: 1,
        explanation: 'Toxins permeating the gut barrier can provoke low-grade systemic inflammation and neuroinflammation in the brain.'
      },
      {
        id: 'rq-4-5',
        question: 'What dietary practices are recommended to foster a healthy, diverse microbiome?',
        options: [
          'Consuming only artificial sweeteners and sodas',
          'Eating prebiotic fibers and fermented foods containing live probiotics',
          'Skipping all meals for entire weeks',
          'Eliminating all plant foods from the human diet'
        ],
        correctIndex: 1,
        explanation: 'Consuming prebiotic fibers and probiotic fermented foods nurtures beneficial gut flora.'
      }
    ]
  },
  {
    id: 'en-art-5',
    title: 'The Circular Economy: Redesigning Modern Industrial Production',
    category: 'Economics & Sustainability',
    source: 'The Conversation (In English)',
    wordCount: 397,
    estimatedMinutes: 2,
    content: [
      'Since the dawn of the Industrial Revolution, global economic growth has been dictated by an extractive linear paradigm: take, make, and dispose. Raw materials are harvested from pristine natural habitats, converted into consumer goods with intentionally abbreviated lifespans, and discarded into swelling landfills or incinerators.',
      'This relentless throughput model has depleted finite critical minerals, fueled catastrophic biodiversity loss, and produced unmanageable volumes of toxic electronic and plastic waste. In response, economists and systems designers are advocating for a fundamental transition toward a circular economy.',
      'A circular framework is underpinned by three foundational principles: eliminating waste and pollution by design, circulating products and materials at their highest utility value, and actively regenerating natural ecological systems.',
      'Pioneering enterprises are abandoning planned obsolescence in favor of modular product architecture, right-to-repair access, and product-as-a-service business models. Instead of selling physical machinery that customers discard after breakdowns, manufacturers retain ownership, providing ongoing maintenance, refurbishing components, and harvesting parts for closed-loop remanufacturing.',
      'Decoupling economic prosperity from virgin resource extraction is not merely an idealistic ecological vision, but a commercial imperative that ensures long-term supply chain security and resilient profitability.'
    ],
    vocabList: [
      {
        word: 'Extractive',
        phonetic: '/ɪkˈstræk.tɪv/',
        partOfSpeech: 'adjective',
        definitionId: 'Bersifat mengekstraksi atau mengeruk sumber daya alam',
        definitionEn: 'Relating to the withdrawal of natural resources from the earth.',
        exampleSentence: 'The old extractive economy caused widespread environmental damage.'
      },
      {
        word: 'Throughput',
        phonetic: '/ˈθruː.pʊt/',
        partOfSpeech: 'noun',
        definitionId: 'Laju perputaran / kapasitas pemrosesan barang masuk hingga keluar',
        definitionEn: 'The amount of material or items passing through a system or process.',
        exampleSentence: 'High industrial throughput creates massive amounts of industrial waste.'
      },
      {
        word: 'Finite',
        phonetic: '/ˈfaɪ.naɪt/',
        partOfSpeech: 'adjective',
        definitionId: 'Terbatas / ada batas akhirnya (bukan tak terhingga)',
        definitionEn: 'Having limits or bounds; not infinite.',
        exampleSentence: 'Earth possesses a finite supply of rare earth metals.'
      },
      {
        word: 'Obsolescence',
        phonetic: '/ˌɒb.səˈles.əns/',
        partOfSpeech: 'noun',
        definitionId: 'Keusangan / kondisi sudah kuno atau dirancang sengaja cepat rusak',
        definitionEn: 'The process of becoming obsolete or outdated and no longer used.',
        exampleSentence: 'Planned obsolescence forces consumers to buy new phone models every year.'
      },
      {
        word: 'Modular',
        phonetic: '/ˈmɒdʒ.ə.lər/',
        partOfSpeech: 'adjective',
        definitionId: 'Modular / terdiri dari bagian-bagian mandiri yang mudah diganti',
        definitionEn: 'Employing or adapted for use in modular construction or units.',
        exampleSentence: 'Modular laptops allow users to upgrade individual chips without buying a whole new laptop.'
      },
      {
        word: 'Refurbish',
        phonetic: '/ˌriːˈfɜː.bɪʃ/',
        partOfSpeech: 'verb',
        definitionId: 'Memperbarui / merenovasi kembali barang lama agar seperti baru',
        definitionEn: 'Renovate and redecorate (something) to make it usable again.',
        exampleSentence: 'Companies refurbish returned electronics and resell them with full warranties.'
      },
      {
        word: 'Decouple',
        phonetic: '/diːˈkʌp.əl/',
        partOfSpeech: 'verb',
        definitionId: 'Memisahkan ketergantungan antara dua hal yang sebelumnya terkait',
        definitionEn: 'Separate, disengage, or dissociate (something) from something else.',
        exampleSentence: 'We must decouple GDP growth from the destruction of natural resources.'
      },
      {
        word: 'Virgin',
        phonetic: '/ˈvɜː.dʒɪn/',
        partOfSpeech: 'adjective',
        definitionId: 'Bahan baku murni baru dari alam yang belum pernah didaur ulang',
        definitionEn: 'Not yet processed or refined; in its original or natural state.',
        exampleSentence: 'Recycling aluminum saves 95% more energy than extracting virgin bauxite ore.'
      },
      {
        word: 'Imperative',
        phonetic: '/ɪmˈper.ə.tɪv/',
        partOfSpeech: 'noun',
        definitionId: 'Keharusan mutlak / mandat mendesak yang wajib dijalankan',
        definitionEn: 'An essential or urgent thing; a requirement or necessity.',
        exampleSentence: 'Transitioning to clean renewable energy is a moral and economic imperative.'
      },
      {
        word: 'Regenerate',
        phonetic: '/rɪˈdʒen.ə.reɪt/',
        partOfSpeech: 'verb',
        definitionId: 'Meregenerasi / memulihkan ekosistem agar subur kembali',
        definitionEn: 'To revive, reform, or bring new life and vitality to an ecosystem.',
        exampleSentence: 'Regenerative agriculture enriches soil biology and captures carbon.'
      }
    ],
    vocabQuiz: [
      {
        id: 'vq-5-1',
        statement: '"Extractive" merujuk pada industri yang mengeruk bahan baku alami dari perut bumi.',
        isTrue: true,
        explanation: 'Benar. Ekonomi ekstraktif mengeksploitasi mineral, minyak, dan sumber daya alam mentah.'
      },
      {
        id: 'vq-5-2',
        statement: '"Finite" bermakna jumlah yang melimpah tiada batas dan tidak akan pernah habis sampai kiamat.',
        isTrue: false,
        explanation: 'Salah. "Finite" berarti terbatas dan memiliki kuota yang bisa habis.'
      },
      {
        id: 'vq-5-3',
        statement: '"Planned Obsolescence" adalah strategi produsen merancang produk agar sengaja cepat usang atau rusak.',
        isTrue: true,
        explanation: 'Benar. Keusangan terencana mendorong konsumen terus membeli produk baru.'
      },
      {
        id: 'vq-5-4',
        statement: 'Desain "Modular" berarti perangkat dibuat menyatu tanpa baut sehingga mustahil diperbaiki sama sekali.',
        isTrue: false,
        explanation: 'Salah. Desain modular justru membagi produk ke dalam modul terpisah yang gampang dibongkar dan diganti.'
      },
      {
        id: 'vq-5-5',
        statement: 'Kata kerja "Refurbish" berarti merawat, memoles, dan memperbarui barang bekas agar kembali berfungsi optimal.',
        isTrue: true,
        explanation: 'Benar. Rekondisi (refurbishment) memperpanjang masa pakai produk barang jadi.'
      },
      {
        id: 'vq-5-6',
        statement: '"Decouple" bermakna memisahkan korelasi atau ketergantungan antara dua fenomena.',
        isTrue: true,
        explanation: 'Benar. Decoupling memisahkan pertumbuhan ekonomi dari konsumsi material alam mentah.'
      },
      {
        id: 'vq-5-7',
        statement: '"Virgin materials" adalah plastik atau logam daur ulang hasil olahan sampah tempat pembuangan akhir.',
        isTrue: false,
        explanation: 'Salah. "Virgin materials" adalah bahan baku murni baru dari alam yang belum pernah dipakai sebelumnya.'
      },
      {
        id: 'vq-5-8',
        statement: 'Kata "Imperative" menandakan sesuatu yang mendesak, krusial, dan mutlak harus dipenuhi.',
        isTrue: true,
        explanation: 'Benar. "Imperative" adalah keharusan pokok atau kebutuhan yang tidak bisa ditunda.'
      },
      {
        id: 'vq-5-9',
        statement: '"Regenerate" berarti membiarkan alam rusak tanpa ada tindakan pemulihan kesuburan.',
        isTrue: false,
        explanation: 'Salah. "Regenerate" berarti menghidupkan kembali dan memulihkan kondisi alam secara aktif.'
      },
      {
        id: 'vq-5-10',
        statement: 'Prinsip "Throughput" dalam industri mengacu pada arus aliran bahan baku masuk hingga menjadi limbah buangan.',
        isTrue: true,
        explanation: 'Benar. Throughput menggambarkan laju pemrosesan input hingga output material.'
      }
    ],
    readingQuiz: [
      {
        id: 'rq-5-1',
        question: 'What is the characteristic pattern of the traditional linear economy described in the text?',
        options: [
          'Design, compost, and plant',
          'Take, make, and dispose',
          'Borrow, lend, and donate',
          'Refurbish, recycle, and preserve'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 1 identifies the linear paradigm as "take, make, and dispose".'
      },
      {
        id: 'rq-5-2',
        question: 'Which of the following is NOT one of the three foundational principles of a circular economy?',
        options: [
          'Eliminating waste and pollution by design',
          'Maximizing single-use disposable plastic packaging for rapid landfill disposal',
          'Circulating products and materials at their highest utility value',
          'Actively regenerating natural ecological systems'
        ],
        correctIndex: 1,
        explanation: 'The circular economy aims to eliminate single-use waste, not maximize it.'
      },
      {
        id: 'rq-5-3',
        question: 'How do "product-as-a-service" models alter the manufacturer-customer relationship?',
        options: [
          'Customers are forced to burn the machine after 30 days',
          'Manufacturers retain ownership and provide lifetime maintenance and closed-loop remanufacturing',
          'Manufacturers never speak to customers after the initial sale',
          'All machines are built from fragile single-use glass parts'
        ],
        correctIndex: 1,
        explanation: 'Manufacturers keep ownership, incentivizing them to build durable, repairable, and modular products.'
      },
      {
        id: 'rq-5-4',
        question: 'What is meant by "decoupling" economic growth from virgin resource extraction?',
        options: [
          'Achieving high standard of living and profits without increasing raw material mining and destruction',
          'Shutting down all schools and factories in urban centers',
          'Moving all human businesses into outer space colonies',
          'Doubling the extraction of oil and coal each calendar month'
        ],
        correctIndex: 0,
        explanation: 'Decoupling means growing economic well-being while reducing or stabilizing consumption of virgin earth resources.'
      },
      {
        id: 'rq-5-5',
        question: 'Why does the author argue that circular economy is a commercial imperative?',
        options: [
          'Because companies will lose all tax benefits immediately',
          'Because it ensures long-term supply chain security and resilient profitability amidst finite resources',
          'Because it requires zero human workers to operate',
          'Because it is only a theoretical idea that has no practical application'
        ],
        correctIndex: 1,
        explanation: 'The final sentence highlights supply chain security and resilient profits as key business drivers.'
      }
    ]
  },
  {
    id: 'en-art-6',
    title: 'The Architecture of Deep Sleep: Glymphatic Drainage and Memory Consolidation',
    category: 'Neuroscience & Sleep Medicine',
    level: 'Advanced',
    topic: 'Neuroscience & Sleep Medicine',
    source: 'The Conversation (Global Edition)',
    sourceUrl: 'https://theconversation.com/id/in-english',
    wordCount: 412,
    estimatedMinutes: 2,
    vocabList: [
      { id: 'v-6-1', word: 'Glymphatic', definitionIndonesian: 'Sistem pembersihan limbah metabolik di otak yang aktif saat fase tidur nyenyak', pronunciation: '/ɡlɪmˈfæt.ɪk/', phonetic: '/ɡlɪmˈfæt.ɪk/', partOfSpeech: 'noun', definition: 'Metabolic waste clearance system active during slow-wave sleep', exampleSentence: 'The glymphatic system flushes toxic beta-amyloid proteins during slow-wave sleep.' },
      { id: 'v-6-2', word: 'Consolidation', definitionIndonesian: 'Proses penguatan dan pemadatan jejak memori jangka pendek menjadi memori jangka panjang', pronunciation: '/kənˌsɒl.ɪˈdeɪ.ʃən/', phonetic: '/kənˌsɒl.ɪˈdeɪ.ʃən/', partOfSpeech: 'noun', definition: 'The process of strengthening recent memory traces into long-term storage', exampleSentence: 'Synaptic consolidation stabilizes newly learned neural pathways during the night.' },
      { id: 'v-6-3', word: 'Oscillations', definitionIndonesian: 'Gelombang ayunan ritmik aktivitas listrik neuron di otak', pronunciation: '/ˌɒs.ɪˈleɪ.ʃənz/', phonetic: '/ˌɒs.ɪˈleɪ.ʃənz/', partOfSpeech: 'noun', definition: 'Rhythmic electrical brain wave fluctuations across neurons', exampleSentence: 'Delta oscillations coordinate communication between the hippocampus and neocortex.' },
      { id: 'v-6-4', word: 'Interstitial', definitionIndonesian: 'Ruang celah mikroskopis di antara sel-sel jaringan otak', pronunciation: '/ˌɪn.təˈstɪʃ.əl/', phonetic: '/ˌɪn.təˈstɪʃ.əl/', partOfSpeech: 'adjective', definition: 'Relating to microscopic gaps between cells in brain tissues', exampleSentence: 'Interstitial space increases by up to 60 percent while we slumber deeply.' },
      { id: 'v-6-5', word: 'Cerebrospinal', definitionIndonesian: 'Cairan bening pelindung dan pembersih di otak dan sumsum tulang belakang', pronunciation: '/ˌser.ɪ.broʊˈspaɪ.nəl/', phonetic: '/ˌser.ɪ.broʊˈspaɪ.nəl/', partOfSpeech: 'adjective', definition: 'Relating to the brain and spinal cord fluid cleansing system', exampleSentence: 'Cerebrospinal fluid percolates through the brain tissue to remove debris.' },
      { id: 'v-6-6', word: 'Neurodegenerative', definitionIndonesian: 'Kondisi kemunduran atau kerusakan bertahap pada struktur dan fungsi sel saraf otak', pronunciation: '/ˌnjʊə.rəʊ.dɪˈdʒen.ər.ə.tɪv/', phonetic: '/ˌnjʊə.rəʊ.dɪˈdʒen.ər.ə.tɪv/', partOfSpeech: 'adjective', definition: 'Relating to progressive loss of structure or function of neurons', exampleSentence: 'Chronic sleep disruption is a known precursor to neurodegenerative disorders.' },
      { id: 'v-6-7', word: 'Synaptic', definitionIndonesian: 'Berkenaan dengan celah penghubung komunikasi antarsel neuron saraf', pronunciation: '/sɪˈnæp.tɪk/', phonetic: '/sɪˈnæp.tɪk/', partOfSpeech: 'adjective', definition: 'Relating to a synapse or junction between nerve cells', exampleSentence: 'Synaptic pruning recalibrates energy budgets in overburdened neural circuits.' },
      { id: 'v-6-8', word: 'Hippocampus', definitionIndonesian: 'Pusat pengolah dan penyimpan memori episodik sementara di otak bagian dalam', pronunciation: '/ˌhɪp.əˈkæm.pəs/', phonetic: '/ˌhɪp.əˈkæm.pəs/', partOfSpeech: 'noun', definition: 'A major component of the brains of humans that consolidates memory', exampleSentence: 'The hippocampus replays diurnal experiences to transfer insights to the cortex.' },
      { id: 'v-6-9', word: 'Diurnal', definitionIndonesian: 'Berkenaan dengan aktivitas pada waktu siang hari', pronunciation: '/daɪˈɜː.nəl/', phonetic: '/daɪˈɜː.nəl/', partOfSpeech: 'adjective', definition: 'Active or occurring during daytime', exampleSentence: 'Diurnal memory traces are reorganized systematically during nocturnal cycles.' },
      { id: 'v-6-10', word: 'Cognitive', definitionIndonesian: 'Berkaitan dengan proses mental persepsi, penalaran, dan pemahaman otak', pronunciation: '/ˈkɒɡ.nə.tɪv/', phonetic: '/ˈkɒɡ.nə.tɪv/', partOfSpeech: 'adjective', definition: 'Relating to mental processes of understanding, learning, and reasoning', exampleSentence: 'Deep sleep is indispensable for preserving long-term cognitive stamina.' }
    ],
    vocabulary: [
      { id: 'v-6-1', word: 'Glymphatic', definitionIndonesian: 'Sistem pembersihan limbah metabolik di otak yang aktif saat fase tidur nyenyak', pronunciation: '/ɡlɪmˈfæt.ɪk/', exampleSentence: 'The glymphatic system flushes toxic beta-amyloid proteins during slow-wave sleep.' },
      { id: 'v-6-2', word: 'Consolidation', definitionIndonesian: 'Proses penguatan dan pemadatan jejak memori jangka pendek menjadi memori jangka panjang', pronunciation: '/kənˌsɒl.ɪˈdeɪ.ʃən/', exampleSentence: 'Synaptic consolidation stabilizes newly learned neural pathways during the night.' },
      { id: 'v-6-3', word: 'Oscillations', definitionIndonesian: 'Gelombang ayunan ritmik aktivitas listrik neuron di otak', pronunciation: '/ˌɒs.ɪˈleɪ.ʃənz/', exampleSentence: 'Delta oscillations coordinate communication between the hippocampus and neocortex.' },
      { id: 'v-6-4', word: 'Interstitial', definitionIndonesian: 'Ruang celah mikroskopis di antara sel-sel jaringan otak', pronunciation: '/ˌɪn.təˈstɪʃ.əl/', exampleSentence: 'Interstitial space increases by up to 60 percent while we slumber deeply.' },
      { id: 'v-6-5', word: 'Cerebrospinal', definitionIndonesian: 'Cairan bening pelindung dan pembersih di otak dan sumsum tulang belakang', pronunciation: '/ˌser.ɪ.broʊˈspaɪ.nəl/', exampleSentence: 'Cerebrospinal fluid percolates through the brain tissue to remove debris.' },
      { id: 'v-6-6', word: 'Neurodegenerative', definitionIndonesian: 'Kondisi kemunduran atau kerusakan bertahap pada struktur dan fungsi sel saraf otak', pronunciation: '/ˌnjʊə.rəʊ.dɪˈdʒen.ər.ə.tɪv/', exampleSentence: 'Chronic sleep disruption is a known precursor to neurodegenerative disorders.' },
      { id: 'v-6-7', word: 'Synaptic', definitionIndonesian: 'Berkenaan dengan celah penghubung komunikasi antarsel neuron saraf', pronunciation: '/sɪˈnæp.tɪk/', exampleSentence: 'Synaptic pruning recalibrates energy budgets in overburdened neural circuits.' },
      { id: 'v-6-8', word: 'Hippocampus', definitionIndonesian: 'Pusat pengolah dan penyimpan memori episodik sementara di otak bagian dalam', pronunciation: '/ˌhɪp.əˈkæm.pəs/', exampleSentence: 'The hippocampus replays diurnal experiences to transfer insights to the cortex.' },
      { id: 'v-6-9', word: 'Diurnal', definitionIndonesian: 'Berkenaan dengan aktivitas pada waktu siang hari', pronunciation: '/daɪˈɜː.nəl/', exampleSentence: 'Diurnal memory traces are reorganized systematically during nocturnal cycles.' },
      { id: 'v-6-10', word: 'Cognitive', definitionIndonesian: 'Berkaitan dengan proses mental persepsi, penalaran, dan pemahaman otak', pronunciation: '/ˈkɒɡ.nə.tɪv/', exampleSentence: 'Deep sleep is indispensable for preserving long-term cognitive stamina.' }
    ],
    content: [
      'For centuries, sleep was erroneously regarded as a passive physiological shutdown—a quiet metabolic pause in consciousness. Modern neuroimaging and molecular biology have thoroughly dismantled this misconception, revealing that the sleeping brain is engaged in an astonishingly complex, highly coordinated symphony of biological upkeep.',
      'During slow-wave non-REM sleep, the brain initiates a profound mechanical transformation. Glial cells contract slightly, expanding the interstitial space between neurons by up to 60 percent. This dramatic morphological change permits cerebrospinal fluid to surge rhythmically through cerebral tissue, flushing away metabolic waste products that accumulate during waking hours, most notably beta-amyloid and tau proteins associated with Alzheimer’s pathology.',
      'Simultaneously, the nocturnal architecture facilitates synaptic consolidation. Slow delta oscillations sweep across the neocortex, synchronizing with rapid bursts in the hippocampus called sharp-wave ripples. This neural dialogue replays the day’s learning, etching fragile experiential impressions into durable, interconnected semantic networks.',
      'Depriving the brain of slow-wave sleep disrupts both cellular cleansing and cognitive integration, illustrating that restorative rest is not an idle luxury, but the primary prerequisite for lasting neural health.'
    ],
    vocabQuiz: [
      { id: 'vq-6-1', statement: 'Kata "Glymphatic" merujuk pada sistem pembersih limbah metabolik otak saat tidur nyenyak.', isTrue: true, explanation: 'Benar. Sistem glimfatik membuang toksin beta-amiloid saat fase non-REM lambat.' },
      { id: 'vq-6-2', statement: '"Consolidation" dalam neurologi berarti melupakan semua memori baru secara permanen.', isTrue: false, explanation: 'Salah. Consolidation berarti menguatkan dan mengintegrasikan memori ke penyimpanan jangka panjang.' },
      { id: 'vq-6-3', statement: '"Interstitial space" celah antarneuron mengecil hingga nol saat manusia tertidur lelap.', isTrue: false, explanation: 'Salah. Celah intersisial justru membesar hingga 60% untuk mengalirkan cairan pembersih.' },
      { id: 'vq-6-4', statement: '"Cerebrospinal fluid" adalah cairan yang mengalir membersihkan jaringan otak dari protein toksik.', isTrue: true, explanation: 'Benar. Cairan serebrospinal membilas endapan limbah metabolik saraf.' },
      { id: 'vq-6-5', statement: '"Diurnal" adalah istilah yang merujuk pada aktivitas yang terjadi di malam hari yang gelap.', isTrue: false, explanation: 'Salah. Diurnal berkenaan dengan siang hari, sedangkan malam hari disebut nokturnal.' },
      { id: 'vq-6-6', statement: '"Hippocampus" berperan penting dalam memutar ulang memori sebelum dipindahkan ke korteks.', isTrue: true, explanation: 'Benar. Hipokampus memfasilitasi replikasi dan transfer jejak memori baru.' },
      { id: 'vq-6-7', statement: '"Oscillations" adalah gelombang fluktuasi kelistrikan neuron yang terkoordinasi.', isTrue: true, explanation: 'Benar. Osilasi delta mengoordinasikan sinkronisasi antardaerah otak.' },
      { id: 'vq-6-8', statement: '"Neurodegenerative" berarti perbaikan jaringan saraf menjadi sepuluh kali lebih muda.', isTrue: false, explanation: 'Salah. Neurodegeneratif berarti penyakit kemunduran fungsi dan kerusakan jaringan saraf.' },
      { id: 'vq-6-9', statement: '"Synaptic" berkaitan dengan sambungan komunikasi elektrokimia antarneuron.', isTrue: true, explanation: 'Benar. Sinapsis adalah celah persambungan tempat neurotransmiter berinteraksi.' },
      { id: 'vq-6-10', statement: '"Cognitive" berhubungan dengan kemampuan intelegensi, penalaran, dan pemrosesan pikiran.', isTrue: true, explanation: 'Benar. Kognitif merujuk pada seluruh fungsi olah pikir dan persepsi mental.' }
    ],
    readingQuiz: [
      {
        id: 'rq-6-1',
        question: 'What historical view of sleep has modern neuroimaging completely debunked?',
        options: [
          'The idea that sleep is an active period of physical fitness training',
          'The belief that sleep is a passive, inactive shutdown of the brain',
          'The concept that sleep only occurs during winter months',
          'The notion that humans do not require any oxygen during sleep'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 1 explains that sleep was erroneously viewed as a passive physiological shutdown.'
      },
      {
        id: 'rq-6-2',
        question: 'By what percentage does the interstitial space between brain cells expand during deep sleep?',
        options: [
          'Around 5 percent',
          'Exactly 25 percent',
          'Up to 60 percent',
          'Over 95 percent'
        ],
        correctIndex: 2,
        explanation: 'Glial cells contract, expanding interstitial space by up to 60 percent to allow fluid cleansing.'
      },
      {
        id: 'rq-6-3',
        question: 'Which toxic proteins are washed away by cerebrospinal fluid during slow-wave sleep?',
        options: [
          'Beta-amyloid and tau proteins',
          'Hemoglobin and keratin',
          'Insulin and glucagon',
          'Chlorophyll and cellulose'
        ],
        correctIndex: 0,
        explanation: 'Beta-amyloid and tau proteins associated with neurodegenerative diseases are flushed away.'
      },
      {
        id: 'rq-6-4',
        question: 'What is the role of hippocampal sharp-wave ripples during slow delta oscillations?',
        options: [
          'To generate intense physical hunger cues',
          'To replay recent diurnal learning and consolidate memories into semantic networks',
          'To accelerate cardiac heart rates to maximum levels',
          'To erase all previous emotional attachments completely'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 3 highlights that ripples replay daytime experiences to cement long-term memory.'
      },
      {
        id: 'rq-6-5',
        question: 'What conclusion does the author draw regarding slow-wave restorative sleep?',
        options: [
          'It is a trivial habit that can be safely skipped on weekdays',
          'It is the primary prerequisite for lasting neural health and cognitive stamina',
          'It should only be done for ten minutes per calendar month',
          'It only benefits infants and has no impact on adult brain function'
        ],
        correctIndex: 1,
        explanation: 'The final sentence states restorative rest is the fundamental prerequisite for brain health.'
      }
    ]
  },
  {
    id: 'en-art-7',
    title: 'Urban Biomimicry: Designing Climate-Resilient Metropolises',
    category: 'Architecture & Sustainable Design',
    level: 'Intermediate',
    topic: 'Architecture & Sustainable Design',
    source: 'The Conversation (Global Edition)',
    sourceUrl: 'https://theconversation.com/id/in-english',
    wordCount: 395,
    estimatedMinutes: 2,
    vocabList: [
      { id: 'v-7-1', word: 'Biomimicry', definitionIndonesian: 'Pendekatan desain yang meniru struktur, pola, dan mekanisme alam hayati untuk memecahkan masalah rekayasa manusia', pronunciation: '/ˌbaɪ.əʊˈmɪm.ɪ.kri/', phonetic: '/ˌbaɪ.əʊˈmɪm.ɪ.kri/', partOfSpeech: 'noun', definition: 'The design and production of materials and systems modeled on biological entities', exampleSentence: 'Biomimicry enables architects to craft energy-efficient cooling facades.' },
      { id: 'v-7-2', word: 'Resilient', definitionIndonesian: 'Tangguh dan mampu bangkit pulih kembali setelah terkena guncangan atau bencana', pronunciation: '/rɪˈzɪl.jənt/', phonetic: '/rɪˈzɪl.jənt/', partOfSpeech: 'adjective', definition: 'Able to withstand or recover quickly from difficult conditions', exampleSentence: 'Resilient urban water infrastructure withstands flash monsoon floods.' },
      { id: 'v-7-3', word: 'Metropolis', definitionIndonesian: 'Kota metropolitan raksasa yang padat dengan aktivitas industri dan permukiman', pronunciation: '/məˈtrɒp.əl.ɪs/', phonetic: '/məˈtrɒp.əl.ɪs/', partOfSpeech: 'noun', definition: 'A very large and busy city; capital city of a region', exampleSentence: 'A modern metropolis must balance rapid density with ecological harmony.' },
      { id: 'v-7-4', word: 'Passive', definitionIndonesian: 'Bekerja secara alami tanpa membutuhkan konsumsi energi listrik tambahan', pronunciation: '/ˈpæs.ɪv/', phonetic: '/ˈpæs.ɪv/', partOfSpeech: 'adjective', definition: 'Operating without active mechanical power or electrical consumption', exampleSentence: 'Passive thermal ventilation slashes reliance on power-hungry air conditioning.' },
      { id: 'v-7-5', word: 'Permeable', definitionIndonesian: 'Dapat ditembus dan menyerap air hujan ke dalam lapisan tanah di bawahnya', pronunciation: '/ˈpɜː.mi.ə.bəl/', phonetic: '/ˈpɜː.mi.ə.bəl/', partOfSpeech: 'adjective', definition: 'Allowing liquids or gases to pass through it', exampleSentence: 'Permeable pavements prevent catastrophic urban runoff and replenish groundwater.' },
      { id: 'v-7-6', word: 'Ecosystem', definitionIndonesian: 'Sistem tatanan interaksi timbal balik antara makhluk hidup dan lingkungannya', pronunciation: '/ˈiː.kəʊˌsɪs.təm/', phonetic: '/ˈiː.kəʊˌsɪs.təm/', partOfSpeech: 'noun', definition: 'A biological community of interacting organisms and their physical environment', exampleSentence: 'Urban wetlands act as living kidneys for the municipal watershed ecosystem.' },
      { id: 'v-7-7', word: 'Facade', definitionIndonesian: 'Tampilan dinding eksterior depan atau kulit luar dari sebuah bangunan arsitektur', pronunciation: '/fəˈsɑːd/', phonetic: '/fəˈsɑːd/', partOfSpeech: 'noun', definition: 'The principal front of a building that faces outward', exampleSentence: 'The building facade mimics the porous heat-shedding skin of desert succulents.' },
      { id: 'v-7-8', word: 'Retention', definitionIndonesian: 'Kemampuan menampung dan menahan air atau zat tertentu agar tidak langsung meluap', pronunciation: '/rɪˈten.ʃən/', phonetic: '/rɪˈten.ʃən/', partOfSpeech: 'noun', definition: 'The action of absorbing, holding, or continuing to hold a substance', exampleSentence: 'Bioretention swales capture heavy stormwater to nurture native biodiversity.' },
      { id: 'v-7-9', word: 'Microclimate', definitionIndonesian: 'Iklim lokal spesifik di wilayah geografis sempit seperti taman kota atau jalanan', pronunciation: '/ˈmaɪ.krəʊˌklaɪ.mət/', phonetic: '/ˈmaɪ.krəʊˌklaɪ.mət/', partOfSpeech: 'noun', definition: 'The climate of a very small or restricted area, especially when this differs from the surroundings', exampleSentence: 'Canopy coverage cools the local microclimate by up to four degrees Celsius.' },
      { id: 'v-7-10', word: 'Sustainable', definitionIndonesian: 'Berkelanjutan dan mampu menjaga keseimbangan ekologis tanpa mengorbankan masa depan', pronunciation: '/səˈsteɪ.nə.bəl/', phonetic: '/səˈsteɪ.nə.bəl/', partOfSpeech: 'adjective', definition: 'Conserving an ecological balance by avoiding depletion of natural resources', exampleSentence: 'Sustainable urbanization marries high density with restorative circular ecology.' }
    ],
    vocabulary: [
      { id: 'v-7-1', word: 'Biomimicry', definitionIndonesian: 'Pendekatan desain yang meniru struktur, pola, dan mekanisme alam hayati untuk memecahkan masalah rekayasa manusia', pronunciation: '/ˌbaɪ.əʊˈmɪm.ɪ.kri/', exampleSentence: 'Biomimicry enables architects to craft energy-efficient cooling facades.' },
      { id: 'v-7-2', word: 'Resilient', definitionIndonesian: 'Tangguh dan mampu bangkit pulih kembali setelah terkena guncangan atau bencana', pronunciation: '/rɪˈzɪl.jənt/', exampleSentence: 'Resilient urban water infrastructure withstands flash monsoon floods.' },
      { id: 'v-7-3', word: 'Metropolis', definitionIndonesian: 'Kota metropolitan raksasa yang padat dengan aktivitas industri dan permukiman', pronunciation: '/məˈtrɒp.əl.ɪs/', exampleSentence: 'A modern metropolis must balance rapid density with ecological harmony.' },
      { id: 'v-7-4', word: 'Passive', definitionIndonesian: 'Bekerja secara alami tanpa membutuhkan konsumsi energi listrik tambahan', pronunciation: '/ˈpæs.ɪv/', exampleSentence: 'Passive thermal ventilation slashes reliance on power-hungry air conditioning.' },
      { id: 'v-7-5', word: 'Permeable', definitionIndonesian: 'Dapat ditembus dan menyerap air hujan ke dalam lapisan tanah di bawahnya', pronunciation: '/ˈpɜː.mi.ə.bəl/', exampleSentence: 'Permeable pavements prevent catastrophic urban runoff and replenish groundwater.' },
      { id: 'v-7-6', word: 'Ecosystem', definitionIndonesian: 'Sistem tatanan interaksi timbal balik antara makhluk hidup dan lingkungannya', pronunciation: '/ˈiː.kəʊˌsɪs.təm/', exampleSentence: 'Urban wetlands act as living kidneys for the municipal watershed ecosystem.' },
      { id: 'v-7-7', word: 'Facade', definitionIndonesian: 'Tampilan dinding eksterior depan atau kulit luar dari sebuah bangunan arsitektur', pronunciation: '/fəˈsɑːd/', exampleSentence: 'The building facade mimics the porous heat-shedding skin of desert succulents.' },
      { id: 'v-7-8', word: 'Retention', definitionIndonesian: 'Kemampuan menampung dan menahan air atau zat tertentu agar tidak langsung meluap', pronunciation: '/rɪˈten.ʃən/', exampleSentence: 'Bioretention swales capture heavy stormwater to nurture native biodiversity.' },
      { id: 'v-7-9', word: 'Microclimate', definitionIndonesian: 'Iklim lokal spesifik di wilayah geografis sempit seperti taman kota atau jalanan', pronunciation: '/ˈmaɪ.krəʊˌklaɪ.mət/', exampleSentence: 'Canopy coverage cools the local microclimate by up to four degrees Celsius.' },
      { id: 'v-7-10', word: 'Sustainable', definitionIndonesian: 'Berkelanjutan dan mampu menjaga keseimbangan ekologis tanpa mengorbankan masa depan', pronunciation: '/səˈsteɪ.nə.bəl/', exampleSentence: 'Sustainable urbanization marries high density with restorative circular ecology.' }
    ],
    content: [
      'Modern cities generate immense environmental friction. Concrete canyons trap ambient solar radiation, impermeable asphalt surfaces aggravate severe flash floods, and massive mechanical cooling systems strain electrical grids. In response, visionary civil engineers and architects are looking to nature’s 3.8 billion years of evolutionary research and development through urban biomimicry.',
      'One celebrated example is passive ventilation inspired by African termite mounds. Termites construct towering earthen mounds that maintain a perfectly stable internal temperature despite exterior fluctuations ranging from 0°C at night to over 40°C during the day. By engineering complex networks of convection chimneys and subterranean flues, architects can design commercial skyscrapers that circulate fresh air naturally, reducing air-conditioning electricity usage by up to 35 percent.',
      'Similarly, the "sponge city" paradigm emulates the sponge-like retention properties of ancient river deltas and peat swamps. By replacing conventional impermeable concrete with permeable bio-pavements, sunken rain gardens, and vegetated bioswales, urban planners transform flood vulnerabilities into decentralized water reservoirs.',
      'Biomimicry proves that the ultimate template for civil engineering already exists in the living architecture of the natural biosphere.'
    ],
    vocabQuiz: [
      { id: 'vq-7-1', statement: 'Arti "Biomimicry" adalah merancang teknologi dengan meniru strategi dan struktur alami.', isTrue: true, explanation: 'Benar. Biomimikri mengadaptasi kecerdasan desain alam untuk rekayasa manusia.' },
      { id: 'vq-7-2', statement: '"Permeable" berarti bahan kedap udara dan mustahil dilewati oleh tetesan air.', isTrue: false, explanation: 'Salah. Permeable berarti dapat ditembus atau meresapkan zat cair (seperti aspal berpori).' },
      { id: 'vq-7-3', statement: '"Passive ventilation" mengandalkan pendingin bertenaga kompresor listrik watt tinggi.', isTrue: false, explanation: 'Salah. Ventilasi pasif bekerja alami lewat sirkulasi konveksi tanpa mesin pendingin.' },
      { id: 'vq-7-4', statement: '"Facade" merujuk pada dinding bagian luar dari suatu struktur gedung.', isTrue: true, explanation: 'Benar. Fasad adalah kulit eksterior arsitektural bangunan.' },
      { id: 'vq-7-5', statement: '"Resilient" berarti sangat rapuh dan langsung roboh saat terjadi perubahan suhu kecil.', isTrue: false, explanation: 'Salah. Resilient bermakna ulet, tangguh, dan lekas pulih dari tekanan cuaca ekstrem.' },
      { id: 'vq-7-6', statement: '"Microclimate" adalah kondisi cuaca lokal spesifik di area tertentu (seperti rindang pepohonan).', isTrue: true, explanation: 'Benar. Mikroklimat adalah iklim spesifik pada skala kawasan sempit.' },
      { id: 'vq-7-7', statement: '"Retention" berkaitan dengan penahanan dan penampungan air untuk mencegah banjir bandang.', isTrue: true, explanation: 'Benar. Retensi air menampung limpasan air hujan sementara waktu.' },
      { id: 'vq-7-8', statement: '"Metropolis" adalah desa terpencil di pedalaman tanpa akses jalan dan listrik.', isTrue: false, explanation: 'Salah. Metropolis adalah kawasan kota besar metropolitan yang dinamis dan padat.' },
      { id: 'vq-7-9', statement: '"Ecosystem" merujuk pada jalinan hubungan mutualistik organisme dan habitatnya.', isTrue: true, explanation: 'Benar. Ekosistem mencakup komunitas biologis dan lingkungan fisiknya.' },
      { id: 'vq-7-10', statement: '"Sustainable" berorientasi pada pemeliharaan kesinambungan daya dukung bumi jangka panjang.', isTrue: true, explanation: 'Benar. Berkelanjutan menjaga sumber daya alam agar tidak habis dirusak.' }
    ],
    readingQuiz: [
      {
        id: 'rq-7-1',
        question: 'What natural structure inspired the passive thermal cooling of modern sustainable buildings?',
        options: [
          'The honeycomb cells of honeybees',
          'The towering ventilation mounds built by African termites',
          'The spiral shells of ocean mollusks',
          'The web geometry of jumping spiders'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 2 explains how termite mound convective chimneys inspired passive ventilation.'
      },
      {
        id: 'rq-7-2',
        question: 'By how much can termite-inspired convective ventilation slash air-conditioning power consumption?',
        options: [
          'Only 1 to 2 percent',
          'By up to 35 percent',
          'Exactly 100 percent in every building',
          'It actually increases electricity consumption'
        ],
        correctIndex: 1,
        explanation: 'Natural convection flues can reduce air-conditioning energy demand by up to 35 percent.'
      },
      {
        id: 'rq-7-3',
        question: 'What ecological feature does the "sponge city" urban design philosophy emulate?',
        options: [
          'Arid desert sand dunes that repel all moisture',
          'The water retention and filtration capabilities of deltas and peat swamps',
          'Solid granite mountain peaks',
          'Frozen arctic glaciers'
        ],
        correctIndex: 1,
        explanation: 'The sponge city model mimics natural deltas and wetlands to absorb and store rainwater.'
      },
      {
        id: 'rq-7-4',
        question: 'Which engineered solutions help sponge cities turn runoff into decentralized reservoirs?',
        options: [
          'Impermeable plastic wraps around street poles',
          'Permeable bio-pavements, rain gardens, and bioswales',
          'Deep asphalt layers across all public parks',
          'High-speed diesel drainage pumping'
        ],
        correctIndex: 1,
        explanation: 'Permeable pavements, bioswales, and rain gardens capture stormwater locally.'
      },
      {
        id: 'rq-7-5',
        question: 'What core message does the author convey about biomimicry?',
        options: [
          'Human engineers should abandon mathematics and return to ancient huts',
          'The best design blueprints for resilient cities already exist in natural evolutionary systems',
          'Nature is too inefficient to offer any useful insights for urban architects',
          'Skyscrapers will completely disappear in the next five years'
        ],
        correctIndex: 1,
        explanation: 'The conclusion emphasizes that nature provides tested blueprints for civil engineering.'
      }
    ]
  }
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

