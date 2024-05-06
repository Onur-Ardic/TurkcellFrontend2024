const inputs = {
  name: document.getElementById("nameInput"),
  surname: document.getElementById("surnameInput"),
  age: document.getElementById("ageInput"),
  address: document.getElementById("address"),
  city: document.getElementById("city"),
};

const userList = document.getElementById("userList");
const personList = [];

function updateBorderColor(input) {
  if (input.value.trim() === "") {
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "green";
  }
}

Object.values(inputs).forEach((input) => {
  input.addEventListener("focus", () => updateBorderColor(input));
  input.addEventListener("input", () => updateBorderColor(input));
});

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  if (!e.target.checkValidity()) {
    e.stopPropagation();
    return;
  }

  const newUser = {
    name: inputs.name.value.trim(),
    surname: inputs.surname.value.trim(),
    age: inputs.age.value.trim(),
    address: inputs.address.value.trim(),
    city: inputs.city.value.trim(),
  };

  personList.push(newUser);
  displayUsers();
  clearInputs();
});
function displayUsers() {
  userList.textContent = "";
  personList.forEach((person) => {
    // Create a list item to hold the Bootstrap card
    const listItem = document.createElement("li");
    listItem.className = "mb-3"; // Add margin-bottom for spacing

    // Create card container
    const card = document.createElement("div");
    card.className = "card bg-light border-0 text-secondary shadow-sm";
    card.style.width = "18rem";

    // Create card body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title ";
    title.textContent = `${person.name} ${person.surname}`;
    cardBody.appendChild(title);
    const ul = document.createElement("ul");
    ul.className = "list-unstyled";

    const liAge = document.createElement("li");
    const pAge = document.createElement("p");
    pAge.className = "card-text";
    pAge.textContent = `Age: ${person.age}`;
    liAge.appendChild(pAge);
    ul.appendChild(liAge);

    const liAddress = document.createElement("li");
    const pAddress = document.createElement("p");
    pAddress.className = "card-text";
    pAddress.textContent = `Address: ${person.address}`;
    liAddress.appendChild(pAddress);
    ul.appendChild(liAddress);

    const liCity = document.createElement("li");
    const pCity = document.createElement("p");
    pCity.className = "card-text";
    pCity.textContent = `City: ${person.city}`;
    liCity.appendChild(pCity);
    ul.appendChild(liCity);
    cardBody.appendChild(ul);

    card.appendChild(cardBody);

    listItem.appendChild(card);

    userList.appendChild(listItem);
  });
}

function clearInputs() {
  Object.values(inputs).forEach((input) => {
    input.value = "";
    input.style.borderColor = ""; // Reset the border color
  });
}
