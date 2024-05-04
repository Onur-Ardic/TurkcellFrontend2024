const inputs = {
  name: document.getElementById("nameInput"),
  surname: document.getElementById("surnameInput"),
  age: document.getElementById("ageInput"),
  address: document.getElementById("address"),
  city: document.getElementById("city"),
};

const userList = document.getElementById("userList");
const personList = [];

function changeBorderColor(element, color) {
  element.style.borderColor = color;
}

Object.values(inputs).forEach((input) => {
  input.addEventListener("blur", () => changeBorderColor(input, "green"));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
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
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${person.name}, Surname: ${person.surname}, Age: ${person.age}, Address: ${person.address}, City: ${person.city}`;
    userList.appendChild(listItem);
  });
}

function clearInputs() {
  Object.values(inputs).forEach((input) => (input.value = ""));
}
