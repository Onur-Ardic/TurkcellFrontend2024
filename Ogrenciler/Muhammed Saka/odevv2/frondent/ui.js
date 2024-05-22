class UI {
  constructor() {
    this.request = new Request();
    this.init();
  }

  init() {
    $('#bookModal').on('hidden.bs.modal', () => {
      this.resetForm();
    });
  }

  displayBooks(books) {
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
            <button class="btn btn-danger btn-sm delete-btn" data-id="${book.id}">Sil</button>
            <button class="btn btn-secondary btn-sm edit-btn" data-id="${book.id}">Düzenle</button>
          </div>
        </div>
      `;
      bookList.appendChild(bookCard);
    });

    this.addEventListeners();
  }

  addEventListeners() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const bookId = e.target.getAttribute('data-id');
        this.request.deleteBook(bookId)
          .then(() => this.request.fetchBooks())
          .then(books => this.displayBooks(books))
          .then(() => this.showAlert('Kitap başarıyla silindi!', 'success'))
          .catch(err => this.showAlert('Kitap silinirken hata oluştu!', 'danger'));
      });
    });

    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const bookId = e.target.getAttribute('data-id');
        this.openEditModal(bookId);
      });
    });
  }

  resetForm() {
    const form = document.getElementById('book-form');
    form.reset();
    form.removeAttribute('data-book-id');
    document.getElementById('modalTitle').textContent = 'Kitap Ekle';
  }

  openEditModal(id) {
    this.request.fetchBook(id)
      .then(book => {
        document.getElementById('modalTitle').textContent = 'Kitap Güncelle';
        document.getElementById('title').value = book.title;
        document.getElementById('author').value = book.author;
        document.getElementById('category').value = book.category;
        document.getElementById('year').value = book.year;
        document.getElementById('cover').value = book.cover;

        const form = document.getElementById('book-form');
        form.setAttribute('data-book-id', id);
        $('#bookModal').modal('show');
      });
  }

  showAlert(message, type) {
    const alertContainer = document.getElementById('alert-container');
    alertContainer.className = `alert alert-${type}`;
    alertContainer.textContent = message;
    alertContainer.style.display = 'block';

    setTimeout(() => {
      alertContainer.style.display = 'none';
    }, 3000);
  }

  getFormData() {
    return {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
      category: document.getElementById('category').value,
      year: document.getElementById('year').value,
      cover: document.getElementById('cover').value
    };
  }

  setupFilters(filter) {
    document.getElementById('search').addEventListener('input', () => filter.filterBooks());
    document.getElementById('filter-category').addEventListener('change', () => filter.filterBooks());
    document.getElementById('filter-author').addEventListener('change', () => filter.filterBooks());
    document.getElementById('sort-books').addEventListener('change', () => filter.sortBooks());
  }
}