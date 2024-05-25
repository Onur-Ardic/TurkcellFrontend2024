class UI {
    static clearModalForm() {
        nameBook.value = "",
        writer.value = "",
        description.value = "",
        category.value = "",
        date.value = "",
        image.value = ""
    }

    static removeBooksUI() {
        booksArea.innerHTML = ''
    }

    static displayBooksUI(book) {
    
        const bookCard = document.createElement("div");
        bookCard.classList.add('card', 'my-5')
        bookCard.style.color = 'white'
        bookCard.setAttribute("data-id", `${book.id}`)

        
        const row = document.createElement('div')
        row.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('book-image', 'col-md-6')

        const img = document.createElement('img')
        img.classList.add('book-image', 'img-fluid', 'rounded-start', 'col')
        img.src = `${book.image}`
        img.alt = `${book.nameBook}`

        imgDiv.appendChild(img)

        const colMd6 = document.createElement('div')
        colMd6.classList.add('col-md-6', 'd-flex', 'flex-column', 'justify-content-between')

        row.append(imgDiv, colMd6)
        bookCard.appendChild(row)

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'gap-1')

        const h4 = document.createElement('h4')
        h4.classList.add('card-name', 'fw-bold')
        h4.textContent = `${book.nameBook}`

        const cardBodyInfo = document.createElement('div')
        cardBodyInfo.classList.add('card-body-info')

        const cardWriter = document.createElement('p')
        cardWriter.classList.add('card-writer', 'fw-medium', 'mb-0')
        cardWriter.textContent = `${book.writer}`

        const categoryAndDateText = document.createElement('div')
        categoryAndDateText.classList.add('d-flex', 'fw-medium', 'mb-3', 'category-date')
        categoryAndDateText.textContent = `${book.category} / ${book.date}`

        const cardDescription = document.createElement('em')
        cardDescription.classList.add('card-description')
        cardDescription.textContent = `${book.description}`

        cardBody.append(h4, cardBodyInfo)
        cardBodyInfo.append(cardWriter, categoryAndDateText, cardDescription)

        const cardFooter = document.createElement('div')
        cardFooter.classList.add('cardFooter', 'mb-3', 'd-flex', 'gap-1', 'ms-3')

        colMd6.append(cardBody, cardFooter)

        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('btn', 'btn-danger', 'delete-btn')
        deleteBtn.addEventListener('click', function () {
            bookCard.remove()
            Request.delete(`http://localhost:3000/books/${book.id}`);
        })


        const editBtn = document.createElement('button')
        editBtn.classList.add('btn', 'btn-warning', 'edit-btn')
        editBtn.setAttribute('data-bs-toggle', 'modal')
        editBtn.setAttribute('data-bs-target', '#addBookModal')
        editBtn.addEventListener('click', function () {
            UI.FillInputs(book)
            addBookModalTitle.textContent = 'Kitap Düzenle'
            modalUpdateBtn.removeAttribute('disabled')
            saveForm.setAttribute('disabled', true)
        })

        cardFooter.append(deleteBtn, editBtn)

        const deleteIcon = document.createElement('i')
        deleteIcon.classList.add('fa-solid', 'fa-trash')

        const editIcon = document.createElement('i')
        editIcon.classList.add('fa-solid', 'fa-pen-to-square')


        deleteBtn.appendChild(deleteIcon)
        editBtn.appendChild(editIcon)
        booksArea.appendChild(bookCard)
    }
    
    static FillInputs(book) {
        nameBook.value = book.nameBook,
        writer.value = book.writer,
        description.value = book.description,
        category.value = book.category,
        date.value = book.date,
        image.value = book.image
        modalUpdateBtn.setAttribute('data-id', book.id)
    }
}



