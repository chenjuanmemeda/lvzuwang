 var chentime=Vue.extend({
    template:"#chentime",
    data(){
           return {
            content: '',
            limit_seconds:9000,
            msgTime:'',
            endTime:'',
            timer:null,
           }
    },
    created:function(){
      this.dealTime();
      this.timer = setInterval(this.dealTime,1000);
    },
    methods: {
      dealTime:function(){
            if(this.limit_seconds > 0){
                  var hours = Math.floor(this.limit_seconds/3600);
                  var minutes = Math.floor(this.limit_seconds/60)%60;
                  var seconds = Math.floor(this.limit_seconds%60);
                  if(hours<10){hours = "0" + hours;}
                  else 
                    if(hours>99){hours = "99";}
                  else{hours = hours + "";}
                  if(minutes<10){minutes = "0" + minutes;}
                  else{minutes = minutes + "";}
                  if(seconds<10){seconds = "0" + seconds;}
                  else{seconds = seconds + ""}  
                  var msgTime = "<div class=\"end\">限时抢购:</div><div \"limit\"><span class=\"key\">"
                  +hours.substr(0,2)+"</span><div class=\"unit\">小时</div><span class=\"key\">"
                  +minutes.substr(0,2)+"</span><div class=\"unit\">分</div><span class=\"key\">"
                  +seconds.substr(0,2)+"</span><div class=\"unit\">秒</div></div>";
                  this.msgTime=msgTime;
                  --this.limit_seconds;
            }else{
              var endTime="<div class=\"end\">抢购已结束</div>";
              this.msgTime=endTime;
            }              
          }
        }
    });
Vue.component('chentime',chentime);