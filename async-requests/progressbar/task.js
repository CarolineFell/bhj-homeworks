'use strict';

const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    let formData = new FormData(form);
    let request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    
    request.upload.onloadstart = function() {   
        progress.value = 0.1;

        function increase() {
            if (progress.value < 1.0) {
                progress.value = progress.value + 0.1;
            }            
        }        
        setInterval(increase, 2000);
    }

    request.upload.onload = function() {
        progress.value = 1.0;
        alert('Загрузка завершена.')
    }
    
    request.send(formData);
    event.preventDefault()
})