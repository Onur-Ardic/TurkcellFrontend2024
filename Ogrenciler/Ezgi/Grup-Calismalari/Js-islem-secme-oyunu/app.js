const islemSec = () => {
    let girilenSayi = window.prompt("Lütfen bir sayı giriniz")
    let secilenIslem = window.prompt(`Lütfen bir işlem seçiniz: 
    1-Faktöriyel 
    2-Asal sayı mı? 
    3-Tek mi çift mi? 
    4-Süper sayı mı?`)
    switch (parseInt(secilenIslem)) {
        case 1:
            faktoriyelFunc(girilenSayi)
            break
        case 2:
            asalFunc(girilenSayi)
            break
        case 3:
            tekCiftFunc(girilenSayi)
            break
        case 4: superSayiFunc(girilenSayi)
            break
        default:
            alert("Lütfen geçerli işlemlerden birini giriniz !")
            break

    }
}

const faktoriyelFunc = (girilenSayi) => {
    let faktoriyel = 1
    for (let i = 1; i <= girilenSayi; i++) {
        faktoriyel *= i; //faktoriyel = faktoriyel * i
    }
    alert(girilenSayi + " sayısının faktöriyeli: " + faktoriyel)
}
const asalFunc = (girilenSayi) => {
    if (girilenSayi == 0 || girilenSayi == 1) return alert(girilenSayi + " sayısı asal değildir!")
    for (i = 2; i < girilenSayi; i++) {
        if (girilenSayi % i === 0) return alert(girilenSayi + " sayısı asal değildir!")
    }
    return alert(girilenSayi + " sayısı asaldır!")
}

const tekCiftFunc = (girilenSayi) => {
    if (girilenSayi % 2 === 0) return alert(girilenSayi + " sayısı çifttir")
    return alert(girilenSayi + " sayısı tektir")
}

const superSayiFunc = (girilenSayi) => {
    let toplam = 0
    for (i = 1; i < girilenSayi; i++) {
        if (girilenSayi % i == 0) {
            toplam = toplam + i
        }
    }
    if (girilenSayi == toplam) return alert(girilenSayi + " sayısı süper sayıdır!")
    return alert(girilenSayi + " sayısı süper sayı değildir!")
}
