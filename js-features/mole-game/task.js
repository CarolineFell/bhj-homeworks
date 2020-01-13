'use strict';

const dead = document.getElementById("dead"); 
const lost = document.getElementById("lost");
const hole = document.getElementsByClassName("hole");

for (let i=0; i < hole.length; i++) {
    hole[i].onclick = function catchMole() {
        if (hole[i].className.includes("hole_has-mole")) {
            dead.textContent++;

            if (dead.textContent == 10) {
                alert("Вы выиграли!");

                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            lost.textContent++;

            if (lost.textContent == 5) {
                alert("Вы проиграли!");

                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    }
}