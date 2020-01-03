'use strict';

const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const sliderItem = document.querySelectorAll('.slider__item');
const sliderDot = document.querySelectorAll('.slider__dot');

function clickPrev() {
    for (let i = sliderItem.length - 1; i < sliderItem.length; i--) {  // countdown 
        if (sliderItem.item(i).classList.contains('slider__item_active')) {     
            sliderItem.item(i).classList.remove('slider__item_active');
            sliderDot.item(i).classList.remove('slider__dot_active');

            if (i == 0) {
                i = sliderItem.length - 1;
            } else {
                i -= 1;
            }

            sliderItem.item(i).classList.add('slider__item_active');
            sliderDot.item(i).classList.add('slider__dot_active');
            return;
        }
    }
}

function clickNext() {
    
    for (let i = 0; i < sliderItem.length; i++) { // countup
        if (sliderItem.item(i).classList.contains('slider__item_active')) {     
            sliderItem.item(i).classList.remove('slider__item_active');
            sliderDot.item(i).classList.remove('slider__dot_active');
                
            if (i == sliderItem.length - 1) {
                i = 0;
            } else {
                i += 1;
            }

            sliderItem.item(i).classList.add('slider__item_active');
            sliderDot.item(i).classList.add('slider__dot_active');
            return;
        }
    }
}

sliderArrowPrev.addEventListener('click', clickPrev);
sliderArrowNext.addEventListener('click', clickNext);

for (let i=0; i < sliderDot.length; i++) {
    sliderDot.item(i).onclick = function clickDot() {
       
        for (let i=0; i < sliderDot.length; i++) {
            if (sliderItem.item(i).classList.contains('slider__item_active')) {
                sliderDot.item(i).classList.remove('slider__dot_active');
                sliderItem.item(i).classList.remove('slider__item_active');
            }
        }
        sliderDot.item(i).classList.add('slider__dot_active');
        sliderItem.item(i).classList.add('slider__item_active');
    }
}