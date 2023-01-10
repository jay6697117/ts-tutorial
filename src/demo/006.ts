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
interface A {
  run: string;
}
interface B {
  build: string;
}
const fn = (type: A & B): string => {
  return type.run;
};
// const fn = (type: A | B): string => {
//   return type.run;
// };
// type: A & B 不会报错
//type: A ｜ B这样写是有警告, 因为B的接口上面是没有定义run这个属性的
