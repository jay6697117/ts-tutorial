export {};

// 内置对象

// 1.ECMAScript 的内置对象
/* interface BooleanCopy extends Boolean {}
class BooleanCopy1 extends Boolean {}
let b1: BooleanCopy = new Boolean(1);
let b2: Boolean = new Boolean(1);
let b3: Boolean = new BooleanCopy1(1);
let b4: BooleanCopy1 = new BooleanCopy1(1);
console.log('b1', b1);
console.log('b2', b2);
console.log('b3', b3);
console.log('b4', b4) */

/* let e:Error = new Error('i am error');
console.log('e:', e) */

/* let d:Date = new Date();
console.log('d', d, d.getTime())

let r:RegExp = new RegExp(/hello/)
console.log('r', r)
 */

/* let body: HTMLElement = document.body;
let nodeList: NodeListOf<Element> = document.querySelectorAll('.list');
document.addEventListener('click', function(e:MouseEvent) {
  // Do something
  console.log('e', e)
}); */

/* interface PowCopy {
  (x: number, y: number): number;
}

let pow: PowCopy = function (x: number, y: number): number {
  return Math.pow(x, y);
};
const res: number = pow(10, 2);
console.log('res', res); */

// document.addEventListener('click', function (e: MouseEvent) {
//   console.log('e', e);
//   console.log(e.target);
// });

// interface Document extends Node {
//   addEventListener<K extends keyof DocumentEventMap>(
//     type: K,
//     listener: (this: Document, ev: DocumentEventMap[K]) => any,
//     options?: boolean | AddEventListenerOptions
//   ): void;
//   addEventListener(
//     type: string,
//     listener: EventListenerOrEventListenerObject,
//     options?: boolean | AddEventListenerOptions
//   ): void;
// }

//对象形状接口
interface Foo {
  add1(x: any, y: any): any;
  add2(x: any, y: any): any;
  add3(x: number, y: number): number;
  add(x: number, y: number): number;
}

// 函数形状接口
interface Add {
  (x: number, y: number): number;
}

let obj: Foo = {
  add1: function (x, y) {
    return x + y;
  },
  add2(x, y) {
    return x + y;
  },
  add3: function (x: number, y: number): number {
    return x + y;
  },
  add(x: number, y: number): number {
    return x + y;
  }
};
console.log(obj.add1(1, 2));
console.log(obj.add2(1, 2));
console.log(obj.add3(1, 2));
console.log(obj.add(1, 2));
