function applyFilters() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = filterCategory.value.toLowerCase();
  const [key, order] = sortBooks.value.split("-");

  Request.get("http://localhost:3000/books").then((data) => {
    let filteredBooks = data;

    if (searchText) {
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.bookname.toLowerCase().includes(searchText) ||
          book.author.toLowerCase().includes(searchText)
      );
    }

    if (selectedCategory) {
      filteredBooks = filteredBooks.filter(
        (book) => book.categories.toLowerCase() === selectedCategory
      );
    }

    const sortedBooks = filteredBooks.sort((a, b) => {
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
}

searchInput.addEventListener("input", applyFilters);
sortBooks.addEventListener("change", applyFilters);
filterCategory.addEventListener("change", applyFilters);

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

Request.get("http://localhost:3000/books").then((data) => {
  populateFilterOptions(data);
  applyFilters();
});
