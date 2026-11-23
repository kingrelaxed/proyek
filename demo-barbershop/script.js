const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const languageToggle = document.querySelector("#language-toggle");

function setLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-en][data-id]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });

  document.title = language === "en"
    ? "Barber Senja — A Better Cut, A Better Evening"
    : "Barber Senja — Rapikan Gaya, Nikmati Senja";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    language === "en"
      ? "Barber Senja — your neighborhood barbershop in Jakarta. Easy booking via WhatsApp."
      : "Barber Senja — tempat potong rambut dan cukur pilihan di Jakarta. Booking mudah lewat WhatsApp.",
  );
  document.querySelector(".site-header nav")?.setAttribute("aria-label", language === "en" ? "Main navigation" : "Navigasi utama");
  document.querySelector(".hero-art")?.setAttribute("aria-label", language === "en"
    ? "A barbershop chair at sunset"
    : "Ilustrasi kursi barbershop saat senja");
  document.querySelectorAll(".quote-stars").forEach((stars) => {
    stars.setAttribute("aria-label", language === "en" ? "5 out of 5 stars" : "5 dari 5 bintang");
  });

  languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Indonesian" : "Switch to English");
  if (menuToggle) {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-label", language === "en"
      ? (isExpanded ? "Close navigation menu" : "Open navigation menu")
      : (isExpanded ? "Tutup menu navigasi" : "Buka menu navigasi"));
  }
}

languageToggle.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "en" ? "id" : "en");
});

setLanguage("en");

if (menuToggle && navLinks) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", document.documentElement.lang === "en" ? "Open navigation menu" : "Buka menu navigasi");
    navLinks.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", document.documentElement.lang === "en"
      ? (isExpanded ? "Open navigation menu" : "Close navigation menu")
      : (isExpanded ? "Buka menu navigasi" : "Tutup menu navigasi"));
    navLinks.classList.toggle("is-open", !isExpanded);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });
}
