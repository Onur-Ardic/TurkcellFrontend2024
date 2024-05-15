// // Class
// class Employee {
//     constructor(name, age, langs, salary) {
//         this.name = name;
//         this.age = age;
//         this.langs = langs;
//         this.salary = salary;
//     }
//     showInfos() {
//         console.log(this.name, this.age, this.langs, this.salary);
//     }
// }

// const employee1 = new Employee("Ahmet", 30, ["Python", "Java", "C#", "C", "C++"], 1000);

// console.log(employee1);
// employee1.showInfos();

// // Static Method
// class Mat {
//     static cube(x) {
//         return x * x * x;
//     }
// }
// console.log(Mat.cube(3));

//super - base class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfos() {
        console.log(this.name, this.age);
    }
}
const person = new Person("Ahmet", 30);
// person.showInfos();

//subclass
class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    showInfos() {
        console.log(this.name, this.age, this.salary);
    }
}

const employee1 = new Employee("Ahmet", 30, 1000);
employee1.showInfos();
console.log(employee1);