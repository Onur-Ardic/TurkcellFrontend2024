const name = document.querySelector("#name");
const age = document.querySelector("#age");
const city = document.querySelector("#city");
const mail = document.querySelector("#mail");
const button = document.querySelector("#button");
const cards = document.querySelector(".cards");
const forminputs = document.querySelectorAll("form input");
let infos = {};

for (let i = 0; i < forminputs.length; i++) {
  forminputs[i].addEventListener("focus", () => {
    forminputs[i].style.background = "navy";
    forminputs[i].style.color = "white";
  });
  forminputs[i].addEventListener("blur", () => {
    forminputs[i].style.background = "crimson";
    forminputs[i].style.color = "white";
  });
}

function submitinfos() {
  infos.name = name.value;
  infos.age = age.value;
  infos.city = city.value;
  infos.mail = mail.value;
  const card = document.createElement("div");
  card.classList.add("card", "my-3");
  const cardbody = document.createElement("div");
  cardbody.classList.add("card-body");
  card.appendChild(cardbody);
  cards.appendChild(card);
  const cardname = document.createElement("h2");
  cardbody.appendChild(cardname);
  cardname.innerHTML = ` <span class = "text-danger ">Name: </span>  ${name.value}`;
  const cardage = document.createElement("h3");
  cardbody.appendChild(cardage);
  cardage.textContent = "Age: " + age.value;
  const cardcity = document.createElement("h3");
  cardbody.appendChild(cardcity);
  cardcity.textContent = "City: " + city.value;
  const cardmail = document.createElement("h3");
  cardbody.appendChild(cardmail);
  cardmail.textContent = "Mail: " + mail.value;
}
button.addEventListener("click", (e) => {
  e.preventDefault();
  if(name.value == "" || age.value == "" || city.value =="" || mail.value == ""){
    alert("Değer giriniz.");
  }else{
    submitinfos();
    name.value = "";
    age.value = "";
    city.value = "";
    mail.value = "";
  }
  
});

console.log(infos);
