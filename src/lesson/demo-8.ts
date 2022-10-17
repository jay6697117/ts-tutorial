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
