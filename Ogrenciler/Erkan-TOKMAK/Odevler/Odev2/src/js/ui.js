const bookList = document.getElementById('bookList');
const azSortBtn = document.getElementById('azSort');
const zaSortBtn = document.getElementById('zaSort');
const dateUpSortBtn = document.getElementById('dateUpSort');
const dateDownSortBtn = document.getElementById('dateDownSort');
const modalBtn = document.getElementById('modalBtn');
const searchInput = document.getElementById('searchInput');
const idInput = document.getElementById('idInput');
const bookNameInput = document.getElementById('bookName');
const authorInput = document.getElementById('bookAuthor');
const yearInput = document.getElementById('bookYear');
const genreInput = document.getElementById('bookGenre');
const pictureInput = document.getElementById('bookPicture');
const librarySave = document.getElementById('librarySave');
const filterAuthor = document.getElementById('filterAuthor');
const filterGenre = document.getElementById('filterGenre');
const statusTitle = document.getElementById('statusTitle');
const alertToast = document.getElementById('alertToast');
const alertToastBody = document.getElementById('alertToastBody');
class UI {
    static createCard = (books) => {
        bookList.innerHTML = "";
        for (let book of books) {
            const col = document.createElement('div');
            col.className = 'col-12 col-md-6 my-3';
            col.id = book.id;
            bookList.appendChild(col);
            const dFlex = document.createElement('div');
            dFlex.className = 'd-flex h-100 neon-shadow';
            col.appendChild(dFlex);
            const figure = document.createElement('figure');
            figure.className = 'w-25';
            dFlex.appendChild(figure);
            const image = document.createElement('img');
            image.src = book.picture;
            image.alt = book.name;
            image.className = 'w-100 h-100 rounded-start';
            figure.appendChild(image);
            const card = document.createElement('div');
            card.className = 'card bg-warning rounded-start-0 w-75';
            dFlex.appendChild(card);
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            card.appendChild(cardBody);
            const h2 = document.createElement('h2');
            h2.className = 'card-title';
            const title = document.createTextNode(book.name);
            h2.appendChild(title);
            cardBody.appendChild(h2);
            const p1 = document.createElement('p');
            p1.className = 'card-text';
            const authorText = document.createTextNode(book.author);
            p1.appendChild(authorText);
            cardBody.appendChild(p1);
            const p2 = document.createElement('p');
            p2.className = 'card-text';
            const yearText = document.createTextNode(book.year);
            p2.appendChild(yearText);
            cardBody.appendChild(p2);
            const p3 = document.createElement('p');
            p3.className = 'card-text';
            const genreText = document.createTextNode(book.genre);
            p3.appendChild(genreText);
            cardBody.appendChild(p3);
            const cardFooter = document.createElement('div');
            cardFooter.className = 'card-footer d-flex justify-content-center gap-3';
            card.appendChild(cardFooter);
            const editButton = document.createElement('button');
            editButton.className = 'btn btn-light neon-border';
            const editText = document.createTextNode('Edit');
            const editIcon = document.createElement('i');
            editIcon.className = 'fa-regular fa-pen-to-square me-2';
            editButton.appendChild(editIcon);
            editButton.appendChild(editText);
            editButton.addEventListener('click', () => {
                Library.editBook(book.id);
                statusTitle.textContent = 'Edit Book';
            });
            cardFooter.appendChild(editButton);
            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-danger';
            const deleteText = document.createTextNode('Delete');
            const deleteIcon = document.createElement('i');
            deleteIcon.className = 'fa-regular fa-trash-alt me-2';
            deleteButton.appendChild(deleteIcon);
            deleteButton.appendChild(deleteText);
            deleteButton.addEventListener('click', () => {
                Library.deleteBook(book.id)
            });
            cardFooter.appendChild(deleteButton);
        }
    }
    static displayBooks = () => {
        req.get('http://localhost:3000/library')
            .then((data) => { this.createCard(data); })
            .catch((err) => { UI.showAlert(err.message) })
    }
    static clearFields = () => {
        bookNameInput.value = '';
        authorInput.value = '';
        yearInput.value = '';
        genreInput.value = '';
        pictureInput.value = '';
    }
    static showAlert = (message, className) => {
        alertToast.classList.add(`bg-${className}`);
        alertToastBody.textContent = message;
        const toast = new bootstrap.Toast(alertToast);
        toast.show();
    }
    static filterAuthor = (books) => {
        const uniqueAuthors = new Set();
        for (let book of books) {
            if (!uniqueAuthors.has(book.author)) {
                uniqueAuthors.add(book.author);
                const filterVal = document.createElement('option');
                filterVal.value = book.author;
                filterVal.textContent = book.author;
                filterAuthor.appendChild(filterVal);
            }
        }
    }
    static filterGenre = (books) => {
        const uniqueGenres = new Set();
        for (let book of books) {
            if (!uniqueGenres.has(book.genre)) {
                uniqueGenres.add(book.genre);
                const filterVal = document.createElement('option');
                filterVal.value = book.genre;
                filterVal.textContent = book.genre;
                filterGenre.appendChild(filterVal);
            }
        }
    }
}