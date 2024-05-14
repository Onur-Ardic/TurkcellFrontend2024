let movieName = document.querySelector("#movieName");
let movieDirector = document.querySelector("#movieDirector");
let movieYear = document.querySelector("#movieYear");
let movieGenre = document.querySelector("#movieGenre");
let moviePoster = document.querySelector("#moviePoster");
let movieCardContainer = document.querySelector(".movieCardContainer");

//fonksiyonlarimizi static olarak tanimladigimiz icin artik UI class'i uzerinden erisebiliyoruz.Bu yuzden artik nesne uretmemize ihtiyacimiz gerek yok.
// let storage = new Storage()
// let ui = new UI()

document.addEventListener("DOMContentLoaded", function () {
    UI.displayAllMoviesToUI()
})

document.getElementById('afisOlustur').addEventListener("click", function () {
    UI.movieCardCreate()
})