document.addEventListener("DOMContentLoaded", () => {
  
});

// this is where the task (UL) is going to show
let taskList = document.getElementById('tasks')
let taskColor = document.getElementById('priorityList')

// grab the whole form so we have access to everything inside of it
let taskListForm = document.getElementById('create-task-form')

taskListForm.addEventListener("submit", (event) => {
  // this prevent the form from submitting and reloading at same URL
  event.preventDefault();
  // this grabs the value in the text box we entering for task description
  // and assigns it to a variable
  let taskItem = event.target['new-task-description'].value
  let taskColor = event.target.priorityList.value

  if(taskItem.trim() === "" || taskItem === null){
    alert("Please enter task description")
  }
  else{
     // this add the variable above to the UL as an IL 
    // by calling the function and passing the taskItem as an arg

    addTaskToList(taskItem,taskColor)
    // clears out the textbox after insert
    event.target['new-task-description'].value = ''
    event.target.priorityList.value = 'red'
  }
 
})



function addTaskToList(task,textColor){
  // this creates an LI element
  let newTaskLi = document.createElement("LI")
  let newDeleteButton = document.createElement("BUTTON")
  let newEditButton = document.createElement("BUTTON")
  // assigns arg(task) to the new LI element's innerText 
  newDeleteButton.innerText = "Delete"
  newEditButton.innerText = "Edit"
  // newTaskLi.innerText = task + newDeleteButton
  newTaskLi.innerText = task
  newTaskLi.style.color = textColor
  // newTaskLi.name = task
  // newTaskLi.style.display = ""
  
  // then appends(adds to the end) the new LI to the UL
  newTaskLi.append(newDeleteButton,newEditButton)
  taskList.append(newTaskLi)
  // adds event listener to the new LI
  // this will delete the task when you click on the text
  // newTaskLi.addEventListener("click",() => {
  //   newTaskLi.remove()
    
  // })
  newDeleteButton.addEventListener("click",() => {
  newTaskLi.remove()
  })  

  newEditButton.addEventListener("click",() => {
    let taskText = newTaskLi.textContent.split('DeleteEdit')[0]

    newDeleteButton.remove()
    newEditButton.remove()
  
    let newSaveButton = document.createElement("BUTTON")
    let newCancelButton = document.createElement("BUTTON")
    let newEditTextBox = document.createElement("INPUT")
    // newEditTextBox.value = taskText
    newEditTextBox.placeholder = taskText

    newSaveButton.innerText = "Save"
    newCancelButton.innerText = "Cancel"
    newTaskLi.prepend(newSaveButton,newCancelButton)
    taskList.prepend(newEditTextBox)

    newSaveButton.addEventListener("click",() => {
    
      newTaskLi.innerText =  newEditTextBox.value

      newTaskLi.append(newDeleteButton,newEditButton)
      newSaveButton.remove()
      newCancelButton.remove()
      newEditTextBox.remove()
    })

    newCancelButton.addEventListener("click",() => {

      newTaskLi.append(newDeleteButton,newEditButton)
      newSaveButton.remove()
      newCancelButton.remove()
      newEditTextBox.remove()
    })

  })

}