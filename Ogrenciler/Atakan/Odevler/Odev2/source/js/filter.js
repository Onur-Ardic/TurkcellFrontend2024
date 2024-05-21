let filterByAuthor = document.querySelector(".filter-by-author");
filterByAuthor.addEventListener("input", function () {
  if (filterByAuthor.value == 1) {
    Request.get("http://localhost:3000/books").then((data) => {
      let rowlingBooks = data.filter((book) => book.author === "J. K. Rowling");
      UI.displayAllBooksOnUI(rowlingBooks);
    });
  } else if (filterByAuthor.value == 2) {
    Request.get("http://localhost:3000/books").then((data) => {
      let scamanderBooks = data.filter(
        (book) => book.author === "Newt Scamander"
      );
      UI.displayAllBooksOnUI(scamanderBooks);
    });
  } else if (filterByAuthor.value == 3) {
    Request.get("http://localhost:3000/books").then((data) => {
      let whispBooks = data.filter(
        (book) => book.author === "Kennilworthy Whisp"
      );
      UI.displayAllBooksOnUI(whispBooks);
    });
  } else {
    UI.requestAllDataAndDisplay();
  }
});

let filterByCategory = document.querySelector(".filter-by-category");
filterByCategory.addEventListener("input", function () {
  if (filterByCategory.value == 1) {
    Request.get("http://localhost:3000/books").then((data) => {
      let novels = data.filter((book) => book.category === "Roman");
      UI.displayAllBooksOnUI(novels);
    });
  } else if (filterByCategory.value == 2) {
    Request.get("http://localhost:3000/books").then((data) => {
      let fantasies = data.filter((book) => book.category === "Fantezi");
      UI.displayAllBooksOnUI(fantasies);
    });
  } else if (filterByCategory.value == 3) {
    Request.get("http://localhost:3000/books").then((data) => {
      let philosophies = data.filter((book) => book.category === "Felsefe");
      UI.displayAllBooksOnUI(philosophies);
    });
  } else {
    UI.requestAllDataAndDisplay();
  }
});
