document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let button = document.querySelector('input#sub-button');
  let textBox = document.querySelector('input#new-task-description');
  let tasks = document.querySelector('ul#tasks');
  // let newTask = document.createElement("li");
  // let bTag = document.createElement("br")
  
  // textBox.addEventListener('keypress', checkText);
  // function checkText(event) {
  //   return event.charCode
  // }

  button.addEventListener('click', function(event) {
    event.preventDefault(), false
  });

  button.addEventListener('click', function(){
    let newTask = document.createElement("li");
    newTask.innerText = `${textBox.value}`;
    // tasks.append(newTask);
    if (!(newTask.innerText === " ")) {
    tasks.append(newTask);
    // createDeleteButton();
    }
  
    document.querySelector('input#new-task-description').value = " ";
    // could not use textBox here because the value before this event is empty. Order matters, make sure you grab it
    // after the task is created within the actual function
  });

  
  
});

// function createDeleteButton() {
//   let former = document.createElement("form")
//   let inputter = document.createElement("input")

//   former.append(inputter.innerText = "clickable")
//   tasks.append(former);
// }
