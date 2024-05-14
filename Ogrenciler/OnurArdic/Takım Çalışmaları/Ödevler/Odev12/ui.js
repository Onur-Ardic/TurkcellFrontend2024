class UI {
  constructor(storage) {
    document
      .getElementById("movie-card-wrapper")
      .addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-button")) {
          const movieName = event.target.dataset.movieName;
          this.DeleteCardFromUI(movieName, storage);
        }
      });
  }
  AddCard(name, image, year, director, category) {
    this.name = name;
    this.image = image;
    this.year = year;
    this.director = director;
    this.category = category;
    const value = `
		 <div id=${name} class="card position-relative col-4" data-key="${name}">
		 <div class="card-image w-100">
			<img
			  src="${image}"
			  alt="${name}"
			  class="img-fluid rounded-top object-fit-cover  "
			/>
		 </div>
		 <div  class="card-content p-1 text-white">
			<h5 class="text-center"  contenteditable="true">${name}</h5>
			<div class="movie-card-info d-flex justify-content-center gap-3 align-item-center">
			  <p contenteditable="true">${year}</p>
			  <p contenteditable="true">${director}</p>
			</div>
			<div class="movie-category position-absolute rounded-3 text-white">
			  <span class="p-3" contenteditable="true">${category}</span>
			</div>
		 </div>
	 
		 <div class="btn-wrapper position-absolute d-flex flex-column gap-2">
		 <button id="sevval" class="btn btn-danger delete-button"  data-movie-name="${name}">
		 <i  class="bi bi-trash"></i>
	  </button>
			<button class="btn btn-warning" data-bs-toggle="modal"
			data-bs-target="#staticBackdrop" onclick="fillModal('${name}')">
			  <i class="bi bi-pen"></i>
			</button>
		 </div>
	  </div>
		 `;
    document.getElementById("movie-card-wrapper").innerHTML += value;
  }

  DeleteCardFromUI(movieName, storage) {
    document.querySelector(`[data-key="${movieName}"]`).style.display = "none";
    storage.deleteMovie(movieName);
  }
}
export { UI };
