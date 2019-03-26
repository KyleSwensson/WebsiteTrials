$( document ).ready(function() {
	$("#bodyRes").animate({
		opacity: "1",
	}, 1000);
});

$(document).on("click", "a", function () {

    // get the href attribute
    var newUrl = $(this).attr("href");

    // veryfy if the new url exists or is a hash
    if (!newUrl || newUrl[0] === "#") {
        // set that hash
        location.hash = newUrl;
        return;
    }

    
    $("#bodyRes").animate({
	    opacity: "0",
    }, 500, function () {
	    location = newUrl;
    });
   
    // prevent the default browser behavior.
    return false;
});



$(document).on("click", "a", function () {

    // get the href attribute
    var newUrl = $(this).attr("href");

    // veryfy if the new url exists or is a hash
    if (!newUrl || newUrl[0] === "#") {
        // set that hash
        location.hash = newUrl;
        return;
    }

    
    $("#bodyRes").animate({
	    opacity: "0",
    }, 500, function () {
	    location = newUrl;
    });
  

    // prevent the default browser behavior.
    return false;
});
