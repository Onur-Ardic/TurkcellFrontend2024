function factorial(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0)
        return false;
    }
  
    return true;
  }
  
  function isEven(num) {
    return num % 2 === 0;
  }
  
  function isSuper(num) {
    const digitSum = num
      .toString()
      .split('')
      .map(Number)
      .reduce((a, b) => a + b);
  
    return isPrime(digitSum) && isPrime(num);
  }
  