'use strict';

let rotatorCase = document.querySelector('.rotator__case');

function changeRotatorCase() {
    if (rotatorCase.classList.contains('rotator__case_active')) {
        rotatorCase.classList.remove('rotator__case_active');
    }

    rotatorCase = rotatorCase.nextElementSibling;

    if (rotatorCase == null) {
        rotatorCase = document.querySelector('.rotator__case');
    }
    rotatorCase.classList.add('rotator__case_active');

    const dataColor = rotatorCase.dataset.color;
    rotatorCase.style.color = `${dataColor}`;

    let dataSpeed = 1000;
    dataSpeed = rotatorCase.dataset.speed;
    console.log(dataSpeed);

    setTimeout(changeRotatorCase, dataSpeed);
}

changeRotatorCase();