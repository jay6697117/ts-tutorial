export {};

// (一) 类型断言
// 类型断言（Type Assertion）可以用来手动指定一个值的类型。

// 1.语法
// let a: string = 'hello';
// let b1: number = a as any;
// // let b2: number = <any>a;//不推荐
// console.log('b1 :>> ', b1);
// // console.log('b2 :>> ', b2);//不推荐
// 在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 值 as 类型
// 故建议大家在使用类型断言时，统一使用 值 as 类型 这样的语法，本书中也会贯彻这一思想

// 2.类型断言的用途
// 将一个联合类型断言为其中一个类型
// interface Cat {
//   name: string;
//   run(): void;
// }

// interface Fish {
//   name: number;
//   swim(): void;
// }

// function getName(animal: Cat | Fish) {
//   if (typeof (animal as Cat).run === 'function') {
//     console.log(1, typeof (animal as Cat).run, (animal as Cat).run);
//     return 'string:' + animal.name;
//   }
//   if (typeof (animal as Fish).swim === 'function') {
//     console.log(2, typeof (animal as Fish).swim, (animal as Fish).swim);
//     return 'number:' + animal.name;
//   }
// }

// const res1 = getName({
//   name: 'jack',
//   run() {
//     console.log('run');
//   }
// });

// const res2 = getName({
//   name: 123,
//   swim() {
//     console.log('swim');
//   }
// });
// console.log('res1 :>> ', res1);
// console.log('res2 :>> ', res2);

// interface Cat {
//   name: string;
//   run(): void;
// }
// interface Fish {
//   name: string;
//   swim(): void;
// }
// function swim(animal?: Cat | Fish) {
//   (animal as Cat).run();
//   (animal as Fish).swim();
// }
// const tom: Cat | Fish = {
//   name: 'Tom',
//   run() {
//     console.log('run');
//   },
//   swim() {
//     console.log('swim');
//   }
// };
// swim(tom);
// Uncaught TypeError: animal.swim is not a function`
// 总之，使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。

// 3.将一个父类断言为更加具体的子类
// 当类之间有继承关系时，类型断言也是很常见的：

// 3.1
// class ApiError extends Error {
//   code: number = 0;
// }
// class HttpError extends Error {
//   statusCode: string = '';
// }

// interface ApiError extends Error {
//   code: number;
// }
// interface HttpError extends Error {
//   statusCode: string;
// }

// function isApiErrorFn(error: Error) {
//   if (typeof (error as ApiError).code === 'number') {
//   // if (error instanceof ApiError) {
//     // return true;
//     return 'ApiError 111';
//     } else if (typeof (error as HttpError).statusCode === 'string') {
//   // } else if (error instanceof HttpError) {
//     // return true;
//     return 'HttpError 222';
//   }
//   return 'Error 333';
//   // return false;
// }
// const err1 = new Error('i am error 1');
// const err2 = new ApiError('i am error 2');
// const err3 = new HttpError('i am error 3');
// // console.dir(err1);
// // console.dir(err2);
// // console.dir(err3);
// const res1 = isApiErrorFn(err1);
// const res2 = isApiErrorFn(err2);
// const res3 = isApiErrorFn(err3);
// // console.log('err1:', err1);
// console.log('res1:', res1);
// // console.log('err2:', err2);
// console.log('res2:', res2);
// // console.log('err3:', err3);
// console.log('res3:', res3);

// 3.2
// class ApiError extends Error {
//   code: number = 0;
// }
// class HttpError extends Error {
//   statusCode: string = '';
// }

// interface ApiError extends Error {
//   code: number;
// }
// interface HttpError extends Error {
//   statusCode: string;
// }

// function isApiErrorFn(error: Error) {
//   if (typeof (error as ApiError).code === 'number') {
//     return 'ApiError 111';
//   } else if (typeof (error as HttpError).statusCode === 'string') {
//     return 'HttpError 222';
//   }
//   return 'Error 333';
// }
// const err1 = new Error('i am error 1');
// const err2 = new ApiError('i am error 2');
// const err3 = new HttpError('i am error 3');
// const res1 = isApiErrorFn(err1);
// const res2 = isApiErrorFn(err2);
// const res3 = isApiErrorFn(err3);
// console.log('res1:', res1);
// console.log('res2:', res2);
// console.log('res3:', res3);

// 4.将任何一个类型断言为 any
// const foo:number = 666;
// const foo:string = '666';
// console.log(foo,(foo as any).length);
// 此时我们可以使用 as any 临时将 foo 断言为 any 类型：
// 在 any 类型的变量上，访问任何属性都是允许的。
// 它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any

// 5.将 any 断言为一个具体的类型
// function getCacheData(key: string): any {
//   return (window as any).cache[key];
//   // return (window as any)['cache'][key];
// }
// (window as any).cache = {
//   tom: {
//     name: 'tom',
//     age: 11,
//     run() {
//       console.log('tom can run...');
//     }
//   },
//   jack: {
//     name: 'jack',
//     age: 12,
//     eat() {
//       console.log('jack can eat...');
//     }
//   }
// };
// interface Tom {
//   name: string;
//   age: number;
//   run(): void;
// }
// interface Jack {
//   name: string;
//   age: number;
//   eat(): void;
// }
// const res1 = getCacheData('tom') as Tom;
// res1.run();
// const res2 = getCacheData('jack') as Jack;
// res2.eat();
// 上面的例子中，我们调用完 getCacheData 之后，立即将它断言为 Cat 类型。这样的话明确了 tom 的类型，后续对 tom 的访问时就有了代码补全，提高了代码的可维护性。

// 6.类型断言的限制
// interface Animal {
//   name: string;
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// // interface Cat extends Animal {
// //   run(): void;
// // }

// function testAnimal(animal: Animal) {
//   return animal as Cat;
// }
// function testCat(cat: Cat) {
//   return cat as Animal;
// }

// let tom: Cat = {
//   name: 'Tom',
//   run: () => {
//     console.log('cat run');
//   }
// };
// let animal: Animal = tom;
// console.log('animal', animal);

// 7.双重断言
// interface Cat {
//   run(): void;
// }

// // interface Fish {
// //   swim(): void;
// // }

// // interface Fish {
// //   swim(): void;
// //   run(): void;
// // }

// interface Fish extends Cat {
//   swim(): void;
// }

// class Cat {
//   run() {
//     console.log('cat can run');
//   }
// }

// class Fish extends Cat {
//   swim() {
//     console.log('fish can swim');
//   }
//   run() {
//     console.log('fish can run');
//   }
// }

// const fish = new Fish();
// console.log('fish', fish);

// function isCatFn(cat: Cat) {
//   return cat as any as Fish;
// }

// // const cat = new Cat();
// // const res = isCatFn(cat);
// const res = isCatFn(fish);
// console.log(res);
// res.run();
// // 若你使用了这种双重断言，那么十有八九是非常错误的，它很可能会导致运行时错误。//类型“Fish”上不存在属性“run”。ts(2339)
// // 除非迫不得已，千万别用双重断言。

// 8.类型断言 vs 类型转换
// function getCacheData(key: string): any {
//   return (window as any).cache[key];
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// // const tom = getCacheData('tom') as Cat;
// const tom: Cat = getCacheData('tom');
// console.log('tom', tom);
// tom.run();

// interface Animal {
//   name: string;
// }
// interface Cat {
//   name: string;
//   run(): void;
// }
// const animal: Animal = {
//   name: 'tom'
// };
// console.log('animal', animal)
// let tom = animal as Cat;
// console.log('tom', tom);
// let tom1:Cat = animal; //类型 "Animal" 中缺少属性 "run"，但类型 "Cat" 中需要该属性。ts(2741)
// console.log('tom1', tom1)
// 在上面的例子中，由于 Animal 兼容 Cat，故可以将 animal 断言为 Cat 赋值给 tom。


// TypeScript 是结构类型系统，类型之间的对比只会比较它们最终的结构，而会忽略它们定义时的关系
