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
    var booksDiv = document.getElementById("books");
    booksDiv.innerHTML = "";
    booksDiv.className = "d-flex flex-wrap gap-3";

    books.forEach((book) => {
      let bookDiv = document.createElement("div");
      bookDiv.className = "card border-0 text-secondary shadow-sm";
      bookDiv.style.width = "15rem";
      bookDiv.style.backgroundImage = `url(${book.imgUrl})`;
      bookDiv.style.backgroundSize = "cover";
      bookDiv.style.color = "white"; 

      let bookName = document.createElement("h4");
      bookName.className = "text-danger"
      let author = document.createElement("p");
      let publishDate = document.createElement("p");
      let category = document.createElement("p");
      let imgUrl = document.createElement("img");
      let deleteButton = document.createElement("button");
      deleteButton.id = "deleteButton";

      bookName.innerHTML = book.BookName;
      author.innerHTML = book.Author;
      publishDate.innerHTML = book.PublishedDate;
      category.innerHTML = book.Category;
      imgUrl.innerHTML = book.imgUrl

      deleteButton.innerText = "Delete";
      deleteButton.className = "btn w-50 btn-outline-warning";
      deleteButton.addEventListener("click", 
      (e) => {
        e.preventDefault();
        this.deleteBook(book.id);
      });
      // deleteButton.addEventListener("click", (e) => {
      //   Book.deleteBook(book);
      // });

      bookDiv.appendChild(bookName);
      bookDiv.appendChild(author);
      bookDiv.appendChild(category);
      bookDiv.appendChild(publishDate);
      bookDiv.appendChild(imgUrl);
      bookDiv.appendChild(deleteButton);
      booksDiv.appendChild(bookDiv);
      return ;
    });
  }


  static removeinput(){
    let bookName = document.getElementById("bookName").value = "";
    let author = document.getElementById("author").value = "";
    let publishedDate = document.getElementById("publishedDate").value = "";
    let category = document.getElementById("category").value = "";
    let imgUrl = document.getElementById("imgUrl").value = "";
  }

  static updateBook(id) {
    const bookObj = {
      "BookName": bookName,
      "Author": author,
      "Category": category,
      "PublishedDate": publishedDate,
      "imgUrl": imgUrl
    };
    return Request.put("http://localhost:3000/books")
      .then((data) => resolve(data))
      .catch((err) => reject(err, "Hata Alındı."));
  }


  static deleteBook (id) {
  const bookObj = {
    "BookName": bookName,
    "Author": author,
    "Category": category,
    "PublishedDate": publishedDate,
    "imgUrl": imgUrl
  };
  
  const book = Request.deleteBook(`http://localhost:3000/books/${id}`);

  display();
}
}

