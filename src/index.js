document.addEventListener("DOMContentLoaded", () => {
  
  let taskForm = document.querySelector('#create-task-form')
  let taskFormSubmit = document.querySelector('#submit-button-1')
  let taskListUl = document.querySelector("#tasks")


  // taskForm.addEventListener("submit", function(event){
  //   event.preventDefault()
  //   // console.log(event, 'this logs event')
  //   // console.log(event.target, 'this logs event.target')
  //   // console.log(event.target["new-task-description"], 'this logs event.target["new-task-description"]')
  //   // console.log(event.target["new-task-description"].value, 'this logs event.target["new-task-description"].value')
  //   let theForm = event.target
  //   let userTask = theForm["new-task-description"].value
  //   let newTaskli = document.createElement("li")
  //   newTaskli.innerText = userTask
  //   taskListUl.append(newTaskli)

  //   });

  taskFormSubmit.addEventListener("click", (event) => {
    event.preventDefault()
    
  })

  // delegation example
  // taskListUl.addEventListener("click", (event) => {
  //   // prevent the listener from firing on the UL
  //   // only listen for clicks on an LI
  //   // on click, remove that

  //   let randomVar = quer
  // })
    
  taskFormSubmit.addEventListener("mouseover", function(event){
    // console.log(event)
    // console.log(event.target.parentElement)

// e.g. red for high priority, yellow for medium, green for low)

    let theForm = event.target.parentElement
    let userTask = theForm["new-task-description"].value
    let newTaskli = document.createElement("li")
    newTaskli.innerText = userTask
    // if user picks the high priotity
    // console.log(event.target.parentElement["priority-select"].value)
    if (event.target.parentElement["priority-select"].value === 'High'){
      newTaskli.style.color = 'red';
      newTaskli.classList.add('high');
    }
    else if (event.target.parentElement["priority-select"].value === 'Medium'){
      newTaskli.style.color = 'yellow';
      newTaskli.classList.add('medium');
    }
    else if (event.target.parentElement["priority-select"].value === 'Low'){
      newTaskli.style.color = 'green';
      newTaskli.classList.add('low');
    }
    // document.querySelector('li').style.color = 'blue'
    taskListUl.append(newTaskli) // fix this after colorizing

    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete this LI'
    newTaskli.append(deleteButton)  // fix this after colorizing

    deleteButton.addEventListener("click", (event) => {
      // console.log(event)
      event.target.parentElement.remove()
      // newTaskli.remove()
    })

    // 🏆we want to create a button on the LI 
      // 🏆get paper -- create a button  -- on line 37
      // 🏆razzmatazz -- give the button a name/label/whatever --- on line 38
      // 🏆slap it on the DOM -- attach it to the LI-- on line 39
    // 🏆 when pressed, the button will delete the LI 
      // 🏆add event listener to the button
      // 🏆when pressed, it deletes the LI

    });
    
    
    

  // let theInputElement = theForm["emoji"]
  // console.log(event.target["emoji"].value)
  // let theActualEmoji = theInputElement.value

  // 👍 need to listen for a submit event on the taskForm

  // 👍 prevent that event from performing its default behavior (submitting the form)

  // 👍 update the DOM using JavaScript

  // eg: 
  // document.getElementById("myAnchor").addEventListener("click", function(event){
  //   event.preventDefault()
  // });

  // 🌮 add a button to delete the list items
  // 🌮 html for a button:
  // 🌮 <button type="button">Click Me!</button>

  // 🍕 A priority value selected from a dropdown 
  // that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)

    // get paper 
    // razzmatazz
    // slap it on the DOM
  
  // As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority

});
