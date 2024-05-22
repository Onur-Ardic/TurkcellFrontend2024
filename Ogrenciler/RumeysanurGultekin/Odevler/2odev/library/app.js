

document.getElementById("formKitap").addEventListener("submit",function (e) {
    e.preventDefault();
    
    const image = document.getElementById("imageInput").value;
    const bookname = document.getElementById("bookName").value;
    const author = document.getElementById("bookAuthor").value;
    const date = document.getElementById("bookDate").value;
    const categories = document.getElementById("categoriesInput").value;
  
    console.log("Values:", image, bookname, author, date, categories);
  
    const book = new Book(image, bookname, author, date, categories);
    console.log(book);
    
    const ui = new UI();
    ui.createCard(book);
    ui.clearInput();
    console.log("Card created");
  
    
    Request.post("http://localhost:3000/books",book);
  
  });
  
  
  Request.get("http://localhost:3000/books");
  