var myData=Vue.extend({
	template:'#myData',
	data:function(){
		return {
			dataItem:{id:"",phone:"",sex:"",email:"",workarea:"",birthplace:""},
			datas:[
				{
					name:'基本信息',
					subMenus:[
						{name:'用户名',id:'',iskey:true },
				        {name:'联系方式' ,phone:''},
				        {
				        	name:'性别',
				        	type:'select',
				        	sex:'',
				            options:[
				            	{name:'男',value:'male'},
				            	{name:'女',value:'female'}
				            ]
				        }
					]
				}, 
				{
					name:'社会信息',
					subMenus:[
						{name:'邮箱地址',email:''},
						{name:'地址',workarea:''},
						{name:'所在地区',birthplace:''}
					]
				}
			]
		}
	},
	// created:function(){
	// 	//从服务器拿取数据
	// 	this.$http({
	// 		url:this.$store.state.kurl.url+this.gridName+'/getAll',
	// 		method:'GET'
	// 	}).then(function(res){
	// 		this.items=res.data;
	// 	},function(){});
	// }
});
Vue.component('myData',myData);






 
