const basla = () => {
    const topla = (sayi1, sayi2) => sayi1 + sayi2;
    const cikar = (sayi1, sayi2) => sayi1 - sayi2;
    const carp = (sayi1, sayi2) => sayi1 * sayi2;
    const bol = (sayi1, sayi2) => (sayi1 % sayi2 === 0) ? sayi1 / sayi2 : (sayi1 / sayi2).toFixed(2);
    let secim = true;
    while (secim) {
        let sayi1 = prompt("Ilk sayiyi giriniz: ").trim()
        let sayi2 = prompt("Ikinci sayiyi giriniz: ").trim()
        let islem = Number(prompt("Yapmak istediginiz islemi seciniz:\n 1-Toplama\n 2-Cikarma\n 3-Carpma\n 4-Bolme"))
        if (isNaN(sayi1) || isNaN(sayi2) || sayi1 === "" || sayi2 === "") {
            alert("Lütfen geçerli bir sayı girin!");
            continue;
        }        
        sayi1 = Number(sayi1);
        sayi2 = Number(sayi2);
        switch (islem) {
            case 1:
                alert(`${sayi1} + ${sayi2} = ${topla(sayi1, sayi2)}`)
                break;
            case 2:
                alert(`${sayi1} - ${sayi2} = ${cikar(sayi1, sayi2)}`)
                break;
            case 3:
                alert(`${sayi1} * ${sayi2} = ${carp(sayi1, sayi2)}`)
                break;
            case 4:
                sayi2 == 0 ? alert("Sifira bolunemez") : alert(`${sayi1} / ${sayi2} = ${bol(sayi1, sayi2)}`)
                break;
            default:
                alert("Yanlis bir secim yaptiniz. Tekrar deneyiniz!")
        }
        secim = confirm("Islem yapmaya devam etmek istiyor musunuz?")
    }
}