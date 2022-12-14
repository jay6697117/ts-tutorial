//1.boolean 布尔值
/* let isDone: boolean = false;
let createdByNewBoolean: Boolean = new Boolean(1);
console.log('createdByNewBoolean :>> ', createdByNewBoolean);
let createdByBoolean: boolean = Boolean(1);
console.log('createdByBoolean :>> ', createdByBoolean); */

// 2.number 数值
/*
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
console.log('111');
*/

// 3.string字符串
/*
let myName: string = 'Tom';
let myAge: number = 25;
console.log('myName:', myName);
console.log('myAge:', myAge);

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
console.log('sentence', sentence);
*/

// 4.空值

function alertName(): void {
  alert('My name is Tom');
  return undefined;
}

let unuseable1: void = undefined;
// let unuseable2:void = null;
console.log('unuseable1', unuseable1);
// console.log('unuseable2', unuseable2)

export default {};
