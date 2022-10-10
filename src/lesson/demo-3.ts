export {};

// 1.什么是类型推论
// 以下代码虽然没有指定类型，但是会在编译的时候报错：
// let myFavoriteNumber = 'seven'; //let myFavoriteNumber: string
// 等价于
// let myFavoriteNumber: string = 'seven'; //let myFavoriteNumber: string
// let myFavoriteNumber; //let myFavoriteNumber: any
// myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
// myFavoriteNumber = '你好';
// console.log('myFavoriteNumber :>> ', myFavoriteNumber);

// TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
let myFavoriteNumber; //let myFavoriteNumber: any
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
