import { IndonesianArticle } from '../types';

export const INDONESIAN_ARTICLES: IndonesianArticle[] = [
  {
    id: 'id-art-1',
    title: 'Uang yang Turun ke Desa dan Transformasi Ekonomi Kerakyatan',
    category: 'Sosial Humaniora',
    subTopic: 'Tata Kelola Dana Desa & Kebijakan Publik',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 382,
    estimatedMinutes: 2,
    content: [
      'Undang-Undang Nomor 6 Tahun 2014 tentang Desa mengubah kedudukan desa dalam susunan pemerintahan Indonesia. Desa berhenti menjadi ujung paling bawah rantai perintah, dan mulai diperlakukan sebagai pemerintahan yang punya kewenangan dan anggarannya sendiri.',
      'Wujud paling nyatanya berupa Dana Desa, yang mulai disalurkan pada 2015. Alokasi tahun pertama sekitar Rp20,77 triliun. Angkanya naik dari tahun ke tahun hingga mencapai Rp71 triliun pada 2024. Sepanjang 2015 sampai 2024, total yang dialokasikan mencapai sekitar Rp609,9 triliun untuk 75.259 desa.',
      'Perubahannya bersifat mendasar. Sebelumnya, pembangunan desa ditentukan lewat usulan yang naik berjenjang ke kabupaten, lalu kembali turun dalam bentuk proyek yang sudah ditetapkan orang lain. Dengan Dana Desa, keputusan tentang apa yang dibangun berpindah ke musyawarah desa. Prioritasnya diarahkan pada pembangunan dan pemberdayaan masyarakat, termasuk penanganan stunting dan kemiskinan ekstrem.',
      'Pemindahan kewenangan itu membawa risiko yang bisa diperkirakan. Analisis terhadap 591 putusan perkara korupsi Dana Desa sepanjang 2015-2023 menunjukkan pola yang berulang: penggelembungan harga material, proyek fiktif, hingga manipulasi laporan pertanggungjawaban. Tantangan terbesarnya bukan sekadar penegakan hukum, melainkan memperkuat kapasitas aparat desa dalam akuntansi publik dan membuka akses pengawasan partisipatif bagi warga desa.',
      'Kunci keberlanjutan ada pada digitalisasi sistem keuangan desa (Siskeudes) dan transparansi papan informasi proyek di balai desa. Ketika warga memiliki pemahaman literasi anggaran, setiap rupiah dana desa mampu menjadi pengungkit ekonomi lokal melalui BUMDes dan membuka lapangan kerja produktif di pedesaan.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-1',
        question: 'Undang-Undang nomor berapakah yang mengatur tentang Desa dan disahkan pada tahun 2014?',
        correctAnswers: ['UU No. 6 Tahun 2014', 'Undang-Undang Nomor 6 Tahun 2014', 'Nomor 6 Tahun 2014', 'UU No 6 Tahun 2014', 'UU Nomor 6', 'Nomor 6'],
        explanation: 'Disebutkan pada paragraf pertama bahwa Undang-Undang Nomor 6 Tahun 2014 mengubah kedudukan desa dalam pemerintahan Indonesia.',
        hint: 'Perhatikan angka undang-undang di awal artikel.'
      },
      {
        id: 'q-isian-2',
        question: 'Pada tahun berapa Dana Desa pertama kali mulai disalurkan ke desa-desa di Indonesia?',
        correctAnswers: ['2015', 'Tahun 2015'],
        explanation: 'Penyaluran Dana Desa pertama kali dimulai pada tahun 2015 dengan alokasi awal Rp20,77 triliun.',
        hint: 'Satu tahun setelah undang-undang disahkan.'
      },
      {
        id: 'q-isian-3',
        question: 'Berapa triliun rupiah alokasi Dana Desa pada tahun 2024?',
        correctAnswers: ['71', 'Rp71 triliun', '71 triliun', 'Rp 71 triliun'],
        explanation: 'Alokasi Dana Desa naik terus hingga mencapai Rp71 triliun pada tahun 2024.',
        hint: 'Angka puluhan triliun pada tahun 2024.'
      },
      {
        id: 'q-isian-4',
        question: 'Lembaga usaha milik desa apa yang menjadi pengungkit ekonomi lokal di pedesaan?',
        correctAnswers: ['BUMDes', 'Badan Usaha Milik Desa', 'BUM Desa'],
        explanation: 'BUMDes (Badan Usaha Milik Desa) disebut sebagai instrumen pengungkit ekonomi lokal yang membuka lapangan kerja.',
        hint: 'Singkatan 6 huruf berawalan BUM.'
      },
      {
        id: 'q-isian-5',
        question: 'Sistem digital apa yang digunakan untuk pengelolaan keuangan desa menurut artikel?',
        correctAnswers: ['Siskeudes', 'Sistem Keuangan Desa'],
        explanation: 'Siskeudes (Sistem Keuangan Desa) merupakan platform digitalisasi tata kelola anggaran desa.',
        hint: 'Singkatan Sistem Keuangan Desa.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-1',
        statement: 'Sebelum adanya UU Desa 2014, keputusan proyek pembangunan ditentukan langsung oleh musyawarah desa tanpa campur tangan kabupaten.',
        isTrue: false,
        explanation: 'Salah. Sebelumnya, pembangunan ditentukan berjenjang ke kabupaten dan turun sebagai proyek yang ditetapkan pihak lain.'
      },
      {
        id: 'q-tf-2',
        statement: 'Total alokasi Dana Desa dari tahun 2015 hingga 2024 mencapai sekitar Rp609,9 triliun.',
        isTrue: true,
        explanation: 'Benar. Sepanjang 2015-2024, total alokasi tercatat sekitar Rp609,9 triliun untuk 75.259 desa.'
      },
      {
        id: 'q-tf-3',
        statement: 'Dana Desa tidak diperbolehkan digunakan untuk program penanganan stunting dan pengentasan kemiskinan ekstrem.',
        isTrue: false,
        explanation: 'Salah. Penanganan stunting dan kemiskinan ekstrem justru menjadi salah satu prioritas utama penggunaan Dana Desa.'
      },
      {
        id: 'q-tf-4',
        statement: 'Modus korupsi Dana Desa antara lain meliputi penggelembungan harga material dan proyek fiktif.',
        isTrue: true,
        explanation: 'Benar. Analisis 591 putusan perkara korupsi menunjukkan pola penggelembungan harga material, proyek fiktif, dan manipulasi laporan.'
      },
      {
        id: 'q-tf-5',
        statement: 'Transparansi papan informasi proyek di balai desa merupakan salah satu wujud pengawasan partisipatif warga.',
        isTrue: true,
        explanation: 'Benar. Kunci keberlanjutan dan pencegahan korupsi adalah keterbukaan informasi publik bagi seluruh warga desa.'
      }
    ]
  },
  {
    id: 'id-art-2',
    title: 'Ancaman Nyata Mikroplastik di Rantai Makanan Laut Indonesia',
    category: 'Lingkungan & Isu Global',
    subTopic: 'Sampah Plastik & Ekosistem Bahari',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 395,
    estimatedMinutes: 2,
    content: [
      'Lautan Indonesia menghadapi krisis polusi polimer sintetis yang tak kasatmata. Partikel plastik berukuran kurang dari lima milimeter, yang dikenal sebagai mikroplastik, kini telah terdeteksi di hampir semua sampel sedimen, air permukaan, hingga saluran pencernaan biota laut di perairan nusantara.',
      'Mikroplastik terbagi menjadi dua kategori: primer dan sekunder. Mikroplastik primer diproduksi langsung untuk kebutuhan industri, seperti microbeads dalam produk kosmetik dan scrub pembersih wajah. Sedangkan mikroplastik sekunder terbentuk dari fragmentasi sampah plastik berukuran besar—seperti botol PET, kantong kresek, dan jaring nelayan—akibat paparan radiasi ultraviolet sinar matahari dan abrasi mekanik gelombang laut.',
      'Riset kolaboratif oseanografi terbaru menemukan bahwa ikan pelagis kecil seperti tongkol, kembung, dan lemuru di perairan Selat Sunda dan Laut Jawa mengonsumsi mikroplastik karena mengiranya sebagai zooplankton. Kandungan mikroplastik ini tidak hanya mengancam kesehatan ikan, melainkan juga menembus rantai makanan manusia melalui fenomena biomagnifikasi.',
      'Selain membawa senyawa kimia berbahaya seperti Bisphenol A (BPA) dan ftalat yang berfungsi sebagai pengganggu endokrin, permukaan mikroplastik bertindak layaknya spons yang menyerap logam berat berbahaya seperti timbal, kadmium, serta bakteri patogen laut.',
      'Upaya penanggulangan membutuhkan regulasi tegas pelarangan plastik sekali pakai, akselerasi riset bioplastik berbasis rumput laut lokal, dan pembenahan infrastruktur pengelolaan sampah di wilayah pesisir serta muara sungai utama.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-1',
        question: 'Berapa batas ukuran maksimal partikel plastik untuk dikategorikan sebagai mikroplastik menurut artikel?',
        correctAnswers: ['5 milimeter', '5 mm', 'lima milimeter', 'kurang dari 5 mm'],
        explanation: 'Mikroplastik didefinisikan sebagai partikel plastik dengan ukuran kurang dari lima milimeter (5 mm).',
        hint: 'Angka satuan milimeter di paragraf pertama.'
      },
      {
        id: 'q-isian-2',
        question: 'Partikel mikroplastik pada produk kosmetik pembersih wajah disebut dengan istilah apa?',
        correctAnswers: ['Microbeads', 'Mikroplastik primer', 'Microbead'],
        explanation: 'Microbeads adalah contoh mikroplastik primer yang sengaja diproduksi untuk scrub kosmetik.',
        hint: 'Istilah bahasa Inggris untuk butiran scrub.'
      },
      {
        id: 'q-isian-3',
        question: 'Proses akumulasi racun yang meningkat pada tingkatan rantai makanan yang lebih tinggi disebut fenomena apa?',
        correctAnswers: ['Biomagnifikasi', 'Biomagnification'],
        explanation: 'Biomagnifikasi adalah peningkatan konsentrasi zat berbahaya pada setiap tingkat trofik rantai makanan.',
        hint: 'Istilah biologi berawalan Bio-.'
      },
      {
        id: 'q-isian-4',
        question: 'Bahan alami hayati apa yang dapat dikembangkan sebagai bahan baku bioplastik lokal di Indonesia?',
        correctAnswers: ['Rumput laut', 'Rumput laut lokal', 'Seaweed'],
        explanation: 'Riset bioplastik berbasis rumput laut lokal menjadi salah satu solusi ramah lingkungan pengganti plastik polimer sintetis.',
        hint: 'Tumbuhan laut yang melimpah di pesisir Indonesia.'
      },
      {
        id: 'q-isian-5',
        question: 'Sebutkan salah satu zat kimia pengganggu endokrin yang terkandung dalam plastik menurut artikel!',
        correctAnswers: ['BPA', 'Bisphenol A', 'Ftalat', 'Phthalate'],
        explanation: 'BPA (Bisphenol A) dan ftalat adalah senyawa kimia berbahaya yang berfungsi sebagai pengganggu hormon endokrin.',
        hint: 'Singkatan 3 huruf yang sering ada pada label botol minuman bebas racun.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-1',
        statement: 'Mikroplastik sekunder tercipta dari pemecahan sampah plastik besar akibat radiasi sinar UV matahari dan ombak laut.',
        isTrue: true,
        explanation: 'Benar. Sampah plastik besar hancur menjadi partikel kecil sekunder karena paparan cuaca dan gelombang mekanik.'
      },
      {
        id: 'q-tf-2',
        statement: 'Ikan laut memakan mikroplastik karena rasanya yang manis dan menarik indra penciuman mereka.',
        isTrue: false,
        explanation: 'Salah. Ikan memakan mikroplastik karena keliru mengiranya sebagai mangsa alami mereka, yaitu zooplankton.'
      },
      {
        id: 'q-tf-3',
        statement: 'Permukaan mikroplastik mampu menyerap zat berbahaya seperti logam berat timbal dan bakteri patogen di lautan.',
        isTrue: true,
        explanation: 'Benar. Permukaan mikroplastik bertindak seperti spons penyerap polutan berbahaya dan logam berat.'
      },
      {
        id: 'q-tf-4',
        statement: 'Partikel mikroplastik di tubuh ikan tidak akan pernah bisa berpindah atau masuk ke dalam tubuh manusia yang mengonsumsinya.',
        isTrue: false,
        explanation: 'Salah. Melalui fenomena biomagnifikasi di rantai makanan, mikroplastik dan racunnya masuk ke tubuh manusia.'
      },
      {
        id: 'q-tf-5',
        statement: 'Pengembangan bioplastik berbasis rumput laut merupakan salah satu solusi inovatif yang ditawarkan dalam artikel.',
        isTrue: true,
        explanation: 'Benar. Rumput laut diusulkan sebagai alternatif biomaterial pengganti plastik konvensional.'
      }
    ]
  },
  {
    id: 'id-art-3',
    title: 'Irama Sirkadian: Mengapa Kualitas Tidur Menentukan Kinerja Kognitif',
    category: 'Kesehatan & Kedokteran',
    subTopic: 'Gaya Hidup Sehat & Riset Neurosains',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 410,
    estimatedMinutes: 2,
    content: [
      'Di era konektivitas 24 jam tanpa henti, gangguan pola tidur telah menjadi epidemi senyap yang mengikis kesehatan mental dan kapasitas intelektual manusia modern. Jam biologis tubuh kita dikendalikan oleh sistem bernama ritme sirkadian, sebuah osilator internal berdurasi sekitar 24 jam yang terletak di nukleus suprakiasmatik pada hipotalamus otak.',
      'Ritme sirkadian mengatur fluktuasi hormon krusial: produksi kortisol meningkat di pagi hari untuk memberikan energi dan kesiagaan, sementara kelenjar pineal menyekresikan melatonin saat kegelapan tiba guna menginduksi rasa kantuk dan relaksasi.',
      'Paparan cahaya biru (blue light) dengan panjang gelombang 450-480 nanometer dari layar gawai pintar dan laptop di malam hari menipu fotoreseptor retina. Otak mengira hari masih siang, sehingga sekresi melatonin tertunda hingga dua jam. Dampaknya adalah fase tidur gelombang lambat (deep sleep) dan tidur REM (Rapid Eye Movement) berkurang drastis.',
      'Padahal, saat fase tidur dalam inilah sistem glimfatik otak bekerja membersihkan metabolit beracun, termasuk plak protein beta-amiloid yang berkaitan erat dengan risiko penyakit Alzheimer. Selain itu, fase REM memegang peranan krusial dalam konsolidasi memori jangka panjang dan stabilitas regulasi emosi.',
      'Untuk memperbaiki ritme sirkadian, para pakar merekomendasikan paparan sinar matahari pagi selama 15-30 menit, menetapkan jadwal tidur yang konsisten setiap hari bahkan di akhir pekan, serta menghentikan pemakaian layar gawai minimal satu jam sebelum tidur.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-1',
        question: 'Bagian otak manakah yang menjadi pusat pengendali utama jam biologis tubuh sirkadian?',
        correctAnswers: ['Nukleus suprakiasmatik', 'Hipotalamus', 'Suprakiasmatik', 'SCN'],
        explanation: 'Pusat pengendali jam biologis sirkadian berada di nukleus suprakiasmatik (SCN) yang terletak pada hipotalamus.',
        hint: 'Istilah neurosains berawalan nukleus.'
      },
      {
        id: 'q-isian-2',
        question: 'Hormon apa yang disekresikan oleh kelenjar pineal saat gelap untuk memicu rasa kantuk?',
        correctAnswers: ['Melatonin', 'Hormon melatonin'],
        explanation: 'Melatonin adalah hormon tidur yang diproduksi oleh kelenjar pineal ketika kondisi sekitar mulai gelap.',
        hint: 'Hormon tidur populer berawalan huruf M.'
      },
      {
        id: 'q-isian-3',
        question: 'Sistem pembersihan sisa racun dan metabolit di otak saat tidur disebut sistem apa?',
        correctAnswers: ['Sistem glimfatik', 'Glimfatik', 'Glymphatic system'],
        explanation: 'Sistem glimfatik bertugas memompa cairan serebrospinal untuk membersihkan protein sampah di otak saat tidur lelap.',
        hint: 'Sistem pembersih otak berawalan G.'
      },
      {
        id: 'q-isian-4',
        question: 'Protein racun apa yang dibersihkan otak saat tidur yang menjadi pemicu penyakit Alzheimer?',
        correctAnswers: ['Beta-amiloid', 'Beta amiloid', 'Amiloid'],
        explanation: 'Penumpukan plak protein beta-amiloid di otak merupakan salah satu penyebab utama penurunan fungsi kognitif dan Alzheimer.',
        hint: 'Protein bernama Beta-...'
      },
      {
        id: 'q-isian-5',
        question: 'Berapa rentang waktu paparan sinar matahari pagi yang dianjurkan untuk mengatur ritme biologis?',
        correctAnswers: ['15-30 menit', '15 hingga 30 menit', '15-30', '15 sampai 30 menit'],
        explanation: 'Paparan sinar matahari pagi selama 15-30 menit membantu menyinkronkan jam biologis internal tubuh.',
        hint: 'Rentang waktu dalam hitungan menit di pagi hari.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-1',
        statement: 'Kadar hormon kortisol secara alami mencapai puncaknya pada malam hari tepat saat seseorang bersiap untuk tidur.',
        isTrue: false,
        explanation: 'Salah. Kortisol meningkat di pagi hari untuk memberikan kesiagaan dan menurun menjelang malam.'
      },
      {
        id: 'q-tf-2',
        statement: 'Cahaya biru dari layar gawai dapat menghambat dan menunda produksi hormon melatonin di otak.',
        isTrue: true,
        explanation: 'Benar. Cahaya biru menstimulasi retina sehingga otak mengira masih siang dan menunda pelepasan melatonin.'
      },
      {
        id: 'q-tf-3',
        statement: 'Fase tidur REM sangat penting untuk memproses konsolidasi memori jangka panjang dan keseimbangan emosional.',
        isTrue: true,
        explanation: 'Benar. Fase REM (Rapid Eye Movement) bertanggung jawab atas penyimpanan memori dan regulasi emosi.'
      },
      {
        id: 'q-tf-4',
        statement: 'Sistem glimfatik paling aktif membersihkan plak racun otak saat kita sedang berolahraga di siang hari.',
        isTrue: false,
        explanation: 'Salah. Sistem glimfatik aktif bekerja maksimal pada saat fase tidur gelombang lambat (deep sleep) di malam hari.'
      },
      {
        id: 'q-tf-5',
        statement: 'Menjaga jadwal tidur yang sama di akhir pekan membantu menjaga stabilitas ritme sirkadian tubuh.',
        isTrue: true,
        explanation: 'Benar. Konsistensi waktu tidur setiap hari mencegah terjadinya fenomena social jetlag.'
      }
    ]
  },
  {
    id: 'id-art-4',
    title: 'Akselerasi Transisi Energi: Potensi dan Tantangan Pembangkit Listrik Surya di Indonesia',
    category: 'Lingkungan & Isu Global',
    subTopic: 'Energi Terbarukan & Dekarbonisasi',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 390,
    estimatedMinutes: 2,
    content: [
      'Sebagai negara kepulauan yang dilintasi garis khatulistiwa, Indonesia dianugerahi intensitas radiasi matahari yang luar biasa melimpah sepanjang tahun. Potensi teknis energi surya nasional diperkirakan mencapai lebih dari 3.200 gigawatt (GW). Namun hingga saat ini, pemanfaatannya baru berkisar kurang dari 1 persen dari total kapasitas tersebut.',
      'Ketergantungan terhadap bahan bakar fosil, terutama batubara yang mendominasi lebih dari 60 persen bauran listrik PLN, menjadi hambatan utama dekarbonisasi. Kontrak jangka panjang dengan skema take-or-pay pada pembangkit listrik tenaga uap (PLTU) swasta menciptakan kondisi oversupply listrik di jaringan Jawa-Bali, sehingga mempersempit ruang integrasi energi baru terbarukan.',
      'Di sisi teknologi, penurunan drastis harga modul fotovoltaik global hingga lebih dari 80 persen dalam satu dekade terakhir membuka peluang besar bagi penerapan PLTS terapung (floating solar) di danau dan waduk serta PLTS atap skala perumahan dan industri.',
      'Tantangan mendasar dari energi surya adalah sifatnya yang intermiten—daya yang dihasilkan berfluktuasi bergantung pada intensitas cahaya dan tutupan awan. Solusi masa depan terletak pada penguatan jaringan transmisi pintar (smart grid) dan adopsi sistem penyimpanan energi baterai (Battery Energy Storage System / BESS) skala utilitas.',
      'Dengan kebijakan insentif tarif yang adil dan penyederhanaan izin instalasi PLTS atap, transisi menuju target Net Zero Emission pada 2060 dapat tercapai lebih cepat sekaligus menciptakan ribuan green jobs bagi generasi muda.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-1',
        question: 'Berapa gigawatt (GW) estimasi potensi teknis energi surya yang dimiliki Indonesia?',
        correctAnswers: ['3.200 GW', '3200 GW', 'lebih dari 3.200 gigawatt', '3200 gigawatt', '3.200'],
        explanation: 'Potensi teknis energi surya nasional diperkirakan melebihi 3.200 gigawatt (GW).',
        hint: 'Angka ribuan GW di paragraf pertama.'
      },
      {
        id: 'q-isian-2',
        question: 'Sumber energi fosil apa yang masih mendominasi lebih dari 60 persen bauran listrik nasional di Indonesia?',
        correctAnswers: ['Batubara', 'Batu bara', 'PLTU Batubara'],
        explanation: 'Pembangkit listrik tenaga uap berbahan bakar batubara mendominasi pasokan listrik saat ini.',
        hint: 'Batuan fosil hitam mudah terbakar.'
      },
      {
        id: 'q-isian-3',
        question: 'Apa istilah teknologi sistem penyimpanan energi baterai skala utilitas menurut artikel?',
        correctAnswers: ['BESS', 'Battery Energy Storage System'],
        explanation: 'BESS (Battery Energy Storage System) digunakan untuk menstabilkan pasokan energi surya yang intermiten.',
        hint: 'Singkatan 4 huruf sistem baterai.'
      },
      {
        id: 'q-isian-4',
        question: 'Tahun berapakah target pencapaian Net Zero Emission (Emisi Nol Bersih) Indonesia yang disebutkan?',
        correctAnswers: ['2060', 'Tahun 2060'],
        explanation: 'Pemerintah menargetkan pencapaian Net Zero Emission nasional pada tahun 2060.',
        hint: 'Tahun target di pertengahan abad 21.'
      },
      {
        id: 'q-isian-5',
        question: 'Model PLTS yang dibangun di atas permukaan waduk atau danau dinamakan PLTS apa?',
        correctAnswers: ['PLTS Terapung', 'Floating solar', 'Terapung'],
        explanation: 'PLTS terapung memanfaatkan permukaan air waduk untuk menghemat penggunaan lahan daratan.',
        hint: 'Kata sifat yang berarti mengapung di atas air.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-1',
        statement: 'Pemanfaatan energi surya di Indonesia saat ini sudah mencapai lebih dari 50 persen dari total kapasitas potensinya.',
        isTrue: false,
        explanation: 'Salah. Pemanfaatan energi surya saat ini masih di bawah 1 persen dari total potensi teknis 3.200 GW.'
      },
      {
        id: 'q-tf-2',
        statement: 'Harga modul fotovoltaik surya global mengalami penurunan lebih dari 80 persen dalam satu dekade terakhir.',
        isTrue: true,
        explanation: 'Benar. Kemajuan teknologi dan skala produksi menurunkan harga panel surya secara signifikan.'
      },
      {
        id: 'q-tf-3',
        statement: 'Sifat intermiten pada PLTS berarti listrik yang dihasilkan selalu stabil 24 jam tanpa terpengaruh cuaca.',
        isTrue: false,
        explanation: 'Salah. Intermiten berarti daya yang dihasilkan naik-turun dan fluktuatif bergantung pada sinar matahari dan awan.'
      },
      {
        id: 'q-tf-4',
        statement: 'Smart grid dan sistem baterai BESS diperlukan untuk mengatasi ketidakstabilan pasokan energi surya.',
        isTrue: true,
        explanation: 'Benar. Teknologi jaringan pintar dan baterai menjadi kunci integrasi energi terbarukan ke sistem kelistrikan.'
      },
      {
        id: 'q-tf-5',
        statement: 'Transisi energi terbarukan dapat membuka peluang terciptanya lapangan kerja hijau (green jobs) baru.',
        isTrue: true,
        explanation: 'Benar. Pembangunan infrastruktur energi hijau menciptakan sektor industri dan ketenagakerjaan baru.'
      }
    ]
  },
  {
    id: 'id-art-5',
    title: 'Kecerdasan Buatan Generatif dan Masa Depan Literasi Berpikir Kritis',
    category: 'Sains & Teknologi',
    subTopic: 'Perkembangan AI & Etika Digital',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 405,
    estimatedMinutes: 2,
    content: [
      'Kemunculan model bahasa besar (Large Language Models / LLM) telah merevolusi cara manusia menghasilkan teks, memecahkan kode pemrograman, dan memproses informasi. Namun di balik efisiensi luar biasa ini, para akademisi menyoroti risiko degradasi kognitif jika generasi muda terlalu bergantung pada jawaban instan kecerdasan buatan.',
      'LLM bekerja berdasarkan probabilitas statistik kata berikutnya (next-token prediction) dari triliunan korpus data pelatihan. Mekanisme ini membuat AI mampu menyusun kalimat yang sangat runtut, meyakinkan, dan gramatikal, namun tidak memiliki pemahaman makna intrinsik atau kesadaran faktual layaknya otak manusia.',
      'Salah satu fenomena berbahaya dari AI generatif adalah halusinasi (hallucination), yakni kondisi di mana model menghasilkan informasi palsu, kutipan referensi ilmiah fiktif, atau argumen yang keliru dengan nada yang sangat meyakinkan.',
      'Ketika pengguna menerima output AI secara pasif tanpa melakukan verifikasi silang (fact-checking), kemampuan penalaran analitis dan literasi kritis akan tumpul. Siswa dan profesional berisiko kehilangan keterampilan membedakan antara opini bias dan bukti empiris.',
      'Oleh karena itu, sistem pendidikan harus bergeser dari sekadar melarang penggunaan AI menjadi mengajarkan prompt literacy, verifikasi sumber primer, dan menempatkan kecerdasan buatan sebagai rekan dialog kritis, bukan pengganti proses berpikir mandiri.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-1',
        question: 'Prinsip kerja statistik dasar apa yang digunakan oleh model bahasa besar untuk menghasilkan teks?',
        correctAnswers: ['Next-token prediction', 'Prediksi token berikutnya', 'Probabilitas statistik kata', 'Prediksi kata'],
        explanation: 'LLM bekerja dengan memprediksi token atau kata berikutnya berdasarkan probabilitas statistik korpus data.',
        hint: 'Istilah teknis bahasa Inggris untuk prediksi kata lanjutan.'
      },
      {
        id: 'q-isian-2',
        question: 'Istilah apa yang digunakan ketika AI menghasilkan data atau referensi fiktif dengan gaya meyakinkan?',
        correctAnswers: ['Halusinasi', 'Hallucination', 'AI Hallucination'],
        explanation: 'Halusinasi AI adalah fenomena di mana model mengarang jawaban keliru namun disajikan secara percaya diri.',
        hint: 'Kata yang mirip dengan kondisi melihat bayangan semu.'
      },
      {
        id: 'q-isian-3',
        question: 'Kegiatan penting apa yang harus dilakukan pengguna untuk memastikan kebenaran output informasi dari AI?',
        correctAnswers: ['Verifikasi silang', 'Fact-checking', 'Cek fakta', 'Verifikasi'],
        explanation: 'Verifikasi silang atau fact-checking terhadap sumber primer mutlak diperlukan untuk mencegah penyebaran disinformasi.',
        hint: 'Pemeriksaan kebenaran fakta.'
      },
      {
        id: 'q-isian-4',
        question: 'Keterampilan literasi baru apa yang mengajarkan cara memberikan instruksi terarah kepada AI?',
        correctAnswers: ['Prompt literacy', 'Literasi prompt', 'Prompt engineering'],
        explanation: 'Prompt literacy adalah kecakapan menyusun instruksi yang efektif, etis, dan kritis kepada model AI.',
        hint: 'Literasi kata perintah berawalan P.'
      },
      {
        id: 'q-isian-5',
        question: 'Singkatan dari model bahasa besar dalam bahasa Inggris adalah apa?',
        correctAnswers: ['LLM', 'Large Language Models', 'Large Language Model'],
        explanation: 'LLM adalah akronim dari Large Language Models.',
        hint: 'Tiga huruf kapital L-L-M.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-1',
        statement: 'Model bahasa besar (LLM) memiliki kesadaran emosional dan pemahaman batin yang sama persis dengan manusia.',
        isTrue: false,
        explanation: 'Salah. LLM adalah model statistik probabilitas kata, tidak memiliki kesadaran intrinsik atau batin.'
      },
      {
        id: 'q-tf-2',
        statement: 'Fenomena halusinasi AI dapat menghasilkan kutipan jurnal ilmiah palsu yang terlihat sangat meyakinkan.',
        isTrue: true,
        explanation: 'Benar. Halusinasi AI sering kali menciptakan nama pengarang, judul buku, dan data fiktif.'
      },
      {
        id: 'q-tf-3',
        statement: 'Ketergantungan berlebih pada jawaban AI instan dapat menurunkan kemampuan berpikir kritis dan analitis.',
        isTrue: true,
        explanation: 'Benar. Tanpa latihan bernalar dan verifikasi mandiri, daya kritis pengguna dapat mengalami penurunan.'
      },
      {
        id: 'q-tf-4',
        statement: 'Solusi terbaik di dunia pendidikan adalah mematikan akses internet dan melarang total teknologi kecerdasan buatan.',
        isTrue: false,
        explanation: 'Salah. Pendekatan yang bijak adalah mengajarkan literasi AI, verifikasi sumber, dan etika pemanfaatan teknologi.'
      },
      {
        id: 'q-tf-5',
        statement: 'AI sebaiknya diposisikan sebagai rekan berdiskusi dan sarana eksplorasi gagasan, bukan otoritas kebenaran mutlak.',
        isTrue: true,
        explanation: 'Benar. Menempatkan AI sebagai mitra dialog menjaga peran manusia sebagai penilai kritis utama.'
      }
    ]
  },
  {
    id: 'id-art-6',
    title: 'Menyingkap Eksoplanet: Perburuan Dunia Baru di Zona Layak Huni Galaksi Kita',
    category: 'Sains & Teknologi',
    subTopic: 'Astronomi & Eksplorasi Antariksa',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 398,
    estimatedMinutes: 2,
    content: [
      'Pertanyaan abadi apakah manusia sendirian di alam semesta kini selangkah lebih dekat untuk terjawab. Berkat teleskop antariksa generasi mutakhir seperti Kepler, TESS, dan James Webb Space Telescope (JWST), para astronom telah mengonfirmasi keberadaan lebih dari 5.500 eksoplanet—planet yang mengorbit bintang di luar tata surya kita.',
      'Fokus utama perburuan adalah menemukan planet batuan yang berada di zona Goldilocks atau zona laik huni (habitable zone). Di zona orbital ini, jarak planet dari bintang induknya tidak terlalu panas dan tidak terlalu dingin, sehingga memungkinkan air dalam bentuk cair tetap bertahan di permukaannya.',
      'Metode paling produktif dalam mendeteksi eksoplanet adalah metode transit fotometri. Ketika sebuah planet melintas tepat di depan piringan bintang induknya dari sudut pandang pengamat di Bumi, intensitas cahaya bintang tersebut akan meredup secara periodik dalam fraksi sepersekian persen.',
      'Dengan spektroskopi transmisi pada teleskop James Webb, para ilmuwan bahkan mampu membedah komposisi atmosfer eksoplanet saat cahaya bintang menembus lapisan gas planet tersebut. Jejak molekul seperti uap air, karbon dioksida, metana, dan dimetil sulfida (DMS)—yang di Bumi dihasilkan oleh fitoplankton laut—menjadi biomarker potensial bagi eksistensi kehidupan biologis.',
      'Eksplorasi sistem bintang terdekat seperti TRAPPIST-1 yang memiliki tujuh planet seukuran Bumi membuktikan bahwa sistem tata surya kita bukanlah satu-satunya arsitektur planet di galaksi Bima Sakti.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-1',
        question: 'Zona orbital di mana air cair dapat bertahan di permukaan planet disebut zona apa?',
        correctAnswers: ['Zona Goldilocks', 'Zona laik huni', 'Habitable zone', 'Goldilocks'],
        explanation: 'Zona Goldilocks (habitable zone) adalah zona dengan suhu ideal di mana air tidak membeku dan tidak mendidih menguap.',
        hint: 'Nama dongeng anak-anak berambut emas.'
      },
      {
        id: 'q-isian-2',
        question: 'Metode deteksi eksoplanet berdasarkan penurunan intensitas cahaya bintang saat planet melintas disebut metode apa?',
        correctAnswers: ['Metode transit', 'Transit fotometri', 'Transit'],
        explanation: 'Metode transit mengukur peredupan periodik cahaya bintang saat planet melintas di depannya.',
        hint: 'Kata yang berarti perpindahan melintas.'
      },
      {
        id: 'q-isian-3',
        question: 'Teleskop antariksa inframerah mutakhir apakah yang mampu membedah komposisi atmosfer eksoplanet?',
        correctAnswers: ['James Webb', 'JWST', 'James Webb Space Telescope', 'Teleskop James Webb'],
        explanation: 'Teleskop James Webb (JWST) dilengkapi instrumen spektroskopi presisi tinggi untuk menganalisis atmosfer planet ekstrasurya.',
        hint: 'Teleskop antariksa baru yang dinamai mantan direktur NASA.'
      },
      {
        id: 'q-isian-4',
        question: 'Sistem bintang kerdil merah manakah yang diketahui memiliki tujuh planet batuan seukuran Bumi?',
        correctAnswers: ['TRAPPIST-1', 'Trappist 1', 'TRAPPIST 1'],
        explanation: 'Sistem TRAPPIST-1 memiliki 7 planet berbatu terestrial, beberapa di antaranya berada di zona laik huni.',
        hint: 'Nama sistem berawalan T dengan angka 1.'
      },
      {
        id: 'q-isian-5',
        question: 'Senyawa kimia apa yang di Bumi dihasilkan fitoplankton laut dan menjadi kandidat tanda kehidupan (biomarker)?',
        correctAnswers: ['Dimetil sulfida', 'DMS', 'Dimethyl sulfide'],
        explanation: 'Dimetil sulfida (DMS) adalah gas yang di Bumi hampir seluruhnya diproduksi oleh organisme laut mikroskopis.',
        hint: 'Singkatan 3 huruf DMS.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-1',
        statement: 'Eksoplanet adalah istilah untuk planet-planet yang berada di dalam tata surya kita dan mengitari Matahari.',
        isTrue: false,
        explanation: 'Salah. Eksoplanet adalah planet yang mengitari bintang lain di luar sistem tata surya kita.'
      },
      {
        id: 'q-tf-2',
        statement: 'Hingga kini para astronom telah berhasil mengonfirmasi ribuan eksoplanet di galaksi kita.',
        isTrue: true,
        explanation: 'Benar. Sudah lebih dari 5.500 eksoplanet yang berhasil dikonfirmasi keberadaannya.'
      },
      {
        id: 'q-tf-3',
        statement: 'Cahaya bintang akan bertambah terang dua kali lipat saat ada planet melintas di depannya dalam metode transit.',
        isTrue: false,
        explanation: 'Salah. Cahaya bintang akan sedikit meredup karena sebagian terhalangi oleh piringan planet.'
      },
      {
        id: 'q-tf-4',
        statement: 'Analisis spektroskopi memungkinkan ilmuwan mengetahui gas-gas seperti uap air dan karbon dioksida di atmosfer planet jauh.',
        isTrue: true,
        explanation: 'Benar. Spektroskopi mengidentifikasi jejak sidik jari kimiawi dari cahaya bintang yang tersaring atmosfer planet.'
      },
      {
        id: 'q-tf-5',
        statement: 'Keberadaan air dalam wujud cair merupakan salah satu syarat utama bagi kehidupan seperti yang kita kenal.',
        isTrue: true,
        explanation: 'Benar. Air cair adalah pelarut universal esensial bagi proses biokimia kehidupan organik.'
      }
    ]
  },
  {
    id: 'id-art-7',
    title: 'Kesehatan Mental di Era Doomscrolling: Mekanisme Otak Terjebak Berita Negatif',
    category: 'Kesehatan & Kedokteran',
    subTopic: 'Kesehatan Mental & Psikologi Kognitif',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 402,
    estimatedMinutes: 2,
    content: [
      'Istilah doomscrolling merujuk pada kecenderungan kompulsif seseorang untuk terus-menerus menggulir layar ponsel demi membaca berita buruk, kabar duka, atau narasi krisis di media sosial. Kebiasaan ini bukan sekadar tanda kurangnya kontrol diri, melainkan adaptasi evolusioner otak purba yang mengalami malfungsi di era banjir informasi.',
      'Secara biologis, otak manusia memiliki bias negativitas (negativity bias). Bagian amigdala dirancang untuk mendeteksi potensi ancaman predator di alam liar demi kelangsungan hidup. Ketika membaca informasi ancaman, amigdala memicu pelepasan hormon adrenalin dan kortisol.',
      'Namun di dunia maya, feed algoritma media sosial dirancang secara sistematis untuk memperpanjang durasi tatap layar dengan menyajikan konten yang memicu amarah dan kecemasan (outrage-driven engagement). Akibatnya, sistem saraf simpatis terus berada dalam kondisi waspada tinggi (fight-or-flight) berkepanjangan.',
      'Studi psikoneuroimunologi menunjukkan bahwa paparan stres kronis dari doomscrolling dapat melemahkan respon imunitas, memicu insomnia, kelelahan mental (burnout), hingga gejala depresi mayor.',
      'Strategi efektif untuk melepaskan diri meliputi pembatasan waktu aplikasi (screen time limits), mematikan notifikasi non-esensial, menetapkan zona bebas gawai di ruang tidur, serta mengganti waktu luang dengan aktivitas fisik atau membaca buku fisik yang menenangkan.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-1',
        question: 'Istilah apa yang menggambarkan kebiasaan terus-menerus menggulir layar membaca berita buruk di internet?',
        correctAnswers: ['Doomscrolling', 'Doom scrolling'],
        explanation: 'Doomscrolling adalah istilah untuk perilaku konsumsi berita buruk tanpa henti di media sosial.',
        hint: 'Kata bahasa Inggris berawalan Doom-.'
      },
      {
        id: 'q-isian-2',
        question: 'Bagian otak berbentuk almond yang bertugas mendeteksi ancaman dan memicu respon takut adalah apa?',
        correctAnswers: ['Amigdala', 'Amygdala'],
        explanation: 'Amigdala adalah pusat emosi otak yang memproses rasa takut dan respon terhadap bahaya.',
        hint: 'Organ otak berawalan huruf A.'
      },
      {
        id: 'q-isian-3',
        question: 'Kecenderungan alami otak manusia untuk lebih memperhatikan hal-hal negatif disebut apa?',
        correctAnswers: ['Bias negativitas', 'Negativity bias', 'Bias negatif'],
        explanation: 'Negativity bias adalah kecenderungan psikologis di mana manusia lebih terfokus pada stimulus negatif daripada positif.',
        hint: 'Istilah bias psikologi.'
      },
      {
        id: 'q-isian-4',
        question: 'Kondisi respon sistem saraf yang selalu waspada tinggi menghadapi ancaman dikenal sebagai mode apa?',
        correctAnswers: ['Fight-or-flight', 'Fight or flight', 'Lawan atau lari'],
        explanation: 'Respon fight-or-flight mempersiapkan tubuh menghadapi bahaya darurat.',
        hint: 'Istilah bahasa Inggris lawan atau kabur.'
      },
      {
        id: 'q-isian-5',
        question: 'Sebutkan salah satu dampak negatif doomscrolling kronis terhadap kondisi fisik tubuh manusia!',
        correctAnswers: ['Insomnia', 'Melemahkan imunitas', 'Kelelahan', 'Burnout', 'Depresi', 'Stres', 'Kekebalan tubuh turun'],
        explanation: 'Doomscrolling kronis terbukti melemahkan daya tahan tubuh (imunitas), memicu insomnia, dan meningkatkan risiko burnout.',
        hint: 'Kondisi sulit tidur atau gangguan daya tahan tubuh.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-1',
        statement: 'Amigdala pada otak manusia secara alami bereaksi lebih cepat terhadap informasi ancaman bahaya dibandingkan hal yang menyenangkan.',
        isTrue: true,
        explanation: 'Benar. Bias negativitas evolusioner berevolusi untuk melindungi nenek moyang kita dari predator.'
      },
      {
        id: 'q-tf-2',
        statement: 'Algoritma media sosial sengaja memprioritaskan konten positif dan selalu menyembunyikan berita yang memicu rasa cemas.',
        isTrue: false,
        explanation: 'Salah. Algoritma engagement sering kali mempromosikan konten provokatif dan cemas karena memicu klik lebih tinggi.'
      },
      {
        id: 'q-tf-3',
        statement: 'Stres psikologis kronis akibat paparan media sosial negatif dapat berdampak nyata menurunkan kekebalan tubuh.',
        isTrue: true,
        explanation: 'Benar. Hormon stres yang tinggi menekan kerja sel-sel imun tubuh.'
      },
      {
        id: 'q-tf-4',
        statement: 'Membaca berita bencana sepanjang malam sebelum tidur terbukti meningkatkan kualitas fase tidur lelap.',
        isTrue: false,
        explanation: 'Salah. Hal ini justru memicu insomnia dan mengganggu ritme tidur sehat.'
      },
      {
        id: 'q-tf-5',
        statement: 'Menerapkan zona bebas gawai di kamar tidur merupakan salah satu langkah pemulihan dari jeratan doomscrolling.',
        isTrue: true,
        explanation: 'Benar. Menjauhkan ponsel dari kasur membantu pikiran rileks dan menghentikan kebiasaan scrolling sebelum tidur.'
      }
    ]
  },
  {
    id: 'id-art-8',
    title: 'Krisis Air Tanah di Megapolitan Jakarta: Menahan Laju Penurunan Permukaan Tanah',
    category: 'Sosial Humaniora',
    subTopic: 'Kebijakan Publik & Tata Ruang Kota',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 412,
    estimatedMinutes: 2,
    content: [
      'Sebagai salah satu kawasan megapolitan terpadat di Asia Tenggara, Daerah Khusus Jakarta menghadapi tantangan ganda: kenaikan permukaan air laut akibat perubahan iklim global dan penurunan muka tanah (land subsidence) yang berlangsung secara masif.',
      'Riset geodesi satelit menunjukkan bahwa sejumlah wilayah di Jakarta Utara telah mengalami penurunan tanah hingga mencapai 10-20 sentimeter per tahun selama dua dekade terakhir. Faktor pemicu utamanya bukan sekadar beban fisik gedung bertingkat, melainkan ekstraksi air tanah dalam (deep aquifer) yang tak terkendali oleh sektor komersial dan rumah tangga.',
      'Tingkat cakupan pipa air minum perpipaan yang belum menjangkau seluruh warga memaksa jutaan penduduk dan industri menyedot air tanah secara ilegal. Pengosongan pori-pori lapisan tanah aluvial ini menyebabkan pemadatan lapisan akuifer secara permanen.',
      'Dampaknya adalah perluasan zona banjir rob air pasang, kerusakan pondasi infrastruktur jalan, dan intrusi air asin laut yang meresap ke sumur-sumur warga hingga radius puluhan kilometer ke pedalaman.',
      'Penyelesaian krisis ini menuntut langkah struktural komprehensif: penyelesaian jaringan pipa Sistem Penyediaan Air Minum (SPAM) regional, moratorium tegas pengeboran air tanah dalam, serta revitalisasi situ, waduk, dan sumur resapan biopori guna mengisi kembali cadangan air bawah tanah kota.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-1',
        question: 'Istilah ilmiah dalam bahasa Inggris untuk fenomena penurunan muka tanah adalah apa?',
        correctAnswers: ['Land subsidence', 'Subsidence', 'Land subsidence'],
        explanation: 'Land subsidence adalah peristiwa amblas atau turunnya permukaan tanah secara bertahap.',
        hint: 'Dua kata bahasa Inggris diawali kata Land.'
      },
      {
        id: 'q-isian-2',
        question: 'Wilayah administratif Jakarta bagian mana yang mencatat laju penurunan muka tanah paling cepat?',
        correctAnswers: ['Jakarta Utara', 'Jakut', 'Utara'],
        explanation: 'Jakarta Utara merupakan kawasan pesisir dengan laju penurunan tanah tertinggi, mencapai 10-20 cm per tahun.',
        hint: 'Arah mata angin pesisir pantai Jakarta.'
      },
      {
        id: 'q-isian-3',
        question: 'Aktivitas ekstraksi apakah yang menjadi pemicu utama amblesnya lapisan tanah di Jakarta?',
        correctAnswers: ['Ekstraksi air tanah', 'Penyedotan air tanah', 'Air tanah dalam', 'Pengambilan air tanah'],
        explanation: 'Penyedotan air tanah dalam (deep aquifer) secara berlebihan mengosongkan pori-pori tanah hingga memadat.',
        hint: 'Pengambilan sumber air bawah tanah.'
      },
      {
        id: 'q-isian-4',
        question: 'Fenomena masuknya air asin laut meresap ke dalam cadangan air tawar daratan dinamakan apa?',
        correctAnswers: ['Intrusi air laut', 'Intrusi air asin', 'Intrusi'],
        explanation: 'Intrusi air laut terjadi saat air asin menyusup ke lapisan akuifer tawar yang kosong.',
        hint: 'Istilah hidrologi berawalan huruf I.'
      },
      {
        id: 'q-isian-5',
        question: 'Singkatan untuk Sistem Penyediaan Air Minum perpipaan publik adalah apa?',
        correctAnswers: ['SPAM', 'Sistem Penyediaan Air Minum'],
        explanation: 'SPAM adalah singkatan resmi untuk Sistem Penyediaan Air Minum.',
        hint: 'Empat huruf singkatan S-P-A-M.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-1',
        statement: 'Penurunan muka tanah di Jakarta hanya disebabkan oleh beratnya beban gedung pencakar langit semata.',
        isTrue: false,
        explanation: 'Salah. Penyebab utamanya adalah ekstraksi air tanah dalam yang masif dan tak terkendali.'
      },
      {
        id: 'q-tf-2',
        statement: 'Sejumlah titik di Jakarta Utara pernah mencatat penurunan tanah hingga 10-20 sentimeter per tahun.',
        isTrue: true,
        explanation: 'Benar. Pengukuran satelit geodesi mencatat laju penurunan hingga 20 cm per tahun di zona pesisir.'
      },
      {
        id: 'q-tf-3',
        statement: 'Pemadatan lapisan akuifer yang telah kosong akibat disedot airnya bersifat permanen dan tidak mudah kembali mengembang.',
        isTrue: true,
        explanation: 'Benar. Struktur tanah aluvial yang terkompresi kehilangan elastisitasnya secara permanen.'
      },
      {
        id: 'q-tf-4',
        statement: 'Intrusi air laut membuat air sumur warga terasa payau dan berisiko merusak pipa logam serta pondasi.',
        isTrue: true,
        explanation: 'Benar. Air laut yang masuk ke air tanah meningkatkan salinitas dan korosi.'
      },
      {
        id: 'q-tf-5',
        statement: 'Memperluas jaringan pipa air bersih dan menghentikan sumur bor ilegal merupakan solusi efektif menghentikan penurunan tanah.',
        isTrue: true,
        explanation: 'Benar. Menyediakan air perpipaan membebaskan ketergantungan warga pada sumur bor air tanah.'
      }
    ]
  },
  {
    id: 'id-art-9',
    title: 'Kecerdasan Buatan dan Paradoks Produktivitas Kognitif',
    category: 'Sains & Teknologi',
    subTopic: 'Dampak AI Generatif pada Berpikir Kritis',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id/technology',
    wordCount: 395,
    estimatedMinutes: 2,
    content: [
      'Adopsi pesat model bahasa besar (Large Language Models) telah mengubah cara manusia memproses informasi, menyusun naskah, dan memecahkan kode pemrograman. Di satu sisi, teknologi ini menawarkan lonjakan efisiensi mekanis yang belum pernah terjadi sebelumnya. Namun di sisi lain, ilmuwan kognitif mulai mengidentifikasi fenomena yang disebut cognitive offloading berlebihan.',
      'Ketika seseorang secara terus-menerus mendelegasikan tugas penalaran, perumusan argumen, dan pencarian fakta kepada algoritma, sirkuit saraf yang bertanggung jawab atas analisis mendalam dan retensi memori jangka panjang cenderung kurang terlatih. Kemampuan berpikir mandiri membutuhkan gesekan intelektual—proses mencari, meragukan, dan menguji sintesis secara sadar.',
      'Eksperimen di sejumlah universitas menunjukkan bahwa siswa yang menggunakan alat AI tanpa panduan reflektif mampu menyelesaikan tugas lebih cepat, namun menunjukkan penurunan skor pemahaman konseptual mendasar saat diuji tanpa bantuan perangkat.',
      'Solusinya bukan menolak inovasi, melainkan menerapkan model kolaborasi pedagogis: menggunakan AI sebagai sparring partner dialektis untuk menguji kelemahan argumen manusia, bukan sebagai pengganti mesin pemikir otomatis.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-9-1',
        question: 'Istilah apa yang merujuk pada kebiasaan mendelegasikan beban berpikir ke perangkat eksternal?',
        correctAnswers: ['Cognitive offloading', 'Offloading kognitif', 'Pelepasan kognitif'],
        explanation: 'Cognitive offloading adalah fenomena memindahkan beban kerja mental ke alat digital.',
        hint: 'Dua kata bahasa Inggris diawali kata cognitive.'
      },
      {
        id: 'q-isian-9-2',
        question: 'Sistem kecerdasan buatan berbasis pemrosesan teks tingkat lanjut dikenal dengan singkatan apa?',
        correctAnswers: ['LLM', 'Large Language Models', 'Large Language Model'],
        explanation: 'LLM (Large Language Models) adalah arsitektur model bahasa besar di balik AI modern.',
        hint: 'Singkatan 3 huruf L-L-M.'
      },
      {
        id: 'q-isian-9-3',
        question: 'Menurut artikel, apa yang dibutuhkan otak agar kemampuan berpikir mandiri tetap tajam?',
        correctAnswers: ['Gesekan intelektual', 'Latihan berpikir', 'Tantangan kognitif'],
        explanation: 'Artikel menyebutkan bahwa berpikir mandiri memerlukan gesekan intelektual untuk menguji sintesis.',
        hint: 'Kombinasi dua kata berawalan gesekan.'
      },
      {
        id: 'q-isian-9-4',
        question: 'Bagaimana peran ideal AI yang disarankan artikel dalam proses belajar?',
        correctAnswers: ['Sparring partner', 'Mitra dialog', 'Sparring partner dialektis', 'Teman diskusi'],
        explanation: 'AI sebaiknya diposisikan sebagai sparring partner dialektis untuk menguji ketajaman logika.',
        hint: 'Istilah olahraga tinju yang berarti lawan latihan.'
      },
      {
        id: 'q-isian-9-5',
        question: 'Apa dampak penggunaan AI tanpa panduan terhadap skor pemahaman konseptual dasar siswa?',
        correctAnswers: ['Penurunan', 'Menurun', 'Turun', 'Menurunkan skor'],
        explanation: 'Hasil riset menunjukkan terjadi penurunan skor pemahaman konseptual saat diuji mandiri.',
        hint: 'Lawan dari kata peningkatan.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-9-1',
        statement: 'Cognitive offloading yang berlebihan dapat mengurangi latihan sirkuit memori dan nalar mendalam.',
        isTrue: true,
        explanation: 'Benar. Ketergantungan penuh pada AI mengurangi stimulasi saraf yang dibutuhkan dalam retensi memori.'
      },
      {
        id: 'q-tf-9-2',
        statement: 'Artikel menganjurkan untuk melarang dan menolak sepenuhnya penggunaan AI dalam dunia pendidikan.',
        isTrue: false,
        explanation: 'Salah. Artikel menyarankan model kolaborasi cerdas di mana AI dijadikan sparring partner.'
      },
      {
        id: 'q-tf-9-3',
        statement: 'Siswa yang memakai AI tanpa refleksi cenderung selesai lebih cepat namun pemahaman dasarnya lebih rapuh.',
        isTrue: true,
        explanation: 'Benar. Kecepatan pengerjaan tidak selalu mencerminkan internalisasi konsep yang kokoh.'
      },
      {
        id: 'q-tf-9-4',
        statement: 'Large Language Models hanya digunakan untuk menulis puisi dan tidak dapat membantu pemrograman.',
        isTrue: false,
        explanation: 'Salah. LLM dipakai secara luas untuk merangkum, menulis, dan memecahkan kode pemrograman.'
      },
      {
        id: 'q-tf-9-5',
        statement: 'Gesekan intelektual adalah proses mencari, meragukan, dan menguji ide secara sadar.',
        isTrue: true,
        explanation: 'Benar. Definisi ini dijelaskan pada paragraf kedua artikel.'
      }
    ]
  },
  {
    id: 'id-art-10',
    title: 'Pola Makan Fermentasi Tradisional & Kesehatan Mikrobioma Usus',
    category: 'Kesehatan & Kedokteran',
    subTopic: 'Gastroenterologi & Nutrisi Nusantara',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id/health',
    wordCount: 388,
    estimatedMinutes: 2,
    content: [
      'Kuliner tradisional Nusantara kaya akan produk fermentasi alami, mulai dari tempe, tape singkong, tempoyak durian, hingga dadih susu kerbau khas Minangkabau. Riset mutakhir mikrobiologi membuktikan bahwa makanan fermentasi bukan sekadar warisan tradisi pengawetan pangan, tetapi juga sumber probiotik dan senyawa bioaktif istimewa.',
      'Dalam saluran pencernaan manusia hidup triliunan mikroorganisme yang membentuk ekosistem mikrobioma usus. Bakteri asam laktat (Lactobacillus dan Bifidobacterium) yang terkandung dalam makanan fermentasi menghasilkan asam lemak rantai pendek (Short-Chain Fatty Acids / SCFA) seperti asetat, propionat, dan butirat.',
      'Senyawa butirat terbukti memperkuat integritas dinding epitel usus, mencegah sindrom kebocoran usus (leaky gut), dan meredakan peradangan sistemik. Hubungan erat antara usus dan otak melalui poros usus-otak (gut-brain axis) bahkan membuktikan bahwa keragaman bakteri usus yang sehat berkontribusi langsung pada kestabilan suasana hati dan produksi neurotransmiter serotonin.',
      'Mengonsumsi porsi seimbang tempe segar tanpa digoreng terlalu kering merupakan langkah sederhana merawat mikrobioma agar daya tahan tubuh senantiasa optimal.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-10-1',
        question: 'Produk fermentasi susu kerbau tradisional khas Minangkabau dinamakan apa?',
        correctAnswers: ['Dadih', 'Dadiah'],
        explanation: 'Dadih adalah olahan fermentasi susu kerbau tradisional khas Sumatera Barat.',
        hint: 'Dimulai dengan huruf D, berakhiran H.'
      },
      {
        id: 'q-isian-10-2',
        question: 'Singkatan dari asam lemak rantai pendek dalam bahasa Inggris adalah apa?',
        correctAnswers: ['SCFA', 'Short-Chain Fatty Acids'],
        explanation: 'SCFA adalah singkatan untuk Short-Chain Fatty Acids.',
        hint: 'Empat huruf kapital S-C-F-A.'
      },
      {
        id: 'q-isian-10-3',
        question: 'Asam lemak rantai pendek jenis apa yang terbukti memperkuat dinding epitel usus?',
        correctAnswers: ['Butirat', 'Butyrate', 'Asam butirat'],
        explanation: 'Butirat merupakan metabolit utama penyokong kesehatan lapisan sel epitel usus.',
        hint: 'Berawalan huruf B, diakhiri -at.'
      },
      {
        id: 'q-isian-10-4',
        question: 'Jalur komunikasi dua arah antara sistem pencernaan dan otak dikenal dengan istilah apa?',
        correctAnswers: ['Gut-brain axis', 'Poros usus-otak', 'Poros usus otak', 'Gut brain axis'],
        explanation: 'Gut-brain axis menghubungkan sistem saraf enterik usus dengan sistem saraf pusat.',
        hint: 'Tiga kata bahasa Inggris: gut-...-axis.'
      },
      {
        id: 'q-isian-10-5',
        question: 'Neurotransmiter pengatur suasana hati yang sebagian besar diproduksi di usus adalah apa?',
        correctAnswers: ['Serotonin'],
        explanation: 'Sekitar 90% serotonin tubuh diproduksi oleh sel enteroendokrin di saluran cerna.',
        hint: 'Hormon kebahagiaan berawalan huruf S.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-10-1',
        statement: 'Makanan fermentasi tradisional Nusantara seperti tempe dan dadih kaya akan bakteri asam laktat yang menguntungkan.',
        isTrue: true,
        explanation: 'Benar. Proses fermentasi melibatkan mikroba probiotik yang menghasilkan asam laktat dan senyawa bioaktif.'
      },
      {
        id: 'q-tf-10-2',
        statement: 'Senyawa butirat menyebabkan dinding usus menjadi bocor dan memperparah radang lambung.',
        isTrue: false,
        explanation: 'Salah. Butirat justru memperkuat integritas dinding usus dan meredakan peradangan.'
      },
      {
        id: 'q-tf-10-3',
        statement: 'Kesehatan mikrobioma usus sama sekali tidak memengaruhi kondisi psikologis dan suasana hati manusia.',
        isTrue: false,
        explanation: 'Salah. Melalui gut-brain axis, mikrobioma usus memengaruhi produksi serotonin dan fungsi otak.'
      },
      {
        id: 'q-tf-10-4',
        statement: 'Tempoyak adalah salah satu contoh pangan fermentasi berbahan dasar buah durian.',
        isTrue: true,
        explanation: 'Benar. Tempoyak merupakan fermentasi durian khas masyarakat Melayu dan Sumatera.'
      },
      {
        id: 'q-tf-10-5',
        statement: 'Menggoreng tempe sampai gosong dan terlalu kering adalah cara terbaik mempertahankan probiotiknya.',
        isTrue: false,
        explanation: 'Salah. Pemanasan suhu tinggi yang berlebihan dapat merusak bakteri probiotik hidup di dalam tempe.'
      }
    ]
  },
  {
    id: 'id-art-11',
    title: 'Keanekaragaman Hayati Garis Wallacea dan Misteri Evolusi Kepulauan',
    category: 'Lingkungan & Isu Global',
    subTopic: 'Biogeografi & Konservasi Satwa Nusantara',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id/environment',
    wordCount: 402,
    estimatedMinutes: 2,
    content: [
      'Pada abad ke-19, naturalis Inggris Alfred Russel Wallace menjelajahi kepulauan Nusantara dan menemukan sebuah batas biogeografis yang menakjubkan. Batas imajiner yang kini dinamakan Garis Wallace membentang memisahkan Pulau Kalimantan dan Bali di sisi barat dari Pulau Sulawesi dan Lombok di sisi timur.',
      'Kawasan transisi di antara Garis Wallace dan Garis Weber di timur dikenal sebagai kawasan Wallacea. Wilayah ini terdiri dari ribuan pulau yang tidak pernah tersambung ke Paparan Sunda (Asia) maupun Paparan Sahul (Australia) bahkan pada puncak zaman es glasial.',
      'Isolasi geografis jutaan tahun menghasilkan laboratorium evolusi alami dengan tingkat endemisitas luar biasa. Satwa ikonik seperti anoa kerdil, babirusa bertaring mencuat, burung maleo yang mengubur telurnya di pasir vulkanis panas, hingga komodo raksasa hanya dapat ditemukan di bentang alam unik ini.',
      'Namun ekosistem Wallacea menghadapi ancaman ekspansi tambang nikel dan pembukaan hutan pulau-pulau kecil. Menjaga keterhubungan koridor satwa dan melindungi terumbu karang Segitiga Karang Dunia menjadi kewajiban mendesak demi melestarikan pusaka biologis planet bumi.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-11-1',
        question: 'Siapakah nama naturalis Inggris yang merumuskan batas biogeografi di Nusantara?',
        correctAnswers: ['Alfred Russel Wallace', 'Alfred Wallace', 'Wallace'],
        explanation: 'Alfred Russel Wallace adalah penjelajah yang memetakan persebaran fauna Nusantara.',
        hint: 'Nama belakangnya menjadi nama garis pemisah tersebut.'
      },
      {
        id: 'q-isian-11-2',
        question: 'Garis Wallace memisahkan pulau Bali di barat dengan pulau apa di sebelah timurnya?',
        correctAnswers: ['Lombok', 'Pulau Lombok'],
        explanation: 'Garis Wallace melintasi Selat Lombok, memisahkan Bali dan Lombok.',
        hint: 'Pulau di sebelah timur pulau Bali.'
      },
      {
        id: 'q-isian-11-3',
        question: 'Kawasan transisi biogeografi di Indonesia tengah dinamakan apa?',
        correctAnswers: ['Wallacea', 'Kawasan Wallacea'],
        explanation: 'Wallacea adalah zona biogeografis kepulauan di antara Paparan Sunda dan Sahul.',
        hint: 'Satu kata berakhiran -ea.'
      },
      {
        id: 'q-isian-11-4',
        question: 'Burung endemik Sulawesi apa yang mengubur telurnya di pasir geotermal panas?',
        correctAnswers: ['Maleo', 'Burung Maleo'],
        explanation: 'Burung Maleo (Macrocephalon maleo) memanfaatkan panas bumi untuk menetaskan telurnya.',
        hint: 'Lima huruf diawali huruf M.'
      },
      {
        id: 'q-isian-11-5',
        question: 'Sektor pertambangan mineral apa yang disebutkan mengancam kelestarian pulau kecil di Wallacea?',
        correctAnswers: ['Nikel', 'Tambang nikel'],
        explanation: 'Ekspansi industri hilirisasi dan tambang nikel menjadi ancaman bagi ekosistem Wallacea.',
        hint: 'Logam bahan baku baterai berawalan N.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-11-1',
        statement: 'Kepulauan di zona Wallacea pernah tersambung langsung ke daratan benua Asia pada zaman es.',
        isTrue: false,
        explanation: 'Salah. Kepulauan Wallacea selalu terisolasi oleh palung laut dalam dan tidak pernah menyatu ke benua.'
      },
      {
        id: 'q-tf-11-2',
        statement: 'Babirusa dan anoa merupakan satwa endemik yang berevolusi khas di kawasan Wallacea.',
        isTrue: true,
        explanation: 'Benar. Keduanya adalah contoh mamalia endemik unik Sulawesi di zona Wallacea.'
      },
      {
        id: 'q-tf-11-3',
        statement: 'Garis Weber membatasi zona Wallacea di sisi timur yang berdekatan dengan Paparan Sahul.',
        isTrue: true,
        explanation: 'Benar. Garis Weber memisahkan fauna tipe peralihan dengan fauna tipe Australis.'
      },
      {
        id: 'q-tf-11-4',
        statement: 'Burung maleo mengerami telurnya dengan cara mendudukinya di sarang pohon layaknya ayam.',
        isTrue: false,
        explanation: 'Salah. Maleo mengubur telurnya di dalam pasir vulkanis atau pantai berpemanas geotermal.'
      },
      {
        id: 'q-tf-11-5',
        statement: 'Wilayah Wallacea juga mencakup kawasan pusat keanekaragaman laut Segitiga Karang Dunia.',
        isTrue: true,
        explanation: 'Benar. Perairan Wallacea merupakan episentrum terumbu karang global (Coral Triangle).'
      }
    ]
  },
  {
    id: 'id-art-12',
    title: 'Psikologi Konsumsi Digital: Membedah FOMO dan Perangkap Notifikasi',
    category: 'Sosial Humaniora',
    subTopic: 'Kesehatan Mental & Ekonomi Perhatian',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 379,
    estimatedMinutes: 2,
    content: [
      'Setiap getaran gawai dan bunyi denting notifikasi memicu lonjakan mikro neurotransmiter dopamin di sistem penghargaan otak manusia. Ketidakpastian mengenai isi pesan—apakah itu pujian, berita viral, atau penawaran diskon terbatas—mengaktifkan mekanisme psikologis yang serupa dengan mesin judi (variable reward schedule).',
      'Fenomena ini memperkuat sindrom FOMO (Fear of Missing Out), yaitu kecemasan kompulsif bahwa orang lain sedang menikmati pengalaman berharga tanpa kehadiran kita. Media sosial dirancang dengan sengaja memanfaatkan celah evolusioner manusia yang haus akan penerimaan sosial dan takut terasing dari kawanan.',
      'Dampaknya terasa nyata pada penurunan rentang konsentrasi mendalam (deep work) dan fragmentasi memori kerja. Waktu luang yang semestinya digunakan untuk pemulihan mental justru terkuras dalam siklus doomscrolling tiada henti.',
      'Para psikolog menganjurkan penerapan digital hygiene: menetapkan zona bebas gawai sebelum tidur, mematikan notifikasi non-esensial, dan mengganti FOMO menjadi JOMO (Joy of Missing Out)—kenikmatan menikmati momen nyata saat ini tanpa beban membandingkan diri.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-12-1',
        question: 'Neurotransmiter apa yang melonjak saat otak menerima sinyal hadiah notifikasi gawai?',
        correctAnswers: ['Dopamin', 'Dopamine'],
        explanation: 'Dopamin adalah zat kimia otak yang mengatur antisipasi dan motivasi kesenangan.',
        hint: 'Tujuh huruf diawali huruf D.'
      },
      {
        id: 'q-isian-12-2',
        question: 'Pola penjadwalan hadiah acak yang mirip mesin judi dinamakan apa dalam psikologi?',
        correctAnswers: ['Variable reward schedule', 'Variable reward', 'Jadwal penguatan acak'],
        explanation: 'Variable reward schedule membuat otak terus memeriksa gawai karena rasa penasaran.',
        hint: 'Istilah 3 kata bahasa Inggris berawalan Variable.'
      },
      {
        id: 'q-isian-12-3',
        question: 'Singkatan dari kecemasan takut tertinggal tren atau informasi di media sosial adalah apa?',
        correctAnswers: ['FOMO', 'Fear of Missing Out'],
        explanation: 'FOMO adalah singkatan dari Fear of Missing Out.',
        hint: 'Empat huruf kapital F-O-M-O.'
      },
      {
        id: 'q-isian-12-4',
        question: 'Istilah kebalikan dari FOMO yang berarti menikmati kedamaian tanpa perlu tahu segalanya adalah apa?',
        correctAnswers: ['JOMO', 'Joy of Missing Out'],
        explanation: 'JOMO (Joy of Missing Out) adalah sikap sadar menikmati ketenangan momen nyata.',
        hint: 'Singkatan berawalan huruf J.'
      },
      {
        id: 'q-isian-12-5',
        question: 'Istilah berselancar membaca berita buruk di gawai tanpa henti dinamakan apa?',
        correctAnswers: ['Doomscrolling', 'Doom scrolling'],
        explanation: 'Doomscrolling adalah kebiasaan terus menggulir lini masa berita suram secara kompulsif.',
        hint: 'Kata gabungan doom + scrolling.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-12-1',
        statement: 'Notifikasi acak di ponsel mengaktifkan sistem dopamin dengan mekanisme mirip mesin judi.',
        isTrue: true,
        explanation: 'Benar. Ketidakpastian stimulus menciptakan dorongan kuat untuk terus mengecek layar.'
      },
      {
        id: 'q-tf-12-2',
        statement: 'FOMO adalah fenomena genetik yang baru muncul pada tahun 2024 tanpa kaitan dengan rasa butuh penerimaan sosial.',
        isTrue: false,
        explanation: 'Salah. FOMO berakar pada kebutuhan dasar evolusioner manusia akan rasa diterima kelompok.'
      },
      {
        id: 'q-tf-12-3',
        statement: 'JOMO mengajarkan kenikmatan untuk hadir utuh di dunia nyata tanpa cemas membandingkan hidup di media sosial.',
        isTrue: true,
        explanation: 'Benar. Joy of Missing Out adalah alternatif sehat menenangkan pikiran.'
      },
      {
        id: 'q-tf-12-4',
        statement: 'Mematikan notifikasi aplikasi yang tidak penting merupakan salah satu bentuk digital hygiene.',
        isTrue: true,
        explanation: 'Benar. Langkah ini membantu mengembalikan kendali perhatian sadar pengguna.'
      },
      {
        id: 'q-tf-12-5',
        statement: 'Doomscrolling terbukti secara ilmiah mampu mempercepat pemulihan energi otak sebelum tidur.',
        isTrue: false,
        explanation: 'Salah. Doomscrolling justru menguras energi mental dan merusak kualitas tidur.'
      }
    ]
  },
  {
    id: 'id-art-13',
    title: 'Menambang Langit: Revolusi Panel Surya Kristal Perovskite Generasi Baru',
    category: 'Sains & Teknologi',
    subTopic: 'Material Maju & Energi Bersih',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id/technology',
    wordCount: 410,
    estimatedMinutes: 2,
    content: [
      'Selama lebih dari lima dekade, sel fotovoltaik berbasis silikon telah mendominasi industri energi surya global. Meskipun andal, efisiensi konversi energi silikon komersial kini telah mendekati batas teoritisnya, yaitu di kisaran 22 hingga 26 persen. Untuk melompat lebih jauh, para ilmuwan material berpaling ke kristal perovskite.',
      'Perovskite adalah kelas material sintetis yang memiliki struktur kristal serupa dengan mineral kalsium titanium oksida. Keunggulan utamanya terletak pada koefisien penyerapan cahaya yang luar biasa tinggi dan kemudahan pemrosesan melalui larutan kimia bersuhu rendah, jauh lebih hemat energi dibandingkan pemurnian silikon yang membutuhkan tungku ribuan derajat Celsius.',
      'Inovasi paling menjanjikan adalah sel surya tandem perovskite-silikon. Dalam konfigurasi ini, lapisan perovskite di atas menyerap spektrum cahaya biru berenergi tinggi, sementara lapisan silikon di bawahnya menyerap spektrum inframerah berenergi rendah. Efisiensi laboratorium kombinasi tandem ini telah menembus rekor 33,9 persen.',
      'Tantangan utama saat ini adalah stabilitas jangka panjang terhadap kelembapan dan panas tropis. Namun dengan enkapsulasi polimer nano, komersialisasi massal panel berdaya tinggi ini diprediksi akan merevolusi akses listrik mandiri di wilayah terpencil Indonesia.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-13-1',
        question: 'Material sintetis kristal apa yang menjadi inovasi sel surya generasi baru pelengkap silikon?',
        correctAnswers: ['Perovskite', 'Perovskit'],
        explanation: 'Perovskite adalah kristal dengan efisiensi penyerapan foton yang sangat tinggi.',
        hint: 'Sepuluh huruf diawali huruf P.'
      },
      {
        id: 'q-isian-13-2',
        question: 'Berapa persen rekor efisiensi laboratorium yang telah dicapai oleh sel surya tandem perovskite-silikon?',
        correctAnswers: ['33.9%', '33,9%', '33.9 persen', '33,9 persen', '33.9', '33,9'],
        explanation: 'Sel surya tandem berhasil mencatatkan efisiensi konversi energi hingga 33,9 persen.',
        hint: 'Angka tiga puluhan koma sembilan persen.'
      },
      {
        id: 'q-isian-13-3',
        question: 'Konfigurasi sel surya yang menggabungkan dua lapisan bahan berbeda dinamakan sel surya apa?',
        correctAnswers: ['Tandem', 'Sel tandem', 'Tandem solar cell'],
        explanation: 'Sel tandem menumpuk dua jenis semikonduktor untuk menangkap spektrum cahaya berbeda.',
        hint: 'Istilah bersepeda berdua yang juga dipakai di sini.'
      },
      {
        id: 'q-isian-13-4',
        question: 'Spektrum cahaya apa yang diserap oleh lapisan perovskite pada sel surya tandem?',
        correctAnswers: ['Cahaya biru', 'Spektrum biru', 'Biru'],
        explanation: 'Perovskite efektif menangkap spektrum cahaya biru berenergi tinggi.',
        hint: 'Warna langit cerah.'
      },
      {
        id: 'q-isian-13-5',
        question: 'Teknologi pelapisan apa yang digunakan untuk melindungi perovskite dari kelembapan tropis?',
        correctAnswers: ['Enkapsulasi polimer nano', 'Enkapsulasi', 'Polimer nano'],
        explanation: 'Enkapsulasi polimer nano mencegah uap air merusak lapisan kristal perovskite.',
        hint: 'Pengemasan pelindung berawalan huruf E.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-13-1',
        statement: 'Sel surya tandem memanfaatkan lapisan perovskite dan silikon untuk menyerap spektrum cahaya yang berbeda.',
        isTrue: true,
        explanation: 'Benar. Kombinasi ini memperluas rentang panjang gelombang cahaya yang berhasil diubah menjadi listrik.'
      },
      {
        id: 'q-tf-13-2',
        statement: 'Pembuatan kristal perovskite membutuhkan tungku pemanas bersuhu ribuan derajat Celsius lebih panas dari silikon.',
        isTrue: false,
        explanation: 'Salah. Perovskite dapat diproses lewat larutan kimia bersuhu rendah yang jauh lebih hemat energi.'
      },
      {
        id: 'q-tf-13-3',
        statement: 'Efisiensi sel silikon komersial saat ini sudah sangat dekat dengan batas teoritis maksimalnya.',
        isTrue: true,
        explanation: 'Benar. Silikon murni memiliki limit efisiensi konversi foton di kisaran 26-29 persen.'
      },
      {
        id: 'q-tf-13-4',
        statement: 'Perovskite secara alami sangat tahan terhadap air hujan dan tidak memerlukan pelindung sama sekali.',
        isTrue: false,
        explanation: 'Salah. Kelembapan dan air merupakan tantangan terbesar yang dapat mendegradasi kristal perovskite.'
      },
      {
        id: 'q-tf-13-5',
        statement: 'Efisiensi sel tandem perovskite-silikon telah melampaui angka 33 persen dalam uji laboratorium.',
        isTrue: true,
        explanation: 'Benar. Rekor terbaru mencapai 33,9 persen efisiensi konversi energi.'
      }
    ]
  },
  {
    id: 'id-art-14',
    title: 'Rahasia Umur Panjang di Zona Biru dan Gaya Hidup Rendah Inflamasi',
    category: 'Kesehatan & Kedokteran',
    subTopic: 'Epidemiologi & Umur Panjang Sehat',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id/health',
    wordCount: 392,
    estimatedMinutes: 2,
    content: [
      'Di beberapa penjuru dunia—mulai dari Okinawa di Jepang, Ikaria di Yunani, hingga Sardinia di Italia—terdapat populasi manusia dengan proporsi penduduk berusia di atas 100 tahun (centenarian) tertinggi tanpa menderita penyakit degeneratif berat. Wilayah-wilayah ini diidentifikasi oleh para demografer sebagai Zona Biru (Blue Zones).',
      'Penelitian komparatif puluhan tahun mengungkap bahwa umur panjang mereka bukan semata-mata faktor genetika unggul, melainkan paduan harmonis gaya hidup anti-inflamasi harian. Pola makan mereka didominasi oleh nabati utuh (whole food plant-based), kacang-kacangan, rempah kaya polifenol, serta asupan rendah gula rafinasi.',
      'Selain nutrisi, mereka bergerak secara alami sepanjang hari melalui berkebun dan berjalan kaki di kontur bukit, bukan lewat latihan ekstrem di pusat kebugaran. Prinsip makan berhenti saat 80 persen kenyang (dikenal di Okinawa sebagai Hara Hachi Bu) mencegah stres oksidatif pada mitokondria sel.',
      'Faktor paling krusial yang kerap diabaikan adalah ikatan sosial yang erat (Moai). Memiliki komunitas tempat bertukar cerita dan saling menolong menurunkan hormon kortisol secara kronis, memperkuat kekebalan, serta menjaga kesehatan jantung hingga usia senja.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-14-1',
        question: 'Istilah geografis untuk kawasan dengan populasi centenarian sehat terbanyak di dunia adalah apa?',
        correctAnswers: ['Zona Biru', 'Blue Zones', 'Blue Zone'],
        explanation: 'Blue Zones (Zona Biru) adalah sebutan untuk wilayah tempat warga hidup sehat hingga 100 tahun.',
        hint: 'Dua kata warna langit dalam bahasa Indonesia/Inggris.'
      },
      {
        id: 'q-isian-14-2',
        question: 'Sebutan untuk seseorang yang telah mencapai usia 100 tahun atau lebih adalah apa?',
        correctAnswers: ['Centenarian', 'Sentenarian'],
        explanation: 'Centenarian adalah istilah medis-demografis bagi orang berumur satu abad atau lebih.',
        hint: 'Berakar dari kata latin centum (seratus).'
      },
      {
        id: 'q-isian-14-3',
        question: 'Filosofi makan khas Okinawa yang mengajarkan berhenti makan saat 80% kenyang adalah apa?',
        correctAnswers: ['Hara Hachi Bu', 'Hara hachi bun me', 'Hara Hachi Bu'],
        explanation: 'Hara Hachi Bu adalah ajaran Konfusianisme di Okinawa untuk membatasi asupan kalori berlebih.',
        hint: 'Tiga kata bahasa Jepang: Hara ... Bu.'
      },
      {
        id: 'q-isian-14-4',
        question: 'Istilah jejaring dukungan sosial dan persaudaraan seumur hidup di Okinawa dinamakan apa?',
        correctAnswers: ['Moai'],
        explanation: 'Moai adalah kelompok sosial saling dukung finansial dan emosional sejak kecil hingga tua.',
        hint: 'Empat huruf diawali M-O.'
      },
      {
        id: 'q-isian-14-5',
        question: 'Hormon stres utama yang dapat ditekan melalui dukungan sosial yang erat adalah apa?',
        correctAnswers: ['Kortisol', 'Cortisol'],
        explanation: 'Kortisol adalah hormon glukokortikoid yang dilepaskan saat tubuh mengalami stres.',
        hint: 'Berawalan huruf K, diakhiri -ol.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-14-1',
        statement: 'Rahasia utama umur panjang warga Zona Biru didominasi oleh latihan fisik angkat beban ekstrem di gym.',
        isTrue: false,
        explanation: 'Salah. Mereka melakukan aktivitas fisik alami sehari-hari seperti berkebun dan berjalan kaki santai.'
      },
      {
        id: 'q-tf-14-2',
        statement: 'Hara Hachi Bu adalah anjuran untuk selalu makan hingga perut terasa penuh 100 persen.',
        isTrue: false,
        explanation: 'Salah. Hara Hachi Bu berarti berhenti makan ketika perut terasa 80 persen kenyang.'
      },
      {
        id: 'q-tf-14-3',
        statement: 'Ikatan sosial yang erat dan perasaan memiliki tujuan hidup membantu menurunkan tingkat stres kronis.',
        isTrue: true,
        explanation: 'Benar. Kehidupan komunal yang rukun menurunkan sekresi hormon kortisol berbahaya.'
      },
      {
        id: 'q-tf-14-4',
        statement: 'Pola makan di Zona Biru kaya akan polifenol, serat nabati, dan rendah makanan olahan ultra-proses.',
        isTrue: true,
        explanation: 'Benar. Pola makan whole food plant-based menjadi pondasi diet anti-inflamasi mereka.'
      },
      {
        id: 'q-tf-14-5',
        statement: 'Okinawa dan Sardinia adalah contoh lokasi yang termasuk ke dalam kawasan Zona Biru dunia.',
        isTrue: true,
        explanation: 'Benar. Keduanya merupakan lokasi riset klasik demografi umur panjang.'
      }
    ]
  },
  {
    id: 'id-art-15',
    title: 'Hutan Mangrove Indonesia: Benteng Karbon Biru & Perisai Pesisir',
    category: 'Lingkungan & Isu Global',
    subTopic: 'Ekologi Kelautan & Mitigasi Iklim',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id/environment',
    wordCount: 405,
    estimatedMinutes: 2,
    content: [
      'Indonesia memiliki sekitar 3,36 juta hektare hutan mangrove, mewakili lebih dari 20 persen total luasan mangrove di seluruh permukaan bumi. Ekosistem pesisir payau ini bukan sekadar habitat bagi kepiting bakau dan burung migran, melainkan pilar utama mitigasi krisis iklim melalui penyimpanan karbon biru (blue carbon).',
      'Kemampuan pohon bakau (Rhizophora) dalam menyerap karbon dioksida atmosferik dan menguncinya di dalam sedimen lumpur anaerobik sangat luar biasa. Satu hektare hutan mangrove mampu menyimpan karbon hingga empat sampai lima kali lebih banyak dibandingkan hutan hujan daratan tropis dengan luas yang setara.',
      'Selain sebagai penyerap karbon raksasa, struktur akar tunjang yang saling berkait rapat berfungsi sebagai peredam alami energi gelombang badai dan tsunami. Riset pasca-tsunami Samudra Hindia menunjukkan bahwa permukiman pesisir yang terlindungi sabuk mangrove lebat mengalami kerusakan infrastruktur yang jauh lebih ringan.',
      'Sayangnya, konversi lahan menjadi tambak udang intensif dan permukiman mengancam kelestariannya. Program restorasi berbasis masyarakat dengan menanam bibit lokal dan mengembalikan hidrologi alami menjadi kunci menjaga benteng hijau nusantara ini.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-15-1',
        question: 'Istilah untuk simpanan karbon yang diserap dan disimpan oleh ekosistem laut dan pesisir adalah apa?',
        correctAnswers: ['Karbon biru', 'Blue carbon', 'Blue Carbon'],
        explanation: 'Karbon biru adalah karbon organik yang terperangkap dalam ekosistem mangrove dan padang lamun.',
        hint: 'Warna laut disandingkan dengan kata karbon.'
      },
      {
        id: 'q-isian-15-2',
        question: 'Berapa juta hektare perkiraan total luasan hutan mangrove di Indonesia?',
        correctAnswers: ['3.36', '3,36', '3.36 juta', '3,36 juta', '3.36 juta hektare', '3,36 juta hektare'],
        explanation: 'Indonesia memiliki sekitar 3,36 juta hektare mangrove yang tersebar dari Sumatra hingga Papua.',
        hint: 'Angka 3 koma tiga puluh enam.'
      },
      {
        id: 'q-isian-15-3',
        question: 'Genus pohon bakau utama yang memiliki akar tunjang khas di pesisir adalah apa?',
        correctAnswers: ['Rhizophora', 'Bakau'],
        explanation: 'Rhizophora adalah genus bakau paling dominan di hutan pasang surut tropis.',
        hint: 'Nama ilmiah berawalan huruf R.'
      },
      {
        id: 'q-isian-15-4',
        question: 'Kondisi lumpur tanpa oksigen yang membuat karbon mangrove awet ribuan tahun dinamakan kondisi apa?',
        correctAnswers: ['Anaerobik', 'Anaerob', 'Anoxic'],
        explanation: 'Kondisi lumpur anaerobik memperlambat dekomposisi organik oleh bakteri.',
        hint: 'Istilah biologi yang berarti tanpa oksigen bebas.'
      },
      {
        id: 'q-isian-15-5',
        question: 'Konversi mangrove menjadi usaha perikanan apa yang menjadi salah satu pemicu utama deforestasi pesisir?',
        correctAnswers: ['Tambak udang', 'Tambak', 'Budidaya udang'],
        explanation: 'Pembukaan tambak udang skala intensif sering membabat vegetasi mangrove alami.',
        hint: 'Usaha budidaya hewan laut krustasea.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-15-1',
        statement: 'Satu hektare hutan mangrove dapat menyimpan karbon 4-5 kali lebih banyak dibanding hutan daratan.',
        isTrue: true,
        explanation: 'Benar. Lumpur anaerobik mangrove menahan lapisan gambut karbon tebal selama ratusan tahun.'
      },
      {
        id: 'q-tf-15-2',
        statement: 'Indonesia hanya menyumbang kurang dari satu persen dari total hutan mangrove dunia.',
        isTrue: false,
        explanation: 'Salah. Indonesia memiliki lebih dari 20 persen luasan mangrove global.'
      },
      {
        id: 'q-tf-15-3',
        statement: 'Struktur akar mangrove yang rapat terbukti dapat meredam ketinggian dan daya rusak gelombang tsunami.',
        isTrue: true,
        explanation: 'Benar. Hutan mangrove berfungsi sebagai sabuk hijau pelindung alami garis pantai.'
      },
      {
        id: 'q-tf-15-4',
        statement: 'Kondisi tanah tempat mangrove tumbuh bersifat sangat kering dan penuh sirkulasi oksigen bebas.',
        isTrue: false,
        explanation: 'Salah. Sedimen mangrove bersifat jenuh air pasang surut dan cenderung anaerobik.'
      },
      {
        id: 'q-tf-15-5',
        statement: 'Memperbaiki aliran hidrologi pasang surut alami sangat penting dalam keberhasilan restorasi mangrove.',
        isTrue: true,
        explanation: 'Benar. Keseimbangan salinitas dan sirkulasi air pasang menentukan kelangsungan hidup bibit.'
      }
    ]
  },
  {
    id: 'id-art-16',
    title: 'Sosiologi Gotong Royong: Menjaga Modal Sosial di Tengah Arus Urbanisasi',
    category: 'Sosial Humaniora',
    subTopic: 'Sosiologi Komunitas & Modal Sosial',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 398,
    estimatedMinutes: 2,
    content: [
      'Konsep gotong royong kerap dipuji sebagai intisari kepribadian bangsa Indonesia. Dari tradisi sambatan membangun rumah di Jawa, arisan tenaga kerja Mapalus di Minahasa, hingga Subak di Bali, kerja sama kolektif telah lama menjadi strategi adaptasi masyarakat agraris dalam menghadapi keterbatasan sumber daya ekonomi.',
      'Dalam kerangka sosiologi modern, gotong royong dikategorikan sebagai bentuk modal sosial (social capital) yang kuat. Sosiolog Robert Putnam membedakan dua jenis modal sosial: bonding social capital (ikatan erat di dalam kelompok homogen) dan bridging social capital (jembatan kepercayaan antarkelompok yang berbeda latar belakang).',
      'Ketika gelombang urbanisasi memindahkan jutaan penduduk ke kota megapolitan, pola gotong royong mengalami pergeseran. Di lingkungan apartemen dan perumahan padat, individualisme dan transaksi berbasis uang sering menggantikan kerja bakti fisik.',
      'Namun di era digital, modal sosial bertransformasi ke platform urun dana (crowdfunding) dan gerakan kerelawanan warga saat bencana. Kunci merawat kohesi sosial masa kini adalah mendemokratisasi ruang publik kota agar interaksi langsung lintas kelas sosial dapat terus tumbuh mekar.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-16-1',
        question: 'Tradisi tolong-menolong kerja sama pertanian dan sosial di Minahasa dinamakan apa?',
        correctAnswers: ['Mapalus', 'Tradisi Mapalus'],
        explanation: 'Mapalus adalah kearifan lokal gotong royong kerja sama khas suku Minahasa.',
        hint: 'Tujuh huruf diawali M-A-P.'
      },
      {
        id: 'q-isian-16-2',
        question: 'Sistem manajemen irigasi dan pembagian air kolektif tradisional di Bali dinamakan apa?',
        correctAnswers: ['Subak', 'Sistem Subak'],
        explanation: 'Subak adalah organisasi pengairan sawah demokratis berbasis kearifan filosofis di Bali.',
        hint: 'Lima huruf diawali S-U.'
      },
      {
        id: 'q-isian-16-3',
        question: 'Siapakah nama sosiolog yang membagi modal sosial menjadi tipe bonding dan bridging?',
        correctAnswers: ['Robert Putnam', 'Putnam'],
        explanation: 'Robert Putnam adalah sosiolog terkemuka pengembang teori social capital.',
        hint: 'Nama belakang berawalan P-U-T-N-A-M.'
      },
      {
        id: 'q-isian-16-4',
        question: 'Istilah modal sosial yang menghubungkan berbagai kelompok berbeda latar belakang adalah apa?',
        correctAnswers: ['Bridging social capital', 'Bridging', 'Modal sosial bridging'],
        explanation: 'Bridging social capital membangun jembatan kepercayaan lintas identitas kelompok.',
        hint: 'Kata bahasa Inggris untuk menjembatani: Bridging.'
      },
      {
        id: 'q-isian-16-5',
        question: 'Bentuk gotong royong digital masa kini untuk penggalangan dana kemanusiaan dinamakan apa?',
        correctAnswers: ['Crowdfunding', 'Urun dana', 'Penggalangan dana daring'],
        explanation: 'Crowdfunding adalah pengumpulan dana kolektif via platform digital.',
        hint: 'Kata bahasa Inggris berawalan Crowd.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-16-1',
        statement: 'Mapalus di Minahasa dan Subak di Bali adalah bukti kearifan gotong royong telah mengakar kuat di berbagai suku.',
        isTrue: true,
        explanation: 'Benar. Keduanya adalah wujud modal sosial nyata dalam sejarah Nusantara.'
      },
      {
        id: 'q-tf-16-2',
        statement: 'Bonding social capital merujuk pada ikatan sosial antarindividu yang sangat berbeda latar belakang sukunya.',
        isTrue: false,
        explanation: 'Salah. Ikatan di dalam kelompok homogen disebut bonding, sedangkan lintas kelompok disebut bridging.'
      },
      {
        id: 'q-tf-16-3',
        statement: 'Platform crowdfunding dan aksi relawan online merupakan evolusi gotong royong di era digital.',
        isTrue: true,
        explanation: 'Benar. Solidaritas sosial beradaptasi dengan kemajuan sarana teknologi informasi.'
      },
      {
        id: 'q-tf-16-4',
        statement: 'Urbanisasi ke kota besar sama sekali tidak berpengaruh pada intensitas kerja bakti fisik warga.',
        isTrue: false,
        explanation: 'Salah. Urbanisasi dan kesibukan kota sering kali menggeser kerja bakti menjadi transaksi moneter.'
      },
      {
        id: 'q-tf-16-5',
        statement: 'Menyediakan ruang publik yang nyaman dan inklusif dapat memperkuat interaksi dan kohesi sosial warga.',
        isTrue: true,
        explanation: 'Benar. Ruang publik menjadi wadah perjumpaan warga lintas latar belakang sosial-ekonomi.'
      }
    ]
  }
];

// Deterministic daily 8-article pack selector based on date string (YYYY-MM-DD)
export function getDailyIndonesianArticles(dateStr?: string): IndonesianArticle[] {
  const dateKey = dateStr || new Date().toISOString().split('T')[0];
  // Calculate a deterministic seed from the date string
  let hash = 0;
  for (let i = 0; i < dateKey.length; i++) {
    hash = (hash << 5) - hash + dateKey.charCodeAt(i);
    hash |= 0;
  }
  const total = INDONESIAN_ARTICLES.length;
  const startIndex = Math.abs(hash) % total;
  
  const dailySet: IndonesianArticle[] = [];
  for (let i = 0; i < 8; i++) {
    const idx = (startIndex + i) % total;
    dailySet.push(INDONESIAN_ARTICLES[idx]);
  }
  return dailySet;
}

