var register=Vue.extend({
	template:'#register',
	components:{

	},
	data:function(){
		return{
			character:'tenant',
			username:'',
			password:'',
			email:''
		};
	},
	props:['str'],
	methods:{
		check:function(str){
			var x = document.getElementById(str); 
			var y = document.getElementById(str+"Check");  
			if(str=="username") { 
				if(x.value=="") 
					y.hidden = false; 
				else 
					y.hidden = true; 
			} 
			else if(str=="password") { 
				x = x.value.length; 
				if(x < 8){ 
					y.hidden = false; 
				} 
				else 
					y.hidden = true; 
			} 
			else if(str=="cpassword"){ 
				var z = document.getElementById("password").value; 
				x = x.value; 
				if(x != z) 
					y.hidden = false; 
				else 
					y.hidden = true; 
			} 
			else if(str=="email") { 
				x = x.value.indexOf("@") 
				if(x == -1) 
					y.hidden = false; 
				else 
					y.hidden = true; 
			} 
			// return y.hidden; 
		} ,
		
		regSubmit:function(str){
			var userInfo={
				username:this.username,
				password:this.password,
				character:this.character,
				email:this.email
			};
			if(this.username == "" || this.password == ""||this.email==""){
				
                alert("提交失败");
                return;
              }else if(character.value=='tenant'){//插入房客数据库
				this.$http({
					url:"http://localhost:8080/tenant/add",
					method:"post",
					data:JSON.stringify(userInfo)
				}).then(function(res){
					 
					alert(this.username+"注册成功...");
					
					 setTimeout(function(){
					 	location.href = "index.html"  
	                  }.bind(this),500)
				});
				
			}else{//插入房东数据库
				this.$http({
					url:"http://localhost:8080/landlord/add",
					method:"post",
					data:JSON.stringify(userInfo)
				}).then(function(res){
						alert(this.username+"注册成功...");
						 setTimeout(function(){
						 	location.href = "index.html"
						 
		                  }.bind(this),500)
					
				});
			}
		}
	}
});
		// validate:function(){ 
		// 	var arr=["name", "password", "cpassword", "email"]; 
		// 	var i = 0; 
		// 	submitOK = true; 
		// 	while(i < 4) { 
		// 		if(!check(arr[i])){ 
		// 			alert(arr[i]+" wrong!"); 
		// 			submitOK = false; 
		// 			break; 
		// 		} 
		// 		i++; 
		// 	} 
		// 		if(submitOK){ 
		// 			alert("提交成功！"); 
		// 			return true; 
		// 		} 
		// 		else{ 
		// 			alert("提交失败"); 
		// 			return false; 
		// 		} 
		
		// },



Vue.component('register',register);
