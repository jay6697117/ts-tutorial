export default {};
// 元组就是数组的变种
// 元组（Tuple）是固定数量的不同类型的元素的组合。
// 元组与集合的不同之处在于，元组中的元素类型可以是不同的，而且数量固定。元组的好处在于可以把多个元素作为一个单元传递。如果一个方法需要返回多个值，可以把这多个值作为元组返回，而不需要创建额外的类来表示。

/* let t: [string, number] = ['11', 22];
console.log('t', t);
t[0] = '33';
console.log('t', t);
let t1: readonly [number,boolean,string,undefined] = [1,true,'sring',undefined];
console.log('t1', t1);
// t1[0] = 2;//无法分配到 "0" ，因为它是只读属性。ts(2540)
// console.log('t1', t1); */

// 当赋值或访问一个已知索引的元素时，会得到正确的类型：
/* let arr:[number,string] = [1,'string'];
console.log(arr[1].length); //success
console.log(arr[0].length); //error：类型“number”上不存在属性“length”。ts(2339)
//数字是没有length 的 */

// 越界元素
// let arr: [number, string] = [1, 'string'];
// // arr.push(false); //error:类型“boolean”的参数不能赋给类型“string | number”的参数。ts(2345)
// arr.push(2); //success
// console.log('arr', arr);// [1, 'string', 2] 这很变态

// 应用场景 例如定义execl返回的数据
let excel: [string, string, number, string][] = [
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123']
];
