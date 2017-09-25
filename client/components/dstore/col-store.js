var colMod={
	namespaced:true,
	state:{
		currentView:'myData'
	},
	getters:{},
	mutations:{
		toggleTabs:function(state,i){
			// console.log('i:'+i);
    		state.currentView =i ;
    		// console.log('currentView:'+state.currentView);
		}
	},
	actions:{} 
};