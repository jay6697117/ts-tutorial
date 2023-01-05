export default {};
export function printResult(param: any, tag: string): void {
  const node = document.createElement(tag);
  const hr = document.createElement('hr');
  node.innerHTML = param;
  document.body.appendChild(node);
  document.body.appendChild(hr);
}

interface Object1 {
  /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
  constructor: Function;

  /** Returns a string representation of an object. */
  toString(): string;

  /** Returns a date converted to a string using the current locale. */
  toLocaleString(): string;

  /** Returns the primitive value of the specified object. */
  valueOf(): Object;

  /**
   * Determines whether an object has a property with the specified name.
   * @param v A property name.
   */
  hasOwnProperty(v: PropertyKey): boolean;

  /**
   * Determines whether an object exists in another object's prototype chain.
   * @param v Another object whose prototype chain is to be checked.
   */
  isPrototypeOf(v: Object): boolean;

  /**
   * Determines whether a specified property is enumerable.
   * @param v A property name.
   */
  propertyIsEnumerable(v: PropertyKey): boolean;
}

// 1.Object
// Object类型是所有Object类的实例的类型。 由以下两个接口来定义：
// Object 接口定义了 Object.prototype 原型对象上的属性;
// ObjectConstructor 接口定义了 Object 类的属性， 如上面提到的 Object.create();
// 这个类型是跟原型链有关的原型链顶层就是Object，所以值类型和引用类型最终都指向Object，所以他包含所有类型;

// 2.object 代表所有非值类型的类型，例如 数组 对象 函数等，常用于泛型约束
let obj: object = {};
let obj1: object = [];
let obj2: object = () => {};
// let obj3: object = 123; // 不能将类型“number”分配给类型“object”。ts(2322)
// let obj4: object = '123'; // 不能将类型“string”分配给类型“object”。ts(2322)
// let obj5: object = false; // 不能将类型“boolean”分配给类型“object”。ts(2322)
let arr: Array<object> = [{}, [], () => {}];


// 3.{}
// 看起来很别扭的一个东西 你可以把他理解成new Object 就和我们的第一个Object基本一样 包含所有类型
// tips 字面量模式是不能修改值的
let zjl: {} = {name:'hahaha'};
let zjl1: {} = [];
let zjl2: {} = () => {};
let zjl3: {} = 123;
let zjl4: {} = '123';
let zjl5: {} = false;
let zjl6: Array<{}> = [{name:1}, [], () => {},123,'123',false];

// zjl.name = 'lalala'; //类型“{}”上不存在属性“name”。ts(2339)
