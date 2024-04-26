let sayi = Math.floor(Math.random() * 20);
let tahmin = 1;
let maxScore = 100; 
let minScore = 10; 
let score = 0;

for(let i = 0;i > -1;i++){
    let tahminSayi = Number(prompt("1 ile 20 arasında sayı giriniz."));
    if(tahminSayi == " "){
        alert("geçersiz karakter");
    }else{
        if(sayi == tahminSayi){
            let puan = calculateScore(tahmin);
            alert("tebrikler " + tahmin + " tahminde bildiniz. Skorunuz : " + puan);
            break;
        }else if(tahminSayi > sayi){
            alert("Aşağı gidiniz.");
        }else if(tahminSayi < sayi){
            alert("Yukarı gidiniz.");
        }
        tahmin++;
    }    
}

function calculateScore(tahminSayi) {
    if(tahminSayi > 90){
        score = minScore;
    }else{
        score = maxScore - tahminSayi;
    }
    return score;
}
