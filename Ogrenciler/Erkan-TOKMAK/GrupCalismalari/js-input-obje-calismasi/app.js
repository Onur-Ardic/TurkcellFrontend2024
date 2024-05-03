let name = document.querySelector("#name");
let surName = document.querySelector("#surname");
let age = document.querySelector("#age");
let city = document.querySelector("#city");

let formList = document.querySelector("#list");

let formData = [];

let nameVal = name.addEventListener("keyup", () => {return nameVal = name.value});
let surNameVal = surName.addEventListener("keyup", () => {return surNameVal = surName.value});
let ageVal = age.addEventListener("keyup", () => {return ageVal = age.value});
let cityVal = city.addEventListener("keyup", () => {return cityVal = city.value});

const save = () => {
   
    formData.push({
        Ad : nameVal,
        Soyad: surNameVal,
        Yas: ageVal,
        Şehir: cityVal
    });
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();});
}

const writeList = () => {
    formList.innerHTML = formData
}
writeList();
