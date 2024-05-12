const cards = document.getElementsByClassName("flip-card");
const cardInner = document.getElementsByClassName("flip-card-inner");
const container = document.querySelector(".container");
const data = [
  {
    id: 1,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9c333af-5997-4d86-9014-5f10102462c2/d6ngs5k-0008c439-4001-4fac-9c4d-330f6e317267.png/v1/fit/w_500,h_620/minion_png_by_kathyvip_d6ngs5k-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjIwIiwicGF0aCI6IlwvZlwvYTljMzMzYWYtNTk5Ny00ZDg2LTkwMTQtNWYxMDEwMjQ2MmMyXC9kNm5nczVrLTAwMDhjNDM5LTQwMDEtNGZhYy05YzRkLTMzMGY2ZTMxNzI2Ny5wbmciLCJ3aWR0aCI6Ijw9NTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ASXVnS-miWTRT-2hHrg_Gna9gJI4bzyeGASl2oBLpAo",
  },
  {
    id: 2,
    img: "https://pngimg.com/d/minions_PNG31.png",
  },
  {
    id: 3,
    img: "https://www.pngall.com/wp-content/uploads/9/Despicable-Me-Minion-PNG.png",
  },
  {
    id: 4,
    img: "https://pngimg.com/d/minions_PNG10.png",
  },
  {
    id: 5,
    img: "https://www.pngkey.com/png/full/74-745156_convert-to-base64-minion-luau-hawaii-minion.png",
  },
  {
    id: 6,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c37949a-e529-439e-ae60-a175bdb1a52c/dgkiyw8-08fffeab-1548-4665-8e69-fb8ae89d4d60.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZjMzc5NDlhLWU1MjktNDM5ZS1hZTYwLWExNzViZGIxYTUyY1wvZGdraXl3OC0wOGZmZmVhYi0xNTQ4LTQ2NjUtOGU2OS1mYjhhZTg5ZDRkNjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pCpvGGmTJEUYi21koG-V9Kk9I4CChCkCh8WvyVy2rF4",
  },
  {
    id: 7,
    img: "https://parspng.com/wp-content/uploads/2024/03/Minionpng.parspng.com-2.png",
  },
  {
    id: 8,
    img: "https://parspng.com/wp-content/uploads/2024/03/Minionpng.parspng.com-17-300x300.png",
  },
];
const shuffledIndices = [...Array(data.length * 2).keys()].sort(
  () => Math.random() - 0.5
);
for (let i = 0; i < shuffledIndices.length; i++) {
  const shuffleIndex = shuffledIndices[i];
  const currentData = data[shuffleIndex % data.length];
  const flipCardElement = document.createElement("button");
  flipCardElement.classList.add("flip-card");
  const flipCardInnerElement = document.createElement("div");
  flipCardInnerElement.dataset.minion = currentData.id;
  flipCardInnerElement.classList.add("flip-card-inner");
  const flipCardFront = document.createElement("div");
  flipCardFront.classList.add("flip-card-front");
  const frontImage = document.createElement("img");
  frontImage.src =
    "https://cdn.freelogovectors.net/wp-content/uploads/2023/04/minions-logo-freelogovectors.net_.png";
  const flipCardBack = document.createElement("div");
  flipCardBack.classList.add("flip-card-back");
  const backImage = document.createElement("img");
  backImage.src = currentData.img;
  flipCardElement.appendChild(flipCardInnerElement);
  flipCardInnerElement.appendChild(flipCardFront);
  flipCardInnerElement.appendChild(flipCardBack);
  flipCardFront.appendChild(frontImage);
  flipCardBack.appendChild(backImage);
  container.appendChild(flipCardElement);
}
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
