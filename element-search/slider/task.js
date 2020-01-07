'use strict';

const sliderArrowPrev = document.querySelectorAll('.slider__arrow_prev');
const sliderArrowNext = document.querySelectorAll('.slider__arrow_next');
const sliderArrows = document.querySelector('.slider__arrows');
const sliderDot = document.querySelectorAll('.slider__dot');
const sliderItem = document.getElementsByClassName('slider__item');
const sliderItemArray = Array.from(sliderItem);

let currentSlide = 0;

sliderArrows.onclick = function(event) {

	if (event.target === sliderArrowNext.item(0) && currentSlide === sliderItemArray.length - 1) {
        sliderItem[sliderItemArray.length - 1].classList.toggle('slider__item_active');
        sliderDot[sliderItemArray.length - 1].classList.toggle('slider__dot_active');
        currentSlide = 0;
        
	} else if (event.target === sliderArrowNext.item(0)) {
		currentSlide++;
        sliderItem[currentSlide - 1].classList.toggle('slider__item_active');
        sliderDot[currentSlide - 1].classList.toggle('slider__dot_active');

	} else if (event.target === sliderArrowPrev.item(0) && currentSlide === 0) {
        sliderItem.item(0).classList.toggle('slider__item_active');
        currentSlide = sliderItemArray.length - 1;
        
	} else if (event.target === sliderArrowPrev.item(0)) {
		currentSlide--;
        sliderItem[currentSlide + 1].classList.toggle('slider__item_active');
        sliderDot[currentSlide + 1].classList.toggle('slider__dot_active');
    }

    sliderItem[currentSlide].classList.toggle('slider__item_active');
    sliderDot[currentSlide].classList.toggle('slider__dot_active');


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
}