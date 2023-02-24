export {}
// 1.非空断言
// type T = string | null | undefined;
// function handler(arg: T) {
//   let str = arg!; //表明arg不可能是null || undefined
//   return (str as any).split('')
// }
// console.log(handler('1')); //应有 1 个参数，但获得 0 个。ts(2554)
