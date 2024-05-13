const inputs = {
  name: document.getElementById("nameInput"),
  director: document.getElementById("directorInput"),
  year: document.getElementById("yearInput"),
  movieType: document.getElementById("movieType"),
  imageUrl: document.getElementById("imageUrl"),
};

const ui = new UI();
ui.displayMovies();

//Validation kontrol
function updateBorderColor(input) {
  if (input.value.trim() === "") {
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "green";
  }
}

//İnputs Events
Object.values(inputs).forEach((input) => {
  input.addEventListener("focus", () => updateBorderColor(input));
  input.addEventListener("input", () => updateBorderColor(input));
});

//Formda submit butonuna tıklandığında sayfa yenilenmiyor
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  var movieInstance = new Movies();
  movieInstance.addMovie();
});
