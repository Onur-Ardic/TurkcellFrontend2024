//? Local Storage
// let userName = "Barış";
// localStorage.setItem("userName", userName);
// let lsUserName = localStorage.getItem("userName");
// console.log(lsUserName);

// let userAge = 44;
// localStorage.setItem("userAge", userAge);
// let lsuserAge = Number(localStorage.getItem("userAge"));
// console.log(lsuserAge);
// console.log(typeof lsuserAge);

// let user = {
//     name: "Barış",
//     age: 22,
//     city: "Adana",
//     langs: ["Python", "Javascript", "C#", "C++"],
// };
// localStorage.setItem("user", JSON.stringify(user));
// let userLocal = JSON.parse(localStorage.getItem("user"));
// console.log(userLocal);

// let users = ["Barış", "Varol", "Erdem"];
// localStorage.setItem("users", JSON.stringify(users));
// let userLocal = JSON.parse(localStorage.getItem("users"));
// console.log(userLocal);

//? Array Methods
let numbers = [1, 5, 3, 6, 14];
let langs = ["Python", "JavaScript", "C#", "C++"];

//? Map methodu
// const mapEx = numbers.map((x) => x * 2);
// console.log(mapEx);

// let users = [
//     { name: "Barış", age: 22 },
//     { name: "Varol", age: 30 },
//     { name: "Erdem", age: 25 },
// ];
// users.map((user) => console.log(user.name));

//? forEach methodu
// langs.forEach((lang) => console.log(lang));

//? filter methodu
// const result = langs.filter((lang) => lang.length > 3);
// console.log(result);

//? reduce methodu
// const result = numbers.reduce((total, number) => (total += number), 5);
// console.log(result);

//? spread operatoru
// let langs2 = ["Python", "Java", "C#", "C++"];
// let langs3 = ["HTML", "CSS", "Javascript"];
// const result = [...langs2, ...langs3];
// console.log(result);

//? Destructuring
// let user = {
//     name: "Ahmet",
//     age: 20,
//     city: "Istanbul",
//     langs: ["Python", "Java", "C#", "C++"],
// };
// let { name: ad, age: yas, ...geriyeKalanlar } = user;
// console.log(geriyeKalanlar);
// console.log(ad, yas);

// let [a, b, ...c] = numbers;
// console.log(c);
// console.log(a, b);

// const [todos, setTodos] = useState([])

//? for in
// const person = {
//     name: "Ahmet",
//     age: 20,
//     langs: ["Python", "Java", "C#", "C++"],
// };

// for (let key in person) {
//     console.log(key, person[key]);
// }

// // for of - objelerde kullanılamaz
// for (let value of numbers) {
//     console.log(value);
// }

//? Map Veri Tipi
// denemeMap = new Map();
// denemeMap.set("name", "String Key");
// denemeMap.set({ a: 10, b: 20 }, "Object Key");
// denemeMap.set(() => console.log("Merhaba"), "Function Key");

// console.log(denemeMap);
// console.log(typeof denemeMap);
// console.log(denemeMap.get("name"));

// denemeMap.forEach((value, key) => console.log(key, value));

//? Set Veri Tipi
// const mySet = new Set();
// mySet.add(10);
// mySet.add("Varol");
// mySet.add({ a: 10, b: 20 });
// mySet.add([1, 2, 3]);

// console.log(mySet);
// console.log(typeof mySet);
// console.log(mySet.has(10));
