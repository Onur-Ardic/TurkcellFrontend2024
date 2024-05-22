class UI {
  static bookListDisplay(books) {
    const tbody = document.getElementById("booksTBody");
    tbody.innerHTML = "";

    books.forEach((book) => {
      const tr = document.createElement("tr");

      const idContent = document.createElement("td");
      idContent.textContent = book.id;

      const nameContent = document.createElement("td");
      nameContent.textContent = book.bookName;

      const authorContent = document.createElement("td");
      authorContent.textContent = book.author;

      const categoryContent = document.createElement("td");
      categoryContent.textContent = book.category;

      const dateContent = document.createElement("td");
      dateContent.textContent = book.writtenDate;

      const coverImageContent = document.createElement("td");
      const coverImg = document.createElement("img");
      coverImg.src = book.coverImage;
      coverImg.width = 50;
      coverImg.height = 50;
      coverImg.alt = book.bookName;
      coverImageContent.appendChild(coverImg);

      const actionsContent = document.createElement("td");

      const updateBtn = document.createElement("button");
      updateBtn.classList.add("updateBtn", "btn", "btn-lightpink", "me-2");
      updateBtn.textContent = "Update";
      updateBtn.dataset.bookId = book.id;
      actionsContent.appendChild(updateBtn);

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("deleteBtn", "btn", "btn-success", "me-2");
      deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
      deleteBtn.dataset.bookId = book.id;
      actionsContent.appendChild(deleteBtn);

      const reviewBtn = document.createElement("button");
      reviewBtn.classList.add("reviewBtn", "btn", "btn-primary");
      reviewBtn.innerHTML = '<i class="bi bi-eye"></i>';
      reviewBtn.dataset.bookId = book.id;
      actionsContent.appendChild(reviewBtn);

      tr.appendChild(idContent);
      tr.appendChild(nameContent);
      tr.appendChild(authorContent);
      tr.appendChild(categoryContent);
      tr.appendChild(dateContent);
      tr.appendChild(coverImageContent);
      tr.appendChild(actionsContent);

      tbody.appendChild(tr);
    });

    tbody.querySelectorAll(".updateBtn").forEach((button) => {
      button.addEventListener("click", (event) => {
        const bookId = event.currentTarget.getAttribute("data-book-id");
        const book = books.find((b) => b.id == bookId);
        if (book) {
          document.getElementById("bookname").value = book.bookName;
          document.getElementById("author").value = book.author;
          document.getElementById("category").value = book.category;
          document.getElementById("writtendate").value = book.writtenDate;
          document.getElementById("coverimage").value = book.coverImage;

          document.getElementById("saveBtn").dataset.bookId = book.id;

          const bookModal = new bootstrap.Modal(
            document.getElementById("bookModal")
          );
          bookModal.show();
        }
      });
    });

    tbody.querySelectorAll(".deleteBtn").forEach((button) => {
      button.addEventListener("click", async (event) => {
        const bookId = event.currentTarget.getAttribute("data-book-id");
        await BookService.deleteBookFromDb(bookId);
        booklist.deleteBook(bookId);
        UI.bookListDisplay(booklist.books);
      });
    });

    tbody.querySelectorAll(".reviewBtn").forEach((button) => {
      button.addEventListener("click", (event) => {
        const bookId = event.currentTarget.getAttribute("data-book-id");
        const book = books.find((b) => b.id == bookId);
        if (book) {
          UI.reviewBookCard(book);
        }
      });
    });
  }

  static reviewBookCard(book) {
    const bookCardContainer = document.querySelector(".bookCardContainer");
    bookCardContainer.innerHTML = "";

    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("d-flex", "justify-content-center");

    const card = document.createElement("div");
    card.classList.add(
      "bookCardContainer",
      "col-lg-8",
      "col-md-10",
      "col-sm-12",
      "bg-cream",
      "d-flex",
      "flex-wrap",
      "mb-5",
      "position-relative"
    );

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("text-center", "w-100");
    const header = document.createElement("h2");
    header.classList.add("fw-semibold", "text-winered");
    header.textContent = "Book Details";
    headerDiv.appendChild(header);

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("row", "w-100");

    const bookCoverDiv = document.createElement("div");
    bookCoverDiv.classList.add(
      "col-md-6",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    const bookCoverImg = document.createElement("img");
    bookCoverImg.src = book.coverImage;
    bookCoverImg.alt = book.bookName;
    bookCoverImg.classList.add("img-fluid", "p-3");
    bookCoverImg.style.width = "350px";
    bookCoverImg.style.height = "400px";
    bookCoverDiv.appendChild(bookCoverImg);

    const bookDetailsDiv = document.createElement("div");
    bookDetailsDiv.classList.add("col-md-6", "text-black", "pt-4", "ps-3");

    const bookName = document.createElement("h6");
    bookName.classList.add("fw-bold", "text-black", "mb-3");
    bookName.id = "bookNameCard";
    bookName.textContent = `Book Name: ${book.bookName}`;
    bookDetailsDiv.appendChild(bookName);

    const author = document.createElement("h6");
    author.classList.add("fw-bold", "text-black", "mb-3");
    author.id = "authorCard";
    author.textContent = `Author: ${book.author}`;
    bookDetailsDiv.appendChild(author);

    const category = document.createElement("h6");
    category.classList.add("fw-bold", "text-black", "mb-3");
    category.id = "categoryCard";
    category.textContent = `Category: ${book.category}`;
    bookDetailsDiv.appendChild(category);

    const writtenDate = document.createElement("h6");
    writtenDate.classList.add("fw-bold", "text-black", "mb-3");
    writtenDate.id = "writtenDateCard";
    writtenDate.textContent = `Publish Date: ${book.writtenDate}`;
    bookDetailsDiv.appendChild(writtenDate);

    const summary = document.createElement("h6");
    summary.classList.add("fst-italic", "text-black", "my-3");
    summary.id = "summary";
    summary.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.";
    bookDetailsDiv.appendChild(summary);

    contentDiv.appendChild(bookCoverDiv);
    contentDiv.appendChild(bookDetailsDiv);

    card.appendChild(headerDiv);
    card.appendChild(contentDiv);

    const closeBtn = document.createElement("button");
    closeBtn.classList.add(
      "btn",
      "btn-primary",
      "position-absolute",
      "top-0",
      "end-0",
      "m-2"
    );
    closeBtn.innerHTML = '<i class="bi bi-x-lg"></i>';
    closeBtn.addEventListener("click", () => {
      bookCardContainer.innerHTML = "";
    });
    card.appendChild(closeBtn);

    cardWrapper.appendChild(card);
    bookCardContainer.appendChild(cardWrapper);
  }

  static clearInputs() {
    document.getElementById("bookname").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value = "";
    document.getElementById("writtendate").value = "";
    document.getElementById("coverimage").value = "";
  }
}
