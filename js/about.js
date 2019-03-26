var newLocation;
$( document ).ready(function() {
	console.log("about js working");
	$("#aboutProfileImg").hide();
});
// delegate all clicks on "a" tag (links)
/*$(document).on("click", "a", function () {

    // get the href attribute
    var newUrl = $(this).attr("href");

    // veryfy if the new url exists or is a hash
    if (!newUrl || newUrl[0] === "#") {
        // set that hash
        location.hash = newUrl;
        return;
    }

    // now, fadeout the html (whole page)
    $("#bodyOne").fadeOut(function () {
        // when the animation is complete, set the new location
        location = newUrl;
    });
    $("#bodyOne").animate({
	left: "0%"
    }, 2000);

    // prevent the default browser behavior.
    return false;
});*/



$(document).on("click", "a", function () {

    // get the href attribute
    var newUrl = $(this).attr("href");

    // veryfy if the new url exists or is a hash
    if (!newUrl || newUrl[0] === "#") {
        // set that hash
        location.hash = newUrl;
        return;
    }

    
    $("#bodyOne").animate({
	    opacity: "0",
    }, 500, function () {
	    location = newUrl;
    });
   
    // prevent the default browser behavior.
    return false;
});






function fadeStuffIn() {
	console.log("got here");
	$("#abouth1").hide().fadeIn(1000);
	$("#aboutPara").hide();
	setTimeout($("#aboutPara").fadeIn(1200), 600);
}
