class UI {
  static display(book, deleteButtonClickHandler, updateButtonClickHandler) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add(
      "col-6",
      "col-sm-6",
      "col-md-4",
      "col-lg-4",
      "col-xl-3"
    );
    bookDiv.id = `book-${book.id}`;

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "px-2", "py-2");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("position-relative", "overflow-hidden");

    const image = document.createElement("img");
    image.src = book.picture;
    image.classList.add("bookPicOnCard");
    image.id = "bookPicOnCard";
    image.alt = book.bookName;
    image.style.width = "100%";
    image.style.height = "200px";
    image.style.objectFit = "cover";

    const btnWrapperDiv = document.createElement("div");
    btnWrapperDiv.classList.add(
      "text-center",
      "position-absolute",
      "btn-wrapper",
      "d-flex",
      "flex-column",
      "gap-2"
    );

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-primary");
    deleteButton.innerHTML = '<i class="bi bi-trash3"></i>';
    deleteButton.addEventListener("click", () => {
      deleteButtonClickHandler(book);
    });

    btnWrapperDiv.appendChild(deleteButton);

    const updateButton = document.createElement("button");
    updateButton.classList.add("btn", "btn-primary");
    updateButton.innerHTML = '<i class="bi bi-pencil-square"></i>';
    updateButton.setAttribute("data-bs-toggle", "modal");
    updateButton.setAttribute("data-bs-target", "#bookModal");
    updateButton.addEventListener("click", () => {
      updateButtonClickHandler(book);
    });

    btnWrapperDiv.appendChild(updateButton);

    imageDiv.appendChild(image);
    imageDiv.appendChild(btnWrapperDiv);

    const textDiv = document.createElement("div");
    textDiv.classList.add("text-center");

    const titleHeading = document.createElement("h5");
    titleHeading.classList.add("bookNameOnCard");
    titleHeading.id = "bookNameOnCard";
    titleHeading.style.maxWidth = "100%";
    titleHeading.textContent = book.bookName;

    const writerHeading = document.createElement("h5");
    writerHeading.classList.add("bookWriterOnCard");
    writerHeading.id = "bookWriterOnCard";
    writerHeading.style.maxWidth = "100%";
    writerHeading.textContent = book.writer;

    const categoryHeading = document.createElement("h6");
    categoryHeading.classList.add("bookCategoryOnCard");
    categoryHeading.id = "bookCategoryOnCard";
    categoryHeading.style.maxWidth = "100%";
    categoryHeading.textContent = `Category: ${book.category}`;

    const publishDateHeading = document.createElement("h6");
    publishDateHeading.classList.add("bookDateOnCard");
    publishDateHeading.id = "bookDateOnCard";
    publishDateHeading.style.maxWidth = "100%";
    publishDateHeading.textContent = `Publish Date: ${book.publishDate}`;

    textDiv.appendChild(titleHeading);
    textDiv.appendChild(writerHeading);
    textDiv.appendChild(categoryHeading);
    textDiv.appendChild(publishDateHeading);

    cardDiv.appendChild(imageDiv);
    cardDiv.appendChild(textDiv);

    bookDiv.appendChild(cardDiv);

    document.getElementById("card-wrapper").appendChild(bookDiv);
  }

  static delete(book) {
    const card = document.querySelector(`#book-${book.id}`);
    card.style.display = "none";
  }

  static update(book) {
    const cardDiv = document.getElementById(`book-${book.id}`);
    cardDiv.querySelector(`.bookNameOnCard`).textContent = book.bookName;
    cardDiv.querySelector(`.bookWriterOnCard`).textContent = book.writer;
    cardDiv.querySelector(
      `.bookCategoryOnCard`
    ).textContent = `Category: ${book.category}`;

    cardDiv.querySelector(
      `.bookDateOnCard`
    ).textContent = `Publish Date: ${book.publishDate}`;

    cardDiv.querySelector(`.bookPicOnCard`).src = ` ${book.picture}`;
  }

  static fillModal(book) {
    document.getElementById("bookName").value = book.bookName;
    document.getElementById("bookWriter").value = book.writer;
    document.getElementById("publishDate").value = book.publishDate;
    document.getElementById("bookcategory").value = book.category;
    document.getElementById("bookPicture").value = book.picture;

    const previewImage = document.getElementById("previewImage");
    if (book.picture) {
      previewImage.style.display = "block";
      previewImage.src = book.picture;
    } else {
      previewImage.style.display = "none";
    }
  }

  static getBook(id = null) {
    const bookName = document.getElementById("bookName").value;
    const writer = document.getElementById("bookWriter").value;
    const publishDate = document.getElementById("publishDate").value;
    const category = document.getElementById("bookcategory").value;
    const picture = document.getElementById("bookPicture").value;
    if (id == null) {
      id = crypto.randomUUID();
    }
    const book = {
      id: id,
      bookName: bookName,
      writer: writer,
      category: category,
      publishDate: publishDate,
      picture: picture,
    };
    return book;
  }
}

export { UI };
