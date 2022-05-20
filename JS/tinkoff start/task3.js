"use strict";

let N = +prompt("Введите натуральное число от 1 до 10 в 12 степени");
alert(reduction(N));

function reduction(n) {
    if (!Number.isInteger(n/10)) {
        return 0;
    } else {
        return reduction(n/10) + 1;
    }
}