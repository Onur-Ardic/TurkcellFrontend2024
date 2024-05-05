const nameInput = document.getElementById("nameInput");
const nameCard = document.getElementById("nameCard");
nameInput.addEventListener("keyup", ()=> {
    nameCard.textContent = nameInput.value.toUpperCase();
});
const surnameInput = document.getElementById("surnameInput");
const surnameCard = document.getElementById("surnameCard");
surnameInput.addEventListener("keyup", ()=> {
    surnameCard.textContent = surnameInput.value.toUpperCase();
});
function randomNum() {
    return Math.round(Math.random() * 9 );
} 
const cardNumber =document.getElementById("cardNumber");
const createNumber = document.getElementById("createNumber");

// if(cardNumber=="0000 0000 0000 0000")
//     {
//         save.disabled=true;
//         console.log(cardNumber.textContent)
//     }
createNumber.addEventListener("click", ()=>{
    // save.disabled=false;
    let cardNumberCreate="";
    for (let i = 0; i < 16; i++){
        if(i%4==0){
            cardNumberCreate += " ";
        }
        cardNumberCreate += randomNum().toString();
    }
    cardNumber.textContent = cardNumberCreate;
});
const card = document.getElementById("creditsCard");
const cityInput = document.getElementById("cityInput");
cityInput.addEventListener("input", ()=>{
    if(cityInput.value == 1)
    {
        let newBackgroundImage = "url('./img/artvin.png')";
        card.style.backgroundImage = newBackgroundImage;
    }
    else if(cityInput.value == 2)
    {
        let newBackgroundImage = "url('./img/didim.jpg')";
        card.style.backgroundImage = newBackgroundImage;
    }
    else if(cityInput.value == 3)
    {
        let newBackgroundImage = "url('./img/balıkesir.webp')";
        card.style.backgroundImage = newBackgroundImage;
    }
    else{
        let newBackgroundImage = "url('./img/default.png')";
        card.style.backgroundImage = newBackgroundImage;
    }    
});
const fSize = document.getElementById("fSize");
fSize.addEventListener("input", ()=>{
    let fontSize = fSize.value;
    card.style.fontSize = fontSize + "px";
});
const usrinfo = document.getElementById("usrinfo");
const loc = document.getElementById("location");//checkboxid
loc.addEventListener("change",function(){
    if (this.checked) {
        usrinfo.style.justifyContent = "flex-end";         
    } else {
        usrinfo.style.justifyContent = "flex-start";
    }
}); 
const clear = document.getElementById("cls");
clear.addEventListener("click",()=>{
    nameInput.value = "";
    nameCard.textContent="Adınız";
    surnameInput.value = "";
    surnameCard.textContent="Soyadınız";
    cityInput.value = 0;
    let newBackgroundImage = "url('./img/default.png')";
    card.style.backgroundImage = newBackgroundImage;
    card.style.fontSize = 16 + "px";
    fSize.value = 16;
    cardNumber.textContent = "0000 0000 0000 0000";
    usrinfo.style.justifyContent = "flex-start";
    loc.checked = false;
}) ;

let idCounter = 1;
const save = document.getElementById("save");
const savedCardsContainer = document.getElementById('savedCardsContainer');
const savedCardsContainer2 = document.getElementById('savedCardsContainer2');
const header= document.getElementById('saveHeader');
const clsCards=document.getElementById("clsCards");
save.addEventListener("click", () => {
    header.style.display = "block";
    const creditCard = document.getElementById('creditsCard');
    const newCreditCard = creditCard.cloneNode(true); // kartın kopyası.
    newCreditCard.id = "savedCard_" + idCounter;
    idCounter += 1;
    newCreditCard.classList.add("mb-3");
    if (idCounter % 2 == 0) {
        savedCardsContainer.appendChild(newCreditCard);
    } else {
        savedCardsContainer2.appendChild(newCreditCard);
    }
    if(idCounter == 7)
        {
            save.disabled=true;
            clsCards.style.display="block";
        }
});

clsCards.addEventListener("click",()=>{
    header.style.display="none";
    idCounter=1;
    save.disabled=false;
    clsCards.style.display="none";
    // savedCardsContainer.innerHTML = ""; 
    // savedCardsContainer2.innerHTML = "";
    // innerhtml kullanmamak için döngü içerisinde tüm elemanları gezerek tek tek sildik.
    while (savedCardsContainer.firstChild) {
        savedCardsContainer.removeChild(savedCardsContainer.firstChild);
    }
    while (savedCardsContainer2.firstChild) {
        savedCardsContainer2.removeChild(savedCardsContainer2.firstChild);
    }
})