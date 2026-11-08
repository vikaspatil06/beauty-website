# Clarins — Beauty Products Website

A group project: a beauty products store website built with **HTML, CSS, Bootstrap 5 and vanilla JavaScript**. Browse 25 real products across Face, Lips, Eyes, Nails and Skin Care, add them to a shopping bag, save favourites, and sign up / sign in — all in the browser, with no backend.

## Pages

| Page | What it is |
| --- | --- |
| `home.html` | Home — hero slideshow (3 banners), shop-by-category tiles, 4 bestselling products, trust strip |
| `products.html` | All 25 products — live search, category filters, sort (featured / price / discount), wishlist + add to cart |
| `index.html` | Sign Up |
| `login.html` | Log In |
| `about.html` | Our story, vision, and the team of 10 |
| `contact.html` | Contact form with validation |

## Features

- **Shopping bag (cart)** — add / remove items, change quantities, live total and savings, slide-in drawer; saved in `localStorage` (`clarins_cart`), so it survives a page refresh
- **Wishlist** — heart any product; saved in `localStorage` (`clarins_wishlist`), with a count badge in the navbar
- **Search, filter & sort** — live search on the Products page, category pills (All / Face / Lips / Eyes / Nails / Skin Care), sort by featured, price low→high, price high→low, or biggest discount; deep links work too (`products.html?cat=lips`, `products.html?q=sunscreen`)
- **Hero slideshow** — auto-plays every 5 seconds, with prev/next arrows, dots, and pause on hover
- **Dark mode** — toggle in the navbar, remembered across pages via `localStorage`
- **Sign up / log in** — demo auth stored in `localStorage` (`users`): password-match and duplicate-email checks on sign up, inline errors instead of alert-only
- **Responsive** — mobile sidebar menu, product grid that goes 4 → 3 → 2 → 1 columns
- **Toasts** — small confirmations when you add to the bag, save a favourite, or send a message

## Tech stack

- HTML5, CSS3 (one shared design system in `css/main.css`: rose/blush palette, Playfair Display + Inter from Google Fonts, CSS variables for light/dark mode)
- Vanilla JavaScript — `js/app.js` (nav, dark mode, cart, wishlist, drawer, toasts, slideshow) and `js/products.js` (the 25-product catalogue + grid rendering)
- Bootstrap 5 via CDN (enhancement only — the custom CSS carries the design, so the site still looks right offline)
- Boxicons for icons

No build step, no framework, no backend, no npm.

## How to run

Open `home.html` in any browser — or serve the folder locally:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/home.html
```

To publish it, enable **GitHub Pages** on this repository (Settings → Pages → Deploy from a branch → `main`) and open the Pages URL.

## Project structure

```
├── home.html / products.html / index.html / login.html / about.html / contact.html
├── css/
│   └── main.css            # shared design system (old per-page css/ files are legacy)
├── js/
│   ├── app.js              # nav, dark mode, cart, wishlist, slideshow
│   ├── products.js         # 25-product catalogue + search/filter/sort rendering
│   ├── login.js            # log in (localStorage)
│   ├── signup.js           # sign up (localStorage)
│   └── scripts.js          # legacy shim — logic moved to app.js
├── images/
│   ├── banner1.jpg / banner2.jpg / banner3.jpg
│   └── Clarins-removebg-preview.png
└── README.md
```

## Team

Vikas Patil, Pratiksha Bombale, Tanvi Rawal, Preeti Bhoge, Piyush Patil, Shravani Adhav, Tanay Koshti, Praful Ramane, Rajnandini Pawar, Kashish Avghare.

© Clarins 2026. All rights reserved.
