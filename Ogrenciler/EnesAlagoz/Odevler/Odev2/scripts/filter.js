function showPanel(panelId) {
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.style.display = "none";
  });

  document.getElementById(panelId).style.display = "block";
}

document.querySelectorAll(".filter-area-item").forEach((item) => {
  item.addEventListener("click", function () {
    var panelId = this.getAttribute("name") + "Panel";

    showPanel(panelId);
  });
});

const myLibraryButton = document.querySelector(".navbar-brand");

myLibraryButton.addEventListener("click", function () {
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.style.display = "block";
  });
});

document.getElementById("searchTitle").addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();

  Request.get("http://localhost:3000/books")
    .then((data) => {
      let booksFilter = data.filter((book) => book.title.toLowerCase().includes(searchValue));
      UI.displayBooks(booksFilter);
    })
    .catch((err) => {
      console.log(err.message);
    });
});
document.getElementById("searchAuthor").addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  Request.get("http://localhost:3000/books")
    .then((data) => {
      let booksFilter = data.filter((book) => book.author.toLowerCase().includes(searchValue));
      UI.displayBooks(booksFilter);
    })
    .catch((err) => {
      console.log(err.message);
    });
});
