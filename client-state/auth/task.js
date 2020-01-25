'use strict';

const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signinBtn = document.getElementById('signin__btn');

signin.classList.add('signin_active');

var request = new XMLHttpRequest();

signinBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const formData = new FormData(signinForm);

    request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    request.send(formData);

    request.onreadystatechange = function() {

        if (this.readyState == request.DONE && this.status == 200) {
            const json = JSON.parse(request.responseText);
            console.log(json)

            // Реализуйте механизм авторизации
            if (json.success) { // (логин demo, пароль demo) "success": true,"user_id": Number 
                // После успешного входа, сохраните полученный id-пользователя в локальное хранилище
                localStorage.userId = json.user_id;
                signin.classList.remove('signin_active');

                // При успешной авторизации, задайте id пользователя в блок #welcome и отобразите его
                welcome.classList.add('welcome_active');
                welcome.innerHTML = `
                    Добро пожаловать, пользователь #<span id='${json.user_id}'>${json.user_id}</span>
                    <button class='btn' id='logout__btn' onclick='localStorage.clear(); window.location.reload();'>Выйти</button>
                `;
            } else {  // JSON-ответ: "success": false
                // Если авторизация не удалась, выведите сообщение «Неверный логин/пароль»
                alert('Неверные логин/пароль'); 
            }

            signinForm.reset();
        }
    }
})