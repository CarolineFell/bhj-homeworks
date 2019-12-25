'use strict';

// В момент запуска скрипта, покажите окно #modal_main
const modal = document.getElementsByClassName('modal');
modal.item(0).classList.add('modal_active');

// Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close
const modalClose = document.querySelectorAll('div.modal__content div.modal__close'); 
const modalCloseLength = modalClose.length; // 2 matches is found

for (let i=0; i < modalCloseLength; i++) {
    modalClose.item(i).onclick = function clickClose() {
        modal.item(i).classList.remove('modal_active');
    
        if (i == 0) {
            let addActive = function addModalActive() {
                modal.item(i).classList.add('modal_active');
            }
            setTimeout(addActive, 1000);
        }
    }
}

// По нажатию на элемент с классом show-success покажите окно #modal_success
const showSuccess = document.getElementsByClassName('show-success');
showSuccess.item(0).onclick = function seeSuccess() {
    modal.item(0).classList.remove('modal_active');
    modal.item(1).classList.add('modal_active');
}
