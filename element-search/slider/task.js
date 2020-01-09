'use strict';

const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

const sliderItem = document.querySelectorAll('.slider__item');
const sliderItemArray = Array.from(sliderItem);

const sliderDot = document.querySelectorAll('.slider__dot');
const sliderDotArray = Array.from(sliderDot);

// Внутри реализации этой функции находите активное изображение (с помощью find, findIndex или селектором из блока)
let itemActive = sliderItemArray.indexOf(document.querySelector('div.slider__item_active'));

sliderDotArray[itemActive].classList.add('slider__dot_active');

// Сделайте функцию, которая принимает число и выставляет нужное изображение активным.
function click(slide, slideDot) {

    // после нахождения уже активированного изображения вам нужно убрать эту активность (для изображения и точки)
    sliderItemArray[itemActive].classList.remove('slider__item_active');

    // и активировать те, которые были переданы.
    if (slideDot === true) {
        sliderDotArray.forEach((dot) => (dot.classList.remove('slider__dot_active')));
        // Например передаётся число 0 активируется изображение по нулевому индексу, а так же точка по нулевой позции.
        itemActive = sliderDotArray.indexOf(slide);
        sliderItemArray[itemActive].classList.add('slider__item_active');

    } else {
        sliderDotArray[itemActive].classList.remove('slider__dot_active');
        // Например передаётся число 0 активируется изображение по нулевому индексу, а так же точка по нулевой позции. 
        itemActive = slide;
        sliderItemArray[slide].classList.add('slider__item_active');
    }

    sliderDotArray[itemActive].classList.add('slider__dot_active');
}

sliderArrowNext.onclick = function() {
    let nextSlide = itemActive + 1;
    if (nextSlide === sliderItemArray.length) {
        nextSlide = 0;
    }
    click(nextSlide, false);
};

sliderArrowPrev.onclick = function() {
    let previousSlide = itemActive - 1;
    if (previousSlide === -1) {
        previousSlide = sliderItemArray.length - 1;
    }
    click(previousSlide, false);
};

for (let dot of sliderDotArray) {
    dot.onclick = function() {
        click(dot, true);
    };
}