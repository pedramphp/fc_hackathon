$( document ).on( "pagebeforeshow", ".fc-search-results", function() {
	fc.searchResults.load();
});

fc.searchResults = function(){
	return{
		config: null,
		load: function(){

			console.log(this.config);
			var req = this.config.request;
			$(".fc-sr-content")
				.append("<h3>Search Results: "+req.OriginCode+" to "+req.DestinationCode+"</h3>")
				.append(this.getListView());

			$(".fc-sr-listview").listview({
				create: function( event, ui ) {

				}
			}).listview( "refresh" );


		},

		getListView: function(){
			var trips = this.config.trips;
			var $ul = $('<ul data-role="listview" class="fc-sr-listview" data-split-icon="gear" data-split-theme="d" data-inset="true" />');
			$.each(trips, function(i, trip){
				listNode = 
					'<li><a href="#">'+
		        		'<img src="https://graph.facebook.com/'+trip.FacebookUserId+'/picture?type=normal">'+
		        		'<h2>'+trip.FullName+'</h2>'+
		        		'<p>'+trip.TravelDate+' By '+ trip.Airline+'</p></a>'+
		        		'<a href="#purchase" data-rel="popup" data-position-to="window" data-transition="pop">Purchase album</a>'+
		    		'</li>';
		    	$(listNode).appendTo($ul);		
			});

			return $ul;
		},

		setConfig: function(config){
			console.log(this.config);
			this.config = config;
		}
		
	};
}();