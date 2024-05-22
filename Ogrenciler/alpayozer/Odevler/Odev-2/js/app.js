const books = document.getElementById("books");
const nav_books = document.getElementById("nav_books");
const nav_roman = document.getElementById("nav_roman");
const nav_gelisim = document.getElementById("nav_gelisim");
const nav_books_tab = document.getElementById("nav_books_tab");
const roman_tab = document.getElementById("roman_tab");
const gelisim_tab = document.getElementById("gelisim_tab");

const title = document.getElementById("title");
const author = document.getElementById("author");
const category = document.getElementById("category");
const date = document.getElementById("publication_date");
const cover_image = document.getElementById("cover_image");

const addBookButton = document.getElementById("addBook");
const updateBookButton = document.getElementById("updateBook");

const dropdownItems = document.querySelectorAll(".dropdown-item");

const searchBookInput = document.getElementById("search");

const firstCheckbox = document.getElementById("firstCheckbox");
const secondCheckbox = document.getElementById("secondCheckbox");
const thirdCheckbox = document.getElementById("thirdCheckbox");
const sortingSelect = document.getElementById("sortingSelect");
const publisherSelect = document.getElementById("publisherSelect");
const authorSelect = document.getElementById("authorSelect");

const checkboxes = document.querySelectorAll(".list-group-item");
const authorCheckboxes = document.querySelectorAll(".authorCheckbox");

const ui = new UI();

roman_tab.addEventListener("click", function () {
  console.log("tıklandı");
  ui.tabDisplayBook("Roman");
});
gelisim_tab.addEventListener("click", function () {
  console.log("tıklandı");
  ui.tabDisplayBook("Kişisel Gelişim");
});

async function checkAuthor(author) {
  console.log(firstCheckbox, "value");
  if (
    firstCheckbox.checked ||
    secondCheckbox.checked ||
    thirdCheckbox.checked
  ) {
    console.log(author, "tıklandı");
    const books = await BookProcessor.filterBooksAuthor(author);
    console.log(books, "deneme books");
    ui.displayBook(books);
  } else {
    ui.showBooks();
  }
}

sortingSelect.addEventListener("change", () => {
  console.log(sortingSelect.value, "value");
  bookSorting(sortingSelect.value);
});

publisherSelect.addEventListener("change", async () => {
  console.log(publisherSelect.value);
  if (publisherSelect.value == "All") {
    ui.showBooks();
    return;
  }
  const books = await BookProcessor.filterBooksPublisher(publisherSelect.value);
  ui.displayBook(books);
});

authorSelect.addEventListener("change", async () => {
  console.log(authorSelect.value);
  if (authorSelect.value == "All") {
    ui.showBooks();
    return;
  }
  const books = await BookProcessor.filterBooksAuthor(authorSelect.value);
  ui.displayBook(books);
});

window.onload = () => {
  ui.showBooks();
};

async function bookSorting(sortParam) {
  console.log(sortParam, "param");
  let kitaplar;
  if (sortParam == 0) {
    ui.showBooks();
    return;
  } else if (sortParam == 1) {
    kitaplar = await BookProcessor.sortBooksAsc();
  } else if (sortParam == 2) {
    kitaplar = await BookProcessor.sortBooksDesc();
  } else if (sortParam == 3) {
    kitaplar = await BookProcessor.sortBooksDate();
  }
  ui.displayBook(kitaplar);
}
async function searchInput() {
  console.log(searchBookInput.value);
  const bookDeneme = await BookProcessor.searchBooks(searchBookInput.value);
  console.log(bookDeneme);
  ui.displayBook(bookDeneme);
}

addBookButton.addEventListener("click", function () {
  const book = new Book(
    title.value,
    author.value,
    category.value,
    date.value,
    cover_image.value
  );
  addBook(book);
});

function deleteBook(id) {
  Request.delete(`http://localhost:3000/books/${id}`)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}

function addBook(book) {
  Request.post("http://localhost:3000/books", book)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}

function updateBook(id) {
  const bookModal = new bootstrap.Modal(document.getElementById("bookModal"), {
    keyboard: false,
  });
  addBookButton.classList.add("d-none");
  updateBookButton.classList.remove("d-none");

  Request.get(`http://localhost:3000/books/${id}`)
    .then((data) => {
      title.value = data.title;
      author.value = data.author;
      category.value = data.category;
      date.value = data.date;
      cover_image.value = data.cover_image;
      console.log(data);
    })
    .catch((err) => console.log(err));
  bookModal.show();

  updateBookButton.addEventListener("click", () => {
    const book = new Book(
      title.value,
      author.value,
      category.value,
      date.value,
      cover_image.value
    );
    Request.put(`http://localhost:3000/books/${id}`, book)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  });
}
