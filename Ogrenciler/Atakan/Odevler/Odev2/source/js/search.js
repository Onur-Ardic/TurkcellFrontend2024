let searchInput = document.querySelector("#searchInput");
let searchButton = document.querySelector("#searchButton");

function searchBooks(data, searchItem) {
  let searchItemLowercase = searchItem.toLowerCase().trim();
  let searchResults = [];

  data.forEach((book) => {
    if (
      book.name.toLowerCase().includes(searchItemLowercase) ||
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
    UI.displayAllBooksOnUI(searchResults);
  });
});
