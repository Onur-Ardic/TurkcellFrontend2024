//string methodlar
let value;
const firstName = "Necati";
const lastName = "Dogrul";
const age = 25;
const department = "Yazılım";

// value = firstName.length;
// value = firstName.toUpperCase();
// value = firstName.toLowerCase();
// value = firstName[1];
// value = firstName[firstName.length - 1]; son elemana ulaşma
// value = firstName[-1]; undefined döner
// value = firstName.indexOf("i");
// console.log(value)
// value = firstName.includes("z");
// value = firstName.concat(" ", lastName);

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

let date = new Date();
value = date.getFullYear();
value = date.getMonth() + 1;
value = date.getDay(); //2 veriyor 2.gun salı anlamında
value = date.getDate(); //7 mayıs anlamında 7 veriyor
value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

console.log(value);
// document.write(value);