let form = document.querySelector("#create-task-form")

//Dropdown menu here:
let dropDown = document.createElement("select")
let redOption = document.createElement("option")
let yellowOption = document.createElement("option")
let greenOption = document.createElement("option")

dropDown.append(redOption, yellowOption, greenOption)
redOption.innerText = "red"
yellowOption.innerText = "yellow"
greenOption.innerText = "green"
// Not useful for now:
// redOption.value = "red"
// yellowOption.value = "yellow"
// greenOption.value = "green"

form.append(dropDown)



form.addEventListener("submit", (event) => {
    event.preventDefault()
    let taskLi = document.createElement("li")
    let taskContent = document.querySelector('#new-task-description')
    let taskUl = document.querySelector('#tasks')
    // set li inner text equal to user input inside of textfield
    taskLi.innerText = taskContent.value
    // set the color of the li to the selected user input on dropdown
    taskLi.style.color = dropDown.value
    
    // add the task to the to do list(ul)
    taskUl.append(taskLi)
    
    //Delete Button:
    let taskLiDeleteButton = document.createElement("button")
    taskLiDeleteButton.innerText = "X"
    taskLi.append(taskLiDeleteButton)
    
    taskLiDeleteButton.addEventListener("click", () => {
        taskLi.remove()
    })
    
})

