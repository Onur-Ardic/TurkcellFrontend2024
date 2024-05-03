//functions
// merhaba();
// function merhaba() {
//     console.log("merhaba");
// }

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {
//     console.log(`İsim: ${name}, Yaş: ${age}`);
// }
// user("Egemen", 26);

//Return ile değer dönme
// function square(x) {
//     return x * x;
// }
// const sonuc = square(5)*3;
// console.log(sonuc);

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {
//     return (`İsim: ${name}, Yaş: ${age}`);
// }
// console.log(user("Egemen", 26));

//Arrow function
// const kare = (x) => x * x;
// console.log(kare(5));

//while
// let i = 0;
// while(i < 5) {
//     console.log(i);
//     i++;
// }

// let i = 0;
// while(i < 10) {
//     if(i == 3 || i ==5) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

//do while
// let i = 0;
// do{
//     console.log(i);
//     i++;
// } while (i < 5);

//array map()
const langs = ["Python", "Java", "C#", "C++"];

// langs.forEach(lang => console.log(lang));

langs.map(lang => console.log(lang));
