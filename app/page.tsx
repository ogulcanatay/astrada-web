"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Lang, T, t } from "@/lib/i18n";

// ─── Dummy data ──────────────────────────────────────────────────────────────

const TICKER_ITEMS = [
  { region: "Levent", detail: "400m²+ müstakil villa", budget: "5M USD" },
  { region: "Şişli", detail: "3.000m²+ otel binası", budget: "10M USD" },
  { region: "Beşiktaş", detail: "250m²+ rezidans daire", budget: "2M USD" },
  { region: "Beyoğlu", detail: "1.200m²+ tarihi bina", budget: "4M USD" },
  { region: "Sarıyer", detail: "Deniz manzaralı villa", budget: "8M USD" },
  { region: "Maslak", detail: "500m²+ plaza katı", budget: "3M USD" },
  { region: "Nişantaşı", detail: "180m²+ lüks daire", budget: "1.5M USD" },
  { region: "Bomonti", detail: "2.000m²+ yatırım binası", budget: "6M USD" },
];

const TRANSACTIONS = [
  { type: "sale", category: "comm", label: "SATILDI", area: "İstiklal Caddesi", detail: "1.400 m² · 7 Kat Tarihi Bina", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80" },
  { type: "sale", category: "resi", label: "SATILDI", area: "Beşiktaş", detail: "320 m² · Deniz Manzaralı Villa", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80" },
  { type: "rent", category: "comm", label: "KİRALANDI", area: "Levent", detail: "2.800 m² · Plaza Katı", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80" },
  { type: "sale", category: "resi", label: "SATILDI", area: "Nişantaşı", detail: "280 m² · Rezidans", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { type: "rent", category: "comm", label: "KİRALANDI", area: "Şişli", detail: "1.200 m² · Otel Binası", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { type: "sale", category: "comm", label: "SATILDI", area: "Beyoğlu", detail: "900 m² · Tarihi Köşk", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
];

const FILTERS = [
  { key: "all",  tr: "Tümü",     en: "All" },
  { key: "sale", tr: "Satış",    en: "Sale" },
  { key: "rent", tr: "Kiralama", en: "Lease" },
  { key: "comm", tr: "Ticari",   en: "Commercial" },
  { key: "resi", tr: "Konut",    en: "Residential" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Home() {
  const [lang, setLang] = useState<Lang>("tr");
  const [filter, setFilter] = useState("all");

  const filtered = TRANSACTIONS.filter(tx =>
    filter === "all" || tx.type === filter || tx.category === filter
  );

  // Ticker doubled for seamless loop
  const tickerItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85"
          alt="Istanbul skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-accent text-sm tracking-[0.25em] uppercase font-bold mb-6">astrADA Partners Realty</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {t(T.hero.title, lang)}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            {t(T.hero.sub, lang)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/hizmetler" className="px-8 py-4 bg-white text-brand font-semibold rounded-full hover:bg-white/90 transition-colors text-sm">
              {t(T.hero.cta1, lang)}
            </a>
            <a href="#iletisim" className="px-8 py-4 border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-sm">
              {t(T.hero.cta2, lang)}
            </a>
          </div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <div className="w-px h-10 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ── STATS BANNER ─────────────────────────────────────────────────── */}
      <section className="bg-brand text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-center md:justify-between items-center gap-4">
          {[T.stats.s1, T.stats.s2, T.stats.s3, T.stats.s4].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && <div className="hidden md:block w-px h-5 bg-white/20" />}
              <span className="text-sm font-semibold tracking-wide text-white/90">{t(s, lang)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── BUYER TICKER ─────────────────────────────────────────────────── */}
      <section className="bg-zinc-50 border-y border-zinc-100 py-5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand">
            {t(T.ticker.label, lang)}
          </span>
          <span className="flex-1 h-px bg-zinc-200" />
        </div>
        <div className="overflow-hidden">
          <div className="ticker-track">
            {tickerItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-8 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="text-sm font-semibold text-brand">{item.region}</span>
                <span className="text-sm text-zinc-500">{item.detail}</span>
                <span className="text-sm font-medium text-accent">{item.budget}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSACTIONS GALLERY ─────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand">
              {t(T.transactions.title, lang)}
            </h2>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map(f => (
                <button key={f.key} onClick={() => setFilter(f.key)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${filter === f.key ? "bg-brand text-white border-brand" : "border-zinc-200 text-zinc-500 hover:border-brand hover:text-brand"}`}>
                  {lang === "tr" ? f.tr : f.en}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tx, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-zinc-100">
                <Image src={tx.img} alt={tx.area} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold tracking-widest text-white bg-accent px-2.5 py-1 rounded-full">
                    {tx.label}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-lg">{tx.area}</p>
                  <p className="text-white/70 text-sm">{tx.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="Istanbul"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">{t(T.cta.title, lang)}</h2>
          <p className="text-white/70 text-lg mb-10">{t(T.cta.sub, lang)}</p>
          <a href="#iletisim" className="inline-block px-10 py-4 bg-accent text-brand font-bold rounded-full hover:bg-accent/90 transition-colors text-sm">
            {t(T.cta.btn, lang)}
          </a>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="iletisim" className="bg-brand py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent text-xs tracking-[0.3em] uppercase font-semibold mb-4">{t(T.nav.contact, lang)}</p>
          <h2 className="text-3xl font-bold text-white mb-10">{t(T.cta.btn, lang)}</h2>
          <ContactForm lang={lang} />
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
