$( document ).on("pageinit", ".fc-home", function() {
	//mg.recentgadgets.load();
});

$( document ).on( "pagebeforeshow", ".fc-profile", function() {
	fc.profile.load();
});



$( document ).on( "pagebeforeshow", ".fc-login", function() {
	$(".fc-login-btn").on("tap", function(){
				var changePageConfig = {
					transition: 	"pop",
					allowSamePageTransition: true, 
					changeHash: true
				};

				$.mobile.changePage( "recent-trips.php", changePageConfig);
	});
});


/*
$( document ).on( "pagebeforechange", function(topage, obj) {

	if(obj.options.target === "search-results.php"){
		fc.searchResults.setConfig(obj.options.data);
	}
});
*/
var fc = {};
fc.showLoading = function(text){
	$.mobile.loading( "show", {
		text: text || "loading...",
		textVisible: true,
		theme: "a",
		html: ""
	});
};

fc.hideLoading = function(){
	$.mobile.loading( "hide");
};

fc.getLoggedInUserId = function(){
	return 400;
};



