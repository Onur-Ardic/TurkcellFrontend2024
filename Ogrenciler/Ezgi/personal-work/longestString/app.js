const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const longestWordText = document.querySelector('#longestWord')
const longestWordLength = document.querySelector('#longestWordLength')

const findLongestWordLength = (e) => {
    e.preventDefault()

    const words = input.value.split(" ")
    let longestWord = ''
    words.forEach((word) => {
        if(word.length > longestWord.length){
            longestWord = word
        }
    })
    input.value = ''
    longestWordText.textContent = longestWord
    longestWordLength.textContent = longestWord.length
    
}

btn.addEventListener("click", findLongestWordLength)