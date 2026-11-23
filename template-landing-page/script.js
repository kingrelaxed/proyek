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

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  renderBusinessInfo();
  renderFeatures();
  renderServices();
  renderPackages();
  renderTestimonials();
  renderFaqs();

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
