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

  // static saveBook(bookName, author, category, publishedDate, imgUrl) {
  //   let bookName = document.getElementById("#bookName").value;
  //   let author = document.getElementById("#author").value;
  //   let publishedDate = document.getElementById("#publishedDate").value;
  //   let imgUrl = document.getElementById("#imgUrl").value;
  //   let category = document.getElementById("#category").value;
  //   const bookObj1 = {
  //     BookName: bookName,
  //     Author: author.value,
  //     Category: category,
  //     PublishedDate: publishedDate,
  //     ImageUrl: imgUrl
  //   };
    // books.forEach((book) => {});
  // }

  static showBooks(books) {
    var booksDiv = document.getElementById("books");
    booksDiv.innerHTML = "";
    booksDiv.className = "d-flex flex-wrap gap-3";
    

    books.forEach((book) => {
      let bookDiv = document.createElement("div");
      bookDiv.className = "card bg-dark border-0 text-secondary shadow-sm";
      bookDiv.style.width = "10rem";
      bookDiv.style.backgroundImage = `url(${book.ImgUrl})`;
      bookDiv.style.backgroundSize = "cover";
      bookDiv.style.backgroundPosition = "center";
      bookDiv.style.color = "white"; 

      let bookName = document.createElement("h4");
      bookName.className = "text-danger"
      let author = document.createElement("p");
      let publishDate = document.createElement("p");
      let category = document.createElement("p");
      let imgUrl = document.createElement("img");
      let deleteButton = document.createElement("button");

      bookName.innerHTML = book.BookName;
      author.innerHTML = book.Author;
      publishDate.innerHTML = book.PublishedDate;
      category.innerHTML = book.Category;
      imgUrl.innerHTML = book.imgUrl

      deleteButton.innerText = "Delete";
      deleteButton.className = "btn w-50 btn-outline-warning";

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

    });
  }

  static updateBook(id) {
    let bookObj = {
      BookName: bookName,
      Author: author,
      Category: category,
      PublishedDate: publishedDate,
    };
    return Request.put("http://localhost:3000/books")
      .then((data) => resolve(data))
      .catch((err) => reject(err, "Hata Alındı."));
  }
}

