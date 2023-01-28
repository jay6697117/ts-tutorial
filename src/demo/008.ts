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
  constructor(_name: string, _age: number, _some: any) {
    // super('张三', 18, 1);
    super(_name, _age, _some);
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
