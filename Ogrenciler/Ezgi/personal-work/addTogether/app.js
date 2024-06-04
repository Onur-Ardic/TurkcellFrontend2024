function addTogether(a, b) {
    const isValidNumber = (num) => typeof num === 'number' && !isNaN(num);
  
    // Eğer sadece bir argüman verilmişse
    if (b === undefined) {
      return isValidNumber(a)
        ? (c) => isValidNumber(c) ? a + c : undefined
        : undefined;
    }
  
    // Eğer iki argüman da verilmişse
    return isValidNumber(a) && isValidNumber(b)
      ? a + b
      : undefined;
  }
console.log(addTogether(2, 3));
let sumTwoAnd = addTogether(2);
console.log(sumTwoAnd(3));
console.log(addTogether(2)("3"));
console.log(addTogether(2, "3")); 
console.log(addTogether("2", 3)); 
console.log(addTogether(2)); 
