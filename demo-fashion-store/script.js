const WHATSAPP_NUMBER = "6281234567890";

const PRODUCTS = [
  { id: "linen-shirt", name: { en: "Linen Shirt", id: "Kemeja Linen" }, category: "clothes", categoryName: { en: "Clothes", id: "Pakaian" }, price: 15, emoji: "👔", art: "art-linen", description: { en: "A breathable everyday favorite.", id: "Favorit harian yang nyaman dan adem." } },
  { id: "voile-hijab", name: { en: "Voile Hijab", id: "Hijab Voile" }, category: "hijab", categoryName: { en: "Hijab", id: "Hijab" }, price: 6, emoji: "🧕", art: "art-hijab", description: { en: "Soft, light, and easy to style.", id: "Lembut, ringan, dan mudah ditata." } },
  { id: "sneakers", name: { en: "Sneakers", id: "Sneakers" }, category: "shoes", categoryName: { en: "Shoes", id: "Sepatu" }, price: 30, emoji: "👟", art: "art-sneakers", description: { en: "Comfy steps for wherever you go.", id: "Langkah nyaman ke mana pun kamu pergi." } },
  { id: "floral-dress", name: { en: "Floral Dress", id: "Gaun Floral" }, category: "clothes", categoryName: { en: "Clothes", id: "Pakaian" }, price: 20, emoji: "👗", art: "art-dress", description: { en: "A little bloom for any day.", id: "Sentuhan bunga untuk hari-harimu." } },
  { id: "plain-t-shirt", name: { en: "Plain T-Shirt", id: "Kaos Polos" }, category: "clothes", categoryName: { en: "Clothes", id: "Pakaian" }, price: 8, emoji: "👕", art: "art-tee", description: { en: "The one you'll wear on repeat.", id: "Andalan yang ingin dipakai terus." } },
  { id: "sling-bag", name: { en: "Sling Bag", id: "Tas Selempang" }, category: "accessories", categoryName: { en: "Accessories", id: "Aksesori" }, price: 13, emoji: "👜", art: "art-bag", description: { en: "A just-right size for little outings.", id: "Ukuran pas untuk jalan-jalan santai." } },
{ id: "denim-jacket", name: { en: "Denim Jacket", id: "Jaket Denim" }, category: "clothes", categoryName: { en: "Clothes", id: "Pakaian" }, price: 28, emoji: "🧥", art: "art-jacket", description: { en: "A classic layer for every season.", id: "Lapisan klasik untuk setiap musim." } },
{ id: "knit-sweater", name: { en: "Knit Sweater", id: "Sweater Rajut" }, category: "clothes", categoryName: { en: "Clothes", id: "Pakaian" }, price: 22, emoji: "🧶", art: "art-sweater", description: { en: "Soft, warm, and made for slow mornings.", id: "Lembut, hangat, dan cocok untuk pagi yang santai." } },
{ id: "satin-hijab", name: { en: "Satin Hijab", id: "Hijab Satin" }, category: "hijab", categoryName: { en: "Hijab", id: "Hijab" }, price: 9, emoji: "🧕", art: "art-satin", description: { en: "A soft shine for special days.", id: "Kilau lembut untuk hari istimewa." } },
{ id: "canvas-tote", name: { en: "Canvas Tote", id: "Tas Kanvas" }, category: "accessories", categoryName: { en: "Accessories", id: "Aksesoris" }, price: 16, emoji: "🛍️", art: "art-tote", description: { en: "Roomy, sturdy, and ready for anything.", id: "Luas, kuat, dan siap untuk apa saja." } },
{ id: "leather-loafers", name: { en: "Leather Loafers", id: "Loafers Kulit" }, category: "shoes", categoryName: { en: "Shoes", id: "Sepatu" }, price: 35, emoji: "👞", art: "art-loafers", description: { en: "Smart, comfy, and made to last.", id: "Rapi, nyaman, dan awet dipakai." } },
{ id: "summer-sandals", name: { en: "Summer Sandals", id: "Sandal Musim Panas" }, category: "shoes", categoryName: { en: "Shoes", id: "Sepatu" }, price: 14, emoji: "🩴", art: "art-sandals", description: { en: "Light steps for sunny days.", id: "Langkah ringan untuk hari yang cerah." } },

  { id: "denim-shorts", name: { en: "Denim Shorts", id: "Celana Pendek Denim" }, category: "clothes", categoryName: { en: "Clothes", id: "Pakaian" }, price: 16, emoji: "🩳", art: "art-shorts", description: { en: "Easy, breezy, and made for warm days.", id: "Ringan dan nyaman untuk hari yang hangat." } },
  { id: "linen-blazer", name: { en: "Linen Blazer", id: "Blazer Linen" }, category: "clothes", categoryName: { en: "Clothes", id: "Pakaian" }, price: 32, emoji: "🧥", art: "art-blazer", description: { en: "Light tailoring with a relaxed fit.", id: "Potongan ringan dengan siluet santai." } },
  { id: "cotton-scarf", name: { en: "Cotton Scarf", id: "Syal Katun" }, category: "accessories", categoryName: { en: "Accessories", id: "Aksesoris" }, price: 7, emoji: "🧣", art: "art-scarf", description: { en: "Soft cotton, endless ways to wear it.", id: "Katun lembut, banyak cara memakainya." } },
  { id: "straw-hat", name: { en: "Straw Hat", id: "Topi Jerami" }, category: "accessories", categoryName: { en: "Accessories", id: "Aksesoris" }, price: 12, emoji: "👒", art: "art-hat", description: { en: "Shade with a sunny-day smile.", id: "Penyejuk dengan senyum hari cerah." } },
];

const translations = {
  en: {
    products: "pieces",
    product: "piece",
    add: "Add to bag",
    added: "added to your bag",
    remove: "Remove",
    empty: "Your bag is taking a little break.",
    item: "item",
    items: "items",
    shippingThreshold: 40,
  },
  id: {
    products: "pilihan",
    product: "pilihan",
    add: "Tambah ke tas",
    added: "ditambahkan ke tasmu",
    remove: "Hapus",
    empty: "Tas belanjamu sedang beristirahat.",
    item: "produk",
    items: "produk",
    shippingThreshold: 40,
  },
};

let currentLanguage = "en";
let activeFilter = "all";
const cart = new Map();

const productGrid = document.querySelector("#product-grid");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const cartSubtotal = document.querySelector("#cart-subtotal");
const cartEmpty = document.querySelector("#cart-empty");
const cartCheckout = document.querySelector("#cart-checkout");
const cartPanel = document.querySelector("#cart-panel");
const cartToggle = document.querySelector("#cart-toggle");
const cartFeedback = document.querySelector("#cart-feedback");
const productCount = document.querySelector("#product-count");

function formatPrice(price) {
  return `$${price}`;
}

function localizedText(values) {
  return values[currentLanguage];
}

function makeWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-en][data-id]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });

  const languageToggle = document.querySelector("#language-toggle");
  languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Indonesian" : "Switch to English");
  document.querySelector(".site-header nav")?.setAttribute("aria-label", language === "en" ? "Main navigation" : "Navigasi utama");
  document.querySelector(".hero-art")?.setAttribute("aria-label", language === "en" ? "A playful fashion illustration made with CSS and emoji" : "Ilustrasi busana kreatif dari CSS dan emoji");
  document.querySelector(".filter-list")?.setAttribute("aria-label", language === "en" ? "Filter products by category" : "Saring produk berdasarkan kategori");
  document.querySelector(".hero-proof .proof-stars")?.setAttribute("aria-label", language === "en" ? "5 out of 5 stars" : "5 dari 5 bintang");
  document.querySelector("#cart-close")?.setAttribute("aria-label", language === "en" ? "Close bag" : "Tutup tas");
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-label", language === "en" ? (isOpen ? "Close menu" : "Open menu") : (isOpen ? "Tutup menu" : "Buka menu"));
  }
  document.title = language === "en" ? "Senja Style — Wear Your Feeling" : "Senja Style — Pakai yang Kamu Rasa";
  document.querySelector('meta[name="description"]')?.setAttribute("content", language === "en"
    ? "Easygoing everyday style, thoughtfully chosen. Discover Senja Style."
    : "Gaya santai untuk sehari-hari, dipilih dengan sepenuh hati. Temukan Senja Style.");
var _renderProducts = renderProducts; renderProducts = function () { _renderProducts.apply(null, arguments); if (window.applyReveals) window.applyReveals(); };
  renderProducts();
  renderCart();
  updateProductCount();
}

function updateProductCount() {
  const visibleCount = PRODUCTS.filter((product) => activeFilter === "all" || product.category === activeFilter).length;
  const label = visibleCount === 1 ? translations[currentLanguage].product : translations[currentLanguage].products;
  productCount.textContent = `${visibleCount} ${label}`;
}

function renderProducts() {
  productGrid.replaceChildren();
  const visibleProducts = PRODUCTS.filter((product) => activeFilter === "all" || product.category === activeFilter);

  visibleProducts.forEach((product, index) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const art = document.createElement("div");
    art.className = `product-art ${product.art}`;
    art.setAttribute("role", "img");
    art.setAttribute("aria-label", currentLanguage === "en"
      ? `${localizedText(product.name)} fashion illustration`
      : `Ilustrasi busana ${localizedText(product.name)}`);
    const emoji = document.createElement("span");
    emoji.className = "product-emoji";
    emoji.setAttribute("aria-hidden", "true");
    emoji.textContent = product.emoji;
    art.append(emoji);

    const artLabel = document.createElement("span");
    artLabel.className = "product-art-label";
    artLabel.textContent = `SENJA / ${String(index + 1).padStart(2, "0")}`;
    art.append(artLabel);

    const categoryBadge = document.createElement("span");
    categoryBadge.className = "product-category";
    categoryBadge.textContent = localizedText(product.categoryName);
    art.append(categoryBadge);
    card.append(art);

    const info = document.createElement("div");
    info.className = "product-info";
    const text = document.createElement("div");
    const name = document.createElement("h3");
    name.className = "product-name";
    name.textContent = localizedText(product.name);
    const category = document.createElement("span");
    category.className = "product-category-text";
    category.textContent = product.description[currentLanguage];
    text.append(name, category);

    const price = document.createElement("strong");
    price.className = "product-price";
    price.textContent = formatPrice(product.price);
    info.append(text, price);
    card.append(info);

    const addButton = document.createElement("button");
    addButton.className = "add-button";
    addButton.type = "button";
    addButton.textContent = `${translations[currentLanguage].add} +`;
    addButton.addEventListener("click", () => addToCart(product.id));
    card.append(addButton);
    productGrid.append(card);
  });

  updateProductCount();
}

function addToCart(productId) {
  cart.set(productId, (cart.get(productId) || 0) + 1);
  const product = PRODUCTS.find((item) => item.id === productId);
  cartFeedback.textContent = `${localizedText(product.name)} ${translations[currentLanguage].added}.`;
  renderCart();
}

function removeFromCart(productId) {
  cart.delete(productId);
  renderCart();
}

function renderCart() {
  cartItems.replaceChildren();
  let quantity = 0;
  let subtotal = 0;
  const orderLines = [];

  cart.forEach((count, productId) => {
    const product = PRODUCTS.find((item) => item.id === productId);
    quantity += count;
    subtotal += product.price * count;
    orderLines.push(`${count} × ${localizedText(product.name)} — ${formatPrice(product.price * count)}`);

    const row = document.createElement("div");
    row.className = "cart-item";
    const info = document.createElement("span");
    info.className = "cart-item-info";
    const name = document.createElement("strong");
    name.textContent = localizedText(product.name);
    const detail = document.createElement("small");
    detail.textContent = `${count} ${count === 1 ? translations[currentLanguage].item : translations[currentLanguage].items} · ${formatPrice(product.price)} ${currentLanguage === "en" ? "each" : "per item"}`;
    info.append(name, detail);

    const side = document.createElement("span");
    side.className = "cart-item-side";
    const lineTotal = document.createElement("strong");
    lineTotal.textContent = formatPrice(product.price * count);
    const remove = document.createElement("button");
    remove.className = "cart-remove";
    remove.type = "button";
    remove.textContent = translations[currentLanguage].remove;
    remove.setAttribute("aria-label", `${translations[currentLanguage].remove} ${localizedText(product.name)}`);
    remove.addEventListener("click", () => removeFromCart(productId));
    side.append(lineTotal, remove);
    row.append(info, side);
    cartItems.append(row);
  });

  cartCount.textContent = String(quantity);
  cartSubtotal.textContent = formatPrice(subtotal);
  cartEmpty.hidden = quantity > 0;
  cartCheckout.setAttribute("aria-disabled", String(quantity === 0));
  const greeting = currentLanguage === "en" ? "Hello Senja Style! I'd love to order:" : "Halo Senja Style! Saya ingin memesan:";
  const order = orderLines.length ? `${greeting}\n${orderLines.join("\n")}\nSubtotal: ${formatPrice(subtotal)}` : greeting;
  cartCheckout.href = makeWhatsAppUrl(order);
}

function setCartOpen(isOpen) {
  cartPanel.classList.toggle("is-open", isOpen);
  cartPanel.setAttribute("aria-hidden", String(!isOpen));
  cartToggle.setAttribute("aria-expanded", String(isOpen));
}

function setupInteractions() {
  document.querySelector("#language-toggle").addEventListener("click", () => {
    setLanguage(currentLanguage === "en" ? "id" : "en");
  });

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("is-active", item === button));
      renderProducts();
      cartFeedback.textContent = "";
    });
  });

  cartToggle.addEventListener("click", () => {
    setCartOpen(cartToggle.getAttribute("aria-expanded") !== "true");
  });
  document.querySelector("#cart-close").addEventListener("click", () => setCartOpen(false));
  document.addEventListener("click", (event) => {
    if (!cartPanel.contains(event.target) && !cartToggle.contains(event.target)) setCartOpen(false);
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("#nav-links");
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", currentLanguage === "en" ? "Open menu" : "Buka menu");
    navLinks.classList.remove("is-open");
  };
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", currentLanguage === "en" ? (isOpen ? "Open menu" : "Close menu") : (isOpen ? "Buka menu" : "Tutup menu"));
    navLinks.classList.toggle("is-open", !isOpen);
  });
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setCartOpen(false);
      closeMenu();
    }
  });
}

setLanguage("en");
setupInteractions();

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
