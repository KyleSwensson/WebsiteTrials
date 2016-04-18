var MOVESPEED = 2;
var id;
function myExpandLine(elemId, textElemId) {
	var textElem = $("#"+textElemId);
	var textPos = textElem.position();
	var elem2 = $("#" + elemId);
	clearInterval(id);
	//id = setInterval(frame, 5);
	var maxWidth = $("#"+textElemId).width();

	elem2.css('top', textPos.top + (textElem.height() * 1.3));
	elem2.css('left', textPos.left);

	elem2.animate({
		width: maxWidth
	}, 'fast');

/*	function frame() {
		if (elem2.width() >= maxWidth) {
		 clearInterval(id);	
		} else {
			elem2.width(elem2.width() + MOVESPEED);
		}
	}*/
}


function myShrinkLine(elemId) {
	var elem = $("#" + elemId);
	var ewidth = 5;
	var elemPos = elem.position();
	var elemWidth = elem.width();
	//clearInterval(id);
	//id = setInterval(frame,5);
	elem.animate({
		width: 0,
		left: (elemPos.left + elemWidth)
	}, 'fast');
	function frame() {
		if (elem.width() <= 0) {
			clearInterval(id);
			elem.width(0);
		} else {
			elemPos.left += MOVESPEED;
			elem.css('left', elemPos.left);
			elem.width(elem.width() - MOVESPEED);
		}
	}
}
