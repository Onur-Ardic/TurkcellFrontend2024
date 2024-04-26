let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
for (let i = 0; ; i++) {
  let guess = parseInt(prompt("Enter your guess: "));
  if (randomNumber == guess) {
    break;
  } else {
    console.log("Yanlış");
    if (guess > randomNumber) {
      console.log("Tahminiz büyük");
    } else {
      console.log("Tahminiz küçük");
    }
  }
  guessCount += 1;
}

if (guessCount < 5) {
  console.log("Mükemmel" + " " + guessCount + " " + "seferde bildiniz.");
} else if (guessCount < 10) {
  console.log("İyi" + " " + guessCount + " " + "seferde bildiniz.");
} else if (guessCount < 15) {
  console.log("Normal" + " " + guessCount + " " + "seferde bildiniz.");
} else {
  console.log("Kötü" + " " + guessCount + " " + "seferde bildiniz.");
}
