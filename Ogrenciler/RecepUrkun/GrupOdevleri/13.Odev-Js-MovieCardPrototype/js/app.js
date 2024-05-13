let movieName = document.querySelector("#movieName");
let movieDirector = document.querySelector("#movieDirector");
let movieYear = document.querySelector("#movieYear");
let movieGenre = document.querySelector("#movieGenre");
let moviePoster = document.querySelector("#moviePoster");
let movieCardContainer = document.querySelector(".movieCardContainer");

let storage = new Storage()
let ui = new UI()

document.addEventListener("DOMContentLoaded", function () {
    ui.displayAllMoviesToUI()
})

document.getElementById('afisOlustur').addEventListener("click", function () {
    ui.movieCardCreate()
})