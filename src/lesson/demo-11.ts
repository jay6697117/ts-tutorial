export {};

// 内置对象
// 1.ECMAScript 的内置对象
interface BooleanCopy extends Boolean {}
class BooleanCopy1 extends Boolean {}

let b1: BooleanCopy = new Boolean(1);
let b2: Boolean = new Boolean(1);
let b3: Boolean = new BooleanCopy1(1);
let b4: BooleanCopy1 = new BooleanCopy1(1);
console.log('b1', b1);
console.log('b2', b2);
console.log('b3', b3);
console.log('b4', b4)
