function UI() {
  this.selectedPriority;
  this.selectedStatus;
  this.selectedTask = null;
  const priorityRadios = document.querySelectorAll(
    'input[name="taskPriority"]'
  );

  priorityRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      this.selectedPriority = this.value;
    });
  });

  const Status = document.getElementById("taskStatus");

  Status.addEventListener("change", function () {
    this.selectedStatus = this.value;
  });
}

UI.prototype.addTask = function (Storage, Task) {
  let properties = ["name", "explanation", "priority", "status"];

  let trElement = document.createElement("tr");
  trElement.id = Task.name;
  properties.forEach((property) => {
    let tdElement = document.createElement("td");
    tdElement.textContent = Task[property];
    trElement.appendChild(tdElement);
  });

  let tdElement = document.createElement("td");
  tdElement.innerHTML = `
    <i id="deleteTaskIcon" class="fa-solid fa-trash fa-inverse custom-icon"></i>
    <i id="updateTaskIcon" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="fa-regular fa-pen-to-square custom-icon"></i>
  `;

  let deleteIcon = tdElement.querySelector("#deleteTaskIcon");
  deleteIcon.addEventListener("click", () => {
    Storage.deleteTask(Task);
    this.DeleteTask(Task.name);
  });

  let updateIcon = tdElement.querySelector("#updateTaskIcon");
  updateIcon.addEventListener("click", () => {
    //Storage.updateTask(Task);
    this.FillModal(Task);
    this.selectedTask = Task;
  });

  //   let addButtonInsidetheModal = tdElement.querySelector("#updateTaskIcon");
  //   updateIcon.addEventListener("click", () => {
  //     //Storage.updateTask(Task);
  //     this.FillModal(Task);
  //   });

  trElement.appendChild(tdElement);
  document.getElementById("elif").appendChild(trElement);

  Storage.addTask(Task);
};

UI.prototype.DeleteTask = function (TaskId) {
  document.querySelector(`[id="${TaskId}"]`).style.display = "none";
};

UI.prototype.FillModal = function (Task) {
  document.getElementById("taskName").value = Task.name;
  document.getElementById("taskExp").value = Task.explanation;
  const statusSelect = document.getElementById("taskStatus");

  if (Task.status == "done") {
    statusSelect.selectedIndex = 3;
  } else if (Task.status == "InProgress") {
    statusSelect.selectedIndex = 2;
  } else if (Task.status == "created") {
    statusSelect.selectedIndex = 1;
  }

  const radioButtons = document.querySelectorAll('input[name="taskPriority"]');
  for (const radioButton of radioButtons) {
    if (radioButton.value == Task.priority) {
      radioButton.checked = true;
      break;
    }
  }
};

UI.prototype.UpdateTask = function (Task, taskStorage) {
  let taskRow = document.getElementById(this.selectedTask.name);
  taskRow.querySelector("td:first-child").textContent = Task.name;
  taskRow.querySelector("td:nth-child(2)").textContent = Task.explanation;
  taskRow.querySelector("td:nth-child(3)").textContent = Task.priority;
  taskRow.querySelector("td:nth-child(4)").textContent = Task.status;
  taskStorage.UpdateTask(Task, this.selectedTask);
};

UI.prototype.CreateTable = function () {
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
};

export { UI };
