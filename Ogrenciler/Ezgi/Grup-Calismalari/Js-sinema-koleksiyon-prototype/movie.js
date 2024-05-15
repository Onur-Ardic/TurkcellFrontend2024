function Movie(title, director, description, year, genre, image) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.director = director;
  this.description = description;
  this.genre = genre;
  this.year = year;
  this.image =
    image ||
    "https://w7.pngwing.com/pngs/165/549/png-transparent-popcorn-movie-film-popcorn-the-film-film.png";
}

// örnek film
// title: Split
// director: M. Night Shyamalan
// description: Kevin, 23 farklı kişiliğe sahip bir adamdır. Bu kişiliklerden biri, 3 genç kızı kaçırır ve kızlar kaçırıldıklarında Kevin'in 24. kişiliği ortaya çıkar.
// genre: Gerilim
// year: 2016
// https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_.jpg
