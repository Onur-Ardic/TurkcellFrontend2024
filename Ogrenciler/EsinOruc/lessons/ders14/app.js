const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const ageInput = document.getElementById("age");
const addressInput = document.getElementById("address");

const person = {
  name: "",
  surname: "",
  age: "",
  address: "",
};

function changeBorderColor(element, color) {
  element.style.borderColor = color;
}

nameInput.addEventListener("focus", () =>
  changeBorderColor(nameInput, "orange")
);
nameInput.addEventListener("blur", () => {
  changeBorderColor(nameInput, "gray");
  person.name = nameInput.value;
});
nameInput.addEventListener("keyup", () =>
  changeBorderColor(nameInput, "green")
);

surnameInput.addEventListener("focus", () =>
  changeBorderColor(surnameInput, "blue")
);
surnameInput.addEventListener("blur", () => {
  changeBorderColor(surnameInput, "gray");
  person.surname = surnameInput.value;
});
surnameInput.addEventListener("keyup", () =>
  changeBorderColor(surnameInput, "green")
);

ageInput.addEventListener("focus", () => changeBorderColor(ageInput, "blue"));
ageInput.addEventListener("blur", () => {
  changeBorderColor(ageInput, "gray");
  person.age = ageInput.value;
});
ageInput.addEventListener("keyup", () => changeBorderColor(ageInput, "green"));

addressInput.addEventListener("focus", () =>
  changeBorderColor(addressInput, "blue")
);
addressInput.addEventListener("blur", () => {
  changeBorderColor(addressInput, "gray");
  person.address = addressInput.value;
});
addressInput.addEventListener("keyup", () =>
  changeBorderColor(addressInput, "green")
);

// Adding click event listener to the button
const button = document.getElementById("save");
button.addEventListener("click", () => {
  alert(
    `Age: ${person.age}\nAddress: ${person.address}\nName: ${person.name}\nSurname: ${person.surname}`
  );
});
