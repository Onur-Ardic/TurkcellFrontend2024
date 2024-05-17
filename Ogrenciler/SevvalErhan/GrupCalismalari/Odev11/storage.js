function Storage() {
  this.movieNameList = JSON.parse(localStorage.getItem("movieNameList")) || [];
}

Storage.prototype.AddMovie = function (movie) {
  this.movieNameList.push(movie);
  localStorage.setItem("movieNameList", JSON.stringify(this.movieNameList));
  Page.AddCard(
    movie.name,
    movie.image,
    movie.year,
    movie.director,
    movie.category
  );
};

Storage.prototype.DeleteMovie = function (movieValue) {
  this.movieNameList.forEach((movie, index) => {
    if (movie.name === movieValue) {
      movieNameList.splice(index, 1); // Listeden çıkarma
    }
  });
  localStorage.setItem("movieNameList", JSON.stringify(movieNameList));
  Page.DeleteCardFromUI(movieValue);
};

Storage.prototype.UpdateMovie = function (moviNameToUpdate, movie) {
  this.movieNameList.forEach((movieItem) => {
    if (movieItem.name == moviNameToUpdate) {
      movieItem.name = movie.name;
      movieItem.director = movie.director;
      movieItem.year = movie.year;
      movieItem.category = movie.category;
      movieItem.image = movie.image;
    }
  });
  localStorage.setItem("movieNameList", JSON.stringify(this.movieNameList));
  Page.Update(moviNameToUpdate, movie);
};
