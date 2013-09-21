$( document ).on( "pagebeforeshow", ".fc-search", function() {
	fc.searchTrips.load();
});

fc.searchTrips = function(){
	return{

		load: function(){
			
			
			$( ".fc-from-auto" ).on( "listviewbeforefilter", $.proxy(this.fromSearch, this));
			$( ".fc-from-auto" ).on("tap", "li", $.proxy(this.selectFromAuto, this));	
		},

		selectFromAuto: function(e){
			var $li = $(e.currentTarget),
				$ul = $li.parents("ul"),
				airportCode = $li.data("airportcode"),
				airtportTitle = $.trim($li.find("h2").text());

			$ul.hide();
			$ul.prev("form").find(".ui-input-text").val(airtportTitle);
			$ul.data("value", airportCode);
		},
		
		fromSearch: function(e, data){
			this.buildAirportList($(data.input), $(e.currentTarget));
		},

		buildAirportList: function($input, $ul){
			var value = $input.val(),
				config,
				airports,
				html = "";
			
			$ul.html( "" );
			
			if ( !value || value.length < 3) {
				return;
			}

			$ul.listview( "refresh" );
			
			config = {
				q: value
			};

			this.getAirports(config, function(airports, textStatus, errorThrown ){
				$.each(airports, function(i, airport){
					html += "<li data-airportcode='"+airport.AirportCode+"'>"+
								"<a href='#'>"+
									"<h2>"+airport.AirportName+"</h2>"+
								"</a>"+
							"</li>";
				});
				$ul.html( html );
				$ul.listview("refresh");
				$ul.trigger("updatelayout");
			});

		},

		getAirports: function(config, callback){
			$.ajax({	 
	                dataType: 'jsonp',
	                async: true,
					crossDomain: true,
	                data: config,
	                url: "http://flightcompanions.com/apiv2/getAirportNew.php?callback=?",
			}).then(callback);
		}
		
	};
}();