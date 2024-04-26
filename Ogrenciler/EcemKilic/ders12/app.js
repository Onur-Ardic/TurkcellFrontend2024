let randomNumber = Math.floor(Math.random(0, 1) * 100);
console.log(randomNumber);

let guess = 0;

let count = 0;

let limit = 5;

let outofguess = false;

while (!outofguess) {
    guess = prompt("0 ile 100 arasında bir sayı tahmin edin\n");
    count += 1;
    if (randomNumber == guess) {
        alert(`${count}. denemede tahmininiz doğru.\n puanınız: ${(100 - (count * 15))}`);
        outofguess = true;
    }else if (count==limit) {
        alert(`tahmin hakkınız bitmiştir,\n doğru cevap ${randomNumber}`);
        outofguess = true;
    }else if (guess < randomNumber) {
        alert(`sayı tahmininizden daha büyük`);
    }else if (guess > randomNumber) {
        alert(`tahmininiz sayıdan küçüktür`);
    }
}