var fcolumn=Vue.extend({
	template:'#fcolumn',
	data(){
		return {
			kcolumn:[
				{name:'分享优惠',imgUrl:'images/share.png'},
				{name:'订单',view:'myOrder',imgUrl:'images/order.png'},
				{name:'积分',imgUrl:'images/code.png'},
				{name:'红包',imgUrl:'images/red.png'},
				{name:'代金券',imgUrl:'images/quan.png'},
				{name:'通知',imgUrl:'images/msg.png'},
				{name:'我的资料',view:'myData',imgUrl:'images/data.png'},
				{name:'租房记录',view:'myCol',imgUrl:'images/xin.png'},
				{name:'密码设置',imgUrl:'images/psw.png'}
			],
			dcolumn:[
				{name:'我的资料',view:'myData',imgUrl:'images/data.png'},
				{name:'房源记录',view:'myRoom',imgUrl:'images/com.png'},
				{name:'客户评价',view:'myRec',imgUrl:'images/rec.png'},
				{name:'房客信息',imgUrl:'images/msg.png'},
				{name:'积分',imgUrl:'images/code.png'},
				{name:'红包',imgUrl:'images/red.png'},
				{name:'代金券',imgUrl:'images/quan.png'},
				{name:'通知',imgUrl:'images/msg.png'},
				{name:'密码设置',imgUrl:'images/psw.png'}
			]
		}
	}, 
	created:function(){},
	methods:{}
});
Vue.component('fcolumn',fcolumn);