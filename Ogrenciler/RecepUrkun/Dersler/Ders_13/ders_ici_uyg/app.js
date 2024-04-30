const value = Number(prompt("Lütfen bir sayı giriniz:"));
console.log(value);
const operation = prompt(
  "Seçenekler: 1-Faktöriyel 2-Asal sayı 3-Çift mi tek mi? 4-Süper Sayı için numara seçin:"
);
console.log(operation);
switch (operation) {
  case "1":
    console.log("Faktöriyel işlemini seçtiniz.");
    // faktoriyel(value);
    alert(`Sonuç: ${faktoriyel(value)}`);
    break;
  case "2":
    console.log("Asal sayı işlemini seçtiniz.");
    if (asalsayi(value)) {
      alert("Seçtiğiniz sayı asaldır.");
    } else {
      alert("Seçtiğiniz sayı asal değildir.");
    }
    break;
  case "3":
    console.log("Çift mi tek mi işlemini seçtiniz.");
    tekcift(value);
    break;
  case "4":
    console.log("Süper sayı işlemini seçtiniz.");
    if (supersayi(value)) {
      alert("Seçtiğiniz sayı süper sayıdır.");
    } else {
      alert("Seçtiğiniz sayı süper sayı değildir.");
    }
    break;
}
function faktoriyel(sayi) {
  if (sayi == 0 || sayi == 1) {
    return 1;
  }
  return sayi * faktoriyel(sayi - 1);
}
function asalsayi(sayi) {
  if (sayi <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(sayi); i++) {
    if (sayi % i == 0) {
      return false;
    }
  }
  return true;
}
function tekcift(sayi) {
  if (sayi % 2 == 0) {
    alert(`Girdiğiniz sayı: ${sayi}, Sonuç: Çifttir.`);
  } else {
    alert(`Girdiğiniz sayı: ${sayi}, Sonuç: Tektir.`);
  }
}
function supersayi(sayi) {
  if (sayi < 1) {
    return false;
  }
  let toplam = 0;
  for (let i = 1; i < sayi; i++) {
    if (sayi % i == 0) {
      toplam = toplam + i;
    }
  }
  return toplam == sayi;
}
