// Example 1 O(1)
function getFirstElement(array) {
  return array[0];
}

// Example 2 O(n)
function printAllElements(array) {
  array.forEach((element) => console.log(element));
}

// Example 3 O(n^2)
function printAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

// Example 4 O(logn)
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

// Example 5 O(nlogn)
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example 6 O(2^n)
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example 7 O(n!)
function permutations(str) {
  if (str.length === 0) return [""];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    const rest = permutations(str.slice(0, i) + str.slice(i + 1));
    rest.forEach((subPermutation) => {
      result.push(str[i] + subPermutation);
    });
  }
  return result;
}
