let editMovieId;
let movies = JSON.parse(localStorage.getItem("movies")) || [];

class Movie {
    constructor(id, ad, yonetmen, yil, tur, afis) {
        this.id = id;
        this.ad = ad;
        this.yonetmen = yonetmen;
        this.yil = yil;
        this.tur = tur;
        this.afis = afis;
    }

    save() {
        let editId = movies.findIndex((film) => film.id == ui.fid.value);
        if (ui.fid.value) {
            let movie = new Movie(Number(ui.fid.value), ui.filmAdi.value, ui.filmYonetmen.value, ui.filmYili.value, ui.filmTuru.value, ui.filmAfis.value);
            movies[editId] = { ...movie };
            editMovieId = null;
        } else {
            let movie = new Movie(Number(Math.floor(Math.random() * 10000)), ui.filmAdi.value, ui.filmYonetmen.value, ui.filmYili.value, ui.filmTuru.value, ui.filmAfis.value);
            movies.push(movie);
        }
        localStorage.setItem("movies", JSON.stringify(movies));
        ui.clear();
        ui.getMovies();
    }

    deleteMovies(filmId) {
        movies = movies.filter((film) => Number(film.id) !== Number(filmId));
        localStorage.setItem("movies", JSON.stringify(movies));
        document.getElementById(filmId).remove();
    }

    editMovie(filmId) {
        movies.map((film) => {
            if (Number(film.id) === Number(filmId)) {
                console.log(film)
                ui.fid.value = Number(film.id);
                ui.filmAdi.value = film.ad;
                ui.filmYonetmen.value = film.yonetmen;
                ui.filmTuru.value = film.tur;
                ui.filmYili.value = film.yil;
                ui.filmAfis.value = film.afis;
            }
        })
        editMovieId = filmId;
    }
}