var express = require('express');
var app =express();
var login= require('./login');
var bodyParser = require('body-parser');
var path=require('path');


app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'jade');
app.get('/',function(req,res){

	res.render('home');

});

app.get('/reg',function(req,res){

	res.render('register');
});


app.get('/login', login.login);
app.post('/register',login.register);


app.listen(3000);
console.log('**************************Node server listening happily at port | 3000*****************');