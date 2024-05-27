const input = document.querySelector('#input')
const reverseBtn = document.querySelector('#reverseBtn')
const resultText = document.querySelector('#resultText')

const reverseString = (e) => {
    e.preventDefault()

    const words = input.value.split(" ")
    const newWords = words.map((word) => word.split("").reverse().join(""))
    const result = newWords.join(" ")
    resultText.textContent = result
    input.value = ''
}

reverseBtn.addEventListener("click", reverseString)
