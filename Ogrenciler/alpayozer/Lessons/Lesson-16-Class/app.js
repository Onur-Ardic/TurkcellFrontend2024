// class Employee {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }

//   showInfos() {
//     console.log(
//       "Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary
//     );
//   }
// }

// const emp1 = new Employee("Alpay", 22, 40000);
// console.log(emp1);
// emp1.showInfos();

// //Static Method
// class Mat {
//   static cube(x) {
//     return x * x * x;
//   }
// }

// let value = Mat.cube(3);
// console.log(value);

//super-base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfos() {
    console.log("Name: " + this.name + " Age: " + this.age);
  }
}

const person = new Person("Alpay", 22);
person.showInfos();

//subclass
class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  showInfos() {
    console.log(
      "Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary
    );
  }

  raiseSalary(amount) {
    this.salary += amount;
  }
}
const employee = new Employee("Alper", 22, 50000);
employee.showInfos();
employee.raiseSalary(5000);
employee.showInfos();
