let lastBook = "";

class Book {
  constructor(){
    this.bookName = document.getElementById("#bookName");
    this.author = document.getElementById("#author");
    this.publishedDate = document.getElementById("#publishedDate");
    this.imgUrl = document.getElementById("#imgUrl").value;
    this.category = document.getElementById("#category").value;
}

  static saveBook() {
    let bookObj = {
      BookName: bookName,
      Author: author,
      Category: category,
      PublishedDate: publishedDate,
      ImageUrl: imgUrl
    };
  
    return Request.post("http://localhost:3000/books")
    .then((bookObj) => console.log(bookObj))
    .catch((err) => reject(err, "Hata Alındı."));;
  }
  
  // static refreshData() {
  //   Book.getBooks(Book.showBooks);
  //   Filter.getFilter();//düzelt
  // }
  static showBooks(books) {
   
    let booksDiv = document.getElementById("books");
    booksDiv.innerHTML = "";

    let selectedAuthor = document.getElementById("authorSelect").value;

    books.forEach((book) => {
      let a = true;

      if (selectedAuthor != "") {
        if (selectedAuthor != book.Author) {
          a = false;
        }
      }

      if (a) {
        let bookDiv = document.createElement("div");
        bookDiv.style = "border: 1px solid black;";

        let bookName = document.createElement("p");
        let author = document.createElement("p");
        let publishDate = document.createElement("p");
        let category = document.createElement("p");
        let deleteButton = document.createElement("button");

        bookName.innerHTML = "<b>Book Name:</b> " + book.BookName;
        author.innerHTML = "<b>Author:</b> " + book.Author;
        publishDate.innerHTML = "<b>Published Date:</b> " + book.PublishedDate;
        category.innerHTML = "<b>Category:</b> " + book.Category;

        deleteButton.innerText = "Delete";

        deleteButton.addEventListener("click", (id) => {
          Request.deleteBook("http://localhost:3000/books/1")
            .then((id) => Book.showBooks())
            .catch((err) => reject(err, "Hata Alındı..."));

        });

        bookDiv.appendChild(bookName);
        bookDiv.appendChild(author);
        bookDiv.appendChild(category);
        bookDiv.appendChild(publishDate);
        bookDiv.appendChild(deleteButton);

        booksDiv.appendChild(bookDiv);
      }
    });

    lastBook = books[books.length - 1].id; // son indexteki elemanın idsini aldık.
  }
  static updateBook(id) {
    let bookObj = {
        BookName: bookName,
        Author: author,
        Category: category,
        PublishedDate: publishedDate,
      };

      return Request.put("http://localhost:3000/books")
      .then(() => resolve(data))
      .catch((err) => reject(err, "Hata Alındı."));
  }
}
