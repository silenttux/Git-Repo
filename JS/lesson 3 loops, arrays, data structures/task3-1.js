"use strict";
let i = 0;
do {
    if (i === 0) {
        console.log(i + " - это ноль");
    } else if (i % 2) {
        console.log(i + " - нечетное число");
    } else {
        console.log(i + " - четное число");
    }
    i++;
} while (i<11);