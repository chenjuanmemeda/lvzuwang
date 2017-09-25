var content=Vue.extend({
	template:'#content',
	data:function(){
		return {
			items:[]
		};
	}
});
//全局注册content
Vue.component('content',content);