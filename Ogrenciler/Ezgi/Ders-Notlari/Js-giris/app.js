// var a = 10;
// var b = a;
// console.log("1- ", a, b); 10, 20 yazar
// a = 20;
// console.log("2- ", a, b); 20,10 yazar


// var a = [10]; arrayin içinde tek bir değer olduğu için primitve çalışır.
// var b = a;
// console.log("1- ", a, b); [10] [10] gelir
// a = [20];
// console.log("2- ", a, b); [20] [10] gelir referans oldugu için gösterdigi adresler aynı
// console.log("3- ", a * b); 200 gelir

// var a = [10, 20, 30, 40, 50]; //arrayde tek bir değer yok referans gibi çalışacak. 
// var b = a;
// console.log("1- ", a, b); //aynı gelirler
// a[0] = 60;
// a.push(60);
// console.log("2- ", a, b);  //[60, 20, 30 40, 50, 60] ikisi de boyle olur.