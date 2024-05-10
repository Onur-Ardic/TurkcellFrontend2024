// local storage
// let userName = "Egemen";

// localStorage.setItem("name", userName);

// let name = localStorage.getItem("name");

// console.log(name);

// let userName = 44;

// localStorage.setItem("name", userName);

// let name = Number(localStorage.getItem("name"));

// console.log(name);
// console.log(typeof name);

// let userName = {
//     name: "Egemen",
//     age: 26,
//     city: "istanbul",
//     langs: ["Python", "Java", "C#", "C++"]
// }
// localStorage.setItem("name", JSON.stringify(userName));
// let userLocal = JSON.parse(localStorage.getItem("name"));

// console.log(userLocal);

// let users = ["Egemen", "Egemen", "Egemen"];
// localStorage.setItem("users", JSON.stringify(users));
// let userLocal = JSON.parse(localStorage.getItem("users"));
// console.log(userLocal); // ["Egemen", "Egemen", "Egemen"]

let numbers = [9, 44, 32, 66, 12, 88, 7];
let langs = ["Python", "Java", "C#", "C++"];

// map method

// const map1 = numbers.map((x) => x * 2);
// console.log(map1);

let users = [
    {name: "Egemen", age: 26},
    {name: "Ege", age: 22},
    {name: "Men", age: 24},
]

// users.map((user) => console.log(user.name));

// forEach method
// langs.forEach((lang) => console.log(lang));


// filter method
// const result = langs.filter((lang) => lang.length > 3);
// console.log(result);


//reduce method
// const result = numbers.reduce((total, number) => total + number, 0);
// console.log(result);

//spread operator
// let langs2 = ["Python", "Java", "C#", "C++"];
// let langs3 = ["Html", "Css", "Js", "React"];

// const result = [...langs2, ...langs3];
// console.log(result);

//Destructuring
// let user = {
//     name: "Egemen",
//     age: 26,
//     city: "istanbul",
//     langs: ["Python", "Java", "C#", "C++"]
// }

// let {name: ad, age: yas, ...geriyeKalanlar} = user;

// console.log(geriyeKalanlar);
// log(ad,yas);

// let [a, b, ...c] = numbers;

// console.log(c);
// cpnsole.log(a,b);


//for in
const person ={
    name: "Egemen",
    age: 26,
    city: "istanbul",
    langs: ["Python", "Java", "C#", "C++"]
}

// for(let key in person){
//     console.log(key, person[key]);
// }

//for of
// for(let value of numbers){
//     console.log(value);
// }

// for(let value of person){
//     console.log(value);
// }

// Map veri tipi-objenin karşılığı
// const key1 = "name";
// const key2 = {a: 10, b:20};
// const key3 = () => console.log("Merhaba");
// const key4 = key2;

denemeMap = new Map();

// denemeMap.set(key1, "String Key");
// denemeMap.set(key2, "Object Key");
// denemeMap.set(key3, "Function Key");
// denemeMap.set(key4, "Object Key");

// console.log(denemeMap);
// console.log(typeof denemeMap);

// console.log(denemeMap.get(key1));
// console.log({a: 10, b:20});
// console.log(denemeMap.get(key2));
// console.log(denemeMap.get(key4));

// denemeMap.forEach((value, key) = console.log(key, value));



// Set veri tipi - arrayin karşılığı
const mySet = new Set();
mySet.add(10);
mySet.add("Ege");
mySet.add({a: 10, b: 20});
mySet.add(1, 2, 3);

console.log(mySet);
console.log(typeof mySet);
console.log(mySet.has(10));

