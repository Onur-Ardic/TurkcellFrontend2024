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


document.querySelector('#searchBtn').addEventListener('click', function (e) {
    e.preventDefault()
    const searchValue = searchInput.value.toLowerCase().trim()
    const books = document.querySelectorAll('.card')
    books.forEach(book => {
        const nameBook = book.querySelector('.card-name').textContent.toLowerCase().trim();
        const writer = book.querySelector('.card-writer').textContent.toLowerCase().trim();
        if (nameBook.includes(searchValue) || writer.includes(searchValue)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    })
    searchInput.value = ''
})

document.addEventListener('DOMContentLoaded', function () {
    Request.get("http://localhost:3000/books").then((books) => {
        books.forEach(book => {
            UI.displayBooksUI(book)
        })
    })
});

clearBtn.addEventListener("click", function () {
    UI.removeBooksUI()
})

saveForm.addEventListener("click", function (e) {
    e.preventDefault()
    const book = new Book(
        nameBook.value,
        writer.value,
        description.value,
        category.value,
        date.value,
        image.value
    )
    Request.post("http://localhost:3000/books", book).then(() => {
        UI.displayBooksUI(book)
    })
    UI.clearModalForm()
})


modalUpdateBtn.addEventListener("click", async function (e) {
    e.preventDefault();
    const newBook = new Book(
        nameBook.value,
        writer.value,
        description.value,
        category.value,
        date.value,
        image.value
    );
    const id = modalUpdateBtn.getAttribute('data-id');

    await Request.put(`http://localhost:3000/books/${id}`, newBook);
    const books = await Request.get("http://localhost:3000/books");
    booksArea.innerHTML = '';
    books.forEach(book => {
        UI.displayBooksUI(book);
    });
    modalUpdateBtn.removeAttribute('data-id');
    UI.clearModalForm();
});
