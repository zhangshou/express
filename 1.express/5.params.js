/*
* 参数的处理
* 请求行 method url(pathname,quuery)
* 请求头 headers
* 请求体 body
* */
var http=require('http');
var util=require('util');
var url=require('url');
var express=require('express');
var app=express();
app.use(function (req,res,next) {
    res.send= function (params) {
        var type=typeof params;
        switch (type){
            case 'object':
                res.setHeader('Content-Type','application/json;charset=utf-8');
                res.end(JSON.stringify(params));
                break;
            case 'string':
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.end(params);
                break;
            case 'number':
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.statusCode=params;
                res.end(http.STATUS_CODES[params]);
                break;
            default :
                res.end(util.inspect(params));
        }
    };
    next();
});
app.get('/', function (req,res) {
    //console.log(req.method);
    //console.log(req.url);
    //var urlObj=url.parse(req.url);
    //console.log('pathname',urlObj.pathname);
    //console.log('query',urlObj.query);
    console.log(req.path);
    console.log(req.query);
    //res.end();
    //res.send('{name:zf}');
    //res.send('name');
    res.send(123);
});
//获取某个用户的信息 :id是占位符,匹配一个字符串
app.get('users/:id', function (req,res) {
    //params是express添加的对象属性,属性名就是占位符,值是实际请求的字符串占位符对应的部分
    res.end('id='+req.params.id)
});
app.listen(9090);


