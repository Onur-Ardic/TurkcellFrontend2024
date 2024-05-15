export class UI {
  static createButton(text, classes, onClick) {
    const button = document.createElement("button");
    button.classList.add(...classes);
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
  }

  static createButtonDiv(index, film) {
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("d-flex", "justify-content-center");

    buttonDiv.appendChild(
      UI.createButton("Sil", ["btn", "me-5", "btn-danger"], () =>
        film.removeFromLocalStorage(index)
      )
    );
    buttonDiv.appendChild(
      UI.createButton("Güncelle", ["btn", "btn-info"], () =>
        film.updateFormValues(index)
      )
    );

    return buttonDiv;
  }

  static createElement(tag, classes = [], attributes = {}) {
    const element = document.createElement(tag);
    classes.forEach((cls) => element.classList.add(cls));
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
    return element;
  }
}
