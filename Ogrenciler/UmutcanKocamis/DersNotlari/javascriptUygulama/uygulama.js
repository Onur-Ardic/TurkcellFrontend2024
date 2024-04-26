let value = Math.round(Math.random() * 100);
var tahminAdet = 0;
let tahmin = prompt("bir deger girin");
console.log(value);

for (;;) {
  if (value == tahmin) {
    console.log(`${tahminAdet + 1} seferde bildiniz.`);
    switch (tahminAdet) {
      case tahminAdet < 6:
        document.write("Sen kahin misin ?!");
        break;
      case 6 < tahminAdet < 9:
        document.write("idare eder");
        break;
      default:
        document.write("bir seyler ters gitti");
        break;
    }
    break;
  } else {
    if (tahmin > value) {
      tahmin = prompt("Daha kücük bir deger giriniz");
    } else {
      tahmin = prompt("Daha büyük bir deger giriniz");
    }
  }
  tahminAdet += 1;
}
