class MovieList{
    constructor(movieList){
        this.movieList = movieList;
        this.editStatus = false;        
        this.editId;
    }

    getList(){
        return this.movieList;
    }

    newMovie(){
        ui.movies.innerHTML = "";

        if(!this.editStatus){
            this.movieList.push(new Movie(crypto.randomUUID(),ui.movieNameInput.value,ui.directorInput.value,ui.yearInput.value,ui.typeInput.value,ui.imageInput.value));
        }else{  
            for(let movie of this.movieList){
                if(this.editId == movie.id){
                    movie.movieName = ui.movieNameInput.value;
                    movie.director = ui.directorInput.value;
                    movie.year = ui.yearInput.value;
                    movie.type = ui.typeInput.value;
                    movie.image = ui.imageInput.value;
                }
            }
            btnAdd.textContent = "Submit";
        }
        this.editStatus = false;
        ui.form.reset();
        ui.cardShows.forEach(input => input.textContent = "");
        ui.imgShows.src = "img/Red and Blue Movie Night Poster.png";
        localStorage.setItem("movieList",JSON.stringify(this.movieList));
        ui.displayMovies(document.querySelector("#filters div.active").textContent,this.movieList);
    }

    editMovie(id,name,director,year,type,image){
        this.editId = id;
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
        this.editStatus = true;
        ui.btnAdd.textContent = "Update";
    }

    deleteMovie(id){
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
}

