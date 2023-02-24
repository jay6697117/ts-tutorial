"use strict";
// export {};
// 1.非空断言
// type T = string | null | undefined;
// function handler(arg: T) {
//   let str = arg!; //表明arg不可能是null || undefined
//   return (str as any).split('')
// }
// console.log(handler('1')); //应有 1 个参数，但获得 0 个。ts(2554)
exports.__esModule = true;
// 18.声明文件
var express = require("express");
var app = express();
var router = express.Router();
app.use('/api', router);
router.get('/list', function (req, res) {
    res.json({
        code: 200
    });
});
app.listen(9001, function () {
    console.log('localhost:9001 port run');
});
