const movieNameInput = document.getElementById("movieNameInput");
const directorInput = document.getElementById("directorInput");
const yearInput = document.getElementById("yearInput");
const typeInput = document.getElementById("typeInput");
const imageInput = document.getElementById("imageInput");
const movies = document.getElementById("movies");
const btnAdd = document.getElementById("btnAdd");
let editId;
let editStatus = false;
let image;



let movieList = []

if(localStorage.getItem("movieList") !== null){
    movieList = JSON.parse(localStorage.getItem("movieList"));
}

displayMovies();

function displayMovies(){
   movies.innerHTML = "";
    for(let movie of movieList){
        let col = `
            <div class="col">
                <div class="card" id="${movie.id}" position-relative>
                    <img src="img/${movie.image}" alt="" class="img-fluid">
                    <div class="dropdown position-absolute top-0 end-0">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" onclick="deleteMovie(${movie.id})"><i class="fa-solid fa-trash"></i> Delete</a></li>
                            <li><a class="dropdown-item" href="#" onclick='editMovie(${movie.id},"${movie.movieName}","${movie.director}","${movie.year}","${movie.type}")'><i class="fa-solid fa-pen-nib"></i> Edit</a></li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Movie Name: <span>${movie.movieName}</span></h2>
                        <h3 class="fw-medium my-3" id="director">Director: <span>${movie.director}</span></h2>
                        <p class="fw-medium my-3" id="year">Year: <span>${movie.year}</span></p>
                        <p class="fw-medium my-3" id="type">Type: <span>${movie.type}</span></p>
                    </div>
                    
                </div>
            </div>
        `;
        movies.insertAdjacentHTML("beforeend",col);
    }
    
}

btnAdd.addEventListener("click",newMovie);
imageInput.onchange = function () {
    image = imageInput.value;
};
function newMovie(){
    image = image.replace(/^.*[\\\/]/, " ");
    image = image.split(" ").pop();
    if(!editStatus){
        movieList.push( {"id":movieList.length + 1,"movieName":movieNameInput.value,"director":directorInput.value,"year":yearInput.value,"type":typeInput.value,"image":image});
    }else{
        for(let movie of movieList){
            if(editId == movie.id){
                movie.movieName = movieNameInput.value;
                movie.director = directorInput.value;
                movie.year = yearInput.value;
                movie.type = typeInput.value;
                movie.image = image;
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
    displayMovies();    
}

function editMovie(id,name,director,year,type){
    editId = id;
    movieNameInput.value = name;
    directorInput.value = director;
    yearInput.value = year;
    typeInput.value = type;
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
    displayMovies();
}