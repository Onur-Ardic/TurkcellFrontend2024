
function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}
let tahmin;
let randomSayi = randomNum(1, 100);

sayiBilme()

function sayiBilme () {
     tahmin = prompt("1 ile 100 arasında bir sayı giriniz");
     result();
}

function result(){
if (tahmin == randomSayi) {
    alert ("Doğru Sayiyi Buldunuz");
}
else if (randomSayi>tahmin) {
    alert ("Daha Yüksek Bir Sayi Giriniz");
    sayiBilme ()
}
else {
    alert ("Daha Düşük Bir Sayi Giriniz");
    sayiBilme ()
}
}











// let isim = "enes bayram 23 yaşındadır";
// console.log(isim);
// console.log(typeof isim);
// let sayi1 = 10.7;
// let sayi2 = 4.8;
// console.log (sayi1+sayi2)

// let isim = prompt ("isminizi giriniz: ");
// let yas = prompt ("yasinizi giriniz");

// console.log (isim, yas)

// let sonuc = confirm("silmek istediğinizden emin misiniz?");
// console.log(sonuc);

// let i = 0;
// while (i < 10) {
//     if (i === 3 || i === 5) {
//         i++;
//         continue;
//     }
    
//     console.log (i);
//     i++;
// }
//  const langs = ["Pyhton", "java", "C#", "C++" ];

//  langs.forEach(function (lang))
//  langs.map((lang)=> console.log(lang));