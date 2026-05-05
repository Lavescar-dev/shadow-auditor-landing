<script lang="ts">
  import { onMount } from 'svelte';
  import { i18n } from '$lib/i18n/index.svelte';

  const REPO = 'https://github.com/Lavescar-dev/shadow-auditor';
  const RELEASES = `${REPO}/releases`;

  onMount(() => i18n.init());

  const t = $derived(i18n.t);
  const locale = $derived(i18n.locale);
</script>

<svelte:head>
  <title>shaudit ▸ shadow-auditor — verify what your AI just wrote</title>
  <meta name="description" content="Rust CLI that audits AI-generated code. Hallucination, secrets, CVE, deadcode, mutation, property — six verifiers, single static binary, SARIF for GitHub Code Scanning." />
</svelte:head>

<main class="page">
  <header class="top">
    <div class="brand">
      <span class="logo">⌬</span>
      <span class="name">shaudit</span>
      <span class="sep">▸</span>
      <span class="mode">shadow-auditor</span>
    </div>
    <nav class="top-nav" aria-label={t.langSwitch.aria}>
      <a href={REPO} target="_blank" rel="noopener">{t.nav.github}</a>
      <a href="https://lavescar.com.tr" target="_blank" rel="noopener">{t.nav.site}</a>
      <div class="lang" role="group" aria-label={t.langSwitch.aria}>
        <button class="lang-btn" class:on={locale === 'tr'} aria-pressed={locale === 'tr'} onclick={() => i18n.set('tr')}>{t.langSwitch.tr}</button>
        <button class="lang-btn" class:on={locale === 'en'} aria-pressed={locale === 'en'} onclick={() => i18n.set('en')}>{t.langSwitch.en}</button>
      </div>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-main">
      <div class="hero-eyebrow">{t.hero.eyebrow}</div>
      <h1>
        <span class="h-muted">{t.hero.titleLead}</span><br />
        <span class="h-accent">{t.hero.titleAccent}</span><br />
        {t.hero.titleTail}
      </h1>
      <p class="hero-sub">{t.hero.sub}</p>

      <div class="hero-cta">
        <a class="btn primary" href="#install">{t.hero.ctaInstall}</a>
        <a class="btn ghost" href={REPO} target="_blank" rel="noopener">{t.hero.ctaSource}</a>
      </div>

      <div class="hero-meta">
        <span>{t.hero.metaLicense}</span>
        <span class="dot-sep">·</span>
        <span>{t.hero.metaLanguage}</span>
        <span class="dot-sep">·</span>
        <span>{t.hero.metaStatus}</span>
      </div>
    </div>

    <div class="hero-card" aria-hidden="true">
      <div class="mock-row head">
        <span>$ shaudit audit ./crates/shaudit-cli</span>
        <span class="clip">CLI</span>
      </div>
      <div class="mock-rules">
        <div><code>[secrets]</code>     <span class="hi">0</span> findings · 218 rules</div>
        <div><code>[cve]</code>         <span class="hi">0</span> findings · rustsec + osv</div>
        <div><code>[hallucinate]</code> <span class="hi">0</span> findings · 18 imports verified</div>
        <div><code>[deadcode]</code>    <span class="hi">0</span> findings · 4 lints clean</div>
        <div><code>[mutation]</code>    <span class="dim">skipped</span> · ai-provenance &lt; threshold</div>
        <div><code>[property]</code>    <span class="dim">skipped</span> · same</div>
      </div>
      <div class="mock-row head">SARIF çıkış <span class="ready">hazır</span></div>
      <div class="mock-output">
        <div><span class="dot ok"></span>./shaudit-report.sarif yazıldı</div>
        <div><span class="dot ok"></span>0 finding · GitHub Code Scanning ile uyumlu</div>
        <div><span class="dot dim"></span>tarama süresi: 8.2s · 12,408 LoC</div>
      </div>
    </div>
  </section>

  <section class="block">
    <h2>{t.what.title}</h2>
    <ul class="grid">
      {#each t.what.items as item}
        <li>
          <strong>{item.name}</strong>
          <span>{item.desc}</span>
        </li>
      {/each}
    </ul>
  </section>

  <section class="block">
    <h2>{t.flow.title}</h2>
    <ol class="steps">
      {#each t.flow.steps as step}
        <li>
          <span class="step-k">{step.k}</span>
          <div>
            <strong>{step.t}</strong>
            <span>{step.d}</span>
          </div>
        </li>
      {/each}
    </ol>
  </section>

  <section class="block">
    <h2>{t.features.title}</h2>
    <ul class="grid">
      {#each t.features.items as it}
        <li>
          <strong>{it.t}</strong>
          <span>{it.d}</span>
        </li>
      {/each}
    </ul>
  </section>

  <section class="block" id="install">
    <h2>{t.install.title}</h2>
    <p class="muted">{t.install.sub}</p>
    <div class="two">
      <article class="card">
        <h3>{t.install.cargoTitle}</h3>
        <pre><code>{t.install.cargoCmd}</code></pre>
      </article>
      <article class="card">
        <h3>{t.install.binaryTitle}</h3>
        <p>{t.install.binaryNote}</p>
        <a class="btn primary inline" href={RELEASES} target="_blank" rel="noopener">{t.hero.ctaInstall}</a>
      </article>
    </div>
  </section>

  <footer class="foot">
    <span>{t.footer.author}</span>
    <span class="dot-sep">·</span>
    <span>{t.footer.built}</span>
  </footer>
</main>
