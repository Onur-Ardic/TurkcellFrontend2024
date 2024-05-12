export function Storage(){
    
}

Storage.prototype.getMoviesLocal = function(){
    let moviesArray = JSON.parse(localStorage.getItem("moviesArray")) || [];
    return moviesArray;
}

Storage.prototype.setMoviesLocal = function(newMovie){
    let moviesArray = this.getMoviesLocal();
    moviesArray.push(newMovie);
    localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
    
}