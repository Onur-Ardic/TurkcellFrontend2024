class UI {
    constructor(cardContainer) {
        this.cardContainer = cardContainer;
    }
    addEvent(id, event, action) {
        document.getElementById(id).addEventListener(event, action);
    }
    createItem(element, classList, innerText = "") {
        const item = document.createElement(element);
        item.classList = classList;
        if (innerText != "") {
            item.innerText = innerText;
        }
        return item;
    }
    createCard(movieCard) {
        // Image
        const imagePreview = this.createItem('div', 'imagePreview d-flex align-items-center justify-content-center');
        let lsImage = movieCard.image;
        if (lsImage) {
            const imgElement = this.createItem('img', 'img-fluid');
            imgElement.style.height = '10rem';
            imgElement.src = lsImage;
            imagePreview.appendChild(imgElement);
        }

        // Card
        const card = this.createItem('div', 'card shadow p-2 border-0');
        card.style = 'width: 18rem; margin: 1rem;';
        const cardBody = this.createItem('div', 'card-body');
        const cardTitle = this.createItem('h5', 'card-title', movieCard.name);
        const cardText = this.createItem('p', 'card-text', movieCard.subject);
        const cardInfos = this.createItem('div', 'd-flex justify-content-between flex-wrap');
        const kind = this.createItem('p', 'kind', movieCard.kind);
        const director = this.createItem('p', 'fw-bold', movieCard.director);
        const year = this.createItem('p', 'year', movieCard.year);
        const cardButtons = this.createItem('div', 'd-flex justify-content-center gap-3 flex-wrap mb-2');
        const buttonUpdate = this.createItem('button', 'btn btn-success', "Güncelle");
        const buttonDelete = this.createItem('button', 'btn btn-danger', "Sil");

        let infos = [kind, director, year];
        infos.forEach(element => cardInfos.appendChild(element));

        let buttons = [buttonUpdate, buttonDelete];
        buttons.forEach(element => cardButtons.appendChild(element));

        let bodies = [cardTitle, cardText, cardInfos];
        bodies.forEach(element => cardBody.appendChild(element));

        let cardElements = [imagePreview, cardBody, cardButtons];
        cardElements.forEach(element => card.appendChild(element));

        this.cardContainer.appendChild(card);
    }
    deleteCard(event) {
        if (event.target.classList.contains('btn-danger')) {
            const itemElement = event.target.parentElement.parentElement;
            itemElement.remove();
            cardList = cardList.filter(element => element.name != itemElement.children[1].children[0].innerText);
            localStorage.setItem('cardList', JSON.stringify(cardList));
        }
    }
    deleteAllCard() {
        cardList = [];
        localStorage.removeItem('cardList');
        window.location.reload();
    }
    updateCard(event) {
        if (event.target.classList.contains('btn-success')) {
            const itemElement = event.target.parentElement.parentElement;
            const tempCard = cardList.filter(element => element.name == itemElement.children[1].children[0].innerText)[0];

            itemElement.remove();
            cardList = cardList.filter(element => element.name != itemElement.children[1].children[0].innerText);
            localStorage.setItem('cardList', JSON.stringify(cardList));

            document.getElementById('movieNameInput').value = tempCard.name;
            document.getElementById('movieTopic').value = tempCard.subject;
            document.getElementById('directorInput').value = tempCard.director;
            document.getElementById('yearInput').value = tempCard.year;
            document.getElementById('movieKind').innerText = kind;
            localStorage.setItem('selectedImage', tempCard.image);
        }
    }
    clearInputs() {
        document.querySelectorAll('form input').forEach(element => element.value = '');
        localStorage.removeItem('selectedImage');
        document.getElementById('movieKind').innerText = "Türü";
    }
}