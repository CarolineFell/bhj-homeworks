'use strict';

let subscribeModal = document.getElementById('subscribe-modal');
let modalClose = document.querySelector('.modal__close');

const getCookie = (name) => { 
    const value = '; ' + document.cookie; // ; modalOpen=true 
    var parts = value.split('; ' + name + '='); // split by ; modalOpen
    if (parts.length === 2) { // if string has splited in 2 parts - if token is found in a cookie string
        return parts
            .pop() // end up with a second element being a string that  begins with our cookie value: true
            .split(';') // repeat the same process, but now with ";" as a token
            .shift(); // this time pull out the left string (i.e. shift) to get the actual token value
    }
}

window.addEventListener('load', function() {
    if (getCookie('modalOpen')) {
        return false;
    } else {
        subscribeModal.classList.add('modal_active');
    }
})

// эта часть не получилась, хотела задать, чтобы всплывающее окно появлялось раз в сутки

modalClose.addEventListener('click', function(e) {
    e.target.closest('.modal').classList.remove('modal_active');
  
    if (getCookie('modalOpen')) {
      return false;
    } else {
      let date = new Date();
      date.setDate(date.getDate() + 1); // adds 1 day to the date
      document.cookie = 'path=/; expires=' + date.toUTCString();
      console.log(document.cookie)
      // modalOpen=true; popup=closed; close="true"; expires=Sun, 26 Jan 2020 10:35:16 GMT; path=/; modalOpen=true
    }
})