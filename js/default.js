$( document ).on("pageinit", ".fc-home", function() {
	//mg.recentgadgets.load();
});

$(document).on("pagebeforeshow", ".mg-collection", function (event, data) {
    //mg.allgadgets.load();
 });

$( document ).on("pagebeforeshow", ".mg-details", function() {
	//mg.gadgetDetail.load();
    //mg.accessories.load();
});

var fc = {};
