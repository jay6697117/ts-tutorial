let u1: undefined = undefined;
let n1: null = null;
console.log('u1 :>> ', u1);
console.log('n1 :>> ', n1);

// let num: number = undefined; // 不能将类型“undefined”分配给类型“number”。ts(2322)
// console.log('num :>> ', num);
// let u2: undefined;
// let str: string = u2; // 不能将类型“undefined”分配给类型“string”。ts(2322)
// console.log('str :>> ', str);

let v: void;
console.log('v :>> ', v);
// let n2: number = v; // 不能将类型“void”分配给类型“number”。ts(2322)
// console.log('n2 :>> ', n2);

export {};
