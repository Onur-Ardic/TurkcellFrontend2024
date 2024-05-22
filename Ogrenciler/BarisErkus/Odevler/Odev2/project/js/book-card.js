class BookCard {
    static createCard(book) {
        const card = UIHelper.createHtmlItem('div', ['card', 'book-card', 'mb-5', 'position-relative', 'shadow-lg', 'bg-dark', 'text-white', 'text-center']);
        card.setAttribute('data-id', book.id);

        const cardBodyFront = this.createCardBodyFront(book);
        const cardBodyBack = this.createCardBodyBack(book);
        [cardBodyFront, cardBodyBack].forEach(element => card.appendChild(element));
        return card;
    }
    static createCardBodyFront(book) {
        const cardBodyFront = UIHelper.createHtmlItem('div', ['card-body', 'position-absolute', 'card-front', 'd-flex', 'flex-column', 'w-100', 'h-100', 'align-items-center', 'text-center', 'bg-dark', 'text-white']);
        const cardBodyFrontImage = UIHelper.createHtmlItem('img', ['card-img-top', 'w-75', 'mb-4']);
        cardBodyFrontImage.src = book.coverUrl;

        const cardBodyFrontInfos = UIHelper.createHtmlItem('div', ['card-infos']);
        const cardBodyFrontTitle = UIHelper.createHtmlItem('h5', ['card-title', 'fw-bold', 'fs-2', 'text-secondary'], book.title);
        const cardBodyFrontAuthor = UIHelper.createHtmlItem('p', ['card-author', 'fs-4'], `${book.author.authorName}`);
        const cardBodyFrontDate = UIHelper.createHtmlItem('p', ['card-date', 'fs-5', 'text-warning'], `Tarih: ${book.year}`);
        const cardBodyFrontGenre = UIHelper.createHtmlItem('p', ['card-genre', 'fs-5', 'text-warning'], `Tür: ${book.genre}`);
        const cardBodyFrontSubInfos = UIHelper.createHtmlItem('div', ['card-sub-infos', 'd-flex', 'justify-content-center', 'gap-5']);

        [cardBodyFrontDate, cardBodyFrontGenre].forEach(element => cardBodyFrontSubInfos.appendChild(element));
        const cardBodyFrontDescription = UIHelper.createHtmlItem('p', ['card-description', 'mt-3', 'text-start'], book.description);

        [cardBodyFrontTitle, cardBodyFrontAuthor, cardBodyFrontSubInfos, cardBodyFrontDescription].forEach(element => cardBodyFrontInfos.appendChild(element));
        [cardBodyFrontImage, cardBodyFrontInfos].forEach(element => cardBodyFront.appendChild(element));

        return cardBodyFront;
    }
    static createCardBodyBack(book) {
        const cardBodyBack = UIHelper.createHtmlItem('div', ['card-body', 'position-absolute', 'card-back', 'd-flex', 'flex-column', 'w-100', 'h-100', 'justify-content-between', 'align-items-center', 'text-center', 'bg-black', 'text-white']);
        const cardBodyBackImage = UIHelper.createHtmlItem('img', ['card-img-top', 'w-75']);
        cardBodyBackImage.src = book.author.authorImageUrl;
        const cardBodyBackTitle = UIHelper.createHtmlItem('h5', ['card-title', 'fw-bold', 'fs-2', 'text-secondary'], book.author.authorName);
        const cardBodyBackBiography = UIHelper.createHtmlItem('p', ['card-biography', 'text-start'], `${book.author.biography}`);

        const cardButtons = UIHelper.createHtmlItem('div', ['card-buttons', 'd-flex', 'gap-5', 'mt-3']);
        const updateButton = UIHelper.createHtmlItem('button', ['btn', 'btn-warning', 'btn-update-book'], 'Güncelle');
        updateButton.setAttribute('data-bs-toggle', 'modal');
        updateButton.setAttribute('data-bs-target', '#createBookModal');
        const deleteButton = UIHelper.createHtmlItem('button', ['btn', 'btn-secondary', 'btn-delete-book'], 'Sil');

        [updateButton, deleteButton].forEach(element => cardButtons.appendChild(element));
        [cardBodyBackImage, cardBodyBackTitle, cardBodyBackBiography, cardButtons].forEach(element => cardBodyBack.appendChild(element));

        return cardBodyBack;
    }
}
