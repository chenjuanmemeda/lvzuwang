var landlordConfig={
	namespace:true,
	title:'房东信息管理',
	headers:["用户名","联系方式","性别","邮箱地址","工作所在地","所在地区"],
	isEdit:true,
	editShow:false,
	editItem:{id:"",phone:"",sex:"",email:"",workplace:"",birthplace:""},
	key:'id',
	addOrUpdate:'add',
	fields:[
		{name:'id',
		isKey:true,
		defVal:'',
		isRItem:true,
		reg:/\d/,
		errMsg:'请输入正确的格式'
	},
		{
			name:'phone',
			defVal:'',
			isRItem:true
		},
		{
			name:'sex',
			defVal:'female',
			isRItem:true,
			type:'radio',
			options:[
				{name:'男',value:'male'},
				{name:'女',value:'female'}
			]
		},
		{name:'email',defVal:''},
		{name:'workplace',defVal:''},
		{name:'birthplace',defVal:''}
		
		// {
		// 	name:'nation',
		// 	defVal:'汉族',
		// 	type:'select',
		// 	options:[
		// 		{name:'汉族',value:"汉族"},
		// 		{name:'壮族',value:"壮族"},
		// 		{name:'布衣族',value:'布衣族'}
		// 	]
		// }
	],
	pageConfig:{pageSize:8,curPage:1,total:0,pageGroupIndex:1}
};
var tenantConfig={
	namespaced:true,
	title:'房客信息管理',
	namespace:true,
	title:'房东信息管理',
	headers:["用户名","联系方式","性别","邮箱地址","工作所在地","所在地区"],
	isEdit:true,
	editShow:false,
	editItem:{id:"",phone:"",sex:"",email:"",workplace:"",birthplace:""},
	key:'id',
	addOrUpdate:'add',
	fields:[
		{name:'id',
		isKey:true,
		defVal:'',
		isRItem:true,
		reg:/\d/,
		errMsg:'请输入正确的格式'
	},
		{
			name:'phone',
			defVal:'',
			isRItem:true
		},
		{
			name:'sex',
			defVal:'female',
			isRItem:true,
			type:'radio',
			options:[
				{name:'男',value:'male'},
				{name:'女',value:'female'}
			]
		},
		{name:'email',defVal:''},
		{name:'workplace',defVal:''},
		{name:'birthplace',defVal:''}
		
	],
	pageConfig:{pageSize:8,curPage:1,total:0,pageGroupIndex:1}
};
var gridModule={
	namespaced:true,
	state:{
		url:"http://localhost:8080/",
		grids:[]
	},
	getters:{
	},
	mutations:{
		addGrid:function(state,name){
			var i=state.grids.indexOf(name);
			if(i==-1) state.grids.push(name);
		},
		delGrid:function(state,i){
			console.log(i);
			// state.grids.splice(state.grids.indexOf(name),1);
			state.grids.splice(i,1);
			console.log(state.grids)
		},
		//options要有4个键
		//gridName表示store的名字
		//deepCopy深复制函数
		//isAdd是否是新增
		//item子store中editItem的初始化状态
		beginEdit:function(state,options){
			var targetStore=state[options.gridName];
			options.deepCopy(options.item,targetStore.editItem);
			targetStore.editShow=true;
			targetStore.addOrUpdate=options.isAdd?'add':'update';
		},
		endEdit:function(state,gridName){
			console.log(gridName);
			state[gridName].editShow=false;
		}
	},
	actions:{},
	modules:{
		landlord:{state:landlordConfig},
		tenant:{state:tenantConfig}
	}
};