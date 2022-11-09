export {};

// 类与接口

// (一).1.类实现接口
// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的 "类型定义" 中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// 在 ES6 中，=> 叫做箭头函数，应用十分广泛，可以参考 ES6 中的箭头函数。

/*
interface Alarm {
  alarmFn: () => string;
  // alarmFn(): string;
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
  alarmFn(): string {
    return 'alarm 哔啵哔啵1～～～';
  }
}

class Car implements Alarm,Light {
  alarmFn(): string {
    return 'alarm 哔啵哔啵2～～～';
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
console.log(sd.alarmFn());
console.log(c.alarmFn());
c.lightOn();
c.lightOff();
// 上例中，Car 实现了 Alarm 和 Light 接口，既能报警，也能开关车灯。
*/

// (一).2.接口继承接口
/*
interface Alarm {
  // alarm: () => void;
  alarm(): void;
}
interface LightableAlarm {
  // lightOn: () => void;
  // lightOff: () => void;
  lightOn(): void;
  lightOff(): void;
}

  interface LightableAlarm1 extends Alarm{
  // lightOn: () => void;
  // lightOff: () => void;
  lightOn(): void;
  lightOff(): void;
}


type AlarmLight = Alarm & LightableAlarm;

const temp: LightableAlarm = {
  lightOn: () => console.log('alarm'),
  lightOff: () => console.log('alarm')
};

const temp1: LightableAlarm1 = {
  alarm:()=>console.log('alarm'),
  lightOn: () => console.log('alarm'),
  lightOff: () => console.log('alarm')
};

const temp2: AlarmLight = {
  alarm:()=>console.log('alarm'),
  lightOn: () => console.log('alarm'),
  lightOff: () => console.log('alarm')
};
*/

// (一).3.接口继承类
// 常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的：
/* class Point {
  x: number;
  y: number;
  constructor(xParam: number, yParam: number) {
    this.x = xParam;
    this.y = yParam;
  }
}
interface Point3d extends Point {
  z: number;
}
const temp: Point3d = { x: 1, y: 2, z: 3 };
const temp1: Point = { x: 1, y: 2 };
console.log('temp :>> ', temp);
console.log('temp1 :>> ', temp1); */
// 「接口继承类」和「接口继承接口」没有什么本质的区别

// 换句话说，声明 Point 类时创建的 Point 类型只包含其中的实例属性和实例方法(实例属性在this上, 实例方法在 Point.prototype 上)：
class Point {
  /** 静态属性 Point.origin 访问，坐标系原点 */
  static origin = new Point(0, 0);
  /** 本质上distanceToOrigin1还是静态属性 只不过属性值是函数 */
  static distanceToOrigin1 = () => ({});
  /** 静态方法 Point.distanceToOrigin 访问，计算与原点距离 */
  static distanceToOrigin(p: Point) {
    console.log('distanceToOrigin p', p);
    console.log('distanceToOrigin this', this, this === Point);
    return Math.sqrt(p.x + p.y);
  }
  /** 实例属性，x 轴的值 */
  x: number;
  /** 实例属性，y 轴的值 */
  y: number;
  /** 构造函数 Point.prototype上 */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  /** 实例方法 Point.prototype上，打印此点 */
  printPoint() {
    console.log(this.x, this.y);
  }
}

interface PointInstanceType {
  x: number;
  y: number;
  printPoint(): void;
}

// const p:PointInstanceType = new Point(400, 500);
const p: Point = new Point(400, 500);

// const temoObj: PointInstanceType = {
const temoObj: Point = {
  x: 4,
  y: 5,
  printPoint: () => {
    console.log(temoObj.x, temoObj.y);
  }
};

console.log('----0----');
console.dir(p);
console.log('----1----');
console.dir(Point);
console.log('----2----');
console.dir(Point.origin);
console.log('----3----');
console.dir(Point.distanceToOrigin(p));
console.log('----4----');
console.dir(Point.distanceToOrigin(temoObj));
// 上例中最后的类型 Point 和类型 PointInstanceType 是等价的。
// 同样的，在接口继承类的时候，也只会继承它的实例属性和实例方法。
