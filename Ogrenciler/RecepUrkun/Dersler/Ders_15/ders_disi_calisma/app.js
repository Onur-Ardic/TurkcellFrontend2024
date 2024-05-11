//* Burada calculateAge fonksiyonu her bir urettigimiz nesne icin tekrar tekrar olusturuluyor bu da istemedigimiz bir durum, bu yuzden prototype kullaniyoruz.
//? Ornek-1
// function Person(name, surname, yearOfBirth, job) {
//     this.name = name
//     this.surname = surname
//     this.yearOfBirth = yearOfBirth
//     this.job = job
//     this.calculateAge = function () {
//         return 2024 - yearOfBirth
//     }
// }

// let Human1 = new Person("John", "Doe", 1998, "Invisible")
// console.log(Human1)
// console.log(Human1.calculateAge())

// let Human2 = new Person("Lorem","Ipsum", 1968, "Worker")
// console.log(Human2)
// console.log(Human2.calculateAge())


//* Burada ise calculateAge fonksiyonunu Person'un prototype'ina ekliyoruz ve boylece her yeni Person'dan urettigimiz nesne icin tekrar tekrar bu fonksiyonu olusturmuyoruz. Artik bu fonksiyonu kullanmak icin gidip Person'un prototype'indan aliyoruz
//? Ornek-2
// function Person(name, surname, yearOfBirth, job) {
//     this.name = name
//     this.surname = surname
//     this.yearOfBirth = yearOfBirth
//     this.job = job
// }

// Person.prototype.calculateAge = function () {
//     return 2024 - this.yearOfBirth;
// }

// Person.prototype.getName = function () {
//     return this.name
// }

// let Human1 = new Person("John", "Doe", 1998, "Invisible")
// console.log(Human1)
// console.log(Human1.calculateAge())
// console.log(Human1.getName())

// let Human2 = new Person("Lorem", "Ipsum", 1968, "Worker")
// console.log(Human2)
// console.log(Human2.calculateAge())

//? Ornek-3 || object.create

function Person(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth
    this.job = job
}

Person.prototype.calculateAge = function () {
    return 2024 - this.yearOfBirth
}

let lorem = new Person("lorem", 1996, "human")
console.log(lorem)
console.log(lorem.calculateAge())

function Teacher(name, yearOfBirth, job, subject) {
    // this.name = name
    // this.yearOfBirth = yearOfBirth
    // this.job = job
    Person.call(this, name, yearOfBirth, job)
    this.subject = subject
}


// let ipsum = new Teacher("ipsum", 1991, "teacher", "coding")
// console.log(ipsum)
// console.log(ipsum.calculateAge())
//? Teacher'in icerisinde Person'un constructor'unu cagirsak da Person'un prototype'ina erisemiyoruz; bu yuzden bu ikisinin de prototype'i arasinda baglanti kurmamiz gerekiyor
//? ipsum uzerinden calculateAge'e erisemiyoruz cunku prototype baglamasindan once tanimladik bu yuzden gecerli degil.

Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.constructor = Teacher

let john = new Teacher("doe", 1978, "teacher", "math")
console.log(john)
console.log(john.calculateAge())

let ipsum = new Teacher("ipsum", 1991, "teacher", "coding")
console.log(ipsum)
console.log(ipsum.calculateAge())

Teacher.prototype.greeting = function () {
    return `Hello my name is ${this.name}`
}

console.log(ipsum.greeting())
console.log(john.greeting())