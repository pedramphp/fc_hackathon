$( document ).on( "pagebeforeshow", ".fc-recent-trips", function() {
	fc.recentTrips.load();
});

$( document ).on( "mobileinit", function() {
$.mobile.popup.prototype.options.initSelector = "#fc-rt-contact";
});

fc.recentTrips = function(){
	var $content = null;
	$("#fc-rt-contact-traveller").find(".fc-rt-contact-cancel").off().on("tap",function(){
	//	$("#fc-rt-contact-traveller").popup( "close" )
	});

	$("#fc-rt-contact .fc-rt-contact-send").on("tap", function(){
			
		var tripId = fc.recentTrips.activeTripId;
		var message = $(this).parents("#fc-rt-contact").find(".fc-rt-contact-msg").val();
		var userId = fc.getLoggedInUserId();

		console.log(tripId,message, userId);
		$.ajax({	 
	        dataType: 'jsonp',
	        async: true,
			crossDomain: true,
	        data: {
	        	message: message,
	        	trid: tripId,
	        	uid: userId,
	        	action: "send"
	        },
	        url: "http://flightcompanions.com/apiv2/sendRequest.php?callback=?"
		}).then(function(){
			//	$("#fc-rt-contact").popup( "close" );
		});

	});

	return{
		activeTripId: null,
		load: function(){
			$content = $(".fc-recent-trips .fc-rt-content");

			this.buildTripsList();
		},

		buildTripsList: function(){
			fc.showLoading();
			var shortMessage;
			this.getTripList({ maxtrips: 20}, function(trips, textStatus, errorThrown ){
				var $ul = $('<ul data-role="listview" class="fc-rt-listview" data-split-theme="d" data-inset="true" />');

				$.each(trips, function(i, trip){
					shortMessage = trip.ShortMessage ? ' <i style="font-weight:normal; font-size: 11px;">\"'+trip.ShortMessage+'\"</i>' : '';
					listNode = 
						'<li data-userid='+trip.UserId+' data-tripid='+trip.Id+' data-from='+trip.OriginAirport.AirportCode+' data-to='+trip.DestinationAirport.AirportCode+' ><a href="#">'+
			        		'<figure style="position: absolute; width:97px; text-align:center; left: 10px; margin:0"><img style="max-height: 73px;" src="https://graph.facebook.com/'+trip.User.FacebookUserId+'/picture?type=normal" /></figure>'+
			        		'<div style="margin-left: 110px;"><h2>'+trip.User.FirstName + ' ' + trip.User.LastName + shortMessage + '</h2>'+
			        		'<h3>'+trip.OriginAirport.AirportCode +' to '+trip.DestinationAirport.AirportCode+'</h3>'+
			        		'<p>'+trip.TravelDate+' By <b>'+ trip.Airline+'</b> - Flight no: '+ trip.Flight+'</p>'+
			        		'</div></a>'+
			        		'<div class="fc-rt-btns">'+
			        			'<a href="#" class="fc-rt-see-all-travellers">See All travellers</a>'+
			        			'<a href="#fc-rt-contact-traveller" class="fc-rt-contact-traveller">Contact '+trip.User.FirstName +'</a></div>'+
			        	'</li>';
			    	$(listNode).appendTo($ul);		
				});


				$content
					.append("<h3> Recently added trips </h3>")
					.append($ul);

				$(".fc-rt-contact-traveller, .fc-rt-contact-traveller").off("tap");

				$(".fc-rt-listview")
					.listview({create: function(event, ui){}})
					.listview( "refresh" )
					.find("li")
						.find(".fc-rt-see-all-travellers").on("tap", function(e){

							e.preventDefault();
							var from = $(this).parents("li").data("from"),
								to = $(this).parents("li").data("to");

							if(!from || !to){
								return;
							}

							fc.searchTrips.searchCompanions(from, to);
						}).end()
						.find(".fc-rt-contact-traveller").off("tap").on("tap", function(e){

							var $li = $(this).parents("li");
							e.preventDefault();
							fc.recentTrips.activeTripId = $li.data("tripid");
							
							$.mobile.changePage('#fc-rt-contact', {
							        transition : 'pop',
							        role       : 'dialog'
							});



						});


				fc.hideLoading();
			});
		},

		getTripList: function(config, callback){
			$.ajax({	 
	                dataType: 'jsonp',
	                async: true,
					crossDomain: true,
	                data: config,
	                url: "http://www.flightcompanions.com/apiv2/getAllTrips.php?callback=?"
			}).then(callback);
		}
	};
}();