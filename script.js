
const topBooks = [
  "Atomic Habits",
  "The Psychology of Money",
  "The Midnight Library",
  "The Silent Patient",
  "Sapiens",
  "Harry Potter and the Sorcerer's Stone",
  "The Alchemist",
  "Rich Dad Poor Dad",
  "Think and Grow Rich",
  "Deep Work",
  "To Kill a Mockingbird",
  "1984",
  "Dune",
  "The Pragmatic Programmer",
  "The Subtle Art of Not Giving a F*ck",
];

let booksDiv = document.getElementById("books");

// 🔥 Create card with real data
function makeCard(title, author, coverId) {
  let card = document.createElement("div");
  card.classList.add("card");

  let bookImage = document.createElement("div");
  bookImage.classList.add("bookImage");

  // ✅ Cover image from Open Library
  if (coverId) {
    bookImage.style.backgroundImage = `url(https://covers.openlibrary.org/b/id/${coverId}-M.jpg)`;
  } else {
    bookImage.style.backgroundImage = `url('fallback.jpg')`;
  }

  let bookAndAuthorName = document.createElement("div");
  bookAndAuthorName.classList.add("bookAndAuthorName");
  bookAndAuthorName.innerText = `${title}\n${author || "Unknown Author"}`;

  card.appendChild(bookImage);
  card.appendChild(bookAndAuthorName);

  booksDiv.appendChild(card);
}

// 🔥 Fetch each book and render
async function loadBooks() {
  for (const book of topBooks) {
    let query = book.toLowerCase().split(" ").join("+");

    let res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    let data = await res.json();

    if (data.docs.length > 0) {
      let firstBook = data.docs[0];

      makeCard(
        firstBook.title,
        firstBook.author_name ? firstBook.author_name[0] : "Unknown",
        firstBook.cover_i
      );
    }
  }
}

loadBooks();