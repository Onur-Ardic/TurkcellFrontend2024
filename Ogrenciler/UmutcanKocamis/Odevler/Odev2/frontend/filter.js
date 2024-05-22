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
