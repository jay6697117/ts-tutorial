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

interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

function swim(animal: Cat | Fish) {
  (animal as Cat).run();
  (animal as Fish).swim();
}

const tom: Cat | Fish = {
  name: 'Tom',
  // run() {
  //   console.log('run');
  // },
  swim() {
    console.log('swim');
  }
};
swim(tom);
// Uncaught TypeError: animal.swim is not a function`
