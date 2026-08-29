import { MentalMathGuideTopic, MentalMathQuestion } from '../types';

export const MENTAL_MATH_GUIDES: MentalMathGuideTopic[] = [
  {
    id: 'left-to-right',
    title: 'Penjumlahan Kiri ke Kanan',
    subtitle: 'Trik dasar mental math ala ahli hitung cepat',
    badge: 'Fondasi Utama',
    description: 'Di sekolah, kita diajarkan menghitung dari kanan ke kiri (satuan, puluhan, lalu ratusan) dengan menyimpan angka. Namun di kepala, menyimpan angka rentan lupa. Ahli mental math menjumlahkan dari digit terbesar di kiri ke digit terkecil di kanan.',
    steps: [
      {
        title: 'Langkah 1: Pisahkan Angka Berdasarkan Nilai Tempat',
        explanation: 'Uraikan angka menjadi ratusan, puluhan, dan satuan.',
        example: 'Hitung: 647 + 285',
        exampleSteps: [
          'Pisahkan 285 menjadi 200 + 80 + 5',
          'Jumlahkan ratusan dulu: 647 + 200 = 847',
          'Jumlahkan puluhan: 847 + 80 = 927',
          'Jumlahkan satuan: 927 + 5 = 932'
        ]
      }
    ],
    practiceQuestions: [
      { question: '450 + 320 = ?', answer: 770, tip: '450 + 300 = 750, lalu + 20 = 770' },
      { question: '568 + 314 = ?', answer: 882, tip: '568 + 300 = 868 -> 868 + 10 = 878 -> 878 + 4 = 882' },
      { question: '739 + 185 = ?', answer: 924, tip: '739 + 100 = 839 -> + 80 = 919 -> + 5 = 924' }
    ]
  },
  {
    id: 'rounding-compensation',
    title: 'Pembulatan & Kompensasi',
    subtitle: 'Ubah angka rumit menjadi kelipatan 10 atau 100 yang mudah',
    badge: 'Kecepatan Tinggi',
    description: 'Ketika menjumlahkan atau mengurangkan angka yang mendekati puluhan atau ratusan bulat (seperti 29, 48, 97, 198), bulatkan angka tersebut ke atas, lalu kompensasi (kurangkan selisihnya) di akhir.',
    steps: [
      {
        title: 'Langkah Operasi Kompensasi',
        explanation: 'Bulatkan angka terdekat ke 10 atau 100 terdekat.',
        example: 'Hitung: 546 + 298',
        exampleSteps: [
          '298 sangat dekat dengan 300 (selisih kurang 2)',
          'Hitung 546 + 300 = 846',
          'Kompensasikan dengan mengurangi 2: 846 - 2 = 844!'
        ]
      }
    ],
    practiceQuestions: [
      { question: '437 + 98 = ?', answer: 535, tip: '437 + 100 - 2 = 537 - 2 = 535' },
      { question: '682 - 195 = ?', answer: 487, tip: '682 - 200 + 5 = 482 + 5 = 487' },
      { question: '815 + 396 = ?', answer: 1211, tip: '815 + 400 - 4 = 1215 - 4 = 1211' }
    ]
  },
  {
    id: 'counting-up-subtraction',
    title: 'Pengurangan dengan Menghitung Maju',
    subtitle: 'Selesaikan pengurangan layaknya kasir menghitung uang kembalian',
    badge: 'Trik Bebas Pinjam',
    description: 'Alih-alih meminjam angka dari kiri (borrowing) yang membingungkan pikiran, hitung selisih dari angka pengurang bergerak maju ke angka target.',
    steps: [
      {
        title: 'Langkah Menghitung Maju (Cashier’s Method)',
        explanation: 'Loncat ke puluhan terdekat, lalu ke ratusan terdekat, hingga tiba di target.',
        example: 'Hitung: 1000 - 647',
        exampleSteps: [
          'Dari 647 loncat ke 650 (tambah +3)',
          'Dari 650 loncat ke 700 (tambah +50)',
          'Dari 700 loncat ke 1000 (tambah +300)',
          'Total semua loncatan: 300 + 50 + 3 = 353!'
        ]
      }
    ],
    practiceQuestions: [
      { question: '500 - 263 = ?', answer: 237, tip: '263 -> 270 (+7) -> 300 (+30) -> 500 (+200) = 237' },
      { question: '1000 - 482 = ?', answer: 518, tip: '482 -> 490 (+8) -> 500 (+10) -> 1000 (+500) = 518' },
      { question: '730 - 385 = ?', answer: 345, tip: '385 -> 400 (+15) -> 730 (+330) = 345' }
    ]
  },
  {
    id: 'magic-multiplication',
    title: 'Trik Perkalian Ajaib (5, 9, 11, 25)',
    subtitle: 'Rahasia mengalikan angka puluhan dan ratusan dalam 2 detik',
    badge: 'Paling Populer',
    description: 'Manfaatkan pola aritmetika khusus untuk mengalikan angka tanpa coret-coretan rumus panjang.',
    steps: [
      {
        title: '1. Perkalian 5: Kali 10 lalu Bagi 2',
        explanation: 'Karena 5 = 10 / 2, tambahkan nol di belakang angka lalu bagi dua.',
        example: '64 × 5 = ?',
        exampleSteps: ['64 × 10 = 640', 'Bagi dua: 640 / 2 = 320']
      },
      {
        title: '2. Perkalian 9: Kali 10 Kurang Angka Asli',
        explanation: 'Karena 9 = 10 - 1, hitung n × 10 lalu kurangkan n.',
        example: '43 × 9 = ?',
        exampleSteps: ['43 × 10 = 430', '430 - 43 = 387']
      },
      {
        title: '3. Perkalian 11: Selipkan Jumlah Kedua Digit',
        explanation: 'Untuk angka 2 digit (ab × 11), hasilnya adalah a (a+b) b.',
        example: '35 × 11 = ?',
        exampleSteps: ['Digit kiri = 3, digit kanan = 5', 'Tengah = 3 + 5 = 8', 'Hasil = 385']
      },
      {
        title: '4. Perkalian 25: Kali 100 lalu Bagi 4',
        explanation: 'Karena 25 = 100 / 4, tambahkan dua nol lalu bagi 4.',
        example: '48 × 25 = ?',
        exampleSteps: ['48 / 4 = 12', 'Tambahkan dua nol: 1.200']
      }
    ],
    practiceQuestions: [
      { question: '78 × 5 = ?', answer: 390, tip: '780 / 2 = 390' },
      { question: '52 × 11 = ?', answer: 572, tip: '5 (5+2) 2 = 572' },
      { question: '64 × 25 = ?', answer: 1600, tip: '64 / 4 = 16 -> 1.600' },
      { question: '67 × 9 = ?', answer: 603, tip: '670 - 67 = 603' }
    ]
  },
  {
    id: 'quick-percentages',
    title: 'Trik Persentase Cepat & Sifat Komutatif',
    subtitle: 'Hitung diskon dan persen di kepala tanpa kalkulator',
    badge: 'Praktis Harian',
    description: 'Kuasai teknik membangun persentase dari balok 10%, 5%, 1%, serta rahasia komutatif persentase: x% dari y sama dengan y% dari x.',
    steps: [
      {
        title: 'Sifat Komutatif Persentase: x% dari y = y% dari x',
        explanation: 'Jika angka persennya sulit dihitung, tukar posisinya dengan angka dasar.',
        example: 'Hitung: 16% dari 50',
        exampleSteps: [
          'Tukar menjadi: 50% dari 16',
          '50% dari 16 adalah setengah dari 16, yaitu 8!',
          'Jadi 16% dari 50 = 8.'
        ]
      },
      {
        title: 'Metode Balok Dasar (10%, 5%, 1%)',
        explanation: '10% = geser koma 1 kali ke kiri; 5% = setengah dari 10%; 1% = geser koma 2 kali ke kiri.',
        example: 'Hitung: 15% dari 240',
        exampleSteps: [
          '10% dari 240 = 24',
          '5% dari 240 = setengah dari 24 = 12',
          '15% = 24 + 12 = 36'
        ]
      }
    ],
    practiceQuestions: [
      { question: '18% dari 50 = ?', answer: 9, tip: '50% dari 18 = 9' },
      { question: '15% dari 320 = ?', answer: 48, tip: '10% (32) + 5% (16) = 48' },
      { question: '84% dari 25 = ?', answer: 21, tip: '25% dari 84 = 84 / 4 = 21' }
    ]
  },
  {
    id: 'square-ending-5',
    title: 'Kuadrat Cepat Angka Berakhiran 5',
    subtitle: 'Trik kuadrat legendaris: n(n+1) lalu tambahkan 25',
    badge: 'Keajaiban Pola',
    description: 'Setiap bilangan dua digit yang berakhiran 5 (misalnya 15, 25, 35, 75, 95) dapat dikuadratkan seketika dengan mengalikan digit puluhan (n) dengan bilangan berikutnya (n+1), lalu menempelkan 25 di belakangnya.',
    steps: [
      {
        title: 'Rumus: (n5)² = [n × (n+1)] tempelkan 25',
        explanation: 'Kalikan angka puluhan dengan kakaknya, lalu akhiri dengan 25.',
        example: 'Hitung: 75²',
        exampleSteps: [
          'Digit puluhan adalah 7',
          'Kalikan dengan angka berikutnya: 7 × 8 = 56',
          'Tempelkan 25 di belakangnya: 5.625!'
        ]
      }
    ],
    practiceQuestions: [
      { question: '35² = ?', answer: 1225, tip: '3 × 4 = 12 -> 1.225' },
      { question: '65² = ?', answer: 4225, tip: '6 × 7 = 42 -> 4.225' },
      { question: '95² = ?', answer: 9025, tip: '9 × 10 = 90 -> 9.025' }
    ]
  }
];

// Curated 10-Question sets for Mental Math Sessions
export const MENTAL_MATH_QUESTION_SETS: MentalMathQuestion[][] = [
  // Set 1: Mixed Fundamental & Tricks
  [
    {
      id: 'mm-1-1',
      prompt: 'Gunakan trik perkalian 5: Tambahkan 0 lalu bagi 2.',
      question: '46 × 5 = ?',
      options: [230, 220, 240, 210],
      correctAnswer: 230,
      trickExplanation: '46 × 10 = 460. Setengah dari 460 adalah 230.',
      category: 'Perkalian Cepat'
    },
    {
      id: 'mm-1-2',
      prompt: 'Gunakan trik perkalian 11: Selipkan jumlah digit di tengah.',
      question: '43 × 11 = ?',
      options: [473, 463, 483, 493],
      correctAnswer: 473,
      trickExplanation: 'Tengah = 4 + 3 = 7. Hasilnya adalah 473.',
      category: 'Perkalian 11'
    },
    {
      id: 'mm-1-3',
      prompt: 'Gunakan metode pembulatan: 398 = 400 - 2.',
      question: '547 + 398 = ?',
      options: [945, 935, 955, 943],
      correctAnswer: 945,
      trickExplanation: '547 + 400 = 947, lalu kurangi 2 = 945.',
      category: 'Penjumlahan Kompensasi'
    },
    {
      id: 'mm-1-4',
      prompt: 'Gunakan sifat komutatif: x% dari y = y% dari x.',
      question: '14% dari 50 = ?',
      options: [7, 6, 8, 9],
      correctAnswer: 7,
      trickExplanation: '14% dari 50 = 50% dari 14 = setengah dari 14 = 7.',
      category: 'Persentase Cepat'
    },
    {
      id: 'mm-1-5',
      prompt: 'Gunakan trik kuadrat berakhiran 5: n × (n+1) lalu 25.',
      question: '45² = ?',
      options: [2025, 1925, 2125, 2045],
      correctAnswer: 2025,
      trickExplanation: '4 × 5 = 20, tempelkan 25 -> 2.025.',
      category: 'Kuadrat Cepat'
    },
    {
      id: 'mm-1-6',
      prompt: 'Gunakan metode menghitung maju: loncat ke puluhan lalu ratusan.',
      question: '1000 - 378 = ?',
      options: [622, 632, 612, 722],
      correctAnswer: 622,
      trickExplanation: '378 -> 380 (+2) -> 400 (+20) -> 1000 (+600) = 622.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'mm-1-7',
      prompt: 'Gunakan trik perkalian 25: Bagi 4 lalu kalikan 100.',
      question: '36 × 25 = ?',
      options: [900, 850, 950, 800],
      correctAnswer: 900,
      trickExplanation: '36 / 4 = 9, kalikan 100 = 900.',
      category: 'Perkalian 25'
    },
    {
      id: 'mm-1-8',
      prompt: 'Gunakan penjumlahan kiri ke kanan: ratusan, puluhan, lalu satuan.',
      question: '634 + 258 = ?',
      options: [892, 882, 894, 902],
      correctAnswer: 892,
      trickExplanation: '634 + 200 = 834 -> + 50 = 884 -> + 8 = 892.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'mm-1-9',
      prompt: 'Gunakan trik perkalian 9: Kali 10 kurang angka asli.',
      question: '54 × 9 = ?',
      options: [486, 476, 496, 466],
      correctAnswer: 486,
      trickExplanation: '54 × 10 = 540. Lalu 540 - 54 = 486.',
      category: 'Perkalian 9'
    },
    {
      id: 'mm-1-10',
      prompt: 'Pecah ke 10% dan 5%: 10% = 48, 5% = 24.',
      question: '15% dari 480 = ?',
      options: [72, 68, 76, 82],
      correctAnswer: 72,
      trickExplanation: '10% dari 480 = 48. 5% dari 480 = 24. 48 + 24 = 72.',
      category: 'Persentase 15%'
    }
  ],
  // Set 2: Speed & Mastery
  [
    {
      id: 'mm-2-1',
      prompt: 'Gunakan trik kuadrat berakhiran 5: 6 × 7 lalu 25.',
      question: '65² = ?',
      options: [4225, 4125, 4325, 4255],
      correctAnswer: 4225,
      trickExplanation: '6 × 7 = 42, gabungkan dengan 25 = 4.225.',
      category: 'Kuadrat Cepat'
    },
    {
      id: 'mm-2-2',
      prompt: 'Gunakan trik perkalian 11: 6 (6+2) 2.',
      question: '62 × 11 = ?',
      options: [682, 672, 692, 662],
      correctAnswer: 682,
      trickExplanation: '6 dan 2, tengah = 6 + 2 = 8. Hasil = 682.',
      category: 'Perkalian 11'
    },
    {
      id: 'mm-2-3',
      prompt: 'Gunakan sifat komutatif: 25% dari 64.',
      question: '64% dari 25 = ?',
      options: [16, 14, 18, 20],
      correctAnswer: 16,
      trickExplanation: '64% dari 25 = 25% dari 64 = 64 / 4 = 16.',
      category: 'Persentase Cepat'
    },
    {
      id: 'mm-2-4',
      prompt: 'Gunakan trik perkalian 5: 840 / 2.',
      question: '84 × 5 = ?',
      options: [420, 410, 430, 440],
      correctAnswer: 420,
      trickExplanation: '84 × 10 = 840 -> 840 / 2 = 420.',
      category: 'Perkalian Cepat'
    },
    {
      id: 'mm-2-5',
      prompt: 'Gunakan pembulatan: 785 - 200 + 3.',
      question: '785 - 197 = ?',
      options: [588, 578, 598, 582],
      correctAnswer: 588,
      trickExplanation: '785 - 200 = 585, lalu kembalikan + 3 = 588.',
      category: 'Pengurangan Kompensasi'
    },
    {
      id: 'mm-2-6',
      prompt: 'Gunakan trik perkalian 25: 72 / 4.',
      question: '72 × 25 = ?',
      options: [1800, 1750, 1850, 1900],
      correctAnswer: 1800,
      trickExplanation: '72 / 4 = 18. Tambahkan dua nol -> 1.800.',
      category: 'Perkalian 25'
    },
    {
      id: 'mm-2-7',
      prompt: 'Gunakan trik perkalian 9: 730 - 73.',
      question: '73 × 9 = ?',
      options: [657, 647, 667, 637],
      correctAnswer: 657,
      trickExplanation: '73 × 10 = 730. 730 - 73 = 657.',
      category: 'Perkalian 9'
    },
    {
      id: 'mm-2-8',
      prompt: 'Gunakan metode menghitung maju ke 500.',
      question: '500 - 247 = ?',
      options: [253, 243, 263, 273],
      correctAnswer: 253,
      trickExplanation: '247 -> 250 (+3) -> 300 (+50) -> 500 (+200) = 253.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'mm-2-9',
      prompt: 'Gunakan kuadrat berakhiran 5: 8 × 9 lalu 25.',
      question: '85² = ?',
      options: [7225, 7125, 7325, 7245],
      correctAnswer: 7225,
      trickExplanation: '8 × 9 = 72, tempelkan 25 -> 7.225.',
      category: 'Kuadrat Cepat'
    },
    {
      id: 'mm-2-10',
      prompt: 'Gunakan kiri ke kanan: 476 + 300 -> + 40 -> + 8.',
      question: '476 + 348 = ?',
      options: [824, 814, 834, 804],
      correctAnswer: 824,
      trickExplanation: '476 + 300 = 776 -> + 40 = 816 -> + 8 = 824.',
      category: 'Penjumlahan Kiri ke Kanan'
    }
  ]
];

// Simple pseudo-random generator with deterministic seed
function createPseudoRandom(seedStr: string) {
  let h = 1779033703 ^ seedStr.length;
  for (let i = 0; i < seedStr.length; i++) {
    h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function() {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

// Generator function to dynamically create 10-question sets (seeded or randomized)
export function generateRandomMentalMathSet(seed?: string): MentalMathQuestion[] {
  const rand = seed ? createPseudoRandom(seed) : Math.random;
  const set: MentalMathQuestion[] = [];
  const seedPrefix = seed ? seed.replace(/[^a-zA-Z0-9]/g, '') : `${Date.now()}`;
  
  // 1. Mult 5
  const m5 = Math.floor(rand() * 80) + 14;
  set.push({
    id: `mm-${seedPrefix}-1`,
    prompt: 'Trik: Tambahkan 0 di belakang lalu bagi dua.',
    question: `${m5} × 5 = ?`,
    options: shuffleOptions(m5 * 5, [m5 * 5 - 10, m5 * 5 + 10, (m5 - 2) * 5], rand),
    correctAnswer: m5 * 5,
    trickExplanation: `${m5} × 10 = ${m5 * 10}, dibagi 2 = ${m5 * 5}.`,
    category: 'Perkalian 5'
  });

  // 2. Mult 11
  const d1 = Math.floor(rand() * 5) + 2;
  const d2 = Math.floor(rand() * 4) + 1;
  const num11 = d1 * 10 + d2;
  set.push({
    id: `mm-${seedPrefix}-2`,
    prompt: 'Trik: Selipkan jumlah kedua digit di tengah (a + b).',
    question: `${num11} × 11 = ?`,
    options: shuffleOptions(num11 * 11, [num11 * 11 - 10, num11 * 11 + 10, num11 * 11 - 11], rand),
    correctAnswer: num11 * 11,
    trickExplanation: `Digit tengah = ${d1} + ${d2} = ${d1 + d2}. Hasil = ${num11 * 11}.`,
    category: 'Perkalian 11'
  });

  // 3. Rounding Addition
  const baseA = Math.floor(rand() * 300) + 220;
  const roundB = 98; // close to 100
  set.push({
    id: `mm-${seedPrefix}-3`,
    prompt: 'Trik: Bulatkan 98 menjadi 100 lalu kurangi 2.',
    question: `${baseA} + ${roundB} = ?`,
    options: shuffleOptions(baseA + roundB, [baseA + 100, baseA + roundB - 2, baseA + roundB + 10], rand),
    correctAnswer: baseA + roundB,
    trickExplanation: `${baseA} + 100 = ${baseA + 100}, lalu dikurangi 2 = ${baseA + roundB}.`,
    category: 'Penjumlahan Kompensasi'
  });

  // 4. Commutative Percent
  const evenSmall = (Math.floor(rand() * 12) + 4) * 2; // e.g. 12, 16, 24
  set.push({
    id: `mm-${seedPrefix}-4`,
    prompt: 'Trik Komutatif: x% dari 50 = 50% dari x (setengah nilai x).',
    question: `${evenSmall}% dari 50 = ?`,
    options: shuffleOptions(evenSmall / 2, [evenSmall / 2 - 1, evenSmall / 2 + 2, evenSmall / 2 + 1], rand),
    correctAnswer: evenSmall / 2,
    trickExplanation: `50% dari ${evenSmall} = ${evenSmall} / 2 = ${evenSmall / 2}.`,
    category: 'Persentase Cepat'
  });

  // 5. Square ending 5
  const tens = Math.floor(rand() * 7) + 2; // 2..8
  const sqNum = tens * 10 + 5;
  const sqAns = sqNum * sqNum;
  set.push({
    id: `mm-${seedPrefix}-5`,
    prompt: `Trik: ${tens} × ${tens + 1} lalu tempelkan 25 di belakang.`,
    question: `${sqNum}² = ?`,
    options: shuffleOptions(sqAns, [sqAns - 100, sqAns + 100, (tens * (tens + 1)) * 100 + 15], rand),
    correctAnswer: sqAns,
    trickExplanation: `${tens} × ${tens + 1} = ${tens * (tens + 1)}, akhiri dengan 25 = ${sqAns}.`,
    category: 'Kuadrat Cepat'
  });

  // 6. Subtraction from 1000
  const subNum = Math.floor(rand() * 600) + 230;
  const subAns = 1000 - subNum;
  set.push({
    id: `mm-${seedPrefix}-6`,
    prompt: 'Trik: Hitung maju bertahap menuju 1000.',
    question: `1000 - ${subNum} = ?`,
    options: shuffleOptions(subAns, [subAns - 10, subAns + 10, subAns - 1], rand),
    correctAnswer: subAns,
    trickExplanation: `Selisih bertahap dari ${subNum} menuju 1000 = ${subAns}.`,
    category: 'Pengurangan Maju'
  });

  // 7. Mult 25
  const m4 = (Math.floor(rand() * 15) + 4) * 4; // multiple of 4
  set.push({
    id: `mm-${seedPrefix}-7`,
    prompt: 'Trik: Bagi 4 lalu kalikan 100 (tambahkan dua nol).',
    question: `${m4} × 25 = ?`,
    options: shuffleOptions((m4 / 4) * 100, [((m4 / 4) * 100) - 50, ((m4 / 4) * 100) + 100, (m4 / 4) * 100 - 100], rand),
    correctAnswer: (m4 / 4) * 100,
    trickExplanation: `${m4} / 4 = ${m4 / 4}, dikalikan 100 = ${(m4 / 4) * 100}.`,
    category: 'Perkalian 25'
  });

  // 8. Mult 9
  const m9 = Math.floor(rand() * 50) + 23;
  set.push({
    id: `mm-${seedPrefix}-8`,
    prompt: 'Trik: Kalikan 10 lalu kurangi angka itu sendiri.',
    question: `${m9} × 9 = ?`,
    options: shuffleOptions(m9 * 9, [m9 * 9 - 9, m9 * 9 + 9, m9 * 10 - (m9 - 1)], rand),
    correctAnswer: m9 * 9,
    trickExplanation: `${m9} × 10 = ${m9 * 10}. ${m9 * 10} - ${m9} = ${m9 * 9}.`,
    category: 'Perkalian 9'
  });

  // 9. Left to right
  const ltrA = Math.floor(rand() * 300) + 340;
  const ltrB = Math.floor(rand() * 250) + 150;
  set.push({
    id: `mm-${seedPrefix}-9`,
    prompt: 'Trik: Jumlahkan ratusan lebih dulu, lalu puluhan, lalu satuan.',
    question: `${ltrA} + ${ltrB} = ?`,
    options: shuffleOptions(ltrA + ltrB, [ltrA + ltrB - 10, ltrA + ltrB + 10, ltrA + ltrB - 2], rand),
    correctAnswer: ltrA + ltrB,
    trickExplanation: `${ltrA} + ${Math.floor(ltrB / 100) * 100} = ${ltrA + Math.floor(ltrB / 100) * 100}, tambah puluhan & satuan = ${ltrA + ltrB}.`,
    category: 'Penjumlahan Kiri ke Kanan'
  });

  // 10. Percentage 15%
  const p15 = (Math.floor(rand() * 10) + 4) * 40; // e.g. 160, 240, 320
  const pAns = (p15 * 15) / 100;
  set.push({
    id: `mm-${seedPrefix}-10`,
    prompt: 'Trik: 10% (geser koma 1x) + 5% (setengah dari 10%).',
    question: `15% dari ${p15} = ?`,
    options: shuffleOptions(pAns, [pAns - 4, pAns + 6, pAns - 6], rand),
    correctAnswer: pAns,
    trickExplanation: `10% dari ${p15} = ${p15 * 0.1}. 5% = ${p15 * 0.05}. Jumlah = ${pAns}.`,
    category: 'Persentase 15%'
  });

  return set;
}

// Get daily 10-question set for today (changes automatically every day!)
export function getDailyMentalMathSet(dateStr?: string): MentalMathQuestion[] {
  const dateKey = dateStr || new Date().toISOString().split('T')[0];
  return generateRandomMentalMathSet(`mental-math-daily-${dateKey}`);
}

function shuffleOptions(correct: number, distractorList: number[], randFn: () => number = Math.random): number[] {
  const uniqueDistractors = Array.from(new Set(distractorList.filter(d => d !== correct)));
  while (uniqueDistractors.length < 3) {
    uniqueDistractors.push(correct + (randFn() > 0.5 ? 5 : -5) * (uniqueDistractors.length + 1));
  }
  const all = [correct, ...uniqueDistractors.slice(0, 3)];
  return all.sort(() => randFn() - 0.5);
}

