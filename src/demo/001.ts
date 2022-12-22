export default {};
export function printResult(param: any, tag: string): void {
  const node = document.createElement(tag);
  const hr = document.createElement('hr');
  node.innerHTML = param;
  document.body.appendChild(node);
  document.body.appendChild(hr);
}

// 1.字符串类型
/* let str1: string = 'hello';
let str2: string = `${str1}, world`;

printResult(str1, 'h1');
printResult(str2, 'h2'); */

// 2.数字类型
/* let notANumber: number = NaN; //Nan
let num: number = 123; //普通数字
let infinityNumber: number = Infinity; //无穷大
let decimal: number = 6; //十进制
let hex: number = 0xf00d; //十六进制
let binary: number = 0b1010; //二进制
let octal: number = 0o744; //八进制s

printResult(notANumber, 'p');
printResult(num, 'p');
printResult(infinityNumber, 'p');
printResult(decimal, 'p');
printResult(hex, 'p');
printResult(binary, 'p');
printResult(octal, 'p'); */

// 3.布尔类型
// 不能将类型“Boolean”分配给类型“boolean”。“boolean”是基元，但“Boolean”是包装器对象。如可能首选使用“boolean”。ts(2322)
/* let bool1: Boolean = new Boolean(1);
let bool2: boolean = true;
let bool3: boolean = Boolean(0);
printResult(bool1, 'h1');
printResult(bool2, 'h2');
printResult(bool3, 'h2'); */

// 4.空值类型
/* function foo(params: any): void {
  printResult(params, 'h2');
}
foo('111');
let u: void = undefined;
// let n:void = null; //TS2322: Type 'null' is not assignable to type 'void'.
let n: any = null;
printResult(u, 'h2');
printResult(n + '', 'h2'); */

// 5.Null和undefined类型
/* let u:undefined = undefined;
let n:null = null;
printResult(u, 'h2');
printResult(n+'', 'h2'); */

//这样写会报错 void类型不可以分给其他类型
/* let test: void = undefined;
let num2: string = "1";
printResult(test, 'h2');
printResult(num2, 'h2');
num2 = test; */

//这样是没问题的
/* let test: null = null;
let num2: string = '1';

num2 = test;//不能将类型“null”分配给类型“string”。ts(2322) */

//或者这样的
/* let test: undefined = undefined;
let num2: string = '1';
num2 = test;//不能将类型“undefined”分配给类型“string”。ts(2322) */

/* let n:void = null;//不能将类型“null”分配给类型“void”。ts(2322)
printResult(n+'', 'h2'); */
