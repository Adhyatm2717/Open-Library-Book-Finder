// const { createElement } = require("react");

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

// let card = document.getElementsByClassName("card")[0]

// <div class="card">
//             <div class="bookImage"></div>
//             <div class="bookAndAuthorName"></div>
// </div>

let card;

let makeCard = () => {
  card = document.createElement("div");

  card.classList.add("card");

  let bookImage = document.createElement("div");

  bookImage.classList.add("bookImage");

  card.appendChild(bookImage);

  let bookAndAuthorName = document.createElement("div");

  bookAndAuthorName.classList.add("bookAndAuthorName");

  bookImage.style.backgroundImage = `url("assests/817HaeblezL._AC_UF1000,1000_QL80_.jpg")`;

  card.appendChild(bookAndAuthorName);
};

let booksDiv = document.getElementById("books");

async function BookCoverID() {
  let res = await fetch(`https://covers.openlibrary.org/b/id/{cover_i}-M.jpg`);
  let data = await res.json();
}

for (i = 0; i < 14; i++) {
  makeCard()
//   console.log(card)
  booksDiv.appendChild(card);
}

booksDiv.appendChild(card);

// console.log(booksDiv)

const bookCover_id = [];

for (const book of topBooks) {
  let query = book.toLowerCase().split(" ").join("+");
  bookCover_id.push(query);
}
// console.log(bookCover_id)

// let bookSearchUrl = "https://openlibrary.org/search.json?q=${book}"

async function bookSearch(book) {
  let res = await fetch(`https://openlibrary.org/search.json?q=${book}`);
  let data = await res.json();
  data.docs.forEach((e) => {
    card(e.title, e.author, e.cover_i);
  });
}
bookSearch("the+alchemist");

console.log(bookCover_id);
