function biletAlClick() {
    let buttons = document.getElementsByClassName("biletAlButton");
    buttons = Array.from(buttons);

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let buttonDetails = {
                id: button.id,
            };
            console.log(buttonDetails);

            let card = button.closest('.card');
            let movieNameText = card.querySelector('.card-header h4').innerText;
            let movieNameInfo = {
                innerText: movieNameText,
            };
            console.log(movieNameInfo);
            const nameLabel = document.getElementById("movies-Name");
            if (nameLabel) {
              nameLabel.innerText = `Name: ${movieNameInfo.innerText}`};
        });
    });
    
}

biletAlClick();



document.getElementById("savePersonInfoBtn").addEventListener("submit", (e) => {
    e.preventDefault();
    const personInfo = Person.personInfos();
    localStorage.setItem("save", JSON.stringify(personInfo));
    // const targetDiv = e.target.closest('#choosemovie');
});

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
