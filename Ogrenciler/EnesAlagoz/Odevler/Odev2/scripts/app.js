document.addEventListener("DOMContentLoaded", () => {
  Request.get("http://localhost:3000/books")
    .then((books) => {
      UI.displayBooks(books);
    })
    .catch((error) => {
      console.error("Kitaplar alınırken hata oluştu:", error);
    });
});

document.getElementById("addButton").addEventListener("click", () => {
  UI.addBook();
});
