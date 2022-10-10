export {};

// interface Person {
//   name: string;
//   age: number;
// }
// let tom: Person = {
//   name: 'Tom',
//   age: 25
// };
// console.log('tom :>> ', tom);

// interface Person {
//   name: string;
//   age?: number;
// }

// let tom: Person = {
//   name: 'Tom'
// };

// console.log('tom :>> ', tom);

// interface Person {
//   name: string;
//   age: number;
//   gender:string
// }

// let tom: Person = {
//   name: 'Tom',
//   age: 25,
//   gender: 'male'
// };

// console.log('tom :>> ', tom);

// 可选属性的含义是该属性可以不存在
// interface Person {
//   name: string;
//   age?: number;
// }

// let tom: Person = {
//   name: 'Tom',
//   // age:18
// };
// console.log('tom :>> ', tom);

// 这时仍然不允许添加未定义的属性：
// interface Person {
//   name: string;
//   age?: number;
// }

// let tom: Person = {
//   name: 'Tom',
//   age: 25,
//   gender: 'male'
// };

// 不能将类型“{ name: string; age: number; gender: string; }”分配给类型“Person”。
//   对象文字可以只指定已知属性，并且“gender”不在类型“Person”中。ts(2322)

// 任意属性
// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: any;
// }

// let tom: Person = {
//   name: 'Tom',
//   age: undefined || 18,
//   gender: 'male',
//   a: '1',
//   b: 2,
//   c: false
// };
// console.log('tom:', tom);

// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: string;
// }

// type Person = {
//   name: string;
//   age?: number;
//   [propName: string]: string | number | undefined;
// };

// let tom: Person = {
//   name: 'Tom',
//   age: 25,
//   gender: 'male'
// };
// console.log('tom', tom)

// 上例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。

// 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：
// interface Person {
//   name: string;
//   age?: number;
//   isMale?: boolean;
//   [propName: string]: string | number | boolean | undefined;
// }
// let tom: Person = {
//   name: 'Tom',
//   age: 25,
//   isMale: true
// };
// console.log('tom:', tom);

// 只读属性
// interface Person {
//   readonly id: number;
//   name: string;
//   age?: number;
//   isMale: boolean;
//   [propName: string]: any;
// }

// let tom: Person = {
//   id: 89757,
//   name: 'Tom',
//   isMale: true,
//   gender: 'male'
// };

// console.log('tom', tom);

// tom.id = 9527; // 无法分配到 "id" ，因为它是只读属性。ts(2540)
// 上例中，使用 readonly 定义的属性 id 初始化后，又被赋值了，所以报错了。


// interface Person {
//   readonly id: number;
//   name: string;
//   age?: number;
//   [propName: string]: any;
// }
// let tom: Person = {
//   // id: 369,
//   name: 'Tom',
//   gender: 'male'
// };
// console.log('tom', tom)
// tom.id = 89757;

// // 上例中，报错信息有两处，第一处是在对 tom 进行赋值的时候，没有给 id 赋值。
