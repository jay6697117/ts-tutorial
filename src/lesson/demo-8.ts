export {};

// (一) 类型断言
// 类型断言（Type Assertion）可以用来手动指定一个值的类型。

// 1.语法
// let a: string = 'hello';
// let b1: number = a as any;
// // let b2: number = <any>a;//不推荐
// console.log('b1 :>> ', b1);
// // console.log('b2 :>> ', b2);//不推荐
// 在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 值 as 类型
// 故建议大家在使用类型断言时，统一使用 值 as 类型 这样的语法，本书中也会贯彻这一思想

// 2.类型断言的用途
