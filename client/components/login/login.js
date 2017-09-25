var login=Vue.extend({
      template:'#login',
      components:{
        popwindow:popwindow
       
      },
      data:function(){
        return {
                
                showTips: false,
                tips: '', 
                // logInfo:{username:'',password:''}
                // username: '',
                // password: '',
                // item:['username','password'],
                findItem:{username:'',password: ''}
        };
      },
        props:["isShow"] ,
 
        methods:{
          joke:function(){
              alert("自己再好好想想...");
          },
          closeWindow:function(){
            this.$emit('close-window',false);//emit发射一个事件
            this.findItem.username='',
            this.findItem.password='',
            this.showTips = false
          },
        
          loginSubmit:function(){
              if(this.findItem.username == "" || this.findItem.password == ""){
                this.tips="还没填用户名或密码哦";
                this.showTips=true;
              }else if(this.findItem.username=='admin'&&this.findItem.password=='********'){     
              
                      location.href = "admin.html" ;
              }else{
               
                  this.$http({
                    url:'http://localhost:8080/tenant/dl',
                    method:'post',
                    data:this.findItem,
                    dataType:'json'
                  }).then((res)=>{
                      console.log(res.data.data);

                      if(res.data.data.length == 1){
                           this.tips = "登录成功";
                           this.showTips = true;
                           $('.before').css('display','none');
                           $('.after').css('display','inline-block');
                           localStorage.username=this.findItem.username;
                           localStorage.password=this.findItem.password;
                           console.log(localStorage.username);
                           console.log(localStorage.password);
                           document.write(localStorage.username,localStorage.password);
                           this.$emit('close-window',false);
                      }else{
                           this.$http({
                              url:'http://localhost:8080/landlord/dl',
                              method:'post',
                              data:this.findItem,
                              dataType:'json'
                              //JSON.stringify(logInfo)
                            }).then((res)=>{
                                console.log(res.data.data);

                               if(res.data.data.length == 1){
                                    this.tips = "登录成功";
                                    this.showTips = true;
                                    $('.before').css('display','none');
                                    $('.after2').css('display','inline-block');
                                    this.$emit('close-window',false);

                               }else if(res.data.data.length==0){
                                  this.tips = "登录失败";
                                  this.showTips = true;
                                  this.findItem.username='',
                                  this.findItem.password=''
                          
                               }else{
                                  this.tips = "请稍后登录";
                                  this.showTips = true;
                               }
                            })
                      }
                  })
               
              }
           
          }
       }


});
Vue.component('login',login);

//           mounted(){
//           /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
//             if(getCookie('username')){
//                 this.$router.push('/index')
//             }
//           },
