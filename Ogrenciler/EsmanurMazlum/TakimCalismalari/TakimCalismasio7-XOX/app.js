const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

// const boxes=[box1, box2, box3, box4, box5, box6, box7, box8, box9];

// boxes.forEach((box) => {
//     box.addEventListener("click", console.log(box + "tıklandı"))
// })

const cons = [
    [box1, box2, box3],
    [box4, box5, box6],
    [box7, box8, box9],
    [box1, box4, box7],
    [box2, box5, box8],
    [box3, box6, box9],
    [box1, box5, box9],
    [box3, box5, box7],
]

const boxes = document.querySelectorAll(".xoxbox");
boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    if(player.value % 2 == 1){
        player.name = "X";
        box.textContent = player.name;
        player.value++;
    }else{
        player.name = "Y";
        box.textContent = player.name;
        player.value++;
    }
  });
});

let player = {
    name: "",
    value: 1
};


function ekle(){
    
}
