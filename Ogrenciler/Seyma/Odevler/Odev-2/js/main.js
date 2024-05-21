
window.addEventListener("load", () => {
  Request.get("http://localhost:3000/books")
    .then(books => Book.showBooks(books))
    .catch((err) => reject(err, "Veri alınamadı."));
})


document.getElementById("saveBookBtn").addEventListener("click", (book) => {
  Request.post("http://localhost:3000/books")
      .then((book) => saveBook(book))
      .catch((err) => reject(err, "Hata Alındı."));
});


document.getElementById("ranking").addEventListener("change", (e) => {
  let ranking = e.target.value;
  switch (ranking) {
    case "1":
      Request.get("http://localhost:3000/books", "")
        .then(books => Book.showBooks(books));
      break;
    case "2":
      Request.get("http://localhost:3000/books?_sort=BookName&_order=asc")
        .then(books => Book.showBooks(books));
      break;
    case "3":
      Request.get("http://localhost:3000/books?_sort=BookName&_order=desc")
        .then(books => Book.showBooks(books));
      break;
    case "4":
      Request.get("http://localhost:3000/books?_sort=PublishedDate")
        .then(books => Book.showBooks(books));
      break;
    
  }
})

// ui.searchName.addEventListener("input",(e) => {
//   let key = e.target.value;
//   Request.get("http://localhost:3000/books?name_like=",key)
//       .then(data => ui.displayBooks(data));
// })

// ui.searchAuthor.addEventListener("input",(e) => {
//   let key = e.target.value;
//   Request.get("http://localhost:3000/books?author_like=",key)
//       .then(data => ui.displayBooks(data));
// })

// ui.searchCategory.addEventListener("change",(e) => {
//   const key = e.target.value;
//   switch (key) {
//       case "Novel":
//           Request.get("http://localhost:3000/books?category=","Novel")
//               .then(data => ui.displayBooks(data));
//       break;
//       case "Historical":
//           Request.get("http://localhost:3000/books?category=","Historical")
//               .then(data => ui.displayBooks(data));
//       break;
//       case "Religious":
//           Request.get("http://localhost:3000/books?category=","Religious")
//               .then(data => ui.displayBooks(data));
//       break;
//       default:
//           Request.get("http://localhost:3000/books","")
//               .then(data => ui.displayBooks(data));
//       break;
//   }
// })