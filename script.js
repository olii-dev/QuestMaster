// Task list array to store tasks
let tasks = [];
let points = 0;
let level = 1;
const pointsPerTask = 10;
const pointsToNextLevel = 100;

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <input type="checkbox" onchange="completeTask(${index})">
            <span>${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push(taskText);
        taskInput.value = '';
        displayTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Function to mark task as complete
function completeTask(index) {
    // Award points
    points += pointsPerTask;
    
    // Check for level progression
    if (points >= pointsToNextLevel) {
        level++;
        points -= pointsToNextLevel;
    }

    updateStats();
    displayTasks();
}

// Function to update user's points and level
function updateStats() {
    const pointsElement = document.getElementById('points');
    pointsElement.textContent = `Points: ${points}`;

    const levelElement = document.getElementById('level');
    levelElement.textContent = `Level: ${level}`;
}

// Event listener for adding a new task
document.getElementById('add-task-btn').addEventListener('click', addTask);

// Initial display of tasks and stats
displayTasks();
updateStats();
