export default {};
// 在javaScript中是没有枚举的概念的TS帮我们定义了枚举这个类型
// 使用枚举 通过enum关键字定义我们的枚举
// 1.数字枚举
// 例如 红绿蓝 Red = 0 Green = 1 Blue= 2 分别代表红色0 绿色为1 蓝色为2

// enum ColorTypes {
//   Red = 0,
//   Green = 1,
//   Blue = 2
// }

// // 增长枚举
// enum ColorTypes {
//   Red = 10,
//   Green,
//   Blue
// }

// 2.字符串枚举
// 字符串枚举的概念很简单。 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
// enum StringTypes{
//   Red = 'red',
//   Green = 'green',
//   BLue = 'blue'
// }

// 3.异构枚举
// enum Types {
//   No = 'No',
//   Yes = 1
// }

// 4.接口枚举
// 定义一个枚举Types 定义一个接口A 他有一个属性red 值为Types.yyds
// 声明对象的时候要遵循这个规则
// enum ColorTypes {
//   Red = 10,
//   Green,
//   Blue
// }
// enum Types {
//   yyds = 100,
//   dddd = 'hello'
// }
// interface A {
//   red: Types.yyds; // red: 100
//   // red: number;
// }
// let obj: A = {
//   red: Types.yyds // red: 100
// };
// console.log('obj', obj);

// 5.const枚举
// let  和 var 都是不允许的声明只能使用const
// 大多数情况下，枚举是十分有效的方案。 然而在某些情况下需求很严格。 为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问，我们可以使用 const枚举。 常量枚举通过在枚举上使用 const修饰符来定义
// const 声明的枚举会被编译成常量
// 普通声明的枚举编译完后是个对象
// const enum Types {
//   num = 100,
//   str = 'hello'
// }
// interface A {
//   [propName: string]: any;
// }
// let obj: A = {
//   num: Types.num,
//   str: Types.str
// };
// console.log('obj', obj);


// 6.反向映射
// 它包含了正向映射（ name -> value）和反向映射（ value -> name）
// 要注意的是 不会为字符串枚举成员生成反向映射。
enum Enum {
  fall = 100
  // fall = 'yes'
}
console.log(Enum.fall); //100
console.log(Enum[100]); //fall
