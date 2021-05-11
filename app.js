// 引用express
const express = require('express');
const compression = require('compression')
const { join, extname } = require('path');
// 创建express 实例
const app = express();
// 配置 静态资源文件 
app.use(compression());
const root = join(__dirname, 'build');
app.use(express.static(root))

app.get('*', (req,res) =>{
  res.sendFile(join(root, 'index.html'));
});

// 监听端口号
app.listen(80, ()=>{
  console.log('服务已启动')
})