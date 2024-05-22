let lastBook = "";

class Book {
  constructor(id, name, author, category, date, imgUrl) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.category = category;
    this.date = date;
    this.imgUrl = imgUrl;
  }

  static async saveBook() {
    let bookName = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let publishedDate = document.getElementById("publishedDate").value;
    let category = document.getElementById("category").value;
    let imgUrl = document.getElementById("imgUrl").value;

    const bookObj = {
      "BookName": bookName,
      "Author": author,
      "Category": category,
      "PublishedDate": publishedDate,
      "imgUrl": imgUrl
    };
    const book = await Request.post("http://localhost:3000/books", bookObj);
    display();
  }

  static showBooks(books) {
    let booksDiv1 = document.getElementById("books");
    booksDiv1.innerHTML = "";

    let searchInput = document.getElementById("searchInput").value;

    if (searchInput != "" && searchInput != null) {
      document.getElementById("searchResult").innerHTML = "Search result of " + searchInput;
      searchInput = searchInput.toLowerCase();
      books = books.filter(function (book) {
        return book.BookName.toLowerCase().includes(searchInput) || book.Author.toLowerCase().includes(searchInput);
      });
      document.getElementById("searchInput").value = "";
    }
    else {
      document.getElementById("searchResult").innerHTML = "";
    }

    books.forEach((book) => {
      let bookDiv = document.createElement("div");
      bookDiv.className = "text-secondary d-flex flex-row p-1 mb-5";
      bookDiv.style.width = "16rem";
      bookDiv.style.height = "12rem";

      let imgDiv = document.createElement("div");
      imgDiv.style.width = "7rem";

      imgDiv.style.backgroundImage = `url(${book.imgUrl})`;
      imgDiv.style.backgroundSize = "cover";
      imgDiv.style.backgroundPosition = "center";
      imgDiv.className = "m-1";


      let contentDiv = document.createElement("div");
      contentDiv.className = "p-1";
      contentDiv.style.lineHeight = "17px";
      contentDiv.style.width = "9rem";
      contentDiv.style.height = "12rem";

      let buttonDiv = document.createElement("div");
      buttonDiv.className = "p-1 d-flex gap-1";


      let bookName = document.createElement("h5");
      bookName.className = "text-warning"
      let author = document.createElement("p");
      let publishDate = document.createElement("p");
      let category = document.createElement("p");
      let deleteButton = document.createElement("i");
      let updateButton = document.createElement("i");

      bookName.innerHTML = book.BookName;
      author.innerHTML = book.Author;
      publishDate.innerHTML = book.PublishedDate;
      category.innerHTML = book.Category;

      deleteButton.innerText = "";
      deleteButton.className = "text-warning bi bi-x-square";
      deleteButton.addEventListener("click",
        (e) => {
          this.deleteBook(book.id);
        });
      updateButton.innerText = "";
      updateButton.className = "text-warning bi bi-pencil-square";
      updateButton.setAttribute("data-bs-toggle", "modal");
      updateButton.setAttribute("data-bs-action", "create");
      updateButton.setAttribute("data-bs-target", "#updateBookModal");
      updateButton.setAttribute("data-bs-whatever", "@getbootstrap");
      updateButton.addEventListener("click",
        (e) => {
          this.showUpdateBookModal(book);
        });

      contentDiv.appendChild(bookName);
      contentDiv.appendChild(author);
      contentDiv.appendChild(category);
      contentDiv.appendChild(publishDate);
      buttonDiv.appendChild(deleteButton);
      buttonDiv.appendChild(updateButton);

      bookDiv.appendChild(imgDiv);
      bookDiv.appendChild(contentDiv);
      contentDiv.appendChild(buttonDiv);
      booksDiv1.appendChild(bookDiv);
    });
  }

  static removeinput() {
    document.getElementById("bookName").value = "";
    document.getElementById("author").value = "";
    document.getElementById("publishedDate").value = "";
    document.getElementById("category").value = "";
    document.getElementById("imgUrl").value = "";
  }

  static showUpdateBookModal(book) {
    document.getElementById("updatebookid").value = book.id;
    document.getElementById("updatebookName").value = book.BookName;
    document.getElementById("updateauthor").value = book.Author;
    document.getElementById("updatepublishedDate").value = book.PublishedDate;
    document.getElementById("updatecategory").value = book.Category;
    document.getElementById("updateimgUrl").value = book.imgUrl;
  }


  static async updateBook() {
    let id = document.getElementById("updatebookid").value
    const bookObj = {
      "BookName": document.getElementById("updatebookName").value,
      "Author": document.getElementById("updateauthor").value,
      "Category": document.getElementById("updatecategory").value,
      "PublishedDate": document.getElementById("updatepublishedDate").value,
      "imgUrl": document.getElementById("updateimgUrl").value
    };
    await Request.put(`http://localhost:3000/books/${id}`, bookObj);
    display();
  }
  static async deleteBook(id) {
    await Request.deleteBook(`http://localhost:3000/books/${id}`);
    display();
  }
}

