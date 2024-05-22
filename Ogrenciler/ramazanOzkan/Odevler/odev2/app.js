// Endpoints:
// http://localhost:3000/users
// http://localhost:3000/comments
// http://localhost:3000/profile

let isInitialRender = true;
let sortFilter = "";
let filter = "";

class Book {
  constructor(
    id,
    title,
    author,
    price,
    category,
    publicationYear,
    upDate,
    updateUser,
    img
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = parseInt(price);
    this.category = category;
    this.publicationYear = publicationYear;
    this.upDate = upDate;
    this.updateUser = updateUser;
    this.img = img;
  }
}

class Request {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Veri alınamadı."));
    });
  }
  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Hata Alındı."));
    });
  }
  static put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Hata Alındı."));
    });
  }
  static delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => resolve("Veri Silindi"))
        .catch((err) => reject(err, "Hata Alındı."));
    });
  }
}

function render(data) {
  const bookList = document.getElementById("book-list");
  while (bookList.firstChild) {
    bookList.removeChild(bookList.firstChild);
  }
  data.forEach((bookData) => {
    const book = new Book(
      bookData.id,
      bookData.title,
      bookData.author,
      bookData.price,
      bookData.category,
      bookData.publicationYear,
      bookData.upDate,
      bookData.updateUser,
      bookData.img
    );
    const bookCard = document.createElement("div");
    bookCard.classList.add("col", "mb-5");

    const card = document.createElement("div");
    card.classList.add("card", "h-100");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = book.img;
    img.alt = book.title;
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "p-4");

    const textCenter = document.createElement("div");
    textCenter.classList.add("text-center");

    const title = document.createElement("h6");
    title.classList.add("fw-bolder");
    title.textContent = book.title;
    textCenter.appendChild(title);

    const author = document.createElement("h4");
    author.textContent = book.author;
    textCenter.appendChild(author);

    const category = document.createElement("h5");
    category.textContent = book.category + "/" + book.publicationYear;
    textCenter.appendChild(category);

    const price = document.createElement("p");
    price.textContent = `${book.price} ₺`;
    textCenter.appendChild(price);

    cardBody.appendChild(textCenter);
    card.appendChild(cardBody);

    const cardFooter = document.createElement("div");
    cardFooter.classList.add(
      "card-footer",
      "p-4",
      "pt-0",
      "border-top-0",
      "bg-transparent",
      "d-flex",
      "justify-content-between",
      "xs-col",
      "col-md-dcol",
      "gap-1"
    );

    const updateBtn = document.createElement("a");
    updateBtn.classList.add("btn", "btn-outline-dark", "mt-auto", "xs-mb-5");
    updateBtn.textContent = "Güncelle";
    updateBtn.addEventListener("click", () => openUpdateModal(book));
    cardFooter.appendChild(updateBtn);

    const deleteBtn = document.createElement("a");
    deleteBtn.href = "#";
    deleteBtn.classList.add("btn", "btn-outline-dark", "mt-auto", "delete-btn");
    deleteBtn.setAttribute("data-bookId", book.id);
    deleteBtn.textContent = "Sil";
    cardFooter.appendChild(deleteBtn);

    card.appendChild(cardFooter);
    bookCard.appendChild(card);

    bookList.appendChild(bookCard);
  });

  if (isInitialRender) {
    renderFilters(data);
  }

  isInitialRender = false;
}

const renderFilters = (data) => {
  const filters = document.getElementById("custom-filters");

  const groupedDataByAuthor = data.reduce((acc, book) => {
    if (acc[book.author]) {
      acc[book.author].push(book);
    } else {
      acc[book.author] = [book];
    }

    return acc;
  }, {});

  const groupedDataByCategory = data.reduce((acc, book) => {
    if (acc[book.category]) {
      acc[book.category].push(book);
    } else {
      acc[book.category] = [book];
    }

    return acc;
  }, {});

  [
    ...Object.entries(groupedDataByAuthor),
    ...Object.entries(groupedDataByCategory),
  ].forEach(([key, books], index) => {
    const isCategoryFilter = Object.keys(groupedDataByCategory).includes(key);

    const container = document.createElement("label");
    container.className = "custom-control custom-radio form-check";

    const input = document.createElement("input");
    input.className = "custom-control-input form-check-input";
    input.value = key;
    input.type = "radio";
    input.name = "author";
    input.setAttribute("data-is-category", isCategoryFilter);

    const label = document.createElement("span");
    label.className = "custom-control-label form-check-label";
    label.textContent = key + "(" + books.length + ")";

    container.appendChild(input);
    container.appendChild(label);

    if (index === 0) {
      const title = document.createElement("span");
      title.textContent = "Yazarlar";
      title.className = "fs-4 fw-bold";

      filters.appendChild(title);
    }

    if (index === Object.keys(groupedDataByAuthor).length) {
      const title = document.createElement("span");
      title.textContent = "Kategoriler";
      title.className = "fs-4 fw-bold";

      filters.appendChild(title);
    }

    filters.appendChild(container);
  });
};

$("body").on("change", "#filters input", async () => {
  const author = $("input[name='author']:checked").val();
  const isCategoryFilter =
    $("input[name='author']:checked").attr("data-is-category") === "true";
  let url = "http://localhost:3000/books";

  if (isCategoryFilter) {
    url += "?category=" + author;
    filter = "category=" + author;
  }

  if (author !== "all" && !isCategoryFilter) {
    url += "?author=" + author;
    filter = "author=" + author;
  }

  url += "&";
  if (author == "all") {
    filter = "";
    url = "http://localhost:3000/books";
  }

  const response = await fetch(url);
  data = await response.json();

  render(data);
});

$("body").on("click", ".delete-btn", (event) => {
  const bookId = event.target.getAttribute("data-bookId");

  Request.delete("http://localhost:3000/books/" + bookId)
    .then((response) => {
      console.log("Kitap başarıyla silindi:", response);
      bookImgPreview.style.display = "none";
      loadBooks();
    })
    .catch((err) => smallModal("Kitap silerken hata oluştu:", err));
});

async function sort(select) {
  try {
    const navbarTitle = document.getElementById("navbarDropdown");
    navbarTitle.textContent = select;

    const TITLE_KEY_MAP = {
      AZ: "A-Z",
      ZA: "Z-A",
      DateAsc: "Tarih Artan",
      DateDesc: "Tarih Azalan",
      PriceAsc: "Fiyat Artan",
      PriceDesc: "Fiyat Azalan",
    };

    navbarTitle.textContent = TITLE_KEY_MAP[select] || "Önerilen";

    const VALUE_KEY_MAP = {
      AZ: "title",
      ZA: "-title",
      DateAsc: "publicationYear",
      DateDesc: "-publicationYear",
      PriceAsc: "price",
      PriceDesc: "-price",
    };

    const sort = VALUE_KEY_MAP[select];
    const sortQuery = sort ? "_sort=" + sort : "";
    sortFilter = "_sort=" + sort;
    const response = await fetch(
      "http://localhost:3000/books?" + sortQuery + "&" + filter
    );
    data = await response.json();

    return data;
  } catch (err) {
    smallModal("Dosya Okuma hatası");
  }
}

document.querySelectorAll("#sortingDropdown .dropdown-item").forEach((item) => {
  item.addEventListener("click", async (event) => {
    const selectedValue = event.target.getAttribute("data-value");
    render(await sort(selectedValue));
  });
});

let originalData = [];

const loadBooks = () => {
  Request.get("http://localhost:3000/books")
    .then((data) => {
      originalData = data;
      render(data);
    })
    .catch((err) => smallModal("Dosya Okuma hatası"));
};
loadBooks();

function searchBooks(data, query) {
  return data.filter((book) => {
    return (
      book.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      book.author.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      book.category.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  });
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const query = searchInput.value;
  const filteredData = searchBooks(originalData, query);
  render(filteredData);
});

const searchForm = document.querySelector(".form-inline");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Formun gönderimini engelle
  const query = searchInput.value;
  const filteredData = searchBooks(originalData, query);
  render(filteredData);
});

document.addEventListener("DOMContentLoaded", function () {
  var bookImgInput = document.getElementById("bookImg");
  var bookImgPreview = document.getElementById("bookImgPreview");

  bookImgInput.addEventListener("input", function () {
    var imgUrl = bookImgInput.value;
    if (imgUrl) {
      bookImgPreview.src = imgUrl;
      bookImgPreview.style.display = "block";
    } else {
      bookImgPreview.style.display = "none";
    }
  });
});

const addProductButton = document.getElementById("addProductButton");
addProductButton.addEventListener("click", () => {
  document.getElementById("bookForm").reset();
  document.getElementById("bookImgPreview").style.display = "none";
});

var saveBookButton = document.getElementById("saveBookButton");
saveBookButton.addEventListener("click", saveOrUpdateBook);

function openUpdateModal(book) {
  // Fill the form with the book data
  document.getElementById("bookId").value = book.id;
  document.getElementById("bookTitle").value = book.title;
  document.getElementById("bookAuthor").value = book.author;
  document.getElementById("bookPrice").value = book.price;
  document.getElementById("bookCategory").value = book.category;
  document.getElementById("publicationYear").value = book.publicationYear;
  document.getElementById("bookImg").value = book.img;
  document.getElementById("bookImgPreview").src = book.img;
  document.getElementById("bookImgPreview").style.display = "block";

  // Set the save button to update mode
  const saveBookButton = document.getElementById("saveBookButton");
  saveBookButton.textContent = "Güncelle";

  $("#bookModal").modal("show");
}

function saveOrUpdateBook() {
  const bookId = document.getElementById("bookId").value || null;
  const bookData = new Book(
    bookId || new Date().valueOf().toString(),
    document.getElementById("bookTitle").value,
    document.getElementById("bookAuthor").value,
    document.getElementById("bookPrice").value,
    document.getElementById("bookCategory").value,
    document.getElementById("publicationYear").value,
    new Date(),
    "currentUser",
    document.getElementById("bookImg").value
  );

  if (bookId) {
    Request.put(`http://localhost:3000/books/${bookId}`, bookData)
      .then((response) => {
        console.log("Kitap başarıyla güncellendi:", response);
        $("#bookModal").modal("hide");
        document.getElementById("bookForm").reset();
        document.getElementById("bookImgPreview").style.display = "none";
        loadBooks();
      })
      .catch((err) => smallModal("Kitap güncellenirken hata oluştu:", err));
  } else {
    Request.post("http://localhost:3000/books", bookData)
      .then((response) => {
        console.log("Kitap başarıyla eklendi:", response);
        $("#bookModal").modal("hide");
        document.getElementById("bookForm").reset();
        bookImgPreview.style.display = "none";
      })
      .catch((err) => smallModal("Kitap eklenirken hata oluştu:", err));
  }
}

function smallModal(text) {
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  modalBody.textContent = text;

  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog", "modal-sm");
  modalDialog.appendChild(modalBody);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContent.appendChild(modalDialog);

  const modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("role", "dialog");
  modal.appendChild(modalContent);

  document.body.appendChild(modal);

  $(modal).modal("show");

  $(modal).on("hidden.bs.modal", function () {
    modal.remove();
  });
}
