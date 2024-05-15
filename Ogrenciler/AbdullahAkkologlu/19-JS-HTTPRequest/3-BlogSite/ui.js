class UI {
  static createCard(titleText, textText) {
    const card = document.createElement("div");
    card.classList.add("card");
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = `https://picsum.photos/id/${imgId}/500/333`;
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = titleText;
    const text = document.createElement("p");
    text.classList.add("card-text");
    text.textContent = textText;
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    card.appendChild(img);
    card.appendChild(cardBody);
    return card;
  }
}
