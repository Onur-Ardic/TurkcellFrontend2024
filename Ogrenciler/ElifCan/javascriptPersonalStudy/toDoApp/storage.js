function Storage() {
  this.todoList = JSON.parse(localStorage.getItem("todoList")) || [];
}

Storage.prototype.addTask = function (Task) {
  this.todoList.push(Task);
  localStorage.setItem("todoList", JSON.stringify(this.todoList));
  // UI.addTask(this, Task);
};
Storage.prototype.deleteTask = function (Task) {
  this.todoList.forEach((item, index) => {
    if (item.name === Task.name) {
      this.todoList.splice(index, 1); // Listeden çıkarma
    }
  });
  localStorage.setItem("todoList", JSON.stringify(this.todoList));
};

Storage.prototype.UpdateTask = function (Task, taskToUpdate) {
  this.todoList.forEach((item, index) => {
    if (item.name === Task.name) {
      this.todoList.splice(index, 1); // Listeden çıkarma
    }
  });
  localStorage.setItem("todoList", JSON.stringify(this.todoList));
};
Storage.prototype.isExist = function (Task) {
  return this.todoList.includes(Task);
};
export { Storage };

//  Storage.prototype.AddMovie = function (movie) {
// 	this.movieNameList.push(movie);
// 	localStorage.setItem("movieNameList", JSON.stringify(this.movieNameList));
// 	Page.AddCard(
// 	  movie.name,
// 	  movie.image,
// 	  movie.year,
// 	  movie.director,
// 	  movie.category
// 	);
//  };

//  Storage.prototype.DeleteMovie = function (movieValue) {
// 	this.movieNameList.forEach((movie, index) => {
// 	  if (movie.name === movieValue) {
// 		 movieNameList.splice(index, 1); // Listeden çıkarma
// 	  }
// 	});
// 	localStorage.setItem("movieNameList", JSON.stringify(movieNameList));
// 	Page.DeleteCardFromUI(movieValue);
//  };

//  Storage.prototype.UpdateMovie = function (moviNameToUpdate, movie) {
// 	this.movieNameList.forEach((movieItem) => {
// 	  if (movieItem.name == moviNameToUpdate) {
// 		 movieItem.name = movie.name;
// 		 movieItem.director = movie.director;
// 		 movieItem.year = movie.year;
// 		 movieItem.category = movie.category;
// 		 movieItem.image = movie.image;
// 	  }
// 	});
// 	localStorage.setItem("movieNameList", JSON.stringify(this.movieNameList));
// 	Page.Update(moviNameToUpdate, movie);
//  };
