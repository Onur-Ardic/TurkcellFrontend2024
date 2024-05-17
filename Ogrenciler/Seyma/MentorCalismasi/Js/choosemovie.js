
let buttons = document.getElementsByClassName("biletAlButton");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        e.preventDefault();
        let movieName = "";
        switch (e.target.id){
            case "yesilyolButton": movieName = "Yeşil Yol"; break;    
            case "avatarButton": movieName = "Avatar"; break;  
            case "twilightButton": movieName = "Twilight"; break;  
            case "frozenButton": movieName = "Frozen"; break;  
        }
        localStorage.setItem("film", movieName);
        window.location.href = "choosechair.html";
    }, false);
}

