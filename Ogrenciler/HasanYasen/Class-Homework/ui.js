class UI {
    constructor() {
        this.filmAdi = document.getElementById("filmAdi");
        this.filmYonetmen = document.getElementById("filmYonetmen");
        this.filmYili = document.getElementById("filmYili");
        this.filmTuru = document.getElementById("filmTuru");
        this.fid = document.getElementById("filmId");
        this.filmAfis = document.getElementById("filmAfis");
        this.cardRow = document.getElementById("cardRow");
        this.form = document.getElementById("form");
    }

    clear() {
        this.filmAdi.value = "";
        this.filmYonetmen.value = "";
        this.filmYili.value = "";
        this.filmTuru.value = "";
        this.filmAfis.value = "";
        this.fid.value = "";
    }

    getMovies() {
        this.cardRow.innerHTML = "";
        if (movies.length > 0) {
            this.cardRow.innerHTML = "<h1 class='text-center mt-5'>Eklemiş Olduğunuz Filmler</h1>";
        }
        movies?.forEach((film) => {
            const col = document.createElement("div");
            col.classList.add("col-4");
            col.id = `${Number(film.id)}`;
            cardRow.appendChild(col);
            const card = document.createElement("div");
            card.className = "card my-3";
            col.appendChild(card);
            const cardHeader = document.createElement("div");
            cardHeader.classList.add("card-header");
            card.appendChild(cardHeader);
            if (film.afis) {
                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body");
                cardBody.style.backgroundImage = `url(${film.afis})`;
                cardBody.style.backgroundSize = "cover";
                cardBody.style.backgroundPosition = "center";
                cardBody.style.height = "600px";
                card.appendChild(cardBody);
            }
            const cardFooter = document.createElement("div");
            cardFooter.classList.add("card-footer");
            cardFooter.className = "d-flex align-items-center justify-content-center gap-3 p-2"
            card.appendChild(cardFooter);
            const filmAdiText = document.createTextNode(film.ad);
            let pAd = document.createElement("p");
            pAd.appendChild(filmAdiText);
            pAd.className = "text-center fw-bold";
            cardHeader.className = "text-center"
            cardHeader.appendChild(pAd);
            const filmYonetmen = document.createTextNode(film.yonetmen);
            let pYon = document.createElement("p");
            pYon.appendChild(filmYonetmen);
            cardHeader.appendChild(pYon);
            const filmYili = document.createTextNode(film.yil);
            let pYear = document.createElement("p");
            pYear.appendChild(filmYili);
            cardHeader.appendChild(pYear);
            const filmTuru = document.createTextNode(film.tur);
            let p = document.createElement("p");
            p.appendChild(filmTuru);
            cardHeader.appendChild(p);
            const btnEdit = document.createElement("button");
            btnEdit.className = "btn btn-warning w-50";
            btnEdit.textContent = "Düzenle";
            cardFooter.appendChild(btnEdit);
            btnEdit.addEventListener("click", () => movie.editMovie(col.id));
            const btnDel = document.createElement("button");
            btnDel.className = "btn btn-danger w-50";
            btnDel.textContent = "Sil";
            cardFooter.appendChild(btnDel);
            btnDel.addEventListener("click", () => movie.deleteMovies(col.id));
        });
    }
}

