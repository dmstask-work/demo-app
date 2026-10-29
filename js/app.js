// Interactive Controller untuk "Test App" (Refined UX, Clean User Copy, Styled Modals & Account Popover)

const AppState = {
  activePage: "landing",
  activeStudioPane: "jd-match",
  announce: {
    index: 0,
    messages: [
      "Baru: Job-Ready Case Kit (Data Analyst & IT GRC ISO 27001) + AI CV Match kini hadir dengan pembayaran QRIS Instan →",
      "Uji Coba Gratis: Cek persentase kecocokan CV Anda dengan lowongan kerja incaran dalam 5 detik →",
      "Persiapan Wawancara: Latih jawaban metode STAR via suara & pelajari contoh jawaban praktisi senior →"
    ]
  },
  heroMotion: {
    currentStep: 0,
    timer: null,
    steps: [
      {
        stepLabel: "01. Diagnosa CV vs JD",
        scoreText: "46% Initial Match",
        scoreBadgeClass: "px-3 py-1 rounded-full text-xs font-bold font-mono-num bg-amber-100 text-amber-900",
        statusText: "Terdeteksi 8 Missing Keywords kritis (ISO 27001, RCM, SQL CTE, RAID Log)",
        curveOffset: "420",
        curveColor: "#D97706",
        highlightRow: 0,
        narration: "Tahap 1 (Pay-Per-Try): Kandidat mengecek persentase kecocokan CV dengan Job Description dan menemukan celah kata kunci penyebab gagal screening ATS."
      },
      {
        stepLabel: "02. AI CV & Presentation Prep",
        scoreText: "68% ATS Formatted",
        scoreBadgeClass: "px-3 py-1 rounded-full text-xs font-bold font-mono-num bg-sky-100 text-sky-900",
        statusText: "AI Agent merapikan pengalaman magang/organisasi menjadi kalimat Action + Impact",
        curveOffset: "240",
        curveColor: "#0284C7",
        highlightRow: 1,
        narration: "Tahap 2 (One-Time Buy): Kalimat kepanitiaan & magang yang mentah diubah otomatis menjadi bullet points terukur berstandar HR korporat."
      },
      {
        stepLabel: "03. Job-Ready Case Kit",
        scoreText: "89% Portfolio Ready",
        scoreBadgeClass: "px-3 py-1 rounded-full text-xs font-bold font-mono-num bg-emerald-100 text-emerald-900",
        statusText: "Proyek Working Paper ISO 27001 & Dashboard BI dilampirkan ke portofolio CV",
        curveOffset: "90",
        curveColor: "#059669",
        highlightRow: 2,
        narration: "Tahap 3 (One-Time Buy): Kandidat tanpa pengalaman kerja menyelesaikan simulasi kasus nyata (IT GRC / Data Analyst / PMO) sebagai bukti portofolio."
      },
      {
        stepLabel: "04. User Interview Mock Up",
        scoreText: "86/100 STAR Ready",
        scoreBadgeClass: "px-3 py-1 rounded-full text-xs font-bold font-mono-num bg-emerald-100 text-emerald-900",
        statusText: "Lulus simulasi tanya-jawab teknis & behavioral STAR bersama AI Evaluator",
        curveOffset: "0",
        curveColor: "#10B981",
        highlightRow: -1,
        narration: "Tahap 4 (Membership): Setelah CV lolos dan dipanggil interview, kandidat berlatih menjawab pertanyaan User via suara dengan evaluasi rubrik STAR."
      }
    ]
  },
  wallet: {
    jdMatchCredits: 1,
    cvPolishCredits: 1,
    interviewSessionsLeft: 2,
    cvPolishUnlocked: false,
    membershipActive: false,
    referralClaimed: false,
    purchasedProducts: new Set()
  },
  jdMatch: {
    selectedRole: "it-grc",
    isUnlocked: false,
    lastComputedScore: 46,
    lastKeywordScore: 40,
    lastContextScore: 50,
    dynamicExtraMatched: []
  },
  analysisCache: new Map(),
  cvPrep: {
    activeSubTab: "cv-polisher",
    isPolished: false
  },
  catalogFilter: "all",
  trackerFilter: "all",
  applications: [...window.TEST_APP_DATA.initialJobApplications],
  interview: {
    selectedRole: "it-grc",
    questionIndex: 0,
    isEvaluated: false,
    timerSeconds: 120,
    timerInterval: null
  },
  checkoutContext: null
};

// Security & Formatting Utilities
function formatRupiah(num) {
  return "Rp " + Number(num).toLocaleString("id-ID");
}

function escapeHtml(raw) {
  return String(raw || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function scrubPII(text) {
  return String(text || "")
    .replace(/\b\d{16}\b/g, "[ID_REDACTED]")
    .replace(/(?:\+62|62|0)8[1-9][0-9]{6,10}\b/g, "[PHONE_REDACTED]")
    .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "[EMAIL_REDACTED]");
}

function computeContentHash(cvText, jdText, roleKey) {
  const combined = `${roleKey}::${cvText.trim()}::${jdText.trim()}::v1.4`;
  let hash = 2166136261;
  for (let i = 0; i < combined.length; i++) {
    hash ^= combined.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return "sha256-" + (hash >>> 0).toString(16).padStart(8, "0");
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const el = document.createElement("div");
  el.className = "bg-slate-900 text-white px-4 py-3 rounded-lg text-xs font-medium flex items-center gap-2.5 shadow-lg";
  el.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span><span>${escapeHtml(message)}</span>`;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transition = "opacity 200ms ease";
    setTimeout(() => el.remove(), 220);
  }, 3200);
}

// 0. Subtle Announcement Bar Rotator
function startAnnouncementRotator() {
  const textEl = document.getElementById("announce-rotator-text");
  if (!textEl) return;
  setInterval(() => {
    textEl.classList.add("is-changing");
    setTimeout(() => {
      AppState.announce.index = (AppState.announce.index + 1) % AppState.announce.messages.length;
      textEl.textContent = AppState.announce.messages[AppState.announce.index];
      textEl.classList.remove("is-changing");
    }, 260);
  }, 4800);
}

// 1. Page, Studio & User Account Popover Navigation
function switchMainPage(pageName, targetSectionId) {
  AppState.activePage = pageName;
  document.getElementById("page-landing").classList.toggle("active", pageName === "landing");
  document.getElementById("page-studio").classList.toggle("active", pageName === "studio");
  closeMobileMenu();
  closeUserAccountMenu();

  if (pageName === "landing" && targetSectionId) {
    setTimeout(() => {
      const target = document.getElementById(targetSectionId);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }, 40);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function toggleProductsDropdown(e) {
  if (e) e.stopPropagation();
  closeUserAccountMenu();
  const wrapper = document.getElementById("products-dropdown-wrapper");
  if (wrapper) wrapper.classList.toggle("open");
}

function toggleUserAccountMenu(e) {
  if (e) e.stopPropagation();
  const prodWrapper = document.getElementById("products-dropdown-wrapper");
  if (prodWrapper) prodWrapper.classList.remove("open");
  const accWrapper = document.getElementById("user-account-wrapper");
  if (accWrapper) accWrapper.classList.toggle("open");
}

function closeUserAccountMenu() {
  const accWrapper = document.getElementById("user-account-wrapper");
  if (accWrapper) accWrapper.classList.remove("open");
}

function toggleMobileMenu() {
  const drawer = document.getElementById("mobile-nav-drawer");
  if (drawer) drawer.classList.toggle("open");
}

function closeMobileMenu() {
  const drawer = document.getElementById("mobile-nav-drawer");
  if (drawer) drawer.classList.remove("open");
}

function selectProductFromSubMenu(paneId, subOption) {
  const wrapper = document.getElementById("products-dropdown-wrapper");
  if (wrapper) wrapper.classList.remove("open");
  closeUserAccountMenu();
  closeMobileMenu();
  switchMainPage("studio");
  switchStudioPane(paneId);
  if (paneId === "cv-prep" && subOption) switchCvSubTab(subOption);
  if (paneId === "toolkits" && subOption) filterCatalog(subOption);
}

function switchStudioPane(paneId) {
  AppState.activeStudioPane = paneId;
  document.querySelectorAll(".studio-pill-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.pane === paneId);
  });
  document.querySelectorAll(".studio-pane").forEach((pane) => {
    pane.classList.toggle("active", pane.id === `pane-${paneId}`);
  });
}

function updateHeaderWallet() {
  const countEl = document.getElementById("wallet-credits-count");
  const studioJd = document.getElementById("studio-wallet-jd");
  const studioCv = document.getElementById("studio-wallet-cv");
  const studioInt = document.getElementById("studio-wallet-interview");
  const cvLabel = document.getElementById("cv-polish-credits-label");
  const planBadge = document.getElementById("user-plan-badge");

  if (countEl) countEl.textContent = AppState.wallet.jdMatchCredits;
  if (studioJd) studioJd.textContent = `${AppState.wallet.jdMatchCredits}x`;
  if (studioCv) studioCv.textContent = `${AppState.wallet.cvPolishCredits}x`;
  if (cvLabel) cvLabel.textContent = AppState.wallet.cvPolishCredits;
  if (studioInt) {
    studioInt.textContent = AppState.wallet.membershipActive
      ? `${AppState.wallet.interviewSessionsLeft} Sesi Aktif`
      : `${AppState.wallet.interviewSessionsLeft} Sesi Trial`;
  }
  if (planBadge && (AppState.wallet.membershipActive || AppState.jdMatch.isUnlocked)) {
    planBadge.textContent = AppState.wallet.membershipActive ? "Member Aktif" : "Paket Aktif";
    planBadge.className = "px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-semibold";
  }
}

// 2. Hero Scroll-Triggered Motion Graphic Storyboard
function renderHeroMotionStep(stepIdx) {
  AppState.heroMotion.currentStep = stepIdx;
  const step = AppState.heroMotion.steps[stepIdx];
  document.querySelectorAll(".motion-step-btn").forEach((btn, idx) => {
    btn.classList.toggle("active", idx === stepIdx);
  });

  const scoreBadge = document.getElementById("hero-live-score");
  const statusPill = document.getElementById("hero-status-pill");
  const curvePath = document.getElementById("hero-growth-path");
  const narrationEl = document.getElementById("hero-motion-narration");

  if (scoreBadge) {
    scoreBadge.textContent = step.scoreText;
    scoreBadge.className = step.scoreBadgeClass;
  }
  if (statusPill) statusPill.textContent = step.statusText;
  if (curvePath) {
    curvePath.style.strokeDashoffset = step.curveOffset;
    curvePath.style.stroke = step.curveColor;
  }
  if (narrationEl) narrationEl.textContent = step.narration;

  document.querySelectorAll(".hero-sheet-row").forEach((row, rIdx) => {
    row.style.backgroundColor = rIdx === step.highlightRow ? "#FEFCE8" : "transparent";
  });
}

function selectHeroMotionStep(stepIdx) {
  if (AppState.heroMotion.timer) clearInterval(AppState.heroMotion.timer);
  renderHeroMotionStep(stepIdx);
  startHeroMotionCycle();
}

function startHeroMotionCycle() {
  if (AppState.heroMotion.timer) clearInterval(AppState.heroMotion.timer);
  AppState.heroMotion.timer = setInterval(() => {
    const next = (AppState.heroMotion.currentStep + 1) % AppState.heroMotion.steps.length;
    renderHeroMotionStep(next);
  }, 2800);
}

// 3. Studio Pane 1: JD vs CV Match
function updateCharCounters() {
  const jdEl = document.getElementById("input-jd-text");
  const cvEl = document.getElementById("input-cv-text");
  const jdCount = document.getElementById("jd-char-count");
  const cvCount = document.getElementById("cv-char-count");
  if (jdEl && jdCount) jdCount.textContent = `${jdEl.value.length} / 3.000 kar`;
  if (cvEl && cvCount) cvCount.textContent = `${cvEl.value.length} / 4.000 kar`;
}

function applyPiiScrubberToInput() {
  const cvEl = document.getElementById("input-cv-text");
  if (!cvEl) return;
  const sampleWithPii = cvEl.value.includes("@") || /\d{10,16}/.test(cvEl.value)
    ? cvEl.value
    : `${cvEl.value}\nKontak: NIK 3174051209990001 | HP: 081298765432 | Email: raka.pratama@kampus.ac.id`;
  cvEl.value = scrubPII(sampleWithPii);
  updateCharCounters();
  showToast("Perlindungan Privasi Aktif: NIK, Nomor HP, dan Email Anda disensor otomatis sebelum dianalisis.");
}

function computeO1KeywordMatch(roleKey, rawCvText) {
  const data = window.TEST_APP_DATA.jdMatchScenarios[roleKey];
  const tokens = rawCvText.toLowerCase().split(/[^a-z0-9_+#/.-]+/).filter(Boolean);
  const cvTokenSet = new Set(tokens);
  const extraMatched = [];

  data.missingKeywords.forEach((kw) => {
    const kwTokens = kw.toLowerCase().split(/[^a-z0-9]+/).filter((t) => t.length > 2);
    if (kwTokens.some((t) => cvTokenSet.has(t))) {
      extraMatched.push(kw);
    }
  });
  return extraMatched;
}

function selectJdScenario(roleKey) {
  AppState.jdMatch.selectedRole = roleKey;
  const data = window.TEST_APP_DATA.jdMatchScenarios[roleKey];
  document.querySelectorAll(".scenario-pill").forEach((btn) => {
    const isActive = btn.dataset.role === roleKey;
    btn.className = isActive
      ? "scenario-pill px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-white transition"
      : "scenario-pill px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
  });
  document.getElementById("input-jd-text").value = data.jdText.slice(0, 3000);
  document.getElementById("input-cv-text").value = data.cvSnippet.slice(0, 4000);
  AppState.jdMatch.dynamicExtraMatched = [];
  AppState.jdMatch.lastKeywordScore = data.keywordMatchScore;
  AppState.jdMatch.lastContextScore = data.aiContextScore;
  AppState.jdMatch.lastComputedScore = data.initialScore;
  updateCharCounters();
  renderJdMatchResult();
}

function runJdMatchAnalysis() {
  const jdEl = document.getElementById("input-jd-text");
  const cvEl = document.getElementById("input-cv-text");
  const scrubbedCv = scrubPII(cvEl.value.slice(0, 4000));
  cvEl.value = scrubbedCv;
  updateCharCounters();

  const hashKey = computeContentHash(scrubbedCv, jdEl.value.slice(0, 3000), AppState.jdMatch.selectedRole);
  const cacheBadge = document.getElementById("cache-hash-indicator");

  if (AppState.analysisCache.has(hashKey)) {
    if (cacheBadge) cacheBadge.textContent = "Hasil Tersimpan (Tanpa Potong Kuota)";
    renderJdMatchResult();
    showToast("Teks CV & JD belum berubah — menampilkan hasil analisis sebelumnya tanpa memotong kuota Anda.");
    return;
  }

  if (AppState.wallet.jdMatchCredits <= 0 && !AppState.jdMatch.isUnlocked) {
    openQrisCheckout({ title: "Buka Hasil Lengkap + 5x Kuota CV Match", price: 29000, type: "unlock-jd-match", allowOrderBump: true });
    return;
  }

  if (!AppState.jdMatch.isUnlocked) {
    AppState.wallet.jdMatchCredits = Math.max(0, AppState.wallet.jdMatchCredits - 1);
    updateHeaderWallet();
  }

  const data = window.TEST_APP_DATA.jdMatchScenarios[AppState.jdMatch.selectedRole];
  const extra = computeO1KeywordMatch(AppState.jdMatch.selectedRole, scrubbedCv);
  AppState.jdMatch.dynamicExtraMatched = extra;
  const kwBoost = Math.min(52, extra.length * 7);
  AppState.jdMatch.lastKeywordScore = Math.min(95, data.keywordMatchScore + kwBoost);
  AppState.jdMatch.lastContextScore = Math.min(92, data.aiContextScore + Math.round(kwBoost * 0.6));
  AppState.jdMatch.lastComputedScore = Math.round(0.4 * AppState.jdMatch.lastKeywordScore + 0.6 * AppState.jdMatch.lastContextScore);

  AppState.analysisCache.set(hashKey, true);
  if (cacheBadge) cacheBadge.textContent = "Baru Dianalisis";
  renderJdMatchResult();
  showToast("Analisis kecocokan CV vs JD selesai! Data pribadi Anda otomatis dilindungi.");
}

function renderJdScoreHeader(data, isUnlocked) {
  const currentScore = isUnlocked ? data.unlockedScore : AppState.jdMatch.lastComputedScore;
  document.getElementById("match-score-number").textContent = `${currentScore}%`;
  const barEl = document.getElementById("match-score-bar");
  barEl.style.width = `${currentScore}%`;
  barEl.className = `h-full rounded-full transition-all duration-700 ${currentScore >= 80 ? "bg-emerald-600" : "bg-amber-500"}`;

  const statusBadge = document.getElementById("match-status-badge");
  statusBadge.className = currentScore >= 80
    ? "px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900"
    : "px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900";
  statusBadge.textContent = currentScore >= 80 ? "ATS Ready • Siap Melamar" : "Perlu Perbaikan • Keyword Hilang";

  document.getElementById("subscore-keyword").textContent = isUnlocked ? "92%" : `${AppState.jdMatch.lastKeywordScore}%`;
  document.getElementById("subscore-context").textContent = isUnlocked ? "88%" : `${AppState.jdMatch.lastContextScore}%`;
}

function renderJdKeywordsAndRadar(data, isUnlocked) {
  const extraSet = new Set(AppState.jdMatch.dynamicExtraMatched);
  const allMatched = [...data.matchedKeywords, ...AppState.jdMatch.dynamicExtraMatched];

  document.getElementById("matched-keywords-list").innerHTML = allMatched
    .map((kw) => `<span class="px-2.5 py-1 rounded text-xs font-medium bg-emerald-50 text-emerald-900">${escapeHtml(kw)}</span>`)
    .join("");

  const remainingMissing = data.missingKeywords.filter((kw) => !extraSet.has(kw));
  document.getElementById("missing-keywords-list").innerHTML = remainingMissing
    .map((kw, idx) => {
      if (idx < 2 || isUnlocked) {
        return `<span class="px-2.5 py-1 rounded text-xs font-medium ${isUnlocked ? "bg-emerald-50 text-emerald-900" : "bg-rose-50 text-rose-900"}">${escapeHtml(kw)}</span>`;
      }
      return `<span class="px-2.5 py-1 rounded text-xs font-medium bg-slate-100 text-slate-500">Keyword Terkunci #${idx + 1}</span>`;
    })
    .join("");

  const radarEl = document.getElementById("market-radar-trend");
  if (radarEl) {
    radarEl.textContent = `${data.missingKeywords.slice(0, 2).join(" & ")}`;
  }
}

function renderJdMatchResult() {
  const data = window.TEST_APP_DATA.jdMatchScenarios[AppState.jdMatch.selectedRole];
  const isUnlocked = AppState.jdMatch.isUnlocked;
  renderJdScoreHeader(data, isUnlocked);
  renderJdKeywordsAndRadar(data, isUnlocked);

  document.getElementById("free-recommendations-list").innerHTML = data.freeRecommendations
    .map((rec) => `
      <div class="py-3.5 border-b border-slate-200 space-y-1.5">
        <div class="flex items-center justify-between gap-2">
          <span class="text-xs font-bold text-slate-900">${escapeHtml(rec.category)}</span>
          <span class="text-xs font-semibold text-emerald-800 shrink-0">Terbuka Gratis</span>
        </div>
        <div class="text-xs text-slate-600"><strong>Kalimat Lama:</strong> "${escapeHtml(rec.before)}"</div>
        <div class="text-xs text-slate-900 font-medium"><strong>Saran AI Standar HR:</strong> "${escapeHtml(rec.after)}"</div>
      </div>`)
    .join("");

  const lockedContainer = document.getElementById("locked-recommendations-list");
  const paywallOverlay = document.getElementById("blurred-teaser-overlay");
  if (isUnlocked) {
    paywallOverlay.style.display = "none";
    lockedContainer.className = "divide-y divide-slate-200 redacted-unlocked";
    lockedContainer.innerHTML = data.lockedRecommendationsPayload
      .map((rec) => `
        <div class="py-3.5 space-y-1.5">
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs font-bold text-slate-900">${escapeHtml(rec.category)}</span>
            <span class="text-xs font-semibold text-emerald-800 shrink-0">Terbuka Penuh</span>
          </div>
          <div class="text-xs text-slate-600"><strong>Kondisi Awal:</strong> ${escapeHtml(rec.before)}</div>
          <div class="text-xs text-slate-900 font-medium"><strong>Kalimat Siap Salin:</strong> "${escapeHtml(rec.after)}"</div>
        </div>`)
      .join("");
  } else {
    paywallOverlay.style.display = "flex";
    lockedContainer.className = "divide-y divide-slate-200 redacted-blur";
    lockedContainer.innerHTML = [1, 2]
      .map((n) => `
        <div class="py-3 space-y-1">
          <div class="text-xs font-bold">Rekomendasi Kalimat Standar HR #${n + 2}</div>
          <div class="text-xs">Saran perbaikan kalimat pengalaman dan kata kunci profesi siap salin ke CV Anda.</div>
        </div>`)
      .join("");
  }
}

// 4. Studio Pane 2: CV Polisher & Corporate Presentation Prep
function switchCvSubTab(subTab) {
  AppState.cvPrep.activeSubTab = subTab;
  const btnCv = document.getElementById("subtab-btn-cv");
  const btnPres = document.getElementById("subtab-btn-pres");
  if (btnCv && btnPres) {
    btnCv.className = subTab === "cv-polisher"
      ? "px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 text-white transition"
      : "px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
    btnPres.className = subTab === "corp-presentation"
      ? "px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 text-white transition"
      : "px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
  }
  document.getElementById("subview-cv-polisher").style.display = subTab === "cv-polisher" ? "grid" : "none";
  document.getElementById("subview-corp-presentation").style.display = subTab === "corp-presentation" ? "block" : "none";
}

function runAiCvPolish() {
  if (AppState.wallet.cvPolishCredits <= 0 && !AppState.cvPrep.isPolished) {
    openQrisCheckout({ title: "Paket AI CV Preparation (5x Polish + 10x JD Match)", price: 49000, type: "cv-pack", allowOrderBump: true });
    return;
  }
  if (!AppState.cvPrep.isPolished) {
    AppState.wallet.cvPolishCredits = Math.max(0, AppState.wallet.cvPolishCredits - 1);
    updateHeaderWallet();
  }
  AppState.cvPrep.isPolished = true;
  renderCvPolisher();
  showToast("AI Agent selesai merapikan pengalaman Anda menjadi kalimat terukur berstandar HR!");
}

function renderCvPolisher() {
  const items = window.TEST_APP_DATA.cvPolisherItems;
  const isPolished = AppState.cvPrep.isPolished;
  document.getElementById("cv-polisher-comparison").innerHTML = items
    .map((item) => `
      <div class="py-4 border-b border-slate-200 space-y-3">
        <div class="flex items-center justify-between gap-2">
          <div>
            <div class="text-xs font-bold text-slate-900">${escapeHtml(item.role)}</div>
            <div class="text-xs font-mono-num text-slate-500">${escapeHtml(item.period)}</div>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${isPolished ? "bg-emerald-100 text-emerald-900" : "bg-amber-100 text-amber-900"}">${isPolished ? "Sudah Di-Polish AI" : "Kalimat Mentah"}</span>
        </div>
        <div class="space-y-1">
          <div class="text-xs font-semibold text-slate-500">Sebelum (Kalimat Biasa):</div>
          <ul class="list-disc pl-4 space-y-1 text-xs text-slate-600">
            ${item.rawBullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
          </ul>
        </div>
        ${isPolished ? `<div class="pt-2 space-y-1"><div class="text-xs font-bold text-emerald-800">Sesudah Diperbaiki AI Agent (Action Verb + Task + Impact):</div><ul class="list-disc pl-4 space-y-1 text-xs font-medium text-slate-900">${item.polishedBullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul></div>` : ""}
      </div>`)
    .join("");

  document.getElementById("ats-preview-bullets-1").innerHTML = (isPolished ? items[0].polishedBullets : items[0].rawBullets).map((b) => `<li>${escapeHtml(b)}</li>`).join("");
  document.getElementById("ats-preview-bullets-2").innerHTML = (isPolished ? items[1].polishedBullets : items[1].rawBullets).map((b) => `<li>${escapeHtml(b)}</li>`).join("");
}

function renderCorporatePresentation() {
  const slides = window.TEST_APP_DATA.corporatePresentationSlides;
  document.getElementById("corp-slides-container").innerHTML = slides
    .map((s) => `
      <div class="py-5 border-b border-slate-200 space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2.5">
            <span class="px-3 py-1 rounded bg-slate-900 text-white text-xs font-mono-num font-bold">${escapeHtml(s.slideNo)}</span>
            <h4 class="text-sm font-bold text-slate-900 m-0">${escapeHtml(s.title)}</h4>
          </div>
          <span class="text-xs font-semibold text-emerald-800">Framework Korporat</span>
        </div>
        <p class="text-xs text-slate-600 m-0">${escapeHtml(s.purpose)}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
          <div class="p-4 rounded-lg bg-rose-50 text-slate-800">
            <strong class="text-rose-800 block mb-1">Hindari (Gaya Presentasi Kampus):</strong>
            <div>${escapeHtml(s.badExample)}</div>
          </div>
          <div class="p-4 rounded-lg bg-emerald-50 text-slate-900">
            <strong class="text-emerald-900 block mb-1">Gunakan (Gaya Konsultan / Korporat):</strong>
            <div class="font-medium">${escapeHtml(s.goodExample)}</div>
          </div>
        </div>
      </div>`)
    .join("");
}

// 5. Studio Pane 3: Katalog Job-Ready Toolkits & Templates
function filterCatalog(cat) {
  AppState.catalogFilter = cat;
  document.querySelectorAll(".catalog-filter-btn").forEach((b) => {
    const active = b.dataset.cat === cat;
    b.className = active
      ? "catalog-filter-btn px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-white transition"
      : "catalog-filter-btn px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
  });
  renderCatalog();
}

function renderCatalog() {
  const list = window.TEST_APP_DATA.productsCatalog.filter(
    (p) => AppState.catalogFilter === "all" || p.category === AppState.catalogFilter
  );
  document.getElementById("catalog-grid").innerHTML = list
    .map((p) => {
      const owned = AppState.wallet.purchasedProducts.has(p.id);
      return `
      <div class="py-5 px-2 sm:px-4 border-b border-slate-200 flex flex-col justify-between space-y-4">
        <div class="space-y-2">
          <h3 class="text-base font-bold text-slate-900 m-0">${escapeHtml(p.title)}</h3>
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="text-xs font-semibold text-slate-600">${escapeHtml(p.trackBadge)}</span>
            <span class="text-xs font-semibold text-emerald-800">${escapeHtml(p.collaboratorBadge)}</span>
          </div>
          <p class="text-xs text-slate-600 m-0 leading-relaxed">${escapeHtml(p.problemSolved)}</p>
          <ul class="space-y-1.5 text-xs text-slate-700 pt-1">
            ${p.deliverables.slice(0, 4).map((d) => `<li class="flex items-start gap-2"><span class="text-emerald-700 font-bold">•</span><span>${escapeHtml(d)}</span></li>`).join("")}
          </ul>
        </div>
        <div class="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
          <div>
            <div class="text-base font-bold font-mono-num text-slate-900">${formatRupiah(p.priceIdr)}</div>
            <div class="text-xs text-slate-500">${escapeHtml(p.variableCostNote)}</div>
          </div>
          <div class="flex items-center gap-2">
            <button class="px-3.5 py-2 rounded-lg text-xs font-semibold border border-slate-300 text-slate-800 hover:bg-slate-50 transition" onclick="openToolkitPreview('${p.id}')">Intip Isi</button>
            ${owned
              ? `<button class="px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-500 text-slate-950" onclick="showToast('Mengunduh paket dokumen & template Anda...')">Unduh Paket</button>`
              : `<button class="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition" onclick="openQrisCheckout({ title: '${escapeHtml(p.title)}', price: ${p.priceIdr}, type: 'product', productId: '${p.id}', allowOrderBump: ${p.id !== 'tpl-job-tracker'} })">Beli Sekali Bayar</button>`}
          </div>
        </div>
      </div>`;
    })
    .join("");
}

function openToolkitPreview(productId) {
  const p = window.TEST_APP_DATA.productsCatalog.find((item) => item.id === productId);
  if (!p) return;
  document.getElementById("preview-modal-title").textContent = p.title;
  document.getElementById("preview-modal-subtitle").textContent = p.samplePreviewTitle;
  document.getElementById("preview-modal-table").innerHTML = p.samplePreviewTable
    .map((row) => `
      <div class="py-2.5 border-b border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-xs">
        <div class="font-bold text-slate-900">${escapeHtml(row.col1)}</div>
        <div class="sm:col-span-2 text-slate-600">${escapeHtml(row.col2)}</div>
      </div>`)
    .join("");
  document.getElementById("modal-toolkit-preview").classList.add("open");
}

// 6. Studio Pane 4: Job Application Tracker (With Custom Styled Modal)
function filterTracker(status) {
  AppState.trackerFilter = status;
  document.querySelectorAll(".tracker-filter-btn").forEach((b) => {
    const active = b.dataset.status === status;
    b.className = active
      ? "tracker-filter-btn px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-white transition"
      : "tracker-filter-btn px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
  });
  renderTrackerTable();
}

function cycleApplicationStatus(appId) {
  const order = [
    { key: "wishlist", label: "Wishlist" },
    { key: "applied", label: "Applied" },
    { key: "hr_interview", label: "HR Interview" },
    { key: "user_interview", label: "User Interview" },
    { key: "offer", label: "Offer Letter" },
    { key: "rejected", label: "Rejected" }
  ];
  const app = AppState.applications.find((a) => a.id === appId);
  if (!app) return;
  const idx = order.findIndex((o) => o.key === app.status);
  const next = order[(idx + 1) % order.length];
  app.status = next.key;
  app.statusLabel = next.label;
  renderTrackerTable();
  showToast(`Status lamaran ${app.company} diperbarui ke: ${next.label}`);
}

function renderTrackerTable() {
  const rows = AppState.applications.filter(
    (app) => AppState.trackerFilter === "all" || app.status === AppState.trackerFilter
  );
  document.getElementById("tracker-table-body").innerHTML = rows
    .map((app) => {
      const scoreColor = app.matchScore >= 85
        ? "bg-emerald-100 text-emerald-900"
        : app.matchScore >= 65
        ? "bg-amber-100 text-amber-900"
        : "bg-rose-100 text-rose-900";
      return `
      <tr class="border-b border-slate-200 text-xs hover:bg-slate-50 transition">
        <td class="py-3.5 px-3 font-mono-num text-slate-500">${escapeHtml(app.id)}</td>
        <td class="py-3.5 px-3 font-bold text-slate-900">${escapeHtml(app.company)}</td>
        <td class="py-3.5 px-3 text-slate-700">${escapeHtml(app.role)} <span class="ml-1 px-2 py-0.5 rounded bg-slate-100 text-xs">${escapeHtml(app.track)}</span></td>
        <td class="py-3.5 px-3"><button onclick="cycleApplicationStatus('${escapeHtml(app.id)}')" class="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 whitespace-nowrap cursor-pointer border-0" title="Klik untuk ubah status">${escapeHtml(app.statusLabel)} ↻</button></td>
        <td class="py-3.5 px-3"><span class="px-2.5 py-1 rounded-full text-xs font-bold font-mono-num whitespace-nowrap ${scoreColor}">${Number(app.matchScore)}% Match</span></td>
        <td class="py-3.5 px-3 font-mono-num text-slate-500 whitespace-nowrap">${escapeHtml(app.appliedDate)}</td>
        <td class="py-3.5 px-3 text-slate-600">${escapeHtml(app.nextStep)}</td>
      </tr>`;
    })
    .join("");
}

function openAddApplicationModal() {
  document.getElementById("modal-add-application").classList.add("open");
  const companyInput = document.getElementById("input-app-company");
  if (companyInput) setTimeout(() => companyInput.focus(), 50);
}

function submitNewApplication(e) {
  if (e) e.preventDefault();
  const company = document.getElementById("input-app-company").value.trim();
  const role = document.getElementById("input-app-role").value.trim();
  const track = document.getElementById("input-app-track").value;
  const status = document.getElementById("input-app-status").value;
  const nextStep = document.getElementById("input-app-next").value.trim() || "Menunggu hasil seleksi";

  if (!company || !role) return;

  const statusLabels = {
    wishlist: "Wishlist",
    applied: "Applied",
    hr_interview: "HR Interview",
    user_interview: "User Interview",
    offer: "Offer Letter",
    rejected: "Rejected"
  };

  AppState.applications.unshift({
    id: `APP-${100 + AppState.applications.length + 1}`,
    company: company.slice(0, 80),
    role: role.slice(0, 80),
    track,
    status,
    statusLabel: statusLabels[status] || "Applied",
    matchScore: AppState.jdMatch.isUnlocked ? 89 : 78,
    appliedDate: "29 Okt 2026",
    nextStep: nextStep.slice(0, 120)
  });

  renderTrackerTable();
  closeModals();
  showToast(`Lamaran ke ${company} berhasil ditambahkan ke Job Tracker!`);
}

// 7. Studio Pane 5: User Interview Mock Up
function selectInterviewRole(roleKey) {
  AppState.interview.selectedRole = roleKey;
  AppState.interview.questionIndex = 0;
  AppState.interview.isEvaluated = false;
  resetInterviewTimer();
  document.querySelectorAll(".interview-role-btn").forEach((b) => {
    const active = b.dataset.role === roleKey;
    b.className = active
      ? "interview-role-btn px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-white transition"
      : "interview-role-btn px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
  });
  renderInterviewSession();
}

function selectInterviewQuestion(qIdx) {
  AppState.interview.questionIndex = qIdx;
  AppState.interview.isEvaluated = false;
  resetInterviewTimer();
  document.getElementById("interview-answer-input").value = "";
  enforceInterviewWordCap();
  renderInterviewSession();
}

function toggleInterviewTimer() {
  const btn = document.getElementById("interview-timer-btn");
  if (AppState.interview.timerInterval) {
    resetInterviewTimer();
    return;
  }
  if (btn) btn.textContent = "Reset Timer";
  AppState.interview.timerInterval = setInterval(() => {
    AppState.interview.timerSeconds = Math.max(0, AppState.interview.timerSeconds - 1);
    const mins = String(Math.floor(AppState.interview.timerSeconds / 60)).padStart(2, "0");
    const secs = String(AppState.interview.timerSeconds % 60).padStart(2, "0");
    const disp = document.getElementById("interview-timer-display");
    if (disp) disp.textContent = `${mins}:${secs}`;
    if (AppState.interview.timerSeconds === 0) {
      resetInterviewTimer();
      showToast("Waktu menjawab 2 menit selesai! Menampilkan hasil evaluasi...");
      evaluateInterviewAnswer();
    }
  }, 1000);
}

function resetInterviewTimer() {
  if (AppState.interview.timerInterval) {
    clearInterval(AppState.interview.timerInterval);
    AppState.interview.timerInterval = null;
  }
  AppState.interview.timerSeconds = 120;
  const disp = document.getElementById("interview-timer-display");
  const btn = document.getElementById("interview-timer-btn");
  if (disp) disp.textContent = "02:00";
  if (btn) btn.textContent = "Mulai Timer";
}

function enforceInterviewWordCap() {
  const textarea = document.getElementById("interview-answer-input");
  const countEl = document.getElementById("interview-word-count");
  if (!textarea || !countEl) return;
  const words = textarea.value.trim().split(/\s+/).filter(Boolean);
  if (words.length > 300) {
    textarea.value = words.slice(0, 300).join(" ");
  }
  const finalCount = textarea.value.trim() ? textarea.value.trim().split(/\s+/).length : 0;
  countEl.textContent = `${finalCount} / 300 kata`;
}

function simulateSpeechToText() {
  const roleData = window.TEST_APP_DATA.interviewQuestionsByRole[AppState.interview.selectedRole];
  const q = roleData.questions[AppState.interview.questionIndex];
  const textarea = document.getElementById("interview-answer-input");
  textarea.value = "";
  const words = q.simulatedVoiceTranscript.split(" ");
  let i = 0;
  const timer = setInterval(() => {
    if (i < words.length) {
      textarea.value += (i === 0 ? "" : " ") + words[i];
      enforceInterviewWordCap();
      i++;
    } else {
      clearInterval(timer);
      showToast("Suara berhasil ditranskripsi menjadi teks secara instan!");
    }
  }, 25);
}

function evaluateInterviewAnswer() {
  const text = document.getElementById("interview-answer-input").value.trim();
  if (!text) {
    simulateSpeechToText();
    setTimeout(() => {
      AppState.interview.isEvaluated = true;
      renderInterviewSession();
    }, 1400);
    return;
  }
  AppState.interview.isEvaluated = true;
  renderInterviewSession();
  showToast("Evaluasi jawaban metode STAR & pertanyaan lanjutan siap ditinjau!");
}

function renderInterviewSession() {
  const roleData = window.TEST_APP_DATA.interviewQuestionsByRole[AppState.interview.selectedRole];
  const q = roleData.questions[AppState.interview.questionIndex] || roleData.questions[0];

  [0, 1].forEach((idx) => {
    const btn = document.getElementById(`q-step-btn-${idx}`);
    if (btn) {
      btn.className = idx === AppState.interview.questionIndex
        ? "px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900 text-white cursor-pointer border-0"
        : "px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer border-0";
    }
  });

  document.getElementById("interview-q-type").textContent = q.type;
  document.getElementById("interview-q-text").textContent = q.question;
  document.getElementById("interview-q-rubric").textContent = q.rubricFocus;

  const evBox = document.getElementById("interview-evaluation-box");
  const emptyBox = document.getElementById("interview-empty-box");
  if (!AppState.interview.isEvaluated) {
    evBox.style.display = "none";
    if (emptyBox) emptyBox.style.display = "flex";
    return;
  }

  if (emptyBox) emptyBox.style.display = "none";
  evBox.style.display = "block";
  const ev = q.evaluation;
  document.getElementById("ev-overall-score").textContent = `${ev.overallScore}/100`;
  document.getElementById("ev-readiness-badge").textContent = ev.readinessBadge;
  document.getElementById("ev-star-score").textContent = `${ev.dimensions.starStructure}%`;
  document.getElementById("ev-tech-score").textContent = `${ev.dimensions.technicalAccuracy}%`;
  document.getElementById("ev-comm-score").textContent = `${ev.dimensions.communicationClarity}%`;
  document.getElementById("ev-strengths-list").innerHTML = ev.strengths.map((s) => `<li>${escapeHtml(s)}</li>`).join("");
  document.getElementById("ev-improvements-list").innerHTML = ev.improvements.map((im) => `<li>${escapeHtml(im)}</li>`).join("");
  document.getElementById("ev-model-answer").textContent = ev.modelAnswer;
  const followUpEl = document.getElementById("ev-followup-question");
  if (followUpEl) followUpEl.textContent = ev.followUpQuestion || "";
}

// 8. Growth Hacks (Campus Referral +2 Quota & Shareable Score Card) & User Feedback
function claimCampusReferral() {
  closeUserAccountMenu();
  if (AppState.wallet.referralClaimed) {
    showToast("Link Referral Kampus (testapp.id/?ref=RAKA-UI) sudah disalin! Anda sudah mengklaim +2 kuota gratis.");
    return;
  }
  AppState.wallet.referralClaimed = true;
  AppState.wallet.jdMatchCredits += 2;
  updateHeaderWallet();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText("https://testapp.id/?ref=KAMPUS-RAKA").catch(() => {});
  }
  showToast("Link Referral Kampus berhasil disalin! +2 Kuota Cek CV Gratis ditambahkan ke akun Anda.");
}

function openScoreCardModal(source) {
  closeUserAccountMenu();
  const roleData = window.TEST_APP_DATA.jdMatchScenarios[AppState.jdMatch.selectedRole];
  const roleEl = document.getElementById("scorecard-role-title");
  const valEl = document.getElementById("scorecard-metric-value");
  const lblEl = document.getElementById("scorecard-metric-label");

  if (source === "interview") {
    const intRole = window.TEST_APP_DATA.interviewQuestionsByRole[AppState.interview.selectedRole];
    const q = intRole.questions[AppState.interview.questionIndex];
    if (roleEl) roleEl.textContent = intRole.roleName;
    if (valEl) valEl.textContent = `${q.evaluation.overallScore}/100`;
    if (lblEl) lblEl.textContent = "STAR Interview Ready";
  } else {
    const score = AppState.jdMatch.isUnlocked ? roleData.unlockedScore : Math.max(89, AppState.jdMatch.lastComputedScore);
    if (roleEl) roleEl.textContent = roleData.roleTitle;
    if (valEl) valEl.textContent = `${score}%`;
    if (lblEl) lblEl.textContent = "ATS & Case Kit Ready";
  }
  document.getElementById("modal-score-card").classList.add("open");
}

function shareScoreCard(platform) {
  closeModals();
  showToast(`Kartu Skor Kesiapan Karir siap dibagikan ke ${platform}!`);
}

function submitAiTelemetryRating(feature, rating) {
  showToast(`Terima kasih! Penilaian ${rating}/5 untuk ${feature} telah kami terima.`);
}

// 9. Sleek Compact QRIS Checkout Modal
function openQrisCheckout(context) {
  AppState.checkoutContext = { ...context, orderBumpChecked: false };
  document.getElementById("qris-item-title").textContent = context.title;
  document.getElementById("qris-bump-wrapper").style.display = context.allowOrderBump ? "flex" : "none";
  document.getElementById("qris-bump-checkbox").checked = false;
  recalculateQrisTotal();
  document.getElementById("modal-qris-checkout").classList.add("open");
}

function toggleOrderBump(checkbox) {
  if (!AppState.checkoutContext) return;
  AppState.checkoutContext.orderBumpChecked = checkbox.checked;
  recalculateQrisTotal();
}

function recalculateQrisTotal() {
  if (!AppState.checkoutContext) return;
  const total = AppState.checkoutContext.price + (AppState.checkoutContext.orderBumpChecked ? 15000 : 0);
  document.getElementById("qris-total-amount").textContent = formatRupiah(total);
}

function closeModals() {
  document.querySelectorAll(".modal-backdrop").forEach((m) => m.classList.remove("open"));
}

function simulateQrisPaymentSuccess() {
  const ctx = AppState.checkoutContext;
  if (!ctx) return;

  if (ctx.type === "unlock-jd-match") {
    AppState.jdMatch.isUnlocked = true;
    AppState.wallet.jdMatchCredits += 5;
    AppState.wallet.cvPolishCredits += 2;
    renderJdMatchResult();
  } else if (ctx.type === "cv-pack") {
    AppState.wallet.cvPolishCredits += 5;
    AppState.wallet.jdMatchCredits += 10;
    AppState.cvPrep.isPolished = true;
    renderCvPolisher();
  } else if (ctx.type === "product" && ctx.productId) {
    AppState.wallet.purchasedProducts.add(ctx.productId);
    renderCatalog();
  } else if (ctx.type === "membership") {
    AppState.wallet.membershipActive = true;
    AppState.wallet.interviewSessionsLeft = 20;
    AppState.wallet.jdMatchCredits += 30;
  }

  if (ctx.orderBumpChecked) {
    AppState.wallet.purchasedProducts.add("tpl-job-tracker");
    renderCatalog();
  }

  updateHeaderWallet();
  closeModals();
  showToast("Pembayaran QRIS berhasil! Kuota dan akses paket Anda langsung aktif.");
}

// Initialize Everything + Scroll-Triggered Hero Motion Observer
document.addEventListener("DOMContentLoaded", () => {
  selectJdScenario("it-grc");
  renderCvPolisher();
  renderCorporatePresentation();
  renderCatalog();
  renderTrackerTable();
  renderInterviewSession();
  updateHeaderWallet();
  renderHeroMotionStep(0);
  startAnnouncementRotator();

  const heroWindow = document.getElementById("hero-motion-window");
  if (heroWindow) {
    const motionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startHeroMotionCycle();
          } else if (AppState.heroMotion.timer) {
            clearInterval(AppState.heroMotion.timer);
          }
        });
      },
      { threshold: 0.25 }
    );
    motionObserver.observe(heroWindow);
  }

  document.addEventListener("click", (e) => {
    const prodWrapper = document.getElementById("products-dropdown-wrapper");
    if (prodWrapper && !prodWrapper.contains(e.target)) {
      prodWrapper.classList.remove("open");
    }
    const accWrapper = document.getElementById("user-account-wrapper");
    if (accWrapper && !accWrapper.contains(e.target)) {
      accWrapper.classList.remove("open");
    }
  });

  window.addEventListener("scroll", () => {
    const nav = document.getElementById("main-navbar");
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 30);
  });
});
