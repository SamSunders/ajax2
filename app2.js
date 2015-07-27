var username;

$(document).ready(function(){
	$("body").on("click", ".button", function(event){
		event.preventDefault();
		username = encodeURI($('#userEnter').val());
		console.log("clicked");
		console.log(username);
		search(username);
		
			   		});
			   		
			    });


function callback(data){
	console.log("Data name: " + data);
	$("#results").html("");
	$("#results").append("<img class='image' src="+ data.avatar_url +" />");
	$("#results").append("<span class='stuff'>User Login: "+data.login+"</span>");
	$("#results").append("<span class='stuff'>Link to Github Page: <a href='"+data.html_url+"'target='blank'>"+data.html_url+"</a></span>");
	$("#results").append("<span class='stuff'>Bio Information: "+data.bio+"</span>");

}

function search(query){
	$.ajax ({
		type:'GET',
		dataType:'json',
		crossDomain:true,
		url:'https://api.github.com/users/'+ username + '?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
		success: function(data) {
			console.log("This is after the url");
			callback(data);
		},
		error: function(){
			$("#results").append("<p>User Not Found</p>")
		}
	});

}