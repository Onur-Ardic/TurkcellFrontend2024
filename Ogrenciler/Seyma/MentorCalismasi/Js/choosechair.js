let getMovieName = localStorage.getItem("film");
let ChoosenMovieName = document.getElementById("choosenMovieName");
ChoosenMovieName.innerText = getMovieName;
const chairwrapper = document.getElementById("chair-wrapper");
let chairs = [];

chairwrapper.addEventListener("click", function (e){
    if(e.target.classList.contains("chair") && !e.target.classList.contains("reserved")  && !e.target.classList.contains("selected") ){
       e.target.classList.toggle("selected");
       let selectedChairCount = chairwrapper.querySelectorAll(".chair.selected").length;
       let chairName = e.target.innerText;
       chairs.push(chairName)
       localStorage.setItem("chairName", JSON.stringify(chairs));
       localStorage.setItem("chair", selectedChairCount);
    }
    else if(e.target.classList.contains("chair") && !e.target.classList.contains("reserved") ){
       let chairName = e.target.innerText;
       chairs.splice(chairs.findIndex(a => a === chairName), 1);
       localStorage.setItem("chairName", JSON.stringify(chairs));

       e.target.classList.toggle("selected");
       let selectedChairCount = chairwrapper.querySelectorAll(".chair.selected").length;

       localStorage.setItem("chair", selectedChairCount);
    }
});  

document.getElementById("saveNextButton1").addEventListener("click", () => {
    window.location.href = "main.html";
    
});