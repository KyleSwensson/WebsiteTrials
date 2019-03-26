
$( document ).ready(function() {
	$("#bodyRes").css("opacity", "0");
	$("#bodyRes").animate({
		opacity: "1.0",
	}, 1400);


	for (var i = 1; i <= 6; i++) {
		$("#projectBox" + i).animate({
			top: "0"
		}, 500 + (i*150));
	}

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



function myExpandBox(boxId) {
	$("#"+boxId+"Te").stop()
	$("#"+boxId+"Ti").stop()
	$("#"+boxId+"Layover").stop()
		
	$("#"+boxId+"Te").animate({
		opacity: "1"
	}, 300);
	$("#"+boxId+"Ti").animate({
		opacity: "1"
	}, 200);
	$("#"+boxId+"Layover").animate({
		opacity: "0.8"
	}, 200);

}
function myShrinkBox(boxId) {
	$("#"+boxId+"Te").stop()
	$("#"+boxId+"Ti").stop()
	$("#"+boxId+"Layover").stop()

	$("#"+boxId+"Te").animate({
		opacity: "0"
	}, 200);
	$("#"+boxId+"Ti").animate({
		opacity: "0"
	}, 300);
	$("#"+boxId+"Layover").animate({
		opacity: "0"
	}, 200);


}



