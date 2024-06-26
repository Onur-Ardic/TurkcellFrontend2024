const itemInput = document.querySelector("#item-input");
const categoryInput = document.querySelector("#category-input");
const form = document.querySelector("#form");
const productWrapper = document.querySelector("#product-wrapper");
const categoryFilter = document.querySelector("#category-filter");
const searchInput = document.querySelector("#search-input");

const categoryColors = loadCategoryColors();

runEvents();

function runEvents() {
  form.addEventListener("submit", addProduct);
  productWrapper.addEventListener("click", handleProductActions);
  categoryFilter.addEventListener("change", fetchProducts);
  searchInput.addEventListener("input", searchProducts);
}

function addProduct(e) {
  e.preventDefault();

  const inputText = itemInput.value.trim();
  const categoryText = categoryInput.value.trim();
  if (inputText === "" || categoryText === "") {
    alert("Bir değer giriniz.");
  } else {
    createProduct(inputText, categoryText);
  }
}

function addProductToUI(newProduct, newCategory, id) {
  const li = document.createElement("li");
  li.className =
    "product list-group-item d-flex justify-content-between align-items-center";
  li.dataset.id = id;
  li.dataset.category = newCategory;

  if (!categoryColors[newCategory]) {
    categoryColors[newCategory] = generateRandomColor();
    saveCategoryColors();
  }
  li.style.backgroundColor = categoryColors[newCategory];

  li.innerHTML = `
    <span class="product-name">${newProduct} (${newCategory})</span>
    <input type="text" class="edit-input form-control me-2" style="display: none;" />
    <input type="text" class="edit-category-input form-control me-2" style="display: none;" />
    <button class="edit-product btn btn-warning me-2">Düzenle</button>
    <button class="save-product btn btn-success me-2" style="display: none;">Kaydet</button>
    <button class="delete-product btn btn-danger">Sil</button>
  `;
  productWrapper.appendChild(li);
  itemInput.value = "";
  categoryInput.value = "";
  addCategoryToFilter(newCategory);
}

function fetchProducts() {
  const selectedCategory = categoryFilter.value;
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      productWrapper.innerHTML = "";
      data
        .filter(
          (product) =>
            selectedCategory === "all" || product.category === selectedCategory
        )
        .forEach((product) => {
          addProductToUI(product.product, product.category, product.id);
        });
    });
}

fetchProducts();

function createProduct(product, category) {
  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product, category }),
  })
    .then((res) => res.json())
    .then((data) => {
      addProductToUI(data.product, data.category, data.id);
      fetchProducts();
    });
}

function handleProductActions(e) {
  e.preventDefault();

  const productItem = e.target.parentElement;
  const id = productItem.dataset.id;

  if (e.target.classList.contains("delete-product")) {
    deleteProductFromServer(id).then(() => {
      fetchProducts();
    });
  } else if (e.target.classList.contains("edit-product")) {
    const productNameSpan = productItem.querySelector(".product-name");
    const editInput = productItem.querySelector(".edit-input");
    const editCategoryInput = productItem.querySelector(".edit-category-input");
    const editButton = productItem.querySelector(".edit-product");
    const saveButton = productItem.querySelector(".save-product");

    const [productText, categoryText] = productNameSpan.textContent.split(" (");
    editInput.value = productText;
    editCategoryInput.value = categoryText.slice(0, -1);

    productNameSpan.style.display = "none";
    editInput.style.display = "inline";
    editCategoryInput.style.display = "inline";
    editButton.style.display = "none";
    saveButton.style.display = "inline";
  } else if (e.target.classList.contains("save-product")) {
    const productNameSpan = productItem.querySelector(".product-name");
    const editInput = productItem.querySelector(".edit-input");
    const editCategoryInput = productItem.querySelector(".edit-category-input");
    const editButton = productItem.querySelector(".edit-product");
    const saveButton = productItem.querySelector(".save-product");

    const updatedProduct = editInput.value.trim();
    const updatedCategory = editCategoryInput.value.trim();
    if (updatedProduct === "" || updatedCategory === "") {
      alert("Bir değer giriniz.");
      return;
    }

    productNameSpan.textContent = `${updatedProduct} (${updatedCategory})`;
    productItem.dataset.category = updatedCategory;
    productNameSpan.style.display = "inline";
    editInput.style.display = "none";
    editCategoryInput.style.display = "none";
    editButton.style.display = "inline";
    saveButton.style.display = "none";

    updateProductOnServer(id, updatedProduct, updatedCategory).then(() => {
      fetchProducts();
    });
    addCategoryToFilter(updatedCategory);
  }
}

function deleteProductFromServer(id) {
  return fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}

function updateProductOnServer(id, product, category) {
  return fetch(`http://localhost:3000/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product, category }),
  }).then((res) => res.json());
}

function addCategoryToFilter(category) {
  const options = Array.from(categoryFilter.options).map(
    (option) => option.value
  );
  if (!options.includes(category)) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  }
}

function searchProducts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      productWrapper.innerHTML = "";
      data
        .filter(
          (product) =>
            (selectedCategory === "all" ||
              product.category === selectedCategory) &&
            product.product.toLowerCase().includes(searchText)
        )
        .forEach((product) => {
          addProductToUI(product.product, product.category, product.id);
        });
    });
}

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function saveCategoryColors() {
  localStorage.setItem("categoryColors", JSON.stringify(categoryColors));
}

function loadCategoryColors() {
  const colors = localStorage.getItem("categoryColors");
  return colors ? JSON.parse(colors) : {};
}
