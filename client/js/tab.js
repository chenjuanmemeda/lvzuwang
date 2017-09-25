var tab=Vue.extend({
	template:'#tab',
	data:function(){
		return{
			items:[]
		};
	},
	created:function(){
		this.items=[
			{name:'房源信息',curTab:'0'},
			{name:'房源描述',curTab:'1'},
			{name:'配套设施',curTab:'2'},
			{name:'真实照片',curTab:'3'},
			{name:'价格规则',curTab:'4'}
		];
	},
	methods:{
		// toggle:function(index){
		// 	this.items[index].isShow=!this.items[index].isShow;
		// }
		// changeTabs:function(index){
		// 	this.$store.commit("tabs/delTab",index);
		// }
	}
});
Vue.component('mytab',tab);
