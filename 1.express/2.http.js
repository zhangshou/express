var http=require('http');
var url=require('url');
http.createServer(function (req, res) {
    var pathname=url.parse(req.url,true).pathname;
    res.setHeader('Content-Type','text/plain;charset=utf8');
    if(pathname=='/'){
        res.end('首页')
    }else if(pathname=='/login'){
        res.end('登录')
    }else if(pathname=='/user'){
        res.end('用户')
    }else{
        res.end(`Connot ${req.method} ${pathname}`);
    }
}).listen(9090);