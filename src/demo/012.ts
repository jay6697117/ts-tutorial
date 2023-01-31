export default {};
// let s1:symbol = Symbol();
// let s2:symbol = Symbol('key');
// let s3:symbol = Symbol();
// console.log('s1 :>> ', s1);
// console.log('s2 :>> ', s2);
// console.log(s1 === s3);//Symbol的值是唯一的

// let sym = Symbol();
// let obj = {
//     [sym]: "hello 666"
// };
// console.log(obj[sym]); // hello 666

// 使用symbol定义的属性，是不能通过如下方式遍历拿到的
const symbol1 = Symbol('11');
const symbol2 = Symbol('22');
const obj1 = {
  [symbol1]: '小满',
  [symbol2]: '二蛋',
  age: 19,
  sex: '女'
};
// // 1 for in 遍历
// for (const key in obj1) {
//   if (Object.prototype.hasOwnProperty.call(obj1, key)) {
//     // 注意在console看key,是不是没有遍历到symbol1
//     console.log(key);
//   }
// }
// // 2 Object.keys 遍历
// console.log(Object.keys(obj1));
// // // 3 getOwnPropertyNames
// console.log(Object.getOwnPropertyNames(obj1));
// // // 4 JSON.stringfy
// console.log(JSON.stringify(obj1));

// 如何拿到
// // 1 拿到具体的symbol 属性,对象中有几个就会拿到几个
// console.log(Object.getOwnPropertySymbols(obj1));//只拿到Symbol
// // 2 es6 的 Reflect 拿到对象的所有属性
// console.log(Reflect.ownKeys(obj1));//包括Symbol的全部

// Symbol.iterator 迭代器 和 生成器 for of
// const arr: number[] = [1, 2, 3, 4];
// console.log('arr :', arr);
// const iterator = arr[Symbol.iterator]();
// console.log('iterator :', iterator);
// console.log(iterator.next()); //{ value: 1, done: false }
// console.log(iterator.next()); //{ value: 2, done: false }
// console.log(iterator.next()); //{ value: 3, done: false }
// console.log(iterator.next()); //{ value: 4, done: false }
// console.log(iterator.next()); //{ value: undefined, done: true }

// 测试用例
interface Item {
  age: number;
  name: string;
}

const array: Array<Item> = [
  { age: 123, name: '1' },
  { age: 123, name: '2' },
  { age: 123, name: '3' }
];

type mapTypes = string | number;
const map: Map<mapTypes, mapTypes> = new Map();

map.set('1', '王爷');
map.set('2', '陆北');

const obj = {
  aaa: 123,
  bbb: 456
};

let set: Set<number> = new Set([1, 2, 3, 4, 5, 6]);
// let it:Iterator<Item> = array[Symbol.iterator]()
const gen = (erg: any): void => {
  let it: Iterator<any> = erg[Symbol.iterator]();
  let next: any = { done: false };
  while (!next.done) {
    next = it.next();
    if (!next.done) {
      console.log(next.value);
    }
  }
};
gen(array);
