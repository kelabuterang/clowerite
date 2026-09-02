import { MentalMathGuideTopic, MentalMathQuestion } from '../types';
import { ADDITIONAL_MM_SETS_50 } from './additionalMentalMathSets';
import { ADDITIONAL_MM_SETS_50_PART2 } from './additionalMentalMathSetsPart2';

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

// ==================== DEDICATED 15-QUESTION DRILL SETS PER MODULE ====================
export const MODULE_DRILL_SETS: Record<string, MentalMathQuestion[]> = {
  'left-to-right': [
    {
      id: 'dr-ltr-1',
      prompt: 'Jumlahkan ratusan dulu, lalu puluhan, lalu satuan.',
      question: '430 + 250 = ?',
      options: [680, 670, 690, 580],
      correctAnswer: 680,
      trickExplanation: '430 + 200 = 630 -> 630 + 50 = 680.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'dr-ltr-2',
      prompt: 'Jumlahkan ratusan dulu, lalu puluhan, lalu satuan.',
      question: '564 + 325 = ?',
      options: [889, 879, 899, 869],
      correctAnswer: 889,
      trickExplanation: '564 + 300 = 864 -> 864 + 20 = 884 -> + 5 = 889.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'dr-ltr-3',
      prompt: 'Jumlahkan dari kiri ke kanan secara bertahap.',
      question: '648 + 271 = ?',
      options: [919, 909, 929, 819],
      correctAnswer: 919,
      trickExplanation: '648 + 200 = 848 -> 848 + 70 = 918 -> + 1 = 919.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'dr-ltr-4',
      prompt: 'Jumlahkan ratusan: 700 + 400 = 1100.',
      question: '735 + 452 = ?',
      options: [1187, 1177, 1197, 1087],
      correctAnswer: 1187,
      trickExplanation: '735 + 400 = 1135 -> + 50 = 1185 -> + 2 = 1187.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'dr-ltr-5',
      prompt: 'Jumlahkan dari digit terbesar di sebelah kiri.',
      question: '829 + 164 = ?',
      options: [993, 983, 995, 1003],
      correctAnswer: 993,
      trickExplanation: '829 + 100 = 929 -> + 60 = 989 -> + 4 = 993.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'dr-ltr-6',
      prompt: 'Pecah 358 menjadi 300 + 50 + 8.',
      question: '674 + 358 = ?',
      options: [1032, 1022, 1042, 932],
      correctAnswer: 1032,
      trickExplanation: '674 + 300 = 974 -> + 50 = 1024 -> + 8 = 1032.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'dr-ltr-7',
      prompt: 'Jumlahkan dari kiri ke kanan: 450 + 380.',
      question: '458 + 386 = ?',
      options: [844, 834, 854, 744],
      correctAnswer: 844,
      trickExplanation: '458 + 300 = 758 -> + 80 = 838 -> + 6 = 844.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'dr-ltr-8',
      prompt: 'Tambahkan ratusan dulu: 845 + 500 = 1345.',
      question: '845 + 537 = ?',
      options: [1382, 1372, 1392, 1282],
      correctAnswer: 1382,
      trickExplanation: '845 + 500 = 1345 -> + 30 = 1375 -> + 7 = 1382.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'dr-ltr-9',
      prompt: 'Jumlahkan kiri ke kanan tanpa coretan.',
      question: '294 + 618 = ?',
      options: [912, 902, 922, 812],
      correctAnswer: 912,
      trickExplanation: '294 + 600 = 894 -> + 10 = 904 -> + 8 = 912.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'dr-ltr-10',
      prompt: 'Pecah 476 menjadi 400 + 70 + 6.',
      question: '528 + 476 = ?',
      options: [1004, 994, 1014, 1002],
      correctAnswer: 1004,
      trickExplanation: '528 + 400 = 928 -> + 70 = 998 -> + 6 = 1004.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'dr-ltr-11',
      prompt: 'Jumlahkan ratusan lalu puluhan dan satuan.',
      question: '716 + 289 = ?',
      options: [1005, 995, 1015, 985],
      correctAnswer: 1005,
      trickExplanation: '716 + 200 = 916 -> + 80 = 996 -> + 9 = 1005.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'dr-ltr-12',
      prompt: 'Pecah 380 menjadi 300 + 80.',
      question: '637 + 384 = ?',
      options: [1021, 1011, 1031, 921],
      correctAnswer: 1021,
      trickExplanation: '637 + 300 = 937 -> + 80 = 1017 -> + 4 = 1021.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'dr-ltr-13',
      prompt: 'Jumlahkan dari digit kiri: ribuan dan ratusan.',
      question: '1250 + 870 = ?',
      options: [2120, 2110, 2130, 2020],
      correctAnswer: 2120,
      trickExplanation: '1250 + 800 = 2050 -> + 70 = 2120.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'dr-ltr-14',
      prompt: 'Jumlahkan: 355 + 475.',
      question: '355 + 475 = ?',
      options: [830, 820, 840, 730],
      correctAnswer: 830,
      trickExplanation: '355 + 400 = 755 -> + 70 = 825 -> + 5 = 830.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'dr-ltr-15',
      prompt: 'Jumlahkan 948 + 365 dari kiri.',
      question: '948 + 365 = ?',
      options: [1313, 1303, 1323, 1213],
      correctAnswer: 1313,
      trickExplanation: '948 + 300 = 1248 -> + 60 = 1308 -> + 5 = 1313.',
      category: 'Penjumlahan Kiri ke Kanan'
    }
  ],

  'rounding-compensation': [
    {
      id: 'dr-rc-1',
      prompt: 'Bulatkan 98 ke 100: tambah 100 lalu kurangi 2.',
      question: '437 + 98 = ?',
      options: [535, 525, 545, 537],
      correctAnswer: 535,
      trickExplanation: '437 + 100 = 537, lalu 537 - 2 = 535.',
      category: 'Pembulatan & Kompensasi'
    },
    {
      id: 'dr-rc-2',
      prompt: 'Bulatkan 298 ke 300: tambah 300 lalu kurangi 2.',
      question: '546 + 298 = ?',
      options: [844, 834, 854, 846],
      correctAnswer: 844,
      trickExplanation: '546 + 300 = 846, lalu 846 - 2 = 844.',
      category: 'Pembulatan & Kompensasi'
    },
    {
      id: 'dr-rc-3',
      prompt: 'Bulatkan 195 ke 200: kurangi 200 lalu kembalikan +5.',
      question: '682 - 195 = ?',
      options: [487, 477, 497, 482],
      correctAnswer: 487,
      trickExplanation: '682 - 200 = 482, lalu 482 + 5 = 487.',
      category: 'Pembulatan & Kompensasi'
    },
    {
      id: 'dr-rc-4',
      prompt: 'Bulatkan 396 ke 400: tambah 400 lalu kurangi 4.',
      question: '815 + 396 = ?',
      options: [1211, 1201, 1221, 1111],
      correctAnswer: 1211,
      trickExplanation: '815 + 400 = 1215, lalu 1215 - 4 = 1211.',
      category: 'Pembulatan & Kompensasi'
    },
    {
      id: 'dr-rc-5',
      prompt: 'Bulatkan 497 ke 500: tambah 500 lalu kurangi 3.',
      question: '624 + 497 = ?',
      options: [1121, 1111, 1131, 1021],
      correctAnswer: 1121,
      trickExplanation: '624 + 500 = 1124, lalu 1124 - 3 = 1121.',
      category: 'Pembulatan & Kompensasi'
    },
    {
      id: 'dr-rc-6',
      prompt: 'Bulatkan 294 ke 300: kurangi 300 lalu tambah 6.',
      question: '750 - 294 = ?',
      options: [456, 446, 466, 450],
      correctAnswer: 456,
      trickExplanation: '750 - 300 = 450, lalu 450 + 6 = 456.',
      category: 'Pembulatan & Kompensasi'
    },
    {
      id: 'dr-rc-7',
      prompt: 'Bulatkan 99 ke 100: tambah 100 lalu kurangi 1.',
      question: '864 + 99 = ?',
      options: [963, 953, 973, 965],
      correctAnswer: 963,
      trickExplanation: '864 + 100 = 964, lalu 964 - 1 = 963.',
      category: 'Pembulatan & Kompensasi'
    },
    {
      id: 'dr-rc-8',
      prompt: 'Bulatkan 199 ke 200: tambah 200 lalu kurangi 1.',
      question: '375 + 199 = ?',
      options: [574, 564, 584, 575],
      correctAnswer: 574,
      trickExplanation: '375 + 200 = 575, lalu 575 - 1 = 574.',
      category: 'Pembulatan & Kompensasi'
    },
    {
      id: 'dr-rc-9',
      prompt: 'Bulatkan 395 ke 400: kurangi 400 lalu tambah 5.',
      question: '930 - 395 = ?',
      options: [535, 525, 545, 530],
      correctAnswer: 535,
      trickExplanation: '930 - 400 = 530, lalu 530 + 5 = 535.',
      category: 'Pembulatan & Kompensasi'
    },
    {
      id: 'dr-rc-10',
      prompt: 'Bulatkan 598 ke 600: tambah 600 lalu kurangi 2.',
      question: '745 + 598 = ?',
      options: [1343, 1333, 1353, 1243],
      correctAnswer: 1343,
      trickExplanation: '745 + 600 = 1345, lalu 1345 - 2 = 1343.',
      category: 'Pembulatan & Kompensasi'
    },
    {
      id: 'dr-rc-11',
      prompt: 'Bulatkan 490 ke 500: tambah 500 lalu kurangi 10.',
      question: '836 + 490 = ?',
      options: [1326, 1316, 1336, 1226],
      correctAnswer: 1326,
      trickExplanation: '836 + 500 = 1336, lalu 1336 - 10 = 1326.',
      category: 'Pembulatan & Kompensasi'
    },
    {
      id: 'dr-rc-12',
      prompt: 'Bulatkan 496 ke 500: kurangi 500 lalu tambah 4.',
      question: '820 - 496 = ?',
      options: [324, 314, 334, 320],
      correctAnswer: 324,
      trickExplanation: '820 - 500 = 320, lalu 320 + 4 = 324.',
      category: 'Pembulatan & Kompensasi'
    },
    {
      id: 'dr-rc-13',
      prompt: 'Bulatkan 198 ke 200: tambah 200 lalu kurangi 2.',
      question: '657 + 198 = ?',
      options: [855, 845, 865, 857],
      correctAnswer: 855,
      trickExplanation: '657 + 200 = 857, lalu 857 - 2 = 855.',
      category: 'Pembulatan & Kompensasi'
    },
    {
      id: 'dr-rc-14',
      prompt: 'Bulatkan 697 ke 700: tambah 700 lalu kurangi 3.',
      question: '482 + 697 = ?',
      options: [1179, 1169, 1189, 1079],
      correctAnswer: 1179,
      trickExplanation: '482 + 700 = 1182, lalu 1182 - 3 = 1179.',
      category: 'Pembulatan & Kompensasi'
    },
    {
      id: 'dr-rc-15',
      prompt: 'Bulatkan 595 ke 600: kurangi 600 lalu tambah 5.',
      question: '1240 - 595 = ?',
      options: [645, 635, 655, 640],
      correctAnswer: 645,
      trickExplanation: '1240 - 600 = 640, lalu 640 + 5 = 645.',
      category: 'Pembulatan & Kompensasi'
    }
  ],

  'counting-up-subtraction': [
    {
      id: 'dr-cu-1',
      prompt: 'Loncat: 263 -> 270 (+7) -> 300 (+30) -> 500 (+200).',
      question: '500 - 263 = ?',
      options: [237, 227, 247, 337],
      correctAnswer: 237,
      trickExplanation: '7 + 30 + 200 = 237.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'dr-cu-2',
      prompt: 'Loncat: 482 -> 490 (+8) -> 500 (+10) -> 1000 (+500).',
      question: '1000 - 482 = ?',
      options: [518, 508, 528, 618],
      correctAnswer: 518,
      trickExplanation: '8 + 10 + 500 = 518.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'dr-cu-3',
      prompt: 'Loncat: 385 -> 400 (+15) -> 730 (+330).',
      question: '730 - 385 = ?',
      options: [345, 335, 355, 445],
      correctAnswer: 345,
      trickExplanation: '15 + 330 = 345.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'dr-cu-4',
      prompt: 'Loncat: 348 -> 350 (+2) -> 400 (+50) -> 1000 (+600).',
      question: '1000 - 348 = ?',
      options: [652, 642, 662, 752],
      correctAnswer: 652,
      trickExplanation: '2 + 50 + 600 = 652.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'dr-cu-5',
      prompt: 'Loncat: 274 -> 300 (+26) -> 800 (+500).',
      question: '800 - 274 = ?',
      options: [526, 516, 536, 626],
      correctAnswer: 526,
      trickExplanation: '26 + 500 = 526.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'dr-cu-6',
      prompt: 'Loncat: 468 -> 500 (+32) -> 920 (+420).',
      question: '920 - 468 = ?',
      options: [452, 442, 462, 352],
      correctAnswer: 452,
      trickExplanation: '32 + 420 = 452.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'dr-cu-7',
      prompt: 'Loncat: 635 -> 640 (+5) -> 700 (+60) -> 1000 (+300).',
      question: '1000 - 635 = ?',
      options: [365, 355, 375, 465],
      correctAnswer: 365,
      trickExplanation: '5 + 60 + 300 = 365.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'dr-cu-8',
      prompt: 'Loncat: 187 -> 200 (+13) -> 600 (+400).',
      question: '600 - 187 = ?',
      options: [413, 403, 423, 513],
      correctAnswer: 413,
      trickExplanation: '13 + 400 = 413.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'dr-cu-9',
      prompt: 'Loncat: 512 -> 600 (+88) -> 840 (+240).',
      question: '840 - 512 = ?',
      options: [328, 318, 338, 428],
      correctAnswer: 328,
      trickExplanation: '88 + 240 = 328.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'dr-cu-10',
      prompt: 'Loncat: 789 -> 800 (+11) -> 1000 (+200).',
      question: '1000 - 789 = ?',
      options: [211, 201, 221, 311],
      correctAnswer: 211,
      trickExplanation: '11 + 200 = 211.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'dr-cu-11',
      prompt: 'Loncat: 245 -> 300 (+55) -> 750 (+450).',
      question: '750 - 245 = ?',
      options: [505, 495, 515, 605],
      correctAnswer: 505,
      trickExplanation: '55 + 450 = 505.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'dr-cu-12',
      prompt: 'Loncat: 165 -> 200 (+35) -> 500 (+300).',
      question: '500 - 165 = ?',
      options: [335, 325, 345, 435],
      correctAnswer: 335,
      trickExplanation: '35 + 300 = 335.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'dr-cu-13',
      prompt: 'Loncat: 673 -> 700 (+27) -> 1200 (+500).',
      question: '1200 - 673 = ?',
      options: [527, 517, 537, 627],
      correctAnswer: 527,
      trickExplanation: '27 + 500 = 527.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'dr-cu-14',
      prompt: 'Loncat: 846 -> 850 (+4) -> 900 (+50) -> 1000 (+100).',
      question: '1000 - 846 = ?',
      options: [154, 144, 164, 254],
      correctAnswer: 154,
      trickExplanation: '4 + 50 + 100 = 154.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'dr-cu-15',
      prompt: 'Loncat: 395 -> 400 (+5) -> 950 (+550).',
      question: '950 - 395 = ?',
      options: [555, 545, 565, 455],
      correctAnswer: 555,
      trickExplanation: '5 + 550 = 555.',
      category: 'Pengurangan Maju'
    }
  ],

  'magic-multiplication': [
    {
      id: 'dr-mm-1',
      prompt: 'Trik × 5: Kalikan 10 (tambah 0) lalu bagi 2.',
      question: '78 × 5 = ?',
      options: [390, 380, 400, 370],
      correctAnswer: 390,
      trickExplanation: '78 × 10 = 780. Setengah dari 780 adalah 390.',
      category: 'Perkalian Ajaib'
    },
    {
      id: 'dr-mm-2',
      prompt: 'Trik × 11: Selipkan jumlah digit di tengah (5 + 2 = 7).',
      question: '52 × 11 = ?',
      options: [572, 562, 582, 672],
      correctAnswer: 572,
      trickExplanation: '5 (5+2) 2 = 572.',
      category: 'Perkalian Ajaib'
    },
    {
      id: 'dr-mm-3',
      prompt: 'Trik × 25: Bagi 4 lalu kalikan 100.',
      question: '64 × 25 = ?',
      options: [1600, 1500, 1700, 1400],
      correctAnswer: 1600,
      trickExplanation: '64 / 4 = 16. Kalikan 100 = 1.600.',
      category: 'Perkalian Ajaib'
    },
    {
      id: 'dr-mm-4',
      prompt: 'Trik × 9: Kalikan 10 lalu kurangi angka itu sendiri.',
      question: '67 × 9 = ?',
      options: [603, 593, 613, 583],
      correctAnswer: 603,
      trickExplanation: '67 × 10 = 670. Lalu 670 - 67 = 603.',
      category: 'Perkalian Ajaib'
    },
    {
      id: 'dr-mm-5',
      prompt: 'Trik × 5: 96 × 10 = 960, bagi 2.',
      question: '96 × 5 = ?',
      options: [480, 470, 490, 460],
      correctAnswer: 480,
      trickExplanation: '960 / 2 = 480.',
      category: 'Perkalian Ajaib'
    },
    {
      id: 'dr-mm-6',
      prompt: 'Trik × 11: 3 (3+6) 6 = 396.',
      question: '36 × 11 = ?',
      options: [396, 386, 406, 376],
      correctAnswer: 396,
      trickExplanation: '3 + 6 = 9 di tengah -> 396.',
      category: 'Perkalian Ajaib'
    },
    {
      id: 'dr-mm-7',
      prompt: 'Trik × 25: 48 / 4 = 12, tambah dua nol.',
      question: '48 × 25 = ?',
      options: [1200, 1100, 1300, 1250],
      correctAnswer: 1200,
      trickExplanation: '48 / 4 = 12 -> 1.200.',
      category: 'Perkalian Ajaib'
    },
    {
      id: 'dr-mm-8',
      prompt: 'Trik × 9: 84 × 10 = 840. 840 - 84.',
      question: '84 × 9 = ?',
      options: [756, 746, 766, 736],
      correctAnswer: 756,
      trickExplanation: '840 - 84 = 756.',
      category: 'Perkalian Ajaib'
    },
    {
      id: 'dr-mm-9',
      prompt: 'Trik × 5: 140 / 2.',
      question: '14 × 5 = ?',
      options: [70, 60, 80, 65],
      correctAnswer: 70,
      trickExplanation: '14 × 10 = 140 -> 140 / 2 = 70.',
      category: 'Perkalian Ajaib'
    },
    {
      id: 'dr-mm-10',
      prompt: 'Trik × 11 dengan carry: 7 (7+5) 5 = 7 (12) 5 = 825.',
      question: '75 × 11 = ?',
      options: [825, 815, 835, 725],
      correctAnswer: 825,
      trickExplanation: '7 + 5 = 12. Tulis 2, simpan 1 ke angka 7 -> 825.',
      category: 'Perkalian Ajaib'
    },
    {
      id: 'dr-mm-11',
      prompt: 'Trik × 25: 84 / 4 = 21, kali 100.',
      question: '84 × 25 = ?',
      options: [2100, 2000, 2200, 2050],
      correctAnswer: 2100,
      trickExplanation: '84 / 4 = 21 -> 2.100.',
      category: 'Perkalian Ajaib'
    },
    {
      id: 'dr-mm-12',
      prompt: 'Trik × 9: 53 × 10 = 530. 530 - 53.',
      question: '53 × 9 = ?',
      options: [477, 467, 487, 457],
      correctAnswer: 477,
      trickExplanation: '530 - 53 = 477.',
      category: 'Perkalian Ajaib'
    },
    {
      id: 'dr-mm-13',
      prompt: 'Trik × 5: 128 × 10 = 1280, bagi 2.',
      question: '128 × 5 = ?',
      options: [640, 630, 650, 620],
      correctAnswer: 640,
      trickExplanation: '1280 / 2 = 640.',
      category: 'Perkalian Ajaib'
    },
    {
      id: 'dr-mm-14',
      prompt: 'Trik × 11: 4 (4+5) 5 = 495.',
      question: '45 × 11 = ?',
      options: [495, 485, 505, 475],
      correctAnswer: 495,
      trickExplanation: '4 + 5 = 9 di tengah -> 495.',
      category: 'Perkalian Ajaib'
    },
    {
      id: 'dr-mm-15',
      prompt: 'Trik × 25: 32 / 4 = 8, kali 100.',
      question: '32 × 25 = ?',
      options: [800, 750, 850, 900],
      correctAnswer: 800,
      trickExplanation: '32 / 4 = 8 -> 800.',
      category: 'Perkalian Ajaib'
    }
  ],

  'quick-percentages': [
    {
      id: 'dr-qp-1',
      prompt: 'Sifat komutatif: 18% dari 50 = 50% dari 18.',
      question: '18% dari 50 = ?',
      options: [9, 8, 10, 7],
      correctAnswer: 9,
      trickExplanation: '50% dari 18 adalah setengah dari 18 = 9.',
      category: 'Persentase Cepat'
    },
    {
      id: 'dr-qp-2',
      prompt: 'Balok dasar: 10% = 32, 5% = 16.',
      question: '15% dari 320 = ?',
      options: [48, 44, 52, 40],
      correctAnswer: 48,
      trickExplanation: '32 + 16 = 48.',
      category: 'Persentase Cepat'
    },
    {
      id: 'dr-qp-3',
      prompt: 'Sifat komutatif: 84% dari 25 = 25% dari 84.',
      question: '84% dari 25 = ?',
      options: [21, 20, 22, 19],
      correctAnswer: 21,
      trickExplanation: '25% dari 84 = 84 / 4 = 21.',
      category: 'Persentase Cepat'
    },
    {
      id: 'dr-qp-4',
      prompt: 'Balok dasar: 10% = 45, 20% = 90.',
      question: '20% dari 450 = ?',
      options: [90, 80, 100, 85],
      correctAnswer: 90,
      trickExplanation: '10% dari 450 = 45. 45 × 2 = 90.',
      category: 'Persentase Cepat'
    },
    {
      id: 'dr-qp-5',
      prompt: 'Sifat komutatif: 36% dari 50 = 50% dari 36.',
      question: '36% dari 50 = ?',
      options: [18, 16, 20, 15],
      correctAnswer: 18,
      trickExplanation: 'Setengah dari 36 = 18.',
      category: 'Persentase Cepat'
    },
    {
      id: 'dr-qp-6',
      prompt: 'Balok 15%: 10% (60) + 5% (30).',
      question: '15% dari 600 = ?',
      options: [90, 80, 100, 85],
      correctAnswer: 90,
      trickExplanation: '60 + 30 = 90.',
      category: 'Persentase Cepat'
    },
    {
      id: 'dr-qp-7',
      prompt: 'Sifat komutatif: 48% dari 25 = 25% dari 48.',
      question: '48% dari 25 = ?',
      options: [12, 11, 13, 10],
      correctAnswer: 12,
      trickExplanation: '48 / 4 = 12.',
      category: 'Persentase Cepat'
    },
    {
      id: 'dr-qp-8',
      prompt: 'Balok dasar 30%: 10% dari 250 = 25. 25 × 3 = ?',
      question: '30% dari 250 = ?',
      options: [75, 70, 80, 65],
      correctAnswer: 75,
      trickExplanation: '25 × 3 = 75.',
      category: 'Persentase Cepat'
    },
    {
      id: 'dr-qp-9',
      prompt: 'Sifat komutatif: 64% dari 50 = 50% dari 64.',
      question: '64% dari 50 = ?',
      options: [32, 30, 34, 28],
      correctAnswer: 32,
      trickExplanation: 'Setengah dari 64 = 32.',
      category: 'Persentase Cepat'
    },
    {
      id: 'dr-qp-10',
      prompt: 'Balok 15%: 10% (84) + 5% (42).',
      question: '15% dari 840 = ?',
      options: [126, 120, 132, 116],
      correctAnswer: 126,
      trickExplanation: '84 + 42 = 126.',
      category: 'Persentase Cepat'
    },
    {
      id: 'dr-qp-11',
      prompt: 'Sifat komutatif: 92% dari 50 = 50% dari 92.',
      question: '92% dari 50 = ?',
      options: [46, 44, 48, 42],
      correctAnswer: 46,
      trickExplanation: 'Setengah dari 92 = 46.',
      category: 'Persentase Cepat'
    },
    {
      id: 'dr-qp-12',
      prompt: 'Sifat komutatif: 72% dari 25 = 25% dari 72.',
      question: '72% dari 25 = ?',
      options: [18, 16, 20, 15],
      correctAnswer: 18,
      trickExplanation: '72 / 4 = 18.',
      category: 'Persentase Cepat'
    },
    {
      id: 'dr-qp-13',
      prompt: 'Balok 5%: 10% dari 480 = 48. Setengahnya = ?',
      question: '5% dari 480 = ?',
      options: [24, 20, 28, 22],
      correctAnswer: 24,
      trickExplanation: 'Setengah dari 48 = 24.',
      category: 'Persentase Cepat'
    },
    {
      id: 'dr-qp-14',
      prompt: 'Balok 25%: 1/4 dari 360.',
      question: '25% dari 360 = ?',
      options: [90, 80, 100, 85],
      correctAnswer: 90,
      trickExplanation: '360 / 4 = 90.',
      category: 'Persentase Cepat'
    },
    {
      id: 'dr-qp-15',
      prompt: 'Balok 15%: 10% (140) + 5% (70).',
      question: '15% dari 1400 = ?',
      options: [210, 200, 220, 190],
      correctAnswer: 210,
      trickExplanation: '140 + 70 = 210.',
      category: 'Persentase Cepat'
    }
  ],

  'square-ending-5': [
    {
      id: 'dr-sq-1',
      prompt: 'Trik: 3 × 4 = 12, tempelkan 25 -> 1.225.',
      question: '35² = ?',
      options: [1225, 1125, 1325, 1255],
      correctAnswer: 1225,
      trickExplanation: '3 × 4 = 12, gabung 25 = 1.225.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'dr-sq-2',
      prompt: 'Trik: 6 × 7 = 42, tempelkan 25 -> 4.225.',
      question: '65² = ?',
      options: [4225, 4125, 4325, 4255],
      correctAnswer: 4225,
      trickExplanation: '6 × 7 = 42, gabung 25 = 4.225.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'dr-sq-3',
      prompt: 'Trik: 9 × 10 = 90, tempelkan 25 -> 9.025.',
      question: '95² = ?',
      options: [9025, 8925, 9125, 9055],
      correctAnswer: 9025,
      trickExplanation: '9 × 10 = 90, gabung 25 = 9.025.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'dr-sq-4',
      prompt: 'Trik: 2 × 3 = 6, tempelkan 25 -> 625.',
      question: '25² = ?',
      options: [625, 525, 725, 655],
      correctAnswer: 625,
      trickExplanation: '2 × 3 = 6, gabung 25 = 625.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'dr-sq-5',
      prompt: 'Trik: 4 × 5 = 20, tempelkan 25 -> 2.025.',
      question: '45² = ?',
      options: [2025, 1925, 2125, 2045],
      correctAnswer: 2025,
      trickExplanation: '4 × 5 = 20, gabung 25 = 2.025.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'dr-sq-6',
      prompt: 'Trik: 7 × 8 = 56, tempelkan 25 -> 5.625.',
      question: '75² = ?',
      options: [5625, 5525, 5725, 5655],
      correctAnswer: 5625,
      trickExplanation: '7 × 8 = 56, gabung 25 = 5.625.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'dr-sq-7',
      prompt: 'Trik: 8 × 9 = 72, tempelkan 25 -> 7.225.',
      question: '85² = ?',
      options: [7225, 7125, 7325, 7255],
      correctAnswer: 7225,
      trickExplanation: '8 × 9 = 72, gabung 25 = 7.225.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'dr-sq-8',
      prompt: 'Trik: 1 × 2 = 2, tempelkan 25 -> 225.',
      question: '15² = ?',
      options: [225, 215, 235, 195],
      correctAnswer: 225,
      trickExplanation: '1 × 2 = 2, gabung 25 = 225.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'dr-sq-9',
      prompt: 'Trik: 5 × 6 = 30, tempelkan 25 -> 3.025.',
      question: '55² = ?',
      options: [3025, 2925, 3125, 3055],
      correctAnswer: 3025,
      trickExplanation: '5 × 6 = 30, gabung 25 = 3.025.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'dr-sq-10',
      prompt: 'Trik: 10 × 11 = 110, tempelkan 25 -> 11.025.',
      question: '105² = ?',
      options: [11025, 10925, 11125, 11055],
      correctAnswer: 11025,
      trickExplanation: '10 × 11 = 110, gabung 25 = 11.025.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'dr-sq-11',
      prompt: 'Trik: 11 × 12 = 132, tempelkan 25 -> 13.225.',
      question: '115² = ?',
      options: [13225, 13125, 13325, 13255],
      correctAnswer: 13225,
      trickExplanation: '11 × 12 = 132, gabung 25 = 13.225.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'dr-sq-12',
      prompt: 'Trik: 12 × 13 = 156, tempelkan 25 -> 15.625.',
      question: '125² = ?',
      options: [15625, 15525, 15725, 15655],
      correctAnswer: 15625,
      trickExplanation: '12 × 13 = 156, gabung 25 = 15.625.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'dr-sq-13',
      prompt: 'Trik: 7 × 8 = 56, tempelkan 25.',
      question: '75² = ?',
      options: [5625, 5525, 5725, 5650],
      correctAnswer: 5625,
      trickExplanation: '7 × 8 = 56, gabung 25 = 5.625.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'dr-sq-14',
      prompt: 'Trik: 4 × 5 = 20, tempelkan 25.',
      question: '45² = ?',
      options: [2025, 1925, 2125, 2015],
      correctAnswer: 2025,
      trickExplanation: '4 × 5 = 20, gabung 25 = 2.025.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'dr-sq-15',
      prompt: 'Trik: 9 × 10 = 90, tempelkan 25.',
      question: '95² = ?',
      options: [9025, 8925, 9125, 9035],
      correctAnswer: 9025,
      trickExplanation: '9 × 10 = 90, gabung 25 = 9.025.',
      category: 'Kuadrat Berakhiran 5'
    }
  ]
};

export function getModuleDrillSet(moduleId: string): MentalMathQuestion[] {
  if (MODULE_DRILL_SETS[moduleId]) {
    return MODULE_DRILL_SETS[moduleId];
  }
  // Default fallback to first set
  return MODULE_DRILL_SETS['left-to-right'];
}

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
      prompt: 'Gunakan metode menghitung maju: 642 -> 700 (+58) -> 1000 (+300).',
      question: '1000 - 642 = ?',
      options: [358, 348, 368, 458],
      correctAnswer: 358,
      trickExplanation: '58 + 300 = 358.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'mm-2-7',
      prompt: 'Gunakan trik perkalian 9: 73 × 10 = 730. 730 - 73.',
      question: '73 × 9 = ?',
      options: [657, 647, 667, 637],
      correctAnswer: 657,
      trickExplanation: '730 - 73 = 657.',
      category: 'Perkalian 9'
    },
    {
      id: 'mm-2-8',
      prompt: 'Gunakan trik perkalian 25: 56 / 4 = 14.',
      question: '56 × 25 = ?',
      options: [1400, 1350, 1450, 1300],
      correctAnswer: 1400,
      trickExplanation: '56 / 4 = 14 -> 1.400.',
      category: 'Perkalian 25'
    },
    {
      id: 'mm-2-9',
      prompt: 'Gunakan penjumlahan kiri ke kanan: 746 + 400 = 1146 -> + 80 = 1226 -> + 7.',
      question: '746 + 487 = ?',
      options: [1233, 1223, 1243, 1133],
      correctAnswer: 1233,
      trickExplanation: '746 + 400 = 1146 -> + 80 = 1226 -> + 7 = 1233.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'mm-2-10',
      prompt: 'Pecah ke 10%: 10% dari 650 = 65. 20% = 130.',
      question: '20% dari 650 = ?',
      options: [130, 120, 140, 125],
      correctAnswer: 130,
      trickExplanation: '65 × 2 = 130.',
      category: 'Persentase Cepat'
    }
  ],
  ...ADDITIONAL_MM_SETS_50,
  ...ADDITIONAL_MM_SETS_50_PART2
];

/**
 * Generate a dynamic pseudo-random set of 10 questions based on a seed prefix
 */
export function generateRandomMentalMathSet(seedPrefix: string = 'daily'): MentalMathQuestion[] {
  let seed = 0;
  for (let i = 0; i < seedPrefix.length; i++) {
    seed = (seed << 5) - seed + seedPrefix.charCodeAt(i);
    seed |= 0;
  }

  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return Math.abs(seed) / 233280;
  };

  const set: MentalMathQuestion[] = [];

  // 1. Mult 5
  const m5 = Math.floor(rand() * 80) + 16;
  set.push({
    id: `mm-${seedPrefix}-1`,
    prompt: 'Trik: Kalikan 10 lalu bagi 2.',
    question: `${m5} × 5 = ?`,
    options: shuffleOptions((m5 * 10) / 2, [((m5 * 10) / 2) - 10, ((m5 * 10) / 2) + 10, ((m5 * 10) / 2) + 5], rand),
    correctAnswer: (m5 * 10) / 2,
    trickExplanation: `${m5} × 10 = ${m5 * 10}, dibagi 2 = ${(m5 * 10) / 2}.`,
    category: 'Perkalian 5'
  });

  // 2. Mult 11
  const d1 = Math.floor(rand() * 6) + 2;
  const d2 = Math.floor(rand() * (9 - d1)) + 1;
  const n11 = d1 * 10 + d2;
  set.push({
    id: `mm-${seedPrefix}-2`,
    prompt: 'Trik: Selipkan jumlah kedua digit di tengah.',
    question: `${n11} × 11 = ?`,
    options: shuffleOptions(n11 * 11, [n11 * 11 - 10, n11 * 11 + 10, n11 * 11 - 11], rand),
    correctAnswer: n11 * 11,
    trickExplanation: `${d1} (${d1}+${d2}) ${d2} = ${n11 * 11}.`,
    category: 'Perkalian 11'
  });

  // 3. Square ending in 5
  const tensDigit = Math.floor(rand() * 8) + 2;
  const n5 = tensDigit * 10 + 5;
  set.push({
    id: `mm-${seedPrefix}-3`,
    prompt: `Trik: ${tensDigit} × ${tensDigit + 1} lalu tempelkan 25.`,
    question: `${n5}² = ?`,
    options: shuffleOptions(n5 * n5, [n5 * n5 - 100, n5 * n5 + 100, (tensDigit * tensDigit) * 100 + 25], rand),
    correctAnswer: n5 * n5,
    trickExplanation: `${tensDigit} × ${tensDigit + 1} = ${tensDigit * (tensDigit + 1)}, tempelkan 25 = ${n5 * n5}.`,
    category: 'Kuadrat Berakhiran 5'
  });

  // 4. Rounding addition
  const baseA = Math.floor(rand() * 400) + 300;
  const baseB = [198, 298, 398, 497, 195][Math.floor(rand() * 5)];
  set.push({
    id: `mm-${seedPrefix}-4`,
    prompt: `Trik: Bulatkan ${baseB} ke ratusan terdekat, lalu kurangkan selisihnya.`,
    question: `${baseA} + ${baseB} = ?`,
    options: shuffleOptions(baseA + baseB, [baseA + baseB - 2, baseA + baseB + 10, baseA + baseB - 10], rand),
    correctAnswer: baseA + baseB,
    trickExplanation: `${baseA} + ${Math.round(baseB / 100) * 100} = ${baseA + Math.round(baseB / 100) * 100}, kurangi ${Math.round(baseB / 100) * 100 - baseB} = ${baseA + baseB}.`,
    category: 'Penjumlahan Kompensasi'
  });

  // 5. Commutative percentage
  const pct = [12, 14, 16, 18, 24, 32, 48, 64, 84][Math.floor(rand() * 9)];
  const pctBase = [50, 25][Math.floor(rand() * 2)];
  const pctAns = (pct * pctBase) / 100;
  set.push({
    id: `mm-${seedPrefix}-5`,
    prompt: `Trik: ${pct}% dari ${pctBase} sama dengan ${pctBase}% dari ${pct}.`,
    question: `${pct}% dari ${pctBase} = ?`,
    options: shuffleOptions(pctAns, [pctAns - 2, pctAns + 2, pctAns + 1], rand),
    correctAnswer: pctAns,
    trickExplanation: `${pctBase}% dari ${pct} = ${pctBase === 50 ? `${pct} / 2 = ${pctAns}` : `${pct} / 4 = ${pctAns}`}.`,
    category: 'Persentase Komutatif'
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
  const m4 = (Math.floor(rand() * 15) + 4) * 4;
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
  const p15 = (Math.floor(rand() * 10) + 4) * 40;
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

// Get daily 10-question set for today
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
