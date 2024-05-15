class Movie {
  constructor(title, director, description, year, genre, image) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.director = director;
    this.description = description;
    this.genre = genre;
    this.year = year;
    this.image = image || "https://w7.pngwing.com/pngs/165/549/png-transparent-popcorn-movie-film-popcorn-the-film-film.png";
  }
}

