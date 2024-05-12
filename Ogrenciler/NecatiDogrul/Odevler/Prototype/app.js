import {Movie} from "./movie.js";
import { Storage } from "./storage.js";

const nameInput = document.querySelector("#name");
const directorInput = document.querySelector("#director");
const yearInput = document.querySelector("#year");
const genreInput = document.querySelector("#genre");
const imageInput = document.querySelector("#image");
const submitButton = document.querySelector("#submitButton");
const movieForm = document.querySelector("#movieForm");
const cards = document.querySelector(".cards");
let updateMode = false;
let movieIndex;


submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
    const movie= new Movie(nameInput.value,directorInput.value,yearInput.value,genreInput.value,imageInput.value);
    console.log(movie);
})

const storage = new Storage();
console.log(storage);



