class apiHelper {
    static getBookFromDb() {
        return Request.get(baseUrl)
    }
    static addBookToDb(book) {
        return Request.post(baseUrl, book)
    }
    static deleteBookFromDb(bookId) {
        const newUrl = `${baseUrl}/${bookId}`
        return Request.delete(newUrl)
    }
    static updateBookFromDb(bookId, updatedBook) {
        const newUrl = `${baseUrl}/${bookId}`
        return Request.put(newUrl, updatedBook)
    }
    static getSentenceFromDb() {
        return Request.get(secondUrl)
    }
}