'use strict';

const editor = document.getElementById('editor');
const clear = document.getElementById('clear');

window.addEventListener('load', function() {
    let text = localStorage.getItem('textEditor');
    editor.value = text;
})

window.addEventListener('beforeunload', function() {
    localStorage.setItem('textEditor', editor.value);
})

clear.addEventListener('click', function() {
    editor.value = '';
    localStorage.setItem('textEditor', '');
})