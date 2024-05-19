const bookWrapper = document.querySelector('.book-card-wrapper')
const bookName = document.getElementById('bookName')
const bookAuthor = document.getElementById('bookAuthor')
const bookDate = document.getElementById('bookDate')
const bookImage = document.getElementById('bookİmg')
const bookPrice = document.getElementById('bookPrice')
const bookCategory = document.getElementById('bookCategory')
const saveBookButton = document.getElementById('modal-form')

class UI {
  static createBookCard(book) {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('book-card', 'border', 'position-relative')

    const imgDiv = document.createElement('div')
    imgDiv.classList.add('book-card-img')

    const img = document.createElement('img')
    img.src = `${book.image}`
    img.alt = `${book.bookname}`
    img.classList.add('img-fluid')
    imgDiv.appendChild(img)

    const infoDiv = document.createElement('div')
    infoDiv.classList.add('book-card-info', 'p-3')

    const title = document.createElement('h5')
    title.textContent = `${book.bookname}`
    infoDiv.appendChild(title)

    const bookInfoDiv = document.createElement('div')
    bookInfoDiv.classList.add('book-info', 'd-flex', 'gap-1', 'flex-column')

    const author = document.createElement('p')
    author.classList.add('book-card-author')
    author.textContent = `Yazar: ${book.author}`

    const publisher = document.createElement('p')
    publisher.classList.add('book-card-publisher')
    publisher.textContent = `Tarih: ${book.date}`

    const price = document.createElement('p')
    price.classList.add('book-card-price', 'text-danger')
    price.textContent = `Fiyat:${book.price}TL`

    bookInfoDiv.appendChild(author)
    bookInfoDiv.appendChild(publisher)
    bookInfoDiv.appendChild(price)
    infoDiv.appendChild(bookInfoDiv)

    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add(
      'card-btn',
      'position-absolute',
      'top-0',
      'end-0',
      'm-1',
      'd-flex',
      'gap-1',
      'flex-column',
    )

    const editButton = document.createElement('button')
    editButton.classList.add('btn', 'btn-warning')

    const editIcon = document.createElement('i')
    editIcon.classList.add('fa-solid', 'fa-pen')
    editButton.appendChild(editIcon)

    const deleteButton = document.createElement('button')
    deleteButton.id = `${book.id}`
    deleteButton.classList.add('btn', 'btn-danger')

    deleteButton.addEventListener('click', function () {
      cardDiv.remove()
      requestValidation.deleteBook(book.id)
    })

    const deleteIcon = document.createElement('i')
    deleteIcon.classList.add('fa-solid', 'fa-trash')
    deleteButton.appendChild(deleteIcon)

    buttonDiv.appendChild(editButton)
    buttonDiv.appendChild(deleteButton)

    cardDiv.appendChild(imgDiv)
    cardDiv.appendChild(infoDiv)
    cardDiv.appendChild(buttonDiv)

    bookWrapper.appendChild(cardDiv)
  }

  static getOnUI(data) {
    data.forEach((book) => {
      UI.createBookCard(book)
    })
  }
}
