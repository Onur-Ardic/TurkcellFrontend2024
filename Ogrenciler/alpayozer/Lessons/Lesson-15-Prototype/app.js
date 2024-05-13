// const person1 = {
//   name: "Alp",
//   age: 25,
//   langs: ["Python", "Java", "C"],
// };

//yapıcı fonksyion
function Person(name, age, langs) {
  this.name = name;
  this.age = age;
  this.langs = langs;
  //   this.showInfo = function () {
  //     console.log(
  //       "Name: " + this.name + " Age: " + this.age + " Langs: " + this.langs
  //     );
  //   };
}

// Person.prototype.showInfo = function () {
//   console.log(
//     "Name: " + this.name + " Age: " + this.age + " Langs: " + this.langs
//   );
// };

Object.prototype.showInfo = function () {
  console.log(
    "Name: " + this.name + " Age: " + this.age + " Langs: " + this.langs
  );
};

Employee.prototype = Object.create(Person.prototype);

const person = new Person("Alpay", 22, ["deneme", "deneme", "deneme"]);
console.log(person);
person.showInfo();

function Employee(name, age, langs, salary) {
  Person.call(this, name, age, langs);
  this.salary = salary;
}

const employee1 = new Employee(
  "Alpay",
  22,
  ["deneme", "deneme", "deneme"],
  43000
);
console.log(employee1);
