function Film(filmAdi, yonetmen, yil, tur, afisUrl) {
    this.filmAdi = filmAdi;
    this.yonetmen = yonetmen;
    this.yil = yil;
    this.tur = tur;
    this.afisUrl = afisUrl;
}

Film.prototype.render = function(index) {
    const filmKarti = document.createElement("div");
    filmKarti.classList.add("filmKarti");

    const filmBilgisi = document.createElement("div");
    filmBilgisi.innerHTML = `
        <iframe width="560" height="315" src="${this.afisUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p><strong>Adı:</strong> ${this.filmAdi}</p>
        <p><strong>Yönetmen:</strong> ${this.yonetmen}</p>
        <p><strong>Yıl:</strong> ${this.yil}</p>
        <p><strong>Tür:</strong> ${this.tur}</p>
    `;

    const silButton = document.createElement("button");
    silButton.textContent = "Sil";
    silButton.addEventListener("click", () => {
        this.removeFromLocalStorage(index);
    });

    const guncelleButton = document.createElement("button");
    guncelleButton.textContent = "Güncelle";
    guncelleButton.addEventListener("click", () => {
        this.updateFormValues(index);
    });

    filmKarti.appendChild(filmBilgisi);
    filmKarti.appendChild(silButton);
    filmKarti.appendChild(guncelleButton);
    filmKoleksiyonu.appendChild(filmKarti);
};

Film.prototype.removeFromLocalStorage = function(index) {
    let filmListesi = JSON.parse(localStorage.getItem("filmListesi")) || [];
    filmListesi.splice(index, 1);
    localStorage.setItem("filmListesi", JSON.stringify(filmListesi));
    filmKoleksiyonunuGuncelle();
};

Film.prototype.updateFormValues = function(index) {
    document.getElementById("filmAdi").value = this.filmAdi;
    document.getElementById("yonetmen").value = this.yonetmen;
    document.getElementById("yil").value = this.yil;
    document.getElementById("tur").value = this.tur;
    document.getElementById("afisUrl").value = this.afisUrl;

    this.removeFromLocalStorage(index);
};

document.addEventListener("DOMContentLoaded", function() {
    filmKoleksiyonunuGuncelle();
});

function filmKoleksiyonunuGuncelle() {
    const filmKoleksiyonu = document.getElementById("filmKoleksiyonu");
    filmKoleksiyonu.innerHTML = "";

    const filmListesi = JSON.parse(localStorage.getItem("filmListesi")) || [];

    filmListesi.forEach((film, index) => {
        const newFilm = new Film(film.filmAdi, film.yonetmen, film.yil, film.tur, film.afisUrl);
        newFilm.render(index);
    });
}

const filmForm = document.getElementById("filmForm");

filmForm.addEventListener("submit", function(event) {
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
    filmKoleksiyonunuGuncelle();
});
