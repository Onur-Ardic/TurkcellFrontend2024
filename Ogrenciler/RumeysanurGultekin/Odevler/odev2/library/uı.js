class Book {
    constructor(image, bookname, author, date, categories,id) {
        this.image = image;
        this.bookname = bookname;
        this.author = author;
        this.date = date;
        this.categories = categories;
        this.id = id;
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
      card.classList.add("card", "border" , "bg-warning" , "col-4", "m-1" , "flex-wrap");
      card.style.maxWidth = "350px";
      card.style.maxHeight = "230px"

      const row = document.createElement("div");
      row.classList.add("row", "g-0");

      const imgDiv = document.createElement("div");
      imgDiv.classList.add("col-md-5");

      const img = document.createElement("img");
      img.classList.add("img-fluid", "rounded-start" , "h-75" , "py-2" ,"mt-3");
      img.src = book.image;

      const textDiv = document.createElement("div");
      textDiv.classList.add("col-md-7");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const title = document.createElement("p");
      title.classList.add("card-title" , "fs-5" , "fw-bold",  "my-1");
      title.innerText = book.bookname;

      const author = document.createElement("p");
      author.classList.add("card-text" ,  "my-1" );
      author.innerText = book.author;

      const date = document.createElement("p");
      date.classList.add("card-text" , "my-1");
      date.innerText = book.date;

      const categories = document.createElement("p");
      categories.classList.add("card-text", "my-1");
      categories.innerText = book.categories;
  
      const buttonDiv = document.createElement("div");
  
      const buttonUpdate = document.createElement("button");
      buttonUpdate.classList.add("btn", "btn-success" , "my-3" , "btn-sm",  "btn-sm" , "me-3");
      buttonUpdate.id="buttonUpdated"
      buttonUpdate.textContent = "Güncelle";
      buttonUpdate.setAttribute('data-bs-toggle', 'modal')
      buttonUpdate.setAttribute('data-bs-target', '#modalAc')
      buttonUpdate.setAttribute("onclick" , `selectedbook(new Book ('${book.image}', '${book.bookname}', '${book.author}', '${book.date}', '${book.categories}', '${book.id}'))`);
      
      

      buttonUpdate.addEventListener("click", (() => {
        document.querySelector("#ModalKitapEkle").click();
        document.getElementById("imageInput").value = book.image;
        document.getElementById("bookName").value = book.bookname;
        document.getElementById("bookAuthor").value = book.author;
        document.getElementById("bookDate").value = book.date;
        document.getElementById("categoriesInput").value = book.categories;
  
        const kitapekle = document.getElementById("addBook")
        const updateBook = document.getElementById("updateBook")
  
        kitapekle.style.display = "none";
        updateBook.style.display = "block";
        updateBook.removeAttribute("disabled");

        
  
      }));

        

        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add("btn", "btn-danger" , "btn-sm", );
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
let editId

function selectedbook(book){
  document.querySelector("#ModalKitapEkle").click();
  document.getElementById("imageInput").value = book.image;
  document.getElementById("bookName").value = book.bookname;
  document.getElementById("bookAuthor").value = book.author;
  document.getElementById("bookDate").value = book.date;
  document.getElementById("categoriesInput").value = book.categories;

  editId = book.id;

}
 