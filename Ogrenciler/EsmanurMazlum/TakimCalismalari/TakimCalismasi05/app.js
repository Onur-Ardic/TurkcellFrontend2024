while (true) {

    let sayi1 = Number(prompt("1. sayıyı giriniz"));
    let sayi2 = Number(prompt("2. sayıyı giriniz"));

    let islem = Number(prompt("İşlem seçiniz: 1. Toplama 2. Çıkarma 3. Bölme 4. Çarpma 5. Çıkış"));
    if(islem == 5) break;

    hesapla(sayi1,sayi2, islem);

    let devam = prompt("Devam etmek istiyor musun? Evet için e Hayır için h tuşuna basınız.");
    if(devam === "h" || devam === "H") break; 
}

function toplama(x, y) {
  return x + y;
}

function cikarma(x, y) {
  return x - y;
}

function bolme(x, y) {
  if (y === 0) return "Sayı 0'a bölünemez";
  return x / y;
}

function carpma(x, y) {
  return x * y;
}


function hesapla(x, y,islem) {
    switch (islem) {
      case 1:
        return alert(toplama(x, y));
      case 2:
        return alert(cikarma(x, y));
      case 3:
        return alert(bolme(x, y));
      case 4:
        return alert(carpma(x, y));
      case 5:
        return;
      default:
         alert("Geçersiz karakter girdiniz");
    }
  }
  