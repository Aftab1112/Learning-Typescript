"use strict";
// Lecture 1 : Basic Typescript
// let userName = "Aftab";
// console.log(userName);
let a = 12;
let b = "6";
let c = 2;
// console.log(a / b);
// console.log(c * b);
// Lecture 2 : Common Types
// let myName: string = "Aftab";
let meaningOfLIfe;
let isLoading;
let album; //union types
// myName = "John";
meaningOfLIfe = 2;
isLoading = false;
album = true;
const sum = (a, b) => {
    return a + b;
};
const result = sum(5, "A");
// console.log(result);
let re = /\w+/g;
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
const data = {
    name: "Aftab",
    age: 25,
    isAdult: true,
    album: ["a", 22],
};
// console.log(data);
// Literal Types
let myName;
let userName;
userName = "Aftab";
//Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
// logMsg("HI");
// logMsg(add(1, 1));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = (c, d) => {
    return c * d;
};
// logMsg(multiply(2, 2));
let subtract2 = (e, f) => e - f;
const addAllNum = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// console.log(addAllNum(1, 2, 3));
// default param
const sumAll = (a = 5, b, c = 10) => {
    return a + b + c;
};
// logMsg(sumAll(undefined, 5));
// Rest Parameters
const newNums = [1, 2, 3, 4];
const total = (a, b, ...nums) => a + b + nums.reduce((prev, curr) => prev + curr);
// console.log(total(1, 2, ...newNums));
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
const infinite = () => {
    // never type converted to void
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNUmber = (value) => typeof value === "number" ? true : false; // custom typeguard to check number
const isString = (value) => typeof value === "string" ? true : false; // custom typeguard to check string
// how to use never type
const numberOrString = (value) => {
    if (isString(value))
        return "string";
    if (isNUmber(value))
        return "number";
    return createError("This is an error");
};
