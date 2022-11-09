export {}

// 一.字符串字面量类型

// 字符串字面量类型用来约束取值只能是某几个字符串中的一个。

/* type StringName = 'hello' | 'world' | 'good';

function testStringName(str: StringName): void {
  console.log(str);
}

testStringName('hello'); */

// 1. 属性或参数中使用 ?：表示该属性或参数为可选项
// 2. 属性或参数中使用 !：表示强制解析（告诉typescript编译器，这里一定有值），常用于vue-decorator中的@Prop
// 3. 变量后使用 !：表示类型推断排除null、undefined

// 我们使用 type 定了一个字符串字面量类型 StringName，它只能取三种字符串中的一种。
// 注意，类型别名与字符串字面量类型都是使用 type 进行定义

// 二.元组
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象
// let tom: [string, number] = ['Tom', 25];
/* let tom: [string, number] = ['', 0]; //变量后使用 !：表示类型推断排除null、undefined
// tom[0] = 'hello';
tom[1] = 123;
console.log('tom', tom);
 */

/* let tom: [string, number];
// 但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项
// tom = ['Tom']; //类型 "[string]" 中缺少属性 "1"，但类型 "[string, number]" 中需要该属性。ts(2741)
tom = ['Tom', 25];
console.log('tom', tom) */

/* // 越界的元素
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：
let tom: [string, number];
tom = ['hello',123]
console.log('tom 1', tom)
tom.push('male')
console.log('tom 2', tom)
// tom.push(true);//类型“true”的参数不能赋给类型“string | number”的参数。ts(2345)
// console.log('tom 3', tom) */

// 三.枚举
// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等

// 三.1.单的例子
/* enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
console.log('Days:', Days);

console.log(Days["Sun"]);
console.log(Days["Mon"]);
console.log(Days["Tue"]);
console.log(Days["Wed"]);
console.log(Days["Thu"]);
console.log(Days["Fri"]);
console.log(Days["Sat"]);

console.log(Days[0]);
console.log(Days[1]);
console.log(Days[2]);
console.log(Days[3]);
console.log(Days[4]);
console.log(Days[5]);
console.log(Days[6]); */

//三.2.手动赋值
/* enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};
console.log('Days :>> ', Days); */

/*
var Days;
(function (Days) {
    Days[Days["Sun"] = 3] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
上面的例子中，递增到 3 的时候与前面的 Sun 的取值重复了，但是 TypeScript 并没有报错，导致 Days[3] 的值先是 "Sun"，而后又被 "Wed" 覆盖了
*/

/* enum Days {
  Sun = 7,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat = <any>'S'
} */

/* var Days;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 8] = "Mon";
    Days[Days["Tue"] = 9] = "Tue";
    Days[Days["Wed"] = 10] = "Wed";
    Days[Days["Thu"] = 11] = "Thu";
    Days[Days["Fri"] = 12] = "Fri";
    Days["Sat"] = "S";
})(Days || (Days = {}));
 */

/* enum Days1 {
  Sun = 7,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat = 'S' as any
}
 */
/*
类型断言语法:
1. 值 as 类型
2. <类型>值
在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 值 as 类型。
形如 <Foo> 的语法在 tsx 中表示的是一个 ReactNode，在 ts 中除了表示类型断言之外，也可能是表示一个泛型。
故建议大家在使用类型断言时，统一使用 值 as 类型 这样的语法，本书中也会贯彻这一思想。
*/

// 三.3.常数项和计算所得项
// enum Color {Red, Green, Blue = "blue".length, Purple = 5, Gray = 6};

/*
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = "blue".length] = "Blue";
})(Color || (Color = {}));
*/

// 三.4.常数枚举
/* const enum Directions {
  Up,
  Down,
  Left,
  Right
} */
// const enum Directions {
//   Up,
//   Down,
//   Left = 'left',
//   Right
// }
// 枚举成员必须具有初始化表达式。ts(1061)
// const directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// console.log('directions :>> ', directions);

// var directions1 = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
// console.log('directions1 :>> ', directions1);

// 三.5.外部枚举
enum Directions {
  Up,
  Down,
  Left,
  Right
}
const directions0 = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
// var Directions;
// (function (Directions) {
//     Directions[Directions["Up"] = 0] = "Up";
//     Directions[Directions["Down"] = 1] = "Down";
//     Directions[Directions["Left"] = 2] = "Left";
//     Directions[Directions["Right"] = 3] = "Right";
// })(Directions || (Directions = {}));
// var directions0 = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
console.log('directions0 :>> ', directions0)

declare enum Directions1 {
  Up,
  Down,
  Left,
  Right
}
const directions1 = [Directions1.Up, Directions1.Down, Directions1.Left, Directions1.Right]
// var directions0 = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
console.log('directions1 :>> ', directions1)

declare const enum Directions2 {
  Up,
  Down,
  Left,
  Right
}
const directions2 = [Directions2.Up, Directions2.Down, Directions2.Left, Directions2.Right]
// var directions2 = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
console.log('directions2 :>> ', directions2)
