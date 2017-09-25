var rule=Vue.extend({
	template:'#rule',
	data:function(){
		return{
			items:[],
			ruleItem:{
				rule_day:'',
				rule_money:'',
				rule_extra:'',
				rule_least:'',
				rule_most:'',
				rule_yorn:'',
				rule_other:''
			}
		};
	},
	created:function(){
		this.items=[
			{
				name:'日价',
				class:'day',
				options:[{name:'元/晚',value:'元/晚'}]
			},
			{
				name:'押金',
				class:'money',
				options:[{name:'元',value:'元'}]
			},
			{
				name:'其他额外费用',
				class:'extra',
				type:'textarea'
			},
			{
				name:'最少入住天数',
				class:'least',
				options:[{name:'天',value:'天'}]
			},
			{
				name:'最多入住天数',
				class:'most',
				options:[{name:'天',value:'天'}]
			},
			{
				name:'是否接待境外人士',
				class:'yorn',
				type:'radio',
				options:[
					{name:'接待',value:'接待'},
					{name:'不接待',value:'不接待'},
				]
			},
			{
				name:'其他要求',
				class:'other',
				type:'textarea'
			}
		];
	},
	methods:{
		deepCopy:function(obj1,obj2){
			for(var p in obj1){
				if(Array.isArray(obj1[p]))
					obj2[p]=obj1[p].slice(0);
				else if(obj1[p]!=null&&(typeof obj1[p]=='object')){
					obj2[p]={};
					arguments.callee(obj1[p],obj2[p]);
				}else
					obj2[p]=obj1[p];
			}
		},
		saveComplete:function(){
			if(!confirm('您已完成发布房源~')) return;
			this.$emit('save-complete');
			// this.$store.state.tab.curIndex=this.index+1;
			this.$http({
				url:this.$store.state.tab.url+'information/add/',
				method:"POST",
				data:JSON.stringify(this.ruleItem)
			}).then(function(res){
				// var temp={};
				// this.deepCopy(this.hinfoItem,temp);
				// this.items.push(temp);
			});
		}
	}
});
Vue.component('pricerule',rule);