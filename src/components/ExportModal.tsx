import React, { useState } from 'react';
import { Download, FileText, Link, Check, ExternalLink, X, BookOpen, Printer, Sparkles, Copy } from 'lucide-react';
import { INDONESIAN_ARTICLES, getDailyIndonesianArticles } from '../data/indonesianArticles';
import { ENGLISH_ARTICLES, getDailyEnglishArticles } from '../data/englishArticles';
import { CERPEN_COLLECTION } from '../data/cerpenData';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ExportCategory = 'all-id' | 'daily-id-8' | 'all-en' | 'daily-en-5' | 'cerpen' | 'all-links';

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<ExportCategory>('daily-id-8');
  const [copied, setCopied] = useState(false);
  const [includeQuiz, setIncludeQuiz] = useState(true);
  const [includeVocab, setIncludeVocab] = useState(true);

  if (!isOpen) return null;

  const todayStr = new Date().toISOString().split('T')[0];
  const dailyIdArticles = getDailyIndonesianArticles(todayStr);
  const dailyEnArticles = getDailyEnglishArticles(todayStr);

  const getExportData = () => {
    switch (selectedCategory) {
      case 'daily-id-8':
        return {
          title: `Kumpulan 8 Artikel Habit Obat Fokus (Paket Harian - ${todayStr})`,
          description: '8 Artikel Bahasa Indonesia pilihan harian dari The Conversation ID untuk latihan WPM & KEM',
          items: dailyIdArticles.map((a, idx) => ({
            num: idx + 1,
            title: a.title,
            topic: a.category,
            source: a.source,
            sourceUrl: a.sourceUrl || 'https://theconversation.com/id',
            wordCount: a.wordCount,
            content: a.content,
            vocab: a.vocabList || a.vocabulary || [],
            readingQuiz: a.fillInQuestions || [],
            vocabQuiz: a.trueFalseQuestions || []
          }))
        };
      case 'all-id':
        return {
          title: 'Koleksi Lengkap 16 Artikel Bahasa Indonesia (Obat Fokus)',
          description: 'Kumpulan seluruh 16 artikel universal kurasi The Conversation ID lengkap dengan kuis pemahaman & kosakata',
          items: INDONESIAN_ARTICLES.map((a, idx) => ({
            num: idx + 1,
            title: a.title,
            topic: a.category,
            source: a.source,
            sourceUrl: a.sourceUrl || 'https://theconversation.com/id',
            wordCount: a.wordCount,
            content: a.content,
            vocab: a.vocabList || a.vocabulary || [],
            readingQuiz: a.fillInQuestions || [],
            vocabQuiz: a.trueFalseQuestions || []
          }))
        };
      case 'daily-en-5':
        return {
          title: `5 English Articles Pack - Balon Helium Habit (${todayStr})`,
          description: 'Curated 5 English articles for today’s active recall & vocabulary building',
          items: dailyEnArticles.map((a, idx) => ({
            num: idx + 1,
            title: a.title,
            topic: a.category,
            source: a.source,
            sourceUrl: a.sourceUrl || 'https://theconversation.com/id/in-english',
            wordCount: a.wordCount,
            content: a.content,
            vocab: a.vocabList || a.vocabulary || [],
            readingQuiz: a.readingQuiz || [],
            vocabQuiz: a.vocabQuiz || []
          }))
        };
      case 'all-en':
        return {
          title: 'Complete English Articles Collection (Balon Helium)',
          description: 'All advanced & intermediate English articles with full vocabulary pronunciations and comprehension tests',
          items: ENGLISH_ARTICLES.map((a, idx) => ({
            num: idx + 1,
            title: a.title,
            topic: a.category,
            source: a.source,
            sourceUrl: a.sourceUrl || 'https://theconversation.com/id/in-english',
            wordCount: a.wordCount,
            content: a.content,
            vocab: a.vocabList || a.vocabulary || [],
            readingQuiz: a.readingQuiz || [],
            vocabQuiz: a.vocabQuiz || []
          }))
        };
      case 'cerpen':
        return {
          title: 'Kumpulan Cerpen Pilihan (Baca Petra & Reedsy Short Stories)',
          description: 'Koleksi cerita pendek sastra Bahasa Indonesia & English untuk latihan inferensi naratif',
          items: CERPEN_COLLECTION.map((c, idx) => ({
            num: idx + 1,
            title: c.title,
            author: c.author,
            topic: c.language === 'id' ? 'Sastra Indonesia' : 'English Literature',
            source: c.source,
            sourceUrl: c.sourceUrl || (c.language === 'id' ? 'https://www.bacapetra.co/' : 'https://reedsy.com/short-stories/'),
            wordCount: c.wordCount,
            content: c.content,
            synopsis: c.synopsis,
            quiz: c.quiz,
            vocab: []
          }))
        };
      case 'all-links':
      default:
        return {
          title: 'Daftar Seluruh Link & Referensi Artikel/Cerpen',
          description: 'Daftar komprehensif URL sumber artikel dan cerpen resmi untuk digunakan latihan habit',
          items: [
            ...INDONESIAN_ARTICLES.map((a, i) => ({
              num: i + 1,
              title: a.title,
              category: 'Artikel Bahasa Indonesia (Obat Fokus)',
              source: a.source,
              url: a.sourceUrl || 'https://theconversation.com/id',
              wordCount: a.wordCount
            })),
            ...ENGLISH_ARTICLES.map((a, i) => ({
              num: INDONESIAN_ARTICLES.length + i + 1,
              title: a.title,
              category: 'English Articles (Balon Helium)',
              source: a.source,
              url: a.sourceUrl || 'https://theconversation.com/id/in-english',
              wordCount: a.wordCount
            })),
            ...CERPEN_COLLECTION.map((c, i) => ({
              num: INDONESIAN_ARTICLES.length + ENGLISH_ARTICLES.length + i + 1,
              title: c.title,
              category: `Cerpen (${c.language.toUpperCase()})`,
              source: c.source,
              url: c.sourceUrl || (c.language === 'id' ? 'https://www.bacapetra.co/' : 'https://reedsy.com/short-stories/'),
              wordCount: c.wordCount
            }))
          ]
        };
    }
  };

  const handlePrintPdf = () => {
    const data = getExportData();
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Izinkan pop-up browser untuk mencetak / menyimpan PDF');
      return;
    }

    let htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${data.title}</title>
        <meta charset="utf-8" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
          body {
            font-family: 'Lora', Georgia, serif;
            color: #1e293b;
            line-height: 1.65;
            padding: 32px 40px;
            max-width: 820px;
            margin: 0 auto;
            background: #fff;
          }
          h1, h2, h3, h4, .sans {
            font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          }
          .header-box {
            border-bottom: 3px solid #0f172a;
            padding-bottom: 16px;
            margin-bottom: 32px;
          }
          .header-title {
            font-size: 26px;
            font-weight: 800;
            color: #0f172a;
            margin: 0 0 6px 0;
          }
          .header-sub {
            color: #64748b;
            font-size: 13px;
            font-weight: 600;
          }
          .article-card {
            margin-bottom: 40px;
            page-break-inside: avoid;
            border-bottom: 1px dashed #cbd5e1;
            padding-bottom: 32px;
          }
          .article-title {
            font-size: 20px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 6px;
          }
          .meta-pill {
            display: inline-block;
            background: #f1f5f9;
            color: #334155;
            font-size: 11px;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 4px;
            margin-right: 8px;
            font-family: 'Plus Jakarta Sans', sans-serif;
          }
          .content-p {
            font-size: 14.5px;
            text-align: justify;
            margin: 10px 0;
            text-indent: 1.5em;
          }
          .vocab-section {
            background: #f8fafc;
            border-left: 3px solid #f59e0b;
            padding: 12px 16px;
            margin: 18px 0;
            font-size: 12px;
            border-radius: 0 6px 6px 0;
          }
          .quiz-section {
            background: #f0fdf4;
            border-left: 3px solid #10b981;
            padding: 12px 16px;
            margin: 18px 0;
            font-size: 12.5px;
            border-radius: 0 6px 6px 0;
          }
          .link-table {
            width: 100%;
            border-collapse: collapse;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 12px;
          }
          .link-table th, .link-table td {
            border: 1px solid #cbd5e1;
            padding: 8px 10px;
            text-align: left;
          }
          .link-table th {
            background: #f1f5f9;
            font-weight: 700;
          }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header-box">
          <div class="header-sub sans">ALTERNATIFA • SPEED READING & COMPREHENSION REPOSITORY</div>
          <h1 class="header-title">${data.title}</h1>
          <div class="header-sub sans">${data.description} • Tanggal Ekspor: ${todayStr}</div>
        </div>
    `;

    if (selectedCategory === 'all-links') {
      htmlContent += `
        <table class="link-table">
          <thead>
            <tr>
              <th style="width: 35px;">No</th>
              <th>Judul Artikel / Cerpen</th>
              <th>Kategori</th>
              <th>Jumlah Kata</th>
              <th>Tautan Sumber Resmi</th>
            </tr>
          </thead>
          <tbody>
            ${(data.items as any[]).map(item => `
              <tr>
                <td>${item.num}</td>
                <td><strong>${item.title}</strong></td>
                <td>${item.category}</td>
                <td>${item.wordCount} kata</td>
                <td><a href="${item.url}" target="_blank" style="color: #2563eb; text-decoration: underline;">${item.url}</a></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else {
      (data.items as any[]).forEach(item => {
        htmlContent += `
          <div class="article-card">
            <div class="sans" style="font-size: 12px; font-weight: 800; color: #f59e0b; margin-bottom: 4px;">ARTIKEL #${item.num}</div>
            <h2 class="article-title">${item.title}</h2>
            <div style="margin-bottom: 14px;">
              <span class="meta-pill">${item.topic || 'Umum'}</span>
              <span class="meta-pill">${item.wordCount} kata</span>
              <span class="meta-pill">Sumber: ${item.source} (${item.sourceUrl})</span>
            </div>
            ${item.synopsis ? `<p style="font-style: italic; color: #475569; font-size: 13.5px; margin-bottom: 12px;"><strong>Sinopsis:</strong> ${item.synopsis}</p>` : ''}
            <div>
              ${item.content.map((p: string) => `<p class="content-p">${p}</p>`).join('')}
            </div>
        `;

        if (includeVocab && item.vocab && item.vocab.length > 0) {
          htmlContent += `
            <div class="vocab-section sans">
              <strong>Kamus Kosakata & Glosarium Kunci:</strong>
              <ul style="margin: 6px 0 0 0; padding-left: 18px;">
                ${item.vocab.map((v: any) => `<li><strong>${v.word}</strong>: ${v.definition || v.definitionIndonesian || v.definitionId || v.definitionEn}</li>`).join('')}
              </ul>
            </div>
          `;
        }

        if (includeQuiz && ((item.readingQuiz && item.readingQuiz.length > 0) || (item.quiz && item.quiz.length > 0))) {
          const quizzes = item.readingQuiz || item.quiz || [];
          htmlContent += `
            <div class="quiz-section sans">
              <strong>Pertanyaan Uji Pemahaman (Reading Comprehension):</strong>
              <ol style="margin: 8px 0 0 0; padding-left: 18px;">
                ${quizzes.map((q: any) => `
                  <li style="margin-bottom: 6px;">
                    <strong>${q.question}</strong>
                    ${q.options ? `<div style="font-size: 11px; color: #166534; margin-top: 2px;">Kunci Jawaban: ${q.options[q.correctIndex]} (${q.explanation})</div>` : `<div style="font-size: 11px; color: #166534; margin-top: 2px;">Kunci: ${Array.isArray(q.correctAnswers) ? q.correctAnswers.join(' / ') : q.explanation}</div>`}
                  </li>
                `).join('')}
              </ol>
            </div>
          `;
        }

        htmlContent += `</div>`;
      });
    }

    htmlContent += `
        <div class="no-print" style="margin-top: 40px; text-align: center;">
          <button onclick="window.print()" style="background: #0f172a; color: #fff; border: none; padding: 10px 24px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 14px;">Cetak / Simpan sebagai PDF</button>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const handleCopyMarkdown = () => {
    const data = getExportData();
    let text = `# ${data.title}\n${data.description}\n\n`;

    if (selectedCategory === 'all-links') {
      (data.items as any[]).forEach(item => {
        text += `${item.num}. **${item.title}** (${item.category} - ${item.wordCount} kata)\n   Link: ${item.url}\n\n`;
      });
    } else {
      (data.items as any[]).forEach(item => {
        text += `## #${item.num}: ${item.title}\n`;
        text += `*Topik: ${item.topic} | Sumber: [${item.source}](${item.sourceUrl}) | Jumlah Kata: ${item.wordCount}*\n\n`;
        if (item.synopsis) {
          text += `> **Sinopsis:** ${item.synopsis}\n\n`;
        }
        item.content.forEach((p: string) => {
          text += `${p}\n\n`;
        });
        if (includeVocab && item.vocab && item.vocab.length > 0) {
          text += `### Glosarium Kosakata\n`;
          item.vocab.forEach((v: any) => {
            text += `- **${v.word}**: ${v.definition || v.definitionIndonesian || v.definitionId || v.definitionEn}\n`;
          });
          text += `\n`;
        }
        text += `---\n\n`;
      });
    }

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white border-2 border-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center border-2 border-slate-900 shadow-sm">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Eksport Koleksi Artikel & Link</h2>
              <p className="text-xs text-slate-500 font-medium">Download PDF siap cetak atau copy link artikel & cerpen habit harian</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category selector */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
              Pilih Paket / Koleksi yang Ingin Diekspor
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedCategory('daily-id-8')}
                className={`p-3 text-left rounded-xl border-2 transition-all flex items-start gap-2.5 cursor-pointer ${
                  selectedCategory === 'daily-id-8'
                    ? 'border-amber-500 bg-amber-50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                }`}
              >
                <div className="p-1.5 rounded bg-amber-100 text-amber-700 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">8 Artikel Harian ID (Obat Fokus)</div>
                  <div className="text-xs text-slate-500">Paket 8/8 hari ini dengan timer & kuis</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('daily-en-5')}
                className={`p-3 text-left rounded-xl border-2 transition-all flex items-start gap-2.5 cursor-pointer ${
                  selectedCategory === 'daily-en-5'
                    ? 'border-blue-500 bg-blue-50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                }`}
              >
                <div className="p-1.5 rounded bg-blue-100 text-blue-700 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">5 English Pack (Balon Helium)</div>
                  <div className="text-xs text-slate-500">Paket 5/5 hari ini lengkap vocab glosarium</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('all-id')}
                className={`p-3 text-left rounded-xl border-2 transition-all flex items-start gap-2.5 cursor-pointer ${
                  selectedCategory === 'all-id'
                    ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                }`}
              >
                <div className="p-1.5 rounded bg-emerald-100 text-emerald-700 mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Seluruh 16 Artikel Indonesia</div>
                  <div className="text-xs text-slate-500">Semua artikel The Conversation ID</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('all-en')}
                className={`p-3 text-left rounded-xl border-2 transition-all flex items-start gap-2.5 cursor-pointer ${
                  selectedCategory === 'all-en'
                    ? 'border-indigo-500 bg-indigo-50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                }`}
              >
                <div className="p-1.5 rounded bg-indigo-100 text-indigo-700 mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Seluruh Koleksi English</div>
                  <div className="text-xs text-slate-500">Semua artikel The Conversation English</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('cerpen')}
                className={`p-3 text-left rounded-xl border-2 transition-all flex items-start gap-2.5 cursor-pointer ${
                  selectedCategory === 'cerpen'
                    ? 'border-purple-500 bg-purple-50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                }`}
              >
                <div className="p-1.5 rounded bg-purple-100 text-purple-700 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Koleksi Cerpen Sastra</div>
                  <div className="text-xs text-slate-500">Cerpen Baca Petra & Reedsy Short Stories</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('all-links')}
                className={`p-3 text-left rounded-xl border-2 transition-all flex items-start gap-2.5 cursor-pointer ${
                  selectedCategory === 'all-links'
                    ? 'border-rose-500 bg-rose-50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                }`}
              >
                <div className="p-1.5 rounded bg-rose-100 text-rose-700 mt-0.5">
                  <Link className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Daftar Semua Link Sumber</div>
                  <div className="text-xs text-slate-500">URL lengkap artikel & cerpen untuk habit</div>
                </div>
              </button>
            </div>
          </div>

          {/* Options */}
          {selectedCategory !== 'all-links' && (
            <div className="flex flex-wrap gap-4 pt-2 border-t border-slate-100">
              <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeVocab}
                  onChange={(e) => setIncludeVocab(e.target.checked)}
                  className="rounded text-amber-500 focus:ring-amber-400"
                />
                Sertakan Glosarium Kosakata
              </label>

              <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeQuiz}
                  onChange={(e) => setIncludeQuiz(e.target.checked)}
                  className="rounded text-amber-500 focus:ring-amber-400"
                />
                Sertakan Kuis & Kunci Jawaban
              </label>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-medium">
            💡 Pilih <strong>"Save as PDF"</strong> pada dialog print browser untuk menyimpan file PDF.
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border-2 border-slate-900 bg-white text-slate-800 text-xs font-bold shadow-[2px_2px_0px_0px_#0f172a] hover:bg-slate-50 active:translate-y-0.5 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Tersalin!' : 'Copy Markdown / Links'}
            </button>

            <button
              type="button"
              onClick={handlePrintPdf}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-slate-900 bg-amber-400 text-slate-950 text-xs font-black shadow-[2px_2px_0px_0px_#0f172a] hover:bg-amber-300 active:translate-y-0.5 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Cetak / Ekspor PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
