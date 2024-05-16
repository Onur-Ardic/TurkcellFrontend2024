function Movie(name, type, director, img, year, imdb, desc, cast) {
  this.name = name;
  this.type = type;
  this.director = director;
  this.img =
    img ||
    "https://w7.pngwing.com/pngs/165/549/png-transparent-popcorn-movie-film-popcorn-the-film-film.png";
  this.year = year;
  this.imdb = imdb;
  this.desc = desc;
  this.cast = cast;
}
