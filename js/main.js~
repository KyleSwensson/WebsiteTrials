function myExpandLine(elemId) {
	var elem = document.getElementById(elemId);
	var width = 0;
	var id = setInterval(frame, 5);
	function frame() {
		if (width >= 5) {
		 clearInterval(id);	
		} else {
			width += .17;
			elem.style.width = width + 'em';
		}
	}
}


function myShrinkLine(elemId) {
	var elem = document.getElementById(elemId);
	var width = 5;
	var id = setInterval(frame,5);
	function frame() {
		if (width <= 0) {
			clearInterval(id);
			width = 0;
			elem.style.width = width + 'em';
		} else {
			width -= .17;
			elem.style.width = width + 'em';
		}
	}
}
