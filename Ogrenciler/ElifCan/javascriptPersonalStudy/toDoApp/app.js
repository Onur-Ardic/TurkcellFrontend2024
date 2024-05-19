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
document
  .getElementById("inProgress-tasks")
  .addEventListener("click", showInProgress);

document.getElementById("done-tasks").addEventListener("click", showDone);

document.getElementById("all-tasks").addEventListener("click", showAll);

function showInProgress() {
  taskStorage.todoList.forEach((task) => {
    ui.DeleteTask(task.name);
    if (task.status == "InProgress") {
      ui.ShowTask(task.name);
    }
  });
}
function showAll() {
  taskStorage.todoList.forEach((task) => {
    ui.DeleteTask(task.name);
    ui.ShowTask(task.name);
  });
}

function showDone() {
  taskStorage.todoList.forEach((task) => {
    ui.DeleteTask(task.name);
    if (task.status == "done") {
      ui.ShowTask(task.name);
    }
  });
}

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
    progressBar();
  } else {
    ui.UpdateTask(task, taskStorage);
    progressBar();
  }
}

window.onload = function () {
  progressBar();
  taskStorage.todoList.forEach((task) => {
    ui.addTask(taskStorage, task);
  });
};
function progressBar() {
  let totalTasks = taskStorage.todoList.length;
  let doneTasks = taskStorage.todoList.filter(
    (task) => task.status === "done"
  ).length;
  let percentage = (doneTasks / totalTasks) * 100;
  let progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = `${percentage}%`;
  progressBar.textContent = `${percentage.toFixed(2)}% is done`;
}
