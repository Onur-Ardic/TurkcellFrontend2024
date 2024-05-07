const filmForm = document.getElementById("filmForm");
const filmKoleksiyonu = document.getElementById("filmKoleksiyonu");

filmForm.addEventListener("submit", function(event) {
    event.preventDefault(); // sayfa yenilmesin diye
    
    const filmAdi = document.getElementById("filmAdi").value;
    const yonetmen = document.getElementById("yonetmen").value;
    const yil = document.getElementById("yil").value;
    const tur = document.getElementById("tur").value;
    const afisUrl = document.getElementById("afisUrl").value;
    
    const film = { filmAdi, yonetmen, yil, tur, afisUrl };
    let filmListesi = JSON.parse(localStorage.getItem("filmListesi")) || [];
    filmListesi.push(film);
    localStorage.setItem("filmListesi", JSON.stringify(filmListesi)); // local storage a kaydettik
    
    filmForm.reset(); // sil butonuna basınca formu temizledik
    filmKoleksiyonunuGuncelle(); // güncelle butonuna basınca inputlara getirdik
});

function filmKoleksiyonunuGuncelle() {
    filmKoleksiyonu.innerHTML = "";
    
    const filmListesi = JSON.parse(localStorage.getItem("filmListesi")) || [];
    filmListesi.forEach(function(film, index) {
        const filmKarti = document.createElement("div");
        filmKarti.classList.add("filmKarti");
        
        const filmBilgisi = document.createElement("div");
        filmBilgisi.innerHTML = `
            <img src="${film.afisUrl}" alt="${film.filmAdi}">
            <p><strong>Adı:</strong> ${film.filmAdi}</p>
            <p><strong>Yönetmen:</strong> ${film.yonetmen}</p>
            <p><strong>Yıl:</strong> ${film.yil}</p>
            <p><strong>Tür:</strong> ${film.tur}</p>
        `;
        
        const silButton = document.createElement("button");
        silButton.textContent = "Sil";
        silButton.addEventListener("click", function() {
            filmListesi.splice(index, 1);
            localStorage.setItem("filmListesi", JSON.stringify(filmListesi));
            filmKoleksiyonunuGuncelle();
        });
        
        const guncelleButton = document.createElement("button");
        guncelleButton.textContent = "Güncelle";
        guncelleButton.addEventListener("click", function() {
            document.getElementById("filmAdi").value = film.filmAdi;
            document.getElementById("yonetmen").value = film.yonetmen;
            document.getElementById("yil").value = film.yil;
            document.getElementById("tur").value = film.tur;
            document.getElementById("afisUrl").value = film.afisUrl;
            
            filmListesi.splice(index, 1);
            localStorage.setItem("filmListesi", JSON.stringify(filmListesi));
            filmKoleksiyonunuGuncelle();
        });
        
        filmKarti.appendChild(filmBilgisi);
        filmKarti.appendChild(silButton);
        filmKarti.appendChild(guncelleButton);
        filmKoleksiyonu.appendChild(filmKarti);
    });
}

filmKoleksiyonunuGuncelle();
