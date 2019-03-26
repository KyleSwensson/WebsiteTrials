var MOVESPEED = 2;
var id;
$("#bordbox1").on("oAnimationend animationend webkitAnimationEnd", function(){
	fadeInTitle();
});

function fadeInTitle() {
	console.log("fading in title");
	var mainTitleElem = $("#maintitle");
	var subtitleElem = $("#subtitle");

	mainTitleElem.animate({ 
		opacity: 1.0	
	}, 800);
	subtitleElem.animate({
		opacity: 1.0
	}, 1700);

}
function myExpandLine(elemId, textElemId) {
	var textElem = $("#"+textElemId);
	var textPos = textElem.position();
	var elem2 = $("#" + elemId);
	elem2.stop();
	clearInterval(id);
	//id = setInterval(frame, 5);
	var maxWidth = $("#"+textElemId).width();

	elem2.css('top', textPos.top + (textElem.height() * 1.3));
	elem2.css('left', textPos.left);

	elem2.animate({
		width: maxWidth
	}, 'fast');
}

function aboutImgFadeIn() {
	$("#aboutProfileImg").fadeIn(2000);
/*	$("#abouth1").animate({
		opacity: 1
	});
	myOpacityFadeIn("abouth1", 1000);
	window.setTimeout(myOpacityFadeIn("aboutPara", 1200), 600);*/
}

function myOpacityFadeIn(elemId, time) {
	$("#" + elemId).animate({
		opacity: 1.0
	}, time);
}


function myShrinkLine(elemId) {
	var elem = $("#" + elemId);
	elem.stop();
	var ewidth = 5;
	var elemPos = elem.position();
	var elemWidth = elem.width();

	elem.animate({
		width: 0,
		left: (elemPos.left + elemWidth)
	}, 'fast');
}
