import { UI } from "./ui.js";

class BaseFilm {
  constructor(filmAdi, yonetmen, yil, tur, afisUrl) {
    this.filmAdi = filmAdi;
    this.yonetmen = yonetmen;
    this.yil = yil;
    this.tur = tur;
    this.afisUrl = afisUrl;
  }

  static getFilmListesi() {
    return JSON.parse(localStorage.getItem("filmListesi")) || [];
  }

  static setFilmListesi(filmListesi) {
    localStorage.setItem("filmListesi", JSON.stringify(filmListesi));
  }

  removeFromLocalStorage(index) {
    const filmListesi = BaseFilm.getFilmListesi();
    filmListesi.splice(index, 1);
    BaseFilm.setFilmListesi(filmListesi);
    BaseFilm.renderFilmCollection();
  }

  updateFormValues(index) {
    ["filmAdi", "yonetmen", "yil", "tur", "afisUrl"].forEach((id) => {
      document.getElementById(id).value = this[id];
    });
    this.removeFromLocalStorage(index);
  }

  createFilmCard(index) {
    const filmKarti = UI.createElement("div", ["filmKarti"]);

    const filmBilgisi = UI.createElement("div");
    filmBilgisi.innerHTML = `
      <img src="${this.afisUrl}" alt="örnek-resim">
      <p><strong>Adı:</strong> ${this.filmAdi}</p>
      <p><strong>Yönetmen:</strong> ${this.yonetmen}</p>
      <p><strong>Yıl:</strong> ${this.yil}</p>
      <p><strong>Tür:</strong> ${this.tur}</p>
    `;

    const buttonDiv = UI.createButtonDiv(index, this);

    filmKarti.appendChild(filmBilgisi);
    filmKarti.appendChild(buttonDiv);
    return filmKarti;
  }

  static renderFilmCollection() {
    const filmKoleksiyonu = document.getElementById("filmKoleksiyonu");
    filmKoleksiyonu.textContent = "";

    BaseFilm.getFilmListesi().forEach((film, index) => {
      const newFilm = new BaseFilm(
        film.filmAdi,
        film.yonetmen,
        film.yil,
        film.tur,
        film.afisUrl
      );
      filmKoleksiyonu.appendChild(newFilm.createFilmCard(index));
    });
  }
}

document.addEventListener("DOMContentLoaded", BaseFilm.renderFilmCollection);

const filmForm = document.getElementById("filmForm");
filmForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const film = new BaseFilm(
    document.getElementById("filmAdi").value,
    document.getElementById("yonetmen").value,
    document.getElementById("yil").value,
    document.getElementById("tur").value,
    document.getElementById("afisUrl").value
  );

  const filmListesi = BaseFilm.getFilmListesi();
  filmListesi.push(film);
  BaseFilm.setFilmListesi(filmListesi);
  filmForm.reset();
  BaseFilm.renderFilmCollection();
});
