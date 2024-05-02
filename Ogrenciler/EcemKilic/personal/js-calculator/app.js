var sayi1 = prompt("ilk sayıyı giriniz:");
var sayi2 = prompt("ikinci sayıyı giriniz:")

var islem = prompt("Yapmak istediğiniz işlemi seçin:\n1. Toplama\n2. Çıkarma\n3. Çarpma\n4. Bölme");

var sonuc;

if (islem == 1) {
    alert(`${sayi1} + ${sayi2} = ${toplama(sonuc)}`);
} else if (islem == 2) {
    alert(`${sayi1} - ${sayi2} = ${cikarma(sonuc)}`);
} else if (islem == 3) {
    alert(`${sayi1} * ${sayi2} = ${carpma(sonuc)}`);
} else if (islem == 4) {
    alert(`${sayi1} / ${sayi2} = ${bolme(sonuc)}`);
} else {
    alert(`geçersiz işlem`);
}

function toplama (sonuc) {
    return sonuc = sayi1 + sayi2;
}
function cikarma (sonuc) {
    return sonuc = sayi1 - sayi2;
}
function carpma (sonuc) {
    return sonuc = sayi1 * sayi2;
}
function bolme (sonuc) {
    return sonuc = sayi1 / sayi2;
}