let value;

value = document;
value = document.URL;
value = document.title;
value = document.location;
value = document.location.hostname;
value = document.scripts[1];
value = document.links[document.links.length - 1].getAttribute("class");
value = document.links;
value = document.links[document.links.length - 1].classList;

// ID ile element seçme

// document.getElementById("title").innerHTML =
//   "<span>Javascript ile Web Geliştirme</span>";
// document.getElementById("title").textContent = "Javascript ile Web Geliştirme";
value = document.getElementById("title");
value = document.getElementById("title").textContent;
value = document.getElementById("title").innerText;
value = document.getElementById("title").innerHTML;

// Class ile element seçme
value = document.getElementsByClassName("text")[0];

// Tag ile element seçme
value = document.getElementsByTagName("p")[0];

// Query Selector ile element seçme
value = document.querySelector("#title");
value = document.querySelector(".text");
value = document.querySelectorAll(".text");
value = document.querySelectorAll("a");
// document.querySelectorAll("p:nth-child(even)").forEach((item) => {
//   item.style.border = "5px solid red";
// });

// Element Oluşturma
value = document.getElementById("testButton");

const button = document.createElement("a");
button.className = "btn btn-success";
button.id = "myButton";
button.href = "https://www.youtube.com/";
button.target = "_blank";
const text = document.createTextNode("Test Button");
button.appendChild(text);
value.appendChild(button);

value = document.getElementById("testButton");
value.addEventListener("click", testFonksiyon);

function testFonksiyon() {
  console.log("Test Button'a tıklandı");
}

const textInput = document.getElementById("text-input");
textInput.addEventListener("keyup", () => console.log(textInput.value));
textInput.addEventListener("focus", () => (textInput.value = ""));

console.log(value);
