// DOM Elements
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

// Load todos from localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Render todos
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between p-3 bg-gray-50 rounded-lg';
        
        const todoContent = document.createElement('div');
        todoContent.className = 'flex items-center gap-3';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'w-5 h-5 text-blue-500';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleTodo(index));
        
        const span = document.createElement('span');
        span.className = todo.completed ? 'line-through text-gray-500' : 'text-gray-800';
        span.textContent = todo.text;
        
        todoContent.appendChild(checkbox);
        todoContent.appendChild(span);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'text-red-500 hover:text-red-700';
        deleteBtn.innerHTML = '&times;';
        deleteBtn.addEventListener('click', () => deleteTodo(index));
        
        li.appendChild(todoContent);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
    
    // Save to localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Add new todo
function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
        todos.push({ text, completed: false });
        todoInput.value = '';
        renderTodos();
    }
}

// Toggle todo completion
function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

// Delete todo
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Event Listeners
addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Initial render
renderTodos(); 