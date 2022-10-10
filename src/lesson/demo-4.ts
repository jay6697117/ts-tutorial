export {};

// 联合类型
// 联合类型（Union Types）表示取值可以为多种类型中的一种。

// let myFavoriteNumber: string | number;
// myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// let myFavoriteNumber1: string | number | boolean;
// myFavoriteNumber1 = true;

// 联合类型使用 | 分隔每个类型。
// 这里的 let myFavoriteNumber: string | number 的含义是，允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型。

// 访问联合类型的属性或方法
// function getLength(something: string | number): string {
//   return something.length;
//   // 类型“string | number”上不存在属性“length”。
//   // 类型“number”上不存在属性“length”。ts(2339)
// }

// 访问 string 和 number 的共有属性是没问题的：
// function getString(something: string | number): string | number {
//   return something.toString();
// }

// const a = getString(111);
// console.log('a :>> ', a);
// 上例中，length 不是 string 和 number 的共有属性，所以会报错。

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven'; //推断是string
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;//推断是number
// console.log(myFavoriteNumber.length); // 编译时报错: 类型“number”上不存在属性“length”。ts(2339)

//总结
// 上例中，第二行的 myFavoriteNumber 被推断成了 string，访问它的 length 属性不会报错。
// 而第四行的 myFavoriteNumber 被推断成了 number，访问它的 length 属性时就报错了
