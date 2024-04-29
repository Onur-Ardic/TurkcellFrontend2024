// console.log("Merhaba");
let a= parseInt(prompt("Bir Sayı Giriniz:"));
let b = parseInt(prompt("Bir Sayı Daha Giriniz"));

let islem= parseInt(prompt("İşlem Seçiniz: 1-Topla 2-Çıkar 3-Böl 4-Çarp 5-Büyük Olanı Bul"))

switch(islem){
    case 1:{
        topla();
        break;
    }
    case 2:{
        cikar();
        break;
    }
    case 3:{
        bol();
        break;
    }
    case 4:{
        carp();
        break;
    }
    case 5:{
        kucukmu();
        break;
    }
    default:  {
        document.write("İşlem Bulunamadı. Tekrar Seçiniz...")
        islem = parseInt(prompt("1-Topla 2-Çıkar 3-Böl 4-Çarp 5-Büyük Bul"))
    }
}

function degerAl(){
    c = parseInt(prompt("Bir değer daha giriniz: "));
}

function topla(){
    result = a + b;
    document.write("Toplama Sonucu:" + result);
}

function cikar(){
    if(a>b){
        result = a - b;
        document.write("Çıkartma Sonucunuz: " + result);
    }else if(a<b){
        result = b-a;
        document.write("Çıkartma Sonucunuz: " + result);
    }
    else {
        document.write("İki değerde eşittir. Sonuç 0");
    }
}
function bol(){
    result = a/b;
    document.write("Bölme sonucunuz: " + result + " ");
}
function carp(){
    result = a*b;
    document.write("Çarpma Sonucunuz: " + result);
}

function kucukmu(){
    if(a>b){
        document.write(a+ " Sayısı Büyüktür.");
    }else if (a<b){
        document.write(b+ " Sayısı Büyüktür.");
    }else {
        document.write("Sayılar eşittir.");
    }
}