class UI {
  static createCard(titleText, subtitleText, textText) {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = titleText;
    const subtitle = document.createElement("h6");
    subtitle.classList.add("card-subtitle");
    subtitle.textContent = subtitleText;
    const text = document.createElement("p");
    text.classList.add("card-text");
    text.textContent = textText;
    cardBody.appendChild(title);
    cardBody.appendChild(subtitle);
    cardBody.appendChild(text);
    card.appendChild(cardBody);
    return card;
  }
}
