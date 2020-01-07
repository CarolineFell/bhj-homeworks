'use strict';

const menuSub = document.querySelectorAll('.menu_sub');

for (let i = 0; i < menuSub.length; i++) {
    const menuSubPrevious = menuSub.item(i).previousElementSibling;
      
    menuSubPrevious.onclick = function(event) {
        event.preventDefault();
        menuSub.item(i).classList.add('menu_active');
              
        for (let j = 0; j < menuSub.length; j++) {
            if (j !== i ) {
                menuSub.item(j).classList.remove('menu_active');
            }
        }
    }
}