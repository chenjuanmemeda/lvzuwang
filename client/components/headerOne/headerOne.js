
			window.onscroll=function(){ 
				 var t = document.documentElement.scrollTop || document.body.scrollTop; 
				 var headerone = id( "headerone" ); 
				 if( t >= 50 ) { 
				  headerone.style.display = "inline"; 
				 } else { 
				  headerone.style.display = "none"; 
				 } 
			} 	
