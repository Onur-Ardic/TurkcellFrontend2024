const books = document.getElementById("books");
const nav_roman = document.getElementById("nav_roman");
const nav_gelisim = document.getElementById("nav_gelisim");
const roman_tab = document.getElementById("roman_tab");
const gelisim_tab = document.getElementById("gelisim_tab");
const bookModalLabel = document.getElementById("bookModalLabel");

const title = document.getElementById("title");
const author = document.getElementById("author");
const publisher = document.getElementById("publisher");
const category = document.getElementById("category");
const date = document.getElementById("publication_date");
const cover_image = document.getElementById("cover_image");

const addBookButton = document.getElementById("addBook");
const updateBookButton = document.getElementById("updateBook");

const searchBookInput = document.getElementById("search");

const sortingSelect = document.getElementById("sortingSelect");
const publisherSelect = document.getElementById("publisherSelect");
const authorSelect = document.getElementById("authorSelect");
const modalForm = document.getElementById("modalForm");

const ui = new UI();

window.onload = () => {
  ui.showBooks();
};

modalForm.addEventListener("submit", function () {
  const book = new Book(
    title.value,
    author.value,
    publisher.value,
    category.value,
    date.value,
    cover_image.value
  );
  ui.addBook(book);
});

roman_tab.addEventListener("click", function () {
  ui.tabDisplayBook("Roman");
});

gelisim_tab.addEventListener("click", function () {
  ui.tabDisplayBook("Kişisel Gelişim");
});

sortingSelect.addEventListener("change", () => {
  BookProcessor.bookSorting(sortingSelect.value);
});

publisherSelect.addEventListener("change", async () => {
  if (publisherSelect.value == "All") {
    ui.showBooks();
    return;
  }
  const books = await BookProcessor.filterBooksPublisher(publisherSelect.value);
  ui.displayBook(books);
});

authorSelect.addEventListener("change", async () => {
  if (authorSelect.value == "All") {
    ui.showBooks();
    return;
  }
  const books = await BookProcessor.filterBooksAuthor(authorSelect.value);
  ui.displayBook(books);
});
