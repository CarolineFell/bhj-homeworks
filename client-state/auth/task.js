'use strict';

const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signinBtn = document.getElementById('signin__btn');
function welcomeActive(storage) {
    welcome.classList.add('welcome_active');
    welcome.innerHTML = `
                    Добро пожаловать, пользователь #<span id='${storage.user_id}'>${storage.user_id}</span>
                    <button class='btn' id='logout__btn' onclick='localStorage.clear(); window.location.reload();'>Выйти</button>
                `;
}

if (localStorage.user_id) {
    document.getElementById('user_id').textContent = localStorage.user_id;
    welcomeActive(localStorage);
    
} else {
    signin.classList.add('signin_active');

    signinBtn.addEventListener('click', () => {
        event.preventDefault();
        const formData = new FormData(signinForm);

        const request = new XMLHttpRequest();
        request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        request.send(formData);

        request.addEventListener('readystatechange', function() {
            if (this.readyState == 4 && this.status == 200) {
                const json = JSON.parse(this.responseText); 

                if (json.success === true) {    
                    localStorage.setItem('user_id', json.user_id);
                    document.getElementById('user_id').textContent = json.user_id;
                    signin.classList.remove('signin_active');
                    welcomeActive(json);
                } 
                else {
                    alert('Неверный логин/пароль');
                    signinForm.reset();
                }
            }
        })
    })
}