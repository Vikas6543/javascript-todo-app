// Access input field
const input = document.querySelector('.text-input');

// Function to display a todo message
function showTodoMessage(message) {
  const todoMessage = document.querySelector('.todo-message');
  const messageTag = document.createElement('p');
  messageTag.innerText = message;
  todoMessage.appendChild(messageTag);

  // Show message for 2 seconds
  todoMessage.classList.add('show-todo-message');
  setTimeout(() => {
    todoMessage.classList.toggle('show-todo-message');
    messageTag.innerText = '';
  }, 2000);
}

// Function to add a new todo item
function addTodo() {
  // Get the input value
  const inputData = input.value;

  // Check if the input field is empty
  if (inputData.length === 0) {
    showTodoMessage('Please Enter Todo');
    return;
  }

  // Clear the input field
  input.value = '';

  // Create todo item element
  const todo_element = document.createElement('div');
  todo_element.classList.add('todo-item');

  // Create todo title element
  const todo_title = document.createElement('p');
  todo_title.classList.add('todo-title');
  todo_title.innerText = inputData;

  // Toggle completion when todo title is clicked
  todo_title.addEventListener('click', () => {
    todo_title.classList.toggle('completed');
  });

  // Append todo title to todo item
  todo_element.appendChild(todo_title);

  // Create container for edit and delete icons
  const todo_actions_element = document.createElement('div');
  todo_actions_element.classList.add('action-items');

  // Create edit todo icon
  const todo_edit_element = document.createElement('i');
  todo_edit_element.classList.add('fa-solid');
  todo_edit_element.classList.add('fa-pen-to-square');
  todo_edit_element.classList.add('edit');

  // Create delete todo icon
  const todo_delete_element = document.createElement('i');
  todo_delete_element.classList.add('fa-solid');
  todo_delete_element.classList.add('fa-trash');

  // Append edit and delete icons to the container
  todo_actions_element.appendChild(todo_edit_element);
  todo_actions_element.appendChild(todo_delete_element);

  // Append container to todo item
  todo_element.appendChild(todo_actions_element);

  // Add the todo-item to the todo list
  document.querySelector('.todo-lists').appendChild(todo_element);

  // Attach event listener for editing a todo
  todo_edit_element.addEventListener('click', editTodo);

  // Attach event listener for deleting a todo
  todo_delete_element.addEventListener('click', deleteTodo);
}

// Function to edit a todo item
function editTodo(e) {
  const selectedTodo = e.target.parentElement.previousElementSibling.innerText;

  // Set the input field value to the selected text
  input.value = selectedTodo;

  e.target.parentElement.parentElement.remove();
}

// Function to delete a todo item
function deleteTodo(e) {
  if (confirm('Are you sure you want to delete this todo?')) {
    e.target.parentElement.parentElement.remove();
    showTodoMessage('Todo has been deleted');
  }
}

// Attach event listener for the Add button
document.querySelector('.submit-btn').addEventListener('click', addTodo);
