function filterHandler(bookCard, book) {
  console.log(bookCard)
  console.log(book)

  const categoryFilter = document.getElementById('bookCategoryFilter')

  categoryFilter.addEventListener('change', function () {
    const selectedCategory = categoryFilter.value

    bookCard.forEach((bookCard) => {
      const bookCategory = bookCard.dataset.category.toLowerCase()

      if (selectedCategory === 'all' || bookCategory === selectedCategory.toLowerCase()) {
        bookCard.style.display = 'block'
        console.log(`${bookCard.dataset.bookname} kartı görüntülendi.`)
      } else {
        bookCard.style.display = 'none'
        console.log(`${bookCard.dataset.bookname} kartı gizlendi.`)
      }
    })
  })
}
