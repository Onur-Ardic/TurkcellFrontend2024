// Data Types
var firstNumaber = 10;
var secondNumber = "20";
console.log("data types: ", firstNumaber - secondNumber);

// Hoisting
var thirdNumaber;
console.log("Hoisting 1:", thirdNumaber);
thirdNumaber = 10;
console.log("Hoisting 2:", thirdNumaber);
a();
function a() {
    console.log("Hoisting 3: a fonksiyonu cagrildi");
}

// Boolean
var age = 22;
var isAdult = false;
if (age) {
    age >= 18 ? (isAdult = true) : (isAdult = false);
    console.log("Boolean: ", isAdult ? "Reşit" : "Reşit Değil");
}

// Undefined
var userName;
console.log("Undefined result: ", userName);
console.log("Undefined type: ", typeof userName);

// Null
var isNull = null;
console.log("Null result", isNull);
console.log("Null type", typeof isNull); // object

// Object
var user = {
    name: "Barış",
    age: 22,
    salary: 35000,
    not: {
        js: 70,
        html: 60,
        css: 50,
    },
    favoriteColors: ["red", "blue", "green"],
};
console.log("User: ", user);
console.log("User type: ", typeof user);
console.log("Js note: ", user.not.js);

// Array
var students = ["Abdullah", "Erkan", "Hüseyin", "Barış"];
console.log("Array: ", students);
console.log("First: ", students[0]);
console.log("Array type: ", typeof students);

// Function
function a() {
    console.log("a fonksiyonu cagrildi");
}
a();
console.log("Function: ", a);
console.log("Function type: ", typeof a);

// Date
var date = new Date();
console.log("Date: ", date);
console.log("Date type: ", typeof date);

// Ne olur
var a = 10;
var b = a;
console.log("1- ", a, b);
a = 20;
console.log("2- ", a, b);

// Ne olur
var a = [10];
var b = a;
console.log("1- ", a, b);
a = [20];
console.log("2- ", a, b);
console.log("3- ", a * b);

// Ne olur
var a = [10, 20, 30, 40, 50];
var b = a;
console.log("1- ", a, b);
a[0] = 60;
a.push(60);
console.log("2- ", a, b);

// Scope
// Global[Function[Block]]
var a = 10; // Global Scope
let c = 30; // Global Scope
function x() {
    var c = 20; // Functional Scope
    console.log(a, c);
}
if (true) {
    let c = 30; // Block Scope
    console.log(c);
}
{
    const d = 40; // Block Scope
    console.log(d);
}
x();

// type conversion
var a = 5;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

var a = "5";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

var a = "deneme";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

var a = 5 + "2";
console.log(a, typeof a);

var a = 5 - "2";
console.log(a, typeof a);

// Operators
// Atama Operatörü (=)
const g = 10;
const h = 3;

// Aritmetik Opretators
console.log(g + h);
console.log(g - h);
console.log(g * h);
console.log(g / h);
console.log(g % h);
console.log(g ** h);

// Math Fonksiyonları
let sonuc;
sonuc = Math.PI;
sonuc = Math.floor(3.8);
sonuc = Math.ceil(3.1);
sonuc = Math.round(3.4);
sonuc = Math.sqrt(64);
sonuc = Math.floor(Math.random() * 100);
console.log(sonuc, typeof sonuc);
