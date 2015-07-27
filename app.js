$(document).ready(function(){

	$.ajax ({
	    type: 'GET',
	    dataType: 'json',
	    crossDomain: true,
	    url: 'https://api.github.com/users/SamSunders?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
	   	success: function(data) {
	   		console.log("In the success");
	   		console.log(data);
	     	callback(data);
	    }
	    
	})

});

function callback(data){
	console.log("Data name: " + data.login);
}