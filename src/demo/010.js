"use strict";
exports.__esModule = true;
exports["default"] = {};
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
// 枚举可以混合字符串和数字成员
var Types;
(function (Types) {
    Types["No"] = "No";
    Types[Types["Yes"] = 1] = "Yes";
})(Types || (Types = {}));
