import { MentalMathQuestion } from '../types';

export const ADDITIONAL_MM_SETS_50_PART2: MentalMathQuestion[][] = [
  // Set 8: Kuadrat & Perkalian Bilangan Berakhiran 5 (10 Soal)
  [
    {
      id: 'mm-8-1',
      prompt: 'Trik: Puluhan n dikali (n + 1), lalu akhiri dengan 25. 3 × 4 = 12 -> 1225.',
      question: '35 × 35 (atau 35²) = ?',
      options: [1225, 1125, 1235, 1215],
      correctAnswer: 1225,
      trickExplanation: '3 × (3 + 1) = 3 × 4 = 12. Gabungkan dengan 25 = 1.225.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'mm-8-2',
      prompt: 'Trik: 6 × 7 = 42, lalu akhiri dengan 25.',
      question: '65 × 65 (atau 65²) = ?',
      options: [4225, 4125, 4325, 4205],
      correctAnswer: 4225,
      trickExplanation: '6 × 7 = 42. Disandingkan dengan 25 = 4.225.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'mm-8-3',
      prompt: 'Trik: 8 × 9 = 72, lalu akhiri dengan 25.',
      question: '85 × 85 (atau 85²) = ?',
      options: [7225, 7125, 7325, 7215],
      correctAnswer: 7225,
      trickExplanation: '8 × 9 = 72. Disandingkan dengan 25 = 7.225.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'mm-8-4',
      prompt: 'Trik: 45 × 12 = (45 × 2) × 6 = 90 × 6.',
      question: '45 × 12 = ?',
      options: [540, 520, 560, 480],
      correctAnswer: 540,
      trickExplanation: 'Gandakan 45 menjadi 90, separuhkan 12 menjadi 6. 90 × 6 = 540.',
      category: 'Dobel & Separuh'
    },
    {
      id: 'mm-8-5',
      prompt: 'Trik: Gandakan 75 jadi 150, separuhkan 16 jadi 8. 150 × 8 = 300 × 4.',
      question: '75 × 16 = ?',
      options: [1200, 1150, 1250, 1100],
      correctAnswer: 1200,
      trickExplanation: '75 × 16 = 150 × 8 = 1.200.',
      category: 'Dobel & Separuh'
    },
    {
      id: 'mm-8-6',
      prompt: 'Trik: 9 × 10 = 90, disandingkan dengan 25.',
      question: '95 × 95 (atau 95²) = ?',
      options: [9025, 8925, 9125, 9015],
      correctAnswer: 9025,
      trickExplanation: '9 × 10 = 90 -> 9.025.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'mm-8-7',
      prompt: 'Trik: 25 × 25 = 2 × 3 = 6 -> 625.',
      question: '25 × 25 (atau 25²) = ?',
      options: [625, 615, 635, 575],
      correctAnswer: 625,
      trickExplanation: '2 × 3 = 6 disandingkan dengan 25 = 625.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'mm-8-8',
      prompt: 'Trik: 35 × 18 = 70 × 9.',
      question: '35 × 18 = ?',
      options: [630, 620, 640, 580],
      correctAnswer: 630,
      trickExplanation: 'Gandakan 35 menjadi 70, bagi 18 jadi 9. 70 × 9 = 630.',
      category: 'Dobel & Separuh'
    },
    {
      id: 'mm-8-9',
      prompt: 'Trik: 55 × 55 = 5 × 6 = 30 -> 3025.',
      question: '55 × 55 (atau 55²) = ?',
      options: [3025, 2925, 3125, 3015],
      correctAnswer: 3025,
      trickExplanation: '5 × 6 = 30 disandingkan dengan 25 = 3.025.',
      category: 'Kuadrat Berakhiran 5'
    },
    {
      id: 'mm-8-10',
      prompt: 'Trik: 15 × 36 = 30 × 18.',
      question: '15 × 36 = ?',
      options: [540, 520, 560, 480],
      correctAnswer: 540,
      trickExplanation: '15 × 2 = 30, dan 36 ÷ 2 = 18. 30 × 18 = 540.',
      category: 'Dobel & Separuh'
    }
  ],

  // Set 9: Trik Komutatif Persen & Pembagian Cepat (10 Soal)
  [
    {
      id: 'mm-9-1',
      prompt: 'Trik: a% dari b = b% dari a. 48% dari 50 = 50% dari 48.',
      question: '48% dari 50 = ?',
      options: [24, 22, 26, 25],
      correctAnswer: 24,
      trickExplanation: '50% dari 48 sama dengan separuh dari 48 = 24.',
      category: 'Komutatif Persen'
    },
    {
      id: 'mm-9-2',
      prompt: 'Trik: 64% dari 25 = 25% dari 64 (seperempat dari 64).',
      question: '64% dari 25 = ?',
      options: [16, 14, 18, 15],
      correctAnswer: 16,
      trickExplanation: '25% dari 64 = 64 ÷ 4 = 16.',
      category: 'Komutatif Persen'
    },
    {
      id: 'mm-9-3',
      prompt: 'Trik: Bagi 25 sama dengan dikali 4 lalu dibagi 100.',
      question: '2.400 ÷ 25 = ?',
      options: [96, 92, 104, 88],
      correctAnswer: 96,
      trickExplanation: '2.400 × 4 = 9.600 -> 9.600 ÷ 100 = 96.',
      category: 'Pembagian 25'
    },
    {
      id: 'mm-9-4',
      prompt: 'Trik: 88% dari 50 = 50% dari 88.',
      question: '88% dari 50 = ?',
      options: [44, 42, 46, 40],
      correctAnswer: 44,
      trickExplanation: 'Separuh dari 88 = 44.',
      category: 'Komutatif Persen'
    },
    {
      id: 'mm-9-5',
      prompt: 'Trik: Bagi 50 sama dengan kalikan 2 lalu bagi 100.',
      question: '1.750 ÷ 50 = ?',
      options: [35, 30, 40, 25],
      correctAnswer: 35,
      trickExplanation: '1.750 × 2 = 3.500 -> 3.500 ÷ 100 = 35.',
      category: 'Pembagian 50'
    },
    {
      id: 'mm-9-6',
      prompt: 'Trik: 36% dari 75 = 75% dari 36 = 3/4 dari 36.',
      question: '36% dari 75 = ?',
      options: [27, 24, 28, 30],
      correctAnswer: 27,
      trickExplanation: '36 ÷ 4 = 9, lalu 9 × 3 = 27.',
      category: 'Komutatif Persen'
    },
    {
      id: 'mm-9-7',
      prompt: 'Trik: 1.300 ÷ 25 = (13 × 100) ÷ 25 = 13 × 4.',
      question: '1.300 ÷ 25 = ?',
      options: [52, 48, 56, 50],
      correctAnswer: 52,
      trickExplanation: '13 × 4 = 52.',
      category: 'Pembagian 25'
    },
    {
      id: 'mm-9-8',
      prompt: 'Trik: 92% dari 25 = 25% dari 92 = 92 ÷ 4.',
      question: '92% dari 25 = ?',
      options: [23, 21, 25, 22],
      correctAnswer: 23,
      trickExplanation: '92 ÷ 4 = 23.',
      category: 'Komutatif Persen'
    },
    {
      id: 'mm-9-9',
      prompt: 'Trik: 3.200 ÷ 50 = (3.200 × 2) ÷ 100 = 64.',
      question: '3.200 ÷ 50 = ?',
      options: [64, 60, 68, 58],
      correctAnswer: 64,
      trickExplanation: '32 × 2 = 64.',
      category: 'Pembagian 50'
    },
    {
      id: 'mm-9-10',
      prompt: 'Trik: 18% dari 50 = 50% dari 18.',
      question: '18% dari 50 = ?',
      options: [9, 8, 10, 12],
      correctAnswer: 9,
      trickExplanation: 'Separuh dari 18 = 9.',
      category: 'Komutatif Persen'
    }
  ],

  // Set 10: Trik Perkalian 15 dan 1.5 (10 Soal)
  [
    {
      id: 'mm-10-1',
      prompt: 'Trik: Tambahkan setengah dari angka aslinya, lalu tambahkan nol. 48 + 24 = 72 -> 720.',
      question: '48 × 15 = ?',
      options: [720, 700, 740, 680],
      correctAnswer: 720,
      trickExplanation: '48 × 10 = 480, setengahnya = 240. 480 + 240 = 720.',
      category: 'Perkalian 15'
    },
    {
      id: 'mm-10-2',
      prompt: 'Trik: 84 + 42 = 126 -> 1260.',
      question: '84 × 15 = ?',
      options: [1260, 1240, 1280, 1160],
      correctAnswer: 1260,
      trickExplanation: '840 + 420 = 1.260.',
      category: 'Perkalian 15'
    },
    {
      id: 'mm-10-3',
      prompt: 'Trik: 360 + separuhnya (180) = 540.',
      question: '360 × 1.5 = ?',
      options: [540, 520, 560, 480],
      correctAnswer: 540,
      trickExplanation: '360 + 180 = 540.',
      category: 'Perkalian 1.5'
    },
    {
      id: 'mm-10-4',
      prompt: 'Trik: 64 + 32 = 96 -> 960.',
      question: '64 × 15 = ?',
      options: [960, 940, 980, 920],
      correctAnswer: 960,
      trickExplanation: '64 × 10 = 640. Ditambah 320 = 960.',
      category: 'Perkalian 15'
    },
    {
      id: 'mm-10-5',
      prompt: 'Trik: 240 + separuhnya (120) = 360.',
      question: '240 × 1.5 = ?',
      options: [360, 340, 380, 320],
      correctAnswer: 360,
      trickExplanation: '240 + 120 = 360.',
      category: 'Perkalian 1.5'
    },
    {
      id: 'mm-10-6',
      prompt: 'Trik: 92 + 46 = 138 -> 1380.',
      question: '92 × 15 = ?',
      options: [1380, 1360, 1400, 1280],
      correctAnswer: 1380,
      trickExplanation: '920 + 460 = 1.380.',
      category: 'Perkalian 15'
    },
    {
      id: 'mm-10-7',
      prompt: 'Trik: 52 + 26 = 78 -> 780.',
      question: '52 × 15 = ?',
      options: [780, 760, 800, 740],
      correctAnswer: 780,
      trickExplanation: '520 + 260 = 780.',
      category: 'Perkalian 15'
    },
    {
      id: 'mm-10-8',
      prompt: 'Trik: 700 + separuhnya (350) = 1.050.',
      question: '700 × 1.5 = ?',
      options: [1050, 1000, 1100, 950],
      correctAnswer: 1050,
      trickExplanation: '700 + 350 = 1.050.',
      category: 'Perkalian 1.5'
    },
    {
      id: 'mm-10-9',
      prompt: 'Trik: 120 + 60 = 180 -> 1800.',
      question: '120 × 15 = ?',
      options: [1800, 1750, 1850, 1600],
      correctAnswer: 1800,
      trickExplanation: '1.200 + 600 = 1.800.',
      category: 'Perkalian 15'
    },
    {
      id: 'mm-10-10',
      prompt: 'Trik: 440 + separuhnya (220) = 660.',
      question: '440 × 1.5 = ?',
      options: [660, 640, 680, 620],
      correctAnswer: 660,
      trickExplanation: '440 + 220 = 660.',
      category: 'Perkalian 1.5'
    }
  ],

  // Set 11: Pengurangan Cepat dari Angka Bulat (10 Soal)
  [
    {
      id: 'mm-11-1',
      prompt: 'Trik: Semua digit jadi 9, digit terakhir jadi 10. 9-3=6, 9-7=2, 10-4=6 -> 626.',
      question: '1.000 - 374 = ?',
      options: [626, 636, 616, 726],
      correctAnswer: 626,
      trickExplanation: 'Aturan 9 dan 10: 9-3=6, 9-7=2, 10-4=6 -> 626.',
      category: 'Komplemen 1000'
    },
    {
      id: 'mm-11-2',
      prompt: 'Trik: 9-6=3, 9-8=1, 10-9=1 -> 311.',
      question: '1.000 - 689 = ?',
      options: [311, 321, 301, 411],
      correctAnswer: 311,
      trickExplanation: '9-6=3, 9-8=1, 10-9=1 -> 311.',
      category: 'Komplemen 1000'
    },
    {
      id: 'mm-11-3',
      prompt: 'Trik: 1.000 - 745 = 255. Tambahkan 1.000 sisa = 1.255.',
      question: '2.000 - 745 = ?',
      options: [1255, 1245, 1265, 1355],
      correctAnswer: 1255,
      trickExplanation: '2.000 - 700 = 1.300 -> 1.300 - 45 = 1.255.',
      category: 'Pengurangan Ribuan'
    },
    {
      id: 'mm-11-4',
      prompt: 'Trik: Dari 238 loncat ke 240 (+2), ke 300 (+60), ke 500 (+200).',
      question: '500 - 238 = ?',
      options: [262, 272, 252, 268],
      correctAnswer: 262,
      trickExplanation: '200 + 60 + 2 = 262.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'mm-11-5',
      prompt: 'Trik: 9-4=5, 9-2=7, 10-8=2 -> 572.',
      question: '1.000 - 428 = ?',
      options: [572, 582, 562, 672],
      correctAnswer: 572,
      trickExplanation: '9-4=5, 9-2=7, 10-8=2 -> 572.',
      category: 'Komplemen 1000'
    },
    {
      id: 'mm-11-6',
      prompt: 'Trik: 800 - 457 = 800 - 400 - 57 = 400 - 57 = 343.',
      question: '800 - 457 = ?',
      options: [343, 353, 333, 443],
      correctAnswer: 343,
      trickExplanation: '400 - 57 = 343.',
      category: 'Pengurangan Ratusan'
    },
    {
      id: 'mm-11-7',
      prompt: 'Trik: 9-1=8, 9-5=4, 10-6=4 -> 844.',
      question: '1.000 - 156 = ?',
      options: [844, 834, 854, 744],
      correctAnswer: 844,
      trickExplanation: '9-1=8, 9-5=4, 10-6=4 -> 844.',
      category: 'Komplemen 1000'
    },
    {
      id: 'mm-11-8',
      prompt: 'Trik: 700 - 365 = 700 - 300 - 65 = 400 - 65 = 335.',
      question: '700 - 365 = ?',
      options: [335, 345, 325, 330],
      correctAnswer: 335,
      trickExplanation: '400 - 65 = 335.',
      category: 'Pengurangan Ratusan'
    },
    {
      id: 'mm-11-9',
      prompt: 'Trik: 9-8=1, 9-3=6, 10-7=3 -> 163.',
      question: '1.000 - 837 = ?',
      options: [163, 173, 153, 263],
      correctAnswer: 163,
      trickExplanation: '9-8=1, 9-3=6, 10-7=3 -> 163.',
      category: 'Komplemen 1000'
    },
    {
      id: 'mm-11-10',
      prompt: 'Trik: 3.000 - 860 = 2.140.',
      question: '3.000 - 860 = ?',
      options: [2140, 2120, 2160, 2240],
      correctAnswer: 2140,
      trickExplanation: '3.000 - 800 = 2.200 -> 2.200 - 60 = 2.140.',
      category: 'Pengurangan Ribuan'
    }
  ],

  // Set 12: Kalkulasi Praktis Finansial & Potongan Harga (10 Soal)
  [
    {
      id: 'mm-12-1',
      prompt: 'Trik: 10% = 20.000, 30% = 60.000, 5% = 10.000. Jumlahkan: 60.000 + 10.000.',
      question: 'Diskon 35% dari harga Rp200.000 = Rp?',
      options: [70000, 65000, 75000, 60000],
      correctAnswer: 70000,
      trickExplanation: '35% = 30% + 5% = 60.000 + 10.000 = 70.000.',
      category: 'Diskon & Finansial'
    },
    {
      id: 'mm-12-2',
      prompt: 'Trik: 10% = 40.000, 5% = 20.000, 2.5% = 10.000. 7.5% = 20.000 + 10.000.',
      question: '7.5% dari Rp400.000 = Rp?',
      options: [30000, 25000, 35000, 28000],
      correctAnswer: 30000,
      trickExplanation: '5% = 20.000 dan 2.5% = 10.000. 7.5% = 30.000.',
      category: 'Diskon & Finansial'
    },
    {
      id: 'mm-12-3',
      prompt: 'Trik: 12.5% adalah 1/8 (seperdelapan). Bagi 320.000 dengan 8.',
      question: '12.5% dari Rp320.000 = Rp?',
      options: [40000, 35000, 45000, 38000],
      correctAnswer: 40000,
      trickExplanation: '320.000 ÷ 8 = 40.000.',
      category: 'Pecahan Istimewa'
    },
    {
      id: 'mm-12-4',
      prompt: 'Trik: 16.67% kira-kira 1/6 (seperenam). 180.000 ÷ 6 = 30.000.',
      question: '1/6 dari Rp180.000 = Rp?',
      options: [30000, 25000, 35000, 28000],
      correctAnswer: 30000,
      trickExplanation: '180.000 ÷ 6 = 30.000.',
      category: 'Pecahan Istimewa'
    },
    {
      id: 'mm-12-5',
      prompt: 'Trik: Diskon 40% berarti yang harus dibayar adalah 60%. 60% × 150.000.',
      question: 'Harga setelah diskon 40% dari Rp150.000 = Rp?',
      options: [90000, 85000, 95000, 100000],
      correctAnswer: 90000,
      trickExplanation: '60% dari 150.000 = 6 × 15.000 = 90.000.',
      category: 'Diskon & Finansial'
    },
    {
      id: 'mm-12-6',
      prompt: 'Trik: PPN 11% dari 300.000 = 10% (30.000) + 1% (3.000).',
      question: 'Pajak 11% dari Rp300.000 = Rp?',
      options: [33000, 31000, 35000, 30000],
      correctAnswer: 33000,
      trickExplanation: '30.000 + 3.000 = 33.000.',
      category: 'Pajak & Finansial'
    },
    {
      id: 'mm-12-7',
      prompt: 'Trik: 12.5% = 1/8. 480.000 ÷ 8 = 60.000.',
      question: '12.5% dari Rp480.000 = Rp?',
      options: [60000, 55000, 65000, 50000],
      correctAnswer: 60000,
      trickExplanation: '480.000 ÷ 8 = 60.000.',
      category: 'Pecahan Istimewa'
    },
    {
      id: 'mm-12-8',
      prompt: 'Trik: Diskon 15% dari 80.000 = 10% (8.000) + 5% (4.000) = 12.000.',
      question: 'Diskon 15% dari Rp80.000 = Rp?',
      options: [12000, 10000, 14000, 11000],
      correctAnswer: 12000,
      trickExplanation: '8.000 + 4.000 = 12.000.',
      category: 'Diskon & Finansial'
    },
    {
      id: 'mm-12-9',
      prompt: 'Trik: 33.33% sama dengan 1/3 (sepertiga). 270.000 ÷ 3 = 90.000.',
      question: '1/3 dari Rp270.000 = Rp?',
      options: [90000, 85000, 95000, 80000],
      correctAnswer: 90000,
      trickExplanation: '270.000 ÷ 3 = 90.000.',
      category: 'Pecahan Istimewa'
    },
    {
      id: 'mm-12-10',
      prompt: 'Trik: Keuntungan 25% dari modal 500.000 = 500.000 ÷ 4 = 125.000.',
      question: 'Profit 25% dari modal Rp500.000 = Rp?',
      options: [125000, 120000, 130000, 115000],
      correctAnswer: 125000,
      trickExplanation: '500.000 ÷ 4 = 125.000.',
      category: 'Diskon & Finansial'
    }
  ]
];
