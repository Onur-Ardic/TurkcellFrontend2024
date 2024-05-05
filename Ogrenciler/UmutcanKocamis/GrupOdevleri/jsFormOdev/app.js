const info = {
  name: "",
  surname: "",
  city: "",
  age: "",
};
const nameInput = document.getElementById("nameInput");
const surnameInput = document.getElementById("surnameInput");
const cityInput = document.getElementById("cityInput");
const ageInput = document.getElementById("ageInput");

const name = document.getElementById("name");
const surname = document.getElementById("surname");
const city = document.getElementById("city");
const age = document.getElementById("age");

const kaydet = document
  .getElementById("submit")
  .addEventListener("click", kaydetme);

const temizle = document
  .getElementById("clear")
  .addEventListener("click", temizleme);

function kaydetme() {
  //Objede tutmak için
  info.name = nameInput.value;
  info.surname = surnameInput.value;
  info.city = cityInput.value;
  info.age = ageInput.value;
  //Ekrana göstermek için
  name.innerHTML = info.name;
  surname.innerHTML = info.surname;
  city.innerHTML = info.city;
  age.innerHTML = info.age;
}

function temizleme() {
  nameInput.value = "";
  surnameInput.value = "";
  cityInput.value = "";
  ageInput.value = "";
  alert("Input'lar temizlendi.");
}
