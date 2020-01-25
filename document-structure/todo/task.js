// Реализуйте добавление задач по нажатию клавиши Enter при наличии текста в поле ввода
// Реализуйте механизм удаления задач
// Важный момент: в задании для кнопок удаления задач для каждой кнопки должен быть только один обработчик события. 
// Тоесть не должно быть более одного обработчика. 
// Для этого добавляйте слушатель события только на добавляемый элемент. 

// Сделайте сохранение задач даже после перезагрузки страницы.

'use strict';

const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
let taskRemove = tasksList.getElementsByClassName('task__remove');

function addTask() {
    event.preventDefault();

    if (taskInput.value !== '') {
        tasksList.insertAdjacentHTML('beforeEnd', `
            <div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
            </div>`);
            
        taskInput.value ='';
    }
}

tasksAdd.addEventListener('click', addTask);

taskInput.addEventListener('keydown', event => {    
    if (event.keyCode === 13) {
        addTask();            
    }
})

tasksList.onclick = function(event) {
    let target = event.target;

    if (target.classList.contains('task__remove')) {
        target.closest('.task').remove();
    }
}