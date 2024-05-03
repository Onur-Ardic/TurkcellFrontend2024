
let islem = prompt("İşlem seçiniz: 1. Faktöriyel 2. Asal Sayı 3. Tek mi Çift mi 4. Süper sayı");
let sayi = prompt("sayınızı giriniz");


function faktoriyel(x){
    let fac = 1;
    for(let i = x; i > 1; i--){
        fac *= i;
    }
    return alert(fac);
}

function asal(x){
    for(let i = 2; i < x; i++){
        return (x % i == 0) ? alert("Sayınız asal değil") : alert("Sayınız asal!");
    }
}

function tekmiciftmi(x){
    for(let i = 1; i < x; i++){
        return (x % 2 == 0) ? alert("Sayınız çift") : alert("Sayınız tek");
    }
}

function perfect(x){
    let total = 0;
    for(let i = 1; i < x; i++){
        if(x % i == 0){
            total += i;
        }
    }

    return (total == x) ? alert("sayınız süper") : alert("sayınız süper değil");
}


switch (parseInt(islem)){
    case 1: faktoriyel(sayi);
        break;
    case 2: asal(sayi);
        break;
    case 3: tekmiciftmi(sayi);
        break;
    case 4: perfect(sayi);
        break;
    default: "Geçersiz karakter girdiniz";
        break;
} 