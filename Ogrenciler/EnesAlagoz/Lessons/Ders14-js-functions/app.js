let number = Number(prompt("Bir sayı giriniz"));
let secenek = Number(prompt("1:Faktöriyel, 2: Asal Sayı, 3:Tek mi Çift mi, 4: Süper Sayı"));

function faktoriyel(sayi) {
  for (var i = sayi - 1; i > 0; i--) {
    sayi *= i;
  }
  return sayi;
}
//console.log(faktoriyel(5));

function asalSayi(num) {
  for (let i = 2, sayi = Math.sqrt(num); i <= sayi; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
//console.log(asalSayi(8));

function tekCift(sayi) {
  if (sayi % 2 == 0) {
    return "Çift";
  } else {
    return "Tek";
  }
}

//console.log(tekCift(10));

function superSayi(sayi) {
  let toplam = 0;
  for (let i = 1; i < sayi; i++) {
    if (sayi % i == 0) {
      toplam += i;
    }
  }

  if (sayi == toplam) {
    return " Süper Sayi";
  } else {
    return "Süper sayi değildir";
  }
}

//console.log(superSayi(25));

switch (secenek) {
  case 1:
    console.log(faktoriyel(number));
    break;
  case 2:
    console.log(asalSayi(number));
    break;
  case 3:
    console.log(tekCift(number));
    break;
  case 4:
    console.log(superSayi(number));
    break;
  default:
    console.log("Seçim dışı tercih");
    break;
}
