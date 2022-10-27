export {};

// 泛型

// 定义
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

// 一.简单的例子
/*
function createArray<T>(length: number, value: T): Array<T> {
  const tempArr: Array<T> = [];
  for (let index = 0; index < length; index++) {
    tempArr[index] = value;
  }
  return tempArr;
}
const res = createArray<string>(5, 'hello');
// const res = createArray(5, 'hello');
//function createArray<string>(length: number, value: string): string[]
console.log('res:', res);

function createArray1<T>(length: number, value: T): T[] {
  const tempArr: T[] = [];
  for (let index = 0; index < length; index++) {
    tempArr[index] = value;
  }
  return tempArr;
}
const res1 = createArray1<number>(5, 6);
// const res1 = createArray1(5, 6);
// function createArray1<number>(length: number, value: number): number[]
console.log('res1:', res1);
*/

// 总结
// 上例中，我们在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了。

// 二.多个类型参数
// 定义泛型的时候，可以一次定义多个类型参数：
/* function swap<S, N, B>(tupleParam: [S, N, B]): [B, N, S] {
  const result: [B, N, S] = [tupleParam[2], tupleParam[1], tupleParam[0]];
  return result;
}
const res = swap<string, number, boolean>(['hello', 123, false]);
console.log('res', res); */

// 三.泛型约束
// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：
/* function loggingIdentity<T>(arg: T): T {
  // console.log(arg.length);
  return arg;
}
console.log(loggingIdentity<string>('hello'));
console.log(loggingIdentity<string>('hello').length);
// console.log(loggingIdentity<number>(666).length); */
// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'T'.

// 这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束：

/* interface Length {
  length: number;
}

function loggingIdentity<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

console.log(loggingIdentity('aaa'));
 */

/* interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// loggingIdentity(7);
loggingIdentity<string>('7'); */

// 1.多个类型参数之间也可以互相约束：
// 1.1 例子
/*
function copyFields<T extends S, S>(target: T, source: S): T {
  for (let key in source) {
    target[key] = (<T>source)[key];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };
let y = { b: 10, d: 20 };

console.log(copyFields(x, y));

console.log('-----------------------');

interface T1 extends S1 {
  c: number;
  d: boolean;
}
interface S1 {
  a: string;
  b: string;
}

let target: T1 = { a: '333', b: '444', c: 555, d: false };
let source: S1 = { a: '111', b: '222' };
console.log('target:', target);
console.log('source:', source);

function copyFieldsFn<T extends S, S>(target: T, source: S): T {
  for (let key in source) {
    target[key] = (<T>source)[key];
  }
  return target;
}
console.log(copyFieldsFn<T1, S1>(target, source));

// 上两个例子中，我们使用了两个类型参数，其中要求 T 继承 U，这样就保证了 U 上不会出现 T 中不存在的字段。
*/

// let foo: { <T>(arg: T): void };
// foo = function <T>(arg: T): void {
//   console.log(arg);
// };
// foo(13); // 13

/*
// 3. for in 循环
for (const key in source) {
  console.log('key', key);
  console.log('---------------');
  target[key] = (<T>source)[key];
}
source = <T>target;
console.log('target:', target);
console.log('source:', source);
source = <S>target;
console.log('target:', target);
console.log('source:', source);
*/

// 4.TypeScript 中的 箭头 => 和 ES6 中的 箭头 => 区别
/* function identity<T>(arg: T): T {
  return arg;
}
let identity1 = function <T>(arg: T): T {
  return arg;
};
let identity2 = <T>(arg: T): T => arg;

let myIdentity: <U>(arg: U) => U = identity;
console.log(myIdentity);

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}; */
// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的 "类型定义" 中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// 在 ES6 中，=> 叫做箭头函数，应用十分广泛，可以参考 ES6 中的箭头函数。

// 四.泛型接口
// 之前学习过，可以使用接口的方式来定义一个函数需要符合的形状：
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

/* type SearchFunc = {
  <T>(arr: T[], item: T): boolean;
};
interface SearchFunc {
  <T>(arr: T[], item: T): boolean;
}
const mySearch: SearchFunc = function <T>(arr: T[], item: T) {
  return arr.includes(item);
};
const res: boolean = mySearch([1, 'h', false], 'h');
console.log('res:', res);
const res1: boolean = mySearch([1, 'h', false], 2);
console.log('res1:', res1);
 */
/* interface CreateArray {
  <T>(length: number, item: T): T[];
}
// 我们可以把泛型参数提前到接口名上：
// interface CreateArray<T> {
//   (length: number, item: T): T[];
// }
const createArrayFunc: CreateArray = function <T>(length: number, item: T): T[] {
  // 此时在使用泛型接口的时候，需要定义泛型的类型
  // const createArrayFunc: CreateArray<any> = function <T>(length: number, item: T): T[] {
  const result: T[] = [];
  for (let index = 0; index < length; index++) {
    // result.push(item);
    result[index] = item;
  }
  return result;
};

const res = createArrayFunc(5, false);
console.log('res', res);
 */

// 五.泛型类

/* class GenericNumber<T> {
  zeroValue: T | undefined;
  add: ((x: T, y: T) => T) | undefined;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 111;
myGenericNumber.add = function (x: number, y: number): number {
  return x + y;
}; */

/* class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
console.log('myGenericNumber', myGenericNumber);
myGenericNumber.zeroValue = 111;
myGenericNumber.add = function (x: number, y: number): number {
  return x + y;
};
// 1. 属性或参数中使用 ?：表示该属性或参数为可选项
// 2. 属性或参数中使用 !：表示强制解析（告诉typescript编译器，这里一定有值），常用于vue-decorator中的@Prop
// 3. 变量后使用 !：表示类型推断排除null、undefined */

/* function copyFields<T extends S, S>(target: T, source: S): T {
  for (let key in source) {
    // target[key] = (<T>source)[key];
    target[key] = (source as T)[key];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };
let y = { b: 10, d: 20 };

console.log(copyFields(x, y));
 */

// 六.泛型参数的默认类型
// 在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。
/* function createArray<T = string>(length: number, value: T): T[] {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

console.log(createArray(5, 'hello'));
 */
