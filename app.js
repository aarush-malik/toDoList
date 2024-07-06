document.addEventListener('DOMContentLoaded', function() {
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

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
    }

    window.removeTask = function(button) {
        const taskItem = button.parentElement;
        taskList.removeChild(taskItem);
    };
});
