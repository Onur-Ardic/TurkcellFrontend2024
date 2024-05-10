// Object Literal
// const person1 = {
//     name: 'Barış',
//     age: 22,
//     langs: ['Python', 'JavaScript', 'C#'],
//     address: {
//         city: 'Adana',
//         district: 'Seyhan'
//     },
//     showInfo: () => {
//         console.log(this.name, this.age, this.langs, this.address);
//     }
// }

// const person2 = {
//     name: 'Deniz',
//     age: 23,
//     langs: ['JavaScript', 'Java'],
//     address: {
//         city: 'İstanbul',
//         district: 'Beşiktaş'
//     },
//     showInfo: () => {
//         console.log(this.name, this.age, this.langs, this.address);
//     }
// }

// console.log(person1);
// console.log(person2);

// Yapıcı Fonksiyon (Constructor Function)
function Person(name, age, langs, address) {
    this.name = name;
    this.age = age;
    this.langs = langs;
    this.address = address;
    // this.showInfo = () => {
    //     console.log(this.name, this.age, this.langs, this.address);
    // }
}

// Çalışmıyor???
// const Person = (name, age, langs, address) => {
//     this.name = name;
//     this.age = age;
//     this.langs = langs;
//     this.address = address;
//     this.showInfo = () => {
//         console.log(this.name, this.age, this.langs, this.address);
//     }
// }

// Person.prototype.showInfo = function () {
//     console.log(this.name, this.age, this.langs, this.address);
// }
// Aynı şey
Object.prototype.showInfo = function () {
    console.log(this.name, this.age, this.langs, this.address);
}
const person3 = new Person('Barış', 22, ['Python', 'JavaScript', 'C#'], { city: 'Adana', district: 'Seyhan' });
console.log(person3);

function Employee(name, age, langs, address, salary) {
    Person.call(this, name, age, langs, address);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const employee1 = new Employee('Barış', 22, ['Python', 'JavaScript', 'C#'], { city: 'Adana', district: 'Seyhan' }, 40000);
console.log(employee1);