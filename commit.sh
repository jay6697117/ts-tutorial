#!/usr/bin/env bash
#输入./push命令提交代码，只需要info变量中配置提交信息
current=`date "+%Y-%m-%d %H:%M:%S"`
info="提交代码于: "$current
#切到当前绝对路径
cd `pwd`
git add -A
git commit -m "$info"
echo '已经成功commit～～～'
