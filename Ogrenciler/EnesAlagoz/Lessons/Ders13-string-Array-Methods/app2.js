// String Metodları

let value;
const firstName = "Necati";
const lastName = "Dogrul";
const age = 25;
const department = "Yazılım";

// value = firstName + " " + lastName;
// value = firstName;
// value += " " + lastName;

// value = firstName.length;
// value = firstName.toUpperCase();
// value = firstName.toLowerCase();
// value = firstName[1];
// value = firstName[firstName.length - 1];
// value = firstName[-1];
// value = firstName.indexOf("i");
// value = firstName.includes("z");
// value = firstName.concat(" ", lastName);

// value =
//   "İsim: " +
//   firstName +
//   " " +
//   "\nSoyisim: " +
//   lastName +
//   " " +
//   "\nYaş: " +
//   age +
//   " " +
//   "\nDepartman: " +
//   department;

// Template Literal
// value = `İsim: ${firstName}
// Soyisim: ${lastName}
// Yaş: ${age}
// Departman: ${department}`;

// value = `
// <ul>
//   <li>İsim: ${firstName}</li>
//   <li>Soyisim: ${lastName}</li>
//   <li>Yaş: ${age}</li>
//   <li>Departman: ${department}</li>
// </ul>
// `;

// Array Metodları
// const numbers = [43, 22, 56, 59, 68, 12, 7, 82, 44, 21];
// const langs = ["Python", "Java", "C#", "C++"];

// value = numbers.length; // Arrayin eleman sayısı
// value = numbers[0]; // Arrayin ilk elemanı
// value = numbers[numbers.length - 1]; // Arrayin son elemanı
// value = numbers.push(100); // Arrayin sonuna ekleme
// value = numbers.pop(); // Arrayin sonundan eleman silme
// value = numbers.shift(); // Arrayin ilk elemanını silme
// value = numbers[3] = 8;
// value = numbers.indexOf(4);
// value = numbers.includes(43);
// value = langs.sort(); // Arrayin sıralama Alfabetik olarak
// value = numbers.sort(); // Arrayin sıralama
// value = numbers.sort(function (x, y) {
//   return x - y;
// });
// Arrayin sıralama küçükten büyüğe
// value = value.reverse();

// Object

// const student = {
//   fullName: "Necati Dogrul",
//   age: 25,
//   address: {
//     city: "Antalya",
//     zone: "Konya Altı",
//   },
//   work: function () {
//     console.log("Çalışıyor");
//   },
//   lang: ["Python", "Java", "C#", "C++"],
// };

// value = student.lang[2];
// value = student.work();

// let date = new Date();
// value = date.getFullYear();
// value = date.getMonth() + 1;
// value = date.getDay();
// value = date.getDate();
// value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

// console.log(value);
// document.write(value);

// ===================

// Karşılaştırma Operatörleri

// == (iki eşittir)
// a = 10;
// b = "10";
// c = 20;
// console.log(a == c);

// === (üç eşittir)
// a = 10;
// b = 10;
// c = 20;
// console.log(a === b);

// // != (2 eşit değil)
// a = 10;
// b = "11";
// c = 20;
// console.log(a != c);

// // !== (3 eşit değil)
// a = 10;
// b = "10";
// c = 20;
// console.log(a !== b);

// < (Küçüktür)
// a = 10;
// b = "10";
// c = 20;
// console.log(a < c);

// > (Büyüktür)
// a = 10;
// b = "10";
// c = 20;
// console.log(b > a);

// >= (Büyük Eşit)
// a = 10;
// b = "10";
// c = 20;
// console.log(b >= c);

// <= (Küçük Eşit)
// a = 10;
// b = "10";
// c = 20;
// console.log(c <= b);

// && (ve operatörü)
// console.log(2 == 2 && 3 == 4);

// || (veya operatörü)
// console.log(2 == 2 || 3 == 4);

// ! (tersi operatörü - Not)
// console.log(!(2 == 1 || 3 == 4));
// if (!!numbers) {
//   console.log("Sayı var");
// }
// console.log(!!numbers);

// Koşullar
// if (false) {
//   console.log("Koşul Sağlandı");
// }

// let a = 10;
// let b = 20;
// if (a < b) {
//   console.log("A B'den Kuçuktur");
// } else if (a > b) {
//   console.log("A B'den Büyük");
// } else {
//   console.log("A B'ye Esittir");
// }

// const islem = 4;

// switch (islem) {
//   case 1: {
//     console.log("1");
//     break;
//   }
//   case 2: {
//     console.log("2");
//     break;
//   }
//   case 3: {
//     console.log("3");
//     break;
//   }
//   default: {
//     console.log("Hatalı Işlem");
//   }
// }
// value = prompt("Sayı Giriniz");

// console.log(value);

// Döngüler

// const langs = ["Python", "Java", "C#", "C++"];

// for (let i = 0; i < langs.length; i++) {
//   console.log(langs[i]);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
