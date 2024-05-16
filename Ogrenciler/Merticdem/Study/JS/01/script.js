const { Alert } = require("bootstrap");

console.log("Hello Worldsssss");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

// let votesInteresting = 23;
// let votesMindBlowing = 5;
// const text = "Lisbon is the capital of Portugal";

// votesInteresting = votesInteresting + 1;
// votesInteresting++;
// console.log(votesInteresting);

// let totalUpvotes = votesInteresting + votesMindBlowing;
// console.log("Upvotes: ", totalUpvotes);

// let votesFalse = 4;
// const isCorrect = votesFalse < totalUpvotes;
// console.log(isCorrect);

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - calcFactAge;
  return age;
}

const age1 = calcFactAge(2015);
console.log(age1);

let votesInteresting = 20;
let votesMindBlowing = 20;

if (votesInteresting === votesMindBlowing) {
  alert("this fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindBlowing) {
  console.log("Interesting fact! ");
}

// falsy values : 0, "" , null , undefined
// truthy  values : everything else..
