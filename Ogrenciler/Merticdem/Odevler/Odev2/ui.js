class UI {
  static displayBooks(books) {
    const bookList = document.querySelector("#bookList");
    bookList.innerHTML = "";
    books.forEach((book) => {
      const bookElement = document.createElement("div");
      bookElement.classList.add("col-md-4", "mb-4", "border-rounded");

      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      const imgElement = document.createElement("img");
      imgElement.src = book.cover;
      imgElement.classList.add("card-img-top");
      imgElement.alt = book.title;
      imgElement.style.cursor = "pointer";
      imgElement.onclick = () => App.showBookDetails(book.id);

      cardElement.appendChild(imgElement);
      bookElement.appendChild(cardElement);
      bookList.appendChild(bookElement);
    });
  }

  static showBookForm(book = {}) {
    document.querySelector("#bookForm").style.display = "block";
    document.querySelector("#bookId").value = book.id || "";
    document.querySelector("#bookTitle").value = book.title || "";
    document.querySelector("#bookAuthor").value = book.author || "";
    document.querySelector("#bookCategory").value = book.category || "";
    document.querySelector("#bookDate").value = book.date || "";
    document.querySelector("#bookCover").value = book.cover || "";
  }

  static hideBookForm() {
    document.querySelector("#bookForm").style.display = "none";
  }

  static populateFilters(books) {
    const categories = [...new Set(books.map((book) => book.category))];
    const authors = [...new Set(books.map((book) => book.author))];

    const categoryFilter = document.querySelector("#categoryFilter");
    const authorFilter = document.querySelector("#authorFilter");

    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });

    authors.forEach((author) => {
      const option = document.createElement("option");
      option.value = author;
      option.textContent = author;
      authorFilter.appendChild(option);
    });
  }
}
