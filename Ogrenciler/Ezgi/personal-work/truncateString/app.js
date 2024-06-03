const truncateString = (str, num) => {
    return str.length <= num ? str : str.slice(0, num) + '...'
}

console.log(truncateString("Merhaba Ezgi", 6))