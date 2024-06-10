let selectedChairCount = 0;

function biletAlClick() {
  let buttons = document.getElementsByClassName("biletAlButton");
  buttons = Array.from(buttons);

  localStorage.setItem("save", "");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let buttonDetails = {
        id: button.id,
      };

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
    } else {
      chair.className = "chair p-2 rounded-1";
    }
    chair.innerText = i;
    chairDiv.appendChild(chair);
  }

  localStorage.setItem("chairName", "[]");
  localStorage.setItem("chair", 0);
  chairs = [];

  const chooseChairSection = document.getElementById("chooseChairSection");
  chooseChairSection.style.display = "block";
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
  if (
    e.target.classList.contains("chair") &&
    !e.target.classList.contains("reserved") &&
    !e.target.classList.contains("selected")
  ) {
    e.target.classList.toggle("selected");
    let selectedChairCount = chairwrapper.querySelectorAll(".chair.selected").length;
    let chairName = e.target.innerText;
    chairs.push(chairName);
    localStorage.setItem("chairName", JSON.stringify(chairs));
    localStorage.setItem("chair", selectedChairCount);
  } 
  
  else if (e.target.classList.contains("chair") &&!e.target.classList.contains("reserved")) {
    let chairName = e.target.innerText;
    chairs.splice(
      chairs.findIndex((a) => a === chairName),1
    );
    localStorage.setItem("chairName", JSON.stringify(chairs));
    e.target.classList.toggle("selected");
    let selectedChairCount =chairwrapper.querySelectorAll(".chair.selected").length;
    localStorage.setItem("chair", selectedChairCount);
  }
});




let getkoltukbilgi = JSON.parse(localStorage.getItem("chairName"));

const saveNextButton1 = document.getElementById("saveNextButton1").addEventListener("click", function (e) {
    e.preventDefault();
    let createTicket = document.getElementById("createticket")
    createTicket.style.display = "block";
    if (createTicket) {
        createTicket.scrollIntoView({ behavior: "smooth" });
      }
    let paidTickets = JSON.parse(localStorage.getItem("paidTickets"));
    if (paidTickets == null || paidTickets == undefined) {
      paidTickets = [];
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
        chairs: selectedChairs,
      },
    };
    paidTickets.push(newTicket);
    localStorage.setItem("paidTickets", JSON.stringify(paidTickets));
    let reservedChairs = JSON.parse(localStorage.getItem(selectedFilmId));
    if (reservedChairs == null || reservedChairs == undefined) {
      reservedChairs = [];
    }
    selectedChairs.forEach((element) => {
      reservedChairs.push(element);
    });
    localStorage.setItem(selectedFilmId, JSON.stringify(reservedChairs));
    createTicket1(selectedChairCount, movieName);
  });

function createTicket1 () {
    let koltukBilgi = document.getElementById("koltukBilgi");
    // let biletFiyati = document.getElementById("biletfiyati");
    let filmAdi = document.getElementById("filmAdi");
    let chairName3 = localStorage.getItem("chairName"); 
    let chairCount2 = localStorage.getItem("chair");  
    koltukBilgi.innerText = chairName3
    filmAdi.innerText = getMovieName;
    // biletFiyati.innerText = ticketPrice;


    getMovies()
    .then((movies) => {
        const selectedMovie = movies.find((movie) => movie.name === getMovieName);
        
        if (selectedMovie) {
            let ticketPrice = (selectedMovie.price * chairCount2 );
            console.log(ticketPrice);
        }
    })


}
function handleCreateMovieCard (parent, name, src) {
    const card = document.createElement("div");
    card.className = "card p-0 col-lg-2 box-shadow"
    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header"
    const cardHeaderTitle = document.createElement("h4")
    cardHeaderTitle.className = "my-0 text-white";
    cardHeaderTitle.textContent = name
    cardHeader.appendChild(cardHeaderTitle);
    card.appendChild(cardHeader)

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const imgElement = handleCreateCardElement("img", "mb-2", src);
    cardBody.appendChild(imgElement);
    card.appendChild(cardBody);
    parent.appendChild(card);
};

function handleCreateCardElement (el, className, src) {
    const element = document.createElement(el)
    element.className = className;
    element.src = src;
    return element;
}

async function handleGetMovie () {
    console.log(await getMovies())
    const parentDiv = document.getElementById("choose-movie")
    getMovies().then(movies => {
        movies.map(movie => {
            handleCreateMovieCard(parentDiv, movie.name, movie.imageSrc);
        })
    })
    
}
handleGetMovie()


let buttonsTrailer = document.querySelectorAll(".trailerButtons");
const iframe = document.querySelector(".iframe");

buttonsTrailer.forEach((butonS) => {
  butonS.addEventListener("click", () => {
    getMovies()
      .then((movies) => {
        let card = butonS.closest(".card");
        let movieNameText = card.querySelector(".card-header h4").innerText;
        const selectedMovie = movies.find(
          (movie) => movie.name == movieNameText
        );
        iframe.src = selectedMovie.src;
      })
      .catch((error) => {
        console.error("Fetch hatası:", error);
      });
  });
});

let buyTicket = document.getElementById("buyTicket");
buyTicket.addEventListener("click", ()=>{
    alert("biletiniz mailinize gönderildi")
} )