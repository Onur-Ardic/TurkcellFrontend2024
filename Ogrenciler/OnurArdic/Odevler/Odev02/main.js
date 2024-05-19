class Books {
  constructor(bookname, author, date, price, category, image, id) {
    this.id = Math.floor(Math.random() * 10000).toString()
    this.bookname = bookname
    this.author = author
    this.date = date
    this.price = price
    this.category = category
    this.image = image
  }
}

saveBookButton.addEventListener('submit', function (event) {
  event.preventDefault()
  const myBook = createBook()
  requestValidation.sendBook(myBook)
})

function createBook() {
  const bookNameValue = bookName.value.trim()
  const bookAuthorValue = bookAuthor.value.trim()
  const bookDateValue = bookDate.value.trim()
  const bookPriceValue = bookPrice.value.trim()
  const bookCategoryValue = bookCategory.value.trim()
  const bookImageValue = bookImage.value.trim()

  return new Books(
    bookNameValue,
    bookAuthorValue,
    bookDateValue,
    bookPriceValue,
    bookCategoryValue,
    bookImageValue,
  )
}

class requestValidation {
  static sendBook(book) {
    Request.post('http://localhost:3000/books', {
      bookname: book.bookname,
      author: book.author,
      date: book.date,
      price: book.price,
      category: book.category,
      image: book.image,
      id: book.id,
    })
  }

  static deleteBook(bookId) {
    console.log(bookId)
    Request.delete(`http://localhost:3000/books/${bookId}`)
      .then(() => {
        console.log(`${bookId} kitabı başarıyla silindi.`)
      })
      .catch((err) => console.error(err))
  }

  static editBook(book, bookId) {
    bookName.value = book.bookname
    bookAuthor.value = book.author
    bookDate.value = book.date
    bookPrice.value = book.price
    bookCategory.value = book.category
    bookImage.value = book.image

    modalUpdateBtn.addEventListener('click', (e) => {
      const newBookName = document.getElementById('bookName').value
      const newBookAuthor = document.getElementById('bookAuthor').value
      const newBookDate = document.getElementById('bookDate').value
      const newBookPrice = document.getElementById('bookPrice').value
      const newBookCategory = document.getElementById('bookCategory').value
      const newBookImage = document.getElementById('bookİmg').value
      console.log(newBookName, newBookAuthor, newBookDate, newBookPrice)

      e.preventDefault()
      Request.put(`http://localhost:3000/books/${bookId}`, {
        bookname: newBookName,
        author: newBookAuthor,
        date: newBookDate,
        price: newBookPrice,
        category: newBookCategory,
        image: newBookImage,
        id: book.id,
      })
    })
  }
}
