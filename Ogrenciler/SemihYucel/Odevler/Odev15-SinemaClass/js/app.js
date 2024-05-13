class Film {
  constructor(filmAdi, yonetmen, yil, tur, afisUrl) {
    this.filmAdi = filmAdi;
    this.yonetmen = yonetmen;
    this.yil = yil;
    this.tur = tur;
    this.afisUrl = afisUrl;
  }

  render(index) {
    const filmKarti = document.createElement("div");
    filmKarti.classList.add("filmKarti");

    const filmBilgisi = document.createElement("div");
    filmBilgisi.innerHTML = `
      <img src="${this.afisUrl}" alt="örnek-resim">
      <p><strong>Adı:</strong> ${this.filmAdi}</p>
      <p><strong>Yönetmen:</strong> ${this.yonetmen}</p>
      <p><strong>Yıl:</strong> ${this.yil}</p>
      <p><strong>Tür:</strong> ${this.tur}</p>        
    `;

    const buttonDiv = this.createButtonDiv(index);

    filmKarti.appendChild(filmBilgisi);
    filmKarti.appendChild(buttonDiv);
    filmKoleksiyonu.appendChild(filmKarti);
  }

  createButtonDiv(index) {
    const buttons = [
      { text: "Sil", classes: ["btn", "me-5", "btn-danger"], onClick: () => this.removeFromLocalStorage(index) },
      { text: "Güncelle", classes: ["btn", "btn-info"], onClick: () => this.updateFormValues(index) }
    ];

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("d-flex", "justify-content-center");

    buttons.forEach(button => {
      const btn = this.createButton(button.text, button.classes, button.onClick);
      buttonDiv.appendChild(btn);
    });

    return buttonDiv;
  }

  createButton(text, classes, onClick) {
    const button = document.createElement("button");
    button.classList.add(...classes);
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
  }

  removeFromLocalStorage(index) {
    let filmListesi = JSON.parse(localStorage.getItem("filmListesi"));
    filmListesi.splice(index, 1);
    localStorage.setItem("filmListesi", JSON.stringify(filmListesi));
    Film.updateFilmCollection();
  }

  updateFormValues(index) {
    document.getElementById("filmAdi").value = this.filmAdi;
    document.getElementById("yonetmen").value = this.yonetmen;
    document.getElementById("yil").value = this.yil;
    document.getElementById("tur").value = this.tur;
    document.getElementById("afisUrl").value = this.afisUrl;

    this.removeFromLocalStorage(index); // Kartı silme işlemi
  }

  static updateFilmCollection() {
    const filmKoleksiyonu = document.getElementById("filmKoleksiyonu");
    filmKoleksiyonu.textContent = "";

    const filmListesi = JSON.parse(localStorage.getItem("filmListesi")) || [];

    filmListesi.forEach((film, index) => {
      const newFilm = new Film(film.filmAdi, film.yonetmen, film.yil, film.tur, film.afisUrl);
      newFilm.render(index);
    });
  }
}

document.addEventListener("DOMContentLoaded", Film.updateFilmCollection);

const filmForm = document.getElementById("filmForm");
filmForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const filmAdi = document.getElementById("filmAdi").value;
  const yonetmen = document.getElementById("yonetmen").value;
  const yil = document.getElementById("yil").value;
  const tur = document.getElementById("tur").value;
  const afisUrl = document.getElementById("afisUrl").value;
  const film = new Film(filmAdi, yonetmen, yil, tur, afisUrl);
  let filmListesi = JSON.parse(localStorage.getItem("filmListesi")) || [];
  filmListesi.push(film);
  localStorage.setItem("filmListesi", JSON.stringify(filmListesi));
  filmForm.reset();
  Film.updateFilmCollection();
});
