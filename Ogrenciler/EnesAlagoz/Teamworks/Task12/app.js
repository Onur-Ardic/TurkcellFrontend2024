function Film(filmAdi, yonetmen, yil, tur, afisUrl) {
  this.filmAdi = filmAdi;
  this.yonetmen = yonetmen;
  this.yil = yil;
  this.tur = tur;
  this.afisUrl = afisUrl;
}

Film.prototype.render = function (index) {
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

  const silButton = document.createElement("button");
  silButton.classList.add("btn", "me-5", "btn-danger");
  silButton.textContent = "Sil";
  silButton.addEventListener("click", () => {
    this.removeFromLocalStorage(index);
  });

  const guncelleButton = document.createElement("button");
  guncelleButton.classList.add("btn", "btn-info");
  guncelleButton.textContent = "Güncelle";
  guncelleButton.addEventListener("click", () => {
    this.updateFormValues(index);
  });

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("d-flex", "justify-content-center");
  buttonDiv.appendChild(silButton);
  buttonDiv.appendChild(guncelleButton);

  filmKarti.appendChild(filmBilgisi);
  // filmKarti.appendChild(silButton);
  // filmKarti.appendChild(guncelleButton);
  filmKoleksiyonu.appendChild(filmKarti);
  filmKarti.appendChild(buttonDiv);
};

Film.prototype.removeFromLocalStorage = function (index) {
  let filmListesi = JSON.parse(localStorage.getItem("filmListesi"));
  filmListesi.splice(index, 1);
  localStorage.setItem("filmListesi", JSON.stringify(filmListesi));
  filmKoleksiyonunuGuncelle();
};

//kartdaki verilerin input kutucuklarına doldurulması.
Film.prototype.updateFormValues = function (index) {
  document.getElementById("filmAdi").value = this.filmAdi;
  document.getElementById("yonetmen").value = this.yonetmen;
  document.getElementById("yil").value = this.yil;
  document.getElementById("tur").value = this.tur;
  document.getElementById("afisUrl").value = this.afisUrl;

  this.removeFromLocalStorage(index);
};

document.addEventListener("DOMContentLoaded", function () {
  filmKoleksiyonunuGuncelle();
}); // site yüklendiğinde tüm storage teki  kayıtları ekrana basmak için, (ilk açılış)

function filmKoleksiyonunuGuncelle() {
  const filmKoleksiyonu = document.getElementById("filmKoleksiyonu");
  filmKoleksiyonu.textContent = "";

  const filmListesi = JSON.parse(localStorage.getItem("filmListesi"));

  filmListesi.forEach((film, index) => {
    const newFilm = new Film(film.filmAdi, film.yonetmen, film.yil, film.tur, film.afisUrl);
    newFilm.render(index);
  });
}

const filmForm = document.getElementById("filmForm");
filmForm.addEventListener("submit", function (event) {
  console.log(filmForm);
  event.preventDefault(); //sayfanın yenilenmesini engelledik.
  const filmAdi = document.getElementById("filmAdi").value;
  const yonetmen = document.getElementById("yonetmen").value;
  const yil = document.getElementById("yil").value;
  const tur = document.getElementById("tur").value;
  const afisUrl = document.getElementById("afisUrl").value;
  const film = new Film(filmAdi, yonetmen, yil, tur, afisUrl);
  let filmListesi = JSON.parse(localStorage.getItem("filmListesi"));
  filmListesi.push(film);
  localStorage.setItem("filmListesi", JSON.stringify(filmListesi));
  filmForm.reset();
  filmKoleksiyonunuGuncelle();
});
