# 📚 Lexora — Open Library Book Finder

A clean and fast book search app powered by the [Open Library API](https://openlibrary.org/). Search millions of books instantly and explore curated top picks right from the shelf.

🌐 **Live Demo:** [https://lexora-tawny.vercel.app/](https://lexora-tawny.vercel.app/)

---

## ✨ Features

- 🔍 **Real-time Search** — Books vanish and top 15 results appear as you type, with smart debouncing to avoid unnecessary API calls
- 📖 **Top Books on Load** — Curated list of popular books loaded automatically on page start
- 🖼️ **Book Covers** — Fetches real cover images directly from Open Library
- 🌙 **Dark / Light Mode** — Toggle button in the header, preference saved across sessions via `localStorage`
- 🎨 **Gradient Text** — Stylish CSS gradient on the hero heading
- 💡 **No frameworks** — Pure HTML, CSS, and JavaScript

---

## 🚀 Getting Started

No build tools needed. Just open the project in a browser.

```bash
# Clone the repo
git clone https://github.com/Adhyatm2717/Open-Library-Book-Finder.git

# Open index.html in your browser
open index.html
```

---

## 🗂️ Project Structure

```
Open-Library-Book-Finder/
├── index.html       # Main HTML structure
├── style.css        # All styling and theme variables
├── script.js        # Search logic, API calls, theme toggle
└── assests/         # Logo, icons, and other assets
```

---

## 🔌 API Used

[Open Library Search API](https://openlibrary.org/developers/api)

```
https://openlibrary.org/search.json?q={query}
```

Book covers are fetched from:
```
https://covers.openlibrary.org/b/id/{cover_id}-M.jpg
```

---

## 🛠️ Built With

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, gradients, transitions
- **Vanilla JavaScript** — Fetch API, DOM manipulation, localStorage

---

## 📦 Deployment

Deployed on **Vercel** → [https://lexora-tawny.vercel.app/](https://lexora-tawny.vercel.app/)

---

## 👤 Author

**Adhyatm** — [@Adhyatm2717](https://github.com/Adhyatm2717)
