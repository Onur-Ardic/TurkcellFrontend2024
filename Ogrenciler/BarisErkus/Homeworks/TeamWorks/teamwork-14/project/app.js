let cardList = localStorage.getItem('cardList');
cardList = cardList ? JSON.parse(cardList) : [];

const ui = new UI(document.getElementById('card-container'));

class MovieCard {
    constructor(image, name, subject, kind, director, year) {
        this.image = image;
        this.name = name;
        this.subject = subject;
        this.kind = kind;
        this.director = director;
        this.year = year;
    }
}

//#region Get Image
let selectedImage;
ui.addEvent('imageInput', 'change', event => {
    selectedImage = event.target.files[0];
    if (selectedImage) {
        let reader = new FileReader();
        reader.onload = event => {
            localStorage.setItem('selectedImage', event.target.result);
        };
        reader.readAsDataURL(selectedImage);
    }
});
//#endregion
//#region Get Kind
let kind = "Belirtilmedi";
document.querySelectorAll('.dropdown-menu a').forEach(element => {
    element.addEventListener('click', event => {
        kind = event.target.dataset.value;
        document.getElementById('movieKind').innerText = event.target.dataset.value;
    });
});
//#endregion

function addMovie() {
    ui.name = document.getElementById('movieNameInput').value;
    ui.subject = document.getElementById('movieTopic').value;
    ui.director = document.getElementById('directorInput').value;
    ui.year = document.getElementById('yearInput').value;
    ui.image = localStorage.getItem('selectedImage');

    if (ui.name && ui.subject && ui.director && ui.year) {
        const movieCardExample = new MovieCard(ui.image, ui.name, ui.subject, kind, ui.director, ui.year)
        cardList.push(movieCardExample);
        localStorage.setItem('cardList', JSON.stringify(cardList));
        ui.createCard(movieCardExample);
        ui.clearInputs();
    }
}

window.onload = function () {
    cardList.forEach(element => {
        ui.createCard(element);
    });
}
ui.addEvent('deleteAllItemButton', 'click', ui.deleteAllCard);
ui.addEvent('card-container', 'click', ui.deleteCard);
ui.addEvent('card-container', 'click', ui.updateCard);
ui.addEvent("addToCollection", 'click', addMovie);

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