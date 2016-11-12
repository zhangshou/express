var express=require('express');

var app=express();

//使用中间件
//next是一个函数,如果调用它表示中间件执行完毕,可以继续向下
//路由把公用的代码写在中间件里面
/*
* 中间件的功能
* 1.增加公共的方法和属性
* 2.进行公共的处理
* */
/*
* 路由和中间件的区别和联系
* 1.他们在同一个数组中
* 2.中间件不匹配路径和方法名,路由匹配路径和方法名
* 3.中间件多了next参数,它能决定是否继续
* */
app.use(function (req,res,next) {
    res.setHeader('Content-Type','text/plain;charset=utf8');
    next();
});

///当客户端通过get的请求方式,访问路径的时候
app.get('/', function (req, res) {
    res.end('首页')
});
app.get('/login', function (req,res) {
    res.end('登录1')
});

//curl -X POST http://localhost:8090/login 测试post请求
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