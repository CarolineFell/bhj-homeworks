'use strict';

const menuSub = document.querySelectorAll('ul.menu_sub');

for (let i=0; i < menuSub.length; i++) {
    const menuSubSiblings = menuSub.item(i).previousSibling.previousSibling; 
    // closest выдаёт <li class="menu__item">, когда previousSibling - саму ссылку: <a class="menu__link" href="">

    menuSubSiblings.onclick = function clickOnClick() {
        menuSub.item(i).classList.toggle('menu_active');
        return false;
    }

    menuSubSiblings.onblur = function clickOnBlur() {
        menuSub.item(i).classList.toggle('menu_active');
    }
}


// // Через материалы третьей лекции
// const menuSub = document.querySelectorAll('ul.menu_sub'); // NodeList(4) [ ul.menu.menu_sub, ul.menu.menu_sub, ul.menu.menu_sub, ul.menu.menu_sub ]
// // const menuLinkSub = document.querySelectorAll('ul.menu_sub > li.menu__item > a.menu__link'); // NodeList(10) [ a.menu__link, a.menu__link, a.menu__link, a.menu__link, a.menu__link, a.menu__link, a.menu__link, a.menu__link, a.menu__link, a.menu__link ]

// for (let i=0; i < menuSub.length; i++) {
//     const menuSubSiblings = menuSub.item(i).previousSibling.previousSibling; // <a class="menu__link" href="">
    
//     menuSubSiblings.addEventListener('click', function() {
//         event.preventDefault();
//         menuSub.item(i).classList.toggle('menu_active');
//     });    

//     menuSubSiblings.addEventListener('blur', function() {
//         menuSub.item(i).classList.toggle('menu_active');
//     });   
// }