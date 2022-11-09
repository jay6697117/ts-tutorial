export {}

// (一)声明合并
// 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型：

// 1.函数的合并: 使用重载定义多个函数类型
/* function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

console.log(reverse(123),typeof reverse(123))
console.log(reverse('abc'),typeof reverse('abc')) */

// 2.接口的合并
// interface Alarm {
//   price: number;
//   foo(p: string): string;
// }
// interface Alarm {
//   // price: number; // 虽然重复了，但是类型都是 `number`，所以不会报错
//   weight: number;
//   foo(p: string, q: number): string;
// }
// 相当于：
// interface Alarm {
//   price: number;
//   weight: number;
// }
// const temp: Alarm = { price: 1, weight: 111 };
// console.log('temp', temp);

// interface Alarm {
//   price: number;
//   weight: number;
//   foo(p: string): string;
//   foo(p: string, q: number): string;
// }

/* interface Alarm {
  price: number;
  weight: number;
  // alert(s: string): string;
  alert(s: string, n: number): string;
}
const temp: Alarm = {
  price: 1,
  weight: 111,
  // foo(p: string): string {
  //   return p;
  // }
  alert(p: string): string {
    return p;
  }
};
console.log('temp:', temp);
const temp1: Alarm = {
  price: 1,
  weight: 111,
  // foo(p: string, q: number): string {
  //   return p + q;
  // }
  alert(p: string, q: number): string {
    return p + q;
  }
};
console.log('temp1:', temp1); */

// 3.类的合并与接口的合并规则一致。
