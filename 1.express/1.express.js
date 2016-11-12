var express=require('express');

var app=express();
///当客户端通过get的请求方式,访问路径的时候
app.get('/', function (req, res) {
    res.end('首页')
});
app.get('/login', function (req,res) {
    res.end('登录1')
});
app.post('/login', function (req,res) {
    res.end('登录2')
});
app.get('/user', function (req,res) {
    res.end('用户')
});
//定制404提示,当请求的路径没有路由能处理的时候,返回你请求的页面不存在
//all匹配所有的请求方法
app.all('*', function (req,res) {
    res.end('你请求的页面不存在')
});

//在当前的本机服务器上,监听9090端口
app.listen(8090);