class Books {
  constructor(bookname, author, publisher, date, category, image, id) {
    this.id = Math.floor(Math.random() * 10000).toString()
    this.bookname = bookname
    this.author = author
    this.publisher = publisher
    this.date = date
    this.category = category
    this.image = image
  }
}

saveBookButton.addEventListener('submit', (e) => {
  const myBook = createBook()
  requestValidation.sendBook(myBook)
  e.preventDefault()
})

function createBook() {
  const bookNameValue = bookName.value.trim()
  const bookAuthorValue = bookAuthor.value.trim()
  const bookDateValue = bookDate.value.trim()
  const bookPublisherValue = bookPublisher.value.trim()
  const bookCategoryValue = bookCategory.value.trim()
  const bookImageValue = bookImage.value.trim()

  return new Books(
    bookNameValue,
    bookAuthorValue,
    bookPublisherValue,
    bookDateValue,
    bookCategoryValue,
    bookImageValue,
  )
}

class requestValidation {
  static sendBook(book) {
    console.log(book)
    Request.post('http://localhost:3000/books', {
      bookname: book.bookname,
      author: book.author,
      publisher: book.publisher,
      date: book.date,
      category: book.category,
      image: book.image,
      id: book.id,
    })
  }

  static deleteBook(bookId) {
    Request.delete(`http://localhost:3000/books/${bookId}`)
    .catch((err) => console.error(err))
  }

  static editBook(book, bookId) {
    bookName.value = book.bookname
    bookAuthor.value = book.author
    bookPublisher.value = book.publisher
    bookDate.value = book.date
    bookCategory.value = book.category
    bookImage.value = book.image

    modalUpdateBtn.addEventListener('click', (e) => {
      const newBookName = document.getElementById('bookName').value
      const newBookAuthor = document.getElementById('bookAuthor').value
      const newBookDate = document.getElementById('bookDate').value
      const newBookPublisher = document.getElementById('bookPublisher').value
      const newBookCategory = document.getElementById('bookCategory').value
      const newBookImage = document.getElementById('bookİmg').value

      Request.put(`http://localhost:3000/books/${bookId}`, {
        bookname: newBookName,
        author: newBookAuthor,
        publisher: newBookPublisher,
        date: newBookDate,
        category: newBookCategory,
        image: newBookImage,
        id: book.id,
      })
    })
  }
}
