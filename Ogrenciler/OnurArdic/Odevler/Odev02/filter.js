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
