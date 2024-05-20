function makeCounter(initialValue = 0) {
  let count = initialValue;
  return function () {
    return count++;
  };
}

const counter = makeCounter(5);
console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7
