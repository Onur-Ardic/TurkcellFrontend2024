function filterHandler(bookCard) {
  const categoryFilter = document.getElementById('bookCategoryFilter')
  const cardCategory = bookCard.querySelector('.book-card-category')

  categoryFilter.addEventListener('change', function () {
    const selectedCategory = categoryFilter.value.toLowerCase().trim()
    const bookCategory = cardCategory.innerText.toLowerCase().trim()

    if (selectedCategory === 'all' || bookCategory === selectedCategory) {
      bookCard.style.display = 'block'
    } else {
      bookCard.style.display = 'none'
    }
  })
}

document.querySelector('.btn-info').addEventListener('click', function (event) {
  event.preventDefault()
  const searchInput = document.querySelector('input[type="text"]').value.toLowerCase().trim()
  const bookCards = document.querySelectorAll('.book-card')

  bookCards.forEach((bookCard) => {
    const bookName = bookCard.querySelector('h5').textContent.toLowerCase().trim()
    const bookAuthor = bookCard.querySelector('.book-card-author').textContent.toLowerCase().trim()
    if (bookName.includes(searchInput) || bookAuthor.includes(searchInput)) {
      bookCard.style.display = 'block'
    } else {
      bookCard.style.display = 'none'
    }
  })
})

function compareBooks(a, b, sortType) {
  if (sortType === 'price-low' || sortType === 'price-high') {
    const bookA = a.querySelector('h5').textContent.toLowerCase().trim()
    const bookB = b.querySelector('h5').textContent.toLowerCase().trim()
    return sortType === 'price-high' ? bookB.localeCompare(bookA) : bookA.localeCompare(bookB)
  } else if (sortType === 'date') {
    const dateA = new Date(a.dataset.date)
    const dateB = new Date(b.dataset.date)
    return dateA - dateB
  }
}

document.getElementById('filter-sort').addEventListener('change', function () {
  const sortType = this.value
  const bookWrapper = document.querySelector('.book-card-wrapper')
  const bookCards = document.querySelectorAll('.book-card')

  const sortedBookCards = Array.from(bookCards).sort((a, b) => compareBooks(a, b, sortType))

  bookWrapper.innerHTML = ''
  sortedBookCards.forEach((bookCard) => {
    bookWrapper.appendChild(bookCard)
  })
})
