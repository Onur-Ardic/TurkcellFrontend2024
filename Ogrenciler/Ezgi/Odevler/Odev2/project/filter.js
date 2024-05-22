const filterValues = document.querySelectorAll('.filter-area-item');
const sortSelect = document.querySelector('#sortSelect')

filterValues.forEach(filterValue => {
    filterValue.addEventListener('click', function () {
        filterValues.forEach(item => item.classList.remove('active'))
        this.classList.add('active')
        let filterValue = this.value
        UI.removeBooksUI()
        if(filterValue === "Tümü"){
            Request.get("http://localhost:3000/books")
                .then(data => {
                    data.forEach(book => UI.displayBooksUI(book))
                })
                .catch(error => console.error(error, "Kitaplar getirilemedi."));
        }else {
            Request.get(`http://localhost:3000/books?category=${filterValue}`)
                .then(data => {
                    data.forEach(book => UI.displayBooksUI(book))
                })
                .catch(error => console.error(error, "Kitaplar getirilemedi."));
        }
    });
});

sortSelect.addEventListener('change', function () {
    let sortValue = this.value;
    const books = Array.from(document.querySelectorAll('.card'));

   const sortedBooks = books.sort((a, b) => {
        const dateA = a.querySelector('.category-date').textContent.split("/")[1].trim();
        const dateB = b.querySelector('.category-date').textContent.split("/")[1].trim();
        if (sortValue === "A-Z") {
            return a.querySelector('.card-name').textContent.localeCompare(b.querySelector('.card-name').textContent)
        } else if (sortValue === "Z-A") {
            return b.querySelector('.card-name').textContent.localeCompare(a.querySelector('.card-name').textContent)
        } else if (sortValue === "desc") {
            return dateB.localeCompare(dateA)
        } else if (sortValue === "asc") {
            return dateA.localeCompare(dateB)
        }else {
            return 0;
        }
    })
    UI.removeBooksUI()
    sortedBooks.forEach(book => {
        booksArea.appendChild(book)
    })
});


