var querystring=require('querystring');
var MongoClient=require('mongodb').MongoClient;
var DB_STR="mongodb://localhost:27017/house-data";
var MongoUtilCtr=require('./mongoUtil.js');
var MongoUtil=new MongoUtilCtr('tenant');
var Tenant={
	del:function(req,res){
		var key=req.url.match(/[^\/]+$/)[0];
		MongoUtil.del({id:key},function(result){
			res.write(result);
			res.end();
		});
	},
	add:function(req,res){
		var qStr='';
		//从请求体中获取请求数据会不断触发data事件
		req.addListener('data',function(dataPart){
			qStr+=dataPart;
		});
		//从请求体中获取完请求数据会触发end事件
		req.addListener('end',function(){
			var temp=JSON.parse(qStr);
			MongoUtil.add(temp,function(result){
				res.write(result);
				res.end();
			});
		});
	},
	dl:function(req,res){
		var qStr='';
		req.addListener('data',function(dataPart){
			qStr+=dataPart;
		});
		req.addListener('end',function(){
			var temp=querystring.parse(qStr);
				console.log(temp);
			MongoClient.connect(DB_STR,function(err,db){
				if(err){
					console.log(err);
					res.end();
					db.close();
					return;
				}
				var collection=db.collection('tenant');
				collection.find(temp,{_id:0}).toArray(function(err,result){
					
					res.write(JSON.stringify({

						data:result
					}));
					console.log(result);
					res.end();
					db.close();
				})
			})
		})
	},
	update:function(req,res){
		var qStr='';
		//从请求体中获取请求数据会不断触发data事件
		req.addListener('data',function(dataPart){
			qStr+=dataPart;
		});
		//从请求体中获取完请求数据会触发end事件
		req.addListener('end',function(){
			var temp=JSON.parse(qStr);
			MongoUtil.update({id:temp.id},temp,function(result){
				res.write(result);
				res.end()
			});
		});
	},
	getAll:function(req,res){
		var qStr='';
		//从请求体中获取请求数据会不断触发data事件
		req.addListener('data',function(dataPart){
			qStr+=dataPart;
		});
		//从请求体中获取完请求数据会触发end事件
		req.addListener('end',function(){
			var obj=JSON.parse(qStr);
			var sql='getAll("tenant")';
			MongoUtil.getAll(sql,function(result){
					res.write(JSON.stringify(result));
					res.end();
			});
		});
	}
	
};
module.exports=Tenant;