class Movie {
    constructor(name, director, year, genre, poster) {
        this.movieId = crypto.randomUUID();
        this.name = name;
        this.director = director;
        this.year = year;
        this.genre = genre;
        this.poster = poster;
    }
}