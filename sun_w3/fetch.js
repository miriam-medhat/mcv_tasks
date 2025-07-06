let container = document.getElementById('todo-container');

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    let first20 = data.slice(0, 20);

    first20.forEach(todo => {
      let todoDiv = document.createElement('div');
      todoDiv.classList.add('todo');

      let title = document.createElement('span');
      title.textContent = todo.title;

      let status = document.createElement('span');
      if (todo.completed) {
        status.textContent = 'Completed';
        status.classList.add('completed');
      } 
      else {
        status.textContent = 'Not Completed';
        status.classList.add('not-completed');
      }

      todoDiv.appendChild(title);
      todoDiv.appendChild(status);
      container.appendChild(todoDiv);
    });
  })
