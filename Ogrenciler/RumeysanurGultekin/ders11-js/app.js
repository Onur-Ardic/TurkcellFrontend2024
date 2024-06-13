// SAYI TAHMİN OYUNU
//var answer = Math.floor (Math.random() * 100) + 1;
// console.log(answer);


// for (let i=0 ; i<100 ;  i++){ 
//     let tahmin = prompt("bir sayı tahmin ediniz");
//     if (tahmin < answer){
//         alert("daha büyük bir sayı tahmin ediniz.");
//     }    

//     else if (tahmin > answer) {
//         alert("daha küçük bir sayı giriniz");
//     }

//     else if (tahmin == answer){
//         alert("tebrikler bildiniz"); 
//         document.write("tebrikler bildiniz")
//         break;
//     }
// }



// armstrong sayısı //
let sayi = prompt ("sayi giriniz"); //407
let toplam = 0

for(let i=0 ; i<sayi.length ; i++ ){
    toplam += Math.pow(sayi[i], sayi.length);
}
if(Number(sayi)==toplam){
    alert("armstrong sayısı buldunuz");
}else {
    alert("armstrong sayısı değildir");
}



// NOT ORTALAMA HESAPLAMASI  
//vize 1 %30 viZe2 %30 final %40

// let vize1 = Number(prompt("vize 1 notunuzu giriniz."))
// let vize2 = Number(prompt("vize2 notunuzu giriniz"))
// let final = Number(prompt("final notunuzu giriniz"))

// let ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4)

// if(ortalama<60){
//     alert("dersten kaldınız.")
// }else{
//     alert("Tebrikler, dersten geçtiniz.")
// }