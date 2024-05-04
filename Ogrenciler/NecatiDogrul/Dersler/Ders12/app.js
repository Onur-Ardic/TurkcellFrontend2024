// function user(name,age){
//     console.log(`İsim:${name} Yaş:${age}`);
// }

// user("Necati",23);



// function user(name = "Bilgi yok",age="Bilgi yol"){
//     console.log(`İsim:${name} Yaş:${age}`);
// }

// user("Necati");



// function square(x){
//     return x*x;
// }

// const sonuc = square(5)*3;
// console.log(sonuc);

//Arrow Functions

// const kare = (x) =>  x*x;

// console.log(kare(2));

//Do while ve while

// let i=0;
// while (i<10){
//     if(i==3 || i==5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// let i = 0;

// do {console.log(i);
//     i++;
    
// } while (i<10);

const langs = ["Python","Java","C++","Javascript"];

langs.map(lang=>console.log(lang));


//kullanıcıdan sayı al birkaç işlem içinden birini alsın faktöriyel asal sayı tek mi çift mi dördüncü işlem ise süper sayı mı değl mi onu bulacak kendi hariç bütün çarpanlarının toplamı = süper sayı

let number = parseInt(prompt("Bir sayı giriniz:"));
let operation = parseInt(prompt("1:Faktöriyel\n2:Asal Sayı\n3:Tek mi Çift mi\n4:Süper Sayı\nSeçiminiz:"));
if(operation==1){
    let fact = 1;
    for(let i=1;i<=number;i++){
        fact*=i;
    }
    console.log(`Faktöriyel:${fact}`);
}