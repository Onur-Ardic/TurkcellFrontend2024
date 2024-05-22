class UI {
    constructor(){
        this.bookName = document.querySelector("#bookName");
        this.author = document.querySelector("#author");
        this.date = document.querySelector("#date");
        this.imgUrl = document.querySelector("#imgUrl");
        this.category = document.querySelector("#category");
        this.bookForm = document.querySelector("#bookForm");
        this.listBooks = document.querySelector("#listBooks .row");
        this.bookForm = document.querySelector("#bookForm");
        this.bookAdd = document.querySelector("#bookAdd");
        this.bookAddBtn = document.querySelector("#bookAddBtn");
        this.sort = document.querySelector("#sort");
        this.searchName = document.querySelector("#searchName");
        this.searchAuthor = document.querySelector("#searchAuthor");
        this.searchCategory = document.querySelector("#searchCategory");
        this.errorDiv = document.querySelector("#error");
    }

    displayBooks(books){
        this.listBooks.textContent = "";
        books.forEach((book) => {

            const div = document.createElement("div");
            div.id = book.id;
            div.classList.add("col", "my-2");

            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            div.appendChild(cardDiv);

            const imageDiv = document.createElement("div");
            imageDiv.classList.add("text-center");
            cardDiv.appendChild(imageDiv);

            const img = document.createElement("img");
            img.src = book.imgUrl;
            imageDiv.appendChild(img);

            const buttonDiv = document.createElement("div");
            buttonDiv.classList.add("position-absolute", "bottom-0", "end-0");
            imageDiv.appendChild(buttonDiv);

            const editButton = document.createElement("button");
            editButton.classList.add("btn", "btn-warning" ,"me-1");
            editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
            editButton.onclick = function() {
                selectedBook(new Book(book.id, book.name, book.author, book.category, book.date, book.imgUrl));
            };
            buttonDiv.appendChild(editButton);

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("btn", "btn-danger");
            deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            deleteButton.onclick = function() {
                deleteBook(book.id);
            };
            buttonDiv.appendChild(deleteButton);

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            cardDiv.appendChild(cardBody);

            const bookName = document.createElement("h5");
            bookName.classList.add("text-truncate");
            bookName.innerText = "Book Name: " + book.name;
            cardBody.appendChild(bookName);

            const author = document.createElement("p");
            author.classList.add("text-truncate", "mb-0");
            author.innerText = "Author: " + book.author;
            cardBody.appendChild(author);

            const category = document.createElement("p");
            category.classList.add("text-truncate", "mb-0");
            category.innerText = "Category: " + book.category;
            cardBody.appendChild(category);

            const date = document.createElement("p");
            date.classList.add("text-truncate", "mb-0");
            date.innerText = "Date: " + book.date;
            cardBody.appendChild(date);

            this.listBooks.appendChild(div);
        });
    }
    error(err){
        this.errorDiv.classList.add("show");
        this.errorDiv.textContent = err;
        setTimeout(() => {
            this.errorDiv.classList.remove("show");
        }, 5000);
    }
}