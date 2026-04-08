// // const { createElement } = require("react");

// const topBooks = [
//   "Atomic Habits",
//   "The Psychology of Money",
//   "The Midnight Library",
//   "The Silent Patient",
//   "Sapiens",
//   "Harry Potter and the Sorcerer's Stone",
//   "The Alchemist",
//   "Rich Dad Poor Dad",
//   "Think and Grow Rich",
//   "Deep Work",
//   "To Kill a Mockingbird",
//   "1984",
//   "Dune",
//   "The Pragmatic Programmer",
//   "The Subtle Art of Not Giving a F*ck",
// ];

// // let card = document.getElementsByClassName("card")[0]

// // <div class="card">
// //             <div class="bookImage"></div>
// //             <div class="bookAndAuthorName"></div>
// // </div>

// let card;

// let makeCard = () => {
//   card = document.createElement("div");

//   card.classList.add("card");

//   let bookImage = document.createElement("div");

//   bookImage.classList.add("bookImage");

//   card.appendChild(bookImage);

//   let bookAndAuthorName = document.createElement("div");

//   bookAndAuthorName.classList.add("bookAndAuthorName");

//   bookImage.style.backgroundImage = `url("assests/817HaeblezL._AC_UF1000,1000_QL80_.jpg")`;

//   card.appendChild(bookAndAuthorName);
// };

// let booksDiv = document.getElementById("books");

// async function BookCoverID() {
//   let res = await fetch(`https://covers.openlibrary.org/b/id/{cover_i}-M.jpg`);
//   let data = await res.json();
// }

// for (i = 0; i < 14; i++) {
//   makeCard()
// //   console.log(card)
//   booksDiv.appendChild(card);
// }

// booksDiv.appendChild(card);

// // console.log(booksDiv)

// const bookCover_id = [];

// for (const book of topBooks) {
//   let query = book.toLowerCase().split(" ").join("+");
//   bookCover_id.push(query);
// }
// // console.log(bookCover_id)

// // let bookSearchUrl = "https://openlibrary.org/search.json?q=${book}"

// async function bookSearch(book) {
//   let res = await fetch(`https://openlibrary.org/search.json?q=${book}`);
//   let data = await res.json();
//   data.docs.forEach((e) => {
//     card(e.title, e.author, e.cover_i);
//   });
// }
// bookSearch("the+alchemist");

// console.log(bookCover_id);

const topBooks = [
  "Atomic Habits",
  "The Midnight Library",
  "AI Engineering",
  "Rework",
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

  // let mySpan = document.createElement("div");
  // mySpan.style.backgroundColor = "green"

  // mySpan.appendChild(bookAndAuthorName)

  bookAndAuthorName.style.backgroundColor = "#00113a"
  bookAndAuthorName.style.color = "#f8f2bfd5"
  bookAndAuthorName.style.borderRadius = "5%"
  bookAndAuthorName.style.margin = "20px"
  bookAndAuthorName.style.padding = "2px"




  card.appendChild(bookAndAuthorName);
  card.appendChild(bookImage);

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