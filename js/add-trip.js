$( document ).on( "pagebeforeshow", ".fc-add-trip", function() {
	fc.addTrip.load();
});

fc.addTrip = function(){
	return {
		load: function(){

			$( ".fc-at-flight-auto" )
				.on("listviewbeforefilter", $.proxy(this.flightSearch, this))
				.on("tap", "li", $.proxy(this.selectFromAuto, this));	

			$( ".fc-at-airline" )
				.on("listviewbeforefilter", $.proxy(this.airlineSearch, this))
				.on("tap", "li", $.proxy(this.selectAirline, this));	


			$(".fc-add-trip-btn").on("tap", $.proxy(this.addTripReq, this));
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

		selectAirline: function(e){
			var $li = $(e.currentTarget),
				$ul = $li.parents("ul"),
				airline = $li.data("airline");

			$ul.empty();
			$ul.prev("form").find(".ui-input-text").val(airline);
			$ul.data("value", airline);
		},
		
		flightSearch: function(e, data){
			this.buildAirportList($(data.input), $(e.currentTarget));
		},

		airlineSearch: function(e, data){
			this.buildAirlineList($(data.input), $(e.currentTarget));		
		},

		buildAirlineList: function($input, $ul){
			var value = $input.val(),
				config,
				airlines,
				html = "";
			
			$ul.html( "" );
			
			if ( !value || value.length < 3) {
				return;
			}

			$ul.listview( "refresh" );
			
			config = {
				q: value
			};

			this.getAirlines(config, function(airlines, textStatus, errorThrown ){
				$.each(airlines, function(i, airline){
					html += "<li data-airline='"+airline.AirlineName+"'>"+
								"<a href='#'>"+
									"<h2>"+airline.AirlineName+"</h2>"+
								"</a>"+
							"</li>";
				});
				$ul.html( html );
				$ul.listview("refresh");
				$ul.trigger("updatelayout");
			});
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

		getAirlines: function(config, callback){
			$.ajax({	 
	                dataType: 'jsonp',
	                async: true,
					crossDomain: true,
	                data: config,
	                url: "http://flightcompanions.com/apiv2/getAirlineNew.php?callback=?",
			}).then(callback);
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

		addTripReq: function(e){
			e.preventDefault();
			var from = $(".fc-at-from ").data("value") || "SFO",
				to = $(".fc-at-to").data("value") || "DEL",
				date = $("#fc-at-travel-date").val() || "2013-12-12",
				airline =$(".c-at-airline").data("value") || "Emirates",
				shortMsg = $("#fc-at-short-msg").val();

			if(!from || !to || !date || !airline){
				return;
			}

			this.addTripService(from, to, date, airline, shortMsg);
			

		},

		addTripService: function(from, to, date, airline, shortMsg){
			console.log(arguments);
			
			var request = {
				OriginCode: 		from,
				DestinationCode: 	to,
				ShowScope: 			0,		
				Airline: 			airline,
				TicketsBooked: 		1, 	
				fromDate: 			date,
				TentativeTravelDate: 1, 
				shortMessage: 		shortMsg,
				newadded: 			1, 
				loggedinuserid: 	fc.getLoggedInUserId()
			};

			fc.showLoading();
			$.ajax({	 
	                dataType: 'jsonp',
	                async: true,
					crossDomain: true,
	                data: request,
	                url: "http://flightcompanions.com/apiv2/addTrip.php?callback=?"
			}).then(function(trips, textStatus, errorThrown ){
				fc.hideLoading();

				var changePageConfig = {
					transition: 	"pop",
					allowSamePageTransition: true, 
					changeHash: true
				};

				$.mobile.changePage( "profile.php", changePageConfig);
			});		
			
		}
	};
		
}();