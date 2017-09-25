var otherroompart=Vue.extend({
	template:"#otherroompart",
	props:['likepart'],
	data:function(){
		return{
			curPic:0,
			// flag:true,
			// typeList:["在售","成交","小区","地图找房"],
			// curIndex:1,
			// options:[
			// 	{name:'在售',value:'sale'},
			// 	{name:'成交',value:'Transaction'},
			// 	{name:'小区',value:'plot'}
			// ]
		};
	},
	methods:{
	
		nextBtnChange:function(){
			// curPic=this.likepart.ChenImglike[0];
			// var curIndex=this.likepart.ChenImglike.length;
			
			// curPic=this.likepart.ChenImglike[curIndex];
			if(this.curPic==this.likepart.ChenImglike.length-1)
				this.curPic=0;
			else
				this.curPic++;
	},
		prevBtnChange:function(){

			if(this.curPic==0)
				this.curPic=this.likepart.ChenImglike.length-1;
			else
				this.curPic--;
			// this.curPic--;
		},
	},
});
Vue.component('otherroompart',otherroompart);