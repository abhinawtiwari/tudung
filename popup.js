document.addEventListener('DOMContentLoaded', function() {
    // Retrieve tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Render tasks on the popup
    renderTasks();
    // Attach the keydown event handler to the input element
    const inputBox = document.getElementById('taskInput');
    inputBox.addEventListener('keydown', function(event) {
      // Check if the pressed key is Enter (keycode 13)
      if (event.keyCode === 13) {
        // Perform the desired action or call a function
        const task = inputBox.value.trim();
  
        if (task !== '') {
          tasks.push(task);
          localStorage.setItem('tasks', JSON.stringify(tasks));
          inputBox.value = '';
          renderTasks();
        }
      }
    });

    // Handle add task button click
    document.getElementById('addButton').addEventListener('click', function() {
      const input = document.getElementById('taskInput');
      const task = input.value.trim();
  
      if (task !== '') {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        input.value = '';
        renderTasks();
      }
    });
  
    // Handle delete task button click
    document.getElementById('taskList').addEventListener('click', function(event) {
      // console.log(event.target.classList);
      const parentElement = event.target.parentElement;
      // console.log('parentElement: ', event.target.parentElement);
      // console.log('parent classname: ', parentElement.className);
      if (parentElement.className === 'deleteIcon') {
        const index = parentElement.dataset.index;
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
      }
    });
  
    // Render tasks on the popup
    function renderTasks() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
  
      tasks.forEach(function(task, index) {
        const li = document.createElement('li');
        li.textContent = task;
        
        const deleteButton = document.createElement('span');
        // deleteButton.textContent = 'Delete';
        deleteButton.innerHTML = '<i class="fas fa-times"></i>'; // Add Font Awesome cross icon
        deleteButton.className = 'deleteIcon';
        deleteButton.dataset.index = index;
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
      });
    }
  });
  