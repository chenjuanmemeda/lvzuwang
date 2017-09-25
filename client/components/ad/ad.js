$(document).ready(function(){
	note();//公告
});

//公告
function note(){
  //定义函数组
  var fns={
	  //向上 
	_up : function(){
		 $(".note>div>ul").stop().animate({marginTop:"-30px"},500,
		   function(){
				$(".note>div>ul>li:lt(1)").appendTo($(".note>div>ul"));
				$(".note>div>ul").css("marginTop",0);
		 });		  
	}
  };
  
  var _autoUp = null;
  $(".note").mouseover(function(){
	  autoStop2();
  });
  
  $(".note").mouseout(function(){
	//鼠标离开后再重新恢复自动播放时间,单位毫秒
	_autoUp = setInterval(function(){fns._up() ; },1500);
  });	
  
  var autoPlay2 = function(){
	//自动播放时间,单位毫秒
	_autoUp = setInterval(function(){fns._up() ; },1500);
  };
  
  var autoStop2 = function(){
	  clearInterval(_autoUp);
	  _autoUp = null;
   };	
   
  //自动播放
  autoPlay2();
 }