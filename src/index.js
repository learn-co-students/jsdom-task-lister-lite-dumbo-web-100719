

document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form")
  taskForm.addEventListener("submit", newTask)
});

let 

const newTask = event => {
  event.preventDefault();
  const findNewTask = document.getElementById("new-task-description");
  const createNewTask = document.createElement("li");
  createNewTask.innerText = findNewTask.value;
  appendNewTask(createNewTask);
  event.target.reset();

};

const appendNewTask = task => {
  document.getElementById("tasks").append(task)
}

