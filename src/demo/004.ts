export default {};
export function printResult(param: any, tag: string): void {
  const node = document.createElement(tag);
  const hr = document.createElement('hr');
  node.innerHTML = param;
  document.body.appendChild(node);
  document.body.appendChild(hr);
}

//这样写是会报错的 因为我们在person定义了a，b但是对象里面缺少b属性
//使用接口约束的时候不能多一个属性也不能少一个属性
//必须与接口保持一致
// interface Person {
//   a:string
//   b?:string,
// }

// const person:Person  = {
//   a:"213"
// };

//重名interface  可以合并
// interface A {
//   name: string;
// }
// interface A {
//   age: number;
// }
// let x: A = { name: 'zjh', age: 19 };
// printResult(JSON.stringify(x), 'h1');

// //继承
// interface A {
//   name: string;
// }
// interface B extends A {
//   age: number;
// }
// let obj: B = {
//   name: 'ytt',
//   age: 18
// };
// printResult(JSON.stringify(obj), 'h1');

//可选属性的含义是该属性可以不存在
//所以说这样写也是没问题的
// interface Person {
//   a: string;
//   b?: string;
// }

// const p1: Person = {
//   a: 'hello string'
// };
// printResult(JSON.stringify(p1),'h1');

//在这个例子当中我们看到接口中并没有定义C但是并没有报错
//应为我们定义了[propName: string]: any;
//允许添加新的任意属性
// interface Person {
//   a: string;
//   b?: string;
//   [propName: string]: any;
// }

// const p2: Person = {
//   a: '111',
//   b: '222',
//   c: 'str',
//   d: false,
//   e: { k1: 1, k2: 2 },
//   f: (param: any):void => {}
// };
// console.log('p2', p2);
// printResult(JSON.stringify(p2), 'h1');

//这样写是会报错的
//应为a是只读的不允许重新赋值
interface Person {
  readonly a: string;
  b?: string;
  [propName: string]: any;
  // fn?(p: any): void;
}

const p3: Person = {
  a: '111',
  c: '333',
  fn: (p: any) => {
    console.log('输出:', p);
  }
};
printResult(JSON.stringify(p3), 'h1');
// p3.a = 123; // 无法分配到 "a" ，因为它是只读属性。ts(2540)
// p3.c = 444;
// printResult(JSON.stringify(p3), 'h1');
// if (p3.fn) {
p3.fn('hello world ' + p3.c);
p3.fn();
// }
