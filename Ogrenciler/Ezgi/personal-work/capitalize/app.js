const capitalizeTheFirstLetter = (sentence) => {

    let words = sentence.split(" ")

    let capitalizedWords = words.map((word) => {
        const lowerCaseWord = word.toLowerCase();
        return lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1); //0.indeksi siler geri kalanı döndürür.
    })
    return capitalizedWords.join(" ");
}

const sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
console.log(capitalizeTheFirstLetter(sentence));