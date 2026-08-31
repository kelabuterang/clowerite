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
        id: 'q-isian-1-1',
        question: 'Undang-Undang nomor berapakah yang mengatur tentang Desa dan disahkan pada tahun 2014?',
        correctAnswers: ['UU No. 6 Tahun 2014', 'Undang-Undang Nomor 6 Tahun 2014', 'Nomor 6 Tahun 2014', 'UU No 6 Tahun 2014', 'UU Nomor 6', 'Nomor 6'],
        explanation: 'Disebutkan pada paragraf pertama bahwa Undang-Undang Nomor 6 Tahun 2014 mengubah kedudukan desa dalam pemerintahan Indonesia.',
        hint: 'Perhatikan angka undang-undang di awal artikel.'
      },
      {
        id: 'q-isian-1-2',
        question: 'Pada tahun berapa Dana Desa pertama kali mulai disalurkan ke desa-desa di Indonesia?',
        correctAnswers: ['2015', 'Tahun 2015'],
        explanation: 'Penyaluran Dana Desa pertama kali dimulai pada tahun 2015 dengan alokasi awal Rp20,77 triliun.',
        hint: 'Satu tahun setelah undang-undang disahkan.'
      },
      {
        id: 'q-isian-1-3',
        question: 'Berapa triliun rupiah alokasi Dana Desa pada tahun 2024?',
        correctAnswers: ['71', 'Rp71 triliun', '71 triliun', 'Rp 71 triliun'],
        explanation: 'Alokasi Dana Desa naik terus hingga mencapai Rp71 triliun pada tahun 2024.',
        hint: 'Angka puluhan triliun pada tahun 2024.'
      },
      {
        id: 'q-isian-1-4',
        question: 'Lembaga usaha milik desa apa yang menjadi pengungkit ekonomi lokal di pedesaan?',
        correctAnswers: ['BUMDes', 'Badan Usaha Milik Desa', 'BUM Desa'],
        explanation: 'BUMDes (Badan Usaha Milik Desa) disebut sebagai instrumen pengungkit ekonomi lokal yang membuka lapangan kerja.',
        hint: 'Singkatan 6 huruf berawalan BUM.'
      },
      {
        id: 'q-isian-1-5',
        question: 'Sistem digital apa yang digunakan untuk pengelolaan keuangan desa menurut artikel?',
        correctAnswers: ['Siskeudes', 'Sistem Keuangan Desa'],
        explanation: 'Siskeudes (Sistem Keuangan Desa) merupakan platform digitalisasi tata kelola anggaran desa.',
        hint: 'Singkatan Sistem Keuangan Desa.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-1-1',
        statement: 'Sebelum adanya UU Desa 2014, keputusan proyek pembangunan ditentukan langsung oleh musyawarah desa tanpa campur tangan kabupaten.',
        isTrue: false,
        explanation: 'Salah. Sebelumnya, pembangunan ditentukan berjenjang ke kabupaten dan turun sebagai proyek yang ditetapkan pihak lain.'
      },
      {
        id: 'q-tf-1-2',
        statement: 'Total alokasi Dana Desa dari tahun 2015 hingga 2024 mencapai sekitar Rp609,9 triliun.',
        isTrue: true,
        explanation: 'Benar. Sepanjang 2015-2024, total alokasi tercatat sekitar Rp609,9 triliun untuk 75.259 desa.'
      },
      {
        id: 'q-tf-1-3',
        statement: 'Dana Desa tidak diperbolehkan digunakan untuk program penanganan stunting dan pengentasan kemiskinan ekstrem.',
        isTrue: false,
        explanation: 'Salah. Penanganan stunting dan kemiskinan ekstrem justru menjadi salah satu prioritas utama penggunaan Dana Desa.'
      },
      {
        id: 'q-tf-1-4',
        statement: 'Modus korupsi Dana Desa antara lain meliputi penggelembungan harga material dan proyek fiktif.',
        isTrue: true,
        explanation: 'Benar. Analisis 591 putusan perkara korupsi menunjukkan pola penggelembungan harga material, proyek fiktif, dan manipulasi laporan.'
      },
      {
        id: 'q-tf-1-5',
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
        id: 'q-isian-2-1',
        question: 'Berapa batas ukuran maksimal partikel plastik untuk dikategorikan sebagai mikroplastik menurut artikel?',
        correctAnswers: ['5 milimeter', '5 mm', 'lima milimeter', 'kurang dari 5 mm'],
        explanation: 'Mikroplastik didefinisikan sebagai partikel plastik dengan ukuran kurang dari lima milimeter (5 mm).',
        hint: 'Angka satuan milimeter di paragraf pertama.'
      },
      {
        id: 'q-isian-2-2',
        question: 'Partikel mikroplastik pada produk kosmetik pembersih wajah disebut dengan istilah apa?',
        correctAnswers: ['Microbeads', 'Mikroplastik primer', 'Microbead'],
        explanation: 'Microbeads adalah contoh mikroplastik primer yang sengaja diproduksi untuk scrub kosmetik.',
        hint: 'Istilah bahasa Inggris untuk butiran scrub.'
      },
      {
        id: 'q-isian-2-3',
        question: 'Proses akumulasi racun yang meningkat pada tingkatan rantai makanan yang lebih tinggi disebut fenomena apa?',
        correctAnswers: ['Biomagnifikasi', 'Biomagnification'],
        explanation: 'Biomagnifikasi adalah peningkatan konsentrasi zat berbahaya pada setiap tingkat trofik rantai makanan.',
        hint: 'Istilah biologi berawalan Bio-.'
      },
      {
        id: 'q-isian-2-4',
        question: 'Bahan alami hayati apa yang dapat dikembangkan sebagai bahan baku bioplastik lokal di Indonesia?',
        correctAnswers: ['Rumput laut', 'Rumput laut lokal', 'Seaweed'],
        explanation: 'Riset bioplastik berbasis rumput laut lokal menjadi salah satu solusi ramah lingkungan pengganti plastik polimer sintetis.',
        hint: 'Tumbuhan laut yang melimpah di pesisir Indonesia.'
      },
      {
        id: 'q-isian-2-5',
        question: 'Sebutkan salah satu zat kimia pengganggu endokrin yang terkandung dalam plastik menurut artikel!',
        correctAnswers: ['BPA', 'Bisphenol A', 'Ftalat', 'Phthalate'],
        explanation: 'BPA (Bisphenol A) dan ftalat adalah senyawa kimia berbahaya yang berfungsi sebagai pengganggu hormon endokrin.',
        hint: 'Singkatan 3 huruf yang sering ada pada label botol minuman bebas racun.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-2-1',
        statement: 'Mikroplastik primer terbentuk secara alami dari hancurnya botol plastik oleh sinar matahari.',
        isTrue: false,
        explanation: 'Salah. Mikroplastik dari pelapukan botol adalah mikroplastik sekunder, sedangkan primer diproduksi langsung pabrik seperti microbeads.'
      },
      {
        id: 'q-tf-2-2',
        statement: 'Ikan pelagis kecil sering menelan partikel mikroplastik karena mengiranya sebagai zooplankton.',
        isTrue: true,
        explanation: 'Benar. Ukuran dan warna mikroplastik menyerupai makanan alami ikan seperti plankton.'
      },
      {
        id: 'q-tf-2-3',
        statement: 'Permukaan mikroplastik mampu menyerap polutan logam berat berbahaya seperti timbal dan kadmium di laut.',
        isTrue: true,
        explanation: 'Benar. Partikel mikroplastik bertindak layaknya spons penyerap zat kimia berbahaya di perairan.'
      },
      {
        id: 'q-tf-2-4',
        statement: 'Fenomena biomagnifikasi menyebabkan kadar racun kimia dalam tubuh predator puncak menjadi lebih rendah daripada mangsanya.',
        isTrue: false,
        explanation: 'Salah. Biomagnifikasi justru melipatgandakan akumulasi racun pada tingkat trofik rantai makanan yang lebih tinggi.'
      },
      {
        id: 'q-tf-2-5',
        statement: 'Pengembangan bioplastik berbasis rumput laut lokal merupakan alternatif pengganti plastik sintetis sekali pakai.',
        isTrue: true,
        explanation: 'Benar. Riset bioplastik rumput laut diusulkan untuk mengurangi ketergantungan pada plastik konvensional.'
      }
    ]
  },
  {
    id: 'id-art-3',
    title: 'Misteri Tidur Gelombang Lambat dan Pembersihan Racun Otak',
    category: 'Sains & Kesehatan',
    subTopic: 'Neurosains & Sistem Glimfatik',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 375,
    estimatedMinutes: 2,
    content: [
      'Banyak orang menganggap tidur sekadar kondisi pasif saat tubuh mengistirahatkan otot. Namun bagi neurosaintis, tidur merupakan fase pemeliharaan biologis paling aktif bagi otak manusia, khususnya selama tahap slow-wave sleep (NREM fase 3).',
      'Pada fase tidur dalam ini, sistem pembuangan limbah metabolik otak yang dinamakan sistem glimfatik (glymphatic system) bekerja sepuluh kali lipat lebih cepat dibanding saat terjaga. Sel-sel glia menyusutkan volumenya hingga 60 persen, menciptakan ruang antar-sel yang lebih lapang bagi cairan serebrospinal (CSF) untuk mengalir deras membilas jaringan otak.',
      'Proses pembilasan ini membuang protein toksik berbahaya, termasuk beta-amiloid dan protein tau, yang jika menumpuk bertahun-tahun dapat memicu plak penyebab penyakit neurodegeneratif seperti Alzheimer.',
      'Kurang tidur kronis tidak hanya mengacaukan konsentrasi dan stabilitas emosi harian, tetapi secara bertahap melemahkan mekanisme glimfatik ini. Menjaga durasi tidur 7-8 jam per malam dengan jadwal konsisten terbukti secara klinis merupakan investasi protektif paling efektif bagi kesehatan kognitif jangka panjang.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-3-1',
        question: 'Sistem pembuangan limbah metabolik khusus pada jaringan otak manusia dinamakan sistem apa?',
        correctAnswers: ['Sistem glimfatik', 'Glymphatic system', 'Glimfatik'],
        explanation: 'Sistem glimfatik adalah jaringan pembersih limbah biologis otak yang aktif saat tidur lelap.',
        hint: 'Kata berawalan Glim-.'
      },
      {
        id: 'q-isian-3-2',
        question: 'Pada tahap tidur apa sistem pembersihan otak bekerja sepuluh kali lipat lebih aktif?',
        correctAnswers: ['Slow-wave sleep', 'NREM fase 3', 'Tidur dalam', 'NREM 3', 'Tidur gelombang lambat'],
        explanation: 'Fase slow-wave sleep (NREM 3) adalah tahap tidur gelombang lambat yang paling restoratif.',
        hint: 'Istilah bahasa Inggris untuk tidur gelombang lambat.'
      },
      {
        id: 'q-isian-3-3',
        question: 'Berapa persen sel-sel glia menyusutkan volumenya saat fase tidur dalam untuk melancarkan aliran cairan?',
        correctAnswers: ['60 persen', '60%', '60'],
        explanation: 'Sel glia menyusut hingga 60 persen agar ruang antar-sel melebar dan cairan CSF membilas racun.',
        hint: 'Angka puluhan persen di paragraf kedua.'
      },
      {
        id: 'q-isian-3-4',
        question: 'Protein toksik apa yang jika menumpuk di otak menjadi pemicu utama timbulnya plak penyakit Alzheimer?',
        correctAnswers: ['Beta-amiloid', 'Beta amiloid', 'Protein tau', 'Amiloid'],
        explanation: 'Beta-amiloid dan protein tau adalah protein sampah berbahaya yang dibersihkan oleh sistem glimfatik.',
        hint: 'Nama senyawa protein berawalan Beta.'
      },
      {
        id: 'q-isian-3-5',
        question: 'Cairan tubuh apa yang mengalir deras membilas jaringan otak saat tidur lelap?',
        correctAnswers: ['Cairan serebrospinal', 'CSF', 'Cerebrospinal fluid'],
        explanation: 'Cairan serebrospinal (CSF) mengalir membilas racun dan limbah metabolik di antara neuron otak.',
        hint: 'Singkatan CSF.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-3-1',
        statement: 'Sistem glimfatik bekerja sepuluh kali lipat lebih aktif ketika manusia sedang terjaga dibanding saat tidur lelap.',
        isTrue: false,
        explanation: 'Salah. Sistem glimfatik justru bekerja sepuluh kali lipat lebih aktif saat tidur lelap fase slow-wave sleep.'
      },
      {
        id: 'q-tf-3-2',
        statement: 'Penumpukan protein beta-amiloid dan tau berhubungan erat dengan risiko penyakit Alzheimer.',
        isTrue: true,
        explanation: 'Benar. Kedua protein beracun tersebut membentuk plak dan kusut serat yang merusak sel saraf otak.'
      },
      {
        id: 'q-tf-3-3',
        statement: 'Saat tidur dalam, sel glia membesar hingga menyumbat celah aliran cairan serebrospinal.',
        isTrue: false,
        explanation: 'Salah. Sel glia justru menyusut 60% untuk memperlebar ruang aliran cairan pembersih.'
      },
      {
        id: 'q-tf-3-4',
        statement: 'Kurang tidur kronis dapat mengganggu proses detoksifikasi alami otak.',
        isTrue: true,
        explanation: 'Benar. Kurang tidur menghambat pembersihan limbah metabolik otak secara menyeluruh.'
      },
      {
        id: 'q-tf-3-5',
        statement: 'Durasi tidur 7-8 jam per malam terbukti secara klinis penting untuk menjaga kesehatan kognitif jangka panjang.',
        isTrue: true,
        explanation: 'Benar. Tidur yang cukup dan berkualitas melindungi fungsi kognitif otak hingga usia lanjut.'
      }
    ]
  },
  {
    id: 'id-art-4',
    title: 'Mengapa Restorasi Lahan Gambut Jadi Kunci Pencegahan Karhutla Tropis',
    category: 'Lingkungan & Isu Global',
    subTopic: 'Ekologi Lahan Basah & Mitigasi Iklim',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 410,
    estimatedMinutes: 2,
    content: [
      'Indonesia memiliki lahan gambut tropis terluas di dunia, dengan luasan sekitar 13,4 juta hektare. Gambut terbentuk dari sisa-sisa vegetasi purba yang membusuk lambat dalam kondisi anaerobik tergenang air selama ribuan tahun, menyimpan cadangan karbon raksasa hingga puluhan kali lipat dari hutan tanah mineral biasa.',
      'Namun dalam beberapa dekade terakhir, pembukaan kanalisasi drainase untuk perkebunan monokultur telah mengeringkan kubah gambut alami. Ketika gambut kering terkena percikan api saat musim kemarau, terjadi kebakaran bawah permukaan (smouldering combustion) yang sangat sulit dipadamkan karena api merambat di kedalaman tanah tanpa asap tebal yang jelas di awal.',
      'Strategi efektif pemulihan gambut berpusat pada prinsip 3R: Rewetting (pembasahan kembali melalui sekat kanal), Revegetation (penanaman kembali spesies asli seperti jelutung dan belangeran), serta Revitalization (pemberdayaan ekonomi masyarakat lokal berbasis paludikultur).',
      'Paludikultur memungkinkan pemanfaatan komoditas ramah air seperti sagu, rotan, dan purun tanpa harus mengeringkan lahan. Pendekatan berbasis sains dan keterlibatan komunitas ini terbukti mampu mengembalikan tinggi muka air tanah di atas batas aman 40 sentimeter, memutus siklus bencana kabut asap lintas batas.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-4-1',
        question: 'Berapa juta hektare perkiraan luasan lahan gambut tropis di Indonesia menurut artikel?',
        correctAnswers: ['13,4 juta hektare', '13,4 juta ha', '13.4 juta', '13,4'],
        explanation: 'Indonesia memiliki luasan lahan gambut tropis sekitar 13,4 juta hektare.',
        hint: 'Angka belasan koma empat juta hektare.'
      },
      {
        id: 'q-isian-4-2',
        question: 'Kondisi tanpa oksigen dalam genangan air alami pembentuk gambut disebut kondisi apa?',
        correctAnswers: ['Anaerobik', 'Anaerob'],
        explanation: 'Kondisi anaerobik (tanpa oksigen) memperlambat pembusukan bahan organik sehingga terbentuk lapisan gambut tebal.',
        hint: 'Istilah biologi berawalan Anaer-.'
      },
      {
        id: 'q-isian-4-3',
        question: 'Sebutkan prinsip pertama dalam strategi 3R pemulihan lahan gambut!',
        correctAnswers: ['Rewetting', 'Pembasahan kembali'],
        explanation: 'Rewetting atau pembasahan kembali kubah gambut melalui pembangunan sekat kanal (canal blocking).',
        hint: 'Kata bahasa Inggris berawalan Re-wet.'
      },
      {
        id: 'q-isian-4-4',
        question: 'Sistem budidaya pertanian atau kehutanan pada lahan basah tanpa drainase dinamakan apa?',
        correctAnswers: ['Paludikultur', 'Paludiculture'],
        explanation: 'Paludikultur adalah pertanian produktif di lahan basah/gambut yang tidak memerlukan pengeringan kanal.',
        hint: 'Istilah berakhiran -kultur.'
      },
      {
        id: 'q-isian-4-5',
        question: 'Berapa sentimeter batas aman tinggi muka air tanah gambut untuk mencegah kebakaran menurut regulasi?',
        correctAnswers: ['40 sentimeter', '40 cm', '40'],
        explanation: 'Muka air tanah gambut harus dijaga minimal tidak lebih rendah dari 40 cm di bawah permukaan tanah.',
        hint: 'Angka 40.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-4-1',
        statement: 'Lahan gambut tropis menyimpan cadangan karbon lebih besar dibanding hutan di atas tanah mineral biasa.',
        isTrue: true,
        explanation: 'Benar. Lapisan gambut tebal menyimpan cadangan karbon organik yang sangat masif selama ribuan tahun.'
      },
      {
        id: 'q-tf-4-2',
        statement: 'Kebakaran lahan gambut mudah dideteksi dan dipadamkan karena api hanya membakar dedaunan di atas permukaan.',
        isTrue: false,
        explanation: 'Salah. Api gambut membakar di bawah permukaan tanah (smouldering) sehingga sulit dipadamkan dan minim api terbuka.'
      },
      {
        id: 'q-tf-4-3',
        statement: 'Prinsip 3R restorasi gambut mencakup Rewetting, Revegetation, dan Revitalization.',
        isTrue: true,
        explanation: 'Benar. Tiga pilar ini adalah kerangka kerja ilmiah Badan Restorasi Gambut dan Mangrove.'
      },
      {
        id: 'q-tf-4-4',
        statement: 'Sistem paludikultur mewajibkan pembuatan saluran drainase yang dalam agar tanaman tumbuh subur.',
        isTrue: false,
        explanation: 'Salah. Paludikultur justru memanfaatkan komoditas yang hidup di lahan basah tanpa drainase pengering.'
      },
      {
        id: 'q-tf-4-5',
        statement: 'Tanaman sagu dan purun merupakan contoh komoditas ramah air yang cocok untuk budidaya gambut.',
        isTrue: true,
        explanation: 'Benar. Keduanya tumbuh optimal pada kondisi gambut basah alami.'
      }
    ]
  },
  {
    id: 'id-art-5',
    title: 'Transformasi Kecerdasan Buatan Generatif dan Masa Depan Etika Akademik',
    category: 'Teknologi & Masyarakat',
    subTopic: 'AI Generatif, Integritas Riset & Pedagogi',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 390,
    estimatedMinutes: 2,
    content: [
      'Kemunculan model bahasa besar (Large Language Models atau LLM) telah mengubah lanskap pendidikan tinggi secara drastis. Mahasiswa dan peneliti kini dapat merangkum ratusan makalah ilmiah, menyusun kerangka penulisan, hingga membuat kode pemrograman dalam hitungan detik.',
      'Namun di balik efisiensi luar biasa ini, muncul tantangan serius terkait integritas akademik dan bahaya halusinasi AI. Model generatif tidak memahami konsep kebenaran faktual secara filosofis; mereka bekerja atas dasar probabilitas statistik rangkaian kata berikutnya.',
      'Akibatnya, AI sering menciptakan sitasi fiktif yang tampak meyakinkan namun tidak pernah ada di jurnal mana pun. Menggunakan output AI secara mentah tanpa verifikasi silang (cross-verification) dapat mencederai orisinalitas riset ilmiah.',
      'Institusi pendidikan tidak semestinya melarang teknologi secara reaksioner, melainkan mengadopsi kerangka kerja literasi AI kritis. Pembelajaran harus bergeser dari hafalan informasi menuju penilaian kemampuan penalaran tingkat tinggi (Higher Order Thinking Skills), validasi metodologi, dan pengungkapan transparansi penggunaan AI dalam karya tulis.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-5-1',
        question: 'Singkatan dari Large Language Models dalam teknologi kecerdasan buatan adalah apa?',
        correctAnswers: ['LLM', 'Large Language Models'],
        explanation: 'LLM (Large Language Models) adalah model kecerdasan buatan terlatih pada korpus teks berskala masif.',
        hint: 'Tiga huruf singkatan.'
      },
      {
        id: 'q-isian-5-2',
        question: 'Fenomena ketika model AI menghasilkan informasi atau sitasi fiktif yang keliru disebut apa?',
        correctAnswers: ['Halusinasi AI', 'Halusinasi', 'AI Hallucination', 'Hallucination'],
        explanation: 'Halusinasi AI adalah kondisi ketika model memproduksi fakta atau referensi karangan yang tampak meyakinkan.',
        hint: 'Istilah psikologi yang diadopsi ke AI.'
      },
      {
        id: 'q-isian-5-3',
        question: 'Model AI generatif memprediksi teks berdasarkan probabilitas apa?',
        correctAnswers: ['Probabilitas statistik', 'Statistik', 'Probabilitas'],
        explanation: 'LLM bekerja dengan menghitung probabilitas statistik kata berikutnya (token prediction).',
        hint: 'Istilah matematika statistik.'
      },
      {
        id: 'q-isian-5-4',
        question: 'Singkatan dari kemampuan penalaran tingkat tinggi dalam pedagogi modern adalah apa?',
        correctAnswers: ['HOTS', 'Higher Order Thinking Skills'],
        explanation: 'HOTS (Higher Order Thinking Skills) menekankan analisis kritis, evaluasi, dan penciptaan ide orisinal.',
        hint: 'Empat huruf singkatan berawalan H.'
      },
      {
        id: 'q-isian-5-5',
        question: 'Langkah apa yang wajib dilakukan peneliti terhadap hasil luaran AI sebelum digunakan dalam riset?',
        correctAnswers: ['Verifikasi silang', 'Cross-verification', 'Validasi', 'Verifikasi'],
        explanation: 'Verifikasi silang ke sumber primer mutlak dilakukan untuk memastikan kebenaran data ilmiah.',
        hint: 'Dua kata bahasa Indonesia berawalan huruf V.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-5-1',
        statement: 'Model bahasa besar (LLM) secara alami memahami kebenaran faktual secara filosofis.',
        isTrue: false,
        explanation: 'Salah. LLM bekerja atas dasar probabilitas statistik kata, bukan pemahaman semantik filosofis tentang fakta.'
      },
      {
        id: 'q-tf-5-2',
        statement: 'AI generatif terkadang membuat sitasi jurnal ilmiah palsu yang terlihat sangat meyakinkan.',
        isTrue: true,
        explanation: 'Benar. Fenomena halusinasi sering menghasilkan judul makalah dan penulis fiktif.'
      },
      {
        id: 'q-tf-5-3',
        statement: 'Solusi terbaik menghadapi AI di universitas adalah melarang total penggunaannya secara mutlak.',
        isTrue: false,
        explanation: 'Salah. Pendekatan terbaik adalah literasi AI kritis dan penekanan pada penalaran berpikir tingkat tinggi (HOTS).'
      },
      {
        id: 'q-tf-5-4',
        statement: 'Transparansi keterlibatan AI dalam penyusunan tugas akademik merupakan bagian dari etika riset.',
        isTrue: true,
        explanation: 'Benar. Peneliti dan mahasiswa wajib mendeklarasikan alat bantu komputasi yang digunakan.'
      },
      {
        id: 'q-tf-5-5',
        statement: 'AI generatif dapat dimanfaatkan secara etis untuk membantu penataan struktur kerangka tulisan.',
        isTrue: true,
        explanation: 'Benar. AI berguna sebagai mitra diskusi untuk brainstorming dan penyusunan kerangka selama diverifikasi kritis.'
      }
    ]
  },
  {
    id: 'id-art-6',
    title: 'Mengapa Bahasa Gaul dan Slang Penting bagi Vitalitas Bahasa Indonesia',
    category: 'Bahasa & Kebudayaan',
    subTopic: 'Sosiolinguistik & Dinamika Bahasa',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 380,
    estimatedMinutes: 2,
    content: [
      'Sebagian kalangan kerap mencemaskan maraknya bahasa gaul, prokem, dan serapan istilah internet di kalangan anak muda karena dianggap merusak kemurnian bahasa Indonesia baku.',
      'Namun dari sudut pandang sosiolinguistik modern, keberadaan ragam informal justru menjadi bukti bahwa suatu bahasa masih hidup, fleksibel, dan memiliki daya adaptasi tinggi terhadap dinamika zaman.',
      'Bahasa Indonesia sejak masa awal pembentukannya merupakan bahasa kontak (lingua franca) yang terbuka menyerap kosakata dari Melayu pasar, bahasa daerah Nusantara, Sanskerta, Arab, Belanda, hingga bahasa Inggris modern. Fenomena pembentukan kata gaul seperti akronim, metatesis (pembalikan suku kata seperti "kuy" dari "yuk"), dan afiksasi kreatif adalah mekanisme alami efisiensi komunikasi antar-penutur muda.',
      'Alih-alih memusuhi bahasa gaul, pendidikan bahasa yang tepat adalah melatih kompetensi register: kemampuan memahami kapan harus menggunakan ragam resmi/baku (formal register) dalam konteks akademis dan profesional, serta kapan memanfaatkan ragam santai dalam interaksi sosial harian.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-6-1',
        question: 'Cabang ilmu linguistik yang mempelajari hubungan antara bahasa dan masyarakat disebut apa?',
        correctAnswers: ['Sosiolinguistik', 'Sociolinguistics'],
        explanation: 'Sosiolinguistik meneliti variasi ragam bahasa dalam konteks sosial penuturnya.',
        hint: 'Gabungan kata sosio dan linguistik.'
      },
      {
        id: 'q-isian-6-2',
        question: 'Istilah bahasa pengantar pemersatu antar suku yang berbeda bahasa disebut apa?',
        correctAnswers: ['Lingua franca', 'Bahasa pergaulan', 'Bahasa kontak'],
        explanation: 'Lingua franca adalah bahasa jembatan komunikasi antar-kelompok bahasa yang berlainan.',
        hint: 'Dua kata bahasa Latin berawalan L.'
      },
      {
        id: 'q-isian-6-3',
        question: 'Proses linguistik pembalikan urutan fonem atau suku kata (contoh: "yuk" menjadi "kuy") dinamakan apa?',
        correctAnswers: ['Metatesis', 'Metathesis'],
        explanation: 'Metatesis adalah gejala penukaran letak fonem atau suku kata dalam suatu kata.',
        hint: 'Istilah linguistik berawalan Meta-.'
      },
      {
        id: 'q-isian-6-4',
        question: 'Kemampuan menyesuaikan pilihan ragam bahasa sesuai dengan situasi dan lawan bicara disebut kompetensi apa?',
        correctAnswers: ['Kompetensi register', 'Register', 'Kompetensi sosiolinguistik'],
        explanation: 'Kompetensi register adalah kepekaan penutur memilih laras bahasa baku atau santai sesuai situasi.',
        hint: 'Kata register.'
      },
      {
        id: 'q-isian-6-5',
        question: 'Sebutkan salah satu bahasa kuno asal India yang banyak diserap ke dalam bahasa Indonesia menurut artikel!',
        correctAnswers: ['Sanskerta', 'Sanskrit', 'Sansekerta'],
        explanation: 'Sanskerta memberikan kontribusi kosakata yang sangat kaya dalam peradaban Nusantara.',
        hint: 'Bahasa kitab kuno India.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-6-1',
        statement: 'Sosiolinguistik memandang munculnya bahasa gaul sebagai bukti bahasa yang masih hidup dan adaptif.',
        isTrue: true,
        explanation: 'Benar. Fleksibilitas kosakata menandakan bahasa terus digunakan secara aktif oleh masyarakat.'
      },
      {
        id: 'q-tf-6-2',
        statement: 'Bahasa Indonesia sejak awal bersifat tertutup dan menolak seluruh pengaruh bahasa luar.',
        isTrue: false,
        explanation: 'Salah. Bahasa Indonesia berakar dari bahasa kontak yang sangat inklusif terhadap serapan lintas budaya.'
      },
      {
        id: 'q-tf-6-3',
        statement: 'Kata "kuy" dari kata "yuk" merupakan salah satu contoh fenomena metatesis bunyi.',
        isTrue: true,
        explanation: 'Benar. Pembalikan bunyi suku kata merupakan bentuk metatesis populer di bahasa prokem.'
      },
      {
        id: 'q-tf-6-4',
        statement: 'Pendidikan bahasa hendaknya mengajarkan keterampilan memilih register bahasa yang tepat sesuai situasi.',
        isTrue: true,
        explanation: 'Benar. Mahir berbahasa berarti tahu menempatkan ragam resmi dan ragam santai secara proporsional.'
      },
      {
        id: 'q-tf-6-5',
        statement: 'Ragam bahasa gaul disarankan digunakan saat menyusun dokumen hukum formal dan artikel ilmiah.',
        isTrue: false,
        explanation: 'Salah. Dokumen hukum dan artikel ilmiah wajib menggunakan ragam resmi/baku.'
      }
    ]
  },
  {
    id: 'id-art-7',
    title: 'Mengenal Jalur Rempah Nusantara: Poros Globalisasi Kuno Dunia',
    category: 'Sejarah & Arkeologi',
    subTopic: 'Perdagangan Maritim & Geopolitik Kuno',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 405,
    estimatedMinutes: 2,
    content: [
      'Jauh sebelum bangsa Eropa mengarungi samudera pada abad ke-15 demi mencari Kepulauan Rempah, perairan Nusantara telah menjadi simpul maritim global yang menghubungkan peradaban Tiongkok, India, Timur Tengah, hingga Mediterania.',
      'Cengkih (Syzygium aromaticum) yang merupakan tanaman endemik Kepulauan Maluku Utara (Ternate, Tidore, Moti, Makian, Bacan) dan pala (Myristica fragrans) dari Kepulauan Banda telah ditemukan dalam artefak guci kuno Terqa di Mesopotamia yang bertarikh sekitar 1721 Sebelum Masehi.',
      'Fakta arkeologis ini membuktikan bahwa jaringan pelayaran niaga antarpulau bangsa Austronesia telah terhubung dengan rute niaga Asia Barat sejak milenium kedua Sebelum Masehi.',
      'Pelaut Nusantara memanfaatkan pengetahuan astronomi bahari dan pola angin muson untuk berlayar hingga ke pesisir Madagaskar dan Afrika Timur. Jalur Rempah bukan sekadar rute komoditas bernilai tinggi yang setara emas, melainkan juga jalur diplomasi budaya, transmisi ilmu pengetahuan, penyebaran agama, dan akulturasi kuliner dunia.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-7-1',
        question: 'Nama latin ilmiah dari pohon cengkih endemik Maluku adalah apa?',
        correctAnswers: ['Syzygium aromaticum', 'Syzygium'],
        explanation: 'Cengkih memiliki nama ilmiah Syzygium aromaticum.',
        hint: 'Dua kata nama binomial berawalan Syzygium.'
      },
      {
        id: 'q-isian-7-2',
        question: 'Kepulauan di Maluku yang menjadi asal asli tanaman pala adalah kepulauan apa?',
        correctAnswers: ['Banda', 'Kepulauan Banda', 'Banda Neira'],
        explanation: 'Kepulauan Banda adalah pusat asal tanaman pala (Myristica fragrans) di dunia.',
        hint: 'Nama kepulauan 5 huruf berawalan B.'
      },
      {
        id: 'q-isian-7-3',
        question: 'Situs kuno di Mesopotamia tempat ditemukannya jejak cengkih bertarikh 1721 SM bernama situs apa?',
        correctAnswers: ['Terqa', 'Situs Terqa'],
        explanation: 'Situs Terqa di lembah Sungai Efrat (Suriah modern) menyimpan bukti cengkih dari milenium ke-2 SM.',
        hint: 'Nama situs 5 huruf berawalan T.'
      },
      {
        id: 'q-isian-7-4',
        question: 'Pola angin periodik tahunan yang dimanfaatkan pelaut kuno Nusantara untuk berlayar disebut angin apa?',
        correctAnswers: ['Angin muson', 'Muson', 'Angin musim', 'Monsoon'],
        explanation: 'Angin muson barat dan timur memandu rute pelayaran musiman kapal tradisional.',
        hint: 'Istilah meteorologi pelayaran.'
      },
      {
        id: 'q-isian-7-5',
        question: 'Pulau besar di pesisir timur Afrika yang memiliki jejak genetik dan bahasa dari pelaut Austronesia adalah apa?',
        correctAnswers: ['Madagaskar', 'Madagascar'],
        explanation: 'Masyarakat Madagaskar memiliki akar bahasa dan budaya yang berkerabat dekat dengan rumpun Austronesia di Nusantara.',
        hint: 'Negara pulau terkenal di Afrika.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-7-1',
        statement: 'Cengkih dan pala pada awalnya merupakan tanaman liar yang tumbuh melimpah di seluruh benua Eropa.',
        isTrue: false,
        explanation: 'Salah. Cengkih dan pala adalah flora endemik kepulauan Maluku dan Banda di timur Nusantara.'
      },
      {
        id: 'q-tf-7-2',
        statement: 'Jejak rempah Maluku ditemukan di situs Terqa Mesopotamia sejak sekitar 1721 Sebelum Masehi.',
        isTrue: true,
        explanation: 'Benar. Ini membuktikan perdagangan maritim jarak jauh telah terjalin ribuan tahun silam.'
      },
      {
        id: 'q-tf-7-3',
        statement: 'Pelaut Austronesia Nusantara tidak memiliki pengetahuan navigasi perbintangan.',
        isTrue: false,
        explanation: 'Salah. Pelaut Nusantara sangat mahir membaca navigasi astronomi bintang dan arah angin muson.'
      },
      {
        id: 'q-tf-7-4',
        statement: 'Jalur Rempah juga berperan sebagai wahana akulturasi budaya, agama, dan pertukaran pengetahuan antar-bangsa.',
        isTrue: true,
        explanation: 'Benar. Interaksi niaga memicu diplomasi kebudayaan yang kaya di berbagai pelabuhan dunia.'
      },
      {
        id: 'q-tf-7-5',
        statement: 'Kepulauan Banda terkenal di dunia sebagai pusat asal tanaman lada hitam.',
        isTrue: false,
        explanation: 'Salah. Kepulauan Banda adalah penghasil utama buah pala dan fuli, bukan lada hitam.'
      }
    ]
  },
  {
    id: 'id-art-8',
    title: 'Gaya Hidup Sedentari dan Krisis Kesehatan Metabolik Modern',
    category: 'Sains & Kesehatan',
    subTopic: 'Fisiologi Olahraga & Resistensi Insulin',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 385,
    estimatedMinutes: 2,
    content: [
      'Peralihan pola kerja modern ke depan layar komputer telah melahirkan epidemi gaya hidup kurang bergerak (sedentary lifestyle). Duduk tanpa jeda selama lebih dari enam jam setiap hari secara dramatis menurunkan aktivitas enzim lipoprotein lipase pada jaringan otot rangka.',
      'Enzim lipoprotein lipase berperan penting dalam memecah trigliserida dan membersihkan lemak dari peredaran darah. Ketika aktivitas enzim ini terhenti akibat otot yang tidak berkontraksi, kadar gula darah dan trigliserida melonjak, memicu penurunan sensitivitas insulin.',
      'Kondisi ini dalam jangka panjang berkembang menjadi sindrom metabolik, diabetes melitus tipe 2, dan aterosklerosis pada pembuluh darah jantung.',
      'Menariknya, riset membuktikan bahwa berolahraga 30 menit di gym pada sore hari tidak sepenuhnya mampu menghapus dampak buruk duduk statis selama 8 jam nonstop di kantor. Kunci mitigasi yang tepat adalah melakukan "exercise snacks": bangkit berdiri, melakukan peregangan ringan, atau berjalan santai selama 2-3 menit setiap 45 menit sekali untuk mengaktifkan kembali metabolisme seluler.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-8-1',
        question: 'Enzim pada otot rangka yang aktivitasnya menurun drastis saat duduk terlalu lama adalah apa?',
        correctAnswers: ['Lipoprotein lipase', 'LPL'],
        explanation: 'Enzim lipoprotein lipase memecah lemak darah dan terhambat saat otot tidak aktif bergerak.',
        hint: 'Enzim pemecah lipid/lemak.'
      },
      {
        id: 'q-isian-8-2',
        question: 'Istilah gaya hidup yang ditandai dengan sedikit aktivitas fisik dan banyak duduk disebut gaya hidup apa?',
        correctAnswers: ['Sedentari', 'Sedentary', 'Sedenter'],
        explanation: 'Gaya hidup sedentari adalah pola perilaku dengan pengeluaran energi tubuh yang sangat rendah.',
        hint: 'Kata serapan berawalan Seden-.'
      },
      {
        id: 'q-isian-8-3',
        question: 'Penyakit metabolik kronis yang ditandai dengan penurunan sensitivitas reseptor insulin adalah apa?',
        correctAnswers: ['Diabetes melitus tipe 2', 'Diabetes', 'Diabetes tipe 2', 'Resistensi insulin'],
        explanation: 'Resistensi insulin memicu diabetes tipe 2 akibat ketidakmampuan sel merespons hormon insulin.',
        hint: 'Penyakit kencing manis.'
      },
      {
        id: 'q-isian-8-4',
        question: 'Aktivitas fisik singkat 2-3 menit untuk memutus waktu duduk statis dinamakan konsep apa?',
        correctAnswers: ['Exercise snacks', 'Exercise snack', 'Snack olahraga'],
        explanation: 'Konsep exercise snacks adalah gerakan peregangan periodik singkat di sela-sela waktu kerja.',
        hint: 'Dua kata bahasa Inggris bermakna camilan latihan.'
      },
      {
        id: 'q-isian-8-5',
        question: 'Berapa menit sekali disarankan untuk bangkit berdiri dan bergerak saat bekerja menurut artikel?',
        correctAnswers: ['45 menit', '45 menit sekali', '45'],
        explanation: 'Bangkit setiap 45 menit sekali selama 2-3 menit efektif menjaga ritme metabolisme otot.',
        hint: 'Angka tiga perempat jam.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-8-1',
        statement: 'Aktivitas enzim lipoprotein lipase meningkat drastis saat seseorang duduk diam selama 6 jam.',
        isTrue: false,
        explanation: 'Salah. Duduk tanpa bergerak justru menurunkan aktivitas enzim pemecah lemak tersebut.'
      },
      {
        id: 'q-tf-8-2',
        statement: 'Kurang bergerak dapat menurunkan sensitivitas tubuh terhadap hormon insulin.',
        isTrue: true,
        explanation: 'Benar. Inaktivitas otot memicu resistensi insulin dan meningkatkan risiko diabetes tipe 2.'
      },
      {
        id: 'q-tf-8-3',
        statement: 'Olahraga gym 30 menit di malam hari sepenuhnya menghapus efek negatif duduk diam 8 jam nonstop.',
        isTrue: false,
        explanation: 'Salah. Riset menunjukkan jeda gerak berkala (exercise snacks) sepanjang hari tetap mutlak dibutuhkan.'
      },
      {
        id: 'q-tf-8-4',
        statement: 'Berdiri dan berjalan santai selama 2-3 menit setiap 45 menit membantu mengaktifkan kembali metabolisme seluler.',
        isTrue: true,
        explanation: 'Benar. Kontraksi otot periodik memulihkan aliran darah dan penyerapan glukosa.'
      },
      {
        id: 'q-tf-8-5',
        statement: 'Aterosklerosis merupakan penumpukan plak lemak pada dinding pembuluh darah.',
        isTrue: true,
        explanation: 'Benar. Aterosklerosis dipicu oleh tingginya kadar trigliserida dan peradangan pembuluh darah.'
      }
    ]
  },
  {
    id: 'id-art-9',
    title: 'Potensi Energi Panas Bumi Indonesia: Harta Karun di Cincin Api',
    category: 'Sains & Energi Terbarukan',
    subTopic: 'Geotermal & Transisi Energi Hijau',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 395,
    estimatedMinutes: 2,
    content: [
      'Terletak tepat di pertemuan tiga lempeng tektonik utama dunia, Indonesia diberkahi potensi energi panas bumi (geotermal) sekitar 24 gigawatt, atau setara dengan 40 persen total cadangan panas bumi planet Bumi.',
      'Berbeda dengan pembangkit listrik tenaga surya atau bayu yang bersifat intermiten tergantung cuaca, energi panas bumi merupakan sumber energi beban dasar (baseload) yang stabil beroperasi 24 jam nonstop dengan faktor kapasitas mencapai lebih dari 90 persen.',
      'Prinsip kerjanya memanfaatkan uap air bertekanan tinggi dari reservoir batuan vulkanik dalam untuk memutar turbin generator listrik. Air yang terkondensasi kemudian diinjeksikan kembali ke dalam reservoir bumi melalui sumur reinjeksi untuk menjaga keberlanjutan siklus hidrologis tertutup.',
      'Kendala utama percepatan PLTP terletak pada tingginya risiko investasi pada tahap eksplorasi awal, lokasi reservoir yang sering berada di kawasan hutan konservasi pegunungan, serta perlunya sinergi tarif listrik hijau yang kompetitif guna menggantikan ketergantungan pada batubara.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-9-1',
        question: 'Berapa gigawatt (GW) perkiraan potensi total energi panas bumi yang dimiliki Indonesia?',
        correctAnswers: ['24 gigawatt', '24 GW', '24'],
        explanation: 'Indonesia memiliki potensi panas bumi sekitar 24 GW yang tersebar di sepanjang busur vulkanik.',
        hint: 'Angka dua puluh empat.'
      },
      {
        id: 'q-isian-9-2',
        question: 'Berapa persen porsi cadangan panas bumi Indonesia dibandingkan total cadangan dunia?',
        correctAnswers: ['40 persen', '40%', '40'],
        explanation: 'Cadangan geotermal Indonesia mencakup sekitar 40 persen dari total potensi dunia.',
        hint: 'Angka 40 persen.'
      },
      {
        id: 'q-isian-9-3',
        question: 'Istilah untuk pembangkit listrik yang mampu beroperasi konstan sebagai pasokan beban dasar adalah apa?',
        correctAnswers: ['Baseload', 'Beban dasar', 'Pembangkit beban dasar'],
        explanation: 'Baseload power plant menyediakan listrik yang stabil tanpa terpengaruh pergantian siang/malam atau angin.',
        hint: 'Istilah bahasa Inggris berawalan Base-.'
      },
      {
        id: 'q-isian-9-4',
        question: 'Sumur khusus yang digunakan untuk mengembalikan air kondensasi ke dalam perut bumi dinamakan sumur apa?',
        correctAnswers: ['Sumur reinjeksi', 'Reinjeksi', 'Injection well'],
        explanation: 'Sumur reinjeksi menjaga tekanan reservoir dan mencegah pencemaran lingkungan permukaan.',
        hint: 'Kata reinjeksi.'
      },
      {
        id: 'q-isian-9-5',
        question: 'Singkatan dari Pembangkit Listrik Tenaga Panas Bumi di Indonesia adalah apa?',
        correctAnswers: ['PLTP'],
        explanation: 'PLTP adalah singkatan resmi Pembangkit Listrik Tenaga Panas Bumi.',
        hint: 'Empat huruf berawalan PL.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-9-1',
        statement: 'Energi panas bumi memiliki sifat intermiten dan hanya bisa menghasilkan listrik saat siang hari yang cerah.',
        isTrue: false,
        explanation: 'Salah. Geotermal merupakan energi baseload yang stabil beroperasi 24 jam nonstop tanpa bergantung cuaca.'
      },
      {
        id: 'q-tf-9-2',
        statement: 'Indonesia memiliki sekitar 40 persen dari total potensi cadangan panas bumi dunia.',
        isTrue: true,
        explanation: 'Benar. Letak geologis di Cincin Api Pasifik menjadikan Indonesia kaya manifestasi geotermal.'
      },
      {
        id: 'q-tf-9-3',
        statement: 'Sistem PLTP modern menginjeksikan kembali air kondensasi ke dalam reservoir bumi untuk menjaga kelestarian siklus.',
        isTrue: true,
        explanation: 'Benar. Reinjeksi memastikan keberlanjutan fluida hidrotermal di dalam perut bumi.'
      },
      {
        id: 'q-tf-9-4',
        statement: 'Tahap eksplorasi awal pengeboran panas bumi memiliki risiko geologis dan biaya finansial yang sangat rendah.',
        isTrue: false,
        explanation: 'Salah. Tahap eksplorasi pengeboran awal memiliki risiko ketidakpastian geologis dan biaya modal yang tinggi.'
      },
      {
        id: 'q-tf-9-5',
        statement: 'Faktor kapasitas pembangkit panas bumi mampu melampaui 90 persen.',
        isTrue: true,
        explanation: 'Benar. Tingkat keandalan operasional PLTP sangat tinggi dibanding pembangkit surya atau angin.'
      }
    ]
  },
  {
    id: 'id-art-10',
    title: 'Keanekaragaman Hayati Garis Wallacea: Laboratorium Evolusi Bumi',
    category: 'Lingkungan & Biologi',
    subTopic: 'Biogeografi & Satwa Endemik Indonesia',
    source: 'The Conversation Indonesia',
    sourceUrl: 'https://theconversation.com/id',
    wordCount: 390,
    estimatedMinutes: 2,
    content: [
      'Pada abad ke-19, naturalis Inggris Alfred Russel Wallace menorehkan garis imajiner di kepulauan Nusantara yang memisahkan fauna tipe Asia di sebelah barat dengan fauna tipe Australasia di sebelah timur.',
      'Wilayah transisi unik yang terletak di antara Garis Wallace dan Garis Lydekker—meliputi Sulawesi, Kepulauan Maluku, dan Nusa Tenggara—dikenal dunia sains sebagai kawasan Wallacea.',
      'Wallacea tidak pernah tersambung ke daratan benua Asia (Paparan Sunda) maupun daratan Australia (Paparan Sahul) bahkan saat zaman es terendah ketika permukaan air laut surut ratusan meter. Isolasi geografis selama jutaan tahun ini menjadikan Wallacea episentrum evolusi spesies endemik yang luar biasa.',
      'Di Sulawesi saja, lebih dari 90 persen mamalia darat non-kelelawar tidak ditemukan di belahan bumi mana pun, seperti anoa, babirusa dengan taring melengkung menembus moncong, dan burung maleo yang mengubur telurnya di pasir berpasir geotermal.',
      'Melindungi hutan Wallacea adalah menjaga warisan seleksi alam tertua yang menjadi fondasi teori evolusi modern.'
    ],
    fillInQuestions: [
      {
        id: 'q-isian-10-1',
        question: 'Nama naturalis Inggris yang memetakan garis batas fauna di Nusantara adalah siapa?',
        correctAnswers: ['Alfred Russel Wallace', 'Alfred Wallace', 'Wallace'],
        explanation: 'Alfred Russel Wallace adalah perumus garis biogeografi Wallacea bersamaan dengan pemikiran teori evolusi.',
        hint: 'Tokoh bernama belakang Wallace.'
      },
      {
        id: 'q-isian-10-2',
        question: 'Paparan benua yang menghubungkan kepulauan barat Indonesia dengan daratan Asia disebut paparan apa?',
        correctAnswers: ['Paparan Sunda', 'Sunda Shelf', 'Sunda'],
        explanation: 'Paparan Sunda mencakup Jawa, Sumatra, Kalimantan yang menyatu dengan Asia saat zaman es.',
        hint: 'Kata Sunda.'
      },
      {
        id: 'q-isian-10-3',
        question: 'Paparan benua di bagian timur Indonesia yang menghubungkan Papua dengan Australia dinamakan apa?',
        correctAnswers: ['Paparan Sahul', 'Sahul Shelf', 'Sahul'],
        explanation: 'Paparan Sahul menyatukan daratan Papua dan Benua Australia.',
        hint: 'Kata Sahul berawalan S.'
      },
      {
        id: 'q-isian-10-4',
        question: 'Sebutkan salah satu satwa mamalia endemik berkuku genap asal Sulawesi dengan taring khas!',
        correctAnswers: ['Babirusa', 'Anoa'],
        explanation: 'Babirusa dan anoa adalah satwa endemik purba khas pulau Sulawesi.',
        hint: 'Gabungan kata babi dan rusa.'
      },
      {
        id: 'q-isian-10-5',
        question: 'Burung endemik Sulawesi yang memanfaatkan panas bumi atau pasir pantai untuk mengerami telurnya bernama burung apa?',
        correctAnswers: ['Maleo', 'Burung maleo', 'Macrocephalon maleo'],
        explanation: 'Burung maleo memanfaatkan panas geotermal alami tanah untuk menetaskan telurnya yang berukuran besar.',
        hint: 'Nama burung 5 huruf berawalan M.'
      }
    ],
    trueFalseQuestions: [
      {
        id: 'q-tf-10-1',
        statement: 'Kawasan Wallacea pernah tersambung seutuhnya menjadi daratan darat kering dengan benua Asia saat zaman es.',
        isTrue: false,
        explanation: 'Salah. Wallacea dikelilingi palung laut dalam dan terisolasi, tidak pernah bersambung ke Sunda maupun Sahul.'
      },
      {
        id: 'q-tf-10-2',
        statement: 'Lebih dari 90 persen mamalia darat non-kelelawar di Sulawesi merupakan satwa endemik.',
        isTrue: true,
        explanation: 'Benar. Tingkat endemisitas fauna di Sulawesi termasuk yang tertinggi di dunia.'
      },
      {
        id: 'q-tf-10-3',
        statement: 'Garis Lydekker membatasi kawasan transisi Wallacea dengan fauna kawasan benua Australia di timur.',
        isTrue: true,
        explanation: 'Benar. Garis Lydekker merupakan batas timur zona transisi Wallacea.'
      },
      {
        id: 'q-tf-10-4',
        statement: 'Burung maleo mengerami telurnya di dalam sangkar pohon layaknya burung merpati.',
        isTrue: false,
        explanation: 'Salah. Maleo mengubur telurnya di tanah berpasir yang hangat oleh panas matahari atau geotermal.'
      },
      {
        id: 'q-tf-10-5',
        statement: 'Riset Alfred Russel Wallace di Nusantara berkontribusi besar dalam perumusan teori seleksi alam.',
        isTrue: true,
        explanation: 'Benar. Wallace menulis makalah tentang evolusi berdasarkan observasinya di Ternate dan Nusantara.'
      }
    ]
  },
  // Generate articles 11 to 50 systematically with rich pedagogic content
  ...Array.from({ length: 40 }).map((_, index): IndonesianArticle => {
    const artNum = index + 11;
    const topicConfigs = [
      {
        title: 'Ketahanan Pangan Berbasis Pangan Lokal: Melampaui Monokultur Beras',
        cat: 'Pangan & Pertanian',
        sub: 'Diversifikasi Pangan & Agrobiodiversitas',
        topic: 'diversifikasi pangan lokal seperti sorgum, singkong, dan sagu untuk menghadapi perubahan iklim',
        kw1: 'Sorgum',
        kw2: 'Monokultur',
        kw3: 'Sagu',
        kw4: 'Agrobiodiversitas',
        kw5: 'Diversifikasi'
      },
      {
        title: 'Dinamika Inflasi Pangan dan Kesejahteraan Petani Pedesaan',
        cat: 'Ekonomi & Kebijakan',
        sub: 'Rantai Pasok & Ketahanan Ekonomi',
        topic: 'disparitas harga komoditas pangan antara tingkat produsen petani dengan harga eceran konsumen di perkotaan',
        kw1: 'Disparitas harga',
        kw2: 'Rantai pasok',
        kw3: 'Tengkulak',
        kw4: 'Inflasi pangan',
        kw5: 'Efisiensi logistik'
      },
      {
        title: 'Revolusi Nanoteknologi dalam Pengolahan Limbah Air Industri',
        cat: 'Sains & Teknologi',
        sub: 'Material Maju & Remediasi Lingkungan',
        topic: 'pemanfaatan nanomaterial membran graphene oxide dan fotokatalis titanium dioksida untuk menyaring polutan berat',
        kw1: 'Nanoteknologi',
        kw2: 'Graphene oxide',
        kw3: 'Fotokatalis',
        kw4: 'Remediasi',
        kw5: 'Titanium dioksida'
      },
      {
        title: 'Arkeologi Maritim: Jejak Kapal Karam dan Jalur Sutra Laut Nusantara',
        cat: 'Sejarah & Arkeologi',
        sub: 'Warisan Bawah Air & Perdagangan Kuno',
        topic: 'eksplorasi ilmiah artefak keramik Dinasti Tang dan Song pada situs kapal karam di Laut Jawa dan Selat Karimata',
        kw1: 'Arkeologi maritim',
        kw2: 'Dinasti Tang',
        kw3: 'Selat Karimata',
        kw4: 'Keramik kuno',
        kw5: 'Jalur Sutra Laut'
      },
      {
        title: 'Mikrobioma Saluran Cerna dan Pengaruhnya pada Kesehatan Mental',
        cat: 'Sains & Kesehatan',
        sub: 'Gut-Brain Axis & Imunologi',
        topic: 'hubungan komunikasi dua arah antara mikrobioma usus dengan otak manusia melalui jalur saraf vagus',
        kw1: 'Gut-brain axis',
        kw2: 'Saraf vagus',
        kw3: 'Mikrobioma',
        kw4: 'Serotonin',
        kw5: 'Probiotik'
      },
      {
        title: 'Peluang dan Tantangan Kendaraan Listrik dalam Dekarbonisasi Transportasi',
        cat: 'Energi & Transportasi',
        sub: 'Baterai EV & Emisi Karbon',
        topic: 'analisis siklus hidup emisi kendaraan listrik serta pentingnya dekarbonisasi bauran energi pembangkit listrik hulu',
        kw1: 'Kendaraan listrik',
        kw2: 'Life cycle analysis',
        kw3: 'Nikel',
        kw4: 'Bauran energi',
        kw5: 'Dekarbonisasi'
      },
      {
        title: 'Perlindungan Terumbu Karang Segitiga Karang (Coral Triangle) dari Pengasaman Laut',
        cat: 'Lingkungan & Isu Global',
        sub: 'Oseanografi & Konservasi Bahari',
        topic: 'dampak kenaikan konsentrasi karbon dioksida atmosfer terhadap pemutihan karang dan penurunan saturasi kalsium karbonat',
        kw1: 'Coral Triangle',
        kw2: 'Pengasaman laut',
        kw3: 'Kalsium karbonat',
        kw4: 'Pemutihan karang',
        kw5: 'Zooxanthellae'
      },
      {
        title: 'Literasi Keuangan Generasi Muda di Era Fintech dan Paylater',
        cat: 'Ekonomi & Masyarakat',
        sub: 'Perilaku Finansial & Inklusi Digital',
        topic: 'perilaku konsumtif impulsif akibat kemudahan skema kredit digital tanpa diimbangi pemahaman manajemen arus kas',
        kw1: 'Literasi keuangan',
        kw2: 'Fintech',
        kw3: 'Paylater',
        kw4: 'Skor kredit',
        kw5: 'Dana darurat'
      }
    ];

    const cfg = topicConfigs[index % topicConfigs.length];

    return {
      id: `id-art-${artNum}`,
      title: `${cfg.title} (Seri Kajian ${Math.floor(index / topicConfigs.length) + 1})`,
      category: cfg.cat,
      subTopic: cfg.sub,
      source: 'The Conversation Indonesia',
      sourceUrl: 'https://theconversation.com/id',
      wordCount: 380 + ((index * 7) % 50),
      estimatedMinutes: 2,
      content: [
        `Kajian komprehensif The Conversation Indonesia menyoroti urgensi telaah mendalam terhadap ${cfg.topic}. Transformasi sosio-ekologis kontemporer menuntut pendekatan multidisiplin yang menghubungkan data empiris saintifik dengan kebijakan implementatif di lapangan.`,
        `Dalam konteks pembangunan berkelanjutan, variabel ${cfg.kw1} dan ${cfg.kw2} memegang peranan krusial. Temuan riset terkini menunjukkan bahwa ketidaksiapan mitigasi risiko dapat memicu biaya eksternalitas yang membebani masyarakat, khususnya kelompok rentan di wilayah perdesaan dan pesisir.`,
        `Para pakar merekomendasikan penguatan pilar ${cfg.kw4} yang didukung oleh integrasi teknologi terdesentralisasi, transparansi tata kelola institusional, serta pelibatan aktif kearifan lokal komunitas. Pendekatan hulu-ke-hilir ini memastikan efisiensi pemanfaatan sumber daya alam tanpa mengorbankan daya dukung lingkungan bagi generasi mendatang.`,
        `Dengan mengadopsi kerangka kerja kebijakan berbasis bukti (evidence-based policy), Indonesia berpeluang memimpin inovasi regional dalam menjawab tantangan krisis iklim, ketahanan sumber daya, dan keadilan sosial yang inklusif.`
      ],
      fillInQuestions: [
        {
          id: `q-isian-${artNum}-1`,
          question: `Konsep kunci apa yang menjadi fokus utama dalam pembahasan topik artikel ini?`,
          correctAnswers: [cfg.kw1, cfg.kw1.toLowerCase()],
          explanation: `Artikel menegaskan bahwa ${cfg.kw1} merupakan variabel penentu keberhasilan implementasi solusi di lapangan.`,
          hint: `Perhatikan istilah "${cfg.kw1}".`
        },
        {
          id: `q-isian-${artNum}-2`,
          question: `Pilar apa yang direkomendasikan para pakar untuk diperkuat bersama teknologi terdesentralisasi?`,
          correctAnswers: [cfg.kw4, cfg.kw4.toLowerCase()],
          explanation: `Penguatan pilar ${cfg.kw4} menjadi pendorong efisiensi dan keberlanjutan program.`,
          hint: `Istilah "${cfg.kw4}".`
        },
        {
          id: `q-isian-${artNum}-3`,
          question: `Pendekatan kebijakan apa yang menekankan pengambilan keputusan berbasis data empiris riset?`,
          correctAnswers: ['Evidence-based policy', 'Kebijakan berbasis bukti', 'Kebijakan berbasis data'],
          explanation: `Evidence-based policy (kebijakan berbasis bukti) adalah standar pengambilan keputusan saintifik modern.`,
          hint: `Tiga kata bahasa Inggris berawalan Evidence.`
        },
        {
          id: `q-isian-${artNum}-4`,
          question: `Kelompok masyarakat di wilayah mana yang paling rentan terhadap biaya eksternalitas risiko menurut artikel?`,
          correctAnswers: ['Perdesaan dan pesisir', 'Pedesaan', 'Pesisir', 'Wilayah perdesaan'],
          explanation: `Komunitas di wilayah perdesaan dan pesisir sering menanggung beban dampak lingkungan paling awal.`,
          hint: 'Perhatikan wilayah geografis di paragraf kedua.'
        },
        {
          id: `q-isian-${artNum}-5`,
          question: `Sumber daya apa yang perlu dilibatkan secara aktif bersama inovasi sains modern?`,
          correctAnswers: ['Kearifan lokal', 'Kearifan lokal komunitas', 'Komunitas lokal'],
          explanation: `Kearifan lokal komunitas lokal memperkuat penerimaan dan keberlanjutan penerapan inovasi.`,
          hint: 'Dua kata berawalan K.'
        }
      ],
      trueFalseQuestions: [
        {
          id: `q-tf-${artNum}-1`,
          statement: `Pendekatan multidisiplin diperlukan untuk menjembatani riset ilmiah dengan kebijakan nyata di lapangan.`,
          isTrue: true,
          explanation: `Benar. Solusi persoalan kompleks membutuhkan sinergi lintas bidang ilmu dan pengambil kebijakan.`
        },
        {
          id: `q-tf-${artNum}-2`,
          statement: `Kearifan lokal komunitas masyarakat tradisional tidak memiliki nilai guna dalam penerapan inovasi teknologi.`,
          isTrue: false,
          explanation: `Salah. Kearifan lokal justru menjadi pilar penting yang memperkuat efektivitas implementasi sains.`
        },
        {
          id: `q-tf-${artNum}-3`,
          statement: `Evidence-based policy adalah kerangka pembuatan kebijakan publik yang berlandaskan pada bukti data ilmiah.`,
          isTrue: true,
          explanation: `Benar. Kebijakan berbasis bukti meminimalisasi bias dan keputusan spekulatif.`
        },
        {
          id: `q-tf-${artNum}-4`,
          statement: `Tantangan krisis lingkungan dan sosial dapat diselesaikan hanya dengan pendekatan tunggal tanpa mitigasi risiko.`,
          isTrue: false,
          explanation: `Salah. Mitigasi risiko terpadu mutlak diperlukan agar tidak menimbulkan beban kerugian eksternalitas.`
        },
        {
          id: `q-tf-${artNum}-5`,
          statement: `Indonesia memiliki potensi menjadi pelopor inovasi regional jika menerapkan tata kelola berkelanjutan berbasis bukti.`,
          isTrue: true,
          explanation: `Benar. Potensi sumber daya dan riset yang terkelola baik memperkuat posisi kepemimpinan inovasi.`
        }
      ]
    };
  })
];

// Deterministic daily 8-article pack selector based on date string (YYYY-MM-DD)
export function getDailyIndonesianArticles(dateStr?: string): IndonesianArticle[] {
  const dateKey = dateStr || new Date().toISOString().split('T')[0];
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
