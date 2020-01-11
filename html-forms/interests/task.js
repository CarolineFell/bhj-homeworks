'use strict';

const interestCheck = document.querySelectorAll('input.interest__check');

for (let interest of interestCheck) {
    
    interest.addEventListener('click', e => {

        if ( ! interest.closest('.interests_active') && interest.checked === true) {
            const interestCheckClothest = interest.closest('.interest');
            const interestCheckSelect = interestCheckClothest.querySelectorAll('.interest__check');

            for (let item of interestCheckSelect) {
                item.checked = true;                
            }

        } else if ( ! interest.closest('.interests_active') && interest.checked === false) {
            const interestCheckClothest = interest.closest('.interest');
            const currentinterestCheck = interestCheckClothest.querySelectorAll('.interest__check');

            for (let item of currentinterestCheck) {
                item.checked = false;                
            }
        }
    })
}
// Простановка интересов должна работать на неограниченный уровень вложенности
// Простановка галочек должна производиться как вниз, так и вверх по дереву 
// (если выбраны все дочерние элементы, нужно ставить галочку; иначе снимать)
// Для дочерних элементов, если выбраны не все галочки, у родителя должно устанавливаться значение indeterminate