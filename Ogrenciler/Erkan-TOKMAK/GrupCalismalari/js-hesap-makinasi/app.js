let output = document.getElementById('output');

const islemSec = () => {

let x = parseInt(document.getElementById('inputOne').value);
let y = parseInt(document.getElementById('inputTwo').value);
let islem = parseInt(prompt("İşlem Seçiniz: 1- Toplama 2- Çıkarma 3-Çarp 4-Böl"));

const toplama = (x,y) => {
    sonuc = x + y;
}
const cikarma = (x,y) => {
    sonuc = x - y;
}
const carpma = (x,y) => {
    sonuc = x * y;
}
const bolme = (x,y) => {
    sonuc = x / y;
}
switch(islem){
    case 1:{
        toplama(x,y);
        output.innerHTML = sonuc;
        break;
    }
    case 2:{
        cikarma(x,y);
        output.innerHTML = sonuc;
        break;
    }
    case 3:{
        carpma(x,y);
        output.innerHTML = sonuc;
        break;
    }
    case 4:{
        bolme(x,y);
        output.innerHTML = sonuc;
        break;
    }
}
}