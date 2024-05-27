const input = document.querySelector('#number')
const btn = document.querySelector('#btn')
const resultText = document.querySelector('#resultText')

const factorialize = (e) => {
    e.preventDefault()
    let factorial = 1
    for(let i = 1; i <= input.value; i++){
        factorial *= i
    }
    resultText.textContent = factorial
    input.value = ''
}

btn.addEventListener("click", factorialize)