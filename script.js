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
  "The Subtle Art of Not Giving a F*ck"
];


const bookCover_id = []

for (const book of topBooks){
    let query = book.toLowerCase().split(" ").join("+")
    bookCover_id.push(query)
}
// console.log(bookCover_id)

// let bookSearchUrl = "https://openlibrary.org/search.json?q=${book}"

async function bookSearch(url){
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
}

bookCover_id.map((book)=>{
    let details = bookSearch(`https://openlibrary.org/search.json?q=${book}`)
    console.log(details)
})
