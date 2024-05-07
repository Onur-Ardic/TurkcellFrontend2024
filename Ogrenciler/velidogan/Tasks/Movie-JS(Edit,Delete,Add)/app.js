const movieNameInput = document.getElementById("movieNameInput");
const directorInput = document.getElementById("directorInput");
const yearInput = document.getElementById("yearInput");
const typeInput = document.getElementById("typeInput");
const imageInput = document.getElementById("imageInput");
const movies = document.getElementById("movies");
const btnAdd = document.getElementById("btnAdd");
const movieNameShows = document.querySelector("#cardShows h2 span");
const directorShows = document.querySelector("#cardShows h3 span");
const yearShows = document.querySelector("#cardShows .year span");
const typeShows = document.querySelector("#cardShows .type span");
const imgShows = document.querySelector("#cardShows img");
const filters = document.querySelectorAll("#filters div");
const inputs = document.querySelectorAll("form input");
let editId;
let editStatus = false;
let image;



let movieList = []

if(localStorage.getItem("movieList") !== null){
    movieList = JSON.parse(localStorage.getItem("movieList"));
}

displayMovies("All");

function displayMovies(filter){
    movies.innerHTML = "";

    for(let movie of movieList){
        if(movie.type == filter || filter == "All"){
            let col = `
                <div class="col">
                    <div class="card" id="${movie.id}" position-relative>
                        <img src="${movie.image}" alt="" class="img-fluid">
                        <div class="dropdown position-absolute top-0 end-0">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-ellipsis"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#" onclick="deleteMovie(${movie.id})"><i class="fa-solid fa-trash"></i> Delete</a></li>
                                <li><a class="dropdown-item" href="#" onclick='editMovie(${movie.id},"${movie.movieName}","${movie.director}","${movie.year}","${movie.type}","${movie.image}")'><i class="fa-solid fa-pen-nib"></i> Edit</a></li>
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
            movies.insertAdjacentHTML("beforeend",col);
        }
        
    }
    
}

btnAdd.addEventListener("click",newMovie);

function newMovie(){
    for(let input of inputs){
        console.log(input.required)
        if(input.required == false){
            return;
        }
    }
    if(!editStatus){
        movieList.push( {"id":movieList.length + 1,"movieName":movieNameInput.value,"director":directorInput.value,"year":yearInput.value,"type":typeInput.value,"image":imageInput.value});
    }else{
        for(let movie of movieList){
            if(editId == movie.id){
                movie.movieName = movieNameInput.value;
                movie.director = directorInput.value;
                movie.year = yearInput.value;
                movie.type = typeInput.value;
                movie.image = imageInput.value;
            }
        }
    }
    editStatus = false;
    movieNameInput.value = "";
    directorInput.value = "";
    yearInput.value = "";
    typeInput.value = "";
    imageInput.value = "";
    localStorage.setItem("movieList",JSON.stringify(movieList));
    displayMovies(document.querySelector("#filters div.active").textContent);
}

function editMovie(id,name,director,year,type,image){
    editId = id;
    movieNameInput.value = name;
    directorInput.value = director;
    yearInput.value = year;
    typeInput.value = type;
    imageInput.value = image;

    movieNameShows.innerText = name;
    directorShows.innerText = director;
    yearShows.innerText = year;
    typeShows.innerText = type;
    imgShows.src = image;
    editStatus = true;
}

function deleteMovie(id){
    let deleteId;
    for(let index in movieList){
        if(movieList[index].id == id){
            deleteId = index;
        }
    }

    movieList.splice(deleteId,1);
    localStorage.setItem("movieList",JSON.stringify(movieList));
    displayMovies(document.querySelector("#filters div.active").textContent); 
}

for(let filter of filters){
    filter.addEventListener("click",function(){
        document.querySelector("#filters div.active").classList.remove("active");
        filter.classList.add("active");
        displayMovies(filter.textContent);
    });
}

movieNameInput.addEventListener("input",function(){
    movieNameShows.innerText = movieNameInput.value;
})
directorInput.addEventListener("input",function(){
    directorShows.innerText = directorInput.value;
})
yearInput.addEventListener("input",function(){
    yearShows.innerText = yearInput.value;
})
typeInput.addEventListener("input",function(){
    typeShows.innerText = typeInput.value;
})
imageInput.addEventListener("input",function(){
    let newBack = `${imageInput.value}`;
    document.querySelector("#cardShows img").src = newBack;
})