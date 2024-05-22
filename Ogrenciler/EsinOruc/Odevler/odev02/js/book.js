class Book {
  constructor(title, author, coverImageUrl, year, category) {
    this.title = title;
    this.author = author;
    this.coverImageUrl = coverImageUrl;
    this.year = year;
    this.category = category;
    this.id = Crypto.randomUUID();
  }
  static modalShow(cardData) {
    document.getElementById("updateBookName").value = cardData.title;
    document.getElementById("updateNameAuthor").value = cardData.author;
    document.getElementById("updateCustomImageUrl").value =
      cardData.coverImageUrl;
    document.getElementById("updateYear").value = cardData.year;
    document.getElementById("updateCategory").value = cardData.category;

    const modal = new bootstrap.Modal(document.getElementById("updateModal"));
    modal.show();

    const saveButton = document.getElementById("updateBookSaveButton");
    saveButton.onclick = () => this.updateBook(cardData.id);
  }

  static addBook(form) {
    const formData = {
      title: document.getElementById("validationBookName").value,
      author: document.getElementById("validationNameAuthor").value,
      coverImageUrl: document.getElementById("validationCustomImageUrl").value,
      year: document.getElementById("validationYear").value,
      category: document.getElementById("validationCategory").value,
    };

    Request.post("http://localhost:3000/books", formData)
      .then((response) => {
        form.reset();
        form.classList.remove("was-validated");
      })
      .catch((error) => console.error("Error adding book:", error));
  }

  static updateBook(bookID) {
    event.preventDefault();
    const formData = {
      title: document.getElementById("updateBookName").value,
      author: document.getElementById("updateNameAuthor").value,
      coverImageUrl: document.getElementById("updateCustomImageUrl").value,
      year: document.getElementById("updateYear").value,
      category: document.getElementById("updateCategory").value,
    };

    Request.put(`http://localhost:3000/books/${bookID}`, formData)
      .then(() => {})
      .catch((err) => console.error("Error updating book:", err));
  }
  static deleteBook(bookId) {
    Request.delete(`http://localhost:3000/books/${bookId}`)
      .then((message) => {})
      .catch((err) => console.error("Book has been deleted:", err));
  }
}
