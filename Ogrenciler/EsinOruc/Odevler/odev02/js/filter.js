class Filter {
  static sortCards() {
    const option = document.getElementById("filter").value;
    let cards = Array.from(document.querySelectorAll(".col-md-3.mb-4"));
    const container = document.getElementById("cardContainer");

    cards.sort((a, b) => {
      const titleA = a.querySelector(".card-title").textContent.toUpperCase();
      const titleB = b.querySelector(".card-title").textContent.toUpperCase();
      const yearA = parseInt(
        a.querySelector("[data-year]").getAttribute("data-year"),
        10
      );
      const yearB = parseInt(
        b.querySelector("[data-year]").getAttribute("data-year"),
        10
      );

      switch (option) {
        case "text-asc":
          return titleA.localeCompare(titleB);
        case "text-desc":
          return titleB.localeCompare(titleA);
        case "year-asc":
          return yearA - yearB;
        case "year-desc":
          return yearB - yearA;
        default:
          return 0;
      }
    });

    container.textContent = "";
    cards.forEach((card) => container.appendChild(card));
  }
}
