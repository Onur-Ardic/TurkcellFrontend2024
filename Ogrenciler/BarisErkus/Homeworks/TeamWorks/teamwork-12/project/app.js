// Image
document.getElementById('imageInput').addEventListener('change', event => {
    let selectedFile = event.target.files[0];
    if (selectedFile) {
        let reader = new FileReader();
        reader.onload = event => {
            console.log(selectedFile)
            localStorage.setItem('selectedImage', event.target.result);
        };
        reader.readAsDataURL(selectedFile);
    }
});

// Kind
let kind = "Belirtilmedi";
document.querySelectorAll('.dropdown-menu a').forEach(element => {
    element.addEventListener('click', event => {
        kind = event.target.dataset.value;
        document.getElementById('movieKind').innerText = event.target.dataset.value;
    });
});

document.getElementById('addToCollection').addEventListener('click', () => {
    if (document.getElementById('imageInput').checkValidity() &&
        document.getElementById('movieNameInput').checkValidity() &&
        document.getElementById('movieTopic').checkValidity() &&
        document.getElementById('directorInput').checkValidity() &&
        document.getElementById('yearInput').checkValidity()) {
        addToCollection();
    }
});

const addToCollection = () => {
    // Card
    const card = document.createElement('div');
    card.classList = 'card shadow p-2 border-0';
    card.style.width = '25rem'
    card.style.margin = '1rem'
    // Image Preview
    const imagePreview = document.createElement('div');
    imagePreview.classList = 'imagePreview d-flex align-items-center justify-content-center';
    // Image
    let lsImage = localStorage.getItem('selectedImage')
    if (lsImage) {
        let imgElement = document.createElement('img');
        imgElement.src = lsImage;
        imgElement.style.height = "15rem"
        // localStorage.clear()
        imgElement.classList.add('img-fluid');
        imagePreview.appendChild(imgElement)
        console.log(imgElement)
    }

    // Card Body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    // Card Title
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = document.getElementById('movieNameInput').value;
    // Card Text
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerText = document.getElementById('movieTopic').value;

    const cardFooter = document.createElement('div');
    cardFooter.classList = "d-flex justify-content-between flex-wrap"

    const knd = document.createElement('p');
    knd.innerText = kind
    const director = document.createElement('p');
    director.classList.add('fw-bold')
    director.innerText = document.getElementById('directorInput').value
    const year = document.createElement('p');
    year.innerText = document.getElementById('yearInput').value

    let footers = [knd, director, year];
    footers.forEach(element => cardFooter.appendChild(element));

    let bodies = [cardTitle, cardText, cardFooter]
    bodies.forEach(element => cardBody.appendChild(element));

    card.appendChild(imagePreview);
    card.appendChild(cardBody);

    document.getElementById('card-container').appendChild(card);
}

//? Validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
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