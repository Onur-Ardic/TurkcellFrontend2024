const ui = new UI();
const request = new Request();
const filter = new Filter();

document.addEventListener('DOMContentLoaded', () => {
  loadBooks();

  ui.setupFilters(filter);

  const form = document.getElementById('book-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formTitle = document.getElementById('modalTitle').textContent;
    const newBook = ui.getFormData();

    if (formTitle === 'Kitap Ekle') {
      request.addBook(newBook)
        .then(() => {
          $('#bookModal').modal('hide');
          return loadBooks();
        })
        .then(() => ui.showAlert('Kitap başarıyla eklendi!', 'success'))
        .catch(err => ui.showAlert('Kitap eklenirken hata oluştu!', 'danger'));
    } else {
      const bookId = form.getAttribute('data-book-id');
      if (bookId) {
        request.updateBook(bookId, newBook)
          .then(() => {
            $('#bookModal').modal('hide');
            return loadBooks();
          })
          .then(() => ui.showAlert('Kitap başarıyla güncellendi!', 'success'))
          .catch(err => ui.showAlert('Kitap güncellenirken hata oluştu!', 'danger'));
      }
    }
  });
});

function loadBooks() {
  return request.fetchBooks()
    .then(books => ui.displayBooks(books));
}
