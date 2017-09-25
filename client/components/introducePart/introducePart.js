var introducepart=Vue.extend({
	template:"#introducepart",
	props:['information'],
	data:function(){
		return{
			des_wrap:["des_title","des_desc","des_in","des_trans","des_around"],

			showall:false,
			info_classh:["h_ico1","h_ico2","h_ico3"],
			info_classone:[
								"box_white  detail_intro_item",
								"box_gray detail_intro_item",
								"box_white detail_intro_item",
								"box_gray detail_intro_item",
								"box_white  detail_intro_item",
								"box_gray detail_intro_item",
							],
			info_classtwo:[
							"info_ico1","info_ico2","info_ico3","info_ico4","info_ico5",
							"info_ico6"
						],
			info_textone:[
							"个性描述","内部情况","交通情况","周边情况","配套设施","入住须知"
						],
			// info_classthree:[
			// 				"s_ico_shower","s_ico_aircondition","s_ico_icebox","s_ico_parkingspace","s_ico_dringking","s_ico_wirednetwork","s_ico_slippers","s_ico_toiletpaper","s_ico_brush","s_ico_towel","s_ico_toiletries","s_ico_iscook","s_ico_meet","s_ico_no","s_ico_no","s_ico_no","s_ico_no","s_ico_no"
			// 			],
			clauseh:["押金及其他费用","房东对房客的要求","预订条款","退订政策"],
		};
	},
	computed:{
		word:function(){
		      if(this.showall == false){　　　　　　　　　　　//对文字进行处理
		        return '展开全部'
		      }else{
		        return '收起'
		      }
			}
		},
			    
	created:function(){//在页面加载之前
		// var that=this;
		// that.rItem2.pNames=[];//记录哪些属性传到服务器是要进行等值匹配查询
		// this.state.fields.forEach(function(v){
		// 	if(v.isRItem){
		// 		that.rItem2[v.name]=that.rItem[v.name]=v.defVal;
		// 		if(v.type) {
		// 			that.rItem2.pNames.push(v.name);
		// 			that.rItem2[v.name]=that.rItem[v.name]='';
		// 		}
		// 	}
		// });
		// this.getData();
	},
	methods:{//需要调用才有用
		
		   
		},
});
Vue.component('introducepart',introducepart);