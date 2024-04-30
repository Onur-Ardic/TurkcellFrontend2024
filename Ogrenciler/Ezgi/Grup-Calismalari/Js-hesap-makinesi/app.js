const topla = (x, y) => {
    return x + y
}
const cikarma = (x, y) => {
    return x - y
}
const carpma = (x, y) => {
    return x * y
}
const bolme = (x, y) => {
    if (y == 0) return "(Tanımsız, bölünen sayı 0 olamaz.)"
    return x / y
}
while (true) {
    let x = parseInt(window.prompt("Birinci sayıyı giriniz"))
    let y = parseInt(window.prompt("İkinci sayıyı giriniz"))
    let islem = window.prompt(`Lütfen işlem seçiniz:
    1-Toplama
    2-Çıkarma
    3-Çarpma
    4-Bölme`)
    switch (parseInt(islem)) {
        case 1:
            alert(`${x} + ${y} = ` + topla(x, y))
            break
        case 2:
            alert(`${x} - ${y} = ` + cikarma(x, y))
            break
        case 3:
            alert(`${x} * ${y} = ` + carpma(x, y))
            break
        case 4:
            alert(`${x} / ${y} = ` + bolme(x, y))
            break
        default:
            alert("Lütfen geçerli bir işlem seçiniz.")
            break
    }
    let isContinue = window.prompt(`Devam etmek istiyor musunuz? 
    1-Evet
    2-Hayır`)
    if (isContinue == 2) break
}

