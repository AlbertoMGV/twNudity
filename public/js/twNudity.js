//ctlr para cuando peta <3

function error(){
	if(window.location.href.substr(window.location.href.length - 5)=="error"){
		var div = document.getElementById("error");
		div.style.display = "block";
	}
	
}

window.onload=error;

