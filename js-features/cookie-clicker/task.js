'use strict';

const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const speedCounter = document.getElementById("speed__counter");

let dateBefore = new Date();
let secondsBefore = dateBefore.getSeconds();

cookie.onclick = function countClicks() {
    // Необходимо разработать нового «убийцу времени» - кликер печенек. 
    // Всё, что делает игра - увеличивает счётчик нажатий на печеньку.
    let click = clickerCounter.textContent++;
    if (click % 2 == 0) {
        cookie.width = 180;
    } else {
        cookie.width = 200;
    }

    // Добавьте параметр «Скорость клика». Он должен показывать среднее количество кликов в секунду. 
    // Значение обновляется при каждом новом клике.
    let dateAfter = new Date();
    let secondsAfter = dateAfter.getSeconds();
    let difference = secondsAfter - secondsBefore;
    let speed = (1 / difference);
    speedCounter.textContent = speed.toFixed(2);
}