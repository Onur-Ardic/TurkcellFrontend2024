class Book {
    constructor(title, author, category, year, cover) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.year = year;
        this.cover = cover;
    }
}

let books = [];

document.addEventListener("DOMContentLoaded", function () {
    loadBooks();
    document.getElementById('bookForm').addEventListener('submit', addBook);
    document.getElementById('searchInput').addEventListener('input', filterBooks);
    document.getElementById('categoryFilter').addEventListener('change', filterBooks);
    document.getElementById('authorFilter').addEventListener('change', filterBooks);
    document.getElementById('sortOrder').addEventListener('change', sortBooks);
});

function loadBooks() {
    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data => {
            books = data;
            displayBooks();
            populateFilters();
        });
}

function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('col-md-4', 'book-card');
        bookCard.innerHTML = `
            <div class="card">
                <img src="${book.cover}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.author}</p>
                    <p class="card-text">${book.category}</p>
                    <p class="card-text">${book.year}</p>
                    <button class="btn btn-primary" onclick="editBook(${book.id})">Düzenle</button>
                    <button class="btn btn-danger" onclick="deleteBook(${book.id})">Sil</button>
                </div>
            </div>
        `;
        bookList.appendChild(bookCard);
    });
}

function addBook(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const category = document.getElementById('category').value;
    const year = document.getElementById('year').value;
    const cover = document.getElementById('cover').value;

    const newBook = new Book(title, author, category, year, cover);

    fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    })
        .then(response => response.json())
        .then(data => {
            books.push(data);
            displayBooks();
            $('#bookModal').modal('hide');
            document.getElementById('bookForm').reset();
        });
}

function deleteBook(id) {
    fetch(`http://localhost:3000/books/${id}`, {
        method: 'DELETE'
    })
        .then(() => {
            books = books.filter(book => book.id !== id);
            displayBooks();
        });
}

function editBook(id) {
    const book = books.find(book => book.id === id);
    document.getElementById('title').value = book.title;
    document.getElementById('author').value = book.author;
    document.getElementById('category').value = book.category;
    document.getElementById('year').value = book.year;
    document.getElementById('cover').value = book.cover;

    document.getElementById('bookForm').onsubmit = function (e) {
        e.preventDefault();
        updateBook(id);
    };
    $('#bookModal').modal('show');
}

function updateBook(id) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const category = document.getElementById('category').value;
    const year = document.getElementById('year').value;
    const cover = document.getElementById('cover').value;

    const updatedBook = new Book(title, author, category, year, cover);

    fetch(`http://localhost:3000/books/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedBook)
    })
        .then(response => response.json())
        .then(data => {
            const index = books.findIndex(book => book.id === id);
            books[index] = data;
            displayBooks();
            $('#bookModal').modal('hide');
            document.getElementById('bookForm').reset();
            document.getElementById('bookForm').onsubmit = addBook;
        });
}

function filterBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const authorFilter = document.getElementById('authorFilter').value;

    let filteredBooks = books.filter(book => {
        return (book.title.toLowerCase().includes(searchInput) || book.author.toLowerCase().includes(searchInput))
            && (categoryFilter ? book.category === categoryFilter : true)
            && (authorFilter ? book.author === authorFilter : true);
    });

    displayFilteredBooks(filteredBooks);
}

function displayFilteredBooks(filteredBooks) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('col-md-4', 'book-card');
        bookCard.innerHTML = `
            <div class="card">
                <img src="${book.cover}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.author}</p>
                    <p class="card-text">${book.category}</p>
                    <p class="card-text">${book.year}</p>
                    <button class="btn btn-primary" onclick="editBook(${book.id})">Düzenle</button>
                    <button class="btn btn-danger" onclick="deleteBook(${book.id})">Sil</button>
                </div>
            </div>
        `;
        bookList.appendChild(bookCard);
    });
}

function sortBooks() {
    const sortOrder = document.getElementById('sortOrder').value;
    books.sort((a, b) => {
        if (sortOrder === 'az') {
            return a.title.localeCompare(b.title);
        } else if (sortOrder === 'za') {
            return b.title.localeCompare(a.title);
        } else if (sortOrder === 'date') {
            return new Date(b.year) - new Date(a.year);
        }
    });
    displayBooks();
}

function populateFilters() {
    const categories = [...new Set(books.map(book => book.category))];
    const authors = [...new Set(books.map(book => book.author))];

    const categoryFilter = document.getElementById('categoryFilter');
    const authorFilter = document.getElementById('authorFilter');

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    authors.forEach(author => {
        const option = document.createElement('option');
        option.value = author;
        option.textContent = author;
        authorFilter.appendChild(option);
    });
}