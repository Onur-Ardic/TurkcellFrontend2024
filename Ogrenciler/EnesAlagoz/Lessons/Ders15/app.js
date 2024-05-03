document.getElementById("person").addEventListener("submit", function (event) {
  event.preventDefault();
});
var firstName = document.getElementById("name").value;
var lastName = document.getElementById("surname").value;
var city = document.getElementById("city").value;
var userInfo = { firstName: firstName, lastName: lastName, city: city };
console.log("Kullanıcı Bilgileri:", userInfo);
console.log(userInfo);

console.log("Ad: " + firstName);
console.log("Soyad: " + lastName);

console.log("Memleket: " + city);
