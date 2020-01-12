'use strict';

const interestCheck = document.querySelectorAll('input.interest__check');

for (let interest of interestCheck) {
    
    interest.addEventListener('click', e => {

        const interestCheckClothest = interest.closest('.interest');
        let interestCheckSelect = interestCheckClothest.querySelectorAll('.interest__check');

        if ( ! interest.closest('.interests_active') && interest.checked === true ||
               interest.closest('.interests_active') && interest.checked === true) {

            for (let item of interestCheckSelect) {
                item.checked = true;
            }

        } else if ( ! interest.closest('.interests_active') && interest.checked === false ||
                      interest.closest('.interests_active') && interest.checked === false) {

            for (let item of interestCheckSelect) {
                item.checked = false;   
            }
        } 
    })
}

// Простановка галочек должна производиться как вниз, так и вверх по дереву 
// (если выбраны все дочерние элементы, нужно ставить галочку; иначе снимать)
// Для дочерних элементов, если выбраны не все галочки, у родителя должно устанавливаться значение indeterminate