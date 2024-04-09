// Lecture 1 : Basic Typescript

// let userName = "Aftab";
// console.log(userName);

let a: number = 12;
let b: string = "6";
let c: number = 2;

// console.log(a / b);
// console.log(c * b);

// Lecture 2 : Common Types

// let myName: string = "Aftab";
let meaningOfLIfe: number;
let isLoading: boolean;
let album: string | number | boolean; //union types

// myName = "John";
meaningOfLIfe = 2;
isLoading = false;
album = true;

const sum = (a: number, b: string) => {
  return a + b;
};

const result = sum(5, "A");

// console.log(result);

let re: RegExp = /\w+/g;

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
let newArr: (string | number)[] = [];
newArr.push(25, "a");
// console.log(newArr);

// Tuple : Strict arr instead of normal arr

let tupple: [string, number, boolean] = ["Aftab", 22, true];

let mixed = ["sonu", 1, false];

mixed = tupple;
// tupple = mixed;

tupple[1] = 5;
// tupple[2] = 5;

// Objects

let myObj: object;
myObj = [];
// console.log(typeof myObj);

const exampleObj = {
  name: "aftab",
  age: 25,
  isAdult: true,
};

exampleObj.isAdult = false;
// console.log(exampleObj);

// defining the object
// 1st type to define
type newObj = {
  name?: string;
  age: number;
  isHappy?: (boolean | number)[];
};

//2nd way to define using interface
interface newObj2 {
  name: string;
  age: number;
  isHappy?: (boolean | number)[];
}

// using the defined object
let ok: newObj = {
  name: "Aftab",
  age: 25,
  isHappy: [25, true],
};

let ko: newObj = {
  name: "Sonu",
  age: 1,
};

// ok = ko;

const greetMyObj = (ko: newObj) => {
  return `Hi i am ${ko.name?.toLocaleUpperCase()}!`;
};

// console.log(greetMyObj(ko));

// Type Aliases

type name = string;
type age = number;
type isAdult = boolean;
type album = (string | number)[];

type newObj3 = {
  name?: name;
  age: number;
  isAdult: isAdult;
  album: album;
};

const data: newObj3 = {
  name: "Aftab",
  age: 25,
  isAdult: true,
  album: ["a", 22],
};

// console.log(data);

// Literal Types
let myName: "Aftab";

let userName: "Aftab" | "Sonu" | "Don";

userName = "Aftab";

//Functions

const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

// logMsg("HI");
// logMsg(add(1, 1));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = (c, d) => {
  return c * d;
};
// logMsg(multiply(2, 2));

let subtract2: mathFunction = (e, f): number => e - f;
// logMsg(subtract2(5, 4));

// optional parameters

type addThreeNumbers = (a: number, b: number, c?: number) => number;

const addAllNum: addThreeNumbers = (a, b, c) => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
// console.log(addAllNum(1, 2, 3));

// default param
const sumAll = (a: number = 5, b: number, c = 10): number => {
  return a + b + c;
};
// logMsg(sumAll(undefined, 5));

// Rest Parameters
const newNums = [1, 2, 3, 4];
const total = (a: number, b: number, ...nums: number[]): number =>
  a + b + nums.reduce((prev, curr) => prev + curr);
// console.log(total(1, 2, ...newNums));

const createError = (errorMsg: string) => {
  throw new Error(errorMsg);
};

const infinite = () => {
  // never type converted to void
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

const isNUmber = (value: any): boolean =>
  typeof value === "number" ? true : false; // custom typeguard to check number

const isString = (value: any): boolean =>
  typeof value === "string" ? true : false; // custom typeguard to check string

// how to use never type
const numberOrString = (value: number | string): string => {
  if (isString(value)) return "string";
  if (isNUmber(value)) return "number";
  return createError("This is an error");
};
