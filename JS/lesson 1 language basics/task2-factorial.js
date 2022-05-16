"use strict";

let number;
number = prompt("введите число для рассчета факториала");
alert("результат " + countFactorial(number));


//alert("результат " + countFactorial(+prompt("введите число для рассчета факториала")));

function countFactorial (number) {
    if (number === 1) {
        return 1;
    }
    return countFactorial (number - 1) * number;
}