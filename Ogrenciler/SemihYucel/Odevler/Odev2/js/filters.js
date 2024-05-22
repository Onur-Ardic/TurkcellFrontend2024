async function searchBooks() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase(); 
    const data = await fetchBooks();
    const filteredBooks = data.filter(book =>
      book.name.toLowerCase().includes(searchInput) ||
      book.author.toLowerCase().includes(searchInput)
    );
    displayBooks(filteredBooks);
  }
    async function sortBooks() {
    const sortValue = document.getElementById("sortBooks").value;
    const data = await fetchBooks();
    let sortedBooks;
    if (sortValue === "a-z") {
      sortedBooks = data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === "z-a") {
      sortedBooks = data.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortValue === "date") {
      sortedBooks = data.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    displayBooks(sortedBooks);
  }
    async function filterBooks() {
    const category = document.getElementById("filterCategory").value;
    const author = document.getElementById("filterAuthor").value;
    const data = await fetchBooks();
    let filteredBooks = data;
    if (category) {
      filteredBooks = filteredBooks.filter(book => book.category === category);
    }
    if (author) {
      filteredBooks = filteredBooks.filter(book => book.author === author);
    }
    displayBooks(filteredBooks);
  }
    function populateFilters(books) {
    const categories = [...new Set(books.map(book => book.category))];
    const authors = [...new Set(books.map(book => book.author))];
  
    populateFilterOptions("filterCategory", categories, "Kategoriye Göre Filtrele");
    populateFilterOptions("filterAuthor", authors, "Yazara Göre Filtrele");
  }
    function populateFilterOptions(elementId, options, defaultOptionText) {
    const filterElement = document.getElementById(elementId);
    filterElement.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = defaultOptionText;
    filterElement.appendChild(defaultOption);
  
    options.forEach(option => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      filterElement.appendChild(optionElement);
    });
  }
    function resetFilters() {
    document.getElementById("filterCategory").value = "";
    document.getElementById("filterAuthor").value = "";
    document.getElementById("searchInput").value = "";
    fetchAndDisplayBooks();
  }
  