var myRoom=Vue.extend({
	template:'#myRoom',
	data:function(){
		return{
    		allChecked : false,
    		// list:'',
    		houses:[
				  {
				    name : '我的房子',
				    checked : false,
				    list: [
				      {
				        name : '科技园 深大地铁站 摩登时代汇景豪华三房 ',
				        price:'￥990/晚',
				        checked : false
				      },
				      {
				        name : '桃园地铁站 南景 以臻致境简约商务三房',
				        price:'￥345/晚',
				        checked : false
				      },
				      {
				        name : '新房特价 桃园地铁站 南景苑墨香雅居',
				        price:'￥345/晚',
				        checked : false
				      },
				      {
				        name : '世界之窗欢乐谷 南山桃园地铁站 清新套房',
				        price:'￥345/晚',
				        checked : false
				      },
				      {
				        name : '技园 深大地铁站 诗意东方汇景豪华三房',
				        price:'￥679/晚',
				        checked : false
				      },
				      {
				        name : '世界之窗欢乐谷 南山桃园地铁站 北欧',
				        price:'￥679/晚',
				        checked : false
				      },
				    ],
				  }
			]
		}
	},
	
	methods:{
		chooseAll:function() {
		      var flag = true;
		      if ( this.allChecked ) {
		        flag = false;
		      }
		      for ( var i = 0, len = this.houses.length; i < len; i++ ) {
		        this.houses[i]['checked'] = flag;
		        var list = this.houses[i]['list'];
		        for ( var k = 0, len1 = list.length; k < len1; k++ ) {
		          list[k]['checked'] = flag;
		        }
		      }
		      this.allChecked = !this.allChecked;
		},
	    chooseHouses:function( num) {
		      var list = this.houses[num]['list'],
		        len = list.length;
		      if ( this.houses[num]['checked'] ) {
		        for (var i = 0; i < len; i++ ) {
		          list[i]['checked'] = false;
		        }
		      } else {
		        for (var i = 0; i < len; i++ ) {
		          list[i]['checked'] = true;
		        }
		      }
		      this.houses[num]['checked'] = !this.houses[num]['checked'];
		      this.isChooseAll();
	    },
	    choose:function( index, num) {
		      var list = this.houses[index]['list'],
		        len = list.length;
		      if ( list[num]['checked'] ) {
		        this.houses[index]['checked'] = false;
		        this.allChecked = false;
		        list[num]['checked'] = !list[num]['checked'];
		      } else {
		        list[num]['checked'] = !list[num]['checked'];
		 
		        // 判断是否选择当前店铺的全选
		        var flag = true;
		        for (var i = 0; i < len; i++ ) {
		          if ( list[i]['checked'] == false ) {
		            flag = false;
		            break;
		          }
		        }
		        flag == true ? this.houses[index]['checked'] = true : this.houses[index]['checked'] = false;
		      }
		      // 判断是否选择所有商品的全选
	      		this.isChooseAll();
    	},
    	delhouses:function(index, num) {
		      console.log(index);
		      console.log(num);
		      this.houses[index]['list'].splice(num, 1);
		}
	}

});
Vue.component('myRoom',myRoom); 