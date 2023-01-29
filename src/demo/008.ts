export default {};
export function printResult(param: any, tag: string = 'h1'): void {
  param = JSON.stringify(param);
  const node = document.createElement(tag);
  const hr = document.createElement('hr');
  node.innerHTML = param;
  document.body.appendChild(node);
  document.body.appendChild(hr);
}

// 1.ok！那我们在TS 是如何定义类的如下图
/* class Person {
  name: string = '默认姓名'; //默认值
  age: number = 1; //默认值
  constructor(_name: string, _age: number) {
    console.log('constructor:', _name, _age);
    this.name = _name;
    this.age = _age;
  }
  run() {
    console.log('name:', this.name);
    console.log('age:', this.age);
  }
}
const p = new Person('zjh', 33);
console.log('p', p);
p.run(); */

// 2.类的修饰符
// 总共有三个 public private protected
/*
class Person {
  public name: string;
  private age: number;
  // public age: number;
  protected some: any;
  // public some: any;
  constructor(name: string, ages: number, some: any) {
    this.name = name;
    this.age = ages;
    this.some = some;
  }
  run() {}
}

class Man extends Person {
  constructor(...args: [string, number, any]) {
    super(...args);
    console.log('Man constructor args:', args);
    console.log('Man constructor some:', this.some);
  }
  create() {
    console.log('Man create:', this.some);
  }
}
let p = new Person('人', 1, 'hello world');
let m = new Man('zjh', 18, '我出世啦');
console.log('p', p);
console.log('m', m);
console.log(p.name);
// console.log(p.age);
m.create();
// console.log(m.some);
*/

// 3. static 静态属性 和 静态方法
/* class Person {
  public name: string;
  private age: number;
  protected some: any;
  static aaa: any = ['hahaha'];
  static foo: () => void = () => {
    console.log('lalala');
  };
  constructor(name: string, ages: number, some: any) {
    this.name = name;
    this.age = ages;
    this.some = some;
    // this.aaa;//属性“aaa”在类型“Person”上不存在。你的意思是改为访问静态成员“Person.aaa”吗?ts(2576)
    // console.log('Person.aaa 1:', Person.aaa);
    Person.foo();
  }
  say() {}
}
// console.log('Person.aaa 2:', Person.aaa);
Person.foo();
new Person('11', 22, 33); */

// 4.interface 定义 类
/* interface PersonClass1 {
  get(type: boolean): boolean;
  // get: (type: boolean) => boolean;
}
interface PersonClass2 {
  set(): void;
  age: number;
}
class A {
  name: string;
  constructor() {
    this.name = '123';
  }
}
class Person extends A implements PersonClass1, PersonClass2 {
  age: number = 1;
  constructor() {
    super();
    this.age = 18;
  }
  get(type: boolean) {
    return type;
  }
  set() {}
}
const p  = new Person();
console.log('p', p); */

// 5.抽象类
// 应用场景如果你写的类实例化之后毫无用处此时我可以把他定义为抽象类
// 或者你也可以把他作为一个基类-> 通过继承一个派生类去实现基类的一些方法
abstract class A {
  name: string;
  constructor(_name: string) {
    this.name = _name;
  }
  print(): string {
    return this.name;
  }

  abstract getName(): string;
}

class B extends A {
  constructor() {
    super('小满');
    console.log('constructor this.name:', this.name);
  }
  getName(): string {
    return this.name;
  }
}

let b = new B();
console.log('b:', b);
console.log(b.getName());
