// O(1) //Sabit zamanlı algoritma, girdinin boyutundan bağımsızdır.
// O(n) //Lineer zamanlı algoritma, girdinin boyutuyla doğru orantılıdır.
// O(n^2) //Karesel zamanlı algoritma, girdinin boyutunun karesiyle doğru orantılıdır.
// O(log, n) //Logaritmik zamanlı algoritma, girdinin logaritmasıyla doğru orantılıdır.
// O(n, log, n) //Lineer-logaritmik zamanlı algoritma, girdinin boyutuyla logaritmasının çarpımıyla doğru orantılıdır.



// O(1) 
//Aşağıdaki işlemler sabit zamanda çalışır. Data ne kadar büyük olursa olsun ilk elemanını almak aynı sürede gerçekleşir.

// function isEven(num) {
//     return num % 2 === 0;
// }

// function getFirstElement(arr) {
//     return arr[0];
// }

// O(n) 
// Bu fonksiyonlarda işlem süresi dizinin uzunluğu kadar sürecektir. Dolayısıyla n dizi kadar n kez çalışmış olur. Data arttıkça çalışma süresi de Lineer olarak artar.

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

//gelen dataları forEach döngüsüyle alıp işliyoruz ve kart yapılarımıza bastırıyoruz. Bu da gelen data kadar sürede çalışması demek

// async function handleGetMovie () {
//     const parentDiv = document.getElementById("choose-movie")
//     getMovies().then(movies => {
//         movies.map(movie => {
//             handleCreateMovieCard(parentDiv, movie.name, movie.imageSrc);
//         })
//     })
// }

// O(n^2) 
//Karesel zamanlı algoritma, girdinin boyutunun karesiyle doğru orantılıdır.

// let arr = [1, 2, 3];
// printPairs(arr);

// function printPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             console.log(arr[i], arr[j]);
//         }
//     }
// }


// O(log, n) 
//Logaritmik zamanlı algoritma, girdinin logaritmasıyla doğru orantılıdır.

// function binarySearch(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }

//     return -1;
// }

// function performSearch() {
//     let arr = [1, 3, 5, 7, 9, 11, 13, 15];
//     let target = parseInt(document.getElementById('target').value);
//     let result = binarySearch(arr, target);
//     let resultElement = document.getElementById('result');

//     if (result !== -1) {
//         resultElement.textContent = `Target found at index: ${result}`;
//     } else {
//         resultElement.textContent = 'Target not found in array';
//     }
// }



// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     const mid = Math.floor(arr.length / 2);
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);

//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }


// O(n, log, n) 
//Lineer-logaritmik zamanlı algoritma, girdinin boyutuyla logaritmasının çarpımıyla doğru orantılıdır.


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

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

    // Kalan elemanları result dizisine ekleyin
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Test the function with an example array
let arr = [38, 27, 43, 3, 9, 82, 10];
let sortedArr = mergeSort(arr);
console.log(arr);
console.log(sortedArr);


//örneğin gelen fiyat bilgisini sıralayacaksak bu sıralamada verileri alırken ikiye bölüp bölünmüş diziler kullanılabilir.?