$( document ).on( "pagebeforeshow", ".fc-search", function() {
	fc.searchTrips.load();
});

fc.searchTrips = function(){
	return{

		load: function(){

			$( ".fc-flight-auto" )
				.on( "listviewbeforefilter", $.proxy(this.flightSearch, this))
				.on("tap", "li", $.proxy(this.selectFromAuto, this));	

			$(".fc-search-companions").on("tap", $.proxy(this.searchCompanionsReq, this))
		},

		selectFromAuto: function(e){
			var $li = $(e.currentTarget),
				$ul = $li.parents("ul"),
				airportCode = $li.data("airportcode"),
				airtportTitle = $.trim($li.find("h2").text());

			$ul.empty();
			$ul.prev("form").find(".ui-input-text").val(airtportTitle);
			$ul.data("value", airportCode);
		},
		
		flightSearch: function(e, data){
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
		},

		searchCompanionsReq: function(){
			var from = $(".fc-from ").data("value") || "SFO",
				to = $(".fc-to").data("value") || "DEL";

			if(!from || !to){
				return;
			}

			this.searchCompanions(from, to);

		},

		searchCompanions: function(from, to){

			var request = {
				OriginCode: 		from,
				DestinationCode: 	to,
				search: 			"Search",
				fromDate: 			"09-19-2013",
				toDate: 			"09-19-2014",
				SearchScope: 		1,
				searchperformed: 	1,
				loggedinuserid: 	400
			};

			fc.showLoading();

			$.ajax({	 
	                dataType: 'jsonp',
	                async: true,
					crossDomain: true,
	                data: request,
	                url: "http://flightcompanions.com/apiv2/search.php?callback=?"
			}).then(function(trips, textStatus, errorThrown ){
				fc.hideLoading();


				fc.searchResults.setConfig({
					trips: trips,
					request: request
				});

				var changePageConfig = {
					transition: 	"pop",
					allowSamePageTransition: true, 
					changeHash: true
				};

				$.mobile.changePage( "search-results.php", changePageConfig);
			});			
		}
		
	};
}();