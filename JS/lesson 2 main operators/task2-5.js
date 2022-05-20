"use strict";
/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
 */

let numberOne = +prompt("Введите первое число");
let numberTwo = +prompt("Введите второе число");
let operator = prompt("Введите значение операции: + - * /");

alert(mathOperation(numberOne, numberTwo, operator));

/**
 * Функция производящее с двумя числами одно из действий на выбор пользователя: + - * /
 * @param arg1 - Первое число
 * @param arg2 - Второе число
 * @param operation - операция, которая будет произведена с двумя числами
 * @returns {number|*} - результат выбранной операции между введёнными числами
 */
function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "+":
           return addition(arg1, arg2);
 //          break;
        case "-":
            return substraction(arg1, arg2);
 //           break;
        case "*":
            return multiplication(arg1, arg2);
 //           break;
        case "/":
            return division(arg1, arg2);
 //           break;
    }
}

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