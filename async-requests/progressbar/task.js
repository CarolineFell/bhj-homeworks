'use strict';

const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    let input = form.elements.file;
    let file = input.files[0];
    
    if (file) {
        upload(file);
    }
    
    event.preventDefault();
})

function upload(file) {
    let request = new XMLHttpRequest();
    let url = 'https://netology-slow-rest.herokuapp.com/upload.php';
  
    request.upload.onprogress = function(event) {
        progress.setAttribute('max', event.total);
        progress.value = event.loaded;
    }
  
    request.open('POST', url);
    request.send(file);
}