const fs = require('fs');
const path = require('path');

const PART2_WORDS = [
  // E
  {
    word: "Eager",
    partOfSpeech: "adjective",
    level: "B1",
    phonetic: "/ˈiː.ɡər/",
    indonesianTranslation: "sangat bersemangat / antusias / tidak sabar",
    detailedDefinition: {
      indonesian: "Sangat menginginkan sesuatu atau sangat bersemangat untuk melakukan tindakan.",
      english: "Wanting to do or have something very much; characterized by keen interest."
    },
    similarWords: ["Eagerness", "Eagerly", "Keen"],
    synonyms: ["Keen", "Enthusiastic", "Avid", "Impatient", "Fervent"],
    antonyms: ["Reluctant", "Indifferent", "Apathetic", "Hesitant"],
    sentenceExample: "The students were eager to explore the interactive exhibits at the science museum.",
    paragraphExample: "Investors were eager to participate in the renewable energy funding round following promising pilot results."
  },
  {
    word: "Earnest",
    partOfSpeech: "adjective",
    level: "B2",
    phonetic: "/ˈɜː.nɪst/",
    indonesianTranslation: "sungguh-sungguh / tulus / bersungguh hati",
    detailedDefinition: {
      indonesian: "Menunjukkan niat yang tulus, serius, dan jujur tanpa kepalsuan.",
      english: "Resulting from or showing sincere and intense conviction."
    },
    similarWords: ["Earnestly", "Earnestness", "Sincere"],
    synonyms: ["Sincere", "Heartfelt", "Grave", "Serious", "Devout"],
    antonyms: ["Frivolous", "Insincere", "Flippant", "Casual"],
    sentenceExample: "He made an earnest plea to the community council to protect the endangered wetlands.",
    paragraphExample: "Her earnest commitment to human rights advocacy earned her deep respect among international delegates."
  },
  {
    word: "Eccentric",
    partOfSpeech: "adjective",
    level: "B2",
    phonetic: "/ɪkˈsen.trɪk/",
    indonesianTranslation: "eksentrik / aneh tapi unik / ganjil",
    detailedDefinition: {
      indonesian: "Memiliki kebiasaan, perilaku, atau penampilan yang tidak lazim namun menarik.",
      english: "Unconventional and slightly strange; deviating from standard norms."
    },
    similarWords: ["Eccentricity", "Eccentrically", "Quirky"],
    synonyms: ["Unconventional", "Quirky", "Odd", "Peculiar", "Bizarre"],
    antonyms: ["Conventional", "Ordinary", "Normal", "Standard"],
    sentenceExample: "The eccentric inventor filled his workshop with clockwork contraptions and vintage telescopes.",
    paragraphExample: "Although considered eccentric by contemporaries, her avant-garde painting techniques influenced modern art deeply."
  },
  {
    word: "Eclipse",
    partOfSpeech: "verb",
    level: "C1",
    phonetic: "/ɪˈklɪps/",
    indonesianTranslation: "mengaburkan / melampaui / mengungguli / gerhana",
    detailedDefinition: {
      indonesian: "Menghalangi cahaya; membuat prestasi orang lain tampak kurang penting karena jauh lebih unggul.",
      english: "To obscure light; to surpass or overshadow in importance, reputation, or quality."
    },
    similarWords: ["Eclipsing", "Overshadow", "Surpass"],
    synonyms: ["Overshadow", "Surpass", "Outshine", "Dominate", "Exceed"],
    antonyms: ["Enhance", "Illuminate", "Highlight"],
    sentenceExample: "Her stellar athletic performance managed to eclipse all previous national marathon records.",
    paragraphExample: "The sudden technological breakthrough threatened to eclipse earlier research models in molecular biology."
  },
  {
    word: "Economical",
    partOfSpeech: "adjective",
    level: "B1",
    phonetic: "/ˌiː.kəˈnɒm.ɪ.kəl/",
    indonesianTranslation: "hemat / efisien / ekonomis",
    detailedDefinition: {
      indonesian: "Menggunakan sedikit uang, waktu, atau sumber daya tanpa pemborosan.",
      english: "Giving good value or return in relation to the money, time, or effort expended."
    },
    similarWords: ["Economics", "Economize", "Frugal"],
    synonyms: ["Frugal", "Thrifty", "Cost-effective", "Prudent", "Resourceful"],
    antonyms: ["Wasteful", "Extravagant", "Expensive"],
    sentenceExample: "Hybrid compact cars provide an economical transportation option for daily city commuters.",
    paragraphExample: "The architect designed an economical heating layout using geothermal insulation to minimize utility bills."
  },
  {
    word: "Edge",
    partOfSpeech: "noun",
    level: "B1",
    phonetic: "/edʒ/",
    indonesianTranslation: "tepi / pinggiran / keunggulan kompetitif",
    detailedDefinition: {
      indonesian: "Bagian paling luar atau pinggir; keunggulan atas pihak lain.",
      english: "The outside limit of an object, surface, or area; a competitive advantage."
    },
    similarWords: ["Edgy", "Border", "Advantage"],
    synonyms: ["Border", "Brink", "Margin", "Perimeter", "Advantage"],
    antonyms: ["Center", "Middle", "Disadvantage"],
    sentenceExample: "He stood at the edge of the rocky cliff, gazing at the crashing Atlantic ocean waves.",
    paragraphExample: "Fluency in three languages gave the young candidate a decisive edge during international job interviews."
  },
  {
    word: "Edible",
    partOfSpeech: "adjective",
    level: "B2",
    phonetic: "/ˈed.ə.bəl/",
    indonesianTranslation: "dapat dimakan / layak konsumsi",
    detailedDefinition: {
      indonesian: "Aman dan cocok untuk dimakan manusia tanpa menimbulkan racun.",
      english: "Fit or suitable to be eaten; non-toxic and digestible."
    },
    similarWords: ["Eatable", "Inedible", "Consumable"],
    synonyms: ["Eatable", "Consumable", "Nourishing", "Digestible"],
    antonyms: ["Inedible", "Poisonous", "Toxic"],
    sentenceExample: "Foragers must undergo expert botanical training to distinguish edible wild mushrooms from toxic species.",
    paragraphExample: "The gourmet pastry chef decorated the wedding cake with delicate edible gold leaf flakes."
  },
  {
    word: "Editorial",
    partOfSpeech: "noun",
    level: "B2",
    phonetic: "/ˌed.ɪˈtɔː.ri.əl/",
    indonesianTranslation: "tajuk rencana / editorial / opini redaksi",
    detailedDefinition: {
      indonesian: "Artikel surat kabar yang menyuarakan pendapat resmi dari dewan redaksi.",
      english: "A newspaper article written by or on behalf of an editor that gives an opinion on a topical issue."
    },
    similarWords: ["Editor", "Edit", "Op-ed"],
    synonyms: ["Opinion piece", "Commentary", "Leading article", "Review"],
    antonyms: ["News report", "Factual column"],
    sentenceExample: "The weekend newspaper published a fiery editorial advocating for comprehensive municipal transport reforms.",
    paragraphExample: "Journalism students analyze classic editorial columns to study techniques of persuasive political writing."
  },
  {
    word: "Efficiency",
    partOfSpeech: "noun",
    level: "B1",
    phonetic: "/ɪˈfɪʃ.ən.si/",
    indonesianTranslation: "efisiensi / ketepatan guna / kedayagunaan",
    detailedDefinition: {
      indonesian: "Kemampuan mencapai hasil terbaik tanpa menyia-nyiakan waktu atau energi.",
      english: "The state or quality of being efficient; achieving maximum productivity with minimum wasted effort."
    },
    similarWords: ["Efficient", "Efficiently", "Productivity"],
    synonyms: ["Productivity", "Competence", "Efficacy", "Streamlining"],
    antonyms: ["Inefficiency", "Wastefulness", "Incompetence"],
    sentenceExample: "Upgrading to LED light bulbs significantly improved energy efficiency across all university buildings.",
    paragraphExample: "Software developers conduct code refactoring sessions to optimize server processing speed and resource efficiency."
  },
  {
    word: "Elaborate",
    partOfSpeech: "adjective",
    level: "B2",
    phonetic: "/ɪˈlæb.ər.ət/",
    indonesianTranslation: "rumit mendetail / terperinci / dipersiapkan teliti",
    detailedDefinition: {
      indonesian: "Melibatkan banyak detail, bagian yang saling terkait, atau persiapan teliti.",
      english: "Involving many carefully arranged parts or details; detailed and complicated in design."
    },
    similarWords: ["Elaborately", "Elaboration", "Intricate"],
    synonyms: ["Intricate", "Detailed", "Complex", "Ornate", "Sophisticated"],
    antonyms: ["Simple", "Plain", "Basic", "Rudimentary"],
    sentenceExample: "The museum curator unveiled an elaborate scale model of the ancient Roman forum.",
    paragraphExample: "Security personnel detected an elaborate counterfeit banking scheme orchestrated by international cybercriminals."
  }
];

console.log(`Part 2 template ready with initial ${PART2_WORDS.length} words.`);
