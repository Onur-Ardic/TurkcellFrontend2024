let nameI = document.getElementById("name");
let director = document.getElementById("director");
let year = document.getElementById("year");
let submit = document.getElementById("submit");
let cards = document.getElementById("cards");
let moviesArray = localStorage.getItem("moviesArray") ? JSON.parse(localStorage.getItem("moviesArray")) : [];


function addMovie(name, director, year) {
    let movie = {
        name: name,
        director: director,
        year: year
    };
    moviesArray.push(movie); 
    console.log(moviesArray);
    localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
}

submit.addEventListener("click", function(event) {
    event.preventDefault(); 
    addMovie(nameI.value, director.value, year.value);
    display();
});

function display() {
    cards.innerHTML = ""; // Clear the existing cards before displaying

    let displayMovies = localStorage.getItem("moviesArray");
    let movies = JSON.parse(displayMovies);

    movies.forEach(movie => {
        let card = document.createElement("div");
        card.classList.add("card");

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = movie.name;

        let cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = `Director: ${movie.director} - Year: ${movie.year}`;

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("btn");
        deleteButton.classList.add("btn-danger");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function() {
            deleteMovie(movie.name);
        });
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(deleteButton);
        card.appendChild(cardBody);
        cards.appendChild(card);

    });
}

function deleteMovie(name){
    let index = moviesArray.findIndex(movie => movie.name === name);
    moviesArray.splice(index, 1);
    localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
    display();
}

display();
