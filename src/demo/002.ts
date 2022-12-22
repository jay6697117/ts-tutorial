export default {};
export function printResult(param: any, tag: string): void {
  const node = document.createElement(tag);
  const hr = document.createElement('hr');
  node.innerHTML = param;
  document.body.appendChild(node);
  document.body.appendChild(hr);
}

// let anys: unknown;
// anys = 123;
// anys = 'hello';

//这样写会报错unknow类型不能作为子类型只能作为父类型 any可以作为父类型和子类型
// let anys: unknown = 123;
// let anys1:string = anys;

// let anys: any = 123;
// let anys1:string = anys;

//unknown可赋值对象只有unknown 和 any
// let bbb: unknown = false;
// let bbb: any = false;
// let aaa: any = 123;
// let ccc: string = 'hello';
// aaa = bbb;
// ccc = bbb;//不能将类型“unknown”分配给类型“string”。ts(2322)
// printResult(bbb, 'h1');
// printResult(aaa, 'h1');
// printResult(ccc, 'h1');

// 如果是any类型在对象没有这个属性的时候还在获取是不会报错的
// let obj: any = { b: 1 };
// printResult(obj.a, 'h1');

// 如果是unknown 是不能调用属性和方法
// let obj: unknown = { b: 1, ccc: (): number => 213 };//unknown 是不能调用属性和方法
let obj: any = { b: 1, ccc: (): number => 213 };
printResult(obj.b, 'h1');
printResult(obj.ccc(), 'h1');
