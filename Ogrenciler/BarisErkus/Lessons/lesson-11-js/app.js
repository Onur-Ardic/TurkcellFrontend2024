const targetNumber = Math.floor(Math.random() * 100) + 1;
let guess;

for (let attempts = 1; guess != targetNumber; attempts++) {
    guess = parseInt(prompt("1 ile 100 arasında bir sayı tahmin edin:"));

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Geçersiz giriş. Lütfen 1 ile 100 arasında bir sayı girin.");
        continue;
    }

    if (guess === targetNumber) {
        alert(`Tebrikler! ${attempts} denemede doğru sayıyı buldunuz.`);
        break;
    } else if (guess < targetNumber) {
        alert("Daha büyük bir sayı girin.");
    } else {
        alert("Daha küçük bir sayı girin.");
    }
}
