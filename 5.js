'use strict';
/**
 * Сложение переданных параметров
 * @param {number} a 
 * @param {number} b 
 * @return {number}
 */
function addition(a, b) {
    return a + b;
}
/**
 * Вычитание переданных параметров
 * @param {number} a 
 * @param {number} b 
 * @return {number}
 */
function subtraction(a, b) {
    return a - b;
}
/**
 * Умножение переданных параметров
 * @param {number} a 
 * @param {number} b 
 * @return {number}
 */
function multiplication(a, b) {
    return a * b;
}
/**
 * Деление переданных параметров
 * @param {number} a 
 * @param {number} b 
 * @return {number}
 */
function division(a, b) {
    return a / b;
}

/**
 * Функция производит метематические действия с полученными числами
 * @param {number} arg1 
 * @param {number} arg2
 * @param {string} operation операции "+", "-", "*", "/"
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "+":
            return subtraction(arg1, arg2);
        case "+":
            return multiplication(arg1, arg2);
        case "+":
            return division(arg1, arg2);
        default:
            throu new Error("Операция " + operation + "не предусмотрена");
    }
}

console.log(mathOperation(3, 5, "+"));
console.log(mathOperation(3, 5, "-"));
console.log(mathOperation(3, 5, "*"));
console.log(mathOperation(3, 5, "/"));
console.log(mathOperation(3, 5, "Lorem"));