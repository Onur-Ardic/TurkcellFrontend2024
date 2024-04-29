// JS Giriş
// console.log("Merhaba Javascript");

// Değişkenler
// String
// var name = "Abdullah";
// Number
// var age = 17;

// age = "bilmiyorum";

// console.log(name, age);

// var firstNumaber = 10;
// var secondNumber = "20";
// console.log(firstNumaber - secondNumber);

// Hoisting
// var firstNumaber;
// console.log(firstNumaber);
// firstNumaber = 10;
// a();
// function a() {
//   console.log("a fonksiyonu cagrildi")
//  }

// Boolean (true, false)

// var isAdult = false;

//  if (age) {
//     age >= 18 ? (isAdult = true) : (isAdult = false);
//     console.log(isAdult ? "Reşit" : "Reşit Değil")
// }

// Undefined Veri Tipleri - Tanımsız
// var useName;
// console.log(useName);
// console.log(typeof useName);

// Null - Boş değer
// var isNull = null;
// console.log(isNull);
// console.log(typeof isNull);

// Object - Nesne
// var user = {
//   name: "Abdullah",
//   age: 17,
//   salary: 20000,
//   not: {
//     js: 100,
//     html: 100,
//     css: 90,
//   },
//   faroriteColors: ["red", "blue", "green"],
// };

// console.log(user);
// console.log(typeof user);
// console.log(user.not.js);

// Array - Dizi
// var students = ["Abdullah", "Erkan", "Hüseyin", "Ahmet"];
// console.log(students);
// console.log(students[3]);
// console.log(typeof students);

// Function - Fonksiyon
// function a() {
//   console.log("a fonksiyonu cagrildi");
// }
// a();
// console.log(a);
// console.log(typeof a);

// Date - Tarih;
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
// a.push(60);
// console.log("2- ", a, b);

// Scope - Kapsam
// var a = 10; // Global Scope
// let b = 20; // Global Scope
// function b() {
//   var b = 20; // Functional Scope
//   console.log(a, b);
//   c();
// }
// if (true) {
//   let c = 30; // Block Scope
//   console.log(c);
// }
// {
//   const d = 40; // Block Scope
//   console.log(d);
// }
// Global[Function[Block]]

// Tip Dönüşümleri
// var a = 5;
// console.log(a, typeof a);
// a = String(a);
// console.log(a, typeof a);

// var a = "5";
// console.log(a, typeof a);
// a = Number(a);
// console.log(a, typeof a);

// var a = "deneme";
// console.log(a, typeof a);
// a = Number(a);
// console.log(a, typeof a);

// var a = 5 + "2";
// console.log(a, typeof a);

// var a = 5 - "2";
// console.log(a, typeof a);

// Operatörler
// Atama Operatörü (=)
// const a = 10;
// const b = 3;

// Aritmetik Operatorler
// console.log(a + b); // Toplama Operatorü
// console.log(a - b); // Çıkarma Operatorü
// console.log(a * b); // Çarpma Operatorü
// console.log(a / b); // Bölme Operatorü
// console.log(a % b); // Mod Alma Operatorü
// console.log(a ** b); // Üs Alma Operatorü

// Math Fonksiyonları

// let sonuc;
// sonuc = Math.PI;
// sonuc = Math.floor(3.8);
// sonuc = Math.ceil(3.1);
// sonuc = Math.round(3.4);
// sonuc = Math.sqrt(64);
// sonuc = Math.floor(Math.random() * 100);
// console.log(sonuc, typeof sonuc);
