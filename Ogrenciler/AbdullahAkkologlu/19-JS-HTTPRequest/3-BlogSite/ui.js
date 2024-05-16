class UI {
  static createCard(titleText, textText) {
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "col-lg-3",
      "col-md-5",
      "bg-white",
      "bg-opacity-25"
    );
    const img = document.createElement("img");
    img.classList.add("card-img-top", "my-2");
    img.src = `https://picsum.photos/id/${imgId}/500/333`;
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("card-title", "fs-4", "text-uppercase");
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
