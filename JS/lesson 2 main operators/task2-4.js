"use strict";

/*
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами.
    Обязательно использовать оператор return.

 */

let numberOne = 8, numberTwo = 4;

console.log(addition(numberOne,numberTwo));
console.log(substraction(numberOne,numberTwo));
console.log(multiplication(numberOne,numberTwo));
console.log(division(numberOne,numberTwo));

/**
 * Функция для сложения двух чисел
 * @param a - первое число
 * @param b - второе число
 * @returns {*} - результат сложения
 */
function addition(a, b) {
    return a + b;
}

/**
 * Функция для вычитания из первого числа второго
 * @param a - первое число
 * @param b - второе число
 * @returns {number} - результат вычитания
 */
function substraction(a, b) {
    return a - b;
}

/**
 * Функция для умножения одного числа на другое
 * @param a - первое число
 * @param b - второе число
 * @returns {number} - результат умножения
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Функция для деления первого числа на второе
 * @param a - первое число
 * @param b - второе число
 * @returns {number} - результат деления
 */
function division(a, b) {
    return a / b;
}


