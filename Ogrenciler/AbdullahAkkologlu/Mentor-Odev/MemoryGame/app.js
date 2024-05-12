const cards = document.getElementsByClassName("flip-card");
const cardInner = document.getElementsByClassName("flip-card-inner");
const container = document.querySelector(".container");
let firstCard;
let secondCard;
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    cardInner[i].classList.add("flipClass");
    if (document.querySelectorAll(".flipClass").length > 1) {
      if (document.querySelectorAll(".flipClass").length === 2) {
        container.style.pointerEvents = "none";
      }
      const firstCard = document.querySelectorAll(".flipClass")[0];
      const secondCard = document.querySelectorAll(".flipClass")[1];
      if (firstCard.dataset.minion === secondCard.dataset.minion) {
        firstCard.classList.add("match");
        secondCard.classList.add("match");
        firstCard.classList.remove("flipClass");
        secondCard.classList.remove("flipClass");
        container.style.pointerEvents = "auto";
        return;
      }
      setTimeout(() => {
        firstCard.classList.remove("flipClass");
        document;
        secondCard.classList.remove("flipClass");
        container.style.pointerEvents = "auto";
      }, 1500);
    }
  });
}
