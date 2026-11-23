// Ubah nilai di objek ini untuk menyesuaikan landing page dengan bisnis kamu.
const BUSINESS_CONFIG = {
  name: "Ruang Tumbuh",
  tagline: "Layanan yang terasa lebih personal.",
  currency: "IDR",
  locale: "id-ID",
  colors: {
    primary: "#55725c",
    primaryDark: "#3e5946",
    primarySoft: "#dce5d8",
    accent: "#c9a66b",
  },
  hero: {
    eyebrow: "SOLUSI YANG TEPAT UNTUKMU",
    headline: "Lebih mudah mencapai",
    emphasis: "tujuanmu.",
    description: "Kami membantu kamu mendapatkan layanan berkualitas dengan proses yang praktis, ramah, dan transparan.",
    button: "Mulai sekarang",
    proof: "Dipercaya pelanggan yang mengutamakan kualitas",
    location: "MELAYANI DENGAN SEPENUH HATI",
  },
  contact: {
    whatsapp: "6281234567890",
    phoneDisplay: "+62 812-3456-7890",
    email: "halo@namabisnis.id",
    address: "Jakarta, Indonesia",
    button: "Ngobrol dengan kami",
  },
  features: [
    { icon: "✳", title: "Dibuat untukmu", description: "Solusi disesuaikan dengan kebutuhan, tujuan, dan situasimu." },
    { icon: "◇", title: "Kualitas terjaga", description: "Setiap detail dikerjakan dengan perhatian dan standar terbaik." },
    { icon: "↗", title: "Proses praktis", description: "Langkah yang jelas membuat semuanya terasa lebih sederhana." },
    { icon: "♡", title: "Didampingi ahli", description: "Tim ramah kami siap mendengarkan dan membantu kapan dibutuhkan." },
  ],
  services: [
    { icon: "✳", title: "Layanan Utama", description: "Solusi menyeluruh yang dirancang untuk hasil yang kamu butuhkan." },
    { icon: "◇", title: "Konsultasi", description: "Diskusi personal untuk menemukan pilihan yang paling tepat." },
    { icon: "↗", title: "Pendampingan", description: "Dukungan berkelanjutan agar setiap langkah terasa lebih mudah." },
  ],
  packages: [
    {
      name: "Esensial",
      description: "Untuk memulai dengan kebutuhan paling mendasar.",
      price: 199000,
      period: "sekali bayar",
      features: ["Layanan inti", "Konsultasi awal", "Dukungan via WhatsApp"],
      button: "Pilih Esensial",
      popular: false,
    },
    {
      name: "Bertumbuh",
      description: "Pilihan seimbang untuk hasil yang lebih maksimal.",
      price: 399000,
      period: "sekali bayar",
      features: ["Semua di paket Esensial", "Pendampingan personal", "Prioritas layanan", "Evaluasi hasil"],
      button: "Pilih Bertumbuh",
      popular: true,
    },
    {
      name: "Menyeluruh",
      description: "Dukungan lengkap untuk kebutuhan yang lebih besar.",
      price: 699000,
      period: "sekali bayar",
      features: ["Semua di paket Bertumbuh", "Layanan lanjutan", "Pendampingan intensif", "Dukungan prioritas"],
      button: "Pilih Menyeluruh",
      popular: false,
    },
  ],
  testimonials: [
    { quote: "Prosesnya jelas dari awal dan hasilnya sesuai yang saya harapkan. Rasanya tenang karena selalu didampingi.", name: "Nadia Putri", detail: "Pelanggan sejak 2023" },
    { quote: "Timnya ramah dan benar-benar mendengarkan kebutuhan saya. Pengalamannya terasa personal, bukan sekadar transaksi.", name: "Bima Aditya", detail: "Pelanggan sejak 2024" },
    { quote: "Harga transparan, komunikasinya cepat, dan kualitasnya konsisten. Pasti akan kembali lagi.", name: "Salsa Maharani", detail: "Pelanggan sejak 2024" },
  ],
  faqs: [
    { question: "Bagaimana cara mulai menggunakan layanan?", answer: "Hubungi kami lewat WhatsApp atau email. Ceritakan kebutuhanmu, lalu tim kami akan membantu memilih langkah yang sesuai." },
    { question: "Apakah saya perlu membuat janji terlebih dahulu?", answer: "Sebaiknya hubungi kami sebelum berkunjung agar kami bisa memastikan waktu dan layanan yang kamu butuhkan." },
    { question: "Apakah tersedia pilihan layanan lain?", answer: "Tentu. Hubungi tim kami untuk membicarakan kebutuhan khusus dan mendapatkan rekomendasi yang tepat." },
    { question: "Metode pembayaran apa saja yang diterima?", answer: "Kami menerima transfer bank dan pembayaran digital. Detail pembayaran akan dikonfirmasi saat pemesanan." },
  ],
};

const createElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
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

  setText("#hero-eyebrow", BUSINESS_CONFIG.hero.eyebrow);
  const heroTitle = document.querySelector("#hero-title");
  if (heroTitle) {
    const emphasis = createElement("em", "", BUSINESS_CONFIG.hero.emphasis);
    heroTitle.replaceChildren(document.createTextNode(`${BUSINESS_CONFIG.hero.headline} `), emphasis);
  }
  setText("#hero-description", BUSINESS_CONFIG.hero.description);
  setText("#hero-proof", BUSINESS_CONFIG.hero.proof);
  setText("#hero-location", BUSINESS_CONFIG.hero.location);
  const heroCta = document.querySelector("#hero-cta");
  if (heroCta) heroCta.firstChild.textContent = `${BUSINESS_CONFIG.hero.button} `;
  setText("#contact-phone", BUSINESS_CONFIG.contact.phoneDisplay);
  setText("#contact-email", BUSINESS_CONFIG.contact.email);
  setText("#contact-address", BUSINESS_CONFIG.contact.address);
  setText("#footer-tagline", BUSINESS_CONFIG.tagline);
  setText("#current-year", String(new Date().getFullYear()));

  document.title = `${BUSINESS_CONFIG.name} — ${BUSINESS_CONFIG.hero.headline} ${BUSINESS_CONFIG.hero.emphasis}`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", BUSINESS_CONFIG.hero.description);

  const whatsappUrl = makeWhatsAppUrl(`Halo ${BUSINESS_CONFIG.name}, saya ingin bertanya tentang layanan.`);
  ["#contact-cta", "#contact-whatsapp"].forEach((selector) => {
    document.querySelector(selector)?.setAttribute("href", whatsappUrl);
  });
  document.querySelector("#contact-email-link")?.setAttribute("href", `mailto:${BUSINESS_CONFIG.contact.email}`);
  const cta = document.querySelector("#contact-cta");
  if (cta) cta.firstChild.textContent = `${BUSINESS_CONFIG.contact.button} `;
}

function renderFeatures() {
  const list = document.querySelector("#feature-list");
  if (!list) return;

  BUSINESS_CONFIG.features.forEach((feature, index) => {
    const card = createElement("article", "feature-card");
    card.append(createElement("span", "feature-icon", feature.icon));
    card.append(createElement("h3", "", feature.title));
    card.append(createElement("p", "", feature.description));
    card.setAttribute("aria-label", `Keunggulan ${index + 1}: ${feature.title}`);
    list.append(card);
  });
}

function renderServices() {
  const list = document.querySelector("#service-list");
  if (!list) return;

  BUSINESS_CONFIG.services.forEach((service, index) => {
    const card = createElement("article", "service-card");
    const top = createElement("div", "service-card-top");
    top.append(createElement("span", "service-card-icon", service.icon));
    top.append(createElement("span", "service-card-number", `0${index + 1} / LAYANAN`));
    card.append(top);
    card.append(createElement("h3", "", service.title));
    card.append(createElement("p", "", service.description));
    list.append(card);
  });
}

function renderPackages() {
  const list = document.querySelector("#package-list");
  if (!list) return;

  BUSINESS_CONFIG.packages.forEach((pack) => {
    const card = createElement("article", `package-card${pack.popular ? " is-popular" : ""}`);
    if (pack.popular) card.append(createElement("span", "popular-tag", "PALING POPULER"));
    card.append(createElement("h3", "package-name", pack.name));
    card.append(createElement("p", "package-description", pack.description));

    const price = createElement("div", "package-price");
    price.append(createElement("strong", "", formatPrice(pack.price)));
    card.append(price);
    card.append(createElement("p", "package-period", pack.period));
    card.append(createElement("div", "package-divider"));

    const features = createElement("ul", "package-features");
    pack.features.forEach((feature) => features.append(createElement("li", "", feature)));
    card.append(features);

    const button = createElement("a", `button package-button${pack.popular ? "" : " secondary"}`);
    button.href = makeWhatsAppUrl(`Halo ${BUSINESS_CONFIG.name}, saya tertarik dengan paket ${pack.name}.`);
    button.append(document.createTextNode(pack.button));
    button.append(createElement("span", "", "↗"));
    card.append(button);
    list.append(card);
  });
}

function renderTestimonials() {
  const list = document.querySelector("#testimonial-list");
  if (!list) return;

  BUSINESS_CONFIG.testimonials.forEach((testimonial) => {
    const card = createElement("article", "testimonial-card");
    card.append(createElement("span", "testimonial-stars", "★★★★★"));
    const quote = createElement("blockquote", "testimonial-quote", `“${testimonial.quote}”`);
    card.append(quote);
    const person = createElement("div", "testimonial-person");
    person.append(createElement("span", "testimonial-avatar", testimonial.name.trim().charAt(0).toUpperCase()));
    const details = createElement("div");
    details.append(createElement("strong", "", testimonial.name));
    details.append(createElement("small", "", testimonial.detail));
    person.append(details);
    card.append(person);
    list.append(card);
  });
}

function renderFaqs() {
  const list = document.querySelector("#faq-list");
  if (!list) return;

  BUSINESS_CONFIG.faqs.forEach((faq, index) => {
    const item = createElement("details", "faq-item");
    const question = createElement("summary", "", faq.question);
    question.id = `faq-question-${index + 1}`;
    item.setAttribute("aria-labelledby", question.id);
    item.append(question);
    item.append(createElement("p", "", faq.answer));
    list.append(item);
  });
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector("#nav-links");
  if (!toggle || !links) return;

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka menu");
    links.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Buka menu" : "Tutup menu");
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

renderBusinessInfo();
renderFeatures();
renderServices();
renderPackages();
renderTestimonials();
renderFaqs();
setupMobileMenu();
