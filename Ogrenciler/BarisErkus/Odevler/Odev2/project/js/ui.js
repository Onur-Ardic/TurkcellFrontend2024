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
    static clearFilterDropDownContainer() {
        const dropdownMenu = document.getElementById('dropdownMenu');
        dropdownMenu.innerHTML = '';
    }
    static renderFilterOptions(data) {
        const menu = document.getElementById('dropdownMenu');
        const genres = new Set();
        const authors = new Set();

        data.forEach(book => {
            genres.add(book.genre);
            authors.add(book.author.authorName);
        });

        const sortedGenres = Array.from(genres).sort();
        const sortedAuthors = Array.from(authors).sort();

        UIHelper.fillFilterMenu(menu, 'Kategori', sortedGenres, 'genre');
        UIHelper.addDivider(menu);
        UIHelper.fillFilterMenu(menu, 'Yazar', sortedAuthors, 'author');
        filterBooks();
    }
    static showAlert(message, type) {
        const alertContainer = document.getElementById('alert-container');
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} alert-dismissible fade show`;
        alert.role = 'alert';
        alert.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        alertContainer.appendChild(alert);

        setTimeout(() => {
            alert.classList.remove('show');
            alert.classList.add('fade');
            setTimeout(() => alert.remove(), 150);
        }, 3000);
    }
}