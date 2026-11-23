// Edit BUSINESS_CONFIG to customize the business and provide English and Indonesian copy.
const BUSINESS_CONFIG = {
  name: "Ruang Tumbuh",
  tagline: {
    en: "Services that feel more personal.",
    id: "Layanan yang terasa lebih personal.",
  },
  currency: "IDR",
  locale: "id-ID",
  colors: {
    primary: "#55725c",
    primaryDark: "#3e5946",
    primarySoft: "#dce5d8",
    accent: "#c9a66b",
  },
  hero: {
    eyebrow: {
      en: "GOOD THINGS START HERE",
      id: "SOLUSI YANG TEPAT UNTUKMU",
    },
    headline: {
      en: "We make it easier to reach",
      id: "Lebih mudah mencapai",
    },
    emphasis: {
      en: "your next goal.",
      id: "tujuanmu.",
    },
    description: {
      en: "We help you get the right support with a process that feels clear, thoughtful, and easy from the start.",
      id: "Kami membantu kamu mendapatkan layanan berkualitas dengan proses yang praktis, ramah, dan transparan.",
    },
    button: {
      en: "Let's get started",
      id: "Mulai sekarang",
    },
    proof: {
      en: "A thoughtful experience, trusted by our customers",
      id: "Dipercaya pelanggan yang mengutamakan kualitas",
    },
    location: {
      en: "HERE TO HELP, EVERY STEP OF THE WAY",
      id: "MELAYANI DENGAN SEPENUH HATI",
    },
  },
  contact: {
    whatsapp: "6281234567890",
    phoneDisplay: "+62 812-3456-7890",
    email: "halo@namabisnis.id",
    address: {
      en: "Jakarta, Indonesia",
      id: "Jakarta, Indonesia",
    },
    button: {
      en: "Talk with our team",
      id: "Ngobrol dengan kami",
    },
  },
  features: [
    {
      icon: "✳",
      title: { en: "Made for you", id: "Dibuat untukmu" },
      description: {
        en: "Solutions shaped around your needs, goals, and situation.",
        id: "Solusi disesuaikan dengan kebutuhan, tujuan, dan situasimu.",
      },
    },
    {
      icon: "◇",
      title: { en: "Quality that lasts", id: "Kualitas terjaga" },
      description: {
        en: "Every detail gets the attention and care it deserves.",
        id: "Setiap detail dikerjakan dengan perhatian dan standar terbaik.",
      },
    },
    {
      icon: "↗",
      title: { en: "Easy by design", id: "Proses praktis" },
      description: {
        en: "A clear process makes every step feel more straightforward.",
        id: "Langkah yang jelas membuat semuanya terasa lebih sederhana.",
      },
    },
    {
      icon: "♡",
      title: { en: "Here to help", id: "Didampingi ahli" },
      description: {
        en: "Our friendly team listens and helps whenever you need us.",
        id: "Tim ramah kami siap mendengarkan dan membantu kapan dibutuhkan.",
      },
    },

  { icon: "◍", title: { en: "Clear pricing", id: "Harga transparan" }, description: { en: "No hidden fees, ever. What you see is what you pay.", id: "Tanpa biaya tersembunyi. Yang kamu lihat, itulah yang kamu bayar." } },
  { icon: "⏱", title: { en: "Fast turnaround", id: "Proses cepat" }, description: { en: "Most projects are ready in days, not weeks.", id: "Kebanyakan proyek siap dalam hitungan hari, bukan minggu." } },
  ],
  services: [
    {
      icon: "✳",
      title: { en: "Core service", id: "Layanan Utama" },
      description: {
        en: "A complete solution designed around the results you need.",
        id: "Solusi menyeluruh yang dirancang untuk hasil yang kamu butuhkan.",
      },
    },
    {
      icon: "◇",
      title: { en: "Consultation", id: "Konsultasi" },
      description: {
        en: "A personal conversation to find the right way forward.",
        id: "Diskusi personal untuk menemukan pilihan yang paling tepat.",
      },
    },
    {
      icon: "↗",
      title: { en: "Guidance", id: "Pendampingan" },
      description: {
        en: "Ongoing support to make each next step feel easier.",
        id: "Dukungan berkelanjutan agar setiap langkah terasa lebih mudah.",
      },
    },

  { icon: "✦", title: { en: "Ongoing support", id: "Dukungan berkelanjutan" }, description: { en: "Help after launch, whenever you need it.", id: "Bantuan setelah peluncuran, kapan pun kamu butuh." } },
  ],
  packages: [
    {
      name: { en: "Essential", id: "Esensial" },
      description: {
        en: "A simple way to get started with the essentials.",
        id: "Untuk memulai dengan kebutuhan paling mendasar.",
      },
      price: 199000,
      period: { en: "one-time", id: "sekali bayar" },
      features: [
        { en: "Core service", id: "Layanan inti" },
        { en: "Initial consultation", id: "Konsultasi awal" },
        { en: "WhatsApp support", id: "Dukungan via WhatsApp" },
      ],
      button: { en: "Choose Essential", id: "Pilih Esensial" },
      popular: false,
    },
    {
      name: { en: "Growth", id: "Bertumbuh" },
      description: {
        en: "A balanced choice for a little more support.",
        id: "Pilihan seimbang untuk hasil yang lebih maksimal.",
      },
      price: 399000,
      period: { en: "one-time", id: "sekali bayar" },
      features: [
        { en: "Everything in Essential", id: "Semua di paket Esensial" },
        { en: "Personal guidance", id: "Pendampingan personal" },
        { en: "Priority service", id: "Prioritas layanan" },
        { en: "Progress review", id: "Evaluasi hasil" },
      ],
      button: { en: "Choose Growth", id: "Pilih Bertumbuh" },
      popular: true,
    },
    {
      name: { en: "Complete", id: "Menyeluruh" },
      description: {
        en: "Full support for bigger plans and goals.",
        id: "Dukungan lengkap untuk kebutuhan yang lebih besar.",
      },
      price: 699000,
      period: { en: "one-time", id: "sekali bayar" },
      features: [
        { en: "Everything in Growth", id: "Semua di paket Bertumbuh" },
        { en: "Extended service", id: "Layanan lanjutan" },
        { en: "More hands-on guidance", id: "Pendampingan intensif" },
        { en: "Priority support", id: "Dukungan prioritas" },
      ],
      button: { en: "Choose Complete", id: "Pilih Menyeluruh" },
      popular: false,
    },
  ],
  testimonials: [
    {
      quote: {
        en: "Everything was clear from day one, and the result was just what I hoped for. I felt supported throughout.",
        id: "Prosesnya jelas dari awal dan hasilnya sesuai yang saya harapkan. Rasanya tenang karena selalu didampingi.",
      },
      name: "Nadia Putri",
      detail: { en: "Customer since 2023", id: "Pelanggan sejak 2023" },
    },
    {
      quote: {
        en: "The team really listens and makes the experience feel personal, not like just another transaction.",
        id: "Timnya ramah dan benar-benar mendengarkan kebutuhan saya. Pengalamannya terasa personal, bukan sekadar transaksi.",
      },
      name: "Bima Aditya",
      detail: { en: "Customer since 2024", id: "Pelanggan sejak 2024" },
    },
    {
      quote: {
        en: "Transparent pricing, quick communication, and consistently great service. I’ll definitely be back.",
        id: "Harga transparan, komunikasinya cepat, dan kualitasnya konsisten. Pasti akan kembali lagi.",
      },
      name: "Salsa Maharani",
      detail: { en: "Customer since 2024", id: "Pelanggan sejak 2024" },
    },

  { quote: { en: "The process was so clear from day one. I always knew what was happening.", id: "Prosesnya sangat jelas sejak hari pertama. Saya selalu tahu apa yang sedang terjadi." }, name: "Rina W.", detail: { en: "Small business owner", id: "Pemilik usaha kecil" } },
  { quote: { en: "Worth every rupiah. Our page finally looks as good as our work.", id: "Sangat sepadan. Halaman kami akhirnya terlihat sebagus pekerjaan kami." }, name: "Dedi S.", detail: { en: "Freelancer", id: "Pekerja lepas" } },
  ],
  faqs: [
    {
      question: {
        en: "How do I get started?",
        id: "Bagaimana cara mulai menggunakan layanan?",
      },
      answer: {
        en: "Reach out on WhatsApp or email and tell us what you need. Our team will help you find a good next step.",
        id: "Hubungi kami lewat WhatsApp atau email. Ceritakan kebutuhanmu, lalu tim kami akan membantu memilih langkah yang sesuai.",
      },
    },
    {
      question: {
        en: "Do I need to book an appointment?",
        id: "Apakah saya perlu membuat janji terlebih dahulu?",
      },
      answer: {
        en: "Please get in touch before you visit so we can confirm a time and the service you need.",
        id: "Sebaiknya hubungi kami sebelum berkunjung agar kami bisa memastikan waktu dan layanan yang kamu butuhkan.",
      },
    },
    {
      question: {
        en: "Can I ask about a different service?",
        id: "Apakah tersedia pilihan layanan lain?",
      },
      answer: {
        en: "Of course. Talk to our team about your specific needs and we’ll recommend an option that fits.",
        id: "Tentu. Hubungi tim kami untuk membicarakan kebutuhan khusus dan mendapatkan rekomendasi yang tepat.",
      },
    },
    {
      question: {
        en: "Which payment methods do you accept?",
        id: "Metode pembayaran apa saja yang diterima?",
      },
      answer: {
        en: "We accept bank transfers and digital payments. We’ll confirm the details when you book.",
        id: "Kami menerima transfer bank dan pembayaran digital. Detail pembayaran akan dikonfirmasi saat pemesanan.",
      },
    },
    {
      question: {
        en: "How long does it take to get started?",
        id: "Berapa lama proses memulainya?",
      },
      answer: {
        en: "Most projects start within a few days of your first message. We will share a clear timeline before we begin.",
        id: "Kebanyakan proyek dimulai dalam beberapa hari setelah pesan pertamamu. Kami akan membagikan jadwal yang jelas sebelum mulai.",
      },
    },
    {
      question: {
        en: "Can I change my package later?",
        id: "Bisakah saya ganti paket di tengah jalan?",
      },
      answer: {
        en: "Yes. You can upgrade anytime and only pay the difference.",
        id: "Bisa. Kamu bisa naik paket kapan saja dan hanya membayar selisihnya.",
      },
    },
    {
      question: {
        en: "Do you offer a refund?",
        id: "Apakah ada jaminan refund?",
      },
      answer: {
        en: "If we have not started your project yet, you can cancel for a full refund. Just tell us within 7 days.",
        id: "Jika proyekmu belum dimulai, kamu bisa membatalkan dan mendapat refund penuh. Beri tahu kami dalam 7 hari.",
      },
    },
    {
      question: {
        en: "Can I see examples before I decide?",
        id: "Bisakah saya melihat contoh sebelum memutuskan?",
      },
      answer: {
        en: "Yes. Take a look at our portfolio below, or ask us for examples in your field.",
        id: "Bisa. Lihat portofolio kami di bawah, atau minta contoh di bidangmu.",
      },
    },

  { question: { en: "What do you need from me to start?", id: "Apa yang kamu butuhkan dari saya untuk memulai?" }, answer: { en: "Just a short chat about your goals. We handle the rest.", id: "Cukup obrolan singkat tentang tujuanmu. Sisanya kami yang urus." } },
  { question: { en: "Can I use my own domain?", id: "Bisakah saya memakai domain sendiri?" }, answer: { en: "Yes. We will help you connect it, step by step.", id: "Bisa. Kami bantu menghubungkannya, langkah demi langkah." } },
  ],
 process: [
    {
      icon: "✉",
      title: { en: "Say hello", id: "Sapa kami" },
      description: {
        en: "Tell us what you need in one short message.",
        id: "Ceritakan kebutuhanmu lewat satu pesan singkat.",
      },
    },
    {
      icon: "✎",
      title: { en: "Get a plan", id: "Dapatkan rencana" },
      description: {
        en: "We recommend the right package and a clear next step.",
        id: "Kami merekomendasikan paket yang tepat dan langkah berikutnya yang jelas.",
      },
    },
    {
      icon: "⚙",
      title: { en: "We do the work", id: "Kami kerjakan" },
      description: {
        en: "Relax while our team handles the details with care.",
        id: "Santai saja sementara tim kami mengerjakan semuanya dengan hati-hati.",
      },
    },
    {
      icon: "★",
      title: { en: "Enjoy the result", id: "Nikmati hasilnya" },
      description: {
        en: "Review the result together and share it with the world.",
        id: "Tinjau hasilnya bersama kami lalu bagikan ke dunia.",
      },
    },
],
 portfolio: [
    {
      icon: "❿",
      title: { en: "A fresh start for a local cafe", id: "Awal baru untuk kafe lokal" },
      category: { en: "Branding", id: "Branding" },
      description: {
        en: "A new look, a new menu, and a calmer morning rush.",
        id: "Tampilan baru, menu baru, dan pagi yang lebih tenang.",
      },
    },
    {
      icon: "▣",
      title: { en: "A simple shop, ready to sell", id: "Toko sederhana, siap berjualan" },
      category: { en: "Online store", id: "Toko online" },
      description: {
        en: "Products, prices, and checkout in one easy page.",
        id: "Produk, harga, dan checkout dalam satu halaman mudah.",
      },
    },
    {
      icon: "◈",
      title: { en: "A portfolio that gets replies", id: "Portofolio yang dibalas klien" },
      category: { en: "Portfolio", id: "Portofolio" },
      description: {
        en: "Work samples that show the craft, not just the tools.",
        id: "Contoh karya yang menunjukkan keahlian, bukan sekadar alat.",
      },
    },
    {
      icon: "✦",
      title: { en: "A booking page that books itself", id: "Halaman booking yang bekerja sendiri" },
      category: { en: "Booking", id: "Pemesanan" },
      description: {
        en: "Guests pick a time, we handle the rest.",
        id: "Tamu memilih waktu, kami yang mengurus sisanya.",
      },
    },
    {
      icon: "❖",
      title: { en: "A launch page for a new idea", id: "Halaman peluncuran ide baru" },
      category: { en: "Launch", id: "Peluncuran" },
      description: {
        en: "One page, one message, and a clear next step.",
        id: "Satu halaman, satu pesan, dan langkah berikutnya yang jelas.",
      },
    },
    {
      icon: "✜",
      title: { en: "A small business, looking big", id: "Usaha kecil yang terlihat besar" },
      category: { en: "Business", id: "Bisnis" },
      description: {
        en: "A professional home online for a growing team.",
        id: "Rumah online yang profesional untuk tim yang sedang tumbuh.",
      },
    },

  { icon: "▥", title: { en: "A warm menu for a family restaurant", id: "Menu hangat untuk restoran keluarga" }, category: { en: "Menu page", id: "Halaman menu" }, description: { en: "Dishes, prices, and opening hours in one calm page.", id: "Hidangan, harga, dan jam buka dalam satu halaman yang tenang." } },
  { icon: "▧", title: { en: "Class times for a yoga studio", id: "Jadwal kelas untuk studio yoga" }, category: { en: "Class page", id: "Halaman kelas" }, description: { en: "Schedules, teachers, and booking in a soft, simple layout.", id: "Jadwal, pengajar, dan booking dalam tata letak yang lembut dan sederhana." } },
],
 comparison: [
    {
      label: { en: "Core service", id: "Layanan inti" },
      values: [true, true, true],
    },
    {
      label: { en: "Initial consultation", id: "Konsultasi awal" },
      values: [true, true, true],
    },
    {
      label: { en: "WhatsApp support", id: "Dukungan via WhatsApp" },
      values: [true, true, true],
    },
    {
      label: { en: "Personal guidance", id: "Pendampingan personal" },
      values: [false, true, true],
    },
    {
      label: { en: "Priority service", id: "Prioritas layanan" },
      values: [false, true, true],
    },
    {
      label: { en: "Progress review", id: "Evaluasi hasil" },
      values: [false, true, true],
    },
    {
      label: { en: "Extended service", id: "Layanan lanjutan" },
      values: [false, false, true],
    },
    {
      label: { en: "More hands-on guidance", id: "Pendampingan intensif" },
      values: [false, false, true],
    },
    {
      label: { en: "Priority support", id: "Dukungan prioritas" },
      values: [false, false, true],
    },

  { label: { en: "Free updates for 30 days", id: "Update gratis 30 hari" }, values: [false, true, true] },
  { label: { en: "Dedicated manager", id: "Manajer khusus" }, values: [false, false, true] },
],
};

let currentLanguage = "en";

const createElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};

const localizedText = (text) => text[currentLanguage];

const setLocalizedText = (element, text) => {
  element.dataset.en = text.en;
  element.dataset.id = text.id;
  element.textContent = localizedText(text);
};

const formatPrice = (price) => new Intl.NumberFormat(BUSINESS_CONFIG.locale, {
  style: "currency",
  currency: BUSINESS_CONFIG.currency,
  maximumFractionDigits: 0,
}).format(price);

const makeWhatsAppUrl = (message) => {
  const phone = BUSINESS_CONFIG.contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

function renderBusinessInfo() {
  document.querySelectorAll("[data-business='name']").forEach((element) => {
    element.textContent = BUSINESS_CONFIG.name;
  });

  document.documentElement.style.setProperty("--primary", BUSINESS_CONFIG.colors.primary);
  document.documentElement.style.setProperty("--primary-dark", BUSINESS_CONFIG.colors.primaryDark);
  document.documentElement.style.setProperty("--primary-soft", BUSINESS_CONFIG.colors.primarySoft);
  document.documentElement.style.setProperty("--accent", BUSINESS_CONFIG.colors.accent);

  setLocalizedText(document.querySelector("#hero-eyebrow"), BUSINESS_CONFIG.hero.eyebrow);
  const heroTitle = document.querySelector("#hero-title");
  if (heroTitle) {
    const headline = createElement("span");
    const emphasis = createElement("em");
    setLocalizedText(headline, BUSINESS_CONFIG.hero.headline);
    setLocalizedText(emphasis, BUSINESS_CONFIG.hero.emphasis);
    heroTitle.replaceChildren(headline, document.createElement("br"), emphasis);
  }
  setLocalizedText(document.querySelector("#hero-description"), BUSINESS_CONFIG.hero.description);
  setLocalizedText(document.querySelector("#hero-proof"), BUSINESS_CONFIG.hero.proof);
  setLocalizedText(document.querySelector("#hero-location"), BUSINESS_CONFIG.hero.location);
  setLocalizedText(document.querySelector("#hero-cta-label"), BUSINESS_CONFIG.hero.button);
  setLocalizedText(document.querySelector("#contact-cta-label"), BUSINESS_CONFIG.contact.button);
  setLocalizedText(document.querySelector("#contact-address"), BUSINESS_CONFIG.contact.address);

  document.querySelector("#contact-phone").textContent = BUSINESS_CONFIG.contact.phoneDisplay;
  document.querySelector("#contact-email").textContent = BUSINESS_CONFIG.contact.email;
  setLocalizedText(document.querySelector("#footer-tagline"), BUSINESS_CONFIG.tagline);
  document.querySelector("#current-year").textContent = String(new Date().getFullYear());

  document.title = currentLanguage === "en"
    ? `${BUSINESS_CONFIG.name} — Better, Together`
    : `${BUSINESS_CONFIG.name} — Bertumbuh Bersama`;
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    currentLanguage === "en"
      ? "Thoughtful services, made to fit your business and your needs."
      : "Layanan berkualitas yang disesuaikan dengan usaha dan kebutuhanmu.",
  );

  const greeting = currentLanguage === "en"
    ? `Hello ${BUSINESS_CONFIG.name}, I'd like to learn more about your services.`
    : `Halo ${BUSINESS_CONFIG.name}, saya ingin bertanya tentang layanan.`;
  const whatsappUrl = makeWhatsAppUrl(greeting);
  ["#contact-cta", "#contact-whatsapp"].forEach((selector) => {
    document.querySelector(selector)?.setAttribute("href", whatsappUrl);
  });
  document.querySelector("#contact-email-link")?.setAttribute("href", `mailto:${BUSINESS_CONFIG.contact.email}`);
}

function renderFeatures() {
  const list = document.querySelector("#feature-list");
  if (!list) return;

  list.replaceChildren();
  BUSINESS_CONFIG.features.forEach((feature, index) => {
    const card = createElement("article", "feature-card");
    card.append(createElement("span", "feature-icon", feature.icon));
    const title = createElement("h3");
    const description = createElement("p");
    setLocalizedText(title, feature.title);
    setLocalizedText(description, feature.description);
    card.append(title, description);
    card.setAttribute("aria-label", currentLanguage === "en"
      ? `Benefit ${index + 1}: ${localizedText(feature.title)}`
      : `Keunggulan ${index + 1}: ${localizedText(feature.title)}`);
    list.append(card);
  });
}

function renderServices() {
  const list = document.querySelector("#service-list");
  if (!list) return;

  list.replaceChildren();
  BUSINESS_CONFIG.services.forEach((service, index) => {
    const card = createElement("article", "service-card");
    const top = createElement("div", "service-card-top");
    top.append(createElement("span", "service-card-icon", service.icon));
    top.append(createElement(
      "span",
      "service-card-number",
      currentLanguage === "en" ? `0${index + 1} / SERVICE` : `0${index + 1} / LAYANAN`,
    ));
    card.append(top);
    const title = createElement("h3");
    const description = createElement("p");
    setLocalizedText(title, service.title);
    setLocalizedText(description, service.description);
    card.append(title, description);
    list.append(card);
  });
}

function renderPackages() {
  const list = document.querySelector("#package-list");
  if (!list) return;

  list.replaceChildren();
  BUSINESS_CONFIG.packages.forEach((pack) => {
    const card = createElement("article", `package-card${pack.popular ? " is-popular" : ""}`);
    if (pack.popular) {
      const popularTag = createElement("span", "popular-tag");
      setLocalizedText(popularTag, { en: "MOST POPULAR", id: "PALING POPULER" });
      card.append(popularTag);
    }

    const name = createElement("h3", "package-name");
    const description = createElement("p", "package-description");
    setLocalizedText(name, pack.name);
    setLocalizedText(description, pack.description);
    card.append(name, description);

    const price = createElement("div", "package-price");
    price.append(createElement("strong", "", formatPrice(pack.price)));
    card.append(price);
    const period = createElement("p", "package-period");
    setLocalizedText(period, pack.period);
    card.append(period, createElement("div", "package-divider"));

    const features = createElement("ul", "package-features");
    pack.features.forEach((feature) => {
      const item = createElement("li");
      setLocalizedText(item, feature);
      features.append(item);
    });
    card.append(features);

    const button = createElement("a", `button package-button${pack.popular ? "" : " secondary"}`);
    const buttonLabel = createElement("span");
    setLocalizedText(buttonLabel, pack.button);
    button.href = makeWhatsAppUrl(currentLanguage === "en"
      ? `Hello ${BUSINESS_CONFIG.name}, I'm interested in the ${localizedText(pack.name)} package.`
      : `Halo ${BUSINESS_CONFIG.name}, saya tertarik dengan paket ${localizedText(pack.name)}.`);
    button.append(buttonLabel, createElement("span", "", "↗"));
    card.append(button);
    list.append(card);
  });
}

function renderTestimonials() {
  const list = document.querySelector("#testimonial-list");
  if (!list) return;

  list.replaceChildren();
  BUSINESS_CONFIG.testimonials.forEach((testimonial) => {
    const card = createElement("article", "testimonial-card");
    card.append(createElement("span", "testimonial-stars", "★★★★★"));
    const quote = createElement("blockquote", "testimonial-quote");
    setLocalizedText(quote, { en: `“${testimonial.quote.en}”`, id: `“${testimonial.quote.id}”` });
    card.append(quote);
    const person = createElement("div", "testimonial-person");
    person.append(createElement("span", "testimonial-avatar", testimonial.name.trim().charAt(0).toUpperCase()));
    const details = createElement("div");
    const name = createElement("strong", "", testimonial.name);
    const detail = createElement("small");
    setLocalizedText(detail, testimonial.detail);
    details.append(name, detail);
    person.append(details);
    card.append(person);
    list.append(card);
  });
}

function renderFaqs() {
  const list = document.querySelector("#faq-list");
  if (!list) return;

  list.replaceChildren();
  BUSINESS_CONFIG.faqs.forEach((faq, index) => {
    const item = createElement("details", "faq-item");
    const question = createElement("summary");
    question.id = `faq-question-${index + 1}`;
    setLocalizedText(question, faq.question);
    item.setAttribute("aria-labelledby", question.id);
    const answer = createElement("p");
    setLocalizedText(answer, faq.answer);
    item.append(question, answer);
    list.append(item);
  });
}

function renderProcess() {
 const list = document.querySelector("#process-list");
 if (!list) return;
 list.replaceChildren();
 BUSINESS_CONFIG.process.forEach((step, index) => {
  const card = createElement("article", "process-card");
  const top = createElement("div", "process-card-top");
  const icon = createElement("span", "process-card-icon", step.icon);
  const number = createElement("span", "process-card-number");
  number.textContent = "0" + (index + 1) + (currentLanguage === "en" ? " / STEP" : " / LANGKAH");
  top.append(icon, number);
  const title = createElement("h3");
  setLocalizedText(title, step.title);
  const desc = createElement("p");
  setLocalizedText(desc, step.description);
  card.append(top, title, desc);
  list.append(card);
 });
}
function renderPortfolio() {
 const grid = document.querySelector("#portfolio-grid");
 if (!grid) return;
 grid.replaceChildren();
 BUSINESS_CONFIG.portfolio.forEach((item) => {
  const card = createElement("article", "portfolio-card");
  const icon = createElement("span", "portfolio-icon", item.icon);
  const category = createElement("p", "portfolio-category");
  setLocalizedText(category, item.category);
  const title = createElement("h3");
  setLocalizedText(title, item.title);
  const desc = createElement("p", "portfolio-description");
  setLocalizedText(desc, item.description);
  card.append(icon, category, title, desc);
  grid.append(card);
 });
}
function renderComparison() {
 const wrap = document.querySelector("#comparison-table");
 if (!wrap) return;
 wrap.replaceChildren();
 const table = createElement("table", "comparison-table");
 const head = createElement("thead");
 const headRow = createElement("tr");
 headRow.append(createElement("th", "comparison-feature"));
 BUSINESS_CONFIG.packages.forEach((pack) => {
  const th = createElement("th", "comparison-package");
  const name = createElement("span", "comparison-package-name");
  setLocalizedText(name, pack.name);
  const price = createElement("span", "comparison-package-price", formatPrice(pack.price));
  th.append(name, price);
  headRow.append(th);
 });
 head.append(headRow);
 const body = createElement("tbody");
 BUSINESS_CONFIG.comparison.forEach((row) => {
  const tr = createElement("tr");
  const feature = createElement("td", "comparison-feature");
  setLocalizedText(feature, row.label);
  tr.append(feature);
  row.values.forEach((value) => {
   const td = createElement("td", "comparison-value", value ? "✓" : "—");
   if (value) td.classList.add("is-included");
   tr.append(td);
  });
  body.append(tr);
 });
 table.append(head, body);
 wrap.append(table);
}
function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  renderBusinessInfo();
  renderFeatures();
  renderServices();
  renderPackages();
 renderProcess();
 renderPortfolio();
 renderComparison();
  renderTestimonials();
  renderFaqs();
 if (window.applyReveals) window.applyReveals();

  document.querySelectorAll("[data-en][data-id]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });

  document.querySelector(".site-header nav")?.setAttribute("aria-label", language === "en" ? "Main navigation" : "Navigasi utama");
  document.querySelector(".nav .brand")?.setAttribute("aria-label", language === "en" ? `${BUSINESS_CONFIG.name} home` : `Beranda ${BUSINESS_CONFIG.name}`);
  document.querySelector(".rating span")?.setAttribute("aria-label", language === "en" ? "5 out of 5 stars" : "5 dari 5 bintang");
  document.querySelector("#language-toggle").setAttribute("aria-label", language === "en" ? "Switch to Indonesian" : "Switch to English");
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-label", language === "en"
      ? (isOpen ? "Close menu" : "Open menu")
      : (isOpen ? "Tutup menu" : "Buka menu"));
  }
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector("#nav-links");
  if (!toggle || !links) return;

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", currentLanguage === "en" ? "Open menu" : "Buka menu");
    links.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", currentLanguage === "en"
      ? (isOpen ? "Open menu" : "Close menu")
      : (isOpen ? "Buka menu" : "Tutup menu"));
    links.classList.toggle("is-open", !isOpen);
  });
  links.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      toggle.focus();
    }
  });
}

document.querySelector("#language-toggle").addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "id" : "en");
});

setLanguage("en");
setupMobileMenu();

/* Premium motion: scroll reveal + header shadow */
(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var header = document.querySelector("header.site-header");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 24); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (reduceMotion || !("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("js-reveal");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); entry.target.style.transitionDelay = ""; observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -48px 0px" });
  window.applyReveals = function () {
    document.querySelectorAll("main section").forEach(function (s, idx) { if (idx > 0) s.classList.add("reveal"); });
    document.querySelectorAll(".service-card, .testimonial-card, .quote-card, .gallery-tile, .step-card, .feature-card, .package-card, .portfolio-card, .process-card, .lookbook-card, .product-card, .shipping-item, .faq-item").forEach(function (c) { c.classList.add("reveal"); });
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
      var p = el.parentElement;
      if (p && /grid|list/.test(p.className)) {
        var kids = Array.prototype.filter.call(p.children, function (c) { return c.classList.contains("reveal"); });
        var i = kids.indexOf(el);
        if (i > 0 && i < 6) el.style.transitionDelay = (i * 70) + "ms";
      }
      observer.observe(el);
    });
  };
  window.applyReveals();
})();
