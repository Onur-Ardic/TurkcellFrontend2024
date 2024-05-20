document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
  setupFilters();
});

function fetchBooks() {
  fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(books => {
      displayBooks(books);
    });
}

function displayBooks(books) {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  books.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('col-md-3', 'mb-4');
    bookCard.innerHTML = `
      <div class="card">
        <img src="${book.cover}" class="card-img-top" alt="${book.title}">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">${book.author}</p>
          <p class="card-text"><small class="text-muted">${book.category} | ${book.year}</small></p>
          <button class="btn btn-danger btn-sm" onclick="deleteBook('${book.id}')">Sil</button>
          <button class="btn btn-secondary btn-sm" onclick="openEditModal('${book.id}')">Düzenle</button>
        </div>
      </div>
    `;
    bookList.appendChild(bookCard);
  });
}

function setupFilters() {
  document.getElementById('search').addEventListener('input', filterBooks);
  document.getElementById('filter-category').addEventListener('change', filterBooks);
  document.getElementById('filter-author').addEventListener('change', filterBooks);
  document.getElementById('sort-books').addEventListener('change', sortBooks);
}

function filterBooks() {
  const search = document.getElementById('search').value.toLowerCase();
  const category = document.getElementById('filter-category').value;
  const author = document.getElementById('filter-author').value;

  fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(books => {
      let filteredBooks = books;

      if (search) {
        filteredBooks = filteredBooks.filter(book => 
          book.title.toLowerCase().includes(search) || book.author.toLowerCase().includes(search)
        );
      }

      if (category) {
        filteredBooks = filteredBooks.filter(book => book.category === category);
      }

      if (author) {
        filteredBooks = filteredBooks.filter(book => book.author === author);
      }

      displayBooks(filteredBooks);
    });
}

function sortBooks() {
  const sortValue = document.getElementById('sort-books').value;

  fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(books => {
      let sortedBooks = books;

      if (sortValue === 'az') {
        sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortValue === 'za') {
        sortedBooks = books.sort((a, b) => b.title.localeCompare(a.title));
      } else if (sortValue === 'date') {
        sortedBooks = books.sort((a, b) => new Date(b.year) - new Date(a.year));
      }

      displayBooks(sortedBooks);
    });
}

function openEditModal(id) {
  fetch(`http://localhost:3000/books/${id}`)
    .then(response => response.json())
    .then(book => {
      document.getElementById('modalTitle').textContent = 'Kitap Güncelle';
      document.getElementById('title').value = book.title;
      document.getElementById('author').value = book.author;
      document.getElementById('category').value = book.category;
      document.getElementById('year').value = book.year;
      document.getElementById('cover').value = book.cover;

      document.getElementById('book-form').onsubmit = function (e) {
        e.preventDefault();
        updateBook(id);
      };

      $('#bookModal').modal('show');
    });
}

function updateBook(id) {
  const updatedBook = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    category: document.getElementById('category').value,
    year: document.getElementById('year').value,
    cover: document.getElementById('cover').value
  };

  fetch(`http://localhost:3000/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedBook)
  })
  .then(response => response.json())
  .then(() => {
    $('#bookModal').modal('hide');
    fetchBooks();
    showAlert('Kitap başarıyla güncellendi!', 'success');
  });
}

document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (document.getElementById('modalTitle').textContent === 'Kitap Ekle') {
    addBook();
  }
});

function addBook() {
  const newBook = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    category: document.getElementById('category').value,
    year: document.getElementById('year').value,
    cover: document.getElementById('cover').value
  };

  fetch('http://localhost:3000/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBook)
  })
  .then(response => response.json())
  .then(book => {
    $('#bookModal').modal('hide');
    fetchBooks();
    showAlert('Kitap başarıyla eklendi!', 'success');
  });
}

function deleteBook(id) {
  fetch(`http://localhost:3000/books/${id}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(() => {
    fetchBooks();
    showAlert('Kitap başarıyla silindi!', 'danger');
  });
}

function showAlert(message, type) {
  const alertContainer = document.getElementById('alert-container');
  alertContainer.className = `alert alert-${type}`;
  alertContainer.textContent = message;
  alertContainer.style.display = 'block';
  
  setTimeout(() => {
    alertContainer.style.display = 'none';
  }, 3000);
}