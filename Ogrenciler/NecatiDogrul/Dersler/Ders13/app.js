var person = {};

function focusFunction(input) {
  input.value = "";
  input.style.borderColor = "red";
}

function blurFunction(input) {
  input.style.borderColor = "";
}


function submitForm() {
  var inputs = document.getElementsByTagName('input');
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].value == "") {
      inputs[i].style.borderColor = "red";
    }
  }

  var age = document.getElementById("age").value;
  if(age < 18 || age > 65) {
    document.getElementById("ageError").innerText = "Yaşınız 18 ile 65 arasında olmalıdır";
    document.getElementById("age").style.borderColor = "red";
    return;
  }

  var name = document.getElementById("name").value;
  if(name.length < 2) {
    document.getElementById("nameError").innerText = "Adınız en az 2 karakter olmalıdır";
    document.getElementById("name").style.borderColor = "red";
    return;
  }
  var surname = document.getElementById("surname").value;
  if(surname.length < 2) {
    document.getElementById("surnameError").innerText = "Soyadınız en az 2 karakter olmalıdır";
    document.getElementById("surname").style.borderColor = "red";
    return;
  }else {
    document.getElementById("surname").style.borderColor = "green";
  }
  var city = document.getElementById("city").value;
  if(city.length < 2) {
    document.getElementById("cityError").innerText = "Şehir en az 2 karakter olmalıdır";
    document.getElementById("city").style.borderColor = "red";
    return;
  }

  person.name = document.getElementById("name").value;
  person.surname = document.getElementById("surname").value;
  person.age = document.getElementById("age").value;
  person.city = document.getElementById("city").value;

  document.getElementById("cardName").innerText = "Ad: " + person.name;
  document.getElementById("cardSurname").innerText = "Soyad: " + person.surname;
  document.getElementById("cardAge").innerText = "Yaş: " + person.age;
  document.getElementById("cardCity").innerText = "Şehir: " + person.city;
}