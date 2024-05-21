
window.addEventListener("load", () => {
  display()
})

function display(){
  Request.get("http://localhost:3000/books")
  .then(books => Book.showBooks(books))
  .catch((err) => reject(err, "Veri alınamadı."));
}

document.getElementById("saveBookBtn").addEventListener("click", 
  (e) => {
    e.preventDefault();
    Book.saveBook();
    Book.removeinput();
  });
  display();

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
      Request.get("http://localhost:3000/books?_sort=-title")
        .then(books => Book.showBooks(books));
      break;
    case "4":
      Request.get("http://localhost:3000/books?_sort=PublishedDate")
        .then(books => Book.showBooks(books));
      break;
    
  }
})

// searchName.addEventListener("input",(e) => {
//   let search1 = e.target.value;
//   Request.get("http://localhost:3000/books?name_like=",search1)
//       .then(books => ui.displayBooks(books));
// })

// searchAuthor.addEventListener("input",(e) => {
//   let search1 = e.target.value;
//   Request.get("http://localhost:3000/books?author_like=",search1)
//       .then(books => ui.displayBooks(books));
// })

// searchCategory.addEventListener("change",(e) => {
//   const search1 = e.target.value;
//   switch (search1) {
//       case "Autobiography":
//           Request.get("http://localhost:3000/books?category=","Autobiography")
//               .then(books => Book.showBooks(books));
//       break;
//       case "History":
//           Request.get("http://localhost:3000/books?category=","History")
//               .then(books => Book.showBooks(books));
//       break;
//       case "Philosophy":
//           Request.get("http://localhost:3000/books?category=","Philosophy")
//               .then(books => Book.showBooks(books));
//       break;
//       case "Scientific":
//           Request.get("http://localhost:3000/books?category=","Scientific")
//               .then(books => Book.showBooks(books));
//       break;
//       case "Crime":
//           Request.get("http://localhost:3000/books?category=","Crime")
//               .then(books => Book.showBooks(books));
//       break;
//       case "Drama":
//           Request.get("http://localhost:3000/books?category=","Drama")
//               .then(books => Book.showBooks(books));
//       break;
//       case "Novel":
//           Request.get("http://localhost:3000/books?category=","Novel")
//               .then(books => Book.showBooks(books));
//       break;
//       default:
//           Request.get("http://localhost:3000/books","")
//               .then(books => Book.showBooks(books));
//       break;
//   }
// })