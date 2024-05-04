merhaba();

function merhaba() {
  console.log("Merhaba");
}

function user(name = "bilgi yok", age = "bilgi yok") {
  console.log(`isim ${name} yaş ${age}`);
}

//dışardan bilgi gelmezse ındeffined basar bu değeri almamak için default değer atanır
user("ahmet");

//return değer dönme
// verdiğim sayının karesini alan fonksiyon
function square(number) {
  return number * number;
}
const sonuc = square(5) * 3;

console.log(sonuc);

//arrow function

const square1 = (number) => {
  return number * number;
};

const square2 = (number) => number * number;
//console.log(square2(5));

//while -do while

let i = 0;
while (i < 10) {
  if (i == 3 || i == 5) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

//map function
const langs = ["python", "java", "c#", "c++"];
langs.forEach(function (lang) {
  console.log(lang);
});
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = numbers.map((number) => number * 2);
console.log(newNumbers);

//filter function
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers1 = numbers1.filter((number) => number % 2 == 0);
console.log(newNumbers1);
