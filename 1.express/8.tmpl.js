var users=[{id:1,name:'张三'},{id:2,name:'李四'}];
var express=require('express');
var app=express();
//http://localhost:9090/users/1
app.set('view engins','ejs');
app.set('views');
app.get('/users/:id', function (req,res) {

});
app.listen(9090);