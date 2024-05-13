function MovieList(movieList){
    this.movieList = movieList;
}

let editId;
let editStatus = false;

MovieList.prototype.getList = function(){
    return this.movieList;

}

MovieList.prototype.newMovie = function(){
    ui.movies.innerHTML = "";

    if(!editStatus){
        this.movieList.push(new Movie(crypto.randomUUID(),ui.movieNameInput.value,ui.directorInput.value,ui.yearInput.value,ui.typeInput.value,ui.imageInput.value));
    }else{  
        for(let movie of this.movieList){
            if(editId == movie.id){
                movie.movieName = ui.movieNameInput.value;
                movie.director = ui.directorInput.value;
                movie.year = ui.yearInput.value;
                movie.type = ui.typeInput.value;
                movie.image = ui.imageInput.value;
            }
        }
        btnAdd.textContent = "Submit";
    }
    ui.editStatus = false;
    ui.movieNameInput.value = "";
    ui.directorInput.value = "";
    ui.yearInput.value = "";
    ui.typeInput.value = "";
    ui.imageInput.value = "";
    ui.movieNameShows.innerText = "";
    ui.directorShows.innerText = "";
    ui.yearShows.innerText = "";
    ui.typeShows.innerText = "";
    ui.imgShows.src = "img/Red and Blue Movie Night Poster.png";
    localStorage.setItem("movieList",JSON.stringify(this.movieList));
    ui.displayMovies(document.querySelector("#filters div.active").textContent,this.movieList);
}

MovieList.prototype.editMovie = function(id,name,director,year,type,image){
    editId = id;
    ui.movieNameInput.value = name;
    ui.directorInput.value = director;
    ui.yearInput.value = year;
    ui.typeInput.value = type;
    ui.imageInput.value = image;

    ui.movieNameShows.innerText = name;
    ui.directorShows.innerText = director;
    ui.yearShows.innerText = year;
    ui.typeShows.innerText = type;
    ui.imgShows.src = image;
    editStatus = true;
    ui.btnAdd.textContent = "Update";
}


MovieList.prototype.deleteMovie = function(id){
    let deleteId;
    for(let index in this.movieList){
        if(this.movieList[index].id == id){
            deleteId = index;
        }
    }

    this.movieList.splice(deleteId,1);
    localStorage.setItem("movieList",JSON.stringify(this.movieList));
    ui.displayMovies(document.querySelector("#filters div.active").textContent,this.movieList);
}