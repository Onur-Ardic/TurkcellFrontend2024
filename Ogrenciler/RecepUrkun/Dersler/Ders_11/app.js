// JS Griş
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

//! Hoisting
//? bu sekilde undefined dönecek fakat
// var firstNumber;
// console.log(firstNumber);
// firstNumber = 10;
//? bu sekilde ise hoisting uygulanacak(jsnin motoru ile alakali, sadece var icin gecerli let-const'da ise yaram)
// firstNumber2=10;
// var firstNumber2;
// console.log(firstNumber2)
//* bunun sebebi ise jsnin motoru once sayfa yuklenmeden tum degiskenleri hafizaya aliyor ondan sonra site yuklenirken bu degiskenlere eger tanimlanmis degerler var ise onlara atama yapiyor boylece hoisting kavrami ortaya cikiyor

//burada da hoisting uygulaniyor.
// a();
// function a() {
//   console.log("a fonksiyonu cagrildi");
// }

// Boolean (true, false)

// var isAdult = false;
// let age = "18"
// if (age) {
//   age >= 18 ? (isAdult = true) : (isAdult = false);
//   console.log(isAdult ? "Reşit" : "Reşit Değil");
// }

// Undefined Veri Tipleri - Tanımsız
// var useName;
// console.log(useName);
// console.log("type: ",typeof useName);

// Null - Boş değer
// * null bir obje degildir fakat typeof operatörü ile kontrol edildiğinde null, "object" olarak görünür.
// * Bu, JavaScript'in eski bir hata ve uyumluluk sorunudur. Daha sonra fark edilse de degistirilmemistir
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
// sonuc = Math.floor(3.8); //asagi yuvarlar
// sonuc = Math.ceil(3.1); //yukari yuvarlar
// sonuc = Math.round(3.4); //3e yuvarlar
// sonuc = Math.round(3.6); //4e yuvarlar
// sonuc = Math.sqrt(64);
// sonuc = Math.floor(Math.random() * 100);
// console.log(sonuc, typeof sonuc);
