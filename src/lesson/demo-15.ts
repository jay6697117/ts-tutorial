export {};

// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的 "类型定义" 中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// 在 ES6 中，=> 叫做箭头函数，应用十分广泛，可以参考 ES6 中的箭头函数。

interface Alarm {
  alertFn: () => string;
  // alertFn(): string;
}

interface Light {
  lightOn: () => void;
  lightOff: () => void;
  // lightOn(): void;
  // lightOff(): void;
}

class Door {
  saiHi(): string {
    return '我是门';
  }
}

class SecurityDoor extends Door implements Alarm {
  saiHi1 = (): string => {
    return '我是防盗门1';
  };
  saiHi(): string {
    return '我是防盗门2';
  }
  alertFn(): string {
    return 'alert 哔啵哔啵1～～～';
  }
}

class Car implements Alarm,Light {
  alertFn(): string {
    return 'alert 哔啵哔啵2～～～';
  }
  lightOn():void{
    console.log('灯开了～～～');
  }
  lightOff():void{
    console.log('灯关了～～～');
  }
}

const d = new Door();
const sd = new SecurityDoor();
const c = new Car();

console.log('d :>> ', d);
console.log('sd :>> ', sd);
console.log(d.saiHi());
console.log(sd.saiHi1());
console.log(sd.saiHi());
console.log(sd.alertFn());
console.log(c.alertFn());
c.lightOn();
c.lightOff();
// 上例中，Car 实现了 Alarm 和 Light 接口，既能报警，也能开关车灯。
