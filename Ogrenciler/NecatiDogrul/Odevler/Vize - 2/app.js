UI.displayBooks();
let newBookId;
UI.getBookCount().then(bookCount => {
    newBookId = bookCount + 1;
    console.log(newBookId);
});

const addBookButton = document.querySelector('#addBookButton');
addBookButton.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const category = document.querySelector('#category').value;
    const publishedDate = document.querySelector('#publishedDate').value;
    const coverImageUrl = document.querySelector('#coverImageUrl').value;
    UI.getBookCount().then(bookCount => {
        let id = bookCount + 1;
        id = id.toString();
        const newBook = new Book(id, title, author, category, publishedDate, coverImageUrl);

        UI.createBook(newBook);
        UI.addBookToUI(newBook);
    });
});

document.querySelector('#updateForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.querySelector('#updateBookButton').getAttribute('data-id');
    const title = document.querySelector('#updateTitle').value;
    const author = document.querySelector('#updateAuthor').value;
    const category = document.querySelector('#updateCategory').value;
    const publishedDate = document.querySelector('#updatePublishedDate').value;
    const coverImageUrl = document.querySelector('#updateCoverImageUrl').value;
    const updatedBook = { id, title, author, category, publishedDate, coverImageUrl };
    UI.updateBook(id, updatedBook);
});