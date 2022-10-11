export {};

// 函数的类型

// 1.函数声明
// 1.1在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）：
// // 函数声明（Function Declaration）
// function sum(x, y) {
//   return x + y;
// }

// // 函数表达式（Function Expression）
// let mySum = function (x, y) {
//   return x + y;
// };

// 1.2一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：

// function sum(x: number, y: number): number {
//   return x + y;
// }
// console.log(sum(1,2,3));
// console.log(sum(1));

// 2.函数表达式
// function mySum1(x: number, y: number): number; //重载
// function mySum1(x: number, y: number): number {
//   return x + y;
// }
// // function mySum1(x: number, y: number): number
// // 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// type SumFn = (x: number, y: number) => number;
// let mySum2: SumFn = function (x: number, y: number): number {
//   return x + y;
// };
// // let mySum2: (x: number, y: number) => number

// console.log(mySum1);
// console.log(mySum2);

//3.用接口定义函数的形状
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string): boolean {
//   return source.search(subString) !== -1;
// };
// 采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。

// 4.可选参数
// 前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？
// 与接口中的可选属性类似，我们用 ? 表示可选的参数：
// function buildName(firstName: string, lastName?: string) {
//   if (lastName) {
//     return firstName + ' : ' + lastName;
//   } else {
//     return firstName;
//   }
// }
// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName('Tom');
// console.log('tomcat:', tomcat);
// console.log('tom:', tom);

// 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了：
// function buildName(firstName?: string, lastName: string) {
// function buildName(firstName?: string) {
//   // if (firstName) {
//   //   return firstName + ' ' + lastName;
//   // } else {
//   //   return lastName;
//   // }
//   if (firstName) {
//     return firstName;
//   } else {
//     return '空';
//   }
// }
// let tom = buildName('Tom'); //string
// let unde = buildName(undefined); //undefined
// let noparam = buildName(); //undefined
// console.log('tom :>> ', tom);
// console.log('unde :>> ', unde);
// console.log('noparam :>> ', noparam);
// index.ts(1,40): error TS1016: A required parameter cannot follow an optional parameter.

// 5.参数默认值
// 在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：
function buildName(firstName: string = 'Tom6', lastName: string = 'Cat6') {
  return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let catNo = buildName('Tom');
let allNo = buildName();
let tomUnde = buildName(undefined, 'Cat');
let catUnde = buildName('Tom', undefined);
let allUnde = buildName(undefined, undefined);

console.log('tomcat :>> ', tomcat);
console.log('catNo :>> ', catNo);
console.log('allNo :>> ', allNo);
console.log('tomUnde :>> ', tomUnde);
console.log('catUnde :>> ', catUnde);
console.log('allUnde :>> ', allUnde);

// function buildName(firstName?: string, lastName?: string): string
