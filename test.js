'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
var Animal = /** @class */ (function () {
  function Animal(name, age) {
    this.name = name;
    this.age = age;
  }
  return Animal;
})();
var Cat = /** @class */ (function (_super) {
  __extends(Cat, _super);
  // 这里会默认执行
  function Cat(name, age) {
    var _this = this;
    console.log('arguments', arguments);
    var args = Array.from(arguments); //最好用这个
    console.log('args', args);
    _this = _super.call(this, name, age) || this;
    return _this;
  }
  Cat.prototype.sayHi = function () {
    console.log('Meow, My name is ' + this.name);
  };
  return Cat;
})(Animal);
var cat = new Cat('Tom', 30);
console.log('cat', cat);
cat.sayHi();
