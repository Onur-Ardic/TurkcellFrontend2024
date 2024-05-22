class UI {
  static displayBooks(books) {
    const booksDiv = document.getElementById("books");
    booksDiv.innerText = "";
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const booksContainer = document.getElementById("books");
    const col = document.createElement("div");
    col.classList.add("col");
    col.style.maxWidth = "18rem";
    const bookCard = document.createElement("div");
    bookCard.classList.add("card", "h-100", "shadow", "border-0");
    const img = document.createElement("img");
    img.src = `${book.cover}`;
    img.alt = `${book.title}`;
    img.classList.add("card-img-top", "img-fluid");
    img.style.height = "100%";
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "text-center");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = `${book.title}`;
    const author = document.createElement("h6");
    author.classList.add("card-author", "text-dark-emphasis", "mb-1");
    author.textContent = `Yazar: ${book.author}`;
    const category = document.createElement("h6");
    category.classList.add("card-category", "text-dark-emphasis", "mb-1");
    category.textContent = `Kategori: ${book.category}`;
    const year = document.createElement("h6");
    year.classList.add("card-year", "m-0", "text-dark-emphasis");
    year.textContent = `Yıl: ${book.year}`;
    const cardFooter = document.createElement("div");
    cardFooter.classList.add(
      "card-footer",
      "d-flex",
      "gap-1",
      "justify-content-center"
    );
    const editBtn = document.createElement("button");
    editBtn.classList.add("btn", "btn-edit", "edit", "w-50");
    editBtn.setAttribute("data-id", `${book.id}`);
    editBtn.textContent = "Düzenle";
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-delete", "delete", "w-50");
    deleteBtn.setAttribute("data-id", `${book.id}`);
    deleteBtn.textContent = "Sil";
    cardFooter.append(editBtn, deleteBtn);
    cardBody.append(title, author, category, year);
    bookCard.append(img, cardBody, cardFooter);
    col.appendChild(bookCard);
    booksContainer.appendChild(col);
  }

  static deleteBook(target) {
    if (target.classList.contains("delete")) {
      target.parentElement.parentElement.parentElement.remove();
    }
  }

  static updateBookInList(book) {
    const booksContainer = document.getElementById("books");
    booksContainer
      .querySelector(`[data-id='${book.id}']`)
      .parentElement.parentElement.parentElement.remove();
    UI.addBookToList(book);
  }

  static populateForm(book) {
    document.getElementById("title").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("category").value = book.category;
    document.getElementById("year").value = book.year;
    document.getElementById("cover").value = book.cover;
    const modal = new bootstrap.Modal(document.getElementById("bookModal"));
    modal.show();
  }

  static clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value = "";
    document.getElementById("year").value = "";
    document.getElementById("cover").value = "";
  }
}
