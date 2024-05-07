const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const birthdayDate = document.getElementById("birthdayDate");
const phoneNumber = document.getElementById("phoneNumber");
const adres = document.getElementById("adres");

const emailAddress = document.getElementById("emailAddress");

const infos = {};
const button = document.getElementById("ourButton");

const genderInputs = document.querySelectorAll(".gender input");
button.addEventListener("click", deneme);

let gender;
const date = new Date();
function deneme() {
  event.preventDefault();
  genderInputs.forEach((input) => {
    if (input.checked) gender = input.value;
  });
  console.log(gender);

  infos.firstName = firstName.value;
  infos.lastName = lastName.value;
  infos.gender = gender;
  infos.birthdayDate = birthdayDate.value;
  infos.emailAddress = emailAddress.value;
  infos.phoneNumber = phoneNumber.value;
  infos.adres = adres.value;

  //   document.getElementById("fullName").textContent = infos.firstName;
  let fullName = `${infos.firstName} ${infos.lastName}`;
  if (!infos.firstName) {
    fullName = fullName.trim();
  }

  let infoArray = [
    fullName,
    infos.gender,
    infos.birthdayDate,
    infos.emailAddress,
    infos.phoneNumber,
    infos.adres,
  ];
  addTrElement(infoArray);
}
function addTrElement(infoArray) {
  let trElement = document.createElement("tr");
  trElement.classList.add("tableRow");
  for (let i = 0; i < infoArray.length; i++) {
    let tdElement = document.createElement("td");
    let tdText;
    if (
      infoArray[i] == undefined ||
      infoArray[i] == "" ||
      infoArray[i] == null
    ) {
      tdText = document.createTextNode("Belirtilmedi");
    } else {
      tdText = document.createTextNode(infoArray[i]);
    }

    tdElement.appendChild(tdText);

    trElement.appendChild(tdElement);
  }

  document.getElementById("tableBody").appendChild(trElement);
}
