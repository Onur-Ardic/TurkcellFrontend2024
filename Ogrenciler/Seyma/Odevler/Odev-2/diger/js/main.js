
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
  document.getElementById("updateBookBtn").addEventListener("click", 
  (e) => {
    e.preventDefault();
    Book.updateBook();
  });

  document.getElementById("searchButton").addEventListener("click", 
  (e) => {
    e.preventDefault();
    display();
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
