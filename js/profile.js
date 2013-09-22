fc.profile = function(){
	var $content;
	return {
		load: function(){
			$content = $(".fc-profile-content");

			this.getTripList(this.loadTravelPlans);
		},

		loadTravelPlans: function(trips){
			var html = "",
				contactedBy = "",
				contactStatusClass;

			$collapsible = $('<div data-role="collapsible-set" data-theme="c" data-content-theme="d" />');
			$.each(trips, function(i, trip){
				contactedBy = "";

				if(trip.ContactedBy){
					$.each(trip.ContactedBy, function(i, user){
						if(user.ContactStatus == 2){
							contactStatusClass = "profile-decline";
							contactStatus = "Decline";
						}else{
							contactStatusClass = "profile-accept";
							contactStatus ="Accept"
						}
						contactedBy += "<img style='float: left; margin-right: 15px;' src= 'https://graph.facebook.com/"+user.FacebookUserIdForContacted+"/picture?type=normal' />";
						contactedBy += "<div>";
						contactedBy +=		"<span>" + user.FullNameForContacted+ "</span>";
						contactedBy += 		"<div>"+ user.ContactedMessage + "</div>";
						contactedBy += 		"<div><a href='#' class='"+contactStatusClass+"'>"+contactStatus+"</a></div>";
						contactedBy += "</div>";

					});	
				}

				html += 
				'<div data-role="collapsible">'+
					'<h3>' + trip.OriginCity +" - " + trip.DestinationCity +'</h3>'+
					'<p>'+
						'<div>' + trip.TravelDate + ' By ' + trip.Airline+ '</div>'+
						'<div>'+ contactedBy + '</div>'+
					'</p>'+
				'</div>';
			});	

			$collapsible.html( html );
			$content.append("<h3>My  Travel Plans </h3>")
			$content.append($collapsible);
			$collapsible.collapsibleset({
				create: function( event, ui ) {}
			});
			$collapsible.collapsibleset("refresh");
			$collapsible.trigger("updatelayout");


			fc.profile.getPeopleContacted(fc.profile.loadPeopleContacted);

		},

		loadPeopleContacted: function(contacts){
				
				var status,statusClass;
				var $ul = $('<ul data-role="listview" class="fc-prfile-people-contacted" data-split-theme="d" data-inset="true" />');

				$.each(contacts, function(i, contact){
					status = contact.Status == 1 ? "Waiting for acceptance": "Accepted";
					statusClass =contact.Status == 1 ? "waiting": "accepted";
					listNode = 
						'<li><a href="#">'+
			        		'<figure style="position: absolute; width:97px; text-align:center; left: 10px; margin:0"><img style="max-height: 73px;" src="https://graph.facebook.com/'+contact.FacebookUserId+'/picture?type=normal" /></figure>'+
			        		'<div style="margin-left: 110px;"><h2>'+contact.FullName  + '</h2>'+
			        		'<h3>'+contact.OriginAirportCode +' to '+contact.DestinationAirportCode+'</h3>'+
			        		'<p>'+contact.TravelDate+' By <b>'+ contact.contact+'</b> - Flight no: '+ contact.Flight+'</p>'+
			        		'<p class="'+statusClass+'">Status: '+status+'</p>'+
			        		'</div></a>'+
			        	'</li>';
			    	$(listNode).appendTo($ul);		
				});


				$content
					.append("<h3> Contacted People </h3>")
					.append($ul);

				$ul
					.listview({create: function(event, ui){}})
					.listview( "refresh" )

		},


		getTripList: function(callback){
			$.ajax({	 
	                dataType: 'jsonp',
	                async: false,
					crossDomain: true,
	                url: "http://flightcompanions.com/apiv2/getUserTrips.php?loggedinuserid="+fc.getLoggedInUserId()+"&callback=?"
			}).then(callback);
		},

		getPeopleContacted: function(callback){
			$.ajax({	 
	                dataType: 'jsonp',
	                async: true,
					crossDomain: true,
	                url: "http://flightcompanions.com/apiv2/getMyContacts.php?loggedinuserid="+fc.getLoggedInUserId()+"&callback=?"
			}).then(callback);			
		}
	};
}();