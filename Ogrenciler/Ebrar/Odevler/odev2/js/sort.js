document.getElementById("sort").addEventListener("change", function () {
  Request.get("http://localhost:3000/books", "").then((data) => {
    const sortValue = this.value;
    let sortedBooks;
    switch (sortValue) {
      case "az":
        sortedBooks = data.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sortedBooks = data.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "oldest":
        sortedBooks = data.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "newest":
        sortedBooks = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        sortedBooks = data;
        break;
    }
    ui.displayBooks(sortedBooks);
  });
});
