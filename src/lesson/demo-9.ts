export {};

// (一): 泛型

// 定义
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

// 1.简单的例子
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

// 2.多个类型参数
// 定义泛型的时候，可以一次定义多个类型参数：
/* function swap<S, N, B>(tupleParam: [S, N, B]): [B, N, S] {
  const result: [B, N, S] = [tupleParam[2], tupleParam[1], tupleParam[0]];
  return result;
}
const res = swap<string, number, boolean>(['hello', 123, false]);
console.log('res', res); */

// 3.泛型约束
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


// 多个类型参数之间也可以互相约束：
// function copyFields<T extends S, S>(target: T, source: S): T {
//   for (let key in source) {
//       target[key] = (<T>source)[key];
//   }
//   return target;
// }


function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <U>(arg: U) => U = identity;
console.log(myIdentity);
