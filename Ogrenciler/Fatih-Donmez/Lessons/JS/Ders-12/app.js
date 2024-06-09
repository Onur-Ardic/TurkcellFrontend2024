let value;
const firstName = "Necati";
const lastName = "Dogrul";
const age = 25;
const department = "Yazılım";

value = firstName + " " + lastName + " " + age + " " + department;
value = lastName;
//value = `${firstName} ${lastName} ${age} ${department}`;
//value += " " + firstName;
value = firstName.length;

value = lastName.toUpperCase();
value = lastName.toLowerCase();
value = lastName.charAt(0);
value = lastName[-1];
value = lastName.indexOf("l");
value = lastName.lastIndexOf("l");
value = lastName.includes("l");
value = lastName.startsWith("l");
value = lastName.endsWith("l");
value = lastName.slice(0, 3);
value = lastName.substring(0, 3);
value = lastName.substr(0, 3);
value = lastName.split("");
value = lastName.split(" ");
value = lastName.concat(" ", lastName);
value = firstName.trim();
value = firstName.trimStart();
value = firstName.trimEnd();
value = firstName.padStart(20, " ");
value = firstName.padEnd(20, " ");
value = firstName.repeat(3);
value = firstName.padStart(20, " ").padEnd(20, " ");
value = firstName.padStart(20, " ").padEnd(20, " ").repeat(3);
value = "\nisim " + firstName + "\nsoyisim " + lastName + " \nyas " + age;
// Template Literal

value = `isim: ${firstName}
soyisim:  ${lastName} 
yaş : ${age} 
departman : ${department}`;

value = `
<ul>
  <li>isim: ${firstName}</li>
  <li>soyisim: ${lastName}</li>
  <li>departman: ${department}</li>
</ul>
`;

document.write(value);

//arrau metodları

const numbers = [43, 22, 56, 59, 68, 12, 7, 82, 44, 21];
const langs = ["python", "java", "c#", "c++"];

//array in eleman sayısı
value = numbers.length;
value = numbers.length;
//array in ilk elemanı
value = numbers[0];
//array in son elemanı
value = numbers[numbers.length - 1];
//index ı döner
value = numbers.push(100);
value = numbers;
//arrayin sonundan elaman siler sildiği elemanı verir
value = numbers.pop();
//array in ilk elemanını siler
value = numbers.shift();
value = numbers[3] = 8;
//başa ekler
value = numbers.unshift(100);
value = numbers.indexOf(68);
value = numbers.lastIndexOf(68);
value = numbers.includes(68);
//array alfabetik sıralama
value = langs.sort();
//number array sıralama
/*
value = numbers.sort();{{
value = numbers.sort(function (a, b) {
  a - b;
});
value = numbers.toSorted(function (a, b) {
  return a - b;
});

value = value.reverse();
}}
*/
//object
const student = {
  fullName: "Necati Dogrul",
  age: 25,
  adres: {
    city: "Antalya",
    zone: "Konya Altı",
  },
  work: function () {
    console.log("çalışıyoræ");
  },
  langs: ["python", "java", "C#", "c++"],
};

value = student.langs[2];
value = student.work;
//value dan bir değer dönmediği için undefined
//value = student.work();

let date = new Date();
value = date;
value = date.getFullYear();
value = date.getMonth();
value = date.getDate();
value = date.getDay();
value = date.getHours();
value = date.getMinutes();
value = date.getSeconds();
value = date.getMilliseconds();
value = date.getTime();

value = ` ${date.getDate()}/${date.getMonth() - 1}/${date.getFullYear()}`;

// Karşılaştırma Operatörleri
a = 10;
b = "10";
c = 20;
//console.log(a == c);

a = 10;
b = "10";
c = 20;
//console.log(a === c);

// = iki eşti değil

a = 10;
b = "10";
c = 20;
//console.log(a != b);
// = üç eşit değil

a = 10;
b = "10";
c = 20;
//console.log(a !== b);

// < küçüktür

a = 10;
b = "10";
c = 20;
//console.log(a < b);

// > büyüktür

a = 10;
b = "10";
c = 20;
//console.log(c > a);

// > = büyük eişt

a = 10;
b = "10";
c = 20;
//console.log(b >= c);

//  <= küçük eşit

a = 10;
b = "10";
c = 20;
//console.log(b <= c);

// && end ve operatörü
//console.log(2 == 2 && 4 == 3);

// || or veya e operatörü
//console.log(2 == 2 || 4 == 3);

// tersi öperatörü - not
//console.log(!(2 == 2 || 4 == 3));
/*
if (!!numbers) {
  console.log("sayı var");
}
*/
//eleman var mı diye kontrol edilir not in not ı bazen kullanılabilir
//if in içinde kullanılmasına gerek yok if in dışında mantıklı olabilir if in içinde mantıklı değil

//console.log(!!numbers);

//koşullar

if (true) {
  console.log("koşul sağlandı");
}

let a1 = 10;
let b1 = 20;

if (a1 < b1) {
  console.log("a b küçük");
} else if (a1 > b1) {
  console.log("a b büyük");
} else {
  console.log("a eşit b");
}

const islem = 1;

switch (islem) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3");
    break;
  default:
    console.log("hatalı işlem");
    break;
}
value = prompt("sayı giriniz");
console.log(value);

//kullanıcıdan önce 1 den 100 e kadar sayıyı akılda tutup kullanıcadan tahmin etsin

//for (let i = 0; i < 100; i++) {
//console.log(i);
//}
const lang = [
  "python",
  "java",
  "c#",
  "c++",
  "javascript",
  "php",
  "ruby",
  "c",
  "c++",
  "c#",
];
for (let i = 0; i < langs.length; i++) {
  console.log(langs[i]);
}
for (let i = 0; i <= 10; i++) {
  console.log("javascript");
  console.log(i);
}

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
