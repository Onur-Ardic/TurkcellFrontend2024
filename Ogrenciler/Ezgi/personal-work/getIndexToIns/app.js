const getIndexToIns = (arr, num) => {
    arr.push(num)
    const sortedArr = arr.sort((a, b) => a - b)
    return sortedArr.indexOf(num)
}

console.log(getIndexToIns([60, 40], 50))
console.log(getIndexToIns([1, 2, 3, 4], 1.5)); 
console.log(getIndexToIns([20, 3, 5], 19)); 
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); 
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); 