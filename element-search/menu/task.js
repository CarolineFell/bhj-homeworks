'use strict';

// Зарегистрируйте обработчики события click на элементах с классом menu__link
const menuMainLink = document.querySelectorAll('ul.menu_main > li.menu__item > a.menu__link');
const menuMainLinkArray = Array.from(menuMainLink);
const menuMainListedLinksArray = [menuMainLinkArray[1], menuMainLinkArray[2], menuMainLinkArray[5], menuMainLinkArray[6]];
const menuSub = document.querySelectorAll('ul.menu_sub')

// Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active

// Запрещайте переход по ссылке для тех, что имеют вложенное меню. 
// Остальные пункты меню должны без помех переводить пользователя на соответствующие страницы.

// Одновременно не должно быть открыто более одного вложенного меню. Все остальные должны быть скрыты.
// Напишите код для случая, когда на странице может быть более 1 навигационного меню.
for (let i=0; i < menuMainListedLinksArray.length; i++) {
    if (i % 2) {
        menuMainListedLinksArray[i].onclick = function clickmenuMainListedLinksArray() {
            for (let n=0; n < menuSub.length; n++) {
                if (n & 1) {
                    menuSub.item(n).classList.toggle('menu_active');
                } else {
                    menuSub.item(n).classList.remove('menu_active');
                }
            }
            return false;
        }
        
    } else {
        menuMainListedLinksArray[i].onclick = function clickmenuMainListedLinksArray() {
            for (let n=0; n < menuSub.length; n++) {
                if (!(n & 1)) {
                    menuSub.item(n).classList.toggle('menu_active');
                } else {
                    menuSub.item(n).classList.remove('menu_active');
                }
            }
            return false;
        }
    }
}