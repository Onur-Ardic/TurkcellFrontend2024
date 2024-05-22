document
  .getElementById("searchBookName")
  .addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();
    Request.get("http://localhost:3000/books", "").then((data) => {
      const filteredBooks = data.filter((book) =>
        book.name.toLowerCase().includes(searchValue)
      );
      ui.displayBooks(filteredBooks);
    });
  });

document
  .getElementById("searchBookAuthor")
  .addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();
    Request.get("http://localhost:3000/books", "").then((data) => {
      const filteredBooks = data.filter((book) =>
        book.author.toLowerCase().includes(searchValue)
      );
      ui.displayBooks(filteredBooks);
    });
  });

document.getElementById("searchCategory").addEventListener("change", (e) => {
  const key = e.target.value;

  const categories = {
    bilimKurgu: "Bilim Kurgu",
    fantastik: "Fantastik",
    polisiye: "Polisiye",
    romantik: "Romantik",
    macera: "Macera",
  };

  if (key && categories[key]) {
    fetchBooks(`http://localhost:3000/books?category=${categories[key]}`);
  } else if (key) {
    fetchBooks(`http://localhost:3000/books?category=${key}`);
  } else {
    fetchBooks("http://localhost:3000/books");
  }
});

function fetchBooks(url) {
  Request.get(url).then((data) => ui.displayBooks(data));
}

document.getElementById("searchCategory").addEventListener("change", (e) => {
  const key = e.target.value;
  switch (key) {
    case "bilimKurgu":
      Request.get("http://localhost:3000/books?category=", "Bilim Kurgu").then(
        (data) => ui.displayBooks(data)
      );
      break;
    case "fantastik":
      Request.get("http://localhost:3000/books?category=", "Fantastik").then(
        (data) => ui.displayBooks(data)
      );
      break;
    case "polisiye":
      Request.get("http://localhost:3000/books?category=", "Polisiye").then(
        (data) => ui.displayBooks(data)
      );
      break;
    case "romantik":
      Request.get("http://localhost:3000/books?category=", "Romantik").then(
        (data) => ui.displayBooks(data)
      );
      break;
    case "macera":
      Request.get("http://localhost:3000/books?category=", "Macera").then(
        (data) => ui.displayBooks(data)
      );
      break;
    default:
      Request.get("http://localhost:3000/books", "").then((data) =>
        ui.displayBooks(data)
      );
      break;
  }
});
