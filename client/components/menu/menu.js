var menu=Vue.extend({
	template:'#menu',
	data:function(){
		return {
			menus:[]
		};
	},
	created:function(){
		this.menus=[
				{
					name:'信息管理',
					isShow:false,
					subMenus:[
						{name:'房东信息管理',gridName:'landlord'},
						{name:'房客信息管理',gridName:'tenant'}
				]},
					{	
				 	name:'权限管理',
					isShow:false,
				 	subMenus:[
				 		{name:'权限管理',gridName:'...'}
				 ]},
				 {	
				 	name:'系统管理',
					isShow:false,
				 	subMenus:[
				 		{name:'系统管理',gridName:'...'}
				 ]},
				 {	
				 	name:'其他管理',
					isShow:false,
				 	subMenus:[
				 		{name:'其他管理',gridName:'...'}
				 ]},
				 {	
				 	name:'其他设置',
					isShow:false,
				 	subMenus:[
				 		{name:'其他设置',gridName:'...'}
				 ]}
			];
	},
	methods:{
		toggle:function(i){
			this.menus[i].isShow=!this.menus[i].isShow;
		},
		addTab:function(sub){
			this.$store.commit("tabs/addTab",sub.name);
			this.$store.commit('grid/addGrid',sub.gridName)
		}
	}
});
Vue.component('mymenu',menu);