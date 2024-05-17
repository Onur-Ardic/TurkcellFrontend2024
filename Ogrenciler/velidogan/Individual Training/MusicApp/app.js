const container = document.querySelector(".container");
const musicImage = document.getElementById("music_image");
const musicAudio = document.getElementById("music_audio");
const musicTitle = document.querySelector("#music_title");
const musicSinger = document.getElementById("music_singer");
const progressBar = document.getElementById("progress_bar");
const currentTime = document.getElementById("current_time");
const duration = document.getElementById("duration");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const volumeIcon = document.getElementById("volume_icon");
const volumeBar = document.getElementById("volume_bar");
const music_list = document.querySelector("#music_list");

const player = new MusicPlayer(musiclist);

window.addEventListener("load",() => {
    displayMusic(player.getMusic());
    musicList(player.musiclist);
    musicPlayingNow();
})

const displayMusic = (music) => {
    musicTitle.textContent = music.getName();
    musicSinger.textContent = music.singer;
    musicImage.src = "img/" + music.img;
    musicAudio.src = "mp3/" + music.file;
}

play.addEventListener("click",() => {
    let isMusicPlaying = container.classList.contains("playing");
    isMusicPlaying ? pauseMusic():playMusic();
})

const pauseMusic = () => {
    container.classList.remove("playing");
    play.querySelector("i").className = "fa-solid fa-play fa-xl";
    musicAudio.pause();
}

const playMusic = () => {
    container.classList.add("playing");
    play.querySelector("i").className = "fa-solid fa-pause fa-xl";
    musicAudio.play();
}

prev.addEventListener("click",() => {
    player.prev();
    displayMusic(player.getMusic());
    playMusic();
    musicPlayingNow();
})

next.addEventListener("click",() => {
    player.next();
    displayMusic(player.getMusic());
    playMusic();
    musicPlayingNow();
})

const calculateTime = (time) => {
    let minute = Math.floor(time / 60); 
    let second = Math.floor(time % 60);
    let updatedSecond = second < 10 ? `0${second}`: `${second}`;
    return `${minute}:${updatedSecond}`;
}

musicAudio.addEventListener("loadedmetadata",() => {
    duration.textContent = calculateTime(musicAudio.duration);
    progressBar.max = Math.floor(musicAudio.duration);
})

musicAudio.addEventListener("timeupdate",() => {
    progressBar.value = Math.floor(musicAudio.currentTime);
    currentTime.textContent = calculateTime(musicAudio.currentTime);
})

progressBar.addEventListener("input",(e) => {
    currentTime.textContent = calculateTime(e.target.value);
    musicAudio.currentTime = e.target.value;
})

let sesDurumu = "sesli";
volumeIcon.addEventListener("click",() => {
    if(sesDurumu == "sesli"){
        musicAudio.muted = true;
        volumeIcon.querySelector("i").className = `fa-solid fa-volume-xmark fa-sm`;
        sesDurumu = "sessiz";
        volumeBar.value = 0;
    }else{
        musicAudio.muted = false;
        volumeIcon.querySelector("i").className = `fa-solid fa-volume-high fa-sm`;
        sesDurumu = "sesli";
        volumeBar.value = sesSeviyesi;
    }
})

let sesSeviyesi;
volumeBar.addEventListener("click",(e) => {
    if(volumeBar.value == 0){
        musicAudio.volume = e.target.value;
        volumeIcon.querySelector("i").className = `fa-solid fa-volume-xmark fa-sm`;
    }else {
        volumeIcon.querySelector("i").className = `fa-solid fa-volume-high fa-sm`;
        musicAudio.volume = e.target.value / 100;
        sesSeviyesi = e.target.value;
    }
})

const musicList = (musiclist) => {
    for(let i in musiclist){
        let li = `
            <li li-index="${i}" onclick="selectedMusic(this)" class="list-group-item d-flex justify-content-between">
                <div class="fw-medium ">${musiclist[i].getName()}</div>
                <div id="music-${i}" class="badge bg-danger">00:00</div>
                <audio class="music-${i}" src="mp3/${musiclist[i].file}"></audio>
            </li> 
        `;
        music_list.querySelector("ul").insertAdjacentHTML("beforeend",li);

        let liAudioTag = document.querySelector(`.music-${i}`);
        let liAudioDuration = document.querySelector(`#music-${i}`);

        liAudioTag.addEventListener("loadeddata",() => {
            liAudioDuration.textContent = calculateTime(liAudioTag.duration);
        })        
    }
}

const selectedMusic = (music) => {
    let li = music.getAttribute("li-index");
    for(let i in player.musiclist){
        if(li == i){
            player.index = li;
            displayMusic(player.getMusic());
            playMusic();
            musicPlayingNow();
        }
    }
}

const musicPlayingNow = () => {    
    for(let li of music_list.querySelector("ul").children){
        li.classList.remove("active");

        if(li.getAttribute("li-index") == player.index){
            li.classList.add("active");
        }
    }
}

