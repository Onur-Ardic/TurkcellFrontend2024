const filmForm = document.getElementById("filmForm");
const filmKoleksiyonu = document.getElementById("filmKoleksiyonu");

filmForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfa yenilenmesini engeller
    
    // Formdaki input değerlerini aldım
    const filmAdi = document.getElementById("filmAdi").value;
    const yonetmen = document.getElementById("yonetmen").value;
    const yil = document.getElementById("yil").value;
    const tur = document.getElementById("tur").value;
    const afisUrl = document.getElementById("afisUrl").value;
    
    // Değerleri film objesine kaydettim
    const film = { filmAdi, yonetmen, yil, tur, afisUrl };
    
    // Local Storage işlemi
    let filmListesi = JSON.parse(localStorage.getItem("filmListesi")) || [];
    filmListesi.push(film);
    localStorage.setItem("filmListesi", JSON.stringify(filmListesi));

    filmForm.reset();

    filmKoleksiyonunuGuncelle();
});

// Film koleksiyonunu ekranda gösteren fonksiyon
function filmKoleksiyonunuGuncelle() {

    filmKoleksiyonu.innerHTML = "";
    
    // Film listesini getir veya boş dizi oluştur
    const filmListesi = JSON.parse(localStorage.getItem("filmListesi")) || [];
    
    // kart oluşturmak için
    filmListesi.forEach(function(film, index) {
        const filmKarti = document.createElement("div");
        filmKarti.classList.add("filmKarti");
        
        const filmBilgisi = document.createElement("div");
        filmBilgisi.innerHTML = `

<style>
.filmKarti {
    color: white;
    max-width: 580px;
    margin: 10px auto; /* Eşit şekilde sağa ve sola dayalı */
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    background: linear-gradient(90deg, rgb(160, 12, 10), rgb(0, 0, 0), rgb(160, 12, 10));
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    transition: max-width 0.3s;
    flex-direction: column;
    align-items: flex-start;
}

.filmBilgisi {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px; /* Kart içindeki bilgilerin üstünde 10px boşluk bırakır */
    margin-left: 10px; /* Kartın sol kenarından 10px uzaklık */
    margin-right: 10px; /* Kartın sağ kenarından 10px uzaklık */
}


.filmBilgisi img {
    width: 100px;
    height: auto;
    margin-right: 10px;
    border-radius: 5px;
}

.filmKarti button {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    margin: 5px auto;
    border-radius: 3px;
    cursor: pointer;
    width: 80px;
    display: block; 
    transition: background-color 0.3s;
}

.filmKarti button:hover {
    background-color: #d32f2f;
}
</style>

            <iframe width="560" height="315" src="${film.afisUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p><strong>Adı:</strong> ${film.filmAdi}</p>
            <p><strong>Yönetmen:</strong> ${film.yonetmen}</p>
            <p><strong>Yıl:</strong> ${film.yil}</p>
            <p><strong>Tür:</strong> ${film.tur}</p>
        `;
        
        // Silme
        const silButton = document.createElement("button");
        silButton.textContent = "Sil";
        silButton.addEventListener("click", function() {
            // Filmi listeden sil
            filmListesi.splice(index, 1);
            localStorage.setItem("filmListesi", JSON.stringify(filmListesi));
            filmKoleksiyonunuGuncelle();
        });
        
        // Güncelleme
        const guncelleButton = document.createElement("button");
        guncelleButton.textContent = "Güncelle";
        guncelleButton.addEventListener("click", function() {
            document.getElementById("filmAdi").value = film.filmAdi;
            document.getElementById("yonetmen").value = film.yonetmen;
            document.getElementById("yil").value = film.yil;
            document.getElementById("tur").value = film.tur;
            document.getElementById("afisUrl").value = film.afisUrl;
            
            // Filmi listeden sil
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
