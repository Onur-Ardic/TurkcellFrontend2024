let nameInput = document.getElementById("name");
let directorInput = document.getElementById("director");
let yearInput = document.getElementById("year");
let submitButton = document.getElementById("submitButton");
let cards = document.querySelector(".cards");
let movies;

if(localStorage.getItem("movies")){
    movies = JSON.parse(localStorage.getItem("movies"));
} else {
    movies = [];
    localStorage.setItem("movies", JSON.stringify(movies));
}


//submite basıldığında formdaki değerler local'e yazılsın
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    addMovie();
});

function addMovie() {
    let newMovie = {
        name: nameInput.value,
        director: directorInput.value,
        year: yearInput.value
    }
    movies.push(newMovie);
    console.log(movies);
    localStorage.setItem("movies", JSON.stringify(movies));
}

function display(){
    let displayMovies = JSON.parse(localStorage.getItem("movies"));
    console.log(displayMovies);
    cards.innerHTML = "";
    





}
display();