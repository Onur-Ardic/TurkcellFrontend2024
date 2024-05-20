function filterHandler(bookCard, book) {
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
