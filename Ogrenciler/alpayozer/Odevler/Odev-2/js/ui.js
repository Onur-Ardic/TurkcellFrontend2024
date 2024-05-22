class UI {
  showBooks(filter = "") {
    books.innerHTML = "";
    Request.get(`http://localhost:3000/books?category=${filter}`).then(
      (book) => {
        book.forEach((element) => {
          this.addBookToUI(element);
        });
      }
    );
  }
  displayBook(book) {
    books.innerHTML = "";
    book.forEach((element) => {
      this.addBookToUI(element);
    });
  }
  tabDisplayBook(filter = "") {
    nav_roman.innerHTML = "";
    nav_gelisim.innerHTML = "";
    Request.get(`http://localhost:3000/books?category=${filter}`).then(
      (book) => {
        console.log(book, "gelen filtreli");
        book.forEach((element) => {
          this.addBookToTab(element);
        });
      }
    );
  }

  createBookCard(book) {
    const column = document.createElement("div");
    column.classList.add("col-lg-2", "mb-5");

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = book.cover_image;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "text-center", "text-white");

    const title = document.createElement("p");
    title.innerText = book.date;

    const author = document.createElement("p");
    author.innerText = book.author;

    const cardIcon = document.createElement("div");
    cardIcon.classList.add("card-icon", "d-flex", "flex-column");

    const updateIcon = document.createElement("i");
    updateIcon.classList.add("fa-solid", "fa-pen");
    updateIcon.addEventListener("click", () => updateBook(book.id));

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash");
    deleteIcon.addEventListener("click", () => deleteBook(book.id));

    // cardBody.appendChild(author);
    cardBody.appendChild(title);

    cardIcon.appendChild(updateIcon);
    cardIcon.appendChild(deleteIcon);

    card.appendChild(img);
    card.appendChild(cardBody);
    card.appendChild(cardIcon);

    column.appendChild(card);
    return column;
  }

  addBookToUI(book) {
    const column = this.createBookCard(book);
    books.appendChild(column);
  }

  addBookToTab(book) {
    const column = this.createBookCard(book);

    if (book.category == "Roman") {
      nav_roman.appendChild(column);
    } else if (book.category == "Kişisel Gelişim") {
      nav_gelisim.appendChild(column);
    }
  }
}
