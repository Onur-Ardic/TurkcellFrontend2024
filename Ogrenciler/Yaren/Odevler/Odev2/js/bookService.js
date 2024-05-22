class BookService {
  static async fetchBooks() {
    try {
      const response = await fetch("http://localhost:3000/books");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const booksData = await response.json();
      return booksData;
    } catch (error) {
      console.log("Error fetching books", error);
    }
  }

  static async deleteBookFromDb(bookId) {
    try {
      const response = await fetch(`http://localhost:3000/books/${bookId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Book successfully deleted.");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  static async addBookToDb(book) {
    try {
      const response = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Book successfully added.");
    } catch (err) {
      console.log("Error:", err);
    }
  }

  static async updateBookInDb(book) {
    try {
      const response = await fetch("http://localhost:3000/books/" + book.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Book successfully updated.");
    } catch (err) {
      console.log("Error:", err);
    }
  }
}
