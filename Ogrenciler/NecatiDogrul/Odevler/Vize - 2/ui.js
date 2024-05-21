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
        const cardId = `book-${book.id}`;
        deleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.deleteBook(book.id);
        });
        const updateButton = this.createElement('a', ['btn', 'btn-primary', 'btn-sm'], [], 'Update');
        updateButton.addEventListener('click', () => {
            this.showUpdateModal(book);
        });
        const cardBody = this.createElement('div', ['card-body', 'col-md-6', 'p-md-2', 'my-auto'], [title, author, category, publishedDate, deleteButton, updateButton]);

        const imageDiv = this.createElement('div', ['col-md-6'], [coverImage]);
        const row = this.createElement('div', ['row', 'my-auto'], [imageDiv, cardBody]);
        const card = this.createElement('div', ['card', 'col-md-3'], [row]);
        card.setAttribute('data-id', book.id);
        cards.appendChild(card);
    }

    static displayBooks() {
        Request.get('http://localhost:3000/books')
            .then(books => {
                books.forEach(book => {
                    const newBook = new Book(book.id, book.title, book.author, book.category, book.publishedDate, book.coverImageUrl);
                    UI.addBookToUI(newBook);
                });
            });
    }

    static deleteBook(id) {
        Request.delete(`http://localhost:3000/books/${id}`)
            .then(response => {
                if (response.ok) {
                    this.removeBookFromUI(id);
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
        const bookCardToRemove = bookCards.find(bookCard => bookCard.dataset.id == id);
        if (bookCardToRemove) {
            cards.removeChild(bookCardToRemove);
        }
    }

    static async getBookCount() {
        const allBooks = await Request.get('http://localhost:3000/books');
        return allBooks.length;
    }

    static async createBook(book) {
        return Request.post('http://localhost:3000/books', book)
            .then(response => {
                console.log(`Book with ID ${response.id} has been created`);
                return response;
            })
            .catch(err => {
                console.log(err);
            });
    }

        static showUpdateModal(book) {
        document.querySelector('#updateTitle').value = book.title;
        document.querySelector('#updateAuthor').value = book.author;
        document.querySelector('#updateCategory').value = book.category;
        document.querySelector('#updatePublishedDate').value = book.publishedDate;
        document.querySelector('#updateCoverImageUrl').value = book.coverImageUrl;
        document.querySelector('#updateBookButton').setAttribute('data-id', book.id);
        new bootstrap.Modal(document.getElementById('updateModal')).show();
    }

    static updateBook(id, updatedBook) {
        Request.put(`http://localhost:3000/books/${id}`, updatedBook)
            .then(response => {
                console.log(`Book with ID ${id} has been updated`);
                document.querySelector('#cards').textContent = '';
                UI.displayBooks();
            })
            .catch(err => {
                console.log(err);
            });
    }

    
}

document.querySelector('#updateForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.querySelector('#updateBookButton').getAttribute('data-id');
    const title = document.querySelector('#updateTitle').value;
    const author = document.querySelector('#updateAuthor').value;
    const category = document.querySelector('#updateCategory').value;
    const publishedDate = document.querySelector('#updatePublishedDate').value;
    const coverImageUrl = document.querySelector('#updateCoverImageUrl').value;
    const updatedBook = { id, title, author, category, publishedDate, coverImageUrl };
    UI.updateBook(id, updatedBook);
});

document.querySelector('#filterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const category = document.querySelector('#filterCategory').value;
    const author = document.querySelector('#filterAuthor').value;
    UI.filterBooks(category, author);
});





