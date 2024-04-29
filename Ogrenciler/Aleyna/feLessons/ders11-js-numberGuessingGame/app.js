let sayi = Math.floor(Math.random() * 100);
let tahmin = 1;
let maxScore = 100;
let minScore = 10;
let score = 0;

for (let i = 0; i > -1; i++) {
  let tahminSayi = Number(prompt("1 ile 100 arasında bir sayı giriniz."));
  if (sayi == tahminSayi) {
    let puan = calculateScore(tahmin);
    alert("Tebrikler " + tahmin + " tahminde bildiniz. Skorunuz : " + puan);
    break;
  } else if (tahminSayi > sayi) {
    alert("Daha düşük bir tahminde bulunun.");
  } else if (tahminSayi < sayi) {
    alert("Daha yüksek bir tahminde bulunun.");
  }
  tahmin++;
}

function calculateScore(tahminSayi) {
  if (tahminSayi > 90) {
    score = minScore;
  } else {
    score = maxScore - tahminSayi;
  }
  return score;
}
