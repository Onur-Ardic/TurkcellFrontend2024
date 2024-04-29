const isValid = value => isNaN(value) || value < 0 ? false : true;
const tekcift = sayi => sayi % 2 == 0 ? 'Sayı Çift' : 'Sayı Tek'
const faktoriyel = sayi => {
    if (sayi == 0 || sayi == 1) {
        return 1;
    }
    return sayi * faktoriyel(sayi - 1);
}
const isPrime = sayi => {
    if (sayi <= 1) return `Sayı Asal Değil: ${sayi}`;
    for (let i = 2; i <= sayi / 2; i++) {
        if (sayi % i == 0) {
            return `Sayı Asal Değil: ${sayi}`;
        }
        continue;
    }
    return `Sayı Asal: ${sayi}`
}
const isSuper = sayi => {
    let result = 1;
    if (sayi <= 1) return 'Bu bir süper sayı değil.'
    for (let i = 2; i <= sayi / 2; i++) {
        if (sayi % i == 0) {
            result += i;
        }
    }
    if (result == sayi) {
        return 'Bu bir süper sayı.'
    }
    return 'Bu bir süper sayı değil.'
}
while (true) {
    const userValue = prompt("Lütfen bir sayı giriniz: ");
    if (!isValid(userValue)) {
        alert('Lütfen geçerli bir sayı giriniz.')
        continue;
    }
    const operationValue = prompt(`Yapacağınız işlemi seçin:
1-) Faktöriyelini Bul
2-) Asal mı
3-) Tek mi Çift mi
4-) Süper`);

    switch (operationValue) {
        case "1":
            alert(`Faktöriyelin Sonucu: ${faktoriyel(userValue)}`);
            break;
        case "2":
            alert(isPrime(userValue));
            break;
        case "3":
            alert(tekcift(userValue));
            break;
        case "4":
            alert(isSuper(userValue));
            break;
        case "0":
            window.close()
        default:
            alert('Lütfen geçerli bir sayı giriniz.');
    }
}