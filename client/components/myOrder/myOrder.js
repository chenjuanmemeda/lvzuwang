var myOrder=Vue.extend({
	template:'#myOrder',
	props:["isShow"],
	data:function(){
		return{
				orders:[
					{
						name:'',
						basement:[
							{
								name:'临近' ,
								near:'',
								ordcont:'虹桥火车站/会展中心/九号线地铁九亭站租单间'
						    },
					        {
					        	name:'地址',
					        	loction:'',
					        	ordcont:'上海市松江区'
					    	},
					        {
					        	name:'格局',
					        	structure:'',
					        	ordcont:'独立卫生间/1张床/宜住2人'
					        },
					        {
					        	name:'房东',
					        	landlord:'',
					        	ordcont:'开心每一天'
					        },
					        {
					        	name:'价格' ,
					        	type:'price',
					        	price:'￥564/晚'
					        }
						]
					}
				]
		}

	},
	methods:{
		
	}
}); 
Vue.component('myOrder',myOrder);





















// Vue.component('myOrder',{
// 	template:'#myOrder',
// 	props:["isShow"]
// });