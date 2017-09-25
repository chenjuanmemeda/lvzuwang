var upload=Vue.extend({
	template:'#upload',
    // data:function () {
    //     return {
    //         files: [],
    //   		items:[]
    //     }
    // },
    // created:function () {
    //     // this.$file = this.$el.querySelector('input[type="file"]');
    // },
    methods: {
      //   mychange: function() {
      // 		vue.files = document.getElementById("file").files;
      // // if (vue.files.length > 9) alert('选择大于9张，系统将只选择9张图片');
		    // for(var i = 0; i < vue.files.length; i++){
			   //  var simpleFile = vue.files[i];
			   //  var reader = new FileReader();
		    //   	reader.readAsDataURL(simpleFile);
				  //   reader.onload = function(e){
				  //    	vue.items.push(this.result);
				  //   }
	     //  		}	
      // 		}
      
      	}
});
Vue.component('uploads',upload);
