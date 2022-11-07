// var __extends =
//   (this && this.__extends) ||
//   function (d, b) {
//     for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
//     function __() {
//       this.constructor = d;
//     }
//     d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
//   };

// var Animal = (function () {
//   function Animal(name) {
//     this.name = name;
//   }
//   return Animal;
// })();

// var Cat = (function (_super) {
//   console.log('arguments 1:', arguments)
//   __extends(Cat, _super);
//   function Cat() {
//     console.log('arguments 2:', arguments)
//     console.log('_super', _super)
//     _super.apply(this, arguments);
//   }
//   Cat.prototype.sayHi = function () {
//     console.log('Meow, My name is ' + this.name);
//   };
//   return Cat;
// })(Animal);

// var cat = new Cat('Tom');
// console.log('cat :>> ', cat);

const foo1 = function (param1, param2) {
  console.log('param1 :', param1);
  console.log('param2 :', param2);
  this.param1 = param1;
  this.param2 = param2;
}
const foo2 = (function (fn) {
  function foo3() {
    console.log('fn === foo1:', fn === foo1);
    console.log('arguments :', arguments);
    fn.apply(null,arguments);
    fn.apply(null,[...arguments]);
    fn.call(null,...arguments)
  }
  return foo3;
})(foo1);
foo2(1, 2);
