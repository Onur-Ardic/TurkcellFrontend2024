// let username = "Alpay";

// localStorage.setItem("username", username);

// let user = {
//   name: "Alpay",
//   age: 25,
//   city: "istanbul",
// };

// localStorage.setItem("user", JSON.stringify(user));

// let value = JSON.parse(localStorage.getItem("user"));
// console.log(value);

// //Array Methods

// let numbers = [9, 44, 32, 66, 12, 88, 7];
// let langs = ["Python", "Java", "C#", "C++"];

// const map1 = numbers.map((x) => x * 2);

// console.log(map1);

// let users = [
//   { name: "alpay", age: 20 },
//   { name: "alresd", age: 21 },
//   { name: "alper", age: 22 },
// ];

// users.map((user) => console.log(user.name));

// //foreach

// langs.forEach((lang) => console.log(lang));

// //filter

// // const result = langs.filter((lang) => lang.length > 3);

// // console.log(result);

// //reduce

// const result2 = numbers.reduce((total, number) => (total += number), 0);
// console.log(result2);

// //spread operator

// let langs2 = ["Python", "Java", "C#", "C++"];
// let langs3 = ["htmk", "css", "js"];

// const result = [...langs2, ...langs3];

// console.log(result);

//destructiring
// const userData = {
//   id: 5,
//   username: "Alpay",
//   age: 10,
//   email: "alpay@gmail.com",
// };

// let { username: ad, age: yas, ...geriyeKalanlar } = userData;

// console.log(geriyeKalanlar);
// console.log(ad, yas);

// const person = {
//   name: "Alpay",
//   age: 25,
//   langs: ["python", "deneme"],
// };

// for (let value in person) {
//   console.log(value, person[value]);
// }

//MAP
//map obje karşılığı set ise array karşılığı gibi
const key1 = "name";
const key2 = { a: 10, b: 20 };
const key3 = () => console.log("merhaba");
const key4 = key2;

denemeMap = new Map();
denemeMap.set(key1, "String Key");
denemeMap.set(key2, "object Key");
denemeMap.set(key3, "function Key");
denemeMap.set(key4, "object Key");

// console.log(denemeMap.get(key1));

denemeMap.forEach((value, key) => {
  console.log(key, value);
});

//SET
const mySet = new Set();
mySet.add(10);
mySet.add("varol");
mySet.add({ a: 10, b: 20 });

console.log(mySet);
