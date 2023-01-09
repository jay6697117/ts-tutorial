import { type } from 'os';

export default {};
export function printResult(param: any, tag: string = 'h1'): void {
  param = JSON.stringify(param);
  const node = document.createElement(tag);
  const hr = document.createElement('hr');
  node.innerHTML = param;
  document.body.appendChild(node);
  document.body.appendChild(hr);
}

// 1.函数的类型
// const foo = (name: string, age: number = 18): string => {
//   return `我是${name}, 我今年${age}岁`;
// };
// printResult(foo('张金辉'));
// printResult(foo('李世民', 20));

//通过?表示该参数为可选参数
// const fn = (name: string, age?: number): any => {
//   return name + (age || 0) + '岁';
// };

// printResult(fn('张三'));
// printResult(fn('李四', 11));

// 函数参数的默认值
// const fn = (name: string, age: number = 0): any => {
//   return name + (age || 10) + '岁';
// };
// printResult(fn('张三'));
// printResult(fn('李四', 11));

// 接口定义函数
//定义参数 num 和 num2  ：后面定义返回值的类型
// interface Add {
//   (num: number, num2: number): number;
// }
// const fn: Add = (num1: number, num2: number): number => {
//   return num1 + num2;
// };
// printResult(fn(5, 5));

// interface User {
//   name: string;
//   age: number;
// }
// function getUserInfo(user: User): User {
//   return user;
// }
// printResult(getUserInfo({name:'zjh',age:35}));

// 定义剩余参数
// const fn1 = (arr: number[], ...items: any[]): any[] => {
//   console.log(arr, items);
//   return items;
// };
// let a: number[] = [1, 2, 3];
// printResult(fn1(a, '4', '5', '6'));

// 函数重载
// 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
// 如果参数类型不同，则参数类型应设置为 any。
// 参数数量不同你可以将不同的参数设置为可选。

// function fn(params0: number): void;
// function fn(params0: string, params1: number): void;

// function fn(params0: number): number;
// function fn(params0: string, params1: number): string;
function fn(params0: any, params1?: any): any {
  // function fn(params0: any, params1?: any): void {
  if (typeof params0 === 'number') {
    return params0;
  }
  if (typeof params0 === 'string') {
    return params0 + params1;
  }
  console.log(params0);
  console.log(params1);

  return params0 +' - '+ params1;
}

printResult(fn(123));
console.log('-------------------------------');
printResult(fn('123', 456));
console.log('-------------------------------');
printResult(fn([1, 2, 3]));
