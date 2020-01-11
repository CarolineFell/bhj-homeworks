'use strict';

// у вас произошло событие, вам нужно понять к какому основному меню этот клик относится (closest). 
// Затем вы проверяете, есть ли у этого полученного основного меню открытое подменю? 
// Если нету, то вы просто открываете нужный элемент и всё. 
// Если есть (открытое подменю), то вам нужно понять, относится ли ваше событие к открытому меню? 
// Если событие произошло на открытом меню, то вы его просто закрываете. 
// Если событие никак не относится к открытому подменю, то нужно прошлое открытое закрыть 
// (то есть найти его, например с помощью find или селектора по меню), 
// а после закрытия предыдущего открытого меню открыть то, на котором произошло событие.

let menuLink = document.querySelectorAll('.menu__link');

for (let link of menuLink) {
    link.onclick = function() {

        let menuActive = document.querySelectorAll('.menu.menu_sub.menu_active');

        if (link.closest('.menu__item').querySelector('.menu.menu_sub') != null) {
            link.closest('.menu__item').querySelector('.menu.menu_sub').classList.toggle('menu_active');
           
            if (menuActive.length != 0) {
                menuActive[0].classList.remove('menu_active');
            }
            return false;
        }
    }
}