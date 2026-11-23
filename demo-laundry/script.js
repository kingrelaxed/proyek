function setLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-en][data-id]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });

  document.title = language === "en"
    ? "Laundry Senja — Laundry Day, Made Lighter"
    : "Laundry Senja — Hari Mencuci, Jadi Lebih Ringan";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    language === "en"
      ? "Laundry day, made a little lighter. Pick-up and delivery laundry service by Laundry Senja."
      : "Hari mencuci jadi lebih ringan. Layanan laundry jemput dan antar dari Laundry Senja.",
  );
  document.querySelector(".site-header nav")?.setAttribute("aria-label", language === "en" ? "Main navigation" : "Navigasi utama");
  document.querySelector(".hero-art")?.setAttribute("aria-label", language === "en"
    ? "Laundry basket and fresh clothes illustration made with CSS and emoji"
    : "Ilustrasi keranjang laundry dan pakaian segar dari CSS dan emoji");
  document.querySelector(".rating-stars")?.setAttribute("aria-label", language === "en" ? "5 out of 5 stars" : "5 dari 5 bintang");

  const languageToggle = document.querySelector("#language-toggle");
  languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Indonesian" : "Switch to English");
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-label", language === "en" ? (isOpen ? "Close menu" : "Open menu") : (isOpen ? "Tutup menu" : "Buka menu"));
  }
}

function setupLanguageToggle() {
  const languageToggle = document.querySelector("#language-toggle");
  languageToggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "en" ? "id" : "en";
    setLanguage(nextLanguage);
  });
}

function setupMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("#nav-links");
  if (!menuToggle || !navLinks) return;

  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", document.documentElement.lang === "en" ? "Open menu" : "Buka menu");
    navLinks.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", document.documentElement.lang === "en"
      ? (isOpen ? "Open menu" : "Close menu")
      : (isOpen ? "Buka menu" : "Tutup menu"));
    navLinks.classList.toggle("is-open", !isOpen);
  });
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });
}

setLanguage("en");
setupLanguageToggle();
setupMobileMenu();
