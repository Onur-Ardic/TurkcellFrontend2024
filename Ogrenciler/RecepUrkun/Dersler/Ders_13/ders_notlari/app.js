// Functions
// merhaba();
// function merhaba() {
//   console.log("merhaba");
// }

// function user(name, age) {
//   console.log(`İsim: ${name}, Yas: ${age}`);
// }
// user("Ahmet", 20);

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {
//   console.log(`İsim: ${name}, Yas: ${age}`);
// }
// user("Ahmet");

// Return ile değer dönme
// function square(x) {
//   return x * x;
// }
// const sonuc = square(5) * 3;
// console.log(sonuc);

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {
//   return `İsim: ${name}, Yas: ${age}`;
// }
// console.log(user("Ahmet", 20));

// Arrow Functions
// const kare = function (x) {
//   return x * x;
// };
// const kare = (x) => x * x;
// console.log(kare(5));

// Do while - while

// while

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// while (i < 10) {
//   if (i === 3 || i === 5) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// do while

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// Array map()
const langs = ["Python", "Java", "C#", "C++"];

// langs.forEach(function (lang) {
//   console.log(lang);
// })

langs.map((lang) => console.log(lang));
