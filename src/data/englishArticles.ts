import { EnglishArticle } from '../types';
import { ADDITIONAL_ENGLISH_ARTICLES_PART1 } from './additionalEnglishArticlesPart1';
import { ADDITIONAL_ENGLISH_ARTICLES_PART2 } from './additionalEnglishArticlesPart2';
import { ADDITIONAL_ENGLISH_ARTICLES_PART3 } from './additionalEnglishArticlesPart3';
import { ADDITIONAL_ENGLISH_ARTICLES_PART4 } from './additionalEnglishArticlesPart4';
import { ADDITIONAL_ENGLISH_ARTICLES_PART5 } from './additionalEnglishArticlesPart5';
import { ADDITIONAL_ENGLISH_ARTICLES_PART6 } from './additionalEnglishArticlesPart6';
import { ADDITIONAL_ENGLISH_ARTICLES_PART7 } from './additionalEnglishArticlesPart7';
import { ADDITIONAL_ENGLISH_ARTICLES_PART8 } from './additionalEnglishArticlesPart8';
import { ADDITIONAL_ENGLISH_ARTICLES_PART9 } from './additionalEnglishArticlesPart9';
import { ADDITIONAL_ENGLISH_ARTICLES_PART10 } from './additionalEnglishArticlesPart10';

const BASE_ENGLISH_ARTICLES: EnglishArticle[] = [
  {
    id: "en-art-1",
    title: "Chimpanzees also like to follow trends, study shows",
    category: "Biology & Animal Behavior",
    level: "Intermediate",
    source: "Live Science & Durham University",
    sourceUrl: "https://www.livescience.com",
    wordCount: 472,
    estimatedMinutes: 3,
    content: [
      "Human beings are famously prone to following fleeting fashion trends and cultural fads, from distinctive clothing styles to viral internet dances. Now, an intriguing scientific study has revealed that our closest living relatives—chimpanzees—exhibit a remarkably similar tendency to copy and spread quirky, non-functional social customs.",
      "Researchers conducting long-term behavioral observations at the Chimfunshi Wildlife Orphanage in Zambia documented a peculiar phenomenon: chimpanzees inserting long blades of grass or small twigs into their ears and proudly strutting around their forested enclosures.",
      "The arbitrary behavior was first originated in 2010 by an innovative female chimpanzee named Julie. Soon after Julie began sporting the grass ornament in her ear, other chimps within her social troupe took notice and began imitating her exact actions, wearing grass in their own ears even when Julie was no longer present.",
      "What makes this discovery scientifically momentous is that the behavior serves no biological survival purpose whatsoever. While animal tool use—such as cracking nuts with stones or fishing for termites with sticks—is well documented as utilitarian problem-solving, this grass-in-ear trend was purely social and arbitrary.",
      "Years later, researchers observed another separate group in the sanctuary independently adopting a similar habit, with some individuals even placing blades of grass in their rectums.",
      "Dr. Jake Brooker, a co-author of the research, described the phenomenon as evidence of 'chimpanzee fashion'. The study demonstrates that social learning and cultural traditions in primates are not strictly confined to survival skills, suggesting that the evolutionary roots of human cultural fads reach much deeper into our shared ancestry than scientists previously recognized."
    ],
    vocabList: [
      {
        word: "Prone",
        phonetic: "/proʊn/",
        partOfSpeech: "adjective",
        definitionEn: "Naturally likely to do or suffer from something.",
        definitionId: "Cenderung atau rentan terhadap sesuatu.",
        exampleSentence: "Humans are prone to copying behaviors they observe in their peers."
      },
      {
        word: "Fad",
        phonetic: "/fæd/",
        partOfSpeech: "noun",
        definitionEn: "An intense and widely shared enthusiasm for something, especially one that is short-lived; a craze.",
        definitionId: "Tren atau kegemaran sesaat yang viral dan cepat berlalu.",
        exampleSentence: "The grass-in-ear custom was a social fad among the chimpanzees."
      },
      {
        word: "Quirky",
        phonetic: "/ˈkwɜːrki/",
        partOfSpeech: "adjective",
        definitionEn: "Characterized by peculiar, unique, or unexpected traits.",
        definitionId: "Unik, eksentrik, atau memiliki kebiasaan yang tidak biasa.",
        exampleSentence: "Julie introduced a quirky habit of wearing grass in her ear."
      },
      {
        word: "Peculiar",
        phonetic: "/pɪˈkjuːliər/",
        partOfSpeech: "adjective",
        definitionEn: "Strange, unusual, or distinctive.",
        definitionId: "Aneh, janggal, atau khas.",
        exampleSentence: "Researchers noticed a peculiar new trend spreading across the troupe."
      },
      {
        word: "Arbitrary",
        phonetic: "/ˈɑːrbətrɛri/",
        partOfSpeech: "adjective",
        definitionEn: "Based on random choice or personal whim, rather than any reason or system.",
        definitionId: "Manasuka, acak, atau tanpa tujuan fungsional tertentu.",
        exampleSentence: "The chimps copied an arbitrary habit that offered no survival benefit."
      },
      {
        word: "Troupe",
        phonetic: "/truːp/",
        partOfSpeech: "noun",
        definitionEn: "A group of animals or performers living or working together.",
        definitionId: "Kawanan atau kelompok sosial binatang.",
        exampleSentence: "Members of the chimpanzee troupe began adopting the new routine."
      },
      {
        word: "Utilitarian",
        phonetic: "/ˌjuːtɪlɪˈtɛəriən/",
        partOfSpeech: "adjective",
        definitionEn: "Designed to be useful or practical rather than attractive or decorative.",
        definitionId: "Fungsional, praktis, atau berguna untuk kebutuhan nyata.",
        exampleSentence: "Unlike termite fishing, the grass trend was not utilitarian."
      },
      {
        word: "Momentous",
        phonetic: "/moʊˈmɛntəs/",
        partOfSpeech: "adjective",
        definitionEn: "Of great importance or significance, especially in having a bearing on future events.",
        definitionId: "Sangat penting, bersejarah, atau berdampak besar.",
        exampleSentence: "The findings represent a momentous milestone in evolutionary biology."
      },
      {
        word: "Confined",
        phonetic: "/kənˈfaɪnd/",
        partOfSpeech: "adjective",
        definitionEn: "Restricted or limited to a particular space, person, or category.",
        definitionId: "Terbatas atau terkurung pada lingkup tertentu.",
        exampleSentence: "Cultural learning in primates is not confined to basic survival."
      },
      {
        word: "Ancestry",
        phonetic: "/ˈænsɛstri/",
        partOfSpeech: "noun",
        definitionEn: "One's family or ethnic descent; lineage.",
        definitionId: "Garis keturunan atau asal-usul nenek moyang.",
        exampleSentence: "Humans and chimps share common ancestry that shaped our social instincts."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-1-1",
        statement: "The word 'Prone' means having a natural tendency or susceptibility to something.",
        isTrue: true,
        explanation: "'Prone' means likely to do, experience, or be affected by something."
      },
      {
        id: "vq-tf-1-2",
        statement: "The term 'Fad' refers to a permanent, everlasting custom that never fades away.",
        isTrue: false,
        explanation: "A 'Fad' is a temporary, short-lived craze or trend."
      },
      {
        id: "vq-tf-1-3",
        statement: "'Arbitrary' describes something chosen randomly without a strict practical necessity.",
        isTrue: true,
        explanation: "'Arbitrary' implies decisions or customs formed by chance or whim rather than necessity."
      },
      {
        id: "vq-tf-1-4",
        statement: "'Utilitarian' means created purely for luxury, fashion, and decoration.",
        isTrue: false,
        explanation: "'Utilitarian' means practical and functional rather than decorative."
      },
      {
        id: "vq-tf-1-5",
        statement: "'Momentous' signifies something of immense importance and consequence.",
        isTrue: true,
        explanation: "'Momentous' means having a major, significant impact on knowledge or history."
      },
      {
        id: "vq-tf-1-6",
        statement: "'Quirky' means extremely dull, normal, and conventional.",
        isTrue: false,
        explanation: "'Quirky' means unusual, peculiar, and eccentric."
      },
      {
        id: "vq-tf-1-7",
        statement: "'Troupe' can describe a social group or band of animals living together.",
        isTrue: true,
        explanation: "'Troupe' refers to an organized group or ensemble."
      },
      {
        id: "vq-tf-1-8",
        statement: "'Confined' means completely boundless and unrestricted.",
        isTrue: false,
        explanation: "'Confined' means restricted, bounded, or limited within specific borders."
      },
      {
        id: "vq-tf-1-9",
        statement: "'Peculiar' means strange, distinctive, or uncommon.",
        isTrue: true,
        explanation: "'Peculiar' is a synonym for odd, unique, or atypical."
      },
      {
        id: "vq-tf-1-10",
        statement: "'Ancestry' refers to the lineage and evolutionary forebears of an organism.",
        isTrue: true,
        explanation: "'Ancestry' encompasses inherited genetic descent and historical origins."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-1-1",
        question: "What specific trend was observed spreading among the chimpanzees at the Zambian sanctuary?",
        options: [
          "Wearing blades of grass in their ears",
          "Painting their hands with colorful mud",
          "Washing sweet potatoes in saltwater",
          "Stacking rocks in geometric formations"
        ],
        correctIndex: 0,
        explanation: "The chimpanzees inserted blades of grass into their ears as a social fashion statement."
      },
      {
        id: "rq-mc-1-2",
        question: "Why was this discovery considered scientifically momentous by primate researchers?",
        options: [
          "It helped chimps catch insects much faster than traditional tools",
          "The custom had no biological survival purpose, proving arbitrary social copying",
          "It cured ear infections in young infant chimpanzees",
          "It allowed chimps to communicate across miles of dense jungle"
        ],
        correctIndex: 1,
        explanation: "The behavior was non-functional and arbitrary, demonstrating cultural transmission of fads beyond survival tools."
      },
      {
        id: "rq-mc-1-3",
        question: "Who was the individual chimpanzee that originated the grass-in-ear behavior in 2010?",
        options: [
          "A male alpha named Koko",
          "A female chimpanzee named Julie",
          "A human researcher named Dr. Jake",
          "A captive chimp named Washoe"
        ],
        correctIndex: 1,
        explanation: "A female chimpanzee named Julie first started putting grass in her ear in 2010."
      },
      {
        id: "rq-mc-1-4",
        question: "What broader implication does this study offer regarding human evolutionary history?",
        options: [
          "Human fashion trends evolved purely during the industrial revolution",
          "Primates cannot imitate each other without food rewards",
          "The instinct to copy cultural fads has deep evolutionary roots shared with apes",
          "Chimpanzees will soon develop spoken human language"
        ],
        correctIndex: 2,
        explanation: "It indicates that copying arbitrary cultural traditions is an ancient evolutionary trait shared with our common primate ancestors."
      },
      {
        id: "rq-mc-1-5",
        question: "How does this behavior differ from chimpanzees using sticks to fish for termites?",
        options: [
          "Fishing for termites is a utilitarian survival skill, whereas the grass trend is non-utilitarian",
          "Termite fishing is done only by humans",
          "The grass trend requires sophisticated metal tools",
          "Termite fishing is never passed down between generations"
        ],
        correctIndex: 0,
        explanation: "Termite fishing provides food (utilitarian), while the grass ear trend has no survival utility (purely cultural)."
      }
    ]
  },
  {
    id: "en-art-2",
    title: "Extreme heat is a killer. A recent heat wave shows how much more deadly it’s becoming",
    category: "Environment & Climate Change",
    level: "Intermediate",
    source: "AP News & Climate Central",
    sourceUrl: "https://apnews.com",
    wordCount: 488,
    estimatedMinutes: 3,
    content: [
      "As record-shattering temperatures engulf cities across the globe, medical professionals and epidemiologists are issuing increasingly urgent warnings: extreme heat is not simply an uncomfortable inconvenience, but a lethal and quietly devastating natural disaster.",
      "Unlike hurricanes, flash floods, or tornadoes that leave visible trails of physical destruction in their wake, heat waves kill silently inside poorly ventilated apartments, construction sites, and congested urban centers. High ambient heat places immense strain on the human cardiovascular system, forcing the heart to pump vigorously to radiate heat away from vital organs.",
      "A comprehensive scientific attribution study analyzing recent heat waves across 12 major European metropolitan areas concluded that human-induced climate change was directly responsible for roughly 65 percent of all heat-related fatalities.",
      "The researchers emphasized that even an incremental rise of just two or three degrees Celsius above historical averages compounds the mortality risk exponentially, particularly among vulnerable populations such as the elderly, unhoused individuals, infants, and patients with pre-existing heart or respiratory conditions.",
      "Urban areas suffer from the 'heat island effect', where vast expanses of asphalt, dark concrete roofs, and vehicular exhaust trap thermal radiation, preventing nighttime cooling and depriving the human body of crucial recovery time.",
      "Climate adaptation experts argue that cities must immediately invest in life-saving infrastructure, including designated cooling centers, expansive urban tree canopies to provide shade, reflective roof coatings, and mandatory workplace heat protection standards."
    ],
    vocabList: [
      {
        word: "Engulf",
        phonetic: "/ɪnˈɡʌlf/",
        partOfSpeech: "verb",
        definitionEn: "To sweep over something so as to surround or cover it completely.",
        definitionId: "Melanda atau menelan secara menyeluruh.",
        exampleSentence: "Severe heat waves engulf metropolitan centers during summer months."
      },
      {
        word: "Lethal",
        phonetic: "/ˈliːθəl/",
        partOfSpeech: "adjective",
        definitionEn: "Sufficient to cause death; deadly or fatal.",
        definitionId: "Mematikan atau fatal bagi keselamatan jiwa.",
        exampleSentence: "Prolonged exposure to extreme humidity can become lethal."
      },
      {
        word: "Epidemiologist",
        phonetic: "/ˌɛpɪˌdiːmiˈɒlədʒɪst/",
        partOfSpeech: "noun",
        definitionEn: "A public health scientist who studies patterns, causes, and effects of health and disease conditions in populations.",
        definitionId: "Pakar epidemiologi yang meneliti pola penyakit dan kesehatan masyarakat.",
        exampleSentence: "Epidemiologists track mortality statistics during heat waves."
      },
      {
        word: "Attribution",
        phonetic: "/ˌætrɪˈbjuːʃən/",
        partOfSpeech: "noun",
        definitionEn: "The act of regarding something as being caused by a specific person, factor, or event.",
        definitionId: "Penetapan sebab-akibat atau atribusi ilmiah.",
        exampleSentence: "Climate attribution studies quantify the impact of global warming."
      },
      {
        word: "Compound",
        phonetic: "/kəmˈpaʊnd/",
        partOfSpeech: "verb",
        definitionEn: "To make something worse or more severe by adding to it; to multiply.",
        definitionId: "Memperparah atau melipatgandakan dampak buruk.",
        exampleSentence: "Lack of air conditioning compounds the danger for elderly residents."
      },
      {
        word: "Vulnerable",
        phonetic: "/ˈvʌlnərəbəl/",
        partOfSpeech: "adjective",
        definitionEn: "Susceptible to physical or emotional harm, attack, or damage.",
        definitionId: "Rentan atau mudah terkena bahaya.",
        exampleSentence: "Infants and seniors are especially vulnerable to heat exhaustion."
      },
      {
        word: "Canopy",
        phonetic: "/ˈkænəpi/",
        partOfSpeech: "noun",
        definitionEn: "The high, continuous covering formed by tree crowns in a forest or urban area.",
        definitionId: "Kanopi atau tutupan rindang dedaunan pohon pelindung.",
        exampleSentence: "Urban tree canopies significantly lower street-level temperatures."
      },
      {
        word: "Reflective",
        phonetic: "/rɪˈflɛktɪv/",
        partOfSpeech: "adjective",
        definitionEn: "Capable of throwing back heat, light, or sound without absorbing it.",
        definitionId: "Memantulkan panas atau cahaya.",
        exampleSentence: "Reflective roofs bounce sunlight away from buildings."
      },
      {
        word: "Ventilated",
        phonetic: "/ˈvɛntɪleɪtɪd/",
        partOfSpeech: "adjective",
        definitionEn: "Provided with fresh air or circulation of air.",
        definitionId: "Berventilasi baik atau memiliki sirkulasi udara lancar.",
        exampleSentence: "Poorly ventilated rooms can quickly turn into heat traps."
      },
      {
        word: "Exhaust",
        phonetic: "/ɪɡˈzɔːst/",
        partOfSpeech: "noun",
        definitionEn: "Waste gases expelled from an engine, vehicle, or industrial reactor.",
        definitionId: "Gas buang atau emisi pembuangan mesin.",
        exampleSentence: "Vehicular exhaust exacerbates the urban heat island effect."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-2-1",
        statement: "'Lethal' describes something that causes death or severe fatal injury.",
        isTrue: true,
        explanation: "'Lethal' means deadly or fatal."
      },
      {
        id: "vq-tf-2-2",
        statement: "'Canopy' in urban planning refers to underground sewer pipelines.",
        isTrue: false,
        explanation: "Urban 'canopy' refers to the overhead covering of tree foliage and shade."
      },
      {
        id: "vq-tf-2-3",
        statement: "'Attribution' in science means determining the root cause of a phenomenon.",
        isTrue: true,
        explanation: "Attribution studies calculate how much human actions contributed to an event."
      },
      {
        id: "vq-tf-2-4",
        statement: "'Vulnerable' means totally immune and impervious to any disease or threat.",
        isTrue: false,
        explanation: "'Vulnerable' means exposed, defenseless, or susceptible to injury."
      },
      {
        id: "vq-tf-2-5",
        statement: "'Engulf' means to completely cover, surround, or swallow up.",
        isTrue: true,
        explanation: "'Engulf' means to overwhelm or submerge totally."
      },
      {
        id: "vq-tf-2-6",
        statement: "'Compound' as a verb means to reduce something to zero.",
        isTrue: false,
        explanation: "To 'compound' problems means to intensify, multiply, or make them worse."
      },
      {
        id: "vq-tf-2-7",
        statement: "'Reflective' materials absorb 100% of thermal heat without bouncing it back.",
        isTrue: false,
        explanation: "Reflective surfaces bounce heat and radiation away rather than absorbing it."
      },
      {
        id: "vq-tf-2-8",
        statement: "'Epidemiologist' is a medical researcher who studies diseases and mortality across populations.",
        isTrue: true,
        explanation: "Epidemiologists analyze population health risks and statistical trends."
      },
      {
        id: "vq-tf-2-9",
        statement: "'Ventilated' indicates that a space has free circulation of fresh air.",
        isTrue: true,
        explanation: "Ventilation involves refreshing the air in an enclosed space."
      },
      {
        id: "vq-tf-2-10",
        statement: "'Exhaust' refers to fresh clean oxygen blown into a building.",
        isTrue: false,
        explanation: "'Exhaust' refers to expelled waste gases from engines and machinery."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-2-1",
        question: "Why is extreme heat described by experts as a 'silent killer' compared to hurricanes?",
        options: [
          "It only strikes underwater marine animals",
          "It destroys physical bridges and buildings with loud explosions",
          "It kills people indoors without leaving obvious physical rubble in the streets",
          "It occurs exclusively in winter seasons"
        ],
        correctIndex: 2,
        explanation: "Heat waves do not cause visible physical wreckage like tornadoes, but kill people silently through medical strain."
      },
      {
        id: "rq-mc-2-2",
        question: "What percentage of heat-related fatalities was attributed to climate change in the European study?",
        options: [
          "Around 10 percent",
          "Roughly 65 percent",
          "Exactly 100 percent",
          "Less than 5 percent"
        ],
        correctIndex: 1,
        explanation: "The study attributed approximately 65 percent of heat-related deaths to human-caused climate change."
      },
      {
        id: "rq-mc-2-3",
        question: "What is the primary mechanism by which the human body strains to cool itself during a heat wave?",
        options: [
          "The heart pumps vigorously to circulate blood toward the skin to radiate heat",
          "The lungs stop absorbing oxygen to save moisture",
          "The brain shuts down all nerve synapses completely",
          "The kidneys store thermal energy permanently"
        ],
        correctIndex: 0,
        explanation: "The cardiovascular system works intensely to pump blood toward the body surface to dissipate heat."
      },
      {
        id: "rq-mc-2-4",
        question: "What causes the 'urban heat island effect' in major cities?",
        options: [
          "An abundance of natural lakes and mountain streams",
          "Dark asphalt, concrete buildings, and vehicle exhaust trapping thermal energy",
          "The reflection of moonlight during clear nights",
          "Underground geothermal magma chambers"
        ],
        correctIndex: 1,
        explanation: "Dense concrete, asphalt, and vehicle emissions trap heat and prevent nighttime cooling."
      },
      {
        id: "rq-mc-2-5",
        question: "Which of the following is an effective urban adaptation measure suggested by climate experts?",
        options: [
          "Paving all city parks with black asphalt",
          "Banning all public drinking water fountains",
          "Expanding urban tree canopies and painting roofs with reflective coatings",
          "Turning off air conditioning in public hospitals"
        ],
        correctIndex: 2,
        explanation: "Planting trees for shade and applying reflective roof coatings lower temperatures in cities."
      }
    ]
  },
  {
    id: "en-art-3",
    title: "China posts 5.2% GDP growth for Q2",
    category: "Global Economy & Trade",
    level: "Intermediate",
    source: "Financial News & Reuters",
    sourceUrl: "https://www.reuters.com",
    wordCount: 465,
    estimatedMinutes: 2,
    content: [
      "China's economy expanded at a resilient 5.2 percent annual rate in the second quarter, outperforming expectations from several international economic forecasters despite escalating tariff pressures and headwinds in global trade.",
      "The official data released by the National Bureau of Statistics underscored strong momentum in high-tech manufacturing, clean energy vehicle exports, and industrial output, which helped offset persistent domestic weakness in the property real estate sector.",
      "Industrial production rose notably, fueled by Beijing's strategic investments in advanced electronics, green energy batteries, and industrial robotics. Export volumes to Southeast Asia, Latin America, and the Middle East also surged, demonstrating Chinese manufacturers' capacity to diversify export destinations beyond traditional Western markets.",
      "However, economists caution that domestic consumer spending remains subdued. Retail sales growth was moderate, as Chinese households continue to maintain high savings rates amid concerns over employment stability and fluctuating property values.",
      "To sustain this growth trajectory and meet its annual targets, policy analysts anticipate that policymakers will introduce targeted fiscal stimulus measures, including infrastructure subsidies, consumer trade-in incentives, and central bank liquidity support in the coming quarters."
    ],
    vocabList: [
      {
        word: "Resilient",
        phonetic: "/rɪˈzɪliənt/",
        partOfSpeech: "adjective",
        definitionEn: "Able to withstand or recover quickly from difficult conditions.",
        definitionId: "Tangguh, ulet, dan mampu pulih cepat dari tekanan.",
        exampleSentence: "The manufacturing sector proved resilient despite tariff barriers."
      },
      {
        word: "Headwind",
        phonetic: "/ˈhɛdwɪnd/",
        partOfSpeech: "noun",
        definitionEn: "A force or condition that opposes or slows down progress.",
        definitionId: "Hambatan atau tantangan ekonomi yang memperlambat laju.",
        exampleSentence: "Trade tariffs created strong economic headwinds for exporters."
      },
      {
        word: "Momentum",
        phonetic: "/moʊˈmɛntəm/",
        partOfSpeech: "noun",
        definitionEn: "The impetus and driving force gained by the development of a process.",
        definitionId: "Daya dorong atau momentum pertumbuhan yang menguat.",
        exampleSentence: "Clean tech exports maintained strong upward momentum."
      },
      {
        word: "Subdued",
        phonetic: "/səbˈdjuːd/",
        partOfSpeech: "adjective",
        definitionEn: "Relatively quiet, restrained, or depressed in activity.",
        definitionId: "Lesu, tertahan, atau belum bergairah.",
        exampleSentence: "Consumer demand remained subdued as buyers saved their cash."
      },
      {
        word: "Stimulus",
        phonetic: "/ˈstɪmjələs/",
        partOfSpeech: "noun",
        definitionEn: "A thing that rouses activity or energy in someone or something; government spending to encourage economic growth.",
        definitionId: "Stimulus atau suntikan dana untuk menggerakkan perekonomian.",
        exampleSentence: "The government unveiled new fiscal stimulus packages."
      },
      {
        word: "Trajectory",
        phonetic: "/trəˈdʒɛktəri/",
        partOfSpeech: "noun",
        definitionEn: "The path followed by a projectile or an object through space; the general course of development.",
        definitionId: "Lintasan atau arah kecenderungan perkembangan.",
        exampleSentence: "Analysts are tracking the long-term GDP growth trajectory."
      },
      {
        word: "Diversify",
        phonetic: "/daɪˈvɜːrsɪfaɪ/",
        partOfSpeech: "verb",
        definitionEn: "Make or become more diverse or varied in markets, products, or investments.",
        definitionId: "Mendiversifikasi atau memperluas variasi pangsa pasar.",
        exampleSentence: "Exporters worked to diversify their sales across new continents."
      },
      {
        word: "Fluctuate",
        phonetic: "/ˈflʌktʃueɪt/",
        partOfSpeech: "verb",
        definitionEn: "Rise and fall irregularly in number or amount.",
        definitionId: "Berfluktuasi atau naik-turun secara tidak menentu.",
        exampleSentence: "Property prices continued to fluctuate across major cities."
      },
      {
        word: "Offset",
        phonetic: "/ˈɒfsɛt/",
        partOfSpeech: "verb",
        definitionEn: "Counteract something by having an equal and opposite force or effect.",
        definitionId: "Mengimbangi atau mengompensasi kerugian di sisi lain.",
        exampleSentence: "Strong factory exports helped offset sluggish real estate sales."
      },
      {
        word: "Incentive",
        phonetic: "/ɪnˈsɛntɪv/",
        partOfSpeech: "noun",
        definitionEn: "A thing that motivates or encourages someone to do something.",
        definitionId: "Insentif atau dorongan pendorong tindakan.",
        exampleSentence: "Tax incentives were offered to encourage vehicle trade-ins."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-3-1",
        statement: "'Resilient' means fragile and easily destroyed by the slightest obstacle.",
        isTrue: false,
        explanation: "'Resilient' means strong, sturdy, and capable of quick recovery."
      },
      {
        id: "vq-tf-3-2",
        statement: "'Headwind' metaphorically refers to difficulties that impede economic progress.",
        isTrue: true,
        explanation: "In finance, a 'headwind' is an unfavorable condition slowing growth."
      },
      {
        id: "vq-tf-3-3",
        statement: "'Subdued' means energetic, frantic, and extremely loud.",
        isTrue: false,
        explanation: "'Subdued' means quiet, restrained, or low in activity."
      },
      {
        id: "vq-tf-3-4",
        statement: "'Offset' means to balance or neutralize one factor with an opposite effect.",
        isTrue: true,
        explanation: "To 'offset' is to counterbalance opposing influences."
      },
      {
        id: "vq-tf-3-5",
        statement: "'Diversify' means concentrating all resources into a single narrow product.",
        isTrue: false,
        explanation: "'Diversify' means branching out into multiple diverse areas."
      },
      {
        id: "vq-tf-3-6",
        statement: "'Stimulus' refers to financial or policy measures designed to boost economic activity.",
        isTrue: true,
        explanation: "Economic stimulus encourages investment and consumer spending."
      },
      {
        id: "vq-tf-3-7",
        statement: "'Fluctuate' means remaining completely flat and immutable over decades.",
        isTrue: false,
        explanation: "'Fluctuate' means varying and oscillating up and down."
      },
      {
        id: "vq-tf-3-8",
        statement: "'Trajectory' denotes the projected path or forward trend of an entity.",
        isTrue: true,
        explanation: "'Trajectory' describes the progression path over time."
      },
      {
        id: "vq-tf-3-9",
        statement: "'Incentive' is a motivational benefit or reward offered to stimulate an action.",
        isTrue: true,
        explanation: "An incentive provides motivation for economic actors."
      },
      {
        id: "vq-tf-3-10",
        statement: "'Momentum' describes the loss of all speed until complete stoppage.",
        isTrue: false,
        explanation: "'Momentum' is the driving force or ongoing speed of forward motion."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-3-1",
        question: "What was China's reported annual GDP growth rate for the second quarter?",
        options: [
          "1.2 percent",
          "3.8 percent",
          "5.2 percent",
          "9.5 percent"
        ],
        correctIndex: 2,
        explanation: "China posted an annual GDP growth rate of 5.2% in the second quarter."
      },
      {
        id: "rq-mc-3-2",
        question: "Which economic sector showed notable strength and helped drive the quarter's expansion?",
        options: [
          "Residential real estate construction",
          "High-tech manufacturing and clean energy exports",
          "Imported foreign luxury cruise ships",
          "Coal mining in rural provinces"
        ],
        correctIndex: 1,
        explanation: "High-tech manufacturing, clean energy vehicles, and battery exports were key growth engines."
      },
      {
        id: "rq-mc-3-3",
        question: "How did Chinese exporters adapt to rising trade tariffs from Western nations?",
        options: [
          "They ceased all manufacturing operations permanently",
          "They diversified export shipments to Southeast Asia, the Middle East, and Latin America",
          "They dumped all their products into the Pacific Ocean",
          "They refused to use cargo shipping containers"
        ],
        correctIndex: 1,
        explanation: "Exporters diversified their markets towards emerging economies across Asia, Latin America, and the Middle East."
      },
      {
        id: "rq-mc-3-4",
        question: "What remains a significant drag on domestic economic growth according to analysts?",
        options: [
          "Subdued domestic consumer spending and property sector weakness",
          "A total shortage of electricity throughout all provinces",
          "The complete absence of commercial banks",
          "Extreme deflation in high-speed rail tickets"
        ],
        correctIndex: 0,
        explanation: "Sluggish domestic consumer demand and real estate market weakness remain ongoing challenges."
      },
      {
        id: "rq-mc-3-5",
        question: "What policy response is expected from government authorities to maintain economic momentum?",
        options: [
          "Targeted fiscal stimulus, infrastructure support, and consumer incentives",
          "Immediate shutdown of all clean tech factories",
          "Banning all international trade transactions",
          "Doubling personal income taxes for all citizens"
        ],
        correctIndex: 0,
        explanation: "Policymakers are expected to deploy targeted fiscal stimulus and consumer trade-in subsidies."
      }
    ]
  },
  {
    id: "en-art-4",
    title: "Americans could pay more for these items from Mexico and the EU if Trump makes good on his latest tariff threats",
    category: "International Trade & Economics",
    level: "Intermediate",
    source: "CNN Business & Trade Watch",
    sourceUrl: "https://www.cnn.com",
    wordCount: 495,
    estimatedMinutes: 3,
    content: [
      "American consumers and retail businesses may soon encounter higher price tags on a broad array of everyday imported goods if recently proposed trade tariffs against Mexico and the European Union are officially enacted into law.",
      "International trade economists emphasize that import tariffs are not paid directly by foreign governments, but rather by the domestic American importing companies, who invariably pass along these increased border taxes to end consumers in the form of higher retail prices.",
      "Mexico is the largest single trading partner of the United States, providing a substantial proportion of fresh agricultural produce, automotive assemblies, and consumer electronics consumed by American households. A tariff on Mexican imports would directly increase supermarket prices for fresh avocados, tomatoes, berries, and beer, while driving up vehicle repair costs and assembly prices for new passenger cars.",
      "Similarly, proposed retaliatory or punitive duties on goods imported from the European Union could severely inflate the cost of European automobiles, precision aerospace components, pharmaceutical supplies, and luxury consumer goods such as French wine, Italian cheese, and olive oil.",
      "Supply chain analysts warn that sudden tariff hikes can disrupt synchronized just-in-time manufacturing networks, forcing businesses to re-route logistics or absorb reduced profit margins during an already sensitive inflationary climate."
    ],
    vocabList: [
      {
        word: "Enacted",
        phonetic: "/ɪˈnæktɪd/",
        partOfSpeech: "verb",
        definitionEn: "Made into law or put into practice formally.",
        definitionId: "Diundangkan atau diberlakukan secara resmi.",
        exampleSentence: "New tariff legislation was enacted by lawmakers."
      },
      {
        word: "Invariably",
        phonetic: "/ɪnˈvɛəriəbli/",
        partOfSpeech: "adverb",
        definitionEn: "In every case or on every occasion; always.",
        definitionId: "Selalu, tanpa kecuali.",
        exampleSentence: "Importers invariably pass higher customs fees to shoppers."
      },
      {
        word: "Proportion",
        phonetic: "/prəˈpɔːrʃən/",
        partOfSpeech: "noun",
        definitionEn: "A part, share, or number considered in comparative relation to a whole.",
        definitionId: "Proporsi atau bagian dari keseluruhan.",
        exampleSentence: "Mexico supplies a large proportion of winter vegetables."
      },
      {
        word: "Punitive",
        phonetic: "/ˈpjuːnɪtɪv/",
        partOfSpeech: "adjective",
        definitionEn: "Inflicted or intended as punishment.",
        definitionId: "Bersifat menghukum atau sanksi balasan.",
        exampleSentence: "Punitive tariffs were levied on imported European dairy."
      },
      {
        word: "Inflate",
        phonetic: "/ɪnˈfleɪt/",
        partOfSpeech: "verb",
        definitionEn: "Increase the price or value of something artificially or sharply.",
        definitionId: "Menaikkan atau melambungkan harga.",
        exampleSentence: "New border levies could inflate the price of imported wine."
      },
      {
        word: "Disrupt",
        phonetic: "/dɪsˈrʌpt/",
        partOfSpeech: "verb",
        definitionEn: "Interrupt the normal progress, continuity, or operation of something.",
        definitionId: "Mengganggu atau mengacaukan kelancaran proses.",
        exampleSentence: "Port closures disrupt international supply chains."
      },
      {
        word: "Synchronized",
        phonetic: "/ˈsɪŋkrənaɪzd/",
        partOfSpeech: "adjective",
        definitionEn: "Operating or occurring at the exact same time and rate in coordination.",
        definitionId: "Tersinkronisasi atau terkoordinasi secara teratur.",
        exampleSentence: "Modern factories rely on synchronized parts delivery."
      },
      {
        word: "Absorb",
        phonetic: "/əbˈzɔːrb/",
        partOfSpeech: "verb",
        definitionEn: "Take in or bear the financial burden of a cost without passing it on.",
        definitionId: "Menyerap atau menanggung beban biaya sendiri.",
        exampleSentence: "Some retailers absorb higher costs to stay competitive."
      },
      {
        word: "Retaliatory",
        phonetic: "/rɪˈtæliətɔːri/",
        partOfSpeech: "adjective",
        definitionEn: "Characterized by or involving revenge or mutual counteraction.",
        definitionId: "Tindakan balasan terhadap langkah pihak lawan.",
        exampleSentence: "Trading partners responded with retaliatory duties."
      },
      {
        word: "Margin",
        phonetic: "/ˈmɑːrdʒɪn/",
        partOfSpeech: "noun",
        definitionEn: "The difference between the cost of buying or producing something and its selling price.",
        definitionId: "Margin keuntungan antara harga modal dan harga jual.",
        exampleSentence: "Tariffs severely compressed the company's profit margin."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-4-1",
        statement: "'Invariably' means rarely or almost never happening.",
        isTrue: false,
        explanation: "'Invariably' means always, constantly, in every case."
      },
      {
        id: "vq-tf-4-2",
        statement: "'Enacted' describes a bill or rule that has been legally passed into effect.",
        isTrue: true,
        explanation: "When a law is enacted, it takes official legal effect."
      },
      {
        id: "vq-tf-4-3",
        statement: "'Punitive' means intended to reward and praise exemplary behavior.",
        isTrue: false,
        explanation: "'Punitive' means designed as a penalty or punishment."
      },
      {
        id: "vq-tf-4-4",
        statement: "'Synchronized' implies seamless, coordinated timing across multiple systems.",
        isTrue: true,
        explanation: "Synchronized operations occur in harmony and alignment."
      },
      {
        id: "vq-tf-4-5",
        statement: "'Disrupt' means to preserve harmony without any interruptions.",
        isTrue: false,
        explanation: "'Disrupt' means to throw into disorder or cause interruption."
      },
      {
        id: "vq-tf-4-6",
        statement: "'Retaliatory' describes an action taken in response to attack or penalize a rival.",
        isTrue: true,
        explanation: "Retaliatory measures are reciprocal defensive or offensive actions."
      },
      {
        id: "vq-tf-4-7",
        statement: "'Inflate' in economics refers to raising prices or expanding monetary supply.",
        isTrue: true,
        explanation: "To inflate prices means to drive them higher."
      },
      {
        id: "vq-tf-4-8",
        statement: "'Margin' refers to the width of an ocean trench.",
        isTrue: false,
        explanation: "In business, 'margin' refers to the profit difference between cost and price."
      },
      {
        id: "vq-tf-4-9",
        statement: "'Proportion' refers to a relative part or fraction of a whole quantity.",
        isTrue: true,
        explanation: "Proportion measures a share in relation to the entire sum."
      },
      {
        id: "vq-tf-4-10",
        statement: "To 'Absorb' costs means forcing customers to pay three times as much.",
        isTrue: false,
        explanation: "To absorb costs means the business pays the expense out of its own profits."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-4-1",
        question: "Who directly pays import tariffs when foreign goods arrive at United States ports?",
        options: [
          "The foreign president in cash",
          "Domestic American importing businesses at the customs border",
          "International tourists passing through airport security",
          "Foreign farmers in their home country"
        ],
        correctIndex: 1,
        explanation: "Import tariffs are paid directly by domestic importing firms, who often pass the cost to consumers."
      },
      {
        id: "rq-mc-4-2",
        question: "Which of the following supermarket items from Mexico would likely see price increases under tariffs?",
        options: [
          "Fresh avocados, tomatoes, and berries",
          "Locally brewed Vermont maple syrup",
          "Fresh Alaskan salmon caught in Juneau",
          "Wheat harvested in North Dakota"
        ],
        correctIndex: 0,
        explanation: "Mexico is the primary source for agricultural produce like avocados, tomatoes, and fresh berries."
      },
      {
        id: "rq-mc-4-3",
        question: "What European consumer products are highlighted as vulnerable to potential price inflation?",
        options: [
          "European automobiles, specialty cheeses, and wine",
          "Raw timber from the Amazon rainforest",
          "Bananas grown on Caribbean plantations",
          "Crude petroleum pumped in Texas"
        ],
        correctIndex: 0,
        explanation: "European cars, pharmaceuticals, wine, and artisanal cheeses face tariff exposure."
      },
      {
        id: "rq-mc-4-4",
        question: "How do synchronized 'just-in-time' manufacturing networks get impacted by sudden tariffs?",
        options: [
          "They instantly produce goods at zero cost",
          "Component shipments are disrupted and production costs escalate",
          "They eliminate the need for cross-border shipping completely",
          "They automatically receive free government subsidies"
        ],
        correctIndex: 1,
        explanation: "Cross-border component supply chains experience logistical friction and rising input expenses."
      },
      {
        id: "rq-mc-4-5",
        question: "What is the broader economic risk of enacting steep tariffs during an existing inflationary climate?",
        options: [
          "It completely halts all world travel permanently",
          "It can fuel consumer inflation and compress corporate profit margins",
          "It forces all supermarkets to close immediately",
          "It leads to an immediate total surplus of raw metals"
        ],
        correctIndex: 1,
        explanation: "Higher border taxes add upward pressure on retail prices and squeeze company margins."
      }
    ]
  },
  {
    id: "en-art-5",
    title: "The pros and cons of mouth taping for sleep",
    category: "Health & Sleep Medicine",
    level: "Intermediate",
    source: "Sleep Foundation & Henry Ford Health",
    sourceUrl: "https://www.sleepfoundation.org",
    wordCount: 475,
    estimatedMinutes: 2,
    content: [
      "A wellness trend known as 'mouth taping' has recently flooded social media feeds, with enthusiastic lifestyle advocates claiming that taping one's lips closed before bedtime dramatically reduces snoring, stops morning bad breath, and produces transformative deep sleep.",
      "The underlying premise behind mouth taping is to enforce exclusive nasal breathing throughout the night. The human nasal passage is biologically engineered to filter out airborne allergens, humidify incoming air, and stimulate the release of nitric oxide—a signaling molecule that dilates blood vessels and optimizes oxygen delivery to the lungs.",
      "In contrast, chronic mouth breathing during sleep is linked to dry oral tissues, bacterial proliferation causing cavities and halitosis, and fragmented sleep cycles.",
      "While preliminary small-scale studies suggest that encouraging nasal breathing can mitigate mild snoring in select individuals, sleep medicine physicians urge strong caution against treating mouth taping as a universal home remedy.",
      "For individuals suffering from undiagnosed obstructive sleep apnea, nasal congestion from deviated septums, or chronic allergies, physically taping the lips shut can dangerously restrict nocturnal oxygen intake, inducing choking sensations, elevated blood pressure, and sleep panic.",
      "Medical experts stress that anyone experiencing severe chronic snoring or daytime fatigue should undergo a formal clinical sleep study rather than experimenting with unverified social media fads."
    ],
    vocabList: [
      {
        word: "Premise",
        phonetic: "/ˈprɛmɪs/",
        partOfSpeech: "noun",
        definitionEn: "A previous statement or underlying proposition from which another is inferred or followed as a conclusion.",
        definitionId: "Premis atau landasan asumsi dasar suatu argumen.",
        exampleSentence: "The fundamental premise is that nasal breathing is healthier."
      },
      {
        word: "Humidify",
        phonetic: "/hjuːˈmɪdɪfaɪ/",
        partOfSpeech: "verb",
        definitionEn: "Increase the level of moisture or humidity in air or gas.",
        definitionId: "Melembapkan udara sebelum masuk ke paru-paru.",
        exampleSentence: "Nasal passages naturally filter and humidify inhaled air."
      },
      {
        word: "Dilate",
        phonetic: "/daɪˈleɪt/",
        partOfSpeech: "verb",
        definitionEn: "Make or become wider, larger, or more open.",
        definitionId: "Melebarkan atau memperluas rongga pembuluh darah.",
        exampleSentence: "Nitric oxide helps dilate blood vessels for better circulation."
      },
      {
        word: "Proliferation",
        phonetic: "/prəˌlɪfəˈreɪʃən/",
        partOfSpeech: "noun",
        definitionEn: "Rapid increase in numbers or a large multiplication of cells/bacteria.",
        definitionId: "Perkembangbiakan atau perkecambahan bakteri secara cepat.",
        exampleSentence: "Mouth dryness promotes the proliferation of oral bacteria."
      },
      {
        word: "Halitosis",
        phonetic: "/ˌhælɪˈtoʊsɪs/",
        partOfSpeech: "noun",
        definitionEn: "A chronic medical condition of having unpleasant-smelling breath.",
        definitionId: "Bau mulut tidak sedap yang bersifat kronis.",
        exampleSentence: "Chronic dry mouth frequently leads to severe halitosis."
      },
      {
        word: "Fragmented",
        phonetic: "/ˈfræɡmɛntɪd/",
        partOfSpeech: "adjective",
        definitionEn: "Broken into separate, disjointed, or incomplete parts.",
        definitionId: "Terfragmentasi atau terputus-putus tidak nyenyak.",
        exampleSentence: "Airway obstruction results in fragmented, restless sleep."
      },
      {
        word: "Mitigate",
        phonetic: "/ˈmɪtɪɡeɪt/",
        partOfSpeech: "verb",
        definitionEn: "Make less severe, serious, or painful.",
        definitionId: "Meringankan, meredakan, atau mengurangi keparahan.",
        exampleSentence: "Nasal strips may help mitigate mild snoring symptoms."
      },
      {
        word: "Nocturnal",
        phonetic: "/nɒkˈtɜːrnəl/",
        partOfSpeech: "adjective",
        definitionEn: "Done, occurring, or active at night.",
        definitionId: "Terjadi atau aktif pada waktu malam hari.",
        exampleSentence: "Nocturnal oxygen levels must remain steady during sleep."
      },
      {
        word: "Remedy",
        phonetic: "/ˈrɛmɪdi/",
        partOfSpeech: "noun",
        definitionEn: "A medicine or treatment for a disease or injury.",
        definitionId: "Obat, penawar, atau terapi penyembuh.",
        exampleSentence: "Mouth tape is not an appropriate remedy for sleep apnea."
      },
      {
        word: "Undergo",
        phonetic: "/ˌʌndərˈɡoʊ/",
        partOfSpeech: "verb",
        definitionEn: "Experience or be subjected to something, typically a process or testing.",
        definitionId: "Menjalani pemeriksaan atau proses medis.",
        exampleSentence: "Patients should undergo an overnight sleep evaluation."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-5-1",
        statement: "'Dilate' means to shrink and squeeze something into a tight pinhole.",
        isTrue: false,
        explanation: "'Dilate' means to widen, expand, or enlarge."
      },
      {
        id: "vq-tf-5-2",
        statement: "'Humidify' means adding moisture to dry air.",
        isTrue: true,
        explanation: "Humidification increases the water vapor content of air."
      },
      {
        id: "vq-tf-5-3",
        statement: "'Halitosis' is the medical terminology used to describe chronic bad breath.",
        isTrue: true,
        explanation: "'Halitosis' is the clinical name for bad breath."
      },
      {
        id: "vq-tf-5-4",
        statement: "'Mitigate' means to make a problem far more disastrous and agonizing.",
        isTrue: false,
        explanation: "'Mitigate' means to lessen, alleviate, or reduce severity."
      },
      {
        id: "vq-tf-5-5",
        statement: "'Nocturnal' refers to activities taking place during nighttime hours.",
        isTrue: true,
        explanation: "'Nocturnal' relates to the night period."
      },
      {
        id: "vq-tf-5-6",
        statement: "'Proliferation' describes a rapid multiplying growth in numbers.",
        isTrue: true,
        explanation: "'Proliferation' means rapid reproduction or spreading."
      },
      {
        id: "vq-tf-5-7",
        statement: "'Fragmented' sleep means continuous, unbroken, 10-hour deep rest.",
        isTrue: false,
        explanation: "'Fragmented' sleep is broken up by frequent awakenings."
      },
      {
        id: "vq-tf-5-8",
        statement: "'Premise' is the fundamental foundational basis of a theory.",
        isTrue: true,
        explanation: "A premise forms the logical foundation of an argument."
      },
      {
        id: "vq-tf-5-9",
        statement: "A 'Remedy' is a curse that causes irreversible illness.",
        isTrue: false,
        explanation: "A remedy is a cure, treatment, or healing solution."
      },
      {
        id: "vq-tf-5-10",
        statement: "To 'Undergo' a procedure means to experience or submit to it.",
        isTrue: true,
        explanation: "To undergo means to pass through a test or medical process."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-5-1",
        question: "What is the primary physiological benefit of breathing through the nose rather than the mouth?",
        options: [
          "It permanently disables all saliva production",
          "The nasal passage filters, humidifies air, and releases nitric oxide to dilate blood vessels",
          "It stops the heart from beating while sleeping",
          "It causes immediate tooth decay"
        ],
        correctIndex: 1,
        explanation: "Nose breathing filters air, adds humidity, and promotes nitric oxide production for oxygen uptake."
      },
      {
        id: "rq-mc-5-2",
        question: "What negative oral consequence is associated with chronic mouth breathing during sleep?",
        options: [
          "Total loss of taste buds in five minutes",
          "Dry oral tissues and bacterial proliferation leading to bad breath and cavities",
          "Instant bleaching of dental enamel",
          "Immediate growth of wisdom teeth"
        ],
        correctIndex: 1,
        explanation: "Mouth breathing dries saliva, facilitating bacterial growth, bad breath (halitosis), and tooth decay."
      },
      {
        id: "rq-mc-5-3",
        question: "Why can mouth taping be dangerous for individuals with untreated sleep apnea or nasal congestion?",
        options: [
          "It can severely restrict nocturnal oxygen airflow and cause choking sensations",
          "It causes instantaneous hair loss",
          "It makes individuals sleep for several weeks without waking",
          "It turns skin bright green"
        ],
        correctIndex: 0,
        explanation: "Taping the mouth shut when nasal pathways are obstructed can choke and starve the body of oxygen."
      },
      {
        id: "rq-mc-5-4",
        question: "What molecule released during nasal breathing assists with blood vessel dilation?",
        options: [
          "Nitric oxide",
          "Carbon monoxide",
          "Helium fluoride",
          "Sulfur dioxide"
        ],
        correctIndex: 0,
        explanation: "Nitric oxide produced in the paranasal sinuses helps dilate blood vessels."
      },
      {
        id: "rq-mc-5-5",
        question: "What do sleep specialists recommend for people suffering from severe chronic snoring?",
        options: [
          "Applying heavy duct tape across the entire face",
          "Undergoing a professional clinical sleep evaluation study",
          "Drinking boiling water immediately before bed",
          "Ignoring all symptoms forever"
        ],
        correctIndex: 1,
        explanation: "Specialists advise getting a clinical sleep evaluation to diagnose underlying issues like sleep apnea."
      }
    ]
  },
  {
    id: "en-art-6",
    title: "Nearly half of teens say social media is bad for youth mental health, report finds",
    category: "Psychology & Digital Well-being",
    level: "Intermediate",
    source: "Pew Research Center & WTTW News",
    sourceUrl: "https://www.pewresearch.org",
    wordCount: 480,
    estimatedMinutes: 2,
    content: [
      "A comprehensive national survey conducted by the Pew Research Center has revealed a dramatic shift in how American teenagers perceive the influence of digital platforms on their generation's psychological well-being.",
      "According to the survey of teenagers aged 13 to 17 and their parents, nearly half (48 percent) of adolescents now believe that social media exerts a mostly negative effect on people their age. This marks a sharp surge compared to a similar study conducted in 2022, where only 32 percent expressed such concerns.",
      "While teens recognize the widespread toll on their peer group—pointing to sleep deprivation, relentless comparison culture, cyberbullying, and unrealistic beauty standards—only 14 percent believe social media harms them personally. This perceptual gap suggests that many adolescents consider themselves uniquely immune while noticing distress among their friends.",
      "Interestingly, teenagers are increasingly adopting self-regulation strategies. Roughly 48 percent of teen girls and 40 percent of teen boys reported deliberately cutting back on their daily screen time to protect their peace of mind.",
      "At the same time, teens acknowledge dual realities: 74 percent still report feeling more connected to their close friends through messaging platforms, and 63 percent find outlets for creative expression.",
      "Child psychologists note that the findings highlight a growing digital literacy among youth, who are moving away from passive consumption toward conscious boundary-setting."
    ],
    vocabList: [
      {
        word: "Perceive",
        phonetic: "/pərˈsiːv/",
        partOfSpeech: "verb",
        definitionEn: "Become aware or conscious of something; interpret or regard in a particular way.",
        definitionId: "Memandang, mengamati, atau mempersepsikan sesuatu.",
        exampleSentence: "Teens perceive digital platforms differently than adults."
      },
      {
        word: "Exert",
        phonetic: "/ɪɡˈzɜːrt/",
        partOfSpeech: "verb",
        definitionEn: "Apply or bring to bear a force, influence, or quality.",
        definitionId: "Memberikan atau mengerahkan pengaruh/tekanan.",
        exampleSentence: "Social feeds exert tremendous peer pressure on youth."
      },
      {
        word: "Deprivation",
        phonetic: "/ˌdɛprɪˈveɪʃən/",
        partOfSpeech: "noun",
        definitionEn: "The damaging lack of material benefits or essential physiological needs (such as sleep).",
        definitionId: "Kekurangan atau perampasan kebutuhan mendasar (seperti kurang tidur).",
        exampleSentence: "Late-night scrolling leads to severe sleep deprivation."
      },
      {
        word: "Relentless",
        phonetic: "/rɪˈlɛntləs/",
        partOfSpeech: "adjective",
        definitionEn: "Oppressively constant, unyielding, and harsh.",
        definitionId: "Tak henti-hentinya, tanpa jeda, atau tanpa ampun.",
        exampleSentence: "Relentless comparisons undermine adolescent confidence."
      },
      {
        word: "Immune",
        phonetic: "/ɪˈmjuːn/",
        partOfSpeech: "adjective",
        definitionEn: "Not affected or influenced by something; protected from a harm.",
        definitionId: "Kebal atau tidak terpengaruh oleh dampak buruk.",
        exampleSentence: "Many teens assume they are immune to digital addiction."
      },
      {
        word: "Deliberately",
        phonetic: "/dɪˈlɪbərɪtli/",
        partOfSpeech: "adverb",
        definitionEn: "Consciously and intentionally; on purpose.",
        definitionId: "Secara sengaja atau dengan penuh kesadaran.",
        exampleSentence: "She deliberately set a one-hour timer on her apps."
      },
      {
        word: "Outlet",
        phonetic: "/ˈaʊtlɛt/",
        partOfSpeech: "noun",
        definitionEn: "A means of expressing one's talents, energy, or emotions.",
        definitionId: "Wadah penyalur ekspresi atau kreativitas.",
        exampleSentence: "Online art communities provide a creative outlet."
      },
      {
        word: "Surge",
        phonetic: "/sɜːrdʒ/",
        partOfSpeech: "noun",
        definitionEn: "A sudden powerful forward or upward movement; a rapid increase.",
        definitionId: "Lonjakan tajam atau peningkatan cepat.",
        exampleSentence: "Researchers recorded a sharp surge in negative sentiment."
      },
      {
        word: "Literacy",
        phonetic: "/ˈlɪtərəsi/",
        partOfSpeech: "noun",
        definitionEn: "Competence or knowledge in a specified area.",
        definitionId: "Kemampuan literasi atau pemahaman kritis.",
        exampleSentence: "Digital literacy helps users identify deceptive media content."
      },
      {
        word: "Adolescent",
        phonetic: "/ˌædəˈlɛsənt/",
        partOfSpeech: "noun",
        definitionEn: "A young person in the process of developing from a child into an adult; a teenager.",
        definitionId: "Remaja yang berada dalam masa transisi menuju dewasa.",
        exampleSentence: "Adolescents are navigating unprecedented digital environments."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-6-1",
        statement: "'Deprivation' implies having an overwhelming, excessive abundance of something.",
        isTrue: false,
        explanation: "'Deprivation' means lacking or being stripped of something essential."
      },
      {
        id: "vq-tf-6-2",
        statement: "'Relentless' means continuous and unyielding without stopping.",
        isTrue: true,
        explanation: "'Relentless' means constant and persistent."
      },
      {
        id: "vq-tf-6-3",
        statement: "'Deliberately' means acting completely accidentally without any intention.",
        isTrue: false,
        explanation: "'Deliberately' means on purpose, intentionally."
      },
      {
        id: "vq-tf-6-4",
        statement: "'Immune' describes being shielded or resistant against a negative influence.",
        isTrue: true,
        explanation: "'Immune' means resistant, safe, or unaffected."
      },
      {
        id: "vq-tf-6-5",
        statement: "'Surge' refers to a rapid and dramatic increase.",
        isTrue: true,
        explanation: "A 'surge' is a sudden upward spike in numbers or momentum."
      },
      {
        id: "vq-tf-6-6",
        statement: "'Perceive' means to interpret and become conscious of reality through observation.",
        isTrue: true,
        explanation: "To perceive means to observe, understand, and interpret."
      },
      {
        id: "vq-tf-6-7",
        statement: "'Outlet' in psychology refers only to electrical wall plugs for charging phones.",
        isTrue: false,
        explanation: "In psychological context, an outlet is a medium for releasing emotions or creative energy."
      },
      {
        id: "vq-tf-6-8",
        statement: "'Exert' means to apply force or influence upon something.",
        isTrue: true,
        explanation: "To exert means to bring a force or impact into action."
      },
      {
        id: "vq-tf-6-9",
        statement: "'Literacy' refers exclusively to drawing hieroglyphs on stone tablets.",
        isTrue: false,
        explanation: "'Literacy' means competence, understanding, and knowledge in a given domain."
      },
      {
        id: "vq-tf-6-10",
        statement: "'Adolescent' refers to an individual in the teenage stage of life.",
        isTrue: true,
        explanation: "Adolescent is another term for a teenager."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-6-1",
        question: "What percentage of American teens in the recent Pew survey believe social media negatively affects peers?",
        options: [
          "10 percent",
          "25 percent",
          "48 percent",
          "99 percent"
        ],
        correctIndex: 2,
        explanation: "Nearly half (48%) of surveyed teens expressed that social media negatively affects people their age."
      },
      {
        id: "rq-mc-6-2",
        question: "What is the notable 'perceptual gap' identified in the survey findings?",
        options: [
          "Teens believe their friends are completely safe while they alone suffer",
          "Teens see harm occurring to peers broadly, yet only 14% believe it harms them personally",
          "Parents believe teens never use smartphones",
          "Teens claim social media does not exist"
        ],
        correctIndex: 1,
        explanation: "48% see negative impacts on their peer group, but only 14% admit personal negative impact."
      },
      {
        id: "rq-mc-6-3",
        question: "What proactive measure are many teenagers taking regarding their screen time?",
        options: [
          "Throwing away all computers forever",
          "Deliberately setting limits and cutting back on daily usage",
          "Using their phones for 24 hours continuously without blinking",
          "Deleting electricity from their homes"
        ],
        correctIndex: 1,
        explanation: "48% of girls and 40% of boys reported deliberately reducing their social media use."
      },
      {
        id: "rq-mc-6-4",
        question: "What positive benefit do roughly 74 percent of teens still associate with digital platforms?",
        options: [
          "Getting free luxury automobiles",
          "Feeling more connected to their close friends",
          "Never having to attend high school exams",
          "Becoming professional athletes overnight"
        ],
        correctIndex: 1,
        explanation: "74% of teenagers reported that social media helps them feel more connected to friends."
      },
      {
        id: "rq-mc-6-5",
        question: "How did the percentage of teens noting negative peer effects change between 2022 and the latest study?",
        options: [
          "It decreased from 80% to 5%",
          "It increased sharply from 32% to 48%",
          "It remained exactly identical at 0%",
          "It dropped to zero"
        ],
        correctIndex: 1,
        explanation: "Concern jumped from 32% in 2022 to 48% in the latest survey."
      }
    ]
  },
  {
    id: "en-art-7",
    title: "‘Cool’ people tend to have these six things in common, study finds",
    category: "Psychology & Social Science",
    level: "Intermediate",
    source: "Journal of Experimental Psychology & APA",
    sourceUrl: "https://www.apa.org",
    wordCount: 482,
    estimatedMinutes: 2,
    content: [
      "What makes someone truly 'cool'? While popular culture has long linked coolness to aloof detachment, leather jackets, or effortless mystery, groundbreaking psychological research has mapped out the universal personality architecture underlying this elusive social trait.",
      "An extensive international study published in the Journal of Experimental Psychology: General, examining nearly 6,000 participants across 12 diverse countries, discovered that perceptions of coolness are remarkably consistent across cultures, age demographics, and socioeconomic backgrounds.",
      "The researchers identified six core attributes shared by individuals judged as cool: they are extroverted (outgoing and charismatic), hedonistic (possessing a vibrant zest for life and enjoyment), powerful (commanding social influence), adventurous (willing to take calculated risks), open-minded (intellectually curious), and autonomous (self-directed and independent from herd conformity).",
      "Crucially, the study revealed a sharp psychological distinction between being perceived as 'cool' and being viewed as 'good'.",
      "While 'good' individuals are characterized by warmth, conscientiousness, emotional stability, and trustworthiness, 'cool' individuals are admired for status, dynamism, and unconventional agency.",
      "Lead researchers note that coolness functions as an evolutionary heuristic for identifying inspiring innovators who challenge existing social boundaries while maintaining magnetic social presence."
    ],
    vocabList: [
      {
        word: "Aloof",
        phonetic: "/əˈluːf/",
        partOfSpeech: "adjective",
        definitionEn: "Not friendly or forthcoming; cool and distant.",
        definitionId: "Sikap berjarak, dingin, atau menyendiri.",
        exampleSentence: "The old stereotype portrayed cool heroes as emotionally aloof."
      },
      {
        word: "Elusive",
        phonetic: "/ɪˈluːsɪv/",
        partOfSpeech: "adjective",
        definitionEn: "Difficult to find, catch, define, or achieve.",
        definitionId: "Sulit didefinisikan, ditangkap, atau dipahami dengan pasti.",
        exampleSentence: "Coolness has always been an elusive psychological concept."
      },
      {
        word: "Hedonistic",
        phonetic: "/ˌhiːdəˈnɪstɪk/",
        partOfSpeech: "adjective",
        definitionEn: "Engaged in the pursuit of pleasure and self-indulgence.",
        definitionId: "Menikmati kesenangan hidup dan petualangan yang menggembirakan.",
        exampleSentence: "A hedonistic enjoyment of life makes someone engaging to be around."
      },
      {
        word: "Autonomous",
        phonetic: "/ɔːˈtɒnəməs/",
        partOfSpeech: "adjective",
        definitionEn: "Acting independently or having the freedom to do so.",
        definitionId: "Mandiri, independen, dan berprinsip sendiri.",
        exampleSentence: "Autonomous thinkers forge their own paths without following the crowd."
      },
      {
        word: "Conformity",
        phonetic: "/kənˈfɔːrmɪti/",
        partOfSpeech: "noun",
        definitionEn: "Compliance with standards, rules, or laws; behavior in accordance with socially accepted conventions.",
        definitionId: "Konformitas atau kepatuhan buta pada arus mayoritas.",
        exampleSentence: "Cool people tend to reject blind social conformity."
      },
      {
        word: "Conscientiousness",
        phonetic: "/ˌkɒnʃiˈɛnʃəsnəs/",
        partOfSpeech: "noun",
        definitionEn: "The quality of wishing to do one's work or duty well and thoroughly.",
        definitionId: "Sikap berhati-hati, teliti, dan bertanggung jawab moral.",
        exampleSentence: "Conscientiousness is a defining trait of dependable, good individuals."
      },
      {
        word: "Dynamism",
        phonetic: "/ˈdaɪnəmɪzəm/",
        partOfSpeech: "noun",
        definitionEn: "The quality of being characterized by vigorous activity and progress.",
        definitionId: "Dinamisme, keaktifan, dan daya gerak yang energik.",
        exampleSentence: "Her charismatic dynamism drew everyone's attention in the room."
      },
      {
        word: "Agency",
        phonetic: "/ˈeɪdʒənsi/",
        partOfSpeech: "noun",
        definitionEn: "The capacity of individuals to act independently and to make their own free choices.",
        definitionId: "Agensi atau kapasitas seseorang untuk menentukan pilihannya sendiri.",
        exampleSentence: "Demonstrating personal agency inspires admiration in others."
      },
      {
        word: "Heuristic",
        phonetic: "/hjuːˈrɪstɪk/",
        partOfSpeech: "noun",
        definitionEn: "A mental shortcut or rule-of-thumb that allows people to solve problems and make judgments quickly.",
        definitionId: "Jalan pintas mental atau kaidah praktis dalam pengambilan keputusan.",
        exampleSentence: "Coolness serves as a social heuristic for leadership potential."
      },
      {
        word: "Extroverted",
        phonetic: "/ˈɛkstrəvɜːrtɪd/",
        partOfSpeech: "adjective",
        definitionEn: "Outgoing, overtly expressive, and energized by social interactions.",
        definitionId: "Ekstrover, terbuka, dan luwes dalam pergaulan sosial.",
        exampleSentence: "Extroverted individuals easily connect with diverse audiences."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-7-1",
        statement: "'Autonomous' describes an individual who blindly obeys whatever everyone else does.",
        isTrue: false,
        explanation: "'Autonomous' means acting independently and thinking for oneself."
      },
      {
        id: "vq-tf-7-2",
        statement: "'Aloof' means emotionally warm, intimate, and constantly hugging strangers.",
        isTrue: false,
        explanation: "'Aloof' means distant, detached, or reserved."
      },
      {
        id: "vq-tf-7-3",
        statement: "'Hedonistic' in this research context refers to enjoying life's pleasures and experiences.",
        isTrue: true,
        explanation: "Hedonistic reflects finding joy, pleasure, and zest in living."
      },
      {
        id: "vq-tf-7-4",
        statement: "'Conformity' means standing out uniquely and disobeying all social conventions.",
        isTrue: false,
        explanation: "'Conformity' is yielding and adapting behavior to match group standards."
      },
      {
        id: "vq-tf-7-5",
        statement: "'Elusive' implies something difficult to grasp, quantify, or define.",
        isTrue: true,
        explanation: "'Elusive' means slippery or hard to capture/define."
      },
      {
        id: "vq-tf-7-6",
        statement: "'Agency' refers to the autonomous capacity of a person to exert power and choice.",
        isTrue: true,
        explanation: "Agency denotes personal self-determination and action."
      },
      {
        id: "vq-tf-7-7",
        statement: "'Heuristic' is a cognitive mental shortcut used to form quick impressions.",
        isTrue: true,
        explanation: "A heuristic is an intuitive rule-of-thumb processing strategy."
      },
      {
        id: "vq-tf-7-8",
        statement: "'Extroverted' people prefer absolute isolation in dark caves for years.",
        isTrue: false,
        explanation: "'Extroverted' means outgoing, social, and energized by people."
      },
      {
        id: "vq-tf-7-9",
        statement: "'Dynamism' embodies lively energy, enthusiasm, and forceful progress.",
        isTrue: true,
        explanation: "Dynamism signifies vigorous vitality and drive."
      },
      {
        id: "vq-tf-7-10",
        statement: "'Conscientiousness' reflects being organized, thorough, and morally responsible.",
        isTrue: true,
        explanation: "Conscientiousness is marked by diligence and carefulness."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-7-1",
        question: "How many countries were included in the international study on the perception of coolness?",
        options: [
          "Only 1 country",
          "12 diverse countries with nearly 6,000 participants",
          "150 countries",
          "3 countries"
        ],
        correctIndex: 1,
        explanation: "The study surveyed nearly 6,000 participants across 12 countries."
      },
      {
        id: "rq-mc-7-2",
        question: "Which of the following represents one of the six core personality dimensions of 'cool' people?",
        options: [
          "Extreme submissiveness and herd obedience",
          "Autonomous (independent from conformity) and adventurous",
          "Fear of all new experiences and ideas",
          "Complete lack of any social energy"
        ],
        correctIndex: 1,
        explanation: "Autonomous, adventurous, extroverted, powerful, hedonistic, and open-minded are the six traits."
      },
      {
        id: "rq-mc-7-3",
        question: "How does the study contrast being 'cool' with being 'good'?",
        options: [
          "There is no difference between them at all",
          "'Good' is defined by warmth, conscientiousness, and trust, whereas 'cool' is tied to status and unconventional dynamism",
          "'Cool' people are always criminal and evil",
          "'Good' people never have friends"
        ],
        correctIndex: 1,
        explanation: "'Good' people are trusted for warmth and reliability, while 'cool' people are admired for charisma and agency."
      },
      {
        id: "rq-mc-7-4",
        question: "What traditional pop-culture myth about coolness was challenged by this research?",
        options: [
          "That cool people must be aloof, cold, and emotionally detached",
          "That cool people can smile",
          "That cool people wear shoes",
          "That cool people speak languages"
        ],
        correctIndex: 0,
        explanation: "The study showed coolness is active, outgoing, and engaged rather than cold and aloof."
      },
      {
        id: "rq-mc-7-5",
        question: "What evolutionary purpose might the social heuristic of coolness serve?",
        options: [
          "Identifying bold innovators who explore new opportunities and inspire others",
          "Preventing humans from ever forming tribes",
          "Eliminating the need for sleep in mammals",
          "Stopping people from discovering fire"
        ],
        correctIndex: 0,
        explanation: "It helps human groups recognize innovative, autonomous individuals who can break boundaries."
      }
    ]
  },
  {
    id: "en-art-8",
    title: "Chinese swimmers dope-tested the most ahead of World Aquatics Championships",
    category: "Sports & Anti-Doping",
    level: "Intermediate",
    source: "World Aquatics & The Straits Times",
    sourceUrl: "https://www.straitstimes.com",
    wordCount: 470,
    estimatedMinutes: 2,
    content: [
      "Chinese competitive swimmers have undergone the highest frequency of anti-doping tests of any national delegation heading into the World Aquatics Championships in Singapore, according to official oversight figures released by the Aquatics Integrity Unit (AQIU).",
      "The comprehensive audit revealed that Chinese elite swimmers were tested an average of 21 times per athlete across in-competition and out-of-competition inspections between January 2024 and mid-2025. In stark contrast, swimmers representing the United States were tested an average of six times per person, Australian athletes four times, and Italian swimmers five times during the equivalent monitoring window.",
      "The heightened testing protocol was implemented following heightened scrutiny surrounding previous contamination cases involving trimetazidine (TMZ) ahead of the Tokyo Games.",
      "World Aquatics mandated independent global laboratories to handle sample collection, biological passport tracking, and blind mass spectrometry analysis to guarantee complete impartiality.",
      "Officials confirmed that all Chinese athletes selected for the championship roster complied fully with the rigorous testing battery, passing multiple unannounced blood and urine analyses conducted at training camps across Europe and Asia without a single positive violation reported."
    ],
    vocabList: [
      {
        word: "Delegation",
        phonetic: "/ˌdɛlɪˈɡeɪʃən/",
        partOfSpeech: "noun",
        definitionEn: "A body of delegates or representatives; a deputation.",
        definitionId: "Delegasi atau rombongan perwakilan resmi atlet.",
        exampleSentence: "The Chinese swimming delegation arrived in Singapore."
      },
      {
        word: "Scrutiny",
        phonetic: "/ˈskruːtɪni/",
        partOfSpeech: "noun",
        definitionEn: "Critical observation or thorough examination.",
        definitionId: "Pengawasan ketat atau pemeriksaan mendalam.",
        exampleSentence: "Anti-doping bodies placed athletes under intense scrutiny."
      },
      {
        word: "Audit",
        phonetic: "/ˈɔːdɪt/",
        partOfSpeech: "noun",
        definitionEn: "An official inspection of an individual's or organization's accounts or procedures.",
        definitionId: "Audit resmi atau peninjauan data kepatuhan.",
        exampleSentence: "The integrity unit published its annual anti-doping audit."
      },
      {
        word: "Contamination",
        phonetic: "/kənˌtæmɪˈneɪʃən/",
        partOfSpeech: "noun",
        definitionEn: "The action or state of making or being made impure by polluting or poisoning.",
        definitionId: "Kontaminasi atau pencemaran zat luar yang tidak disengaja.",
        exampleSentence: "Kitchen food contamination was investigated during the inquiry."
      },
      {
        word: "Impartiality",
        phonetic: "/ɪmˌpɑːrʃiˈæləti/",
        partOfSpeech: "noun",
        definitionEn: "Equal treatment of all rivals or disputants; fairness.",
        definitionId: "Netralitas, keadilan, dan ketidakberpihakan.",
        exampleSentence: "Third-party labs were hired to ensure absolute impartiality."
      },
      {
        word: "Comply",
        phonetic: "/kəmˈplaɪ/",
        partOfSpeech: "verb",
        definitionEn: "Act in accordance with a wish, command, or regulation.",
        definitionId: "Mematuhi atau tunduk pada aturan yang ditetapkan.",
        exampleSentence: "All swimmers must comply with random testing orders."
      },
      {
        word: "Rigorous",
        phonetic: "/ˈrɪɡərəs/",
        partOfSpeech: "adjective",
        definitionEn: "Extremely thorough, exhaustive, or accurate.",
        definitionId: "Ketat, teliti, dan tanpa kompromi.",
        exampleSentence: "Athletes underwent a rigorous battery of biochemical tests."
      },
      {
        word: "Unannounced",
        phonetic: "/ˌʌnəˈnaʊnst/",
        partOfSpeech: "adjective",
        definitionEn: "Not announced or expected; surprise.",
        definitionId: "Mendadak atau tanpa pemberitahuan sebelumnya.",
        exampleSentence: "Officers conducted unannounced visits to the training camp."
      },
      {
        word: "Equivalent",
        phonetic: "/ɪˈkwɪvələnt/",
        partOfSpeech: "adjective",
        definitionEn: "Equal in value, amount, function, or meaning.",
        definitionId: "Setara atau sepadan dalam periode waktu yang sama.",
        exampleSentence: "Other nations had fewer tests in the equivalent time frame."
      },
      {
        word: "Violation",
        phonetic: "/ˌvaɪəˈleɪʃən/",
        partOfSpeech: "noun",
        definitionEn: "An act of breaking a law, rule, or agreement.",
        definitionId: "Pelanggaran terhadap peraturan resmi.",
        exampleSentence: "No doping violations were recorded during the trials."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-8-1",
        statement: "'Scrutiny' denotes close, critical, and rigorous examination.",
        isTrue: true,
        explanation: "'Scrutiny' means intense, detailed inspection."
      },
      {
        id: "vq-tf-8-2",
        statement: "'Impartiality' means favoring one specific team over all others unfairly.",
        isTrue: false,
        explanation: "'Impartiality' means unbiased neutrality and absolute fairness."
      },
      {
        id: "vq-tf-8-3",
        statement: "'Rigorous' means sloppy, careless, and disorganized.",
        isTrue: false,
        explanation: "'Rigorous' means thorough, strict, and precise."
      },
      {
        id: "vq-tf-8-4",
        statement: "'Unannounced' means conducted without any prior warning or schedule.",
        isTrue: true,
        explanation: "'Unannounced' means surprise testing."
      },
      {
        id: "vq-tf-8-5",
        statement: "'Comply' means following and obeying official protocols.",
        isTrue: true,
        explanation: "To comply is to adhere to regulations."
      },
      {
        id: "vq-tf-8-6",
        statement: "'Violation' is an act of strictly honoring and respecting a rule.",
        isTrue: false,
        explanation: "A 'violation' is a breach or transgression of a rule."
      },
      {
        id: "vq-tf-8-7",
        statement: "'Delegation' is a group representing a country or organization.",
        isTrue: true,
        explanation: "A delegation represents a collective group."
      },
      {
        id: "vq-tf-8-8",
        statement: "'Contamination' refers to accidental adulteration or impurity.",
        isTrue: true,
        explanation: "Contamination involves foreign polluting substances."
      },
      {
        id: "vq-tf-8-9",
        statement: "'Equivalent' means completely unequal and incomparable.",
        isTrue: false,
        explanation: "'Equivalent' means corresponding in amount or value."
      },
      {
        id: "vq-tf-8-10",
        statement: "An 'Audit' is a comprehensive formal review of operational compliance.",
        isTrue: true,
        explanation: "An audit formally verifies accounts and procedures."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-8-1",
        question: "On average, how many anti-doping tests did Chinese swimmers undergo per athlete ahead of the championships?",
        options: [
          "An average of 21 tests per athlete",
          "Zero tests",
          "Exactly 2 tests",
          "Over 1,000 tests"
        ],
        correctIndex: 0,
        explanation: "Chinese swimmers averaged 21 tests per person, the highest of any national team."
      },
      {
        id: "rq-mc-8-2",
        question: "How did the testing frequency of Chinese swimmers compare to American and Australian athletes?",
        options: [
          "Chinese swimmers were tested significantly more often than US (6 tests) and Australian (4 tests) athletes",
          "American swimmers were tested five times more than Chinese athletes",
          "All nations had the exact same single test",
          "Australian swimmers were tested 100 times"
        ],
        correctIndex: 0,
        explanation: "Chinese athletes underwent 21 tests on average compared to 6 for US and 4 for Australian athletes."
      },
      {
        id: "rq-mc-8-3",
        question: "Which independent entity released the official monitoring figures?",
        options: [
          "The Aquatics Integrity Unit (AQIU)",
          "A local high school swim club",
          "An anonymous internet chat room",
          "The municipal government of Paris"
        ],
        correctIndex: 0,
        explanation: "The figures were published in an audit by the Aquatics Integrity Unit (AQIU)."
      },
      {
        id: "rq-mc-8-4",
        question: "How did independent laboratories ensure impartiality during sample analysis?",
        options: [
          "By guessing athlete names from photos",
          "Through blind mass spectrometry and independent biological passport tracking",
          "By asking athletes to test their own samples",
          "By discarding all test tubes immediately"
        ],
        correctIndex: 1,
        explanation: "Impartiality was maintained via blind laboratory analysis and biological passport monitoring."
      },
      {
        id: "rq-mc-8-5",
        question: "What was the outcome of the testing battery for the Chinese championship roster?",
        options: [
          "The entire team was disqualified",
          "All selected swimmers complied with testing and tested clean with zero violations",
          "No tests were ever completed",
          "The team refused to travel to Singapore"
        ],
        correctIndex: 1,
        explanation: "All selected athletes complied with testing and tested clean without any violations reported."
      }
    ]
  },
  {
    id: "en-art-9",
    title: "Nvidia’s Jensen Huang says AI could lead to job losses ‘if the world runs out of ideas’",
    category: "Technology & AI Future",
    level: "Intermediate",
    source: "TechRadar & Livemint",
    sourceUrl: "https://www.techradar.com",
    wordCount: 478,
    estimatedMinutes: 2,
    content: [
      "In a provocative keynote address regarding the future of work in the era of artificial intelligence, Nvidia CEO Jensen Huang challenged the widespread dystopian narrative that AI will inevitably wipe out millions of human careers.",
      "Huang argued that linking AI directly to mass unemployment is a 'lazy narrative' frequently used by corporate executives to justify short-sighted layoffs. Instead, Huang asserted that AI will only precipitate widespread job losses 'if the world runs out of ideas.'",
      "According to Huang, technology throughout history—from the steam engine to personal computers and the internet—has automated repetitive tasks, thereby freeing human workers to solve increasingly complex problems and create entirely new industries that were previously unimaginable.",
      "When software engineers, scientists, and designers use AI to amplify their productivity tenfold, companies do not downsize; rather, they expand their ambitions, develop more ambitious products, and hire more people to tackle bigger challenges.",
      "Furthermore, Huang pointed out that the massive physical infrastructure required to power generative AI—including mega data centers, specialized cooling systems, and green power grids—is driving an unprecedented hiring boom for skilled tradespeople, including electricians, pipefitters, and construction specialists.",
      "Huang concluded that human workers will not be replaced by artificial intelligence itself, but by other human workers who master the art of utilizing AI tools to multiply their creative output."
    ],
    vocabList: [
      {
        word: "Dystopian",
        phonetic: "/dɪsˈtoʊpiən/",
        partOfSpeech: "adjective",
        definitionEn: "Relating to or denoting an imagined state or society where there is great suffering or injustice.",
        definitionId: "Distopia, suram, atau bernuansa kehancuran masa depan.",
        exampleSentence: "Dystopian sci-fi films often depict machines ruling the planet."
      },
      {
        word: "Precipitate",
        phonetic: "/prɪˈsɪpɪteɪt/",
        partOfSpeech: "verb",
        definitionEn: "Cause an event or situation, typically one that is bad or undesirable, to happen suddenly or unexpectedly.",
        definitionId: "Memicu atau mempercepat terjadinya suatu peristiwa buruk.",
        exampleSentence: "Economic panic can precipitate massive market crashes."
      },
      {
        word: "Repetitive",
        phonetic: "/rɪˈpɛtətɪv/",
        partOfSpeech: "adjective",
        definitionEn: "Containing or characterized by repetition, especially when boring or monotonous.",
        definitionId: "Berulang-ulang, monoton, dan membosankan.",
        exampleSentence: "AI handles repetitive data entry so humans can innovate."
      },
      {
        word: "Amplify",
        phonetic: "/ˈæmplɪfaɪ/",
        partOfSpeech: "verb",
        definitionEn: "Increase the volume, strength, or effect of something; magnify.",
        definitionId: "Memperkuat, memperbesar, atau melipatgandakan dampak.",
        exampleSentence: "AI tools amplify human creativity and problem-solving skills."
      },
      {
        word: "Downsize",
        phonetic: "/ˈdaʊnsaɪz/",
        partOfSpeech: "verb",
        definitionEn: "Make a company or organization smaller by eliminating staff positions.",
        definitionId: "Melakukan perampingan karyawan atau memangkas tenaga kerja.",
        exampleSentence: "Growing firms hire more innovators rather than downsize."
      },
      {
        word: "Tradespeople",
        phonetic: "/ˈtreɪdzˌpiːpəl/",
        partOfSpeech: "noun",
        definitionEn: "People skilled in a particular trade or manual craft, such as electricians, carpenters, or plumbers.",
        definitionId: "Pekerja terampil bidang kejuruan teknis (seperti teknisi listrik/mekanik).",
        exampleSentence: "Data centers rely heavily on skilled tradespeople."
      },
      {
        word: "Unprecedented",
        phonetic: "/ʌnˈprɛsɪdɛntɪd/",
        partOfSpeech: "adjective",
        definitionEn: "Never done or known before; extraordinary.",
        definitionId: "Belum pernah terjadi sebelumnya; luar biasa.",
        exampleSentence: "The AI wave created unprecedented demand for clean electricity."
      },
      {
        word: "Provocative",
        phonetic: "/prəˈvɒkətɪv/",
        partOfSpeech: "adjective",
        definitionEn: "Causing annoyance, anger, or another strong reaction, especially deliberately; thought-provoking.",
        definitionId: "Provokatif atau merangsang perdebatan pemikiran yang mendalam.",
        exampleSentence: "His keynote delivered a provocative challenge to standard business dogmas."
      },
      {
        word: "Infrastructure",
        phonetic: "/ˈɪnfrəˌstrʌktʃər/",
        partOfSpeech: "noun",
        definitionEn: "The basic physical and organizational structures and facilities needed for the operation of a society or enterprise.",
        definitionId: "Infrastruktur fisik dan fasilitas dasar penunjang operasional.",
        exampleSentence: "Modern AI demands robust server and electrical infrastructure."
      },
      {
        word: "Ambition",
        phonetic: "/æmˈbɪʃən/",
        partOfSpeech: "noun",
        definitionEn: "A strong desire to do or to achieve something.",
        definitionId: "Ambisi atau cita-cita besar untuk mencapai tujuan baru.",
        exampleSentence: "Higher productivity allows teams to pursue bigger technological ambitions."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-9-1",
        statement: "'Amplify' means to reduce something down to total insignificance.",
        isTrue: false,
        explanation: "'Amplify' means to multiply, enlarge, or strengthen."
      },
      {
        id: "vq-tf-9-2",
        statement: "'Unprecedented' describes something that has never occurred previously in history.",
        isTrue: true,
        explanation: "'Unprecedented' means without prior parallel or record."
      },
      {
        id: "vq-tf-9-3",
        statement: "'Tradespeople' refers to skilled manual professionals like electricians and plumbers.",
        isTrue: true,
        explanation: "Tradespeople possess vocational and technical building skills."
      },
      {
        id: "vq-tf-9-4",
        statement: "'Downsize' means hiring 10,000 additional workers in one afternoon.",
        isTrue: false,
        explanation: "'Downsize' means cutting back on workforce size."
      },
      {
        id: "vq-tf-9-5",
        statement: "'Dystopian' depicts an idyllic paradise of total eternal bliss.",
        isTrue: false,
        explanation: "'Dystopian' refers to a grim, grimly oppressive or ruined future."
      },
      {
        id: "vq-tf-9-6",
        statement: "'Precipitate' can mean causing an outcome to happen rapidly or prematurely.",
        isTrue: true,
        explanation: "To precipitate is to hasten or trigger an event."
      },
      {
        id: "vq-tf-9-7",
        statement: "'Repetitive' describes monotonous tasks that happen over and over again.",
        isTrue: true,
        explanation: "'Repetitive' means recurring routinely."
      },
      {
        id: "vq-tf-9-8",
        statement: "'Infrastructure' refers only to plastic toy bricks.",
        isTrue: false,
        explanation: "'Infrastructure' consists of physical energy grids, transport, and buildings."
      },
      {
        id: "vq-tf-9-9",
        statement: "'Provocative' statements stimulate deep reflection or debate.",
        isTrue: true,
        explanation: "Provocative ideas challenge conventional complacency."
      },
      {
        id: "vq-tf-9-10",
        statement: "'Ambition' is the earnest aspiration and drive to accomplish great feats.",
        isTrue: true,
        explanation: "Ambition is the yearning for higher achievements."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-9-1",
        question: "Under what specific condition did Jensen Huang say AI could cause widespread job losses?",
        options: [
          "If electricity prices drop to zero",
          "Only 'if the world runs out of ideas' and problems to solve",
          "If computer chips are made of copper",
          "If humans stop eating breakfast"
        ],
        correctIndex: 1,
        explanation: "Huang stated that AI would only cause mass unemployment if humans run out of ideas and ambitions."
      },
      {
        id: "rq-mc-9-2",
        question: "What did Huang call the argument linking AI directly to automatic mass unemployment?",
        options: [
          "A brilliant scientific revelation",
          "A 'lazy narrative' used by executives to justify layoffs",
          "The greatest law of mathematics",
          "A constitutional amendment"
        ],
        correctIndex: 1,
        explanation: "He labeled it a 'lazy narrative' used to excuse corporate headcount reductions."
      },
      {
        id: "rq-mc-9-3",
        question: "How does technology historically impact jobs according to Huang?",
        options: [
          "It permanently ends all human employment forever",
          "It automates repetitive chores, freeing people to tackle more complex new problems",
          "It forces everyone to become subsistence farmers",
          "It deletes all known languages"
        ],
        correctIndex: 1,
        explanation: "Technology automates routine work and opens doors for bigger problems and new industries."
      },
      {
        id: "rq-mc-9-4",
        question: "Which manual occupational group is experiencing a hiring boom due to AI data centers?",
        options: [
          "Astronauts navigating Jupiter",
          "Skilled tradespeople like electricians, pipefitters, and construction specialists",
          "Underwater pearl divers",
          "Antique carriage drivers"
        ],
        correctIndex: 1,
        explanation: "Building power grids and cooling systems for AI data centers creates enormous demand for skilled trades."
      },
      {
        id: "rq-mc-9-5",
        question: "According to Huang's conclusion, who will replace human workers in the future?",
        options: [
          "Fully autonomous robots with lasers",
          "Other human workers who master the use of AI tools to multiply their output",
          "Extraterrestrial beings",
          "No one at all"
        ],
        correctIndex: 1,
        explanation: "Humans who utilize AI to augment their abilities will outcompete those who do not."
      }
    ]
  },
  {
    id: "en-art-10",
    title: "Microplastics are choking our waters. Could a sponge made of squid bones help remove them?",
    category: "Environmental Science & Marine Biology",
    level: "Intermediate",
    source: "The Guardian & Dezeen",
    sourceUrl: "https://www.theguardian.com",
    wordCount: 490,
    estimatedMinutes: 3,
    content: [
      "Microscopic plastic particles—shed from synthetic clothing, car tires, and degraded packaging—have infiltrated virtually every aquatic ecosystem on Earth, from remote glacier streams to the deepest ocean trenches.",
      "Now, a team of material scientists from Wuhan University and Guangxi University in China has unveiled an ingenious, bio-inspired filtration technology: a porous, biodegradable sponge synthesized from squid bone and cotton cellulose that can capture up to 99.9 percent of microplastics from contaminated water.",
      "Squid bone, known scientifically as the cuttlebone or gladius, is composed largely of chitin—a durable, naturally abundant biopolymer with remarkable structural and biochemical properties.",
      "By combining chitin nanofibrils with plant-derived cellulose, the researchers engineered a lightweight, fibrous aerogel foam. When water flows through the sponge, the material traps microplastic particles through a dual mechanism of physical pore interception and electrostatic molecular attraction.",
      "Laboratory testing proved that the squid bone sponge effectively purged microplastics from river water, coastal seawater, and industrial wastewater, retaining over 95 percent of its capture efficiency even after being washed and reused multiple times.",
      "Because the sponge is completely non-toxic and biodegradable, scientists envision integrating it into wastewater treatment plants, industrial effluent filters, and household washing machines to trap microplastic fibers at the source before they can enter the marine food web."
    ],
    vocabList: [
      {
        word: "Infiltrate",
        phonetic: "/ˈɪnfɪltreɪt/",
        partOfSpeech: "verb",
        definitionEn: "Enter or gain access to an organization, place, or system surreptitiously and gradually.",
        definitionId: "Menyusup atau merembes masuk ke dalam suatu ekosistem secara bertahap.",
        exampleSentence: "Tiny plastics infiltrate freshwater drinking supplies."
      },
      {
        word: "Porous",
        phonetic: "/ˈpɔːrəs/",
        partOfSpeech: "adjective",
        definitionEn: "Having minute spaces or holes through which liquid or air may pass.",
        definitionId: "Berpori-pori atau memiliki rongga mikro yang dapat dialiri cairan.",
        exampleSentence: "The porous sponge allows water to flow through while trapping debris."
      },
      {
        word: "Biodegradable",
        phonetic: "/ˌbaɪoʊdɪˈɡreɪdəbəl/",
        partOfSpeech: "adjective",
        definitionEn: "Capable of being decomposed by bacteria or other living organisms.",
        definitionId: "Dapat terurai secara alami oleh mikroorganisme tanah/air.",
        exampleSentence: "Chitin is a completely biodegradable marine biopolymer."
      },
      {
        word: "Biopolymer",
        phonetic: "/ˌbaɪoʊˈpɒlɪmər/",
        partOfSpeech: "noun",
        definitionEn: "A polymer produced by living organisms (such as cellulose, chitin, or proteins).",
        definitionId: "Biopolimer atau senyawa polimer alami dari makhluk hidup.",
        exampleSentence: "Squid gladius is rich in strong chitin biopolymer."
      },
      {
        word: "Interception",
        phonetic: "/ˌɪntərˈsɛpʃən/",
        partOfSpeech: "noun",
        definitionEn: "The action of catching, blocking, or preventing someone or something from reaching their destination.",
        definitionId: "Pencegatan atau penangkapan partikel pada pori-pori saringan.",
        exampleSentence: "Physical interception stops microparticles from passing through."
      },
      {
        word: "Electrostatic",
        phonetic: "/ɪˌlɛktroʊˈstætɪk/",
        partOfSpeech: "adjective",
        definitionEn: "Relating to stationary electric charges or fields that attract or repel matter.",
        definitionId: "Elektrostatik atau gaya tarik muatan listrik statis.",
        exampleSentence: "Electrostatic charges pull plastic fragments into the sponge fibers."
      },
      {
        word: "Purge",
        phonetic: "/pɜːrdʒ/",
        partOfSpeech: "verb",
        definitionEn: "Rid an area of an unwanted quality, condition, or substance; cleanse.",
        definitionId: "Membersihkan atau memurnikan air dari zat pencemar.",
        exampleSentence: "The filter can purge microplastics from industrial runoff."
      },
      {
        word: "Effluent",
        phonetic: "/ˈɛfluənt/",
        partOfSpeech: "noun",
        definitionEn: "Liquid waste or sewage discharged into a river or the sea.",
        definitionId: "Limbah cair yang dibuang dari pabrik ke aliran sungai.",
        exampleSentence: "Factory effluent should be filtered before entering waterways."
      },
      {
        word: "Envision",
        phonetic: "/ɪnˈvɪʒən/",
        partOfSpeech: "verb",
        definitionEn: "Imagine as a future possibility; visualize.",
        definitionId: "Membayangkan atau memproyeksikan rencana di masa depan.",
        exampleSentence: "Engineers envision installing filters directly inside home washing machines."
      },
      {
        word: "Ingenious",
        phonetic: "/ɪnˈdʒiːniəs/",
        partOfSpeech: "adjective",
        definitionEn: "Clever, original, and inventive in design or concept.",
        definitionId: "Cerdas, kreatif, dan penuh inovasi brilian.",
        exampleSentence: "The sponge is an ingenious application of marine waste materials."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-10-1",
        statement: "'Biodegradable' materials remain indestructible for a million years in soil.",
        isTrue: false,
        explanation: "'Biodegradable' means capable of naturally decaying and decomposing."
      },
      {
        id: "vq-tf-10-2",
        statement: "'Porous' indicates that a structure is filled with tiny holes and channels.",
        isTrue: true,
        explanation: "'Porous' means permeable with micro-voids."
      },
      {
        id: "vq-tf-10-3",
        statement: "'Infiltrate' means gradually penetrating into an ecosystem or space.",
        isTrue: true,
        explanation: "To infiltrate is to enter or diffuse into a system."
      },
      {
        id: "vq-tf-10-4",
        statement: "'Effluent' refers to clean mountain spring drinking water.",
        isTrue: false,
        explanation: "'Effluent' is wastewater or chemical sewage discharged into water bodies."
      },
      {
        id: "vq-tf-10-5",
        statement: "'Purge' means to cleanse and eliminate contaminants completely.",
        isTrue: true,
        explanation: "To purge means to remove impurities and purify."
      },
      {
        id: "vq-tf-10-6",
        statement: "'Ingenious' describes ideas that are dull, derivative, and completely ineffective.",
        isTrue: false,
        explanation: "'Ingenious' means brilliantly inventive and clever."
      },
      {
        id: "vq-tf-10-7",
        statement: "'Biopolymer' is a polymer produced naturally by biological organisms.",
        isTrue: true,
        explanation: "Biopolymers (like chitin and cellulose) originate from living organisms."
      },
      {
        id: "vq-tf-10-8",
        statement: "'Interception' involves blocking or capturing something along its path.",
        isTrue: true,
        explanation: "Interception is trapping or stopping an item in transit."
      },
      {
        id: "vq-tf-10-9",
        statement: "'Envision' means picturing a future possibility in the mind.",
        isTrue: true,
        explanation: "To envision is to foresee or plan a conceptual future."
      },
      {
        id: "vq-tf-10-10",
        statement: "'Electrostatic' attraction relies on stationary electrical charges between molecules.",
        isTrue: true,
        explanation: "Electrostatic forces attract opposite electrical charges."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-10-1",
        question: "What marine organism's internal skeletal material was utilized to develop the microplastic sponge?",
        options: [
          "Whale blubber",
          "Squid bone (cuttlebone / gladius chitin)",
          "Shark teeth",
          "Jellyfish tentacles"
        ],
        correctIndex: 1,
        explanation: "Squid bone (cuttlebone chitin) was combined with cotton cellulose to create the aerogel sponge."
      },
      {
        id: "rq-mc-10-2",
        question: "What maximum microplastic removal efficiency did the sponge achieve in testing?",
        options: [
          "Up to 99.9 percent",
          "Exactly 5 percent",
          "50 percent",
          "12 percent"
        ],
        correctIndex: 0,
        explanation: "The bio-sponge eliminated up to 99.9% of microplastics from water samples."
      },
      {
        id: "rq-mc-10-3",
        question: "Through what two combined mechanisms does the squid sponge trap microplastics?",
        options: [
          "High heat combustion and radiation",
          "Physical pore interception and electrostatic molecular attraction",
          "Chemical acid melting and gasification",
          "Freezing water into ice blocks"
        ],
        correctIndex: 1,
        explanation: "It captures microplastics via physical pore filtration and electrostatic charges."
      },
      {
        id: "rq-mc-10-4",
        question: "How did the sponge perform after being washed and reused multiple times?",
        options: [
          "It dissolved into poisonous sludge immediately",
          "It maintained over 95 percent of its capture efficiency",
          "It turned into plastic itself",
          "It could never be used more than once"
        ],
        correctIndex: 1,
        explanation: "The sponge retained 95% to 98% effectiveness even after multiple reuse cycles."
      },
      {
        id: "rq-mc-10-5",
        question: "Where do scientists propose installing this technology to stop microplastics before they reach oceans?",
        options: [
          "Inside washing machines, wastewater plants, and factory effluent outlets",
          "Only in outer space satellites",
          "Inside car fuel tanks",
          "Underneath desert sand dunes"
        ],
        correctIndex: 0,
        explanation: "Installing them in washing machines and wastewater treatment facilities prevents plastics from entering oceans."
      }
    ]
  },
  {
    id: "en-art-11",
    title: "The Neuroscience of Burnout: Why Chronic Overwork Hijacks the Brain",
    category: "Mental Health & Neuroscience",
    level: "Upper-Intermediate",
    source: "Harvard Business Review & Scientific American",
    sourceUrl: "https://hbr.org",
    wordCount: 485,
    estimatedMinutes: 3,
    content: [
      "Physical fatigue from a demanding workday can usually be relieved by a restorative night of sleep. However, when exhaustion becomes chronic and is accompanied by emotional detachment, cynicism toward professional duties, and an inability to concentrate, the individual is likely suffering from burnout.",
      "Modern neuroimaging reveals that burnout is far more than temporary tiredness; it represents a neurobiological defense mechanism triggered by prolonged, unmitigated stress. Under persistent pressure, the amygdala—the brain's emotional alarm center—remains trapped in a hyperactive state.",
      "This sustained alarm signals the adrenal glands to continually secrete cortisol and adrenaline. Over extended periods, excessive cortisol levels impair and degrade synaptic connections within the prefrontal cortex, the brain region responsible for working memory, goal-directed decision-making, and emotional self-regulation.",
      "Consequently, individuals undergoing burnout frequently experience severe cognitive brain fog, reduced creative flexibility, and heightened irritability over minor setbacks. The World Health Organization (WHO) has formally classified burnout as an occupational syndrome resulting from chronic workplace stress.",
      "Recovering from burnout requires establishing firm boundaries and providing the nervous system with true restorative pauses. Setting strict digital boundaries—such as disconnecting from workplace messaging channels after hours—is crucial for reducing sympathetic nervous system arousal.",
      "Engaging in regular physical movement in green spaces, practicing diaphragmatic breathing, and taking structured leaves of absence allow the prefrontal cortex to rebuild its neural networks and restore cognitive resilience."
    ],
    vocabList: [
      {
        word: "Restorative",
        phonetic: "/rɪˈstɔːrətɪv/",
        partOfSpeech: "adjective",
        definitionEn: "Having the ability to restore health, strength, or well-being.",
        definitionId: "Memulihkan kesegaran, kesehatan, atau tenaga.",
        exampleSentence: "A restorative weekend helped the executive recover from exhaustion."
      },
      {
        word: "Cynicism",
        phonetic: "/ˈsɪnɪsɪzəm/",
        partOfSpeech: "noun",
        definitionEn: "An inclination to believe that people are motivated purely by self-interest; general skepticism.",
        definitionId: "Sikap sinis atau ketidakpercayaan mendalam terhadap niat orang lain.",
        exampleSentence: "A growing sense of cynicism toward coworkers is a core symptom of burnout."
      },
      {
        word: "Unmitigated",
        phonetic: "/ʌnˈmɪtɪɡeɪtɪd/",
        partOfSpeech: "adjective",
        definitionEn: "Absolute; not softened or lessened in intensity.",
        definitionId: "Tidak berkurang, mutlak, atau tanpa jeda peredam.",
        exampleSentence: "Months of unmitigated pressure took a toll on the team's mental health."
      },
      {
        word: "Amygdala",
        phonetic: "/əˈmɪɡdələ/",
        partOfSpeech: "noun",
        definitionEn: "An almond-shaped structure in the brain involved in experiencing and processing emotions.",
        definitionId: "Struktur berbentuk almon di otak yang memproses rasa takut dan emosi stres.",
        exampleSentence: "Chronic stress keeps the amygdala in an overactive alarm state."
      },
      {
        word: "Impair",
        phonetic: "/ɪmˈpɛər/",
        partOfSpeech: "verb",
        definitionEn: "To weaken or damage something, especially a faculty or function.",
        definitionId: "Merusak, melemahkan, atau mengganggu fungsi normal.",
        exampleSentence: "Elevated cortisol levels can impair synaptic connections in the brain."
      },
      {
        word: "Occupational",
        phonetic: "/ˌɑːkjuˈpeɪʃənl/",
        partOfSpeech: "adjective",
        definitionEn: "Relating to a job or profession.",
        definitionId: "Berhubungan dengan pekerjaan atau profesi.",
        exampleSentence: "Burnout is officially classified as an occupational health issue."
      },
      {
        word: "Irritability",
        phonetic: "/ˌɪrɪtəˈbɪləti/",
        partOfSpeech: "noun",
        definitionEn: "The quality of being easily annoyed or made angry.",
        definitionId: "Sifat mudah tersinggung, lekas marah, atau sensitif.",
        exampleSentence: "High irritability over minor interruptions indicated severe mental strain."
      },
      {
        word: "Arousal",
        phonetic: "/əˈraʊzl/",
        partOfSpeech: "noun",
        definitionEn: "A state of physiological alertness and readiness for action.",
        definitionId: "Kondisi kesiagaan fisiologis dan rangsangan saraf aktif.",
        exampleSentence: "Constant digital notifications maintain sympathetic nervous system arousal."
      },
      {
        word: "Resilience",
        phonetic: "/rɪˈzɪliəns/",
        partOfSpeech: "noun",
        definitionEn: "The capacity to recover quickly from difficulties; psychological toughness.",
        definitionId: "Daya lenting, ketangguhan, atau kemampuan bangkit dari kesulitan.",
        exampleSentence: "Adequate rest restores neural circuits and rebuilds emotional resilience."
      },
      {
        word: "Detachment",
        phonetic: "/dɪˈtætʃmənt/",
        partOfSpeech: "noun",
        definitionEn: "The state of being objective or aloof from emotional involvement.",
        definitionId: "Sikap melepaskan diri, keterasingan emosional, atau ketidakacuhan.",
        exampleSentence: "Emotional detachment from work is a protective shield against overload."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-11-1",
        statement: "The word 'restorative' describes something that drains all bodily energy.",
        isTrue: false,
        explanation: "False. Restorative means having the power to restore health, strength, and vitality."
      },
      {
        id: "vq-tf-11-2",
        statement: "'Cynicism' involves a skeptical, negative outlook on people's motivations.",
        isTrue: true,
        explanation: "True. Cynicism entails deep skepticism and distrust toward others or work."
      },
      {
        id: "vq-tf-11-3",
        statement: "'Unmitigated' means lessened or mild in nature.",
        isTrue: false,
        explanation: "False. Unmitigated means absolute, complete, or not diminished in severity."
      },
      {
        id: "vq-tf-11-4",
        statement: "The 'amygdala' is the brain structure primarily responsible for emotional alarm processing.",
        isTrue: true,
        explanation: "True. The amygdala processes fear and emotional threats in the limbic system."
      },
      {
        id: "vq-tf-11-5",
        statement: "To 'impair' something means to strengthen and improve its efficiency.",
        isTrue: false,
        explanation: "False. Impair means to weaken, damage, or diminish functional capability."
      },
      {
        id: "vq-tf-11-6",
        statement: "An 'occupational' condition is one that relates directly to a person's employment.",
        isTrue: true,
        explanation: "True. Occupational relates to professions, workplaces, and jobs."
      },
      {
        id: "vq-tf-11-7",
        statement: "'Irritability' refers to a calm and unflappable emotional state.",
        isTrue: false,
        explanation: "False. Irritability is the tendency to be easily agitated or annoyed."
      },
      {
        id: "vq-tf-11-8",
        statement: "Physiological 'arousal' involves alertness and stimulation of bodily systems.",
        isTrue: true,
        explanation: "True. Arousal refers to physiological responsiveness and alertness."
      },
      {
        id: "vq-tf-11-9",
        statement: "'Resilience' is the ability to bounce back from stress and adversity.",
        isTrue: true,
        explanation: "True. Psychological resilience allows individuals to recover from setbacks."
      },
      {
        id: "vq-tf-11-10",
        statement: "'Detachment' means becoming passionately involved in every emotional drama.",
        isTrue: false,
        explanation: "False. Detachment is the state of feeling distant, aloof, or emotionally disconnected."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-11-1",
        question: "How does burnout fundamentally differ from ordinary daily fatigue?",
        options: [
          "Ordinary fatigue is cured by vitamins, whereas burnout requires major surgery",
          "Burnout involves chronic exhaustion, cynicism, and cognitive impairment that rest alone does not instantly fix",
          "Burnout only happens to professional athletes during competitions",
          "Ordinary fatigue lasts for years while burnout lasts only ten minutes"
        ],
        correctIndex: 1,
        explanation: "Burnout is marked by prolonged exhaustion, emotional cynicism, and prefrontal cognitive dysfunction."
      },
      {
        id: "rq-mc-11-2",
        question: "What neurobiological structure stays hyperactive during long-term unrelenting stress?",
        options: [
          "The amygdala",
          "The optic chiasm",
          "The olfactory bulb",
          "The spinal cord tendon"
        ],
        correctIndex: 0,
        explanation: "The amygdala acts as the brain's alarm center and remains hyperactive under chronic stress."
      },
      {
        id: "rq-mc-11-3",
        question: "What effect does prolonged high cortisol have on the prefrontal cortex?",
        options: [
          "It permanently doubles mathematical ability",
          "It damages and erodes synaptic connections needed for decision-making and focus",
          "It turns brain tissue into muscle fibers",
          "It completely halts the flow of cerebrospinal fluid"
        ],
        correctIndex: 1,
        explanation: "Excess cortisol erodes synaptic connections in the prefrontal cortex, harming cognitive functions."
      },
      {
        id: "rq-mc-11-4",
        question: "How has the World Health Organization (WHO) classified burnout?",
        options: [
          "As an airborne viral infection",
          "As an occupational syndrome linked to unmanaged workplace stress",
          "As an inherited genetic personality disorder",
          "As a temporary dietary deficiency"
        ],
        correctIndex: 1,
        explanation: "WHO classifies burnout as an occupational phenomenon tied to chronic workplace stress."
      },
      {
        id: "rq-mc-11-5",
        question: "Which of the following is highlighted as a critical first step in neurological recovery from burnout?",
        options: [
          "Drinking five extra cups of double-shot espresso daily",
          "Establishing strict digital boundaries and disconnecting from work communication after hours",
          "Working through weekends without sleep to finish all projects",
          "Completely ignoring physical health"
        ],
        correctIndex: 1,
        explanation: "Setting clear digital boundaries and resting allow the nervous system to leave the high-arousal state."
      }
    ]
  },
  {
    id: "en-art-12",
    title: "The Power of Micro-Habits: Why Tiny Shifts Beat Grand Resolutions",
    category: "Personal Development & Behavioral Science",
    level: "Intermediate",
    source: "Behavioral Scientist & Stanford Behavior Design Lab",
    sourceUrl: "https://behavioralscientist.org",
    wordCount: 480,
    estimatedMinutes: 3,
    content: [
      "Every January, millions of people make sweeping New Year's resolutions, vowing to exercise for two hours every day, eliminate sugar entirely, or read a book every single week. Yet by mid-February, more than eighty percent of these ambitious goals are abandoned in frustration.",
      "Behavioral psychology explains that grand resolutions fail because they demand unsustainable levels of willpower. The brain is an energy-conserving organ that instinctively resists sudden, drastic overhauls of established routines, perceiving massive changes as threats to cognitive stability.",
      "In contrast, behavioral scientists advocate for the strategy of 'micro-habits'—tiny, incremental actions that require negligible effort to execute. By shrinking a target down to an almost trivial scale, such as doing just two push-ups after getting out of bed or reading a single page before turning off the lights, you bypass mental resistance.",
      "Because micro-habits demand minimal motivation, you can consistently maintain them even on days when you feel exhausted or overwhelmed. Consistency is the true engine of habit formation; repeating a behavior embeds neural pathways into the basal ganglia.",
      "Over time, these tiny actions generate powerful positive momentum. Much like compound interest in finance, a one percent improvement sustained over hundreds of days produces profound personal transformation.",
      "The secret to enduring personal growth is not Herculean willpower, but the patient mastery of microscopic daily rituals."
    ],
    vocabList: [
      {
        word: "Sweeping",
        phonetic: "/ˈswiːpɪŋ/",
        partOfSpeech: "adjective",
        definitionEn: "Wide in range or effect; comprehensive and large-scale.",
        definitionId: "Menyeluruh, berskala besar, atau drastis.",
        exampleSentence: "He made sweeping declarations about changing his entire lifestyle."
      },
      {
        word: "Overhaul",
        phonetic: "/ˈoʊvərhɔːl/",
        partOfSpeech: "noun",
        definitionEn: "A thorough examination and complete revision or transformation.",
        definitionId: "Perombakan menyeluruh atau perbaikan total.",
        exampleSentence: "A sudden lifestyle overhaul usually triggers intense psychological resistance."
      },
      {
        word: "Incremental",
        phonetic: "/ˌɪŋkrəˈmɛntl/",
        partOfSpeech: "adjective",
        definitionEn: "Relating to or denoting an increase or addition, especially one of a series on a fixed scale.",
        definitionId: "Bertahap, meningkat sedikit demi sedikit secara konsisten.",
        exampleSentence: "Incremental daily improvements produce dramatic long-term results."
      },
      {
        word: "Negligible",
        phonetic: "/ˈnɛɡlɪdʒəbl/",
        partOfSpeech: "adjective",
        definitionEn: "So small or unimportant as to be not worth considering; insignificant.",
        definitionId: "Sangat kecil, remeh, atau hampir tak terasa.",
        exampleSentence: "Reading one page requires a negligible amount of mental effort."
      },
      {
        word: "Trivial",
        phonetic: "/ˈtrɪviəl/",
        partOfSpeech: "adjective",
        definitionEn: "Of little value or importance.",
        definitionId: "Sederhana, sepele, atau tidak rumit.",
        exampleSentence: "A trivial habit like two daily push-ups is easy to sustain."
      },
      {
        word: "Embed",
        phonetic: "/ɪmˈbɛd/",
        partOfSpeech: "verb",
        definitionEn: "To fix firmly and deeply in a surrounding mass.",
        definitionId: "Menanamkan secara kuat dan mendalam.",
        exampleSentence: "Daily repetition embeds new behavioral loops in neural circuits."
      },
      {
        word: "Momentum",
        phonetic: "/moʊˈmɛntəm/",
        partOfSpeech: "noun",
        definitionEn: "The impetus gained by a moving object or the development of a process.",
        definitionId: "Daya dorong atau momentum kemajuan yang terus bertumbuh.",
        exampleSentence: "Small wins create positive emotional momentum for bigger challenges."
      },
      {
        word: "Compound",
        phonetic: "/kəmˈpaʊnd/",
        partOfSpeech: "verb",
        definitionEn: "To make up for something or to increase exponentially over time through accumulation.",
        definitionId: "Melipatgandakan secara kumulatif dari waktu ke waktu.",
        exampleSentence: "Daily efforts compound into massive personal achievements over months."
      },
      {
        word: "Herculean",
        phonetic: "/ˌhɜːrkjuˈliːən/",
        partOfSpeech: "adjective",
        definitionEn: "Requiring great strength or effort.",
        definitionId: "Membutuhkan tenaga raksasa atau usaha luar biasa besar.",
        exampleSentence: "Building sustainable habits does not require Herculean willpower."
      },
      {
        word: "Ritual",
        phonetic: "/ˈrɪtʃuəl/",
        partOfSpeech: "noun",
        definitionEn: "A series of actions or type of behavior regularly and invariably followed.",
        definitionId: "Rutinitas yang dilakukan secara teratur dan konsisten.",
        exampleSentence: "Her morning journaling ritual set a calm tone for the day."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-12-1",
        statement: "A 'sweeping' change is small, narrow, and barely noticeable.",
        isTrue: false,
        explanation: "False. Sweeping means broad, wide-ranging, and extensive."
      },
      {
        id: "vq-tf-12-2",
        statement: "An 'overhaul' means completely restructuring or renovating a system.",
        isTrue: true,
        explanation: "True. An overhaul is a thorough and complete revision."
      },
      {
        id: "vq-tf-12-3",
        statement: "'Incremental' progress happens in tiny, sequential steps.",
        isTrue: true,
        explanation: "True. Incremental refers to step-by-step, cumulative additions."
      },
      {
        id: "vq-tf-12-4",
        statement: "'Negligible' effort means immense, overwhelming exertion.",
        isTrue: false,
        explanation: "False. Negligible means so small as to be hardly noticeable."
      },
      {
        id: "vq-tf-12-5",
        statement: "'Trivial' things are matters of profound, life-altering importance.",
        isTrue: false,
        explanation: "False. Trivial means of little value, minor, or simple."
      },
      {
        id: "vq-tf-12-6",
        statement: "To 'embed' something means to plant or fix it deeply into a structure.",
        isTrue: true,
        explanation: "True. Embed means to anchor or firmly implant."
      },
      {
        id: "vq-tf-12-7",
        statement: "'Momentum' is the driving force that keeps a process moving forward.",
        isTrue: true,
        explanation: "True. Momentum is forward driving energy."
      },
      {
        id: "vq-tf-12-8",
        statement: "To 'compound' over time means to diminish to zero.",
        isTrue: false,
        explanation: "False. To compound means to accumulate and multiply exponentially."
      },
      {
        id: "vq-tf-12-9",
        statement: "A 'Herculean' task requires very little effort.",
        isTrue: false,
        explanation: "False. Herculean means requiring tremendous, heroic strength."
      },
      {
        id: "vq-tf-12-10",
        statement: "A 'ritual' is a regular, repetitive practice done consistently.",
        isTrue: true,
        explanation: "True. A ritual is a customary, repeated behavioral routine."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-12-1",
        question: "Why do the vast majority of grand New Year's resolutions fail by February?",
        options: [
          "People lack access to fitness apps on their smartphones",
          "Drastic overhauls require unsustainable willpower and trigger the brain's resistance to threat",
          "Calendars change months too rapidly in the winter",
          "There is no legal penalty for breaking a resolution"
        ],
        correctIndex: 1,
        explanation: "Sudden massive changes require excessive willpower and trigger cognitive resistance."
      },
      {
        id: "rq-mc-12-2",
        question: "What is the core principle of a 'micro-habit'?",
        options: [
          "Doing an extreme workout once every three months",
          "Scaling an action down so small that it requires negligible effort and bypasses resistance",
          "Hiring five personal trainers simultaneously",
          "Relying entirely on sheer brute willpower"
        ],
        correctIndex: 1,
        explanation: "Micro-habits reduce actions to tiny scales that require almost no willpower to perform."
      },
      {
        id: "rq-mc-12-3",
        question: "What brain region is mentioned as encoding automated habit loops through repetition?",
        options: [
          "The basal ganglia",
          "The auditory canal",
          "The cornea",
          "The thyroid gland"
        ],
        correctIndex: 0,
        explanation: "Repetition embeds behavioral patterns into the basal ganglia circuits."
      },
      {
        id: "rq-mc-12-4",
        question: "How does the compounding effect work in personal habit formation?",
        options: [
          "Small 1% daily gains accumulate into exponential long-term transformation",
          "It causes all previous skills to vanish immediately",
          "It forces people to pay monetary interest on their habits",
          "It only works if you never sleep"
        ],
        correctIndex: 0,
        explanation: "Daily 1% improvements compound over time into massive personal growth."
      },
      {
        id: "rq-mc-12-5",
        question: "Which of the following is given as an example of a micro-habit in the article?",
        options: [
          "Running a full marathon before breakfast tomorrow",
          "Doing two push-ups or reading a single page of a book",
          "Writing an entire 500-page textbook in one weekend",
          "Fasting for fourteen consecutive days"
        ],
        correctIndex: 1,
        explanation: "Reading one page or doing two push-ups are classic frictionless micro-habits."
      }
    ]
  },
  {
    id: "en-art-13",
    title: "Why We Need 'Third Places': The Architecture of Human Connection",
    category: "Lifestyle & Urban Sociology",
    level: "Upper-Intermediate",
    source: "The Atlantic & Urban Sociology Review",
    sourceUrl: "https://www.theatlantic.com",
    wordCount: 490,
    estimatedMinutes: 3,
    content: [
      "In modern urban life, daily routines are overwhelmingly polarized between two physical realms: the domestic sanctuary of home (the 'first place') and the structured environment of the workplace or school (the 'second place'). While these two domains satisfy basic survival and economic needs, human happiness depends heavily on an often-neglected space: the 'third place'.",
      "The concept was originally coined in 1989 by urban sociologist Ray Oldenburg in his seminal book, 'The Great Good Place'. Third places encompass public and semi-public environments—such as neighborhood coffee houses, public libraries, barbershops, parks, and community gardens—where people gather simply for conversation and companionship.",
      "Unlike workplaces, third places are inherently egalitarian; social status, professional titles, and personal wealth hold no formal power inside them. They serve as great levelers where individuals from diverse socioeconomic backgrounds can engage in organic, spontaneous dialogue.",
      "Unfortunately, rapid urbanization, rising commercial real estate rents, and the rise of digital screens have led to a sharp decline in accessible third places across many cities. When public spaces vanish, rates of loneliness and social fragmentation inevitably surge.",
      "Psychologists note that regular visits to third places instill a profound sense of civic belonging, anchor community identity, and reduce chronic feelings of isolation.",
      "Protecting and revitalizing these communal hubs is not just an urban planning objective, but an urgent public health imperative for combating the modern epidemic of loneliness."
    ],
    vocabList: [
      {
        word: "Polarized",
        phonetic: "/ˈpoʊləraɪzd/",
        partOfSpeech: "adjective",
        definitionEn: "Divided into sharply contrasting groups, sets of opinions, or states.",
        definitionId: "Terbelah menjadi dua kutub yang kontras atau terpisah.",
        exampleSentence: "Daily life has become polarized between home and work."
      },
      {
        word: "Sanctuary",
        phonetic: "/ˈsæŋktʃuɛri/",
        partOfSpeech: "noun",
        definitionEn: "A place of refuge or safety.",
        definitionId: "Tempat perlindungan yang aman, tenang, dan terlindung.",
        exampleSentence: "The quiet library provided a peaceful sanctuary from city noise."
      },
      {
        word: "Domain",
        phonetic: "/doʊˈmeɪn/",
        partOfSpeech: "noun",
        definitionEn: "An area of territory owned or controlled by a ruler or sphere of activity.",
        definitionId: "Ranah, wilayah kekuasaan, atau bidang kehidupan.",
        exampleSentence: "The office is the domain of professional duties and tasks."
      },
      {
        word: "Seminal",
        phonetic: "/ˈsɛmɪnl/",
        partOfSpeech: "adjective",
        definitionEn: "Strongly influencing later developments; groundbreaking.",
        definitionId: "Karya perintis, sangat berpengaruh, atau menjadi rujukan utama.",
        exampleSentence: "Ray Oldenburg's seminal book reshaped modern urban sociology."
      },
      {
        word: "Egalitarian",
        phonetic: "/ɪˌɡælɪˈtɛriən/",
        partOfSpeech: "adjective",
        definitionEn: "Believing in or based on the principle that all people are equal and deserve equal rights and opportunities.",
        definitionId: "Egaliter, berprinsip kesetaraan tanpa memandang kasta atau jabatan.",
        exampleSentence: "A third place offers an egalitarian atmosphere where anyone can sit and chat."
      },
      {
        word: "Leveler",
        phonetic: "/ˈlɛvələr/",
        partOfSpeech: "noun",
        definitionEn: "Something that reduces everyone to the same level or state.",
        definitionId: "Penyama derajat atau faktor yang menghilangkan jurang perbedaan status.",
        exampleSentence: "The public community center acted as a great social leveler."
      },
      {
        word: "Spontaneous",
        phonetic: "/spɑːnˈteɪniəs/",
        partOfSpeech: "adjective",
        definitionEn: "Performed or occurring as a result of a sudden impulse without premeditation.",
        definitionId: "Spontan, wajar, dan terjadi secara alami tanpa paksaan.",
        exampleSentence: "Third places foster spontaneous conversations between strangers."
      },
      {
        word: "Fragmentation",
        phonetic: "/ˌfræɡmɛnˈteɪʃn/",
        partOfSpeech: "noun",
        definitionEn: "The process or state of breaking or being broken into small or separate parts.",
        definitionId: "Perpecahan, keterpisahan, atau disintegrasi sosial.",
        exampleSentence: "The loss of communal parks contributes to neighborhood social fragmentation."
      },
      {
        word: "Anchor",
        phonetic: "/ˈæŋkər/",
        partOfSpeech: "verb",
        definitionEn: "To provide with a firm basis or foundation; ground securely.",
        definitionId: "Menambatkan, mengokohkan, atau menjadi tumpuan utama.",
        exampleSentence: "Local coffee shops help anchor community identity in urban areas."
      },
      {
        word: "Imperative",
        phonetic: "/ɪmˈpɛrətɪv/",
        partOfSpeech: "noun",
        definitionEn: "An essential or urgent thing; a vital duty.",
        definitionId: "Keharusan mutlak, urgensi penting yang wajib dipenuhi.",
        exampleSentence: "Preserving public gathering spaces is a pressing civic imperative."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-13-1",
        statement: "'Polarized' describes things that are blended into a uniform, indistinguishable mix.",
        isTrue: false,
        explanation: "False. Polarized means divided into distinct, opposing extremes."
      },
      {
        id: "vq-tf-13-2",
        statement: "A 'sanctuary' is a safe haven or place of refuge.",
        isTrue: true,
        explanation: "True. A sanctuary provides shelter and peace."
      },
      {
        id: "vq-tf-13-3",
        statement: "A 'domain' refers to a sphere of activity, knowledge, or territory.",
        isTrue: true,
        explanation: "True. Domain refers to a territory or specific realm."
      },
      {
        id: "vq-tf-13-4",
        statement: "A 'seminal' work is an insignificant publication that nobody remembers.",
        isTrue: false,
        explanation: "False. Seminal means highly influential, landmark, and pioneering."
      },
      {
        id: "vq-tf-13-5",
        statement: "'Egalitarian' environments treat all individuals as equal peers.",
        isTrue: true,
        explanation: "True. Egalitarian means based on equality of all people."
      },
      {
        id: "vq-tf-13-6",
        statement: "A 'leveler' creates immense wealth inequality between citizens.",
        isTrue: false,
        explanation: "False. A leveler removes social distinctions and brings people to an equal footing."
      },
      {
        id: "vq-tf-13-7",
        statement: "'Spontaneous' interactions happen naturally without being rigidly planned.",
        isTrue: true,
        explanation: "True. Spontaneous means occurring naturally and impulsively."
      },
      {
        id: "vq-tf-13-8",
        statement: "Social 'fragmentation' means high solidarity and close connection.",
        isTrue: false,
        explanation: "False. Fragmentation means breaking apart into isolated, separate pieces."
      },
      {
        id: "vq-tf-13-9",
        statement: "To 'anchor' a community means to give it a solid, grounding foundation.",
        isTrue: true,
        explanation: "True. Anchor means to provide firm stability and grounding."
      },
      {
        id: "vq-tf-13-10",
        statement: "An 'imperative' is an optional suggestion that can easily be ignored.",
        isTrue: false,
        explanation: "False. An imperative is an urgent, essential requirement."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-13-1",
        question: "Who originally coined the sociological concept of the 'Third Place'?",
        options: [
          "Ray Oldenburg",
          "Sigmund Freud",
          "Charles Darwin",
          "Steve Jobs"
        ],
        correctIndex: 0,
        explanation: "Ray Oldenburg introduced the concept in his 1989 book 'The Great Good Place'."
      },
      {
        id: "rq-mc-13-2",
        question: "What are the designated 'first' and 'second' places in urban sociology?",
        options: [
          "The gym and the grocery store",
          "Home (first place) and the workplace/school (second place)",
          "The airport and the train station",
          "The bank and the hospital"
        ],
        correctIndex: 1,
        explanation: "Home is the first place and work/school is the second place."
      },
      {
        id: "rq-mc-13-3",
        question: "Why are third places described as inherently 'egalitarian'?",
        options: [
          "Because people must show their tax returns upon entering",
          "Because formal status, job titles, and wealth do not grant privileges there",
          "Because everyone must wear identical uniforms",
          "Because only millionaires are legally permitted to visit"
        ],
        correctIndex: 1,
        explanation: "Third places treat all visitors equally regardless of wealth or status."
      },
      {
        id: "rq-mc-13-4",
        question: "What major consequence occurs when third places disappear from urban neighborhoods?",
        options: [
          "Global internet connectivity speeds up instantly",
          "Rates of chronic loneliness and social isolation surge",
          "All traffic congestion permanently ends",
          "Houses build themselves automatically"
        ],
        correctIndex: 1,
        explanation: "The erosion of third places fuels the epidemic of loneliness and social fragmentation."
      },
      {
        id: "rq-mc-13-5",
        question: "Which of the following is an authentic example of a traditional third place?",
        options: [
          "A locked private executive boardroom",
          "A neighborhood coffee house, public library, or community garden",
          "A solo prison cell",
          "An underground automated server facility"
        ],
        correctIndex: 1,
        explanation: "Public libraries, cafes, parks, and community gardens are archetypal third places."
      }
    ]
  },
  {
    id: "en-art-14",
    title: "The Lost Art of Monotasking: Reclaiming Deep Focus in a Distracted Era",
    category: "Self-Development & Cognitive Science",
    level: "Intermediate",
    source: "MIT Technology Review & Cal Newport Studies",
    sourceUrl: "https://www.technologyreview.com",
    wordCount: 475,
    estimatedMinutes: 3,
    content: [
      "In contemporary work culture, the ability to 'multitask'—answering emails while attending a virtual conference and drafting a project report simultaneously—was long lauded as a badge of elite productivity. However, cognitive neuroscience has definitively shattered this myth.",
      "The human brain does not possess the neurological architecture to process multiple attention-demanding cognitive tasks in parallel. What people casually refer to as multitasking is actually 'rapid task-switching', a process where the prefrontal cortex repeatedly redirects its focus back and forth between disparate streams.",
      "Every time the brain switches tasks, it pays a steep cognitive toll known as 'attention residue'. Dr. Sophie Leroy, an organizational researcher, demonstrated that when you pivot from Task A to Task B, a portion of your cognitive bandwidth remains tethered to the previous task, degrading memory retention and problem-solving accuracy.",
      "Frequent task-switching also triggers the release of stress hormones, leaving individuals feeling mentally exhausted even after completing very little meaningful work.",
      "The antidote to this chronic mental fragmentation is 'monotasking'—dedicating uninterrupted blocks of time to a single objective. By creating a distraction-free sanctuary and silencing non-essential alerts, workers can enter a state of 'flow', where deep creative insight occurs.",
      "In an attention economy saturated with relentless pings, the disciplined practice of doing one thing at a time has become the ultimate competitive advantage."
    ],
    vocabList: [
      {
        word: "Lauded",
        phonetic: "/ˈlɔːdɪd/",
        partOfSpeech: "adjective",
        definitionEn: "Highly praised or admired.",
        definitionId: "Dipuji-puji, diagung-agungkan, atau disanjung.",
        exampleSentence: "Multitasking was once lauded as a vital modern workplace skill."
      },
      {
        word: "Disparate",
        phonetic: "/ˈdɪspərət/",
        partOfSpeech: "adjective",
        definitionEn: "Essentially different in kind; not allowing comparison.",
        definitionId: "Sangat berlainan, berbeda jenis, atau tidak serasi.",
        exampleSentence: "Switching between disparate tasks exhausts cognitive resources."
      },
      {
        word: "Residue",
        phonetic: "/ˈrɛzɪduː/",
        partOfSpeech: "noun",
        definitionEn: "A small amount of something that remains after the main part has gone or been taken.",
        definitionId: "Sisa, endapan, atau residu yang tertinggal.",
        exampleSentence: "Attention residue from the previous email hindered his writing focus."
      },
      {
        word: "Bandwidth",
        phonetic: "/ˈbændwɪdθ/",
        partOfSpeech: "noun",
        definitionEn: "The mental capacity required to deal with situations or information.",
        definitionId: "Kapasitas kognitif atau daya tampung pikiran untuk memproses beban kerja.",
        exampleSentence: "Constant interruptions reduce the mental bandwidth available for creative thought."
      },
      {
        word: "Tethered",
        phonetic: "/ˈtɛðərd/",
        partOfSpeech: "adjective",
        definitionEn: "Tied or fastened with a rope or chain; figuratively bound.",
        definitionId: "Terikat, tertambat, atau masih melekat pada sesuatu.",
        exampleSentence: "His attention remained tethered to the unresolved meeting argument."
      },
      {
        word: "Antidote",
        phonetic: "/ˈæntɪdoʊt/",
        partOfSpeech: "noun",
        definitionEn: "Something that counteracts an unpleasant feeling or situation.",
        definitionId: "Penawar, obat penangkal, atau solusi pereda.",
        exampleSentence: "Monotasking is the ideal antidote to constant digital distraction."
      },
      {
        word: "Fragmentation",
        phonetic: "/ˌfræɡmɛnˈteɪʃn/",
        partOfSpeech: "noun",
        definitionEn: "The breakdown of something into small or distinct parts.",
        definitionId: "Pecahnya konsentrasi menjadi potongan-potongan kecil yang terpencar.",
        exampleSentence: "Continuous pings cause severe mental fragmentation throughout the day."
      },
      {
        word: "Flow",
        phonetic: "/floʊ/",
        partOfSpeech: "noun",
        definitionEn: "A state of complete absorption and focus in an activity.",
        definitionId: "Kondisi konsentrasi penuh dan hanyut dalam aktivitas yang produktif.",
        exampleSentence: "When in a state of flow, hours pass without any feeling of fatigue."
      },
      {
        word: "Saturated",
        phonetic: "/ˈsætʃəreɪtɪd/",
        partOfSpeech: "adjective",
        definitionEn: "Holding as much of something as can be absorbed; thoroughly filled.",
        definitionId: "Jenuh, penuh sesak, atau terlampau padat.",
        exampleSentence: "Our daily lives are saturated with digital alerts and notifications."
      },
      {
        word: "Relentless",
        phonetic: "/rɪˈlɛntləs/",
        partOfSpeech: "adjective",
        definitionEn: "Oppressively constant; unyielding.",
        definitionId: "Tanpa henti, gigih tanpa jeda, atau gencar.",
        exampleSentence: "The relentless flow of notifications disrupts deep thinking."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-14-1",
        statement: "To be 'lauded' means to be universally criticized and condemned.",
        isTrue: false,
        explanation: "False. Lauded means highly praised and celebrated."
      },
      {
        id: "vq-tf-14-2",
        statement: "'Disparate' items are completely identical and uniform.",
        isTrue: false,
        explanation: "False. Disparate means distinctly different and unrelated in kind."
      },
      {
        id: "vq-tf-14-3",
        statement: "'Residue' refers to the portion or traces left behind after an action.",
        isTrue: true,
        explanation: "True. Residue is the remaining remainder of something."
      },
      {
        id: "vq-tf-14-4",
        statement: "Mental 'bandwidth' refers to your available cognitive capacity.",
        isTrue: true,
        explanation: "True. Bandwidth colloquially means mental processing capacity."
      },
      {
        id: "vq-tf-14-5",
        statement: "Being 'tethered' means being completely free and unbound.",
        isTrue: false,
        explanation: "False. Tethered means bound, tied down, or attached."
      },
      {
        id: "vq-tf-14-6",
        statement: "An 'antidote' counteracts a poison, defect, or negative state.",
        isTrue: true,
        explanation: "True. An antidote serves as a cure or neutralizing agent."
      },
      {
        id: "vq-tf-14-7",
        statement: "Mental 'fragmentation' is the state of having laser-focused, unified attention.",
        isTrue: false,
        explanation: "False. Fragmentation means broken into scattered, disjointed pieces."
      },
      {
        id: "vq-tf-14-8",
        statement: "The psychological state of 'flow' involves deep absorption in an activity.",
        isTrue: true,
        explanation: "True. Flow is an immersive, energized state of intense concentration."
      },
      {
        id: "vq-tf-14-9",
        statement: "A 'saturated' environment has plenty of empty space left.",
        isTrue: false,
        explanation: "False. Saturated means completely filled or soaked to full capacity."
      },
      {
        id: "vq-tf-14-10",
        statement: "'Relentless' interruptions happen continuously without pausing.",
        isTrue: true,
        explanation: "True. Relentless means unyielding and constant."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-14-1",
        question: "What does cognitive neuroscience reveal about the concept of multitasking?",
        options: [
          "The human brain can easily handle eight complex tasks at the same instant",
          "True multitasking is a myth; the brain actually engages in rapid, costly task-switching",
          "Multitasking permanently enlarges the occipital lobe",
          "Listening to music while walking is impossible for mammals"
        ],
        correctIndex: 1,
        explanation: "Neuroscience proves the brain cannot process multiple attention-heavy tasks simultaneously; it rapidly switches."
      },
      {
        id: "rq-mc-14-2",
        question: "What is 'attention residue' as documented by researcher Dr. Sophie Leroy?",
        options: [
          "Physical dust that accumulates on computer monitors",
          "A lingering portion of cognitive bandwidth that remains stuck on a prior task when you switch to a new one",
          "A neurotransmitter produced only during sleep",
          "The memory of what you ate for breakfast"
        ],
        correctIndex: 1,
        explanation: "Attention residue means part of your mental focus stays tied to the previous task after switching."
      },
      {
        id: "rq-mc-14-3",
        question: "What physiological consequence frequently accompanies rapid, frequent task-switching?",
        options: [
          "A massive drop in body temperature",
          "The release of stress hormones leading to cognitive exhaustion",
          "Instantaneous athletic prowess",
          "Total loss of eyesight"
        ],
        correctIndex: 1,
        explanation: "Frequent task-switching triggers stress hormones and leaves individuals mentally drained."
      },
      {
        id: "rq-mc-14-4",
        question: "What is the practice of 'monotasking'?",
        options: [
          "Refusing to work more than five minutes per week",
          "Dedicating focused, uninterrupted blocks of time to a single objective",
          "Using only one finger to type on a keyboard",
          "Buying only one brand of clothing"
        ],
        correctIndex: 1,
        explanation: "Monotasking is the disciplined practice of focusing deeply on one single task at a time."
      },
      {
        id: "rq-mc-14-5",
        question: "Why has monotasking become a distinct competitive advantage today?",
        options: [
          "Because computers can no longer perform math",
          "Because disciplined, sustained deep focus is rare in an era saturated with digital distractions",
          "Because companies have banned the use of electricity",
          "Because nobody reads books anymore"
        ],
        correctIndex: 1,
        explanation: "In a world of constant pings and fragmented attention, deep focus is a rare and powerful capability."
      }
    ]
  },
  {
    id: "en-art-15",
    title: "Understanding the Negativity Bias: How Evolution Shaped Our News Diet",
    category: "Mental Health & Evolutionary Psychology",
    level: "Intermediate",
    source: "Psychology Today & Berkeley Greater Good",
    sourceUrl: "https://www.psychologytoday.com",
    wordCount: 482,
    estimatedMinutes: 3,
    content: [
      "Have you ever received ten genuine compliments on a presentation along with one mild criticism, and spent the entire evening fixated exclusively on that single negative remark? This asymmetrical focus on painful experiences is not a personal character flaw, but a universal human trait known as the 'negativity bias'.",
      "From an evolutionary perspective, our prehistoric ancestors lived in environments filled with lethal hazards, including predatory animals, food scarcity, and hostile tribes. For an early hominid, ignoring a sign of danger could result in immediate death, whereas overlooking a pleasant fruit tree was merely a missed opportunity.",
      "Consequently, natural selection favored brain wiring that registers, amplifies, and stores negative stimuli far more vigorously than positive stimuli. The amygdala devotes a disproportionate number of its neurons to processing threats and alarms.",
      "In the contemporary world, modern media and social media algorithms weaponize this ancient evolutionary bias. Headings that evoke fear, outrage, or catastrophe generate substantially higher click-through rates and user engagement, flooding our digital feeds with despair.",
      "Prolonged exposure to doom-laden news feeds distorts our perception of reality, making the world seem exponentially more dangerous and hopeless than it actually is.",
      "Overcoming the negativity bias requires conscious media hygiene and intentional gratitude practices to allow the brain to register and savor constructive, positive realities."
    ],
    vocabList: [
      {
        word: "Asymmetrical",
        phonetic: "/ˌeɪsɪˈmɛtrɪkl/",
        partOfSpeech: "adjective",
        definitionEn: "Having two sides or halves that are not balanced or equal.",
        definitionId: "Asimetris, berat sebelah, atau tidak seimbang.",
        exampleSentence: "We have an asymmetrical focus on bad news over good news."
      },
      {
        word: "Fixated",
        phonetic: "/ˈfɪkseɪtɪd/",
        partOfSpeech: "adjective",
        definitionEn: "Obsessively attached to or thinking about someone or something.",
        definitionId: "Terpaku, terobsesi, atau terpusat tanpa henti pada satu hal.",
        exampleSentence: "She remained fixated on the single negative comment in her review."
      },
      {
        word: "Lethal",
        phonetic: "/ˈliːθl/",
        partOfSpeech: "adjective",
        definitionEn: "Sufficient to cause death; deadly.",
        definitionId: "Mematikan, membinasakan, atau membawa maut.",
        exampleSentence: "Early humans faced lethal threats from predatory wild beasts."
      },
      {
        word: "Scarcity",
        phonetic: "/ˈskɛrsəti/",
        partOfSpeech: "noun",
        definitionEn: "The state of being in short supply; shortage.",
        definitionId: "Kelangkaan, kekurangan pasokan, atau keterbatasan sumber daya.",
        exampleSentence: "Food scarcity compelled hunter-gatherers to remain hypervigilant."
      },
      {
        word: "Hominid",
        phonetic: "/ˈhɑːmɪnɪd/",
        partOfSpeech: "noun",
        definitionEn: "A primate of a family that includes humans and their fossil ancestors.",
        definitionId: "Manusia purba atau anggota keluarga primata kerabat manusia.",
        exampleSentence: "Survival for an early hominid required spotting hidden predators quickly."
      },
      {
        word: "Disproportionate",
        phonetic: "/ˌdɪsprəˈpɔːrʃənət/",
        partOfSpeech: "adjective",
        definitionEn: "Too large or too small in comparison with something else; out of proportion.",
        definitionId: "Tidak proporsional, terlampau besar atau timpang.",
        exampleSentence: "The brain allocates a disproportionate amount of attention to perceived danger."
      },
      {
        word: "Weaponize",
        phonetic: "/ˈwɛpənaɪz/",
        partOfSpeech: "verb",
        definitionEn: "To exploit or adapt something for use as a weapon or manipulative tool.",
        definitionId: "Memanfaatkan sesuatu sebagai senjata atau alat manipulasi.",
        exampleSentence: "Digital algorithms weaponize fear to maximize screen engagement."
      },
      {
        word: "Catastrophe",
        phonetic: "/kəˈtæstrəfi/",
        partOfSpeech: "noun",
        definitionEn: "An event causing great and often sudden damage or suffering; a disaster.",
        definitionId: "Malapetaka, bencana besar, atau kehancuran mendadak.",
        exampleSentence: "News stories covering imminent catastrophe attract instant clicks."
      },
      {
        word: "Distorts",
        phonetic: "/dɪˈstɔːrts/",
        partOfSpeech: "verb",
        definitionEn: "Gives a misleading or false account or impression of something.",
        definitionId: "Mendistorsi, memutarbalikkan, atau membuat kesan keliru.",
        exampleSentence: "Consuming only negative headlines distorts our worldview."
      },
      {
        word: "Savor",
        phonetic: "/ˈseɪvər/",
        partOfSpeech: "verb",
        definitionEn: "To enjoy or appreciate something completely.",
        definitionId: "Menikmati, meresapi, dan menghargai dengan penuh kesadaran.",
        exampleSentence: "Taking time to savor positive moments rewires the nervous system."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-15-1",
        statement: "An 'asymmetrical' reaction is perfectly balanced and identical on both sides.",
        isTrue: false,
        explanation: "False. Asymmetrical means unbalanced or unequal."
      },
      {
        id: "vq-tf-15-2",
        statement: "Being 'fixated' on something means paying obsessive, intense attention to it.",
        isTrue: true,
        explanation: "True. Fixated means obsessed with or focused unhealthily on one thing."
      },
      {
        id: "vq-tf-15-3",
        statement: "A 'lethal' hazard is completely harmless and safe.",
        isTrue: false,
        explanation: "False. Lethal means capable of causing death; deadly."
      },
      {
        id: "vq-tf-15-4",
        statement: "'Scarcity' refers to an extreme shortage or lack of resources.",
        isTrue: true,
        explanation: "True. Scarcity means insufficiency or shortage."
      },
      {
        id: "vq-tf-15-5",
        statement: "A 'hominid' is a species of marine crustacean living deep in the sea.",
        isTrue: false,
        explanation: "False. A hominid is an early human ancestor or primate."
      },
      {
        id: "vq-tf-15-6",
        statement: "A 'disproportionate' share means an unequal or out-of-balance portion.",
        isTrue: true,
        explanation: "True. Disproportionate means not in proper balance or ratio."
      },
      {
        id: "vq-tf-15-7",
        statement: "To 'weaponize' a bias means to exploit it aggressively for profit or power.",
        isTrue: true,
        explanation: "True. Weaponize means using something as an exploitative instrument."
      },
      {
        id: "vq-tf-15-8",
        statement: "A 'catastrophe' is a joyful, festive celebration.",
        isTrue: false,
        explanation: "False. A catastrophe is a disastrous event causing great suffering."
      },
      {
        id: "vq-tf-15-9",
        statement: "If information 'distorts' your view, it gives a skewed, inaccurate impression.",
        isTrue: true,
        explanation: "True. To distort means to misrepresent or bend the truth."
      },
      {
        id: "vq-tf-15-10",
        statement: "To 'savor' an experience means to throw it away immediately in disgust.",
        isTrue: false,
        explanation: "False. To savor means to appreciate, relish, and enjoy thoroughly."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-15-1",
        question: "What is the psychological 'negativity bias'?",
        options: [
          "A medical condition where a person is allergic to color photography",
          "The universal tendency of human brains to weigh negative events more heavily than positive ones",
          "The habit of writing only in black ink",
          "A preference for winter over summer"
        ],
        correctIndex: 1,
        explanation: "The negativity bias causes human brains to prioritize and remember negative stimuli over positive ones."
      },
      {
        id: "rq-mc-15-2",
        question: "Why was the negativity bias evolutionarily advantageous for prehistoric ancestors?",
        options: [
          "It helped them learn how to write computer software faster",
          "Ignoring a life-threatening danger led to death, while missing a positive opportunity was survivable",
          "It made wild berries taste significantly sweeter",
          "It prevented all dental cavities in early hominids"
        ],
        correctIndex: 1,
        explanation: "Hypervigilance for threats was essential for survival against lethal prehistoric hazards."
      },
      {
        id: "rq-mc-15-3",
        question: "How do modern social media algorithms exploit this evolutionary trait?",
        options: [
          "By deleting any news articles about global politics",
          "By promoting alarming, fearful headlines that generate higher clicks and user engagement",
          "By charging users money every time they smile at a video",
          "By turning off smartphones during evening hours"
        ],
        correctIndex: 1,
        explanation: "Algorithms amplify outrage and fear because negative emotions yield maximum click-through rates."
      },
      {
        id: "rq-mc-15-4",
        question: "What is a major mental consequence of consuming continuous doom-laden news feeds?",
        options: [
          "Immediate fluency in five ancient languages",
          "A distorted worldview that perceives life as vastly more dangerous and hopeless than it is",
          "A sudden desire to manufacture microplastics",
          "Permanent immunity to physical illnesses"
        ],
        correctIndex: 1,
        explanation: "Doomscrolling skews perspective, leading to heightened anxiety and a feeling of global hopelessness."
      },
      {
        id: "rq-mc-15-5",
        question: "What practical recommendation is given to counterbalance the negativity bias?",
        options: [
          "Practicing intentional gratitude and establishing mindful media hygiene habits",
          "Looking at a screen for sixteen consecutive hours without blinking",
          "Never speaking to another human being again",
          "Ignoring all medical advice from doctors"
        ],
        correctIndex: 0,
        explanation: "Practicing gratitude and media hygiene helps retrain the brain to notice and savor positive events."
      }
    ]
  },
  {
    id: "en-art-16",
    title: "The Circadian Revolution: How Morning Sunlight Transforms Sleep and Vitality",
    category: "Lifestyle & Sleep Biology",
    level: "Upper-Intermediate",
    source: "Nature Neuroscience & Huberman Lab Research",
    sourceUrl: "https://www.nature.com",
    wordCount: 485,
    estimatedMinutes: 3,
    content: [
      "Many people rely on multiple cups of dark coffee to shake off morning grogginess, yet they find themselves tossing and turning restlessly when their head hits the pillow at night. The true master switch for human energy and sleep architecture is not caffeine, but photons of natural sunlight.",
      "Deep within the brain's hypothalamus sits the suprachiasmatic nucleus (SCN), a tiny cluster of approximately twenty thousand neurons that acts as the body's central circadian master clock. The SCN coordinates everything from hormone production and body temperature to cellular repair cycles.",
      "Specialized photoreceptor cells in the eye, known as intrinsically photosensitive retinal ganglion cells (ipRGCs), contain a photopigment called melanopsin. These cells are particularly sensitive to the blue-yellow wavelength spectrum found in early morning daylight.",
      "When morning sunlight strikes these retinal cells, it sends an immediate electrical signal to the SCN. This signal triggers a healthy spike in cortisol to promote morning alertness and simultaneously starts a biological countdown timer.",
      "Approximately twelve to fourteen hours after morning light exposure, the pineal gland begins synthesizing melatonin, the hormone necessary for deep, restorative slumber.",
      "Conversely, viewing bright artificial screens late at night fools the SCN into believing it is still midday, delaying melatonin release and causing chronic insomnia. Spending just ten to fifteen minutes outside in the morning sunlight sets the foundation for peak daytime vitality and profound nighttime rest."
    ],
    vocabList: [
      {
        word: "Grogginess",
        phonetic: "/ˈɡrɑːɡinəs/",
        partOfSpeech: "noun",
        definitionEn: "The state of being dazed, sluggish, or unsteady after waking.",
        definitionId: "Rasa pening, limbung, atau mengantuk berat setelah bangun tidur.",
        exampleSentence: "Morning sunlight clears grogginess faster than an espresso shot."
      },
      {
        word: "Photon",
        phonetic: "/ˈfoʊtɑːn/",
        partOfSpeech: "noun",
        definitionEn: "A particle representing a quantum of light or other electromagnetic radiation.",
        definitionId: "Foton, partikel dasar pembawa gelombang cahaya.",
        exampleSentence: "Photons from early daylight stimulate photoreceptors in the eye."
      },
      {
        word: "Suprachiasmatic",
        phonetic: "/ˌsuːprəkæzˈmætɪk/",
        partOfSpeech: "adjective",
        definitionEn: "Relating to the region of the hypothalamus that functions as the master circadian pacemaker.",
        definitionId: "Terkait nukleus suprakiasmatik, pusat kendali jam biologis di otak.",
        exampleSentence: "The suprachiasmatic nucleus coordinates all 24-hour bodily cycles."
      },
      {
        word: "Photoreceptor",
        phonetic: "/ˌfoʊtoʊrɪˈsɛptər/",
        partOfSpeech: "noun",
        definitionEn: "A structure in a living organism, especially a sensory cell or sense organ, that responds to light falling on it.",
        definitionId: "Fotoreseptor, sel saraf penerima rangsangan cahaya pada retina.",
        exampleSentence: "Retinal photoreceptor cells detect early morning wavelengths."
      },
      {
        word: "Melanopsin",
        phonetic: "/ˌmɛləˈnɑːpsɪn/",
        partOfSpeech: "noun",
        definitionEn: "A photopigment found in specialized retinal ganglion cells that is involved in circadian entrainment.",
        definitionId: "Melanopsin, pigmen peka cahaya pada sel retina untuk ritme sirkadian.",
        exampleSentence: "Melanopsin reacts specifically to the bright spectrum of natural sky light."
      },
      {
        word: "Slumber",
        phonetic: "/ˈslʌmbər/",
        partOfSpeech: "noun",
        definitionEn: "A sleep or period of sleeping.",
        definitionId: "Tidur yang lelap, nyenyak, dan tenang.",
        exampleSentence: "Proper melatonin synthesis allows for a night of deep, peaceful slumber."
      },
      {
        word: "Synthesizing",
        phonetic: "/ˈsɪnθəsaɪzɪŋ/",
        partOfSpeech: "verb",
        definitionEn: "Producing a chemical compound by combining simpler substances.",
        definitionId: "Mensintesis, memproduksi senyawa kimia alami di dalam tubuh.",
        exampleSentence: "The pineal gland begins synthesizing melatonin in darkness."
      },
      {
        word: "Entrain",
        phonetic: "/ɪnˈtreɪn/",
        partOfSpeech: "verb",
        definitionEn: "To determine or modify the phase or period of a circadian rhythm.",
        definitionId: "Menyelaraskan atau mencocokkan ritme biologis dengan waktu alam.",
        exampleSentence: "Outdoor light entrains your internal clock to the 24-hour solar cycle."
      },
      {
        word: "Vitality",
        phonetic: "/vaɪˈtæləti/",
        partOfSpeech: "noun",
        definitionEn: "The state of being strong, active, and full of energy.",
        definitionId: "Vitalitas, kebugaran, dan semangat hidup berenergi.",
        exampleSentence: "Daily sunlight exposure provides sustained physical vitality."
      },
      {
        word: "Architecture",
        phonetic: "/ˈɑːrkɪtɛktʃər/",
        partOfSpeech: "noun",
        definitionEn: "The complex structural design or organization of a biological process.",
        definitionId: "Struktur atau tahapan organisasi proses tidur (sleep architecture).",
        exampleSentence: "Blue light exposure disrupts natural sleep architecture and cycles."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-16-1",
        statement: "'Grogginess' is the state of feeling intensely energetic and alert.",
        isTrue: false,
        explanation: "False. Grogginess is feeling dazed, foggy, and lethargic upon waking."
      },
      {
        id: "vq-tf-16-2",
        statement: "A 'photon' is a fundamental particle of light.",
        isTrue: true,
        explanation: "True. Photons are elementary particles of electromagnetic light energy."
      },
      {
        id: "vq-tf-16-3",
        statement: "The 'suprachiasmatic nucleus' governs the body's internal circadian clock.",
        isTrue: true,
        explanation: "True. The SCN is the master clock in the hypothalamus."
      },
      {
        id: "vq-tf-16-4",
        statement: "A 'photoreceptor' is a cell that cannot detect or process light.",
        isTrue: false,
        explanation: "False. Photoreceptors are specialized light-detecting sensory cells."
      },
      {
        id: "vq-tf-16-5",
        statement: "'Melanopsin' is a light-sensitive pigment in retinal ganglion cells.",
        isTrue: true,
        explanation: "True. Melanopsin responds strongly to natural blue-yellow light wavelengths."
      },
      {
        id: "vq-tf-16-6",
        statement: "'Slumber' is another word for deep, peaceful sleep.",
        isTrue: true,
        explanation: "True. Slumber means restorative sleep."
      },
      {
        id: "vq-tf-16-7",
        statement: "To 'synthesize' a hormone means to destroy and eliminate it.",
        isTrue: false,
        explanation: "False. Synthesize means to create, generate, or produce biologically."
      },
      {
        id: "vq-tf-16-8",
        statement: "To 'entrain' a biological clock means to synchronize it with the solar environment.",
        isTrue: true,
        explanation: "True. Entrainment aligns internal circadian rhythms with external environmental cues."
      },
      {
        id: "vq-tf-16-9",
        statement: "'Vitality' refers to a state of total weakness and decay.",
        isTrue: false,
        explanation: "False. Vitality means vigorous physical health, energy, and liveliness."
      },
      {
        id: "vq-tf-16-10",
        statement: "Sleep 'architecture' refers to the structured stages and cycles of healthy sleep.",
        isTrue: true,
        explanation: "True. Sleep architecture denotes the structural pattern of REM and non-REM sleep phases."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-16-1",
        question: "What master biological regulator in the hypothalamus governs human 24-hour circadian rhythms?",
        options: [
          "The suprachiasmatic nucleus (SCN)",
          "The lumbar vertebrae",
          "The gall bladder",
          "The Achilles tendon"
        ],
        correctIndex: 0,
        explanation: "The suprachiasmatic nucleus acts as the body's primary circadian master clock."
      },
      {
        id: "rq-mc-16-2",
        question: "What specialized photopigment in retinal ganglion cells detects natural morning daylight wavelengths?",
        options: [
          "Hemoglobin",
          "Melanopsin",
          "Chlorophyll",
          "Keratin"
        ],
        correctIndex: 1,
        explanation: "Melanopsin in retinal ganglion cells triggers circadian signals to the brain."
      },
      {
        id: "rq-mc-16-3",
        question: "How does morning sunlight exposure initiate the nighttime sleep cycle?",
        options: [
          "It destroys all melatonin receptors forever",
          "It triggers morning cortisol alertness and starts an internal timer for melatonin release 12-14 hours later",
          "It forces the brain to fall asleep immediately within 3 minutes",
          "It freezes the optic nerve temporarily"
        ],
        correctIndex: 1,
        explanation: "Morning light starts a biological timer that promotes melatonin synthesis 12 to 14 hours later."
      },
      {
        id: "rq-mc-16-4",
        question: "What happens when someone views intense artificial blue light late at night?",
        options: [
          "It resets their credit score automatically",
          "It tricks the SCN into thinking it is daytime, delaying melatonin release and disrupting sleep",
          "It instantly cures all known diseases",
          "It turns light bulbs into solar panels"
        ],
        correctIndex: 1,
        explanation: "Nighttime blue light tricks the master clock into delaying sleep hormone production."
      },
      {
        id: "rq-mc-16-5",
        question: "What simple daily habit is recommended to anchor optimal circadian health?",
        options: [
          "Spending 10 to 15 minutes outside in natural morning sunlight",
          "Drinking six energy drinks before going to bed",
          "Staring into dark closets all day",
          "Sleeping exclusively with stadium lights on"
        ],
        correctIndex: 0,
        explanation: "Getting 10-15 minutes of outdoor morning sunlight properly entrains the circadian clock."
      }
    ]
  },
  {
    id: "en-art-17",
    title: "The Art of Solitude: Why Being Alone Is Not the Same as Loneliness",
    category: "Mental Health & Philosophy",
    level: "Intermediate",
    source: "BBC Future & Journal of Social Psychology",
    sourceUrl: "https://www.bbc.com/future",
    wordCount: 478,
    estimatedMinutes: 3,
    content: [
      "In a hyper-connected society that constantly praises extroversion and social networking, spending time alone is often misconstrued as a sign of antisocial behavior or pathetic loneliness. However, philosophers and psychologists have long drawn a sharp distinction between loneliness and intentional solitude.",
      "Loneliness is a subjective feeling of emotional deficit—the painful ache of desiring human connection while feeling painfully isolated, alienated, or misunderstood. One can feel acutely lonely even while surrounded by hundreds of people in a crowded room.",
      "Solitude, on the other hand, is the state of being alone without being lonely. It is an intentional, constructive practice of self-communion where one retreats from social demands to replenish mental reserves, reflect on personal values, and engage in creative exploration.",
      "Neuroscientists have found that when we step away from external conversations and digital pings, the brain activates the 'Default Mode Network' (DMN). This network is responsible for self-reflection, autobiographical memory consolidation, and ethical reasoning.",
      "Without regular periods of solitude, our thoughts become merely reactive echoes of other people's opinions and cultural trends.",
      "Learning to be comfortable with your own company is not an act of social withdrawal, but the foundation of emotional sovereignty and genuine self-knowledge."
    ],
    vocabList: [
      {
        word: "Misconstrued",
        phonetic: "/ˌmɪskənˈstruːd/",
        partOfSpeech: "adjective",
        definitionEn: "Interpreted wrongly; misunderstood.",
        definitionId: "Disalahartikan, disalahpahami, atau keliru ditafsirkan.",
        exampleSentence: "Her quiet solitude was misconstrued by coworkers as cold hostility."
      },
      {
        word: "Deficit",
        phonetic: "/ˈdɛfɪsɪt/",
        partOfSpeech: "noun",
        definitionEn: "A deficiency or lack of something desirable.",
        definitionId: "Kekurangan, ketimpangan, atau ketiadaan sesuatu yang diharapkan.",
        exampleSentence: "Loneliness is an emotional deficit of meaningful companionship."
      },
      {
        word: "Alienated",
        phonetic: "/ˈeɪliəneɪtɪd/",
        partOfSpeech: "adjective",
        definitionEn: "Experiencing or inducing feelings of isolation or estrangement.",
        definitionId: "Terasing, merasa terisolasi, atau merasa disisihkan.",
        exampleSentence: "He felt alienated from the noisy crowd at the gala."
      },
      {
        word: "Solitude",
        phonetic: "/ˈsɑːlətuːd/",
        partOfSpeech: "noun",
        definitionEn: "The state or situation of being alone, especially when peaceful and pleasant.",
        definitionId: "Kesendirian yang damai, disengaja, dan memperkaya batin.",
        exampleSentence: "She enjoyed the tranquil solitude of walking in the pine forest."
      },
      {
        word: "Communion",
        phonetic: "/kəˈmjuːnjən/",
        partOfSpeech: "noun",
        definitionEn: "The sharing or exchanging of intimate thoughts and feelings.",
        definitionId: "Hubungan intim, dialog batin yang mendalam.",
        exampleSentence: "Solitude offers quiet communion with your inner self."
      },
      {
        word: "Autobiographical",
        phonetic: "/ˌɔːtəˌbaɪəˈɡræfɪkl/",
        partOfSpeech: "adjective",
        definitionEn: "Dealing with the writer's or person's own life.",
        definitionId: "Terkait riwayat hidup pribadi dan pengalaman masa lalu sendiri.",
        exampleSentence: "The brain organizes autobiographical memories during quiet contemplation."
      },
      {
        word: "Consolidation",
        phonetic: "/kənˌsɑːlɪˈdeɪʃn/",
        partOfSpeech: "noun",
        definitionEn: "The action or process of making something stronger, more solid, or unified.",
        definitionId: "Konsolidasi, penguatan dan penataan kembali memori di otak.",
        exampleSentence: "Memory consolidation occurs when external distractions are minimized."
      },
      {
        word: "Reactive",
        phonetic: "/riˈæktɪv/",
        partOfSpeech: "adjective",
        definitionEn: "Acting in response to a situation rather than creating or controlling it.",
        definitionId: "Reaktif, sekadar merespons rangsangan luar tanpa inisiatif sendiri.",
        exampleSentence: "Without quiet time, our thoughts become purely reactive to social media."
      },
      {
        word: "Sovereignty",
        phonetic: "/ˈsɑːvrɪnti/",
        partOfSpeech: "noun",
        definitionEn: "Supreme power or authority; complete autonomy and self-governance.",
        definitionId: "Kedaulatan diri, kemandirian mutlak, atau kendali penuh atas hidup.",
        exampleSentence: "Embracing solitude establishes emotional sovereignty."
      },
      {
        word: "Replenish",
        phonetic: "/rɪˈplɛnɪʃ/",
        partOfSpeech: "verb",
        definitionEn: "To fill something up again; restore to a former level or condition.",
        definitionId: "Mengisi kembali, memulihkan energi yang terkuras.",
        exampleSentence: "A weekend in nature replenished her depleted mental reserves."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-17-1",
        statement: "A 'misconstrued' idea is understood with complete accuracy and precision.",
        isTrue: false,
        explanation: "False. Misconstrued means misunderstood or incorrectly interpreted."
      },
      {
        id: "vq-tf-17-2",
        statement: "An emotional 'deficit' represents a shortage or lack of what is needed.",
        isTrue: true,
        explanation: "True. Deficit means a shortage or deficiency."
      },
      {
        id: "vq-tf-17-3",
        statement: "Feeling 'alienated' means feeling warmly included and celebrated by everyone.",
        isTrue: false,
        explanation: "False. Alienated means feeling isolated, disconnected, and estranged."
      },
      {
        id: "vq-tf-17-4",
        statement: "'Solitude' refers to peaceful, enriching time spent alone by choice.",
        isTrue: true,
        explanation: "True. Solitude is constructive and voluntary time alone."
      },
      {
        id: "vq-tf-17-5",
        statement: "Inner 'communion' means deep, meaningful connection with oneself.",
        isTrue: true,
        explanation: "True. Communion means intimate mental or spiritual exchange."
      },
      {
        id: "vq-tf-17-6",
        statement: "'Autobiographical' memories deal with the lives of ancient dinosaurs exclusively.",
        isTrue: false,
        explanation: "False. Autobiographical relates to your own personal life story and memories."
      },
      {
        id: "vq-tf-17-7",
        statement: "Memory 'consolidation' is the process of stabilizing and integrating memories in the brain.",
        isTrue: true,
        explanation: "True. Consolidation strengthens and solidifies neural memory traces."
      },
      {
        id: "vq-tf-17-8",
        statement: "A 'reactive' mindset means taking calm, proactive control of every decision.",
        isTrue: false,
        explanation: "False. Reactive means passively responding to external stimuli."
      },
      {
        id: "vq-tf-17-9",
        statement: "Emotional 'sovereignty' means complete autonomy and self-mastery over one's state.",
        isTrue: true,
        explanation: "True. Sovereignty means independent self-governance."
      },
      {
        id: "vq-tf-17-10",
        statement: "To 'replenish' means to completely drain and destroy energy reserves.",
        isTrue: false,
        explanation: "False. Replenish means to refill and restore energy."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-17-1",
        question: "How do psychologists fundamentally distinguish loneliness from solitude?",
        options: [
          "Loneliness only occurs at night, while solitude occurs before sunrise",
          "Loneliness is an unwanted, painful emotional deficit, whereas solitude is an intentional, constructive state of peaceful aloneness",
          "Loneliness requires living on a desert island",
          "There is no difference between them whatsoever"
        ],
        correctIndex: 1,
        explanation: "Loneliness is a painful emotional lack, while solitude is voluntary, restorative time alone."
      },
      {
        id: "rq-mc-17-2",
        question: "What neural network becomes active when we step away from external distractions into quiet reflection?",
        options: [
          "The Default Mode Network (DMN)",
          "The Auditory Cortex Relay",
          "The Spinal Reflex Arc",
          "The Motor Cortex Accelerator"
        ],
        correctIndex: 0,
        explanation: "The Default Mode Network engages during self-reflection and autobiographical processing."
      },
      {
        id: "rq-mc-17-3",
        question: "Can someone experience acute loneliness while surrounded by a large crowd of people?",
        options: [
          "No, physical proximity to any human makes loneliness biologically impossible",
          "Yes, because loneliness is a subjective feeling of disconnection, not simply physical isolation",
          "Only if everyone in the room is wearing green shirts",
          "Only in temperatures below freezing"
        ],
        correctIndex: 1,
        explanation: "Loneliness is a subjective feeling of emotional isolation that can occur in any crowd."
      },
      {
        id: "rq-mc-17-4",
        question: "What happens to our thinking if we never take time for quiet solitude?",
        options: [
          "Our thoughts risk becoming purely reactive echoes of other people's opinions and trends",
          "We develop permanent superhero telepathy",
          "Our brain stops needing any sleep at night",
          "We forget how to speak our native language within three days"
        ],
        correctIndex: 0,
        explanation: "Without solitude, thoughts become reactive echoes of external societal pressures."
      },
      {
        id: "rq-mc-17-5",
        question: "According to the article, what is the ultimate value of learning to enjoy one's own company?",
        options: [
          "It establishes emotional sovereignty and true self-knowledge",
          "It guarantees you will never need to buy groceries again",
          "It eliminates the need for all human laws",
          "It turns you into a professional hermit"
        ],
        correctIndex: 0,
        explanation: "Comfort with solitude builds inner emotional autonomy and genuine self-knowledge."
      }
    ]
  },
  {
    id: "en-art-18",
    title: "How Language Shapes Thought: The Fascinating World of Linguistic Relativity",
    category: "Culture & Cognitive Linguistics",
    level: "Upper-Intermediate",
    source: "Stanford Cognitive Science & Linguistic Inquiry",
    sourceUrl: "https://linguistics.stanford.edu",
    wordCount: 488,
    estimatedMinutes: 3,
    content: [
      "Does the language you speak merely serve as a convenient vehicle for expressing universal thoughts, or does the grammatical architecture of your mother tongue actively mold how you perceive color, space, and time? This question lies at the heart of the 'Sapir-Whorf hypothesis', also known as linguistic relativity.",
      "For decades, mainstream linguists assumed that human cognitive categories were biologically uniform and independent of language. However, groundbreaking cross-cultural experiments over the past twenty years have revealed stunning evidence to the contrary.",
      "Consider the Guugu Yimithirr Aboriginal community in northern Australia. Their language lacks relative spatial terms like 'left', 'right', 'in front of', or 'behind'. Instead, they rely exclusively on absolute cardinal directions: north, south, east, and west.",
      "A Guugu Yimithirr speaker would ask you to move your coffee cup 'a little to the north-northwest'. As a result of this linguistic requirement, members of this community maintain a miraculous, instinctive internal compass, always knowing their exact geographic orientation even in windowless rooms.",
      "Similarly, languages like Russian and Greek distinguish between light blue and dark blue as distinct basic color categories, rather than shades of one color. Brain scans show that native Russian speakers exhibit faster subconscious neural discrimination when differentiating blue hues than English speakers.",
      "These findings demonstrate that language is not just a passive tool for communication, but a dynamic lens that profoundly shapes human perception and cognitive experience."
    ],
    vocabList: [
      {
        word: "Relativity",
        phonetic: "/ˌrɛləˈtɪvəti/",
        partOfSpeech: "noun",
        definitionEn: "The dependence of a mental concept or phenomenon on a specific framework or viewpoint.",
        definitionId: "Relativitas, keterikatan cara pandang pada kerangka bahasa tertentu.",
        exampleSentence: "Linguistic relativity suggests language influences how we think."
      },
      {
        word: "Linguistic",
        phonetic: "/lɪŋˈɡwɪstɪk/",
        partOfSpeech: "adjective",
        definitionEn: "Relating to language or the study of language.",
        definitionId: "Linguistik, berkaitan dengan ilmu bahasa atau tata bahasa.",
        exampleSentence: "Linguistic diversity reflects diverse ways of interpreting reality."
      },
      {
        word: "Architecture",
        phonetic: "/ˈɑːrkɪtɛktʃər/",
        partOfSpeech: "noun",
        definitionEn: "The conceptual structure or organization of a system.",
        definitionId: "Struktur konseptual atau tata susun tata bahasa.",
        exampleSentence: "The grammatical architecture of a language shapes spatial awareness."
      },
      {
        word: "Cardinal",
        phonetic: "/ˈkɑːrdɪnl/",
        partOfSpeech: "adjective",
        definitionEn: "Of the greatest importance; or relating to the four main points of the compass.",
        definitionId: "Kardinal, mengacu pada empat arah mata angin utama (utara, selatan, timur, barat).",
        exampleSentence: "They use cardinal directions like north and south instead of left and right."
      },
      {
        word: "Aboriginal",
        phonetic: "/ˌæbəˈrɪdʒənl/",
        partOfSpeech: "adjective",
        definitionEn: "Inhabiting or existing in a land from the earliest times or from before the arrival of colonists.",
        definitionId: "Pribumi asli, khususnya suku Aborigin Australia.",
        exampleSentence: "The Aboriginal community developed an extraordinary spatial orientation system."
      },
      {
        word: "Discrimination",
        phonetic: "/dɪˌskrɪmɪˈneɪʃn/",
        partOfSpeech: "noun",
        definitionEn: "The cognitive recognition and understanding of the difference between one thing and another.",
        definitionId: "Daya membedakan secara peka dan presisi antardua stimulus.",
        exampleSentence: "Their brains showed faster neural discrimination between shades of blue."
      },
      {
        word: "Hue",
        phonetic: "/hjuː/",
        partOfSpeech: "noun",
        definitionEn: "A color or shade of a color.",
        definitionId: "Corak, gradasi, atau rona warna.",
        exampleSentence: "Russian categorizes light blue and dark blue as two separate hues."
      },
      {
        word: "Hypothesis",
        phonetic: "/haɪˈpɑːθəsɪs/",
        partOfSpeech: "noun",
        definitionEn: "A proposed explanation made on the basis of limited evidence as a starting point for investigation.",
        definitionId: "Hipotesis, dugaan ilmiah yang perlu diuji kebenarannya.",
        exampleSentence: "The Sapir-Whorf hypothesis proposes that language structures thought."
      },
      {
        word: "Orientation",
        phonetic: "/ˌɔːriɛnˈteɪʃn/",
        partOfSpeech: "noun",
        definitionEn: "The determination of the relative position of something or someone.",
        definitionId: "Orientasi arah atau penentuan posisi terhadap lingkungan sekitar.",
        exampleSentence: "Speakers always maintain a precise internal compass orientation."
      },
      {
        word: "Lens",
        phonetic: "/lɛnz/",
        partOfSpeech: "noun",
        definitionEn: "A way of looking at, filtering, or understanding something.",
        definitionId: "Lensa persepsi atau kacamata pemahaman.",
        exampleSentence: "Language acts as a cognitive lens through which we view reality."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-18-1",
        statement: "'Linguistic' refers to matters concerning geology and rock formations.",
        isTrue: false,
        explanation: "False. Linguistic relates to language and linguistics."
      },
      {
        id: "vq-tf-18-2",
        statement: "'Relativity' implies that perception depends upon a particular frame of reference.",
        isTrue: true,
        explanation: "True. Relativity means dependent on a specific context or system."
      },
      {
        id: "vq-tf-18-3",
        statement: "'Cardinal' directions refer exclusively to left, right, up, and down.",
        isTrue: false,
        explanation: "False. Cardinal directions are North, South, East, and West."
      },
      {
        id: "vq-tf-18-4",
        statement: "An 'Aboriginal' population refers to indigenous inhabitants native to a region.",
        isTrue: true,
        explanation: "True. Aboriginal refers to indigenous native peoples."
      },
      {
        id: "vq-tf-18-5",
        statement: "Sensory 'discrimination' means the ability to detect distinct differences between stimuli.",
        isTrue: true,
        explanation: "True. In sensory science, discrimination is fine-grained differentiation."
      },
      {
        id: "vq-tf-18-6",
        statement: "A 'hue' is a measurement of acoustic sound frequency.",
        isTrue: false,
        explanation: "False. A hue is a color or shade of color."
      },
      {
        id: "vq-tf-18-7",
        statement: "A scientific 'hypothesis' is a proposition tested through empirical observation.",
        isTrue: true,
        explanation: "True. A hypothesis is a testable proposed explanation."
      },
      {
        id: "vq-tf-18-8",
        statement: "Spatial 'orientation' means knowing where you are in relation to directions.",
        isTrue: true,
        explanation: "True. Orientation is positioning oneself relative to surroundings."
      },
      {
        id: "vq-tf-18-9",
        statement: "Viewing reality through a cultural 'lens' means using a camera filter.",
        isTrue: false,
        explanation: "False. Figuratively, a lens is a framework of perception and thought."
      },
      {
        id: "vq-tf-18-10",
        statement: "The 'architecture' of a language includes its grammatical and structural rules.",
        isTrue: true,
        explanation: "True. Linguistic architecture refers to grammar and syntax structures."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-18-1",
        question: "What is the core premise of the Sapir-Whorf hypothesis (linguistic relativity)?",
        options: [
          "All humans speak the exact same language when they dream",
          "The structure and vocabulary of a language actively influence how its speakers perceive reality",
          "Languages with more vowels are naturally superior in mathematics",
          "Grammar was invented by ancient Greek philosophers in 500 BC"
        ],
        correctIndex: 1,
        explanation: "Linguistic relativity posits that a language's structures mold its speakers' cognitive perception."
      },
      {
        id: "rq-mc-18-2",
        question: "How do speakers of the Guugu Yimithirr language in Australia navigate spatial positions?",
        options: [
          "By using relative terms like 'to my left' or 'behind you'",
          "By using absolute cardinal directions like North, South, East, and West exclusively",
          "By counting steps in multiples of eight",
          "By drawing maps in the sand before every conversation"
        ],
        correctIndex: 1,
        explanation: "They describe spatial arrangements exclusively using cardinal compass directions."
      },
      {
        id: "rq-mc-18-3",
        question: "What remarkable cognitive ability do Guugu Yimithirr speakers exhibit as a result?",
        options: [
          "They can predict ocean tides with their eyes closed",
          "They maintain an instinctive, accurate internal compass orientation at all times",
          "They can hear ultrasonic frequencies emitted by bats",
          "They never need to drink water in deserts"
        ],
        correctIndex: 1,
        explanation: "Their language trains an extraordinary, constant internal geographic compass."
      },
      {
        id: "rq-mc-18-4",
        question: "How does the Russian language treat the color blue differently from English?",
        options: [
          "Russian has no word for blue at all",
          "Russian treats light blue ('goluboy') and dark blue ('siniy') as distinct fundamental color categories",
          "Russian only allows blue to be spoken by artists",
          "Russian words for blue change meaning depending on the temperature"
        ],
        correctIndex: 1,
        explanation: "Russian linguistically distinguishes light and dark blue as separate primary categories."
      },
      {
        id: "rq-mc-18-5",
        question: "What did brain scans show regarding native Russian speakers distinguishing blue hues?",
        options: [
          "They showed faster subconscious neural discrimination between different blue shades",
          "Their brains deactivated completely when seeing color",
          "They could only see black and white",
          "Their visual cortex was replaced by hearing centers"
        ],
        correctIndex: 0,
        explanation: "Native Russian speakers exhibited faster neural discrimination when distinguishing blue shades."
      }
    ]
  },
  {
    id: "en-art-19",
    title: "Decision Fatigue: Why Making Too Many Choices Drains Your Willpower",
    category: "Self-Development & Decision Science",
    level: "Intermediate",
    source: "American Psychological Association & Columbia Business School",
    sourceUrl: "https://www.apa.org",
    wordCount: 480,
    estimatedMinutes: 3,
    content: [
      "Have you ever wondered why visionary leaders like Steve Jobs, Barack Obama, and Mark Zuckerberg famously wore the exact same outfit every single day? While it might appear as eccentric minimalism, it is actually a calculated defense against a well-documented psychological phenomenon: 'decision fatigue'.",
      "Human beings make an estimated thirty-five thousand decisions every single day, ranging from minor choices—like what to eat for breakfast or which email to open first—to high-stakes professional evaluations. What many people fail to realize is that mental decision-making draws from a single, finite reservoir of cognitive energy.",
      "Every time you deliberate between options, you expend mental glucose. As this cognitive reservoir becomes depleted throughout the day, the brain's executive functioning deteriorates.",
      "When afflicted by decision fatigue, the brain instinctively takes shortcuts. It either defaults to reckless impulsivity—such as impulse-buying junk food at the supermarket checkout line—or succumbs to decision paralysis, postponing important work indefinitely.",
      "Studies of judicial parole rulings revealed that judges were significantly more likely to grant parole early in the morning when their minds were fresh, compared to late afternoon when decision fatigue made them default to denying parole.",
      "To preserve your mental bandwidth for what truly matters, decision scientists recommend streamlining trivial morning routines, establishing clear default habits, and tackling high-priority creative decisions before noon."
    ],
    vocabList: [
      {
        word: "Eccentric",
        phonetic: "/ɪkˈsɛntrɪk/",
        partOfSpeech: "adjective",
        definitionEn: "Unconventional and slightly strange.",
        definitionId: "Eksentrik, tidak biasa, atau memiliki kebiasaan unik.",
        exampleSentence: "Wearing identical clothes daily seemed eccentric but had a clear logic."
      },
      {
        word: "Finite",
        phonetic: "/ˈfaɪnaɪt/",
        partOfSpeech: "adjective",
        definitionEn: "Having limits or bounds; not infinite.",
        definitionId: "Terbatas, memiliki batas kapasitas, atau tidak tak terhingga.",
        exampleSentence: "Our daily willpower is a finite cognitive resource."
      },
      {
        word: "Reservoir",
        phonetic: "/ˈrɛzərvwɑːr/",
        partOfSpeech: "noun",
        definitionEn: "A large supply or source of something.",
        definitionId: "Cadangan, lumbung, atau sumber tampungan tenaga kognitif.",
        exampleSentence: "Making trivial decisions quickly drains your mental reservoir."
      },
      {
        word: "Deliberate",
        phonetic: "/dɪˈlɪbəreɪt/",
        partOfSpeech: "verb",
        definitionEn: "To engage in long and careful consideration.",
        definitionId: "Menimbang-nimbang dengan saksama sebelum memutuskan.",
        exampleSentence: "Deliberating between ten lunch options consumes valuable mental energy."
      },
      {
        word: "Depleted",
        phonetic: "/dɪˈpliːtɪd/",
        partOfSpeech: "adjective",
        definitionEn: "Used up the supply or resources of; exhausted.",
        definitionId: "Terkuras habis, susut, atau habis persediaannya.",
        exampleSentence: "By late afternoon, his willpower was thoroughly depleted."
      },
      {
        word: "Deteriorates",
        phonetic: "/dɪˈtɪriəreɪts/",
        partOfSpeech: "verb",
        definitionEn: "Becomes progressively worse in quality or performance.",
        definitionId: "Memburuk, menurun kualitasnya, atau merosot.",
        exampleSentence: "Decision quality deteriorates as mental fatigue sets in."
      },
      {
        word: "Paralysis",
        phonetic: "/pəˈræləsɪs/",
        partOfSpeech: "noun",
        definitionEn: "Inability to act or function in a normal manner.",
        definitionId: "Kelumpuhan mengambil keputusan (decision paralysis).",
        exampleSentence: "Too many choices lead to decision paralysis and procrastination."
      },
      {
        word: "Parole",
        phonetic: "/pəˈroʊl/",
        partOfSpeech: "noun",
        definitionEn: "The temporary or permanent release of a prisoner before the expiry of a sentence.",
        definitionId: "Pembebasan bersyarat bagi narapidana.",
        exampleSentence: "Judges made stricter parole rulings late in the afternoon."
      },
      {
        word: "Streamlining",
        phonetic: "/ˈstriːmlaɪnɪŋ/",
        partOfSpeech: "verb",
        definitionEn: "Making an organization or system more efficient and effective by employing faster or simpler working methods.",
        definitionId: "Merampingkan, menyederhanakan, atau mengefisienkan alur kerja.",
        exampleSentence: "Streamlining your morning wardrobe choices preserves willpower."
      },
      {
        word: "Trivial",
        phonetic: "/ˈtrɪviəl/",
        partOfSpeech: "adjective",
        definitionEn: "Of little value or importance.",
        definitionId: "Remeh, sepele, atau kurang penting.",
        exampleSentence: "Don't waste mental energy debating trivial morning choices."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-19-1",
        statement: "'Eccentric' behavior is strictly conventional and ordinary.",
        isTrue: false,
        explanation: "False. Eccentric means unconventional, peculiar, and distinctive."
      },
      {
        id: "vq-tf-19-2",
        statement: "A 'finite' resource has strict limitations and can be exhausted.",
        isTrue: true,
        explanation: "True. Finite means bounded, limited, and measurable."
      },
      {
        id: "vq-tf-19-3",
        statement: "A cognitive 'reservoir' is an endless supply that never runs dry.",
        isTrue: false,
        explanation: "False. A reservoir is a reserve or supply that can be depleted."
      },
      {
        id: "vq-tf-19-4",
        statement: "To 'deliberate' means to carefully weigh and consider alternatives.",
        isTrue: true,
        explanation: "True. Deliberate means thoughtful reflection and decision-making."
      },
      {
        id: "vq-tf-19-5",
        statement: "A 'depleted' battery has maximum stored energy remaining.",
        isTrue: false,
        explanation: "False. Depleted means drained, empty, or exhausted."
      },
      {
        id: "vq-tf-19-6",
        statement: "When performance 'deteriorates', it grows noticeably worse.",
        isTrue: true,
        explanation: "True. Deteriorate means to decline or decay in quality."
      },
      {
        id: "vq-tf-19-7",
        statement: "Decision 'paralysis' means taking instant, effortless action.",
        isTrue: false,
        explanation: "False. Decision paralysis is being stuck and unable to choose or act."
      },
      {
        id: "vq-tf-19-8",
        statement: "'Parole' is the supervised conditional release of a prisoner.",
        isTrue: true,
        explanation: "True. Parole allows prisoners early release under conditions."
      },
      {
        id: "vq-tf-19-9",
        statement: "'Streamlining' a routine makes it simpler, faster, and more efficient.",
        isTrue: true,
        explanation: "True. Streamlining optimizes and simplifies processes."
      },
      {
        id: "vq-tf-19-10",
        statement: "'Trivial' decisions carry monumental, life-changing consequences.",
        isTrue: false,
        explanation: "False. Trivial means minor, simple, or insignificant."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-19-1",
        question: "Why did figures like Steve Jobs and Barack Obama adopt a uniform daily wardrobe?",
        options: [
          "They were contractually forbidden from buying clothes",
          "To eliminate trivial morning decisions and protect their finite cognitive energy from decision fatigue",
          "They had no interest in attending meetings",
          "To save money on laundry detergent"
        ],
        correctIndex: 1,
        explanation: "Simplifying wardrobes eliminates trivial decisions, conserving mental willpower."
      },
      {
        id: "rq-mc-19-2",
        question: "What happens to the quality of human decision-making as cognitive energy is depleted?",
        options: [
          "It improves exponentially by ten times",
          "The brain takes shortcuts, defaulting to impulsivity or decision paralysis",
          "It causes individuals to run at supersonic speeds",
          "It prevents people from ever feeling hungry"
        ],
        correctIndex: 1,
        explanation: "Depleted willpower leads to cognitive shortcuts, impulsive choices, or avoidance."
      },
      {
        id: "rq-mc-19-3",
        question: "What did studies on judicial parole hearings reveal about decision fatigue?",
        options: [
          "Judges granted parole at identical rates all day long without variation",
          "Judges were significantly more likely to grant parole in the morning and default to denial as fatigue set in late in the day",
          "Judges flipped coins to decide all legal verdicts",
          "Judges only worked five minutes per week"
        ],
        correctIndex: 1,
        explanation: "Mental fatigue led judges to default to the safer status quo (denying parole) late in sessions."
      },
      {
        id: "rq-mc-19-4",
        question: "Approximately how many decisions does an average human make every day?",
        options: [
          "Around 12 decisions",
          "An estimated 35,000 decisions",
          "Exactly two million decisions",
          "Zero decisions"
        ],
        correctIndex: 1,
        explanation: "Humans make approximately 35,000 daily decisions, draining cognitive bandwidth."
      },
      {
        id: "rq-mc-19-5",
        question: "What practical strategy is recommended to manage decision fatigue?",
        options: [
          "Leaving all major high-stakes decisions until 11:00 PM",
          "Streamlining minor morning routines and tackling high-priority decisions early in the day",
          "Never making any decisions ever again",
          "Eating entire boxes of donuts before every phone call"
        ],
        correctIndex: 1,
        explanation: "Streamlining trivial routines and scheduling critical choices early preserves mental acuity."
      }
    ]
  },
  {
    id: "en-art-20",
    title: "The Therapeutic Value of Journaling: Healing Through the Written Word",
    category: "Mental Health & Expressive Therapy",
    level: "Intermediate",
    source: "Cambridge University Press & Mayo Clinic",
    sourceUrl: "https://www.mayoclinic.org",
    wordCount: 476,
    estimatedMinutes: 3,
    content: [
      "When we endure emotional distress, trauma, or persistent anxiety, painful thoughts frequently swirl through our minds in a chaotic, unorganized loop. Suppressing or ignoring these emotional currents often manifests as chronic tension, headaches, and sleep disturbances.",
      "In the late 1980s, Dr. James Pennebaker, a pioneering social psychologist at the University of Texas at Austin, introduced a deceptively simple intervention: 'expressive writing'. In landmark clinical trials, participants wrote continuously for fifteen minutes a day about their deepest emotional upheavals.",
      "The health outcomes astonished researchers. Participants who practiced expressive journaling exhibited measurable reductions in stress hormones, improved immune biomarker function, and fewer visits to physicians over the subsequent six months.",
      "Neurologists explain that putting emotional anguish into written words activates a brain mechanism called 'affect labeling'. When we identify and translate raw, unstructured feelings into coherent linguistic sentences, neural activity shifts from the reactive amygdala to the rational left prefrontal cortex.",
      "Writing by hand on physical paper offers distinct therapeutic advantages over digital typing. The tactile kinesthetic feedback of handwriting creates a rhythmic, grounding sensory experience that calms the parasympathetic nervous system.",
      "Journaling is not about crafting pristine literature; it is a private sanctuary for unfiltered emotional honesty and cognitive clarity."
    ],
    vocabList: [
      {
        word: "Therapeutic",
        phonetic: "/ˌθɛrəˈpjuːtɪk/",
        partOfSpeech: "adjective",
        definitionEn: "Relating to the healing of disease or having a good effect on body and mind.",
        definitionId: "Terapeutik, memiliki khasiat menyembuhkan atau menenangkan batin.",
        exampleSentence: "Daily journaling provides immense therapeutic relief from chronic worry."
      },
      {
        word: "Suppressing",
        phonetic: "/səˈprɛsɪŋ/",
        partOfSpeech: "verb",
        definitionEn: "Forcibly putting an end to; preventing the development or expression of a feeling.",
        definitionId: "Menekan, memendam, atau menahan emosi secara paksa.",
        exampleSentence: "Suppressing grief can lead to physical tension and illness."
      },
      {
        word: "Intervention",
        phonetic: "/ˌɪntərˈvɛnʃn/",
        partOfSpeech: "noun",
        definitionEn: "Action taken to improve a situation, especially a medical or psychological treatment.",
        definitionId: "Intervensi, tindakan atau metode terapi untuk memperbaiki kondisi.",
        exampleSentence: "Expressive writing is a low-cost psychological intervention."
      },
      {
        word: "Upheaval",
        phonetic: "/ʌpˈhiːvl/",
        partOfSpeech: "noun",
        definitionEn: "A violent or sudden change or disruption to something.",
        definitionId: "Goncangan emosional, kekalutan batin, atau pergolakan hebat.",
        exampleSentence: "Writing about emotional upheaval helps organize chaotic thoughts."
      },
      {
        word: "Biomarker",
        phonetic: "/ˈbaɪoʊmɑːrkər/",
        partOfSpeech: "noun",
        definitionEn: "A measurable biological indicator of the state of an organism.",
        definitionId: "Biomarker, indikator biologis terukur (seperti antibodi atau kortisol).",
        exampleSentence: "Journaling improved immune biomarker levels in blood tests."
      },
      {
        word: "Anguish",
        phonetic: "/ˈæŋɡwɪʃ/",
        partOfSpeech: "noun",
        definitionEn: "Severe mental or physical pain or suffering.",
        definitionId: "Penderitaan mendalam, rasa sakit hati yang hebat, atau duka cita.",
        exampleSentence: "Putting inner anguish into words eases its grip on the psyche."
      },
      {
        word: "Labeling",
        phonetic: "/ˈleɪbəlɪŋ/",
        partOfSpeech: "noun",
        definitionEn: "The action of describing or classifying someone or something.",
        definitionId: "Pelabelan afek/emosi (affect labeling) dengan kata-kata spesifik.",
        exampleSentence: "Affect labeling reduces amygdala reactivity during emotional distress."
      },
      {
        word: "Coherent",
        phonetic: "/koʊˈhɪrənt/",
        partOfSpeech: "adjective",
        definitionEn: "Logical, orderly, and clearly articulated.",
        definitionId: "Koheren, logis, teratur, dan mudah dipahami.",
        exampleSentence: "Writing transforms chaotic pain into a coherent narrative."
      },
      {
        word: "Kinesthetic",
        phonetic: "/ˌkɪnəsˈθɛtɪk/",
        partOfSpeech: "adjective",
        definitionEn: "Relating to a person's awareness of the position and movement of the parts of the body.",
        definitionId: "Kinestetik, berkaitan dengan gerak motorik fisik jemari saat menulis.",
        exampleSentence: "The kinesthetic action of pen on paper induces physical calmness."
      },
      {
        word: "Sanctuary",
        phonetic: "/ˈsæŋktʃuɛri/",
        partOfSpeech: "noun",
        definitionEn: "A place of refuge, safety, or private retreat.",
        definitionId: "Ruang suci, suaka pribadi, atau tempat berlindung yang aman.",
        exampleSentence: "A private journal serves as a sanctuary for radical honesty."
      }
    ],
    vocabQuiz: [
      {
        id: "vq-tf-20-1",
        statement: "A 'therapeutic' practice harms and degrades physical health.",
        isTrue: false,
        explanation: "False. Therapeutic means healing, beneficial, and restorative."
      },
      {
        id: "vq-tf-20-2",
        statement: "'Suppressing' an emotion means freely expressing it to everyone.",
        isTrue: false,
        explanation: "False. Suppressing means burying, stifling, or bottling up feelings."
      },
      {
        id: "vq-tf-20-3",
        statement: "A medical 'intervention' is a treatment designed to improve health.",
        isTrue: true,
        explanation: "True. An intervention is an intentional curative action."
      },
      {
        id: "vq-tf-20-4",
        statement: "An emotional 'upheaval' is a state of calm, static tranquility.",
        isTrue: false,
        explanation: "False. An upheaval is a turbulent, disruptive crisis."
      },
      {
        id: "vq-tf-20-5",
        statement: "A 'biomarker' is an objective, measurable biological signal in the body.",
        isTrue: true,
        explanation: "True. Biomarkers measure physiological states like immunity or stress."
      },
      {
        id: "vq-tf-20-6",
        statement: "'Anguish' denotes deep, excruciating emotional pain.",
        isTrue: true,
        explanation: "True. Anguish is acute mental suffering or distress."
      },
      {
        id: "vq-tf-20-7",
        statement: "'Affect labeling' means putting distinct verbal words to your felt emotions.",
        isTrue: true,
        explanation: "True. Affect labeling names feelings to regulate amygdala response."
      },
      {
        id: "vq-tf-20-8",
        statement: "A 'coherent' explanation is completely nonsensical and disconnected.",
        isTrue: false,
        explanation: "False. Coherent means structured, logical, and lucid."
      },
      {
        id: "vq-tf-20-9",
        statement: "'Kinesthetic' feedback involves the physical sense of movement and touch.",
        isTrue: true,
        explanation: "True. Kinesthetic refers to bodily movement and tactile feedback."
      },
      {
        id: "vq-tf-20-10",
        statement: "A 'sanctuary' is a dangerous, hostile battlefield.",
        isTrue: false,
        explanation: "False. A sanctuary is a safe, protected haven."
      }
    ],
    readingQuiz: [
      {
        id: "rq-mc-20-1",
        question: "Who pioneered landmark clinical research on expressive writing in the late 1980s?",
        options: [
          "Dr. James Pennebaker",
          "Dr. Jonas Salk",
          "Dr. Alexander Fleming",
          "Dr. Thomas Edison"
        ],
        correctIndex: 0,
        explanation: "James Pennebaker at UT Austin pioneered expressive writing research."
      },
      {
        id: "rq-mc-20-2",
        question: "What physical and biological improvements were documented in expressive writing participants?",
        options: [
          "Reduced stress hormones, enhanced immune biomarkers, and fewer physician visits",
          "Instantaneous growth of three extra teeth",
          "Total loss of memory regarding their childhood",
          "Complete cessation of cardiovascular circulation"
        ],
        correctIndex: 0,
        explanation: "Expressive writing lowered stress hormones and enhanced immune system function."
      },
      {
        id: "rq-mc-20-3",
        question: "What neurological shift occurs during the process of 'affect labeling'?",
        options: [
          "Activity shifts from the reactive amygdala to the rational left prefrontal cortex",
          "The brain shuts down all metabolic activity",
          "The optic nerve stops sending visual signals",
          "Brain waves convert into radio broadcasts"
        ],
        correctIndex: 0,
        explanation: "Affect labeling engages the prefrontal cortex, soothing reactive amygdala firing."
      },
      {
        id: "rq-mc-20-4",
        question: "Why does writing by hand on physical paper provide unique therapeutic benefits over typing?",
        options: [
          "Handwriting produces kinetic radiation that burns body fat",
          "Tactile, kinesthetic feedback creates a calming sensory rhythm that engages the parasympathetic system",
          "Paper absorbs all computer viruses",
          "Keyboards are illegal in medical therapy clinics"
        ],
        correctIndex: 1,
        explanation: "The kinesthetic act of handwriting calms the parasympathetic nervous system."
      },
      {
        id: "rq-mc-20-5",
        question: "What is the primary objective of therapeutic journaling?",
        options: [
          "Writing a best-selling commercial novel with flawless grammar",
          "Providing a private, unfiltered space for emotional honesty and mental clarity",
          "Practicing calligraphy to impress schoolteachers",
          "Memorizing thousands of legal dictionary definitions"
        ],
        correctIndex: 1,
        explanation: "Therapeutic journaling is about raw emotional honesty and cognitive integration, not literary polish."
      }
    ]
  }
];

export const ENGLISH_ARTICLES: EnglishArticle[] = [
  ...BASE_ENGLISH_ARTICLES,
  ...ADDITIONAL_ENGLISH_ARTICLES_PART1,
  ...ADDITIONAL_ENGLISH_ARTICLES_PART2,
  ...ADDITIONAL_ENGLISH_ARTICLES_PART3,
  ...ADDITIONAL_ENGLISH_ARTICLES_PART4,
  ...ADDITIONAL_ENGLISH_ARTICLES_PART5,
  ...ADDITIONAL_ENGLISH_ARTICLES_PART6,
  ...ADDITIONAL_ENGLISH_ARTICLES_PART7,
  ...ADDITIONAL_ENGLISH_ARTICLES_PART8,
  ...ADDITIONAL_ENGLISH_ARTICLES_PART9,
  ...ADDITIONAL_ENGLISH_ARTICLES_PART10
];

// Deterministic daily 8-article pack selector for English Articles
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
  for (let i = 0; i < Math.min(8, total); i++) {
    const idx = (startIndex + i) % total;
    dailySet.push(ENGLISH_ARTICLES[idx]);
  }
  return dailySet;
}
