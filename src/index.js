document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  let taskBoard = document.getElementById('tasks')
  


  form.addEventListener('submit',function(e){
    let newTask = document.getElementById('new-task-description').value
    let taskLi = document.createElement('li')
    taskLi.innerText = newTask
    
    let liDeleteBtn = document.createElement('button')
    liDeleteBtn.innerText = "DELETE"
    liDeleteBtn.addEventListener('click',function(){
        this.parentNode.remove()
    })
    
    let liEditBtn = document.createElement('button')
    liEditBtn.innerText = "EDIT"
    liEditBtn.addEventListener('click',function(){ 
      
    })
    
    
    taskLi.append(liDeleteBtn)
    taskLi.append(liEditBtn)
    taskBoard.append(taskLi)
    
    e.preventDefault();
  });





















});
