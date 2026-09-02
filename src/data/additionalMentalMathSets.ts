import { MentalMathQuestion } from '../types';

export const ADDITIONAL_MM_SETS_50: MentalMathQuestion[][] = [
  // Set 3: Kalkulasi Cepat Finansial & Bisnis (10 Soal)
  [
    {
      id: 'mm-3-1',
      prompt: 'Trik: 25% sama dengan seperempat (dibagi 4).',
      question: '25% dari 240.000 = ?',
      options: [60000, 50000, 70000, 48000],
      correctAnswer: 60000,
      trickExplanation: '240.000 ÷ 4 = 60.000.',
      category: 'Finansial Cepat'
    },
    {
      id: 'mm-3-2',
      prompt: 'Trik: 10% = 15.000, maka 30% = 15.000 × 3.',
      question: '30% dari 150.000 = ?',
      options: [45000, 40000, 50000, 35000],
      correctAnswer: 45000,
      trickExplanation: '10% dari 150.000 = 15.000. 15.000 × 3 = 45.000.',
      category: 'Finansial Cepat'
    },
    {
      id: 'mm-3-3',
      prompt: 'Trik: 10% = 35.000, maka 20% = 35.000 × 2.',
      question: '20% dari 350.000 = ?',
      options: [70000, 65000, 75000, 80000],
      correctAnswer: 70000,
      trickExplanation: '10% = 35.000 -> 20% = 70.000.',
      category: 'Finansial Cepat'
    },
    {
      id: 'mm-3-4',
      prompt: 'Trik: Total bagian = 3 + 5 = 8. 400 ÷ 8 = 50 per bagian. 3 bagian = 3 × 50.',
      question: 'Nilai 3 bagian dari rasio 3:5 pada total 400 = ?',
      options: [150, 140, 160, 250],
      correctAnswer: 150,
      trickExplanation: '400 ÷ 8 = 50. Nilai 3 bagian = 3 × 50 = 150.',
      category: 'Rasio & Proporsi'
    },
    {
      id: 'mm-3-5',
      prompt: 'Trik: Bagi 4 sama dengan bagi 2 dua kali berturut-turut.',
      question: '1.800.000 ÷ 4 = ?',
      options: [450000, 425000, 475000, 400000],
      correctAnswer: 450000,
      trickExplanation: '1.800.000 ÷ 2 = 900.000, lalu 900.000 ÷ 2 = 450.000.',
      category: 'Pembagian Cepat'
    },
    {
      id: 'mm-3-6',
      prompt: 'Trik: 10% = 50.000, 1% = 5.000. Jumlahkan: 50.000 + 5.000.',
      question: '11% dari 500.000 = ?',
      options: [55000, 50000, 60000, 51000],
      correctAnswer: 55000,
      trickExplanation: '10% = 50.000 dan 1% = 5.000. 11% = 55.000.',
      category: 'Finansial Cepat'
    },
    {
      id: 'mm-3-7',
      prompt: 'Trik: 10% = 8.000, 5% = setengah dari 8.000 = 4.000.',
      question: '15% dari 80.000 = ?',
      options: [12000, 10000, 14000, 8000],
      correctAnswer: 12000,
      trickExplanation: '8.000 + 4.000 = 12.000.',
      category: 'Persentase Cepat'
    },
    {
      id: 'mm-3-8',
      prompt: 'Trik: 12 × 75 = 3 × (4 × 75) = 3 × 300 = 900.',
      question: '12 × 75.000 = ?',
      options: [900000, 850000, 950000, 800000],
      correctAnswer: 900000,
      trickExplanation: '4 × 75 = 300. 3 × 300 = 900 -> 900.000.',
      category: 'Perkalian Faktor'
    },
    {
      id: 'mm-3-9',
      prompt: 'Trik: 10% = 600.000, maka 5% adalah separuhnya.',
      question: '5% dari 6.000.000 = ?',
      options: [300000, 250000, 350000, 30000],
      correctAnswer: 300000,
      trickExplanation: '10% = 600.000. Separuhnya (5%) = 300.000.',
      category: 'Finansial Cepat'
    },
    {
      id: 'mm-3-10',
      prompt: 'Trik Komutatif: 8% dari 250 = 250% dari 8 = 2.5 × 8.',
      question: '8% dari 250.000 = ?',
      options: [20000, 18000, 22000, 25000],
      correctAnswer: 20000,
      trickExplanation: '25% dari 80.000 = 20.000.',
      category: 'Persentase Komutatif'
    }
  ],

  // Set 4: Basis 100 & Selisih Kuadrat (10 Soal)
  [
    {
      id: 'mm-4-1',
      prompt: 'Trik Basis 100: Selisih -4 dan -6. 96 - 6 = 90, (-4)×(-6) = 24.',
      question: '96 × 94 = ?',
      options: [9024, 9014, 9034, 8924],
      correctAnswer: 9024,
      trickExplanation: '96 - 6 = 90, tempelkan (-4) × (-6) = 24 -> 9.024.',
      category: 'Perkalian Basis 100'
    },
    {
      id: 'mm-4-2',
      prompt: 'Trik Basis 100: Selisih -2 dan -3. 98 - 3 = 95, (-2)×(-3) = 06.',
      question: '98 × 97 = ?',
      options: [9506, 9516, 9496, 9606],
      correctAnswer: 9506,
      trickExplanation: '98 - 3 = 95, tempelkan 06 -> 9.506.',
      category: 'Perkalian Basis 100'
    },
    {
      id: 'mm-4-3',
      prompt: 'Trik Basis 100: Selisih +3 dan +5. 103 + 5 = 108, 3×5 = 15.',
      question: '103 × 105 = ?',
      options: [10815, 10825, 10715, 10915],
      correctAnswer: 10815,
      trickExplanation: '103 + 5 = 108, tempelkan 15 -> 10.815.',
      category: 'Perkalian Basis 100'
    },
    {
      id: 'mm-4-4',
      prompt: 'Trik Basis 100: Selisih +4 dan +6. 104 + 6 = 110, 4×6 = 24.',
      question: '104 × 106 = ?',
      options: [11024, 11034, 10924, 11124],
      correctAnswer: 11024,
      trickExplanation: '104 + 6 = 110, tempelkan 24 -> 11.024.',
      category: 'Perkalian Basis 100'
    },
    {
      id: 'mm-4-5',
      prompt: 'Trik Selisih Kuadrat: (50 - 3)(50 + 3) = 50² - 3² = 2500 - 9.',
      question: '47 × 53 = ?',
      options: [2491, 2481, 2501, 2499],
      correctAnswer: 2491,
      trickExplanation: '2500 - 9 = 2.491.',
      category: 'Selisih Kuadrat'
    },
    {
      id: 'mm-4-6',
      prompt: 'Trik Selisih Kuadrat: (40 - 2)(40 + 2) = 40² - 2² = 1600 - 4.',
      question: '38 × 42 = ?',
      options: [1596, 1586, 1606, 1594],
      correctAnswer: 1596,
      trickExplanation: '1600 - 4 = 1.596.',
      category: 'Selisih Kuadrat'
    },
    {
      id: 'mm-4-7',
      prompt: 'Trik Selisih Kuadrat: (70 - 1)(70 + 1) = 70² - 1² = 4900 - 1.',
      question: '69 × 71 = ?',
      options: [4899, 4889, 4901, 4891],
      correctAnswer: 4899,
      trickExplanation: '4900 - 1 = 4.899.',
      category: 'Selisih Kuadrat'
    },
    {
      id: 'mm-4-8',
      prompt: 'Trik Kuadrat Akhiran 5: 8 × 9 = 72, tempelkan 25.',
      question: '85² = ?',
      options: [7225, 7125, 7325, 7235],
      correctAnswer: 7225,
      trickExplanation: '8 × 9 = 72 -> 7.225.',
      category: 'Kuadrat Cepat'
    },
    {
      id: 'mm-4-9',
      prompt: 'Trik Kuadrat Akhiran 5: 5 × 6 = 30, tempelkan 25.',
      question: '55² = ?',
      options: [3025, 2925, 3125, 3035],
      correctAnswer: 3025,
      trickExplanation: '5 × 6 = 30 -> 3.025.',
      category: 'Kuadrat Cepat'
    },
    {
      id: 'mm-4-10',
      prompt: 'Trik Kuadrat Akhiran 5: 10 × 11 = 110, tempelkan 25.',
      question: '105² = ?',
      options: [11025, 11035, 10925, 11125],
      correctAnswer: 11025,
      trickExplanation: '10 × 11 = 110 -> 11.025.',
      category: 'Kuadrat Cepat'
    }
  ],

  // Set 5: Pecahan & Persentase Istimewa (10 Soal)
  [
    {
      id: 'mm-5-1',
      prompt: 'Trik Pecahan Istimewa: 12,5% sama dengan 1/8.',
      question: '12,5% dari 480 = ?',
      options: [60, 50, 70, 48],
      correctAnswer: 60,
      trickExplanation: '480 ÷ 8 = 60.',
      category: 'Pecahan Istimewa'
    },
    {
      id: 'mm-5-2',
      prompt: 'Trik Pecahan Istimewa: 37,5% = 3/8. Hitung (160 ÷ 8) × 3.',
      question: '37,5% dari 160 = ?',
      options: [60, 55, 65, 50],
      correctAnswer: 60,
      trickExplanation: '160 ÷ 8 = 20. 20 × 3 = 60.',
      category: 'Pecahan Istimewa'
    },
    {
      id: 'mm-5-3',
      prompt: 'Trik Pecahan Istimewa: 75% = 3/4. Hitung (320 ÷ 4) × 3.',
      question: '75% dari 320 = ?',
      options: [240, 220, 260, 250],
      correctAnswer: 240,
      trickExplanation: '320 ÷ 4 = 80. 80 × 3 = 240.',
      category: 'Pecahan Istimewa'
    },
    {
      id: 'mm-5-4',
      prompt: 'Trik Pecahan Istimewa: 16⅔% sama dengan seperenam (1/6).',
      question: '16⅔% (seperenam) dari 540 = ?',
      options: [90, 80, 100, 85],
      correctAnswer: 90,
      trickExplanation: '540 ÷ 6 = 90.',
      category: 'Pecahan Istimewa'
    },
    {
      id: 'mm-5-5',
      prompt: 'Trik Pecahan Istimewa: 33⅓% sama dengan sepertiga (1/3).',
      question: '33⅓% (sepertiga) dari 720 = ?',
      options: [240, 230, 250, 260],
      correctAnswer: 240,
      trickExplanation: '720 ÷ 3 = 240.',
      category: 'Pecahan Istimewa'
    },
    {
      id: 'mm-5-6',
      prompt: 'Trik Pecahan Istimewa: 62,5% = 5/8. Hitung (80 ÷ 8) × 5.',
      question: '62,5% dari 80 = ?',
      options: [50, 45, 55, 40],
      correctAnswer: 50,
      trickExplanation: '80 ÷ 8 = 10. 10 × 5 = 50.',
      category: 'Pecahan Istimewa'
    },
    {
      id: 'mm-5-7',
      prompt: 'Trik: 50% dari 18 = 9, 25% dari 44 = 11. Jumlahkan: 9 + 11.',
      question: '50% dari 18 + 25% dari 44 = ?',
      options: [20, 19, 21, 22],
      correctAnswer: 20,
      trickExplanation: '9 + 11 = 20.',
      category: 'Persentase Cepat'
    },
    {
      id: 'mm-5-8',
      prompt: 'Trik: 10% = 15. 40% = 15 × 4 = 60.',
      question: '40% dari 150 = ?',
      options: [60, 50, 70, 65],
      correctAnswer: 60,
      trickExplanation: '15 × 4 = 60.',
      category: 'Persentase Cepat'
    },
    {
      id: 'mm-5-9',
      prompt: 'Trik: 25% sama dengan membagi 4 secara langsung.',
      question: '25% dari 68 = ?',
      options: [17, 16, 18, 19],
      correctAnswer: 17,
      trickExplanation: '68 ÷ 4 = 17.',
      category: 'Pecahan Istimewa'
    },
    {
      id: 'mm-5-10',
      prompt: 'Trik: 10% = 22, 5% = 11. Jumlahkan keduanya.',
      question: '15% dari 220 = ?',
      options: [33, 31, 35, 22],
      correctAnswer: 33,
      trickExplanation: '22 + 11 = 33.',
      category: 'Persentase Cepat'
    }
  ],

  // Set 6: Left-to-Right & Kelompok Angka (10 Soal)
  [
    {
      id: 'mm-6-1',
      prompt: 'Trik Kiri ke Kanan: 584 + 300 = 884 -> + 60 = 944 -> + 7 = 951.',
      question: '584 + 367 = ?',
      options: [951, 941, 961, 851],
      correctAnswer: 951,
      trickExplanation: '584 + 300 = 884 -> + 60 = 944 -> + 7 = 951.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'mm-6-2',
      prompt: 'Trik Kiri ke Kanan: 679 + 400 = 1079 -> + 80 = 1159 -> + 5 = 1164.',
      question: '679 + 485 = ?',
      options: [1164, 1154, 1174, 1064],
      correctAnswer: 1164,
      trickExplanation: '679 + 400 = 1079 -> + 80 = 1159 -> + 5 = 1164.',
      category: 'Penjumlahan Kiri ke Kanan'
    },
    {
      id: 'mm-6-3',
      prompt: 'Trik Kompensasi: 843 - 300 + 4 = 543 + 4.',
      question: '843 - 296 = ?',
      options: [547, 537, 557, 543],
      correctAnswer: 547,
      trickExplanation: '843 - 300 = 543, tambahkan 4 kembali = 547.',
      category: 'Pengurangan Kompensasi'
    },
    {
      id: 'mm-6-4',
      prompt: 'Trik Kompensasi: 921 - 500 + 2 = 421 + 2.',
      question: '921 - 498 = ?',
      options: [423, 413, 433, 425],
      correctAnswer: 423,
      trickExplanation: '921 - 500 = 421, tambahkan 2 = 423.',
      category: 'Pengurangan Kompensasi'
    },
    {
      id: 'mm-6-5',
      prompt: 'Trik Menghitung Maju: 456 -> 460 (+4) -> 500 (+40) -> 1000 (+500).',
      question: '1000 - 456 = ?',
      options: [544, 554, 534, 644],
      correctAnswer: 544,
      trickExplanation: '4 + 40 + 500 = 544.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'mm-6-6',
      prompt: 'Trik Menghitung Maju: 783 -> 790 (+7) -> 800 (+10) -> 1000 (+200).',
      question: '1000 - 783 = ?',
      options: [217, 227, 207, 317],
      correctAnswer: 217,
      trickExplanation: '7 + 10 + 200 = 217.',
      category: 'Pengurangan Maju'
    },
    {
      id: 'mm-6-7',
      prompt: 'Trik Kelompokkan: 452 + 48 = 500. Lalu 500 + 539.',
      question: '452 + 539 + 48 = ?',
      options: [1039, 1029, 1049, 939],
      correctAnswer: 1039,
      trickExplanation: '452 + 48 = 500. 500 + 539 = 1.039.',
      category: 'Pengelompokan Angka'
    },
    {
      id: 'mm-6-8',
      prompt: 'Trik Kelompokkan: 317 + 83 = 400. Lalu 400 + 285.',
      question: '317 + 285 + 83 = ?',
      options: [685, 675, 695, 585],
      correctAnswer: 685,
      trickExplanation: '317 + 83 = 400. 400 + 285 = 685.',
      category: 'Pengelompokan Angka'
    },
    {
      id: 'mm-6-9',
      prompt: 'Trik: 750 - 300 = 450 -> - 80 = 370 -> - 4 = 366.',
      question: '750 - 384 = ?',
      options: [366, 356, 376, 364],
      correctAnswer: 366,
      trickExplanation: '750 - 300 = 450 -> - 80 = 370 -> - 4 = 366.',
      category: 'Pengurangan Cepat'
    },
    {
      id: 'mm-6-10',
      prompt: 'Trik: 1250 - 600 = 650, lalu 650 - 75 = 575.',
      question: '1250 - 675 = ?',
      options: [575, 565, 585, 625],
      correctAnswer: 575,
      trickExplanation: '1250 - 600 = 650 -> - 75 = 575.',
      category: 'Pengurangan Cepat'
    }
  ],

  // Set 7: Perkalian & Pembagian Trik Cepat (10 Soal)
  [
    {
      id: 'mm-7-1',
      prompt: 'Trik Perkalian 5: 64 × 10 = 640. Bagi 2 = 320.',
      question: '64 × 5 = ?',
      options: [320, 310, 330, 300],
      correctAnswer: 320,
      trickExplanation: '64 × 10 = 640. Setengah dari 640 = 320.',
      category: 'Perkalian 5'
    },
    {
      id: 'mm-7-2',
      prompt: 'Trik Perkalian 5: 86 × 10 = 860. Bagi 2 = 430.',
      question: '86 × 5 = ?',
      options: [430, 420, 440, 410],
      correctAnswer: 430,
      trickExplanation: '86 × 10 = 860. Setengah dari 860 = 430.',
      category: 'Perkalian 5'
    },
    {
      id: 'mm-7-3',
      prompt: 'Trik Perkalian 11: 6 (6+2) 2 = 682.',
      question: '62 × 11 = ?',
      options: [682, 672, 692, 702],
      correctAnswer: 682,
      trickExplanation: 'Selipkan 6 + 2 = 8 di tengah -> 682.',
      category: 'Perkalian 11'
    },
    {
      id: 'mm-7-4',
      prompt: 'Trik Perkalian 11: 5 (5+3) 3 = 583.',
      question: '53 × 11 = ?',
      options: [583, 573, 593, 563],
      correctAnswer: 583,
      trickExplanation: 'Selipkan 5 + 3 = 8 di tengah -> 583.',
      category: 'Perkalian 11'
    },
    {
      id: 'mm-7-5',
      prompt: 'Trik Perkalian 25: 48 ÷ 4 = 12. Tambahkan dua nol.',
      question: '48 × 25 = ?',
      options: [1200, 1150, 1250, 1100],
      correctAnswer: 1200,
      trickExplanation: '48 ÷ 4 = 12 -> 1.200.',
      category: 'Perkalian 25'
    },
    {
      id: 'mm-7-6',
      prompt: 'Trik Perkalian 25: 72 ÷ 4 = 18. Tambahkan dua nol.',
      question: '72 × 25 = ?',
      options: [1800, 1750, 1850, 1700],
      correctAnswer: 1800,
      trickExplanation: '72 ÷ 4 = 18 -> 1.800.',
      category: 'Perkalian 25'
    },
    {
      id: 'mm-7-7',
      prompt: 'Trik Perkalian 9: 67 × 10 = 670. Kurangi 67.',
      question: '67 × 9 = ?',
      options: [603, 593, 613, 607],
      correctAnswer: 603,
      trickExplanation: '670 - 67 = 603.',
      category: 'Perkalian 9'
    },
    {
      id: 'mm-7-8',
      prompt: 'Trik Perkalian 9: 84 × 10 = 840. Kurangi 84.',
      question: '84 × 9 = ?',
      options: [756, 746, 766, 736],
      correctAnswer: 756,
      trickExplanation: '840 - 84 = 756.',
      category: 'Perkalian 9'
    },
    {
      id: 'mm-7-9',
      prompt: 'Trik Pembagian 5: Kalikan 2 lalu bagi 10 (350 × 2 = 700 ÷ 10).',
      question: '350 ÷ 5 = ?',
      options: [70, 65, 75, 60],
      correctAnswer: 70,
      trickExplanation: '350 × 2 = 700. 700 ÷ 10 = 70.',
      category: 'Pembagian Cepat'
    },
    {
      id: 'mm-7-10',
      prompt: 'Trik Pembagian 25: Kalikan 4 lalu bagi 100 (900 × 4 = 3600 ÷ 100).',
      question: '900 ÷ 25 = ?',
      options: [36, 32, 40, 38],
      correctAnswer: 36,
      trickExplanation: '900 × 4 = 3600. 3600 ÷ 100 = 36.',
      category: 'Pembagian Cepat'
    }
  ]
];
