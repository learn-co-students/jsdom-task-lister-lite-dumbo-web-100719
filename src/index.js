let form = document.querySelector("#create-task-form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let taskLi = document.createElement("li")
    let taskContent = document.querySelector('#new-task-description')
    let taskUl = document.querySelector('#tasks')
    
    taskLi.innerText = taskContent.value
    taskUl.append(taskLi)

    let taskLiDeleteButton = document.createElement("button")
    taskLiDeleteButton.innerText = "X"
    taskLi.append(taskLiDeleteButton)

    taskLiDeleteButton.addEventListener("click", () => {
        taskLi.remove()
    })
})


