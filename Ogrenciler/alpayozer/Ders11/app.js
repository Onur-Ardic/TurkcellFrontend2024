let random = Math.floor(Math.random() * 100) + 1;
let tahminHakki = 5;
let tahminSayisi = 1;
let value = window.prompt("Sayı giriniz");
for (;;) {
  if (value == random) {
    document.write(`Tebrikler sayıyı doğru tahmin ettiniz.Random Sayı: ${random} 
    Tahmin Sayısı:${tahminSayisi} 
`);
    break;
  } else if (tahminHakki === 1) {
    document.write(`Tahmin hakkınız bitti.Random Sayı: ${random}`);
    break;
  } else if (value > random) {
    tahminHakki--;
    tahminSayisi++;
    value = window.prompt(
      `Daha küçük bir sayı giriniz. Kalan tahmin hakkınız: ${tahminHakki}`
    );
  } else if (value < random) {
    tahminHakki--;
    tahminSayisi++;
    value = window.prompt(
      `Daha büyük bir sayı giriniz. Kalan tahmin hakkınız: ${tahminHakki}`
    );
  }
}
