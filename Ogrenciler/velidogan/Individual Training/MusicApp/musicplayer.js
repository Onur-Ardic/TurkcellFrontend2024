class MusicPlayer{
    constructor(musiclist){
        this.musiclist = musiclist;
        this.index = 0;
    }

    getMusic(){
        return this.musiclist[this.index];
    }

    next(){
        if(this.index + 1 < this.musiclist.length){
            this.index++;
        }else{
            this.index = 0;
        }
    }

    prev(){
        if(this.index != 0){
            this.index--;
        }else{
            this.index = this.musiclist.length - 1;
        }
    }
}