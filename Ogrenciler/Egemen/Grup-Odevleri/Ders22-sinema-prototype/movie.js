function Movie({ name, director, year, genre, posterUrl }) {
  this.name = name;
  this.director = director;
  this.year = year;
  this.genre = genre;
  this.posterUrl = posterUrl;
}

Movie.prototype.displayCard = function (index) {
  const filmCard = document.createElement("div");
  filmCard.className = "film-card";
  filmCard.innerHTML = `
            <div class="film-details">
                <img src="${this.posterUrl}" alt="${this.name}">
                <div class="film-info">
                    <strong>${this.name}</strong>
                    <p>Yönetmen: ${this.director}</p>
                    <p>Yıl: ${this.year}</p>
                    <p>Tür: ${this.genre}</p>
                </div>
                <div class="card-buttons">
                    <button onclick="editFilm(${index})">Güncelle</button>
                    <button onclick="deleteFilm(${index})">Sil</button>
                </div>
            </div>
        `;
  filmCollection.appendChild(filmCard);
};