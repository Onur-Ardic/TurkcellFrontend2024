//String metodları

let value;
const firstName = "Necati";
const lastName = "Doğrul";
const age = 23;
const department = "Yazılım";

value = firstName + " " + lastName;

value = firstName.length; //boşluklar dahil
value = firstName.toUpperCase();
value = firstName.toLowerCase();
value = firstName[0];
value = firstName[-1]; //-1 diye bir şey yok o yüzden undefined döner hiçbir türlü -1 çalışmıyor
value=firstName.indexOf("z"); //olmayan bir harf verirsek indexte -1 döner
value=firstName.includes("a"); //olmayan bir harf verirsek false döner

value = firstName.concat(" ",lastName)
value= firstName + " " + lastName + " " + age + " " + department;


//Template Literal
value = `İsim:${firstName}
 Soyisim:${lastName} 
 Yas:${age} 
 Departman:${department}`;


//  value =`
//  <ul style="background-color:red">
//     <li>${firstName}</li>
//     <li>${lastName}</li>
//     <li>${age}</li>
//     <li>${department}</li>
//  </ul>
//  `


//  const numbers = [43,22,56,68,12,7,8,9,21];
//  const langs = ["Python","Java","C++","Javascript"];

//  value = numbers.length
//  value = numbers[0];
//  value = numbers[numbers.length-1];
//  value = numbers.push(100); //sona ekler
//  value = numbers;
//  value =numbers.pop(100); //sondan siler
// value = numbers;
// value = numbers.shift(); //baştan siler
// value = numbers.shift(); //baştan siler
// value = numbers;


// value = langs.sort(); //alfabetik sıralama yapar
// value = numbers.sort(); //hata yapıyor

// value = numbers.sort(function(x,y){
//     return y-x;
// }); //x-y büyükten küçüğe y-x küçükten büyüğe

//OBJECT

// const student = {
//     fullName:"Necati Doğrul",
//     age:23,
//     address:{
//         city:"Antalya",
//         zone:"Konyaalti"
//     },
//     work: function(){
//         console.log("Çalışıyor...");
//     },
//     lang:["Python","Java","C++","Javascript"]
// }

// value = student.lang[2];
// value = student.address.city;

// value= student.work();


// let date = new Date();
// value = date.getFullYear();
// value = date.getMonth()+1;
// value = date.getDay();
// value = `Gün:${date.getDate()}
// Ay:${date.getMonth()+1}
// Yıl:${date.getFullYear()}
// Saat:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`


// Karşılaştırma Operatörleri

a=10;
b="10";
c = 20;

// console.log(a==c); //true

a=10;
b="10";
c = 20;

// İki eşittir sadece değeri kıyaslar, 3 tane eşittir veri tipini de kıyaslar

// console.log(a===b); //true
// console.log(value);
// document.write(value);

//prompt ile kullanıcı rastgele sayı tahmin oyunu prompt ile

//prompt ile kullanıcı rastgele sayı tahmin oyunu prompt ile

const number = Math.floor(Math.random()*10+1);
let guess;
let guessCount = 0;
let guessLimit = 3;
let outOfGuess = false;
let score=0;


while(!outOfGuess){
    guess = prompt("Bir sayı giriniz:");
    guessCount++;
    if(guess==number){
        alert(`Tebrikler ${guessCount} denemede bildiniz`);
        outOfGuess = true;
    }else if(guessLimit==guessCount){
        alert("Bilemediniz, tahmin hakkınız bitti, Sayı şuydu:" + number);
        outOfGuess = true;
    }
}