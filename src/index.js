
document.addEventListener("DOMContentLoaded", () => { 
  // your code here

  let theTaskList= document.getElementById("tasks");
  let taskForm= document.getElementById("create-task-form");


  taskForm.addEventListener("submit", event => {

    event.preventDefault();

     let theForm= event.target;
     let theInputElement= theForm["new-task-description"];
     let theActualTask= theInputElement.value;
     
     
     let newTaskLi= document.createElement("li");
      newTaskLi.innerText= theActualTask;
      theTaskList.append(newTaskLi);

    let deleteButton= document.createElement("button")
    deleteButton.innerText= "x"
    newTaskLi.append(deleteButton)

    let likeButton= document.createElement("button")
    likeButton.innerText= "like"
    newTaskLi.append(likeButton)

    let dislikeButton= document.createElement("button")
    dislikeButton.innerText= "dislike"
    newTaskLi.append(dislikeButton)

    dislikeButton.addEventListener("click", (event) => {
      alert("A little wary of doing this!")
    })

    likeButton.addEventListener("click", (event) => {
      alert("Liked!")
    })


    deleteButton.addEventListener("click", event => {
      newTaskLi.remove()


    })

  } )

})

