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


// with UI 
let x=0;
let y=0;
let operator=0;

let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}
function clearDisplay() {
    display.value = '';
}

function plus(){
    x=display.value;
    display.value='';
    operator=1;
}
function minus(){
    x=display.value;
    display.value='';
    operator=2;
}
function multip(){
    x=display.value;
    display.value='';
    operator=3;
}
function division(){
    x=display.value;
    display.value='';
    operator=4;
}

function result(){
    y=display.value;
    if(operator == 1){
        display.value=parseInt(x)+parseInt(y);
    }
    else if(operator==2){
        display.value=parseInt(x)-parseInt(y);
    }
    else if(operator==3){
        display.value=parseInt(x)*parseInt(y);
    }
    else{
        display.value=parseInt(x)/parseInt(y);
    }
}
