document.addEventListener('DOMContentLoaded', function() {
    // Retrieve tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Render tasks on the popup
    renderTasks();
  
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
      if (event.target.classList.contains('deleteButton')) {
        const index = event.target.dataset.index;
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
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        deleteButton.dataset.index = index;
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
      });
    }
  });
  