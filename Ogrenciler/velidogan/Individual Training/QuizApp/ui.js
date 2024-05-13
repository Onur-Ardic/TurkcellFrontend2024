function UI(){
    this.quizBox = document.querySelector(".quiz_box");
    this.btnStart = document.querySelector(".btn_start");
    this.questionText = document.querySelector(".question_text");
    this.optionList = document.querySelector(".option_list");
    this.btnNext = document.querySelector(".btn_next");
    this.quizInfo = document.querySelector(".quiz_info");
    this.btnReplay = document.querySelector(".btn_replay");
    this.btnQuit = document.querySelector(".btn_quit");
    this.scoreText = document.querySelector(".score_text");
    this.scoreBox = document.querySelector(".score_box");
    this.timeText = document.querySelector(".time_text");
    this.timeSecond = document.querySelector(".time_second");
    this.timeLine = document.querySelector(".time_line");
    this.correctIcon = `<i class="fa-solid fa-check"></i>`;
    this.incorrectIcon = `<i class="fa-solid fa-xmark"></i>`;
}

UI.prototype.soruGoster = function(soru){
    let question = `${soru.soruMetni}`;
    let optionList = "";

    for(let option in soru.cevapSecenekleri){
        optionList += `
            <div class="option">
                <span><b>${option}</b>: ${soru.cevapSecenekleri[option]}</span>
            </div>
        `;
    }
    this.optionList.innerHTML = optionList;
    this.questionText.innerHTML = question;

    for(let opt of this.optionList.children){
        opt.setAttribute("onclick","selectedOption(this)");
    }
}

UI.prototype.soruSirasi = function(soruNumarasi,toplamSoru){
    let tag = `${soruNumarasi} / ${toplamSoru}`;
    this.quizInfo.textContent = tag;
}

UI.prototype.skoruGoster = function(dogruCevapSayisi,toplamSoru){
    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevapSayisi} doğru cevap verdiniz.`;
    this.scoreText.textContent = tag;
}