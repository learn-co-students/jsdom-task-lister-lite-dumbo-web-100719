document.addEventListener("DOMContentLoaded", () => {
  let newTaskForm = document.querySelector("#create-task-form")
  newTaskForm.addEventListener("submit", addTask)
  let newTaskDescription = document.querySelector("#new-task-description")

  function addTask(){
    event.preventDefault()
    let todoListUl = document.querySelector("ul")
    let newTaskLi = document.createElement("li")
    newTaskLi.innerText = newTaskDescription.value
    todoListUl.append(newTaskLi)
  }
});
