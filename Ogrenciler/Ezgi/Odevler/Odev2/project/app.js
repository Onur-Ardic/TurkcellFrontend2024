const form = document.querySelector('#addBookForm')
const nameBook = document.querySelector('#nameBook')
const writer = document.querySelector('#writer')
const category = document.querySelector('#category')
const date = document.querySelector('#date')
const description = document.querySelector('#description')
const image = document.querySelector('#image')
const saveForm = document.querySelector('#saveForm')
const closeForm = document.querySelector('#closeForm')
const booksArea = document.querySelector('#books-area')
const deleteBtn = document.querySelector('.delete-btn')
const editBtn = document.querySelector('.edit-btn')
const modalUpdateBtn = document.querySelector('#modalUpdateBtn')
const clearBtn = document.querySelector('#clearBtn')
const searchBtn = document.querySelector('#searchBtn')
const addBookBtn = document.querySelector('#addBookBtn')
const addBookModalTitle = document.getElementById('addBookModalTitle')


class Book {
    constructor(nameBook, writer, description, category, date, image) {
        this.id = crypto.randomUUID();
        this.nameBook = nameBook,
            this.writer = writer,
            this.description = description,
            this.category = category,
            this.date = date,
            this.image = image || "https://dusunbil.com/wp-content/uploads/2018/01/YourCareer-Dec15-1024x768.jpg"
    }
}

document.querySelector('#searchBtn').addEventListener('click', function (e) {
    e.preventDefault()
    const searchValue = searchInput.value.toLowerCase()
    const books = document.querySelectorAll('.card')
    books.forEach(book => {
        const nameBook = book.querySelector('.card-name').textContent.toLowerCase();
        const writer = book.querySelector('.card-writer').textContent.toLowerCase();
        if (nameBook.includes(searchValue) || writer.includes(searchValue)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    })
})

clearBtn.addEventListener("click", function () {
    UI.removeBooksUI()
    // RequestProcess.deleteAllBooks();
})
document.addEventListener('DOMContentLoaded', function () {
    RequestProcess.getBooks()
});

saveForm.addEventListener("click", function () {
    const book = new Book(
        nameBook.value,
        writer.value,
        description.value,
        category.value,
        date.value,
        image.value
    )
    UI.addBooksUI(book)
    RequestProcess.addBook(book)
})


class RequestProcess {
    static getBooks() {
        return Request.get("http://localhost:3000/books")
    }
    static addBook(book) {
        return Request.post("http://localhost:3000/books", {
            nameBook: book.nameBook,
            writer: book.writer,
            description: book.description,
            date: book.date,
            category: book.category,
            image: book.image,
            id: book.id,
        })
    }
    static deleteBook(id) {
        return Request.delete(`http://localhost:3000/books/${id}`)
            .then(() => {
                console.log(`${id} kitabı başarıyla silindi.`)
            })

    }
    // static deleteAllBooks() {
    //     Request.delete("http://localhost:3000/books")
    //         .then(() => {
    //             console.log("Tüm kitaplar başarıyla silindi.");
    //         })
    //         .catch((error) => {
    //             console.error("Kitapları silme işlemi başarısız oldu:", error);
    //         });
    // }
    static updateBook(id, book) {
        nameBook.value = book.nameBook,
            writer.value = book.writer,
            description.value = book.description,
            category.value = book.category,
            date.value = book.date,
            image.value = book.image

        modalUpdateBtn.addEventListener("click", function (e) {
            e.preventDefault()
            const currentNameBook = nameBook.value
            const currentWriter = writer.value
            const currentDescription = description.value
            const currentCategory = category.value
            const currentDate = date.value
            const currentImage = image.value

            Request.put(`http://localhost:3000/books/${id}`, {
                nameBook: currentNameBook,
                writer: currentWriter,
                description: currentDescription,
                category: currentCategory,
                date: currentDate,
                image: currentImage,
                id: book.id
            })
        })
    }
}



