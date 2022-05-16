"use strict";
/*
3 Объявить две переменные a и b и задать им целочисленные произвольные начальные
значения.
    Затем написать скрипт, который работает по следующему принципу:
    - если a и b положительные, вывести их разность (ноль можно считать положительным
числом);
- если а и b отрицательные, вывести их произведение;
- если а и b разных знаков, вывести их сумму;
 */

let a, b;
const min = -99, max = 100;

a = getRandomInt(min, max);
b = getRandomInt(min, max);
console.log(getNullComparison(a, b));


/**
 * Функция сравнивает полученные числа и если они положительные, выводит разность, если отрицательные - произведение,
 * а если разные знаков, то сумму
 * @param a - случайное целое число
 * @param b - случайное целое число
 * @returns {number|*} - возвращает разность или произведение или сумму, целое число
 */
function getNullComparison(a, b) {
    if (a >= 0 && b >= 0) {
        const dif = a - b;
        return dif;
    } else if (a < 0 && b < 0) {
        const comp = a * b;
        return comp;
    } else {
        const sum = a + b;
        return sum;
    }
}


/**
 * Функция выдает случайное целое число из заданного диапазона
 * @param min - минимальное возможное число
 * @param max - максимальное число, до которого может выпасть значение
 * @returns {number} - возвращает случаное целое число
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}