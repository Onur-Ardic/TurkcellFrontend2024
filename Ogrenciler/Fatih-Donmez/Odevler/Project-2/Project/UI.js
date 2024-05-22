import Library from './services/library.js';
import {
  removeBookHandler,
  showAddBookModal,
  showUpdateBookModal,
} from './components/BookHandlers.js';
import { applyFiltersAndSort } from './components/FilterAndSort.js';

class UI {
  constructor() {
    this.library = new Library();
    this.initStart();
  }

  async initStart() {
    await this.library.initStart();
    this.loadFilterOptions();
    this.displayBooks(this.library.getBooks());
    this.setupEventListeners();
  }

  displayBooks(books) {
    const booksContainer = document.getElementById('booksContainer');
    booksContainer.textContent = '';
    books.forEach((book) => {
      booksContainer.appendChild(this.createBookCard(book));
    });
  }

  loadFilterOptions() {
    const categories = this.library.getCategories();
    const authors = this.library.getAuthors();

    const categoryCheckboxes = document.getElementById('categoryCheckboxes');
    categoryCheckboxes.textContent = ''; // Temizlemeyince ekleme işlemi sonrasında aynı kategoriler tekrar ekleniyor.
    categories.forEach((category) => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = category;
      checkbox.id = `category-${category}`;
      categoryCheckboxes.appendChild(checkbox);

      const label = document.createElement('label');
      label.htmlFor = `category-${category}`;
      label.textContent = category;
      categoryCheckboxes.appendChild(label);

      categoryCheckboxes.appendChild(document.createElement('br'));
    });

    const authorCheckboxes = document.getElementById('authorCheckboxes');
    authorCheckboxes.textContent = ''; // Temizlemeyince ekleme işlemi sonrasında aynı yazarlar tekrar ekleniyor.
    authors.forEach((author) => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = author;
      checkbox.id = `author-${author}`;
      authorCheckboxes.appendChild(checkbox);

      const label = document.createElement('label');
      label.htmlFor = `author-${author}`;
      label.textContent = author;
      authorCheckboxes.appendChild(label);

      authorCheckboxes.appendChild(document.createElement('br'));
    });
  }

  createBookCard(book) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-4 mb-4';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const img = document.createElement('img');
    img.src = book.coverUrl;
    img.className = 'card-img-top';
    img.alt = book.title;
    img.style.maxHeight = '300px';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const starContainer = document.createElement('span');
    starContainer.className = 'd-block';

    for (let i = 0; i < book.star; i++) {
      const star = document.createElement('i');
      star.className = 'bi bi-star-fill text-warning';
      starContainer.appendChild(star);
    }

    cardBody.appendChild(starContainer);

    const title = document.createElement('h5');
    title.className = 'card-title mt-2';
    title.textContent = book.title;

    const author = document.createElement('p');
    author.className = 'card-text';
    author.textContent = book.author;

    const category = document.createElement('p');
    category.className = 'card-text';
    category.textContent = book.category;

    const year = document.createElement('p');
    year.className = 'card-text';
    year.textContent = book.year;

    const cardButtons = document.createElement('div');
    cardButtons.className = 'card-buttons d-flex justify-content-around ';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger';
    deleteButton.textContent = 'Sil';
    deleteButton.addEventListener('click', async () => {
      await removeBookHandler(
        this.library,
        book.id,
        this.displayBooks.bind(this),
      );
    });

    const updateButton = document.createElement('button');
    updateButton.className = 'btn btn-primary';
    updateButton.textContent = 'Güncelle';
    updateButton.addEventListener('click', () => {
      showUpdateBookModal(
        book,
        this.library,
        this.displayBooks.bind(this),
        this.loadFilterOptions.bind(this),
      );
    });

    cardButtons.appendChild(updateButton);
    cardButtons.appendChild(deleteButton);

    cardBody.appendChild(title);
    cardBody.appendChild(author);
    cardBody.appendChild(category);
    cardBody.appendChild(year);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);
    cardDiv.appendChild(cardButtons);

    colDiv.appendChild(cardDiv);

    return colDiv;
  }

  setupEventListeners() {
    document.getElementById('addBookButton').addEventListener('click', () => {
      showAddBookModal(
        this.library,
        this.displayBooks.bind(this),
        this.loadFilterOptions.bind(this),
      );
    });
    document
      .getElementById('searchInput')
      .addEventListener('input', () =>
        applyFiltersAndSort(this.library, this.displayBooks.bind(this)),
      );

    document
      .querySelectorAll("#categoryCheckboxes input[type='checkbox']")
      .forEach((cb) =>
        cb.addEventListener('change', () =>
          applyFiltersAndSort(this.library, this.displayBooks.bind(this)),
        ),
      );

    document
      .querySelectorAll("#authorCheckboxes input[type='checkbox']")
      .forEach((cb) =>
        cb.addEventListener('change', () =>
          applyFiltersAndSort(this.library, this.displayBooks.bind(this)),
        ),
      );

    document
      .getElementById('sortSelect')
      .addEventListener('change', () =>
        applyFiltersAndSort(this.library, this.displayBooks.bind(this)),
      );
  }
}

export default UI;
