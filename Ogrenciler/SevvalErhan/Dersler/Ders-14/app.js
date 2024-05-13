// Local Storage

// let username = "Sevval" //String

// localStorage.setItem("name", userName);

// let name = localStorage.getItem("name");

// console.log(name);

// let userName = 44; // Number

// localStorage.setItem("name", userName);

// let name = Number(localStorage.getItem("name"));

// console.log(name);
// console.log(typeof name);

// let user = {
//   name: "Ahmet",
//   age: 20,
//   city: "Istanbul",
//   langs: ["Python", "Java", "C#", "C++"],
// };

// localStorage.setItem("user", JSON.stringify(user));
// let userLocal = JSON.parse(localStorage.getItem("user"));
// console.log(userLocal);

// let users = ["Varol", "Ahmet", "Mehmet"];

// localStorage.setItem("users", JSON.stringify(users));
// let userLocal = JSON.parse(localStorage.getItem("users"));
// console.log(userLocal);

// Array Methods

let numbers = [9, 44, 32, 66, 12, 88, 7];
let langs = ["Python", "Java", "C#", "C++"];

// map methodu

// const map1 = numbers.map((x) => x * 2);

// console.log(map1);

let users = [
  { name: "Ahmet", age: 20 },
  { name: "Mehmet", age: 25 },
  { name: "Varol", age: 30 },
];

// users.map((user) => console.log(user.name));

// forEach methodu

// langs.forEach((lang) => console.log(lang));

// filter methodu

// const result = langs.filter((lang) => lang.length > 3);

// console.log(result);

// reduce methodu

// const result = numbers.reduce((total, number) => (total += number), 0);

// console.log(result);

// spread operatoru

// let langs2 = ["Python", "Java", "C#", "C++"];
// let langs3 = ["HTML", "CSS", "Javascript"];

// const result = [...langs2, ...langs3];
// console.log(result);

// Destructuring

// let user = {
//   name: "Ahmet",
//   age: 20,
//   city: "Istanbul",
//   langs: ["Python", "Java", "C#", "C++"],
// };

// let { name: ad, age: yas, ...geriyeKalanlar } = user;

// console.log(geriyeKalanlar);
// console.log(ad, yas);

// let [a, b, ...c] = numbers;

// console.log(c);
// console.log(a, b);

// const [todos, setTodos] = useState([])

// for in

const person = {
  name: "Ahmet",
  age: 20,
  langs: ["Python", "Java", "C#", "C++"],
};

// for (let key in person) {
//   console.log(key, person[key]);
// }

// for of - objelerde kullanılamaz
// for (let value of numbers) {
//   console.log(value);
// }

// for (let value of person) {
//   console.log(value);
// }

// Map veri tipi

const key1 = "name";
const key2 = { a: 10, b: 20 };
const key3 = () => console.log("Merhaba");
const key4 = key2;

denemeMap = new Map();

denemeMap.set(key1, "String Key");
denemeMap.set(key2, "Object Key");
denemeMap.set(key3, "Function Key");

// console.log(denemeMap);
// console.log(typeof denemeMap);

// console.log(denemeMap.get("name"));
// console.log(denemeMap.get(key2));
// console.log(denemeMap.get(key4));

denemeMap.forEach((value, key) => console.log(key, value));

// Set veri tipi
const mySet = new Set();
mySet.add(10);
mySet.add("Varol");
mySet.add({ a: 10, b: 20 });
mySet.add([1, 2, 3]);

// console.log(mySet);
// console.log(typeof mySet);
// console.log(mySet.has(10));
