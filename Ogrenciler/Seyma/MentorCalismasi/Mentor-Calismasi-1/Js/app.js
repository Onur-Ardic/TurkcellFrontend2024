// let buttons = document.getElementsByClassName("biletAlButton");



// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', (e) => {
//         e.preventDefault();
//         let movieName = "";
//         switch (e.target.id){
//             case "yesilyolButton": movieName = "Yeşil Yol"; break;    
//             case "avatarButton": movieName = "Avatar"; break;  
//             case "twilightButton": movieName = "Twilight"; break;  
//             case "frozenButton": movieName = "Frozen"; break;  
//         }
//         localStorage.setItem("film", movieName);
//         window.location.href = "choosechair.html";
//     }, false);
// }
// const saveNextButton = document.getElementById("saveNextButton");

// const inputs = {
//   nameInput: document.getElementById("nameInput"),
//   surNameInput: document.getElementById("surNameInput"),
//   inputEmail: document.getElementById("inputEmail"),
//   inputTc: document.getElementById("inputTc"),
// };

// class Person {
//   constructor(nameInput, surNameInput, inputEmail, inputTc) {
//     this.name = nameInput;
//     this.surNameInput = surNameInput;
//     this.inputEmail = inputEmail;
//     this.inputTc = inputTc;
//   }
//   static personInfos() {
//     return {
//       nameInput: inputs.nameInput.value.trim(),
//       surNameInput: inputs.surNameInput.value.trim(),
//       inputEmail: inputs.inputEmail.value.trim(),
//       inputTc: inputs.inputTc.value.trim(),
//     };
//   }
// }
// document.getElementById("saveNextButton").addEventListener("click", (e) => {
//   e.preventDefault();
//   const personInfo = Person.personInfos();
//   localStorage.setItem("save", JSON.stringify(personInfo));
//   const targetDiv = e.target.closest('#choosemovie');
// });



// let getMovieName = localStorage.getItem("film");
// let ChoosenMovieName = document.getElementById("choosenMovieName");
// ChoosenMovieName.innerText = getMovieName;
// const chairwrapper = document.getElementById("chair-wrapper");
// let chairs = [];

// chairwrapper.addEventListener("click", function (e){
//     if(e.target.classList.contains("chair") && !e.target.classList.contains("reserved")  && !e.target.classList.contains("selected") ){
//        e.target.classList.toggle("selected");
//        let selectedChairCount = chairwrapper.querySelectorAll(".chair.selected").length;
//        let chairName = e.target.innerText;
//        chairs.push(chairName)
//        localStorage.setItem("chairName", JSON.stringify(chairs));
//        localStorage.setItem("chair", selectedChairCount);
//     }
//     else if(e.target.classList.contains("chair") && !e.target.classList.contains("reserved") ){
//        let chairName = e.target.innerText;
//        chairs.splice(chairs.findIndex(a => a === chairName), 1);
//        localStorage.setItem("chairName", JSON.stringify(chairs));

//        e.target.classList.toggle("selected");
//        let selectedChairCount = chairwrapper.querySelectorAll(".chair.selected").length;

//        localStorage.setItem("chair", selectedChairCount);
//     }
// });  

// document.getElementById("saveNextButton1").addEventListener("click", () => {
//     window.location.href = "main.html";
    
// });


// let selectedChairs = localStorage.getItem("chair");
// const ticketCreated = document.getElementById("biletOlusturuldu");
// let filmAdi = document.getElementById("filmAdi")
// filmAdi.innerText = getMovieName;
// let getkoltukbilgi = JSON.parse(localStorage.getItem("chairName"));
// let koltukBilgi = document.getElementById("koltukBilgi");
// koltukBilgi.innerText = getkoltukbilgi;
// let resim = document.getElementById("resim");


// if (getMovieName == "Avatar") {
//   resim.src =
//     "https://cdn1.ntv.com.tr/gorsel/HFwGwK73tUiXFFG0gdSXcg.jpg?width=1000&mode=crop&scale=both";
// } else if (getMovieName == "Twilight") {
//   resim.src =
//     "https://m.media-amazon.com/images/I/61sW9OBNRxL._AC_UF1000,1000_QL80_.jpg";
// } else if (getMovieName == "Frozen") {
//   resim.src =
//     "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810";
// } else if (getMovieName == "Yeşil Yol") {
//   resim.src =
//     "https://images.justwatch.com/poster/265835203/s332/yesil-yol";
// }

// let totalPrice = selectedChairs * 100;
// let totalPriceText = document.getElementById("biletfiyati");
// totalPriceText.innerText = totalPrice;


// function getPersonInfo() {
//   let personInfoText = document.getElementById("personInfoText");
//   let personInfoIObject = JSON.parse(localStorage.getItem("save"));
//   personInfoText.innerText = personInfoIObject.nameInput + " " + personInfoIObject.surNameInput + " " + personInfoIObject.inputTc + " " + personInfoIObject.inputEmail;
// };
// getPersonInfo();

// let buyTicket = document.getElementById("buyTicket");
// buyTicket.addEventListener("click", () => {
  
// });
// localStorage.getItem("save", JSON.Parse(personInfo));
