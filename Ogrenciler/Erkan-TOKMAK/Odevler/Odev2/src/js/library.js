class Book {
    constructor(name, author, year, genre, picture) {
        this.name = name;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.picture = picture;
    }
}
class Library {
    static saveBook = () => {
        const bookName = bookNameInput.value;
        const author = authorInput.value;
        const year = yearInput.value;
        const genre = genreInput.value;
        const picture = pictureInput.value;
        const book = new Book(bookName, author, year, genre, picture);
        if(bookName === '' || author === '' || year === '' || genre === '' || picture === '') {
            UI.showAlert('Please fill in all fields.', 'danger');
        }else if (idInput.value === '') {
            req.post('http://localhost:3000/library', book)
                .then(() => {
                    UI.showAlert('New Book Added.', 'success')
                })
                .catch((err) => {
                    UI.showAlert(err.message, 'danger')
                });
        } else {
            req.put(`http://localhost:3000/library/${idInput.value}`, book)
                .then(() => {
                    UI.showAlert('Book Update Success', 'success')
                })
                .catch((err) => {
                    UI.showAlert(err.message, 'danger')
                });
        }
    }
    static editBook = (id) => {
        req.get(`http://localhost:3000/library/${id}`)
            .then(data => {
                idInput.value = data.id;
                bookNameInput.value = data.name;
                authorInput.value = data.author;
                yearInput.value = data.year;
                genreInput.value = data.genre;
                pictureInput.value = data.picture;
            })
            .catch((err) => { 
                UI.showAlert(err.message) 
            });
        modalBtn.click();
    }
    static deleteBook = (id) => {
        if (confirm('Silmek istediğinize emin misiniz?')) {
            req.delete(`http://localhost:3000/library/${id}`)
                .then(() => {
                    UI.showAlert('Book Delete Success', 'success')
                })
                .catch((err) => {
                    UI.showAlert(err.message)
                });
        }
    }
}
