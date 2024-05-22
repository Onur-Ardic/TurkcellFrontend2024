function displayBooks(books) {
  const bookList = document.getElementById("book-list");
  bookList.textContent = "";

  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("col-lg-3");

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = book.id;

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("d-flex", "align-items-center")

    const img = document.createElement("img");
    img.src = book.url;
    img.classList.add("img-fluid");
    img.alt = book.name;
    
    const bookInfo = document.createElement("div");
    bookInfo.classList.add("p-3", "text-center")


    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = book.name;

    const author = document.createElement("p");
    author.classList.add("card-text");
    author.textContent = book.author;

    const category = document.createElement("p");
    category.classList.add("card-text");
    category.innerHTML = `<small class="text-muted">${book.category}</small>`;

    const releaseDate = document.createElement("p");
    releaseDate.classList.add("card-text");
    releaseDate.innerHTML = `<small class="text-muted">${book.releaseDate}</small>`;

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("d-flex", "justify-content-center", "gap-3", "my-4");

    const updateButton = document.createElement("button");
    updateButton.classList.add("btn", "btn-warning", "btn-update");
    updateButton.textContent = "Update";
    updateButton.onclick = () => {
      selectedBook(
        new Book(
          book.id,
          book.name,
          book.author,
          book.category,
          book.releaseDate,
          book.url
        )
      );
    };

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "btn-delete");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
      deleteBook(book.id);
    };

    cardInfo.appendChild(img);
    bookInfo.appendChild(title);
    bookInfo.appendChild(author);
    bookInfo.appendChild(category);
    bookInfo.appendChild(releaseDate);
    cardInfo.appendChild(bookInfo);

    cardBody.appendChild(cardInfo);
    card.appendChild(cardBody);

    btnDiv.appendChild(updateButton);
    btnDiv.appendChild(deleteButton);
    cardBody.appendChild(btnDiv);

    bookCard.appendChild(card);

    bookList.appendChild(bookCard);
  });
}


