// Mock Data untuk Demo Interaktif "Test App" (Mencakup 5 Katalog Produk Inti)

window.TEST_APP_DATA = {
  // 1. Skenario Produk #3: JD vs CV Match Percentage (Pay-Per-Try)
  jdMatchScenarios: {
    "it-grc": {
      id: "it-grc",
      roleTitle: "Junior IT GRC & Internal Audit (ISO 27001)",
      companyType: "Bank Digital & Fintech (Jakarta)",
      initialScore: 46,
      unlockedScore: 89,
      keywordMatchScore: 40,
      aiContextScore: 50,
      jdText: `Posisi: Junior IT Governance, Risk & Compliance (IT GRC) / IT Internal Auditor.
Kualifikasi & Tanggung Jawab:
1. Membantu pelaksanaan IT Audit berbasis ISO/IEC 27001:2022 Annex A dan COBIT 2019.
2. Menyusun dan memelihara Risk and Control Matrix (RCM) serta melakukan pengujian Test of Design (TOD) dan Test of Operating Effectiveness (TOE).
3. Mengumpulkan audit evidence, melakukan evidence sampling (User Access Review, Change Management Log), dan mendokumentasikan Audit Working Paper.
4. Menyusun laporan temuan audit (Observation, Gap, Risk Rating, dan Actionable Recommendation) serta memantau proses remediasi bersama tim IT Security & kepatuhan UU PDP.`,
      cvSnippet: `Mahasiswa S1 Sistem Informasi (IPK 3.68). Pernah mengambil mata kuliah Keamanan Informasi dan Audit Sistem Informasi.
- Magang di divisi IT Support selama 3 bulan: membantu mengecek akun user karyawan baru dan membuat laporan bulanan di Excel.
- Aktif di Himpunan Mahasiswa sebagai Kepala Divisi Acara: mengatur jadwal panitia dan memastikan acara berjalan lancar sesuai aturan kampus.`,
      matchedKeywords: ["Sistem Informasi", "Keamanan Informasi", "Audit Sistem Informasi", "Laporan Excel"],
      missingKeywords: [
        "ISO/IEC 27001:2022 Annex A",
        "Risk and Control Matrix (RCM)",
        "Test of Design (TOD) & Operating Effectiveness",
        "Audit Working Paper & Evidence Sampling",
        "User Access Review (UAR)",
        "Observation, Risk & Remediation Tracking",
        "COBIT 2019 Framework",
        "Kepatuhan UU PDP"
      ],
      freeRecommendations: [
        {
          category: "Terminologi Magang IT Support -> Bahasa IT Audit",
          before: "Membantu mengecek akun user karyawan baru dan membuat laporan bulanan di Excel.",
          after: "Melakukan prosedur User Access Review (UAR) bulanan terhadap 120+ akun karyawan dan mendokumentasikan kertas kerja rekonsiliasi hak akses pada matriks kontrol Excel."
        },
        {
          category: "Penambahan Keyword Framework Wajib",
          before: "Pernah mengambil mata kuliah Keamanan Informasi dan Audit Sistem Informasi.",
          after: "Memiliki pemahaman praktis atas kerangka kerja ISO/IEC 27001:2022 Annex A, COBIT 2019, serta penyusunan Risk and Control Matrix (RCM) untuk pengujian kontrol akses dan perubahan sistem."
        }
      ],
      // Simulasi Server-Side Redaction (OWASP WSTG-BUSL): Data ini baru dibuka setelah status QRIS = Paid
      lockedRecommendationsPayload: [
        {
          category: "Proyek Portofolio Simulasi (Solusi Belum Punya Pengalaman Audit)",
          before: "Belum memiliki proyek spesifik pengujian kontrol di CV.",
          after: "Menyelesaikan simulasi IT Audit berbasis ISO 27001: mengevaluasi 8 bukti kontrol sintetis (Change Management & Access Control), mengidentifikasi 3 temuan gap risiko tinggi, dan menyusun Audit Working Paper beserta rekomendasi remediasi."
        },
        {
          category: "Re-framing Pengalaman Organisasi ke Governance & Risk",
          before: "Mengatur jadwal panitia dan memastikan acara berjalan lancar sesuai aturan kampus.",
          after: "Mengelola kepatuhan SOP dan mitigasi risiko operasional pada acara berskala 400+ peserta dengan menyusun daftar checklist kontrol risiko sehingga menurunkan insiden keterlambatan vendor hingga 0%."
        },
        {
          category: "Penyesuaian Kepatuhan Regulasi Lokal",
          before: "(Tidak ada penyebutan regulasi privasi data)",
          after: "Memahami prinsip pelindungan data pribadi sesuai standar UU PDP Indonesia dalam proses klasifikasi aset informasi dan peninjauan bukti kontrol."
        }
      ]
    },
    "data-analyst": {
      id: "data-analyst",
      roleTitle: "Junior Data Analyst (BI & SQL)",
      companyType: "E-Commerce & FMCG Tech",
      initialScore: 52,
      unlockedScore: 91,
      keywordMatchScore: 45,
      aiContextScore: 56,
      jdText: `Posisi: Junior Business Intelligence / Data Analyst.
Tanggung Jawab:
1. Mengolah data transaksi menggunakan SQL (Joins, CTE, Window Functions) dan Excel tingkat lanjut untuk menjawab pertanyaan bisnis.
2. Membangun dan memelihara interactive dashboard di Power BI (DAX Measures, Star Schema Data Modeling).
3. Melakukan analisis Funnel Conversion, Cohort Retention, dan memberikan actionable business insight kepada tim Product & Marketing.`,
      cvSnippet: `Fresh Graduate Teknik Industri / Informatika. Sudah mengikuti bootcamp SQL, Excel, dan Power BI.
- Tugas Akhir: menganalisis data penjualan UMKM menggunakan Excel dan membuat grafik tren bulanan.
- Menguasai query SQL dasar (SELECT, WHERE, GROUP BY) dan bisa membuat chart di Power BI.`,
      matchedKeywords: ["SQL", "Excel", "Power BI", "Data Penjualan"],
      missingKeywords: [
        "SQL Window Functions & CTE",
        "Power BI DAX Measures",
        "Star Schema Data Modeling",
        "Cohort Retention Analysis",
        "Funnel Conversion Rate",
        "Automated Data Cleaning",
        "Actionable Business Insight",
        "KPI Storytelling"
      ],
      freeRecommendations: [
        {
          category: "Upgrade Deskripsi Skill SQL & Power BI",
          before: "Menguasai query SQL dasar (SELECT, WHERE, GROUP BY) dan bisa membuat chart di Power BI.",
          after: "Mengolah dataset 50.000+ baris menggunakan SQL (CTE, Window Functions) serta merancang dashboard Power BI berbasis Star Schema dan DAX Measures untuk pemantauan KPI harian."
        },
        {
          category: "Kuantifikasi Dampak Tugas Akhir / Proyek",
          before: "Menganalisis data penjualan UMKM menggunakan Excel dan membuat grafik tren bulanan.",
          after: "Menganalisis tren penjualan 12 bulan menggunakan PivotTable & Cohort Analysis di Excel, mengidentifikasi 20% SKU dengan margin terendah, dan merekomendasikan strategi bundel yang meningkatkan estimasi margin 14%."
        }
      ],
      lockedRecommendationsPayload: [
        {
          category: "Struktur Portofolio End-to-End (Standar Hiring Manager)",
          before: "Hanya melampirkan screenshot grafik dashboard tanpa konteks bisnis.",
          after: "Menyusun portofolio studi kasus berbasis masalah bisnis: merumuskan 5 Business Questions, melakukan pembersihan data dengan SQL, dan menyajikan rekomendasi peningkatan Funnel Conversion di Power BI."
        },
        {
          category: "Penajaman Metrik Retensi & Pelanggan",
          before: "(Belum mencantumkan metrik analisis perilaku pelanggan)",
          after: "Melakukan segmentasi pelanggan RFM (Recency, Frequency, Monetary) dan Cohort Retention untuk mendeteksi titik churn pengguna pada bulan ke-2."
        }
      ]
    },
    "pmo": {
      id: "pmo",
      roleTitle: "Junior PMO & IT Project Coordinator",
      companyType: "IT Consulting & Enterprise Banking",
      initialScore: 44,
      unlockedScore: 87,
      keywordMatchScore: 38,
      aiContextScore: 48,
      jdText: `Posisi: Junior Project Management Officer (PMO) / IT Project Coordinator.
Tanggung Jawab:
1. Membantu Project Manager dalam penyusunan Project Charter, Work Breakdown Structure (WBS), dan timeline proyek.
2. Memantau RAID Log (Risks, Assumptions, Issues, Dependencies), progres Sprint/Agile, serta kepatuhan SLA deliverable.
3. Menyusun materi presentasi mingguan (Weekly Steering Committee Deck) dan mengelola komunikasi lintas stakeholder menggunakan matriks RACI.`,
      cvSnippet: `Fresh Graduate Manajemen / Sistem Informasi.
- Pernah menjadi Ketua Pelaksana acara seminar kampus dengan 300 peserta dan mengatur 25 panitia.
- Magang sebagai staf administrasi proyek: mencatat notulensi rapat mingguan dan mengingatkan deadline ke tim developer.`,
      matchedKeywords: ["Manajemen Proyek", "Notulensi Rapat", "Monitoring Deadline"],
      missingKeywords: [
        "Project Charter & WBS",
        "RAID Log (Risks, Issues, Dependencies)",
        "RACI Matrix & Stakeholder Governance",
        "SLA & Milestone Tracking",
        "Weekly SteerCo Presentation Deck",
        "Agile / Scrum Ceremony Coordination",
        "Scope Creep Mitigation",
        "Budget & Resource Variance"
      ],
      freeRecommendations: [
        {
          category: "Transformasi Istilah Admin Magang -> Standar PMO Korporat",
          before: "Mencatat notulensi rapat mingguan dan mengingatkan deadline ke tim developer.",
          after: "Mengelola Project Action Log dan memantau pemenuhan timeline WBS lintas 8 anggota tim developer, serta menyusun laporan progres mingguan (Weekly Status Report) yang meningkatkan ketepatan waktu rilis sprint hingga 92%."
        },
        {
          category: "Transformasi Kepanitiaan Kampus -> Project Governance",
          before: "Menjadi Ketua Pelaksana acara seminar kampus dengan 300 peserta dan mengatur 25 panitia.",
          after: "Memimpin eksekusi proyek acara 300+ peserta dengan menyusun Work Breakdown Structure (WBS), matriks penugasan RACI untuk 25 anggota lintas divisi, dan pengelolaan anggaran Rp 35 juta tepat sasaran."
        }
      ],
      lockedRecommendationsPayload: [
        {
          category: "Penguasaan Dokumen Standar PMO (RAID Log & Charter)",
          before: "(Belum menyebutkan artefak manajemen risiko proyek)",
          after: "Terbiasa menyusun dan memperbarui RAID Log (Risks, Assumptions, Issues, Dependencies) untuk mendeteksi bottleneck teknis lebih awal dan mengeskalasi isu kritis pada rapat Steering Committee."
        },
        {
          category: "Komunikasi Eksekutif & Presentasi Korporat",
          before: "(Belum menonjolkan kemampuan pelaporan manajemen)",
          after: "Menyusun deck presentasi eksekutif berstruktur piramida (Executive Summary, Milestone Rag Status, Key Blockers, & Next Steps) untuk penyelarasan ekspektasi stakeholder."
        }
      ]
    }
  },

  // 2. Produk #1: AI CV Polisher & Corporate Presentation Preparation (One-Time Buy)
  cvPolisherItems: [
    {
      id: "exp-1",
      role: "Staf Magang IT Governance / Support — PT Nusantara Digital",
      period: "Feb 2026 – Jun 2026",
      rawBullets: [
        "Membantu tim mengecek daftar user yang masih aktif dan yang sudah resign di sistem setiap bulan.",
        "Ikut mengumpulkan bukti screenshot konfigurasi server untuk persiapan audit ISO 27001.",
        "Membuat rekap laporan insiden harian di Excel dan mengirimkannya ke supervisor."
      ],
      polishedBullets: [
        "Melaksanakan prosedur User Access Review (UAR) bulanan atas 250+ akun sistem inti, mengidentifikasi 14 akun dormant dari karyawan non-aktif, dan menindaklanjuti pencabutan akses sesuai kebijakan keamanan.",
        "Mengkoordinasikan pengumpulan dan verifikasi 35+ bukti kontrol (audit evidence) terkait Access Control & Change Management yang berkontribusi pada kelulusan audit surveilans ISO/IEC 27001:2022 tanpa temuan mayor.",
        "Merancang tracker pemantauan insiden dan SLA harian berbasis Excel otomatis yang memangkas waktu rekapitulasi pelaporan mingguan sebesar 40% (dari 3 jam menjadi 1,5 jam)."
      ]
    },
    {
      id: "exp-2",
      role: "Koordinator Divisi Riset & Data — Himpunan Mahasiswa",
      period: "Agu 2025 – Jan 2026",
      rawBullets: [
        "Membuat kuesioner survei kepuasan mahasiswa dan mengolah datanya pakai Excel dan Power BI.",
        "Mempresentasikan hasil survei di depan pengurus himpunan dan dosen pembina."
      ],
      polishedBullets: [
        "Merancang instrumen survei dan mengolah 480+ sampel data responden menggunakan SQL & Excel, lalu memvisualisasikan temuan utama ke dalam dashboard interaktif Power BI.",
        "Menyajikan deck rekomendasi berbasis data di hadapan 15 pemangku kepentingan akademik yang menghasilkan perbaikan kurikulum pelatihan praktis dengan kenaikan kepuasan mahasiswa sebesar 28%."
      ]
    }
  ],

  corporatePresentationSlides: [
    {
      slideNo: "Slide 01",
      title: "Executive Summary (Prinsip Piramida Minto)",
      purpose: "Menjawab kesimpulan utama di 30 detik pertama agar penguji/manajer langsung menangkap inti solusi.",
      structure: [
        "Situation: Kondisi metrik/proses bisnis saat ini (misal: SLA penyelesaian tiket IT meleset 32%).",
        "Complication: Akar masalah utama yang menghambat target kuartal ini.",
        "Resolution: 3 langkah prioritas yang diusulkan beserta proyeksi dampak terukur (Rp / % / Waktu)."
      ],
      badExample: "Menaruh latar belakang teori panjang lebar di slide pertama tanpa kesimpulan angka.",
      goodExample: "'Otomatisasi Triage Tiket ITSM diproyeksikan menurunkan waktu tunggu L1 sebesar 45% dalam 60 hari dengan biaya implementasi Rp 0.'"
    },
    {
      slideNo: "Slide 02",
      title: "Problem Breakdown & Root Cause (MECE Framework)",
      purpose: "Membuktikan cara berpikir terstruktur (Mutually Exclusive, Collectively Exhaustive) saat bedah kasus interview.",
      structure: [
        "Pohon Masalah (Issue Tree): Memecah masalah menjadi cabang People, Process, dan Technology.",
        "Data Bukti (Evidence): Menampilkan 1 tabel/grafik Pareto 80/20 yang menunjuk akar masalah terbesar.",
        "Prioritas Fokus: Menandai cabang mana yang akan diselesaikan terlebih dahulu."
      ],
      badExample: "Menyebutkan 10 masalah secara acak tanpa pengelompokan dan tanpa bukti data.",
      goodExample: "'74% keterlambatan audit berasal dari cabang Process (belum adanya template standar Evidence Request List).'"
    },
    {
      slideNo: "Slide 03",
      title: "Action Plan, RACI Matrix & 30-60-90 Day Roadmap",
      purpose: "Menunjukkan kesiapan eksekusi nyata di dunia korporat (bukan sekadar teori kampus).",
      structure: [
        "Quick Wins (Hari 1–30): Perbaikan cepat berbiaya rendah dengan dampak langsung.",
        "Medium-Term Standardization (Hari 31–60): Implementasi SOP/Template & pelatihan tim.",
        "Governance & KPI Tracking (Hari 61–90): Evaluasi metrik keberhasilan & RACI penanggung jawab."
      ],
      badExample: "'Solusinya adalah meningkatkan komunikasi dan kesadaran seluruh karyawan.' (Terlalu abstrak!)",
      goodExample: "'Minggu 1–2: Rilis Template RCM & Tracker SLA (PIC: PMO, Reviewer: IT GRC Lead, Target: 100% proyek terdata).'"
    }
  ],

  // 3. Produk #1 & #2: Katalog Job-Ready Toolkits & Professional Templates (One-Time Buy)
  productsCatalog: [
    {
      id: "kit-data-analyst",
      trackBadge: "Track A • Job-Ready Case Kit",
      category: "toolkit",
      title: "Data Analyst Job-Ready Portfolio Kit",
      targetAudience: "Mahasiswa tingkat akhir, fresh graduate, & career switcher pemula.",
      problemSolved: "Sudah belajar SQL, Excel, atau Power BI dasar, tetapi bingung bagaimana menyatukannya menjadi proyek bisnis utuh yang meyakinkan saat melamar kerja.",
      priceIdr: 99000,
      variableCostNote: "Sekali Beli • Akses Selamanya",
      promisedOutcome: "Satu proyek analisis bisnis selesai, terdokumentasi rapi, dan siap dilampirkan di CV & LinkedIn.",
      collaboratorBadge: "Dikurasi bersama Praktisi BI & Data",
      deliverables: [
        "Dataset transaksi e-commerce realistis (50.000+ baris kotor untuk latihan cleaning).",
        "Dokumen 5 Business Questions & instruksi analisis bertahap.",
        "Latihan kueri SQL (CTE, Window Functions) & model Excel beserta kunci pembahasan.",
        "Dashboard Brief untuk Power BI (panduan Star Schema & DAX wajib).",
        "Template dokumentasi proyek portofolio & cara mempresentasikan insight ke User.",
        "Bank soal simulasi interview teknis Data Analyst beserta rubrik penilaian."
      ],
      samplePreviewTitle: "Contoh Cuplikan: Business Question #2 & Rubrik SQL di Dalam Kit",
      samplePreviewTable: [
        { col1: "Business Question", col2: "Mengapa tingkat repeat order pelanggan baru turun 28% pada bulan ke-2 setelah promo kampanye berakhir?" },
        { col1: "Teknik Wajib", col2: "Cohort Retention Analysis dengan SQL Window Function (DATE_TRUNC + LAG) & Visualisasi Heatmap di Power BI." },
        { col1: "Deliverable Portofolio", col2: "1 halaman Executive Insight Deck + Query SQL bersih + Link Dashboard Interaktif." }
      ]
    },
    {
      id: "kit-it-grc",
      trackBadge: "Track B • Job-Ready Case Kit",
      category: "toolkit",
      title: "IT GRC & Internal Audit Job-Ready Kit",
      targetAudience: "Mahasiswa IT/SI, fresh graduate, & junior professional menuju IT Audit / IT GRC / InfoSec Compliance.",
      problemSolved: "Mengenal istilah ISO 27001 atau IT Audit di kampus, tetapi belum pernah melihat bentuk bukti kontrol (evidence), prosedur pengujian, dan cara menulis kertas kerja temuan audit.",
      priceIdr: 129000,
      variableCostNote: "Sekali Beli • Akses Selamanya",
      promisedOutcome: "Satu Audit Working Paper simulasi lengkap yang siap dimasukkan ke portofolio beserta penguasaan logika auditnya.",
      collaboratorBadge: "Divalidasi bersama Rekan Praktisi IT GRC",
      deliverables: [
        "Skenario simulasi audit perusahaan fintech fiktif lengkap dengan 5 paket Evidence Sintetis (Log User, Tiket Change, Kebijakan Password).",
        "Template Risk and Control Matrix (RCM) berbasis ISO/IEC 27001:2022.",
        "Contoh Audit Test Procedure (Test of Design & Test of Effectiveness) dan Evidence Request List (ERL).",
        "Latihan mengevaluasi kecukupan bukti dan menulis temuan (Condition, Criteria, Cause, Risk/Effect, Recommendation).",
        "Panduan simulasi interview teknis IT GRC/Audit beserta pembahasan jawaban."
      ],
      samplePreviewTitle: "Contoh Cuplikan: Kertas Kerja RCM & Pengujian Kontrol (ISO 27001 A.5.18 / A.8.2)",
      samplePreviewTable: [
        { col1: "Kontrol & Kriteria", col2: "ISO 27001:2022 Annex A.5.18 (Access Rights) — Hak akses karyawan yang resign wajib dicabut maks 1x24 jam." },
        { col1: "Bukti Sintetis Diuji", col2: "Sampel 25 karyawan resign Q3 vs Log Status Akun Active Directory (ditemukan 3 akun masih aktif setelah 14 hari)." },
        { col1: "Output Kertas Kerja", col2: "Temuan Risiko Tinggi (Unauthorized Access) + Rekomendasi Otomatisasi De-provisioning HRIS ke IAM." }
      ]
    },
    {
      id: "kit-bundle-da-grc",
      trackBadge: "Best Value • Bundel 2 Track",
      category: "toolkit",
      title: "Bundel Lengkap: Data Analyst + IT GRC Job-Ready Kit",
      targetAudience: "Kandidat Sistem Informasi / Teknik Informatika yang melamar ke jalur Data maupun IT Governance/Consulting.",
      problemSolved: "Membuka peluang di dua jalur karir korporat bergaji tinggi sekaligus dengan penghematan biaya.",
      priceIdr: 199000,
      variableCostNote: "Hemat Rp 29.000 • Sekali Beli",
      promisedOutcome: "2 Proyek Portofolio Siap Kerja (Dashboard BI + Audit Working Paper ISO 27001) + Bonus Kuota AI CV Match.",
      collaboratorBadge: "Full Track Bundle",
      deliverables: [
        "Seluruh isi Track A (Data Analyst Job-Ready Kit).",
        "Seluruh isi Track B (IT GRC & Audit Job-Ready Kit).",
        "Bonus: 5x Kuota Cek JD vs CV Match Percentage.",
        "Bonus: Template Tracker Lamaran Kerja & Checklist Persiapan Interview."
      ],
      samplePreviewTitle: "Isi Bundel Lengkap (2 Portofolio + Bonus Kuota AI)",
      samplePreviewTable: [
        { col1: "Portofolio #1", col2: "End-to-End E-Commerce Retention Analysis (SQL + Excel + Power BI)." },
        { col1: "Portofolio #2", col2: "IT Audit Working Paper & Risk Control Matrix (ISO 27001:2022)." },
        { col1: "Bonus Ekstra", col2: "5 Kuota AI CV Match + Job Application Tracker." }
      ]
    },
    {
      id: "tpl-pmo-itsm",
      trackBadge: "Template Profesional • Operasional Kerja",
      category: "template",
      title: "Paket Template Profesional: PMO, ITSM & Daily Tracker",
      targetAudience: "Fresh graduate yang baru diterima kerja (onboarding) atau kandidat yang sedang mempersiapkan tes studi kasus.",
      problemSolved: "Tidak perlu membuat dokumen kerja dari kertas kosong saat hari pertama kerja atau saat ujian take-home test.",
      priceIdr: 49000,
      variableCostNote: "Sekali Beli • Format Excel/Sheets & Docs",
      promisedOutcome: "Siap pakai untuk mengelola proyek, memantau tiket SLA ITSM, dan mengatur tugas harian seperti profesional berpengalaman.",
      collaboratorBadge: "Standar Operasional Korporat",
      deliverables: [
        "Template PMO Lengkap: Project Charter, Work Breakdown Structure (WBS), RAID Log, & Matriks RACI.",
        "Template ITSM (IT Service Management): Incident & Request SLA Tracker, Problem Root-Cause Log, & Change Advisory Checklist.",
        "Template Daily Work & KPI Tracker untuk mengatur prioritas tugas harian."
      ],
      samplePreviewTitle: "Cuplikan Isi Template PMO & ITSM",
      samplePreviewTable: [
        { col1: "Modul PMO", col2: "WBS Timeline otomatis + RAID Log dengan rumus prioritas risiko (Probability x Impact)." },
        { col1: "Modul ITSM", col2: "Kalkulator SLA Response & Resolution Time otomatis (P1 Critical s/d P4 Low)." },
        { col1: "Daily Tracker", col2: "Papan tugas harian + rekap pencapaian mingguan untuk bahan laporan 1-on-1 ke atasan." }
      ]
    },
    {
      id: "tpl-job-tracker",
      trackBadge: "Entry Product • Persiapan Melamar",
      category: "template",
      title: "Template Tracker Lamaran Kerja & Checklist Interview",
      targetAudience: "Semua pencari kerja dan mahasiswa tingkat akhir yang sedang aktif mengirim puluhan lamaran.",
      problemSolved: "Lupa sudah melamar ke perusahaan mana saja, versi CV mana yang dikirim, dan apa yang harus disiapkan sebelum interview.",
      priceIdr: 29000,
      variableCostNote: "Sekali Beli (Atau Rp 15.000 via Promo Order Bump)",
      promisedOutcome: "Seluruh jadwal lamaran, kontak HR, dan checklist riset perusahaan rapi dalam satu dashboard.",
      collaboratorBadge: "Wajib Punya untuk Fresh Grad",
      deliverables: [
        "Tabel pelacak lamaran kerja multi-status (Wishlist, Applied, Assessments, HR/User Interview, Offer).",
        "Checklist persiapan H-1 Interview per lowongan (Riset produk perusahaan, daftar pertanyaan balik untuk User).",
        "Kalkulator perbandingan gaji bersih & benefit (Take-Home Pay Comparison)."
      ],
      samplePreviewTitle: "Cuplikan Kolom Tracker Lamaran Kerja",
      samplePreviewTable: [
        { col1: "Tracking Status", col2: "Otomatis menghitung rasio konversi dari CV dikirim -> dipanggil interview." },
        { col1: "Checklist H-1", col2: "10 poin pengecekan wajib sebelum masuk ruang Zoom interview." }
      ]
    },
    {
      id: "srv-human-review",
      trackBadge: "Layanan Terbatas • 1-on-1 Session",
      category: "service",
      title: "Review Portofolio / CV bersama Praktisi (Human Review)",
      targetAudience: "Kandidat yang akan menghadapi interview akhir di perusahaan impian dan butuh validasi mata manusia.",
      problemSolved: "Mendapatkan masukan tajam langsung dari praktisi IT GRC, Data, atau rekan HR terhadap portofolio & cara menjawab interview.",
      priceIdr: 149000,
      variableCostNote: "Per Sesi • Kuota Maks 5 Slot / Minggu",
      promisedOutcome: "Catatan bedah mendalam atas CV/Working Paper Anda dan simulasi tanya-jawab langsung 45 menit.",
      collaboratorBadge: "Kolaborasi Rekan Praktisi IT GRC & HR",
      deliverables: [
        "Bedah langsung (45 menit) atas CV dan proyek portofolio yang sudah Anda kerjakan.",
        "Simulasi pertanyaan tajam dari sudut pandang User / Hiring Manager asli.",
        "Catatan tertulis poin perbaikan prioritas sebelum hari-H wawancara."
      ],
      samplePreviewTitle: "Ketentuan Slot Sesi Praktisi (Menjaga Kualitas & Waktu Tim)",
      samplePreviewTable: [
        { col1: "Syarat Booking", col2: "Peserta wajib sudah merapikan draf awal dengan AI CV Polisher agar sesi fokus pada substansi mendalam." },
        { col1: "Jadwal Sesi", col2: "Fleksibel di luar jam kerja (Malam / Akhir Pekan) sesuai kesepakatan kalender praktisi." }
      ]
    }
  ],

  // 4. Produk #1 / Workspace: Job Application Tracker
  initialJobApplications: [
    {
      id: "APP-101",
      company: "PT Bank Digital Nusantara Tbk",
      role: "Junior IT GRC & Internal Audit",
      track: "IT GRC",
      status: "user_interview",
      statusLabel: "User Interview",
      matchScore: 89,
      appliedDate: "22 Okt 2026",
      nextStep: "Presentasi Studi Kasus RCM ISO 27001 (31 Okt)"
    },
    {
      id: "APP-102",
      company: "GoCommerce Indonesia",
      role: "Associate Business Intelligence Analyst",
      track: "Data Analyst",
      status: "hr_interview",
      statusLabel: "HR Interview",
      matchScore: 91,
      appliedDate: "24 Okt 2026",
      nextStep: "Wawancara Behavioral STAR dengan HR (30 Okt)"
    },
    {
      id: "APP-103",
      company: "Telco Enterprise Solutions",
      role: "Junior PMO & IT Project Officer",
      track: "PMO / ITSM",
      status: "applied",
      statusLabel: "Applied",
      matchScore: 87,
      appliedDate: "27 Okt 2026",
      nextStep: "Menunggu hasil screening CV ATS"
    },
    {
      id: "APP-104",
      company: "Global Advisory & Consulting",
      role: "IT Risk & Compliance Associate",
      track: "IT GRC",
      status: "wishlist",
      statusLabel: "Wishlist (Perlu Perbaikan CV)",
      matchScore: 46,
      appliedDate: "Target: 2 Nov 2026",
      nextStep: "Naikkan skor CV dari 46% ke >85% terlebih dahulu"
    },
    {
      id: "APP-105",
      company: "PT FinPay Sejahtera",
      role: "Junior IT Compliance Officer",
      track: "IT GRC",
      status: "offer",
      statusLabel: "Offer Letter",
      matchScore: 92,
      appliedDate: "10 Okt 2026",
      nextStep: "Review kontrak & negosiasi THP menggunakan Kalkulator Tracker"
    }
  ],

  // 5. Produk #4: AI User Interview Mock Up (Membership Bulanan - Turn-Based Voice + STAR Evaluation)
  interviewQuestionsByRole: {
    "it-grc": {
      roleName: "Junior IT GRC & Internal Audit",
      questions: [
        {
          no: 1,
          type: "Technical Case Study • ISO 27001 Access Control",
          question: "Saat melakukan audit akses user (User Access Review) pada aplikasi inti perusahaan, Anda menemukan ada 4 akun milik karyawan yang sudah resign 2 bulan lalu namun statusnya masih 'Active'. Bagaimana langkah Anda mendokumentasikan temuan ini dan apa rekomendasi kontrol yang Anda usulkan?",
          rubricFocus: "Criteria (ISO 27001 A.5.18), Condition (4 akun aktif), Cause (Proses offboarding HR tidak terhubung ke IT), Effect/Risk (Unauthorized access/kebocoran data), Recommendation (Preventif & Detektif).",
          simulatedVoiceTranscript: "Saat saya menemukan 4 akun karyawan yang sudah resign tapi masih aktif, langkah pertama saya adalah mengonfirmasi bukti daftar karyawan resign dari HRD dan membandingkannya dengan log terakhir login dari keempat akun tersebut untuk melihat apakah ada aktivitas mencurigakan setelah tanggal resign. Kemudian saya catat di kertas kerja audit sebagai temuan risiko tinggi, lalu merekomendasikan agar tim IT segera menonaktifkan akun tersebut dan membuat SOP integrasi otomatis antara sistem HR dengan tim IT Support saat ada karyawan keluar.",
          evaluation: {
            overallScore: 82,
            readinessBadge: "Sangat Baik — Siap Menghadapi User Interview",
            dimensions: {
              starStructure: 85,
              technicalAccuracy: 84,
              communicationClarity: 78
            },
            strengths: [
              "Sangat tepat dalam langkah investigasi awal: memeriksa log login terakhir (apakah terjadi penyalahgunaan pasca tanggal resign).",
              "Membedakan tindakan korektif langsung (menonaktifkan 4 akun) dan tindakan preventif sistemik (integrasi alur offboarding HR ke IT)."
            ],
            improvements: [
              "Sebutkan secara eksplisit referensi klausul standar (misal ISO/IEC 27001:2022 Annex A.5.18 Access Rights) agar terdengar lebih berbobot di depan Manager Audit.",
              "Gunakan struktur 5 atribut temuan audit secara berurutan: Condition, Criteria, Cause, Risk/Effect, dan Recommendation."
            ],
            modelAnswer: "\"Pertama, saya akan memvalidasi temuan (Condition) dengan mencocokkan tanggal efektif resign di data HR terhadap timestamp aktivitas login terakhir pada keempat akun tersebut untuk memastikan apakah terjadi unauthorized access. Kedua, saya mendokumentasikan di Audit Working Paper mengacu pada kriteria ISO/IEC 27001:2022 Annex A.5.18 terkait pencabutan hak akses tepat waktu. Ketiga, saya menggali akar masalah (Cause) bersama pemilik proses—biasanya karena belum adanya tiket pencabutan akses otomatis saat offboarding. Sebagai rekomendasi: (1) Korektif: cabut akses 4 akun tersebut dalam 1x24 jam; (2) Preventif: wajibkan checklist pencabutan akses IT sebagai syarat keluarnya paklaring/clearance HR; dan (3) Detektif: jadwalkan rekonsiliasi User Access Review bulanan.\"",
            followUpQuestion: "Pertanyaan Lanjutan Penguji: Jika dari log tersebut ternyata ditemukan 1 akun eks-karyawan sempat mengunduh database pelanggan 3 hari setelah resign, siapa pihak pertama yang Anda eskalasi dan bukti apa yang Anda amankan?"
          }
        },
        {
          no: 2,
          type: "Behavioral STAR • Konflik dengan Auditee",
          question: "Ceritakan (atau simulasikan) bagaimana sikap Anda ketika tim IT Developer menolak temuan audit Anda dan menganggap kontrol keamanan yang Anda minta hanya memperlambat pekerjaan mereka?",
          rubricFocus: "Empati komunikasi, berbasis bukti objektif & dampak risiko bisnis, mencari solusi kompensasi kontrol (compensating control).",
          simulatedVoiceTranscript: "Jika tim developer menolak temuan saya, saya tidak akan berdebat secara emosional. Saya akan mengajak mereka berdiskusi dengan menunjukkan bukti objektif dan menjelaskan risiko bisnisnya jika celah tersebut dibiarkan. Lalu saya akan mendengarkan kendala teknis mereka dan mencari jalan tengah atau compensating control yang tetap aman tapi tidak menghambat proses deployment mereka.",
          evaluation: {
            overallScore: 86,
            readinessBadge: "Sangat Kuat — Menunjukkan Kematangan Komunikasi Auditor",
            dimensions: {
              starStructure: 88,
              technicalAccuracy: 85,
              communicationClarity: 85
            },
            strengths: [
              "Menyebutkan konsep kunci 'Compensating Control' yang sangat disukai oleh Lead Auditor.",
              "Pendekatan kolaboratif berbasis risiko bisnis, bukan sekadar memaksakan pasal aturan."
            ],
            improvements: [
              "Tambahkan contoh konkret (misal: jika developer keberatan dengan approval berlapis saat hotfix darurat, izinkan prosedur Emergency Change dengan syarat post-implementation review maksimal 24 jam)."
            ],
            modelAnswer: "\"Saya menggunakan pendekatan kemitraan berbasis risiko. Pertama (Situation & Task), saya menyepakati fakta temuan di lapangan terlebih dahulu bersama developer. Kedua (Action), saya menerjemahkan risiko teknis menjadi dampak bisnis yang dipahami manajemen, sambil mendengarkan hambatan operasional mereka. Jika kontrol ideal terlalu membebani kecepatan rilis, saya menawarkan opsi Compensating Control—contohnya pada kasus Emergency Patching, developer tetap boleh melakukan rilis cepat, namun wajib tercatat pada log otomatis dan diverifikasi keesokan harinya (Post-Implementation Review) oleh tim GRC.\"",
            followUpQuestion: "Pertanyaan Lanjutan Penguji: Bagaimana jika Lead Developer tetap menolak menandatangani Management Action Plan melewati batas waktu SLA audit?"
          }
        }
      ]
    },
    "data-analyst": {
      roleName: "Junior Data Analyst (BI & SQL)",
      questions: [
        {
          no: 1,
          type: "Technical Business Case • Penurunan Metrik",
          question: "Manajer Marketing melapor bahwa total penjualan minggu ini turun 20% dibanding minggu lalu dan meminta Anda mencari tahu penyebabnya dalam 2 jam. Bagaimana urutan langkah analisis data yang Anda lakukan?",
          rubricFocus: "Validasi integritas data dulu, dekomposisi rumus Revenue (Traffic x Conversion Rate x AOV), segmentasi dimensi (Channel, Kategori, Wilayah, Device).",
          simulatedVoiceTranscript: "Langkah pertama saya akan mengecek apakah ada error pada data pipeline atau pencatatan transaksi. Jika datanya sudah benar, saya akan memecah metrik penjualan menjadi jumlah pengunjung, conversion rate, dan rata-rata nilai belanja. Dari situ saya cek di SQL dan Power BI segmen mana yang paling turun, apakah dari aplikasi Android/iOS, wilayah tertentu, atau kategori produk tertentu.",
          evaluation: {
            overallScore: 88,
            readinessBadge: "Luar Biasa — Pola Pikir Analitis Sangat Terstruktur",
            dimensions: {
              starStructure: 86,
              technicalAccuracy: 92,
              communicationClarity: 86
            },
            strengths: [
              "Memulai dari pengecekan integritas data/pipeline (banyak kandidat pemula langsung panik menganalisis padahal tabel ETL sedang telat update).",
              "Membedah persamaan dasar Revenue = Traffic × Conversion Rate × Average Order Value (AOV)."
            ],
            improvements: [
              "Sebutkan perbandingan faktor eksternal/musiman (misal apakah minggu lalu ada tanggal kembar 10.10 atau gajian sehingga penurunan minggu ini sebenarnya adalah normalisasi baseline)."
            ],
            modelAnswer: "\"Dalam waktu 2 jam, saya membagi investigasi menjadi 3 tahap: (1) Sanity Check (15 menit): Memastikan tidak ada kegagalan ETL pipeline, perubahan definisi tracking, atau efek baseline tidak wajar (misal minggu lalu adalah puncak promo Payday). (2) Dekomposisi Metrik (45 menit): Menggunakan SQL untuk membedah rumus Revenue = Active Users × Funnel Conversion Rate × AOV guna melokalisasi di tahap mana kebocoran terjadi. (3) Dimensional Slice & Dice (60 menit): Memotong data berdasarkan Platform (iOS/Android/Web), Channel Akuisisi, Metode Pembayaran (apakah ada gangguan gateway), dan Kategori Produk, lalu merangkum 3 temuan teratas beserta rekomendasi tindakan cepat.\"",
            followUpQuestion: "Pertanyaan Lanjutan Penguji: Jika ternyata penurunan 20% tersebut murni terjadi pada tahap Checkout ke Payment di pengguna Android, kueri tabel apa yang langsung Anda periksa?"
          }
        },
        {
          no: 2,
          type: "Behavioral STAR • Komunikasi Insight ke Non-Teknis",
          question: "Pernahkah Anda menemukan temuan data yang bertentangan dengan asumsi awal tim Bisnis/Marketing? Bagaimana cara Anda mempresentasikannya agar diterima tanpa memicu sikap defensif?",
          rubricFocus: "Empati bisnis, visualisasi sederhana tanpa jargon SQL/statistik, fokus pada rekomendasi aksi yang menguntungkan target KPI mereka.",
          simulatedVoiceTranscript: "Saat proyek kampus dan magang, tim acara yakin promosi di satu kanal paling efektif, tapi data survei menunjukkan konversi tertinggi justru dari referral komunitas. Saya tidak menyalahkan asumsi mereka, melainkan menampilkan grafik perbandingan konversi yang mudah dibaca dan mengusulkan realokasi sebagian kecil budget untuk diuji coba selama seminggu.",
          evaluation: {
            overallScore: 85,
            readinessBadge: "Sangat Baik — Kuat dalam Data Storytelling",
            dimensions: {
              starStructure: 86,
              technicalAccuracy: 82,
              communicationClarity: 88
            },
            strengths: [
              "Menggunakan pendekatan eksperimen bertahap (A/B test / realokasi sebagian budget) sehingga risiko bagi stakeholder rendah.",
              "Menghindari jargon teknis dan langsung mengaitkan data dengan metrik yang dipedulikan tim bisnis."
            ],
            improvements: [
              "Sebutkan angka peningkatan hasil setelah rekomendasi tersebut dijalankan (Result dalam metode STAR)."
            ],
            modelAnswer: "\"Saya selalu membingkai data sebagai alat bantu mencapai target mereka, bukan alat pembuktian siapa yang salah. Pertama (Situation & Task), saya validasi dulu pemahaman hipotesis tim Marketing. Kedua (Action), saya sajikan perbandingan metrik menggunakan visualisasi Funnel sederhana di Power BI tanpa istilah teknis rumit, lalu menawarkan opsi eksperimen risiko rendah (menggeser 20% budget ke segmen retensi tinggi selama 7 hari). Ketiga (Result), eksperimen tersebut meningkatkan ROAS sebesar 18% sehingga tim Marketing mengadopsinya secara penuh.\"",
            followUpQuestion: "Pertanyaan Lanjutan Penguji: Metrik apa yang Anda jadikan guardrail agar eksperimen tersebut tidak merusak margin keuntungan?"
          }
        }
      ]
    },
    "pmo": {
      roleName: "Junior PMO & IT Project Coordinator",
      questions: [
        {
          no: 1,
          type: "Project Governance Case • Scope Creep & Keterlambatan",
          question: "Dua minggu sebelum tanggal rilis aplikasi, tim bisnis tiba-tiba meminta tambahan 3 fitur baru, sementara kapasitas tim developer sudah penuh. Sebagai PMO, bagaimana Anda menangani situasi ini?",
          rubricFocus: "Change Request (CR) Governance, analisis dampak Triple Constraint (Scope, Time, Cost/Resource), negosiasi prioritas (MoSCoW / Phase 2 backlog), eskalasi ke SteerCo.",
          simulatedVoiceTranscript: "Sebagai PMO, saya akan meminta tim bisnis mengisi form Change Request terlebih dahulu. Lalu saya berdiskusi dengan Lead Developer untuk menghitung berapa hari tambahan waktu yang dibutuhkan jika 3 fitur itu dipaksakan masuk sekarang. Setelah itu saya ajukan opsi ke manajemen: apakah tanggal rilis mau diundur, atau 3 fitur baru tersebut dimasukkan ke rilis Fase 2 minggu berikutnya agar jadwal utama tidak mundur.",
          evaluation: {
            overallScore: 85,
            readinessBadge: "Sangat Baik — Menguasai Kontrol Scope Proyek",
            dimensions: {
              starStructure: 85,
              technicalAccuracy: 88,
              communicationClarity: 82
            },
            strengths: [
              "Tidak langsung berkata 'tidak' maupun langsung mengiyakan tanpa prosedur Change Request (CR).",
              "Memberikan opsi trade-off yang jelas berbasis data estimasi beban kerja developer."
            ],
            improvements: [
              "Tambahkan pencatatan risiko pada RAID Log dan penggunaan kerangka prioritas MoSCoW (Must-have, Should-have, Could-have, Won't-have)."
            ],
            modelAnswer: "\"Saya akan menerapkan mekanisme Change Control Governance: Pertama, saya mendokumentasikan permintaan tersebut ke dalam Change Request Log dan menilai dampaknya bersama Tech Lead terhadap Triple Constraint (jadwal rilis, kapasitas sprint, dan risiko bug saat UAT). Kedua, saya memfasilitasi penyelarasan prioritas menggunakan metode MoSCoW bersama Product Owner dan Bisnis—menyajikan simulasi objektif: Opsi A (Rilis tepat waktu dengan fitur inti, sementara 3 fitur tambahan masuk ke Sprint Fast-Follow H+14) atau Opsi B (Memasukkan fitur baru dengan menggeser tanggal Go-Live setelah disetujui Steering Committee). Semua keputusan dan risikonya saya perbarui di RAID Log.\"",
            followUpQuestion: "Pertanyaan Lanjutan Penguji: Jika Direktur Bisnis memaksa Opsi B tanpa mau menggeser tanggal Go-Live, risiko apa yang wajib Anda catat di RAID Log?"
          }
        },
        {
          no: 2,
          type: "Behavioral STAR • Menangani Blocker Lintas Tim",
          question: "Bagaimana cara Anda menindaklanjuti anggota tim senior atau vendor pihak ketiga yang berulang kali terlambat mengumpulkan deliverable proyek padahal Anda masih berstatus Junior PMO?",
          rubricFocus: "Komunikasi asertif berbasis fakta WBS & RACI, eskalasi terukur, mencari tahu root cause keterlambatan lebih awal.",
          simulatedVoiceTranscript: "Saya akan menghubungi pihak terkait secara personal terlebih dahulu untuk menanyakan apakah ada kendala teknis yang menghambat mereka. Saya tidak menegur secara subjektif, tetapi merujuk pada komitmen tanggal di WBS dan dampak keterlambatannya terhadap tim lain. Jika setelah diingatkan masih berisiko meleset, saya masukkan ke dalam daftar Issue di RAID Log dan melaporkannya pada rapat mingguan Project Manager.",
          evaluation: {
            overallScore: 87,
            readinessBadge: "Sangat Kuat — Kombinasi Empati & Ketegasan Governance",
            dimensions: {
              starStructure: 88,
              technicalAccuracy: 86,
              communicationClarity: 87
            },
            strengths: [
              "Memisahkan pendekatan 1-on-1 untuk mencari akar masalah sebelum melakukan eskalasi formal.",
              "Menggunakan artefak objektif (WBS, RACI, dan ketergantungan lintas tim) sehingga tidak terkesan mengatur secara personal."
            ],
            improvements: [
              "Sebutkan mekanisme Early Warning (misal pengecekan H-3 sebelum deadline milestone, bukan menunggu setelah lewat deadline)."
            ],
            modelAnswer: "\"Sebagai Junior PMO, otoritas saya berasal dari transparansi data dan tata kelola. Pertama (Action), saya menerapkan pengingat H-3 sebelum milestone jatuh tempo dan melakukan pendekatan 1-on-1 untuk mengidentifikasi apakah ada blocker teknis. Kedua, saya menunjukkan dampak berantai (dependency) pada WBS jika deliverable tersebut terlambat terhadap tim QA. Ketiga, jika keterlambatan melewati ambang toleransi SLA, saya menaikkan statusnya menjadi Red/Amber pada Weekly Status Report dan mengeskalasi melalui RAID Log kepada Project Manager beserta opsi mitigasinya.\"",
            followUpQuestion: "Pertanyaan Lanjutan Penguji: Indikator metrik apa yang Anda tampilkan di halaman pertama Weekly SteerCo Deck agar manajemen langsung paham kesehatan proyek?"
          }
        }
      ]
    }
  }
};
