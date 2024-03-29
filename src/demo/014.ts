// export {};
// 1.非空断言
// type T = string | null | undefined;
// function handler(arg: T) {
//   let str = arg!; //表明arg不可能是null || undefined
//   return (str as any).split('')
// }
// console.log(handler('1')); //应有 1 个参数，但获得 0 个。ts(2554)

// 2.声明文件
import express = require("express");
const app = express();
const router = express.Router();
app.use('/api', router);
router.get('/list', (req, res) => {
  res.json({
    code: 200
  });
});
app.listen(9001, () => {
  console.log('localhost:9001 port run');
});
