const booklist = new BookList();

async function processAndAddBooks(booksData) {
  for (const book of booksData) {
    try {
      const newBook = new Book(
        book.id,
        book.bookName,
        book.author,
        book.category,
        parseInt(book.writtenDate),
        book.coverImage
      );

      booklist.addBook(newBook);
    } catch (error) {
      console.log("Error processing and adding books:", error);
    }
  }
}

(async function main() {
  const booksData = await BookService.fetchBooks();
  await processAndAddBooks(booksData);
  UI.bookListDisplay(booklist.books);
})();

async function searchBook() {
  const searchText = document.getElementById("searchText").value.toLowerCase();

  const booksData = await BookService.fetchBooks();

  const filteredBooks = booksData.filter(
    (item) =>
      item.bookName.toLowerCase().includes(searchText) ||
      item.author.toLowerCase().includes(searchText)
  );

  booklist.books = filteredBooks;

  UI.bookListDisplay(booklist.books);
}

const sortBooks = (criteria) => {
  let sortedBooks;
  if (criteria === "default") {
    sortedBooks = booklist.books;
  } else if (criteria === "asc") {
    sortedBooks = booklist.books.sort((a, b) => {
      return a.bookName.localeCompare(b.bookName);
    });
  } else if (criteria === "desc") {
    sortedBooks = booklist.books.sort((a, b) => {
      return b.bookName.localeCompare(a.bookName);
    });
  } else if (criteria === "date") {
    sortedBooks = booklist.books.sort((a, b) => {
      return new Date(a.writtenDate) - new Date(b.writtenDate);
    });
  }

  UI.bookListDisplay(sortedBooks);
};

document.getElementById("applyFilter").addEventListener("click", () => {
  const category = document
    .getElementById("filterCategory")
    .value.toLowerCase();
  const author = document.getElementById("filterAuthor").value.toLowerCase();
  filterBooks(category, author);
});

const filterBooks = (category, author) => {
  const filteredBooks = booklist.books.filter((book) => {
    const matchedCategory = book.category.toLowerCase().includes(category);
    const matchedAuthor = book.author.toLowerCase().includes(author);

    if (category && author) {
      return matchedCategory && matchedAuthor;
    }
    if (category) {
      return matchedCategory;
    }
    if (author) {
      return matchedAuthor;
    }

    return true;
  });

  UI.bookListDisplay(filteredBooks);
};

document.getElementById("saveBtn").addEventListener("click", async () => {
  const bookId = document.getElementById("saveBtn").dataset.bookId;
  const bookName = document.getElementById("bookname").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;
  const writtenDate = parseInt(document.getElementById("writtendate").value);
  const coverImage = document.getElementById("coverimage").value;
  if (
    bookName === "" ||
    author === "" ||
    category === "" ||
    writtenDate === "" ||
    coverImage === ""
  ) {
    alert("Please fill in all fields");
    return;
  }

  if (isNaN(writtenDate)) {
    alert("Please enter a valid date.");
    return;
  }

  const bookData = {
    bookName,
    author,
    category,
    writtenDate,
    coverImage,
  };

  if (bookId) {
    bookData.id = bookId;
    await BookService.updateBookInDb(bookData);
    booklist.books = booklist.books.map((book) =>
      book.id == bookId ? bookData : book
    );
  } else {
    await BookService.addBookToDb(bookData);
    booklist.addBook(
      new Book(
        Math.floor(Math.random() * 10000).toString(),
        bookName,
        author,
        category,
        writtenDate,
        coverImage
      )
    );
  }

  UI.bookListDisplay(booklist.books);
  UI.clearInputs();
  document.getElementById("saveBtn").dataset.bookId = "";
});
