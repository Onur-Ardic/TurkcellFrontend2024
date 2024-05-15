// Film kartı oluşturmak ve düzenlemek için UI yardımcı sınıfını içe aktarır
import { UI } from "./ui.js";

// BaseFilm sınıfı, film özelliklerini tanımlar ve yönetir
class BaseFilm {
  constructor(filmAdi, yonetmen, yil, tur, afisUrl) {
    // Film bilgilerini tanımlayan constructor
    this.filmAdi = filmAdi;
    this.yonetmen = yonetmen;
    this.yil = yil;
    this.tur = tur;
    this.afisUrl = afisUrl;
  }

  static getFilmListesi() {
    // localStorage'dan film listesini alır
    return JSON.parse(localStorage.getItem("filmListesi")) || [];
  }

  static setFilmListesi(filmListesi) {
    // localStorage'a film listesini kaydeder
    localStorage.setItem("filmListesi", JSON.stringify(filmListesi));
  }

  removeFromLocalStorage(index) {
    // Belirtilen indeksteki filmi listeden siler ve günceller
    const filmListesi = BaseFilm.getFilmListesi();
    filmListesi.splice(index, 1);
    BaseFilm.setFilmListesi(filmListesi);
    BaseFilm.renderFilmCollection();
  }

  updateFormValues(index) {
    // Form alanlarını günceller ve filmi listeden siler
    ["filmAdi", "yonetmen", "yil", "tur", "afisUrl"].forEach((id) => {
      document.getElementById(id).value = this[id];
    });
    this.removeFromLocalStorage(index);
  }

  createFilmCard(index) {
    // Film kartını oluşturur ve döndürür
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
    // Film koleksiyonunu ekrana render eder
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

// Sayfa yüklendiğinde film koleksiyonunu render eder
document.addEventListener("DOMContentLoaded", BaseFilm.renderFilmCollection);

// Film formu gönderildiğinde yeni bir film ekler
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
