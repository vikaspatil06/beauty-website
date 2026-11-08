/* ============================================================
   Clarins — product catalogue (vanilla JS)
   25 products (5 per category), researched from live Nykaa
   listings on 7 Nov 2026. Prices are Nykaa selling prices
   from that day. All photos are stored locally in
   images/products/ — no hotlinks. See PRODUCT_SOURCES.md.
   ============================================================ */
window.PRODUCTS = [
  /* ---- FACE (5) ---- */
  { id: "face-maybelline-fitme-foundation", category: "face", name: "Maybelline New York Fit Me Matte+Poreless 16H Oil Control Foundation With SPF 22 PA++ 128 (30ml)", price: 441, mrp: 679, off: 35, rating: 4.4, badge: "Bestseller",
    img: "images/products/face-maybelline-fitme-foundation.webp",
    desc: "A matte, poreless liquid foundation with 16-hour oil control and SPF 22 PA++." },
  { id: "face-lakme-blur-primer", category: "face", name: "Lakme Unreal Blur Perfect Face Primer, Mattifies & Blurs Pores, Lightweight, Waterproof (30ml)", price: 494, mrp: 899, off: 45, rating: 4.4, badge: "Bestseller",
    img: "images/products/face-lakme-blur-primer.webp",
    desc: "A lightweight, waterproof face primer that mattifies skin and blurs pores." },
  { id: "face-loreal-infallible-powder", category: "face", name: "L'Oreal Paris Infallible 24H Fresh Wear Waterproof Powder Foundation - 180 (9 g)", price: 1099, mrp: 1099, off: 0, rating: 4.1, badge: "Bestseller",
    img: "images/products/face-loreal-infallible-powder.jpg",
    desc: "A waterproof powder foundation with up to 24-hour fresh wear, in a compact." },
  { id: "face-sugar-ace-foundation-stick", category: "face", name: "SUGAR Ace Of Face Foundation Stick | 24hr wear | Full Coverage | 07 Vanilla Latte (Fair, Golden Undertone) (12g)", price: 1065, mrp: 1299, off: 18, rating: 4.3, badge: "18% OFF",
    img: "images/products/face-sugar-ace-foundation-stick.jpg",
    desc: "A full-coverage foundation stick with 24-hour wear and an in-built brush." },
  { id: "face-plum-green-tea-moisturizer", category: "face", name: "Plum Green Tea Oil-Free Moisturizer With Niacinamide For Oily, Acne Prone Skin (50ml)", price: 423, mrp: 470, off: 10, rating: 4.4, badge: "10% OFF",
    img: "images/products/face-plum-green-tea-moisturizer.jpg",
    desc: "An oil-free moisturizer with niacinamide for oily, acne-prone skin." },

  /* ---- LIPS (5) ---- */
  { id: "lips-maybelline-superstay-matte-ink", category: "lips", name: "Maybelline New York Super Stay Matte Ink Liquid Lipstick, Lasts Up to 16 Hours – 15 Lover (5 ml)", price: 439, mrp: 799, off: 45, rating: 4.4, badge: "Bestseller",
    img: "images/products/lips-maybelline-superstay-matte-ink.jpg",
    desc: "A liquid lipstick that lasts up to 16 hours, with intense matte colour." },
  { id: "lips-sugar-matte-as-hell-crayon", category: "lips", name: "SUGAR Matte As Hell Crayon Lipstick, 12Hr Matte, with Sharpener – 17 Brandy Harrington (2.8 g)", price: 759, mrp: 949, off: 20, rating: 4.4, badge: "Bestseller",
    img: "images/products/lips-sugar-matte-as-hell-crayon.webp",
    desc: "A crayon lipstick with 12-hour matte wear, sold with a sharpener." },
  { id: "lips-nykaa-so-creme", category: "lips", name: "Nykaa So Creme! Creamy Matte Lipstick – Game On (4.2 g)", price: 165, mrp: 329, off: 50, rating: 4.3, badge: "Bestseller",
    img: "images/products/lips-nykaa-so-creme.jpg",
    desc: "A creamy matte lipstick in a bullet format." },
  { id: "lips-loreal-color-riche-volume", category: "lips", name: "L'Oréal Paris Color Riche Intense Volume Matte Slim Lipstick (1.8 g)", price: 999, mrp: 999, off: 0, rating: 4.5, badge: null,
    img: "images/products/lips-loreal-color-riche-volume.jpg",
    desc: "A slim matte lipstick delivering intense, voluminous matte colour." },
  { id: "lips-maybelline-vinyl-ink", category: "lips", name: "Maybelline New York Super Stay Vinyl Ink Liquid Lipstick, Instant Shine Lasts Up To 16H – 10 Lippy (4.2 ml)", price: 594, mrp: 849, off: 30, rating: 4.5, badge: null,
    img: "images/products/lips-maybelline-vinyl-ink.webp",
    desc: "A liquid lipstick with instant shine that lasts up to 16 hours." },

  /* ---- EYES (5) ---- */
  { id: "eyes-maybelline-colossal-kajal", category: "eyes", name: "Maybelline New York The Colossal Kajal, Smudgeproof & Waterproof Lasts Up To 24H - Deep Black (0.35g)", price: 176, mrp: 220, off: 20, rating: 4.4, badge: "Bestseller",
    img: "images/products/eyes-maybelline-colossal-kajal.webp",
    desc: "A smudge-proof, waterproof kajal with deep-black colour that lasts up to 24 hours without smudging." },
  { id: "eyes-maybelline-sky-high-mascara", category: "eyes", name: "Maybelline New York Lash Sensational Sky High Mascara, 802 Very Black, Lengthening & Waterproof (6ml)", price: 539, mrp: 829, off: 35, rating: 4.4, badge: "Bestseller",
    img: "images/products/eyes-maybelline-sky-high-mascara.jpg",
    desc: "Full volume and limitless length with a Flex Tower brush; waterproof, infused with bamboo extract and fibres." },
  { id: "eyes-maybelline-colossal-liner", category: "eyes", name: "Maybelline New York The Colossal Bold Liner, Smudgeproof & Waterproof Eyeliner - Bold Black (3ml)", price: 239, mrp: 319, off: 25, rating: 4.4, badge: "Bestseller",
    img: "images/products/eyes-maybelline-colossal-liner.webp",
    desc: "A smudge-proof, waterproof liquid eyeliner in intense Bold Black, with wear of up to 24 hours." },
  { id: "eyes-maybelline-blushed-nudes-palette", category: "eyes", name: "Maybelline New York The Blushed Nudes Eyeshadow Palette, 12 Highly Blendable Shades - Blush (9gm)", price: 899, mrp: 999, off: 10, rating: 4.2, badge: "10% OFF",
    img: "images/products/eyes-maybelline-blushed-nudes-palette.jpg",
    desc: "A 12-shade palette of blush-inspired pinks, mauves, taupes, bronze and plum in shimmer, matte and satin finishes." },
  { id: "eyes-maybelline-brow-pencil", category: "eyes", name: "Maybelline New York Define & Blend Brow Pencil For Perfect Brows, Eyebrow Pencil Natural Brown (0.16g)", price: 314, mrp: 349, off: 10, rating: 4.1, badge: "Bestseller",
    img: "images/products/eyes-maybelline-brow-pencil.jpg",
    desc: "A dual-ended brow pencil with a slim angled tip to outline and fill, and a spoolie to blend and groom." },

  /* ---- NAILS (5) ---- */
  { id: "nails-lakme-true-wear-polish", category: "nails", name: "Lakme True Wear Color Crush Nail Polish, Long Lasting & Vibrant Nail Paint, 103 (6ml)", price: 128, mrp: 150, off: 15, rating: 4.2, badge: "Bestseller",
    img: "images/products/nails-lakme-true-wear-polish.webp",
    desc: "A flawless, salon-like finish in just one coat, with Colour Lock technology; chip-resistant and vibrant." },
  { id: "nails-faces-splash-enamel", category: "nails", name: "Faces Canada Splash Nail Enamel - Royal Ruby (8ml)", price: 99, mrp: 129, off: 23, rating: 4.4, badge: "Bestseller",
    img: "images/products/nails-faces-splash-enamel.webp",
    desc: "A quick-drying, long-lasting nail enamel with a high-shine glossy finish and a chip-resistant formula." },
  { id: "nails-lakme-remover", category: "nails", name: "Lakme Liquid Nail Polish Remover With Vitamin E (27ml)", price: 88, mrp: 110, off: 20, rating: 4.6, badge: "Bestseller",
    img: "images/products/nails-lakme-remover.jpg",
    desc: "A gentle, quick-acting remover with Vitamin E that conditions nails and cuticles and prevents dryness." },
  { id: "nails-opi-rapi-dry", category: "nails", name: "O.P.I RapiDry Quick-Dry Nail Polish - Skip A Beet (9ml)", price: 495, mrp: 550, off: 10, rating: 4.4, badge: "Bestseller",
    img: "images/products/nails-opi-rapi-dry.webp",
    desc: "Quick-dry lacquer that dries in just 60 seconds; two coats deliver 5 days of wear." },
  { id: "nails-vaadi-cuticle-oil", category: "nails", name: "Vaadi Herbal Nail & Cuticle Oil with Jojoba Oil (10ml)", price: 108, mrp: 120, off: 10, rating: 4.4, badge: "Bestseller",
    img: "images/products/nails-vaadi-cuticle-oil.webp",
    desc: "Moisturises and conditions nails and cuticles; strengthens thin, weak nails and prevents cracking and peeling." },

  /* ---- SKIN CARE (5) ---- */
  { id: "skin-cetaphil-gentle-cleanser", category: "skin", name: "Cetaphil Gentle Skin Cleanser For Normal, Dry Skin Hydrates And Softens (118ml)", price: 381, mrp: 459, off: 17, rating: 4.5, badge: "Bestseller",
    img: "images/products/skin-cetaphil-gentle-cleanser.jpg",
    desc: "A gentle cleanser for normal, dry skin that hydrates and softens skin as it cleanses." },
  { id: "skin-minimalist-vitamin-c-serum", category: "skin", name: "Minimalist 10% Vitamin C Serum For Face For Glowing Skin (30ml)", price: 629, mrp: 699, off: 10, rating: 4.3, badge: "Bestseller",
    img: "images/products/skin-minimalist-vitamin-c-serum.webp",
    desc: "A 10% Vitamin C face serum for glowing skin." },
  { id: "skin-neutrogena-ultrasheer-sunscreen", category: "skin", name: "Neutrogena Ultrasheer SPF50+ PA++++ Ultra Light Moisturizing Face Sunscreen Oily & Sensitive Skin (80g)", price: 625, mrp: 780, off: 20, rating: 4.4, badge: "Bestseller",
    img: "images/products/skin-neutrogena-ultrasheer-sunscreen.jpg",
    desc: "An ultra-light, moisturizing face sunscreen with SPF 50+ PA++++ for oily and sensitive skin." },
  { id: "skin-dot-key-vitamin-c-moisturizer", category: "skin", name: "Dot & Key Vitamin C + E Super Bright Gel Moisturizer For Face, Visibly Boosts Glow (25ml)", price: 305, mrp: 350, off: 13, rating: 4.4, badge: "Bestseller",
    img: "images/products/skin-dot-key-vitamin-c-moisturizer.webp",
    desc: "A gel moisturizer with Vitamin C + E that visibly boosts glow." },
  { id: "skin-mcaffeine-coffee-scrub", category: "skin", name: "MCaffeine Naked Raw Coffee Exfoliating Face Scrub With Walnut & Vitamin E For Fresh & Glowing Skin (75g)", price: 206, mrp: 229, off: 10, rating: 4.4, badge: null,
    img: "images/products/skin-mcaffeine-coffee-scrub.webp",
    desc: "A coffee face scrub with walnut and Vitamin E that exfoliates for fresh, glowing skin." },
];

var CATEGORY_LABELS = { face: "Face", lips: "Lips", eyes: "Eyes", nails: "Nails", skin: "Skin Care" };

/* ---------- shared card markup (used by products page + home) ---------- */
function productCardHTML(p) {
  var app = window.ClarinsApp || {};
  var money = app.money || function (n) { return "\u20B9" + Number(n).toLocaleString("en-IN"); };
  var wished = app.isWished ? app.isWished(p.id) : false;
  var stars = "";
  var full = Math.floor(p.rating);
  for (var i = 0; i < 5; i++) stars += (i < full ? "\u2605" : "\u2606");
  return '<article class="product-card">' +
    '<div class="product-media">' +
      (p.badge ? '<span class="product-badge' + (p.badge === "New" ? " new" : "") + '">' + p.badge + "</span>" : "") +
      '<button class="wish-btn' + (wished ? " active" : "") + '" data-id="' + p.id + '" aria-label="Save ' + p.name.replace(/"/g, "&quot;") + ' to wishlist"><i class="bx ' + (wished ? "bxs-heart" : "bx-heart") + '"></i></button>' +
      '<img src="' + p.img + '" alt="' + p.name.replace(/"/g, "&quot;") + '" loading="lazy" onerror="this.onerror=null;this.src=window.PRODUCT_FALLBACK;">' +
    "</div>" +
    '<div class="product-body">' +
      '<span class="product-cat">' + (CATEGORY_LABELS[p.category] || p.category) + "</span>" +
      "<h3>" + p.name + "</h3>" +
      '<div class="product-rating" aria-label="Rated ' + p.rating + ' out of 5">' + stars + " <span>" + p.rating.toFixed(1) + "</span></div>" +
      '<p class="product-desc">' + p.desc + "</p>" +
      '<div class="product-price"><span class="now">' + money(p.price) + '</span><span class="mrp">' + money(p.mrp) + '</span><span class="off-pill">' + p.off + "% OFF</span></div>" +
      '<button class="btn btn-block" data-add-to-cart="' + p.id + '"><i class="bx bx-cart-add"></i> Add to Cart</button>' +
    "</div></article>";
}

(function () {
  "use strict";
  var grid = document.getElementById("product-grid");
  var topGrid = document.getElementById("top-products");
  if (!grid && !topGrid) return; /* this page shows no product grid */

  /* ---- Home: 4 bestsellers ---- */
  if (topGrid) {
    var topIds = ["face-maybelline-fitme-foundation", "lips-maybelline-superstay-matte-ink", "eyes-maybelline-sky-high-mascara", "skin-cetaphil-gentle-cleanser"];
    topGrid.innerHTML = topIds.map(function (id) {
      var p = window.PRODUCTS.find(function (x) { return x.id === id; });
      return p ? productCardHTML(p) : "";
    }).join("");
    return;
  }

  /* ---- Products page: search + pills + sort ---- */
  var searchInput = document.getElementById("product-search");
  var sortSelect = document.getElementById("sort-select");
  var countEl = document.getElementById("result-count");
  var emptyEl = document.getElementById("empty-state");
  var pills = Array.prototype.slice.call(document.querySelectorAll(".pill[data-cat]"));
  var params = new URLSearchParams(location.search || "");
  var state = {
    cat: params.get("cat") || "all",
    q: params.get("q") || "",
    sort: "featured"
  };
  if (searchInput && state.q) searchInput.value = state.q;

  function filtered() {
    var list = window.PRODUCTS.filter(function (p) {
      var okCat = state.cat === "all" || p.category === state.cat;
      var q = state.q.trim().toLowerCase();
      var okQ = !q || p.name.toLowerCase().indexOf(q) !== -1 || p.desc.toLowerCase().indexOf(q) !== -1 || p.category.indexOf(q) !== -1;
      return okCat && okQ;
    });
    if (state.sort === "price-asc") list.sort(function (a, b) { return a.price - b.price; });
    else if (state.sort === "price-desc") list.sort(function (a, b) { return b.price - a.price; });
    else if (state.sort === "discount") list.sort(function (a, b) { return b.off - a.off; });
    return list;
  }

  function render() {
    var list = filtered();
    grid.innerHTML = list.map(productCardHTML).join("");
    if (countEl) countEl.textContent = "Showing " + list.length + " of " + window.PRODUCTS.length + " products" +
      (state.cat !== "all" ? " in " + (CATEGORY_LABELS[state.cat] || state.cat) : "") +
      (state.q ? ' for "' + state.q + '"' : "");
    if (emptyEl) emptyEl.hidden = list.length !== 0;
    pills.forEach(function (pill) { pill.classList.toggle("active", pill.getAttribute("data-cat") === state.cat); });
    /* Re-apply wishlist state to freshly rendered cards */
    if (window.ClarinsApp && window.ClarinsApp.isWished) {
      Array.prototype.slice.call(grid.querySelectorAll(".wish-btn[data-id]")).forEach(function (btn) {
        var w = window.ClarinsApp.isWished(btn.getAttribute("data-id"));
        btn.classList.toggle("active", w);
        var icon = btn.querySelector("i");
        if (icon) icon.className = w ? "bx bxs-heart" : "bx bx-heart";
      });
    }
  }

  pills.forEach(function (pill) {
    pill.addEventListener("click", function () { state.cat = pill.getAttribute("data-cat"); render(); });
  });
  if (searchInput) searchInput.addEventListener("input", function () { state.q = searchInput.value; render(); });
  if (sortSelect) sortSelect.addEventListener("change", function () { state.sort = sortSelect.value; render(); });

  render();
})();
