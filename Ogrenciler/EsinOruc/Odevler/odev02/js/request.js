class Request {
  static get(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((cardData) => {
          UI.createCard(cardData);
        });
      })
      .catch((err) => {
        console.error(err, "Books not found");
        throw err;
      });
  }

  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Hata Alındı."));
    });
  }
  static put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Error Received"));
    });
  }
  static delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => resolve("book has been deleted"))
        .catch((err) => reject(err, "Error Received"));
    });
  }

  static loadAuthorsAndCategories() {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((books) => {
        const authors = new Set();
        const categories = new Set();

        books.forEach((book) => {
          authors.add(book.author);
          categories.add(book.category);
        });

        UI.displayFilters(authors, "authorsContainer", "author-checkbox");
        UI.displayFilters(
          categories,
          "categoriesContainer",
          "category-checkbox"
        );
      })
      .catch((error) => console.error("Error loading data:", error));
  }
}
