document.addEventListener("DOMContentLoaded", () => {
	// your code here
	const form = document.querySelector("form");
	console.log("form: ", form);
	form.addEventListener("submit", handleSubmit);
});

// handles submit button
const handleSubmit = e => {
	e.preventDefault();
	const input = document.querySelector("#new-task-description");
	appendToList(input.value);
	e.target.reset();
};
let num = 1
const idCounter = () =>{
  num+=1
  let newNum = num
  return newNum
}

// appendToList
const appendToList = value => {
	let todoList = document.querySelector("#tasks");
  let list = document.createElement("li");
  list.setAttribute('id',idCounter())
	list.textContent = value;
	todoList.append(list);
	let button = document.createElement("button");
	button.setAttribute("type", "submit");
	button.className = "edit-btn";
	button.textContent = "Edit";
	list.append(button);
	list.addEventListener("click", () => {
		if (list.tagName === "LI") {
			list.remove();
		}
  });
  button.addEventListener("click", e => {

    console.log('e: ', e)
    e.stopPropagation();
    let newForm = document.createElement("form");
    newForm.setAttribute("method", "post");
    let newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute('id', newInput.name)
    newInput.setAttribute("placeholder", "description");
    let inputSubmit = document.createElement("input");
    inputSubmit.setAttribute("type", "submit");
    inputSubmit.setAttribute("value", "Create New Task");
    newForm.append(newInput, inputSubmit);

    let body = document.querySelector("body");
    body.append(newForm);

    newForm.addEventListener("submit", evt => {
      evt.preventDefault();
      console.log('evt: ', evt)
      debugger
      console.log("evt: ", evt.path.forEach(item =>{
        if (item === 'li#2'){
        item.textContent = newInput.value
        todoList.append(item);
        }
      }))
      // list.textContent = newInput.value
      list.textContent = newInput.value
      list.append(button)
      newForm.remove()
    });
  });
	
};
