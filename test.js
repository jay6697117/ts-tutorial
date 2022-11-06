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

function fn(...param) {
  console.log(...param);
}

fn.apply(null, [1, 2]);
