// 引用express
const express = require('express');
// 创建express 实例
const app = express();
// 配置 静态资源文件 
app.use(express.static(__dirname + '/build'))
// 监听端口号
app.listen(80,()=>{
  console.log('服务已启动')
})