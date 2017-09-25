var Hinfo=Vue.extend({
	template:'#Hinfo',
	data:function(){
		return{
			items:[],
			hinfoItem:{
				info_address:"",
				info_hire:"",
				info_people:"",
				scale:{
					s:"",
					t:"",
					w:"",
					c:"",
					yt:""
				},
				// info_scale:[],
				info_area:"",
				info_wc:"",
				info_yorn:"",
				info_beds:"",
				info_change:""
			}
		};
	},
	computed:{
		check:function(){

			if(this.info_address===''||this.info_hire===""){
				// return false;
				return(alert('所有选项输入不能为空喔~'));
			}else{
				return true;
			}
		}
	},
	created:function(){
		this.items=[
			{name:'房源地址',class:'address'},
			{
				name:'出租类型',
				defVal:'整套出租',
				type:'radio',
				class:'hire',
				options:[
					{name:'整套出租',value:'整套出租'},
					{name:'独立单间',value:'独立单间'},
					{name:'床位出租',value:'床位出租'},
					{name:'沙发出租',value:'沙发出租'}
				]
			},
			{
				name:'最多宜居人数',
				type:'select',
				class:'people',
				options:[
					{name:'1人',value:"1人"},
					{name:'2人',value:"2人"},
					{name:'3人',value:'3人'},
					{name:'4人',value:"4人"},
					{name:'4人以上',value:'4人以上'}
				]
			},
			{
				name:'房屋户型',
				class:'scale',
				options:[
					{name:'室',value:'室'},
					{name:'厅',value:'厅'},
					{name:'卫',value:'卫'},
					{name:'厨',value:'厨'},
					{name:'阳台',value:'阳台'}
				]
			},

			
			{name:'房屋面积',class:'area'},
			{
				name:'卫生间',
				defVal:'共用卫生间',
				type:'radio',
				class:'wc',
				options:[
					{name:'共用卫生间',value:'共用卫生间'},
					{name:'独立卫生间',value:'独立卫生间'}
				]
			},
			{
				name:'是否和房东共居在一套房屋内',
				type:'radio',
				class:'yorn',
				defVal:'是',
				options:[
					{name:'是',value:'是'},
					{name:'否',value:'否'}
				]
			},
			{name:'床铺',class:'beds'},
			{
				name:'被单更换',
				type:'radio',
				class:'change',
				defVal:'每客一换',
				options:[
					{name:'每客一换',value:'每客一换'},
					{name:'每日一换',value:'每日一换'}
				]
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
			if(!confirm('确认保存并进行下一步?')) return;
			this.$emit('save-complete');
			this.$http({
				url:this.$store.state.tab.url+'information/add/',
				method:"POST",
				data:JSON.stringify(this.hinfoItem)
			}).then(function(res){});
			// this.$store.state.tab.curIndex=this.index+1;
		}
		// check:function(){
		// 	var x=document.getElementById()
		// }
	}
});
Vue.component('Hinfos',Hinfo);
