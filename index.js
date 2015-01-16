var express = require('express');
var app =express();
var login= require('./login');

app.set('view engine', 'jade');
app.get('/',function(req,res){

	res.send('<b>Hello world');

});


app.get('/login', login.login);

app.listen(3000);
console.log('**************************Node server listening happily at port | 3000*****************');