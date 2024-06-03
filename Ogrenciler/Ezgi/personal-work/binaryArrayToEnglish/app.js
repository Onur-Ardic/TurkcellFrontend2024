const binaryArrayToEnglish = (str) => {
    const binaryArr = str.split(" ")
    const convertedArr = binaryArr.map((binary) => String.fromCharCode(parseInt(binary, 2))).join('')

    return convertedArr
}

console.log(binaryArrayToEnglish("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01110111 01100101 00100000 01101000 01100001 01110110 01101001 01101110 01100111 00100000 01100110 01110101 01101110 00111111"))