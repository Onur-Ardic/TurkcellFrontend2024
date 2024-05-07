const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const age = document.querySelector("#age");
const city = document.querySelector("#city");
const btn = document.querySelector(".saveBtn");

let userInfo = [(ad = ""), (soyad = "")];

btn.addEventListener("click", save());
const save = () => {
  userInfo.ad.push(name.value);
};

console.log(userInfo);
