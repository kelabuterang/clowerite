import React, { useState, useEffect } from 'react';
import { Eraser, Play, Check, Clock, Sparkles, BookOpen, ExternalLink, RefreshCw, FileText, CheckCircle2 } from 'lucide-react';
import { useHabit } from '../context/HabitContext';

export const CustomArticleCleaner: React.FC = () => {
  const { recordSession } = useHabit();

  const [rawText, setRawText] = useState('');
  const [cleanedText, setCleanedText] = useState('');
  const [articleTitle, setArticleTitle] = useState('Teks Bersih Kustom');
  const [isReadingMode, setIsReadingMode] = useState(false);

  // Timer & Quiz
  const [readingSeconds, setReadingSeconds] = useState(0);
  const [isReadingActive, setIsReadingActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Sample articles presets
  const samplePresets = [
    {
      source: 'The Conversation ID',
      url: 'https://theconversation.com/id',
      title: 'Transisi Energi Bersih dan Kesejahteraan Masyarakat Lokal di Indonesia',
      text: `[ADVERTISEMENT - KLIK DI SINI]
[MENU: HOME | KATEGORI | DAFTAR NEWSLETTER | DONASI SEKARANG]

Transisi energi baru dan terbarukan (EBT) di Indonesia tidak boleh hanya dipandang sebagai pergantian teknologi pembangkit listrik semata, melainkan harus menjamin keadilan sosial bagi masyarakat adat dan komunitas lokal di sekitar proyek energi hijau.

Pembangunan bendungan hidroelektrik raksasa dan ladang panel surya di berbagai pulau sering kali berbenturan dengan hak atas ruang hidup dan mata pencaharian tradisional petani. Tanpa pelibatan aktif warga sejak tahap studi kelayakan awal, proyek hijau ini berisiko menciptakan konflik agraria baru dengan dalih penyelamatan iklim bumi.

Penelitian terbaru merekomendasikan skema kepemilikan saham komunitas dalam koperasi energi mikro terdistribusi. Dengan cara ini, masyarakat tidak hanya menjadi penonton pasif, tetapi turut menerima manfaat dividen ekonomi dan pasokan listrik murah yang stabil untuk menggerakkan industri rumahan.

[IKLAN: DISKON 50% LANGGANAN PREMIUM]
[FOOTER: COPYRIGHT 2026 THE CONVERSATION ID | PRIVACY POLICY]`
    },
    {
      source: 'The Conversation EN',
      url: 'https://theconversation.com/id/in-english',
      title: 'Decoding Mangrove Ecosystem Carbon Sequestration Along Indonesian Coastlines',
      text: `[MENU: SECTIONS | CORONAVIRUS | GLOBAL EDITIONS | SIGN IN]
[SPONSORED CONTENT: BUY GREEN BONDS TODAY]

Indonesian coastal mangrove estuaries store up to four times more carbon per hectare than terrestrial tropical rainforests. The waterlogged, anaerobic soil conditions dramatically slow down the decomposition of organic matter, trapping carbon sediment for millennia.

Recent satellite remote sensing investigations indicate that rehabilitating degraded peat mangroves along the Sunda Strait could offset millions of metric tons of carbon dioxide emissions annually. However, rapid commercial aquaculture shrimp farming expansion remains a critical anthropogenic threat to these precious blue carbon reservoirs.

Scientists emphasize that restoring mangrove connectivity requires collaborative marine zoning, rigorous satellite monitoring, and sustainable ecotourism alternatives that economically empower coastal fishing villages.

[ADVERTISEMENT: SUBSCRIBE TO OUR WEEKLY NEWSLETTER]
[FOOTER: TERMS OF USE | COOKIE PREFERENCES]`
    },
    {
      source: 'Baca Petra',
      url: 'https://www.bacapetra.co/',
      title: 'Lembayung Terakhir di Dermaga Senggarang',
      text: `[IKLAN: KLIK UNTUK MEMBACA EDISI CETAK]
[NAVBAR: ARSIP | CERPEN | PUISI | ESAI | TENTANG KAMI]

Lembayung senja mewarnai langit Tanjungpinang dengan semburat ungu keemasan. Di atas pelantar kayu Senggarang yang sudah lapuk dimakan tiram, Mak Milah memandang perahu pompong suaminya yang belum juga merapat ke pangkalan.

Angin utara bertiup kencang membawa aroma air asin dan minyak solar. Tiga puluh tahun ia hidup berdampingan dengan pasang surut laut Melayu. Bagi Mak Milah, laut bukan sekadar bentangan air asin yang memisahkan pulau-pulau karang, melainkan lembaran kitab kehidupan yang menyimpan seluruh tawa anak-anaknya dan doa-doa sujud malam yang dilarung ke samudra.

Ketika deru mesin diesel tua itu akhirnya terdengar sayup dari balik rimbun bakau, sekuntum senyum tersungging di bibirnya yang kering. Laut telah memulangkan kekasih hatinya sekali lagi.

[SHARE: FACEBOOK | TWITTER | WHATSAPP]
[IKLAN BANNER: WORKSHOP PENULISAN KREATIF]`
    },
    {
      source: 'Reedsy Short Stories',
      url: 'https://reedsy.com/short-stories/',
      title: 'The Cartographer of Silent Constellations',
      text: `[PROMOTED: HIRE A PROFESSIONAL BOOK EDITOR ON REEDSY]
[NAVIGATION: CONTESTS | PROMPTS | SHORT STORIES | DIRECTORY]

High above the observatory dome in the misty Andes, Clara adjusted the brass vernier scale on her astrolabe. For decades, she had mapped celestial bodies that emit no electromagnetic light—only gravitational whispers that distort surrounding starlight.

In the fast-paced modern world below, astronomers relied entirely on automated neural networks to catalog deep-space coordinates. Yet Clara knew that machine algorithms often misidentify celestial anomalies as sensor noise. With her fountain pen and hand-bound vellum ledger, she meticulously traced the silent orbits of ancient wandering rogue planets.

When dawn painted the mountain peaks in pale rose, she laid down her compass. Her maps did not promise immediate scientific accolades, but they preserved the enduring human devotion to deciphering the quiet mysteries of the universe.

[FOOTER: JOIN 1,000,000+ AUTHORS ON REEDSY | PRIVACY POLICY]`
    }
  ];

  // Helper to clean raw text
  const cleanArticleText = (input: string): string => {
    return input
      // Remove HTML tags
      .replace(/<[^>]*>/g, ' ')
      // Remove ad labels & bracketed markers
      .replace(/\[(?:ADVERTISEMENT|IKLAN|SPONSORED|MENU|NAVBAR|FOOTER|SHARE|PROMOTED)[^\]]*\]/gi, '')
      // Remove URLs
      .replace(/https?:\/\/\S+/gi, '')
      // Clean multiple consecutive blank lines
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .trim();
  };

  const handleCleanAndRead = () => {
    const cleaned = cleanArticleText(rawText);
    setCleanedText(cleaned);
    setIsReadingMode(true);
    setReadingSeconds(0);
    setIsReadingActive(false);
    setHasStarted(false);
    setIsFinished(false);
  };

  const handleLoadPreset = (preset: typeof samplePresets[0]) => {
    setArticleTitle(preset.title);
    setRawText(preset.text);
    const cleaned = cleanArticleText(preset.text);
    setCleanedText(cleaned);
  };

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isReadingActive) {
      interval = setInterval(() => {
        setReadingSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isReadingActive]);

  const wordCount = cleanedText.split(/\s+/).filter(Boolean).length;
  const readSec = Math.max(readingSeconds, 1);
  const wpm = Math.round((wordCount / readSec) * 60);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleFinishSession = () => {
    setIsReadingActive(false);
    setIsFinished(true);

    recordSession({
      habitId: 'custom-reader',
      title: articleTitle || 'Artikel Kustom',
      readingDurationSeconds: readingSeconds,
      quizDurationSeconds: 0,
      totalDurationSeconds: readingSeconds,
      wordCount: wordCount,
      wpm: wpm,
      accuracyPercentage: 100,
      kem: wpm,
      totalQuestions: 1,
      correctAnswersCount: 1
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="bg-amber-400 text-slate-950 rounded-2xl p-6 sm:p-8 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-900 text-xs font-black tracking-widest uppercase">
            <Eraser className="w-3.5 h-3.5 stroke-[2.5]" />
            PEMBERSIH TEKS ARTIKEL & WPM
          </div>
          <h1 className="text-2xl sm:text-3xl font-black leading-snug uppercase tracking-tight text-slate-900">
            Alat Bersihkan Teks & Pengukur KEM
          </h1>
          <p className="text-xs sm:text-sm text-slate-900 font-bold leading-relaxed">
            Salin artikel dari The Conversation, Baca Petra, Reedsy, atau web lainnya—hapus iklan & menu, lalu baca dengan timer fokus.
          </p>
        </div>

        <div className="text-center bg-white p-4 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
          <span className="text-[10px] font-black uppercase text-slate-500 block">Fitur Ekstraksi</span>
          <span className="font-black text-sm text-slate-900 uppercase">Ad-Free • Distraction-Free</span>
        </div>
      </div>

      {/* READING MODE ACTIVE */}
      {isReadingMode ? (
        <div className="space-y-6">
          {/* Reader Bar */}
          <div className="sticky top-20 z-30 bg-white p-4 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsReadingMode(false)}
                className="text-xs font-black uppercase text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer active:translate-y-0.5"
              >
                ← Edit / Bersihkan Teks Lain
              </button>

              <div className="flex items-center gap-2 bg-amber-100 border-2 border-slate-900 px-3.5 py-1.5 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Clock className={`w-4 h-4 text-amber-900 stroke-[2.5] ${isReadingActive ? 'animate-spin' : ''}`} />
                <span className="font-mono font-black text-base text-slate-900">
                  {formatTime(readingSeconds)}
                </span>
                <span className="text-[10px] uppercase font-black text-amber-900">
                  {isReadingActive ? 'Membaca' : 'Timer Diam'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {!hasStarted ? (
                <button
                  onClick={() => {
                    setIsReadingActive(true);
                    setHasStarted(true);
                    setReadingSeconds(0);
                  }}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 px-6 py-2 rounded-xl text-xs sm:text-sm font-black uppercase border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 cursor-pointer active:translate-y-0.5"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  Mulai Membaca
                </button>
              ) : (
                <button
                  onClick={handleFinishSession}
                  className="bg-emerald-400 hover:bg-emerald-500 text-slate-950 px-6 py-2 rounded-xl text-xs sm:text-sm font-black uppercase border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 cursor-pointer active:translate-y-0.5"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  Selesai & Hitung WPM
                </button>
              )}
            </div>
          </div>

          {/* Clean Reader Canvas */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-6">
            <div className="space-y-2 pb-4 border-b-2 border-slate-100">
              <span className="text-xs font-black uppercase text-emerald-950 bg-emerald-200 px-3 py-1 rounded-md border border-slate-900">
                ✓ Teks Bersih Bebas Iklan
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {articleTitle}
              </h2>
              <div className="text-xs text-slate-600 font-bold uppercase">
                {wordCount} Total Kata • Estimasi Waktu Baca: ~{Math.ceil(wordCount / 180)} Menit
              </div>
            </div>

            {/* Content paragraphs */}
            <div className="space-y-5 text-slate-800 text-lg sm:text-xl font-normal leading-relaxed font-sans">
              {cleanedText.split('\n\n').map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            {/* Results popup if finished */}
            {isFinished && (
              <div className="mt-6 p-6 bg-amber-300 border-2 border-slate-900 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white border-2 border-slate-900 flex items-center justify-center mx-auto text-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  🎉
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">
                  Hasil Kecepatan Membacamu!
                </h3>
                <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto text-slate-900">
                  <div className="bg-white p-3 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-[10px] font-black uppercase text-slate-500 block">WPM</span>
                    <span className="text-2xl font-black font-mono text-slate-900">{wpm}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-[10px] font-black uppercase text-slate-500 block">Durasi</span>
                    <span className="text-xl font-black font-mono text-slate-900">{formatTime(readingSeconds)}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-[10px] font-black uppercase text-slate-500 block">Kata</span>
                    <span className="text-xl font-black font-mono text-slate-900">{wordCount}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* PASTE / CLEAN FORM */
        <div className="space-y-6">
          {/* Quick Preset Buttons */}
          <div className="space-y-2.5">
            <label className="text-xs font-black text-slate-700 uppercase tracking-wider block">
              Pilih Contoh Teks URL yang Sudah Dibersihkan:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {samplePresets.map((sp, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLoadPreset(sp)}
                  className="bg-white p-4 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 text-left transition-all cursor-pointer space-y-2 group active:translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-slate-900 bg-amber-200 px-2.5 py-0.5 rounded border border-slate-900">
                      {sp.source}
                    </span>
                    <span className="text-[10px] text-slate-600 font-black uppercase flex items-center gap-1 group-hover:text-amber-700">
                      Gunakan Sampel <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-amber-700 line-clamp-1">
                    {sp.title}
                  </h4>
                </button>
              ))}
            </div>
          </div>

          {/* Paste Input Box */}
          <div className="bg-white rounded-2xl p-6 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                Judul Artikel:
              </label>
              <input
                type="text"
                value={articleTitle}
                onChange={e => setArticleTitle(e.target.value)}
                placeholder="Masukkan judul artikel..."
                className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 font-bold text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                Tempelkan Teks Mentah / Artikel Web:
              </label>
              <textarea
                rows={8}
                value={rawText}
                onChange={e => setRawText(e.target.value)}
                placeholder="Tempel teks artikel atau cerita dari web di sini..."
                className="w-full p-4 rounded-xl border-2 border-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-xs sm:text-sm font-mono leading-relaxed"
              />
            </div>

            <div className="flex items-center justify-between gap-3 pt-2 flex-wrap">
              <button
                onClick={() => {
                  setRawText('');
                  setCleanedText('');
                }}
                className="px-4 py-2 text-xs font-black uppercase text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Kosongkan Teks
              </button>

              <button
                disabled={!rawText.trim()}
                onClick={handleCleanAndRead}
                className="bg-amber-400 hover:bg-amber-500 disabled:opacity-50 text-slate-950 font-black px-8 py-3 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xs sm:text-sm uppercase flex items-center gap-2 cursor-pointer active:translate-y-0.5"
              >
                <Eraser className="w-4 h-4 stroke-[2.5]" />
                Bersihkan Iklan & Buka Reader Timer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
