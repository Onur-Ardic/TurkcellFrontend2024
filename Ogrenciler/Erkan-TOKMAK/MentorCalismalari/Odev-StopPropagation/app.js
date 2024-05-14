// Örnek 1
// Burada sadece checkbox işaretlendiğinde "CheckBox İşaretlendi" yazısı konsola yazılır. Çünkü checkbox tıklandığında stopPropagation metodu kullanılmıştır.
document.querySelector(".div1").addEventListener("click", () => {console.log("div1 tıklandı")});
document.querySelector(".div2").addEventListener("click", () => {console.log("div2 tıklandı")});
document.querySelector("#myCheckBox").addEventListener("click", (e) => {
    console.log("CheckBox İşaretlendi");
    e.stopPropagation();
});


// Örnek 2
// Burada sadece test1 fonksiyonu çalışır. Çünkü test1 fonksiyonunda stopImmediatePropagation metodu kullanılmıştır.
let myBtn = document.querySelector("#myBtn");
const test1 = (e) => { 
    console.log("test1 çalıştı");
    e.stopImmediatePropagation();
}
const test2 = () => { 
    console.log("test2 çalıştı");
}
myBtn.addEventListener("click", test1);
myBtn.addEventListener("click", test2);
