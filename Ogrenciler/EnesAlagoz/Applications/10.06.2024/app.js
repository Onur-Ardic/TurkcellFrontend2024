// O(1) Sabit zamanlı (Dizinin boutundan bağımsız olarak tek bir işlem yapıyor)

function gelElementIndex(arr, index) {
  return arr[index];
}
const myArray = [10, 20, 30, 40, 50];
console.log(gelElementIndex(myArray, 2));

// O(n) Doğrusal zamanlı (Burada doğrusal zamanlı olarak her bir elemanı bir kezz ziyaret eder)

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const myArray2 = [1, 2, 3, 4, 5];
//console.log(sumArray(myArray2));

// O(2^n) ÜStel Zamanlı (Bu işlem üstel zamanlıdır çünkü her çağrı iki yeni çağrı üretir , bu da çağrı sayısını üstel olarak artırır)

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//console.log(fibonacci(5));
