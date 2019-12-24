// // Для участия в розыгрышах товаров в социальных сетях, требуется разработать таймер обратного отсчёта. 
// // По окончанию счёта должно всплыть уведомление: «Вы победили в конкурсе»
// const countdown = function alertWin() {
//     const timer = document.getElementById("timer");
//     timer.textContent -= 1;

//     if (timer.textContent <= 0) {
//         alert("Вы победили в конкурсе!");
//         clearInterval(counter);
//     }
// }
// const counter = setInterval(countdown, 1000);

// ------------------------- Повышенный уровень сложности #1 ------------------------- //
// Реализуйте таймер, отсчитывающий оставшееся время в формате hh:mm:ss (например, 04:25:19), 
// где hh - двухзначное число часов, mm - минут, ss - секунд.
const countdown = function alertWin() {
    const timer = document.getElementById("timer");
    let timerhhmmss = timer.textContent;
    
    let timerArray = timerhhmmss.split(":");
    let hh = timerArray[0];
    let mm = timerArray[1];
    let ss = timerArray[2];

    if (ss == 0) {
        if (mm == 0) {
            if (hh == 0) {
                alert("Вы победили в конкурсе!");
                clearInterval(counter);
            }

            hh--;
            mm = 60;
            ss = 60;

            if (hh < 10) {
                hh = "0" + hh;
            }
        }

        mm--;
        ss = 60;

        if (mm < 10) {
            mm = "0" + mm;
        }
    }

    ss--;

    if (ss < 10) {
        ss = "0" + ss;
    }

    timerhhmmss = `${hh}:${mm}:${ss}`;
    document.getElementById("timer").innerHTML = timerhhmmss;
}

const counter = setInterval(countdown, 1000);