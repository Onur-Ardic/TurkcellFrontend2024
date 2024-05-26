let blogs = document.querySelector(".blogContainer");

let button = document.getElementById("getButton");
button.addEventListener("click", function () {
  Request.get("http://localhost:3000/users")
    .then((data) => UI.displayOnUi(data))
    .catch((err) => console.log(err));
});
