class APIHelper {
    static isValid(book) {
        return book.title && book.coverUrl && book.genre && book.year && book.description && book.author.authorName && book.author.authorImageUrl && book.author.biography;
    }
}