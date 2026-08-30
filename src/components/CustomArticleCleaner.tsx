import React, { useState, useEffect } from 'react';
import { Eraser, Play, Check, Clock, Sparkles, BookOpen, ExternalLink, RefreshCw, FileText, CheckCircle2, Search, ArrowRight, ArrowLeft } from 'lucide-react';
import { useHabit } from '../context/HabitContext';

export const CustomArticleCleaner: React.FC = () => {
  const { recordSession } = useHabit();

  const [rawText, setRawText] = useState('');
  const [cleanedText, setCleanedText] = useState('');
  const [articleTitle, setArticleTitle] = useState('Teks Bersih Kustom');
  const [isReadingMode, setIsReadingMode] = useState(false);
  const [dictSearchWord, setDictSearchWord] = useState('');
  const [dictSource, setDictSource] = useState<'babla' | 'cambridge' | 'kbbi'>('babla');

  // Timer & Reading
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

Lembayung senja mewarnai langit Tanjungpinang dengan semburat jingga keemasan. Di atas pelantar kayu Senggarang yang sudah lapuk dimakan tiram, Mak Milah memandang perahu pompong suaminya yang belum juga merapat ke pangkalan.

Angin utara bertiup kencang membawa aroma air asin dan minyak solar. Tiga puluh tahun ia hidup berdampingan dengan pasang surut laut Melayu. Bagi Mak Milah, laut bukan sekadar bentangan air asin yang memisahkan pulau-pulau karang, melainkan lembaran kitab kehidupan yang menyimpan seluruh tawa anak-anaknya dan doa-doa sujud malam yang dilarung ke samudra.

Ketika deru mesin diesel tua itu akhirnya terdengar sayup dari balik rimbun bakau, sekuntum senyum tersungging di bibirnya yang kering. Laut telah memulangkan kekasih hatinya sekali lagi.

[SHARE: FACEBOOK | TWITTER | WHATSAPP]
[IKLAN BANNER: WORKSHOP PENULISAN KREATIF]`
    }
  ];

  const cleanArticleText = (input: string): string => {
    return input
      .replace(/<[^>]*>/g, ' ')
      .replace(/\[(?:ADVERTISEMENT|IKLAN|SPONSORED|MENU|NAVBAR|FOOTER|SHARE|PROMOTED)[^\]]*\]/gi, '')
      .replace(/https?:\/\/\S+/gi, '')
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

  const handleLookupDictionary = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dictSearchWord.trim()) return;

    const term = encodeURIComponent(dictSearchWord.trim());
    let url = '';
    if (dictSource === 'babla') {
      url = `https://www.babla.co.id/bahasa-inggris-bahasa-indonesia/${term}`;
    } else if (dictSource === 'cambridge') {
      url = `https://dictionary.cambridge.org/dictionary/english-indonesian/${term}`;
    } else {
      url = `https://kbbi.kemdikbud.go.id/entri/${term}`;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
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
      habitId: 'obat-fokus',
      title: `Pembersih Artikel: ${articleTitle}`,
      readingDurationSeconds: readingSeconds,
      quizDurationSeconds: 0,
      totalDurationSeconds: readingSeconds,
      wordCount,
      wpm,
      accuracyPercentage: 100,
      kem: wpm,
      totalQuestions: 0,
      correctAnswersCount: 0
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-[#CCD5AE] text-[#283618] rounded-2xl p-6 sm:p-8 border-2 border-[#283618] shadow-[4px_4px_0px_0px_#283618] space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-[#283618] text-xs font-black tracking-widest uppercase text-[#3A5A40]">
          <Search className="w-3.5 h-3.5 text-[#588157] stroke-[2.5]" />
          KAMUS REFERENSI & PEMBERSIH TEKS
        </div>
        <h1 className="text-2xl sm:text-3xl font-black leading-snug uppercase tracking-tight text-[#283618]">
          Pusat Kamus & Pembersih Artikel
        </h1>
        <p className="text-xs sm:text-sm text-[#3A5A40] font-bold leading-relaxed max-w-2xl">
          Cari kosakata langsung di Bab.la, Cambridge Dictionary, atau KBBI Daring, serta bersihkan naskah dari iklan & elemen navigasi untuk pengalaman membaca fokus.
        </p>
      </div>

      {/* Dictionary Search Widget */}
      <div className="bg-white rounded-2xl p-6 border-2 border-[#283618] shadow-[4px_4px_0px_0px_#283618] space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-sm sm:text-base font-black text-[#283618] uppercase tracking-tight flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#709752]" />
            Cari Makna & Padanan Kata di Kamus Resmi:
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-[#574332]">Pilihan Kamus:</span>
            <div className="flex bg-[#FAEDCD] p-1 rounded-lg border border-[#283618] text-xs font-black">
              <button
                type="button"
                onClick={() => setDictSource('babla')}
                className={`px-2.5 py-1 rounded ${dictSource === 'babla' ? 'bg-[#709752] text-white' : 'text-[#283618]'}`}
              >
                Bab.la
              </button>
              <button
                type="button"
                onClick={() => setDictSource('cambridge')}
                className={`px-2.5 py-1 rounded ${dictSource === 'cambridge' ? 'bg-[#709752] text-white' : 'text-[#283618]'}`}
              >
                Cambridge
              </button>
              <button
                type="button"
                onClick={() => setDictSource('kbbi')}
                className={`px-2.5 py-1 rounded ${dictSource === 'kbbi' ? 'bg-[#709752] text-white' : 'text-[#283618]'}`}
              >
                KBBI Daring
              </button>
            </div>
          </div>
        </div>

        <form onSubmit={handleLookupDictionary} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={dictSearchWord}
              onChange={e => setDictSearchWord(e.target.value)}
              placeholder="Ketik kata yang ingin dicari (contoh: perseverance, komprehensif, serendipity)..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#283618] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#709752]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#709752] hover:bg-[#588157] text-white font-black text-xs sm:text-sm px-6 py-3 rounded-xl border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618] uppercase flex items-center gap-1.5 cursor-pointer active:translate-y-0.5"
          >
            <span>Buka Kamus</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </form>

        <div className="flex items-center gap-3 text-[11px] text-[#574332] font-semibold pt-1">
          <span>Tautan Cepat:</span>
          <a
            href="https://www.babla.co.id/bahasa-inggris-bahasa-indonesia/"
            target="_blank"
            rel="noreferrer"
            className="text-[#709752] underline font-bold hover:text-[#588157]"
          >
            Bab.la (EN-ID)
          </a>
          <span>•</span>
          <a
            href="https://dictionary.cambridge.org/dictionary/english-indonesian/"
            target="_blank"
            rel="noreferrer"
            className="text-[#709752] underline font-bold hover:text-[#588157]"
          >
            Cambridge Dictionary
          </a>
          <span>•</span>
          <a
            href="https://kbbi.kemdikbud.go.id/"
            target="_blank"
            rel="noreferrer"
            className="text-[#709752] underline font-bold hover:text-[#588157]"
          >
            KBBI Kemdikbud
          </a>
        </div>
      </div>

      {/* Article Cleaner & Reader */}
      {!isReadingMode ? (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#283618] shadow-[4px_4px_0px_0px_#283618] space-y-6">
          <div className="space-y-1">
            <h3 className="text-base font-black text-[#283618] uppercase tracking-tight">
              Pembersih Teks Artikel dari Iklan & Navigasi:
            </h3>
            <p className="text-xs text-[#574332] font-medium">
              Tempel teks mentah dari situs berita atau pilih contoh naskah di bawah untuk otomatis dibersihkan.
            </p>
          </div>

          {/* Presets */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-black uppercase text-[#283618] self-center mr-1">Contoh Naskah:</span>
            {samplePresets.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleLoadPreset(p)}
                className="text-xs font-bold bg-[#E9EDC9] hover:bg-[#CCD5AE] text-[#283618] px-3 py-1.5 rounded-lg border border-[#A3B18A] cursor-pointer"
              >
                {p.source}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-black text-[#283618] uppercase block mb-1">
                Judul Artikel:
              </label>
              <input
                type="text"
                value={articleTitle}
                onChange={e => setArticleTitle(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-[#283618] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#709752]"
              />
            </div>

            <div>
              <label className="text-xs font-black text-[#283618] uppercase block mb-1">
                Teks Mentah (Paste dari web/jurnal):
              </label>
              <textarea
                rows={8}
                value={rawText}
                onChange={e => setRawText(e.target.value)}
                placeholder="Tempel teks mentah di sini..."
                className="w-full p-3 rounded-xl border-2 border-[#283618] text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#709752]"
              />
            </div>

            <button
              onClick={handleCleanAndRead}
              disabled={!rawText.trim()}
              className="w-full bg-[#709752] hover:bg-[#588157] text-white font-black py-4 rounded-xl border-2 border-[#283618] shadow-[4px_4px_0px_0px_#283618] uppercase text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5 transition-all disabled:opacity-50"
            >
              <Eraser className="w-4 h-4" />
              Bersihkan & Masuk Mode Baca Fokus
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Top Timer Bar */}
          <div className="bg-white rounded-2xl p-4 border-2 border-[#283618] shadow-[4px_4px_0px_0px_#283618] flex items-center justify-between gap-4 sticky top-4 z-20">
            <button
              onClick={() => setIsReadingMode(false)}
              className="flex items-center gap-1.5 text-xs font-black uppercase text-[#283618] hover:text-[#588157] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali Edit Teks
            </button>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-[#E9EDC9] text-[#3A5A40] px-3 py-1 rounded-lg border border-[#A3B18A] font-mono text-xs font-black">
                <Clock className="w-3.5 h-3.5" />
                <span>{formatTime(readingSeconds)}</span>
              </div>

              {!hasStarted ? (
                <button
                  onClick={() => {
                    setIsReadingActive(true);
                    setHasStarted(true);
                  }}
                  className="bg-[#709752] hover:bg-[#588157] text-white font-black text-xs uppercase px-4 py-2 rounded-xl border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618] cursor-pointer active:translate-y-0.5 flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Mulai Timer Baca
                </button>
              ) : !isFinished ? (
                <button
                  onClick={handleFinishSession}
                  className="bg-[#709752] hover:bg-[#588157] text-white font-black text-xs uppercase px-4 py-2 rounded-xl border-2 border-[#283618] shadow-[2px_2px_0px_0px_#283618] cursor-pointer active:translate-y-0.5 flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  Selesai Membaca
                </button>
              ) : (
                <span className="text-xs font-black text-[#709752] bg-[#E9EDC9] px-3 py-1 rounded-lg border border-[#A3B18A]">
                  ✓ Sesi Tersimpan
                </span>
              )}
            </div>
          </div>

          {/* Cleaned Reader */}
          <div className="bg-[#FAF6EE] rounded-3xl p-6 sm:p-10 border-2 border-[#283618] shadow-[6px_6px_0px_0px_#283618] space-y-6">
            <div className="border-b-2 border-slate-200 pb-4 space-y-1">
              <span className="text-[10px] font-black uppercase text-[#3A5A40] bg-[#E9EDC9] px-2.5 py-0.5 rounded-md border border-[#A3B18A]">
                Mode Baca Bersih • {wordCount} Kata
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-[#283618] pt-1">
                {articleTitle}
              </h1>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#283618] font-serif whitespace-pre-line text-justify">
              {cleanedText}
            </div>

            {isFinished && (
              <div className="bg-[#E9EDC9] p-4 rounded-2xl border-2 border-[#283618] space-y-2">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-[#3A5A40]">
                  <CheckCircle2 className="w-4 h-4 text-[#709752]" />
                  Statistik Sesi Membaca:
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white p-2.5 rounded-xl border border-[#283618]">
                    <div className="text-[10px] font-bold text-[#574332]">Waktu</div>
                    <div className="font-mono font-black text-sm text-[#283618]">{formatTime(readingSeconds)}</div>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#283618]">
                    <div className="text-[10px] font-bold text-[#574332]">Kata</div>
                    <div className="font-mono font-black text-sm text-[#283618]">{wordCount}</div>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#283618]">
                    <div className="text-[10px] font-bold text-[#574332]">Kecepatan (WPM)</div>
                    <div className="font-mono font-black text-sm text-[#709752]">{wpm} WPM</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
