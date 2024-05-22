searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();
  Request.get("http://localhost:3000/books").then((data) => {
    const filteredBooks = data.filter(
      (book) =>
        book.bookname.toLowerCase().includes(searchText) ||
        book.author.toLowerCase().includes(searchText)
    );
    UI.displayBooks(filteredBooks);
  });
});

sortBooks.addEventListener("change", () => {
  const [key, order] = sortBooks.value.split("-");
  Request.get("http://localhost:3000/books").then((data) => {
    const sortedBooks = data.sort((a, b) => {
      if (key === "date") {
        return order === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      } else {
        return order === "asc"
          ? a.bookname.toLowerCase() > b.bookname.toLowerCase()
            ? 1
            : -1
          : a.bookname.toLowerCase() < b.bookname.toLowerCase()
          ? 1
          : -1;
      }
    });
    UI.displayBooks(sortedBooks);
  });
});

filterAuthor.addEventListener("change", () => {
  const selectedAuthor = filterAuthor.value.toLowerCase();
  Request.get("http://localhost:3000/books").then((data) => {
    const uniqeBooks = data.filter((item, index) => {
      return data.indexOf(item) === index;
    });
    const filteredBooks = uniqeBooks.filter(
      (book) =>
        book.author.toLowerCase() === selectedAuthor || selectedAuthor === ""
    );
    UI.displayBooks(filteredBooks);
  });
});

filterCategory.addEventListener("change", () => {
  const selectedCategory = filterCategory.value.toLowerCase();
  Request.get("http://localhost:3000/books").then((data) => {
    const uniqueBooks = data.filter((item, index) => {
      return data.indexOf(item) === index;
    });

    const filteredCategories = uniqueBooks.filter(
      (book) =>
        book.categories.toLowerCase() === selectedCategory ||
        selectedCategory === ""
    );
    UI.displayBooks(filteredCategories);
  });
});

function populateFilterOptions(books) {
  UI.removeChild(filterCategory);

  const categories = [...new Set(books.map((book) => book.categories))];
  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.textContent = "Categories";
  allOption.selected = true;
  filterCategory.appendChild(allOption);
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    filterCategory.appendChild(option);
  });
}
function authorFilterOptions(books) {
  UI.removeChild(filterAuthor);

  const author = [...new Set(books.map((book) => book.author))];
  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.textContent = "Authors";
  allOption.selected = true;
  filterAuthor.appendChild(allOption);
  author.forEach((author) => {
    const option = document.createElement("option");
    option.value = author;
    option.textContent = author;
    filterAuthor.appendChild(option);
  });
}
