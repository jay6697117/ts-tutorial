export default {};
//用范型定义数组
// function num (a:number,b:number) : Array<number> {
//   return [a ,b];
// }
// function str1 (a:string,b:string) : Array<string> {
//   return [a ,b];
// }
// console.log(num(1,2));
// console.log(str1('独孤','求败'))

// 泛型优化
// 语法为函数名字后面跟一个<参数名> 参数名可以随便写 例如我这儿写了T
// 当我们使用这个函数的时候把参数的类型传进去就可以了 （也就是动态类型）
// function fn<T>(a: T, b: T): Array<T> {
//   return [a, b];
// }
// console.log(fn<number>(1, 2));
// console.log(fn<string>('独孤', '求败'));

// 我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
// function foo<T, U>(a: T, b: U): Array<T | U> {
//   const params: Array<T | U> = [a, b];
//   return params;
// }

// console.log(foo<boolean, number>(false, 1));
// console.log(foo<symbol, string>(Symbol('key'), 'hello'));

// 定义泛型接口
// 声明接口的时候 在名字后面加一个<参数>
// 使用的时候传递类型
// interface MyInter<T> {
//   (arg: T): T;
// }

// function fn<T>(arg: T): T {
//   return arg;
// }
// let result: MyInter<number> = fn;
// console.log(result(123))
// let result1: MyInter<string> = fn;
// console.log(result1('hello'))

// 对象字面量泛型
// let foo: { <T>(arg: T): T };
// foo = function <T>(arg: T): T {
//   return arg;
// };
// console.log(foo(123))

// 泛型约束
interface Len {
  length: number;
}
interface Len1 {
  length: number;
}
function getLen<T extends Len>(arg: T): number {
  return arg.length;
}
console.log(getLen<string>('aaa'));
console.log(getLen<Len1>({ length: 5 }));
