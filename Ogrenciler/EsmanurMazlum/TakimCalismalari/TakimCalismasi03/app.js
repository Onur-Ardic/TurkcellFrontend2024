// let input = prompt("bir sayı giriniz: ");

// let puan = 100;

// if(number == input){
//     console.log("bu sayılar eşit!");
// }else{
//     for(let i = 0; i > 0; i--){
//         puan = puan - 10;
//         let input = prompt("tekrar sayı giriniz: ");

//     }
//     console.log("bu sayılar eşit değil");
// }

let number = parseInt(Math.random() * 100);
console.log(number);
let input = prompt("bir sayı giriniz: ");
let puan = 100;
let tahminSayisi = 1;

// for(let i = 0; i < 100; i++){

//     if(number == input){
//         alert("bu iki sayı eşit!");
//         break;
//     }else if (number > input){
//         alert("tahmin ettiğiniz sayı daha küçük");
//         input = parseInt(prompt("tekrar sayı giriniz"));
//         puan -= 10;
//         break;
//     }else if(input > number){
//         alert("tahmin ettiğiniz sayı büyük");
//         input = parseInt(prompt("tekrar sayı giriniz"));
//         puan -= 10;
//         break;
//     }

// }

for(let i = 0; i < 100; i++){
    if (number == input) {
        alert("bu iki sayı eşit!");
        break;
      } else if (number != input) {
        for (let i = 0; i < 10; i++) {
          if (number > input) {
            alert("tahmin ettiğiniz sayı daha küçük");
            input = parseInt(prompt("tekrar sayı giriniz"));
            puan -= 10;
            tahminSayisi++;
            break;
          }
          if (input > number) {
            alert("tahmin ettiğiniz sayı büyük");
            input = parseInt(prompt("tekrar sayı giriniz"));
            puan = puan - 10;
            tahminSayisi++;
            break;
          }
        }
      }
}
console.log("Tahmin sayısı: " + tahminSayisi);
console.log("Puanınız: " +puan);


