class UI {
  constructor() {
    this.bookList = document.getElementById('book-list');
    this.alertContainer = document.getElementById('alert-container');
  }

  displayBooks(books) {
    this.bookList.innerHTML = '';

    books.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.className = 'col-md-3 mb-4';
      bookCard.innerHTML = `
        <div class="card h-100">
          <img src="${book.cover}" class="card-img-top" alt="${book.title}">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Yazar: ${book.author}</p>
            <p class="card-text">Kategori: ${book.category}</p>
            <p class="card-text">Yazıldığı Tarih: ${book.year}</p>
            <button class="btn btn-danger btn-delete" data-id="${book.id}">Sil</button>
            <button class="btn btn-primary btn-edit" data-id="${book.id}" data-toggle="modal" data-target="#bookModal">Düzenle</button>
          </div>
        </div>
      `;
      this.bookList.appendChild(bookCard);
    });

    this.setupEditButtons();
    this.setupDeleteButtons();
  }

  showAlert(message, className) {
    this.alertContainer.className = `alert alert-${className}`;
    this.alertContainer.textContent = message;
    this.alertContainer.style.display = 'block';

    setTimeout(() => {
      this.alertContainer.style.display = 'none';
    }, 3000);
  }

  clearForm() {
    document.getElementById('book-id').value = '';
    document.getElementById('book-form').reset();
  }

  setupFilters(filter) {
    document.getElementById('search').addEventListener('input', () => filter.filterBooks());
    document.getElementById('filter-category').addEventListener('change', () => filter.filterBooks());
    document.getElementById('filter-author').addEventListener('change', () => filter.filterBooks());
    document.getElementById('sort-books').addEventListener('change', () => filter.sortBooks());
  }

  setupEditButtons() {
    const editButtons = document.querySelectorAll('.btn-edit');
    editButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        this.fillFormWithBook(id);
      });
    });
  }

  setupDeleteButtons() {
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        this.deleteBook(id);
      });
    });
  }

  fillFormWithBook(id) {
    fetch(`http://localhost:3000/books/${id}`)
      .then(response => response.json())
      .then(book => {
        document.getElementById('book-id').value = book.id;
        document.getElementById('title').value = book.title;
        document.getElementById('author').value = book.author;
        document.getElementById('category').value = book.category;
        document.getElementById('year').value = book.year;
        document.getElementById('cover').value = book.cover;

        $('#bookModal').modal('show');
      })
      .catch(error => console.error('Error fetching book:', error));
  }

  deleteBook(id) {
    fetch(`http://localhost:3000/books/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      this.showAlert('Kitap silindi', 'success');
      this.fetchBooksAndDisplay();
    })
    .catch(error => {
      console.error('Error deleting book:', error);
      this.showAlert('Kitap silinirken bir hata oluştu', 'danger');
    });
  }

  fetchBooksAndDisplay() {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(books => {
        const filter = new Filter();
        filter.setBooks(books);
        this.displayBooks(books);
        this.setupFilters(filter);
      })
      .catch(error => console.error('Error fetching books:', error));
  }
}

// Modal açıldığında formun sıfırlanması için event listener ekle
$('#bookModal').on('show.bs.modal', function (e) {
  const button = $(e.relatedTarget);
  const isEditMode = button.hasClass('btn-edit');
  
  if (!isEditMode) {
    const ui = new UI();
    ui.clearForm();
  }
});

// Modal kapandığında formun sıfırlanması için event listener ekle
$('#bookModal').on('hidden.bs.modal', function () {
  const ui = new UI();
  ui.clearForm();
});

// Kitap ekleme veya güncelleme işlemi için submit event listener
document.getElementById('book-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const id = document.getElementById('book-id').value;
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const category = document.getElementById('category').value;
  const year = document.getElementById('year').value;
  const cover = document.getElementById('cover').value;

  const book = { title, author, category, year, cover };

  if (id) {
    // Kitap güncelleme işlemi
    fetch(`http://localhost:3000/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
    .then(() => {
      const ui = new UI();
      ui.showAlert('Kitap güncellendi', 'success');
      ui.fetchBooksAndDisplay();
      $('#bookModal').modal('hide');
    })
    .catch(error => {
      console.error('Error updating book:', error);
      const ui = new UI();
      ui.showAlert('Kitap güncellenirken bir hata oluştu', 'danger');
    });
  } else {
    // Yeni kitap ekleme işlemi
    fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
    .then(() => {
      const ui = new UI();
      ui.showAlert('Kitap eklendi', 'success');
      ui.fetchBooksAndDisplay();
      $('#bookModal').modal('hide');
    })
    .catch(error => {
      console.error('Error adding book:', error);
      const ui = new UI();
      ui.showAlert('Kitap eklenirken bir hata oluştu', 'danger');
    });
  }
});

// DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.fetchBooksAndDisplay();
});
