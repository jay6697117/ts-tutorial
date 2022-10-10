export {};

// 1.数组的类型

// 1.1 「类型 + 方括号」 表示法
// let fibonacci: number[] = [1, 1, 2, 3, 5];
// let fibonacci1: string[] = ['a', 'b', 'c', 'd', 'e'];
// // let fibonacci2: number[] = [1, '1', 2, 3, 5];
// console.log('fibonacci', fibonacci);
// console.log('fibonacci1', fibonacci1);
// // console.log('fibonacci2', fibonacci2);
// let fibonacci: number[] = [1, 1, 2, 3, 5];
// // fibonacci.push('8');
// fibonacci.push(8);
// console.log('fibonacci', fibonacci);

// 1.2 数组泛型
// let arr: Array<number> = [1, 2, 3, 4, 5];
// console.log('arr', arr);

// 1.3 用接口表示数组
// interface NumberArray {
//   [index: number]: number;
// }
// interface StringArray {
//   [index: number]: string;
// }
// let fibonacci1: NumberArray = [1, 1, 2, 3, 5];
// let fibonacci2: StringArray = ['a', 'b', 'c', 'd', 'e'];
// console.log('fibonacci1:', fibonacci1)
// console.log('fibonacci2:', fibonacci2);

// 类数组
// function sum(...params: number[]) {
//   console.log('params 0:', params);
//   let args: number[] = [...params];
//   // let args: number[] = params;
//   args.push(3);
//   console.log('args:', args);
//   console.log('params 1:', params);
//   return args;
// }
// const res = sum(1, 2);
// console.log('res:', res);

// 类数组
// function sum() {
//   let args: number[] = arguments;
//   console.log('args', args)
// }

// function sum(x: string, y: string) {
//   console.log('参数:', x, y);
//   console.log('arguments:', arguments);
//   // interface IArguments {
//   //   [index: number]: string; // index propName 索引 属性名
//   //   length: number;
//   //   callee: Function;
//   // }
//   interface IArguments {
//     [index: number]: any; // index propName 索引 属性名
//     length: number;
//     callee: Function;
//   }
//   let args: IArguments = arguments;

//   // let args: {
//   //   [index: number]: string; // index propName 索引 属性名
//   //   length: number;
//   //   callee: Function;
//   // } = arguments;

//   console.log('args:', args);
// }

// sum('a', 'b');

// any 在数组中的应用: 一个比较常见的做法是，用 any 表示数组中允许出现任意类型
let list: any[] = [1, 'hello', false, [1, 2, 3], { a: 1, b: 2 }, (a: number, b: number) => a + b];
console.log('list', list);
