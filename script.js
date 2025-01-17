// ==== Todo CRUD Management ====

// Array  to store todos

let todos = [];

//DOM Elements

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-List');

// Function to render todos

function renderTodos() {
    todoList.innerHTML = ''; // clear the List
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
        <span>${todo}</span>
        <button onclick="editTodo(${index})">Edit</button>
        <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });


// Function to add new todo

function addTodo(event){
    event.preventDefault(); //Prevent form submission
    const newTodo = todoInput.value.trim();
    if (newTodo){
        todo.push(newTodo);
        todoInput.value = '', // Clear the Input
        renderTodos();
    }
}

// Function to edit a todo
function editTodo(index) {
    const updateTodo = prompt('Edit your todo', todos[index]);
    if(updateTodo !== null) {
        todos[index] = updateTodo.trim();
        renderTodos();
    }
}

// Function to delete  a todo
function deleteTodo(index) {
    if (confirm('Are you sure you want to delete this todo')){
        todos.splice(index, 1);
        renderTodos();
    }
}

// Event Listener
todoForm.addEventListener('submit', addTodo);

// Initial render
renderTodos();
}
