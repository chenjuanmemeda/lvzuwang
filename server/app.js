var http=require('http');
var route=require('./route.js');
var server=http.createServer(function(req,res){
	if(/favicon.ico/.test(req.url)) {
		res.end();return;
	}
	
	res.writeHeader(200,{
		'Access-Control-Allow-Methods':'POST,GET,PUT,DELETE,OPTIONS',
		'Access-Control-Allow-Headers':'Content-Type',
		'Access-Control-Allow-Origin':'*'

	});
	if(req.method=='OPTIONS') res.end();
	else route(req,res);
});
server.listen(8080);
console.log('server is running at 8080 port...');


/*

	var express=require('express'); 
	var app=express();  
	var route=require('./route.js');
	
	res.setHeader(
		'Access-Control-Allow-Origin','*'
	);
	if(req.method=='OPTIONS') res.end();
	else route(req,res);
	});
	

	//配置静态路由
	app.use(express.static(__dirname+'/public'));
	app.use(function(req,res,next){
		console.log('404');
	});
	app.use(function(err,req,res,next){
		res.send(err);
		console.log(err);
	});

	app.listen(8080);
	console.log('server is running at 8080 port...');
 */