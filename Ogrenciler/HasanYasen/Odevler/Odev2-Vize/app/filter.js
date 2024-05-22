class Filter {
    static bySearch(sortedBooks, userInput) {
        return sortedBooks.filter((book) => book.name.toLowerCase().includes(userInput.toLowerCase()) ||
            book.author.toLowerCase().includes(userInput.toLowerCase()))
    }
    static byAuthor(books, selectedAuthors) {
        if (selectedAuthors.length === 0) {
            return books
        }
        return books.filter((book) =>
            selectedAuthors.some((author) =>
                book.author.includes(author)
            )
        )
    }
    static byCategory(books, selectedCategories) {
        if (selectedCategories.length === 0) {
            return books
        }
        return books.filter((book) =>
            selectedCategories.some((category) =>
                book.category.includes(category)
            )
        )
    }
}