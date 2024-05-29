// localStorage.clear()

let cardList = [];

// Image
let selectedFile;
document.getElementById("imageInput").addEventListener("change", (event) => {
  let selectedFile = event.target.files[0];
  if (selectedFile) {
    let reader = new FileReader();
    reader.onload = (event) => {
      localStorage.setItem("selectedImage", event.target.result);
    };
    reader.readAsDataURL(selectedFile);
  }
});

// Kind
let kind = "Belirtilmedi";
document.querySelectorAll(".dropdown-menu a").forEach((element) => {
  element.addEventListener("click", (event) => {
    kind = event.target.dataset.value;
    document.getElementById("movieKind").innerText = event.target.dataset.value;
  });
});

document.getElementById("addToCollection").addEventListener("click", (e) => {
  if (
    document.getElementById("imageInput").checkValidity() &&
    document.getElementById("movieNameInput").checkValidity() &&
    document.getElementById("movieTopic").checkValidity() &&
    document.getElementById("directorInput").checkValidity() &&
    document.getElementById("yearInput").checkValidity()
  ) {
    e.preventDefault();
    addToCollection();
  }
});

document.getElementById("deleteAllItemButton").addEventListener("click", () => {
  cardList.forEach((card) => {
    card.remove();
  });
  cardList = [];
});

const addToCollection = () => {
  // Card
  const card = document.createElement("div");
  card.classList = "card shadow p-2 border-0";
  card.style.width = "18rem";
  card.style.margin = "1rem";
  // Image Preview
  const imagePreview = document.createElement("div");
  imagePreview.classList =
    "imagePreview d-flex align-items-center justify-content-center";
  // Image
  let lsImage = localStorage.getItem("selectedImage");
  if (lsImage) {
    let imgElement = document.createElement("img");
    imgElement.src = lsImage;
    imgElement.style.height = "10rem";
    // localStorage.clear()
    imgElement.classList.add("img-fluid");
    imagePreview.appendChild(imgElement);
  }
  // Card Body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  // Card Title
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = document.getElementById("movieNameInput").value;
  // Card Text
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerText = document.getElementById("movieTopic").value;
  // Card Infos
  const cardInfos = document.createElement("div");
  cardInfos.classList = "d-flex justify-content-between flex-wrap";

  const knd = document.createElement("p");
  knd.innerText = kind;
  const director = document.createElement("p");
  director.classList.add("fw-bold");
  director.innerText = document.getElementById("directorInput").value;
  const year = document.createElement("p");
  year.innerText = document.getElementById("yearInput").value;
  // Card Buttons
  const cardButtons = document.createElement("div");
  cardButtons.classList = "d-flex justify-content-center gap-3 flex-wrap mb-2";
  const buttonUpdate = document.createElement("button");
  buttonUpdate.classList = "btn btn-success";
  buttonUpdate.href = "#";
  buttonUpdate.textContent = "Güncelle";
  const buttonDelete = document.createElement("button");
  buttonDelete.classList = "btn btn-danger";
  buttonDelete.href = "#";
  buttonDelete.textContent = "Sil";

  let infos = [knd, director, year];
  infos.forEach((element) => cardInfos.appendChild(element));

  let buttons = [buttonUpdate, buttonDelete];
  buttons.forEach((element) => cardButtons.appendChild(element));

  let bodies = [cardTitle, cardText, cardInfos];
  bodies.forEach((element) => cardBody.appendChild(element));

  card.appendChild(imagePreview);
  card.appendChild(cardBody);
  card.appendChild(cardButtons);

  cardList.push(card);
  cardList.forEach((cardItem) => {
    document.getElementById("card-container").appendChild(cardItem);
  });

  // Clear Inputs
  localStorage.removeItem("selectedImage");
  document.getElementById("imageInput").value = "";
  document.getElementById("movieNameInput").value = "";
  document.getElementById("movieTopic").value = "";
  document.getElementById("movieKind").innerText = "Türü";
  document.getElementById("directorInput").value = "";
  document.getElementById("yearInput").value = "";
  // Update Card
  buttonUpdate.addEventListener("click", (e) => {
    e.preventDefault();
    // document.getElementById('imageInput').value = selectedFile;
    document.getElementById("movieNameInput").value = cardTitle.innerText;
    document.getElementById("movieTopic").value = cardText.innerText;
    document.getElementById("movieKind").innerText =
      knd.innerText === "Belirtilmedi" ? "Türü" : knd.innerText;
    document.getElementById("directorInput").value = director.innerText;
    document.getElementById("yearInput").value = year.innerText;
    cardList.pop(card);
    card.remove();
  });
  // Delete Card
  buttonDelete.addEventListener("click", () => {
    cardList.pop(card);
    card.remove();
  });
};

// Validation
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
