'use strict';

// Зарегистрируйте обработчики события click на элементах с классом menu__link
const menuMainLink = document.querySelectorAll('ul.menu_main > li.menu__item > a.menu__link');
const menuSub = document.querySelectorAll('ul.menu_sub')

// Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active

// Запрещайте переход по ссылке для тех, что имеют вложенное меню. 
// Остальные пункты меню должны без помех переводить пользователя на соответствующие страницы.

// Одновременно не должно быть открыто более одного вложенного меню. Все остальные должны быть скрыты

menuMainLink.item(1).onclick = function clickMenuMainLink() {
    menuSub.item(0).classList.toggle('menu_active');
    menuSub.item(1).classList.remove('menu_active');
    return false;
}

menuMainLink.item(2).onclick = function clickMenuMainLink() {
    menuSub.item(1).classList.toggle('menu_active');
    menuSub.item(0).classList.remove('menu_active');
    return false;
}

// Напишите код для случая, когда на странице может быть более 1 навигационного меню.
const menuMainBelow = document.querySelectorAll('ul.menu_main:nth-child(2) > li.menu__item > a.menu__link');
const menuSubBelow = document.querySelectorAll('ul.menu_main:nth-child(2) > li.menu__item > ul.menu_sub')

menuMainBelow.item(1).onclick = function clickMenuMainBelow() {
    menuSubBelow.item(0).classList.toggle('menu_active');
    menuSubBelow.item(1).classList.remove('menu_active');
    return false;
}

menuMainBelow.item(2).onclick = function clickMenuMainBelow() {
    menuSubBelow.item(1).classList.toggle('menu_active');
    menuSubBelow.item(0).classList.remove('menu_active');
    return false;
}
