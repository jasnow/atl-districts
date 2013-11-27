var map = L.map('map').setView([33.7508583802915, -84.3897199197085], 10);
		var councilMember = ["Carla Smith", "Kwanza Hall", "Ivory Lee Young, Jr.", "Cleta Winslow ", "Natalyn Mosby Archibong", "Alex Wan", "Howard Shook", "Yolanda Adrean", "Felicia A. Moore", "Clarence T. Martin", "Keisha Bottoms", "Joyce Sheperd"];
		var url = ["http://www.district1atlanta.com/", "https://www.facebook.com/District2Atlanta", "http://ivoryyoungdistrict3.com/", "http://citycouncil.atlantaga.gov/4.htm", "http://citycouncil.atlantaga.gov/5.htm", "http://www.atlantadistrict6.com/", "http://citycouncil.atlantaga.gov/shook.htm", "http://citycouncil.atlantaga.gov/members/adrean/8.htm", "http://citycouncil.atlantaga.gov/members/District9New2b.pdf", "http://citycouncil.atlantaga.gov/members/ctmartin/newsletter.pdf", "http://citycouncil.atlantaga.gov/11.htm", "http://www.joycemsheperd.com/"]
			$(document).ready(function() {
				$('#send').on('click', codeAddress);
			});
			

			L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
				maxZoom: 18,
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
			}).addTo(map);

			L.geoJson(districts).addTo(map);
			var gjlayer = L.geoJson(districts);
			
			console.log(results);
			var popup = L.popup();

			function onMapClick(e) {
				popup
					.setLatLng(e.latlng)
					.setContent("You clicked the map at " + e.latlng.toString())
					.openOn(map);
			}

			var results;

			var geocoder;
			var map;
			function initialize() {
				geocoder = new google.maps.Geocoder();
				var latlng = new google.maps.LatLng(-34.397, 150.644);
				var mapOptions = {
					zoom: 8,
					center: latlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				}
				map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			}

			function codeAddress() {
				var address = document.getElementById('address').value;
				geocoder.geocode( { 'address': address}, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						console.log(results[0].geometry.location["pb"]); // ob : ~33 pb : ~-84
						var results = leafletPip.pointInLayer([results[0].geometry.location["pb"], results[0].geometry.location["ob"]], gjlayer);
						var disNum = results[0]["feature"]["properties"]["DISTRICT"];
						$('#result').text("You are in District " + (results[0]["feature"]["properties"]["DISTRICT"]));
						$('#councilMember').text("Your council member is ");
						$('#url').attr("href", url[disNum-1]);
						$('#url').text(councilMember[disNum-1]);
					}
				});
			}
			google.maps.event.addDomListener(window, 'load', initialize);
			
			