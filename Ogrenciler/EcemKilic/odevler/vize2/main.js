class Book {
    constructor(title, author, category, year, cover) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.year = year;
        this.cover = cover;
    }
}

class BookCard {
    constructor(book) {
        this.book = book;
    }

    createCard() {
        const bookCard = document.createElement('div');
        bookCard.classList.add('col-md-4', 'book-card');

        const card = document.createElement('div');
        card.classList.add('card', 'h-100');

        const img = document.createElement('img');
        img.src = this.book.cover;
        img.alt = this.book.title;
        img.classList.add('card-img-top', 'img-fluid');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = this.book.title;

        const author = document.createElement('p');
        author.classList.add('card-text');
        author.textContent = this.book.author;

        const category = document.createElement('p');
        category.classList.add('card-text');
        category.textContent = this.book.category;

        const year = document.createElement('p');
        year.classList.add('card-text');
        year.textContent = this.book.year;

        const editButton = document.createElement('button');
        editButton.classList.add('btn', 'btn-dark', 'edit-btn');
        editButton.textContent = 'Düzenle';
        editButton.onclick = () => editBook(this.book.id);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-dark', 'delete-btn', 'mt-5');
        deleteButton.textContent = 'Sil';
        deleteButton.onclick = () => deleteBook(this.book.id);

        cardBody.appendChild(title);
        cardBody.appendChild(author);
        cardBody.appendChild(category);
        cardBody.appendChild(year);

        card.appendChild(img);
        card.appendChild(cardBody);
        card.appendChild(editButton);
        card.appendChild(deleteButton);

        bookCard.appendChild(card);

        return bookCard;
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
        const bookCard = new BookCard(book);
        bookList.appendChild(bookCard.createCard());
    });
}

function displayFilteredBooks(filteredBooks) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    filteredBooks.forEach(book => {
        const bookCard = new BookCard(book);
        bookList.appendChild(bookCard.createCard());
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('addBookButton').addEventListener('click', openAddBookModal);
});

function openAddBookModal() {
    const modal = new bootstrap.Modal(document.getElementById('bookModal'));
    modal.show();
    
    document.getElementById('bookForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addBook();
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

// function editBook(id) {
//     const book = books.find(book => book.id === id);
//     if (!book) {
//         alert("Kitap bulunamadı.");
//         return;
//     }

//     // Modal içerisindeki input alanlarına kitap bilgilerini doldur
//     document.getElementById('editTitle').value = book.title;
//     document.getElementById('editAuthor').value = book.author;
//     document.getElementById('editCategory').value = book.category;
//     document.getElementById('editYear').value = book.year;
//     document.getElementById('editCover').value = book.cover;

//     // Modalı aç
//     const modal = new bootstrap.Modal(document.getElementById('editBookModal'));
//     modal.show();

//     // Düzenleme formunu submit ettiğimizde kitap bilgilerini güncelle
//     document.getElementById('editBookForm').addEventListener('submit', function(e) {
//         e.preventDefault();

//         const updatedBook = {
//             id: book.id, // Kitap ID'si değişmemeli
//             title: document.getElementById('editTitle').value,
//             author: document.getElementById('editAuthor').value,
//             category: document.getElementById('editCategory').value,
//             year: document.getElementById('editYear').value,
//             cover: document.getElementById('editCover').value
//         };

//         // Kitap bilgilerini güncelle
//         fetch(`http://localhost:3000/books/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(updatedBook)
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Veri setindeki kitabın bilgilerini güncelle
//             const index = books.findIndex(book => book.id === id);
//             if (index !== -1) {
//                 books[index] = updatedBook;
//                 displayBooks();
//             }

//             // Modalı kapat
//             modal.hide();
//         })
//         .catch(error => {
//             alert('Kitap güncellenirken bir hata oluştu: ' + error);
//         });
//     });
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const editButtons = document.querySelectorAll('.edit-btn');
//     editButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const bookId = this.dataset.bookId;
//             editBook(bookId);
//         });
//     });
// });

function deleteBook(id) {
    fetch(`http://localhost:3000/books/${id}`, {
        method: 'DELETE'
    })
        .then(() => {
            books = books.filter(book => book.id !== id);
            displayBooks();
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