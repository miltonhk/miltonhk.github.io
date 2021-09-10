	    var geocoder;
		var map;
    
		function initialize() {
			geocoder = new google.maps.Geocoder();
			
			
			// Create an array of styles.
			var styles = [
			  {
			    "stylers": [
			      { "visibility": "on" }
			    ]
			  },{
			    "featureType": "landscape.natural",
			    "stylers": [
			      { "visibility": "simplified" },
			      { "color": "#f7f7f7" }
			    ]
			  },{
			    "featureType": "water",
			    "stylers": [
			      { "saturation": -90 },
			      { "visibility": "simplified" },
			      { "color": "#E5E3DF" }
			    ]
			  },{
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [
			      { "visibility": "simplified" },
			      { "color": "#ffffff" }
			    ]
			  },{
			    "featureType": "road.local",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      { "visibility": "off" }
			    ]
			  },{
			    "featureType": "road.local",
			    "elementType": "labels.icon",
			    "stylers": [
			      { "visibility": "off" }
			    ]
			  },{
			    "elementType": "labels.text.fill",
			    "stylers": [
			      { "visibility": "on" },
			      { "color": "#808080" }
			    ]
			  },{
			    "featureType": "road.local",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "visibility": "on" },
			      { "weight": 1 },
			      { "color": "#ffffff" }
			    ]
			  },{
			    "featureType": "poi.park",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "lightness": 90 },
			      { "color": "#e3e3e3" },
			      { "visibility": "off" }
			    ]
			  },{
			    "featureType": "transit",
			    "elementType": "geometry",
			    "stylers": [
			      { "visibility": "on" },
			      { "color": "#ffffff" }
			    ]
			  },{
			    "featureType": "road.local",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      { "visibility": "on" },
			      { "color": "#bbbbbb" }
			    ]
			  },{
			    "featureType": "landscape.man_made",
			    "elementType": "geometry",
			    "stylers": [
			      { "visibility": "on" },
			      { "lightness": 60 },
			      { "saturation": -90 },
			      { "gamma": 0.90 }
			    ]
			  }
			];
			
			var styledMap = new google.maps.StyledMapType(styles, {
				name: "Styled Map"
			});
				
			var mapOptions = {
				zoom: 13,
				scrollwheel: false,
			    panControl: false,
			    scaleControl: false,
				mapTypeControlOptions: {
				  mapTypeIds: []
				}
			};
			
			map = new google.maps.Map(document.getElementById('bra_map'), mapOptions);
			
			//Associate the styled map with the MapTypeId and set it to display.
			map.mapTypes.set('map_style', styledMap);
			map.setMapTypeId('map_style');				
			
			codeAddress();
		}

		function codeAddress() {
		
			var address = "Amsterdam, Slijkstraat";
			geocoder.geocode( { 'address': address}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					map.setCenter(results[0].geometry.location);
					var image = new google.maps.MarkerImage("media/webuse/images/map-pin.png", null, null, null, new google.maps.Size(30,45));
					var beachMarker = new google.maps.Marker({
						map: map,
						icon: image,
						title: 'worktimefun',
						position: results[0].geometry.location
					});
					
					


				} else {
					alert('Geocode was not successful for the following reason: ' + status);
				}
			});
		}
		
		function loadScript() {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAOLZM5qIGp55deXr6fJWrMA5ChM4rIzhs&sensor=true&language=nb&' +
			    'callback=initialize';
			document.body.appendChild(script);
		}
		
		window.onload = loadScript;
