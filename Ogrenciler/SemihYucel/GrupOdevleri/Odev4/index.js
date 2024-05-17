const navbar = document.getElementById("navbar")

window.onscroll = function () {
    if (this.scrollY > 70 && this.scrollY < 170) {
        navbar.classList.add("visibility-hidden")
    }
    else {
        navbar.classList.remove("visibility-hidden")
    }
}