"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lang, T, t } from "@/lib/i18n";
import ContactForm from "@/components/ContactForm";

const SERVICE_ICONS = [
  // Doğru Fiyat Stratejisi — chart/bar icon
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  // Profesyonel Prodüksiyon — camera icon
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
  // Çok Kanallı Pazarlama — globe icon
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  // Alıcı Eşleştirme — users icon
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  // Sektör Ağı — share/network icon
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
  // Şeffaf Raporlama — file-text icon
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
];

const SERVICES = [
  { title: { tr: "Doğru Fiyat Stratejisi",    en: "Right Pricing Strategy" },    desc: { tr: "Piyasa verisi ve bölge analiziyle mülkünüzün rekabetçi ama maksimum fiyatını belirliyoruz.", en: "We determine the competitive yet maximum price for your property using market data and area analysis." } },
  { title: { tr: "Profesyonel Prodüksiyon",   en: "Professional Production" },    desc: { tr: "Fotoğraf, drone ve video çekimleri — mülkünüz ilk izlenimde öne çıksın diye.", en: "Photo, drone and video shoots — so your property stands out at first glance." } },
  { title: { tr: "Çok Kanallı Pazarlama",     en: "Multi-Channel Marketing" },    desc: { tr: "Ücretli dijital reklamlar, sosyal medya, emlak platformları ve özel micro web sitesi.", en: "Paid digital ads, social media, real estate platforms and a dedicated micro website." } },
  { title: { tr: "Alıcı Eşleştirme",         en: "Buyer Matching" },             desc: { tr: "20.000+ kişilik aktif alıcı veritabanımızla mülkünüze en uygun alıcıyı tespit ediyoruz.", en: "We identify the best buyer for your property using our 20,000+ active buyer database." } },
  { title: { tr: "Sektör Ağı",               en: "Industry Network" },           desc: { tr: "9.000+ emlak profesyoneline ulaşan haftalık paylaşımlar ve karavan tur organizasyonları.", en: "Weekly broadcasts to 9,000+ real estate professionals and caravan tour organizations." } },
  { title: { tr: "Şeffaf Raporlama",          en: "Transparent Reporting" },      desc: { tr: "Haftalık pazarlama raporu ve geri bildirim özetleriyle süreci her zaman şeffaf tutuyoruz.", en: "We keep the process transparent with weekly marketing reports and feedback summaries." } },
];

const PROCESS = [
  { step: "01", title: { tr: "Strateji",    en: "Strategy" },    desc: { tr: "Fiyat analizi, hedef kitle ve pazarlama planı", en: "Price analysis, target audience and marketing plan" } },
  { step: "02", title: { tr: "Prodüksiyon", en: "Production" },  desc: { tr: "Fotoğraf, video, drone, sanal tur",              en: "Photo, video, drone, virtual tour" } },
  { step: "03", title: { tr: "Yayın",       en: "Broadcast" },   desc: { tr: "İlanlar, reklamlar, sektör paylaşımları",        en: "Listings, ads, industry shares" } },
  { step: "04", title: { tr: "Eşleştirme",  en: "Matching" },    desc: { tr: "Veri tabanı, telefon dokunuşu, birebir görüşme", en: "Database, phone outreach, face-to-face meetings" } },
  { step: "05", title: { tr: "Müzakere",    en: "Negotiation" }, desc: { tr: "Teklif yönetimi, sözleşme süreci",               en: "Offer management, contract process" } },
  { step: "06", title: { tr: "Kapanış",     en: "Closing" },     desc: { tr: "Tapu, bürokratik işlemler, teslimat",            en: "Title deed, bureaucratic processes, handover" } },
];

export default function HizmetlerPage() {
  const [lang, setLang] = useState<Lang>("tr");

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent text-xs tracking-[0.3em] uppercase font-semibold mb-5">{t(T.nav.services, lang)}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand leading-tight mb-6">
            {t(T.services.title, lang)}
          </h1>
          <p className="text-xl text-zinc-500">{t(T.services.sub, lang)}</p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <div key={i} className="p-8 rounded-2xl border border-zinc-100 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-brand mb-5">
                {SERVICE_ICONS[i]}
              </div>
              <h3 className="text-lg font-bold text-brand mb-3">{t(s.title, lang)}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{t(s.desc, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-brand text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">{t(T.services.process, lang)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS.map((p, i) => (
              <div key={i} className="flex gap-5">
                <span className="text-accent font-bold text-2xl w-10 flex-shrink-0">{p.step}</span>
                <div>
                  <p className="font-bold text-white mb-1">{t(p.title, lang)}</p>
                  <p className="text-white/60 text-sm">{t(p.desc, lang)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Block */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-zinc-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-brand mb-5">{t(T.services.rent_title, lang)}</h2>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto">{t(T.services.rent_text, lang)}</p>
        </div>
      </section>

      {/* Contact */}
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
