"use strict";
// Lecture 1 : Basic Typescript
// let userName = "Aftab";
// console.log(userName);
// let a: number = 12;
// let b: string = "6";
// let c: number = 2;
// console.log(a / b);
// console.log(c * b);
// Lecture 2 : Common Types
// let myName: string = "Aftab";
// let meaningOfLIfe: number;
// let isLoading: boolean;
// let album: string | number | boolean; //union types
// myName = "John";
// meaningOfLIfe = 2;
// isLoading = false;
// album = true;
// const sum = (a: number, b: string) => {
//   return a + b;
// };
// const result = sum(5, "A");
// console.log(result);
// let re: RegExp = /\w+/g;
// Lecture 3 : Arrays and objects
let stringArr = ["one", "two", "three"];
let fruits = ["apple", "banana", 25];
let mixedData = ["hey", 50, true];
stringArr[0] = "aftab";
stringArr.push("hi");
// console.log(stringArr);
fruits[0] = 80;
fruits.unshift("resh");
// console.log(fruits);
let test = [];
let newArr = [];
newArr.push(25, "a");
// console.log(newArr);
// Tuple : Strict arr instead of normal arr
let tupple = ["Aftab", 22, true];
let mixed = ["sonu", 1, false];
mixed = tupple;
// tupple = mixed;
tupple[1] = 5;
// tupple[2] = 5;
// Objects
let myObj;
myObj = [];
// console.log(typeof myObj);
const exampleObj = {
    name: "aftab",
    age: 25,
    isAdult: true,
};
exampleObj.isAdult = false;
// using the defined object
let ok = {
    name: "Aftab",
    age: 25,
    isHappy: [25, true],
};
let ko = {
    name: "Sonu",
    age: 1,
};
// ok = ko;
const greetMyObj = (ko) => {
    var _a;
    return `Hi i am ${(_a = ko.name) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()}!`;
};
console.log(greetMyObj(ko));
