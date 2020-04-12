"use strict";

/*1. let string1 = 'Ytube';
let string2 = 'ou';
let sliceString = '';
console.log(sliceString); // --> YouTube*/
let string1 = 'Ytube';
let string2 = 'ou';
let string3 = string1.substring(0, 1);
let string4 = string1.substring(2);
let string5 = `T${string4}`;
let sliceString = (`${string3}${string2}${string5}`);

// console.log(sliceString);
/*2. let numbers = [25, 1];
let project = 'проект';
let team = 'команда';
let howMuch = 'Сколько';
let str = 'нужно программистов чтобы сделать проект ?';
let sentence = '';
console.log(sentence) // --> собрать предложение*/
// let numbers = [25, 1];
// let project = 'проект';
// let team = 'команда';
// let howMuch = 'Сколько';
// let str = 'нужно программистов чтобы сделать проект ?';

// let sentence = `${howMuch} ${str} ${numbers[1]} ${project}, ${team} ${numbers[0]} человек.`;
// console.log(sentence);

/*3 Напишите функцию fizzBuzz, которая будет возвращать
'Fizz' если передаваемый параметр кратен 3,
'Buzz', если передаваемый параметр кратен 5,
'FizzBuzz' - если параметр кратен 3 и 5.
Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр*/

// const fizzBuzz = parseInt(prompt("Введите число"));

// if(!(fizzBuzz % 3) && !(fizzBuzz % 5)) {
//     console.log('FizzBuzz');
// } else if((fizzBuzz % 5) == 0 ) {
//     console.log('Buzz');
// } else if ((fizzBuzz % 3) == 0 ) {
//     console.log("Fizz")
// } else {
//     console.log(`Your number ${fizzBuzz}`);
// }

/*4 Напишите функцию которая будет возвращать объект
с свойством name, а значением будет первый аргумент функции*/
// let nameX = prompt("Напишите имя", "");
// function nameA (name) {
//     return {name: name}
// };
// console.log(nameA(nameX));

/*5 Функция будет принимать 1 аргумент
- ОБЪЕКТ у которого будет свойство name
и возвращать новый объект изменяя свойство name
в большой регистр */

// let name2 = prompt("Введите имя", "Вика");
// let name3 = {
//     name: name2
// };
// function obj1 (obj2) {
//     return {name: obj2.name.toUpperCase()}
// };

// console.log(obj1(name3));

/*6 Напишите функцию которая принимает в качестве аргумента 
массив и элемент массива, и добавляет элемент в конец массива (без метода push) */
// let apple = ['name', 12, false];
// let item = "Vika";
// function addToArr (appleArray, arrayItem) {
//     return appleArray.concat([arrayItem]);
// };
// console.log(addToArr(apple, item));

// function addToArray2 (appleArray, arrayItem) {
//     return [...appleArray, arrayItem]
// };
// console.log(addToArray2(apple, item));
/*7 Напишите функцию которая принимает 3 аргумента, третий аргумент - это объект. 
Функция создает новый объект и добавляет ключ - это первый аргумент, а значение - второй аргумент 
Проверяет если есть свойство name в переданном объекте, тогда добавляет данное свойство и возвращает новый объект */
// let object2 = {
//     name: "Vika"
// };
// function obj (key, value, object2) {
//     if (object2.hasOwnProperty("name")) {
//         return {...object2, [key]: value}
//     } 
//     return {...object2}
// };
// function obj (key, value, object2) {
//     if (object2.name) {
//         return {...object2, [key]: value}
//     }
//     return object2;
// };
// function obj (key, value, object2) {
// if (object2.name) {
//     object2[key] = value;
//     }
//     return object2;
// };
// function obj (key, value, object2) {
//     if (object2.name) {
//         Object.assign(object2, {[key]: value})
//     }
//     return object2;
// };
// console.log(obj("key1", "value1", object2));