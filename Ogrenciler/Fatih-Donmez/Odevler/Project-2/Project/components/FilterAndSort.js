export function applyFiltersAndSort(library, displayBooks) {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const sortSelect = document.getElementById("sortSelect");

  const selectedCategories = Array.from(
    document.querySelectorAll(
      "#categoryCheckboxes input[type='checkbox']:checked"
    )
  ).map((cb) => cb.value);
  const selectedAuthors = Array.from(
    document.querySelectorAll(
      "#authorCheckboxes input[type='checkbox']:checked"
    )
  ).map((cb) => cb.value);

  let filteredBooks = library.getBooks();

  if (searchInput) {
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(searchInput) ||
        book.author.toLowerCase().includes(searchInput)
    );
  }

  if (selectedCategories.length > 0) {
    filteredBooks = filteredBooks.filter((book) =>
      selectedCategories.includes(book.category)
    );
  }

  if (selectedAuthors.length > 0) {
    filteredBooks = filteredBooks.filter((book) =>
      selectedAuthors.includes(book.author)
    );
  }

  switch (sortSelect.value) {
    case "titleAsc":
      filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "titleDesc":
      filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "yearAsc":
      filteredBooks.sort((a, b) => a.year - b.year);
      break;
    case "yearDesc":
      filteredBooks.sort((a, b) => b.year - a.year);
      break;
  }

  displayBooks(filteredBooks);
}
