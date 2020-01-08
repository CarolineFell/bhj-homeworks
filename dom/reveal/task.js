'use strict';

const reveal = document.getElementsByClassName('reveal');

const revealActive = function() {
    const viewportHeight = window.innerHeight;

    for (let i = 0; i < reveal.length; i++) {
        const revealBottom = reveal.item(i).getBoundingClientRect().bottom;

        if (revealBottom < viewportHeight) {
            reveal.item(i).classList.add('reveal_active');
        }         
    }    
}

document.addEventListener('scroll', revealActive);