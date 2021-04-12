// Elements (Selectors)
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')
// End Elements (Selectors)
// ----------------------------------------------
// Events
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)
// End Events
// ----------------------------------------------
// Functions
function addTodo(event) 
{
    event.preventDefault();
    // Create <li> element for todos
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    // add todo to localstorage
    saveLocalTodos(todoInput.value)

    todoDiv.appendChild(newTodo);
    // Mark Button To Add Things
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // Trash Button To Delete Things
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // Append it to the list
    todoList.appendChild(todoDiv);

    // Clear todo input value
    todoInput.value = "";
}

function deleteCheck(e)
{
    const item = e.target;
    // Delete TODO
    if(item.classList[0] === 'trash-btn')
    {
        const todo = item.parentElement;
        todo.classList.add('fall');
        removeLocalTodos(todo);
        //todo.remove();
        todo.addEventListener('transitionend', function()
        {
            todo.remove();
        });
    }

    // Check Mark
    if(item.classList[0] === 'complete-btn')
    {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    };
};


function filterTodo(e)
{
    const todos = todoList.childNodes;
    todos.forEach(function(todo)
    {

        switch (e.target.value)
        {
            case 'all':
                todo.style.display = 'flex';
            break;

            case 'completed':
                if(todo.classList.contains('completed'))
                {
                    todo.style.display = 'flex';
                } else {todo.style.display = 'none';}
            break;

            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else {todo.style.display = 'none';}
            break;

        };
    });
};


// Save your todos
function saveLocalTodos(todo)
{   
    // check if you have the same todo 

    let todos;
    if(localStorage.getItem('todos') === null)
    {
        todos = [];
    } else {todos = JSON.parse(localStorage.getItem('todos'));}

    // push it to the localstorage
    todos.push(todo);
    localStorage.setItem('todos', 
    JSON.stringify(todos));
};


function getTodos()
{
    let todos;
    if(localStorage.getItem('todos') === null)
    {
        todos = [];
    } else {todos = JSON.parse(localStorage.getItem('todos'));}

    // push it to the localstorage
    todos.push(todo);
    localStorage.setItem('todos', 
    JSON.stringify(todos));

    todos.forEach(function(todo)
    {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
    
        const newTodo = document.createElement('li');
        newTodo.innerHTML = todo;
        newTodo.classList.add('todo-item');

        todoDiv.appendChild(newTodo);
        // Mark Button To Add Things
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);
        // Trash Button To Delete Things
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
    
        // Append it to the list
        todoList.appendChild(todoDiv);
    
    });
};

function removeLocalTodos(todos)
{
    let todos;
    if(localStorage.getItem('todos') === null)
    {
        todos = [];
    } else {todos = JSON.parse(localStorage.getItem('todos'));}

    // push it to the localstorage
    todos.push(todo);
    localStorage.setItem('todos', 
    JSON.stringify(todos));
    
  //  console.log(todo.children[0].innetText);

  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}
// ----------------------------------------------
// End Functions
