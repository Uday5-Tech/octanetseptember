document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
  
    if (taskValue !== '') {
      addTask(taskValue);
      taskInput.value = '';
    }
  });
  
  function addTask(task) {
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.textContent = task;
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      taskList.removeChild(listItem);
    });
  
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
  }