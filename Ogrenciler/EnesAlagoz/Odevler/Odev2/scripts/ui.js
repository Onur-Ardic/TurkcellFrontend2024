class UI {
  static displayBooks(books) {
    const categories = ["Polisiye", "Fantastik", "Aksiyon-Macera", "Klasikler", "Karikatür"];

    categories.forEach((category) => {
      const bookListElement = document.getElementById(`bookList${category.replace(/-/g, "")}`);
      if (bookListElement) {
        bookListElement.innerHTML = "";
      }
    });

    books.forEach((book) => {
      const bookListElement = document.getElementById(`bookList${book.category.replace(/-/g, "")}`);
      if (bookListElement) {
        const bookElement = document.createElement("div");
        bookElement.classList.add("col-md-3");
        bookElement.innerHTML = `
          <div class="card mb-4 shadow-sm">
            <img src="${book.coverUrl}" class="card-img-top" style="height:350px" alt="${book.title}">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">${book.author}</p>
              <p class="card-text">${book.year}</p>
              <button class="btn btn-warning edit-book" data-id="${book.id}" data-bs-toggle="modal" data-bs-target="#bookModal">Düzenle</button>
              <button class="btn btn-danger delete-book" data-id="${book.id}" >Sil</button>
            </div>
          </div>
        `;

        bookListElement.appendChild(bookElement);
        bookElement.querySelector(".delete-book").addEventListener("click", () => {
          this.deleteBook(book.id);
        });
        bookElement.querySelector(".edit-book").addEventListener("click", () => {
          this.editBook(book.id);
        });
      }
    });
  }

  static editBook(bookId) {
    Request.get(`http://localhost:3000/books/${bookId}`)
      .then((data) => {
        document.getElementById("title").value = data.title;
        document.getElementById("author").value = data.author;
        document.getElementById("category").value = data.category;
        document.getElementById("year").value = data.year;
        document.getElementById("coverUrl").value = data.coverUrl;
        document.getElementById("bookId").value = data.id;
      })
      .catch((err) => console.log(err.message));

    const modalElement = document.getElementById("bookModal");
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }
  static deleteBook(bookId) {
    console.log("Silinecek kitap ID:", bookId);
    Request.delete(`http://localhost:3000/books/${bookId}`)
      .then(() => {
        const deletedBookCard = document.querySelector(`.card .delete-book[data-id="${bookId}"]`).closest(".col-md-3");
        if (deletedBookCard) {
          deletedBookCard.parentNode.removeChild(deletedBookCard);
        }
      })
      .catch((error) => console.error("Kitap silinirken hata oluştu:", error));
  }

  static addBook() {
    const id = document.getElementById("bookId");
    console.log(id.value);
    const book = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      category: document.getElementById("category").value,
      year: document.getElementById("year").value,
      coverUrl: document.getElementById("coverUrl").value,
    };
    if (id.value === "") {
      Request.post(`http://localhost:3000/books/`, book)
        .then(() => {})
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      Request.put(`http://localhost:3000/books/${id.value}`, book)
        .then((book) => {})
        .catch((error) => console.error("Kitap güncellenirken hata oluştu:", error));
    }
  }
}
