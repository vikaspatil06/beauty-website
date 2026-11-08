/* ============================================================
   Clarins — shared app logic (vanilla JS, no new stack)
   Nav / sidebar, dark mode (persisted), cart + wishlist
   (localStorage), cart drawer, toasts, hero slideshow.
   EVERY DOM lookup is guarded — pages that don't have an
   element simply skip that feature instead of crashing.
   ============================================================ */
(function () {
  "use strict";

  var body = document.body;
  var nav = document.querySelector(".site-nav");

  /* ---------- helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function money(n) { return "\u20B9" + Number(n).toLocaleString("en-IN"); }
  function readJSON(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; } catch (e) { return fallback; }
  }
  function writeJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable — cart just won't persist */ }
  }

  /* ---------- Image fallback ----------
     9 of the 23 original product image URLs are already dead
     upstream (404/403 on the live hosts — verified 7 Nov 2026).
     The URLs are kept verbatim as required; a broken image is
     swapped for a small Clarins placeholder instead of showing
     a broken-image icon. */
  window.PRODUCT_FALLBACK = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">' +
    '<rect width="600" height="600" fill="#fce4ec"/>' +
    '<text x="300" y="290" font-family="Georgia,serif" font-size="44" fill="#c2185b" text-anchor="middle">Clarins</text>' +
    '<text x="300" y="340" font-family="Arial,sans-serif" font-size="22" fill="#7d5a66" text-anchor="middle">Image unavailable</text></svg>');

  /* ---------- Toast ---------- */
  function toast(msg, icon) {
    var box = $("#toast-container");
    if (!box) {
      box = document.createElement("div");
      box.id = "toast-container";
      document.body.appendChild(box);
    }
    var el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = '<i class="bx ' + (icon || "bx-check-circle") + '"></i><span></span>';
    el.querySelector("span").textContent = msg;
    box.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 2600);
  }

  /* ---------- Dark mode (persisted, same key as the old site) ---------- */
  var modeToggle = $(".dark-light");
  function applyMode() {
    var saved = null;
    try { saved = localStorage.getItem("mode"); } catch (e) { /* ignore */ }
    var dark = saved === "dark-mode";
    if (body) body.classList.toggle("dark", dark);
    if (modeToggle) modeToggle.classList.toggle("active", dark);
  }
  applyMode();
  if (modeToggle) {
    modeToggle.addEventListener("click", function () {
      var dark = body ? !body.classList.contains("dark") : true;
      if (body) body.classList.toggle("dark", dark);
      modeToggle.classList.toggle("active", dark);
      try { localStorage.setItem("mode", dark ? "dark-mode" : "light-mode"); } catch (e) { /* ignore */ }
    });
  }

  /* ---------- Mobile sidebar ---------- */
  var sidebarOpen = $(".sidebarOpen");
  var navLinks = $(".nav-links");
  var navClose = $(".nav-close");
  var navOverlay = $(".nav-overlay");
  function setMenu(open) {
    if (navLinks) navLinks.classList.toggle("open", open);
    if (navOverlay) navOverlay.classList.toggle("show", open);
  }
  if (sidebarOpen) sidebarOpen.addEventListener("click", function (e) { e.stopPropagation(); setMenu(true); });
  if (navClose) navClose.addEventListener("click", function () { setMenu(false); });
  if (navOverlay) navOverlay.addEventListener("click", function () { setMenu(false); });
  $all(".nav-links a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });

  /* ---------- Active nav link ---------- */
  (function markActive() {
    if (!navLinks) return;
    var page = (location.pathname.split("/").pop() || "home.html").split("?")[0];
    $all("a", navLinks).forEach(function (a) {
      var href = (a.getAttribute("href") || "").split("?")[0];
      if (href === page || (page === "index.html" && href === "login.html")) a.classList.add("active");
    });
  })();

  /* ---------- Wishlist (localStorage: clarins_wishlist = [ids]) ---------- */
  var wishlist = readJSON("clarins_wishlist", []);
  function isWished(id) { return wishlist.indexOf(id) !== -1; }
  function toggleWish(id, btn) {
    var i = wishlist.indexOf(id);
    if (i === -1) { wishlist.push(id); toast("Saved to your wishlist", "bx-heart"); }
    else { wishlist.splice(i, 1); toast("Removed from wishlist", "bx-heart"); }
    writeJSON("clarins_wishlist", wishlist);
    if (btn) {
      btn.classList.toggle("active", isWished(id));
      var icon = btn.querySelector("i");
      if (icon) icon.className = isWished(id) ? "bx bxs-heart" : "bx bx-heart";
    }
    syncWishButtons();
  }
  function syncWishButtons() {
    $all(".wish-btn[data-id]").forEach(function (btn) {
      var wished = isWished(btn.getAttribute("data-id"));
      btn.classList.toggle("active", wished);
      var icon = btn.querySelector("i");
      if (icon) icon.className = wished ? "bx bxs-heart" : "bx bx-heart";
    });
    var count = $("#wish-count");
    if (count) { count.textContent = wishlist.length; count.hidden = wishlist.length === 0; }
  }

  /* ---------- Cart (localStorage: clarins_cart = [{id, qty}]) ---------- */
  var cart = readJSON("clarins_cart", []);
  function findProduct(id) {
    if (typeof window.PRODUCTS === "undefined") return null;
    for (var i = 0; i < window.PRODUCTS.length; i++) if (window.PRODUCTS[i].id === id) return window.PRODUCTS[i];
    return null;
  }
  function cartQty() { return cart.reduce(function (s, it) { return s + (it.qty || 0); }, 0); }
  function cartTotal() {
    return cart.reduce(function (s, it) {
      var p = findProduct(it.id); return s + (p ? p.price * (it.qty || 0) : 0);
    }, 0);
  }
  function cartSavings() {
    return cart.reduce(function (s, it) {
      var p = findProduct(it.id); return s + (p ? (p.mrp - p.price) * (it.qty || 0) : 0);
    }, 0);
  }
  function saveCart() { writeJSON("clarins_cart", cart); updateCartUI(); }
  function addToCart(id, qty) {
    var p = findProduct(id);
    if (!p) { toast("Product not found", "bx-error-circle"); return; }
    var line = null;
    cart.forEach(function (it) { if (it.id === id) line = it; });
    if (line) line.qty = (line.qty || 0) + (qty || 1);
    else cart.push({ id: id, qty: qty || 1 });
    saveCart();
    toast(p.name + " added to cart", "bx-cart-add");
  }
  function setQty(id, qty) {
    cart.forEach(function (it) { if (it.id === id) it.qty = qty; });
    cart = cart.filter(function (it) { return (it.qty || 0) > 0; });
    saveCart();
  }
  function removeFromCart(id) {
    cart = cart.filter(function (it) { return it.id !== id; });
    saveCart();
  }

  /* ---------- Cart drawer ---------- */
  var drawer = $("#cart-drawer");
  var overlay = $("#cart-overlay");
  var cartBtn = $("#cart-btn");
  var cartClose = $("#cart-close");
  function openCart() {
    renderCartItems();
    if (drawer) drawer.classList.add("open");
    if (overlay) overlay.classList.add("show");
  }
  function closeCart() {
    if (drawer) drawer.classList.remove("open");
    if (overlay) overlay.classList.remove("show");
  }
  if (cartBtn) cartBtn.addEventListener("click", openCart);
  if (cartClose) cartClose.addEventListener("click", closeCart);
  if (overlay) overlay.addEventListener("click", closeCart);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeCart(); setMenu(false); } });

  function renderCartItems() {
    var list = $("#cart-items");
    if (!list) return;
    if (!cart.length) {
      list.innerHTML = '<div class="cart-empty"><i class="bx bx-shopping-bag"></i><p>Your bag is empty.</p><p>Add something beautiful from the Products page.</p></div>';
    } else {
      list.innerHTML = cart.map(function (it) {
        var p = findProduct(it.id);
        if (!p) return "";
        return '<div class="cart-item">' +
          '<img src="' + p.img + '" alt="' + p.name.replace(/"/g, "&quot;") + '" loading="lazy" onerror="this.onerror=null;this.src=window.PRODUCT_FALLBACK;">' +
          '<div class="cart-item-info"><strong>' + p.name + '</strong>' +
          '<span class="price">' + money(p.price) + ' <s style="color:var(--muted);font-weight:400">' + money(p.mrp) + '</s></span>' +
          '<div class="qty-row"><button class="qty-btn" data-act="dec" data-id="' + p.id + '" aria-label="Decrease quantity">\u2212</button>' +
          '<span>' + it.qty + '</span>' +
          '<button class="qty-btn" data-act="inc" data-id="' + p.id + '" aria-label="Increase quantity">+</button></div></div>' +
          '<button class="cart-remove" data-act="remove" data-id="' + p.id + '" aria-label="Remove item"><i class="bx bx-trash"></i></button></div>';
      }).join("");
    }
    var totalEl = $("#cart-total");
    if (totalEl) totalEl.textContent = money(cartTotal());
    var saveEl = $("#cart-savings");
    if (saveEl) {
      var s = cartSavings();
      saveEl.textContent = s > 0 ? "You save " + money(s) + " on this order" : "";
    }
    var countEl = $("#cart-count");
    if (countEl) { /* count text is set in updateCartUI */ }
  }
  function updateCartUI() {
    var badge = $("#cart-count");
    if (badge) { var q = cartQty(); badge.textContent = q; badge.hidden = q === 0; }
    if (drawer && drawer.classList.contains("open")) renderCartItems();
  }

  /* Cart drawer clicks (delegated — items are re-rendered) */
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-act]");
    if (!t || !drawer || !drawer.contains(t)) return;
    var id = t.getAttribute("data-id");
    var act = t.getAttribute("data-act");
    if (act === "inc") { var l1 = null; cart.forEach(function (it) { if (it.id === id) l1 = it; }); setQty(id, (l1 ? l1.qty : 0) + 1); }
    if (act === "dec") { var l2 = null; cart.forEach(function (it) { if (it.id === id) l2 = it; }); setQty(id, (l2 ? l2.qty : 1) - 1); }
    if (act === "remove") removeFromCart(id);
  });

  var checkoutBtn = $("#checkout-btn");
  if (checkoutBtn) checkoutBtn.addEventListener("click", function () {
    if (!cart.length) { toast("Your bag is empty", "bx-info-circle"); return; }
    toast("Demo checkout — no payment taken. Thank you!", "bx-check-circle");
  });
  var clearBtn = $("#clear-cart-btn");
  if (clearBtn) clearBtn.addEventListener("click", function () { cart = []; saveCart(); toast("Bag cleared", "bx-trash"); });

  /* Global product-card clicks (delegated — cards are rendered by products.js) */
  document.addEventListener("click", function (e) {
    var add = e.target.closest("[data-add-to-cart]");
    if (add) { addToCart(add.getAttribute("data-add-to-cart")); return; }
    var wish = e.target.closest(".wish-btn[data-id]");
    if (wish) { toggleWish(wish.getAttribute("data-id"), wish); return; }
  });

  /* ---------- Hero slideshow (home page only; guarded) ---------- */
  var slides = $all(".slide");
  var dotsBox = $(".slide-dots");
  var slideIndex = 0, slideTimer = null;
  function showSlide(n) {
    if (!slides.length) return;
    slideIndex = ((n % slides.length) + slides.length) % slides.length;
    slides.forEach(function (s, i) { s.classList.toggle("active", i === slideIndex); });
    if (dotsBox) $all("button", dotsBox).forEach(function (d, i) { d.classList.toggle("active", i === slideIndex); });
  }
  function startSlides() {
    if (!slides.length) return;
    showSlide(slideIndex);
    if (slideTimer) clearInterval(slideTimer);
    slideTimer = setInterval(function () { showSlide(slideIndex + 1); }, 5000);
  }
  if (slides.length) {
    if (dotsBox) {
      slides.forEach(function (_, i) {
        var d = document.createElement("button");
        d.setAttribute("aria-label", "Go to slide " + (i + 1));
        d.addEventListener("click", function () { showSlide(i); startSlides(); });
        dotsBox.appendChild(d);
      });
    }
    var prev = $(".slide-arrow.prev"), next = $(".slide-arrow.next");
    if (prev) prev.addEventListener("click", function () { showSlide(slideIndex - 1); startSlides(); });
    if (next) next.addEventListener("click", function () { showSlide(slideIndex + 1); startSlides(); });
    startSlides();
    /* Pause auto-play while the user hovers the hero */
    var hero = $(".hero");
    if (hero) {
      hero.addEventListener("mouseenter", function () { if (slideTimer) clearInterval(slideTimer); });
      hero.addEventListener("mouseleave", startSlides);
    }
  }

  /* ---------- Search box in the nav (goes to products page) ---------- */
  var navSearch = $("#nav-search");
  if (navSearch) {
    navSearch.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var q = navSearch.value.trim();
        location.href = "products.html" + (q ? "?q=" + encodeURIComponent(q) : "");
      }
    });
  }

  /* ---------- Init ---------- */
  updateCartUI();
  syncWishButtons();

  /* Public API for products.js and inline handlers */
  window.ClarinsApp = {
    addToCart: addToCart, toggleWish: toggleWish, isWished: isWished,
    toast: toast, money: money, openCart: openCart, closeCart: closeCart,
    showSlide: showSlide, cartQty: cartQty
  };
})();
