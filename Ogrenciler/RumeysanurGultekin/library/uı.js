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
    clearInput() {
      document.getElementById("imageInput").value = "";
      document.getElementById("bookName").value = "";
      document.getElementById("bookAuthor").value = "";
      document.getElementById("bookDate").value = "";
      document.getElementById("categoriesInput").value = "";
  };

    
    createCard(book) {
       const booklist = document.getElementById("booklist");
        const card = document.createElement("div");
        card.classList.add("card", "border" , "bg-warning" , "col-4", "m-1");
        card.style.maxWidth = "350px";
        card.style.maxHeight = "230px"
  
        const row = document.createElement("div");
        row.classList.add("row", "g-0");
  
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("col-md-6");
  
        const img = document.createElement("img");
        img.classList.add("img-fluid", "rounded-start" , "h-75");
        img.src = book.image;
  
        const textDiv = document.createElement("div");
        textDiv.classList.add("col-md-6");
  
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
  
        const title = document.createElement("p");
        title.classList.add("card-title" , "fs-5" , "fw-bold");
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
        
        buttonUpdate.addEventListener('click', function() {
          const modal = new bootstrap.Modal(document.getElementById('exampleModalLong'));
          modal.show();
      
          // Kartın verilerini modal forma doldur
          document.getElementById('imageInput').value = book.image;
          document.getElementById('bookName').value = book.bookname;
          document.getElementById('bookAuthor').value = book.author;
          document.getElementById('bookDate').value = book.date;
          document.getElementById('categoriesInput').value = book.categories;
      
          // Modal gizlendiğinde içeriği temizle
          modal.addEventListener('hidden.bs.modal', function () {
              // Formu temizle
              clearInput();
          });
      
          // Güncelleme işlemini gerçekleştir
          document.getElementById('addBook').addEventListener('click', function(e) {
              e.preventDefault();
      
              const updatedData = {
                  image: document.getElementById('imageInput').value,
                  bookname: document.getElementById('bookName').value,
                  author: document.getElementById('bookAuthor').value,
                  date: document.getElementById('bookDate').value,
                  categories: document.getElementById('categoriesInput').value
              };
      
              // Yeni kartı ekle
              const ui = new UI();
              ui.createCard(updatedData);
          });
      });
        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add("btn", "btn-danger" , "btn-sm");
        buttonDelete.textContent = "Sil";

        buttonDelete.addEventListener('click', function() {
          card.remove(); 
          Request.delete("http://localhost:3000/books", book.id); 
      });

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
      } 

    clearBookOnPage() {
      const bookList = document.getElementById("booklist");
      bookList.innerHTML = "";
    }  
  }