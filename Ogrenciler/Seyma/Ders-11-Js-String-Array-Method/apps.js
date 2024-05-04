// let not = prompt("notuuzu giriniz");

// if (not>50) {
//     alert("sınavı geçtiniz")

// }
// else{
//     alert("sınavdan kaldınız")
// }

// let sayi = prompt("Bir sayi giriniz")

// function fakto(sayi){
//     sayi * sayi--
//  }
//  alert(sayi)

// let vize1 = prompt("vize 1 notu giriniz")
// let vize2 = prompt("vize 2 notu giriniz")
// let vize3 = prompt("vize 3 notu giriniz")

// let ortalama = (vize1*0,3) + (vize2*0,3) + (vize3*0,4)

// if (ortalama>=60) {
//     alert("bu dersi geçtiniz")
// } else {
//     alert("bu dersten kaldınız")
// }

// let sayi1 = prompt("bir sayi giriniz") ;
// let sayi2 = prompt("bir sayi giriniz")

// let secim = prompt("bir islem secin 1.topla, 2.çıkar, 3.böl, 4.çarp")

// switch(secim) {
//     case "1": alert(Number(sayi1) + Number(sayi2))
//     break;
//     case "2": alert(Number(sayi1) - Number(sayi2))
//     break;
//     case "3": alert(Number(sayi1) / Number(sayi2))
//     break;
//     case "4": alert(Number(sayi1) * Number(sayi2))
//     break;
//     default:
//             alert("Lütfen geçerli bir işlem seçiniz.")
//             break;
// } 


let sayi1 = document.getElementByName("sayi1")
;
let sayi2 = document.getElementByName("sayi2")
function topla(sayi1, sayi2) {
    return sayı1 + sayi2;
}

let secim = prompt("bir islem secin 1.topla, 2.çıkar, 3.böl, 4.çarp")

switch(secim) {
    case "1": alert(Number(sayi1) + Number(sayi2))
    break;
    case "2": alert(Number(sayi1) - Number(sayi2))
    break;
    case "3": alert(Number(sayi1) / Number(sayi2))
    break;
    case "4": alert(Number(sayi1) * Number(sayi2))
    break;
    default:
            alert("Lütfen geçerli bir işlem seçiniz.")
            break;
} 