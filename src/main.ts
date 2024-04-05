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
