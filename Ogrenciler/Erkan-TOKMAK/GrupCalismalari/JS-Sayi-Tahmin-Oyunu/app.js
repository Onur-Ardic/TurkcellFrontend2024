


function oyun(){
    let value  = Math.round(Math.random()*100);
    let tahminAdet = 1;
    console.log(value);
    let tahmin =101;
    for(tahminAdet;value !=tahmin;tahminAdet++)
    {
        if(tahminAdet ==1) {tahmin=parseInt( prompt("Lütfen Tahminde Bulununuz.."));}
        console.log(tahmin);       
        if (value!=tahmin){
            if(tahmin== -1)
            {
                console.log("Oyun Sonlandırılmıştır..");
                break;
            }    
            else if(tahmin<value){
                tahmin= parseInt(prompt("Daha büyük bir değer tahmininde bulununuz.."));
            }                 
            else{
                tahmin=parseInt( prompt("Daha küçük bir değer tahmininde bulununuz.."));
            }
        }
        if(value==tahmin) {

            if(tahminAdet != 1){
                tahminAdet=tahminAdet+1; // yanlış tahmin durumunda tahmin adedi artmadığından +1 yapmak durumunda kaldık.
            }
            console.log(`${tahminAdet}` + " Tahminde bildiniz..");
            console.log("Skorunuz: "+`${(100-(tahminAdet-1))*10}`);
            break;
        }
       
}
console.log("Aklımızdaki Sayı" + `${value}`);
// if(tahminAdet !=1){
//     console.log("Başarısız Tahmin Adedi" + `${tahminAdet}`);
// }
}



