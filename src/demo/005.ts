export default {};
export function printResult(param: any, tag: string = 'h1'): void {
  const node = document.createElement(tag);
  const hr = document.createElement('hr');
  node.innerHTML = param;
  document.body.appendChild(node);
  document.body.appendChild(hr);
}

// 1.函数的类型
// const foo = (name: string, age: number = 18): string => {
//   return `我是${name}, 我今年${age}岁`;
// };
// printResult(foo('张金辉'));
// printResult(foo('李世民', 20));

//通过?表示该参数为可选参数
const fn = (name: string, age?: number): string => {
  return name + age;
};

printResult(fn('张三'));
