function UI(){
    this.movieNameInput = document.getElementById("movieNameInput");
    this.directorInput = document.getElementById("directorInput");
    this.yearInput = document.getElementById("yearInput");
    this.typeInput = document.getElementById("typeInput");
    this.imageInput = document.getElementById("imageInput");
    this.movies = document.getElementById("movies");
    this.btnAdd = document.getElementById("btnAdd");
    this.movieNameShows = document.querySelector("#cardShows h2 span");
    this.directorShows = document.querySelector("#cardShows h3 span");
    this.yearShows = document.querySelector("#cardShows .year span");
    this.typeShows = document.querySelector("#cardShows .type span");
    this.imgShows = document.querySelector("#cardShows img");
    this.filters = document.querySelectorAll("#filters div");
    this.inputs = document.querySelectorAll("form input");
    this.form = document.querySelector("form");
}


UI.prototype.displayMovies = function(filter,movieList){
    this.movies.innerHTML = "";

    for(let movie of movieList){
        if(movie.type == filter || filter == "All"){
            let col = `
                <div class="col">
                    <div class="card my-3" id="${movie.id}" position-relative>
                        <img src="${movie.image}" alt="" class="img-fluid">
                        <div class="dropdown position-absolute top-0 end-0">
                            <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-ellipsis"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#" onclick="movielist.deleteMovie('${movie.id}')"><i class="fa-solid fa-trash"></i> Delete</a></li>
                                <li><a class="dropdown-item" href="#" onclick='movielist.editMovie("${movie.id}","${movie.movieName}","${movie.director}","${movie.year}","${movie.type}","${movie.image}")'><i class="fa-solid fa-pen-nib"></i> Edit</a></li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title ">Movie Name: <span class="d-block text-truncate">${movie.movieName}</span></h2>
                            <h3 class="fw-medium my-3" id="director">Director: <span class="d-block text-truncate">${movie.director}</span></h2>
                            <p class="fw-medium my-3" id="year">Year: <span class="d-block text-truncate">${movie.year}</span></p>
                            <p class="fw-medium my-3" id="type">Type: <span class="d-block text-truncate">${movie.type}</span></p>
                        </div>                    
                    </div>
                </div>
            `;
            this.movies.insertAdjacentHTML("beforeend",col);
        }
        
    }
    
}