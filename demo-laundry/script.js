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
