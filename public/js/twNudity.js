//CONTROLADOR PUBLICO

//lama a la api de tw
function analizeUser(arroba) {
	//data = getUserData(arroba);
	if (document.getElementById("resultado").style.display=="none") {
		if (false/*data === null*/) {		
			var div = document.getElementById("error");
			div.style.display = "block";
		} else {
			var div = document.getElementById("load");
			div.style.display = "block";
			var div = document.getElementById("barra");
			val=0;
			var interid = setInterval(function () {
		        if (val <= 101) {
		            div.style.width = val+"%";
		            val++;
		        }
		        if (val==101) {
		        	clearInterval(interid);
		        	setTimeout(showRes(), 15000);
		        }
	   		}, 50);
	   		//mientras la progress tira hacer el proceso de gestionar to
		}
	} else {
		var div = document.getElementById("resultado");
		div.style.display = "none";
		document.getElementById("barra").style.width = "0%";
		analizeUser();
	}
}

function showRes() {
	var div = document.getElementById("resultado");
	div.style.display = "block";
}