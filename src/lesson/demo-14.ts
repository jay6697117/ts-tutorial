export {}

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
/*
class Animal {
  private name:string;
  public constructor(name:string) {
    this.name = name;
  }
}
let a = new Animal('Jack');
// console.log(a.name);
// a.name = 'Tom';
// 需要注意的是，TypeScript 编译之后的代码中，并没有限制 private 属性在外部的可访问性
 */

/*
class Animal {
  // public name: string;
  // private name: string;//TS2341: Property 'name' is private and only accessible within class 'Animal'
  protected name: string;//如果是用 protected 修饰，则允许在子类中访问
  public constructor(nameParam: string) {
    this.name = nameParam;
  }
}
class Dog extends Animal {
  public constructor(nameParam: string) {
    //可以把super理解为类的constructor函数
    super(nameParam);
    console.log('Dog this.name', this.name);
  }
}
const dog = new Dog('阿黄');
console.log('dog', dog);
*/

/*
class Animal {
  public name: string;
  // public constructor(nameParam:string) {
  // 当构造函数修饰为 private 时，该类不允许被继承或者实例化：
  // private constructor(nameParam:string) {
  // 当构造函数修饰为 protected 时，该类只允许被继承：
  protected constructor(nameParam: string) {
    this.name = nameParam;
  }
}
class Cat extends Animal {
  //无法扩展类“Animal”。类构造函数标记为私有。ts(2675)
  constructor(nameParam: string) {
    super(nameParam);
  }
}

// let a = new Animal('Jack'); //类“Animal”的构造函数是私有的/受保护的，仅可在类声明中访问。ts(2673)
// console.log('a', a);
let c = new Cat('rose');
console.log('c', c);
*/

// 三.3.参数属性
/* class Animal {
  // public name: string;
  public constructor(private nameParam: string) {
    console.log('constructor nameParam:', nameParam);
    // this.name = nameParam;
  }
}

let a = new Animal('ee');
console.log('a:', a);
// console.log('a.name:', a.name);
// console.log('a.nameParam:', a.nameParam)

// 修饰符和readonly还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值，使代码更简洁 */

// 三.4.readonly
// 只读属性关键字，只允许出现在属性声明或索引签名或构造函数中
// 注意如果 readonly 和其他访问修饰符同时存在的话，需要写在其后面
/*
class Animal {
  public readonly name:string;
  public constructor(public readonly nameParam:string) {
    this.name = nameParam;
  }
}
let a = new Animal('Jack');
console.log('a', a)
console.log('a.name:', a.name); // Jack
console.log('a.nameParam:', a.nameParam); // Jack
// a.name = 'Tom';//无法分配到 "name" ，因为它是只读属性。ts(2540)
// a.nameParam = 'Tom1';//无法分配到 "nameParam" ，因为它是只读属性。ts(2540)
// index.ts(10,3): TS2540: Cannot assign to 'name' because it is a read-only property.
*/

// 三.5.抽象类
// abstract 用于定义抽象类和其中的抽象方法
// abstract class Animal {
//   public name: string;
//   public constructor(nameParam: string) {
//     this.name = nameParam;
//   }
//   public abstract sayHi(): void;
// }

/* abstract class Animal {
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public abstract sayHi(): string;
}

class Cat extends Animal {
  public constructor (name: string){
    super(name)
  }
  public eat() {
    console.log(`${this.name} is eating.`);
  }
  public sayHi() {
    return 'cat say hi ～～～';
  }
}

let cat = new Cat('Tom');
console.log('cat', cat)
console.log(cat.sayHi()); */

/*
abstract class Animal {
  public name: string;
  public age: number;
  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public abstract sayHi(): void;
}

class Cat extends Animal {
  // 这里会默认执行
  public constructor(name: string, age: number) {
    console.log('arguments', arguments);
    const args = Array.from(arguments); //最好用这个
    console.log('args', args);
    super(name, age);
  }
  public sayHi() {
    console.log(`Meow, My name is ${this.name}`);
  }
}

let cat = new Cat('Tom', 30);
console.log('cat', cat);
cat.sayHi();
*/

// 三.6.类的类型
// 给类加上 TypeScript 的类型很简单，与接口类似：
class Animal {
  name: string
  constructor(nameParam: string) {
    this.name = nameParam
  }
  sayHi(): string {
    return `My name is ${this.name}`
  }
}

let a: Animal = new Animal('Jack')
console.log('a :>> ', a)
console.log(a.sayHi()) // My name is Jack
