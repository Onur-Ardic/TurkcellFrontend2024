const storage = new Storage();

function Movies() {}
Movies.prototype.addMovie = function () {
  const newMovie = {
    name: inputs.name.value.trim(),
    director: inputs.director.value.trim(),
    year: inputs.year.value.trim(),
    movieType: inputs.movieType.value.trim(),
    imageUrl: inputs.imageUrl.value.trim(),
    id: crypto.randomUUID(),
  };
  
};

Movies.prototype.deleteMovie = function (movieId) {
  storage.deleteMovieFromStorage(movieId);
  let ui = new UI();
  ui.displayMovies();
};

class Mat {
  static cube(x) {
    return x * x * x;
  }
}

class Movies {
  static addMovie () {
    name = inputs.name.value.trim();
    director = inputs.director.value.trim();
    year = inputs.year.value.trim();
    movieType = inputs.movieType.value.trim();
    imageUrl = inputs.imageUrl.value.trim();
    id = crypto.randomUUID();
    storage.addMovieToStorage(newMovie); // storage class değiştiğinde burayı da değiştir 
}

constructor(name, director, year, movieType, imageUrl) {
  this.name = name;
  this.director = director;
  this.year = year;
  this.movieType = movieType;
  this.imageUrl = imageUrl;
  this.id = crypto.randomUUID();
 }
}
 