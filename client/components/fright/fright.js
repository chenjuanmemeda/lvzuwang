var fright=Vue.extend({
	template:'#fright',
	data:function(){
		return {
			dlicons:[],
			klicons:[]
		}
	},
	created:function(){
		this.dlicons=[
				{
					name:'账号',
					isShow:false,
					subMenus:[
						{name:'我的资料'},
						{name:'消息记录'},
						{name:'客户评价'},
						{name:'通知'},
						{name:'评价'}
				]},
				{	
					name:'我的房源',
					isShow:false,
					subMenus:[
						{name:'历史房源'},
						{name:'房源评价'},
				]},
				{	
					name:'指南',
					isShow:false,
					subMenus:[
						{name:'租客指南'},
						{name:'房东指南'},
				]}
		],
		this.klicons=[
				{
					name:'账号',
					isShow:false,
					subMenus:[
						{name:'房客中心'},
						{name:'我的订单'},
						{name:'聊天记录'},
						{name:'我的点评'},
						{name:'个人资料'}
				]},
				{	
					name:'我的订单',
					isShow:false,
					subMenus:[
						{name:'订单详情'}
					]
				},
				{	
					name:'短租指南',
					isShow:false,
					subMenus:[
						{name:'房客指南'},
						{name:'房东指南'},
				]}
		]
	},
	methods:{
		toggle:function(i){
			// this.licons[i].index=i;
			this.klicons[i].isShow=!this.klicons[i].isShow;
			this.dlicons[i].isShow=!this.dlicons[i].isShow;
			// for( var i=0; i<this.licons.length; i++ ){
			// 	if( i = this.licons[i].index ){
			// 		this.licons[i].isShow=!this.licons[i].isShow;
			// 	}else{
			// 		this.licons[i].isShow=false;
			// 	}
			// }
	    }
    }
});
Vue.component('fright',fright);