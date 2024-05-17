var name = "buğra";
var age = 23;

// age = "bilmem";

// console.log(name, age);

// var firstNumber = 15;
// var secondNumber = "25";

// console.log(firstNumber - secondNumber);

// Hoisting
// var firstNumber;
// console.log(firstNumber);
// firstNumber = 15;
// a();
// function a() {
//   console.log("a fonk. çağırıldı");
// }

//Boolean (true,false)

// var isAdult = false;

// if (age) {
//   age >= 18 ? (isAdult = true) : (isAdult = false);
//   console.log(isAdult ? "Reşit" : "Reşit değil");
// }

// Undefined veri tipleri - tanımsız
// var useName;
// console.log(useName);
// console.log(typeof useName);

// null - boş değer
// var isNull = null;
// console.log(isNull);
// console.log(typeof isNull);

// object- nesne
// var user = {
//   name: "buğra",
//   age: 23,
//   salary: 2001,
//   not: {
//     js: 100,
//     html: 75,
//     css: 55,
//   },
//   favoriteColors: ["blue", "yellow"],
// };

// console.log(user);
// console.log(typeof user);
// console.log(user.not.css);

// array - dizi
// var students = ["Buğra", "ipek", "nuray", "yiğit"];
// console.log(students);
// console.log(typeof students);
// console.log(students[1]);

// function - fonksiyon
// function a() {
//   console.log("a fonk. çağırıldı");
// }
// a();
// console.log(a);
// console.log(typeof a);

//date -tarih
// var date = new Date();
// console.log(date);
// console.log(typeof date);

// var a = 10;
// var b = a;
// console.log("1- ", a, b);
// a = 20;
// console.log("2- ", a, b);

// var a = [10];
// var b = a;
// console.log("1- ", a, b);
// a = [20];
// console.log("2- ", a, b);
// console.log("3- ", a * b);

// var a = [10, 20, 30, 40, 50];
// var b = a;
// console.log("1- ", a, b);
// a[0] = 60;
// a.push(70);
// console.log("2- ", a, b);

// scope - kapsam
// var a = 10;

// function b() {
//   var b = 20;
//   console.log(a, b);
//   c();
// }
// if (true) {
//   let c = 30;
//   console.log(c);
// }

// tip dönüşümleri
// var a = "5";
// console.log(a, typeof a);
// a = Number(a);
// console.log(a, typeof a);

// var a = 5 - "2";
// console.log(a);

// Operatörler
// Atama Operaötü
// const a = 10;
// const b = 2;

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

// math fonksiyonları
let sonuc;
sonuc = Math.PI;
sonuc = Math.floor(3.8);
sonuc = Math.ceil(3.1);
sonuc = Math.round(3.4);
sonuc = Math.sqrt(64);
sonuc = Math.floor(Math.random() * 100);
console.log(sonuc, typeof sonuc);
