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
/*
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
*/

// 使用keyof 约束对象
// 其中使用了TS泛型和泛型约束。首先定义了T类型, 并使用extends关键字继承object类型的子类型，然后使用keyof操作符获取T类型的所有键，它的返回 类型是联合 类型，最后利用extends关键字约束 K类型必须为keyof T联合类型的子类型
/*
type K1 = 'a' | 'b' | 'c';
interface T1 {
  a: number;
  b: number;
  c: number;
}
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
let obj = { a: 1, b: 2, c: 3 };
const res = prop<T1, K1>(obj, 'c');
console.log(res);
*/
// // console.log(prop(o, 'c')); //此时就会报错发现找不到

// keyof 语法: 文章 | https://blog.csdn.net/weixin_44051815/article/details/120866862
// 将类型对应的对象中的属性解构出来，并作为联合类型返回。

// 1.直接作用 interface 类型时， interface 对应的为对象， keyof 将对象中的属性名都结构出来，并作为联合类型返回。
/* interface IPerson {
  name: string;
  age: number;
  sex: 0 | 1;
}
type P1 = keyof IPerson; //keyof返回值是联合类型
interface ITest {
  x: P1;
}
let test: ITest = {
  x: 'sex' // "name" || "age" ||  "sex"
};
console.log('test:', test); */

// 作用于数组时，将数组对应的属性全部作为联合类型返回。
/*
interface IPerson {
  name: string;
  age: number;
  sex: 0 | 1;
}

type P1 = keyof IPerson[];

interface ITest {
  key: P1;
}

let test: ITest = {
  // key: 'length' // length | concat | ...
  // key: 'length' // length | concat | ...
  // key: 'push' // length | concat | ...
  key: 'pop' // length | concat | ...
};
*/

// 作用于类时，效果类似于对象，它将类生成的对象属性，当联合类型返回。
/*
class Person {
  name: string; //this上的name
  age: number; //this上的age
  sex: 0 | 1; //this上的sex

  constructor(p_name: string, p_age: number, p_sex: 0 | 1) {
    this.name = p_name;
    this.age = p_age;
    this.sex = p_sex;
  }
  //Person.prototype 上的getName
  getName(): string {
    return this.name;
  }
  //Person.prototype 上的setName
  setName(p_name: string): void {
    this.name = p_name;
  }
}
//实例s
const obj = new Person('zjh', 1, 1);
console.log('obj:', obj);
//实例e
type K1 = keyof Person;
interface ITest {
  key: K1;
}
let test: ITest = {
  key: 'age' && 'name' && 'sex' && 'setName' && 'getName' // age | name | sex | setName | getName
};
console.log('test:', test);
*/

// 两个参数，第一个参数为对象，第二个参数为对象中的属性名，
// 将对象中对应的属性值返回
// object 代表所有非值类型的类型，例如 数组 对象 函数等，常用于泛型约束 xxxtype extends object
/*
interface T1 {
  a: string;
  b: number;
  c: boolean;
}
type K1 = keyof T1;
// type K1 = 'a' | 'b' | 'c';//这样直接写联合类型也没毛病
const getValue = <T extends object, K extends keyof T>(obj: T, key: K): T[K] => obj[key];
const obj1: T1 = { a: 'hello', b: 666, c: true };
const p1: K1 = 'a' && 'b' && 'c';
const res: T1[K1] = getValue<T1, K1>(obj1, p1);
console.log('res:', res)
 */

// 泛型类
// 声明方法跟函数类似名称后面定义<类型>
// 使用的时候确定类型new Sub<number>()

class Sub<T> {
  attr: T[] = [];
  // addAttr = (a: T): T[] => {
  //   this.attr.push(a);
  //   return this.attr;
  // };
  constructor(attrP: T[]) {
    this.attr = attrP;
  }
  addAttr(a: T): T[] {
    this.attr.push(a);
    return this.attr;
  }
}
console.log('----------------------------');
let s = new Sub<number>([1, 2, 3]);
s.addAttr(4);
s.addAttr(5);
console.log('s:', s);
console.log('----------------------------');
let s1 = new Sub<string>(['a', 'b', 'c']);
s1.addAttr('d');
s1.addAttr('e');
console.log('s1:', s1);
console.log('----------------------------');
