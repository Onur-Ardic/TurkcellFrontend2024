// class Employee {
//   constructor(name, age, langs, salary) {
//     this.name = name;
//     this.age = age;
//     this.langs = langs;
//     this.salary = salary;
//   }

//   showInfos() {
//     console.log(this.name, this.age, this.langs, this.salary);
//   }
// }

// const employee1 = new Employee(
//   "Barış",
//   22,
//   ["Python", "C#", "Javascript", "HTML", "CSS],
//   5000
// );

// console.log(employee1);
// employee1.showInfos();

// Static Method
// class Mat {
//   static cube(x) {
//     return x * x * x;
//   }
// }
// console.log(Mat.cube(3));

// Super - Base Class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   showInfos() {
//     console.log(this.name, this.age);
//   }
// }

// const person = new Person("Barış", 20);
// person.showInfos();

// subclass
// class Employee extends Person {
//   constructor(name, age, salary) {
//     super(name, age);
//     this.salary = salary;
//   }
//   showInfos() {
//     console.log(this.name, this.age, this.salary);
//   }
// }

// const employee = new Employee("Barış", 22, 5000);
// employee.showInfos();
// console.log(employee);
