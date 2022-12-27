// && 和 || 也叫短路运算符
// 短路&&： 只要碰到了假值(false)，就会短路，并返回该假值， 只要短路，不会继续执行后面的表达式。
// 短路||： 只要碰到了真值(true)，就会短路，并返回该真值， 只要短路，不会继续执行后面的表达式。(一般用作默认值)
// 注意：假值有以下6个：
// null undefined NaN false 0 ''

// let type = 'E';

// let tactics = {
//   A: 1,
//   B: 1,
//   C: 2,
//   D: 3,
//   default: 0
// };
// console.log(tactics[type]); // 1

// 获取折扣 --- 使用if else 和 对象配置
// const getDiscount = (userKey) => {
//   // if (userKey === '普通会员') {
//   //   return 0.9;
//   // } else if (userKey === '年费会员') {
//   //   return 0.85;
//   // } else if (userKey === '超级会员') {
//   //   return 0.8;
//   // } else {
//   //   return 1;
//   // }

//   // const obj = {
//   //   普通会员: 0.9,
//   //   年费会员: 0.8,
//   //   超级会员: 0.7,
//   //   非会员: 1
//   // };
//   // return (obj[userKey] || obj['非会员']);
// };

// console.log(getDiscount('哈哈'));

// 对象配置不一定非要使用对象去管理我们键值对，还可以使用 Map去管理🦋，如：
// const getDiscount = (userKey) => {
//   const obj = new Map([
//     ['普通会员', 0.9],
//     ['年费会员', 0.8],
//     ['超级会员', 0.7],
//     ['非会员', 1]
//   ]);
//   return obj.get(userKey) || obj.get('非会员');
// };

// console.log(getDiscount('普通会员'));

// Map温故知新
/* let maps = new Map([
  ['a', 111],
  ['b', 222],
  ['c', 333]
]);

// 遍历所有的键
for (let keys of maps.keys()) {
  console.log('keys:', keys); // a,b,c
}

// 遍历所有的值（amounts）
for (let amount of maps.values()) {
  console.log('values:', amount); // a,b,c
}

// 遍历所有的实体 [key, value]
for (let entry of maps) {
  // 与 maps.entries() 相同
  console.log('entry:', entry); // a,b,c
}
console.log('-----------------------');
maps.forEach((element, index, map) => {
  console.log('index :>> ', index);
  console.log('element :>> ', element);
  console.log('map', map);
}); */

const calculateBonus = (dept, level, salary) => {
  const maps = new Map([
    ['P1_A', 4 * 1.2],
    ['P1_B', 3 * 1.2],
    ['P1_C', 2 * 1.2],
    ['P1_D', 1 * 1.2],
    ['P2_A', 4 * 0.9],
    ['P2_B', 3 * 0.9],
    ['P2_C', 2 * 0.9],
    ['P2_D', 1 * 0.9]
  ]);

  return maps.get(`${dept}_${level}`) * salary;
};
console.log('年终奖:', calculateBonus('P1', 'A', 20000)); // 94000
console.log('年终奖:', calculateBonus('P2', 'C', 20000)); // 输出：60000


// 文章出处
// https://juejin.cn/post/7153536318859903012
