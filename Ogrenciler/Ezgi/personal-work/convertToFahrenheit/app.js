const convertBtn = document.querySelector('#convertBtn')
const input = document.querySelector('#input')
const resultText = document.querySelector('#resultText')

const convertToFahrenheit = (e) => {
    e.preventDefault()
    const celcius = parseFloat(input.value)
    if(celcius){
        const fahrenheit = (celcius*1.8) + 32
        resultText.textContent = fahrenheit
        input.value = ''
    }
    else{
        resultText.textContent = "Geçersiz giriş, lütfen bir sıcaklık değeri giriniz."
    }
}

convertBtn.addEventListener("click", convertToFahrenheit)


