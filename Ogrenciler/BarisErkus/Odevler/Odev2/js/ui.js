const cardContainer = document.querySelector('#card-container');

class UI {
    static async renderBooks(books) {
        books.forEach(book => {
            const card = BookCard.createCard(book);
            cardContainer.appendChild(card);
        });
    }
    static getFormData() {
        return {
            coverUrl: UIHelper.getInputValue('coverUrl'),
            title: UIHelper.getInputValue('title'),
            year: UIHelper.getInputValue('year'),
            genre: UIHelper.getInputValue('genre'),
            description: UIHelper.getInputValue('description'),
            authorImageUrl: UIHelper.getInputValue('authorImageUrl'),
            authorName: UIHelper.getInputValue('authorName'),
            biography: UIHelper.getInputValue('biography')
        };
    }
    static clearForm() {
        ['coverUrl', 'title', 'year', 'genre', 'description', 'authorImageUrl', 'authorName', 'biography'].forEach(UIHelper.clearInputValue);
    }
    static getCard(element, matchKeyword) {
        return element.matches(matchKeyword) ? element.closest('.book-card') : null;
    }
    static clearCardContainer() {
        cardContainer.innerHTML = '';
    }
    static renderFilterOptions(data) {
        const menu = document.getElementById('dropdownMenu');
        const genres = new Set();
        const authors = new Set();

        data.forEach(book => {
            genres.add(book.genre);
            authors.add(book.author.authorName);
        });

        UIHelper.populateFilterMenu(menu, 'Kategori', genres, 'genre');
        UIHelper.addDivider(menu);
        UIHelper.populateFilterMenu(menu, 'Yazar', authors, 'author');

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
}