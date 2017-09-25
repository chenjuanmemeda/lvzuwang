var myRec=Vue.extend({
	template:'#myRec',
	data:function(){
		return {
			msg:''
		}
	}
});
Vue.component('myRec',myRec);