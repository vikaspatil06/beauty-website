/* Clarins — legacy shim (kept so old references don't break).
   The slideshow, dark mode, sidebar and search-toggle logic
   that used to live here — unguarded, so it crashed on pages
   missing .dark-light / .searchToggle — now lives guarded in
   js/app.js. This file intentionally does nothing on its own;
   home.html loads js/app.js + js/products.js instead. */
(function () {
  "use strict";
  /* No-op: kept for backward compatibility. */
})();
