export {};

// 一.类
/*
class Button {
  value: any = 'init';
  constructor(value: any) {
    console.log('constructor this.value 1:', this.value)
    this.value = value;
  }
  click = () => {
    console.log('click this.value 2:', this.value);
  };
}
let button = new Button('hello');
setTimeout(button.click, 2000); // hello
*/

/* class Animal {
  public name: any;
  constructor(name: any) {
    this.name = name;
    console.log('Animal constructor this.name:', this.name);
  }
  sayHi() {
    return `你好, 我的名字是${this.name}`;
  }
}
const a = new Animal('大黄狗');
console.log('a:', a);
console.log(a.sayHi());
console.log('----------------');

class Cat extends Animal {
  constructor(catName: any) {
    super(catName);
    console.log('Cat constructor this.name:', this.name);
  }
}
let c = new Cat('汤姆'); // Tom
console.log('c', c)
console.log(c.sayHi()); */

/* class Animal {
  _name: string;
  constructor(name: string) {
    this.name = name;
    this._name = '-' + name + '-';
  }
  get name() {
    console.log('run getter');
    return this._name;
  }
  set name(value) {
    console.log('run setter: ' + value);
    this._name = '-' + value + '-';
  }
}

let a = new Animal('jack'); // setter: Kitty
a.name = '111'
console.log('a', a)
console.log(a.name); */

/*
// ES6中的存取器
class User {
  private _name!: string;
  // public _name!: string;
  // public _name: string = '';

  constructor(name: string) {
    console.log('constructor name: ', name);
    // 调用 setter
    this.name = name; //this.name是 实例中的name
  }

  //name是User.prototype中的name
  public get name() {
    // console.log('###### getter run ######',this._name);
    return this._name;
  }

  //name是User.prototype中的name
  public set name(value) {
    if (value.length < 4) {
      console.log('Name is too short.');
      return;
    }
    this._name = value;
  }
}

let user = new User('John');
console.log('user 1:', user);
console.log('user.name 1:', user.name); // John 调用 getter
// console.log('user._name 1:', user._name);

console.log('--------------------------------');

user = new User('abc'); // Name is too short.
console.log('user 2:', user);
console.log('user.name 2:', user.name); // John 调用 getter
// console.log('user._name 2:', user._name);
*/

// 二.静态方法

/* interface Ani {
  name: string;
  isAnimal: (param: any) => boolean; //更好理解的写法
  // isAnimal(param: any): boolean;
}
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  static isAnimal(param: any): boolean {
    return param instanceof Animal;
  }
  isAnimal(param: any): boolean {
    return param instanceof Animal;
  }
}
let a: Ani = new Animal('Jack');
console.log('a', a);
console.log(Animal.isAnimal(a)); // true
console.log(a.isAnimal(a)); // TypeError: a.isAnimal is not a function */

// 三.ES7 中类的用法
// 三.1.实例属性+静态属性

/* class Animal {
  name:string = 'Jack';
  static age = 42;
  constructor(nameParam:string) {
    this.name = nameParam;
  }
}

let a = new Animal('rose');
console.log(a.name); // Jack
console.log(Animal.age); // 输出静态属性 */


// 三.2.TypeScript 中类的用法
