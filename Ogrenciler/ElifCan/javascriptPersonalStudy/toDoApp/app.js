const toDoList = JSON.parse(localStorage.getItem("movieNameList")) || [];
const addButton = document.getElementById("addButton");

let task = {
  TaskName: "task1",
  Explanation: "this is task1",
  Priority: 2,
  Status: "In Progress",
  Action: "",
};
toDoList.push(task);

createTable();
addButton.addEventListener("click", addTask);

function a() {
  const taskName = document.getElementById("taskName");
  const taskExp = document.getElementById("taskExp");
}

function addTask() {
  event.preventDefault();
  let trElement = document.createElement("tr");
  toDoList.forEach((item) => {
    Object.keys(item).forEach((key) => {
      let tdElement = document.createElement("td");
      let tdText = document.createTextNode(item[key]);
      tdElement.appendChild(tdText);
      trElement.appendChild(tdElement);
    });
  });
  document.getElementById("elif").appendChild(trElement);
}

function createTable() {
  let table = document.createElement("table");
  table.classList.add("table");
  table.id = "elif";
  table.classList.add("table-striped");
  let trHeader = document.createElement("tr");

  let headers = ["Task Name", "Explanation", "Priority", "Status", "Action"];

  headers.forEach((headerText) => {
    let thElement = document.createElement("th");
    let thText = document.createTextNode(headerText);
    thElement.appendChild(thText);
    trHeader.appendChild(thElement);
  });
  table.appendChild(trHeader);

  document.getElementById("table-container").appendChild(table);
}
