const toplama = (numberOne , numberTwo) => numberOne + numberTwo;
const cikarma = (numberOne , numberTwo) => numberOne - numberTwo;
const bölme = (numberOne , numberTwo) => numberOne / numberTwo;
const carpma = (numberOne , numberTwo) => numberOne * numberTwo;

while (true) {
    const numberOne = Number(prompt ("Birinci sayıyı giriniz"));
    const numberTwo = Number(prompt ("İkinci sayıyı giriniz"));
    const process = Number (prompt(`
  
        1 - Toplama 
        2 - Çıkarma
        3 - Bölme
        4 - Çarpma

      `)
    )
    switch (process) {
        case 1:
            alert(toplama (numberOne , numberTwo))
        
          break;
        case 2:
            alert(cikarma (numberOne , numberTwo))
          break;
      
        case 3:
            alert(bölme (numberOne , numberTwo))
          break;
      
        case 4:
            alert(carpma (numberOne , numberTwo))
          break;
      
        default: 
            alert("Hatalı İşlem");
          break;
        
      }

      let cevap = prompt("Devam etmek istiyor musunuz ?(E/H)");
      if (cevap == "H") {
        break;
      }
}



