// O(1)
function constantTimeExample(arr) {
    return arr[0];
}

let arr = [1, 2, 3, 4, 5];
console.log("O(1) " + constantTimeExample(arr));


// O(n)
function linearTimeExample(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}
let arr2 = [1, 2, 3, 4, 5];
console.log( "O(n)" + linearTimeExample(arr));


// O(n^2)
function quadraticTimeExample(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log("O(n^2)" + arr[i], arr[j]);
        }
    }
}

let arr3 = [1, 2, 3];
quadraticTimeExample(arr);


// O(log n)
function logarithmicTimeExample(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let arr4 = [1, 2, 3, 4, 5];
console.log("O(log n)" + logarithmicTimeExample(arr, 3));


// O(n log n)
function linearithmicTimeExample(arr) {
    return arr.sort((a, b) => a - b);
}

let arr5 = [5, 2, 3, 1, 4];
console.log("O(n log n)" + linearithmicTimeExample(arr));


// O(2^n)
function exponentialTimeExample(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return exponentialTimeExample(n - 1) + exponentialTimeExample(n - 2);
    }
}

console.log("O(2^n)" + exponentialTimeExample(5));


// O(n!)
function factorialTimeExample(arr) {
    function permute(array, temp) {
        if (array.length === 0) {
            console.log("O(n!)" + temp);
        } else {
            for (let i = 0; i < array.length; i++) {
                let current = array.slice();
                let next = current.splice(i, 1);
                permute(current.slice(), temp.concat(next));
            }
        }
    }

    permute(arr, []);
}

let arr6 = [1, 2, 3];
factorialTimeExample(arr);



