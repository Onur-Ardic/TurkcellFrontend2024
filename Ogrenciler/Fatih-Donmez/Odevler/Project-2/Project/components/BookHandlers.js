import Book from '../models/book.js';
import Toast from './Toastify.js';

export function addBookHandler(
  library,
  displayBooks,
  loadFilterOptions,
  type,
  bookId,
) {
  const bookForm = document.getElementById('bookForm');

  async function handleSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const category = document.getElementById('bookCategory').value;
    const year = document.getElementById('bookYear').value;
    const coverUrl = document.getElementById('bookCoverUrl').value;

    if (!title || !author || !category || !year || !coverUrl) {
      new Toast('Lütfen tüm alanları doldurun!', 'danger', 5000);
      return;
    }
    if (year < 1800 || year > new Date().getFullYear()) {
      new Toast('Yıl alanı hatalı!', 'danger', 2000);
      return;
    }

    if (type === 'update') {
      try {
        const existingBook = await library.getBookById(bookId);
        if (existingBook) {
          existingBook.title = title;
          existingBook.author = author;
          existingBook.category = category;
          existingBook.year = year;
          existingBook.coverUrl = coverUrl;

          await library.updateBook(bookId, existingBook);
          new Toast('Kitap Başarıyla Güncellendi!', 'success', 5000);
        } else {
          new Toast('Kitap bulunamadı!', 'danger', 5000);
        }
      } catch (error) {
        new Toast('Kitap Güncellenirken Hata Oluştu!', 'danger', 5000);
      }
    } else {
      const newBook = new Book(title, author, category, year, coverUrl);
      try {
        await library.addBook(newBook);
        new Toast('Kitap Başarıyla Eklendi!', 'success', 5000);
      } catch (error) {
        new Toast('Kitap Eklenirken Hata Oluştu!', 'danger', 5000);
      }
    }
    displayBooks(library.getBooks());
    loadFilterOptions();
    setTimeout(() => {
      $('#bookModal').modal('hide'); // JQUERY İLE TEK SATIRDA YAPILABİLİYORMUŞ.

      // Bootstrap Modal'ı Vanilla JavaScript ile kapatma
      // const bookModalElement = document.getElementById('bookModal');
      // const modal = bootstrap.Modal.getInstance(bookModalElement);
      // modal.hide();

      e.target.reset();
      bookForm.removeEventListener('submit', handleSubmit);
    }, 2000);
  }

  bookForm.addEventListener('submit', handleSubmit);
}

export function showUpdateBookModal(
  book,
  library,
  displayBooks,
  loadFilterOptions,
) {
  const bookForm = document.getElementById('bookForm');
  document.getElementById('bookTitle').value = book.title;
  document.getElementById('bookAuthor').value = book.author;
  document.getElementById('bookCategory').value = book.category;
  document.getElementById('bookYear').value = book.year;
  document.getElementById('bookCoverUrl').value = book.coverUrl;
  $('#bookModal').modal('show');
  bookForm.removeEventListener('submit', addBookHandler); // Önceki event listener'ı kaldır

  addBookHandler(library, displayBooks, loadFilterOptions, 'update', book.id);
}

export function showAddBookModal(library, displayBooks, loadFilterOptions) {
  const bookForm = document.getElementById('bookForm');
  bookForm.removeEventListener('submit', addBookHandler); // Önceki event listener'ı kaldır

  bookForm.reset();

  $('#bookModal').modal('show');

  addBookHandler(library, displayBooks, loadFilterOptions, 'add');
}

export async function removeBookHandler(library, bookId, displayBooks) {
  try {
    await library.deleteBook(bookId);
    displayBooks(library.getBooks());
    new Toast('Kitap Başarıyla silindi!', 'success', 5000);
  } catch (error) {
    new Toast('Kitap Silinirken Hata Oluştu!', 'danger', 5000);
  }
}
