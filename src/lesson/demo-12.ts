export {};

// 类型别名
// 类型别名用来给一个类型起个新名字

type NameStr = string;
type NameFunc = () => string;
type NameOrNameFunc = NameStr | NameFunc; // 联合类型

function getName(p: NameOrNameFunc): NameStr {
  if (typeof p === 'string') {
    return p;
  } else {
    return p();
  }
}

let name: NameStr = 'jay';
let nameFunc: NameFunc = function (): string {
  return '我的名字叫: jay';
};

console.log(getName(name));
console.log(getName(nameFunc));
// 类型别名常用于联合类型
