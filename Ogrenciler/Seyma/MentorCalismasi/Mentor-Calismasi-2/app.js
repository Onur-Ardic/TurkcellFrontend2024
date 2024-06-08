function biletAlClick() {
    let buttons = document.getElementsByClassName("biletAlButton");
    buttons = Array.from(buttons);

    localStorage.setItem("save", "");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let buttonDetails = {
                id: button.id,
            };
            console.log(buttonDetails);

            let card = button.closest(".card");
            let movieNameText = card.querySelector(".card-header h4").innerText;
            let movieId = card.querySelector(".card-header h4").id;

            document.getElementById("selectedMovieId").value = movieId;
            localStorage.setItem("movieName1", movieNameText);
            const nameLabel = document.getElementById("movies-Name");
            if (nameLabel) {
                nameLabel.innerText = `Name: ${movieNameText}`;
            }
        });
    });
}

biletAlClick();

document.getElementById("savePersonInfoBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const personInfo = Person.personInfos();
    localStorage.setItem("save", JSON.stringify(personInfo));

    let chairDiv = document.getElementById("chair-wrapper");
    chairDiv.innerHTML = "";

    const chairLength = 50;
    let selectedFilmId = document.getElementById("selectedMovieId").value;
    var reservedChairs = JSON.parse(localStorage.getItem(selectedFilmId));
    
if (reservedChairs == null || reservedChairs == undefined) {
        reservedChairs = [];
    }
    for (var i = 1; i <= chairLength; i++) {
        var chair = document.createElement("div");
        if (reservedChairs.includes(i.toString())) {

            chair.className = "chair p-2 rounded-1 reserved";
        }
        else {

            chair.className = "chair p-2 rounded-1";
        }
        chair.innerText = i;
        chairDiv.appendChild(chair)

    }

    localStorage.setItem("chairName", "[]");
    localStorage.setItem("chair", 0);
    chairs = [];

    const chooseChairSection = document.getElementById("chooseChairSection");
    if (chooseChairSection) {
        chooseChairSection.scrollIntoView({ behavior: "smooth" });
    }
});
let getMovieName = localStorage.getItem("movieName1");
let ChoosenMovieName = document.getElementById("choosenMovieName");
ChoosenMovieName.innerText = getMovieName;
const chairwrapper = document.getElementById("chair-wrapper");

let chairs = [];
chairwrapper.addEventListener("click", function (e) {

    if (e.target.classList.contains("chair") && !e.target.classList.contains("reserved") && !e.target.classList.contains("selected")) {
        e.target.classList.toggle("selected");
        let selectedChairCount = chairwrapper.querySelectorAll(".chair.selected").length;
        let chairName = e.target.innerText;
        chairs.push(chairName)
        localStorage.setItem("chairName", JSON.stringify(chairs));
        localStorage.setItem("chair", selectedChairCount);
    }
    else if (e.target.classList.contains("chair") && !e.target.classList.contains("reserved")) {
        let chairName = e.target.innerText;
        chairs.splice(chairs.findIndex(a => a === chairName), 1);
        localStorage.setItem("chairName", JSON.stringify(chairs));

        e.target.classList.toggle("selected");

        let selectedChairCount = chairwrapper.querySelectorAll(".chair.selected").length;

        localStorage.setItem("chair", selectedChairCount);
    }
});

let getkoltukbilgi = JSON.parse(localStorage.getItem("chairName"));

const saveNextButton1 = document.getElementById("saveNextButton1").addEventListener("click", function (e) {
    e.preventDefault();
    let paidTickets = JSON.parse(localStorage.getItem("paidTickets"));
    if (paidTickets == null || paidTickets == undefined) {
        paidTickets  = [];
    }
    let selectedFilmId = document.getElementById("selectedMovieId").value;
    let selectedUser = JSON.parse(localStorage.getItem("save"));
    let selectedChairs = JSON.parse(localStorage.getItem("chairName"));
    let movieName = localStorage.getItem("movieName1");
    let newTicket = {
        name: selectedUser.name,
        surname: selectedUser.surname,
        email: selectedUser.email,
        tc: selectedUser.tc,
        movie: {
            name: localStorage.getItem("movieName1"),
            id: selectedFilmId,
            chairs: selectedChairs
        }
    }
    paidTickets.push(newTicket);
    localStorage.setItem("paidTickets", JSON.stringify(paidTickets));
    var reservedChairs = JSON.parse(localStorage.getItem(selectedFilmId));
    if (reservedChairs == null || reservedChairs == undefined) {
        reservedChairs  = [];
    }
    selectedChairs.forEach(element => {
        reservedChairs.push(element);
    });
    localStorage.setItem(selectedFilmId, JSON.stringify(reservedChairs));

    let chairCount = localStorage.setItem("chair", selectedChairCount);

//jsonserverdan price bilgisini oku. chairCOutn ile çarp.

filmAdi.innerText = movieName;
koltukBilgi.innerText = selectedChairs.join(",");
let resim = document.getElementById("resim");

});