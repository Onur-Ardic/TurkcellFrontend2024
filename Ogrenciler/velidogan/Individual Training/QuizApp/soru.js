function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return this.dogruCevap === cevap;
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?",{"a": "Node.js","b": "Typescript","c": "Npm","d": "Nuget"},"c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilmez?",{"a": "CSS","b": "HTML","c": "Javascript","d": "Sql"},"d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir?",{"a": "Node.js","b": "Typescript","c": "Angular","d": "React"},"a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?",{"a": "React","b": "Angular","c": "Vue.js","d": "Asp.Net"},"d")
]