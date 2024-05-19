
class Book {
  constructor(image, bookname, author, date, categories,id) {
      this.image = image;
      this.bookname = bookname;
      this.author = author;
      this.date = date;
      this.categories = categories;
      this.id = crypto.randomUUID();
  }
  
}


class UI {
  createCard(book) {

     const booklist = document.getElementById("booklist");
      const card = document.createElement("div");
      card.classList.add("card", "mb-3");
      card.style.maxWidth = "240px";

      const row = document.createElement("div");
      row.classList.add("row", "g-0");

      const imgDiv = document.createElement("div");
      imgDiv.classList.add("col-md-6");

      const img = document.createElement("img");
      img.classList.add("img-fluid", "rounded-start");
      img.src = book.image;

      const textDiv = document.createElement("div");
      textDiv.classList.add("col-md-6");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.innerText = book.bookname;

      const author = document.createElement("p");
      author.classList.add("card-text");
      author.innerText = book.author;

      const date = document.createElement("p");
      date.classList.add("card-text");
      date.innerText = book.date;

      const categories = document.createElement("p");
      categories.classList.add("card-text");
      categories.innerText = book.categories;

      const buttonDiv = document.createElement("div");

      const buttonUpdate = document.createElement("button");
      buttonUpdate.classList.add("btn", "btn-success" , "my-3" , "btn-sm");
      buttonUpdate.textContent = "Güncelle";

      const buttonDelete = document.createElement('button');
      buttonDelete.classList.add("btn", "btn-danger" , "btn-sm");
      buttonDelete.textContent = "Sil";

      imgDiv.appendChild(img);
      row.appendChild(imgDiv);
      cardBody.appendChild(title);
      cardBody.appendChild(author);
      cardBody.appendChild(date);
      cardBody.appendChild(categories);
      buttonDiv.appendChild(buttonUpdate);
      buttonDiv.appendChild(buttonDelete);
      cardBody.appendChild(buttonDiv);
      textDiv.appendChild(cardBody);
      row.appendChild(textDiv);
      card.appendChild(row);
      booklist.appendChild(card);

    // const formLibrary = document.getElementById("booklist");

    // const kitabıgor = document.createElement("div");

    // kitabıgor.innerHTML = `
    // <div class="card mb-3" style="max-width: 540px;">
    //   <div class="row g-0">
    //     <div class="col-md-4">
    //       <img src="${book.image}" class="img-fluid rounded-start" alt="...">
    //     </div>
    //     <div class="col-md-8">
    //       <div class="card-body">
    //         <h5 class="card-title">${book.bookname}</h5>
    //         <p class="card-text">${book.author}</p>
    //         <p class="card-text"><small class="text-body-secondary">${book.date}</small></p>
    //       </div>
    //     </div>
    //     </div> `;
    // formLibrary.appendChild(kitabıgor);
    
    }
    clearInput() {
      document.getElementById("imageInput").value = "";
      document.getElementById("bookName").value = "";
      document.getElementById("bookAuthor").value = "";
      document.getElementById("bookDate").value = "";
      document.getElementById("categoriesInput").value = "";
  };


 }

document.getElementById("formKitap").addEventListener("submit",function (e) {
  e.preventDefault();
  console.log("Form submitted");
  
  const image = document.getElementById("imageInput").value;
  const bookname = document.getElementById("bookName").value;
  const author = document.getElementById("bookAuthor").value;
  const date = document.getElementById("bookDate").value;
  const categories = document.getElementById("categoriesInput").value;

  console.log("Values:", image, bookname, author, date, categories);

  const book = new Book(image, bookname, author, date, categories);

  const ui = new UI();
  ui.createCard(book);
  ui.clearInput();
  console.log("Card created");

  // function getJsonFile(url) {
  //   fetch("http://localhost:3000/books")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }
  
  // getJsonFile();
  
  Request.post("http://localhost:3000/books",book);

  // // var jsonveri = JSON.stringify(book);
  // // var veri = JSON.parse(jsonveri);
  // // alert ("Kitabını Başarıyla Eklenmiştir.");

  // getJsonFile();


});
Request.get("http://localhost:3000");



