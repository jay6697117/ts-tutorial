export default {};

// let str = "小满zs";
// str  =111; // 不能将类型“number”分配给类型“string”。ts(2322)

// 2.如果你声明变量没有定义类型也没有赋值这时候TS会推断成any类型可以进行任何操作
let str; //any
str = 111; // 111
console.log('str', str);
str = true; // true
console.log('str', str);
str = 'hello'; // true
console.log('str', str);

// 类型别名 type
