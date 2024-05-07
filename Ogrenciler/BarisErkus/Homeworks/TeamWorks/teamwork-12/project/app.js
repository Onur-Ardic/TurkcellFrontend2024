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
let kind;
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.dropdown-menu a').forEach(element => {
        element.addEventListener('click', e => {
            kind = e.target.getAttribute('data-value');
        });
    });
});

const addToCollection = () => {
    // Card
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '25rem'
    card.style.margin = '1rem'
    // Image Preview
    const imagePreview = document.createElement('div');
    imagePreview.classList.add('imagePreview');
    // Image
    let lsImage = localStorage.getItem('selectedImage')
    if (lsImage) {
        let imgElement = document.createElement('img');
        imgElement.src = lsImage;
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

    cardFooter.appendChild(knd);
    cardFooter.appendChild(director);
    cardFooter.appendChild(year);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardFooter);

    card.appendChild(imagePreview);
    card.appendChild(cardBody);

    document.getElementById('card-container').appendChild(card);
}

{/* <div class="card" style="width: 18rem;" >
    imgpreview
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <div class="d-flex justify-content-between">
                <p>Tür</p>
                <p>Yönetmen</p>
                <p>Yıl</p>
            </div>
        </div>
</div> */}