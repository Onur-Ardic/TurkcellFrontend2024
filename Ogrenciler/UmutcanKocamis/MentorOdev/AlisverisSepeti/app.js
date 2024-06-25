const itemInput = document.querySelector("#item-input");
const form = document.querySelector("#form");
const productWrapper = document.querySelector("#product-wrapper");

runEvents();

function runEvents() {
  form.addEventListener("submit", addProduct);
  productWrapper.addEventListener("click", handleProductActions);
}

function addProduct(e) {
  e.preventDefault();

  const inputText = itemInput.value.trim();
  if (inputText == null || inputText == "") {
    alert("Bir değer giriniz.");
  } else {
    createProduct(inputText);
  }
}

function addProductToUI(newProduct, id) {
  const li = document.createElement("li");
  li.className = "product";
  li.dataset.id = id;
  li.innerHTML = `
    <span class="product-name">${newProduct}</span>
    <input type="text" class="edit-input form-control me-2" style="display: none;" />
    <button class="edit-product btn btn-warning me-2">Düzenle</button>
    <button class="save-product btn btn-success me-2" style="display: none;">Kaydet</button>
    <button class="delete-product btn btn-danger">Sil</button>
  `;
  productWrapper.appendChild(li);
  itemInput.value = "";
}

function fetchProducts() {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((product) => {
        addProductToUI(product.product, product.id);
      })
    );
}

fetchProducts();

function createProduct(product) {
  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product }),
  })
    .then((res) => res.json())
    .then((data) => {
      addProductToUI(data.product, data.id);
    });
}

function handleProductActions(e) {
  const productItem = e.target.parentElement;
  const id = productItem.dataset.id;

  if (e.target.classList.contains("delete-product")) {
    productItem.remove();
    deleteProductFromServer(id);
  } else if (e.target.classList.contains("edit-product")) {
    const productNameSpan = productItem.querySelector(".product-name");
    const editInput = productItem.querySelector(".edit-input");
    const editButton = productItem.querySelector(".edit-product");
    const saveButton = productItem.querySelector(".save-product");

    editInput.value = productNameSpan.textContent;
    productNameSpan.style.display = "none";
    editInput.style.display = "inline";
    editButton.style.display = "none";
    saveButton.style.display = "inline";
  } else if (e.target.classList.contains("save-product")) {
    const productNameSpan = productItem.querySelector(".product-name");
    const editInput = productItem.querySelector(".edit-input");
    const editButton = productItem.querySelector(".edit-product");
    const saveButton = productItem.querySelector(".save-product");

    const updatedProduct = editInput.value.trim();
    if (updatedProduct === "") {
      alert("Bir değer giriniz.");
      return;
    }

    productNameSpan.textContent = updatedProduct;
    productNameSpan.style.display = "inline";
    editInput.style.display = "none";
    editButton.style.display = "inline";
    saveButton.style.display = "none";

    updateProductOnServer(id, updatedProduct);
  }
}

function deleteProductFromServer(id) {
  fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function updateProductOnServer(id, product) {
  fetch(`http://localhost:3000/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
