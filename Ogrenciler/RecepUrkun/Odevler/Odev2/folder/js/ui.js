class UI {
    static async renderBooks(searchBook = "", sortBook = "", category = "", author = "") {
        while (bookContainer.firstChild) {
            bookContainer.removeChild(bookContainer.firstChild);
        }
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
            const sortFunctions = {
                "name-asc": (a, b) => a.name.localeCompare(b.name),
                "name-desc": (a, b) => b.name.localeCompare(a.name),
                "date-asc": (a, b) => new Date(a.written_date) - new Date(b.written_date),
                "date-desc": (a, b) => new Date(b.written_date) - new Date(a.written_date)
            };
            bookCards.sort(sortFunctions[sortBook]);
        }

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
            const bookNameContent = document.createElement('b');
            bookNameContent.textContent = book.name;
            bookName.appendChild(bookNameContent);

            const authorName = document.createElement('h6');
            authorName.classList.add('card-text', 'm-0', 'text-center', 'opacity-50', 'mb-1');
            const authorNameContent = document.createElement('i');
            authorNameContent.textContent = book.author;
            authorName.appendChild(authorNameContent);

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

            const strong = document.createElement('strong');
            strong.textContent = new Date(book.written_date).getFullYear();
            writtenDate.appendChild(strong);

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
            while (categoryDropdown.firstChild) {
                categoryDropdown.removeChild(categoryDropdown.firstChild);
            }

            const categoryHeader = document.createElement("li");
            const categoryHeaderContent = document.createElement("h6");
            categoryHeaderContent.classList.add("dropdown-header");
            categoryHeaderContent.textContent = "Kategoriler";
            categoryHeader.appendChild(categoryHeaderContent);
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
            const dividerContent = document.createElement("hr");
            dividerContent.classList.add("dropdown-divider");
            divider.appendChild(dividerContent);
            categoryDropdown.appendChild(divider);

            const authorHeader = document.createElement("li");
            const authorHeaderContent = document.createElement("h6");
            authorHeaderContent.classList.add("dropdown-header");
            authorHeaderContent.textContent = "Yazarlar";
            authorHeader.appendChild(authorHeaderContent);
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
            UI.ShowErrorMessage("Filtreler alınırken hata oluştu", 'danger')
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
        const response = await apiHelper.getSentenceFromDb();
        const randomId = Math.floor(Math.random() * response.length);
        const sentence = response[randomId];

        const blockquote = document.createElement('blockquote');
        blockquote.classList.add('blockquote');

        const p = document.createElement('p');
        p.classList.add('fs-6');
        p.textContent = sentence.content;

        blockquote.appendChild(p);

        const figcaption = document.createElement('figcaption');
        figcaption.classList.add('blockquote-footer');
        figcaption.textContent = sentence.bookAuthor;

        const cite = document.createElement('cite');
        cite.classList.add('ms-2');
        cite.title = "Book Title";
        cite.textContent = sentence.bookName;

        figcaption.appendChild(cite);

        headerSentence.appendChild(blockquote);
        headerSentence.appendChild(figcaption);
    }

    static ShowErrorMessage(message, type) {
        if (!errorMessage) return;
    
        errorMessage.className = '';
        errorMessage.classList.add('alert', `alert-${type}`, 'text-center', 'd-block');
        errorMessage.textContent = message;

        setTimeout(() => {
            errorMessage.classList.remove('d-block');
            errorMessage.classList.add('d-none');
        }, 3000);
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