import { Lang, T, t } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="bg-brand text-white/60 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-white font-bold text-lg tracking-tight">astrADA Partners Realty</p>
          <p className="text-sm mt-1">İstanbul, Türkiye</p>
        </div>
        <div className="flex gap-8 text-sm">
          <a href="/" className="hover:text-white transition-colors">{t(T.nav.home, lang)}</a>
          <a href="/hizmetler" className="hover:text-white transition-colors">{t(T.nav.services, lang)}</a>
          <a href="/hakkimizda" className="hover:text-white transition-colors">{t(T.nav.about, lang)}</a>
          <a href="#iletisim" className="hover:text-white transition-colors">{t(T.nav.contact, lang)}</a>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} astrADA Partners Realty</p>
      </div>
    </footer>
  );
}
