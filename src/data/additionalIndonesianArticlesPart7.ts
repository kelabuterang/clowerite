import { IndonesianArticle } from '../types';

export const ADDITIONAL_INDONESIAN_ARTICLES_PART7: IndonesianArticle[] = [
  // ==========================================
  // TEMA 2: FINANSIAL (id-art-112 - id-art-121)
  // ==========================================
  {
    id: "id-art-112",
    title: "Mengelola Dana Darurat: Benteng Utama Ketahanan Finansial Rumah Tangga",
    category: "Finansial",
    topic: "Manajemen Keuangan Pribadi",
    subTopic: "Likuiditas & Dana Darurat",
    source: "Otoritas Jasa Keuangan (OJK) & Perencana Keuangan Independen Indonesia",
    sourceUrl: "https://ojk.go.id",
    wordCount: 460,
    estimatedMinutes: 3,
    content: [
      "Di tengah ketidakpastian ekonomi global dan ancaman pemutusan hubungan kerja (PHK) yang sewaktu-waktu dapat terjadi, fondasi terpenting dari piramida perencanaan keuangan bukanlah investasi saham dengan imbal hasil tinggi, melainkan kepemilikan dana darurat (*emergency fund*) yang memadai. Dana darurat adalah sejumlah uang tunai atau instrumen likuid yang disisihkan secara khusus untuk mengantisipasi kejadian mendesak yang tidak terduga.",
      "Para pakar perencana keuangan menyarankan alokasi dana darurat yang disesuaikan dengan profil tanggungan keluarga. Bagi individu lajang tanpa tanggungan, besaran ideal berkisar antara 3 hingga 6 kali pengeluaran rutin bulanan. Namun, bagi kepala keluarga yang telah menikah dan memiliki anak, jumlah tersebut sebaiknya ditingkatkan menjadi 9 hingga 12 kali pengeluaran bulanan guna memberikan bantalan napas yang cukup jika sumber pemasukan utama terhenti.",
      "Kunci utama penempatan dana darurat terletak pada asas likuiditas dan keamanan modal, bukan mengejar keuntungan dividen atau bunga tinggi. Instrumen yang tepat meliputi tabungan perbankan terpisah tanpa kartu debit, deposito jangka pendek, atau reksa dana pasar uang (RDPU) yang dapat dicairkan dalam waktu 1x24 jam tanpa penalti.",
      "Mencampurkan dana darurat ke dalam rekening operasional harian atau menaruhnya pada aset volatil seperti mata uang kripto adalah kekeliruan fatal yang dapat memicu kepanikan saat musibah kesehatan atau kehilangan pekerjaan terjadi."
    ],
    fillInQuestions: [
      {
        id: "q-fi-112-1",
        question: "Uang simpanan yang khusus disisihkan untuk menghadapi krisis tak terduga seperti sakit atau PHK disebut dana _____.",
        correctAnswers: ["darurat", "Darurat"],
        explanation: "Dana darurat bertindak sebagai jaring pengaman utama sebelum memulai investasi.",
        hint: "Keadaan genting yang memerlukan tindakan segera."
      },
      {
        id: "q-fi-112-2",
        question: "Lembaga negara independen yang mengatur dan mengawasi sektor jasa keuangan serta perbankan di Indonesia adalah _____.",
        correctAnswers: ["OJK", "ojk"],
        explanation: "OJK (Otoritas Jasa Keuangan) bertugas mengawasi industri perbankan, pasar modal, dan IKNB.",
        hint: "Singkatan tiga huruf: O-J-K."
      },
      {
        id: "q-fi-112-3",
        question: "Kemudahan suatu aset keuangan untuk diubah menjadi uang tunai dalam waktu cepat tanpa kehilangan nilai disebut tingkat _____.",
        correctAnswers: ["likuiditas", "Likuiditas"],
        explanation: "Likuiditas tinggi memungkinkan dana dicairkan seketika saat keadaan darurat terjadi.",
        hint: "Berasal dari kata cair (liquid)."
      },
      {
        id: "q-fi-112-4",
        question: "Bagi individu lajang tanpa tanggungan, besaran minimal dana darurat yang dianjurkan adalah setara 3 hingga 6 bulan nilai _____.",
        correctAnswers: ["pengeluaran", "biaya hidup"],
        explanation: "Perhitungan dana darurat didasarkan pada pengeluaran bulanan riil, bukan nilai gaji kotor.",
        hint: "Uang yang dikeluarkan untuk kebutuhan hidup."
      },
      {
        id: "q-fi-112-5",
        question: "Instrumen investasi pasar modal berisiko rendah yang mengalokasikan portofolio pada deposito dan obligasi jatuh tempo di bawah satu tahun adalah reksa dana pasar _____.",
        correctAnswers: ["uang", "Uang"],
        explanation: "Reksa dana pasar uang (RDPU) cocok untuk menampung dana darurat karena fluktuasi harganya sangat stabil.",
        hint: "Alat pembayaran yang sah."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-112-1",
        statement: "Langkah pertama yang bijak dalam merencanakan keuangan keluarga adalah membangun dana darurat sebelum berinvestasi agresif.",
        isTrue: true,
        explanation: "Benar. Dana darurat menjadi fondasi pelindung dari kebangkrutan saat terjadi musibah tak terduga."
      },
      {
        id: "q-tf-112-2",
        statement: "Dana darurat sebaiknya diinvestasikan seluruhnya ke dalam aset saham gorengan demi melipatgandakan modal dalam semalam.",
        isTrue: false,
        explanation: "Salah. Dana darurat harus ditaruh pada instrumen aman dan likuid, bukan aset berisiko tinggi."
      },
      {
        id: "q-tf-112-3",
        statement: "Keluarga yang memiliki banyak anak membutuhkan alokasi dana darurat yang lebih besar dibandingkan orang lajang.",
        isTrue: true,
        explanation: "Benar. Beban tanggungan yang lebih tinggi memerlukan bantalan finansial 9-12 bulan pengeluaran."
      },
      {
        id: "q-tf-112-4",
        statement: "Rekening dana darurat sebaiknya digabung menjadi satu dengan rekening belanja harian agar mudah digunakan berbelanja liburan.",
        isTrue: false,
        explanation: "Salah. Rekening harus dipisahkan agar dana darurat tidak terpakai secara tidak sengaja untuk konsumsi rutin."
      },
      {
        id: "q-tf-112-5",
        statement: "Reksa dana pasar uang (RDPU) merupakan salah satu opsi penempatan dana darurat yang memiliki likuiditas baik.",
        isTrue: true,
        explanation: "Benar. RDPU stabil dan umumnya dapat dicairkan dalam hitungan hari kerja tanpa penalti."
      }
    ]
  },
  {
    id: "id-art-113",
    title: "Bahaya Pinjaman Online Ilegal dan Jebakan Bunga Berbunga pada Pekerja Muda",
    category: "Finansial",
    topic: "Literasi Utang & Regulasi Finansial",
    subTopic: "Pinjol Ilegal & Bahaya Rentenir Digital",
    source: "Satgas Pasti (Pemberantasan Aktivitas Keuangan Ilegal) & Otoritas Jasa Keuangan",
    sourceUrl: "https://ojk.go.id",
    wordCount: 465,
    estimatedMinutes: 3,
    content: [
      "Pertumbuhan industri teknologi finansial pembiayaan bersama (*fintech peer-to-peer lending*) di Indonesia bagaikan pisau bermata dua. Di satu sisi, teknologi ini memperluas akses pembiayaan bagi masyarakat yang belum terlayani perbankan konvensional (*unbanked*). Namun di sisi lain, maraknya aplikasi pinjaman online ilegal (pinjol ilegal) menjerumuskan ratusan ribu generasi muda ke dalam pusaran utang yang menghancurkan masa depan.",
      "Pinjol ilegal beroperasi tanpa izin dari Otoritas Jasa Keuangan (OJK). Modus operandi mereka adalah menawarkan pinjaman kilat tanpa jaminan dan tanpa syarat administrasi rumit, cukup dengan foto kartu tanda penduduk (KTP). Namun di balik kemudahan semu tersebut, peminjam dijerat oleh potongan biaya administrasi di muka yang sangat besar, tenor pinjaman sangat pendek (hanya beberapa hari), serta suku bunga harian mencekik yang menerapkan skema bunga berbunga.",
      "Ketika debitur mengalami keterlambatan pembayaran beberapa jam saja, sindikat pinjol ilegal melancarkan teror digital: meretas buku kontak telepon gawai pengguna, menyebarkan fitnah bernada asusila ke keluarga dan rekan kerja, hingga intimidasi verbal terus-menerus.",
      "Masyarakat perlu memahami bahwa pinjol legal berizin OJK wajib mematuhi batas maksimal bunga manfaat ekonomi harian dan dilarang keras mengakses data pribadi selain kamera, mikrofon, dan lokasi (Camilan) sesuai ketentuan hukum."
    ],
    fillInQuestions: [
      {
        id: "q-fi-113-1",
        question: "Satuan tugas lintas kementerian di Indonesia yang bertindak memberantas aktivitas pinjol ilegal dan investasi bodong bernama Satgas _____.",
        correctAnswers: ["Pasti", "PASTI"],
        explanation: "Satgas PASTI (sebelumnya Satgas Waspada Investasi) aktif memblokir entitas keuangan ilegal.",
        hint: "Kata bahasa Indonesia bermakna tentu atau tanpa ragu."
      },
      {
        id: "q-fi-113-2",
        question: "Model layanan keuangan berbasis teknologi yang mempertemukan pemberi pinjaman dan peminjam secara daring disebut fintech peer-to-peer _____.",
        correctAnswers: ["lending", "Lending"],
        explanation: "P2P lending merupakan platform pinjam meminjam uang berbasis teknologi informasi.",
        hint: "Kata bahasa Inggris untuk aktivitas meminjamkan dana."
      },
      {
        id: "q-fi-113-3",
        question: "Praktik mengenakan bunga atas pokok pinjaman ditambah akumulasi bunga sebelumnya yang menumpuk disebut sistem bunga _____.",
        correctAnswers: ["berbunga", "majemuk"],
        explanation: "Bunga berbunga membuat total kewajiban utang membengkak eksponensial dalam waktu singkat.",
        hint: "Kata ulang dari bunga."
      },
      {
        id: "q-fi-113-4",
        question: "Tiga fitur perangkat ponsel yang secara resmi boleh diakses oleh aplikasi pinjol legal menurut aturan OJK disingkat menjadi akronim Ka-Mi-Lan, yaitu Kamera, Mikrofon, dan _____.",
        correctAnswers: ["Lokasi", "lokasi"],
        explanation: "Pinjol legal hanya berhak mengakses kamera, mikrofon, dan lokasi pengguna, dilarang mengakses kontak.",
        hint: "Titik koordinat geografis tempat berada."
      },
      {
        id: "q-fi-113-5",
        question: "Jangka waktu berlakunya pinjaman atau masa angsuran pembayaran utang disebut masa _____ pinjaman.",
        correctAnswers: ["tenor", "Tenor"],
        explanation: "Pinjol ilegal sering memangkas tenor secara sepihak menjadi 7 hari padahal menjanjikan 30 hari.",
        hint: "Kata serapan perbankan lima huruf berawalan T."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-113-1",
        statement: "Aplikasi pinjaman online ilegal beroperasi secara resmi dengan surat izin resmi dari Bank Indonesia dan OJK.",
        isTrue: false,
        explanation: "Salah. Pinjol ilegal beroperasi tanpa izin resmi dan melanggar hukum perundang-undangan."
      },
      {
        id: "q-tf-113-2",
        statement: "Aplikasi pinjol resmi yang diawasi OJK dilarang menyedot dan mengakses daftar buku kontak telepon pengguna.",
        isTrue: true,
        explanation: "Benar. Regulasi membatasi izin akses gawai hanya pada kamera, mikrofon, dan lokasi (Camilan)."
      },
      {
        id: "q-tf-113-3",
        statement: "Penagih utang pinjol ilegal kerap menggunakan metode intimidasi psikologis dan pencemaran nama baik debitur.",
        isTrue: true,
        explanation: "Benar. Teror kontak dan ancaman fitnah merupakan modus penagihan keji pinjol ilegal."
      },
      {
        id: "q-tf-113-4",
        statement: "Masyarakat sebaiknya meminjam ke pinjol ilegal untuk melunasi utang lama demi mendapatkan bunga lebih murah.",
        isTrue: false,
        explanation: "Salah. Gali lubang tutup lubang di pinjol ilegal justru melipatgandakan jeratan utang secara destruktif."
      },
      {
        id: "q-tf-113-5",
        statement: "Mengecek legalitas suatu perusahaan pinjaman di laman resmi OJK merupakan langkah penting sebelum mengajukan kredit.",
        isTrue: true,
        explanation: "Benar. Memastikan izin usaha di OJK melindungi konsumen dari praktik pemerasan rentenir digital."
      }
    ]
  },
  {
    id: "id-art-114",
    title: "Perangkap 'Gaya Hidup Inflasi': Mengapa Kenaikan Gaji Kerap Tidak Berujung Kekayaan",
    category: "Finansial",
    topic: "Psikologi Uang & Perilaku Konsumsi",
    subTopic: "Inflasi Gaya Hidup & Jebakan Hedonisme",
    source: "Asosiasi Perencana Keuangan Indonesia & Behavioral Finance Institute",
    sourceUrl: "https://fpsbindonesia.net",
    wordCount: 460,
    estimatedMinutes: 3,
    content: [
      "Banyak pekerja profesional mengeluhkan bahwa meskipun penghasilan bulanan mereka telah meningkat dua hingga tiga kali lipat dibandingkan masa awal merintis karier, saldo tabungan dan aset bersih mereka tetap tidak bertambah secara signifikan. Fenomena psikologis dan finansial yang melandasi kondisi ini dikenal sebagai 'inflasi gaya hidup' (*lifestyle creep*).",
      "Inflasi gaya hidup terjadi ketika kenaikan pendapatan secara otomatis diiringi oleh peningkatan pengeluaran konsumtif yang dipandang sebagai 'kebutuhan baru'. Pakaian bermerek, rutinitas makan di restoran mewah setiap akhir pekan, gonta-ganti model gawai terbaru, hingga peningkatan cicilan kendaraan bermotor menyedot seluruh surplus penghasilan yang seharusnya dapat dialokasikan ke pos investasi.",
      "Konsep psikologi menjelaskan hal ini melalui mekanisme adaptasi hedonik (*hedonic treadmill*): manusia memiliki kecenderungan cepat terbiasa dengan tingkat kenyamanan baru dan menganggap kemewahan kemarin sebagai standar minimal hari ini. Kebahagiaan dari barang baru hanya bertahan sesaat, mendorong seseorang berbelanja lebih banyak demi mempertahankan sensasi kepuasan yang sama.",
      "Untuk menangkal jeratan ini, pakar keuangan menyarankan strategi 'menabung di awal' (*pay yourself first*). Setiap kali menerima kenaikan upah atau bonus tahunan, minimal 50 persen dari selisih kenaikan tersebut harus langsung dikunci ke instrumen investasi otomatis sebelum menyentuh rekening belanja harian."
    ],
    fillInQuestions: [
      {
        id: "q-fi-114-1",
        question: "Kondisi di mana pengeluaran konsumtif seseorang meningkat sebanding dengan kenaikan gajinya disebut inflasi gaya _____.",
        correctAnswers: ["hidup", "lifestyle creep"],
        explanation: "Inflasi gaya hidup (lifestyle creep) menghabiskan surplus dana yang seharusnya dapat ditabung.",
        hint: "Kata setelah 'gaya' dalam konteks perilaku keseharian."
      },
      {
        id: "q-fi-114-2",
        question: "Kecenderungan manusia cepat kembali ke tingkat kebahagiaan dasar setelah mengalami peristiwa positif disebut adaptasi _____.",
        correctAnswers: ["hedonik", "Hedonik", "hedonisme"],
        explanation: "Adaptasi hedonik membuat seseorang terus merasa kurang puas terhadap barang konsumsi.",
        hint: "Berasal dari kata hedon atau pengejaran kesenangan indrawi."
      },
      {
        id: "q-fi-114-3",
        question: "Prinsip menabung dengan menyisihkan uang investasi di awal saat hari gajian tiba disebut pay yourself _____.",
        correctAnswers: ["first", "First"],
        explanation: "Pay yourself first memastikan tabungan diprioritaskan sebelum uang dipakai belanja kebutuhan lain.",
        hint: "Kata bahasa Inggris bermakna pertama atau terdahulu."
      },
      {
        id: "q-fi-114-4",
        question: "Kelebihan dana bersih antara total pendapatan dengan total biaya kebutuhan hidup pokok disebut dana _____ kas.",
        correctAnswers: ["surplus", "Surplus"],
        explanation: "Surplus kas bulanan merupakan bahan bakar utama untuk memperbesar portofolio investasi.",
        hint: "Lawan dari kata defisit."
      },
      {
        id: "q-fi-114-5",
        question: "Total nilai kepemilikan seluruh harta seseorang dikurangi dengan total kewajiban seluruh utangnya disebut kekayaan _____.",
        correctAnswers: ["bersih", "net worth"],
        explanation: "Kekayaan bersih (net worth) merupakan tolak ukur kesehatan finansial yang sesungguhnya.",
        hint: "Lawan dari kata kotor."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-114-1",
        statement: "Kenaikan gaji bulanan secara otomatis menjamin seseorang pasti akan menjadi kaya raya tanpa perlu berinvestasi.",
        isTrue: false,
        explanation: "Salah. Tanpa pengendalian diri, kenaikan gaji kerap habis tersedot oleh inflasi gaya hidup konsumtif."
      },
      {
        id: "q-tf-114-2",
        statement: "Adaptasi hedonik menjelaskan mengapa kepuasan membeli barang mewah baru cepat pudar setelah beberapa waktu.",
        isTrue: true,
        explanation: "Benar. Pikiran manusia cepat terbiasa dengan standar kenyamanan baru sehingga memicu belanja terus-menerus."
      },
      {
        id: "q-tf-114-3",
        statement: "Metode 'pay yourself first' menganjurkan seseorang untuk menghabiskan seluruh gaji baru menabung sisanya jika masih ada.",
        isTrue: false,
        explanation: "Salah. Pay yourself first mengharuskan menyisihkan uang tabungan di awal begitu gaji diterima."
      },
      {
        id: "q-tf-114-4",
        statement: "Mengunci 50 persen dari selisih kenaikan gaji ke dalam tabungan investasi adalah langkah ampuh meredam lifestyle creep.",
        isTrue: true,
        explanation: "Benar. Strategi ini memastikan peningkatan penghasilan riil berbuah pada pertumbuhan akumulasi aset."
      },
      {
        id: "q-tf-114-5",
        statement: "Kekayaan bersih (net worth) dihitung dengan menjumlahkan utang kartu kredit dan cicilan kendaraan.",
        isTrue: false,
        explanation: "Salah. Kekayaan bersih dihitung dari total aset dikurangi total utang."
      }
    ]
  },
  {
    id: "id-art-115",
    title: "Peran Surat Berharga Negara (SBN) Ritel sebagai Investasi Aman Bebas Risiko Gagal Bayar",
    category: "Finansial",
    topic: "Pasar Modal & Obligasi Negara",
    subTopic: "SBN Ritel & Pembiayaan Pembangunan",
    source: "Direktorat Jenderal Pengelolaan Pembiayaan dan Risiko (DJPPR) Kementerian Keuangan",
    sourceUrl: "https://kemenkeu.go.id",
    wordCount: 465,
    estimatedMinutes: 3,
    content: [
      "Bagi masyarakat awam yang ingin memulai langkah investasi namun mencemaskan risiko fluktuasi pasar saham, Surat Berharga Negara (SBN) Ritel menjadi salah satu instrumen yang paling direkomendasikan. SBN Ritel adalah surat utang yang diterbitkan oleh Pemerintah Republik Indonesia khusus untuk investor individu warga negara Indonesia, seperti seri Sukuk Tabungan (ST), Obligasi Negara Ritel (ORI), dan Sukuk Ritel (SR).",
      "Keunggulan mutlak instrumen ini terletak pada faktor keamanannya. Pokok investasi dan kupon imbalan SBN dijamin penuh seratus persen oleh negara melalui undang-undang APBN, sehingga instrumen ini secara teoritis bebas dari risiko gagal bayar (*zero default risk*). Selain itu, imbal hasil yang ditawarkan pemerintah umumnya lebih tinggi daripada rata-rata suku bunga deposito bank milik negara, dengan tarif pajak kupon hanya 10 persen (jauh lebih rendah dari pajak bunga deposito yang mencapai 20 persen).",
      "Pemerintah menawarkan dua jenis kupon: kupon tetap (*fixed rate*) yang nilainya tidak berubah hingga jatuh tempo, serta kupon mengambang dengan batas minimal (*floating with floor*) yang dapat naik jika suku bunga acuan Bank Indonesia dinaikkan, namun tidak akan turun di bawah batas lantai yang ditetapkan saat penerbitan.",
      "Dengan membeli SBN Ritel mulai dari nominal satu juta rupiah, masyarakat tidak hanya mengamankan nilai uang dari inflasi, tetapi juga berpartisipasi langsung membiayai pembangunan infrastruktur nasional secara patriotik."
    ],
    fillInQuestions: [
      {
        id: "q-fi-115-1",
        question: "Surat pengakuan utang yang diterbitkan resmi oleh pemerintah Indonesia khusus untuk warga negara ritel disingkat _____ Ritel.",
        correctAnswers: ["SBN", "sbn"],
        explanation: "SBN (Surat Berharga Negara) ritel diterbitkan untuk mendiversifikasi pembiayaan APBN.",
        hint: "Singkatan tiga huruf: S-B-N."
      },
      {
        id: "q-fi-115-2",
        question: "Surat berharga negara yang diterbitkan berdasarkan prinsip dan akad syariah Islam disebut _____ Ritel.",
        correctAnswers: ["Sukuk", "sukuk"],
        explanation: "Sukuk diterbitkan dengan akad syariah seperti ijarah dan bebas dari unsur riba.",
        hint: "Istilah keuangan syariah berawalan huruf S."
      },
      {
        id: "q-fi-115-3",
        question: "Imbalan bunga periodik yang dibayarkan pemerintah setiap bulan kepada pemilik surat utang negara disebut imbalan _____.",
        correctAnswers: ["kupon", "Kupon"],
        explanation: "Kupon SBN ditransfer langsung ke rekening investor setiap tanggal yang telah ditentukan per bulan.",
        hint: "Kata serapan dari istilah perbankan obligasi 'coupon'."
      },
      {
        id: "q-fi-115-4",
        question: "Risiko di mana penerbit surat utang tidak mampu membayar kembali pokok atau bunga pinjaman disebut risiko gagal _____.",
        correctAnswers: ["bayar", "default"],
        explanation: "SBN dijamin undang-undang sehingga bebas dari risiko gagal bayar.",
        hint: "Aktivitas melunasi tagihan uang."
      },
      {
        id: "q-fi-115-5",
        question: "Tarif pajak penghasilan atas imbal hasil kupon obligasi negara untuk investor domestik adalah sebesar _____ persen.",
        correctAnswers: ["10", "sepuluh"],
        explanation: "Pemerintah menetapkan pajak kupon obligasi sebesar 10%, lebih menguntungkan dari pajak deposito sebesar 20%.",
        hint: "Angka setelah sembilan."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-115-1",
        statement: "SBN Ritel dijamin oleh undang-undang sehingga pokok dan imbal hasilnya bebas dari risiko gagal bayar negara.",
        isTrue: true,
        explanation: "Benar. Pembayaran pokok dan kupon SBN dijamin sepenuhnya dalam alokasi APBN."
      },
      {
        id: "q-tf-115-2",
        statement: "Pajak atas kupon obligasi SBN Ritel jauh lebih tinggi daripada pajak bunga deposito perbankan.",
        isTrue: false,
        explanation: "Salah. Pajak kupon SBN hanya 10 persen, sedangkan pajak bunga deposito mencapai 20 persen."
      },
      {
        id: "q-tf-115-3",
        statement: "Kupon jenis 'floating with floor' akan turun nilainya hingga menjadi nol jika suku bunga perbankan anjlok.",
        isTrue: false,
        explanation: "Salah. Kupon floating with floor memiliki batas lantai minimal yang tidak akan turun di bawah kesepakatan awal."
      },
      {
        id: "q-tf-115-4",
        statement: "Dana hasil penjualan SBN Ritel digunakan oleh pemerintah untuk membiayai proyek pembangunan infrastruktur dan pendidikan.",
        isTrue: true,
        explanation: "Benar. Penerbitan SBN merupakan sumber pembiayaan mandiri APBN untuk pembangunan negeri."
      },
      {
        id: "q-tf-115-5",
        statement: "Untuk membeli SBN Ritel, investor wajib menyiapkan modal minimal sebesar seratus miliar rupiah secara tunai.",
        isTrue: false,
        explanation: "Salah. SBN Ritel dirancang terjangkau bagi masyarakat luas mulai dari nominal satu juta rupiah."
      }
    ]
  },
  {
    id: "id-art-116",
    title: "Literasi Asuransi Kesehatan Murni vs Unit Link: Menghindari Kekeliruan Proteksi",
    category: "Finansial",
    topic: "Manajemen Risiko & Asuransi",
    subTopic: "Asuransi Tradisional vs Asuransi Investasi",
    source: "Asosiasi Asuransi Jiwa Indonesia (AAJI) & Otoritas Jasa Keuangan",
    sourceUrl: "https://aaji.or.id",
    wordCount: 470,
    estimatedMinutes: 3,
    content: [
      "Banyak masyarakat di Indonesia masih mengalami kekecewaan mendalam terhadap produk asuransi. Sebagian besar keluhan konsumen yang masuk ke OJK berakar dari ketidakpahaman atas perbedaan mendasar antara asuransi kesehatan murni (*traditional/pure insurance*) dan asuransi yang dikaitkan dengan investasi (*unit link*).",
      "Asuransi kesehatan tradisional bekerja dengan prinsip murni proteksi: nasabah membayar premi berkala untuk membeli proteksi medis selama kurun waktu tertentu. Jika tidak ada klaim sakit, premi tersebut 'hangus'. Karena fokus murni pada perlindungan, premi asuransi tradisional cenderung lebih terjangkau dan memberikan manfaat pertanggungan limit medis rumah sakit (*cashless on-bill*) yang sangat tinggi.",
      "Sebaliknya, produk unit link memecah premi bulanan nasabah menjadi dua kantong: satu untuk biaya proteksi dan biaya akuisisi perusahaan, dan sebagian lainnya ditempatkan pada reksa dana saham atau obligasi. Agen pemasaran kerap mempromosikan janji manis bahwa premi unit link 'tidak akan hangus' dan nasabah bisa 'cuti premi' di masa depan.",
      "Kenyataannya, ketika kinerja pasar modal anjlok, nilai tunai investasi unit link dapat tergerus habis untuk menutupi kenaikan biaya asuransi seiring bertambahnya usia nasabah. Akibatnya, polis asuransi terancam gugur (*lapse*) jika nasabah tidak menyetor dana tambahan.",
      "Masyarakat bijak sebaiknya memisahkan fungsi proteksi dan investasi: beli asuransi murni untuk perlindungan jiwa dan kesehatan, lalu investasikan dana sisa secara mandiri pada instrumen pasar modal."
    ],
    fillInQuestions: [
      {
        id: "q-fi-116-1",
        question: "Produk asuransi yang menggabungkan proteksi perlindungan diri dengan penempatan dana pada portofolio investasi disebut unit _____.",
        correctAnswers: ["link", "Link"],
        explanation: "Unit link (PAYDI) membagi porsi premi untuk proteksi dan investasi pasar modal.",
        hint: "Kata bahasa Inggris bermakna tautan atau sambungan."
      },
      {
        id: "q-fi-116-2",
        question: "Uang berkala yang wajib dibayarkan oleh pemegang polis kepada perusahaan asuransi untuk mendapatkan pertanggungan disebut uang _____.",
        correctAnswers: ["premi", "Premi"],
        explanation: "Premi merupakan biaya kewajiban nasabah agar polis asuransi tetap aktif terlindungi.",
        hint: "Kata serapan perasuransian berawalan huruf P."
      },
      {
        id: "q-fi-116-3",
        question: "Kondisi di mana status polis asuransi berhenti atau mati karena premi tidak dibayar atau nilai tunai habis disebut _____.",
        correctAnswers: ["lapse", "Lapse", "hangus"],
        explanation: "Kondisi lapse menyebabkan nasabah kehilangan hak klaim penggantian biaya rumah sakit.",
        hint: "Istilah serapan bahasa Inggris 5 huruf berawalan L."
      },
      {
        id: "q-fi-116-4",
        question: "Kemudahan klaim rumah sakit di mana nasabah cukup menunjukkan kartu asuransi tanpa perlu membayar tunai di muka disebut sistem _____.",
        correctAnswers: ["cashless", "Cashless", "nontunai"],
        explanation: "Sistem cashless mempermudah penanganan darurat tanpa repot menyiapkan uang tunai di muka.",
        hint: "Kata bahasa Inggris bermakna tanpa uang tunai."
      },
      {
        id: "q-fi-116-5",
        question: "Biaya yang dipotong perusahaan asuransi dari premi nasabah di tahun-tahun awal untuk komisi agen dan operasional disebut biaya _____.",
        correctAnswers: ["akuisisi", "Akuisisi"],
        explanation: "Biaya akuisisi pada unit link di tahun awal sangat besar sehingga nilai tunai investasi lambat terbentuk.",
        hint: "Proses perolehan nasabah baru."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-116-1",
        statement: "Asuransi kesehatan tradisional menjamin bahwa seluruh uang premi yang disetor pasti kembali beserta keuntungan bunga seratus persen.",
        isTrue: false,
        explanation: "Salah. Premi asuransi tradisional hangus jika tidak ada klaim sakit karena murni untuk membeli perlindungan risiko."
      },
      {
        id: "q-tf-116-2",
        statement: "Pada produk unit link, sebagian premi nasabah dipotong untuk ditempatkan pada instrumen pasar modal.",
        isTrue: true,
        explanation: "Benar. Unit link membagi premi menjadi porsi biaya asuransi dan porsi investasi."
      },
      {
        id: "q-tf-116-3",
        statement: "Polis unit link dapat mengalami 'lapse' apabila nilai tunai investasi tidak mencukupi untuk membayar kenaikan biaya asuransi.",
        isTrue: true,
        explanation: "Benar. Penurunan pasar saham dapat menguras nilai tunai hingga polis mati jika premi tidak ditambah."
      },
      {
        id: "q-tf-116-4",
        statement: "Strategi memisahkan asuransi murni dan investasi mandiri direkomendasikan para pakar independen untuk efisiensi biaya.",
        isTrue: true,
        explanation: "Benar. Membeli proteksi murni dan berinvestasi sendiri memberi kontrol penuh dan biaya yang lebih transparan."
      },
      {
        id: "q-tf-116-5",
        statement: "Biaya akuisisi pada produk unit link di tahun-tahun pertama bernilai nol rupiah tanpa potongan sama sekali.",
        isTrue: false,
        explanation: "Salah. Biaya akuisisi di tahun-tahun awal unit link justru sangat tinggi untuk komisi penjualan."
      }
    ]
  },
  {
    id: "id-art-117",
    title: "Sandwich Generation: Strategi Memutus Rantai Beban Finansial Ganda Antargenerasi",
    category: "Finansial",
    topic: "Dinamika Finansial Keluarga",
    subTopic: "Generasi Roti Lapis & Perencanaan Hari Tua",
    source: "Lembaga Demografi FEB Universitas Indonesia & Otoritas Jasa Keuangan",
    sourceUrl: "https://ldfebui.org",
    wordCount: 475,
    estimatedMinutes: 3,
    content: [
      "Istilah 'generasi roti lapis' (*sandwich generation*)—pertama kali diperkenalkan oleh sosiolog Dorothy Miller—kini menjadi kenyataan pahit bagi jutaan kelas pekerja muda di Indonesia. Generasi ini terhimpit secara finansial di antara dua lapis tanggung jawab ganda: harus membiayai masa depan anak-anak mereka sendiri, sembari di saat yang sama menanggung biaya hidup dan pengobatan orang tua yang memasuki usia senja tanpa tabungan pensiun memadai.",
      "Kondisi ini lahir dari rapuhnya budaya perencanaan masa pensiun pada generasi terdahulu, di mana anak sering kali dianggap sebagai 'dana pensiun berjalan' atau aset investasi hari tua. Tanpa jaminan dana pensiun dan asuransi kesehatan mandiri, beban medis kronis orang tua menyedot tabungan pekerja muda, menghalangi mereka membeli rumah tinggal atau menyiapkan dana pendidikan keturunannya.",
      "Memutus rantai transmisi beban antargenerasi ini menuntut langkah-langkah dekonstruksi yang realistis. Pertama, membangun komunikasi keuangan keluarga yang transparan dan bebas dari rasa bersalah. Kedua, mendaftarkan seluruh anggota keluarga ke dalam jaminan kesehatan nasional BPJS Kesehatan untuk memitigasi risiko biaya rumah sakit katastropik.",
      "Yang terpenting, generasi saat ini wajib memprioritaskan tabungan hari tua mereka sendiri melalui dana pensiun lembaga keuangan, agar anak-anak mereka di masa depan terbebas dari siklus himpitan finansial serupa."
    ],
    fillInQuestions: [
      {
        id: "q-fi-117-1",
        question: "Kelompok orang dewasa yang menanggung biaya hidup orang tua sekaligus anak kandung mereka disebut generasi roti _____.",
        correctAnswers: ["lapis", "sandwich", "Sandwich"],
        explanation: "Sandwich generation menggambarkan himpitan peran finansial antara generasi atas dan bawah.",
        hint: "Kata bahasa Indonesia untuk hidangan roti berlapis daging/sayur."
      },
      {
        id: "q-fi-117-2",
        question: "Program jaminan sosial kesehatan wajib dari pemerintah Indonesia yang menjadi benteng biaya medis keluarga adalah BPJS _____.",
        correctAnswers: ["Kesehatan", "kesehatan"],
        explanation: "BPJS Kesehatan menanggung biaya medis penyakit kronis dan operasi berat bagi seluruh peserta.",
        hint: "Keadaan sehat jasmani dan rohani."
      },
      {
        id: "q-fi-117-3",
        question: "Penyakit kritis dengan biaya perawatan rumah sakit sangat mahal yang berpotensi memicu kebangkrutan keluarga disebut penyakit _____.",
        correctAnswers: ["katastropik", "Katastropik"],
        explanation: "Penyakit katastropik seperti jantung dan kanker membutuhkan penanganan medis berbiaya tinggi.",
        hint: "Berasal dari kata katastrofe atau bencana besar."
      },
      {
        id: "q-fi-117-4",
        question: "Sosiolog yang pertama kali mempopulerkan istilah 'sandwich generation' pada tahun 1981 adalah Dorothy _____.",
        correctAnswers: ["Miller", "miller"],
        explanation: "Dorothy Miller mengidentifikasi fenomena beban ganda pengasuhan pada wanita paruh baya.",
        hint: "Nama keluarga sarjana berawalan huruf M."
      },
      {
        id: "q-fi-117-5",
        question: "Wadah tabungan khusus jangka panjang yang dirancang untuk menjamin kemandirian biaya hidup di masa tua disebut dana _____.",
        correctAnswers: ["pensiun", "Pensiun"],
        explanation: "Kepemilikan dana pensiun mandiri mencegah orang tua menjadi beban finansial bagi anaknya.",
        hint: "Masa berhenti bekerja setelah mencapai usia lanjut."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-117-1",
        statement: "Sandwich generation merujuk pada komunitas pecinta usaha kuliner roti isi daging lapis di perkotaan.",
        isTrue: false,
        explanation: "Salah. Sandwich generation adalah istilah sosiologis bagi orang yang menanggung nafkah orang tua dan anak sekaligus."
      },
      {
        id: "q-tf-117-2",
        statement: "Anggapan bahwa anak kandung adalah aset investasi hari tua turut melanggengkan siklus sandwich generation.",
        isTrue: true,
        explanation: "Benar. Pola pikir ini membuat orang tua abai menyiapkan dana pensiun dan asuransi hari tuanya sendiri."
      },
      {
        id: "q-tf-117-3",
        statement: "Mendaftarkan orang tua ke BPJS Kesehatan dapat memitigasi risiko biaya pengobatan medis yang dapat menguras tabungan anak.",
        isTrue: true,
        explanation: "Benar. Jaminan kesehatan nasional melindungi keluarga dari kebangkrutan akibat biaya rawat inap mahal."
      },
      {
        id: "q-tf-117-4",
        statement: "Untuk memutus rantai generasi roti lapis, orang tua masa kini tidak perlu menyiapkan dana pensiun sama sekali.",
        isTrue: false,
        explanation: "Salah. Menyiapkan dana pensiun mandiri adalah syarat mutlak agar anak tidak terbebani di masa depan."
      },
      {
        id: "q-tf-117-5",
        statement: "Komunikasi terbuka mengenai batasan anggaran keluarga diperlukan agar beban finansial tidak memicu stres mental.",
        isTrue: true,
        explanation: "Benar. Diskusi keuangan yang jujur dan rasional membantu menetapkan prioritas pemenuhan kebutuhan."
      }
    ]
  },
  {
    id: "id-art-118",
    title: "Menghitung Rasio Utang Produktif vs Konsumtif: Ambang Batas Aman DSR (Debt Service Ratio)",
    category: "Finansial",
    topic: "Manajemen Utang & Analisis Kredit",
    subTopic: "Rasio Pelunasan Utang & Skor Kredit",
    source: "Bank Indonesia & Certified Financial Planner (CFP) Board Indonesia",
    sourceUrl: "https://bi.go.id",
    wordCount: 465,
    estimatedMinutes: 3,
    content: [
      "Utang dalam dunia finansial ibarat api: jika dikendalikan dengan perhitungan cermat, ia dapat menjadi pengungkit (*leverage*) untuk mengakumulasi aset produktif. Namun jika digunakan secara serampangan untuk membiayai konsumsi sesaat, ia akan membakar seluruh stabilitas ekonomi rumah tangga hingga menyisakan abu kebangkrutan.",
      "Para perencana keuangan membedakan utang ke dalam dua kategori fundamental: utang produktif dan utang konsumtif. Utang produktif digunakan untuk membeli aset yang berpotensi menghasilkan arus kas (*cash flow*) atau mengalami apresiasi nilai di masa depan, seperti kredit kepemilikan rumah (KPR) atau modal kerja usaha. Sebaliknya, utang konsumtif digunakan untuk membeli barang habis pakai yang nilainya langsung terdepresiasi seketika, seperti kredit gawai mewah, cicilan liburan, atau fitur *buy now pay later* (BNPL).",
      "Untuk menjaga kesehatan anggaran, masyarakat wajib memantau indikator *Debt Service Ratio* (DSR), yaitu perbandingan total cicilan utang bulanan terhadap total penghasilan bersih bulanan. Standar industri perbankan yang sehat menetapkan ambang batas maksimal DSR sebesar 30 hingga 35 persen.",
      "Jika cicilan utang seseorang telah melampaui 40 persen dari pendapatan, orang tersebut telah memasuki zona bahaya finansial dan rentan mengalami gagal bayar jika terjadi kenaikan suku bunga kredit mengambang."
    ],
    fillInQuestions: [
      {
        id: "q-fi-118-1",
        question: "Indikator keuangan yang mengukur persentase total cicilan bulanan terhadap total pendapatan bulanan disingkat _____ (Debt Service Ratio).",
        correctAnswers: ["DSR", "dsr"],
        explanation: "Debt Service Ratio (DSR) digunakan bank untuk menilai kemampuan bayar calon debitur.",
        hint: "Singkatan tiga huruf: D-S-R."
      },
      {
        id: "q-fi-118-2",
        question: "Ambang batas maksimal cicilan utang bulanan yang dianggap sehat bagi neraca keuangan keluarga adalah _____ persen.",
        correctAnswers: ["30", "35", "tiga puluh"],
        explanation: "Pakar keuangan menyarankan total cicilan utang tidak melampaui 30-35 persen pendapatan bulanan.",
        hint: "Angka antara 30 dan 40."
      },
      {
        id: "q-fi-118-3",
        question: "Utang yang digunakan untuk membeli aset yang nilainya bertambah atau menghasilkan arus kas disebut utang _____.",
        correctAnswers: ["produktif", "Produktif"],
        explanation: "Utang produktif seperti KPR atau modal usaha mampu meningkatkan nilai kekayaan bersih di masa depan.",
        hint: "Mampu menghasilkan nilai atau produksi baru."
      },
      {
        id: "q-fi-118-4",
        question: "Layanan pembiayaan digital instan belanja daring yang memungkinkan konsumen menunda pembayaran belanjaan disebut pay-_____ (BNPL).",
        correctAnswers: ["later", "Later"],
        explanation: "Fitur PayLater kerap memicu perilaku belanja impulsif konsumtif jika tidak diawasi.",
        hint: "Kata bahasa Inggris untuk kata 'nanti'."
      },
      {
        id: "q-fi-118-5",
        question: "Penurunan nilai ekonomis suatu barang konsumsi dari waktu ke waktu disebut peristiwa _____ nilai.",
        correctAnswers: ["depresiasi", "penyusutan", "Depresiasi"],
        explanation: "Barang elektronik dan mobil mengalami depresiasi nilai yang cepat begitu keluar dari toko.",
        hint: "Istilah ekonomi untuk penyusutan nilai aset."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-118-1",
        statement: "Total cicilan utang bulanan sebesar 70 persen dari gaji masih dikategorikan sangat aman oleh perbankan konvensional.",
        isTrue: false,
        explanation: "Salah. Cicilan di atas 40 persen berada dalam zona bahaya tinggi yang rentan memicu gagal bayar."
      },
      {
        id: "q-tf-118-2",
        statement: "Kredit Pemilikan Rumah (KPR) dikategorikan sebagai contoh utang produktif karena tanah dan bangunan berpotensi naik nilainya.",
        isTrue: true,
        explanation: "Benar. Properti merupakan aset jangka panjang yang nilainya cenderung terapresiasi seiring waktu."
      },
      {
        id: "q-tf-118-3",
        statement: "Utang konsumtif adalah pinjaman yang digunakan untuk membeli barang habis pakai yang nilainya langsung menyusut.",
        isTrue: true,
        explanation: "Benar. Utang konsumtif membeli barang yang tidak menghasilkan pendapatan di masa depan."
      },
      {
        id: "q-tf-118-4",
        statement: "Konsep leverage berarti menggunakan seluruh uang pinjaman rentenir untuk berjudi di kasino luar negeri.",
        isTrue: false,
        explanation: "Salah. Leverage adalah pengungkit modal secara terukur untuk memperbesar aset bisnis produktif."
      },
      {
        id: "q-tf-118-5",
        statement: "Kenaikan suku bunga pinjaman mengambang dapat menaikkan jumlah angsuran bulanan yang harus dibayar debitur.",
        isTrue: true,
        explanation: "Benar. Suku bunga mengambang mengikuti pergerakan suku bunga acuan pasar."
      }
    ]
  },
  {
    id: "id-art-119",
    title: "Perencanaan Waris dan Distribusi Harta Finansial: Menghindari Konflik Antarkeluarga",
    category: "Finansial",
    topic: "Hukum Waris & Perencanaan Harta",
    subTopic: "Surat Wasiat & Mitigasi Sengketa Warisan",
    source: "Ikatan Notaris Indonesia (INI) & Mahkamah Agung Republik Indonesia",
    sourceUrl: "https://mahkamahagung.go.id",
    wordCount: 460,
    estimatedMinutes: 3,
    content: [
      "Membicarakan kematian dan pembagian warisan masih kerap dianggap tabu dalam kultur masyarakat Indonesia. Kebanyakan orang enggan mendiskusikan nasib aset mereka karena khawatir dianggap mendoakan kematian atau memicu ketegangan di antara anak-anak. Namun, sikap abai ini menjadi pemicu utama meletusnya sengketa hukum perdata yang menghancurkan kerukunan keluarga ketika orang tua berpulang tanpa meninggalkan kejelasan pembagian aset.",
      "Perencanaan waris (*estate planning*) adalah tindakan hukum dan finansial yang bijaksana untuk memastikan transisi pemindahan kekayaan berlangsung tertib, damai, dan adil. Di Indonesia, hukum waris diatur melalui tiga sistem hukum yang berlaku berdampingan: Hukum Waris Islam (Kompilasi Hukum Islam) bagi pemeluk agama Islam, Hukum Perdata Barat (BW/KUHPerdata) bagi warga non-Muslim dan keturunan Tionghoa, serta Hukum Adat setempat.",
      "Langkah awal perencanaan waris mencakup inventarisasi seluruh aset likuid, tanah bersertifikat, saham bisnis, hingga kewajiban utang piutang. Membuat surat wasiat otentik di hadapan Notaris memastikan keabsahan dokumen di mata hukum serta membatasi perselisihan interpretasi di pengadilan.",
      "Selain surat wasiat, pemanfaatan asuransi jiwa dapat berfungsi sebagai dana likuiditas cepat bagi ahli waris untuk melunasi biaya administrasi balik nama sertifikat atau membayar sisa utang almarhum tanpa perlu menjual aset properti keluarga secara tergesa-gesa."
    ],
    fillInQuestions: [
      {
        id: "q-fi-119-1",
        question: "Pejabat umum yang berwenang membuat akta otentik surat wasiat warisan yang diakui sah oleh negara adalah _____.",
        correctAnswers: ["notaris", "Notaris"],
        explanation: "Akta wasiat yang dibuat di hadapan notaris memiliki kekuatan pembuktian hukum yang sempurna.",
        hint: "Profesi hukum berawalan huruf N."
      },
      {
        id: "q-fi-119-2",
        question: "Surat pernyataan resmi seseorang tentang apa yang dikehendakinya terhadap harta kekayaannya setelah meninggal dunia disebut surat _____.",
        correctAnswers: ["wasiat", "Wasiat"],
        explanation: "Surat wasiat memuat kehendak pewaris mengenai pembagian porsi aset miliknya.",
        hint: "Pesan terakhir orang tua terkait harta benda."
      },
      {
        id: "q-fi-119-3",
        question: "Orang yang berhak menerima bagian harta peninggalan dari orang yang meninggal dunia disebut ahli _____.",
        correctAnswers: ["waris", "Waris"],
        explanation: "Ahli waris berhak menerima harta warisan sesuai ketentuan hukum yang berlaku.",
        hint: "Penerima hak atas harta peninggalan leluhur."
      },
      {
        id: "q-fi-119-4",
        question: "Hukum waris bagi umat Islam di pengadilan agama Indonesia dihimpun dalam kitab Kompilasi Hukum _____ (KHI).",
        correctAnswers: ["Islam", "islam"],
        explanation: "KHI menjadi pedoman hakim peradilan agama dalam memutus sengketa waris Islam di Indonesia.",
        hint: "Agama mayoritas di Indonesia."
      },
      {
        id: "q-fi-119-5",
        question: "Pencatatan daftar seluruh kekayaan dan utang yang dimiliki seseorang secara rinci dan teratur disebut proses _____ aset.",
        correctAnswers: ["inventarisasi", "Inventarisasi", "inventaris"],
        explanation: "Inventarisasi aset memudahkan ahli waris mengetahui rekam jejak kepemilikan harta peninggalan.",
        hint: "Berasal dari kata inventaris atau pendaftaran barang."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-119-1",
        statement: "Perencanaan waris hanya perlu dilakukan oleh konglomerat pemilik pulau pribadi bernilai triliunan rupiah.",
        isTrue: false,
        explanation: "Salah. Setiap keluarga yang memiliki aset tanah atau tabungan perlu merencanakan waris demi mencegah perpecahan saudara."
      },
      {
        id: "q-tf-119-2",
        statement: "Di Indonesia, sistem pembagian waris diatur melalui hukum Islam, hukum perdata barat (BW), dan hukum adat.",
        isTrue: true,
        explanation: "Benar. Ketiga sistem hukum ini berlaku sesuai latar belakang agama dan kehendak para pihak."
      },
      {
        id: "q-tf-119-3",
        statement: "Akta wasiat otentik yang ditandatangani di hadapan Notaris memiliki kekuatan hukum pembuktian yang kuat di pengadilan.",
        isTrue: true,
        explanation: "Benar. Akta notariil meminimalkan risiko pembatalan dan perselisihan di kemudian hari."
      },
      {
        id: "q-tf-119-4",
        statement: "Uang santunan asuransi jiwa dapat dimanfaatkan ahli waris untuk membayar biaya balik nama dan melunasi utang pewaris.",
        isTrue: true,
        explanation: "Benar. Santunan asuransi cair secara likuid tanpa perlu melalui proses pembagian harta yang panjang."
      },
      {
        id: "q-tf-119-5",
        statement: "Kewajiban utang orang yang telah meninggal dunia otomatis hangus dan dilarang dilunasi dari harta peninggalannya.",
        isTrue: false,
        explanation: "Salah. Sebelum warisan dibagikan kepada ahli waris, seluruh kewajiban utang almarhum wajib dilunasi terlebih dahulu."
      }
    ]
  },
  {
    id: "id-art-120",
    title: "Tabungan Pensiun Dini: Memanfaatkan Skema DPLK dan Kekuatan Bunga Berbunga Jangka Panjang",
    category: "Finansial",
    topic: "Perencanaan Pensiun & Investasi",
    subTopic: "DPLK & Bunga Majemuk Hari Tua",
    source: "Dana Pensiun Lembaga Keuangan (DPLK) & Asosiasi Dana Pensiun Indonesia (ADPI)",
    sourceUrl: "https://adpi.or.id",
    wordCount: 465,
    estimatedMinutes: 3,
    content: [
      "Banyak pekerja usia 20-an menganggap masa pensiun sebagai topik yang teramat jauh untuk dipikirkan. Persepsi keliru ini membuat sebagian besar masyarakat menunda menyisihkan tabungan hari tua hingga menginjak usia 40-an. Padahal dalam matematika finansial, aset paling berharga seorang investor muda bukanlah besaran modal yang dimiliki, melainkan waktu (*time horizon*).",
      "Fisikawan Albert Einstein konon menyebut bunga majemuk (*compound interest*) sebagai keajaiban dunia kedelapan: mereka yang memahaminya akan memetik keuntungan, sedangkan mereka yang mengabaikannya akan membayarnya. Ketika seorang pekerja muda menyisihkan satu juta rupiah setiap bulan sejak usia 22 tahun pada portofolio dengan imbal hasil majemuk 10 persen per tahun, akumulasi dana pensiunnya di usia 55 tahun akan melipatgandakan modal jauh melampaui orang yang baru mulai menabung lima juta rupiah per bulan di usia 40 tahun.",
      "Pemerintah Indonesia memfasilitasi persiapan ini melalui instrumen Dana Pensiun Lembaga Keuangan (DPLK) yang didirikan oleh bank atau perusahaan asuransi jiwa. DPLK menawarkan skema penarikan dana teratur yang dikunci hingga usia pensiun normal, memberikan insentif pengurangan pajak penghasilan, serta melindungi dana pensiun dari godaan penarikan konsumtif di tengah jalan.",
      "Menyiapkan pensiun dini bukan berarti berhenti berkarya, melainkan mencapai kemerdekaan finansial (*financial freedom*) di mana seseorang bekerja atas dasar panggilan gairah (*passion*), bukan keterpaksaan memenuhi tagihan hidup."
    ],
    fillInQuestions: [
      {
        id: "q-fi-120-1",
        question: "Lembaga pengelola program pensiun sukarela yang didirikan oleh perbankan atau asuransi jiwa di Indonesia disingkat _____.",
        correctAnswers: ["DPLK", "dplk"],
        explanation: "DPLK (Dana Pensiun Lembaga Keuangan) melayani nasabah individu maupun karyawan korporasi.",
        hint: "Singkatan empat huruf: D-P-L-K."
      },
      {
        id: "q-fi-120-2",
        question: "Konsep pertumbuhan investasi di mana hasil bunga menghasilkan bunga kembali secara berlipat ganda disebut bunga _____.",
        correctAnswers: ["majemuk", "berbunga", "compound interest"],
        explanation: "Bunga majemuk (compound interest) membuat modal berkembang eksponensial dalam jangka panjang.",
        hint: "Lawan dari kata tunggal."
      },
      {
        id: "q-fi-120-3",
        question: "Faktor terpenting yang memaksimalkan efek pertumbuhan bunga majemuk bagi investor muda adalah rentang _____ investasi.",
        correctAnswers: ["waktu", "time horizon"],
        explanation: "Semakin panjang rentang waktu investasi, semakin dahsyat efek penggandaan modal yang dihasilkan.",
        hint: "Satuan detik, menit, jam, atau tahun."
      },
      {
        id: "q-fi-120-4",
        question: "Kondisi di mana seseorang memiliki aset yang menghasilkan arus kas cukup untuk membiayai seluruh kebutuhan hidup tanpa harus bekerja disebut kemerdekaan _____.",
        correctAnswers: ["finansial", "keuangan", "financial freedom"],
        explanation: "Kemerdekaan finansial memberi kebebasan memilih aktivitas tanpa terikat tuntutan gaji bulanan.",
        hint: "Berkenaan dengan urusan keuangan."
      },
      {
        id: "q-fi-120-5",
        question: "Fisikawan penemu teori relativitas yang terkenal mengagumi konsep keajaiban bunga majemuk adalah Albert _____.",
        correctAnswers: ["Einstein", "einstein"],
        explanation: "Albert Einstein memuji kekuatan dahsyat matematika bunga majemuk.",
        hint: "Nama ilmuwan jenius berambut putih mekar berawalan E."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-120-1",
        statement: "Memulai investasi dana pensiun di usia muda memberikan keuntungan eksponensial berkat kerja bunga majemuk.",
        isTrue: true,
        explanation: "Benar. Rentang waktu yang panjang membuat modal awal berkembang berlipat ganda."
      },
      {
        id: "q-tf-120-2",
        statement: "Seseorang yang baru mulai menabung di usia 50 tahun pasti lebih kaya daripada yang menabung sejak usia 20 tahun meskipun modal awalnya sama.",
        isTrue: false,
        explanation: "Salah. Hilangnya faktor waktu puluhan tahun membuat pertumbuhan dana pensiun menjadi sangat terbatas."
      },
      {
        id: "q-tf-120-3",
        statement: "Program DPLK mengunci saldo tabungan hingga nasabah mencapai usia pensiun untuk mencegah penarikan konsumtif.",
        isTrue: true,
        explanation: "Benar. DPLK dirancang khusus untuk memastikan tersedianya jaminan pendapatan di hari tua."
      },
      {
        id: "q-tf-120-4",
        statement: "Pensiun dini bermakna tidur seharian tanpa melakukan aktivitas produktif atau kesenian sama sekali.",
        isTrue: false,
        explanation: "Salah. Pensiun dini berarti kemandirian finansial yang membebaskan individu melakukan karya yang disukai."
      },
      {
        id: "q-tf-120-5",
        statement: "Iuran program pensiun DPLK dapat memberikan manfaat keringanan pengurangan pajak penghasilan bagi peserta.",
        isTrue: true,
        explanation: "Benar. Pemerintah memberikan insentif pajak atas iuran pensiun yang disetor nasabah."
      }
    ]
  },
  {
    id: "id-art-121",
    title: "Psikologi 'FOMO' Pasar Saham: Menghindari Jebakan Pom-pom dan Saham Spekulatif",
    category: "Finansial",
    topic: "Keuangan Perilaku & Pasar Modal",
    subTopic: "FOMO Saham & Manipulasi Pasar",
    source: "Bursa Efek Indonesia (BEI) & Lembaga Keuangan Perilaku Universitas Indonesia",
    sourceUrl: "https://idx.co.id",
    wordCount: 460,
    estimatedMinutes: 3,
    content: [
      "Lonjakan jumlah investor ritel domestik di Bursa Efek Indonesia (BEI) dalam beberapa tahun terakhir menjadi tonggak sejarah penting bagi pendalaman pasar modal nasional. Namun, gelombang antusiasme investor pemula ini diiringi oleh maraknya fenomena psikologis *Fear of Missing Out* (FOMO)—rasa cemas tertinggal melihat tangkapan layar keuntungan ratusan persen yang dipamerkan para pemengaruh (*influencer*) saham di media sosial.",
      "Sindrom FOMO dimanfaatkan secara licik oleh oknum pelaku pasar melalui praktik 'pom-pom saham'. Modus ini dilakukan dengan mempromosikan saham emiten berfundamental buruk dengan narasi bombastis palsu di grup percakapan Telegram berbayar. Ketika harga saham melonjak semu akibat pembelian panik oleh ribuan investor ritel pemula, sang bandar diam-diam menjual seluruh kepemilikan sahamnya (*dumping*), meninggalkan para investor pemula menanggung kerugian telak akibat harga saham yang anjlok ke titik terendah.",
      "Investor cerdas wajib membedakan antara aktivitas investasi yang berorientasi pada nilai intrinsik perusahaan (*value investing*) dan spekulasi judi harian yang mengandalkan rumor. Menganalisis laporan keuangan kuartalan, memeriksa arus kas operasional, serta memahami rasio valuasi seperti PER (*Price to Earnings Ratio*) dan PBV (*Price to Book Value*) adalah kewajiban mutlak.",
      "Disiplin melakukan riset mandiri (*Do Your Own Research*) dan menjaga emosi rasional adalah benteng terkuat seorang investor dari jebakan manipulasi pasar modal."
    ],
    fillInQuestions: [
      {
        id: "q-fi-121-1",
        question: "Sindrom rasa takut dan cemas ketinggalan tren keuntungan finansial yang sedang viral di media sosial disingkat _____.",
        correctAnswers: ["FOMO", "fomo"],
        explanation: "FOMO (Fear of Missing Out) mendorong investor mengambil keputusan tergesa-gesa tanpa analisis logis.",
        hint: "Singkatan empat huruf bahasa Inggris: F-O-M-O."
      },
      {
        id: "q-fi-121-2",
        question: "Praktik menggiring opini publik secara manipulatif agar masyarakat berbondong-bondong membeli saham tertentu disebut praktik saham pom-_____.",
        correctAnswers: ["pom", "Pom"],
        explanation: "Istilah pom-pom saham mengacu pada upaya mengerek harga saham secara semu lewat agitasi media sosial.",
        hint: "Kata ulang tiga huruf seperti alat sorak pemandu sorak cheerleaders."
      },
      {
        id: "q-fi-121-3",
        question: "Lembaga resmi pengelola dan penyelenggara perdagangan efek pasar modal di Indonesia adalah Bursa Efek _____ (BEI).",
        correctAnswers: ["Indonesia", "indonesia"],
        explanation: "Bursa Efek Indonesia (BEI) mengawasi keterbukaan informasi emiten dan perdagangan saham nasional.",
        hint: "Nama negara kepulauan kita tercinta."
      },
      {
        id: "q-fi-121-4",
        question: "Metode investasi yang dipelopori Warren Buffett dengan membeli saham perusahaan berkinerja unggul di bawah harga wajarnya disebut _____ investing.",
        correctAnswers: ["value", "Value", "nilai"],
        explanation: "Value investing menekankan kepemilikan bisnis yang memiliki fundamental kokoh dan valuasi murah.",
        hint: "Kata bahasa Inggris bermakna nilai."
      },
      {
        id: "q-fi-121-5",
        question: "Prinsip dasar pasar modal yang mewajibkan investor melakukan telaah riset mandiri sebelum membeli saham disingkat DYOR, yaitu Do Your Own _____.",
        correctAnswers: ["Research", "research", "Riset"],
        explanation: "DYOR mengingatkan setiap investor untuk bertanggung jawab penuh atas keputusan keuangannya.",
        hint: "Kata bahasa Inggris untuk penelitian atau riset."
      }
    ],
    trueFalseQuestions: [
      {
        id: "q-tf-121-1",
        statement: "Membeli saham hanya berdasarkan ajakan viral influencer tanpa mengecek laporan keuangan perusahaan adalah tindakan investasi yang sangat aman.",
        isTrue: false,
        explanation: "Salah. Membeli saham spekulatif karena terpengaruh tren berisiko tinggi terjebak manipulasi pom-pom."
      },
      {
        id: "q-tf-121-2",
        statement: "Praktik pom-pom saham bertujuan mengerek harga saham semu sebelum bandar menjual sahamnya dan kabur meninggalkan kerugian bagi ritel.",
        isTrue: true,
        explanation: "Benar. Modus skema pompa dan buang (pump and dump) kerap menjerat pemula di pasar modal."
      },
      {
        id: "q-tf-121-3",
        statement: "Rasio PER (Price to Earnings Ratio) digunakan analis untuk mengukur valuasi harga saham relatif terhadap laba bersih per lembarnya.",
        isTrue: true,
        explanation: "Benar. PER membandingkan harga saham dengan laba emiten untuk menilai kemurahan harga."
      },
      {
        id: "q-tf-121-4",
        statement: "Investor sejati memandang saham sebagai bukti kepemilikan sebagian dari bisnis riil yang sedang berkembang.",
        isTrue: true,
        explanation: "Benar. Berinvestasi saham berarti menjadi pemilik bersama dari perseroan yang memproduksi nilai ekonomi."
      },
      {
        id: "q-tf-121-5",
        statement: "Bursa Efek Indonesia melarang semua perusahaan mempublikasikan laporan keuangan audit secara terbuka kepada publik.",
        isTrue: false,
        explanation: "Salah. Emiten diwajibkan secara hukum mempublikasikan laporan keuangan berkala demi asas transparansi."
      }
    ]
  }
];
