const req = new Request();
document.addEventListener('DOMContentLoaded', () => {
    UI.displayBooks();
    req.get('http://localhost:3000/library').then((data) => {
        UI.filterAuthor(data);
        UI.filterGenre(data);
    });
});
modalBtn.addEventListener('click', () => {
    UI.clearFields();
});
librarySave.addEventListener('click', (e) => {
    Library.saveBook();
    e.preventDefault();
});
azSortBtn.addEventListener('click', (e) => {
    e.preventDefault();
    Sort.azSort();
});
zaSortBtn.addEventListener('click', (e) => {
    e.preventDefault();
    Sort.zaSort();
});
dateUpSortBtn.addEventListener('click', (e) => {
    e.preventDefault();
    Sort.dateUpSort();
});
dateDownSortBtn.addEventListener('click', (e) => {
    e.preventDefault();
    Sort.dateDownSort();
});
searchInput.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    req.get('http://localhost:3000/library')
        .then((data) => {
            let books = data.filter(book => book.name.toLowerCase().includes(searchValue) || book.author.toLowerCase().includes(searchValue));
            UI.createCard(books);
        })
        .catch((err) => {
            UI.showAlert(err.message)
        });
});
filterAuthor.addEventListener('change', (e) => {
    Sort.filterAuthor();
});
filterGenre.addEventListener('change', (e) => {
    Sort.filterGenre();
});