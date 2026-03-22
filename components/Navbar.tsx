"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Lang, T, t } from "@/lib/i18n";

export default function Navbar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/",           label: t(T.nav.home, lang) },
    { href: "/hizmetler",  label: t(T.nav.services, lang) },
    { href: "/hakkimizda", label: t(T.nav.about, lang) },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className={`text-lg font-bold tracking-tight transition-colors ${scrolled ? "text-brand" : "text-white"}`}>
            astrADA
          </span>
          <span className={`text-xs font-medium tracking-widest uppercase transition-colors ${scrolled ? "text-zinc-400" : "text-white/70"}`}>
            Partners Realty
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${scrolled ? "text-brand" : "text-white"}`}>
              {l.label}
            </Link>
          ))}
          <a href="#iletisim" className={`text-sm font-medium px-5 py-2 rounded-full border transition-all ${scrolled ? "border-brand text-brand hover:bg-brand hover:text-white" : "border-white text-white hover:bg-white hover:text-brand"}`}>
            {t(T.nav.contact, lang)}
          </a>
          <button onClick={() => setLang(lang === "tr" ? "en" : "tr")} className={`text-xs font-semibold tracking-widest transition-colors ${scrolled ? "text-zinc-400 hover:text-brand" : "text-white/70 hover:text-white"}`}>
            {lang === "tr" ? "EN" : "TR"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`w-5 h-0.5 mb-1 transition-colors ${scrolled ? "bg-brand" : "bg-white"}`} />
          <div className={`w-5 h-0.5 mb-1 transition-colors ${scrolled ? "bg-brand" : "bg-white"}`} />
          <div className={`w-5 h-0.5 transition-colors ${scrolled ? "bg-brand" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm font-medium text-brand">
              {l.label}
            </Link>
          ))}
          <a href="#iletisim" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-brand">{t(T.nav.contact, lang)}</a>
          <button onClick={() => setLang(lang === "tr" ? "en" : "tr")} className="text-xs font-semibold text-zinc-400 text-left">
            {lang === "tr" ? "EN" : "TR"}
          </button>
        </div>
      )}
    </nav>
  );
}
