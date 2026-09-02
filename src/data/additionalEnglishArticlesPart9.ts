import { EnglishArticle } from '../types';

export const ADDITIONAL_ENGLISH_ARTICLES_PART9: EnglishArticle[] = [
  // ==========================================
  // TOPIC 5: DIGITAL LITERACY (en-art-94 - en-art-101)
  // ==========================================
  {
    id: "en-art-94",
    title: "The Neuroscience of Digital Multitasking: Attention Residue and Context Switching",
    category: "Digital Literacy",
    level: "Advanced",
    source: "Stanford University Memory Laboratory & Dr. Gloria Mark Research",
    sourceUrl: "https://stanford.edu",
    wordCount: 475,
    estimatedMinutes: 3,
    content: [
      "Modern knowledge workers pride themselves on the ability to 'multitask'—simultaneously monitoring team chat channels, drafting strategic memos, and toggling between dozens of browser tabs. However, cognitive neuroscientists emphasize that the human prefrontal cortex is architecturally incapable of processing simultaneous complex cognitive streams in parallel.",
      "What users perceive as simultaneous multitasking is actually rapid, erratic 'task switching'. Each time attention shifts from an analytical spreadsheet to an incoming email notification, a metabolic tax is incurred known as 'attention residue'. Dr. Sophie Leroy's pioneering cognitive studies show that a portion of the executive brain remains fixated on the preceding task, severely reducing working memory capacity.",
      "Furthermore, research by Dr. Gloria Mark at UC Irvine revealed that the average digital worker's attention is interrupted or shifted every 47 seconds. It requires upwards of 23 minutes of focused effort to recover original deep concentration after a single disruption.",
      "Reclaiming cognitive depth necessitates ruthless structural boundaries: batching communication windows, turning off non-essential notifications, and carving out dedicated blocks of uninterrupted 'monotasking' focus."
    ],
    vocabList: [
      {
        word: "Multitask",
        phonetic: "/ˌmʌl.tiˈtɑːsk/",
        partOfSpeech: "verb",
        definitionEn: "Deal with more than one task at the same time.",
        definitionId: "Multitasking; mengerjakan beberapa tugas kognitif secara bersamaan.",
        exampleSentence: "Attempting to multitask during complex coding increases syntax errors."
      },
      {
        word: "Prefrontal",
        phonetic: "/ˌpriːˈfrʌn.təl/",
        partOfSpeech: "adjective",
        definitionEn: "Relating to the anterior part of the frontal lobe of the brain (responsible for executive function).",
        definitionId: "Prefrontal; bagian korteks depan otak pengatur fungsi eksekutif dan fokus.",
        exampleSentence: "The prefrontal cortex regulates decision-making and impulse control."
      },
      {
        word: "Residue",
        phonetic: "/ˈrez.ɪ.dʒuː/",
        partOfSpeech: "noun",
        definitionEn: "A small amount of something that remains after the main part has gone or taken.",
        definitionId: "Residu; sisa perhatian kognitif yang tertinggal saat berganti aktivitas.",
        exampleSentence: "Attention residue from an unanswered email impairs performance on the next task."
      },
      {
        word: "Erratic",
        phonetic: "/ɪˈræt.ɪk/",
        partOfSpeech: "adjective",
        definitionEn: "Not even or regular in pattern or movement; unpredictable.",
        definitionId: "Tak beraturan, tidak menentu, atau berpindah secara serampangan.",
        exampleSentence: "Erratic screen switching exhausts metabolic brain reserves."
      },
      {
        word: "Monotasking",
        phonetic: "/ˈmɒn.əʊˌtɑːsk.ɪŋ/",
        partOfSpeech: "noun",
        definitionEn: "The practice of dedicating one's focus to a single task at a time without distraction.",
        definitionId: "Monotasking; praktik memusatkan perhatian penuh hanya pada satu pekerjaan.",
        exampleSentence: "Monotasking fosters deep flow states and superior analytical output."
      },
      {
        word: "Parallel",
        phonetic: "/ˈpær.ə.lel/",
        partOfSpeech: "adjective",
        definitionEn: "Occurring or existing at the same time; simultaneous.",
        definitionId: "Paralel; berlangsung bersamaan secara simultan pada waktu yang sama.",
        exampleSentence: "The human brain cannot execute two parallel deep thinking tasks."
      },
      {
        word: "Fixated",
        phonetic: "/fɪkˈseɪ.tɪd/",
        partOfSpeech: "adjective",
        definitionEn: "Obsessively focused on or attached to something.",
        definitionId: "Terpaku, terikat erat, atau tertahan fokusnya pada suatu hal.",
        exampleSentence: "The mind remains fixated on an unresolved message while writing a report."
      },
      {
        word: "Disruption",
        phonetic: "/dɪsˈrʌp.ʃən/",
        partOfSpeech: "noun",
        definitionEn: "Interruption or disturbance of a continuous process or activity.",
        definitionId: "Disrupsi; gangguan atau interupsi yang memecah konsentrasi kerja.",
        exampleSentence: "A single phone vibration causes significant cognitive disruption."
      },
      {
        word: "Batching",
        phonetic: "/ˈbætʃ.ɪŋ/",
        partOfSpeech: "noun",
        definitionEn: "Grouping similar tasks together to be processed in a single scheduled block of time.",
        definitionId: "Pengelompokan tugas (batching); pengerjaan tugas sejenis dalam satu waktu.",
        exampleSentence: "Batching email responses to twice daily saves hours of context switching."
      },
      {
        word: "Ruthless",
        phonetic: "/ˈruːθ.ləs/",
        partOfSpeech: "adjective",
        definitionEn: "Having or showing no pity or compassion; strictly uncompromising.",
        definitionId: "Tegas tanpa kompromi; disiplin ketat dalam membatasi distraksi.",
        exampleSentence: "Maintaining deep work requires ruthless defense of your calendar."
      }
    ],
    vocabQuiz: [
      {
        id: "q-vq-94-1",
        statement: "The human brain's 'prefrontal' cortex is capable of running 500 conscious deep thoughts in parallel.",
        isTrue: false,
        explanation: "False. The prefrontal cortex can only focus deeply on a single conscious task at a time."
      },
      {
        id: "q-vq-94-2",
        statement: "Attention 'residue' is cognitive focus left lingering on a previous interrupted task.",
        isTrue: true,
        explanation: "True. Attention residue impairs performance when switching between tasks."
      },
      {
        id: "q-vq-94-3",
        statement: "'Erratic' behavior is completely predictable, calm, and unchanging.",
        isTrue: false,
        explanation: "False. Erratic means irregular, unpredictable, and unsteady."
      },
      {
        id: "q-vq-94-4",
        statement: "'Monotasking' involves concentrating exclusively on one specific objective at a time.",
        isTrue: true,
        explanation: "True. Monotasking is single-task focus without distractions."
      },
      {
        id: "q-vq-94-5",
        statement: "Running processes in 'parallel' means they occur at separate centuries.",
        isTrue: false,
        explanation: "False. Parallel means occurring simultaneously."
      },
      {
        id: "q-vq-94-6",
        statement: "Being 'fixated' on a topic means holding intense, persistent mental focus on it.",
        isTrue: true,
        explanation: "True. Fixated means obsessively focused on something."
      },
      {
        id: "q-vq-94-7",
        statement: "A digital 'disruption' preserves and enhances deep uninterrupted contemplation.",
        isTrue: false,
        explanation: "False. Disruption interrupts and breaks cognitive focus."
      },
      {
        id: "q-vq-94-8",
        statement: "Task 'batching' organizes similar tasks into dedicated time windows.",
        isTrue: true,
        explanation: "True. Batching consolidates related activities to reduce switching costs."
      },
      {
        id: "q-vq-94-9",
        statement: "A 'ruthless' boundary is soft, porous, and easily ignored.",
        isTrue: false,
        explanation: "False. Ruthless means uncompromising and strictly enforced."
      },
      {
        id: "q-vq-94-10",
        statement: "To 'multitask' is to handle multiple assignments simultaneously.",
        isTrue: true,
        explanation: "True. Multitasking attempts concurrent execution of tasks."
      }
    ],
    readingQuiz: [
      {
        id: "q-rq-94-1",
        question: "Why is the human brain architecturally incapable of true simultaneous multitasking for complex work?",
        options: [
          "The prefrontal cortex cannot process parallel deep cognitive streams simultaneously",
          "Human skulls are too small to fit computer memory chips",
          "Eyes can only see in black and white when using keyboards",
          "Oxygen levels drop to zero whenever typing on computers"
        ],
        correctIndex: 0,
        explanation: "The prefrontal cortex cannot process multiple complex cognitive streams in parallel."
      },
      {
        id: "q-rq-94-2",
        question: "What cognitive phenomenon is called 'attention residue'?",
        options: [
          "Physical dust that settles on computer screens",
          "Cognitive capacity remaining stuck on a prior task after switching to a new one",
          "A chemical spilled during battery manufacturing",
          "The number of unread emails in an inbox"
        ],
        correctIndex: 1,
        explanation: "Attention residue occurs when part of the brain remains fixated on a preceding task."
      },
      {
        id: "q-rq-94-3",
        question: "According to Dr. Gloria Mark's research, how often is the average digital worker interrupted?",
        options: [
          "Every 47 seconds",
          "Once every ten days",
          "Every 48 hours",
          "Never during working hours"
        ],
        correctIndex: 0,
        explanation: "Research revealed digital workers shift attention approximately every 47 seconds."
      },
      {
        id: "q-rq-94-4",
        question: "How long does it take on average to recover deep focus following a single disruption?",
        options: [
          "Upwards of 23 minutes",
          "Exactly 2 seconds",
          "Five milliseconds",
          "Zero time at all"
        ],
        correctIndex: 0,
        explanation: "Studies indicate it takes over 23 minutes to regain original deep concentration."
      },
      {
        id: "q-rq-94-5",
        question: "What structural strategies help workers reclaim deep cognitive focus?",
        options: [
          "Batching communication windows, disabling non-essential notifications, and practicing monotasking",
          "Keeping 150 browser tabs open while playing video games during meetings",
          "Drinking 10 liters of sugary soda every morning",
          "Checking notifications every 5 seconds without pausing"
        ],
        correctIndex: 0,
        explanation: "Batching communication, muting notifications, and dedicated monotasking restore deep focus."
      }
    ]
  },
  {
    id: "en-art-95",
    title: "Ephemeral Media and the Culture of Algorithmic Disappearing Content",
    category: "Digital Literacy",
    level: "Intermediate",
    source: "Pew Research Center & Media, Culture & Society",
    sourceUrl: "https://pewresearch.org",
    wordCount: 465,
    estimatedMinutes: 3,
    content: [
      "The architectural design of the early internet was centered on permanence: personal blogs, web forums, and static profile pages preserved digital footprints indefinitely. However, the rise of 'ephemeral media'—typified by 24-hour disappearing stories, temporary messaging, and short-form video feeds—has transformed online communication into a transient stream of fleeting micro-moments.",
      "Ephemeral platforms were originally celebrated as a liberating antidote to the permanent scrutiny of traditional social media. Users felt empowered to share raw, unvarnished snippets of daily life without the anxiety of curating a permanent digital ledger that prospective employers might examine years later.",
      "Yet, media sociologists observe that ephemeral formats have paradoxically heightened compulsive platform checking. By attaching strict expiration timers to content, platforms weaponize the psychological phenomenon of FOMO ('Fear Of Missing Out'), compelling users to continuously refresh algorithmic feeds to avoid missing disappearing updates.",
      "Cultivating digital literacy in an ephemeral media ecosystem requires recognizing how disappearing content mechanics are engineered to maximize session frequency and screen capture time."
    ],
    vocabList: [
      {
        word: "Ephemeral",
        phonetic: "/ɪˈfem.ər.əl/",
        partOfSpeech: "adjective",
        definitionEn: "Lasting for a very short time; fleeting or transitory.",
        definitionId: "Efemer; berlangsung sangat singkat, cepat berlalu, atau bersifat sementara.",
        exampleSentence: "Disappearing 24-hour stories popularized ephemeral digital communication."
      },
      {
        word: "Footprint",
        phonetic: "/ˈfʊt.prɪnt/",
        partOfSpeech: "noun",
        definitionEn: "The permanent record of a person's online activity (digital footprint).",
        definitionId: "Jejak digital; rekaman data abadi aktivitas seseorang di dunia maya.",
        exampleSentence: "Everything posted on public forums contributes to your lifelong digital footprint."
      },
      {
        word: "Transient",
        phonetic: "/ˈtræn.zi.ənt/",
        partOfSpeech: "adjective",
        definitionEn: "Lasting only for a short time; impermanent.",
        definitionId: "Fana, sementara, atau berpindah cepat tanpa menetap lama.",
        exampleSentence: "Social feeds present a transient stream of fleeting video clips."
      },
      {
        word: "Antidote",
        phonetic: "/ˈæn.ti.dəʊt/",
        partOfSpeech: "noun",
        definitionEn: "Something that counteracts an unpleasant feeling or harmful situation.",
        definitionId: "Antidotum; penawar racun atau solusi pereda dampak buruk.",
        exampleSentence: "Casual stories served as an antidote to hyper-curated, staged photo galleries."
      },
      {
        word: "Scrutiny",
        phonetic: "/ˈskruː.tɪ.ni/",
        partOfSpeech: "noun",
        definitionEn: "Critical observation or examination.",
        definitionId: "Pemeriksaan cermat, pengawasan ketat, atau sorotan kritis.",
        exampleSentence: "Public figures face unrelenting online scrutiny from millions of followers."
      },
      {
        word: "Unvarnished",
        phonetic: "/ʌnˈvɑː.nɪʃt/",
        partOfSpeech: "adjective",
        definitionEn: "Plain, direct, or presented without deceptive embellishment.",
        definitionId: "Apa adanya; polos tanpa rekayasa atau polesan kepalsuan.",
        exampleSentence: "Users shared unvarnished glimpses of behind-the-scenes daily struggles."
      },
      {
        word: "Compulsive",
        phonetic: "/kəmˈpʌl.sɪv/",
        partOfSpeech: "adjective",
        definitionEn: "Resulting from or relating to an irresistible urge to act.",
        definitionId: "Kompulsif; dorongan tak tertahankan yang dilakukan berulang-ulang.",
        exampleSentence: "Disappearing timers drive compulsive phone checking throughout the night."
      },
      {
        word: "Weaponize",
        phonetic: "/ˈwep.ə.naɪz/",
        partOfSpeech: "verb",
        definitionEn: "Adapt something for use as a tool of exploitation or coercion.",
        definitionId: "Mempersenjatai; memanfaatkan mekanisme psikologis demi mengeksploitasi atensi.",
        exampleSentence: "App designers weaponize scarcity heuristics to keep users hooked."
      },
      {
        word: "Ecosystem",
        phonetic: "/ˈiː.kəʊˌsɪs.təm/",
        partOfSpeech: "noun",
        definitionEn: "A complex network or interconnected system of digital applications.",
        definitionId: "Ekosistem digital; lingkungan sistem aplikasi dan layanan yang saling terhubung.",
        exampleSentence: "Navigating today's media ecosystem requires critical digital literacy."
      },
      {
        word: "Fleeting",
        phonetic: "/ˈfliː.tɪŋ/",
        partOfSpeech: "adjective",
        definitionEn: "Lasting for a very short time; momentary.",
        definitionId: "Sekilas, sekejap mata, atau lenyap dalam sekejap.",
        exampleSentence: "Fleeting social posts disappear automatically after twenty-four hours."
      }
    ],
    vocabQuiz: [
      {
        id: "q-vq-95-1",
        statement: "'Ephemeral' media remains permanently carved on stone tablets for ten millennia.",
        isTrue: false,
        explanation: "False. Ephemeral means lasting for only a brief, fleeting period."
      },
      {
        id: "q-vq-95-2",
        statement: "A digital 'footprint' represents the trail of data left behind by internet usage.",
        isTrue: true,
        explanation: "True. Digital footprints track user online history."
      },
      {
        id: "q-vq-95-3",
        statement: "'Transient' phenomena are completely permanent and eternal.",
        isTrue: false,
        explanation: "False. Transient means temporary and short-lived."
      },
      {
        id: "q-vq-95-4",
        statement: "An 'antidote' provides a remedy or countermeasure against a harmful condition.",
        isTrue: true,
        explanation: "True. An antidote counteracts adverse effects."
      },
      {
        id: "q-vq-95-5",
        statement: "'Scrutiny' involves careful, intense examination and evaluation.",
        isTrue: true,
        explanation: "True. Scrutiny is critical inspection."
      },
      {
        id: "q-vq-95-6",
        statement: "An 'unvarnished' account is heavily filtered, fabricated, and censored.",
        isTrue: false,
        explanation: "False. Unvarnished means honest, raw, and unadorned."
      },
      {
        id: "q-vq-95-7",
        statement: "'Compulsive' habits are driven by strong, difficult-to-control impulses.",
        isTrue: true,
        explanation: "True. Compulsive actions stem from irresistible urges."
      },
      {
        id: "q-vq-95-8",
        statement: "To 'weaponize' a feature means to utilize it strategically to exploit or influence.",
        isTrue: true,
        explanation: "True. Weaponize means converting an element into an aggressive tool."
      },
      {
        id: "q-vq-95-9",
        statement: "A digital 'ecosystem' consists of isolated devices that never communicate with networks.",
        isTrue: false,
        explanation: "False. An ecosystem is an interconnected digital network."
      },
      {
        id: "q-vq-95-10",
        statement: "A 'fleeting' impression lasts only for a momentary flash of time.",
        isTrue: true,
        explanation: "True. Fleeting means momentary and transitory."
      }
    ],
    readingQuiz: [
      {
        id: "q-rq-95-1",
        question: "How did the early internet differ from today's ephemeral media platforms?",
        options: [
          "The early internet was centered on permanent blogs, forums, and static profile archives",
          "The early internet had no text or images",
          "The early internet deleted every website every five seconds",
          "The early internet was only accessible via television sets"
        ],
        correctIndex: 0,
        explanation: "Early web architecture was designed for permanent blogs, forums, and profiles."
      },
      {
        id: "q-rq-95-2",
        question: "Why were ephemeral stories originally welcomed by social media users?",
        options: [
          "They allowed users to post raw snippets without the anxiety of building a permanent ledger",
          "They paid users $100 for every photograph posted",
          "They made smartphone batteries last forever",
          "They prevented smartphones from connecting to Wi-Fi"
        ],
        correctIndex: 0,
        explanation: "Disappearing stories relieved the anxiety of curating a permanent digital record."
      },
      {
        id: "q-rq-95-3",
        question: "What psychological phenomenon do ephemeral platforms leverage to drive compulsive checking?",
        options: [
          "FOMO ('Fear Of Missing Out')",
          "Severe claustrophobia",
          "Fear of heights (acrophobia)",
          "Aversion to mechanical clocks"
        ],
        correctIndex: 0,
        explanation: "Platforms weaponize FOMO by attaching strict expiration timers to content."
      },
      {
        id: "q-rq-95-4",
        question: "What is the primary business objective of disappearing content mechanics for tech platforms?",
        options: [
          "To permanently delete all servers to save electricity",
          "To maximize session check frequency and total screen capture time",
          "To encourage users to delete their accounts",
          "To provide completely free hardware devices to everyone"
        ],
        correctIndex: 1,
        explanation: "Engineered mechanics aim to maximize user check frequency and screen time."
      },
      {
        id: "q-rq-95-5",
        question: "What does digital literacy require in the context of ephemeral media?",
        options: [
          "Recognizing how disappearing mechanics are engineered to manipulate user engagement",
          "Never using any electronic screens under any circumstances",
          "Printing all social media feeds onto physical paper notebooks",
          "Purchasing five new smartphones every month"
        ],
        correctIndex: 0,
        explanation: "Digital literacy involves understanding how platform mechanics manipulate attention."
      }
    ]
  },
  {
    id: "en-art-96",
    title: "Zero-Trust Cybersecurity Architecture: Verifying Every Digital Identity",
    category: "Digital Literacy",
    level: "Advanced",
    source: "National Institute of Standards and Technology (NIST SP 800-207) & CISA",
    sourceUrl: "https://cisa.gov",
    wordCount: 475,
    estimatedMinutes: 3,
    content: [
      "For decades, enterprise cybersecurity operated on the 'castle-and-moat' paradigm: strong perimeter firewalls defended the external corporate network, while all users and devices inside the internal perimeter were implicitly trusted. However, the rise of remote cloud computing, mobile endpoints, and sophisticated insider threats rendered this perimeter-based model completely obsolete.",
      "In its place, cybersecurity leaders have adopted the 'Zero-Trust Architecture' (ZTA), encapsulated by the foundational maxim: *Never Trust, Always Verify*. In a Zero-Trust environment, no entity—whether an executive laptop inside headquarters or a remote cloud server—is granted default access privileges.",
      "Every single transaction, API request, and database query must undergo continuous, multi-factor authentication, cryptographic endpoint verification, and dynamic contextual risk assessment. Access is strictly constrained by the principle of 'least privilege', granting users only the granular permissions required to execute immediate tasks.",
      "By eliminating implicit trust, Zero-Trust architecture dramatically reduces lateral attack movement, containing compromised credentials before breaches can cascade into catastrophic enterprise-wide failures."
    ],
    vocabList: [
      {
        word: "Paradigm",
        phonetic: "/ˈpær.ə.daɪm/",
        partOfSpeech: "noun",
        definitionEn: "A typical example, pattern, or overarching conceptual model of something.",
        definitionId: "Paradigma; kerangka model berpikir atau sistem konseptual yang mendasar.",
        exampleSentence: "Zero-Trust represents a fundamental paradigm shift in enterprise cybersecurity."
      },
      {
        word: "Implicitly",
        phonetic: "/ɪmˈplɪs.ɪt.li/",
        partOfSpeech: "adverb",
        definitionEn: "In a way that is not directly expressed; tacitly or by default assumption.",
        definitionId: "Secara implisit; diasumsikan otomatis tanpa perlu pembuktian eksplisit.",
        exampleSentence: "Internal devices were historically trusted implicitly inside firewalls."
      },
      {
        word: "Encapsulate",
        phonetic: "/ɪnˈkæp.sjə.leɪt/",
        partOfSpeech: "verb",
        definitionEn: "Express the essential features of something succinctly; summarize.",
        definitionId: "Merangkum; mewakili intisari prinsip utama secara padat dan jelas.",
        exampleSentence: "The phrase 'never trust, always verify' encapsulates Zero-Trust principles."
      },
      {
        word: "Granular",
        phonetic: "/ˈɡræn.jə.lər/",
        partOfSpeech: "adjective",
        definitionEn: "Characterized by a high degree of distinct detail or fine subdivision.",
        definitionId: "Granular; sangat rinci, terperinci, atau diatur hingga tingkat partikel mikro.",
        exampleSentence: "Admins assign granular access permissions to sensitive patient records."
      },
      {
        word: "Lateral",
        phonetic: "/ˈlæt.ər.əl/",
        partOfSpeech: "adjective",
        definitionEn: "Of, at, toward, or from the sides; moving sideways within a network.",
        definitionId: "Lateral; pergerakan menyamping peretas dari satu komputer ke komputer lain di jaringan.",
        exampleSentence: "Micro-segmentation blocks lateral movement by malicious intruders."
      },
      {
        word: "Perimeter",
        phonetic: "/pəˈrɪm.ɪ.tər/",
        partOfSpeech: "noun",
        definitionEn: "The outer boundary or edge of a secure network or facility.",
        definitionId: "Perimeter; batas terluar pertahanan jaringan komputer.",
        exampleSentence: "Cloud workforces blurred the traditional corporate network perimeter."
      },
      {
        word: "Cryptographic",
        phonetic: "/ˌkrɪp.təˈɡræf.ɪk/",
        partOfSpeech: "adjective",
        definitionEn: "Relating to the art of writing or solving codes; data encryption security.",
        definitionId: "Kriptografis; berkaitan dengan enkripsi sandi pengamanan data digital.",
        exampleSentence: "Devices authenticate using cryptographic public-key certificates."
      },
      {
        word: "Endpoint",
        phonetic: "/ˈend.pɔɪnt/",
        partOfSpeech: "noun",
        definitionEn: "A remote computing device that communicates with a network (laptop, smartphone).",
        definitionId: "Endpoint; perangkat pengguna akhir (laptop, ponsel) yang terhubung ke jaringan.",
        exampleSentence: "Endpoint security software scans devices for unauthorized malware."
      },
      {
        word: "Maxim",
        phonetic: "/ˈmæk.sɪm/",
        partOfSpeech: "noun",
        definitionEn: "A short, pithy statement expressing a general truth or rule of conduct.",
        definitionId: "Pepatah atau adagium pedoman dasar yang memuat kebenaran universal.",
        exampleSentence: "'Least privilege' is a guiding maxim of modern cybersecurity."
      },
      {
        word: "Breach",
        phonetic: "/briːtʃ/",
        partOfSpeech: "noun",
        definitionEn: "A security infraction, violation, or unauthorized digital penetration.",
        definitionId: "Pelanggaran keamanan (breach); insiden kebocoran atau pembobolan data.",
        exampleSentence: "The rapid isolation protocol contained the security breach within minutes."
      }
    ],
    vocabQuiz: [
      {
        id: "q-vq-96-1",
        statement: "A 'paradigm' is a foundational conceptual framework or prevailing model.",
        isTrue: true,
        explanation: "True. A paradigm is an established overarching model."
      },
      {
        id: "q-vq-96-2",
        statement: "'Implicitly' trusted access requires rigorous password checks every five seconds.",
        isTrue: false,
        explanation: "False. Implicit trust means trust is automatically assumed without verification."
      },
      {
        id: "q-vq-96-3",
        statement: "To 'encapsulate' a concept means to express its core essence concisely.",
        isTrue: true,
        explanation: "True. Encapsulate means to summarize the essence."
      },
      {
        id: "q-vq-96-4",
        statement: "'Granular' permissions are broad, all-access master keys granted to every intern.",
        isTrue: false,
        explanation: "False. Granular permissions are highly specific and narrowly defined."
      },
      {
        id: "q-vq-96-5",
        statement: "'Lateral' network movement occurs when an attacker pivots sideways across internal systems.",
        isTrue: true,
        explanation: "True. Lateral movement is horizontal traversal inside compromised networks."
      },
      {
        id: "q-vq-96-6",
        statement: "A network 'perimeter' is the outer defensive boundary of an IT infrastructure.",
        isTrue: true,
        explanation: "True. Perimeter defines outer boundaries."
      },
      {
        id: "q-vq-96-7",
        statement: "'Cryptographic' algorithms ensure data remains unencrypted and publicly visible to all.",
        isTrue: false,
        explanation: "False. Cryptography uses mathematical encryption to protect and secure data."
      },
      {
        id: "q-vq-96-8",
        statement: "An 'endpoint' refers to remote client hardware like a laptop, tablet, or smartphone.",
        isTrue: true,
        explanation: "True. Endpoints are networked user devices."
      },
      {
        id: "q-vq-96-9",
        statement: "A 'maxim' is a short, memorable guiding principle.",
        isTrue: true,
        explanation: "True. A maxim is a fundamental guiding rule."
      },
      {
        id: "q-vq-96-10",
        statement: "A security 'breach' is a formal government award for excellence in computer coding.",
        isTrue: false,
        explanation: "False. A breach is an unauthorized intrusion or security compromise."
      }
    ],
    readingQuiz: [
      {
        id: "q-rq-96-1",
        question: "What was the traditional 'castle-and-moat' cybersecurity model?",
        options: [
          "Building strong perimeter firewalls and implicitly trusting all internal users and devices",
          "Flooding computer server rooms with seawater",
          "Employing armed knights with swords to guard mainframe computers",
          "Banning the use of passwords completely"
        ],
        correctIndex: 0,
        explanation: "Castle-and-moat security relied on perimeter firewalls with implicit internal trust."
      },
      {
        id: "q-rq-96-2",
        question: "What core maxim defines the Zero-Trust Architecture (ZTA)?",
        options: [
          "'Never Trust, Always Verify'",
          "'Trust Everyone Without Question'",
          "'Share Passwords on Public Forums'",
          "'Turn Off All Security Software'"
        ],
        correctIndex: 0,
        explanation: "The foundational maxim of Zero-Trust is *Never Trust, Always Verify*."
      },
      {
        id: "q-rq-96-3",
        question: "What does the principle of 'least privilege' require in access control?",
        options: [
          "Giving every user permanent root administrator access to all databases",
          "Granting users only the minimal granular permissions necessary for their immediate task",
          "Requiring all employees to share a single laptop computer",
          "Revoking access to electricity in corporate headquarters"
        ],
        correctIndex: 1,
        explanation: "Least privilege restricts access to the bare minimum permissions necessary for specific tasks."
      },
      {
        id: "q-rq-96-4",
        question: "What primary threat does Zero-Trust help contain inside a compromised network?",
        options: [
          "Lateral attack movement across internal servers",
          "Physical computer monitor overheating",
          "Keyboard mechanical key failure",
          "Internet service provider price changes"
        ],
        correctIndex: 0,
        explanation: "Zero-Trust blocks lateral movement, preventing attackers from traversing internal systems."
      },
      {
        id: "q-rq-96-5",
        question: "Why did cloud computing and remote work make perimeter-only security obsolete?",
        options: [
          "Because corporate assets, endpoints, and workers now operate outside traditional physical firewalls",
          "Because cloud computing uses zero electricity",
          "Because remote workers forgot how to type on keyboards",
          "Because internet cables dissolved across the world"
        ],
        correctIndex: 0,
        explanation: "Remote endpoints and distributed cloud environments dissolved the traditional physical network perimeter."
      }
    ]
  },
  {
    id: "en-art-97",
    title: "The Mechanics of Data Scraping and Intellectual Property in AI Model Training",
    category: "Digital Literacy",
    level: "Advanced",
    source: "Stanford Center for Internet and Society & World Intellectual Property Organization (WIPO)",
    sourceUrl: "https://wipo.int",
    wordCount: 475,
    estimatedMinutes: 3,
    content: [
      "The rapid commercialization of Large Language Models (LLMs) and diffusion image generators is powered by unprecedented volumes of digital training data. To construct datasets numbering in the trillions of tokens, artificial intelligence labs deployed automated web scrapers to ingest vast swathes of the public internet—including copyrighted literature, independent journalism, visual artwork, and code repositories—without explicit creator consent.",
      "This practice has ignited fierce international legal battles over the doctrine of 'Fair Use'. AI developers argue that scraping constitutes transformative machine learning analysis—extracting statistical semantic patterns rather than distributing pirate copies.",
      "Conversely, creative unions, authors, and visual artists contend that scraping constitutes systemic intellectual property infringement. They argue that commercial generative systems directly compete against the very creators whose uncompensated labor made the models possible, threatening creative livelihoods.",
      "Addressing this crisis requires establishing transparent dataset provenance standards, machine-readable consent protocols (such as 'robots.txt' AI opt-outs), and equitable licensing frameworks that compensate human creators for algorithmic ingestion."
    ],
    vocabList: [
      {
        word: "Provenance",
        phonetic: "/ˈprɒv.ən.əns/",
        partOfSpeech: "noun",
        definitionEn: "The place of origin or earliest known history of something.",
        definitionId: "Provenans; asal-usul otentik atau riwayat sumber data/karya seni.",
        exampleSentence: "Auditors verified the ethical provenance of the machine learning training dataset."
      },
      {
        word: "Ingest",
        phonetic: "/ɪnˈdʒest/",
        partOfSpeech: "verb",
        definitionEn: "Take in food or data to be absorbed and processed.",
        definitionId: "Menelan, menyerap, atau memasukkan data mentah ke dalam sistem pemrosesan.",
        exampleSentence: "AI pipelines ingest billions of web pages during initial pre-training."
      },
      {
        word: "Transformative",
        phonetic: "/trænzˈfɔː.mə.tɪv/",
        partOfSpeech: "adjective",
        definitionEn: "Causing a marked change in someone or something (in copyright, adding new expression/meaning).",
        definitionId: "Transformatif; menciptakan nilai baru yang berbeda secara signifikan dari karya asli.",
        exampleSentence: "Fair use defenses often hinge on whether the new use is genuinely transformative."
      },
      {
        word: "Swathe",
        phonetic: "/sweɪð/",
        partOfSpeech: "noun",
        definitionEn: "A broad strip or large area of something.",
        definitionId: "Hamparan luas, porsi masif, atau bentangan area yang lebar.",
        exampleSentence: "Web crawlers scraped vast swathes of open internet discussion forums."
      },
      {
        word: "Infringement",
        phonetic: "/ɪnˈfrɪndʒ.mənt/",
        partOfSpeech: "noun",
        definitionEn: "The action of breaking the terms of a law or agreement; violation of copyright.",
        definitionId: "Pelanggaran hak cipta; penggunaan materi berhak cipta tanpa izin sah.",
        exampleSentence: "Publishers filed a federal lawsuit alleging systematic copyright infringement."
      },
      {
        word: "Doctrine",
        phonetic: "/ˈdɒk.trɪn/",
        partOfSpeech: "noun",
        definitionEn: "A stated principle of government policy or legal theory.",
        definitionId: "Doktrin; asas atau prinsip hukum yang diakui secara yuridis.",
        exampleSentence: "The legal doctrine of fair use balances creator rights with innovation."
      },
      {
        word: "Uncompensated",
        phonetic: "/ʌnˈkɒm.pən.seɪ.tɪd/",
        partOfSpeech: "adjective",
        definitionEn: "Not receiving any payment, compensation, or financial remuneration.",
        definitionId: "Tanpa kompensasi bayaran, ganti rugi, atau royalti finansial.",
        exampleSentence: "Artists objected to the uncompensated scraping of their digital portfolios."
      },
      {
        word: "Machine-readable",
        phonetic: "/məˈʃiːn ˈriː.də.bəl/",
        partOfSpeech: "adjective",
        definitionEn: "In a format that can be processed and understood by a computer.",
        definitionId: "Dapat dibaca mesin; format data yang otomatis dipahami perayap web.",
        exampleSentence: "Webmasters configure machine-readable headers to block AI scraping bots."
      },
      {
        word: "Semantic",
        phonetic: "/sɪˈmæn.tɪk/",
        partOfSpeech: "adjective",
        definitionEn: "Relating to meaning in language or logic.",
        definitionId: "Semantik; berhubungan dengan makna kata, konteks, dan bahasa.",
        exampleSentence: "Neural networks map statistical semantic relationships between words."
      },
      {
        word: "Opt-out",
        phonetic: "/ˈɒpt.aʊt/",
        partOfSpeech: "noun",
        definitionEn: "An instance of choosing not to participate in something.",
        definitionId: "Opsi keluar (opt-out); hak untuk menolak atau mengecualikan diri dari sistem.",
        exampleSentence: "Creators demand a universal opt-out standard for AI training scrapers."
      }
    ],
    vocabQuiz: [
      {
        id: "q-vq-97-1",
        statement: "Dataset 'provenance' refers to the documented origin and lineage of collected data.",
        isTrue: true,
        explanation: "True. Provenance traces the original source and chain of custody."
      },
      {
        id: "q-vq-97-2",
        statement: "To 'ingest' training data means to permanently delete it from hard drives.",
        isTrue: false,
        explanation: "False. Ingest means to absorb, take in, and process data."
      },
      {
        id: "q-vq-97-3",
        statement: "A 'transformative' use adds new utility, meaning, or insight to original material.",
        isTrue: true,
        explanation: "True. Transformative use creates new expressive value."
      },
      {
        id: "q-vq-97-4",
        statement: "A 'swathe' represents a microscopic grain of sand.",
        isTrue: false,
        explanation: "False. A swathe is a broad strip or large expanse."
      },
      {
        id: "q-vq-97-5",
        statement: "Copyright 'infringement' is the authorized and fully licensed use of creative work.",
        isTrue: false,
        explanation: "False. Infringement is unauthorized violation of intellectual property rights."
      },
      {
        id: "q-vq-97-6",
        statement: "A legal 'doctrine' is an established rule or principle of jurisprudence.",
        isTrue: true,
        explanation: "True. A doctrine is an established legal principle."
      },
      {
        id: "q-vq-97-7",
        statement: "'Uncompensated' labor is rewarded with millions of dollars in cash bonuses.",
        isTrue: false,
        explanation: "False. Uncompensated means receiving zero pay or remuneration."
      },
      {
        id: "q-vq-97-8",
        statement: "'Machine-readable' protocols allow automated web crawlers to parse rules cleanly.",
        isTrue: true,
        explanation: "True. Machine-readable formats are interpreted directly by code."
      },
      {
        id: "q-vq-97-9",
        statement: "'Semantic' patterns relate to meaning and conceptual relationships in text.",
        isTrue: true,
        explanation: "True. Semantics deals with meaning in language."
      },
      {
        id: "q-vq-97-10",
        statement: "An 'opt-out' mechanism allows content creators to forbid scraping of their work.",
        isTrue: true,
        explanation: "True. Opt-out allows creators to withhold permission."
      }
    ],
    readingQuiz: [
      {
        id: "q-rq-97-1",
        question: "How did AI development laboratories obtain massive training corpora of trillions of tokens?",
        options: [
          "Deploying automated web scrapers to ingest vast swathes of public internet content",
          "Handwriting every single sentence on paper by hand in a library",
          "Purchasing individual physical encyclopedias from antique stores",
          "Extracting data from radio waves in outer space"
        ],
        correctIndex: 0,
        explanation: "AI developers deployed automated scrapers across the web to gather massive datasets."
      },
      {
        id: "q-rq-97-2",
        question: "What legal doctrine do AI developers cite to justify web scraping without explicit consent?",
        options: [
          "The doctrine of Fair Use",
          "The Law of Maritime Salvage",
          "The Feudal Land Grant Act",
          "The International Postal Treaty"
        ],
        correctIndex: 0,
        explanation: "AI developers argue data scraping falls under the transformative 'Fair Use' doctrine."
      },
      {
        id: "q-rq-97-3",
        question: "What primary argument do authors and visual artists make against uncompensated scraping?",
        options: [
          "That generative AI systems infringe copyright and directly compete against creators using their own labor",
          "That computers emit too much heat in winter",
          "That digital screens make oil paintings fade faster",
          "That books should only be read by candlelight"
        ],
        correctIndex: 0,
        explanation: "Artists argue scraping infringes intellectual property and builds competing commercial products on their unpaid work."
      },
      {
        id: "q-rq-97-4",
        question: "What technical protocol is commonly used on web servers to signal AI scraping opt-outs?",
        options: [
          "The 'robots.txt' configuration standard",
          "An audio Morse code broadcast",
          "A handwritten letter mailed to the capital",
          "A pop-up balloon animation on the home page"
        ],
        correctIndex: 0,
        explanation: "The passage specifically references machine-readable 'robots.txt' AI opt-out protocols."
      },
      {
        id: "q-rq-97-5",
        question: "What solutions are proposed to reconcile AI innovation with creator rights?",
        options: [
          "Dataset provenance standards, machine-readable consent protocols, and equitable licensing frameworks",
          "Banning all computer programming globally",
          "Deleting the entire internet permanently",
          "Requiring all humans to stop writing literature"
        ],
        correctIndex: 0,
        explanation: "Transparent provenance, opt-outs, and equitable licensing frameworks are proposed solutions."
      }
    ]
  },
  {
    id: "en-art-98",
    title: "Phishing Evolution: From Primitive Email Scams to Deepfake Voice Clones",
    category: "Digital Literacy",
    level: "Intermediate",
    source: "Federal Bureau of Investigation (FBI) Cyber Division & Europol EC3",
    sourceUrl: "https://fbi.gov",
    wordCount: 465,
    estimatedMinutes: 3,
    content: [
      "In the early era of consumer internet, phishing scams were clumsy and easily detectable: poorly formatted emails riddled with spelling errors, promising miraculous foreign inheritances from imaginary princes. Today, cybercriminals deploy generative artificial intelligence to execute hyper-personalized, multi-modal social engineering attacks.",
      "Modern threat actors leverage large language models to draft flawless, context-rich spear-phishing correspondence that perfectly mimics a company CEO's writing cadence. Even more insidious is the rise of 'vishing' (voice phishing) utilizing generative voice cloning. With only three seconds of audio sampled from a social media clip, attackers can synthesize an exact clone of a family member or corporate treasurer's voice.",
      "Attackers execute emergency wire transfer requests or password resets by calling victims in real-time, exploiting panic and emotional urgency. Traditional security advice—such as checking for spelling errors—is utterly insufficient against AI-synthesized deception.",
      "Defending against next-generation social engineering requires establishing out-of-band verification protocols (such as pre-shared family passphrases), hardware security keys, and strict multi-person authorization hurdles for all financial transactions."
    ],
    vocabList: [
      {
        word: "Spear-phishing",
        phonetic: "/ˈspɪəˌfɪʃ.ɪŋ/",
        partOfSpeech: "noun",
        definitionEn: "The fraudulent practice of sending emails from a known sender to target specific individuals.",
        definitionId: "Spear-phishing; serangan penipuan digital tertarget yang dirancang khusus untuk korban.",
        exampleSentence: "Executives received convincing spear-phishing emails containing real invoice numbers."
      },
      {
        word: "Insidious",
        phonetic: "/ɪnˈsɪd.i.əs/",
        partOfSpeech: "adjective",
        definitionEn: "Proceeding in a gradual, subtle way, but with harmful and destructive effects.",
        definitionId: "Berbahaya secara terselubung, licik, dan merusak secara perlahan.",
        exampleSentence: "Voice cloning is an insidious threat that deceives even cautious victims."
      },
      {
        word: "Vishing",
        phonetic: "/ˈvɪʃ.ɪŋ/",
        partOfSpeech: "noun",
        definitionEn: "The fraudulent practice of making phone calls to deceive people into revealing personal information.",
        definitionId: "Vishing; penipuan berbasis panggilan telepon untuk mengelabui korban.",
        exampleSentence: "Criminals used vishing to trick a bank manager into authorizing an emergency transfer."
      },
      {
        word: "Cadence",
        phonetic: "/ˈkeɪ.dəns/",
        partOfSpeech: "noun",
        definitionEn: "A modulation or inflection of the voice, or characteristic rhythm of writing.",
        definitionId: "Irama gaya bahasa atau intonasi khas cara berbicara seseorang.",
        exampleSentence: "AI models mimic the executive's writing cadence and customary greetings."
      },
      {
        word: "Out-of-band",
        phonetic: "/ˌaʊt.əvˈbænd/",
        partOfSpeech: "adjective",
        definitionEn: "Using a separate, independent communication channel to verify authenticity.",
        definitionId: "Jalur terpisah (out-of-band); verifikasi melalui kanal komunikasi berbeda demi keamanan.",
        exampleSentence: "Always confirm wire requests via an out-of-band phone call or in-person check."
      },
      {
        word: "Deception",
        phonetic: "/dɪˈsep.ʃən/",
        partOfSpeech: "noun",
        definitionEn: "The act of deceiving or tricking someone by misrepresenting the truth.",
        definitionId: "Tipu muslihat, pengelabuan, atau manipulasi kebenaran.",
        exampleSentence: "Deepfake audio elevates social engineering deception to dangerous heights."
      },
      {
        word: "Riddled",
        phonetic: "/ˈrɪd.əld/",
        partOfSpeech: "adjective",
        definitionEn: "Filled or permeated with something undesirable.",
        definitionId: "Dipenuhi banyak cela, cacat, atau kesalahan.",
        exampleSentence: "Early scam emails were riddled with obvious grammatical mistakes."
      },
      {
        word: "Synthesize",
        phonetic: "/ˈsɪn.θə.saɪz/",
        partOfSpeech: "verb",
        definitionEn: "Produce sound or speech electronically using computer software.",
        definitionId: "Mensintesis; memproduksi tiruan suara manusia secara sintetis menggunakan AI.",
        exampleSentence: "Software can synthesize human vocal timbre from short audio samples."
      },
      {
        word: "Passphrase",
        phonetic: "/ˈpɑːs.freɪz/",
        partOfSpeech: "noun",
        definitionEn: "A sequence of words used like a password for authentication.",
        definitionId: "Frasa sandi; deretan kata rahasia yang disepakati untuk memverifikasi identitas.",
        exampleSentence: "Families establish a secret spoken passphrase to verify emergency calls."
      },
      {
        word: "Hurdle",
        phonetic: "/ˈhɜː.dəl/",
        partOfSpeech: "noun",
        definitionEn: "An obstacle or difficulty that must be overcome.",
        definitionId: "Rintangan keamanan atau tahapan verifikasi berlapis yang wajib dilewati.",
        exampleSentence: "Multi-signatory hurdles prevent single-employee unauthorized wire transfers."
      }
    ],
    vocabQuiz: [
      {
        id: "q-vq-98-1",
        statement: "'Spear-phishing' involves sending mass spam to 10 billion random addresses with zero personalization.",
        isTrue: false,
        explanation: "False. Spear-phishing is highly targeted and personalized for a specific victim."
      },
      {
        id: "q-vq-98-2",
        statement: "An 'insidious' danger operates subtly and destructively from within.",
        isTrue: true,
        explanation: "True. Insidious means gradual, stealthy, and harmful."
      },
      {
        id: "q-vq-98-3",
        statement: "'Vishing' refers exclusively to fishing for salmon in mountain streams.",
        isTrue: false,
        explanation: "False. Vishing is voice phishing conducted via telephone calls."
      },
      {
        id: "q-vq-98-4",
        statement: "An author's writing 'cadence' reflects their unique rhythmic style and linguistic phrasing.",
        isTrue: true,
        explanation: "True. Cadence relates to rhythm and vocal/stylistic flow."
      },
      {
        id: "q-vq-98-5",
        statement: "'Out-of-band' verification uses the exact same compromised channel to verify a message.",
        isTrue: false,
        explanation: "False. Out-of-band uses a separate, independent channel for validation."
      },
      {
        id: "q-vq-98-6",
        statement: "Social engineering 'deception' tricks victims through calculated psychological manipulation.",
        isTrue: true,
        explanation: "True. Deception involves misleading someone purposefully."
      },
      {
        id: "q-vq-98-7",
        statement: "A text 'riddled' with errors contains zero mistakes of any kind.",
        isTrue: false,
        explanation: "False. Riddled means full of undesirable flaws or errors."
      },
      {
        id: "q-vq-98-8",
        statement: "To 'synthesize' a voice means to artificially generate speech using neural algorithms.",
        isTrue: true,
        explanation: "True. Voice synthesis creates artificial human speech."
      },
      {
        id: "q-vq-98-9",
        statement: "A shared family 'passphrase' serves as an agreed verbal secret to foil voice clones.",
        isTrue: true,
        explanation: "True. Pre-arranged passphrases verify caller authenticity."
      },
      {
        id: "q-vq-98-10",
        statement: "A security 'hurdle' facilitates instant, unverified access with zero friction.",
        isTrue: false,
        explanation: "False. A hurdle is a protective checkpoint or obstacle enforcing compliance."
      }
    ],
    readingQuiz: [
      {
        id: "q-rq-98-1",
        question: "How did early internet phishing emails typically look?",
        options: [
          "Clumsy emails riddled with spelling errors promising imaginary foreign fortunes",
          "Flawless biometric holographic transmissions",
          "Encrypted military satellite messages",
          "Pure digital code that couldn't be opened on computers"
        ],
        correctIndex: 0,
        explanation: "Early phishing was clumsy, full of spelling mistakes, and promised fake inheritances."
      },
      {
        id: "q-rq-98-2",
        question: "How much audio sample is needed by modern generative AI models to clone a human voice?",
        options: [
          "As little as three seconds of audio from a social media clip",
          "500 hours of studio recordings inside a soundproof vault",
          "A minimum of twenty years of continuous microphone monitoring",
          "Audio cloning is physically impossible with current technology"
        ],
        correctIndex: 0,
        explanation: "Generative voice models can clone a voice from just three seconds of audio."
      },
      {
        id: "q-rq-98-3",
        question: "What is 'vishing' as described in the article?",
        options: [
          "Voice phishing conducted over telephone calls using synthesized voices or urgency",
          "Virtual fishing simulations in video games",
          "Visual checking of computer monitors for dead pixels",
          "Vegetable gardening in urban rooftop greenhouses"
        ],
        correctIndex: 0,
        explanation: "Vishing is voice phishing conducted via telephone to trick victims."
      },
      {
        id: "q-rq-98-4",
        question: "Why is traditional advice like 'look for spelling errors' no longer effective against modern scams?",
        options: [
          "Because large language models generate flawless, context-rich prose without typos",
          "Because computers no longer allow typing in English",
          "Because email service providers deleted all spellcheckers",
          "Because hackers only write in ancient hieroglyphs"
        ],
        correctIndex: 0,
        explanation: "Generative AI produces grammatically flawless, context-rich spear-phishing messages."
      },
      {
        id: "q-rq-98-5",
        question: "What defensive measure protects families and organizations against deepfake voice cloning attacks?",
        options: [
          "Out-of-band verification, pre-shared verbal passphrases, and multi-person authorization",
          "Never answering any phone calls or checking emails forever",
          "Transferring all bank funds to anonymous overseas accounts immediately",
          "Turning off the home electricity supply permanently"
        ],
        correctIndex: 0,
        explanation: "Out-of-band verification, family passphrases, and multi-person approvals provide resilient defense."
      }
    ]
  },
  {
    id: "en-art-99",
    title: "Dark Patterns in UX Design: The Architecture of Digital Deception",
    category: "Digital Literacy",
    level: "Intermediate",
    source: "Federal Trade Commission (FTC) Staff Report & Princeton University Web Transparency Project",
    sourceUrl: "https://ftc.gov",
    wordCount: 470,
    estimatedMinutes: 3,
    content: [
      "When navigating mobile applications and e-commerce websites, users frequently find themselves accidentally consenting to recurring subscriptions, struggling to locate cancellation buttons, or purchasing unwanted warranty add-ons. These experiences are not accidental interface glitches; they are deliberate behavioral manipulations known as 'Dark Patterns'.",
      "Coined by UX specialist Harry Brignull, dark patterns exploit cognitive vulnerabilities through deceptive interface architecture. Common tactics include 'Roach Motels' (making a subscription effortless to join with a single tap, but requiring a labyrinth of multi-step phone calls to cancel), 'Confirmshaming' (framing the decline button in emotionally manipulative text, such as *'No thanks, I hate saving money'*), and 'Sneak into Basket' (automatically checking auxiliary fees at checkout).",
      "Regulatory bodies—including the FTC and the European Commission—are increasingly prosecuting deceptive design as illegal unfair trade practices under consumer protection statutes.",
      "Empowering consumers requires developing sharp digital literacy to spot manipulative interface cues, while advocating for ethical design standards that respect user autonomy."
    ],
    vocabList: [
      {
        word: "Deceptive",
        phonetic: "/dɪˈsep.tɪv/",
        partOfSpeech: "adjective",
        definitionEn: "Giving an appearance or impression different from the true one; misleading.",
        definitionId: "Menipu, memperdaya, atau menyesatkan pengguna secara sengaja.",
        exampleSentence: "Deceptive website interfaces trick shoppers into paying hidden recurring fees."
      },
      {
        word: "Labyrinth",
        phonetic: "/ˈlæb.ə.rɪnθ/",
        partOfSpeech: "noun",
        definitionEn: "A complicated irregular network of passages or paths in which it is difficult to find one's way.",
        definitionId: "Labirin; susunan alur navigasi rumit yang membingungkan dan menjebak.",
        exampleSentence: "Users must navigate a confusing labyrinth of menu settings to cancel an account."
      },
      {
        word: "Confirmshaming",
        phonetic: "/kənˈfɜːmˌʃeɪ.mɪŋ/",
        partOfSpeech: "noun",
        definitionEn: "The practice of phrasing an opt-out choice to shame the user into compliance.",
        definitionId: "Confirmshaming; taktik membuat pengguna merasa bersalah jika menolak tawaran.",
        exampleSentence: "Popups use confirmshaming by offering the option: 'No, I don't care about health'."
      },
      {
        word: "Auxiliary",
        phonetic: "/ɔːɡˈzɪl.jə.ri/",
        partOfSpeech: "adjective",
        definitionEn: "Providing supplementary or additional help and support; secondary.",
        definitionId: "Tambahan, pelengkap, atau biaya sekunder di luar harga pokok.",
        exampleSentence: "Websites often slip auxiliary service fees into final checkout baskets."
      },
      {
        word: "Prosecute",
        phonetic: "/ˈprɒs.ɪ.kjuːt/",
        partOfSpeech: "verb",
        definitionEn: "Conduct legal proceedings against someone in respect of a criminal charge.",
        definitionId: "Menuntut secara hukum di pengadilan atas pelanggaran regulasi.",
        exampleSentence: "Regulators will prosecute companies that deploy predatory dark patterns."
      },
      {
        word: "Vulnerability",
        phonetic: "/ˌvʌl.nər.əˈbɪl.ə.ti/",
        partOfSpeech: "noun",
        definitionEn: "The quality or state of being exposed to the possibility of being attacked or harmed.",
        definitionId: "Kerentanan psikologis atau celah kelemahan kognitif manusia.",
        exampleSentence: "Dark patterns exploit cognitive vulnerabilities like decision fatigue."
      },
      {
        word: "Glitch",
        phonetic: "/ɡlɪtʃ/",
        partOfSpeech: "noun",
        definitionEn: "A sudden, usually temporary malfunction or fault in equipment or software.",
        definitionId: "Kekeliruan teknis sesaat atau galat malfungsi tak disengaja pada aplikasi.",
        exampleSentence: "The recurring charge was not an accidental glitch, but an intentional pattern."
      },
      {
        word: "Coin",
        phonetic: "/kɔɪn/",
        partOfSpeech: "verb",
        definitionEn: "Invent or devise a new word or phrase.",
        definitionId: "Mencetuskan atau menciptakan istilah kata baru untuk pertama kali.",
        exampleSentence: "UX designers coin new terminology to categorize emerging digital scams."
      },
      {
        word: "Statute",
        phonetic: "/ˈstætʃ.uːt/",
        partOfSpeech: "noun",
        definitionEn: "A written law passed by a legislative body.",
        definitionId: "Undang-undang resmi yang ditetapkan oleh badan legislatif negara.",
        exampleSentence: "Consumer protection statutes prohibit deceptive marketing practices."
      },
      {
        word: "Autonomy",
        phonetic: "/ɔːˈtɒn.ə.mi/",
        partOfSpeech: "noun",
        definitionEn: "The right or condition of self-government; freedom of choice.",
        definitionId: "Otonomi; hak kemandirian pengguna dalam menentukan keputusan sendiri.",
        exampleSentence: "Ethical user experience design respects consumer autonomy."
      }
    ],
    vocabQuiz: [
      {
        id: "q-vq-99-1",
        statement: "'Deceptive' design patterns communicate with absolute transparency and honesty.",
        isTrue: false,
        explanation: "False. Deceptive designs mislead and manipulate users."
      },
      {
        id: "q-vq-99-2",
        statement: "A 'labyrinth' represents a straightforward, linear path with zero turns.",
        isTrue: false,
        explanation: "False. A labyrinth is an intricate maze designed to confuse."
      },
      {
        id: "q-vq-99-3",
        statement: "'Confirmshaming' guilts users emotionally for clicking an opt-out button.",
        isTrue: true,
        explanation: "True. Confirmshaming uses manipulative language on decline options."
      },
      {
        id: "q-vq-99-4",
        statement: "'Auxiliary' fees are secondary supplemental charges added to a bill.",
        isTrue: true,
        explanation: "True. Auxiliary means secondary or additional."
      },
      {
        id: "q-vq-99-5",
        statement: "To 'prosecute' illegal actions means to reward them with corporate medals.",
        isTrue: false,
        explanation: "False. Prosecute means to take legal action against lawbreakers."
      },
      {
        id: "q-vq-99-6",
        statement: "A cognitive 'vulnerability' is a psychological blind spot or bias.",
        isTrue: true,
        explanation: "True. Vulnerabilities are points of cognitive susceptibility."
      },
      {
        id: "q-vq-99-7",
        statement: "A software 'glitch' is a temporary unintended technical malfunction.",
        isTrue: true,
        explanation: "True. A glitch is an accidental software bug."
      },
      {
        id: "q-vq-99-8",
        statement: "To 'coin' a phrase means to melt metal coins in a furnace.",
        isTrue: false,
        explanation: "False. To coin a phrase means to invent or formulate a new term."
      },
      {
        id: "q-vq-99-9",
        statement: "A legal 'statute' is an enacted legislative law.",
        isTrue: true,
        explanation: "True. A statute is a formal written law."
      },
      {
        id: "q-vq-99-10",
        statement: "User 'autonomy' signifies having full personal agency and independent choice.",
        isTrue: true,
        explanation: "True. Autonomy is the freedom of self-determination."
      }
    ],
    readingQuiz: [
      {
        id: "q-rq-99-1",
        question: "What are 'Dark Patterns' in user interface design?",
        options: [
          "Deliberate behavioral interface manipulations designed to trick users into unintended actions",
          "Dark mode color schemes used to save laptop battery power",
          "Geometric wallpaper textures used on office computer screens",
          "Unpublished science fiction novels about space travel"
        ],
        correctIndex: 0,
        explanation: "Dark patterns are deceptive design tactics engineered to manipulate user decisions."
      },
      {
        id: "q-rq-99-2",
        question: "What occurs in the 'Roach Motel' dark pattern tactic?",
        options: [
          "An account or subscription is effortless to join, but deliberately convoluted and difficult to cancel",
          "The computer screen fills with live insects",
          "The user is given free hotel accommodations in Paris",
          "The computer turns off automatically at 9:00 PM"
        ],
        correctIndex: 0,
        explanation: "A Roach Motel makes enrollment seamless but makes cancellation extraordinarily difficult."
      },
      {
        id: "q-rq-99-3",
        question: "What is an example of 'Confirmshaming' as defined in the text?",
        options: [
          "Framing opt-out buttons with emotionally manipulative guilt (e.g. 'No thanks, I hate saving money')",
          "Sending a polite email confirmation after an airline ticket purchase",
          "Displaying a blue checkmark next to a verified social account",
          "Asking users to confirm their delivery address before shipping"
        ],
        correctIndex: 0,
        explanation: "Confirmshaming uses emotional guilt on opt-out buttons to coerce compliance."
      },
      {
        id: "q-rq-99-4",
        question: "How are consumer protection regulatory agencies like the FTC responding to dark patterns?",
        options: [
          "Prosecuting deceptive interface designs as illegal unfair trade practices",
          "Mandating that all websites use dark patterns exclusively",
          "Rewarding deceptive companies with government subsidies",
          "Banning consumers from using web browsers"
        ],
        correctIndex: 0,
        explanation: "Regulators are prosecuting dark patterns under consumer protection laws as unfair practices."
      },
      {
        id: "q-rq-99-5",
        question: "Who originally coined the term 'Dark Patterns' to describe deceptive UX practices?",
        options: [
          "UX specialist Harry Brignull",
          "Charles Ponzi",
          "Dorothy Miller",
          "John C. Bogle"
        ],
        correctIndex: 0,
        explanation: "The article specifies that UX specialist Harry Brignull coined the term."
      }
    ]
  },
  {
    id: "en-art-100",
    title: "The Right to Repair Movement in Consumer Electronics and Digital Hardware",
    category: "Digital Literacy",
    level: "Intermediate",
    source: "Electronic Frontier Foundation (EFF) & U.S. Copyright Office",
    sourceUrl: "https://eff.org",
    wordCount: 465,
    estimatedMinutes: 3,
    content: [
      "Over the past two decades, consumer electronics manufacturers have systematically engineered barriers against hardware repairability: gluing smartphone batteries into unibody enclosures, soldering RAM onto motherboards, and using proprietary pentalobe screws. Furthermore, companies weaponized digital rights management (DRM) and software locks to disable replacement screens and parts installed by independent technicians.",
      "In response, a powerful global grassroots coalition—the 'Right to Repair' movement—is fighting for consumer sovereignty over the devices they legally own. Activists and repair advocates argue that artificial repair monopolies drive premature obsolescence, generate mountains of hazardous e-waste, and burden working families with costly device upgrades.",
      "Landmark legislation across the European Union and US states (such as New York and California) now mandates that manufacturers provide open access to repair schematics, diagnostic software, and genuine spare parts at fair market prices.",
      "The Right to Repair movement asserts a fundamental digital literacy principle: if you cannot open, diagnose, and fix a device you paid for, you do not truly own it—you merely license it."
    ],
    vocabList: [
      {
        word: "Repairability",
        phonetic: "/rɪˌpeə.rəˈbɪl.ə.ti/",
        partOfSpeech: "noun",
        definitionEn: "The ease with which a product can be repaired or restored to working order.",
        definitionId: "Kemudahan reparasi; tingkat kemudahan suatu perangkat untuk diperbaiki.",
        exampleSentence: "Advocates rate consumer electronics on a standardized repairability index."
      },
      {
        word: "Obsolescence",
        phonetic: "/ˌɒb.səˈles.əns/",
        partOfSpeech: "noun",
        definitionEn: "The process of becoming obsolete, outdated, or no longer used or usable.",
        definitionId: "Keusangan terencana (obsolescence); proses menjadi usang atau tak terpakai.",
        exampleSentence: "Planned obsolescence forces consumers to purchase new smartphones every two years."
      },
      {
        word: "Schematics",
        phonetic: "/skɪˈmæt.ɪks/",
        partOfSpeech: "noun",
        definitionEn: "Detailed technical diagrams or representations of an electrical circuit or mechanical system.",
        definitionId: "Skematik; diagram teknis terperinci dari jalur sirkuit elektronik.",
        exampleSentence: "Independent technicians require circuit schematics to solder microchips accurately."
      },
      {
        word: "E-waste",
        phonetic: "/ˈiːˌweɪst/",
        partOfSpeech: "noun",
        definitionEn: "Discarded electronic appliances, computers, and mobile phones.",
        definitionId: "Limbah elektronik (e-waste); sampah perangkat keras elektronik bekas.",
        exampleSentence: "Discarded lithium batteries contribute to toxic global e-waste accumulation."
      },
      {
        word: "Proprietary",
        phonetic: "/prəˈpraɪ.ə.tər.i/",
        partOfSpeech: "adjective",
        definitionEn: "Relating to an owner or ownership; protected by trademark, patent, or copyright.",
        definitionId: "Proprietari; hak milik eksklusif pabrikan yang tertutup dan dipatenkan.",
        exampleSentence: "Manufacturers use proprietary screws to prevent users from opening devices."
      },
      {
        word: "Solder",
        phonetic: "/ˈsəʊl.dər/",
        partOfSpeech: "verb",
        definitionEn: "Join together metal components with solder (a low-melting alloy).",
        definitionId: "Menyolder; merekatkan komponen elektronik dengan lelehan timah.",
        exampleSentence: "Soldering memory chips directly onto boards prevents user upgrades."
      },
      {
        word: "Monopoly",
        phonetic: "/məˈnɒp.əl.i/",
        partOfSpeech: "noun",
        definitionEn: "The exclusive possession or control of the supply of or trade in a commodity or service.",
        definitionId: "Monopoli; penguasaan pasar secara tunggal tanpa adanya kompetisi.",
        exampleSentence: "Authorized service monopolies charge inflated fees for simple screen fixes."
      },
      {
        word: "Unibody",
        phonetic: "/ˈjuː.nɪˌbɒd.i/",
        partOfSpeech: "noun",
        definitionEn: "A single molded structure in which the chassis and body are integrated.",
        definitionId: "Unibodi; konstruksi bodi tunggal yang menyatu tanpa baut lepas-pasang.",
        exampleSentence: "Glued unibody designs make battery replacement exceedingly hazardous."
      },
      {
        word: "Diagnostic",
        phonetic: "/ˌdaɪ.əɡˈnɒs.tɪk/",
        partOfSpeech: "adjective",
        definitionEn: "Concerned with the diagnosis of illness or technical problems.",
        definitionId: "Diagnostik; perangkat lunak penguji untuk melacak sumber kerusakan.",
        exampleSentence: "Legislation mandates access to official diagnostic calibration software."
      },
      {
        word: "License",
        phonetic: "/ˈlaɪ.səns/",
        partOfSpeech: "verb",
        definitionEn: "Grant a license to; authorize the use of something under conditions rather than full sale.",
        definitionId: "Melesensikan; memberikan izin pakai bersyarat alih-alih kepemilikan mutlak.",
        exampleSentence: "Software terms imply that buyers merely license hardware features temporarily."
      }
    ],
    vocabQuiz: [
      {
        id: "q-vq-100-1",
        statement: "'Repairability' measures how easily a device can be opened, fixed, and maintained.",
        isTrue: true,
        explanation: "True. Repairability indicates ease of repair."
      },
      {
        id: "q-vq-100-2",
        statement: "Planned 'obsolescence' is designed to make devices last 500 years without needing repair.",
        isTrue: false,
        explanation: "False. Planned obsolescence deliberately shortens a product's lifespan."
      },
      {
        id: "q-vq-100-3",
        statement: "Circuit 'schematics' provide technical blueprint diagrams for repairing electronics.",
        isTrue: true,
        explanation: "True. Schematics are technical wiring and circuit diagrams."
      },
      {
        id: "q-vq-100-4",
        statement: "'E-waste' consists of biodegradable apple peels and orange rinds.",
        isTrue: false,
        explanation: "False. E-waste refers to discarded electronic and digital hardware."
      },
      {
        id: "q-vq-100-5",
        statement: "'Proprietary' tools are patented exclusive designs owned by a single corporation.",
        isTrue: true,
        explanation: "True. Proprietary implies exclusive corporate ownership and restriction."
      },
      {
        id: "q-vq-100-6",
        statement: "To 'solder' components means to fuse them with melted metal alloy.",
        isTrue: true,
        explanation: "True. Soldering connects electronic parts using low-melting alloy."
      },
      {
        id: "q-vq-100-7",
        statement: "A repair 'monopoly' provides thousands of competing local repair options at ultra-low prices.",
        isTrue: false,
        explanation: "False. A monopoly controls the market exclusively, eliminating competition."
      },
      {
        id: "q-vq-100-8",
        statement: "A 'unibody' frame integrates the outer chassis into a single sealed shell.",
        isTrue: true,
        explanation: "True. Unibody construction unites components into a unified chassis."
      },
      {
        id: "q-vq-100-9",
        statement: "'Diagnostic' tools are used exclusively for decorating wedding cakes.",
        isTrue: false,
        explanation: "False. Diagnostic tools identify hardware faults and system errors."
      },
      {
        id: "q-vq-100-10",
        statement: "When you 'license' a product, you obtain temporary permission to use it under terms rather than true ownership.",
        isTrue: true,
        explanation: "True. Licensing grants conditional use without full ownership."
      }
    ],
    readingQuiz: [
      {
        id: "q-rq-100-1",
        question: "How have manufacturers systematically impeded hardware repairability over the last two decades?",
        options: [
          "Gluing batteries, soldering RAM, using proprietary screws, and deploying software locks",
          "Providing free repair manuals and free replacement parts to everyone",
          "Building computers out of solid hardwood blocks",
          "Prohibiting the sale of electricity"
        ],
        correctIndex: 0,
        explanation: "Manufacturers used glued batteries, soldered components, proprietary screws, and software locks."
      },
      {
        id: "q-rq-100-2",
        question: "What negative environmental and economic impacts result from artificial repair restrictions?",
        options: [
          "Premature obsolescence, mountains of toxic e-waste, and costly forced upgrades for families",
          "Complete elimination of all global landfills",
          "Instant doubling of clean river water quality",
          "Cheaper replacement devices for everyone"
        ],
        correctIndex: 0,
        explanation: "Repair barriers accelerate device obsolescence, hazardous e-waste, and consumer expense."
      },
      {
        id: "q-rq-100-3",
        question: "What does landmark Right to Repair legislation mandate from manufacturers?",
        options: [
          "Open access to repair schematics, diagnostic software, and genuine spare parts at fair prices",
          "A complete ban on selling electronic devices to the public",
          "Forcing all consumers to work in manufacturing factories",
          "Deleting all software updates permanently"
        ],
        correctIndex: 0,
        explanation: "Legislation mandates access to schematics, diagnostic software, and genuine parts."
      },
      {
        id: "q-rq-100-4",
        question: "Which US states are cited as pioneers in passing comprehensive Right to Repair legislation?",
        options: [
          "New York and California",
          "Antarctica and Greenland",
          "The Moon and Mars",
          "Texas and Alaska exclusively"
        ],
        correctIndex: 0,
        explanation: "The passage specifically cites landmark legislation passed in New York and California."
      },
      {
        id: "q-rq-100-5",
        question: "What fundamental digital literacy principle does the Right to Repair movement assert?",
        options: [
          "If you cannot open, diagnose, and fix a device you paid for, you do not truly own it",
          "Smartphones should only be operated by certified robots",
          "Hardware repair should be punishable by lifelong imprisonment",
          "All electronics should be thrown into the ocean every six months"
        ],
        correctIndex: 0,
        explanation: "The core principle asserts that inability to repair implies conditional licensing rather than ownership."
      }
    ]
  },
  {
    id: "en-art-101",
    title: "Open Source Software as Critical Global Infrastructure",
    category: "Digital Literacy",
    level: "Advanced",
    source: "Open Source Initiative (OSI) & Harvard Kennedy School Belfer Center",
    sourceUrl: "https://opensource.org",
    wordCount: 475,
    estimatedMinutes: 3,
    content: [
      "Modern society relies on invisible digital foundations: the global financial banking grid, air traffic control towers, hospital medical monitors, and smartphone operating systems all execute on open source software (OSS). Projects maintained by decentralized volunteer communities—such as the Linux kernel, OpenSSL cryptography libraries, and Chromium rendering engines—form the indispensable bedrock of the global economy.",
      "The open source methodology democratizes technical innovation by making underlying source code publicly auditable, modifiable, and distributable without restrictive commercial licensing fees. This transparency enables rapid collaborative vulnerability patching and prevents vendor lock-in.",
      "However, this architecture suffers from a dangerous economic paradox known as the 'tragedy of the digital commons'. Trillion-dollar commercial tech conglomerates extract immense profits by incorporating open source libraries into proprietary enterprise products, while contributing virtually zero financial remuneration or developer engineering hours to maintain the underlying codebases.",
      "Securing our shared digital infrastructure requires sustainable open source funding models, corporate stewardship, and algorithmic dependency tracking to safeguard critical software commons from systemic collapse."
    ],
    vocabList: [
      {
        word: "Indispensable",
        phonetic: "/ˌɪn.dɪˈspen.sə.bəl/",
        partOfSpeech: "adjective",
        definitionEn: "Absolutely necessary, essential, or vital.",
        definitionId: "Sangat mutlak diperlukan; tidak dapat ditiadakan dalam sistem.",
        exampleSentence: "The Linux kernel is an indispensable component of modern server clouds."
      },
      {
        word: "Auditable",
        phonetic: "/ˈɔː.dɪ.tə.bəl/",
        partOfSpeech: "adjective",
        definitionEn: "Able to be inspected, examined, and verified independently.",
        definitionId: "Dapat diaudit dan diperiksa secara terbuka oleh komunitas independen.",
        exampleSentence: "Open source code is publicly auditable, allowing security flaws to be caught early."
      },
      {
        word: "Remuneration",
        phonetic: "/rɪˌmjuː.nərˈeɪ.ʃən/",
        partOfSpeech: "noun",
        definitionEn: "Money paid for work or a service; financial reward.",
        definitionId: "Remunerasi; kompensasi pembayaran imbalan jasa atau upah kerja.",
        exampleSentence: "Open source maintainers often perform critical labor with zero remuneration."
      },
      {
        word: "Stewardship",
        phonetic: "/ˈstjuː.əd.ʃɪp/",
        partOfSpeech: "noun",
        definitionEn: "The job of supervising or taking care of something, such as an organization or property.",
        definitionId: "Tata kelola pemeliharaan dan perlindungan sumber daya bersama (stewardship).",
        exampleSentence: "Responsible corporate stewardship involves funding the open source tools you rely on."
      },
      {
        word: "Bedrock",
        phonetic: "/ˈbed.rɒk/",
        partOfSpeech: "noun",
        definitionEn: "The fundamental principles or foundation on which something is based.",
        definitionId: "Batu fondasi utama; landasan dasar penopang seluruh infrastruktur.",
        exampleSentence: "Open source protocols form the bedrock of the global internet."
      },
      {
        word: "Lock-in",
        phonetic: "/ˈlɒk.ɪn/",
        partOfSpeech: "noun",
        definitionEn: "A situation where a customer is dependent on a single vendor and cannot switch without high cost.",
        definitionId: "Ketergantungan vendor (lock-in); keterikatan mutlak pada satu penyedia perangkat.",
        exampleSentence: "Open standards liberate organizations from predatory proprietary vendor lock-in."
      },
      {
        word: "Commons",
        phonetic: "/ˈkɒm.ənz/",
        partOfSpeech: "noun",
        definitionEn: "Cultural and natural resources accessible to all members of a society.",
        definitionId: "Sumber daya milik bersama (the commons); aset publik yang dinikmati bersama.",
        exampleSentence: "Open source code is a digital commons that must be collectively nurtured."
      },
      {
        word: "Paradox",
        phonetic: "/ˈpær.ə.dɒks/",
        partOfSpeech: "noun",
        definitionEn: "A seemingly absurd or self-contradictory statement or situation that may prove true.",
        definitionId: "Paradoks; situasi kontradiktif yang menyimpan kenyataan faktual nyata.",
        exampleSentence: "The paradox of open source is that trillion-dollar firms rely on unpaid code."
      },
      {
        word: "Kernel",
        phonetic: "/ˈkɜː.nəl/",
        partOfSpeech: "noun",
        definitionEn: "The fundamental central core of a computer's operating system.",
        definitionId: "Kernel; inti terdalam dari sistem operasi komputer pengatur perangkat keras.",
        exampleSentence: "The Linux kernel manages memory allocation and processor execution."
      },
      {
        word: "Dependency",
        phonetic: "/dɪˈpen.dən.si/",
        partOfSpeech: "noun",
        definitionEn: "A software component or library required by another program to function.",
        definitionId: "Dependensi; pustaka kode eksternal yang dibutuhkan aplikasi untuk berjalan.",
        exampleSentence: "Automated scanners audit software for vulnerable open source dependencies."
      }
    ],
    vocabQuiz: [
      {
        id: "q-vq-101-1",
        statement: "An 'indispensable' asset can be thrown away with zero consequences or impact.",
        isTrue: false,
        explanation: "False. Indispensable means utterly essential and mandatory."
      },
      {
        id: "q-vq-101-2",
        statement: "'Auditable' code can be freely inspected, reviewed, and tested by anyone.",
        isTrue: true,
        explanation: "True. Auditable means open to independent examination."
      },
      {
        id: "q-vq-101-3",
        statement: "Financial 'remuneration' is the payment or compensation given for labor.",
        isTrue: true,
        explanation: "True. Remuneration is monetary reward for work performed."
      },
      {
        id: "q-vq-101-4",
        statement: "Corporate 'stewardship' means exploiting resources recklessly until they collapse.",
        isTrue: false,
        explanation: "False. Stewardship is responsible oversight, care, and protection."
      },
      {
        id: "q-vq-101-5",
        statement: "The 'bedrock' of a system is its core foundational underpinning.",
        isTrue: true,
        explanation: "True. Bedrock signifies the fundamental base."
      },
      {
        id: "q-vq-101-6",
        statement: "Vendor 'lock-in' empowers customers to switch suppliers instantly at zero cost.",
        isTrue: false,
        explanation: "False. Vendor lock-in traps customers with proprietary dependencies."
      },
      {
        id: "q-vq-101-7",
        statement: "A digital 'commons' is a shared resource open and accessible to all.",
        isTrue: true,
        explanation: "True. The commons represents shared communal resources."
      },
      {
        id: "q-vq-101-8",
        statement: "A 'paradox' presents an intriguing situation of contradictory truths.",
        isTrue: true,
        explanation: "True. A paradox is a seemingly contradictory yet real condition."
      },
      {
        id: "q-vq-101-9",
        statement: "The operating system 'kernel' manages low-level hardware and memory control.",
        isTrue: true,
        explanation: "True. The kernel is the central core of an operating system."
      },
      {
        id: "q-vq-101-10",
        statement: "A software 'dependency' is an external library that a program relies upon to run.",
        isTrue: true,
        explanation: "True. Dependencies are external software modules required by an application."
      }
    ],
    readingQuiz: [
      {
        id: "q-rq-101-1",
        question: "What critical societal systems rely on open source software (OSS) infrastructure?",
        options: [
          "Banking financial grids, air traffic control towers, hospital monitors, and smartphones",
          "Only amateur tabletop card games",
          "Zero commercial or government systems worldwide",
          "Steam locomotives built in the 18th century"
        ],
        correctIndex: 0,
        explanation: "Global financial grids, air traffic systems, medical monitors, and smartphones run on OSS."
      },
      {
        id: "q-rq-101-2",
        question: "What key advantage does the open source methodology provide?",
        options: [
          "Source code is publicly auditable, modifiable, and free from vendor lock-in",
          "It makes computers run with zero electricity",
          "It deletes all software bugs automatically without any human work",
          "It prohibits developers from using keyboards"
        ],
        correctIndex: 0,
        explanation: "OSS provides public auditability, rapid collaborative patching, and freedom from lock-in."
      },
      {
        id: "q-rq-101-3",
        question: "What is the 'tragedy of the digital commons' paradox in open source software?",
        options: [
          "Trillion-dollar conglomerates profit off open source code while contributing little funding or maintenance back to maintainers",
          "Software code dissolving into water after five minutes",
          "Developers being forced to live in unheated caves",
          "All computer servers being confiscated by government post offices"
        ],
        correctIndex: 0,
        explanation: "Commercial tech giants extract massive value from open source while contributing minimal maintenance or funding."
      },
      {
        id: "q-rq-101-4",
        question: "Which open source projects are cited in the text as indispensable digital bedrock?",
        options: [
          "The Linux kernel, OpenSSL cryptography libraries, and Chromium rendering engines",
          "Pong 1972 arcade code and Space Invaders sound chips",
          "Proprietary encrypted mainframe military locks",
          "Commercial banking spreadsheets written in 1982"
        ],
        correctIndex: 0,
        explanation: "The article specifically highlights the Linux kernel, OpenSSL, and Chromium."
      },
      {
        id: "q-rq-101-5",
        question: "What solutions are proposed to secure open source digital infrastructure for the future?",
        options: [
          "Sustainable funding models, corporate stewardship, and algorithmic dependency tracking",
          "Permanently shutting down all open source repositories",
          "Banning anyone from writing free software code",
          "Replacing the internet with physical postal letters"
        ],
        correctIndex: 0,
        explanation: "Sustainable funding, corporate stewardship, and dependency management safeguard software commons."
      }
    ]
  }
];
