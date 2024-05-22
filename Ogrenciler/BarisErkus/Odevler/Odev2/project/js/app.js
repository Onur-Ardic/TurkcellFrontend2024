const api = new API(baseUrl);
document.addEventListener('DOMContentLoaded', () => {
    api.getBooks().then(data => displayBooks(data));

    const form = document.getElementById('bookForm');
    form.addEventListener('submit', (event) => saveBook(event));
    document.addEventListener('click', (event) => chooseOperation(event));
    document.getElementById('serachOnPage').addEventListener('input', (event) => searchBook(event));
    document.querySelectorAll('.sort-option').forEach(option => sortBooks(option));
    document.getElementById('addNewBook').addEventListener('click', () => UI.clearForm());
});
function displayBooks(data) {
    UI.renderBooks(data);
    UI.renderFilterOptions(data);
}
function saveBook(event) {
    event.preventDefault();
    const formData = UI.getFormData();
    const { coverUrl, title, year, genre, description, authorImageUrl, authorName, biography } = formData;
    const bookId = saveButton.getAttribute('data-id');

    const bookModal = bootstrap.Modal.getInstance(document.getElementById('createBookModal'));

    if (bookId) {
        api.updateBook(bookId, {
            title,
            year,
            coverUrl,
            genre,
            author: {
                authorName,
                authorImageUrl,
                biography
            },
            description
        }).then(() => {
            saveButton.innerText = 'Kaydet';
            saveButton.removeAttribute('data-id');
            bookModal.hide();
            UI.clearCardContainer();
            UI.clearFilterDropDownContainer();
            api.getBooks().then(data => displayBooks(data));
            UI.showAlert('Kitap başarıyla güncellendi.', 'success');
        });
    } else {
        api.createBook({
            id: crypto.randomUUID(),
            title,
            year,
            coverUrl,
            genre,
            author: {
                authorName,
                authorImageUrl,
                biography
            },
            description
        }).then(() => {
            bookModal.hide();
            UI.clearCardContainer();
            UI.clearFilterDropDownContainer();
            api.getBooks().then(data => displayBooks(data));
            UI.showAlert('Kitap başarıyla eklendi.', 'success');
        }).catch(() => {
            UI.showAlert('Kitap eklenirken bir hata oluştu.', 'danger');
        });
    }
}
function chooseOperation(event) {
    if (event.target.matches('.btn-delete-book')) {
        const bookCard = UI.getCard(event.target, '.btn-delete-book');
        const bookId = bookCard?.getAttribute('data-id');
        if (bookId) {
            api.deleteBook(bookId).then(() => {
                bookCard.remove();
                UI.showAlert('Kitap başarıyla silindi.', 'danger');
            }).catch(() => {
                UI.showAlert('Kitap silinirken bir hata oluştu.', 'info');
            });
        }
    }
    if (event.target.matches('.btn-update-book')) {
        const bookCard = UI.getCard(event.target, '.btn-update-book');
        if (!bookCard) return;
        const fields = {
            coverUrl: UIHelper.getCardAttribute(bookCard, '.card-front img', 'src'),
            title: UIHelper.getCardTextContent(bookCard, '.card-front .card-title'),
            year: UIHelper.getCardTextContent(bookCard, '.card-front .card-date').replace('Tarih: ', ''),
            genre: UIHelper.getCardTextContent(bookCard, '.card-front .card-genre').replace('Tür: ', ''),
            description: UIHelper.getCardTextContent(bookCard, '.card-front .card-description'),
            authorImageUrl: UIHelper.getCardAttribute(bookCard, '.card-back img', 'src'),
            authorName: UIHelper.getCardTextContent(bookCard, '.card-back .card-title'),
            biography: UIHelper.getCardTextContent(bookCard, '.card-back .card-biography')
        };

        Object.entries(fields).forEach(([key, value]) => {
            UIHelper.setInputValue(key, value);
        });

        saveButton.innerText = 'Güncelle';
        saveButton.setAttribute('data-id', bookCard.getAttribute('data-id'));
    }
}
function searchBook(event) {
    const searchValue = event.target.value.toLowerCase();
    const cards = cardContainer.children;
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const author = card.querySelector('.card-author').textContent.toLowerCase();
        if (title.includes(searchValue) || author.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}
function sortBooks(option) {
    option.addEventListener('click', function (e) {
        e.preventDefault();
        const sortBy = option.dataset.sort;

        api.getBooks().then(data => {
            let sortedBooks;
            switch (sortBy) {
                case 'date':
                    sortedBooks = data.sort((a, b) => (a.year > b.year ? 1 : -1));
                    break;
                case 'reverse-date':
                    sortedBooks = data.sort((a, b) => (a.year < b.year ? 1 : -1));
                    break;
                case 'alpha':
                    sortedBooks = data.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'reverse-alpha':
                    sortedBooks = data.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                default:
                    sortedBooks = data;
            }
            UI.clearCardContainer();
            UI.renderBooks(sortedBooks);
        });
    });
}

function filterBooks() {
    const filterOptions = document.querySelectorAll('.filter-option');
    filterOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            e.preventDefault();
            const filterBy = option.dataset.filter;
            const filterValue = option.dataset.value.toLowerCase();

            const cards = document.querySelectorAll('.book-card');
            cards.forEach(card => {
                const cardValue = card.querySelector(`.card-${filterBy}`).textContent.toLowerCase();
                card.style.display = cardValue.includes(filterValue) ? 'block' : 'none';
            });
        });
    });
}
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()