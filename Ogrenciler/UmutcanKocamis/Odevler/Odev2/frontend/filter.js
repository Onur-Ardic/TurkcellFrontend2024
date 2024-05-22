const sortA = document.getElementById("sortA");
const sortZ = document.getElementById("sortZ");
const sortDate = document.getElementById("sortDate");
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
let searchResults = [];

sortA.addEventListener("click", function () {
  UI.allUIRemove();
  Request.get("http://localhost:3000/books?_sort=title")
    .then((data) => {
      data.forEach((book) => {
        UI.addBookToUI(book);
      });
    })
    .catch((error) => console.error(error, "Kitaplar sıralanamadı."));
});

sortZ.addEventListener("click", function () {
  UI.allUIRemove();
  Request.get("http://localhost:3000/books?_sort=-title")
    .then((data) => {
      data.forEach((book) => {
        UI.addBookToUI(book);
      });
    })
    .catch((error) => console.error(error, "Kitaplar sıralanamadı."));
});

sortDate.addEventListener("click", function () {
  UI.allUIRemove();
  Request.get("http://localhost:3000/books?_sort=year")
    .then((data) => {
      data.forEach((book) => {
        UI.addBookToUI(book);
      });
    })
    .catch((error) => console.error(error, "Kitaplar sıralanamadı."));
});

function searchBooks(data, searchItem) {
  let searchItemLowercase = searchItem.toLowerCase().trim();

  data.forEach((book) => {
    if (
      book.title.toLowerCase().includes(searchItemLowercase) ||
      book.author.toLowerCase().includes(searchItemLowercase)
    ) {
      searchResults.push(book);
    }
  });

  return searchResults;
}

searchButton.addEventListener("click", function () {
  Request.get("http://localhost:3000/books").then((data) => {
    let searchItem = searchInput.value;
    let searchResults = searchBooks(data, searchItem);
    UI.allUIRemove();
    searchResults.forEach((book) => {
      UI.addBookToUI(book);
    });
  });
});

let filterByAuthor = document.querySelector(".filter-by-author");
filterByAuthor.addEventListener("input", function () {
  if (filterByAuthor.value == 1) {
    Request.get("http://localhost:3000/books").then((data) => {
      let georgeBooks = data.filter((book) => book.author === "George Orwell");
      UI.allUIRemove();
      georgeBooks.forEach((books) => {
        UI.addBookToUI(books);
      });
    });
  } else if (filterByAuthor.value == 2) {
    Request.get("http://localhost:3000/books").then((data) => {
      let stefanBooks = data.filter((book) => book.author === "Stefan Zweig");
      UI.allUIRemove();
      stefanBooks.forEach((books) => {
        UI.addBookToUI(books);
      });
    });
  } else if (filterByAuthor.value == 3) {
    Request.get("http://localhost:3000/books").then((data) => {
      let harperBooks = data.filter((book) => book.author === "Harper Lee");
      UI.allUIRemove();
      harperBooks.forEach((books) => {
        UI.addBookToUI(books);
      });
    });
  } else if (filterByAuthor.value == 4) {
    Request.get("http://localhost:3000/books").then((data) => {
      let albertBooks = data.filter((book) => book.author === "Albert Camus");
      UI.allUIRemove();
      albertBooks.forEach((books) => {
        UI.addBookToUI(books);
      });
    });
  }
});

let filterByCategory = document.querySelector(".filter-by-category");
filterByCategory.addEventListener("input", function () {
  if (filterByCategory.value == 1) {
    Request.get("http://localhost:3000/books").then((data) => {
      let psikologic = data.filter((book) => book.category === "Psikolojik");
      UI.allUIRemove();
      psikologic.forEach((categories) => {
        UI.addBookToUI(categories);
      });
    });
  } else if (filterByCategory.value == 2) {
    Request.get("http://localhost:3000/books").then((data) => {
      let distopic = data.filter((book) => book.category === "Distopik");
      UI.allUIRemove();
      distopic.forEach((categories) => {
        UI.addBookToUI(categories);
      });
    });
  } else if (filterByCategory.value == 3) {
    Request.get("http://localhost:3000/books").then((data) => {
      let crime = data.filter((book) => book.category === "Polisiye");
      UI.allUIRemove();
      crime.forEach((categories) => {
        UI.addBookToUI(categories);
      });
    });
  } else if (filterByCategory.value == 4) {
    Request.get("http://localhost:3000/books").then((data) => {
      let scifi = data.filter((book) => book.category === "Bilim Kurgu");
      UI.allUIRemove();
      scifi.forEach((categories) => {
        UI.addBookToUI(categories);
      });
    });
  }
});
