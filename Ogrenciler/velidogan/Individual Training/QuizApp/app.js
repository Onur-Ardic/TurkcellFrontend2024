const quiz = new Quiz(sorular);
const ui = new UI();


ui.btnStart.addEventListener("click",function(){
    ui.quizBox.classList.add("active");
    ui.btnNext.classList.remove("active");
    toplamSure(10);
    timeLine();
    ui.soruSirasi(quiz.soruIndex + 1,quiz.sorular.length);
    ui.soruGoster(quiz.soruGetir());
});

ui.btnNext.addEventListener("click",function(){
    if(quiz.soruIndex + 1 < quiz.sorular.length){
        ui.btnNext.classList.remove("active");
        toplamSure(10);
        timeLine();
        quiz.soruIndex++;
        ui.soruSirasi(quiz.soruIndex + 1,quiz.sorular.length);
        ui.soruGoster(quiz.soruGetir());
    }else{
        ui.quizBox.classList.remove("active");
        ui.scoreBox.classList.add("active");
        ui.skoruGoster(quiz.dogruCevapSayisi,quiz.sorular.length);
    }
});

function selectedOption(option){
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)){
        quiz.dogruCevapSayisi++;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.incorrectIcon);
    }

    for(let opt of ui.optionList.children){
        opt.classList.add("disabled");
    }

    ui.btnNext.classList.add("active");
}

ui.btnQuit.addEventListener("click",function(){
    window.location.reload();
});

ui.btnReplay.addEventListener("click",function(){
    quiz.dogruCevapSayisi = 0;
    quiz.soruIndex = 0;
    ui.scoreBox.classList.remove("active");
    ui.btnStart.click();
});

let counter;
function toplamSure(time){
    counter = setInterval(timer,1000);

    function timer(){
        ui.timeSecond.textContent = time;
        time--;

        if(time < 0){
            clearInterval(counter);
            ui.timeText.textContent = "Süre Bitti";
            let soru = quiz.soruGetir();

            for(let option of ui.optionList.children){
                if(soru.cevabiKontrolEt(option.querySelector("span b").textContent)){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend",ui.correctIcon);
                }
                option.classList.add("disabled");
            }
            ui.btnNext.classList.add("active");
        }
    }
}

let counterLine;
function timeLine(){
    counterLine = setInterval(timer,20);
    let line = 0;

    function timer(){
        line += 1;
        ui.timeLine.style.width = line + "px";

        if(line > 549){
            clearInterval(counterLine);
        }
    }
}