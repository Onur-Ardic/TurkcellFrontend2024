class UI {
    static showAlert(type) {
        alert(type === "success" ? "Başarılı" : "Hatalı");
    }

    static async renderBooks(searchBook = "", sortBook = "", category = "", author = "") {
        bookContainer.innerHTML = "";
        let bookCards = await apiHelper.getBookFromDb();

        if (searchBook) {
            bookCards = bookCards.filter((book) =>
                book.name.toLowerCase().includes(searchBook)
            );
        }

        if (category) {
            bookCards = bookCards.filter((book) => book.category === category);
        }

        if (author) {
            bookCards = bookCards.filter((book) => book.author === author);
        }

        if (sortBook) {
            switch (sortBook) {
                case "name-asc":
                    bookCards.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case "name-desc":
                    bookCards.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case "date-asc":
                    bookCards.sort((a, b) => new Date(a.written_date) - new Date(b.written_date));
                    break;
                case "date-desc":
                    bookCards.sort((a, b) => new Date(b.written_date) - new Date(a.written_date));
                    break;
            }
        }

        // if (sortBook) {
        //     const sortFunctions = {
        //         "name-asc": (a, b) => a.name.localeCompare(b.name),
        //         "name-desc": (a, b) => b.name.localeCompare(a.name),
        //         "date-asc": (a, b) => new Date(a.written_date) - new Date(b.written_date),
        //         "date-desc": (a, b) => new Date(b.written_date) - new Date(a.written_date)
        //     };
        //     bookCards.sort(sortFunctions[sortBook]);
        // }
        
        bookCards.forEach(book => {
            const col = document.createElement('div');
            col.classList.add('col');

            const card = document.createElement('div');
            card.classList.add('card', 'h-100', 'bookCard');

            const img = document.createElement('img');
            img.src = book.img;
            img.alt = '';
            img.classList.add('img-fluid', 'book-img', 'border-bottom', 'card-img-top');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const flexDiv = document.createElement('div');
            flexDiv.classList.add('d-flex', 'flex-wrap', 'flex-column', 'mb-2', 'pb-2', 'border-bottom');

            const bookName = document.createElement('p');
            bookName.classList.add('card-text', 'text-center', 'mb-1');
            bookName.innerHTML = `<b>${book.name}</b>`;

            const authorName = document.createElement('h6');
            authorName.classList.add('card-text', 'm-0', 'text-center', 'opacity-50', 'mb-1');
            authorName.innerHTML = `<i>${book.author}</i>`;

            const badgeContainer = document.createElement('div');
            badgeContainer.classList.add('d-flex', 'justify-content-center');

            const badge = document.createElement('span');
            badge.classList.add('badge', 'd-flex', 'align-items-center', 'justify-content-center', 'text-dark-emphasis', 'bg-dark-subtle', 'border', 'border-dark-subtle', 'rounded-pill');

            const badgeIcon = document.createElement('i');
            badgeIcon.classList.add('fa-solid', 'fa-book-open', 'rounded-circle', 'me-3', 'fa-2x');

            const badgeText = document.createElement('h6');
            badgeText.classList.add('m-0');
            badgeText.textContent = book.category;

            badge.appendChild(badgeIcon);
            badge.appendChild(badgeText);

            badgeContainer.appendChild(badge);

            flexDiv.appendChild(bookName);
            flexDiv.appendChild(authorName);
            flexDiv.appendChild(badgeContainer);

            const buttonGroup = document.createElement('div');
            buttonGroup.classList.add('btn-group');

            const updateButton = document.createElement('button');
            updateButton.type = 'button';
            updateButton.classList.add('btn', 'btn-sm', 'btn-outline-warning');
            updateButton.setAttribute('onclick', `updateBook("${book.id}")`);
            updateButton.textContent = 'Guncelle';

            const deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.classList.add('btn', 'btn-sm', 'btn-outline-danger');
            deleteButton.setAttribute('onclick', `deleteBook("${book.id}")`);
            deleteButton.textContent = 'Sil';

            buttonGroup.appendChild(updateButton);
            buttonGroup.appendChild(deleteButton);

            const cardFooter = document.createElement('div');
            cardFooter.classList.add('d-flex', 'justify-content-between', 'align-items-center');

            const writtenDate = document.createElement('small');
            writtenDate.classList.add('text-body-secondary');
            writtenDate.innerHTML = `<strong>${new Date(book.written_date).getFullYear()}</strong>`;

            cardFooter.appendChild(buttonGroup);
            cardFooter.appendChild(writtenDate);

            cardBody.appendChild(flexDiv);
            cardBody.appendChild(cardFooter);

            card.appendChild(img);
            card.appendChild(cardBody);

            col.appendChild(card);
            bookContainer.appendChild(col);
        })
    }

    static addFiltersToDropdown = async () => {
        try {
            const books = await Request.get(baseUrl);
            const categories = [...new Set(books.map(book => book.category))];
            const authors = [...new Set(books.map(book => book.author))];

            const categoryDropdown = document.getElementById("categoryDropdown");
            categoryDropdown.innerHTML = '';

            const categoryHeader = document.createElement("li");
            categoryHeader.innerHTML = '<h6 class="dropdown-header">Kategoriler</h6>';
            categoryDropdown.appendChild(categoryHeader);

            categories.forEach(category => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.className = "dropdown-item";
                a.href = "#";
                a.textContent = category;
                a.addEventListener("click", () => {
                    selectedCategory = category;
                    UI.renderBooks("", currentSort, selectedCategory);
                });
                li.appendChild(a);
                categoryDropdown.appendChild(li);
            });

            const divider = document.createElement("li");
            divider.innerHTML = '<hr class="dropdown-divider" />';
            categoryDropdown.appendChild(divider);

            const authorHeader = document.createElement("li");
            authorHeader.innerHTML = '<h6 class="dropdown-header">Yazarlar</h6>';
            categoryDropdown.appendChild(authorHeader);

            authors.forEach(author => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.className = "dropdown-item";
                a.href = "#";
                a.textContent = author;
                a.addEventListener("click", () => {
                    selectedAuthor = author;
                    UI.renderBooks("", currentSort, selectedCategory, selectedAuthor);
                });
                li.appendChild(a);
                categoryDropdown.appendChild(li);
            });
            this.renderBooks()
        } catch (error) {
            console.error("Filtreler alınırken hata oluştu:", error);
        }
    };

    static sortAllBooksToUI = () => {
        const sortOptions = [
            { elementId: "sortNameAZ", sortType: "name-asc" },
            { elementId: "sortNameZA", sortType: "name-desc" },
            { elementId: "sortDateNewToOld", sortType: "date-desc" },
            { elementId: "sortDateOldToNew", sortType: "date-asc" },
        ];
        sortOptions.forEach(option => {
            document.getElementById(option.elementId).addEventListener("click", () => {
                currentSort = option.sortType;
                UI.renderBooks("", currentSort, selectedCategory);
            });
        });
    };

    static getRandomSentence = async () => {
        const response = await apiHelper.getSentenceFromDb()
        const randomId = Math.floor(Math.random() * response.length)
        const sentence = response[randomId]
        headerSentence.innerHTML += `
        <blockquote class="blockquote">
                <p class="fs-6">
                  ${sentence.content}
                </p>
              </blockquote>
              <figcaption class="blockquote-footer">
                ${sentence.bookAuthor}
                <cite title="Book Title">${sentence.bookName}</cite>
              </figcaption>`
    }

    static clearInputs() {
        kitapKapakResmi.value = ""
        kitapAdi.value = ""
        kitapYazari.value = ""
        kitapKategori.value = ""
        kitapTarih.value = ""
    }

    static resetFiltersandCategory = () => {
        selectedCategory = ""
        currentSort = ""
        this.renderBooks()
    }
}