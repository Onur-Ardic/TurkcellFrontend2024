const API_URL = "http://localhost:3000/books";

class API {
  static fetchBooks() {
    return fetch(API_URL).then((response) => response.json());
  }

  static addBook(book) {
    return fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
  }

  static updateBook(id, book) {
    return fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
  }

  static deleteBook(id) {
    return fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).then((response) => response.json());
  }

  static fetchBookById(id) {
    return fetch(`${API_URL}/${id}`).then((response) => response.json());
  }
}
