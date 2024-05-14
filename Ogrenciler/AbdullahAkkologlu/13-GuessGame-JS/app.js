function guessGame() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let guessCount = 0;
  for (let i = 0; ; i++) {
    let guess = Number(prompt("Tahminizi giriniz: "));
    guessCount += 1;
    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log(
        `${guessCount}. deneme: Geçersiz giriş. Lütfen 1 ile 100 arasında bir sayı giriniz.`
      );
      continue;
    }
    if (guess === randomNumber) {
      break;
    } else if (guess > randomNumber) {
      console.log(`${guessCount}. deneme: Yanlış. Tahmininizi küçültünüz.`);
    } else {
      console.log(`${guessCount}. deneme: Yanlış. Tahmininizi büyütünüz.`);
    }
  }
  if (guessCount < 3) {
    console.log(`Mükemmel: ${guessCount} seferde bildiniz.`);
  } else if (guessCount < 5) {
    console.log(`İyi: ${guessCount} seferde bildiniz.`);
  } else if (guessCount < 8) {
    console.log(`Normal: ${guessCount} seferde bildiniz.`);
  } else {
    console.log(`Kötü: ${guessCount} seferde bildiniz.`);
  }
}
