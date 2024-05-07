const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");



const playerTurn = document.getElementById("playerTurn");
const winner = document.getElementById("winner");
const area = document.getElementById("area");
const boxes = document.querySelectorAll(".xoxbox");
let game = true;
const xScore = document.getElementById("xScore");
const oScore = document.getElementById("oScore");
const newGame = document.getElementById("newGame");
const newGameStart = document.getElementById("newGameStart");

let xWin = 0;
let oWin = 0;

let player = {
  name: "",
  value: 1
};

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    if(player.value % 2 == 1){
        player.name = "X";
        box.textContent = player.name;
        player.value++;
        playerTurn.textContent = "O'nun sırası"
    }else{
        player.name = "O";
        box.textContent = player.name;
        player.value++;
        playerTurn.textContent = "X'in sırası"
    }
    whoWin();
  });
  
});

function whoWin(){
    if((box1.textContent === player.name && box2.textContent === player.name && box3.textContent === player.name) ||
    (box4.textContent === player.name && box5.textContent === player.name && box6.textContent === player.name) ||
    (box7.textContent === player.name && box8.textContent === player.name && box9.textContent === player.name) ||
    (box1.textContent === player.name && box4.textContent === player.name && box7.textContent === player.name) ||
    (box2.textContent === player.name && box5.textContent === player.name && box8.textContent === player.name) ||
    (box3.textContent === player.name && box6.textContent === player.name && box9.textContent === player.name) ||
    (box1.textContent === player.name && box5.textContent === player.name && box9.textContent === player.name) ||
    (box3.textContent === player.name && box5.textContent === player.name && box7.textContent === player.name) ){
      winner.textContent = `${player.name} kazandı`;
      game = false;
      if(player.name === "X") {
        xWin += 10;
        xScore.textContent = `${player.name} Skorunuz ${xWin}`;
      }else if(player.name === "O"){
        oWin += 10;
        oScore.textContent = `${player.name} Skorunuz ${oWin}`;
      };

      if(game == false){
        for(let i = 0; i < area.children.length; i++){
          for(let k = 0; k < 3; k++){
            area.children[i].children[k].disabled = true;
          }
        }
      }
    }
}

function clear(){
  boxes.forEach( (i) => {
    i.textContent = "";
  })
  game=true;
  player.name="X";
  if(game == true){
    for(let i = 0; i < area.children.length; i++){
      for(let k = 0; k < 3; k++){
        area.children[i].children[k].disabled = false;
      }
    }
  }
  winner.textContent = "";
}

newGameStart.addEventListener("click",function (){
  clear();
  xWin = 0;
  oWin = 0;
  xScore.textContent = "";
  oScore.textContent = "";
})
newGame.addEventListener("click", clear)
