class Sort {
    static azSort = () => {
        req.get('http://localhost:3000/library').then((data) => {
            let books = data.sort((a, b) => a.name.localeCompare(b.name));
            UI.createCard(books);
        }).catch((err) => { UI.showAlert(err.message) });
    }
    static zaSort = () => {
        req.get('http://localhost:3000/library').then((data) => {
            let books = data.sort((a, b) => b.name.localeCompare(a.name));
            UI.createCard(books);
        }).catch((err) => { UI.showAlert(err.message) });
    }
    static dateUpSort = () => {
        req.get('http://localhost:3000/library').then((data) => {
            let books = data.sort((a, b) => a.year - b.year);
            UI.createCard(books);
        }).catch((err) => { UI.showAlert(err.message) });
    }
    static dateDownSort = () => {
        req.get('http://localhost:3000/library').then((data) => {
            let books = data.sort((a, b) => b.year - a.year);
            UI.createCard(books);
        }).catch((err) => { UI.showAlert(err.message) });
    }
    static filterAuthor = () => {
        req.get('http://localhost:3000/library').then((data) => {
            const filterAuthorVal = filterAuthor.options[filterAuthor.selectedIndex].value;
            const authorName = data.filter(book => book.author === filterAuthorVal);
            if (filterAuthorVal === 'all') {
                UI.displayBooks();
            } else {
                UI.createCard(authorName);
            }
        }).catch((err) => { UI.showAlert(err.message) });
    }
    static filterGenre = () => {
        req.get('http://localhost:3000/library').then((data) => {
            const filterGenreVal = filterGenre.options[filterGenre.selectedIndex].value;
            let  genreName = data.filter(book => book.genre === filterGenreVal);
            if (filterGenreVal === 'all') {
                UI.displayBooks();
            } else {
                UI.createCard(genreName);
            }
        }).catch((err) => { UI.showAlert(err.message) });
    }
}