var sayi = prompt("bir sayı giriniz");
if (sayi <= 0 || isNaN(sayi)) {
    sayi = prompt("girdiğiniz sayı geçersiz yeni bir sayı girin");
}

var islem = prompt("Yapmak istediğiniz işlemi seçin:\n1. Faktöriyel Alma\n2. Asal Sayı Bulma\n3. Tek mi Çift mi Olduğunu Bulma\n4. Süper Sayı Olup Olmadığını Bulma");

if (islem == 1) {
    alert(`${sayi}! = ${faktoriyel(sayi)}`);
} else if (islem == 2) {
    alert(`${sayi}: = ${asal(sayi)}`);
} else if (islem == 3) {
    alert(`${sayi}: = ${tekcift(sayi)}`);
} else if (islem == 4) {
    alert(`${sayi}: = ${supersayi(sayi)}`);
} else {
    alert(`geçersiz işlem`);
}

function faktoriyel (sayi) {
    if (sayi === 1) {
        return 1;
    } else {
        return sayi * faktoriyel(sayi-1);
    }
}

function asal (sayi) {
    if (sayi == 2) {
        return "asal";
    } else {
        for (var i = 2 ; i < sayi ; i++) {
            if (sayi%i == 0){
                return "asal değil";
            } else {
                return "asal";
            }
        }
    }
}

function tekcift (sayi) {
    if (sayi%2 == 0) {
        return "çift";
    } else {
        return "tek";
    }
}

function supersayi (sayi) {
    var toplam = 0;
    for (var i = 1 ; i < sayi ; i++) {
        if (sayi%i == 0) {
            toplam += i;
        }
    }
    if (toplam == sayi) {
        return "süper sayı";
    } else {
        return "süper sayı değil";
    }
}