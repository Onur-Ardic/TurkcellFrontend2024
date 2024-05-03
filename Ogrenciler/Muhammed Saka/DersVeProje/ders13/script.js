function bilgiGoster() {
    var ad = document.getElementById("ad").value;
    var soyad = document.getElementById("soyad").value;
    var yas = document.getElementById("yas").value;
    var memleket = document.getElementById("memleket").value;

    var bilgiMetni = "Ad: " + ad + "<br>" +
                     "Soyad: " + soyad + "<br>" +
                     "Yaş: " + yas + "<br>" +
                     "Memleket: " + memleket;

    document.getElementById("bilgiGosterim").innerHTML = bilgiMetni;
}
