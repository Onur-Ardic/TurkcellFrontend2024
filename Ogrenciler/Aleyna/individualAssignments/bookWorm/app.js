let books = [];

if (localStorage.getItem("books") !== null) {
  books = JSON.parse(localStorage.getItem("books"));
}

const ui = new UI();
const bookss = new Books(books);

ui.displayBooks({}, bookss.books);

ui.bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  bookss.addBook(
    new Book(
      Date.now().toString(),
      ui.title.value,
      ui.author.value,
      ui.year.value,
      ui.genre.value,
      ui.image.value
    )
  );
  ui.bookForm.reset();
});

const editBook = (id) => {
  let book = Object.values(bookss.getBook(id));
  for (let input in ui.editFormInputs) {
    ui.editFormInputs[input].value = book[input];
  }
};

const deleteBook = (id) => {
  bookss.deleteBook(id);
};

ui.editForm.addEventListener("submit", function (e) {
  e.preventDefault();
  bookss.updateBook(
    new Book(
      ui.idEdit.value,
      ui.titleEdit.value,
      ui.authorEdit.value,
      ui.yearEdit.value,
      ui.genreEdit.value,
      ui.imageEdit.value
    )
  );
});

ui.filterInputs.forEach((filter) => {
  filter.addEventListener("input", () => {
    ui.displayBooks(
      {
        author: ui.filterAuthor.value,
        genre: ui.filterGenre.value,
        year: ui.filterYear.value,
      },
      bookss.books
    );
  });
});

ui.clearFiltersButton.addEventListener("click", function () {
  ui.filter.reset();
  ui.displayBooks({}, bookss.books);
});
