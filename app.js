// selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// event listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck) // delete items in the list

// functions
function addTodo (event) {
    event.preventDefault() // prevents form from submitting
    // create div w class todo first
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // create li
    const newToDo = document.createElement('li')
    // value inside li
    newToDo.textContent = todoInput.value // captures value typed in input of the form
    // add classlist to li
    newToDo.classList.add('todo-item')
    // append it to div
    todoDiv.appendChild(newToDo)
    console.log(todoDiv)
    // create check mark button
    const completeButton = document.createElement('button')
    completeButton.innerHTML = '<i class="fas fa-check"></i>'
    completeButton.classList.add('completed-btn')
    todoDiv.appendChild(completeButton)
    // create delete button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    // append  div to ul
    todoList.appendChild(todoDiv)   
    // clear todoInput value in form
    todoInput.value = ""

}

function deleteCheck (e) {
    const item = e.target
// delete todo
if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement
    //animation
    todo.classList.add('fall')
    todo.addEventListener('transitionend', function(){ //waits till transition finishes and removes element after
        todo.remove()   
     })
}
// check mark to mark task as completed
if (item.classList[0] === 'completed-btn') {
    const todo = item.parentElement
    todo.classList.toggle('completed')
}
}