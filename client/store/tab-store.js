var tabModule={
	namespaced:true,
	state:{
		curIndex:-1,
		curTab:0 , //默认显示第一页
		url:"http://localhost:8080/"
	},
	getters:{},
	mutations:{
		changeTab:function(state,index){
			state.curIndex=index;
			state.curTab=index;
		}
	},
	actions:{}

};
