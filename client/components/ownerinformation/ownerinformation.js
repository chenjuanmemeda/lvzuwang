var owner=Vue.extend({
	template:"#owner",
	props:['owner'],
	data:function(){
		return{
			// ChenImgUrlThree:"Chen-images/owner.jpg",
			// title:'荷香夜色咖啡店',
			// number:'705'
		};
	},
	methods:{

		
	},
});
Vue.component('owner',owner);