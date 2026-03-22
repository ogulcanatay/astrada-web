"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Lang, T, t } from "@/lib/i18n";

const TEAM = [
  {
    name: "Oğulcan Atay",
    title: { tr: "Kurucu Ortak", en: "Founding Partner" },
    awards: "🏆 Türkiye İlk 100 · Dünya İlk 100",
    bio: {
      tr: "20 yılı aşkın satış, pazarlama ve teknoloji deneyimini Türkiye'nin en rekabetçi gayrimenkul piyasasına taşıyan bir danışman. Reklam ajansı ve teknoloji girişimi geçmişiyle şekillenen yaklaşımı, mülkünüzü doğru fiyatla değil, doğru alıcıya ulaştırmaya odaklanır — profesyonel görsel prodüksiyon, veri destekli alıcı eşleştirme ve çok kanallı pazarlama ile.",
      en: "An advisor bringing over 20 years of sales, marketing and technology experience to Turkey's most competitive real estate market. Shaped by an advertising agency and tech startup background, his approach focuses not on the right price, but on reaching the right buyer — through professional visual production, data-driven buyer matching and multi-channel marketing.",
    },
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Deniz Silistre",
    title: { tr: "Kurucu Ortak", en: "Founding Partner" },
    awards: "🏆 Türkiye İlk 100",
    bio: {
      tr: "İstanbul'un ticari gayrimenkul piyasasında derin bir uzmanlık ve geniş bir ağa sahip danışman. Otel, plaza ve ticari portföylerde alanın önde gelen isimlerinden.",
      en: "An advisor with deep expertise and a broad network in Istanbul's commercial real estate market. One of the leading names in hotels, plazas and commercial portfolios.",
    },
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
];

const AWARDS = [
  { value: "100", label: { tr: "Türkiye İlk 100 Danışman", en: "Turkey Top 100 Agents" } },
  { value: "100", label: { tr: "Dünya İlk 100",            en: "World Top 100" } },
  { value: "#1",  label: { tr: "KW Türkiye 2023 Takımı",   en: "KW Turkey 2023 Team" } },
  { value: "4×",  label: { tr: "Türkiye En Yüksek Ciro",   en: "Turkey Top Revenue" } },
];

export default function HakkimizdaPage() {
  const [lang, setLang] = useState<Lang>("tr");

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent text-xs tracking-[0.3em] uppercase font-semibold mb-5">{t(T.nav.about, lang)}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand leading-tight mb-6">
            {t(T.about.title, lang)}
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl">{t(T.about.sub, lang)}</p>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 px-6 bg-brand text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {AWARDS.map((a, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">{a.value}</div>
              <div className="text-xs text-white/60 tracking-wide">{t(a.label, lang)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-zinc-600 leading-relaxed">{t(T.about.intro, lang)}</p>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-brand mb-12 text-center">{lang === "tr" ? "Ekibimiz" : "Our Team"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {TEAM.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative bg-zinc-100">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-8">
                  <p className="text-xs text-accent font-bold tracking-widest uppercase mb-2">{member.awards}</p>
                  <h3 className="text-xl font-bold text-brand mb-1">{member.name}</h3>
                  <p className="text-sm text-zinc-400 mb-4">{t(member.title, lang)}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{t(member.bio, lang)}</p>
                </div>
              </div>
            ))}
          </div>
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
