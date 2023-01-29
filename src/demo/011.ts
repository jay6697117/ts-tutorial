export default {};

// let str = "小满zs";
// str  =111; // 不能将类型“number”分配给类型“string”。ts(2322)

// 2.如果你声明变量没有定义类型也没有赋值这时候TS会推断成any类型可以进行任何操作
/* let str; //any
str = 111; // 111
console.log('str', str);
str = true; // true
console.log('str', str);
str = 'hello'; // true
console.log('str', str);
 */
// 类型别名 type
// type 关键字（可以给一个类型定义一个名字）多用于符合类型

// 定义类型别名
// type stringType = string;
// let str: stringType = 'hello';
// console.log('str :>> ', str);

// 定义函数别名
// type funType = (str: string) => string;

// let foo: funType = (str: string): string => str;
// console.log(foo('hello'));

// 定义联合类型别名
// type strNumType = string | number
// let s1: strNumType = 666
// let s2: strNumType = 'hello'
// console.log(s1,s2);

// 定义值的别名
// type valueType = boolean | 0 | '213'
// let v:valueType = false;
// let v1:valueType = true;
// let v2:valueType = 0;
// let v3:valueType = '213';
// console.log('v :>> ', v);
// console.log('v1 :>> ', v1);
// console.log('v2 :>> ', v2);
// console.log('v3 :>> ', v3);
//变量v1 v2 v3 的值  只能是上面valueType定义的值

interface A {
  type: 'foo';
}
interface B {
  type: 'bar';
}
// type A = {
//   type: 'foo';
// };
// type B = {
//   type: 'bar';
// };
type All = A | B;
// type All = {
//   type: 'foo' | 'bar' ;
// };
// interface All {
//   type: 'foo' | 'bar';
// }
function handleValue(val: All) {
  switch (val.type) {
    case 'foo':
      const type1 = val.type;
      console.log('type 1:>> ', type1);
      break;
    case 'bar':
      const type2 = val.type;
      console.log('type 2:>> ', type2);
      break;
    default:
      //兜底逻辑 一般是不会进入这儿如果进来了就是程序异常了
      const exhaustiveCheck: never = val;
      console.log('exhaustiveCheck :>> ', exhaustiveCheck);
      break;
  }
}
handleValue({ type: 'foo' });
handleValue({ type: 'bar' });
