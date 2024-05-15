import { Storage } from "./storage.js";
import { Task } from "./task.js";
import { UI } from "./ui.js";
// const toDoList = JSON.parse(localStorage.getItem("taskList")) || [];
const submitTask = document.getElementById("addButtonInsideModal");
// const addTaskButton = document.getElementById("addButton");
// let selectedPriority;
// let selectedStatus;
const modalElement = document.getElementById("staticBackdrop");

modalElement.addEventListener("hidden.bs.modal", function () {
  ui.selectedTask = null;
});

document
  .getElementById("staticBackdrop")
  .addEventListener("show.bs.modal", () => {
    if (ui.selectedTask == null) {
      document.getElementById("staticBackdropLabel").textContent = "Add Task";
      const inputFields = document
        .getElementById("modal-form")
        .querySelectorAll('input[type="text"]');
      inputFields.forEach((input) => (input.value = ""));

      const radioButtons = document.querySelectorAll('input[type="radio"]');
      radioButtons.forEach((radio) => (radio.checked = false));

      const statusDropdown = document.getElementById("taskStatus");
      statusDropdown.selectedIndex = 0;
    }
  });
const taskStorage = new Storage();
const ui = new UI();
submitTask.addEventListener("click", addTask);

ui.CreateTable();

let selectedPriority;
let selectedStatus;

const priorityRadios = document.querySelectorAll('input[name="taskPriority"]');

priorityRadios.forEach((radio) => {
  radio.addEventListener("change", function () {
    selectedPriority = this.value;
  });
});

const Status = document.getElementById("taskStatus");

Status.addEventListener("change", function () {
  selectedStatus = this.value;
});

function addTask() {
  event.preventDefault();
  const task = new Task(
    document.getElementById("taskName").value.trim(),
    document.getElementById("taskExp").value.trim(),
    selectedPriority,
    selectedStatus
  );
  if (ui.selectedTask == null) {
    //taskStorage.addTask(task);
    ui.addTask(taskStorage, task);
  } else {
    ui.UpdateTask(task, taskStorage);
    //storage'a da göndereceğiz...
  }
}

window.onload = function () {
  taskStorage.todoList.forEach((task) => {
    ui.addTask(taskStorage, task);
  });
};

// function createTable() {
//   let table = document.createElement("table");
//   table.classList.add("table");
//   table.id = "elif";
//   table.classList.add("table-striped");
//   let trHeader = document.createElement("tr");

//   let headers = ["Task Name", "Explanation", "Priority", "Status", "Action"];

//   headers.forEach((headerText) => {
//     let thElement = document.createElement("th");
//     let thText = document.createTextNode(headerText);
//     thElement.appendChild(thText);
//     trHeader.appendChild(thElement);
//   });
//   table.appendChild(trHeader);

//   document.getElementById("table-container").appendChild(table);
// }

// const priorityRadios = document.querySelectorAll('input[name="taskPriority"]');
// //tüm radiobutonları seçtim

// // Her bir radio düğmesine bir olay dinleyici ekledim
// priorityRadios.forEach((radio) => {
//   radio.addEventListener("change", function () {
//     selectedPriority = this.value;
//     console.log("Seçili öncelik:", selectedPriority);
//   });
// });

// const selectStatus = document.getElementById("taskStatus");

// // Seçim listesine bir olay dinleyici ekleyin
// selectStatus.addEventListener("change", function () {
//   // Seçilen seçeneğin değerini alın
//   selectedStatus = this.value;
//   console.log("Seçili durum:", selectedStatus);
// });
