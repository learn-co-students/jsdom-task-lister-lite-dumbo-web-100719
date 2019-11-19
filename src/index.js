document.addEventListener("DOMContentLoaded", () => {
  let newTaskForm = document.querySelector("#create-task-form")
  newTaskForm.addEventListener("submit", addTask)
  let newTaskDescription = document.querySelector("#new-task-description")
  let todoListUl = document.querySelector("ul")
  let newTaskLi = document.createElement("li")

  
  


  function addTask(){
    event.preventDefault()  
    newTaskLi.innerText = newTaskDescription.value
    todoListUl.append(newTaskLi)
    let newButton = document.createElement("button")
    newButton.innerHTML = `<button id="delete">X</button>`
    newTaskLi.append(newButton)
    let button = document.getElementById("delete")
    button.addEventListener('click', deleteTask)
    function deleteTask(){
      newTaskLi.remove()
    }
  }

  


});
