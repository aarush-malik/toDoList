document.addEventListener('DOMContentLoaded', function() {
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Load tasks from local storage
    loadTasks();

    newTaskInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter' && newTaskInput.value.trim() !== '') {
            addTask(newTaskInput.value);
            newTaskInput.value = '';
        }
    });

    function addTask(task) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${task}</span>
            <button onclick="removeTask(this)">x</button>
        `;
        taskList.appendChild(taskItem);
        saveTasks();
    }

    window.removeTask = function(button) {
        const taskItem = button.parentElement;
        taskList.removeChild(taskItem);
        saveTasks();
    };

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task-item span').forEach(task => {
            tasks.push(task.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            tasks.forEach(task => addTask(task));
        }
    }
});
