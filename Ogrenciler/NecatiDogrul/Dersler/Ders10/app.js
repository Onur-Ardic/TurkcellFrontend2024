//JS Giriş

console.log('naberr')

//Değişkenler

var name="neco";
var age =24;

age = "bilmiyorum";

console.log(name,age);

var firstNumber= 10;
var secondNumber="20";
console.log(firstNumber+secondNumber); //1020 verir

// + stringlerde birleştirme operatoru

var firstNumber= 10;
var secondNumber="20";
console.log(firstNumber-secondNumber); //-10 verir

var firstNumber= 10;
var secondNumber="yirmi";
console.log(firstNumber-secondNumber); //-NaN verir

//hoisting
var firsttNumber;
console.log(firsttNumber); //undefined önemli burası buraya dikkat
firsttNumber=10;


//Boolean ya true ya da false deger verir

var agee=24;

if(agee){
    console.log("doğru");
}


var isAdult=false;

if(agee>18){
    age>=18 ? (isAdult=true) : (isAdult=false);
    console.log(isAdult ? "Resit":"Resit degil")
}


//Undefined veri tipi
var userName;
console.log(userName);
console.log(typeof username);
console.log(typeof isAdult);

//Null - boş deger 
var isNull=null;
console.log(null);
console.log(typeof null);


//object veri tipi - nesne

var user = {
    name:"neco",
    age:24,
    salary:20000,
    not:{
        js:100,
        html:100,
        css:90,
    },
    favoriteColors:["red", "green","blue"],
}

console.log(user);
console.log(typeof user)
console.log(user.not.js)

//Array - dizi

var students= ["Neco","Ahmet","Hüseyin","Ahmet"];
console.log(students[1]);
console.log(typeof students);


//Function - fonksiyon

function a(){
    console.log("a cagrildi");
}

console.log(a);
a();

console.log(typeof a());


//Date - Tarih

 var date = new Date();
 console.log(date);
 console.log(typeof date);

 var a =[10,20,30];
 var b = a;
 console.log(a,b);
 a=[40,50,60];
 console.log(a,b)


 //Scope en önemli konu çok karıştırılır
 
 var a =10; //global scope bu değişken her yerde kullanılır

 function b(){
    var b =20; //function scope bu değişken sadece burada kullanılabilir dışarıdan erişillemez
    console.log(b);
 }

 if(true){
    let c =30; //block scope
    console.log(c);
 }

 {
    let d =40; //block scope
    console.log(d);
 }