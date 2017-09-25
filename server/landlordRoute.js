//操作mongodb数据库house-data中的表tenant
var querystring=require('querystring');
var MongoClient=require('mongodb').MongoClient;
var DB_STR="mongodb://localhost:27017/house-data";
var MongoUtilCtr=require('./mongoUtil.js');
var MongoUtil=new MongoUtilCtr('landlord');
// var landlords=[
// 	{username:'lalala',password:'87654321',chacracter:'landlord',email:'la@123'},
// 	{username:'ttt',password:'00654321',chacracter:'landlord',email:'t@123'}
// ];
// var tenants=[
// 	{username:'lalal',password:'87654321',chacracter:'tenant',email:'la@123'},
// 	{username:'tt',password:'00654321',chacracter:'tenant',email:'t@123'}
// ];
// db.tenant.insert(tenants)
// var userInfo=[
// 	{username:'lalal',password:'87654321',phone:'15270891589'},
// 	{username:'lalalaa',password:'12345678',phone:'15270893223'}
// ];
// db.userInfos.insert(userInfo)
var Landlord={
	del:function(req,res){
		var key=req.url.match(/[^\/]+$/)[0];
		MongoUtil.del({id:key},function(result){
			res.write(result);
			res.end();
		});
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
				var collection=db.collection('landlord');
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
	getAll:function(req,res){
		var qStr='';
		//从请求体中获取请求数据会不断触发data事件
		req.addListener('data',function(dataPart){
			qStr+=dataPart;
		});
		//从请求体中获取完请求数据会触发end事件
		req.addListener('end',function(){
			var obj=JSON.parse(qStr);
			var sql='getAll("landlord")';
			MongoUtil.getAll(sql,function(result){
					res.write(JSON.stringify(result));
					res.end();
			});
		});
		
	
		// 	MongoUtil.getAll(sql,function(err,result){
		// 			// res.write(JSON.stringify(result));
		// 			// res.end();
		// 			// console.log(result);
		// 			// console.log(obj);
		// 			if(err){console.log(err);return;}
		// 			if(!result){
		// 				res.end(JSON.stringify("-1"));
		// 					// type:false,
							
		// 				//用户名不存在返回-1
						
		// 			}
					
		// 			else if(obj.password==result.password){
		// 				res.end(JSON.stringify("0"));//密码错误返回0
		// 			}
		// 			else if(obj.username==admin.username&&password==admin.password){
		// 				res.end(JSON.stringify("admin"));
		// 			}

		// 			else res.end(JSON.stringify("1"));
		// 			console.log('验证完毕...')
		// 	});
		// });
	
	}
};
		// var username=req.body.username;
		// var password=req.body.password;
		// MongoClient.connect(DB_STR,function(err,db){
		// 	var collection=db.collection('landlord');
		// 	collection.findOne({username:username},{password:password},function(err,result)
		
		// 	{
		// 		if(err){console.log(err);return;}
		// 		if(!result){
		// 			res.end(JSON.stringify(data:"-1"));
		// 				// type:false,
						
		// 			//用户名不存在返回-1
					
		// 		}
				
		// 		else if(password==result.password){
		// 			res.end(JSON.stringify(data:"0"));//密码错误返回0
		// 		}
		// 		else if(username==admin.username&&password==admin.password){
		// 			res.end(JSON.stringify(data:"admin"));
		// 		}

		// 		else res.end(JSON.stringify(data:"1"));
		// 		console.log('验证完毕...');
		// 	})
		
		// });

// module.exports={
// 	login:login,
// 	add:add,
// 	del:del,
// 	update:update,
// 	getAll:getAll
// };

module.exports=Landlord;