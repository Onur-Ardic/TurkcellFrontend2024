const textInput = document.getElementById("inputText");
const addButton = document.getElementById("inputAdd");
const deleteButton = document.getElementById("inputDelete");
const activeCard = document.querySelector(".activeCard");
const passiveCard = document.querySelector(".passiveCard");

addButton.addEventListener("click", function () {
  let text = textInput.value.trim();
  if (text) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.textContent = text;
    card.addEventListener("click", moveToDone);
    activeCard.appendChild(card);
    textInput.value = "";
  }
});

deleteButton.addEventListener("click", function () {
  textInput.value = "";
});

function moveToDone(event) {
  const card = event.target;
  activeCard.removeChild(card);
  passiveCard.appendChild(card);
  card.removeEventListener("click", moveToDone);
  card.addEventListener("click", deleteCard);
}
function deleteCard(event) {
  const card = event.target;
  passiveCard.removeChild(card);
}

const initialActiveCards = document.querySelectorAll(".activeCard .card");
initialActiveCards.forEach((card) => {
  card.addEventListener("click", moveToDone);
});

const result = `
  <div class="card">
    <p class="card-text" id="inputText">${toDoActive.textInput}</p>
  </div>
  `;
