const textInput = document.getElementById("inputText");
const addButton = document.getElementById("inputAdd");
const deleteButton = document.getElementById("inputDelete");
const activeCard = document.querySelector(".activeCard");
const passiveCard = document.querySelector(".passiveCard");
const imageInput = document.getElementById("inputImage");

// kartları sürüklemek için
let currentCard = null;

addButton.addEventListener("click", function () {
  const text = textInput.value.trim();
  if (text) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.draggable = true;
    card.textContent = text;

    card.addEventListener("dragstart", dragCard);
    card.addEventListener("contextmenu", editCardInline);
    card.addEventListener("click", deleteButton);

    activeCard.appendChild(card);
    textInput.value = "";
    localStorage.setItem(text, JSON.stringify(text));
  }
});

function dragCard(event) {
  currentCard = event.target; // sürüklenen kart
}

// kartı bırakmak için allow
function allowDrop(event) {
  event.preventDefault();
}

function dropCard(event, target) {
  event.preventDefault();

  // nereye bırakıldığını anlamak için
  if (target === "active") {
    activeCard.appendChild(currentCard);
  } else if (target === "passive") {
    passiveCard.appendChild(currentCard);
  }

  currentCard = null; // kart dragını resetlemek
}

// sağ clickle kartı editlemek için 'editCardInline'
function editCardInline(event) {
  event.preventDefault();

  const card = event.target;

  if (card.firstChild.tagName !== "INPUT") {
    const input = document.createElement("input");
    input.type = "text";
    input.value = card.textContent;

    card.textContent = "";
    card.appendChild(input);

    const saveChanges = () => {
      card.textContent = input.value;
    };

    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        saveChanges();
      }
    });
  }
}

const initialActiveCards = document.querySelectorAll(".activeCard .card");
initialActiveCards.forEach((card) => {
  card.draggable = true;
  card.addEventListener("dragstart", dragCard); // sol  ile sürükleme
  card.addEventListener("contextmenu", editCardInline); // sağ ile düzenleme
});
