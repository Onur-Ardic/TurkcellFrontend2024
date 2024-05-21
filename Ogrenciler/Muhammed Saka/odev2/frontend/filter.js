class Filter {
  filterBooks() {
    const search = document.getElementById('search').value.toLowerCase();
    const category = document.getElementById('filter-category').value;
    const author = document.getElementById('filter-author').value;

    request.fetchBooks()
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

        ui.displayBooks(filteredBooks);
      });
  }

  sortBooks() {
    const sortValue = document.getElementById('sort-books').value;

    request.fetchBooks()
      .then(books => {
        let sortedBooks = books;

        if (sortValue === 'az') {
          sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortValue === 'za') {
          sortedBooks = books.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortValue === 'date') {
          sortedBooks = books.sort((a, b) => new Date(b.year) - new Date(a.year));
        }

        ui.displayBooks(sortedBooks);
      });
  }
}
