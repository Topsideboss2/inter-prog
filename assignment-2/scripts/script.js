// Get the necessary DOM elements
const todoInput = document.getElementById('todo');
const todoForm = document.querySelector('form');
const todoList = document.getElementById('todo_list');

// Function to add a new todo item
function addTodoItem(event) {
    event.preventDefault(); // Prevent form submission

    const todoText = todoInput.value.trim(); // Get the todo text

    if (todoText !== '') {
        const todoItem = document.createElement('li'); // Create a new list item
        todoItem.textContent = todoText; // Set the text content of the list item

        todoList.appendChild(todoItem); // Add the list item to the todo list

        todoInput.value = ''; // Clear the input field
    }
}

// Event listener for form submission
todoForm.addEventListener('submit', addTodoItem);