class Search {
  static filterCards() {
    const searchInput = document
      .getElementById("searchInput")
      .value.toLowerCase();
    const cards = document.querySelectorAll(".col-md-3.mb-4");

    cards.forEach((card) => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const author = card.querySelector(".card-text").textContent.toLowerCase();
      if (title.includes(searchInput) || author.includes(searchInput)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }
}
