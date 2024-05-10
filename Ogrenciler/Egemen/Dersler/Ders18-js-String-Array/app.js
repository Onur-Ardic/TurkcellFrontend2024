let value;
const firstName ="Egemen";
const lastName ="Kaplan";
const age = 26;
const department= "Yazılım";

// value = firstName + " " + lastName;
// value= firstName;
// value += " " + lastName;

// value = firstName.length;
// value = firstName.toUpperCase();
// value = firstName.toLowerCase();
// value = firstName[1];
// value = firstName[firstName.length - 1];
// value = firstName[-1];
// value = firstName.indexOf("e");
// value = firstName.includes("e");
// value = firstName.concat(" ", lastName);

// value = 
// "\nİsim: " + firstName + 
// "\nSoyad: " + lastName + 
// "\nYaş " + age + 
// "\nDepartman: " + department;

// value = `İsim: ${firstName}
// Soyad: ${lastName}`;

// value = `
// <ul>
// <li>İsim: ${firstName}</li>
// <li>Soyad: ${lastName}</li>
// <li>Yaş: ${age}</li>
// <li>Departman: ${department}</li>
// </ul>
// `;

//Array Metodları
const numbers = [43, 22, 56, 59, 68, 12, 7, 82, 44, 21];
const langs = ["Python", "Java", "C#", "C++"];

// value= numbers.length;
// value = numbers[0];
// value = numbers[numbers.length - 1];
// value = numbers.push(100);
// value = numbers.pop(100);
// value = numbers.shift();
// value = numbers;
// value = numbers.indexOf(56);
// value = numbers.indexOf(4);
// value = numbers.includes(22);
// value = numbers.includes(52);
// value = langs.sort(); // array alfabetik sıralama
// value = numbers.sort(); // numaraları ilk numarasına göre sıralıyor
// value = numbers.sort(function(x, y){
//     return x-y;
// });// küçükten büyüğe sıralanmasını sağlıyor
// value = value.reverse();


//Object  Metodları

const student= {
    fullName: "Egemen Kaplan",
    age: 26,
    address: {
        city: "Istanbul",
        zone: "Catalca"
    },
    work: function (){
        console.log("çalışıyor");
    },
    lang: ["Python", "Java", "C#", "C++"],
}

// value = student.lang[2];
// value = student.work();

// let date = new Date();
// value = date.getFullYear();
// value = date.getMonth() + 1;
// value = date.getDate();
// value = date.getDay();
// value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;



// console.log(value);
// document.write(value);


// =============================

//Karşılaştırma Operatörleri 

// == iki eşittir
// a = 10;
// b= "10";
// c = 20;

// console.log(a==b);

// === üç eşittir
// a = 10;
// b= "10";
// c = 20;

// console.log(a===b);

// !== iki eşit değil
// a = 10;
// b= "10";
// c = 20;

// console.log(a!=b);

// !== üç eşit değil
// a = 10;
// b= "10";
// c = 20;

// console.log(a!==b);

// < küçüktür
// a = 10;
// b= "10";
// c = 20;
// console.log(a < c);

// > büyüktür
// a = 10;
// b= "10";
// c = 20;
// console.log(a > c);

// >= büyük eşit
// a = 10;
// b= "10";
// c = 20;
// console.log(a >= b);

// <= küçük eşit
// a = 10;
// b= "10";
// c = 20;
// console.log(a <= b);

// && and
// console.log(2 == 2 && 3 ==3);
// console.log(2 == 2 && 3 ==4);

//  veya
//...

// !
//...

//======================

//Koşullar
// if(true){
//     console.log("Sağlandı");
// }

// let a = 10;
// let b = 20;
// if(a < b) {
//     console.log("A B'den küçüktür");
// } else if (a > b) {
//     console.log("A B'den büyüktür");
// }else {
//     console.log("eşitler");
// }

// const islem = 1;

// switch (islem) {
//     case 1:{
//         console.log("1");
//         break;
//     }
//     case 1:{
//         console.log("2");
//         break;
//     }
//     case 1:{
//         console.log("3");
//         break;
//     }
//     default: {
//         console.log("hatalı işlem");
//     }

//         break;
// }

value = prompt("sayı gir");