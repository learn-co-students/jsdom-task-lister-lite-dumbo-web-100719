document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let toDoList = document.querySelector("#tasks")

  let submitForm = document.getElementById("create-task-form")


  submitForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let theForm = event.target
    let theInputElement = theForm["new-task-description"]
    let theActualInput = theInputElement.value

    let newTask = document.createElement('li') 
    newTask.innerText = theActualInput

    toDoList.append(newTask)

    toDoList.addEventListener("click", (event) => {
      event.target.tagName === "LI"
      event.target.remove()
     })

     



    
  });





});
