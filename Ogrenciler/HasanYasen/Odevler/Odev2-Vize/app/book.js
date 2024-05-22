const url = "http://localhost:3000/books"

class Book {
    constructor(name, author, category, year, imgUrl) {
        this.name = name
        this.author = author
        this.category = category
        this.year = year
        this.imgUrl = imgUrl
    }
    static addBook() {
        let book = new Book(ui.bookNameForAdd.value, ui.bookAuthorForAdd.value, ui.bookCategoryForAdd.value, ui.bookYearForAdd.value, ui.bookImgUrlForAdd.value)
        if (ui.bookNameForAdd.value !== "" && ui.bookAuthorForAdd.value !== "" && ui.bookCategoryForAdd.value !== "" && ui.bookYearForAdd.value !== "") {
            Request.post(url, book)
        }
    }
    static editBook(books, bookId) {
        const bookToEdit = books?.find((book) => book.id === bookId)

        ui.bookNameForEdit.value = bookToEdit.name
        ui.bookAuthorForEdit.value = bookToEdit.author
        ui.bookCategoryForEdit.value = bookToEdit.category
        ui.bookYearForEdit.value = bookToEdit.year
        ui.bookImgUrlForEdit.value = bookToEdit.imgUrl

        ui.saveChanges.addEventListener("click", () => {
            if (ui.bookNameForEdit.value !== "" && ui.bookAuthorForEdit.value !== "" && ui.bookCategoryForEdit.value !== "" && ui.bookYearForEdit.value !== "") {
                Request.put(`http://localhost:3000/books/${bookId}`, {
                    id: bookId,
                    name: ui.bookNameForEdit.value,
                    author: ui.bookAuthorForEdit.value,
                    category: ui.bookCategoryForEdit.value,
                    year: ui.bookYearForEdit.value,
                    imgUrl: ui.bookImgUrlForEdit.value,
                })
            }
        })
    }
    static deleteBook(bookId) {
        Request.delete(`${url}/${bookId}`)
    }
}