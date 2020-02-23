document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();
  
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.textContent = newTaskDescription.value;
  const newTaskUl = document.getElementById("tasks");
  
  const deleteButton = document.createElement("button")
  deleteButton.className = "delete"
  deleteButton.textContent = "X"
  newTask.append(deleteButton)

deleteButton.addEventListener( "click", () => {
  newTask.remove()
})

const editButton = document.createElement("button")
editButton.className = "edit"
editButton.textContent = "edit"
newTask.append(editButton)

editButton.addEventListener( "click", () => {
  newTask.textContent= newTaskDescription.value
  editD = newTask.textContent
    
    const deleteButton = document.createElement("button")
    deleteButton.className = "delete"
    deleteButton.textContent = "X"
  
    editD.append(deleteButton)
  
  deleteButton.addEventListener( "click", () => {
    editD.remove()
  })
})

  newTaskUl.append(newTask)
  // event.target.reset();
};



