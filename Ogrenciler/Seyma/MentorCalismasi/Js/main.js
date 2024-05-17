let getMovieName = localStorage.getItem("film");
let selectedChairs = localStorage.getItem("chair");
//let personInfo = JSON.stringify(localStorage.getItem("save"));
const ticketCreated = document.getElementById("biletOlusturuldu");
let filmAdi = document.getElementById("filmAdi")
filmAdi.innerText = getMovieName;
let getkoltukbilgi = JSON.parse(localStorage.getItem("chairName"));
let koltukBilgi = document.getElementById("koltukBilgi");
koltukBilgi.innerText = getkoltukbilgi;
let resim = document.getElementById("resim");


if (getMovieName == "Avatar") {
  resim.src =
    "https://cdn1.ntv.com.tr/gorsel/HFwGwK73tUiXFFG0gdSXcg.jpg?width=1000&mode=crop&scale=both";
} else if (getMovieName == "Twilight") {
  resim.src =
    "https://m.media-amazon.com/images/I/61sW9OBNRxL._AC_UF1000,1000_QL80_.jpg";
} else if (getMovieName == "Frozen") {
  resim.src =
    "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810";
} else if (getMovieName == "Yeşil Yol") {
  resim.src =
    "https://images.justwatch.com/poster/265835203/s332/yesil-yol";
}

let totalPrice = selectedChairs * 100;
let totalPriceText = document.getElementById("biletfiyati");
totalPriceText.innerText = totalPrice;


//let personInfoText = document.getElementById("personInfoText");
//personInfoText.innerText = personInfo;


let buyTicket = document.getElementById("buyTicket");
buyTicket.addEventListener("click", () => {
    alert("Biletiniz Oluşturuldu İyi Seyirler Dileriz...");
});
