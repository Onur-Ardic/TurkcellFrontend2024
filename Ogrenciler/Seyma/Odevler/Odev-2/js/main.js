
window.addEventListener("load",() => {
  Request.get("http://localhost:3000/books")
    .then((books) => Book.showBooks(books))
    .catch((err) => reject(err, "Veri alınamadı..."));

})

document.getElementById("authorSelect").addEventListener("change", (e) => {
    Book.getBooks(Book.showBooks)
  });

document.getElementById("saveBookBtn").addEventListener("click", (e) => {
    Book.saveBook()
  });
