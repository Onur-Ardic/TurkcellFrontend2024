const bookWrapper = document.querySelector('.book-card-wrapper')
const bookName = document.getElementById('bookName')
const bookAuthor = document.getElementById('bookAuthor')
const bookDate = document.getElementById('bookDate')
const bookImage = document.getElementById('bookİmg')
const bookPublisher = document.getElementById('bookPublisher')
const bookCategory = document.getElementById('bookCategory')
const saveBookButton = document.getElementById('modal-form')
const ModalTitle = document.getElementById('addBookLabel')
const navAddBtn = document.getElementById('navAddBookBtn')
const navFormBtn = document.getElementById('navFormBtn')
const modalUpdateBtn = document.getElementById('modalUpdateBtn')
const categoryFilters = document.querySelectorAll('.categoriy-list input[type="checkbox"]:checked')
console.log(categoryFilters)
const publisherFilters = document.querySelectorAll('.bookmark-list input[type="checkbox"]:checked')

navAddBtn.addEventListener('click', () => {
  ModalTitle.innerText = 'Kitap Ekle'
  bookName.value = ''
  bookAuthor.value = ''
  bookDate.value = ''
  bookImage.value = ''
  bookPublisher.value = ''
  bookCategory.value = ''
  modalUpdateBtn.style.display = 'none'
  navFormBtn.style.display = 'block'
})
class UI {
  static createBookCard(book) {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('book-card', 'border', 'position-relative')

    const bookCards = document.querySelectorAll('.book-card')
    bookCards.forEach((bookCard) => {
      UI.filterHandler(bookCard, book)
    })

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
    publisher.classList.add('book-card-publisher', 'text-danger')
    publisher.textContent = `Yayınevi: ${book.publisher}`

    const date = document.createElement('p')
    date.classList.add('book-card-date')
    date.textContent = `Tarih: ${book.date}`

    bookInfoDiv.appendChild(author)
    bookInfoDiv.appendChild(date)
    bookInfoDiv.appendChild(publisher)
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
    editButton.id = `${book.id}`
    editButton.classList.add('btn', 'btn-warning')
    editButton.setAttribute('data-bs-toggle', 'modal')
    editButton.setAttribute('data-bs-target', '#addBook')
    editButton.addEventListener('click', function () {
      requestValidation.editBook(book, book.id)
      ModalTitle.textContent = 'Kitap Düzenle'
      modalUpdateBtn.style.display = 'block'
      navFormBtn.style.display = 'none'
    })

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

  static filterHandler(bookCard, book) {
    const category = book.category
    const publisher = book.publisher

    let isVisible = true

    categoryFilters.forEach((filter) => {
      if (!category.includes(filter.value)) {
        isVisible = false
      }
    })

    publisherFilters.forEach((filter) => {
      if (!publisher.includes(filter.value)) {
        isVisible = false
      }
    })

    if (isVisible) {
      bookCard.style.display = 'block'
    } else {
      bookCard.style.display = 'none'
    }
  }
}
