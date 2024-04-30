const basla = () => {

    const topla = (sayi1, sayi2) => {
        return sayi1 + sayi2;
    }

    const cikar = (sayi1, sayi2) => {
        return sayi1 - sayi2;
    }

    const carp = (sayi1, sayi2) => {
        return sayi1 * sayi2;
    }

    const bol = (sayi1, sayi2) => {
        if (sayi2 == 0) {
            alert("Bir sayi sifira bolunemez");
        }
        else {
            return sayi1 / sayi2;
        }
    }

    let secim = true;
    while (secim) {
        let sayi1 = Number(prompt("Ilk sayiyi giriniz: "))
        let sayi2 = Number(prompt("Ikinci sayiyi giriniz: "))
        let islem = Number(prompt("Yapmak istediginiz islemi seciniz:\n 1-Toplama\n 2-Cikarma\n 3-Carpma\n 4-Bolme"))

        switch (islem) {
            case 1:
                alert("Girdiginiz iki sayinin toplami: " + topla(sayi1, sayi2))
                break;
            case 2:
                alert("Girdiginiz iki sayinin cikarimi: " + cikar(sayi1, sayi2))
                break;
            case 3:
                alert("Girdiginiz iki sayinin carpimi: " + carp(sayi1, sayi2))
                break;
            case 4:
                let sonuc = bol(sayi1, sayi2)
                if (sonuc !== undefined) {
                    alert("Girdiginiz iki sayinin bolumu: " + sonuc)
                }
                break;
            default:
                alert("Yanlis bir secim yaptiniz. Tekrar deneyiniz!")
        }

        secim = confirm("Islem yapmaya devam etmek istiyor musunuz?")
        //confirm'den kullanicinin secimine gore true ya da false donuyor buna while dongusunda kontrol ediliyor eger kullanici hayir derse while dongusu tekrar calismiyor
    }
}