document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
});
​
let submitButton = document.querySelector("input[type='submit']")
​
submitButton.addEventListener("click", function(event){
 
  event.preventDefault();
  let inputText = document.querySelector("#new-task-description")
  debugger
​
  // create new li and update with content
  
  let newTaskLi = document.createElement("li")
  newTaskLi.innerText = inputText.value
​
  // create delete button on li tag and add the "x" content
  let newTaskLiButton = document.createElement("button")
  newTaskLiButton.id = "delete-button"
  newTaskLiButton.innerText = "x"
  newTaskLi.append(newTaskLiButton)
​
  // find place on the DOM i.e. ul and then appending new li including content
  let taskListUl = document.querySelector("#tasks")
  taskListUl.append(newTaskLi)
​
  //function to delete task
  newTaskLiButton.addEventListener("click", function(li){
    newTaskLi.remove()
  })
​
})