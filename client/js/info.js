var info=Vue.extend({
	template:'#info',
	data:function(){
		return {
			items:[]			
		};
	},
	created:function(){
		this.items=[
			{name:'房源信息',imgUrl:'pictures/1.jpg',price:'298',title:"【一位画家设计师的家】",desc:'02/地铁站/宽窄/太古里'},
			{name:'房源描述',imgUrl:'pictures/2.jpg',price:'340',title:"【我想和你虚度时光】",desc:'宽窄巷子地铁简约日系一居'},
			{name:'配套设施',imgUrl:'pictures/3.jpg',price:'290',title:"【奶瓶小屋】",desc:'宽窄巷子地铁口温馨童趣独立房间2'},
			{name:'真实照片',imgUrl:'pictures/4.jpg',price:'300',title:"【多多洛的家】",desc:'简单生活好好住 科华北路两居整租'},
			{name:'价格规则',imgUrl:'pictures/5.jpg',price:'336',title:"【一树桃】",desc:'春熙路/太古里，小满，可住4人'},
			{name:'价格规则',imgUrl:'pictures/6.jpg',price:'410',title:"【小铃铛】",desc:'东郊记忆.SM广场.BRT欧式两居'},
			{name:'价格规则',imgUrl:'pictures/7.jpg',price:'288',title:"【玉林路小酒馆】",desc:'Ins网红风 一个纯手绘的屋子'},
			{name:'价格规则',imgUrl:'pictures/8.jpg',price:'316',title:"【斑斓时光】",desc:'大鱼在成都等你锦里武侯祠浪漫二居'}
			
		];
	}
});
Vue.component('info',info);