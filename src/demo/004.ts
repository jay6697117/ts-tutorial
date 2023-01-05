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
