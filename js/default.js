$( document ).on("pageinit", ".fc-home", function() {
	//mg.recentgadgets.load();
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
}
