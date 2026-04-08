const topBooks = [
  "Atomic Habits",
  "Rework",
  "The Midnight Library",
  "AI Engineering",
  "Sapiens",
  "Doglapan",
  "Games of Throne",
  "The Scam",
  "The Alchemist",
  "Wings of Fire",
  "Red Rising",
  "Think and Grow Rich",
  "Deep Work",
  "To Kill a Mockingbird",
  "Dune"
];

const booksDiv = document.getElementById("books");
const searchBar = document.getElementById("search-bar");
let debounceTimer;

function makeCard(title, author, coverId) {
  let card = document.createElement("div");
  card.classList.add("card");

  let bookImage = document.createElement("div");
  bookImage.classList.add("bookImage");

  if (coverId) {
    bookImage.style.backgroundImage = `url(https://covers.openlibrary.org/b/id/${coverId}-M.jpg)`;
  } else {
    bookImage.style.backgroundImage = `url('https://via.placeholder.com/150x200?text=No+Cover')`;
  }

  let bookAndAuthorName = document.createElement("div");
  bookAndAuthorName.classList.add("bookAndAuthorName");
  bookAndAuthorName.innerText = `${title}\n${author || "Unknown Author"}`;

  bookAndAuthorName.style.backgroundColor = "#00113a"
  bookAndAuthorName.style.color = "#f8f2bfd5"
  bookAndAuthorName.style.borderRadius = "10px"
  bookAndAuthorName.style.margin = "10px"
  bookAndAuthorName.style.padding = "10px"
  bookAndAuthorName.style.fontSize = "14px"
  bookAndAuthorName.style.fontWeight = "bold"

  card.appendChild(bookAndAuthorName);
  card.appendChild(bookImage);

  booksDiv.appendChild(card);
}

async function loadBooks() {
  booksDiv.innerHTML = "";
  for (const book of topBooks) {
    let query = book.toLowerCase().split(" ").join("+");

    try {
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
    } catch (error) {
      console.error("Error loading top books:", error);
    }
  }
}

async function performSearch(query) {
  try {
    let formattedQuery = query.toLowerCase().split(" ").join("+");
    let res = await fetch(`https://openlibrary.org/search.json?q=${formattedQuery}`);
    let data = await res.json();

    booksDiv.innerHTML = "";

    if (data.docs && data.docs.length > 0) {
      const results = data.docs.slice(0, 15);
      results.forEach((book) => {
        makeCard(
          book.title,
          book.author_name ? book.author_name[0] : "Unknown",
          book.cover_i
        );
      });
    } else {
      booksDiv.innerHTML = "<h2 style='color: white; width: 100%; text-align: center;'>No books found.</h2>";
    }
  } catch (error) {
    console.error("Error performing search:", error);
    booksDiv.innerHTML = "<h2 style='color: white; width: 100%; text-align: center;'>Error fetching search results.</h2>";
  }
}

searchBar.addEventListener("input", (e) => {
  const query = e.target.value.trim();

  booksDiv.innerHTML = "";

  clearTimeout(debounceTimer);

  if (query.length > 0) {
    debounceTimer = setTimeout(() => {
      performSearch(query);
    }, 500);
  } else {
    loadBooks();
  }
});

loadBooks();