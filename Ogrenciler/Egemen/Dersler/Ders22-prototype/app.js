// object literal
// const person = {
//     name: "Ahmet",
//     age: 20,
//     langs: ["Python", "Java", "C#", "C++"],
//     showInfo: function() {
//         console.log(this.name, this.age, this.langs);
//     },
// };

// const person2 = {
//     name: "Mehmet",
//     age: 25,
//     langs: ["Python", "Java", "C#", "C++"],
//     showInfo: function() {
//         console.log(this.name, this.age, this.langs);
//     },
// };

// console.log(person);

// console.log(person2);

//Yapıcı fonksiyon/constructor function
function Person(name, age, langs) {
  this.name = name;
  this.age = age;
  this.langs = langs;
  //   this.showInfo = function () {
  //     console.log(this.name, this.age, this.langs);
  //   };
}
Person.prototype.showInfo = function () {
    console.log(this.name, this.age, this.langs);
  };

const person3 = new Person("Ahmet", 30, ["Python", "Java", "C#", "C", "C++"]);
console.log(person3);

function Employee(name, age, langs, salary) {
  Person.call(this, name, age, langs);
  this.salary = salary;
}

// Object.prototype.showInfo = function () {
//   console.log(this.name, this.age, this.langs);
// };

Employee.prototype = Object.create(Person.prototype);

const employee1 = new Employee(
  "Ahmet",
  30,
  ["Python", "Java", "C", "C++"],
  1000
);

console.log(employee1);
