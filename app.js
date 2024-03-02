// access input field
const input = document.querySelector('#todo-input');

// Listening to the click event from the "Add" button.
document.querySelector('#submit').addEventListener('click', () => {
  const inputData = input.value;

  // checking the input field is empty or not
  if (input.value.length == 0) {
    const todoMessage = document.querySelector('.todo-message');
    const messageTag = document.createElement('p');
    messageTag.innerText = 'Please Enter Todo';
    todoMessage.appendChild(messageTag);

    todoMessage.classList.add('show-todo-message');
    setTimeout(() => {
      todoMessage.classList.toggle('show-todo-message');
      messageTag.innerText = '';
    }, 2000);
    return;
  }

  input.value = '';

  // creating todo item element
  const todo_el = document.createElement('div');
  todo_el.classList.add('todo-item');

  const todo_text = document.createElement('p');
  todo_text.classList.add('text');
  todo_text.innerText = inputData;

  todo_text.addEventListener('click', () => {
    todo_text.classList.toggle('completed');
  });

  todo_el.appendChild(todo_text);

  const todo_actions_el = document.createElement('div');
  todo_actions_el.classList.add('action-items');

  // edit todo icon
  const todo_edit_el = document.createElement('i');
  todo_edit_el.classList.add('fa-solid');
  todo_edit_el.classList.add('fa-pen-to-square');
  todo_edit_el.classList.add('edit');

  // delete todo icon
  const todo_delete_el = document.createElement('i');
  todo_delete_el.classList.add('fa-solid');
  todo_delete_el.classList.add('fa-trash');

  todo_actions_el.appendChild(todo_edit_el);
  todo_actions_el.appendChild(todo_delete_el);

  todo_el.appendChild(todo_actions_el);
  // add the todo-item to lists
  document.querySelector('.todo-lists').appendChild(todo_el);

  // edit functionality
  todo_edit_el.addEventListener('click', (e) => {
    const selectedText =
      e.target.parentElement.previousElementSibling.innerHTML;
    input.value = selectedText;
    e.target.parentElement.parentElement.remove();
  });

  // delete functionality
  todo_delete_el.addEventListener('click', (e) => {
    if (confirm('Are you sure you want to delete this todo?')) {
      document.querySelector('.todo-lists').removeChild(todo_el);
      const todoMessage = document.querySelector('.todo-message');
      const messageTag = document.createElement('p');
      messageTag.innerText = 'Todo has been deleted';
      todoMessage.appendChild(messageTag);

      todoMessage.classList.add('show-todo-message');
      setTimeout(() => {
        todoMessage.classList.toggle('show-todo-message');
        messageTag.innerText = '';
      }, 2000);
    }
  });
});
