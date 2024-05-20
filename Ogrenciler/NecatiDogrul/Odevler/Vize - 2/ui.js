class UI {
    static createElement(tag, classes = [], appendChilds = [], textContent) {
        const element = document.createElement(tag);
        element.textContent = textContent;
        classes.forEach((className) => element.classList.add(className));
        appendChilds.forEach((appendChild) => element.appendChild(appendChild));
        return element;
    }

    static addBookToUI(book) {
        const cards = document.querySelector('#cards');
        
        const coverImage = this.createElement('img', ['card-img-top', 'img-fluid']);
        coverImage.src = book.coverImageUrl;
        
        const title = this.createElement('h5', ['card-title'], [], book.title);
        const author = this.createElement('p', ['card-text'], [], book.author);
        const category = this.createElement('p', ['card-text'], [], book.category);
        const publishedDate = this.createElement('p', ['card-text'], [], book.publishedDate);
        const deleteButton = this.createElement('button', ['btn', 'btn-danger', 'btn-sm'], [], 'Delete');

        deleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.removeBookFromUI(book.id);
            this.deleteBook(book.id);
        });

        deleteButton.addEventListener('click', () => {
            this.deleteBook(book.id);
        });

        const updateButton = this.createElement('a', ['btn', 'btn-primary', 'btn-sm'], [], 'Update');

        
        const cardBody = this.createElement('div', ['card-body', 'col-md-6', 'p-md-2', 'my-auto'], [title, author, category, publishedDate, deleteButton, updateButton]);
        
        const imageDiv = this.createElement('div', ['col-md-6'], [coverImage]);
        const row = this.createElement('div', ['row', 'my-auto'], [imageDiv, cardBody]);
        
        const card = this.createElement('div', ['card', 'col-md-4'], [row]);
        cards.appendChild(card);
    }

    static displayBooks(){
        Request.get('http://localhost:3000/books')
            .then(books =>{
                books.forEach(book => {
                    const newBook = new Book(book.id, book.title, book.author, book.category, book.publishedDate, book.coverImageUrl);
                    UI.addBookToUI(newBook);
                });
            })
    }

    static deleteBook(id) {
        Request.delete(id)
            .then(response => {
                if (response.ok) {
                    console.log(`Book with ID ${id} has been deleted`);
                    
                } else {
                    console.log(`Failed to delete book with ID ${id}`);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    static removeBookFromUI(id) {
        const cards = document.querySelector('#cards');
        const bookCards = Array.from(document.getElementsByClassName('card'));
        const bookCardToRemove = bookCards.find(bookCard => bookCard.dataset.id === id);
        if (bookCardToRemove) {
            cards.removeChild(bookCardToRemove);
        }
    }

    static updateBook(id, book) {
        Request.put(`http://localhost:3000/books/${id}`, book)
            .then(response => {
                if (response.ok) {
                    console.log(`Book with ID ${id} has been updated`);
                } else {
                    console.log(`Failed to update book with ID ${id}`);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}


