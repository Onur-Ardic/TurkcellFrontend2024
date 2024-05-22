class UI {
  constructor() {
    this.booksCollection = document.getElementById("booksCollection");
    this.bookAdd = document.getElementById("bookAdd");
    this.bookAddBtn = document.getElementById("bookAddBtn");
  }
  displayBooks(books) {
    this.booksCollection.textContent = "";
    books.forEach((book) => {
      const bookCard = this.createBookCard(book);
      this.booksCollection.appendChild(bookCard);
    });
  }
  createBookCard(book) {
    const cardContainer = document.createElement("div");
    cardContainer.className = "col-md-4 my-3 ";
    cardContainer.id = book.id;

    const cardDiv = document.createElement("div");
    cardDiv.className = "card bg-light-subtle";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const img = document.createElement("img");
    img.src = book.coverImgUrl;
    img.alt = book.name;
    img.className = "card-img";

    const title = document.createElement("h5");
    title.className =
      "card-title my-3 text-center fs-4 text-secondary-emphasis";
    title.textContent = book.name;

    const author = document.createElement("p");
    author.className = "card-text text-body-secondary fs-5";
    author.textContent = "Author: " + book.author;

    const category = document.createElement("p");
    category.className = "card-text text-body-secondary fs-5";
    category.textContent = "Category: " + book.category;

    const date = document.createElement("p");
    date.className = "card-text text-body-secondary fs-5";
    date.textContent = "Date: " + book.date;

    const line = document.createElement("div");
    line.className = "border-top m-3";

    const updateBtn = document.createElement("button");
    updateBtn.className = "btn btn-outline-success me-2";
    updateBtn.textContent = "Güncelle";
    updateBtn.onclick = () =>
      bookForUpdate(
        new Book(
          book.id,
          book.name,
          book.author,
          book.category,
          book.date,
          book.coverImgUrl
        )
      );

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-outline-danger";
    deleteBtn.textContent = "Sil";
    deleteBtn.onclick = () => deleteBook(book.id);

    cardBody.appendChild(img);
    cardBody.appendChild(title);
    cardBody.appendChild(author);
    cardBody.appendChild(category);
    cardBody.appendChild(date);
    cardBody.appendChild(line);
    cardBody.appendChild(updateBtn);
    cardBody.appendChild(deleteBtn);
    cardDiv.appendChild(cardBody);
    cardContainer.appendChild(cardDiv);

    return cardContainer;
  }
}
