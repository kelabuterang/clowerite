import { IndonesianArticle } from '../types';
import { ADDITIONAL_INDONESIAN_ARTICLES } from './additionalIndonesianArticles';
import { ADDITIONAL_INDONESIAN_ARTICLES_PART2 } from './additionalIndonesianArticlesPart2';
import { ADDITIONAL_INDONESIAN_ARTICLES_PART3 } from './additionalIndonesianArticlesPart3';
import { ADDITIONAL_INDONESIAN_ARTICLES_PART4 } from './additionalIndonesianArticlesPart4';
import { ADDITIONAL_INDONESIAN_ARTICLES_PART5 } from './additionalIndonesianArticlesPart5';
import { ADDITIONAL_INDONESIAN_ARTICLES_PART6 } from './additionalIndonesianArticlesPart6';
import { ADDITIONAL_INDONESIAN_ARTICLES_PART7 } from './additionalIndonesianArticlesPart7';
import { ADDITIONAL_INDONESIAN_ARTICLES_PART8 } from './additionalIndonesianArticlesPart8';
import { ADDITIONAL_INDONESIAN_ARTICLES_PART9 } from './additionalIndonesianArticlesPart9';
import { ADDITIONAL_INDONESIAN_ARTICLES_PART10 } from './additionalIndonesianArticlesPart10';

const BASE_INDONESIAN_ARTICLES: IndonesianArticle[] = [
  {
    id: "id-art-1",
    title: "Dopamine Bukan Sekadar Hormon Bahagia",
    category: "Sains & Psikologi",
    subTopic: "Neurosains & Neurotransmiter",
    source: "The Conversation Indonesia",
    sourceUrl: "https://theconversation.com/id",
    wordCount: 462,
    estimatedMinutes: 2,
    content: [
      "Dopamin sering kali disalahpahami oleh masyarakat luas sebagai semata-mata 'hormon kebahagiaan'. Narasi populer di media sosial kerap menggambarkan dopamin sebagai zat kimia yang dilepaskan ketika seseorang menikmati kepuasan sesaat, seperti menyantap sepotong cokelat lezat atau memenangkan sebuah permainan.",
      "Namun dalam literatur neurobiologi modern, fungsi primer dopamin sebenarnya bukanlah menghasilkan rasa nikmat saat mengonsumsi sesuatu, melainkan mendorong motivasi, antisipasi penghargaan (reward prediction), dan perilaku pencarian (seeking behavior). Dopamin adalah bahan bakar biologis yang membuat otak kita terus bertanya: 'Apa yang bisa kudapatkan berikutnya?'",
      "Ketika kita melihat notifikasi warna merah di ponsel atau mengendus aroma kopi yang baru diseduh di pagi hari, gelombang dopamin melonjak sebelum kita benar-benar membaca pesan atau meminum kopi tersebut. Lonjakan antisipasi inilah yang menggerakkan kita untuk bertindak dan mengerahkan energi.",
      "Sistem dopaminergik di area tegmental ventral dan striatum dirancang secara evolusioner untuk memastikan kelangsungan hidup spesies purba dengan memotivasi perburuan makanan dan eksplorasi lingkungan baru.",
      "Akan tetapi, paparan berulang terhadap stimulasi digital instan berfrekuensi tinggi dapat menyebabkan penurunan sensitivitas reseptor dopamin (down-regulation). Akibatnya, aktivitas yang membutuhkan konsentrasi mendalam dan jeda waktu lama—seperti membaca buku teks atau mempelajari keterampilan baru—terasa sangat hambar dan membosankan.",
      "Memahami bahwa dopamin adalah molekul penggerak hasrat, bukan sekadar penikmat akhir, membantu kita menyadari pentingnya menata lingkungan harian agar sirkuit motivasi otak tidak terkuras oleh stimulus artifisial."
    ],
    fillInQuestions: [
      {
        id: "q-isian-1-1",
        question: "Fungsi biologis utama neurotransmiter dopamin adalah mengatur perilaku pencarian dan apa?",
        correctAnswers: [
          "Motivasi",
          "Dorongan motivasi",
          "Antisipasi hadiah",
          "Antisipasi penghargaan",
          "Perilaku motivasi"
        ],
        explanation: "Dopamin berfungsi primer sebagai neurotransmiter pendorong motivasi dan antisipasi penghargaan, bukan semata hormon kenikmatan.",
        hint: "Kata berawalan M yang berarti dorongan bertindak."
      },
      {
        id: "q-isian-1-2",
        question: "Kapan gelombang dopamin melonjak di dalam otak terkait dengan suatu stimulus?",
        correctAnswers: [
          "Sebelum",
          "Sebelum mengonsumsi",
          "Saat antisipasi",
          "Sebelum tindakan",
          "Ketika antisipasi"
        ],
        explanation: "Gelombang dopamin memuncak saat otak mengantisipasi imbalan (sebelum imbalan tersebut benar-benar dinikmati).",
        hint: "Terjadi di awal sebelum aksi selesai."
      },
      {
        id: "q-isian-1-3",
        question: "Penurunan kepekaan reseptor saraf akibat stimulasi berlebih terus-menerus disebut istilah apa?",
        correctAnswers: [
          "Down-regulation",
          "Desensitisasi",
          "Penurunan sensitivitas",
          "Down regulation"
        ],
        explanation: "Down-regulation adalah mekanisme adaptasi saraf di mana jumlah atau sensitivitas reseptor dopamin berkurang karena stimulasi berlebih.",
        hint: "Istilah bahasa Inggris berawalan Down-."
      },
      {
        id: "q-isian-1-4",
        question: "Salah satu area otak tempat jalur dopaminergik utama bermuara adalah apa?",
        correctAnswers: [
          "Striatum",
          "Area tegmental ventral",
          "VTA"
        ],
        explanation: "Area tegmental ventral dan striatum adalah komponen kunci dalam sirkuit penghargaan dan motivasi otak.",
        hint: "Nama organ saraf berawalan S di sistem limbik."
      },
      {
        id: "q-isian-1-5",
        question: "Mengapa aktivitas membaca buku terasa hambar bagi otak yang terbiasa stimulasi digital instan?",
        correctAnswers: [
          "Reseptor dopamin berkurang",
          "Desensitisasi reseptor",
          "Penurunan sensitivitas",
          "Ambang rangsang naik"
        ],
        explanation: "Stimulasi digital instan menaikkan ambang kepuasan dan mengurangi sensitivitas reseptor dopamin.",
        hint: "Akibat penurunan sensitivitas reseptor saraf."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-1-1",
        statement: "Dopamin bekerja terutama sebagai hormon pendorong motivasi dan pencarian tujuan.",
        isTrue: true,
        explanation: "Benar. Dopamin mendorong manusia untuk bertindak dan mengejar imbalan yang diantisipasi."
      },
      {
        id: "q-tf-1-2",
        statement: "Kadar dopamin hanya akan meningkat setelah seseorang selesai menikmati makanan lezat.",
        isTrue: false,
        explanation: "Salah. Dopamin melonjak saat mencium aroma atau melihat makanan sebelum makanan itu dimakan."
      },
      {
        id: "q-tf-1-3",
        statement: "Paparan notifikasi ponsel berfrekuensi tinggi dapat menurunkan kepekaan reseptor dopamin di otak.",
        isTrue: true,
        explanation: "Benar. Stimulasi konstan memicu down-regulation pada reseptor dopaminergik."
      },
      {
        id: "q-tf-1-4",
        statement: "Dopamin dan serotonin memiliki fungsi biologis yang persis identik tanpa perbedaan peran sama sekali.",
        isTrue: false,
        explanation: "Salah. Dopamin menggerakkan motivasi dan pencarian, sedangkan serotonin lebih terkait pada regulasi kepuasan, suasana hati, dan ketenangan."
      },
      {
        id: "q-tf-1-5",
        statement: "Sistem dopamin berkembang secara evolusioner untuk mendukung kelangsungan hidup dalam mencari sumber daya.",
        isTrue: true,
        explanation: "Benar. Jalur reward otak mendorong perburuan makanan dan eksplorasi lingkungan hidup."
      }
    ]
  },
  {
    id: "id-art-2",
    title: "Freon Ada di Dekat Kita",
    category: "Sains & Lingkungan",
    subTopic: "Teknologi Termal & Kimia Lingkungan",
    source: "Kompas Sains & Teknologi",
    sourceUrl: "https://www.kompas.com",
    wordCount: 478,
    estimatedMinutes: 2,
    content: [
      "Hampir setiap rumah tangga modern di perkotaan bersentuhan langsung dengan freon setiap hari. Senyawa kimia yang bertindak sebagai zat pendingin (refrigeran) ini beredar tanpa henti di dalam pipa tembaga lemari es, pendingin ruangan (AC), hingga sistem pendingin mobil.",
      "Secara ilmiah, freon bekerja melalui siklus termodinamika tertutup yang memanfaatkan perubahan wujud zat dari cair menjadi gas dan sebaliknya. Kompresor memompa freon dalam wujud gas bertekanan tinggi menuju kondensor di luar ruangan, di mana panas dilepaskan ke udara terbuka sehingga freon berubah menjadi cairan dingin bertekanan tinggi.",
      "Cairan ini kemudian mengalir melalui katup ekspansi menuju evaporator di dalam ruangan, menyerap energi panas dari udara kamar, dan kembali menguap menjadi gas untuk mengulangi siklus tersebut secara terus-menerus.",
      "Meskipun freon berada di sistem tertutup dan aman dalam pemakaian normal, sejarah perkembangan refrigeran menyimpan pelajaran ekologis yang berharga. Generasi awal freon dari kelompok klorofluorokarbon (CFC) seperti R-12 dan R-22 terbukti merusak lapisan ozon stratosfer bumi ketika terlepas ke atmosfer, memicu Protokol Montreal untuk melarang penggunaannya secara bertahap.",
      "Industri modern kini beralih ke senyawa hidrofluorokarbon generasi baru seperti R-32 dan R-410A yang memiliki potensi perusakan ozon (ODP) nol serta efisiensi energi yang jauh lebih tinggi. Namun, gas refrigeran tetap memiliki potensi pemanasan global (GWP) yang signifikan jika terjadi kebocoran akibat pemasangan yang tidak standar.",
      "Oleh karena itu, perawatan berkala oleh teknisi bersertifikasi dan pemulihan refrigeran bekas saat perbaikan menjadi langkah penting untuk menjaga kenyamanan rumah sekaligus melindungi kelestarian atmosfer bumi."
    ],
    fillInQuestions: [
      {
        id: "q-isian-2-1",
        question: "Zat kimia refrigeran yang digunakan untuk menyerap dan memindahkan panas pada AC dinamakan apa?",
        correctAnswers: [
          "Freon",
          "Refrigeran",
          "Gas freon",
          "Refrigerant"
        ],
        explanation: "Freon adalah istilah populer untuk fluida pendingin atau refrigeran dalam sistem pendingin termal.",
        hint: "Kata 5 huruf berawalan F."
      },
      {
        id: "q-isian-2-2",
        question: "Perjanjian internasional apa yang melarang penggunaan senyawa perusak ozon seperti CFC secara global?",
        correctAnswers: [
          "Protokol Montreal",
          "Montreal Protocol",
          "Konvensi Montreal"
        ],
        explanation: "Protokol Montreal disepakati pada tahun 1987 untuk menghapus zat-zat yang merusak lapisan ozon stratosfer.",
        hint: "Nama kota di Kanada: Protokol ..."
      },
      {
        id: "q-isian-2-3",
        question: "Bagian AC yang berfungsi melepaskan panas dari refrigeran ke udara luar ruangan dinamakan apa?",
        correctAnswers: [
          "Kondensor",
          "Condenser",
          "Unit kondensor"
        ],
        explanation: "Kondensor mengubah gas bertekanan tinggi menjadi cairan dengan membuang panas ke lingkungan luar.",
        hint: "Komponen luar AC berawalan K."
      },
      {
        id: "q-isian-2-4",
        question: "Sebutkan salah satu jenis freon ramah lapisan ozon yang banyak digunakan pada AC modern!",
        correctAnswers: [
          "R-32",
          "R32",
          "R-410A",
          "R410A"
        ],
        explanation: "R-32 dan R-410A adalah refrigeran HFC modern yang tidak merusak lapisan ozon (ODP nol).",
        hint: "Kombinasi huruf R dan angka 32 atau 410A."
      },
      {
        id: "q-isian-2-5",
        question: "Singkatan dari ukuran potensi suatu gas dalam memicu efek rumah kaca pemanasan global adalah apa?",
        correctAnswers: [
          "GWP",
          "Global Warming Potential"
        ],
        explanation: "GWP (Global Warming Potential) mengukur seberapa besar energi panas yang diperangkap oleh suatu gas di atmosfer dibandingkan CO2.",
        hint: "Singkatan 3 huruf: GWP."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-2-1",
        statement: "Freon di dalam sistem pendingin AC bekerja dalam sirkulasi tertutup tanpa perlu dikonsumsi seperti bahan bakar.",
        isTrue: true,
        explanation: "Benar. Freon hanya bersirkulasi dan berubah fase antara cair dan gas, sehingga tidak habis jika tidak terjadi kebocoran."
      },
      {
        id: "q-tf-2-2",
        statement: "Freon tipe R-22 generasi lama terbukti aman bagi lapisan ozon dan masih diwajibkan di semua negara maju.",
        isTrue: false,
        explanation: "Salah. R-22 termasuk HCFC perusak ozon yang telah dilarang dan digantikan oleh refrigeran modern."
      },
      {
        id: "q-tf-2-3",
        statement: "Evaporator di dalam ruangan berfungsi menyerap energi panas dari udara kamar.",
        isTrue: true,
        explanation: "Benar. Udara kamar ditiupkan melewati evaporator dingin sehingga suhu ruangan menurun."
      },
      {
        id: "q-tf-2-4",
        statement: "Refrigeran modern R-32 memiliki potensi perusakan ozon (ODP) sebesar nol.",
        isTrue: true,
        explanation: "Benar. R-32 tidak mengandung atom klorin sehingga tidak mengikis molekul ozon di stratosfer."
      },
      {
        id: "q-tf-2-5",
        statement: "Kebocoran pipa AC tidak memiliki pengaruh apa pun terhadap efisiensi pendinginan dan tagihan listrik.",
        isTrue: false,
        explanation: "Salah. Kebocoran freon membuat kompresor bekerja lebih berat, ruangan tidak dingin, dan konsumsi listrik melonjak drastis."
      }
    ]
  },
  {
    id: "id-art-3",
    title: "Kenapa Kita Tidak Ingat Waktu Bayi?",
    category: "Psikologi & Neurosains",
    subTopic: "Perkembangan Kognitif & Memori",
    source: "Kompas Sains & Neurosains",
    sourceUrl: "https://www.kompas.com",
    wordCount: 485,
    estimatedMinutes: 2,
    content: [
      "Hampir tidak ada manusia dewasa yang mampu mengingat kenangan nyata dari masa sebelum usia tiga atau empat tahun. Fenomena ketidakmampuan mengingat peristiwa autobiografis pada masa awal kehidupan ini dikenal dalam dunia psikologi kognitif sebagai amnesia infantil (infantile amnesia).",
      "Selama beberapa dekade, hipotesis awal menduga bahwa otak bayi belum mampu merekam informasi sama sekali. Namun, rangkaian eksperimen modern yang memanfaatkan pemindaian otak fMRI membuktikan sebaliknya: bayi sebenarnya mampu belajar, mengenali suara orang tua, dan membentuk ingatan jangka pendek sejak bulan-bulan awal kelahirannya.",
      "Lantas, mengapa kenangan-kenangan masa bayi tersebut lenyap ketika kita dewasa? Salah satu penjelasan biologis terkuat terletak pada laju neurogenesis yang sangat masif di hipokampus—struktur otak berbentuk kuda laut yang bertanggung jawab mengonsolidasikan ingatan baru.",
      "Pada masa bayi, ribuan neuron baru terbentuk setiap hari di hipokampus. Integrasi sel-sel saraf baru yang begitu cepat dan padat ini secara terus-menerus merombak susunan sirkuit sinaptik yang sudah ada, sehingga secara bertahap 'menimpa' dan mengaburkan jejak memori terdahulu yang belum terkristalisasi kuat.",
      "Faktor kedua adalah perkembangan bahasa dan narasi diri. Ingatan jangka panjang orang dewasa tersusun dalam kerangka verbal dan konsep identitas pribadi. Sebelum anak menguasai tata bahasa dan kesadaran diri (biasanya sekitar usia 2 hingga 4 tahun), peristiwa dialami secara sensori murni tanpa label kata, sehingga sulit diakses kembali menggunakan mekanisme pencarian memori verbal saat dewasa.",
      "Dengan demikian, amnesia infantil bukanlah kegagalan fungsi otak, melainkan konsekuensi alami dari otak muda yang sedang tumbuh pesat dan membangun fondasi kognitif yang kokoh."
    ],
    fillInQuestions: [
      {
        id: "q-isian-3-1",
        question: "Istilah ilmiah untuk ketidakmampuan orang dewasa mengingat masa bayi disebut amnesia apa?",
        correctAnswers: [
          "Amnesia infantil",
          "Infantile amnesia",
          "Infantil"
        ],
        explanation: "Amnesia infantil adalah ketidakmampuan mengingat memori autobiografis pada rentang usia 0-3 tahun.",
        hint: "Kata infantil."
      },
      {
        id: "q-isian-3-2",
        question: "Bagian otak berbentuk kuda laut yang memproses pembentukan dan konsolidasi memori bernama apa?",
        correctAnswers: [
          "Hipokampus",
          "Hippocampus"
        ],
        explanation: "Hipokampus terletak di lobus temporal dan bertugas menyimpan serta mentransfer ingatan ke korteks.",
        hint: "Organ otak 10 huruf berawalan H."
      },
      {
        id: "q-isian-3-3",
        question: "Proses pembentukan sel-sel neuron baru yang berlangsung sangat cepat di otak bayi dinamakan apa?",
        correctAnswers: [
          "Neurogenesis",
          "Pembentukan neuron",
          "Neurogenesis cepat"
        ],
        explanation: "Neurogenesis masif pada bayi merombak sirkuit saraf yang sebelumnya telah menyimpan jejak memori awal.",
        hint: "Istilah biologi berawalan Neuro-."
      },
      {
        id: "q-isian-3-4",
        question: "Pada rentang usia berapa tahun anak mulai menguasai bahasa dan struktur narasi memori diri?",
        correctAnswers: [
          "2-4 tahun",
          "2 sampai 4 tahun",
          "2 hingga 4 tahun",
          "3 tahun"
        ],
        explanation: "Penguasaan bahasa pada usia 2-4 tahun memungkinkan anak melabeli peristiwa ke dalam ingatan autobiografis.",
        hint: "Rentang usia balita 2 hingga 4 tahun."
      },
      {
        id: "q-isian-3-5",
        question: "Mengapa memori sensori masa bayi sulit dipanggil kembali oleh otak orang dewasa?",
        correctAnswers: [
          "Tidak memiliki label bahasa",
          "Tanpa bahasa",
          "Belum ada kerangka verbal",
          "Belum ada bahasa"
        ],
        explanation: "Orang dewasa mencari memori melalui asosiasi verbal dan bahasa yang belum dimiliki oleh bayi.",
        hint: "Karena belum ada label kata atau bahasa."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-3-1",
        statement: "Bayi yang baru lahir sama sekali tidak memiliki kemampuan mengenali suara atau wajah orang tuanya.",
        isTrue: false,
        explanation: "Salah. Bayi mampu mengenali suara ibu dan membentuk memori sensori jangka pendek sejak bulan-bulan awal."
      },
      {
        id: "q-tf-3-2",
        statement: "Laju pembentukan neuron baru (neurogenesis) di hipokampus bayi jauh lebih cepat daripada orang dewasa.",
        isTrue: true,
        explanation: "Benar. Pertumbuhan neuron yang sangat masif pada masa balita merombak sirkuit memori lama."
      },
      {
        id: "q-tf-3-3",
        statement: "Amnesia infantil merupakan tanda adanya gangguan kerusakan otak permanen pada masa kanak-kanak.",
        isTrue: false,
        explanation: "Salah. Amnesia infantil adalah proses biologis normal yang dialami oleh seluruh manusia sehat."
      },
      {
        id: "q-tf-3-4",
        statement: "Penguasaan bahasa berperan penting dalam membantu mengorganisasi dan mengunci memori jangka panjang.",
        isTrue: true,
        explanation: "Benar. Bahasa menyediakan struktur naratif untuk mengodekan pengalaman pribadi."
      },
      {
        id: "q-tf-3-5",
        statement: "Teknologi pemindaian otak fMRI menunjukkan hipokampus bayi aktif saat memproses informasi yang dikenali.",
        isTrue: true,
        explanation: "Benar. Penelitian fMRI membuktikan bahwa otak bayi secara aktif mengodekan memori."
      }
    ]
  },
  {
    id: "id-art-4",
    title: "Penurunan Muka Tanah: Ancaman Senyap yang Menggerus Masa Depan Kota Pesisir",
    category: "Kebencanaan & Lingkungan",
    subTopic: "Geologi Pesisir & Tata Ruang Air",
    source: "The Conversation Indonesia & Wetlands International",
    sourceUrl: "https://theconversation.com/id",
    wordCount: 512,
    estimatedMinutes: 3,
    content: [
      "Di balik riuh pembangunan gedung pencakar langit di kawasan pesisir, terdapat ancaman geologis yang bergerak perlahan tanpa suara: penurunan muka tanah atau land subsidence. Fenomena ini telah melanda puluhan kota pesisir di Indonesia, dengan laju paling mengkhawatirkan tercatat di Jakarta Utara, Semarang, dan kawasan Pantai Utara (Pantura) Jawa.",
      "Di beberapa titik kritis di Semarang dan Muara Baru Jakarta, permukaan tanah tercatat amblas hingga 10 hingga 20 sentimeter setiap tahun. Penurunan ini terjadi jauh lebih cepat dibandingkan kenaikan muka air laut global akibat perubahan iklim yang rata-rata hanya berkisar beberapa milimeter per tahun.",
      "Penyebab utama dari akselerasi penurunan tanah ini adalah eksploitasi air tanah dalam secara masif dan tidak terkendali. Kebutuhan air bersih untuk industri, hotel, pusat perbelanjaan, dan permukiman padat yang belum terlayani jaringan pipa air perpipaan (PDAM) memaksa pengeboran akuifer dalam.",
      "Ketika jutaan meter kubik air disedot keluar dari lapisan batuan berpori tanpa pengisian kembali, tekanan hidrolik di dalam rongga tanah lenyap. Akibatnya, lapisan lempung mengalami kompaksi dan pemadatan permanen, menarik seluruh permukaan tanah di atasnya ambles ke bawah.",
      "Dampak subsiden tanah ini sangat destruktif. Permukaan daratan yang kini berada di bawah ketinggian pasang laut memicu banjir rob permanen, meretakkan pondasi gedung, membalikkan kemiringan saluran drainase kota sehingga air hujan terjebak dan tidak bisa mengalir ke laut, serta menimbulkan kerugian ekonomi triliunan rupiah setiap tahun.",
      "Penyelesaian masalah ini tidak bisa hanya mengandalkan pembangunan tanggul laut yang sifatnya sementara. Solusi mutlak terletak pada penegakan moratorium ekstraksi air tanah, percepatan perluasan cakupan air bersih perpipaan 100 persen, serta konservasi ekosistem mangrove pesisir sebagai benteng alami."
    ],
    fillInQuestions: [
      {
        id: "q-isian-4-1",
        question: "Istilah geologis dalam bahasa Inggris untuk fenomena penurunan permukaan tanah adalah apa?",
        correctAnswers: [
          "Land subsidence",
          "Subsidence",
          "Subsiden tanah"
        ],
        explanation: "Land subsidence adalah peristiwa amblasnya permukaan tanah akibat faktor alami maupun antropogenik.",
        hint: "Dua kata bahasa Inggris: Land ..."
      },
      {
        id: "q-isian-4-2",
        question: "Faktor antropogenik utama yang mempercepat laju penurunan tanah di kota-kota besar adalah ekstraksi apa?",
        correctAnswers: [
          "Air tanah",
          "Air tanah dalam",
          "Pengambilan air tanah",
          "Eksploitasi air tanah"
        ],
        explanation: "Penyedotan air tanah secara masif mengosongkan tekanan air pori pada lapisan akuifer.",
        hint: "Dua kata: Air ..."
      },
      {
        id: "q-isian-4-3",
        question: "Banjir genangan air laut pasang yang sering merendam wilayah pesisir yang amblas dinamakan banjir apa?",
        correctAnswers: [
          "Banjir rob",
          "Rob",
          "Pasang rob"
        ],
        explanation: "Banjir rob terjadi ketika pasang laut meluap ke daratan yang elevasi tanahnya telah berada di bawah permukaan laut.",
        hint: "Tiga huruf: Rob."
      },
      {
        id: "q-isian-4-4",
        question: "Kawasan pantai di Pulau Jawa bagian mana yang paling parah mengalami dampak subsiden tanah?",
        correctAnswers: [
          "Pantura",
          "Pantai Utara Jawa",
          "Pantai utara"
        ],
        explanation: "Jalur Pantura Jawa (Jakarta, Karawang, Semarang, Demak, Pekalongan) mengalami laju subsiden tertinggi.",
        hint: "Singkatan dari Pantai Utara Jawa."
      },
      {
        id: "q-isian-4-5",
        question: "Langkah utama yang harus dilakukan pemerintah untuk menghentikan penyedotan air tanah berlebihan adalah menyediakan apa?",
        correctAnswers: [
          "Air bersih perpipaan",
          "Air pipa PDAM",
          "Jaringan air perpipaan",
          "PDAM"
        ],
        explanation: "Cakupan jaringan pipa air bersih 100% menghilangkan ketergantungan industri dan warga pada sumur bor air tanah.",
        hint: "Penyediaan layanan air pipa dari PDAM."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-4-1",
        statement: "Laju penurunan muka tanah di Jakarta dan Semarang dapat mencapai 10 hingga 20 sentimeter per tahun.",
        isTrue: true,
        explanation: "Benar. Di kawasan pesisir tertentu, penurunan tanah tercatat belasan hingga puluhan sentimeter per tahun."
      },
      {
        id: "q-tf-4-2",
        statement: "Kenaikan muka air laut global akibat perubahan iklim terjadi jauh lebih cepat daripada laju amblasnya tanah di Pantura.",
        isTrue: false,
        explanation: "Salah. Kenaikan muka laut global hanya beberapa milimeter per tahun, sedangkan subsiden lokal mencapai puluhan sentimeter per tahun."
      },
      {
        id: "q-tf-4-3",
        statement: "Penyedotan air tanah mengosongkan tekanan air pori sehingga lapisan tanah mengalami kompaksi permanen.",
        isTrue: true,
        explanation: "Benar. Hilangnya air pori menyebabkan butiran lempung merapat padat dan tidak dapat mengembang kembali."
      },
      {
        id: "q-tf-4-4",
        statement: "Membangun tanggul laut raksasa adalah satu-satunya solusi permanen yang dapat menghentikan amblasnya lapisan tanah.",
        isTrue: false,
        explanation: "Salah. Tanggul laut hanya menahan air sementara; tanpa menghentikan ekstraksi air tanah, tanggul itu sendiri akan ikut amblas."
      },
      {
        id: "q-tf-4-5",
        statement: "Penurunan elevasi tanah dapat membalikkan arah kemiringan saluran drainase kota sehingga air hujan sulit mengalir ke laut.",
        isTrue: true,
        explanation: "Benar. Perubahan kemiringan gravitasi membuat genangan air hujan terperangkap di daratan."
      }
    ]
  },
  {
    id: "id-art-5",
    title: "Pernikahan di Indonesia terus menurun",
    category: "Sosial & Demografi",
    subTopic: "Sosiologi Keluarga & Tren Penduduk",
    source: "Badan Pusat Statistik (BPS) & Kompas Analisis",
    sourceUrl: "https://www.bps.go.id",
    wordCount: 495,
    estimatedMinutes: 2,
    content: [
      "Angka pernikahan di Indonesia menunjukkan tren penurunan yang konsisten dan signifikan selama satu dekade terakhir. Berdasarkan data resmi Badan Pusat Statistik (BPS), jumlah pernikahan yang tercatat secara nasional pada tahun 2023 berada di angka 1,58 juta peristiwa. Angka ini mencerminkan penurunan drastis sekitar 28,6 persen dibandingkan sepuluh tahun sebelumnya pada tahun 2013 yang mencapai 2,21 juta pernikahan.",
      "Penurunan ini bukan sekadar fluktuasi jangka pendek, melainkan mencerminkan pergeseran struktural dalam nilai-nilai sosial, orientasi hidup, dan kondisi ekonomi generasi muda Indonesia.",
      "Salah satu faktor pendorong terkuat adalah meningkatnya tingkat pendidikan dan partisipasi angkatan kerja perempuan. Perempuan muda saat ini memiliki kemandirian finansial yang jauh lebih besar, sehingga pernikahan tidak lagi dipandang sebagai satu-satunya instrumen penjamin stabilitas ekonomi.",
      "Selain itu, tekanan ekonomi berupa melambungnya harga hunian tempat tinggal, biaya hidup di kawasan urban, serta ketidakpastian status kerja fleksibel (gig economy) membuat banyak pasangan memilih menunda pernikahan hingga mencapai kemapanan materi.",
      "Perubahan budaya di era media sosial juga turut membentuk persepsi publik. Munculnya diskusi terbuka mengenai kesiapan mental pengasuhan anak, isu kekerasan dalam rumah tangga, serta fenomena ketakutan berkomitmen (dikenal sebagai narasi 'marriage is scary') mendorong pemuda untuk lebih berhati-hati dan matang sebelum memutuskan menikah.",
      "Jika tren penurunan angka pernikahan ini terus berlanjut tanpa diimbangi kebijakan perlindungan keluarga yang ramah ekonomi, Indonesia berpotensi menghadapi penurunan tingkat kesuburan total (Total Fertility Rate) yang dapat mempercepat datangnya era penuaan populasi (ageing population) di masa mendatang."
    ],
    fillInQuestions: [
      {
        id: "q-isian-5-1",
        question: "Lembaga resmi pemerintah yang mencatat data statistik tren penurunan pernikahan di Indonesia bernama apa?",
        correctAnswers: [
          "BPS",
          "Badan Pusat Statistik"
        ],
        explanation: "BPS (Badan Pusat Statistik) secara berkala merilis laporan statistik demografi dan kesejahteraan rakyat.",
        hint: "Singkatan 3 huruf: BPS."
      },
      {
        id: "q-isian-5-2",
        question: "Berapa persen perkiraan penurunan angka pernikahan nasional dalam kurun satu dekade terakhir (2013-2023)?",
        correctAnswers: [
          "28,6%",
          "28.6 persen",
          "Sekitar 28%",
          "28%"
        ],
        explanation: "Angka pernikahan menyusut dari 2,21 juta pada 2013 menjadi 1,58 juta pada 2023 (turun lebih dari 28 persen).",
        hint: "Angka persentase berkepala dua puluh delapan."
      },
      {
        id: "q-isian-5-3",
        question: "Peningkatan pada sektor apa yang memberikan kemandirian ekonomi lebih besar bagi perempuan muda saat ini?",
        correctAnswers: [
          "Pendidikan dan pekerjaan",
          "Pendidikan",
          "Karier",
          "Partisipasi kerja"
        ],
        explanation: "Akses pendidikan tinggi dan karier membuka peluang kemandirian finansial bagi perempuan.",
        hint: "Sektor edukasi dan lapangan kerja."
      },
      {
        id: "q-isian-5-4",
        question: "Istilah demografi untuk kondisi struktur penduduk di mana proporsi lansia semakin mendominasi adalah apa?",
        correctAnswers: [
          "Penuaan populasi",
          "Ageing population",
          "Aging population",
          "Populasi menua"
        ],
        explanation: "Ageing population terjadi saat penurunan angka kelahiran menyebabkan kelompok usia produktif menyusut.",
        hint: "Dua kata: Penuaan ..."
      },
      {
        id: "q-isian-5-5",
        question: "Faktor finansial apa di perkotaan yang sering menjadi kendala utama pemuda untuk melangsungkan pernikahan?",
        correctAnswers: [
          "Harga rumah",
          "Biaya hidup",
          "Biaya hunian",
          "Ketidakstabilan ekonomi",
          "Pekerjaan tidak tetap"
        ],
        explanation: "Tingginya harga properti hunian dan biaya hidup membuat pasangan menunda pembentukan rumah tangga baru.",
        hint: "Biaya hunian rumah atau biaya hidup."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-5-1",
        statement: "Jumlah pernikahan di Indonesia pada tahun 2023 lebih rendah dibandingkan jumlah pada tahun 2013.",
        isTrue: true,
        explanation: "Benar. Data BPS mencatat penurunan dari 2,21 juta (2013) menjadi 1,58 juta (2023)."
      },
      {
        id: "q-tf-5-2",
        statement: "Faktor ekonomi dan tingginya harga hunian tidak berpengaruh sama sekali terhadap keputusan menunda pernikahan.",
        isTrue: false,
        explanation: "Salah. Masalah finansial dan kepemilikan tempat tinggal merupakan salah satu pemicu utama penundaan pernikahan."
      },
      {
        id: "q-tf-5-3",
        statement: "Kemandirian finansial perempuan modern membuat pernikahan bukan lagi satu-satunya pilihan untuk bertahan hidup.",
        isTrue: true,
        explanation: "Benar. Akses terhadap karier dan pendapatan mandiri meningkatkan posisi tawar perempuan."
      },
      {
        id: "q-tf-5-4",
        statement: "Penurunan angka pernikahan jangka panjang dapat berdampak pada penyusutan populasi usia produktif di masa depan.",
        isTrue: true,
        explanation: "Benar. Tren ini berkolerasi dengan penurunan angka kelahiran nasional."
      },
      {
        id: "q-tf-5-5",
        statement: "BPS mencatat bahwa tren penurunan pernikahan hanya terjadi selama satu tahun saja pada 2020 akibat pandemi.",
        isTrue: false,
        explanation: "Salah. Penurunan berlangsung konsisten sepanjang sepuluh tahun terakhir."
      }
    ]
  },
  {
    id: "id-art-6",
    title: "Tren Celana Jeans: Evolusi Ikon Mode yang Tak Pernah Mati",
    category: "Gaya Hidup & Budaya",
    subTopic: "Sejarah Mode & Budaya Populer",
    source: "Historia & Sastra Mode",
    sourceUrl: "https://historia.id",
    wordCount: 480,
    estimatedMinutes: 2,
    content: [
      "Dari tambang emas berdebu di California pada abad ke-19 hingga panggung peragaan busana mewah di Paris dan Milan, celana jeans telah membuktikan diri sebagai pakaian paling abadi dalam sejarah peradaban modern.",
      "Kisah denim bermula pada tahun 1873 ketika imigran Jerman Levi Strauss dan penjahit Jacob Davis mematenkan inovasi penambahan paku keling tembaga (copper rivets) pada titik-titik tekanan saku celana kerja. Bahan katun kepar kokoh berwarna nila (indigo) ini awalnya diciptakan murni sebagai pakaian kerja berkekuatan tinggi bagi para penambang, penebang pohon, dan koboi Amerika.",
      "Transformasi jeans dari pakaian buruh kasar menjadi simbol budaya pop global terjadi pada era 1950-an. Bintang film legendaris seperti James Dean dalam 'Rebel Without a Cause' dan Marlon Brando mengenakan jeans sebagai simbol perlawanan generasi muda terhadap kemapanan norma sosial tradisional.",
      "Pada dekade 1970-an dan 1980-an, rumah mode dunia seperti Calvin Klein dan Armani mulai memperkenalkan konsep designer jeans, mengubah denim menjadi busana kasual berkelas tinggi yang dikenakan oleh semua strata sosial.",
      "Kini di abad ke-21, tantangan terbesar industri jeans bergeser ke ranah keberlanjutan lingkungan. Pembuatan sepasang celana jeans konvensional membutuhkan ribuan liter air dan pewarna kimia sintetis. Inovasi teknologi pencucian ozon dan laser finishing kini dikembangkan untuk memproduksi denim berkualitas tinggi tanpa merusak ekosistem sungai dan perairan."
    ],
    fillInQuestions: [
      {
        id: "q-isian-6-1",
        question: "Siapa nama imigran yang bersama Jacob Davis mematenkan celana kerja berkancing tembaga pada tahun 1873?",
        correctAnswers: [
          "Levi Strauss",
          "Strauss",
          "Levi"
        ],
        explanation: "Levi Strauss dan Jacob Davis memperoleh paten inovasi paku keling celana denim pada tahun 1873.",
        hint: "Nama pendiri merek Levi's."
      },
      {
        id: "q-isian-6-2",
        question: "Zat pewarna biru alami khas yang digunakan untuk mewarnai kain denim sejak awal penciptaannya bernama apa?",
        correctAnswers: [
          "Indigo",
          "Pewarna indigo",
          "Nila",
          "Warna nila"
        ],
        explanation: "Pewarna biru nila atau indigo memberikan rona warna biru klasik pada serat benang denim.",
        hint: "Warna nila atau indigo."
      },
      {
        id: "q-isian-6-3",
        question: "Aktor film legendaris era 1950-an yang mempopulerkan jeans sebagai simbol pemberontakan pemuda adalah siapa?",
        correctAnswers: [
          "James Dean",
          "Marlon Brando",
          "Dean"
        ],
        explanation: "James Dean dan Marlon Brando memicu fenomena jeans di kalangan remaja pascaperang.",
        hint: "Aktor utama film Rebel Without a Cause."
      },
      {
        id: "q-isian-6-4",
        question: "Inovasi paku logam kecil pada sudut saku celana jeans yang dipatenkan disebut apa?",
        correctAnswers: [
          "Paku keling",
          "Copper rivets",
          "Rivet",
          "Keling tembaga"
        ],
        explanation: "Rivet tembaga mencegah saku celana robek saat penambang menyimpan bongkahan batu atau peralatan berat.",
        hint: "Paku keling dari tembaga."
      },
      {
        id: "q-isian-6-5",
        question: "Teknologi modern ramah lingkungan apa yang digunakan untuk memberi efek pudar pada jeans tanpa boros air?",
        correctAnswers: [
          "Laser",
          "Laser finishing",
          "Ozon",
          "Pencucian ozon"
        ],
        explanation: "Teknologi laser dan ozon mengikis serat kain secara presisi tanpa memerlukan ribuan liter air cuci kimia.",
        hint: "Teknologi sinar laser atau gas ozon."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-6-1",
        statement: "Celana jeans pada awalnya dirancang khusus untuk busana pesta kalangan bangsawan Eropa.",
        isTrue: false,
        explanation: "Salah. Jeans awalnya dibuat murni sebagai pakaian kerja berat untuk para penambang dan buruh kasar."
      },
      {
        id: "q-tf-6-2",
        statement: "Paten paku keling tembaga pada saku celana jeans resmi diterbitkan pada tahun 1873.",
        isTrue: true,
        explanation: "Benar. Paten nomor 139.121 diberikan kepada Levi Strauss dan Jacob Davis pada 20 Mei 1873."
      },
      {
        id: "q-tf-6-3",
        statement: "Pada era 1950-an, celana jeans sempat dilarang di beberapa sekolah karena dianggap lambang kenakalan remaja.",
        isTrue: true,
        explanation: "Benar. Citra pemberontak James Dean membuat beberapa institusi melarang muridnya memakai jeans."
      },
      {
        id: "q-tf-6-4",
        statement: "Produksi jeans konvensional sama sekali tidak membutuhkan konsumsi air dan aman bagi sungai.",
        isTrue: false,
        explanation: "Salah. Proses pencucian dan pewarnaan jeans tradisional terkenal sangat boros air dan menghasilkan limbah kimia."
      },
      {
        id: "q-tf-6-5",
        statement: "Inovasi teknologi modern seperti pemrosesan laser membantu mengurangi limbah air industri denim.",
        isTrue: true,
        explanation: "Benar. Teknologi modern meningkatkan efisiensi dan kelestarian ekologis rantai pasok pakaian."
      }
    ]
  },
  {
    id: "id-art-7",
    title: "Perjalanan Panjang Nico Hulkenberg: Setelah Penantian 239 Balapan, Podium Akhirnya Tiba",
    category: "Olahraga & Otomotif",
    subTopic: "Formula Satu & Kisah Keteguhan Karier",
    source: "Formula 1 & Motorsport Analisis",
    sourceUrl: "https://www.formula1.com",
    wordCount: 520,
    estimatedMinutes: 3,
    content: [
      "Dalam sejarah balap Formula Satu (F1), jarang ada kisah ketabahan mental dan determinasi tanpa henti yang sekuat perjalanan pembalap profesional asal Jerman, Nicolas 'Nico' Hülkenberg.",
      "Sejak melakoni debut gemilangnya bersama tim Williams pada tahun 2010—bahkan berhasil meraih pole position bersejarah di Grand Prix Brasil pada musim perdananya—Hülkenberg selalu diakui oleh para pengamat dan sesama pembalap sebagai salah satu talenta tercepat dan paling konsisten di grid balap.",
      "Namun, takdir balapan kerap bersikap kejam. Sepanjang kariernya memperkuat tim Force India, Sauber, Renault, hingga Haas, Hülkenberg berulang kali finis di posisi keempat atau mengalami insiden mekanis tepat saat peluang podium sudah di depan mata. Ia pun menyandang rekor yang tidak diinginkan oleh pembalap mana pun: start balapan terbanyak dalam sejarah F1 tanpa sekalipun mencicipi podium (mencapai 239 start balapan).",
      "Karier Nico sempat terputus ketika ia kehilangan kursi reguler, namun reputasinya sebagai 'super-sub'—pembalap pengganti andal yang mampu masuk ke kokpit dalam hitungan jam dan langsung mencetak poin—membuat tim Sauber merekrutnya kembali untuk proyek transisi menuju era Audi.",
      "Momen magis yang dinantikan selama lebih dari satu dekade akhirnya terwujud pada balapan dramatis di Sirkuit Silverstone. Memulai balapan dari posisi ke-19 di tengah lintasan basah yang berubah-ubah akibat hujan deras, Hülkenberg menunjukkan kemahiran luar biasa dalam manajemen ban dan eksekusi strategi pit stop. Ia menyalip para pesaing papan atas satu per satu dan melewati garis finis di posisi ketiga.",
      "Ketika ia menaiki podium podium pertamanya di hadapan ribuan penonton, tangis haru Nico membuktikan satu pesan abadi: bahwa kerja keras, profesionalisme tanpa mengeluh, dan keyakinan diri pada akhirnya akan membuahkan hasil, betapapun panjang jalan yang harus dilalui."
    ],
    fillInQuestions: [
      {
        id: "q-isian-7-1",
        question: "Nama pembalap Formula 1 asal Jerman yang memegang rekor penantian podium terpanjang adalah siapa?",
        correctAnswers: [
          "Nico Hulkenberg",
          "Nico Hülkenberg",
          "Hulkenberg",
          "Hülkenberg"
        ],
        explanation: "Nico Hülkenberg adalah pembalap profesional F1 yang menanti hingga 239 start sebelum meraih podium perdananya.",
        hint: "Pembalap bernama depan Nico."
      },
      {
        id: "q-isian-7-2",
        question: "Di Grand Prix negara manakah Nico meraih pole position sensasional pada musim debutnya tahun 2010?",
        correctAnswers: [
          "Brasil",
          "GP Brasil",
          "Brazil",
          "Interlagos"
        ],
        explanation: "Nico meraih pole position pertamanya di GP Brasil 2010 bersama tim Williams.",
        hint: "Negara di Amerika Selatan dengan sirkuit Interlagos."
      },
      {
        id: "q-isian-7-3",
        question: "Berapa jumlah start balapan F1 yang dijalani Nico sebelum akhirnya berhasil menaiki podium?",
        correctAnswers: [
          "239",
          "239 balapan",
          "239 start"
        ],
        explanation: "Nico mencatatkan 239 start balapan tanpa podium sebelum akhirnya memecahkan rekor tersebut.",
        hint: "Angka ratusan di bawah 240."
      },
      {
        id: "q-isian-7-4",
        question: "Di sirkuit legendaris manakah Nico akhirnya berhasil meraih podium posisi ketiga dalam kondisi hujan?",
        correctAnswers: [
          "Silverstone",
          "Sirkuit Silverstone",
          "GP Inggris"
        ],
        explanation: "Podium bersejarah diraih di Sirkuit Silverstone dalam kondisi cuaca basah yang menantang.",
        hint: "Sirkuit balap legendaris di Inggris."
      },
      {
        id: "q-isian-7-5",
        question: "Pabrikan mobil Jerman apa yang telah mengontrak Nico untuk memimpin tim balap F1 mereka di masa depan?",
        correctAnswers: [
          "Audi",
          "Tim Audi"
        ],
        explanation: "Audi mengontrak Nico Hülkenberg sebagai pembalap utama untuk proyek resmi F1 mereka.",
        hint: "Merek mobil 4 cincin."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-7-1",
        statement: "Nico Hülkenberg langsung memenangkan gelar juara dunia Formula 1 pada tahun pertamanya di 2010.",
        isTrue: false,
        explanation: "Salah. Nico meraih pole position di Brasil 2010, namun membutuhkan ratusan balapan untuk meraih podium perdananya."
      },
      {
        id: "q-tf-7-2",
        statement: "Nico pernah mencatatkan rekor start terbanyak di Formula 1 tanpa pernah naik ke atas podium.",
        isTrue: true,
        explanation: "Benar. Ia melewati 239 start balapan sebelum akhirnya berhasil finis tiga besar."
      },
      {
        id: "q-tf-7-3",
        statement: "Pada balapan di Silverstone, Nico memulai perlombaan dari posisi terdepan (pole position).",
        isTrue: false,
        explanation: "Salah. Nico melakukan aksi 'comeback' hebat dengan mengawali balapan dari posisi ke-19 di barisan belakang."
      },
      {
        id: "q-tf-7-4",
        statement: "Di luar F1, Nico Hülkenberg pernah memenangkan ajang balap ketahanan legendaris Le Mans 24 Jam bersama Porsche.",
        isTrue: true,
        explanation: "Benar. Ia menjuarai Le Mans 24 Jam 2015 pada percobaan pertamanya."
      },
      {
        id: "q-tf-7-5",
        statement: "Kemampuan Nico sebagai pembalap pengganti dadakan (super-sub) membuatnya sangat dihormati di paddock F1.",
        isTrue: true,
        explanation: "Benar. Ia berulang kali tampil impresif mencetak poin meski dipanggil mendadak tanpa uji coba."
      }
    ]
  },
  {
    id: "id-art-8",
    title: "Harapan Baru dari Dunia Mikro: Mikroba Pemakan Plastik",
    category: "Sains & Bioteknologi",
    subTopic: "Mikrobiologi Lingkungan & Daur Ulang Enzimatik",
    source: "The Conversation Indonesia & Nature Biotechnology",
    sourceUrl: "https://theconversation.com/id",
    wordCount: 490,
    estimatedMinutes: 2,
    content: [
      "Polusi sampah plastik merupakan salah satu krisis lingkungan paling pelik di bumi. Setiap tahun, ratusan juta ton polimer plastik seperti polietilena tereftalat (PET)—yang digunakan untuk botol air mineral dan kemasan makanan—menumpuk di tempat pembuangan sampah dan samudra, membutuhkan waktu ratusan tahun untuk terurai secara alami.",
      "Namun titik terang datang dari laboratorium mikrobiologi di Jepang pada tahun 2016. Sekelompok ilmuwan menemukan spesies bakteri luar biasa di luar fasilitas daur ulang botol plastik di Sakai, yang kemudian dinamai Ideonella sakaiensis 201-F6.",
      "Bakteri ini berevolusi secara mengejutkan dalam kurun waktu singkat untuk mampu memakan plastik PET sebagai sumber karbon dan energi utamanya. Bakteri ini menghasilkan dua enzim kunci: PETase yang memecah rantai panjang plastik menjadi molekul intermediat (MHET), dan MHETase yang mengubahnya menjadi asam tereftalat murni serta etilena glikol.",
      "Keunggulan luar biasa dari daur ulang biologis ini adalah kemampuannya mendepolimerisasi plastik kembali ke bentuk monomer aslinya tanpa menurunkan kualitas material (downcycling). Monomer hasil pecahan enzim ini dapat disintesis ulang menjadi botol plastik baru berkualitas setara virgin plastic tanpa membutuhkan minyak bumi baru.",
      "Para ahli bioteknologi di seluruh dunia kini menggunakan kecerdasan buatan dan rekayasa protein untuk merancang 'super-enzim' yang bekerja puluhan kali lebih cepat pada suhu tinggi, membuka jalan menuju bioreaktor industri pengolah limbah plastik berskala raksasa di masa depan."
    ],
    fillInQuestions: [
      {
        id: "q-isian-8-1",
        question: "Nama spesies bakteri pemakan plastik PET yang ditemukan oleh ilmuwan di Jepang adalah Ideonella apa?",
        correctAnswers: [
          "Ideonella sakaiensis",
          "Sakaiensis",
          "Ideonella sakaiensis 201-F6"
        ],
        explanation: "Ideonella sakaiensis adalah bakteri pertama yang diketahui mampu mendegradasi plastik PET secara alami.",
        hint: "Nama spesies berawalan Sakai-."
      },
      {
        id: "q-isian-8-2",
        question: "Nama enzim utama yang dihasilkan bakteri tersebut untuk memecah rantai ikatan polimer PET adalah apa?",
        correctAnswers: [
          "PETase",
          "Enzim PETase"
        ],
        explanation: "Enzim PETase menghidrolisis ikatan ester pada rantai polimer plastik PET.",
        hint: "Kombinasi kata PET dan akhiran -ase."
      },
      {
        id: "q-isian-8-3",
        question: "Tipe plastik yang umum digunakan untuk botol air minum kemasan sekali pakai dan diurai oleh bakteri adalah apa?",
        correctAnswers: [
          "PET",
          "Polietilena tereftalat",
          "Polyethylene terephthalate",
          "PETE"
        ],
        explanation: "PET (Polyethylene terephthalate) adalah termoplastik yang paling banyak diproduksi di dunia.",
        hint: "Tiga huruf singkatan: PET."
      },
      {
        id: "q-isian-8-4",
        question: "Kelebihan daur ulang enzimatik adalah menghasilkan monomer berkualitas setara dengan plastik apa?",
        correctAnswers: [
          "Virgin plastic",
          "Plastik murni",
          "Plastik virgin",
          "Bahan baru"
        ],
        explanation: "Daur ulang enzimatik mengembalikan monomer murni sehingga terhindar dari penurunan mutu (downcycling).",
        hint: "Istilah virgin plastic atau plastik murni."
      },
      {
        id: "q-isian-8-5",
        question: "Dua senyawa dasar hasil pemecahan akhir plastik PET oleh enzim adalah asam tereftalat dan apa?",
        correctAnswers: [
          "Etilena glikol",
          "Ethylene glycol",
          "Glikol"
        ],
        explanation: "Asam tereftalat dan etilena glikol adalah dua blok pembangun dasar polimer PET.",
        hint: "Zat kimia berawalan Etilena ..."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-8-1",
        statement: "Bakteri Ideonella sakaiensis memanfaatkan plastik PET sebagai sumber makanan dan energi metaboliknya.",
        isTrue: true,
        explanation: "Benar. Bakteri ini menguraikan ikatan kimia karbon pada plastik untuk bertumbuh."
      },
      {
        id: "q-tf-8-2",
        statement: "Plastik PET di alam bebas dapat terurai sepenuhnya hanya dalam waktu dua minggu tanpa bantuan mikroba.",
        isTrue: false,
        explanation: "Salah. Plastik PET membutuhkan waktu ratusan tahun untuk terdegradasi secara alami di tanah atau laut."
      },
      {
        id: "q-tf-8-3",
        statement: "Daur ulang enzimatik memungkinkan pembuatan plastik baru tanpa perlu mengekstraksi minyak bumi baru.",
        isTrue: true,
        explanation: "Benar. Monomer hasil depolimerisasi dapat digunakan kembali dalam siklus ekonomi sirkular tertutup."
      },
      {
        id: "q-tf-8-4",
        statement: "Rekayasa protein berbasis komputasi dan AI berhasil meningkatkan kecepatan kerja enzim PETase.",
        isTrue: true,
        explanation: "Benar. Para peneliti berhasil memodifikasi struktur enzim sehingga mampu mendegradasi plastik dalam hitungan jam."
      },
      {
        id: "q-tf-8-5",
        statement: "Enzim pemakan plastik hanya dapat bekerja pada limbah logam berat dan kaca.",
        isTrue: false,
        explanation: "Salah. Enzim PETase dan MHETase secara spesifik menargetkan ikatan kimia polimer plastik PET."
      }
    ]
  },
  {
    id: "id-art-9",
    title: "Sejarah Panjang Gorden",
    category: "Sejarah & Desain",
    subTopic: "Arsitektur Rumah & Evolusi Tekstil",
    source: "Historia & Ensiklopedia Desain",
    sourceUrl: "https://historia.id",
    wordCount: 475,
    estimatedMinutes: 2,
    content: [
      "Benda penutup jendela yang kita kenal hari ini sebagai gorden memiliki riwayat evolusi panjang yang berkelindan dengan sejarah peradaban, arsitektur hunian, dan penemuan teknik penenunan kain dunia.",
      "Pada zaman peradaban kuno seperti Mesir Kuno, Yunani, dan Persia, gorden generasi awal tidak terbuat dari kain tenun lembut, melainkan dari kulit binatang yang disamak tebal atau anyaman alang-alang jerami. Fungsi utamanya bukanlah nilai estetika dekorasi, melainkan murni fungsional: menghalau hembusan angin malam yang dingin, debu gurun, serangga, serta menjaga privasi ruang istirahat di dalam gua atau tenda batu.",
      "Seiring ditemukannya teknik menenun rami, katun, dan sutra, gorden mulai berevolusi menjadi simbol kemewahan dan status sosial. Pada masa Renaisans di Eropa, tirai kain beledu (velvet) dan damask bermotif rumit dipasang megah di istana raja dan katedral megah untuk menahan hawa dingin musim salju yang menembus jendela kaca tanpa peredam.",
      "Revolusi Industri pada abad ke-19 membawa perubahan radikal. Penemuan mesin tenun mekanis bertenaga uap memungkinkan produksi gorden massal dengan harga terjangkau bagi masyarakat kelas pekerja perkotaan.",
      "Di era arsitektur modern saat ini, gorden telah bertransformasi menjadi elemen desain interior multifungsi yang berteknologi tinggi. Mulai dari kain blackout berlapis termal penahan radiasi panas matahari, tirai akustik peredam kebisingan kota, hingga gorden pintar bermotor yang terintegrasi dengan sensor cahaya otomatis."
    ],
    fillInQuestions: [
      {
        id: "q-isian-9-1",
        question: "Bahan apa yang digunakan untuk membuat penutup gorden pada masa peradaban kuno sebelum kain ditemukan?",
        correctAnswers: [
          "Kulit binatang",
          "Kulit hewan",
          "Anyaman jerami",
          "Kulit binatang yang disamak"
        ],
        explanation: "Kulit binatang dan anyaman tanaman digunakan untuk menghalau dingin dan debu pada masa purba.",
        hint: "Bahan dari kulit binatang atau jerami."
      },
      {
        id: "q-isian-9-2",
        question: "Peristiwa sejarah abad ke-19 apa yang membuat produksi gorden menjadi massal dan terjangkau?",
        correctAnswers: [
          "Revolusi Industri",
          "Industrial Revolution",
          "Penemuan mesin tenun"
        ],
        explanation: "Revolusi Industri memungkinkan pabrik tekstil memproduksi kain gorden secara masal dengan biaya rendah.",
        hint: "Dua kata: Revolusi ..."
      },
      {
        id: "q-isian-9-3",
        question: "Jenis kain gorden modern yang mampu memblokir 100 persen cahaya matahari dari luar kamar dinamakan kain apa?",
        correctAnswers: [
          "Blackout",
          "Kain blackout",
          "Tirai blackout"
        ],
        explanation: "Kain blackout memiliki lapisan penghalang cahaya pekat yang menjaga ruangan tetap gelap dan sejuk.",
        hint: "Kata bahasa Inggris: Blackout."
      },
      {
        id: "q-isian-9-4",
        question: "Pada masa Renaisans di Eropa, kain mewah apa yang sering dipasang di kastil untuk menahan hawa dingin?",
        correctAnswers: [
          "Beledu",
          "Velvet",
          "Damask",
          "Sutra"
        ],
        explanation: "Kain velvet tebal dan damask dipasang sebagai insulasi termal di ruangan berlantai batu kastil Eropa.",
        hint: "Kain beledu atau velvet."
      },
      {
        id: "q-isian-9-5",
        question: "Fungsi utama gorden pada bangunan kuno sebelum aspek estetika berkembang adalah menjaga apa?",
        correctAnswers: [
          "Privasi dan kehangatan",
          "Privasi",
          "Menahan dingin",
          "Insulasi termal"
        ],
        explanation: "Gorden kuno berfungsi menahan angin dingin, debu, dan melindungi privasi penghuni.",
        hint: "Privasi dan perlindungan dari suhu dingin."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-9-1",
        statement: "Gorden pada masa peradaban Mesir Kuno sudah dibuat menggunakan mesin tenun poliester sintetis.",
        isTrue: false,
        explanation: "Salah. Pada masa Mesir Kuno, gorden dibuat manual dari kulit hewan, rami, atau anyaman jerami."
      },
      {
        id: "q-tf-9-2",
        statement: "Pada masa Renaisans, tirai kain berat berfungsi praktis sebagai penahan hawa dingin di dalam istana batu.",
        isTrue: true,
        explanation: "Benar. Bahan beledu tebal membantu menjaga suhu hangat di kamar istana sebelum adanya pemanas modern."
      },
      {
        id: "q-tf-9-3",
        statement: "Revolusi Industri membuat gorden kain menjadi barang langka yang hanya boleh dimiliki oleh keluarga kerajaan.",
        isTrue: false,
        explanation: "Salah. Mesin tenun industri justru membuat kain gorden melimpah dan terjangkau bagi masyarakat umum."
      },
      {
        id: "q-tf-9-4",
        statement: "Gorden modern berteknologi tinggi dapat berfungsi sebagai peredam kebisingan suara kota (akustik).",
        isTrue: true,
        explanation: "Benar. Kain berpori mikro khusus dirancang untuk menyerap gelombang suara dan getaran."
      },
      {
        id: "q-tf-9-5",
        statement: "Gorden pintar modern dapat diintegrasikan dengan sensor cahaya dan motor otomatis untuk membuka sendiri.",
        isTrue: true,
        explanation: "Benar. Integrasi smart home memungkinkan otomasi pengaturan tirai jendela."
      }
    ]
  },
  {
    id: "id-art-10",
    title: "Uang yang Turun ke Desa dan Transformasi Ekonomi Kerakyatan",
    category: "Sosial & Kebijakan Publik",
    subTopic: "Tata Kelola Dana Desa & Kemandirian Lokal",
    source: "The Conversation Indonesia",
    sourceUrl: "https://theconversation.com/id",
    wordCount: 480,
    estimatedMinutes: 2,
    content: [
      "Undang-Undang Nomor 6 Tahun 2014 tentang Desa merevolusi kedudukan desa dalam tata kelola pemerintahan Negara Kesatuan Republik Indonesia. Desa tidak lagi diposisikan sebagai objek administratif di ujung rantai birokrasi, melainkan diakui sebagai kesatuan masyarakat hukum yang berwenang mengatur dan mengurus urusan pemerintahannya sendiri.",
      "Pengejawantahan paling nyata dari otonomi ini adalah penyaluran transfer Dana Desa dari Anggaran Pendapatan dan Belanja Negara (APBN) yang dimulai pada tahun 2015. Alokasi awal yang bermula di kisaran Rp20,77 triliun terus ditingkatkan secara berkelanjutan hingga menembus angka Rp71 triliun pada tahun 2024.",
      "Sepanjang periode satu dekade (2015–2024), total akumulasi Dana Desa yang disalurkan pemerintah pusat mencapai lebih dari Rp609,9 triliun, menjangkau 75.259 desa dari Sabang sampai Merauke.",
      "Perubahan struktural ini menggeser paradigma pembangunan dari yang semula instruksi sentralistik 'top-down' kabupaten menjadi musyawarah perencanaan partisipatif 'bottom-up'. Warga desa berembuk menentukan prioritas pembangunan lokal: membuka akses jalan usaha tani, membangun sarana air bersih, mendanai posyandu untuk pencegahan stunting, hingga mendirikan Badan Usaha Milik Desa (BUMDes).",
      "Meski demikian, tantangan akuntabilitas dan kapasitas tata kelola keuangan tetap menjadi fokus evaluasi utama. Penerapan Sistem Keuangan Desa (Siskeudes) berbasis digital dan transparansi papan baliho anggaran di balai desa terbukti menjadi benteng pencegah korupsi yang efektif, memastikan setiap rupiah uang rakyat benar-benar menjadi pengungkit kemakmuran masyarakat pedesaan."
    ],
    fillInQuestions: [
      {
        id: "q-isian-10-1",
        question: "Undang-Undang nomor berapakah yang mengatur tentang otonomi dan tata kelola Desa di Indonesia?",
        correctAnswers: [
          "UU No. 6 Tahun 2014",
          "Undang-Undang Nomor 6 Tahun 2014",
          "UU No 6 Tahun 2014",
          "Nomor 6 Tahun 2014"
        ],
        explanation: "UU No. 6 Tahun 2014 menjadi tonggak sejarah kemandirian dan penyaluran Dana Desa.",
        hint: "UU Nomor 6 Tahun 2014."
      },
      {
        id: "q-isian-10-2",
        question: "Pada tahun berapa Dana Desa pertama kali resmi mulai disalurkan dari APBN ke seluruh desa?",
        correctAnswers: [
          "2015",
          "Tahun 2015"
        ],
        explanation: "Penyaluran perdana Dana Desa dimulai pada tahun anggaran 2015.",
        hint: "Tahun 2015."
      },
      {
        id: "q-isian-10-3",
        question: "Berapa triliun rupiah total akumulasi Dana Desa yang telah disalurkan sepanjang kurun 2015-2024?",
        correctAnswers: [
          "Rp609,9 triliun",
          "609,9 triliun",
          "Lebih dari 600 triliun",
          "609 triliun"
        ],
        explanation: "Total akumulasi anggaran transfer mencapai sekitar Rp609,9 triliun untuk 75.259 desa.",
        hint: "Angka lebih dari Rp600 triliun."
      },
      {
        id: "q-isian-10-4",
        question: "Nama badan usaha tingkat desa yang didirikan untuk menggerakkan perekonomian warga pedesaan adalah apa?",
        correctAnswers: [
          "BUMDes",
          "Badan Usaha Milik Desa",
          "BUM Desa"
        ],
        explanation: "BUMDes mengelola potensi ekonomi lokal seperti pariwisata desa, pasar, dan simpan pinjam.",
        hint: "Singkatan BUMDes."
      },
      {
        id: "q-isian-10-5",
        question: "Aplikasi digital resmi yang digunakan pemerintah desa untuk mengelola dan mencatat laporan anggaran adalah apa?",
        correctAnswers: [
          "Siskeudes",
          "Sistem Keuangan Desa"
        ],
        explanation: "Siskeudes (Sistem Keuangan Desa) memastikan pencatatan transaksi anggaran desa transparan dan akuntabel.",
        hint: "Singkatan dari Sistem Keuangan Desa."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-10-1",
        statement: "Sebelum berlakunya UU Desa 2014, desa memiliki anggaran mandiri yang ditransfer langsung dari APBN.",
        isTrue: false,
        explanation: "Salah. Sebelum 2014, pembangunan desa bergantung penuh pada proyek berjenjang kabupaten."
      },
      {
        id: "q-tf-10-2",
        statement: "Musyawarah desa merupakan forum tertinggi warga untuk menentukan prioritas penggunaan Dana Desa.",
        isTrue: true,
        explanation: "Benar. Musyawarah desa menerapkan asas demokrasi partisipatif dari bawah ke atas (bottom-up)."
      },
      {
        id: "q-tf-10-3",
        statement: "Dana Desa pada praktiknya dilarang digunakan untuk kegiatan pemberdayaan kesehatan masyarakat dan stunting.",
        isTrue: false,
        explanation: "Salah. Penanganan stunting dan posyandu merupakan salah satu prioritas nasional pemanfaatan Dana Desa."
      },
      {
        id: "q-tf-10-4",
        statement: "Pemasangan papan informasi anggaran di balai desa membantu meningkatkan pengawasan partisipatif warga.",
        isTrue: true,
        explanation: "Benar. Transparansi publik menutup celah manipulasi laporan pertanggungjawaban anggaran."
      },
      {
        id: "q-tf-10-5",
        statement: "Penyaluran Dana Desa menjangkau lebih dari 75.000 desa di seluruh kepulauan Indonesia.",
        isTrue: true,
        explanation: "Benar. Tepatnya mencakup 75.259 desa di berbagai pelosok nusantara."
      }
    ]
  },
  {
    id: "id-art-11",
    title: "Mengapa Otak Kita Mengalami Burnout dan Cara Memulihkannya",
    category: "Kesehatan Mental",
    subTopic: "Neurosains & Manajemen Stres",
    source: "Kompas Kesehatan & Harvard Health",
    sourceUrl: "https://health.kompas.com",
    wordCount: 485,
    estimatedMinutes: 3,
    content: [
      "Kelelahan fisik akibat bekerja seharian sering kali dapat dipulihkan hanya dengan tidur malam yang cukup. Namun ketika rasa lelah itu menjelma menjadi kejenuhan kronis, sinisme terhadap pekerjaan, dan ketidakmampuan untuk berkonsentrasi, Anda kemungkinan sedang mengalami sindrom kelelahan mental atau 'burnout'.",
      "Secara neurobiologis, burnout bukanlah tanda kelemahan karakter, melainkan respons pertahanan otak terhadap paparan stres berkepanjangan tanpa periode pemulihan yang memadai. Ketika seseorang terus-menerus dibombardir oleh tenggat waktu ketat dan ekspektasi tanpa henti, amigdala—pusat alarm emosi di otak—berada dalam status siaga aktif terus-menerus.",
      "Aktivitas amigdala yang berlebihan ini memicu kelenjar adrenal memproduksi hormon kortisol secara berkesinambungan. Dalam jangka panjang, kadar kortisol yang tinggi dapat mengikis koneksi sinaptik di korteks prefrontal, yakni bagian otak yang bertanggung jawab atas perencanaan strategis, pengambilan keputusan, dan regulasi emosi.",
      "Akibatnya, penderita burnout sering merasa kehilangan kendali diri, mudah tersulut emosi oleh hal-hal sepele, dan merasa terasing dari lingkungan profesionalnya. Organisasi Kesehatan Dunia (WHO) bahkan telah resmi mengklasifikasikan burnout sebagai fenomena okupasional dalam panduan diagnostik internasional.",
      "Memulihkan otak dari jeratan burnout menuntut perubahan struktural pada pola hidup harian. Langkah awal yang paling krusial adalah menetapkan batasan digital yang tegas, seperti mematikan notifikasi percakapan kerja selepas jam kantor dan menjadwalkan jeda istirahat tanpa layar gawai.",
      "Aktivitas restoratif sederhana seperti berjalan kaki di ruang terbuka hijau dan latihan pernapasan ritmis terbukti dapat menenangkan amigdala serta mengembalikan elastisitas fungsi kognitif otak secara bertahap."
    ],
    fillInQuestions: [
      {
        id: "q-isian-11-1",
        question: "Pusat alarm emosi di otak yang aktif berlebihan saat mengalami stres berkepanjangan adalah apa?",
        correctAnswers: ["Amigdala", "Amygdala"],
        explanation: "Amigdala merupakan bagian otak berbentuk kacang almon yang memproses rasa takut dan alarm stres emosional.",
        hint: "Struktur otak berawalan huruf A."
      },
      {
        id: "q-isian-11-2",
        question: "Hormon stres utama yang diproduksi oleh kelenjar adrenal secara berkesinambungan adalah apa?",
        correctAnswers: ["Kortisol", "Cortisol"],
        explanation: "Kortisol adalah hormon glukokortikoid yang dilepaskan saat tubuh menghadapi stresor fisik maupun psikologis.",
        hint: "Hormon berawalan huruf K."
      },
      {
        id: "q-isian-11-3",
        question: "Bagian otak depan yang mengatur perencanaan strategis dan regulasi emosi dinamakan apa?",
        correctAnswers: ["Korteks prefrontal", "Prefrontal cortex", "PFC"],
        explanation: "Korteks prefrontal adalah pusat kendali eksekutif otak untuk berpikir logis dan mengendalikan impuls.",
        hint: "Korteks bagian depan."
      },
      {
        id: "q-isian-11-4",
        question: "Lembaga kesehatan internasional yang mengklasifikasikan burnout sebagai fenomena okupasional adalah apa?",
        correctAnswers: ["WHO", "Organisasi Kesehatan Dunia", "World Health Organization"],
        explanation: "WHO memasukkan burnout ke dalam International Classification of Diseases (ICD-11) sebagai masalah terkait pekerjaan.",
        hint: "Singkatan tiga huruf badan kesehatan PBB."
      },
      {
        id: "q-isian-11-5",
        question: "Langkah awal paling krusial untuk mencegah kelelahan mental kerja adalah menetapkan apa pada gawai?",
        correctAnswers: ["Batasan digital", "Digital boundaries", "Batas digital", "Mematikan notifikasi"],
        explanation: "Menetapkan batasan digital seperti mematikan notifikasi kerja di luar jam kantor memberi waktu bagi sistem saraf untuk relaksasi.",
        hint: "Frasa dua kata berkaitan dengan pembatasan gawai."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-11-1",
        statement: "Burnout disebabkan semata-mata oleh kelemahan kepribadian dan kurangnya tekad seseorang.",
        isTrue: false,
        explanation: "Salah. Burnout adalah respons neurobiologis terhadap stres kronis berkepanjangan tanpa jeda pemulihan."
      },
      {
        id: "q-tf-11-2",
        statement: "Paparan hormon kortisol berlebih dalam jangka panjang dapat merusak koneksi sinaptik di korteks prefrontal.",
        isTrue: true,
        explanation: "Benar. Kadar kortisol kronis berdampak negatif pada plastisitas dan kepadatan sinapsis area berpikir eksekutif."
      },
      {
        id: "q-tf-11-3",
        statement: "WHO mengklasifikasikan burnout sebagai penyakit genetik menular.",
        isTrue: false,
        explanation: "Salah. WHO mengklasifikasikan burnout sebagai fenomena okupasional (terkait lingkungan kerja), bukan penyakit genetik."
      },
      {
        id: "q-tf-11-4",
        statement: "Penderita burnout sering mengalami kesulitan dalam berkonsentrasi dan mudah tersulut emosi.",
        isTrue: true,
        explanation: "Benar. Penurunan kendali korteks prefrontal menyebabkan disfungsi regulasi emosional dan fokus."
      },
      {
        id: "q-tf-11-5",
        statement: "Berjalan kaki di alam terbuka hijau membantu menenangkan aktivitas amigdala yang hiperaktif.",
        isTrue: true,
        explanation: "Benar. Paparan lingkungan alami terbukti menurunkan respons fisiologis stres dan mengembalikan kesegaran kognitif."
      }
    ]
  },
  {
    id: "id-art-12",
    title: "Seni 'Slow Living': Menemukan Ketenangan di Tengah Dunia yang Serba Terburu-buru",
    category: "Lifestyle",
    subTopic: "Gaya Hidup Sadar & Kesejahteraan",
    source: "National Geographic Indonesia & Mindful Living",
    sourceUrl: "https://nationalgeographic.grid.id",
    wordCount: 478,
    estimatedMinutes: 3,
    content: [
      "Dalam masyarakat modern yang mengagungkan produktivitas tanpa henti, kecepatan kerap dipandang sebagai tolok ukur utama keberhasilan. Mulai dari makanan siap saji hingga konsumsi informasi kilat di media sosial, kita terbiasa hidup dalam mode serba instan yang secara tidak sadar memicu kecemasan konstan.",
      "Sebagai antitesis terhadap budaya serba cepat tersebut, muncul gerakan 'slow living' atau gaya hidup melambat. Filosofi ini pertama kali berakar dari gerakan 'Slow Food' di Italia pada akhir dekade 1980-an, ketika sekelompok pegiat menolak pembukaan gerai makanan cepat saji di kawasan bersejarah Roma.",
      "Slow living bukanlah ajakan untuk bermalas-malasan atau menghentikan seluruh aktivitas produktif. Sebaliknya, pendekatan ini menekankan pada kualitas di atas kuantitas, kesadaran penuh (mindfulness), serta kemampuan untuk menikmati setiap proses dengan ritme yang lebih manusiawi.",
      "Menerapkan slow living dalam keseharian dapat dimulai dari hal-hal yang sangat mendasar. Misalnya, menikmati sarapan pagi tanpa diselingi memeriksa surel pekerjaan, berjalan kaki tanpa terburu-buru, atau meluangkan waktu untuk membaca buku fisik tanpa gangguan gawai.",
      "Secara psikologis, memperlambat ritme hidup membantu menurunkan kadar hormon adrenalin dan menurunkan tekanan darah. Praktik ini juga melatih individu untuk melepaskan diri dari sindrom takut ketinggalan tren atau FOMO (Fear of Missing Out).",
      "Dengan memilih untuk hidup lebih sadar dan tidak tergesa-gesa, seseorang dapat membangun relasi yang lebih mendalam dengan orang terdekat serta menemukan kepuasan batin yang sejati dalam momen-momen sederhana."
    ],
    fillInQuestions: [
      {
        id: "q-isian-12-1",
        question: "Gerakan slow living berakar dari penolakan makanan cepat saji di negara mana pada akhir 1980-an?",
        correctAnswers: ["Italia", "Italy"],
        explanation: "Gerakan Slow Food bermula di Roma, Italia, sebagai perlawanan terhadap serbuan gerai fast food di situs bersejarah.",
        hint: "Negara di Eropa Selatan beribu kota Roma."
      },
      {
        id: "q-isian-12-2",
        question: "Sindrom psikologis takut ketinggalan tren yang marak di era digital disingkat dengan apa?",
        correctAnswers: ["FOMO", "Fear of Missing Out"],
        explanation: "FOMO (Fear of Missing Out) adalah kecemasan bahwa orang lain sedang menikmati pengalaman berharga yang kita lewatkan.",
        hint: "Singkatan empat huruf berawalan F."
      },
      {
        id: "q-isian-12-3",
        question: "Prinsip utama slow living memprioritaskan aspek apa di atas kuantitas?",
        correctAnswers: ["Kualitas", "Mutu"],
        explanation: "Slow living mengedepankan kualitas pengalaman hidup dan kehadiran utuh daripada sekadar menumpuk jumlah capaian.",
        hint: "Kata berlawanan dengan kuantitas."
      },
      {
        id: "q-isian-12-4",
        question: "Praktik memperlambat ritme harian terbukti membantu menurunkan kadar hormon apa di dalam tubuh?",
        correctAnswers: ["Adrenalin", "Epinefrin", "Kortisol"],
        explanation: "Penurunan ritme aktivitas meredakan rangsangan sistem saraf simpatis sehingga kadar adrenalin menurun.",
        hint: "Hormon pemicu detak jantung cepat saat panik."
      },
      {
        id: "q-isian-12-5",
        question: "Gerakan penolakan makanan cepat saji pendahulu slow living disebut dengan istilah apa?",
        correctAnswers: ["Slow Food", "Slow food movement"],
        explanation: "Slow Food Movement didirikan oleh Carlo Petrini untuk mempertahankan warisan kuliner lokal yang diolah dengan sabar.",
        hint: "Dua kata bahasa Inggris kebalikan dari Fast Food."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-12-1",
        statement: "Konsep slow living bertujuan mengajak orang untuk berhenti bekerja dan bermalas-malasan.",
        isTrue: false,
        explanation: "Salah. Slow living bertujuan meningkatkan kualitas dan kesadaran dalam beraktivitas, bukan kemalasan."
      },
      {
        id: "q-tf-12-2",
        statement: "Gerakan Slow Food pertama kali lahir sebagai reaksi atas dibukanya restoran cepat saji di Roma.",
        isTrue: true,
        explanation: "Benar. Gerakan ini dideklarasikan di Italia pada tahun 1986 sebagai pembelaan terhadap tradisi kuliner lokal."
      },
      {
        id: "q-tf-12-3",
        statement: "Membiasakan sarapan tanpa mengecek gawai merupakan salah satu contoh penerapan hidup melambat.",
        isTrue: true,
        explanation: "Benar. Makan dengan perhatian penuh (mindful eating) merupakan wujud nyata hidup sadar."
      },
      {
        id: "q-tf-12-4",
        statement: "Gaya hidup serba instan terbukti secara ilmiah tidak memiliki dampak terhadap tingkat kecemasan manusia.",
        isTrue: false,
        explanation: "Salah. Tuntutan serba cepat memicu hiperaktivitas sistem saraf dan meningkatkan kecemasan kronis."
      },
      {
        id: "q-tf-12-5",
        statement: "Slow living membantu seseorang mengikis kecemasan akibat sindrom FOMO.",
        isTrue: true,
        explanation: "Benar. Fokus pada kebermaknaan saat ini mengurangi keterikatan obsesif pada aktivitas orang lain di media sosial."
      }
    ]
  },
  {
    id: "id-art-13",
    title: "Prinsip Kaizen: Rahasia Sukses Lewat Perubahan Kecil 1 Persen Setiap Hari",
    category: "Pengembangan Diri",
    subTopic: "Filosofi Produktivitas & Pembentukan Kebiasaan",
    source: "Forbes & Japan Productivity Center",
    sourceUrl: "https://www.forbes.com",
    wordCount: 490,
    estimatedMinutes: 3,
    content: [
      "Banyak orang gagal mempertahankan resolusi tahun baru atau target ambisius karena mereka mencoba merombak seluruh gaya hidup mereka secara drastis dalam satu malam. Perubahan yang terlalu masif sering kali memicu penolakan bawah sadar, menciptakan rasa kewalahan, dan berakhir dengan keputusasaan.",
      "Di Jepang, terdapat sebuah filosofi manajemen dan pengembangan diri legendaris yang bernama 'Kaizen'. Terdiri dari dua karakter kanji—'Kai' yang bermakna perubahan dan 'Zen' yang bermakna kebaikan—Kaizen mengajarkan bahwa kemajuan besar sesungguhnya tercipta dari akumulasi perbaikan kecil yang dilakukan secara terus-menerus.",
      "Filosofi ini awalnya diterapkan oleh industri manufaktur Jepang pasca-Perang Dunia II untuk merekonstruksi perekonomian yang hancur. Perusahaan otomotif terkemuka seperti Toyota mengadopsi Kaizen untuk memberdayakan setiap pekerja di lini perakitan agar selalu mencari cara menyempurnakan alur kerja, sekecil apa pun perbaikan tersebut.",
      "Ketika diterapkan dalam ranah psikologi personal, Kaizen bekerja dengan cara 'menipu' respon defensif otak. Target yang sangat kecil—misalnya membaca satu halaman buku setiap malam atau berolahraga push-up dua kali sehari—terlalu sepele untuk dianggap sebagai ancaman oleh amigdala.",
      "Dengan mengeliminasi rasa takut akan kegagalan, kebiasaan mikro tersebut dapat dilakukan tanpa hambatan mental yang berat. Efek bunga berbunga (compounding effect) dari peningkatan satu persen setiap hari akan menghasilkan lompatan kapasitas yang luar biasa setelah berbulan-bulan berjalan.",
      "Kunci dari Kaizen bukanlah kecepatan atau kesempurnaan instan, melainkan konsistensi pantang menyerah dalam memelihara kebiasaan positif setiap hari."
    ],
    fillInQuestions: [
      {
        id: "q-isian-13-1",
        question: "Filosofi Jepang yang mengajarkan prinsip perbaikan berkelanjutan secara bertahap dinamakan apa?",
        correctAnswers: ["Kaizen", "Prinsip Kaizen"],
        explanation: "Kaizen adalah filosofi perbaikan terus-menerus melalui tindakan-tindakan mikro yang konsisten.",
        hint: "Kata berawalan huruf K dari bahasa Jepang."
      },
      {
        id: "q-isian-13-2",
        question: "Perusahaan otomotif Jepang ternama yang terkenal mempelopori implementasi sistem Kaizen di pabriknya adalah apa?",
        correctAnswers: ["Toyota", "Toyota Motor"],
        explanation: "Toyota Production System (TPS) adalah contoh legendaris penerapan Kaizen di dunia industri.",
        hint: "Produsen mobil terlaris asal Jepang."
      },
      {
        id: "q-isian-13-3",
        question: "Secara etimologis, karakter kanji 'Kai' dalam kata Kaizen memiliki arti apa?",
        correctAnswers: ["Perubahan", "Ubah", "Change"],
        explanation: "Kai berarti perubahan, sedangkan Zen berarti kebaikan atau menuju arah yang lebih baik.",
        hint: "Kata dasar yang berarti proses beralih keadaan."
      },
      {
        id: "q-isian-13-4",
        question: "Efek akumulasi kemajuan kecil yang melipatgandakan hasil dalam jangka panjang dianalogikan dengan efek apa?",
        correctAnswers: ["Compounding effect", "Bunga berbunga", "Efek majemuk", "Akumulasi majemuk"],
        explanation: "Compounding effect (efek pelipatgandaan majemuk) membuat perbaikan 1% harian bernilai 37 kali lipat dalam setahun.",
        hint: "Istilah keuangan untuk pertumbuhan bunga berganda."
      },
      {
        id: "q-isian-13-5",
        question: "Mengapa target mikro yang sangat kecil tidak memicu rasa panik atau hambatan mental pada otak?",
        correctAnswers: ["Tidak mengancam amigdala", "Terlalu kecil untuk dianggap ancaman", "Menghindari respon panik amigdala"],
        explanation: "Langkah kecil tidak memicu respons ancaman pada amigdala sehingga tidak muncul rasa takut atau beban mental.",
        hint: "Berkaitan dengan tidak terpicunya alarm amigdala."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-13-1",
        statement: "Prinsip Kaizen menuntut seseorang untuk mengubah seluruh rutinitas harian secara drastis dalam tempo 24 jam.",
        isTrue: false,
        explanation: "Salah. Kaizen menekankan perubahan mikro bertahap yang realistis dan berulang secara konsisten."
      },
      {
        id: "q-tf-13-2",
        statement: "Sistem Kaizen awalnya dipopulerkan di sektor industri manufaktur Jepang pasca-Perang Dunia II.",
        isTrue: true,
        explanation: "Benar. Kaizen diadopsi secara luas untuk membangkitkan kembali efisiensi industri manufaktur Jepang."
      },
      {
        id: "q-tf-13-3",
        statement: "Menetapkan target membaca hanya 1 halaman per hari adalah contoh strategi pembentukan kebiasaan ala Kaizen.",
        isTrue: true,
        explanation: "Benar. Sasaran yang sangat kecil memudahkan dimulainya kebiasaan tanpa memicu resistensi psikologis."
      },
      {
        id: "q-tf-13-4",
        statement: "Peningkatan kapasitas sebesar 1 persen setiap hari akan menghasilkan dampak yang sama dengan tidak melakukan apa-apa.",
        isTrue: false,
        explanation: "Salah. Peningkatan 1% per hari secara matematis menghasilkan pertumbuhan kapasitas hingga 37 kali lipat dalam satu tahun."
      },
      {
        id: "q-tf-13-5",
        statement: "Kunci utama dari keberhasilan Kaizen terletak pada kedisiplinan dan konsistensi harian.",
        isTrue: true,
        explanation: "Benar. Konsistensi harian jauh lebih penting daripada intensitas sporadis yang cepat padam."
      }
    ]
  },
  {
    id: "id-art-14",
    title: "Evolusi Budaya 'Nongkrong' dan Pentingnya Ruang Ketiga bagi Masyarakat Urban",
    category: "Sosial & Budaya",
    subTopic: "Sosiologi Urban & Ruang Komunal",
    source: "The Conversation Indonesia & Sosiologi Perkotaan",
    sourceUrl: "https://theconversation.com/id",
    wordCount: 495,
    estimatedMinutes: 3,
    content: [
      "Di kota-kota besar Indonesia, pemandangan anak muda dan pekerja yang duduk berjam-jam di kedai kopi sembari berbincang santai atau membuka laptop bukanlah hal yang asing. Aktivitas yang populer disebut 'nongkrong' ini kerap dianggap remeh sebagai pemborosan waktu belaka oleh sebagian kalangan.",
      "Namun dari kacamata sosiologi perkotaan, kebiasaan nongkrong sesungguhnya memiliki fungsi sosial yang amat penting. Sosiolog ternama Ray Oldenburg memperkenalkan konsep 'The Third Place' (Ruang Ketiga), yaitu ruang sosial di luar rumah (ruang pertama) dan tempat kerja atau sekolah (ruang kedua).",
      "Ruang ketiga berfungsi sebagai penyeimbang psikososial di mana individu dapat berinteraksi secara egaliter tanpa dibebani oleh hierarki keluarga maupun tekanan target profesional. Di ruang inilah pertukaran ide, diskusi kreatif, dan pelepasan penat terjadi secara organik.",
      "Secara historis, budaya nongkrong di Indonesia telah berakar panjang dari tradisi berkumpul di warung kopi tradisional, angkringan, hingga balai warga. Tempat-tempat ini menjadi simpul demokrasi informal tempat masyarakat mendiskusikan isu sosial dan politik dengan akrab.",
      "Seiring masifnya pembangunan perumahan padat dan menyusutnya taman kota terbuka, kedai kopi modern kini mengambil alih peran sebagai ruang ketiga yang dominan. Kedai kopi menyediakan fasilitas listrik, pendingin ruangan, dan koneksi internet yang mendukung gaya hidup pekerja lepas dan komunitas kreatif.",
      "Memelihara ketersediaan ruang ketiga yang terjangkau dan inklusif adalah prasyarat mutlak untuk menjaga kohesi sosial dan kesehatan mental masyarakat di tengah belantara beton perkotaan."
    ],
    fillInQuestions: [
      {
        id: "q-isian-14-1",
        question: "Konsep sosiologi mengenai ruang sosial di luar rumah dan kantor diperkenalkan dengan istilah apa?",
        correctAnswers: ["The Third Place", "Third Place", "Ruang Ketiga"],
        explanation: "Konsep The Third Place dicetuskan oleh sosiolog Ray Oldenburg dalam bukunya 'The Great Good Place'.",
        hint: "Istilah bahasa Inggris berawalan Third."
      },
      {
        id: "q-isian-14-2",
        question: "Siapakah nama sosiolog yang pertama kali mempopulerkan teori 'The Third Place'?",
        correctAnswers: ["Ray Oldenburg", "Oldenburg"],
        explanation: "Ray Oldenburg adalah sosiolog urban Amerika Serikat yang merumuskan karakteristik ruang ketiga.",
        hint: "Nama depan berawalan Ray."
      },
      {
        id: "q-isian-14-3",
        question: "Dalam hierarki ruang sosiologis, tempat tinggal atau keluarga menempati posisi sebagai ruang ke berapa?",
        correctAnswers: ["Ruang pertama", "Pertama", "First place", "1"],
        explanation: "Rumah adalah ruang pertama (first place), kantor/sekolah adalah ruang kedua (second place).",
        hint: "Angka sebelum dua."
      },
      {
        id: "q-isian-14-4",
        question: "Bentuk ruang ketiga tradisional di Jawa yang menjadi tempat berkumpul santai di malam hari adalah apa?",
        correctAnswers: ["Angkringan", "Warung kopi", "Warkop"],
        explanation: "Angkringan dan warkop tradisional adalah prototipe ruang ketiga masyarakat nusantara sejak dulu.",
        hint: "Gerobak dorong tradisional penjual nasi kucing di Yogyakarta dan Solo."
      },
      {
        id: "q-isian-14-5",
        question: "Ketersediaan ruang ketiga publik sangat penting bagi masyarakat urban untuk memelihara kohesi sosial dan apa?",
        correctAnswers: ["Kesehatan mental", "Kesejahteraan psikologis", "Kewarasan mental"],
        explanation: "Ruang ketiga menyediakan katarsis emosional dan interaksi sosial yang menunjang kesehatan jiwa.",
        hint: "Kondisi kejiwaan yang sehat."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-14-1",
        statement: "Menurut Ray Oldenburg, tempat kerja dan sekolah dikategorikan sebagai ruang ketiga.",
        isTrue: false,
        explanation: "Salah. Tempat kerja dan institusi pendidikan adalah ruang kedua (second place)."
      },
      {
        id: "q-tf-14-2",
        statement: "Ruang ketiga memungkinkan terjadinya interaksi sosial yang egaliter tanpa batasan hierarki formal.",
        isTrue: true,
        explanation: "Benar. Salah satu ciri utama ruang ketiga adalah sifatnya yang setara dan terbuka bagi siapa saja."
      },
      {
        id: "q-tf-14-3",
        statement: "Angkringan dan warung kopi tradisional di Indonesia berfungsi sebagai simpul demokrasi informal warga.",
        isTrue: true,
        explanation: "Benar. Warga mendiskusikan berbagai persoalan harian dan sosial secara terbuka di warung kopi."
      },
      {
        id: "q-tf-14-4",
        statement: "Berkurangnya ruang terbuka hijau di perkotaan mendorong pergeseran ruang ketiga ke kedai kopi komersial.",
        isTrue: true,
        explanation: "Benar. Minimnya taman publik membuat masyarakat beralih ke kafe untuk mencari tempat bertemu yang nyaman."
      },
      {
        id: "q-tf-14-5",
        statement: "Budaya nongkrong terbukti tidak memiliki korelasi apa pun dengan kesehatan mental masyarakat perkotaan.",
        isTrue: false,
        explanation: "Salah. Nongkrong di ruang ketiga terbukti meredakan stres isolasi sosial dan meningkatkan kesejahteraan emosional."
      }
    ]
  },
  {
    id: "id-art-15",
    title: "Doomscrolling: Mengapa Jari Kita Tak Bisa Berhenti Menggulir Berita Buruk?",
    category: "Kesehatan Mental",
    subTopic: "Psikologi Media & Kesejahteraan Digital",
    source: "BBC News Indonesia & American Psychological Association",
    sourceUrl: "https://www.bbc.com/indonesia",
    wordCount: 480,
    estimatedMinutes: 3,
    content: [
      "Pernahkah Anda berniat membuka ponsel hanya untuk memeriksa pesan singkat, tetapi satu jam kemudian Anda justru mendapati diri Anda tenggelam membaca deretan berita bencana alam, skandal korupsi, dan krisis global tanpa henti? Fenomena kompulsif ini dikenal luas dengan istilah 'doomscrolling'.",
      "Secara harfiah, doomscrolling menggambarkan perilaku seseorang yang terus-menerus menelusuri kabar buruk dan konten bernada malapetaka di linimasa media sosial, meskipun konten tersebut secara jelas memicu kecemasan dan kepanikan.",
      "Pertanyaan mendasarnya: mengapa otak kita tertarik pada hal-hal yang menyakitkan untuk dibaca? Penjelasan kuncinya terletak pada mekanisme evolusioner yang disebut 'negativity bias' (bias negatif).",
      "Pada masa prasejarah, manusia purba yang selalu waspada terhadap potensi ancaman predator dan bahaya alam memiliki peluang bertahan hidup lebih tinggi daripada mereka yang acuh tak acuh. Otak kita berevolusi untuk memprioritaskan deteksi bahaya di atas informasi yang menyenangkan.",
      "Algoritma media sosial modern memanfaatkan bias primitif ini secara cermat. Konten yang memicu kemarahan dan ketakutan dirancang menghasilkan tingkat keterlibatan (engagement) tertinggi, sehingga algoritma akan terus menyuapi pengguna dengan lebih banyak konten serupa.",
      "Dampak jangka panjang dari doomscrolling meliputi insomnia, kelelahan kognitif, dan keputusasaan eksistensial. Untuk memutus siklus adiktif ini, para psikolog menyarankan penerapan 'higiene media', seperti menetapkan batas waktu aplikasi dan tidak menaruh ponsel di samping ranjang saat tidur."
    ],
    fillInQuestions: [
      {
        id: "q-isian-15-1",
        question: "Kebiasaan kompulsif menelusuri berita buruk di media sosial secara terus-menerus disebut istilah apa?",
        correctAnswers: ["Doomscrolling", "Doom scrolling"],
        explanation: "Doomscrolling merujuk pada konsumsi berlebihan kabar buruk secara digital.",
        hint: "Istilah bahasa Inggris berawalan Doom-."
      },
      {
        id: "q-isian-15-2",
        question: "Kecenderungan otak manusia untuk lebih memprioritaskan dan mengingat peristiwa negatif disebut apa?",
        correctAnswers: ["Negativity bias", "Bias negatif", "Bias kenegatifan"],
        explanation: "Negativity bias adalah bias kognitif evolusioner di mana ancaman diproses lebih kuat daripada hal positif.",
        hint: "Frasa dua kata berkaitan dengan kecondongan pada hal negatif."
      },
      {
        id: "q-isian-15-3",
        question: "Algoritma media sosial memprioritaskan konten pemicu kemarahan karena menghasilkan angka apa yang paling tinggi?",
        correctAnswers: ["Engagement", "Keterlibatan", "Interaksi", "Tingkat keterlibatan"],
        explanation: "Konten bermuatan emosi negatif memicu komentar dan share tertinggi sehingga dipromosikan oleh algoritma.",
        hint: "Istilah metrik keterlibatan pengguna media sosial."
      },
      {
        id: "q-isian-15-4",
        question: "Salah satu dampak gangguan tidur yang kerap diderita akibat kebiasaan doomscrolling di malam hari adalah apa?",
        correctAnswers: ["Insomnia", "Susah tidur", "Gangguan tidur"],
        explanation: "Paparan konten menegangkan dan cahaya biru gawai sebelum tidur mengganggu pelepasan hormon melatonin.",
        hint: "Istilah medis untuk sulit tidur."
      },
      {
        id: "q-isian-15-5",
        question: "Praktik membatasi konsumsi informasi dan menjauhkan gawai dari tempat tidur disebut higiene apa?",
        correctAnswers: ["Higiene media", "Media hygiene", "Higiene digital", "Digital hygiene"],
        explanation: "Media hygiene adalah serangkaian kebiasaan sehat untuk menjaga kewarasan pikiran di era informasi berlebih.",
        hint: "Kata padanan untuk kebersihan konsumsi informasi."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-15-1",
        statement: "Otak manusia secara evolusioner memiliki kecenderungan bawaan untuk lebih mewaspadai bahaya dan ancaman.",
        isTrue: true,
        explanation: "Benar. Bias negatif membantu nenek moyang manusia bertahan hidup dari ancaman predator purba."
      },
      {
        id: "q-tf-15-2",
        statement: "Algoritma platform digital secara sengaja menekan konten-konten yang memicu kemarahan agar pengguna tidak cemas.",
        isTrue: false,
        explanation: "Salah. Algoritma justru mempromosikan konten pemicu emosi tinggi demi memaksimalkan durasi pemakaian aplikasi."
      },
      {
        id: "q-tf-15-3",
        statement: "Istilah doomscrolling merujuk pada kegiatan membaca novel fiksi ilmiah di perpustakaan.",
        isTrue: false,
        explanation: "Salah. Doomscrolling merujuk pada membaca berita buruk secara kompulsif di perangkat digital."
      },
      {
        id: "q-tf-15-4",
        statement: "Menjauhkan gawai dari tempat tidur saat hendak beristirahat efektif memutus dorongan menggulir layar tanpa henti.",
        isTrue: true,
        explanation: "Benar. Hambatan fisik menjauhkan ponsel membantu tubuh rileks dan tidur lebih nyenyak."
      },
      {
        id: "q-tf-15-5",
        statement: "Doomscrolling yang berkepanjangan berpotensi memicu kelelahan kognitif dan keputusasaan emosional.",
        isTrue: true,
        explanation: "Benar. Stimulasi ancaman yang konstan menguras kapasitas kognitif dan memperburuk suasana hati."
      }
    ]
  },
  {
    id: "id-art-16",
    title: "Menavigasi Beban Generasi Sandwich: Solusi Finansial dan Keseimbangan Mental",
    category: "Sosial & Budaya",
    subTopic: "Finansial Personal & Dinamika Keluarga",
    source: "Katadata & Lembaga Perencana Keuangan Indonesia",
    sourceUrl: "https://katadata.co.id",
    wordCount: 488,
    estimatedMinutes: 3,
    content: [
      "Istilah 'sandwich generation' atau generasi roti lapis pertama kali dicetuskan oleh sosiolog Dorothy Miller pada tahun 1981. Istilah ini mengibaratkan posisi seseorang yang terhimpit di tengah-tengah dua lapisan roti: harus menopang finansial dan perawatan orang tua lanjut usia di atasnya, sekaligus membiayai anak-anaknya di bawahnya.",
      "Di Indonesia, fenomena generasi sandwich sangat jamak ditemui akibat perpaduan antara nilai budaya bakti keluarga dan minimnya kepemilikan dana pensiun di kalangan generasi terdahulu. Menurut data survei nasional, jutaan pekerja usia produktif mengalokasikan hingga 30-50 persen dari penghasilan bulanan mereka untuk menopang kebutuhan keluarga besar.",
      "Tekanan ganda ini kerap menempatkan generasi sandwich dalam situasi rentan. Selain ancaman kegagalan menyiapkan masa depan pensiun mereka sendiri, beban ini acap kali menimbulkan gesekan emosional dan stres kronis di dalam rumah tangga.",
      "Para pakar perencanaan keuangan menekankan bahwa memutus rantai generasi sandwich memerlukan strategi yang rasional tanpa harus mengabaikan rasa kasih sayang kepada orang tua. Langkah awal adalah membangun komunikasi keuangan yang transparan antar-anggota keluarga mengenai kemampuan riil anggaran.",
      "Kedua, prioritas utama alokasi finansial harus tetap diberikan pada proteksi asuransi kesehatan keluarga dan pembentukan dana darurat minimal enam bulan pengeluaran rutin.",
      "Dengan mengelola ekspektasi bersama dan mendisiplinkan tabungan investasi masa depan, generasi produktif hari ini dapat memastikan anak-anak mereka kelak tidak lagi terhimpit oleh beban finansial yang serupa."
    ],
    fillInQuestions: [
      {
        id: "q-isian-16-1",
        question: "Istilah untuk kelompok usia yang terhimpit membiayai orang tua sekaligus anak secara bersamaan adalah apa?",
        correctAnswers: ["Sandwich generation", "Generasi sandwich", "Generasi roti lapis"],
        explanation: "Generasi sandwich adalah individu yang menanggung beban ekonomi dua generasi sekaligus.",
        hint: "Dua kata bahasa Inggris bermakna roti lapis."
      },
      {
        id: "q-isian-16-2",
        question: "Siapakah nama sosiolog yang pertama kali mencetuskan istilah 'sandwich generation' pada 1981?",
        correctAnswers: ["Dorothy Miller", "Miller"],
        explanation: "Dorothy Miller memperkenalkan istilah ini untuk menggambarkan tantangan pengasuh wanita paruh baya.",
        hint: "Nama depan berawalan Dorothy."
      },
      {
        id: "q-isian-16-3",
        question: "Berapa minimal target jumlah bulan pengeluaran yang ideal untuk cadangan dana darurat keluarga?",
        correctAnswers: ["6 bulan", "Enam bulan", "6", "Enam"],
        explanation: "Dana darurat minimal 6 kali pengeluaran bulanan memberikan bantalan aman saat terjadi gejolak pendapatan.",
        hint: "Angka setengah tahun."
      },
      {
        id: "q-isian-16-4",
        question: "Faktor penyebab utama tingginya generasi sandwich di Indonesia selain budaya adalah minimnya kepemilikan dana apa?",
        correctAnswers: ["Dana pensiun", "Pensiun", "Tabungan hari tua"],
        explanation: "Banyak lansia tidak memiliki jaminan pensiun yang memadai sehingga bergantung sepenuhnya pada anak.",
        hint: "Dana untuk bekal di hari tua setelah tidak bekerja."
      },
      {
        id: "q-isian-16-5",
        question: "Langkah pertama yang esensial dalam menata beban keluarga menurut perencana keuangan adalah membangun apa?",
        correctAnswers: ["Komunikasi keuangan transparan", "Komunikasi keuangan", "Komunikasi terbuka", "Transparansi finansial"],
        explanation: "Komunikasi terbuka mencegah kesalahpahaman dan menetapkan batas kemampuan finansial yang sehat.",
        hint: "Dialog terbuka antar-anggota keluarga mengenai uang."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-16-1",
        statement: "Istilah sandwich generation baru muncul di era maraknya media sosial pada tahun 2020.",
        isTrue: false,
        explanation: "Salah. Istilah ini telah dicetuskan oleh sosiolog Dorothy Miller sejak tahun 1981."
      },
      {
        id: "q-tf-16-2",
        statement: "Generasi sandwich harus menanggung beban finansial orang tua sekaligus anak kandung mereka.",
        isTrue: true,
        explanation: "Benar. Posisi terjepit di antara dua generasi adalah ciri khas utama generasi sandwich."
      },
      {
        id: "q-tf-16-3",
        statement: "Memutus rantai generasi sandwich berarti menelantarkan orang tua tanpa memberikan bantuan apa pun.",
        isTrue: false,
        explanation: "Salah. Memutus rantai berarti menyiapkan kemandirian finansial masa depan agar anak cucu tidak terbebani di kemudian hari."
      },
      {
        id: "q-tf-16-4",
        statement: "Kepemilikan asuransi kesehatan dan dana darurat merupakan pondasi proteksi bagi generasi produktif.",
        isTrue: true,
        explanation: "Benar. Proteksi kesehatan mencegah terkurasnya tabungan ketika terjadi musibah medis tak terduga."
      },
      {
        id: "q-tf-16-5",
        statement: "Komunikasi finansial yang jujur dan transparan di dalam keluarga dapat mengurangi beban stres mental.",
        isTrue: true,
        explanation: "Benar. Ekspektasi yang realistis menghindarkan tekanan finansial yang melampaui batas kemampuan."
      }
    ]
  },
  {
    id: "id-art-17",
    title: "Growth Mindset: Bagaimana Cara Pandang terhadap Kegagalan Membentuk Masa Depan",
    category: "Pengembangan Diri",
    subTopic: "Psikologi Kognitif & Pembelajaran",
    source: "Riset Prof. Carol Dweck & Stanford University",
    sourceUrl: "https://www.stanford.edu",
    wordCount: 482,
    estimatedMinutes: 3,
    content: [
      "Ketika dihadapkan pada soal yang sulit atau tugas yang belum pernah dikerjakan sebelumnya, mengapa sebagian orang merasa tertantang dan bersemangat, sementara yang lain merasa cemas dan langsung menyerah? Jawabannya bermuara pada pola pikir atau mindset yang tertanam di kepala mereka.",
      "Profesor psikologi dari Universitas Stanford, Carol Dweck, mendedikasikan riset berpuluh tahun untuk mempelajari fenomena ini. Ia mengidentifikasi dua tipe pola pikir utama yang menentukan lintasan prestasi manusia: 'fixed mindset' (pola pikir tetap) dan 'growth mindset' (pola pikir bertumbuh).",
      "Individu dengan fixed mindset percaya bahwa kecerdasan, bakat, dan karakter adalah bawaan lahir yang bersifat mutlak dan tidak bisa diubah. Bagi mereka, kegagalan adalah vonis bahwa diri mereka bodoh atau tidak kompeten, sehingga mereka cenderung menghindari tantangan demi melindungi ego.",
      "Sebaliknya, pemilik growth mindset memandang bakat hanyalah titik awal. Mereka meyakini bahwa kemampuan kognitif dan keterampilan dapat ditempa melalui dedikasi, strategi pembelajaran yang tepat, dan kerja keras.",
      "Penemuan modern dalam neurosains membuktikan kebenaran konsep ini melalui mekanisme 'neuroplastisitas'. Setiap kali kita berjuang memecahkan masalah baru dan belajar dari kekeliruan, neuron di otak membentuk sambungan sinaptik baru yang semakin kokoh.",
      "Salah satu kunci sederhana untuk menggeser pola pikir adalah dengan menambahkan kata sakti 'belum'. Mengubah kalimat 'Saya tidak bisa melakukan ini' menjadi 'Saya belum bisa melakukan ini' membuka ruang mental yang luas untuk proses belajar tanpa batas."
    ],
    fillInQuestions: [
      {
        id: "q-isian-17-1",
        question: "Profesor psikologi Stanford yang mempopulerkan teori growth mindset dan fixed mindset adalah siapa?",
        correctAnswers: ["Carol Dweck", "Dr. Carol Dweck", "Prof. Carol Dweck"],
        explanation: "Carol Dweck menulis buku mahakarya 'Mindset: The New Psychology of Success'.",
        hint: "Nama tokoh psikolog berawalan Carol."
      },
      {
        id: "q-isian-17-2",
        question: "Pola pikir yang meyakini kecerdasan dan bakat adalah sifat bawaan mati yang tak dapat diubah disebut apa?",
        correctAnswers: ["Fixed mindset", "Pola pikir tetap", "Pola pikir kaku"],
        explanation: "Fixed mindset membatasi potensi diri karena menganggap bakat bersifat statis sejak lahir.",
        hint: "Lawan kata dari growth mindset."
      },
      {
        id: "q-isian-17-3",
        question: "Kemampuan biologis otak untuk terus membentuk dan mengatur ulang sambungan saraf disebut istilah apa?",
        correctAnswers: ["Neuroplastisitas", "Neuroplasticity"],
        explanation: "Neuroplastisitas membuktikan bahwa struktur fisik otak manusia dapat berkembang seiring pengalaman belajar.",
        hint: "Istilah neurosains berakhiran -plastisitas."
      },
      {
        id: "q-isian-17-4",
        question: "Kata sakti sederhana yang disarankan Carol Dweck untuk mengubah kalimat menyerah menjadi kalimat belajar adalah apa?",
        correctAnswers: ["Belum", "Yet", "The power of yet"],
        explanation: "Kata 'belum' mengubah kegagalan menjadi proses yang masih berlangsung.",
        hint: "Kata 5 huruf berawalan B menandakan sesuatu yang akan dicapai nanti."
      },
      {
        id: "q-isian-17-5",
        question: "Struktur penyambung antar-sel neuron di otak yang terbentuk semakin kokoh saat belajar adalah apa?",
        correctAnswers: ["Sinapsis", "Sinaps", "Sambungan sinaptik"],
        explanation: "Sinapsis adalah titik temu transmisi sinyal antar-neuron di jaringan saraf otak.",
        hint: "Istilah biologi sel saraf berawalan S."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-17-1",
        statement: "Riset Carol Dweck menunjukkan bahwa kecerdasan manusia bersifat statis dan tidak dapat berkembang.",
        isTrue: false,
        explanation: "Salah. Dweck membuktikan kemampuan kognitif dapat ditingkatkan lewat latihan dan strategi yang tepat."
      },
      {
        id: "q-tf-17-2",
        statement: "Pemilik fixed mindset cenderung memandang kegagalan sebagai bukti bahwa mereka tidak berbakat.",
        isTrue: true,
        explanation: "Benar. Mereka menganggap kegagalan sebagai ancaman terhadap identitas kecerdasan mereka."
      },
      {
        id: "q-tf-17-3",
        statement: "Fenomena neuroplastisitas membuktikan bahwa otak mampu membentuk jalur saraf baru sepanjang hayat.",
        isTrue: true,
        explanation: "Benar. Otak tetap plastis dan dapat beradaptasi terhadap rangsangan kognitif baru di segala usia."
      },
      {
        id: "q-tf-17-4",
        statement: "Orang dengan growth mindset menghindari tantangan karena takut membuat kesalahan.",
        isTrue: false,
        explanation: "Salah. Pemilik growth mindset justru menyambut tantangan sebagai sarana untuk mempertajam kemampuan."
      },
      {
        id: "q-tf-17-5",
        statement: "Menambahkan kata 'belum' saat menghadapi kesulitan membantu menumbuhkan optimisme belajar.",
        isTrue: true,
        explanation: "Benar. Konsep 'The Power of Yet' membingkai kesulitan sebagai fase menuju penguasaan keterampilan."
      }
    ]
  },
  {
    id: "id-art-18",
    title: "Sains di Balik Jalan Kaki 10.000 Langkah: Hubungan Gerak Tubuh dengan Kreativitas",
    category: "Lifestyle",
    subTopic: "Kesehatan Fisik, Otak & Kreativitas",
    source: "Stanford University Study & Kompas Sains",
    sourceUrl: "https://sains.kompas.com",
    wordCount: 486,
    estimatedMinutes: 3,
    content: [
      "Di era jam kerja kantoran yang menuntut seseorang duduk di depan meja selama delapan jam sehari, anjuran untuk berjalan kaki 10.000 langkah per hari telah menjadi tren kebugaran global. Namun, tahukah Anda dari mana asal-usul angka 10.000 langkah tersebut?",
      "Menariknya, target 10.000 langkah awalnya bukanlah angka mutlak hasil uji klinis laboratorium, melainkan strategi pemasaran jelang Olimpiade Tokyo 1964 di Jepang. Sebuah perusahaan memproduksi pedometer komersial bernama 'Manpo-kei', yang secara harfiah berarti 'pengukur 10.000 langkah'.",
      "Meskipun bermula dari kampanye produk, penelitian medis kontemporer mengonfirmasi bahwa berjalan kaki secara teratur memang memberikan manfaat fisiologis dan mental yang luar biasa. Berjalan kaki dengan ritme konstan memacu sirkulasi darah dan meningkatkan aliran oksigen ke korteks serebral.",
      "Sebuah studi terkenal dari Universitas Stanford mengungkapkan bahwa berjalan kaki mampu meningkatkan keluaran ide kreatif hingga 60 persen dibandingkan saat seseorang duduk diam. Para peneliti mengamati bahwa gerak langkah ritmis memicu 'divergent thinking'—kemampuan otak untuk menghubungkan konsep-konsep yang sebelumnya tampak terpisah.",
      "Tidak mengherankan jika para pemikir besar dunia sepanjang sejarah, seperti filsuf Friedrich Nietzsche hingga pendiri Apple Steve Jobs, terbiasa melakukan rapat atau merenung sambil berjalan kaki di luar ruangan.",
      "Berjalan kaki ringan di sela-sela rutinitas harian tidak hanya membakar kalori dan menstabilkan gula darah, tetapi juga menjadi sarana meditatif alami untuk menyegarkan kembali pikiran yang buntu."
    ],
    fillInQuestions: [
      {
        id: "q-isian-18-1",
        question: "Alat pedometer asal Jepang yang mempopulerkan target 10.000 langkah pada era 1960-an bernama apa?",
        correctAnswers: ["Manpo-kei", "Manpokei"],
        explanation: "Manpo-kei dipasarkan menjelang Olimpiade Tokyo 1964 dan menjadi cikal bakal tren 10.000 langkah.",
        hint: "Kata serapan Jepang berawalan Manpo-."
      },
      {
        id: "q-isian-18-2",
        question: "Menurut studi Universitas Stanford, berjalan kaki dapat mendongkrak ide kreatif hingga berapa persen?",
        correctAnswers: ["60%", "60 persen", "60", "Enam puluh persen"],
        explanation: "Riset Stanford membuktikan keluaran ide kreatif subjek meningkat rata-rata 60% saat berjalan kaki.",
        hint: "Angka puluhan antara 50 dan 70."
      },
      {
        id: "q-isian-18-3",
        question: "Proses berpikir kreatif yang menghubungkan beragam gagasan berbeda secara luas disebut pemikiran apa?",
        correctAnswers: ["Divergent thinking", "Berpikir divergen", "Pemikiran divergen"],
        explanation: "Divergent thinking adalah kemampuan kognitif mengeksplorasi banyak solusi spontan dan tidak linier.",
        hint: "Istilah psikologi berpikir berawalan D."
      },
      {
        id: "q-isian-18-4",
        question: "Tokoh teknologi pendiri Apple yang terkenal gemar menggelar rapat sambil berjalan kaki adalah siapa?",
        correctAnswers: ["Steve Jobs", "Jobs"],
        explanation: "Steve Jobs kerap mengadakan 'walking meetings' bersama rekan kerjanya untuk memicu ide segar.",
        hint: "Nama depan Steve."
      },
      {
        id: "q-isian-18-5",
        question: "Selain memicu kreativitas, berjalan kaki teratur membantu menstabilkan kadar apa di dalam aliran darah?",
        correctAnswers: ["Gula darah", "Glukosa", "Kadar gula"],
        explanation: "Aktivitas otot kaki membantu penyerapan glukosa darah tanpa bergantung penuh pada sekresi insulin berlebih.",
        hint: "Kadar pemanis alami dalam darah."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-18-1",
        statement: "Angka 10.000 langkah awalnya berasal dari kampanye pemasaran alat pedometer Jepang menjelang Olimpiade 1964.",
        isTrue: true,
        explanation: "Benar. Kampanye pedometer Manpo-kei mempopulerkan angka 10.000 sebagai target harian yang mudah diingat."
      },
      {
        id: "q-tf-18-2",
        statement: "Studi membuktikan bahwa duduk diam berjam-jam menghasilkan ide kreatif yang jauh lebih banyak daripada berjalan santai.",
        isTrue: false,
        explanation: "Salah. Berjalan santai terbukti meningkatkan ide kreatif hingga 60% dibandingkan duduk diam."
      },
      {
        id: "q-tf-18-3",
        statement: "Gerakan berjalan ritmis membantu meningkatkan suplai oksigen dan sirkulasi darah ke otak.",
        isTrue: true,
        explanation: "Benar. Gerak fisik ritmis merangsang fungsi vaskular serebral dan kejernihan berpikir."
      },
      {
        id: "q-tf-18-4",
        statement: "Steve Jobs melarang karyawannya berjalan kaki saat sedang berdiskusi ide produk.",
        isTrue: false,
        explanation: "Salah. Steve Jobs justru terkenal menyukai tradisi 'walking meetings' untuk mengambil keputusan penting."
      },
      {
        id: "q-tf-18-5",
        statement: "Berjalan kaki ringan memiliki manfaat positif bagi regulasi metabolisme gula darah tubuh.",
        isTrue: true,
        explanation: "Benar. Kontraksi otot saat berjalan membantu sel tubuh menyerap glukosa secara efisien."
      }
    ]
  },
  {
    id: "id-art-19",
    title: "Kekuatan Tulisan Tangan: Mengapa Expressive Journaling Ampuh Redakan Kecemasan",
    category: "Kesehatan Mental",
    subTopic: "Terapi Ekspresif & Regulasi Emosi",
    source: "American Psychological Association & Psikologi Terapan",
    sourceUrl: "https://www.apa.org",
    wordCount: 484,
    estimatedMinutes: 3,
    content: [
      "Di tengah banjir informasi dan tuntutan hidup serba cepat, pikiran kita kerap dipenuhi oleh pusaran kecemasan, kekhawatiran masa depan, dan konflik emosional yang tak terucapkan. Ketika perasaan-perasaan ini hanya berputar di dalam kepala, mereka cenderung membesar dan terasa sangat menekan.",
      "Salah satu metode terapi mandiri yang terbukti secara ilmiah ampuh meredakan beban psikologis tersebut adalah 'expressive journaling' atau menulis ekspresif. Terapi ini dipelopori oleh psikolog James Pennebaker dari Universitas Texas pada dekade 1980-an.",
      "Dalam eksperimen klasiknya, Pennebaker meminta para partisipan menuliskan perasaan dan pikiran terdalam mereka mengenai pengalaman traumatik atau peristiwa stres selama 15-20 menit sehari. Hasilnya mencengangkan: partisipan mengalami perbaikan signifikan pada sistem kekebalan tubuh, penurunan tekanan darah, dan penurunan gejala depresi.",
      "Secara neurobiologis, menuangkan emosi ke dalam bentuk tulisan fisik mengaktifkan proses yang disebut 'affect labeling' (pelabelan emosi). Ketika kita memberi nama dan merangkai kata untuk melukiskan rasa takut atau sedih, korteks prefrontal kiri akan mengambil alih kendali dan secara otomatis meredam hiperaktivitas amigdala.",
      "Menulis tangan di atas kertas fisik terbukti memberikan efek terapeutik yang lebih kuat dibandingkan mengetik di layar ponsel. Gerakan motorik halus jemari memicu ritme sensorik yang menenangkan sistem saraf parasimpatis.",
      "Menulis jurnal bukanlah tentang estetika tata bahasa atau menyusun karya sastra, melainkan tentang kejujuran radikal pada diri sendiri untuk membersihkan ruang batin dari sampah emosional."
    ],
    fillInQuestions: [
      {
        id: "q-isian-19-1",
        question: "Siapakah nama psikolog pelopor riset expressive writing dari Universitas Texas?",
        correctAnswers: ["James Pennebaker", "Dr. James Pennebaker", "Pennebaker"],
        explanation: "James Pennebaker adalah tokoh kunci yang membuktikan manfaat medis dari menulis ekspresif.",
        hint: "Nama depan berawalan James."
      },
      {
        id: "q-isian-19-2",
        question: "Proses memberi label kata dan merangkai nama pada emosi yang dirasakan disebut apa?",
        correctAnswers: ["Affect labeling", "Pelabelan emosi", "Pelabelan afek"],
        explanation: "Affect labeling membantu korteks prefrontal menenangkan gejolak emosi di amigdala.",
        hint: "Istilah psikologi dua kata berawalan Affect."
      },
      {
        id: "q-isian-19-3",
        question: "Sistem saraf otonom yang bertugas menenangkan tubuh dan mengaktifkan relaksasi dinamakan apa?",
        correctAnswers: ["Sistem saraf parasimpatis", "Parasimpatis", "Parasympathetic nervous system"],
        explanation: "Sistem saraf parasimpatis memfasilitasi respons 'rest and digest' untuk memulihkan energi tubuh.",
        hint: "Sistem saraf lawan dari simpatis."
      },
      {
        id: "q-isian-19-4",
        question: "Menurut riset, menulis tangan di atas kertas memberikan stimulasi motorik yang lebih menenangkan dibanding mengetik di layar apa?",
        correctAnswers: ["Ponsel", "Gawai", "Layar", "Layar gawai", "Komputer"],
        explanation: "Menulis tangan melibatkan integrasi sensorimotorik yang lebih dalam dibandingkan sentuhan papan ketik layar sentuh.",
        hint: "Perangkat elektronik pintar sehari-hari."
      },
      {
        id: "q-isian-19-5",
        question: "Prinsip utama dalam expressive journaling bukan keindahan bahasa, melainkan apa terhadap diri sendiri?",
        correctAnswers: ["Kejujuran radikal", "Kejujuran", "Keterbukaan", "Kejujuran diri"],
        explanation: "Kejujuran mengakui perasaan asli tanpa sensor adalah kunci pelepasan katarsis emosi.",
        hint: "Sifat tulus dan tidak berbohong."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-19-1",
        statement: "Riset James Pennebaker membuktikan bahwa menulis ekspresif mampu meningkatkan fungsi sistem kekebalan tubuh.",
        isTrue: true,
        explanation: "Benar. Pelepasan stres emosional secara tertulis berkorelasi positif dengan penguatan imunitas tubuh."
      },
      {
        id: "q-tf-19-2",
        statement: "Expressive journaling mewajibkan tata bahasa yang sempurna dan harus dipublikasikan ke orang lain.",
        isTrue: false,
        explanation: "Salah. Menulis jurnal adalah ruang pribadi bebas sensor yang tidak membutuhkan kesempurnaan tata bahasa."
      },
      {
        id: "q-tf-19-3",
        statement: "Proses affect labeling terbukti secara neurologis mampu meredam gejolak amigdala yang reaktif.",
        isTrue: true,
        explanation: "Benar. Merumuskan perasaan ke dalam kata-kata mengaktifkan fungsi rem korteks prefrontal."
      },
      {
        id: "q-tf-19-4",
        statement: "Mengetik di layar ponsel terbukti menghasilkan efek relaksasi saraf yang jauh lebih tinggi daripada menulis tangan.",
        isTrue: false,
        explanation: "Salah. Menulis tangan melibatkan kinestetik unik yang lebih efektif merangsang saraf parasimpatis."
      },
      {
        id: "q-tf-19-5",
        statement: "Menuliskan perasaan stres selama 15 menit per hari membantu menjernihkan kekalutan pikiran.",
        isTrue: true,
        explanation: "Benar. Sesi singkat menulis ekspresif mengorganisasikan kembali kekacauan kognitif dalam pikiran."
      }
    ]
  },
  {
    id: "id-art-20",
    title: "Gotong Royong di Abad ke-21: Dari Tradisi Sambatan Menuju Crowdfunding Digital",
    category: "Sosial & Budaya",
    subTopic: "Antropologi Indonesia & Solidaritas Digital",
    source: "Jurnal Kebudayaan Kemendikbud & Kompas Humaniora",
    sourceUrl: "https://www.kompas.id",
    wordCount: 492,
    estimatedMinutes: 3,
    content: [
      "Gotong royong telah lama diakui sebagai salah satu nilai inti dan pilar perekat bangsa Indonesia. Dalam tradisi masyarakat agraris pedesaan, nilai ini mewujud dalam praktik nyata seperti 'sambatan' di tanah Jawa saat membangun rumah tetangga, 'mapalus' di Minahasa, atau 'subak' di Bali dalam pembagian air irigasi.",
      "Tradisi gotong royong tradisional tersebut berlandaskan pada asas resiprositas sukarela dan modal sosial (social capital) yang erat. Warga menyumbangkan tenaga dan waktu mereka tanpa upah uang, dengan pemahaman bahwa bantuan serupa akan mereka terima saat mereka membutuhkannya di kemudian hari.",
      "Ketika arus urbanisasi dan individualisme modern kian menguat, banyak sosiolog sempat mengkhawatirkan pudarnya semangat kebersamaan ini di kota-kota besar. Namun menariknya, nilai gotong royong tidak punah, melainkan bermetamorfosis ke dalam format digital.",
      "Kelahiran berbagai platform urun dana daring (crowdfunding) di Indonesia menjadi bukti kuat evolusi tersebut. Jutaan warganet secara spontan mendonasikan uang mulai dari ribuan rupiah untuk membiayai pengobatan orang asing yang sakit parah, membantu korban bencana alam, atau membangun jembatan di pelosok nusantara.",
      "Fenomena 'viralitas kebaikan' di media sosial memperlihatkan bahwa ruang digital dapat menjadi arena baru mobilisasi solidaritas sosial lintas suku, agama, dan wilayah geografis.",
      "Gotong royong digital membuktikan bahwa esensi kemanusiaan bangsa Indonesia tetap hidup dan tangguh, menyesuaikan diri dengan perangkat teknologi mutakhir tanpa kehilangan jiwa kebersamaannya."
    ],
    fillInQuestions: [
      {
        id: "q-isian-20-1",
        question: "Tradisi gotong royong tolong-menolong warga membangun rumah di masyarakat Jawa dikenal dengan istilah apa?",
        correctAnswers: ["Sambatan", "Tradisi sambatan", "Gugur gunung"],
        explanation: "Sambatan adalah kerja bakti sukarela warga desa untuk membantu mendirikan rumah atau hajatan tetangga.",
        hint: "Kata bahasa Jawa berawalan S."
      },
      {
        id: "q-isian-20-2",
        question: "Sistem gotong royong pengelolaan irigasi pertanian komunal di Bali dinamakan apa?",
        correctAnswers: ["Subak", "Sistem subak"],
        explanation: "Subak adalah organisasi kemasyarakatan agraris tradisional khas Bali yang mengatur pembagian air.",
        hint: "Organisasi irigasi sawah warisan budaya dunia di Bali."
      },
      {
        id: "q-isian-20-3",
        question: "Praktik urun dana bersama secara daring melalui platform digital dikenal dengan istilah bahasa Inggris apa?",
        correctAnswers: ["Crowdfunding", "Crowd funding"],
        explanation: "Crowdfunding adalah penggalangan dana secara kolektif dari banyak orang lewat internet.",
        hint: "Kata gabungan crowd dan funding."
      },
      {
        id: "q-isian-20-4",
        question: "Tradisi gotong royong kerja bersama khas masyarakat Minahasa di Sulawesi Utara disebut apa?",
        correctAnswers: ["Mapalus", "Tradisi mapalus"],
        explanation: "Mapalus adalah kearifan lokal suku Minahasa dalam tolong-menolong pertanian dan sosial.",
        hint: "Kata 7 huruf berawalan M."
      },
      {
        id: "q-isian-20-5",
        question: "Kepercayaan dan jaringan relasi yang menjadi landasan kerja sama masyarakat dalam sosiologi disebut modal apa?",
        correctAnswers: ["Modal sosial", "Social capital"],
        explanation: "Modal sosial adalah sumber daya tak berwujud berupa norma, kepercayaan, dan jaringan solidaritas.",
        hint: "Padanan kata dari social capital."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-20-1",
        statement: "Tradisi sambatan di Jawa mewajibkan warga penerima bantuan untuk membayar upah tunai harian kepada para penolong.",
        isTrue: false,
        explanation: "Salah. Sambatan adalah wujud tolong-menolong sukarela tanpa sistem upah uang tunai."
      },
      {
        id: "q-tf-20-2",
        statement: "Subak di Bali merupakan contoh sistem manajemen irigasi komunal berlandaskan nilai gotong royong.",
        isTrue: true,
        explanation: "Benar. Subak mengelola alokasi air sawah secara adil dan demokratis demi kesejahteraan bersama."
      },
      {
        id: "q-tf-20-3",
        statement: "Platform crowdfunding digital merupakan wujud evolusi nilai gotong royong di era teknologi informasi.",
        isTrue: true,
        explanation: "Benar. Penggalangan dana daring meneruskan semangat solidaritas warga dalam bentuk bantuan finansial mikro."
      },
      {
        id: "q-tf-20-4",
        statement: "Sosiolog mengonfirmasi bahwa nilai solidaritas gotong royong di Indonesia telah musnah total akibat urbanisasi.",
        isTrue: false,
        explanation: "Salah. Gotong royong tidak musnah melainkan bertransformasi menjadi solidaritas digital lintas daerah."
      },
      {
        id: "q-tf-20-5",
        statement: "Konsep modal sosial mencakup nilai saling percaya dan kesediaan membantu sesama dalam komunitas.",
        isTrue: true,
        explanation: "Benar. Modal sosial memperkuat jalinan kebersamaan dan kerja sama antar-warga."
      }
    ]
  }
];

export const INDONESIAN_ARTICLES: IndonesianArticle[] = [
  ...BASE_INDONESIAN_ARTICLES,
  ...ADDITIONAL_INDONESIAN_ARTICLES,
  ...ADDITIONAL_INDONESIAN_ARTICLES_PART2,
  ...ADDITIONAL_INDONESIAN_ARTICLES_PART3,
  ...ADDITIONAL_INDONESIAN_ARTICLES_PART4,
  ...ADDITIONAL_INDONESIAN_ARTICLES_PART5,
  ...ADDITIONAL_INDONESIAN_ARTICLES_PART6,
  ...ADDITIONAL_INDONESIAN_ARTICLES_PART7,
  ...ADDITIONAL_INDONESIAN_ARTICLES_PART8,
  ...ADDITIONAL_INDONESIAN_ARTICLES_PART9,
  ...ADDITIONAL_INDONESIAN_ARTICLES_PART10
];

// Deterministic daily 5-article pack selector based on date string (YYYY-MM-DD)
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
  for (let i = 0; i < Math.min(5, total); i++) {
    const idx = (startIndex + i) % total;
    dailySet.push(INDONESIAN_ARTICLES[idx]);
  }
  return dailySet;
}
