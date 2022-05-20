"use strict";
let comparisonAB = prompt("введите знак сравнения чисел A и B");
let comparisonAC = prompt("введите знак сравнения чисел A и C");
let comparisonBC = prompt("введите знак сравнения чисел B и C");

if ((comparisonAB === ">") && (comparisonAC === ">") && (comparisonBC === ">")) {
    alert("cba");
} else if ((comparisonAB === ">") && (comparisonAC === ">") && (comparisonBC === "<")) {
    alert("bca");
} else if ((comparisonAB === "<") && (comparisonAC === ">") && (comparisonBC === ">")) {
    alert("cab");
} else if ((comparisonAB === ">") && (comparisonAC === "<") && (comparisonBC === "<")) {
    alert("bac");
} else if ((comparisonAB === "<") && (comparisonAC === "<") && (comparisonBC === ">")) {
    alert("acb");
} else if ((comparisonAB === "<") && (comparisonAC === "<") && (comparisonBC === "<")) {
    alert("abc");
} else if ((comparisonAB === "=") && (comparisonAC === ">") && (comparisonBC === ">")) {
    alert("cab");
} else if ((comparisonAB === "=") && (comparisonAC === "<") && (comparisonBC === "<")) {
    alert("abc");
} else if ((comparisonAB === ">") && (comparisonAC === "=") && (comparisonBC === "<")) {
    alert("bac");
} else if ((comparisonAB === "<") && (comparisonAC === "=") && (comparisonBC === ">")) {
    alert("acb");
} else if ((comparisonAB === "<") && (comparisonAC === "<") && (comparisonBC === "=")) {
    alert("abc");
} else if ((comparisonAB === ">") && (comparisonAC === ">") && (comparisonBC === "=")) {
    alert("bca");
} else if ((comparisonAB === "=") && (comparisonAC === "=") && (comparisonBC === "=")) {
    alert("abc");
}
