// Örnek 1
// Burada sadece checkbox işaretlendiğinde "CheckBox İşaretlendi" yazısı konsola yazılır. Çünkü checkbox tıklandığında stopPropagation metodu kullanılmıştır.
document.querySelector(".div1").addEventListener("click", () => {console.log("div1 tıklandı")});
document.querySelector(".div2").addEventListener("click", () => {console.log("div2 tıklandı")});
document.querySelector("#myCheckBox").addEventListener("click", (e) => {
    console.log("CheckBox İşaretlendi");
    e.stopPropagation();
});
document.querySelector("#myCheckBox1").addEventListener("click", (e) => {
    console.log("CheckBox 1 İşaretlendi");
    // e.stopPropagation();
});


// Örnek 2
// Burada sadece test1 fonksiyonu çalışır. Çünkü test1 fonksiyonunda stopImmediatePropagation metodu kullanılmıştır.
let myBtn = document.querySelector("#myBtn");
const test1 = (e) => { 
    console.log("test1 çalıştı");
    e.stopImmediatePropagation();
}
const test2 = (e) => { 
    console.log("test2 çalıştı");
    e.stopImmediatePropagation();
}
myBtn.addEventListener("click", test2);
myBtn.addEventListener("click", test1);
