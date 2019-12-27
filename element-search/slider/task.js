'use strict';

const sliderArrowPrev = document.getElementsByClassName('slider__arrow_prev');
const sliderArrowNext = document.getElementsByClassName('slider__arrow_next');
const sliderItem = document.getElementsByClassName('slider__item');
const sliderItemLength = sliderItem.length;

// Добавьте к слайдеру управление с помощью точек
const sliderDot = document.getElementsByClassName('slider__dot');
const sliderDotLength = sliderDot.length;

let slide = 0;

// Установите обработчики события click на элементах «Влево» и «Вправо»

// При смене слайдов учитывайте, что навигация должна быть бесконечной. 
// То есть, смена крайнего левого слайда должна перекидывать к крайнему правому и наоборот.

// Навигация с помощью боковых элементов должна также приводить к смене активных точек

sliderArrowPrev.item(0).onclick = function clickPrev() {

    if (slide == sliderItemLength) {
        sliderItem.item(sliderItem - 2).classList.add(`slider__item_active`);
        sliderDot.item(sliderDotLength - 2).classList.add('slider__dot_active');
        sliderItem.item(sliderItemLength - 1).classList.remove(`slider__item_active`);
        sliderDot.item(sliderDotLength - 1).classList.remove('slider__dot_active');
        slide = sliderItemLength - 2;

    } else if (slide == 0) {
        sliderItem.item(sliderItemLength - 1).classList.add(`slider__item_active`);
        sliderDot.item(sliderDotLength - 1).classList.add('slider__dot_active');
        sliderItem.item(0).classList.remove(`slider__item_active`);
        sliderDot.item(0).classList.remove('slider__dot_active');
        slide = sliderItemLength - 1;

    } else {
        sliderItem.item(slide - 1).classList.add(`slider__item_active`);
        sliderDot.item(slide - 1).classList.add('slider__dot_active');
        sliderItem.item(slide).classList.remove(`slider__item_active`);
        sliderDot.item(slide).classList.remove('slider__dot_active');
        slide--;
    }
}

sliderArrowNext.item(0).onclick = function clickNext() {

    if (slide == (sliderItemLength - 1)) {
        sliderItem.item(0).classList.add(`slider__item_active`);
        sliderDot.item(0).classList.add('slider__dot_active');
        sliderItem.item(slide).classList.remove(`slider__item_active`);
        sliderDot.item(slide).classList.remove('slider__dot_active');
        slide = 0;

    } else if (slide == 0) {
        sliderItem.item(1).classList.add(`slider__item_active`);
        sliderDot.item(1).classList.add('slider__dot_active');
        sliderItem.item(0).classList.remove(`slider__item_active`);
        sliderDot.item(0).classList.remove('slider__dot_active');
        slide++;

    } else {
        sliderItem.item(slide + 1).classList.add(`slider__item_active`);
        sliderDot.item(slide + 1).classList.add('slider__dot_active');
        sliderItem.item(slide).classList.remove(`slider__item_active`);
        sliderDot.item(slide).classList.remove('slider__dot_active');
        slide++;
    }
}

for (let i=0; i < sliderDotLength; i++) {
    sliderDot.item(i).onclick = function clickDot() {
       
        for (let i=0; i < sliderDotLength; i++) {
            if (sliderItem.item(i).classList.contains('slider__item_active')) {
                sliderDot.item(i).classList.remove('slider__dot_active');
                sliderItem.item(i).classList.remove('slider__item_active');
            }
        }
        sliderDot.item(i).classList.add('slider__dot_active');
        sliderItem.item(i).classList.add('slider__item_active');

        slide = i;
    }
}