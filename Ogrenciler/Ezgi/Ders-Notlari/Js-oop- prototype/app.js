//object literal
// const person1 =  {
//     name: "Ezgi",
//     age: 24,
//     langs: ["Python", "Java", "C#", "C++"],
    
// }
// const person2 =  {
//     name: "Zeynep",
//     age: 25,
//     langs: ["Python", "Java", "C#", "C++"],
//     showInfo : () => {
//         console.log(this.name, this.age, this.langs)
//     }
// }
// console.log(person1)
// console.log(person2)
//sadece değişen parametreler için sürekli aynı şeyleri tekrar tekraar yazmak yerine bunu bir yapıcı
//fonksiyona dönüştürebiliriz.


//Yapıcı Fonksiyon (Constructor Function)
function Person(name, age, langs){
    this.name = name,
    this.age = age,
    this.langs = langs
    // this.showInfo = () => {
    //     console.log(this.name, this.age, this.langs)
    // } burada değişen parametreler sadece name ve age olduğu için showInfo metodu her seferinde çalıştı-
    //rılmasın diye Person objesinin prototype ına atandı. Tekrar eden fonksiyon onun prptotype ına yazıldı.
}

const person3 = new Person("Ezgi", 24, ["Javascript", "React", "Typescript"])
console.log(person3)

// Person.prototype.showInfo = () => {
//     console.log(this.name, this.age, this.langs)
// }
//ya da objeye de atanabilir 

Object.prototype.showInfo = () => {
    console.log(this.name, this.age, this.langs)
}

function Employee(name, age, langs, salary){
    Person.call(this, name, age, langs)
    this.salary = salary
}

Employee.prototype = Object.create(Person.prototype)

const employee1 = new Employee("Ezgi", 24, ["Javascript", "React", "Typescript"], 30000)
console.log(employee1)