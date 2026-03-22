export type Lang = "tr" | "en";

export const T = {
  nav: {
    home:     { tr: "Ana Sayfa",   en: "Home" },
    services: { tr: "Hizmetler",  en: "Services" },
    about:    { tr: "Hakkımızda", en: "About" },
    buyer:    { tr: "Alıcı Danışmanlığı", en: "Buyer Advisory" },
    contact:  { tr: "İletişim",          en: "Contact" },
  },
  hero: {
    title:    { tr: "Mülkünüz doğru eller ile buluştuğunda fark yaratır.", en: "The right hands make all the difference." },
    sub:      { tr: "İstanbul'un en nitelikli gayrimenkullerinde satış, kiralama ve yatırım danışmanlığı.", en: "Sales, leasing and investment advisory in Istanbul's most prestigious properties." },
    cta1:     { tr: "Alıcı Danışmanlığı Alın", en: "Buyer Advisory" },
    cta2:     { tr: "Ücretsiz Değerleme Alın", en: "Free Valuation" },
  },
  stats: {
    s1: { tr: "Türkiye İlk 100 Danışman", en: "Turkey Top 100 Agents" },
    s2: { tr: "Dünya İlk 100",            en: "World Top 100" },
    s3: { tr: "Türkiye İlk 10 Takım",     en: "Turkey Top 10 Team" },
    s4: { tr: "20+ Yıllık Deneyim",       en: "20+ Years Experience" },
  },
  ticker: {
    label: { tr: "Aktif Alıcı Talepleri", en: "Active Buyer Requests" },
  },
  transactions: {
    title:  { tr: "Tamamlanan İşlemler", en: "Completed Transactions" },
    all:    { tr: "Tümü",     en: "All" },
    sale:   { tr: "Satış",    en: "Sale" },
    rent:   { tr: "Kiralama", en: "Lease" },
    comm:   { tr: "Ticari",   en: "Commercial" },
    resi:   { tr: "Konut",    en: "Residential" },
    sold:   { tr: "SATILDI",  en: "SOLD" },
    leased: { tr: "KİRALANDI", en: "LEASED" },
  },
  cta: {
    title: { tr: "Mülkünüz için ne yapabiliriz?", en: "What can we do for your property?" },
    sub:   { tr: "Ücretsiz piyasa değerlendirmesi ve pazarlama planı için bizimle iletişime geçin.", en: "Contact us for a free market valuation and marketing plan." },
    btn:   { tr: "Görüşme Talep Et", en: "Request a Meeting" },
  },
  services: {
    title: { tr: "Bir mülkü satmak değil, doğru alıcıya ulaştırmak.", en: "Not just selling a property — finding the right buyer." },
    sub:   { tr: "Her portföy için sıfırdan bir strateji kuruyoruz.", en: "We build a strategy from scratch for every portfolio." },
    process: { tr: "Başından sonuna, tek elden.", en: "End-to-end, under one roof." },
    rent_title: { tr: "Kiraladıktan sonra da yanınızdayız.", en: "We're with you after leasing too." },
    rent_text:  { tr: "Kiracı bulup anahtarı teslim etmekle bitmez. Kira takibi, kontrat yenileme, kiracı çıkışı ve yeni kiracıya hazırlık süreçlerini baştan sona yönetiyoruz.", en: "Finding a tenant and handing over the keys is just the beginning. We manage rent tracking, contract renewals, tenant exits and preparation for the next tenant." },
  },
  about: {
    title:    { tr: "Rakamlar konuşur.", en: "The numbers speak." },
    sub:      { tr: "Beşiktaş'tan Şişli'ye, Beyoğlu'ndan Sarıyer'e — İstanbul'un en değerli noktalarında yüzlerce işlemi tamamladık.", en: "From Beşiktaş to Şişli, Beyoğlu to Sarıyer — hundreds of transactions in Istanbul's most valuable locations." },
    intro:    { tr: "İstanbul'un merkezi bölgelerinde nitelikli konut, ticari mülk ve yatırım gayrimenkullerinde uzmanlaşmış bir ekibiz.", en: "We are a team specializing in premium residential, commercial and investment properties in Istanbul's central districts." },
    why:      { tr: "Neden Biz?", en: "Why Us?" },
  },
  contact: {
    name:    { tr: "Ad Soyad",       en: "Full Name" },
    email:   { tr: "E-posta",        en: "Email" },
    phone:   { tr: "Telefon",        en: "Phone" },
    msg:     { tr: "Mesajınız",      en: "Message" },
    send:    { tr: "Gönder",         en: "Send" },
    sending: { tr: "Gönderiliyor…",  en: "Sending…" },
    success: { tr: "Mesajınız iletildi, en kısa sürede dönüş yapacağız.", en: "Your message has been sent. We'll get back to you shortly." },
    error:   { tr: "Bir hata oluştu, lütfen tekrar deneyin.", en: "Something went wrong, please try again." },
  },
};

export function t(key: { tr: string; en: string }, lang: Lang) {
  return key[lang];
}
