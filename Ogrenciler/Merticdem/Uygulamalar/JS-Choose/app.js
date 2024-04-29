const islemAl = () => {
  let x = parseInt(prompt("Bir sayı giriniz: "));
  while (x < 0) {
    x = parseInt(prompt("Pozitif bir sayı giriniz."));
  }
  let islem = parseInt(
    prompt("İşlem Seçiniz: 1-Faktoriyel 2-Asal 3-Tek mi Çift mi 4-Süper Sayı")
  );
  const faktoriyel = (x) => {
    let faktoriyelDef = 1;
    for (let i = 1; i <= x; i++) {
      faktoriyelDef = faktoriyelDef * i;
    }
    console.log(x + " Sayısının faktoriyeli:" + faktoriyelDef);
  };
  const asal = (x) => {
    if (x == 1) {
      return console.log("Sayı Asal Değildir");
    }
    let asalMi = true;
    for (let i = 2; i < x / 2; i++) {
      if (x % i == 0) {
        asalMi = false;
        break;
      }
    }
    asalMi ? console.log("Asaldır") : console.log("Asal Değildir");
  };
  const tekCift = (x) => {
    let control = x % 2;
    control == 1 ? console.log("Sayı Tek") : console.log("Sayı Çift");
  };
  const superSayi = (x) => {
    let carpanToplam = 0;
    for (let i = 1; i < x; i++) {
      if (x % i === 0) {
        carpanToplam = carpanToplam + i;
      }
    }
    carpanToplam == x
      ? console.log("Süper Sayıdır")
      : console.log("Süper Sayı Değildir.");
  };
  switch (islem) {
    case 1:
      faktoriyel(x);
      break;
    case 2:
      asal(x);
      break;
    case 3:
      tekCift(x);
      break;
    case 4:
      superSayi(x);
      break;
    default:
      document.write("İşlem Bulunamadı. Tekrar Seçiniz...");
  }
};
