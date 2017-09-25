var photoinfo=Vue.extend({
	template:"#photoinfo",
	props:'likepart',
	data:function(){
		return{
			cuTitle:0,
			curTitleIndex:0,
		};
	}
});
Vue.component('photoinfo',photoinfo);