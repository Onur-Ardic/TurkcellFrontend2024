const sum = (number1, number2) => number1 + number2;
const subs = (number1, number2) => number1 - number2;
const multiple = (number1, number2) => number1 * number2;
const divide = (number1, number2) => number1 / number2;
const mod = (number1, number2) => number1 % number2;
const pow = (number1, number2) => number1 ** number2;

while (true) {
    const input = prompt(`Lütfen işleminizi boşluk bırakarak giriniz: 
Tüm işlemlerin sonuçlarını görmek için (.) 'Nokta' işaretini kullanınız.  
(Örnek: 3 . 1)`);
    let [userValue1, operationValue, userValue2] = input.split(" ");
    userValue1 = Number(userValue1);
    userValue2 = Number(userValue2);

    switch (operationValue) {
        case "+":
            alert(`Toplama İşlemi: ${sum(userValue1, userValue2)}`);
            break;
        case "-":
            alert(`Çıkarma İşlemi: ${subs(userValue1, userValue2)} `);
            break;
        case "*":
            alert(`Çarpma İşlemi: ${multiple(userValue1, userValue2)} `);
            break;
        case "/":
            alert(`Bölme İşlemi: ${divide(userValue1, userValue2)} `);
            break;
        case "%":
            alert(`Mod İşlemi: ${mod(userValue1, userValue2)}`);
            break;
        case "**":
            alert(`Üs Alma İşlemi: ${pow(userValue1, userValue2)}`);
            break;
        case ".": 
            alert(`Toplam: ${sum(userValue1, userValue2)}
Fark: ${subs(userValue1, userValue2)}
Çarpım: ${multiple(userValue1, userValue2)}
Bölüm: ${divide(userValue1, userValue2)}
Mod: ${mod(userValue1, userValue2)}
Üs: ${pow(userValue1, userValue2)}`)
            break;
        default:
            alert('Lütfen geçerli bir işlem seçiniz.');
            break;
    }

    const again = prompt(`Uygulamadan çıkmak için 'H'yi tuşlayınız. 
Devam etmek için herhangi bir tuşa basınız.`);
    if (again.toUpperCase() == 'H') {
        window.close()
        break;
    }
}