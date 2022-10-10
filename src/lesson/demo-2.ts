export {};

// 1.任意值
// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7; //不能将类型“number”分配给类型“string”。ts(2322)

// 但如果是 any 类型，则允许被赋值为任意类型。
// let myFavoriteAny: any = 'seven';
// console.log('myFavoriteAny 1:', typeof myFavoriteAny, myFavoriteAny);
// myFavoriteAny = 123;
// console.log('myFavoriteAny 2: ', typeof myFavoriteAny, myFavoriteAny);

// 在任意值上访问任何属性都是允许的：
// let anyThing: any = 'hello';
// console.log(anyThing.aaaa);
// console.log(anyThing.bbbb.cccc);

// 也允许调用任何方法：
// let anyThing1: any = 'Tom';
// anyThing1.setName('Jerry');
// anyThing1.setName('Jerry').sayHello();
// anyThing1.myName.setFirstName('Cat');
// 总结: 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let a: any;
console.log('a :>> ', a);
a = 'hello';
console.log('a :>> ', a);
a = 123;
console.log('a :>> ', a);
