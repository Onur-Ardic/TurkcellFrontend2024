let users = [];
const nameInput = document.querySelector("#name-input");
const dateInput = document.querySelector("#date-input");
const ageInput = document.querySelector("#age-input");
const addButton = document.querySelector("#add-button");
const table = document.querySelector("#table");
const tableBody = document.querySelector("#table-body");
const nameButton = document.querySelector("#name-button");
const dateButton = document.querySelector("#date-button");
const ageButton = document.querySelector("#age-button");
const searchInput = document.querySelector("#search-input");
let ascendingOrder = true;

let userFromLS = JSON.parse(localStorage.getItem("usersArray")) || [];

function refreshUI(array) {
  if (array.length === 0) {
    return;
  }
  tableBody.innerHTML = "";
  array.forEach((user) => {
    const tr = document.createElement("tr");
    const nameTd = document.createElement("td");
    nameTd.textContent = user.name;
    const dateTd = document.createElement("td");
    dateTd.textContent = user.date;
    const ageTd = document.createElement("td");
    ageTd.textContent = user.age;
    const buttonTd = document.createElement("button");
    buttonTd.addEventListener("click", () => {
      deleteRow(user.name);
    });
    buttonTd.textContent = "Sil";
    tr.appendChild(nameTd);
    tr.appendChild(dateTd);
    tr.appendChild(ageTd);
    tr.appendChild(buttonTd);
    tableBody.append(tr);
  });
}

function addToArray() {
  const newUser = {
    name: nameInput.value,
    date: dateInput.value,
    age: ageInput.value,
  };
  if (
    nameInput.value === "" ||
    dateInput.value === "" ||
    ageInput.value === ""
  ) {
    alert("hata");
    return;
  }
  userFromLS.push(newUser);
  localStorage.setItem("usersArray", JSON.stringify(userFromLS));
  refreshUI(userFromLS);
}
addButton.addEventListener("click", addToArray);
refreshUI(userFromLS);

function sortTable(array, field) {
  array.sort((a, b) => {
    const nameA = field === "age" ? parseInt(a[field]) : a[field];
    const nameB = field === "age" ? parseInt(b[field]) : b[field];
    if (nameA < nameB) {
      return ascendingOrder ? -1 : 1;
    }
    if (nameA > nameB) {
      return ascendingOrder ? 1 : -1;
    }
    return 0;
  });
}
nameButton.addEventListener("click", () => {
  sortTable(userFromLS, "name");
  ascendingOrder = !ascendingOrder;
  refreshUI(userFromLS);
});
dateButton.addEventListener("click", () => {
  sortTable(userFromLS, "date");
  ascendingOrder = !ascendingOrder;
  refreshUI(userFromLS);
});
ageButton.addEventListener("click", () => {
  sortTable(userFromLS, "age");
  ascendingOrder = !ascendingOrder;
  refreshUI(userFromLS);
});

function deleteRow(id) {
  userFromLS = userFromLS.filter((user) => user.name !== id);
  localStorage.setItem("usersArray", JSON.stringify(userFromLS));
  refreshUI(userFromLS);
}

searchInput.addEventListener("keyup", (event) => {
  const searchText = event.target.value.toLowerCase();
  const searchValue = userFromLS.filter((user) =>
    user.name.toLowerCase().startsWith(searchText)
  );
  refreshUI(searchValue);
});
