let sort = document.querySelector(".sort");
sort.addEventListener("input", function () {
  if (sort.value == 1) {
    Request.get("http://localhost:3000/books").then((data) => {
      let sortByAZ = data.sort((a, b) => a.name.localeCompare(b.name));
      UI.displayAllBooksOnUI(sortByAZ);
    });
  } else if (sort.value == 2) {
    Request.get("http://localhost:3000/books").then((data) => {
      let sortByZA = data.sort((a, b) => b.name.localeCompare(a.name));
      UI.displayAllBooksOnUI(sortByZA);
    });
  } else if (sort.value == 3) {
    Request.get("http://localhost:3000/books").then((data) => {
      let sortByYear = data.sort((a, b) => a.year - b.year);
      UI.displayAllBooksOnUI(sortByYear);
    });
  } else {
    UI.requestAllDataAndDisplay();
  }
});
