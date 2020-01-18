'use strict';

const hasTooltip = document.querySelectorAll('.has-tooltip');
const hasTooltipLength = hasTooltip.length;
let tooltip;

function clickElement() {
    for (let i = 0; i < hasTooltipLength; i++) {
        hasTooltip[i].insertAdjacentHTML('afterEnd', `<div class="tooltip">${hasTooltip[i].title}</div>`)
    }

    tooltip = document.querySelectorAll('.tooltip');

    for (let i = 0; i < hasTooltipLength; i++) {
        hasTooltip[i].addEventListener('click', function() {
            event.preventDefault();

            if (tooltip[i].classList.contains('tooltip_active')) {
                tooltip[i].classList.remove('tooltip_active');
            } else {
                removeTootltip();

                const left = hasTooltip[i].getBoundingClientRect().left;
                const top = hasTooltip[i].getBoundingClientRect().top;
                const bottom = hasTooltip[i].getBoundingClientRect().bottom;

                tooltip[i].style = `left: ${left}px; top: ${top + (bottom - top)}px`;
                tooltip.item(i).classList.add('tooltip_active');
            }
            document.addEventListener('scroll', removeTootltip);
        })
    }
}

function removeTootltip() {
    for (let i = 0; i < tooltip.length; i++) {
        tooltip.item(i).classList.remove('tooltip_active');
    }
}

document.addEventListener('DOMContentLoaded', clickElement);

// Реализуйте появление подсказки на основе положения текста
// Показывайте подсказку при клике на элемент.

// Повышенный уровень сложности #1 (не обязательно)

// В один момент времени должна показываться только одна подсказка
// Повышенный уровень сложности #2 (не обязательно)

// Добавьте подсказке дополнительный атрибут data-position для настройки места появления подсказки:

// top - над текстом
// left - слева от текста
// right - справа от текста
// bottom - снизу от текста