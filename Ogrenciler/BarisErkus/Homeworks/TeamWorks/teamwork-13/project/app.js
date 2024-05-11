let cardList = localStorage.getItem('cardList') ? JSON.parse(localStorage.getItem('cardList')) : [];
function MovieCard(image, name, subject, kind, director, year) {
    this.image = image;
    this.name = name;
    this.subject = subject;
    this.kind = kind;
    this.director = director;
    this.year = year;
}
//#region UI
function UI() {
}
const ui = new UI();
UI.prototype.listenerEvent = function (id, event, action) {
    document.getElementById(id).addEventListener(event, action);
}
UI.prototype.createItem = function (element, classList, innerText = "") {
    const item = document.createElement(element);
    item.classList = classList;
    if (innerText != "") {
        item.innerText = innerText;
    }
    return item;
}
UI.prototype.creatCard = function (movieCard) {
    // Card
    const card = ui.createItem('div', 'card shadow p-2 border-0');
    card.style = 'width: 18rem; margin: 1rem;';
    // Image
    const imagePreview = ui.createItem('div', 'imagePreview d-flex align-items-center justify-content-center');
    let lsImage = movieCard.image;
    if (lsImage) {
        const imgElement = ui.createItem('img', 'img-fluid');
        imgElement.style.height = '10rem'
        imgElement.src = lsImage;
        imagePreview.appendChild(imgElement)
    }
    const cardBody = ui.createItem('div', 'card-body');
    const cardTitle = ui.createItem('h5', 'card-title', movieCard.name);
    const cardText = ui.createItem('p', 'card-text', movieCard.subject);
    const cardInfos = ui.createItem('div', 'd-flex justify-content-between flex-wrap');

    const kind = ui.createItem('p', '', movieCard.kind);
    const director = ui.createItem('p', 'fw-bold', movieCard.director);
    const year = ui.createItem('p', '', movieCard.year);
    // Card Buttons
    const cardButtons = ui.createItem('div', 'd-flex justify-content-center gap-3 flex-wrap mb-2');
    const buttonUpdate = ui.createItem('button', 'btn btn-success');
    buttonUpdate.href = "#"
    buttonUpdate.textContent = "Güncelle"
    const buttonDelete = ui.createItem('button', 'btn btn-danger');
    buttonDelete.href = "#"
    buttonDelete.textContent = "Sil"

    let infos = [kind, director, year];
    infos.forEach(element => cardInfos.appendChild(element));

    let buttons = [buttonUpdate, buttonDelete];
    buttons.forEach(element => cardButtons.appendChild(element));

    let bodies = [cardTitle, cardText, cardInfos];
    bodies.forEach(element => cardBody.appendChild(element));

    let cardElements = [imagePreview, cardBody, cardButtons];
    cardElements.forEach(element => card.appendChild(element));

    document.getElementById('card-container').appendChild(card);
}
UI.prototype.deleteCard = function (event) {
    if (event.target.classList.contains('btn-danger')) {
        event.target.parentElement.parentElement.remove();
        cardList = cardList.filter(element => element.name != event.target.parentElement.parentElement.children[1].children[0].innerText);
        localStorage.setItem('cardList', JSON.stringify(cardList));
    }
}
UI.prototype.deleteAllCard = function () {
    cardList = [];
    localStorage.removeItem('cardList');
    window.location.reload();
}
UI.prototype.updateCard = function (event) {
    if (event.target.classList.contains('btn-success')) {
        const tempCard = cardList.filter(element => element.name == event.target.parentElement.parentElement.children[1].children[0].innerText)[0];

        event.target.parentElement.parentElement.remove();
        cardList = cardList.filter(element => element.name != event.target.parentElement.parentElement.children[1].children[0].innerText);
        localStorage.setItem('cardList', JSON.stringify(cardList));

        document.getElementById('movieNameInput').value = tempCard.name;
        document.getElementById('movieTopic').value = tempCard.subject;
        document.getElementById('directorInput').value = tempCard.director;
        document.getElementById('yearInput').value = tempCard.year;
        document.getElementById('movieKind').innerText = kind;
        localStorage.setItem('selectedImage', tempCard.image);
    }
}
UI.prototype.clearInputs = function () {
    localStorage.removeItem('selectedImage');
    document.getElementById('imageInput').value = "";
    document.getElementById('movieNameInput').value = "";
    document.getElementById('movieTopic').value = "";
    document.getElementById('movieKind').innerText = "Türü";
    document.getElementById('directorInput').value = "";
    document.getElementById('yearInput').value = "";
}
//#endregion

// Get Image
let selectedImage;
document.getElementById('imageInput').addEventListener('change', event => {
    let selectedImage = event.target.files[0];
    if (selectedImage) {
        let reader = new FileReader();
        reader.onload = event => {
            localStorage.setItem('selectedImage', event.target.result);
        };
        reader.readAsDataURL(selectedImage);
    }
});
// Get Kind
let kind = "Belirtilmedi";
document.querySelectorAll('.dropdown-menu a').forEach(element => {
    element.addEventListener('click', event => {
        kind = event.target.dataset.value;
        document.getElementById('movieKind').innerText = event.target.dataset.value;
    });
});

function addMovie() {
    const name = document.getElementById('movieNameInput').value;
    const subject = document.getElementById('movieTopic').value;
    const director = document.getElementById('directorInput').value;
    const year = document.getElementById('yearInput').value;
    if (name && subject && director && year) {
        const movieCardExample = new MovieCard(localStorage.getItem('selectedImage'), name, subject, kind, director, year)
        cardList.push(movieCardExample);
        localStorage.setItem('cardList', JSON.stringify(cardList));
        ui.creatCard(movieCardExample);
        ui.clearInputs();
    }
}

window.onload = function () {
    cardList.forEach(element => {
        ui.creatCard(element);
    });
}
ui.listenerEvent('deleteAllItemButton', 'click', ui.deleteAllCard);
ui.listenerEvent('card-container', 'click', ui.deleteCard);
ui.listenerEvent('card-container', 'click', ui.updateCard);
ui.listenerEvent("addToCollection", 'click', addMovie);
// Validation
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()