class Request {
  constructor() {
    this.baseUrl = 'http://localhost:3000/books';
  }

  fetchBooks() {
    return fetch(this.baseUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching books');
        }
        return response.json();
      })
      .catch(err => console.error('Error fetching books:', err));
  }

  fetchBook(id) {
    return fetch(`${this.baseUrl}/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching book');
        }
        return response.json();
      })
      .catch(err => console.error('Error fetching book:', err));
  }

  addBook(book) {
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error adding book');
      }
      return response.json();
    })
    .catch(err => console.error('Error adding book:', err));
  }

  updateBook(id, book) {
    return fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error updating book');
      }
      return response.json();
    })
    .catch(err => console.error('Error updating book:', err));
  }

  deleteBook(id) {
    return fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error deleting book');
      }
      return response.json();
    })
    .catch(err => console.error('Error deleting book:', err));
  }
}