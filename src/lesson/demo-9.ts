export {};

// (一): 泛型

// 定义
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

// 1.简单的例子
function createArray<T>(length: number, value: T): Array<T> {
  const tempArr: Array<T> = [];
  for (let index = 0; index < length; index++) {
    tempArr[index] = value;
  }
  return tempArr;
}
const res = createArray<string>(5, 'hello');
// const res = createArray(5, 'hello');
//function createArray<string>(length: number, value: string): string[]
console.log('res:', res);

function createArray1<T>(length: number, value: T): T[] {
  const tempArr: T[] = [];
  for (let index = 0; index < length; index++) {
    tempArr[index] = value;
  }
  return tempArr;
}
const res1 = createArray1<number>(5, 6);
// const res1 = createArray1(5, 6);
// function createArray1<number>(length: number, value: number): number[]
console.log('res1:', res1);

// 总结
// 上例中，我们在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了。

// 2.多个类型参数
