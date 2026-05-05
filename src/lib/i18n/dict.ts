export type Locale = 'tr' | 'en';

export type Dict = {
  langSwitch: { aria: string; tr: string; en: string };
  nav: { github: string; site: string };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    titleTail: string;
    sub: string;
    ctaInstall: string;
    ctaSource: string;
    metaLicense: string;
    metaLanguage: string;
    metaStatus: string;
  };
  what: {
    title: string;
    items: Array<{ name: string; desc: string }>;
  };
  flow: {
    title: string;
    steps: Array<{ k: string; t: string; d: string }>;
  };
  features: { title: string; items: Array<{ t: string; d: string }> };
  install: {
    title: string;
    sub: string;
    cargoTitle: string;
    cargoCmd: string;
    binaryTitle: string;
    binaryNote: string;
  };
  footer: { author: string; built: string };
};

const tr: Dict = {
  langSwitch: { aria: 'Dil seçici', tr: 'TR', en: 'EN' },
  nav: { github: 'GitHub', site: 'lavescar.com.tr' },
  hero: {
    eyebrow: 'AI KOD DOĞRULAMA',
    titleLead: 'AI’ın yazdığını',
    titleAccent: 'doğrula.',
    titleTail: 'Tek statik binary.',
    sub: 'AI tarafından üretilen kodu denetleyen Rust CLI. Halüsine import’lar, sabit secret’lar, bilinen güvenlik açıkları ve test edilmemiş invariantlar — tek statik ikili, GitHub Code Scanning için SARIF çıktısı.',
    ctaInstall: '↓ Kurulum',
    ctaSource: 'Kaynak kodu',
    metaLicense: 'MIT / Apache-2.0',
    metaLanguage: 'Rust 2021',
    metaStatus: 'v0.1.0-wip · 6 verifier',
  },
  what: {
    title: 'altı doğrulayıcı',
    items: [
      { name: 'secrets', desc: '218 gitleaks kuralı + AST bağlamı + entropi — gizli anahtar, JWT, OAuth client secret’leri yakalar.' },
      { name: 'cve', desc: 'rustsec advisory DB + OSV.dev — Rust, Node, Python, Go bağımlılıklarında bilinen CVE’leri tarar.' },
      { name: 'hallucination', desc: 'rustc hata kodları + crate resolver — AI’ın uydurduğu import ve fonksiyon çağrılarını tespit eder.' },
      { name: 'deadcode', desc: 'cargo lint + AST yürüyüşü — return sonrası ulaşılamaz kodu, hiç çağrılmayan fonksiyonları işaretler.' },
      { name: 'mutation', desc: 'cargo-mutants entegrasyonu, --deep mod ile AI etiketli dosyalarda otomatik mutasyon testi.' },
      { name: 'property', desc: 'proptest harness’ı otomatik üretilir — saf fonksiyonlar için fuzz tabanlı invariant kontrolü.' },
    ],
  },
  flow: {
    title: 'akış',
    steps: [
      { k: '1', t: 'Discovery', d: 'Repo cargo manifest’i, Node package.json, Python pyproject — tüm paket türlerini keşfeder.' },
      { k: '2', t: 'Parsing', d: 'tree-sitter ile her dosyanın AST’si çıkarılır; verifier’lar AST üzerinde çalışır.' },
      { k: '3', t: 'AI provenance', d: '8 sinyalle commit ve dosya bazlı AI olasılığı hesaplanır — yüksek skorlu dosyalar mutation/property için aday.' },
      { k: '4', t: 'SARIF rapor', d: 'GitHub Code Scanning ile uyumlu çıktı — PR diff’inde inline yorum olarak görünür.' },
    ],
  },
  features: {
    title: 'özellikler',
    items: [
      { t: 'Tek statik binary', d: 'cargo install ile tek dosya çıkar — runtime bağımlılığı yok, CI’a kolayca yerleşir.' },
      { t: 'SARIF çıktı', d: 'Standart format → GitHub Code Scanning, GitLab Security, Sonar tüm UI’larda inline.' },
      { t: 'Self-dogfood', d: 'Hafta 6 sonu shaudit kendi üzerinde 0 finding ile geçti — gerçek dünya örneği var.' },
      { t: 'Hızlı + paralel', d: 'tree-sitter Rust binding üzerinden, dosyalar parallelle taranır. Tipik 10K LoC < 10s.' },
      { t: '--deep mod', d: 'Mutation + property test pahalı. Sadece AI provenance high score’la tetikler. Sürekli CI maliyetini düşük tutar.' },
      { t: 'AGPL/MIT/Apache-2.0', d: 'Vendored gitleaks rules MIT + ana proje dual-licensed. Kurumsal kullanıma açık.' },
    ],
  },
  install: {
    title: 'kurulum',
    sub: 'İki yol — cargo ile derle veya GitHub Releases’tan binary indir.',
    cargoTitle: 'Cargo ile',
    cargoCmd:
      'cargo install --git https://github.com/Lavescar-dev/shadow-auditor shaudit-cli\n\n# veya repo’yu klonla\ngit clone https://github.com/Lavescar-dev/shadow-auditor\ncd shadow-auditor && cargo run -p shaudit-cli -- audit ./',
    binaryTitle: 'Hazır binary',
    binaryNote:
      'GitHub Releases’tan Linux/macOS/Windows için statik shaudit binary indir, PATH’a koy, çalıştır.',
  },
  footer: { author: '© 2026 Lavescar', built: 'SvelteKit + Cloudflare Pages' },
};

const en: Dict = {
  langSwitch: { aria: 'Language switch', tr: 'TR', en: 'EN' },
  nav: { github: 'GitHub', site: 'lavescar.com.tr' },
  hero: {
    eyebrow: 'AI CODE VERIFICATION',
    titleLead: 'Verify what your',
    titleAccent: 'AI just wrote.',
    titleTail: 'One static binary.',
    sub: 'A Rust CLI that audits AI-generated code. Detects hallucinated imports, hardcoded secrets, known-vulnerable dependencies, and untested invariants — one static binary, SARIF output for GitHub Code Scanning.',
    ctaInstall: '↓ Install',
    ctaSource: 'Source code',
    metaLicense: 'MIT / Apache-2.0',
    metaLanguage: 'Rust 2021',
    metaStatus: 'v0.1.0-wip · 6 verifiers',
  },
  what: {
    title: 'six verifiers',
    items: [
      { name: 'secrets', desc: '218 gitleaks rules + AST context + entropy — catches API keys, JWTs, OAuth client secrets.' },
      { name: 'cve', desc: 'rustsec advisory DB + OSV.dev — scans Rust, Node, Python, Go dependencies for known CVEs.' },
      { name: 'hallucination', desc: 'rustc error codes + crate resolver — flags AI-invented imports and function calls.' },
      { name: 'deadcode', desc: 'cargo lints + AST walk — flags unreachable-after-return paths and uncalled functions.' },
      { name: 'mutation', desc: 'cargo-mutants wrapper, --deep mode runs auto mutation testing on AI-tagged files.' },
      { name: 'property', desc: 'auto-generates proptest harnesses — fuzz-based invariant checks for pure functions.' },
    ],
  },
  flow: {
    title: 'flow',
    steps: [
      { k: '1', t: 'Discovery', d: 'Walks the repo manifests — cargo, package.json, pyproject — discovering every package type.' },
      { k: '2', t: 'Parsing', d: 'tree-sitter produces an AST per file. Verifiers operate over the AST.' },
      { k: '3', t: 'AI provenance', d: 'Eight signals score each commit and file for AI authorship. High-score files become mutation/property candidates.' },
      { k: '4', t: 'SARIF report', d: 'Output conforms to SARIF — GitHub Code Scanning displays findings inline on PR diffs.' },
    ],
  },
  features: {
    title: 'features',
    items: [
      { t: 'Single static binary', d: 'cargo install gives you one file — no runtime deps, fits into any CI lane.' },
      { t: 'SARIF output', d: 'Standard format → GitHub Code Scanning, GitLab Security, Sonar all render inline.' },
      { t: 'Self-dogfood', d: 'End of Week 6: shaudit ran zero findings on its own source. Real production exercise.' },
      { t: 'Fast + parallel', d: 'tree-sitter via Rust bindings, parallel scan. ~10K LoC under 10s typically.' },
      { t: '--deep mode', d: 'Mutation + property are expensive. Triggered only on AI-provenance hits. CI cost stays low.' },
      { t: 'AGPL/MIT/Apache-2.0', d: 'Vendored gitleaks rules MIT, main project dual-licensed. Commercial-friendly.' },
    ],
  },
  install: {
    title: 'install',
    sub: 'Two ways — build with cargo or download the binary from GitHub Releases.',
    cargoTitle: 'Via cargo',
    cargoCmd:
      'cargo install --git https://github.com/Lavescar-dev/shadow-auditor shaudit-cli\n\n# or clone\ngit clone https://github.com/Lavescar-dev/shadow-auditor\ncd shadow-auditor && cargo run -p shaudit-cli -- audit ./',
    binaryTitle: 'Prebuilt binary',
    binaryNote:
      'Grab the static shaudit binary for Linux/macOS/Windows from GitHub Releases, drop into PATH, run.',
  },
  footer: { author: '© 2026 Lavescar', built: 'SvelteKit + Cloudflare Pages' },
};

export const dictionaries: Record<Locale, Dict> = { tr, en };
export { en };
export const defaultLocale: Locale = 'tr';
