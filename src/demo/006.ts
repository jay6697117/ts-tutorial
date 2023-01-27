export default {};
export function printResult(param: any, tag: string = 'h1'): void {
  param = JSON.stringify(param);
  const node = document.createElement(tag);
  const hr = document.createElement('hr');
  node.innerHTML = param;
  document.body.appendChild(node);
  document.body.appendChild(hr);
}

//例如我们的手机号通常是13XXXXXXX 为数字类型 这时候产品说需要支持座机
//所以我们就可以使用联合类型支持座机字符串
// let myPhone0: number | string | undefined  = '010-820';
// printResult(myPhone0);

//这样写是会报错的应为我们的联合类型只有数字和字符串并没有布尔值
// let myPhone1: number | string  = true;
// printResult(myPhone1);

// 函数使用联合类型、
// const foo = (p?: string | number | boolean): boolean => {
//   return !!p;
// };
// printResult(foo('111'));
// printResult(foo(111));
// printResult(foo(false));

// 交叉类型
// interface People {
//   age: number;
//   height: number;
// }
// interface Man {
//   sex: string;
// }
// const xiaoman = (man: People & Man) => {
//   console.log(man.age);
//   console.log(man.height);
//   console.log(man.sex);
// };
// printResult({ age: 18, height: 180, sex: 'male' });

// interface A {
//   inner: D;
// }
// interface B {
//   inner: E;
// }
// interface C {
//   inner: F;
// }
// interface D {
//   d: boolean;
// }
// interface E {
//   e: string;
// }
// interface F {
//   f: number;
// }
// type ABC = A & B & C;
// let abc: ABC = {
//   inner: {
//     d: false,
//     e: 'className',
//     f: 5
//   }
// };
// printResult(abc);

// 类型断言
// 语法1:
// 值 as 类型 value as string
// 语法2:
// <类型>值 <string>value
// interface A {
//   run: string;
// }
// interface B {
//   build: string;
// }
// const fn = (type: A & B): string =>  {
//   return type.run; // type: A & B 不会报错
// };
// const fn = (type: A | B): string => {
//   return type.run;//type: A ｜ B这样写是有警告, 因为B的接口上面是没有定义run这个属性的
// };
// const fn = (type: A | B): string => {
//   return (type as A).run; //可以使用类型断言来推断他传入的是A接口的值
//   // return (<A>type).run; //可以使用类型断言来推断他传入的是A接口的值
// };
// 需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误

// window.abc = 123
//这样写会报错因为window没有abc这个东西
// (window as any).abc = 123;
// //可以使用any临时断言在 any 类型的变量上，访问任何属性都是允许的。
// printResult((window as any).abc);

// const names = '小满';
// // names = 'aa'; //无法修改
// let names1 = '小满1';
// names1 = 'aaa1'; //无法修改
// printResult(names1);
// let names2 = 'aaa2' as const;
// // names2 = 'aa'; //无法修改


// 数组
// let a1 = [10, 20] as const;
// const a2 = [10, 20];
// a2.unshift(30); // 通过，没有修改指针
// printResult(a2);
// a1.unshift(30); // 通过，没有修改指针
// printResult(a1);
// a1.unshift(30); // 错误，此时已经断言字面量为[10, 20],数据无法做任何修改


// 类型断言是不具影响力的
// 在下面的例子中，将 something 断言为 boolean 虽然可以通过编译，但是并没有什么用 并不会影响结果, 因为编译过程中会删除类型断言
function toBoolean(something: any): boolean {
  return something as boolean;
}

printResult(toBoolean('hello world'));
