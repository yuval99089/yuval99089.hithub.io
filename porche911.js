	text = [];
	var i = 0;
	var t;

window.onload = function () {
	text[0] = document.getElementById("text");
	text[1] = document.getElementById("text2");
	text[2] = document.getElementById("text3");
	text[3] = document.getElementById("text4");
	text[4] = document.getElementById("text5");
	text[5] = document.getElementById("text6");
	text[6] = document.getElementById("text7");
	text[7] = document.getElementById("text8");
	text[8] = document.getElementById("text9");
	text[9] = document.getElementById("text10");
	text[10] = document.getElementById("text11");
	
	for (j=0;j<text.length; j++) {
	text[j].onmouseover= function(e) {
		clearInterval(t);
	}
	text[j].onmouseout= function(e) {
		interval();
	}
}
	interval ();
	
}

function interval () {
	t = setInterval(function(){
		display ();
		i++;
		if (i > 10) i = 0;
		
	}, 5000);
	
	function display () {
		text[i].style.display = "block";
		for (j = 0; j < text.length; j++) {
			if (j == i) continue;
			text[j].style.display="none";
		}
		
	}
}