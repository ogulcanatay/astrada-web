"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Lang } from "@/lib/i18n";

const STEPS = [
  {
    num: "01",
    title: "Sizi tanıyoruz",
    desc: "Bütçe, lokasyon ve kullanım amacınızı dinliyoruz. Yatırım mı, kullanım mı, kira getirisi mi — önceliğinizi netleştiriyoruz.",
  },
  {
    num: "02",
    title: "Piyasayı sizin için tarıyoruz",
    desc: "Aktif ilanların ötesine geçiyoruz. Sektör ağımız, danışman bağlantılarımız ve alıcı-satıcı eşleştirme sistemimizle henüz piyasaya çıkmamış fırsatlara da ulaşıyoruz.",
  },
  {
    num: "03",
    title: "Müzakereden kapanışa kadar yanınızdayız",
    desc: "Doğru fiyatı belirlemek, teklif sürecini yönetmek ve tapu işlemlerine kadar tüm süreci sizin adınıza takip ediyoruz.",
  },
];

export default function AliciDanismanligiPage() {
  const [lang, setLang] = useState<Lang>("tr");

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Görsel — gerçek çekim geldiğinde değiştirilecek */}
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85"
          alt="Danışman ve müşteri portföy inceliyor"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/90 via-brand/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-accent text-xs tracking-[0.25em] uppercase font-bold mb-6">
              Alıcı Danışmanlığı
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Aradığınız mülk piyasada olmayabilir. Biz yine de buluruz.
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-10">
              İstanbul'un ticari ve konut gayrimenkul piyasasında binlerce aktif alıcı profili arasında çalışıyoruz. Sizi doğru mülkle buluşturmak için veri, ağ ve deneyimimizi bir arada kullanıyoruz.
            </p>
            <a
              href="#iletisim"
              className="inline-block px-8 py-4 bg-accent text-brand font-bold rounded-full hover:bg-accent/90 transition-colors text-sm"
            >
              Ücretsiz Görüşme Talep Et
            </a>
          </div>
        </div>
      </section>

      {/* ── 3 ADIM ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent text-xs tracking-[0.25em] uppercase font-bold mb-4">Nasıl çalışırız</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-16">3 adımda sonuca ulaşın.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {STEPS.map((s) => (
              <div key={s.num}>
                <span className="text-5xl font-bold text-accent/30 block mb-4">{s.num}</span>
                <h3 className="text-lg font-bold text-brand mb-3">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GÜVEN ÇIPASI ─────────────────────────────────────────────────── */}
      <section className="bg-zinc-50 py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-brand text-lg font-medium leading-relaxed max-w-xl">
            Beşiktaş'tan Şişli'ye, Nişantaşı'ndan Beyoğlu'na —{" "}
            <span className="font-bold">İstanbul'un her segmentinde tamamlanmış yüzlerce işlem.</span>
          </p>
          <a
            href="/#islemler"
            className="flex-shrink-0 px-7 py-3.5 border-2 border-brand text-brand font-semibold rounded-full hover:bg-brand hover:text-white transition-all text-sm whitespace-nowrap"
          >
            Tamamlanan İşlemleri Gör →
          </a>
        </div>
      </section>

      {/* ── CTA / FORM ───────────────────────────────────────────────────── */}
      <section id="iletisim" className="bg-brand py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent text-xs tracking-[0.25em] uppercase font-bold mb-4">İletişim</p>
          <h2 className="text-3xl font-bold text-white mb-3">
            Aradığınız mülkü anlatın, biz başlayalım.
          </h2>
          <p className="text-white/60 mb-10">Ücretsiz görüşme — taahhüt yok.</p>
          <ContactForm lang={lang} />
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
