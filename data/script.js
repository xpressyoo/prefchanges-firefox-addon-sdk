(function(){

// Persistent Values
self.port.on("get-prefs", function(prefs) {

// onPrefchange Values
self.port.on("prefchange", function(data) {	

 	$(document).ready(function() {

  	var option1 	= prefs[0];
  	var option2 	= prefs[1];
  	var option 	= data[0];
  	var value 	= data[1];
 	
 	var css;
 	
		if(option1 == true || option == "option1" && value == true){
			css = "body {background-color:red !important}";
				}
			
  
  		if(option2 == true || option == "option2" && value == true){
			css = "body {background-color:blue !important}";

 		 		}
 		 		
///////////////////////////////// CSS Activation
$('head').append('<style type="text/css">' + css + '</style>');
//////////////////////////////// #CSS Activation
  
	});//end jQuery ready
 });
 });

})();
