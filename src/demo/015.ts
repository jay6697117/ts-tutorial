export {};
// Mixins混入
// 1.对象混入
interface Name {
  name: string;
}
interface Age {
  age: number;
}
interface Sex {
  sex: number;
}

let people1: Name = { name: '小满' };
let people2: Age = { age: 20 };
let people3: Sex = { sex: 1 };

const people: Name & Age & Sex = Object.assign(people1, people2, people3); //people的类型被推断出是交叉类型
console.log('people', people);

//2.类的混入
class A {
  type: boolean = false;
  changeType() {
    this.type = !this.type;
  }
}
class B {
  name: string = '张三';
  getName(): string {
    return this.name;
  }
}

class C implements A, B {
  type: boolean = false;
  name: string  = '666';
  changeType: () => void;
  getName: () => string;
}

function Mixins(curCls: any, itemCls: any[]) {
  itemCls.forEach((item) => {
    Object.getOwnPropertyNames(item.prototype).forEach((name) => {
      if (name !== 'constructor') curCls.prototype[name] = item.prototype[name];
    });
  });
}

Mixins(C, [A, B]);

console.dir(C);
const c = new C()

c.changeType();
console.log('c 1:', c)
console.log(c.getName());
